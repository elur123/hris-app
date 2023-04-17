<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Employee;
use App\Models\Attendance;
class ClockController extends Controller
{
    
    public function index(): Response
    {
        return Inertia::render('Clock/Index');
    }

    public function store(Request $request): RedirectResponse
    {
        $employee = Employee::where('employee_key', $request->employee_key)
        ->first();

        if ($employee == null) 
        {
            
            return Redirect::back()->withErrors(['employee_key' => 'Employee not found']);
        }

        // $attendance = Attendance::where('employee_id', $employee->id)
        // ->whereDate('start_at', date('Y-m-d'))
        // ->whereNull('end_at')
        // ->get()
        // ->last();

        $attendance = Attendance::where('employee_id', $employee->id)
        ->whereDate('start_at', date('Y-m-d'))
        ->first();


        if ($attendance === null) 
        {
            
            $attendance =  Attendance::create([
                'employee_id' => $employee->id,
                'branch_id' => $employee->branch_id,
                'start_at' => date('Y-m-d H:i:s')
            ]);

            $attendance->histories()->create([
                'start_at' => date('Y-m-d H:i:s')
            ]);
        }

        else 
        {
            $history = $attendance->histories
            ->whereNull('end_at')
            ->first();

            if ($history === null)
            {
                $attendance->histories()->create([
                    'start_at' => date('Y-m-d H:i:s')
                ]);
            }
            else
            {
                $attendance->update([
                    'end_at' => date('Y-m-d H:i:s')
                ]);

                $attendance->histories()
                ->whereNull('end_at')
                ->update([
                    'end_at' => date('Y-m-d H:i:s')
                ]);
            }

        }

        $attendances = Attendance::where('employee_id', $employee->id)
        ->with('histories')
        ->whereDate('start_at', date('Y-m-d'))
        ->get()
        ->map(function($attendance) {
            
            return [
                'id' => $attendance->id,
                'start_at' => date("F j, Y, g:i a", strtotime($attendance->start_at)),
                'end_at' => $attendance->end_at != null ? date("F j, Y, g:i a", strtotime($attendance->end_at)) : 'No time out',
                'histories' => $attendance->histories->map(function($history) {
                    return [
                        'id' => $history->id,
                        'start_at' => date("F j, Y, g:i a", strtotime($history->start_at)),
                        'end_at' => $history->end_at != null ? date("F j, Y, g:i a", strtotime($history->end_at)) : 'No time out',
                    ];
                })
            ];
        });

        return Redirect::back()->with('data', $attendances[0]);
    }
}
