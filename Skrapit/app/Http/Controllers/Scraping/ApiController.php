<?php

namespace App\Http\Controllers\Scraping;

use App\Http\Controllers\Controller;
use App\Model\Laravel\Api;
use App\Model\Scraping\Intel;
use App\Model\Scraping\Quantities;

class ApiController extends Controller
{
    protected $limitedAccess = ['family', 'name', 'lithography', 'base_frequency', 'boost_frequency', 'cores', 'threads'];
    protected $key;
    protected $api;

    public function __construct(Api $api) {
        $this->key = request()->key;
        $this->api = $api->getApiByKey($this->key);
    }

    public function allName($name)
    {
        return Intel::where('name', 'LIKE', "%{$name}%")->get(['name', 'family']);
    }

    public function name($name)
    {
        if(!$this->api || !$this->key)
            return response()->json(['errors' => ['api' => ['You must provide a valid key.']]], 402);

        if(strlen($name) < 3)
            return response()->json(['errors' => ['api' => ['The name must be at least 3 characters long.']]], 402);

        if(!$this->api->isOnline())
            return response()->json(['errors' => ['api' => ['Your API is not enabled.']]], 402);

        if($this->api->remaining_uses <= 0)
            return response()->json(['errors' => ['api' => ['Your API has reached 0 usage.']]], 402);

        $this->api->decrement('remaining_uses');

        if($this->api->isFullAccess($this->key))
            return Intel::where('name', 'LIKE', "%{$name}%")->get();

        return Intel::where('name', 'LIKE', "%{$name}%")->get($this->limitedAccess);
    }

    public function family($family)
    {
        $family = Intel::where('family', $family)->get();

        if($family->isEmpty())
            return response()->json(['errors' => ['api' => ['This family of cpu doesn\'t exist.']]], 402);

        return $family;
    }

    public function allFamilies()
    {
        return Quantities::orderBy('id', 'DESC')->first();
    }

}
