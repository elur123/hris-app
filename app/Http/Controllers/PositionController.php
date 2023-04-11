<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\PositionStoreRequest;
use App\Http\Requests\PositionUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Position;
class PositionController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('Admin/Position/Index', [
            'positions' => Position::query()
            ->get()
            ->map(function($pos) {
                
                return [
                    'id' => $pos->id,
                    'label' => $pos->label,
                    'created_at' => date("F j, Y, g:i a", strtotime($pos->created_at)),
                    'updated_at' => date("F j, Y, g:i a", strtotime($pos->updated_at)),
                    'actions' => [
                        'edit' => route('positions.edit', $pos)
                    ]
                ];
            })
        ]);
    }

    public function create() : Response
    {
        return Inertia::render('Admin/Position/Create');
    }

    public function store(PositionStoreRequest $request) : RedirectResponse
    {
        Position::create([
            'label' => $request->label
        ]);

        return Redirect::route('positions.index');
    }

    public function edit(Position $position) : Response
    {
        return Inertia::render('Admin/Position/Edit', [
            'position' => $position
        ]);
    }

    public function update(PositionUpdateRequest $request, Position $position) : RedirectResponse
    {
        $position->update([
            'label' => $request->label
        ]);

        return Redirect::route('positions.index');
    }
}
