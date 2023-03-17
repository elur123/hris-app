<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Department;
class DepartmentController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Admin/Department/Index');
    }
}
