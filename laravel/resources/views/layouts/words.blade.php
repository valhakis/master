<!DOCTYPE html>
<html lang="{{ config('app.locale') || app()->getLocale() }}">
  <head>
    <meta charset="UTF-8">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>

    @include('inc.navbar')

    <div class="container-fluid">
      @yield('content')
    </div>

    @include('inc.footer')

    @yield('scripts')

  </body>
</html>
