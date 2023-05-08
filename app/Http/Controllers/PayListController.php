<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\PayList;
class PayListController extends Controller
{
    
    public function index()
    {
        $user = auth()->user();

        return Inertia::render('Employee/PayList/Index', [
            'paylists' => PayList::query()
            ->with('employee.user', 'payroll')
            ->where('employee_id', $user->employee->id)
            ->get()
            ->map(fn($pay) => [
                'id' => $pay->id,
                'employee' => $pay->employee->user->name,
                'cut_off' => date("F j, Y", strtotime($pay->payroll->from)) .' - '. date("F j, Y", strtotime($pay->payroll->to)),
                'total_days' => $pay->total_days,
                'total_hours' => $pay->total_hours,
                'overtime_hours' => $pay->overtime_hours,
                'leave_days' => $pay->leave_days,
                'total' => number_format($pay->total, 2, '.', ','),
                'actions' => [
                    'has_edit' => false
                ]
            ])
        ]);
    }
}
