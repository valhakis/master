<?php
URL::forceRootUrl('http://192.168.0.3:3000/laravel');
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

Route::get('/welcome', function () {
  return view('welcome');
});

Route::get('/hello', function() {
  return 'HELLO WORLD';
});

Route::get('/html', function() {
  return '<h1>HELLO WORLD</h1>';
});

Route::get('/about', function() {
  return view('pages.about');
});

Route::get('/users/{id}', function($id) {
  return "Welcome user with id of " . $id;
});

Route::get('/words', 'WordController@home');
Route::get('/brilliant', 'WordController@brilliant');
Route::post('/brilliant', 'WordController@post_brilliant');

Route::match(['get', 'post'], '/teemo', function() {
  return 'TEEMO IS EVIL';
});

Route::get('/users/{arg1}/{arg2}', function($arg1, $arg2) {
  return "Arguments are: $arg1 and $arg2.";
});

Route::get('/', 'PageController@home');
Route::get('/page', 'PageController@index');
Route::get('/login', 'PageController@login');

Route::get('/post', 'PostController@home');
Route::resource('posts', 'PostController');

Route::get('/test', function() {
  return "
    <form action='' method='POST'>
      ".csrf_field()."
      <label>Name: </label>
      <input type='text' name='name'>
      <button type='submit'>Submit</button>
    </form>
  ";
});

Route::post('/test', function() {
  return "THIS IS POSTED";
});
