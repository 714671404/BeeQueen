<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('todo', function () {
    return \App\User::all();
});
Route::post('todo/create', function (Request $request) {
    $data = ['title' => $request->get('title'), 'type' => 0];
    $todo = \App\User::create($data);
    return $todo;
});
Route::delete('todo/delete/{id}', function ($id) {
    $todo = \App\User::find($id);
    $todo->delete();
    return response()->json(['deleted']);
});
Route::patch('todo/update/{id}', function ($id) {
    $todo = \App\User::find($id);
    $todo->type = !$todo->type;
    $todo->save();

    return $todo;
});
Route::get('todo/{id}', function ($id) {
    return \App\User::find($id);
});