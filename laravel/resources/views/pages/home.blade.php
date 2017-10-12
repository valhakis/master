@extends('layouts.base')


@section('content')
  <h1>Home</h1>

  <a href="/laravel/welcome">Welcome</a>
  <a href="/laravel/words">Word / Words</a>

  <h2>Show all routes.</h2>
  <pre><code class="command">php artisan route:list</code></pre>

  <p>{{ $title }}</p>
@endsection


@section('scripts')

@endsection
