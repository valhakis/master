module.exports = function AuthService($http, $cookies, $rootScope, $timeout) {
  var service = {};

  service.login = function(email, password, cb) {
    $http.post('/game/api/authenticate', {
      email: email,
      password: password
    }).then(function success(response) {
      callback(response);
    });
  };

  service.setCredentials = function(email, password) {
    console.log('WHAT IS HAPPENING');
    var authdata = b64EncodeUnicode(`${email}:${password}`);
    console.log(authdata);
  };

  service.setCredentials('william.valhakis@gmail.com', 'minuparool5');

  service.clearCredentials = function() {

  };

  return service;
};

function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
