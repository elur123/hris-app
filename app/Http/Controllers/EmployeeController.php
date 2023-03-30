<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Employee;
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
        return Inertia::render('Admin/Employee/Create');
    }

    public function store() : RedirectResponse
    {

    }
}
