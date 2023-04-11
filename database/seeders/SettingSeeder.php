<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RateType;
class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RateType::truncate();

        RateType::upsert([
            ['label' => 'Daily'],
            ['label' => 'Weekly'],
            ['label' => 'Monthly']
        ], ['label']);
    }
}
