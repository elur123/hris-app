<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [ 'name', 'address', 'contact_no' ];


    public function departments()
    {
        return $this->belongsToMany(Department::class, 'department_branches', 'branch_id', 'department_id');
    }
}
