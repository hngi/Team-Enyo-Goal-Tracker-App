<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/faq', 'ContactController@faq')->name('faq');

Route::get('/contact', 'ContactController@contact')->name('contact');

Route::resource('goals', 'GoalController');
Route::resource('items', 'ItemController');

Route::get('items/{goal_id}', 'ItemController@index')->name('items.list');
Route::post('items', 'ItemController@store')->name('items.store');
Route::delete('items/{item}', 'ItemController@destroy')->name('items.destroy');
Route::get('items/{item}', 'ItemController@show')->name('items.show');
Route::put('items/{item}', 'ItemController@update')->name('items.update');

Route::get('login/google', 'Auth\LoginController@redirectToProvider');
Route::get('login/google/callback', 'Auth\LoginController@handleProviderCallback');

Route::get('/auth/redirect/{provider}', 'SocialController@redirect');
Route::get('/callback/{provider}', 'SocialController@callback');

Route::get('/auth/redirect/{provider}', 'SocialController@redirect');
Route::get('/callback/{provider}', 'SocialController@callback');

