<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuantitiesIntelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('scraping')->create('quantities_intel', function (Blueprint $table) {
            $table->id();

            $table->integer('core');
            $table->integer('xeon');
            $table->integer('xeonPhi');
            $table->integer('atom');
            $table->integer('pentium');
            $table->integer('celeron');
            $table->integer('itanium');
            $table->integer('quark');

            $table->timestamp('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('scraping')->dropIfExists('quantities_intel');
    }
}
