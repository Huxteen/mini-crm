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
  Route::post('logout', 'AppController@logout');
});


Route::prefix('company')->group(function(){
  Route::get('index', 'CompanyController@index');
  Route::post('create', 'CompanyController@store');
  Route::get('show/{id}', 'CompanyController@show');
  Route::put('update/{id}', 'CompanyController@update');
});