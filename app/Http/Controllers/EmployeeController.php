<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Employee;
use App\Models\User;
use App\Models\Branch;
use App\Models\Position;
use App\Models\RateType;
class EmployeeController extends Controller
{
    
    public function index() : Response
    {   
        $employees = Employee::query()
        ->with('user', 'branch', 'department')
        ->get()
        ->map(function ($employee) {

            return [
                'id' => $employee->id,
                'fullname' => $employee->user->name,
                'email' => $employee->user->email,
                'contact_no' => $employee->contact_no,
                'branch' => $employee->branch->name,
                'department' => $employee->department->name,
                'position' => $employee->position->label,
                'created_at' => date("F j, Y, g:i a", strtotime($employee->created_at)),
                'updated_at' => date("F j, Y, g:i a", strtotime($employee->updated_at)),
                'actions' => [
                    'edit' => route('employees.edit', $employee)
                ]
            ];
        });

        return Inertia::render('Admin/Employee/Index', [
            'employees' => $employees
        ]);
    }

    public function create() : Response
    {
        $rate_types = collect([['id' => null, 'label' => 'Select rate type']]);
        $rate_types = $rate_types->merge(RateType::query()->get());

        $branches = collect([['id' => null, 'label' => 'Select branch', 'departments' => []]]);
        $branches = $branches->merge(Branch::query()
        ->with('departments')
        ->get()
        ->map(function($branch) {
            
            $departments = $branch->departments
            ->map(function($dep) {
                return [
                    'id' => $dep->id,
                    'label' => $dep->name
                ];
            });

            return [
                'id' => $branch->id,
                'label' => $branch->name,
                'departments' => $departments
            ];
        }));

        $positions = collect([['id' => null, 'label' => 'Select position']]);
        $positions = $positions->merge(Position::all());


        return Inertia::render('Admin/Employee/Create', [
            'school_types' => [
                ['id' => 1, 'label' => 'Elementary'],
                ['id' => 2, 'label' => 'High Scool'],
                ['id' => 3, 'label' => 'College'],
                ['id' => 4, 'label' => 'Vocational']
            ],
            'rate_types' => $rate_types,
            'branches' => $branches,
            'positions' => $positions
        ]);
    }

    public function store(EmployeeStoreRequest $request) : RedirectResponse
    {

        // dd($request->all());
        $employee_key = 'EMP-'.Str::random(8);

        $user = User::create([
            'name' => $request->first_name .' '. $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($employee_key)
        ]);

        $employee = Employee::create([
            'user_id' => $user->id,
            'employee_key' => $employee_key,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'suffix' => $request->suffix,
            'date_of_birth' => $request->birth_date,
            'place_of_birth' => $request->place_of_birth,
            'current_address' => $request->address,
            'contact_no' => $request->contact_no,
            'rate' => $request->rate,
            'rate_type_id' => $request->rate_type,
            'position_id' => $request->position,
            'branch_id' => $request->branch,
            'department_id' => $request->department
        ]);

        return Redirect::route('employees.index');
    }

    public function edit(Employee $employee): Response
    {
        // Load relationship tables
        $employee->load('user', 'position', 'branch', 'department', 'rateType');

        $rate_types = collect([['id' => null, 'label' => 'Select rate type']]);
        $rate_types = $rate_types->merge(RateType::query()->get());

        $branches = collect([['id' => null, 'label' => 'Select branch', 'departments' => []]]);
        $branches = $branches->merge(Branch::query()
        ->with('departments')
        ->get()
        ->map(function($branch) {
            
            $departments = $branch->departments
            ->map(function($dep) {
                return [
                    'id' => $dep->id,
                    'label' => $dep->name
                ];
            });

            return [
                'id' => $branch->id,
                'label' => $branch->name,
                'departments' => $departments
            ];
        }));

        $positions = collect([['id' => null, 'label' => 'Select position']]);
        $positions = $positions->merge(Position::all());

        return Inertia::render('Admin/Employee/Edit', [
            'employee' => $employee,
            'school_types' => [
                ['id' => 1, 'label' => 'Elementary'],
                ['id' => 2, 'label' => 'High Scool'],
                ['id' => 3, 'label' => 'College'],
                ['id' => 4, 'label' => 'Vocational']
            ],
            'rate_types' => $rate_types,
            'branches' => $branches,
            'positions' => $positions
        ]);
    }   

    public function update(EmployeeUpdateRequest $request, Employee $employee): RedirectResponse
    {
        $employee->update([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'suffix' => $request->suffix,
            'date_of_birth' => $request->birth_date,
            'place_of_birth' => $request->place_of_birth,
            'current_address' => $request->address,
            'contact_no' => $request->contact_no,
            'rate' => $request->rate,
            'rate_type_id' => $request->rate_type,
            'position_id' => $request->position,
            'branch_id' => $request->branch,
            'department_id' => $request->department
        ]);

        $employee->user()->update([
            'name' => $request->first_name .' '. $request->last_name,
            'email' => $request->email
        ]);

        return Redirect::route('employees.index');
    }
}
