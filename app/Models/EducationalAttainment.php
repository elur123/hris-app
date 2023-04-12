<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationalAttainment extends Model
{
    use HasFactory;

    protected $fillable = [ 'employee_id', 'school_name', 'education_level', 'year_graduated' ];

    public $timestamps = false;
}
