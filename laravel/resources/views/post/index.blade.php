@extends('layouts.post')

@section('stylesheets-before')
  <link rel="stylesheet" href="/prismjs/themes/prism.css">
@endsection

@section('stylesheets')
@endsection


@section('content')
  <h2>Posts Index</h2>

  <a href="/laravel/posts/create" class="btn btn-default">Create Post</a>

  <hr>
  

  @if(count($posts) > 0)
    @foreach($posts as $post)
      <div class="well">
        <h3><a href="/laravel/posts/{{ $post->id }}">{{ $post->title }}</a></h3>
        <small>Writeen at {{ $post->created_at }}</small>
      </div>
    @endforeach
  @else
    <p>NO POSTS FOUND</p>
  @endif
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
