<?php

use Illuminate\Support\Facades\Route;


// Landing routes
Route::get('/', function () {
    return view('landing');
});


// End Landing routes
Route::get('/app', function () {
    return view('app');
});

Route::get('/{any}', function () {
    return view('app');
});
