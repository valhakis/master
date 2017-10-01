@extends('layouts.post')

@section('content')
  <a href="/laravel/posts" class="btn btn-default">Posts index</a>
  <h1>Create a post.</h1>

  {{-- 
    {!! Form::open(['action' => 'PostController@store'], 'method' => 'POST') !!}
  --}}

  {{-- 
    {!! Form::open([/*'url' => '/posts'*/ 'action' => 'PostController@store', 'method' => 'POST']) !!}

    <div class="form-group">
      {{ Form::label('title', 'Title') }}
      {{ Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'Place title here.']) }}
    </div>

    <div class="form-group">
      {{ Form::label('body', 'Content') }}
      {{ Form::textarea('body', '', ['class' => 'form-control', 'placeholder' => 'Place content here.']) }}
    </div>

    {{ Form::submit('Submit', ['class' => 'btn btn-primary']) }}

    {!! Form::close() !!}
  --}}

  <form action="http://192.168.0.3:3000/laravel/posts", method="POST">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" placeholder="Place title here." name="title">
    </div>
    <div class="form-group">
      <label for="body">Content</label>
      <textarea class="form-control" placeholder="Place content here." name="body"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
@endsection
