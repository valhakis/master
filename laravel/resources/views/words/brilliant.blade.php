@extends('layouts.words')

@section('content')
  <h1>Brilliant</h1>

  <form action="" method="POST">
    {!! csrf_field() !!}
    <button type="submit">BRILLIANT</button>
  </form>
@endsection
