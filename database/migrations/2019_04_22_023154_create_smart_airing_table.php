<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmartAiringTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('smart_airing', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('formname');
            $table->string('sensorname');
            $table->string('mode');
            $table->double('vaule');
            $table->dateTime('sendtime')->useCurrent()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('smart_airing');
    }
}
