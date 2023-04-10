<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'user_id', 
        'employee_key',
        'first_name',
        'middle_name', 
        'last_name',
        'suffix',
        'birth_date', 
        'address',
        'contact_no',
        'rate_type', 
        'rate',
        'position_id',
        'branch_id',
        'department_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
