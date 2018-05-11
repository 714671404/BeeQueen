<?php

Route::get('{path}', function () {
    return view('master');
})->where('path', '(.*)');
