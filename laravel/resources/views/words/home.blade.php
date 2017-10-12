@extends('layouts.words')

@section('content')
  <h1>Home</h1>

  <form action="/laravel/brilliant" method="POST">
    {!! csrf_field() !!}
    <button type="submit">BRILLIANT</button>
  </form>
@endsection
