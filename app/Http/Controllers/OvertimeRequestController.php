<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\OvertimeStoreRequest;
use App\Http\Requests\OvertimeUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\OvertimeRequest;
class OvertimeRequestController extends Controller
{

    public function index(): Response
    {
        $user = auth()->user();

        $overtime_requests = OvertimeRequest::query()
        ->with('employee', 'adminChecked')
        ->get()
        ->map(function ($overtime){
            
            return [
                'id' => $overtime->id,
                'employee_id' => $overtime->employee_id,
                'employee' => $overtime->employee->full_name,
                'overtime_at' => date("F j, Y", strtotime($overtime->overtime_at)),
                'time_rage' => date("g:i a", strtotime($overtime->from)).' to '. date("g:i a", strtotime($overtime->to)),
                'status_id' => $overtime->status_id,
                'status' => $overtime->status->label,
                'checked_by' => $overtime->checked_by,
                'admin_checked' => $overtime->adminChecked->name ?? 'Not yet check',
                'actions' => [
                    'edit' => route('overtimerequests.edit', $overtime)
                ]
            ];
        });

        if ($user->isEmployee()) 
        {
            $overtime_requests = collect($overtime_requests)->where('employee_id', $user->employee->id)->values();
        }
        
        return Inertia::render('Employee/OvertimeRequest/Index', [
            'overtime_requests' => $overtime_requests
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Employee/OvertimeRequest/Create');
    }

    public function store(OvertimeStoreRequest $request): RedirectResponse
    {
        OvertimeRequest::create([
            'employee_id' => auth()->user()->employee->id,
            'overtime_at' => $request->date_overtime,
            'from' => $request->from,
            'to' => $request->to,
            'notes' => $request->notes,
            'status_id' => 1
        ]);

        return Redirect::route('overtimerequests.index');
    }

    public function edit(OvertimeRequest $overtime): Response
    {
        return Inertia::render('Employee/OvertimeRequest/Edit', [
            'overtime' => $overtime,
            'actions' => [
                'can_check' => auth()->user()->isAdmin()
            ]
        ]);
    }

    public function update(OvertimeUpdateRequest $request, OvertimeRequest $overtime): RedirectResponse
    {
        $overtime->update([
            'overtime_at' => $request->date_overtime,
            'from' => $request->from,
            'to' => $request->to,
            'notes' => $request->notes,
        ]);

        return Redirect::route('overtimerequests.index');
    }

    public function checked(Request $request, OvertimeRequest $overtime): RedirectResponse
    {
        $status = $request->type === 'Approved' ? 2 : 3;
        $approvedHours = $request->type === 'Approved' ? $request->approvedHours : 0;

        $overtime->update([
            'approved_hours' => $approvedHours,
            'status_id' => $status,
            'checked_by' => auth()->user()->id
        ]);

        return Redirect::route('overtimerequests.index');
    }
}
