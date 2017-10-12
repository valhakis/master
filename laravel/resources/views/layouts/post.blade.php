<!DOCTYPE html>
<html lang="{{ config('app.locale') || app()->getLocale() }}">
  <head>
    <meta charset="UTF-8">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @yield('stylesheets-before')
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @yield('stylesheets')
  </head>
  <body>

    @include('inc.navbar')

    <div class="container-fluid">
      @include('inc.messages')

      @yield('content')
    </div>

    <div class="container-fluid">
      <h4>Footer</h4>

      <a href="/">Home</a>
    </div>

    @include('inc.footer')

    @yield('scripts')
  </body>
</html>
