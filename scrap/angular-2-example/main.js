(function(app) {

  var heroes = [
    {id: 1, name: 'Master of Keys'},
    {id: 2, name: 'Legend of Heaven'},
    {id: 3, name: 'Narco Addict'},
    {id: 4, name: 'Sweet Baby Dolphin'},
  ];

  // THE GREETING SERVICE
  app.GreetingService = function GreetingService() {}

  app.GreetingService.prototype.greet = function () {
    return 'Greeting';
  };

  // THE HELLO WORLD COMPONENT
  app.HelloWorldComponent =
    ng.core.Component({
    selector: 'hello-world',
    template: '{{greeting}} World!',
    providers: [app.GreetingService]
  })
  .Class({
    constructor: [app.GreetingService, function(greetingService) {
      this.greeting = greetingService.greet();
    }]
  });

  // THE APP COMPONENT
  app.AppComponent =
    ng.core.Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
  })
  .Class({
    constructor: function() {
      this.heroes = heroes;

      this.selectedHero = {};

      this.hero = {
        id: 15,
        name: 'Windstorm'
      };

      this.hero0 = {
        id: 26,
        name: 'Lord Snow'
      };

      this.selectHero = function(hero) {
        this.selectedHero = hero;
      };
    }
  });

  // THE APP MODULE
  app.AppModule = function AppModule() {}

  app.AppModule.annotations = [
    new ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
      declarations: [app.AppComponent, app.HelloWorldComponent],
      bootstrap: [app.AppComponent]
    })
  ]

  // THE BOOTSTRAP
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
    .platformBrowserDynamic().bootstrapModule(app.AppModule);
  });

})(window.app || (window.app = {}));

