<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [ 'label' ];

    public $timestamps = false;

    public const IS_ADMIN = 1;
    public const IS_EMPLOYEE = 1;

    /**
     * Relationship Methods
    */

    public function users()
    {
        return $this->hasMany(User::class, 'role_id', 'id');
    }

    /**
     * Accessor Methods
    */

    public function getTheNameAttribute()
    {
        return ucwords($this->attributes['label']);
    }
}
