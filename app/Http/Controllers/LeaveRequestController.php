<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\LeaveStoreRequest;
use App\Http\Requests\LeaveUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\LeaveRequest;
use App\Models\LeaveType;
class LeaveRequestController extends Controller
{
    public function index(): Response
    {
        $user = auth()->user();

        $leave_requests = LeaveRequest::query()
        ->with('employee', 'checkedBy', 'status', 'leaveType')
        ->get()
        ->map(function ($leave){
            
            return [
                'id' => $leave->id,
                'employee_id' => $leave->employee_id,
                'employee' => $leave->employee->full_name,
                'leave_range' => date("F j, Y", strtotime($leave->from)) .' - '. date("F j, Y", strtotime($leave->to)),
                'notes' => $leave->notes,
                'leave_type_id' => $leave->leave_type_id,
                'type' => $leave->leaveType->label,
                'status_id' => $leave->status_id,
                'status' => $leave->status->label,
                'admin_checked' => $leave->checkedBy->name ?? 'Not yet check',
                'actions' => [
                    'edit' => route('leaverequests.edit', $leave)
                ]
            ];
        });

        if ($user->isEmployee()) 
        {
            $leave_requests = collect($leave_requests)->where('employee_id', $user->employee->id)->values();
        }

        return Inertia::render('Employee/LeaveRequest/Index', [
            'leave_requests' => $leave_requests
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Employee/LeaveRequest/Create', ['types' => LeaveType::all()]);
    }

    public function store(LeaveStoreRequest $request): RedirectResponse
    {
        LeaveRequest::create([
            'employee_id' => auth()->user()->employee->id,
            'from' => $request->from,
            'to' => $request->to,
            'leave_type_id' => $request->type,
            'notes' => $request->notes,
            'status_id' => 1
        ]);

        return Redirect::route('leaverequests.index');
    }

    public function edit(LeaveRequest $leave): Response
    {
        return Inertia::render('Employee/LeaveRequest/Edit', [
            'types' => LeaveType::all(),
            'leave' => $leave,
            'actions' => [
                'can_check' => auth()->user()->isAdmin()
            ]
        ]);
    }

    public function update(LeaveUpdateRequest $request, LeaveRequest $leave): RedirectResponse
    {
        $leave->update([
            'from' => $request->from,
            'to' => $request->to,
            'leave_type_id' => $request->type,
            'notes' => $request->notes
        ]);

        return Redirect::route('leaverequests.index');
    }

    public function checked(Request $request, LeaveRequest $leave): RedirectResponse
    {
        $status = $request->type === 'Approved' ? 2 : 3;
        $approvedDays = $request->type === 'Approved' ? $request->approvedDays : 0;

        $leave->update([
            'approved_days' => $approvedDays,
            'status_id' => $status,
            'checked_by' => auth()->user()->id
        ]);

        return Redirect::route('leaverequests.index');
    }
}
