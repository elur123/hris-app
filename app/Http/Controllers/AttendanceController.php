<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Attendance;
class AttendanceController extends Controller
{
    public function index(): Response
    {
        $user = auth()->user();

        $attendances = Attendance::query()
        ->where('employee_id', $user->employee->id)
        ->with('employee', 'branch')
        ->get()
        ->map(function($attendance) {
            
            return [
                'id' => $attendance->id,
                'fullname' => $attendance->employee->user->name,
                'branch' => $attendance->branch->name,
                'start_at' => date("F j, Y, g:i a", strtotime($attendance->start_at)),
                'end_at' => $attendance->end_at !== null ? date("F j, Y, g:i a", strtotime($attendance->end_at)) : 'No timeout',
                'actions' => [
                    'edit' => route('attendances.edit', $attendance)
                ]
            ];
        });

        if ($user->isAdmin()) 
        {
            $attendances = Attendance::query()
            ->whereDate('start_at', date('Y-m-d'))
            ->with('employee', 'branch')
            ->get()
            ->map(function($attendance) {
                
                return [
                    'id' => $attendance->id,
                    'fullname' => $attendance->employee->user->name,
                    'branch' => $attendance->branch->name,
                    'start_at' => date("F j, Y, g:i a", strtotime($attendance->start_at)),
                    'end_at' => $attendance->end_at !== null ? date("F j, Y, g:i a", strtotime($attendance->end_at)) : 'No timeout',
                    'actions' => [
                        'edit' => route('attendances.edit', $attendance)
                    ]
                ];
            });
        }

        return Inertia::render('Admin/Attendance/Index', [
            'attendances' => $attendances
        ]);
    }

    public function store(Request $request): RedirectResponse
    {

    }

    public function edit(Attendance $attendance): Response
    {

    }

    public function update(Request $request, Attendance $attendance): RedirectResponse
    {

    }
}
