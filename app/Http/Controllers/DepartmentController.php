<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DepartmentStoreRequest;
use App\Http\Requests\DepartmentUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Department;
class DepartmentController extends Controller
{
    
    public function index() : Response
    {
        return Inertia::render('Admin/Department/Index', [
            'departments' => Department::query()
            ->get()
            ->map(function($dep) {
                
                return [
                    'id' => $dep->id,
                    'name' => $dep->name,
                    'created_at' => date("F j, Y, g:i a", strtotime($dep->created_at)),
                    'updated_at' => date("F j, Y, g:i a", strtotime($dep->updated_at)),
                    'actions' => [
                        'edit' => route('departments.edit', $dep)
                    ]
                ];
            })
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Admin/Department/Create');
    }

    public function store(DepartmentStoreRequest $request) : RedirectResponse
    {
        Department::create([
            'name' => $request->name
        ]);

        return Redirect::route('departments.index');
    }

    public function edit(Department $department) : Response
    {
        return Inertia::render('Admin/Department/Edit', [
            'department' => $department
        ]);
    }

    public function update(DepartmentUpdateRequest $request, Department $department): RedirectResponse
    {
        $department->update([
            'name' => $request->name
        ]);

        return Redirect::route('departments.index');
    }
}
