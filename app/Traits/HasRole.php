<?php

namespace App\Traits;

use App\Models\Role;
use Illuminate\Support\Str;

trait HasRole
{
    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }

    public function getRoleNameAttribute()
    {
        return $this->getRole() ? $this->getRole()->label : '';
    }

    public function getRole()
    {
        $role = $this->getAllRoles()->where('id', $this->role_id)->first();

        return $role;
    }

    public function getAllRoles()
    {
        return cache()->rememberForever('all_roles', function () {
            return Role::all();
        });
    }

    public function __call($method, $parameters){
        if (Str::startsWith($method, 'is')) {
            return strtolower($this->role_name) === strtolower(Str::snake(substr($method, 2), '-'));
        }

        return parent::__call($method, $parameters);
    }
}
