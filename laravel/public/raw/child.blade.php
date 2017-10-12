@extends('layouts.app')

@section('title', 'App Title')


@section('sidebar')
  @parent

  <p>This is appended to the main sidebar.</p>
@endsection


@section('content')
  <p>This is the body content.</p>
@endsection
