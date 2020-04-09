<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});



// API Routes For Users
Route::prefix('auth')->group(function(){
  Route::get('init', 'AppController@init');
  Route::post('login', 'AppController@login');
  Route::post('logout', 'AppController@logout');
});


// API Routes For Companies
Route::prefix('company')->group(function(){
  Route::get('index', 'CompanyController@index');
  Route::get('home', 'CompanyController@paginatedCompany');
  Route::post('create', 'CompanyController@store');
  Route::post('add/admin', 'CompanyController@storeAdmin');
  Route::get('show/{id}', 'CompanyController@show');
  Route::get('init', 'CompanyController@init');
  Route::get('edit/{id}', 'CompanyController@edit');
  Route::get('employee/{id}', 'CompanyController@showEmployee');
  Route::post('update/{id}', 'CompanyController@update');
  Route::delete('delete/{id}', 'CompanyController@destroy');
});


// API Routes For Employees
Route::prefix('employee')->group(function(){
  Route::get('index', 'EmployeeController@index');
  Route::get('init', 'EmployeeController@init');
  Route::post('create', 'EmployeeController@store');
  Route::get('show/{id}', 'EmployeeController@show');
  Route::put('update/{id}', 'EmployeeController@update');
  Route::delete('delete/{id}', 'EmployeeController@destroy');
});