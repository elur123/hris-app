<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [ 
        'user_id', 
        'employee_key',
        'first_name',
        'middle_name', 
        'last_name',
        'suffix',
        'date_of_birth',
        'place_of_birth', 
        'current_address',
        'contact_no',
        'rate_type_id', 
        'rate',
        'position_id',
        'branch_id',
        'department_id',
    ];

    /** 
    * Ancesstors functions 
    */
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $attributes['first_name'] .' '. $attributes['last_name']
        );
    }

    /** 
    * Relationship functions 
    */
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

    public function position()
    {
        return $this->belongsTo(Position::class, 'position_id');
    }

    public function rateType()
    {
        return $this->belongsTo(RateType::class, 'rate_type_id');
    }

    public function familyMembers()
    {
        return $this->hasMany(FamilyMember::class, 'employee_id');
    }

    public function educationalAttainments()
    {
        return $this->hasMany(EducationalAttainment::class, 'employee_id');
    }

    public function experiences()
    {
        return $this->hasMany(EmployeeExperience::class, 'employee_id');
    }
}
