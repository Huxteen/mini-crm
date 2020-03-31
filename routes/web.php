<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function(){
  Route::get('init', 'AppController@init');
  Route::get('manage-user', 'AppController@read');

  Route::post('login', 'AppController@login');
  Route::post('register', 'AppController@register');
  // Route::put('update-profile/{id}', 'AppController@updateProfile');
  Route::post('logout', 'AppController@logout');
});
