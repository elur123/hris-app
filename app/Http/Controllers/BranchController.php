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
        return Inertia::render('Admin/Branch/Create');
    }

    public function store(BranchStoreRequest $request) : RedirectResponse
    {
        Branch::create([
            'name' => $request->name
        ]);

        return Redirect::route('branches.index');
    }

    public function edit(Branch $branch) : Response
    {
        return Inertia::render('Admin/Branch/Edit', [
            'branch' => $branch
        ]);
    }

    public function update(BranchUpdateRequest $request, Branch $branch): RedirectResponse
    {
        $branch->update([
            'name' => $request->name
        ]);

        return Redirect::route('branches.index');
    }
}
