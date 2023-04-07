<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Employee;
use App\Models\User;
use App\Models\Branch;
class EmployeeController extends Controller
{
    
    public function index() : Response
    {
        return Inertia::render('Admin/Employee/Index', [
            'employees' => Employee::all()
        ]);
    }

    public function create() : Response
    {
        $branches = Branch::query()
        ->with('departments')
        ->get()
        ->map(function($branch) {
            return [
                'id' => $branch->id,
                'label' => $branch->name,
                'departments' => $branch->departments
            ];
        });

        return Inertia::render('Admin/Employee/Create', [
            'school_types' => [
                ['id' => 1, 'label' => 'Elementary'],
                ['id' => 2, 'label' => 'High Scool'],
                ['id' => 3, 'label' => 'College'],
                ['id' => 4, 'label' => 'Vocational']
            ],
            'rate_types' => [
                ['id' => 1, 'label' => 'Daily'],
                ['id' => 2, 'label' => 'Weekly'],
                ['id' => 3, 'label' => 'Monthly'],
            ],
            'branches' => $branches
        ]);
    }

    public function store(EmployeeStoreRequest $request) : RedirectResponse
    {
        $employee_key = 'EMP-'.Str::random(8);

        $user = User::create([
            'name' => $request->first_name .' '. $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($employee_key)
        ]);

        $employee = Employee::create([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'suffix' => $request->suffix,
            'date_of_birth' => $request->date_of_birth,
            'palce_of_birth' => $request->place_of_birth,
            'current_address' => $request->current_address,
            'contact_no' => $request->contact_no,
            'rate' => $request->rate,
            'rate_type' => $request->rate_type,
            'postion_id' => 1,
            'branch_id' => $request->branch,
            'department_id' => $request->department_id
        ]);

        return Redirect::route('employees.index');
    }
}
