$title = 'THE TINY TITLE';

return view('home', compact('title'));

// OR

return view('home')->with('title', $title);

// OR

$data = [
  'title' => 'THE TINY TITLE',
  'description' => 'Perferendis minima quae omnis dolores! Accusamus ex aliquid reprehenderit!',
  'names' => [ 'William', 'Viktor', 'Thomas' ]
];

return view('home')->with($data);

// LATER

<h1>{{ $title }}</h1>

@if(count($services) > 0)
  @foreach($names as $name)
    <p>{{ $name }}</p>
  @endforeach
@endif
