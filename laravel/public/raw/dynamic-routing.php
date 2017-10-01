Route::get('/users/{id}', function($id) {
  return "Welcome user with id of " . $id;
});

Route::get('/users/{arg1}/{arg2}', function($arg1, $arg2) {
  return "Arguments are: $arg1 and $arg2.";
});
