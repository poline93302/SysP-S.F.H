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

//連線首頁
Route::get('/','HomeController@index')->name('homepage');

//農夫設定相關URL
Route::group(['prefix'=>'former_config'],function (){
    Route::get('/show','FormerController@show')->name('former_config_show');
    Route::post('/create','FormerController@create')->name('former_config_create');
    Route::post('/update','FormerController@update')->name('former_config_update');
    Route::post('/edit','FormerController@edit')->name('former_config_edit');
    Route::post('/delete','FormerController@delete')->name('former_config_delete');
});
