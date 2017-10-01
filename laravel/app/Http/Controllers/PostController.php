<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use DB;

class PostController extends Controller
{
  public function home() {
    \URL::forceRootUrl('http://192.168.0.3:3000/laravel');   
    return view('post.home');
  }

  public function index() {
    $posts = DB::select('SELECT * FROM posts;');

    $post = Post::where('title', 'FIRST POST OF THEDAY')->get();

    $post = Post::where('title', 'FIRST POST OF THEDAY')->take(1)->get();

    $posts = Post::orderBy('title', 'desc')->paginate(1); // paginate 1 per page
    // in view {{ $posts->links() }}

    $posts = Post::orderBy('title', 'asc' || 'desc')->get();

    $posts = Post::all();
    return view('post.index')->with('posts', $posts);
  }

  public function show($id) {
    $post =  Post::find($id);
    return view('post.show')->with('post', $post);
  }

  public function create() {
    return view('post.create');
  }

  public function store(Request $request) {
    var_dump($request->all());
    var_dump($request->path());
    var_dump($request->url());
    var_dump($request->fullUrl());
    var_dump($request->input('title'));

    return;
    // return $request->input('title');
    // return $request->all();
    $this->validate($request, [
      'title' => 'required',
      'body' => 'required'
    ]);

    $post = new Post;
    $post->title = $request->input('title');
    $post->body = $request->input('body');
    $post->save();

    return redirect('/laravel/posts')->with('success', 'Post created!');
  }
}
