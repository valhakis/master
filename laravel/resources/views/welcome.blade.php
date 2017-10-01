<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/prismjs/themes/prism-dark.css">
    <link rel="stylesheet" href="/laravel/css/example.css">

    <!-- Styles -->
  </head>
  <body>

    <h1>Laravel</h1>

    <a href="/">Main Home</a>

    <a href="/laravel">Home</a>

    <h2>Info</h2>
    <p>Site runnin at [apache] as proxy at master node server [/laravel]</p>

    <p>laravel new</p>
    <p>MVC (Model View Controller)</p>

    <h4>Some what required</h4>
    <ul>
      <li>git</li>
      <li>composer</li>
      <li>web server: apache, nginx</li>
    </ul>

    <h4>What to do ?</h4>
    <ul>
      <li>basic website</li>
      <li>todo list</li>
      <li>REST API</li>
      <li>photo gallery</li>
    </ul>

    <h4>What laravel does ?</h4>
    <ul>
      <li>Route Handling</li>
      <li>Security Layer</li>
      <li>Models & DB Migrations</li>
      <li>Views / Templates</li>
      <li>Authentication</li>
      <li>Sessions</li>
      <li>Compile Assets</li>
      <li>Storage & File Management</li>
    </ul>

    <h4>Some artisan commands</h4>
    <ul>
      <li>php artisan list</li>
      <li>php artisan help-migrate</li>
      <li>php argisan make:controller TodoController</li>
      <li>php artisan make:model Todo -m</li>
      <li>php artisan make:migration add_todos_to_db -table=todos</li>
      <li>php artisan migrate</li>
      <li>php artisan tinker</li>

      <li>php artisan key:generate</li>
    </ul>

    <h4>Other things in laravel</h4>
    <ul>
      <li>Uses blade template engine</li>
    </ul>

    <h4>example</h4>
    <raw-code file="/laravel/raw/example.php" lang="php"></raw-code>

    <h4>Example Blade Layout</h4>
    <raw-code file="/laravel/raw/layout.blade.php" lang="html"></raw-code>

    <h4>Example Blade Child using Layout</h4>
    <raw-code file="/laravel/raw/child.blade.php" lang="php"></raw-code>

    <h4>Routing</h4>
    <p>
      <small>routes/web.php</small>
    </p>
    <raw-code file="/laravel/raw/routing.php" lang="php"></raw-code>

    <h4>Views</h4>
    <p>
      <small>resources/views/pages/about.blade.php</small>
      <raw-code file="/laravel/raw/aboutexample.blade.php" lang="html"></raw-code>
    </p>
    <small>routes/web.php</small>
    <raw-code file="/laravel/raw/routing-1.php" lang="php"></raw-code>

    <h4>Dynamic Routing</h4>
    <raw-code file="/laravel/raw/dynamic-routing.php" lang="php"></raw-code>

    <h4>CREATE CONTROLLER</h4>
    <small>app/Http/Controllers/PageController.php</small>
    <pre><code>php artisan make:controller PageController</code></pre>
    <raw-code file="/laravel/raw/sample-page-controller.php" lang="php"></raw-code>

    <h4>Controller Method</h4>
    <small>app/Http/Controllers/PageController.php</small>
    <raw-code file="/laravel/raw/sample-page-controller-method.php" lang="php"></raw-code>
    <raw-code file="/laravel/raw/sample-page-controller-method-route.php" lang="php"></raw-code>

    <h4>Pass data to view</h4>
    <raw-code file="/laravel/raw/pass-data-to-view.php" lang="php"></raw-code>

    <h4>Loading Assets</h4>
    <raw-code file="/laravel/raw/loading-assets.php" lang="php"></raw-code>

    <h4>Run node development</h4>
    <pre><code>npm run dev</code></pre>

    <div class="flex-center position-ref full-height">
      @if (Route::has('login'))
        <div class="top-right links">
          @auth
          <a href="{{ url('/home') }}">Home</a>
        @else
          <a href="{{ route('login') }}">Login</a>
          <a href="{{ route('register') }}">Register</a>
        @endauth
      </div>
    @endif
  </div>

  <script src="/prismjs/prism.js" data-manual></script>
  <script src="/prismjs/components/prism-c.js"></script>
  <script src="/prismjs/components/prism-cpp.js"></script>
  <script src="/prismjs/components/prism-php.js"></script>
  <script src="/prismjs/components/prism-haml.js"></script>
  <script src="/prismjs/components/prism-php-extras.js"></script>
  <script src="/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"></script>
  <script src="/laravel/js/raw.js"></script>
</body>
</html>
