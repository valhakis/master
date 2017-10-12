var app = angular.module('app', []);

app.run(function run($rootScope) {
  $rootScope.startedAt = null;
  $rootScope.remaining = null;
});

app.config(function config($interpolateProvider) {
  $interpolateProvider.startSymbol('<%').endSymbol('%>');
});

var challenge = {
  scope: null,
  intervalId: null,
  started: false
};

challenge.getStartedAt = function(cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(this.responseText);
    }
  };
  xhr.open('GET', '/startedAt', true);
  xhr.send(null);
};

challenge.start = function() {
  var $rootScope = angular.element(document.body).injector().get('$rootScope');
  challenge.scope = $rootScope;

  this.started = true;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      challenge.getStartedAt(function(data) {
        data = JSON.parse(data);
        var startedAt = new Date(data.startedAt);
        $rootScope.$apply(function() {
          $rootScope.startedAt = new Date(startedAt);
          challenge.startedAt = $rootScope.startedAt;
          challenge.intervalId = setInterval(challenge.update, 1000);
        });
      });

    }
  };
  xhr.open('GET', '/start', true);
  xhr.send(null);
};

challenge.getRemaining = function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var remaining = data.remaining;
      challenge.scope.$apply(function() {
        challenge.scope.remaining = remaining;
      });
    }
  };
  xhr.open('GET', '/remaining', true);
  xhr.send(null);
};

challenge.update = function() {
  challenge.getRemaining(function(remaining) {
    console.log(remaining);
  });
};
