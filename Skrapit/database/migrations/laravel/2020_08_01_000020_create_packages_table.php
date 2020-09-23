<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->float('price');
            $table->integer('max_uses');
            $table->integer('max_api');
            $table->integer('days');
            $table->boolean('graphics')->default(true);
            $table->boolean('quota_alert')->default(true);
            $table->boolean('full_access')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
}
