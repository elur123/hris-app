<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\Employee;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Employee::truncate();
        
        $user = User::create([
            'name' => 'Admin Admin',
            'email' => 'dev@gmail.com',
            'password' => Hash::make('developer'),
            'role_id' => 1
        ]);

        Employee::create([
            'user_id' => $user->id,
            'employee_key' => 'ADM-0000',
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'rate' => 0,
            'rate_type_id' => 1,
            'position_id' => 1,
            'branch_id' => 1,
            'department_id' => 1
        ]);
    }
}
