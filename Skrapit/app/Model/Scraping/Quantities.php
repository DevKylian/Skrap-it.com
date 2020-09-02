<?php

namespace App\Model\Scraping;

use Illuminate\Database\Eloquent\Model;

class Quantities extends Model
{
    protected $connection = "scraping";
    protected $table = "quantities_intel";
    
    protected $hidden = ['id', 'created_at'];
}
