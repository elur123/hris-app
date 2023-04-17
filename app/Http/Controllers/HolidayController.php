<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\HolidayStoreRequest;
use App\Http\Requests\HolidayUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Holiday;
class HolidayController extends Controller
{
    
    public function index(): Response
    {
        return Inertia::render('Admin/Holidays/Index', [
            'holidays' => Holiday::query()
            ->get()
            ->map(function($holiday) {
                
                return [
                    'id' => $holiday->id,
                    'name' => $holiday->name,
                    'month' => $holiday->month,
                    'range' => $holiday->from . '-' . $holiday->to,
                    'type' => $holiday->type,
                    'rate' => $holiday->rate .'%',
                    'created_at' => date("F j, Y, g:i a", strtotime($holiday->created_at)),
                    'updated_at' => date("F j, Y, g:i a", strtotime($holiday->updated_at)),
                    'actions' => [
                        'edit' => route('holidays.edit', $holiday)
                    ]
                ];
            })
        ]);
    }

    public function create(): Response
    {
        $months  = [
            ['id' => 'jan', 'label' => 'January'],
            ['id' => 'feb', 'label' => 'February'],
            ['id' => 'mar', 'label' => 'March'],
            ['id' => 'apr', 'label' => 'April'],
            ['id' => 'may', 'label' => 'May'],
            ['id' => 'jun', 'label' => 'Jun'],
            ['id' => 'jul', 'label' => 'July'],
            ['id' => 'aug', 'label' => 'August'],
            ['id' => 'sep', 'label' => 'September'],
            ['id' => 'oct', 'label' => 'October'],
            ['id' => 'nov', 'label' => 'November'],
            ['id' => 'dec', 'label' => 'December'],
        ];

        return Inertia::render('Admin/Holidays/Create', [
            'months' => $months
        ]);
    }

    public function store(HolidayStoreRequest $request): RedirectResponse
    {  
        Holiday::create([
            'slug' => strtolower($request->month),
            'name' => $request->name,
            'month' => $request->month,
            'from' => $request->from,
            'to' => $request->to,
            'type' => $request->type,
            'rate' => $request->rate
        ]);

        return Redirect::route('holidays.index');
    }

    public function edit(Holiday $holiday): Response
    {

        $months  = [
            ['id' => 'jan', 'label' => 'January'],
            ['id' => 'feb', 'label' => 'February'],
            ['id' => 'mar', 'label' => 'March'],
            ['id' => 'apr', 'label' => 'April'],
            ['id' => 'may', 'label' => 'May'],
            ['id' => 'jun', 'label' => 'Jun'],
            ['id' => 'jul', 'label' => 'July'],
            ['id' => 'aug', 'label' => 'August'],
            ['id' => 'sep', 'label' => 'September'],
            ['id' => 'oct', 'label' => 'October'],
            ['id' => 'nov', 'label' => 'November'],
            ['id' => 'dec', 'label' => 'December'],
        ];
        
        return Inertia::render('Admin/Holidays/Edit', [
            'months' => $months,
            'holiday' => $holiday
        ]);
    }

    public function update(HolidayUpdateRequest $request, Holiday $holiday): RedirectResponse
    {
        $holiday->update([
            'slug' => strtolower($request->month),
            'name' => $request->name,
            'month' => $request->month,
            'from' => $request->from,
            'to' => $request->to,
            'type' => $request->type,
            'rate' => $request->rate
        ]);

        return Redirect::route('holidays.index');
    }
}
