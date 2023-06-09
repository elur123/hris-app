<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

use App\Models\Branch;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Attendance;
use App\Models\OvertimeRequest;
use App\Models\LeaveRequest;
use App\Models\Payroll;
use App\Models\PayList;
class LandingPageController extends Controller
{
    
    public function index()
    {   
        $user = auth()->user();
        
        $attendance_log = Attendance::where('employee_id', $user->employee->id)
        ->whereDate('start_at', date('Y-m-d'))
        ->get()
        ->map(fn($attendance) => [
            'id' => $attendance->id,
            'sign_in' => date('H:i', strtotime($attendance->start_at)),
            'sign_out' => !empty($attendance->end_at) ? date('H:i', strtotime($attendance->end_at)) : null ,
        ]);

        $data = [
            'branch_count' => Branch::all()->count(),
            'department_count' => Department::all()->count(),
            'employee_count' => Employee::all()->count(),
            'attendance_count' => Attendance::query()->whereDate('start_at', date('Y-m-d'))->count(),
            'overtime_count' => OvertimeRequest::all()->count(),
            'leave_count' => LeaveRequest::all()->count(),
            'payroll_count' => Payroll::all()->count(),
            'attendance_log' => collect($attendance_log)->first()
        ];

        if ($user->isEmployee())
        {
            $data = [
                'attendance_count' => Attendance::query()->where('employee_id', $user->employee->id)->count(),
                'overtime_count' => OvertimeRequest::query()->where('employee_id', $user->employee->id)->count(),
                'leave_count' => LeaveRequest::query()->where('employee_id', $user->employee->id)->count(),
                'attendance_log' => collect($attendance_log)->first(),
                'total_pay' => number_format(PayList::query()->where('employee_id', $user->employee->id)->sum('total'), 2, '.', ',')
            ];
        }

        return Inertia::render('Dashboard', $data);
    }
}
