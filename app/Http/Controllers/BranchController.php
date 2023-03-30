<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\BranchStoreRequest;
use App\Http\Requests\BranchUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Branch;
use App\Models\Department;
class BranchController extends Controller
{
    
    public function index() : Response
    {
        return Inertia::render('Admin/Branch/Index', [
            'branches' => Branch::query()
            ->get()
            ->map(function($branch) {
                
                return [
                    'id' => $branch->id,
                    'name' => $branch->name,
                    'address' => $branch->address,
                    'contact_no' => $branch->contact_no,
                    'departments_count' => $branch->departments()->count(),
                    'created_at' => date("F j, Y, g:i a", strtotime($branch->created_at)),
                    'updated_at' => date("F j, Y, g:i a", strtotime($branch->updated_at)),
                    'actions' => [
                        'edit' => route('branches.edit', $branch)
                    ]
                ];
            })
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Admin/Branch/Create', [
            'departments' => Department::all()
        ]);
    }

    public function store(BranchStoreRequest $request) : RedirectResponse
    {
        $branch = Branch::create([
            'name' => $request->name,
            'address' => $request->address,
            'contact_no' => $request->contact_no
        ]);

        $branch->departments()->sync($request->departments);

        return Redirect::route('branches.index');
    }

    public function edit(Branch $branch) : Response
    {
        $branch->load('departments');
        return Inertia::render('Admin/Branch/Edit', [
            'departments' => Department::all(),
            'branch' => $branch
        ]);
    }

    public function update(BranchUpdateRequest $request, Branch $branch): RedirectResponse
    {
        $branch->update([
            'name' => $request->name,
            'address' => $request->address,
            'contact_no' => $request->contact_no
        ]);

        $branch->departments()->sync($request->departments);

        return Redirect::route('branches.index');
    }
}
