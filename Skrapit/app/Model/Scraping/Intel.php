<?php

namespace App\Model\Scraping;

use Illuminate\Database\Eloquent\Model;

class Intel extends Model
{
    protected $connection = "scraping";
    protected $table = "cpus_intel";

    protected $hidden = ['id', 'url', 'created_at'];

}
