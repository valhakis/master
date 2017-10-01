@extends('layouts.post')

@section('content')
  <h1>SINGLE POST</h1>

  <a href="/laravel/posts" class="btn btn-default">Go Back</a>

  <h2>{{ $post->title }}</h2>

  <small>Wirren at {{ $post->created_at }}</small>

  <hr>

  <p>{{ $post->body }}</p>
@endsection
