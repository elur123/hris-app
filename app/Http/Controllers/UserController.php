<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\User;
use App\Models\Branch;
use App\Models\Position;
use App\Models\RateType;
use App\Models\Employee;
class UserController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Admin/User/Index', [
            'users' => User::query()
            ->with('role')
            ->get()
            ->map(fn($user) => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role->label,
                'created_at' => date("F j, Y, g:i a", strtotime($user->created_at)),
                'updated_at' => date("F j, Y, g:i a", strtotime($user->updated_at)),
                'actions' => [
                    'edit' => route('users.edit', $user)
                ]
            ])
        ]); 
    }

    public function create()
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

        return Inertia::render('Admin/User/Create', [
            'rate_types' => $rate_types,
            'branches' => $branches,
            'positions' => $positions,
            'password_generated' => Str::random(8)
        ]);
    }

    public function store(UserStoreRequest $request)
    {
        $employee_key = 'EMP-'.Str::random(4);

        $user = User::create([
            'name' => $request->first_name .' '. $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => 1
        ]);

        $employee = Employee::create([
            'user_id' => $user->id,
            'employee_key' => $employee_key,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'rate' => $request->rate,
            'rate_type_id' => $request->rate_type,
            'position_id' => $request->position,
            'branch_id' => $request->branch,
            'department_id' => $request->department
        ]);

        return Redirect::route('users.index');
    }

    public function edit(User $user)
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

        $user->load('employee.branch', 'employee.department', 'employee.position', 'employee.rateType');
        return Inertia::render('Admin/User/Edit', [
            'user' => $user,
            'rate_types' => $rate_types,
            'branches' => $branches,
            'positions' => $positions,
            'password_generated' => Str::random(8)
        ]);
    }

    public function update(UserUpdateRequest $request, User $user)
    {

        $user->update([
            'name' => $request->first_name .' '. $request->last_name,
            'email' => $request->email
        ]);

        if (!empty($request->password)) 
        {
            $user->update([
                'password' => Hash::make($request->password) 
            ]);
        }

        $user->employee->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'rate' => $request->rate,
            'rate_type_id' => $request->rate_type,
            'position_id' => $request->position,
            'branch_id' => $request->branch,
            'department_id' => $request->department
        ]);

        

        return Redirect::route('users.index');
    }
}