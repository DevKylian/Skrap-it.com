<?php

use Illuminate\Support\Facades\Route;

Route::prefix('intel')->group(function () {

    /*
     * ex : i9-10980XE, i9-7900X ...
     * return only the name for all cpus
     * */
    Route::get('all-name/{name}', 'Scraping\ApiController@allName');

    /*
     * ex : i9-10980XE, i9-7900X ...
     * return all specs for one cpu
     * */
    Route::get('name/{name}', 'Scraping\ApiController@name');

    /*
    * return all families (core, atom, xeon ...)
    * */
    Route::get('family', 'Scraping\ApiController@allFamilies');

    /*
    * ex : core, atom, xeon ...
    * return all specs for all cpus of the selected range
    * */
    Route::get('family/{family}', 'Scraping\ApiController@family');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('{key}', 'Laravel\ApiController@api');
        Route::post('create', 'Laravel\ApiController@createApi');
        Route::post('delete/{id}', 'Laravel\ApiController@deleteApi');
        Route::post('toggle/{id}', 'Laravel\ApiController@toggleApi');
    });
});


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('request-activation','Laravel\AuthController@requestActivation');
    Route::post('activate/{token}','Laravel\AuthController@activate');

    Route::post('request-reset-password','Laravel\AuthController@requestResetPassword');
    Route::post('reset-password/{token}','Laravel\AuthController@resetPassword');

    Route::post('login', 'Laravel\AuthController@login');
    Route::post('register', 'Laravel\AuthController@register');
    Route::post('refresh', 'Laravel\AuthController@refresh');
    Route::post('checkToken', 'Laravel\AuthController@checkToken');

    Route::group(['middleware' => 'auth'], function(){
        Route::post('edit-profile', 'Laravel\UserController@editProfile');
        Route::post('edit-password', 'Laravel\UserController@editPassword');
        Route::post('logout', 'Laravel\AuthController@logout');
        Route::post('me', 'Laravel\AuthController@me');
        Route::get('my', 'Laravel\ApiController@myApis');
        Route::post('subscribe-package', 'Laravel\PackageController@subscribePackage');
    });

});
