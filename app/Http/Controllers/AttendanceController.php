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
        return Inertia::render('Admin/Attendance/Index', [
            'attendances' => Attendance::query()
            ->with('employee', 'branch')
            ->get()
            ->map(function($attendance) {
                
                return [
                    'id' => $attendance->id,
                    'fullname' => $attendance->employee->user->name,
                    'branch' => $attendance->branch->name,
                    'start_at' => date("F j, Y, g:i a", strtotime($attendance->start_at)),
                    'end_at' => date("F j, Y, g:i a", strtotime($attendance->end_at)),
                    'actions' => [
                        'edit' => route('attendances.edit', $attendance)
                    ]
                ];
            })
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
