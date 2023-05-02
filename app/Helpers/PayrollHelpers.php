<?php


use App\Models\OvertimeRequest;
use App\Models\LeaveRequest;
/**
 * 
 * Return Employee sum working hours
 */

if (! function_exists('sum_working_hours')) 
{
    function sum_working_hours($data)
    {
        $h = 0;

        foreach ($data as $value) {
            $h += doubleval($value['working_hours']);
        }

        return $h;
    }
}

/**
 * 
 * Return Employee approved overtime hours
 */

if (! function_exists('get_overtime_hours')) 
{
    function get_overtime_hours($employee_id, $from, $to)
    {
        $overtime = OvertimeRequest::where('employee_id', $employee_id)
        ->where('status_id', 2)
        ->whereDate('overtime_at', '>=', $from)
        ->whereDate('overtime_at', '<=', $to)
        ->pluck('approved_hours')
        ->sum();

        return $overtime;
    }
}

/**
 * 
 * Return Employee approved leave days
 */

 if (! function_exists('get_leave_hours')) 
 {
     function get_leave_hours($employee_id, $from, $to)
     {
         $leave = LeaveRequest::where('employee_id', $employee_id)
         ->where('status_id', 2)
         ->whereDate('from', '>=', $from)
         ->whereDate('to', '<=', $to)
         ->pluck('approved_days')
         ->sum();
 
         return $leave;
     }
 }
