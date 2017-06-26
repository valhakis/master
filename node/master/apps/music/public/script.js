var handlebars = Handlebars;
var app = angular.module('app', []);

var api = '/apps/music/api';

function err(res) {
  console.log(res.data);
}

app.config(function() {

});

app.controller('music', function music($scope, $http) {
  /*
  $scope.music = [
    {
      "src": "music/good-for-you.mp3",
      "type": "audio/mp3"
    },
    {
      "src": "music/Passanger.mp3",
      "type": "audio/mp3"
    }
  ];
  */

  $scope.update = function() {
    $http.get(api + '/music').then(function(res) {
      $scope.music = res.data;
    }, err);
  };

  $scope.update();
});

app.directive('music', function () {
  return {
    template: ` `,
    link: function(scope, elem, attrs) {
      var list = [];
      var source = `
        <h2>music</h2>
        <p>example</p>
        {{#each music}}
        <audio class="audio" controls>
          <source src="{{src}}" type="{{type}}"></source>
        </audio>
        {{/each}}
      `;
      var template = handlebars.compile(source);
      function ended() {
        if (this.next >= list.length) {
          list[0].play();
        } else {
          list[this.next].play();
        }
      };
      function loadedmeta() {
        // this.currentTime = this.duration - 1;
      }
      function play() {
        for (var x=0; x<list.length; x++)
        {
          if (x != this.index) {
            list[x].pause();
          } 
        }
      }
      scope.$watch('music', function(newValue) {
        elem.html(template({music: scope.music}));
        list = elem[0].querySelectorAll('.audio');
        list.forEach(function(audio, index) {
          // if (index == 0) audio.play();
          audio.addEventListener('loadedmetadata', loadedmeta);
          audio.index = index;
          audio.next = index + 1;
          audio.addEventListener('ended', ended);
          audio.addEventListener('play', play);
        });
      });
    }
  };
});

app.directive('musicUpload', function() {
  return {
    template: `
      <form class="form-1 loading" ng-submit="upload(url)">
        <h2>music uplaod</h2>
        <div>
          <input type="url" ng-model="url">
          <button type="submit">upload</button>
        </div>
      </form>
      <div ng-if="loading" class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    `,
    controller: function($scope, $http) {

      $scope.upload = function(url) {
        $scope.url = '';
        $scope.loading = true;
        $http.put(`${api}/music/upload`, {url: url}).then(function(res) {
          $scope.loading = false;
          console.log(res.data);
          $scope.update();
        }, err);
      };
    },
    link: function(scope, elem, attrs) {

    }
  };
});
