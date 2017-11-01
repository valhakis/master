(function(app) {

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
  })
  .Class({
    constructor: function() {

    }
  });

  // THE APP MODULE
  app.AppModule = function AppModule() {}

  app.AppModule.annotations = [
    new ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule],
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

