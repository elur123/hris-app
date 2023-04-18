<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Status;
class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        Status::truncate();

        Status::upsert([
            ['label' => 'Pending'],
            ['label' => 'Approved'],
            ['label' => 'Disapproved']
        ], ['label']);
    }
}
