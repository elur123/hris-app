<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeExperience extends Model
{
    use HasFactory;

    protected $fillable = [ 'employee_id', 'company_name',  'position', 'start_at', 'end_at' ];

    public $timestamps = false;
}
