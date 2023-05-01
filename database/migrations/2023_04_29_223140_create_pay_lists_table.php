<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pay_lists', function (Blueprint $table) {
            $table->id();
            $table->integer('payroll_id');
            $table->integer('employee_id');
            $table->double('total_days', 5, 2);
            $table->double('total_hours', 5, 2);
            $table->double('total_absent', 5, 2);
            $table->double('sub_total', 10, 2);
            $table->double('total_deductions', 10, 2);
            $table->double('total', 10, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pay_lists');
    }
};
