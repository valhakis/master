@extends('layouts.post')

@section('stylesheets-before')
  <link rel="stylesheet" href="/prismjs/themes/prism.css">
@endsection

@section('stylesheets')
@endsection


@section('content')
  <h1>Post Home</h1>

  <a href="/laravel/posts">Posts Index</a>

  <h3>1. Create Post Controller.</h3>
  <pre><code class="command">php artisan make:controller PostController</code></pre>
  <h4>OR</h4>
  <pre><code class="command">php artisan make:controller PostController --resource</code></pre>

  <h3>2. Create Model With Migration</h3>
  <pre><code class="command">php artisan make:model Post -m</code></pre>
  <pre><code>app/Post.php</code></pre>
  <raw-code file="/laravel/raw/post/model.php" lang="php"></raw-code>
  <h4>Migration</h4>
  <pre><code>database/migrations/...create_posts_table.php</code></pre>
  <raw-code file="/laravel/raw/post/migration.php" lang="php"></raw-code>
  <h4>Mysql String Length Error</h4>
  <pre><code>app/Providers/AppServiceProvider.php</code></pre>
  <raw-code file="/laravel/raw/post/mysql.php" lang="php"></raw-code>

  <h3>3. Run the migrations.</h3>
  <pre><code class="command">php artisan migrate</code></pre>

  <h3>4. Tinker</h3>
  <pre><code class="command">php artisan tinker</code></pre>
  <pre><code class="command">App\Post::count()</code></pre>
  <pre><code class="command">$post = new App\Post();</code></pre>
  <pre><code class="command">$post->title = 'FIRST POST';</code></pre>
  <pre><code class="command">$post->body = 'FIRST POST BODY';</code></pre>
  <pre><code class="command">$post->save();</code></pre>

  <h3>5. Controller set up.</h3>
  <h4>Resource Methods</h4>
  <ul>
    <li>index - all posts</li>
    <li>create</li>
    <li>store</li>
    <li>edit</li>
    <li>update</li>
    <li>show - show single post</li>
    <li>destroy - remove post</li>
  </ul>

  <h3>6. Post Routes.</h3>
  <raw-code file="/laravel/raw/post/routes.php" lang="php"></raw-code>
  <pre><code class="command">php artisan route:list</code></pre>

  <h3>7. Laravel Form Collective.</h3>
  <h4>Installation</h4>
  <pre><code class="command">composer require 'laravelcollective/html'</code></pre>
  <raw-code file="/laravel/raw/post/collective.php" lang="php"></raw-code>

@endsection


@section('scripts')
  <script src="/prismjs/prism.js" data-manual></script>
  <script src="/prismjs/components/prism-c.js"></script>
  <script src="/prismjs/components/prism-cpp.js"></script>
  <script src="/prismjs/components/prism-php.js"></script>
  <script src="/prismjs/components/prism-haml.js"></script>
  <script src="/prismjs/components/prism-php-extras.js"></script>
  <script src="/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"></script>
  <script src="/laravel/js/raw.js"></script>
@endsection
