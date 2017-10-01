<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WordController extends Controller
{
  public function brilliant() {
    return view('words.brilliant');
  }
  public function post_brilliant(Request $request) {
    $request->setTrustedProxies([$request->getClientIp()]);
    return 'POSTED BRILLIANT';
  }
  public function home() {
    return view('words.home');
  }
}
