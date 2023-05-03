<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\PayrollStoreRequest;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Payroll;
use App\Models\Branch;
use App\Models\Attendance;
use App\Models\RateType;
class PayrollController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin/Payroll/Index', [
            'payrolls' => Payroll::query()
            ->with('branch', 'adminPrepared', 'adminChecked', 'status', 'list')
            ->get()
            ->map(function ($payroll){
                
                return [
                    'id' => $payroll->id,
                    'cut_off' =>  date("F j, Y", strtotime($payroll->from)) .' - '. date("F j, Y", strtotime($payroll->to)),
                    'branch' => $payroll->branch->name,
                    'total_pay' => number_format($payroll->total_pay, 2, '.', ','),
                    'status_id' => $payroll->status_id,
                    'status' => $payroll->status->label,
                    'admin_prepared' => $payroll->adminPrepared->name,
                    'admin_checked' => $payroll->adminChecked->name ?? 'Not yet check',
                    'actions' => [
                        'edit' => route('payrolls.edit', $payroll)
                    ]
                ];
            })
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Payroll/Create', [
            'branches' => Branch::all()
            ->map(fn($branch) => [
                'id' => $branch->id,
                'label' => $branch->name
            ])
        ]);
    }

    public function generate(PayrollStoreRequest $request)
    {
        // Get Attendance data and groupby employee.
        $data = Attendance::query()
        ->with('employee.user', 'employee.department', 'branch')
        ->where('branch_id', $request->branch)
        ->whereDate('start_at', '>=', $request->from)
        ->whereDate('end_at', '<=', $request->to)
        ->get()
        ->map(fn($attendance, $key) => [
            'employee_id' =>  $attendance['employee_id'],
            'employee' => $attendance['employee']['user']['name'],
            'rate' =>  $attendance['employee']['rate'],
            'rate_type' => $attendance['employee']['rate_type_id'],
            'department' => $attendance['employee']['department']['name'],
            'working_hours' => get_date_time_difference($attendance['start_at'], $attendance['end_at'])
        ])
        ->groupBy('employee')
        ->values()
        ->all();
        
        // Sum all the working hours
        $new_data = collect($data)
        ->map(fn($d, $key) => [
            'employee_id' => $d[0]['employee_id'],
            'employee' => $d[0]['employee'],
            'department' => $d[0]['department'],
            'rate' => $d[0]['rate_type'] == RateType::IS_DAILY ? doubleval($d[0]['rate']) / 8 
            : ($d[0]['rate_type'] == RateType::IS_WEEKLY ? (doubleval($d[0]['rate']) / 7 ) / 8 : ((doubleval($d[0]['rate']) / 4) / 7) / 8),
            'working_hours' => sum_working_hours($d),
            'overtime_hours' => get_overtime_hours($d[0]['employee_id'], $request->from, $request->to),
            'leave_days' => get_leave_hours($d[0]['employee_id'], $request->from, $request->to)
        ]);

        // Create new payroll
        $payroll = Payroll::create([
            'from' => $request->from,
            'to' => $request->to,
            'total_pay' => 0,
            'branch_id' => $request->branch,
            'status_id' => 1,
            'prepared_by' => auth()->user()->id
        ]);

        // Create pay lists for employees
        collect($new_data)
        ->each(function($pay) use($payroll) {

            $sub_total = doubleval($pay['rate']) * doubleval($pay['working_hours']);
            $total = doubleval($sub_total) + (doubleval($pay['rate']) * doubleval($pay['overtime_hours'])) + (doubleval($pay['rate']) * (doubleval($pay['leave_days']) * 8));
            $payroll->list()->create([
                'payroll_id' => $payroll->id,
                'employee_id' => $pay['employee_id'],
                'hours_rate' => $pay['rate'],
                'total_days' => doubleval($pay['working_hours']) / 8,
                'total_hours' => $pay['working_hours'],
                'overtime_hours' => $pay['overtime_hours'],
                'leave_days' => $pay['leave_days'],
                'total_absent' => 0,
                'sub_total' => $sub_total,
                'total_deductions' => 0,
                'total' => $total
            ]);
        });

        // Update total pay
        $total_pay = $payroll->list()
        ->pluck('total')
        ->sum();

        $payroll->update([
            'total_pay' => $total_pay
        ]);
        
        return Redirect::route('payrolls.index');
    }

    public function check(Payroll $payroll)
    {
        $payroll->load('list', 'branch', 'adminPrepared', 'status');
        $payroll->list->load('employee');
        
        return Inertia::render('Admin/Payroll/Check', [
            'payroll' => $payroll
        ]);
    }
}
