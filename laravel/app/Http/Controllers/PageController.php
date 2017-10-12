<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
  public function index() {
    // return 'THIS IS INDEX PAGE';
    return view('pages.index');
  }
  public function home() {
    $title = 'TINY TITLE';
    return view('pages.home', compact('title'));
  }
  public function login() {
    return view('pages.login');
  }
}
