<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\LeaveType;
class LeaveTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LeaveType::truncate();

        LeaveType::upsert([
            ['label' => 'Privilege '],
            ['label' => 'Casual '],
            ['label' => 'Sick '],
            ['label' => 'Maternity '],
            ['label' => 'Marriage '],
            ['label' => 'Paternity '],
            ['label' => 'Bereavement'],
            ['label' => 'Compensatory Off'],
            ['label' => 'Loss of Pay Leave'],
        ], ['label']);
    }
}
