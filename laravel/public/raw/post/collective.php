// config/app.js

'providers' => [
  // ...
  Collective\Html\HtmlServiceProvider::class,
  // ...
],

'aliases' => [
  // ...
  'Form' => Collective\Html\FormFacade::class,
  'Html' => Collective\Html\HtmlFacade::class,
  // ...
],
