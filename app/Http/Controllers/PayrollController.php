<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Payroll;
use App\Models\Branch;
use App\Models\Attendance;
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
                    'total_pay' => $payroll->total_pay,
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

    public function generate(Request $request)
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
            'working_hours' => sum_working_hours($d),
            'overtime_hours' => get_overtime_hours($d[0]['employee_id'], $request->from, $request->to),
            'leave_days' => get_leave_hours($d[0]['employee_id'], $request->from, $request->to)
        ]);
        
        return json_encode($new_data);
    }
}
