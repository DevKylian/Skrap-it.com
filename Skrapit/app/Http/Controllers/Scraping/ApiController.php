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

    public function name($name)
    {
        if(!$this->api || !$this->key)
            return response()->json(['error' => true, 'message' => 'You must provide a valid key.']);

        if(strlen($name) < 3)
            return response()->json(['error' => true, 'message' => 'The name must be at least 3 characters long.']);

        if($this->api->remaining_uses <= 0)
            return response()->json(['error' => true, 'message' => 'Your API has reached 0 usage.']);

        if(!$this->api->isActive())
            return response()->json(['error' => true, 'message' => 'Your API is not enabled.']);

        $this->api->update(['remaining_uses' => $this->api->remaining_uses - 1]);

        if($this->api->isFullAccess($this->key))
            return Intel::where('name', 'LIKE', "%{$name}%")->get();

        return Intel::where('name', 'LIKE', "%{$name}%")->get($this->limitedAccess);
    }

    public function family($family)
    {
        return Intel::where('family', 'LIKE', "%{$family}%")->get();
    }

    public function allFamilies()
    {
        return Quantities::orderBy('id', 'DESC')->first();
    }

}
