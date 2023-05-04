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
class LandingPageController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Dashboard', [
            'branch_count' => Branch::all()->count(),
            'department_count' => Department::all()->count(),
            'employee_count' => Employee::all()->count(),
            'attendance_count' => Attendance::all()->count(),
            'overtime_count' => OvertimeRequest::all()->count(),
            'leave_count' => LeaveRequest::all()->count(),
            'payroll_count' => Payroll::all()->count()
        ]);
    }
}
