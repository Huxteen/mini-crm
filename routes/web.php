<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function(){
  Route::get('init', 'AppController@init');
  
  Route::post('login', 'AppController@login');
  Route::post('register', 'AppController@register');
  Route::post('logout', 'AppController@logout');
});
