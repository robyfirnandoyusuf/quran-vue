<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 */
Route::group(['prefix'=>'v1','as'=>'surah.'], function(){
    Route::get('get-surah', [
        'as' => 'get-surah',
        'uses' => 'Api\v1\SuratController@index'
    ]);

    Route::get('get-surah/{nomor}', [
        'as' => 'get-surah-by-nomor',
        'uses' => 'Api\v1\SuratController@show'
    ]);

    Route::get('get-tafsir/{nomor}', [
        'as' => 'get-tafsir-by-nomor',
        'uses' => 'Api\v1\SuratController@tafsir'
    ]);
});