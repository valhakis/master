webpackJsonp([0],Array(22).concat([
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-vertical-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.todos\\\"\\u003ETodos.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.node\\\"\\u003ENode.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.sections\\\"\\u003ESections.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.programmingLanguages\\\"\\u003EProgramming Languages.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.users\\\"\\u003EUsers.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.dashboard\\\"\\u003EDashboard.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.protected\\\"\\u003EProtected.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.jwtAuth\\\"\\u003EJwt Auth.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose\\\"\\u003EMongoose.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E \\u003Ca href=\\\"#\\\"\\u003ELink.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E \\u003Ca href=\\\"#\\\"\\u003ELink.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E \\u003Ca href=\\\"#\\\"\\u003ELink.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E \\u003Ca href=\\\"#\\\"\\u003ELink.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E \\u003Ca href=\\\"#\\\"\\u003ELink.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E \\u003Ca href=\\\"#\\\"\\u003ELink.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/partials/side-nav.pug\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/partials/side-nav.pug?");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"jumbotron\\\"\\u003E\\u003Ch1\\u003E{{ title ? title : 'Application' }}\\u003C\\u002Fh1\\u003E\\u003Cp\\u003E{{ description ? description : 'Ipsum ipsum exercitationem deleniti eos esse rerum veniam eaque ut numquam. Voluptates commodi eligendi ratione numquam consequatur porro id aut? Eligendi numquam perferendis odio harum asperiores cumque fuga quis possimus.' }}\\u003C\\u002Fp\\u003E\\u003Cul class=\\\"app-horizontal-nav w3-black\\\"\\u003E\\u003Cli\\u003E \\u003Ca class=\\\"w3-text-white\\\" href=\\\"\\u002Fserver\\\"\\u003EServer.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cp\\u003E \\u003Ci\\u003EID {{ currentUser.id }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Ci\\u003EEmail {{ currentUser.email }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cp\\u003E\\u003Ca class=\\\"btn btn-primary btn-lg\\\" href=\\\"\\u002F\\\" role=\\\"button\\\"\\u003ELearn more.\\u003C\\u002Fa\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/views/includes/_jumbotron.pug\n// module id = 133\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/views/includes/_jumbotron.pug?");

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n__webpack_require__(476);\n\n__webpack_require__(199);\n\n__webpack_require__(305);\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _angularUiRouter = __webpack_require__(192);\n\nvar _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);\n\nvar _ngstorage = __webpack_require__(306);\n\nvar _ngstorage2 = _interopRequireDefault(_ngstorage);\n\nvar _angularLocalStorage = __webpack_require__(189);\n\nvar _angularLocalStorage2 = _interopRequireDefault(_angularLocalStorage);\n\nvar _satellizer = __webpack_require__(474);\n\nvar _satellizer2 = _interopRequireDefault(_satellizer);\n\nvar _document = __webpack_require__(235);\n\nvar _document2 = _interopRequireDefault(_document);\n\nvar _modules = __webpack_require__(238);\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nvar _aimbooster = __webpack_require__(237);\n\nvar _aimbooster2 = _interopRequireDefault(_aimbooster);\n\nvar _mongoose = __webpack_require__(245);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _authJwt = __webpack_require__(207);\n\nvar _authJwt2 = _interopRequireDefault(_authJwt);\n\nvar _tasks = __webpack_require__(251);\n\nvar _tasks2 = _interopRequireDefault(_tasks);\n\nvar _auth = __webpack_require__(215);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _blog = __webpack_require__(220);\n\nvar _blog2 = _interopRequireDefault(_blog);\n\nvar _navbar = __webpack_require__(230);\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nvar _footer = __webpack_require__(229);\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nvar _tutorial = __webpack_require__(261);\n\nvar _tutorial2 = _interopRequireDefault(_tutorial);\n\nvar _home = __webpack_require__(243);\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _colorBox = __webpack_require__(227);\n\nvar _colorBox2 = _interopRequireDefault(_colorBox);\n\nvar _project = __webpack_require__(249);\n\nvar _project2 = _interopRequireDefault(_project);\n\nvar _liteServer = __webpack_require__(248);\n\nvar _liteServer2 = _interopRequireDefault(_liteServer);\n\nvar _app = __webpack_require__(202);\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _app3 = __webpack_require__(203);\n\nvar _app4 = _interopRequireDefault(_app3);\n\nvar _login = __webpack_require__(233);\n\nvar _login2 = _interopRequireDefault(_login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import './app.css';\n\nvar app = _angular2.default.module('app', [\n/* 'ui.router',*/'ui.router.state.events', 'satellizer', /* 'jsonFormatter' ,*/ /* 'LocalStorageModule' , */\n_angularUiRouter2.default, 'ngStorage', _satellizer2.default, _angularLocalStorage2.default, _home2.default, _auth2.default, _authJwt2.default, _blog2.default, _tutorial2.default, _tasks2.default, _mongoose2.default, _aimbooster2.default, _navbar2.default, _footer2.default, _colorBox2.default, _modules2.default, _document2.default]);\n\napp.run(_app4.default);\napp.config(_app2.default);\n\napp.controller('LoginController', _login2.default);\napp.factory('LiteServer', _liteServer2.default);\napp.factory('Project01Service', _project2.default);\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/index.js\n// module id = 162\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/index.js?");

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\n\nvar _dashboard = __webpack_require__(232);\n\nvar _dashboard2 = _interopRequireDefault(_dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction config($stateProvider, $authProvider) {\n   $authProvider.facebook({\n      clientId: 'Facebook App ID'\n   });\n\n   $authProvider.oauth2({\n      name: '',\n      url: '',\n      clientId: '',\n      redirectUri: '',\n      authorizationEndpoint: ''\n   });\n\n   $stateProvider.state('dashboard', {\n      url: '/dashboard',\n      template: __webpack_require__(325)(),\n      controller: _dashboard2.default,\n      controllerAs: 'DashCtrl',\n      resolve: {\n         auth: function resolveAuthentication(AuthResolver) {\n            return AuthResolver.resolve();\n         }\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/app.config.js\n// module id = 202\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.config.js?");

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = run;\nfunction run($rootScope, $state) {\n   if (!location.hash) {\n      $state.go('home');\n   }\n   $rootScope.$on('$stateChangeStart', function (event, to, params) {\n      if (to.redirectTo) {\n         event.preventDefault();\n         $state.go(to.redirectTo, params, { location: 'replace' });\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/app.run.js\n// module id = 203\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.run.js?");

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = routes;\nfunction routes() {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/auth.routes.js\n// module id = 204\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/auth.routes.js?");

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = run;\nfunction run($rootScope, $http, $localStorage, $location) {\n\n   if ($localStorage.currentUser) {\n      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;\n      $rootScope.currentUser = $localStorage.currentUser;\n   }\n\n   $rootScope.$on('$locationChangeStart', function (event, next, current) {\n      //var publicPages = ['/login'];\n      //var restrictedPage = publicPages.indexOf($location.path()) === -1;\n      //if (restrictedPage && !$localStorage.currentUser) {\n      //$location.path('/login');\n      //}\n   });\n\n   var testUser = {\n      email: 'ruudi170@gmail.com',\n      password: 'newbeginning'\n   };\n   /*\n   $httpBackend\n      .whenPOST('/api/authenticate')\n      .respond(function(method, url, data) {\n         var params = angular.fromJson(data);\n         console.log(params);\n         if (params.email === testUser.email && params.password === testUser.password) {\n            return [200, { token: 'fake-jwt-token' }, {}];\n         } else {\n            return [200, {}, {}];\n         }\n      });\n   */\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/auth.run.js\n// module id = 205\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/auth.run.js?");

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthService;\nfunction AuthService($rootScope, $http, $localStorage) {\n   var service = {};\n\n   service.login = function (email, password, callback) {\n      $http.post('/api/authenticate', { email: email, password: password }).then(function (response) {\n         if (response.data.token) {\n            $localStorage.currentUser = {\n               id: response.data.user._id,\n               email: email,\n               token: response.data.token\n            };\n            $rootScope.currentUser = $localStorage.currentUser;\n            $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;\n            callback(true);\n         } else {\n            callback(false);\n         }\n         console.log(response.data);\n      });\n   };\n\n   service.logout = function () {\n      delete $rootScope.currentUser;\n      delete $localStorage.currentUser;\n      $http.defaults.headers.common.Authorization = '';\n   };\n\n   service.currentUser = function () {\n      return $localStorage.currentUser;\n   };\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/auth.service.js\n// module id = 206\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/auth.service.js?");

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _auth = __webpack_require__(205);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _auth3 = __webpack_require__(204);\n\nvar _auth4 = _interopRequireDefault(_auth3);\n\nvar _auth5 = __webpack_require__(206);\n\nvar _auth6 = _interopRequireDefault(_auth5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.authJwt', [\n   // 'ngMockE2E', \n   // 'ngStorage'\n]).run(_auth2.default).config(_auth4.default).factory('Auth', _auth6.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/index.js\n// module id = 207\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/index.js?");

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthController;\nfunction AuthController($rootScope, $http, AuthService, AuthEvents, Auth) {\n   var _this = this;\n\n   this.credentials = {\n      email: '',\n      password: ''\n   };\n\n   this.setCurrentUser = function (user) {\n      $rootScope.currentUser = user;\n   };\n\n   this.login = function (credentials) {\n      AuthService.login(credentials).then(function (user) {\n         $rootScope.$broadcast(AuthEvents.loginSuccess);\n         _this.setCurrentUser(user);\n      }, function () {\n         $rootScope.$broadcast(AuthEvents.loginFailed);\n      });\n   };\n\n   this.login = function (credentials) {\n      Auth.login(credentials.email, credentials.password, function (result) {});\n   };\n\n   this.register = function (credentials) {\n      console.log(credentials);\n      $http.post('/api/auth/register', credentials).then(function (res) {\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.controller.js\n// module id = 208\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.controller.js?");

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = {\n   loginSuccess: 'auth-login-success',\n   loginFailed: 'auth-login-failed',\n   logoutSuccess: 'auth-logout-success',\n   sessionTimeout: 'auth-session-timeout',\n   notAuthenticated: 'auth-not-authenticated',\n   notAuthorized: 'auth-not-authorized'\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.events.js\n// module id = 209\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.events.js?");

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthInterceptor;\nfunction AuthInterceptor($rootScope, $q, AuthEvents) {\n   return {\n      responseError: function responseError(response) {\n         $rootScope.$broadcast({\n            401: AuthEvents.notAuthenticated,\n            403: AuthEvents.notAuthorized,\n            419: AuthEvents.sessionTimeout,\n            440: AuthEvents.sessionTimeout\n         }[response.status], response);\n         return $q.reject(response);\n      }\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.interceptor.service.js\n// module id = 210\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.interceptor.service.js?");

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthResolver;\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AuthResolver($q, $rootScope, $state) {\n   return {\n      resolve: function resolve() {\n         var deferred = $q.defer();\n         var unwatch = $rootScope.$watch('currentUser', function (currentUser) {\n            if (_angular2.default.isDefined(currentUser)) {\n               if (currentUser) {\n                  deferred.resolve(currentUser);\n               } else {\n                  deferred.reject();\n                  $state.go('login');\n               }\n               unwatch();\n            }\n         });\n         return deferred.promise;\n      }\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.resolver.service.js\n// module id = 211\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.resolver.service.js?");

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\nfunction routes($httpProvider, $stateProvider) {\n   $httpProvider.interceptors.push(['$injector', function ($injector) {\n      return $injector.get('AuthInterceptor');\n   }]);\n   $stateProvider.state('login', {\n      url: '/login',\n      template: __webpack_require__(310)(),\n      controller: 'AuthController',\n      controllerAs: 'AuthCtrl'\n   }).state('register', {\n      url: '/register',\n      template: __webpack_require__(311)(),\n      controller: 'AuthController',\n      controllerAs: 'AuthCtrl'\n   }).state('logout', {\n      url: '/logout',\n      controller: function controller(Auth) {\n         // Auth.logout();\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.routes.js\n// module id = 212\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.routes.js?");

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = run;\nfunction run($httpBackend) {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.run.js\n// module id = 213\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.run.js?");

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthService;\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AuthService($http, Session) {\n   var service = {};\n\n   service.login = function (credentials) {\n      return $http.post('/api/auth/login', credentials).then(function (res) {\n         Session.create(res.data.sessionId, res.data.user._id, res.data.user.group);\n         return res.data.user;\n      });\n   };\n\n   service.isAuthenticated = function () {\n      return !!Session.userId;\n   };\n\n   service.isAuthorized = function (authorizedRoles) {\n      if (!_angular2.default.isArray(authorizedRoles)) {\n         authorizedRoles = [authorizedRoles];\n      }\n      return service.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1;\n   };\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.service.js\n// module id = 214\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.service.js?");

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _auth = __webpack_require__(212);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _auth3 = __webpack_require__(209);\n\nvar _auth4 = _interopRequireDefault(_auth3);\n\nvar _auth5 = __webpack_require__(208);\n\nvar _auth6 = _interopRequireDefault(_auth5);\n\nvar _auth7 = __webpack_require__(213);\n\nvar _auth8 = _interopRequireDefault(_auth7);\n\nvar _authService = __webpack_require__(214);\n\nvar _authService2 = _interopRequireDefault(_authService);\n\nvar _user = __webpack_require__(217);\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _session = __webpack_require__(216);\n\nvar _session2 = _interopRequireDefault(_session);\n\nvar _authInterceptor = __webpack_require__(210);\n\nvar _authInterceptor2 = _interopRequireDefault(_authInterceptor);\n\nvar _authResolver = __webpack_require__(211);\n\nvar _authResolver2 = _interopRequireDefault(_authResolver);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('auth', []);\n\nmod.run(_auth8.default);\nmod.config(_auth2.default);\nmod.constant('AuthEvents', _auth4.default);\nmod.constant('UserRoles', _user2.default);\nmod.factory('AuthService', _authService2.default);\nmod.factory('AuthInterceptor', _authInterceptor2.default);\nmod.factory('AuthResolver', _authResolver2.default);\nmod.controller('AuthController', _auth6.default);\nmod.service('Session', _session2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/index.js\n// module id = 215\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/index.js?");

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = Session;\nfunction Session() {\n   this.create = function (sessionId, userId, userRole) {\n      this.id = sessionId;\n      this.userId = userId;\n      this.userRole = userRole;\n   };\n\n   this.destroy = function () {\n      this.id = null;\n      this.userId = null;\n      this.userRole = null;\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/session.service.js\n// module id = 216\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/session.service.js?");

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nvar userRoles = {\n   master: '*',\n   admin: 'admin',\n   guest: 'guest',\n   normal: 'normal'\n};\n\nexports.default = userRoles;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/user.roles.js\n// module id = 217\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/user.roles.js?");

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = BlogController;\nfunction BlogController($rootScope) {\n   $rootScope.title = 'This is the Blog.';\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.controller.js\n// module id = 218\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.controller.js?");

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _blog = __webpack_require__(218);\n\nvar _blog2 = _interopRequireDefault(_blog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider.state('blog', {\n      url: '/blog',\n      template: __webpack_require__(313)(),\n      controller: _blog2.default,\n      controllerAs: 'blog'\n   }).state('blog.home', {\n      url: '/home',\n      template: __webpack_require__(316)()\n   }).state('blog.post', {});\n   // .state('blog.post.create', {\n\n   // });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.routes.js\n// module id = 219\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.routes.js?");

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _post = __webpack_require__(221);\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _blog = __webpack_require__(219);\n\nvar _blog2 = _interopRequireDefault(_blog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.blog', [_post2.default]);\n\nmod.config(_blog2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/index.js\n// module id = 220\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/index.js?");

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _post = __webpack_require__(224);\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _post3 = __webpack_require__(223);\n\nvar _post4 = _interopRequireDefault(_post3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.blog.post', []);\n\nmod.run(_post2.default);\nmod.config(_post4.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/index.js\n// module id = 221\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/index.js?");

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = PostController;\nfunction PostController($http) {\n   this.post = {\n      title: '',\n      body: ''\n   };\n\n   this.posts = [];\n\n   this.createPost = function (post) {\n      console.log(post);\n      $http.post('/api/posts', post).then(function (res) {\n         console.log(res.data);\n      });\n   };\n\n   $http.get('/api/posts').then(function (res) {\n      console.log(res.data);\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/post.controller.js\n// module id = 222\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/post.controller.js?");

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _post = __webpack_require__(222);\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider.state('blog.post.create', {\n      url: '/create',\n      template: __webpack_require__(314)(),\n      controller: _post2.default,\n      controllerAs: 'vm'\n   }).state('blog.post.index', {\n      url: '/index',\n      template: __webpack_require__(315)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/post.routes.js\n// module id = 223\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/post.routes.js?");

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = run;\nfunction run($rootScope) {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/post.run.js\n// module id = 224\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/post.run.js?");

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ColorBoxController = function ColorBoxController($scope) {\n   _classCallCheck(this, ColorBoxController);\n\n   $scope.colors = [{\n      name: \"red\",\n      hex: \"#FF0000\"\n   }, {\n      name: \"green\",\n      hex: \"#00FF00\"\n   }, {\n      name: \"blue\",\n      hex: \"#0000FF\"\n   }, {\n      name: \"purple\",\n      hex: \"#FF00FF\"\n   }];\n};\n\nexports.default = ColorBoxController;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.controller.js\n// module id = 225\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.controller.js?");

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = ColorBoxDirective;\n\nvar _colorBox = __webpack_require__(225);\n\nvar _colorBox2 = _interopRequireDefault(_colorBox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ColorBoxDirective() {\n   return {\n      template: __webpack_require__(317)(),\n      controller: _colorBox2.default,\n      link: function link() {}\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.directive.js\n// module id = 226\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.directive.js?");

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\n__webpack_require__(477);\n\nvar _colorBox = __webpack_require__(226);\n\nvar _colorBox2 = _interopRequireDefault(_colorBox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.colorBox', []);\n\nmod.directive('colorBox', _colorBox2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/index.js\n// module id = 227\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/index.js?");

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = FooterDirective;\nfunction FooterDirective() {\n   return {\n      template: __webpack_require__(318)()\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/footer/footer.directive.js\n// module id = 228\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/footer/footer.directive.js?");

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _footer = __webpack_require__(228);\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.components.footer', []);\n\nmod.directive('appFooter', _footer2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/footer/index.js\n// module id = 229\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/footer/index.js?");

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _navbar = __webpack_require__(231);\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.components.navbar', []);\n\nmod.directive('navbar', _navbar2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/navbar/index.js\n// module id = 230\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/navbar/index.js?");

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = NavbarDirective;\nfunction NavbarDirective() {\n   return {\n      template: __webpack_require__(319)(),\n      controller: function controller($rootScope, $scope, Auth) {\n         this.logout = function () {\n            Auth.logout();\n         };\n      },\n      controllerAs: 'NavCtrl'\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/navbar/navbar.directive.js\n// module id = 231\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/navbar/navbar.directive.js?");

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = DashboardController;\nfunction DashboardController($scope, $http, $interval, LiteServer, Project01Service) {\n   var _this = this;\n\n   // LITE-SERVER\n   $scope.lite = {};\n   $scope.lite.open = false;\n   $scope.lite.startClass = function () {\n      return { 'w3-disabled': LiteServer.open };\n   };\n   $scope.lite.stopClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n   $scope.lite.statusClass = function () {\n      return { 'w3-green': LiteServer.open, 'w3-red': !LiteServer.open };\n   };\n   $scope.lite.openClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n   $scope.lite.start = function () {\n      LiteServer.start(function () {});\n   };\n   $scope.lite.stop = function () {\n      LiteServer.stop(function () {});\n   };\n   $scope.lite.open = function () {\n      window.open('http://192.168.0.2:3100', '_blank');\n   };\n   // PROJECT 01 \n   $scope.project01 = {};\n   $scope.project01.isOpen = false;\n   $scope.project01.start = function () {\n      $http.post('/api/projects/01/start').then(function (res) {});\n   };\n   $scope.project01.stop = function () {\n      $http.post('/api/projects/01/stop').then(function (res) {});\n   };\n   $scope.project01.status = function () {\n      $http.post('/api/projects/01/status').then(function (res) {\n         $scope.project01.isOpen = res.data.open;\n      });\n   };\n   $scope.project01.open = function () {\n      window.open('http://192.168.0.2:3200', '_blank');\n   };\n   $interval(function () {\n      $scope.project01.status();\n   }, 1000);\n\n   // REST OF SOMETHING\n   this.statusInterval = null;\n   this.open = false;\n   this.liteServerOpen = false;\n\n   this.startLiteServer = function () {\n      LiteServer.start(function () {});\n   };\n\n   this.stopLiteServer = function () {\n      LiteServer.stop(function () {});\n   };\n\n   this.liteServerStartClass = function () {\n      return { 'w3-disabled': LiteServer.open };\n   };\n\n   this.liteServerStopClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n\n   this.liteServerStatusClass = function () {\n      return { 'w3-green': LiteServer.open, 'w3-red': !LiteServer.open };\n   };\n   this.liteServerOpenInTabClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n\n   this.liteServerStatus = function () {\n      LiteServer.status(function (response) {\n         _this.liteServerOpen = response.open;\n      });\n   };\n\n   this.setLiteserverStatusInterval = function () {};\n\n   this.start = function () {\n      $http.get('/api/example/start').then(function (res) {});\n   };\n\n   this.stop = function () {\n      $http.get('/api/example/stop').then(function (res) {});\n   };\n\n   this.status = function () {\n      $http.get('/api/example/status').then(function (res) {\n         if (res.data.open) {\n            _this.open = true;\n         } else {\n            _this.open = false;\n         }\n      });\n   };\n\n   this.setStatusInterval = function () {\n      _this.statusInterval = $interval(function () {\n         $http.get('/api/example/status').then(function (res) {\n            if (res.data.open) {\n               _this.open = true;\n            } else {\n               _this.open = false;\n            }\n         }, function (res) {});\n      }, 1000);\n   };\n\n   (function () {\n      _this.setStatusInterval();\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/controllers/dashboard.controller.js\n// module id = 232\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/controllers/dashboard.controller.js?");

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = LoginController;\nfunction LoginController($scope, $auth) {\n   $scope.authenticate = function (provider) {\n      $auth.authenticate(provider);\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/controllers/login.controller.js\n// module id = 233\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/controllers/login.controller.js?");

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = DocumentConfig;\nfunction DocumentConfig($stateProvider) {\n   $stateProvider.state('document', {\n      url: '/document',\n      template: __webpack_require__(320)(),\n      redirectTo: 'document.index'\n   }).state('document.index', {\n      url: '/index',\n      template: __webpack_require__(321)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/document.config.js\n// module id = 234\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/document.config.js?");

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(478);\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _document = __webpack_require__(234);\n\nvar _document2 = _interopRequireDefault(_document);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.document', []);\n\nmod.config(_document2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/index.js\n// module id = 235\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/index.js?");

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AimboosterRoutes;\nfunction AimboosterRoutes($stateProvider) {\n   $stateProvider.state('aimbooster', {\n      url: '/aimbooster',\n      template: __webpack_require__(323)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/aimbooster/aimbooster.routes.js\n// module id = 236\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/aimbooster/aimbooster.routes.js?");

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _aimbooster = __webpack_require__(236);\n\nvar _aimbooster2 = _interopRequireDefault(_aimbooster);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('aimbooster', []).config(_aimbooster2.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/aimbooster/index.js\n// module id = 237\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/aimbooster/index.js?");

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _w = __webpack_require__(239);\n\nvar _w2 = _interopRequireDefault(_w);\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('modules', [_w2.default]).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/index.js\n// module id = 238\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/index.js?");

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\n__webpack_require__(298);\n\nvar _w = __webpack_require__(240);\n\nvar _w2 = _interopRequireDefault(_w);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('modules.w3', []).config(_w2.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/w3/index.js\n// module id = 239\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/w3/index.js?");

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = W3Routes;\nfunction W3Routes($stateProvider) {\n   $stateProvider.state('w3', {\n      url: '/w3',\n      template: __webpack_require__(324)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/w3/w3.routes.js\n// module id = 240\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/w3/w3.routes.js?");

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HomeController = function HomeController($rootScope) {\n   _classCallCheck(this, HomeController);\n\n   $rootScope.title = 'Home';\n};\n\nexports.default = HomeController;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/home/home.controller.js\n// module id = 241\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/home/home.controller.js?");

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _home = __webpack_require__(241);\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider.state('home', {\n      url: '/home',\n      template: __webpack_require__(326)(),\n      controller: _home2.default,\n      controllerAs: 'home'\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/home/home.routes.js\n// module id = 242\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/home/home.routes.js?");

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _home = __webpack_require__(242);\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.pages.home', []);\n\nmod.config(_home2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/home/index.js\n// module id = 243\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/home/index.js?");

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = EditorDirective;\nfunction EditorDirective() {\n   return {\n      template: 'This is editor directive.',\n      scope: {\n         code: '='\n      },\n      link: function link(scope, element, attributes) {\n         $(element).css({\n            'height': '300px',\n            'display': 'block'\n         });\n         scope.$watch('code', function (newValue, oldValue) {\n            console.log('changed: ', newValue);\n         });\n         var editor = ace.edit(element[0]);\n         editor.setTheme('ace/theme/monokai');\n         editor.getSession().setMode('ace/mode/javascript');\n         editor.setKeyboardHandler('ace/keyboard/vim');\n         ace.config.loadModule('ace/keyboard/vim', function (m) {\n            var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;\n            VimApi.defineEx('write', 'w', function (cm, input) {\n               console.log(editor.getValue());\n               scope.code = {\n                  body: 'working ?'\n               };\n               console.log(scope.code);\n               cm.ace.execCommand('save');\n            });\n         });\n         // scope.code = {\n         // body: 'editor has set code'\n         // };\n      }\n   };\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(130)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/editor/editor.directive.js\n// module id = 244\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/editor/editor.directive.js?");

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _mongoose = __webpack_require__(247);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _editor = __webpack_require__(244);\n\nvar _editor2 = _interopRequireDefault(_editor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('mongoose', []).config(_mongoose2.default).directive('mongooseEditor', _editor2.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/index.js\n// module id = 245\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/index.js?");

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = MongooseController;\nfunction MongooseController($scope) {\n   $scope.code = {\n      body: 'no body is available'\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/mongoose.controller.js\n// module id = 246\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/mongoose.controller.js?");

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = MongooseRoutes;\n\nvar _mongoose = __webpack_require__(246);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction MongooseRoutes($stateProvider) {\n   $stateProvider.state('mongoose', {\n      url: '/mongoose',\n      template: __webpack_require__(329)(),\n      redirectTo: 'mongoose.index',\n      controller: _mongoose2.default,\n      controllerAs: 'MongooseCtrl'\n   }).state('mongoose.index', {\n      url: '/index',\n      template: __webpack_require__(328)()\n   }).state('mongoose.editor', {\n      url: '/editor',\n      template: __webpack_require__(327)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/mongoose.routes.js\n// module id = 247\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/mongoose.routes.js?");

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = LiteServerService;\nfunction LiteServerService($http, $timeout, $interval) {\n   var service = {};\n\n   service.open = false;\n   service.intervalId = null;\n\n   service.start = function (callback) {\n      $http.post('/api/lite-server/start', {}).then(function (res) {\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n      callback();\n   };\n\n   service.stop = function (callback) {\n      $http.post('/api/lite-server/stop', {}).then(function (res) {\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n      callback();\n   };\n\n   service.status = function (callback) {\n      $http.post('/api/lite-server/status', {}).then(function (res) {\n         callback(res.data);\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   (function () {\n      service.intervalId = $interval(function () {\n         $http.post('/api/lite-server/status', {}).then(function (res) {\n            service.open = res.data.open;\n         }, function (res) {\n            console.log(res.data);\n         });\n      }, 1000);\n   })();\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/services/lite-server.service.js\n// module id = 248\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/services/lite-server.service.js?");

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = Project01Service;\nfunction Project01Service() {\n   var service = {};\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/services/project-01.service.js\n// module id = 249\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/services/project-01.service.js?");

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = TaskController;\nfunction TaskController($scope, $http) {\n   var _this = this;\n\n   this.tasks = [];\n\n   this.resetTask = function () {\n      _this.task = {\n         body: ''\n      };\n   };\n\n   this.resetTask();\n\n   this.new = function (task) {\n      $http.post('/api/tasks', task).then(function (res) {\n         _this.tasks.push(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   this.remove = function (task) {\n      $http.delete('/api/tasks/' + task._id).then(function (res) {\n         _this.tasks.splice(_this.tasks.indexOf(task), 1);\n         _this.resetTask();\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   $http.get('/api/tasks').then(function (res) {\n      _this.tasks = res.data;\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/controllers/task.controller.js\n// module id = 250\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/controllers/task.controller.js?");

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _task = __webpack_require__(252);\n\nvar _task2 = _interopRequireDefault(_task);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.tasks', []);\n\nmod.config(_task2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/index.js\n// module id = 251\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/index.js?");

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _task = __webpack_require__(250);\n\nvar _task2 = _interopRequireDefault(_task);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider.state('tasks', {\n      url: '/tasks',\n      template: __webpack_require__(335)(),\n      controller: _task2.default,\n      controllerAs: 'TaskCtrl',\n      redirectTo: 'tasks.list'\n   }).state('tasks.new', {\n      url: '/new',\n      template: __webpack_require__(333)()\n   }).state('tasks.list', {\n      url: '/list',\n      template: __webpack_require__(331)()\n   }).state('tasks.removed', {\n      url: '/removed',\n      template: __webpack_require__(334)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/task.routes.js\n// module id = 252\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/task.routes.js?");

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = O01TutorialDirective;\nfunction O01TutorialDirective() {\n   return {\n      template: __webpack_require__(336)(),\n      controller: function O01TutorialController($scope) {\n         $scope.persons = [{\n            fname: 'Paola',\n            lname: 'Brodie'\n         }, {\n            fname: 'Sharlene',\n            lname: 'Veiga'\n         }, {\n            fname: 'Star',\n            lname: 'Smolen'\n         }, {\n            fname: 'Alva',\n            lname: 'Schooler'\n         }, {\n            fname: 'Latoya',\n            lname: 'Bias'\n         }];\n      }\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/components/O01-tutorial/O01-tutorial.directive.js\n// module id = 253\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/components/O01-tutorial/O01-tutorial.directive.js?");

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _O01Tutorial = __webpack_require__(253);\n\nvar _O01Tutorial2 = _interopRequireDefault(_O01Tutorial);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.tutorial.o01Tutorial', []);\n\nmod.directive('o01Tutorial', _O01Tutorial2.default);\n\nexports.default = mod.name;\n\n\nvar snippets = [{\n   id: 1,\n   code: '\\n         var i = \\'example\\';\\n\\n         console.log(i);\\n\\n         this is perfect.\\n      '\n}, {\n   id: 2,\n   code: '\\n         console.log(\\'what is this\\');\\n         console.log(\\'what is this\\');\\n         console.log(\\'what is this\\');\\n         console.log(\\'what is this\\');\\n         console.log(\\'what is this\\');\\n         console.log(\\'what is this\\');\\n      '\n}];\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/components/O01-tutorial/index.js\n// module id = 254\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/components/O01-tutorial/index.js?");

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\nfunction routes($stateProvider) {\n   $stateProvider.state('tutorial.handsontable', {\n      url: '/handsontable',\n      template: __webpack_require__(337)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/components/handsontable/handsontable.routes.js\n// module id = 255\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/components/handsontable/handsontable.routes.js?");

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _handsontable = __webpack_require__(255);\n\nvar _handsontable2 = _interopRequireDefault(_handsontable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('tutorial.handsontable', []);\n\nmod.config(_handsontable2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/components/handsontable/index.js\n// module id = 256\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/components/handsontable/index.js?");

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = BootstrapController;\nfunction BootstrapController($http) {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/controllers/bootstrap.controller.js\n// module id = 257\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/controllers/bootstrap.controller.js?");

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = SectionController;\nfunction SectionController($http) {\n   var _this = this;\n\n   this.sections = [];\n\n   this.resetSection = function () {\n      _this.section = {\n         name: ''\n      };\n   };\n\n   this.create = function (section) {\n      $http.post('/api/sections', section).then(function (res) {\n         _this.sections = res.data;\n      });\n   };\n\n   this.remove = function (section) {\n      $http.delete('/api/sections/' + section._id).then(function (res) {\n         _this.sections = res.data;\n      });\n   };\n\n   (function () {\n      _this.resetSection();\n\n      $http.get('/api/sections').then(function (res) {\n         _this.sections = res.data;\n      });\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/controllers/section.controller.js\n// module id = 258\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/controllers/section.controller.js?");

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = UserController;\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction UserController($rootScope, $http, Session, AuthService, AuthEvents, UserRoles) {\n   var _this = this;\n\n   this.currentUser = null;\n   this.userRoles = UserRoles;\n   this.isAuthenticated = function () {\n      return !!Session.userId;\n   };\n   this.isAuthorized = function (authorizedRoles) {\n      if (Session.userRole) {\n         console.log('Role: ', Session.userRole);\n         console.log('Authenticated:', _this.isAuthenticated());\n         console.log('Authorized Roles:', authorizedRoles);\n      }\n      if (!_angular2.default.isArray(authorizedRoles)) {\n         authorizedRoles = [authorizedRoles];\n      }\n      return _this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1;\n   };\n   this.user = {};\n   this.users = [];\n\n   this.register = function (user) {\n      $http.post('/api/auth/register', user).then(function (res) {\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   this.setCurrentUser = function (user) {\n      _this.currentUser = user;\n   };\n\n   this.login = function (user) {\n      $http.post('/api/auth/login', user).then(function (res) {\n         Session.create(res.data.sessionId, res.data.user._id, res.data.user.group);\n         $rootScope.$broadcast(AuthEvents.loginSuccess);\n         _this.setCurrentUser(res.data.user);\n         // console.log(res.data);\n      }, function (res) {\n         $rootScope.$broadcast(AuthEvents.loginFailed);\n         console.log(res.data);\n      });\n   };\n\n   this.resetUser = function () {\n      _this.user = {\n         email: '',\n         password: '',\n         password2: ''\n      };\n   };\n\n   (function () {\n      _this.resetUser();\n      $http.get('/api/users').then(function (res) {\n         _this.users = res.data;\n      }, function (res) {\n         console.log(res.data);\n      });\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/controllers/user.controller.js\n// module id = 259\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/controllers/user.controller.js?");

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = BootstrapEditorDirective;\nfunction BootstrapEditorDirective() {\n   return {\n      scope: {},\n      template: '\\n         <div class=\"editor\"></div>\\n         <br>\\n         <pre><code class=\"html-preview\"></code></pre>\\n         <br>\\n         <div class=\"preview\"></div>\\n      ',\n      link: function link(scope, element, attributes) {\n         // Editor element\n         var xEditor = element[0].getElementsByClassName('editor')[0];\n         var editor = ace.edit(xEditor);\n         editor.setTheme('ace/theme/monokai');\n         editor.getSession().setMode('ace/mode/jade');\n\n         $(xEditor).css({\n            'min-height': '200px'\n         });\n\n         console.log(xEditor);\n\n         // HTML Preview element\n         var xHTMLPreview = element[0].getElementsByClassName('html-preview')[0];\n         var xPreview = element[0].getElementsByClassName('preview')[0];\n\n         editor.on('change', function () {\n            var html = jade.compile(editor.getValue())();\n            xHTMLPreview.innerText = html_beautify(html);\n            hljs.highlightBlock(xHTMLPreview);\n            xPreview.innerHTML = html;\n         });\n      }\n   };\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(130)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/directives/bootstrap-editor.directive.js\n// module id = 260\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/directives/bootstrap-editor.directive.js?");

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _tutorial = __webpack_require__(271);\n\nvar _tutorial2 = _interopRequireDefault(_tutorial);\n\nvar _O01Tutorial = __webpack_require__(254);\n\nvar _O01Tutorial2 = _interopRequireDefault(_O01Tutorial);\n\nvar _handsontable = __webpack_require__(256);\n\nvar _handsontable2 = _interopRequireDefault(_handsontable);\n\nvar _tutorial3 = __webpack_require__(272);\n\nvar _tutorial4 = _interopRequireDefault(_tutorial3);\n\nvar _mongoose = __webpack_require__(269);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bootstrapEditor = __webpack_require__(260);\n\nvar _bootstrapEditor2 = _interopRequireDefault(_bootstrapEditor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.tutorial', [_O01Tutorial2.default, _handsontable2.default, _mongoose2.default]);\n\nmod.run(_tutorial4.default);\n\nmod.directive('bootstrapEditor', _bootstrapEditor2.default);\n\nmod.config(_tutorial2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/index.js\n// module id = 261\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/index.js?");

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = UserController;\nfunction UserController(Auth, $rootScope, $localStorage) {\n   var _this = this;\n\n   this.currentUser = Auth.currentUser();\n\n   this.resetUser = function () {\n      _this.user = {\n         email: '',\n         password: ''\n      };\n   };\n\n   this.login = function (user) {\n      console.log('Log in', user);\n      Auth.login(user.email, user.password, function (result) {\n         if (result === true) {\n            _this.resetUser();\n            console.log('Login successful.');\n         } else {\n            console.log('Username or password is incorrect.');\n         }\n      });\n   };\n\n   this.logout = function () {\n      Auth.logout();\n   };\n\n   (function () {\n      _this.resetUser();\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/jwt-auth/user.controller.js\n// module id = 262\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/jwt-auth/user.controller.js?");

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = AuthorController;\nfunction AuthorController() {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/controllers/author.controller.js\n// module id = 263\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/controllers/author.controller.js?");

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = CodeController;\nfunction CodeController() {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/controllers/code.controller.js\n// module id = 264\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/controllers/code.controller.js?");

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = KittenController;\nfunction KittenController($http) {\n   var _this = this;\n\n   this.kittens = [];\n   this.kitten = {};\n\n   this.resetKitten = function () {\n      _this.kitten = {\n         name: ''\n      };\n   };\n\n   this.findKittens = function () {\n      $http.get('/api/kittens').then(function (res) {\n         _this.kittens = res.data;\n      }, function (res) {\n         console.log(res);\n      });\n   };\n\n   this.remove = function (kitten) {\n      $http.delete('/api/kittens/' + kitten._id).then(function (res) {\n         _this.kittens.splice(_this.kittens.indexOf(kitten), 1);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   this.create = function (kitten) {\n      $http.post('/api/kittens', kitten).then(function (res) {\n         _this.kittens.push(res.data);\n         _this.resetKitten();\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   (function () {\n      _this.resetKitten();\n      _this.findKittens();\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/controllers/kitten.controller.js\n// module id = 265\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/controllers/kitten.controller.js?");

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = PostController;\nfunction PostController($rootScope, $http) {\n   var _this = this;\n\n   this.posts = [];\n   this.post = {};\n\n   this.resetPost = function () {\n      _this.post = {\n         title: '',\n         body: '',\n         user: $rootScope.currentUser.id\n      };\n   };\n\n   this.create = function (post) {\n      $http.post('/api/posts', post).then(function (res) {\n         _this.posts.push(post);\n         _this.resetPost();\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   this.drop = function () {\n      console.log('I have to drop post collections');\n   };\n\n   this.remove = function (post) {\n      $http.delete('/api/posts/' + post._id).then(function (res) {\n         _this.posts.splice(_this.posts.indexOf(post), 1);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   this.loadPosts = function () {\n      $http.get('/api/posts').then(function (res) {\n         _this.posts = res.data;\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   (function () {\n      _this.resetPost();\n      _this.loadPosts();\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/controllers/post.controller.js\n// module id = 266\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/controllers/post.controller.js?");

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = StoryController;\nfunction StoryController() {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/controllers/story.controller.js\n// module id = 267\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/controllers/story.controller.js?");

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = UserController;\nfunction UserController($http) {\n   var _this = this;\n\n   this.users = [];\n   this.user = {};\n\n   this.resetUser = function () {\n      _this.user = {\n         email: '',\n         password: ''\n      };\n   };\n\n   this.add = function (user) {\n      $http.post('/api/users', user).then(function (res) {\n         _this.users.push(res.data);\n         _this.resetUser();\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   this.remove = function (user) {\n      $http.delete('/api/users/' + user._id).then(function (res) {\n         _this.users.splice(_this.users.indexOf(user), 1);\n      }, function (res) {\n         console.log(res);\n      });\n   };\n\n   this.loadUsers = function () {\n      $http.get('/api/users').then(function (res) {\n         _this.users = res.data;\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   (function () {\n      _this.resetUser();\n      _this.loadUsers();\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/controllers/user.controller.js\n// module id = 268\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/controllers/user.controller.js?");

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _mongoose = __webpack_require__(270);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('tutorial.mongoose', []);\n\nmod.config(_mongoose2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/index.js\n// module id = 269\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/index.js?");

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _user = __webpack_require__(268);\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _post = __webpack_require__(266);\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _kitten = __webpack_require__(265);\n\nvar _kitten2 = _interopRequireDefault(_kitten);\n\nvar _code = __webpack_require__(264);\n\nvar _code2 = _interopRequireDefault(_code);\n\nvar _author = __webpack_require__(263);\n\nvar _author2 = _interopRequireDefault(_author);\n\nvar _story = __webpack_require__(267);\n\nvar _story2 = _interopRequireDefault(_story);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider\n   // Routes.\n   // ===============================================================\n   .state('tutorial.mongoose', {\n      url: '/mongoose',\n      template: __webpack_require__(345)()\n   })\n   // User routes.\n   // ===============================================================\n   .state('tutorial.mongoose.users', {\n      url: '/users',\n      template: __webpack_require__(351)(),\n      controller: _user2.default,\n      controllerAs: 'UserCtrl',\n      redirectTo: 'tutorial.mongoose.users.list'\n   }).state('tutorial.mongoose.users.create', {\n      url: '/create',\n      template: __webpack_require__(350)()\n   }).state('tutorial.mongoose.users.list', {\n      url: '/list',\n      template: __webpack_require__(352)()\n   })\n   // Post routes.\n   // ===============================================================\n   .state('tutorial.mongoose.posts', {\n      url: '/posts',\n      template: __webpack_require__(347)(),\n      redirectTo: 'tutorial.mongoose.posts.list',\n      controller: _post2.default,\n      controllerAs: 'PostCtrl'\n   }).state('tutorial.mongoose.posts.list', {\n      url: '/list',\n      template: __webpack_require__(348)()\n   }).state('tutorial.mongoose.posts.create', {\n      url: '/create',\n      template: __webpack_require__(346)()\n   })\n   // Kitten routes.\n   // ===============================================================\n   .state('tutorial.mongoose.kittens', {\n      url: '/kittens',\n      template: __webpack_require__(344)(),\n      redirectTo: 'tutorial.mongoose.kittens.index',\n      controller: _kitten2.default,\n      controllerAs: 'KittenCtrl'\n   }).state('tutorial.mongoose.kittens.index', {\n      url: '/index',\n      template: __webpack_require__(343)()\n   }).state('tutorial.mongoose.kittens.create', {\n      url: '/create',\n      template: __webpack_require__(342)()\n   })\n   // Code routes.\n   // ===============================================================\n   .state('tutorial.mongoose.codes', {\n      url: '/codes',\n      template: __webpack_require__(340)(),\n      // redirectTo: 'tutorial.mongoose.codes.index',\n      controller: _code2.default,\n      controllerAs: 'CodeCtrl'\n   })\n   // Author routes.\n   // ===============================================================\n   .state('tutorial.mongoose.authors', {\n      url: '/authors',\n      template: __webpack_require__(339)(),\n      // redirectTo: 'tutorial.mongoose.authors.index',\n      controller: _author2.default,\n      controllerAs: 'AuthorCtrl'\n   })\n   // Story routes.\n   // ===============================================================\n   .state('tutorial.mongoose.stories', {\n      url: '/stories',\n      template: __webpack_require__(349)(),\n      // redirectTo: 'tutorial.mongoose.stories.index',\n      controller: _story2.default,\n      controllerAs: 'StoryCtrl'\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/mongoose.routes.js\n// module id = 270\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/mongoose.routes.js?");

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _bootstrap = __webpack_require__(257);\n\nvar _bootstrap2 = _interopRequireDefault(_bootstrap);\n\nvar _section = __webpack_require__(258);\n\nvar _section2 = _interopRequireDefault(_section);\n\nvar _user = __webpack_require__(259);\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _user3 = __webpack_require__(262);\n\nvar _user4 = _interopRequireDefault(_user3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// zenburn.css, tomorrow-night.css, monokai_sublime.css\nfunction routes($stateProvider, UserRoles) {\n   $stateProvider.state('tutorial', {\n      url: '/tutorial',\n      template: __webpack_require__(354)(),\n      redirectTo: 'tutorial.index'\n   }).state('tutorial.index', {\n      url: '/index',\n      template: __webpack_require__(360)()\n   }).state('tutorial.todos', {\n      url: '/todos',\n      template: __webpack_require__(366)()\n   }).state('tutorial.users', {\n      url: '/users',\n      template: __webpack_require__(367)(),\n      controller: _user2.default,\n      controllerAs: 'UserCtrl'\n   }).state('tutorial.dashboard', {\n      url: '/dashboard',\n      template: __webpack_require__(358)(),\n      data: {\n         authorizedRoles: [UserRoles.normal]\n      }\n   }).state('tutorial.protected', {\n      url: '/protected',\n      template: __webpack_require__(364)(),\n      resolve: {\n         auth: function resolveAuthentication(AuthResolver) {\n            return AuthResolver.resolve();\n         }\n      }\n      /*resolve: {\n         auth: function resolveAuthentication(AuthResolver) {\n            return AuthResolver.resolve();\n         }\n      }*/\n   }).state('tutorial.node', {\n      url: '/node',\n      template: __webpack_require__(362)()\n   }).state('tutorial.programmingLanguages', {\n      url: '/programming-languages',\n      template: __webpack_require__(363)()\n   }).state('tutorial.jwtAuth', {\n      url: '/jwt-auth',\n      template: __webpack_require__(361)(),\n      controller: _user4.default,\n      controllerAs: 'UserCtrl'\n   }).state('tutorial.sections', {\n      url: '/sections',\n      template: __webpack_require__(365)(),\n      controller: _section2.default,\n      controllerAs: 'SectionCtrl'\n   }).state('tutorial.highlightjs', {\n      url: '/highlightjs',\n      template: __webpack_require__(359)()\n   }).state('tutorial.ace', {\n      url: '/ace',\n      template: __webpack_require__(355)()\n   }).state('tutorial.bootstrap', {\n      url: '/bootstrap',\n      template: __webpack_require__(357)(),\n      controller: _bootstrap2.default,\n      controllerAs: 'bs'\n   }).state('tutorial.angular', {\n      url: '/angular',\n      template: __webpack_require__(356)(),\n      controller: function controller() {\n         // require('!style-loader!css-loader!highlight.js/styles/androidstudio.css');\n         // require('!style-loader!css-loader!bower_components/highlightjs/styles/atom-one-dark.css');\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/tutorial.routes.js\n// module id = 271\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/tutorial.routes.js?");

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = run;\nfunction run($rootScope, AuthEvents, AuthService) {\n   $rootScope.$on('$stateChangeStart', function (event, next) {\n      if (next.data) {\n         var authorizedRoles = next.data.authorizedRoles;\n         if (!AuthService.isAuthorized(authorizedRoles)) {\n            event.preventDefault();\n            if (AuthService.isAuthenticated()) {\n               // user is not allowed.\n               $rootScope.$broadcast(AuthEvents.notAuthorized);\n            } else {\n               // user it not logged in.\n               $rootScope.$broadcast(AuthEvents.notAuthenticated);\n            }\n         }\n      }\n   });\n   $rootScope.$on(AuthEvents.loginSuccess, function () {\n      console.log('LOGIN WAS SUCCESSFUL.');\n   });\n   $rootScope.$on(AuthEvents.loginFailed, function () {\n      console.log('LOGIN ATTEMPT FAILED.');\n   });\n   $rootScope.$on(AuthEvents.sessionTimeout, function () {\n      console.log('SESSION HAS BEEN TIMED OUT.');\n   });\n   $rootScope.$on(AuthEvents.notAuthorized, function () {\n      console.log('YOU ARE NOT AUTHORIZED.');\n   });\n   $rootScope.$on(AuthEvents.notAuthenticated, function () {\n      console.log('YOU ARE NOT AUTHENTICATED.');\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/tutorial.run.js\n// module id = 272\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/tutorial.run.js?");

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(164);\n\n__webpack_require__(163);\n\n__webpack_require__(165);\n\nvar _angular = __webpack_require__(7);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _app = __webpack_require__(162);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/index.js\n// module id = 273\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(undefined);\n// imports\nexports.push([module.i, \"@import url(https://www.fontify.me/wf/42a6cdb26bad8bf22678dbaaa59e2d3a);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=PT+Sans+Narrow);\", \"\"]);\n\n// module\nexports.push([module.i, \"* {\\n  box-sizing: border-box; }\\n\\nbody {\\n  background-color: #DE524B;\\n  font-family: 'Arial Narrow', 'PT Sans Narrow', sans-serif; }\\n\\n.app-list {\\n  font-family: 'Arial Narrow', Arial, sans-serif;\\n  margin: 0px;\\n  padding: 0px;\\n  list-style: none; }\\n  .app-list li {\\n    border: 1px solid rgba(0, 0, 0, 0.5);\\n    border-radius: 3px;\\n    margin-bottom: 3px;\\n    background-color: #f2f2f2;\\n    color: #333333;\\n    padding: 1px 3px 1px 3px; }\\n    .app-list li:hover {\\n      background-color: #1DDB99; }\\n\\n.app-title {\\n  background-color: #1DDB99;\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  border-radius: 3px;\\n  padding: 2px 3px; }\\n\\n.app-form {\\n  font-family: 'Arial Narrow', Arial, sans-serif;\\n  background-color: #f2f2f2;\\n  padding: 20px;\\n  border-radius: 3px;\\n  border: 1px solid rgba(0, 0, 0, 0.5); }\\n  .app-form .form-control {\\n    border: 1px solid rgba(0, 0, 0, 0.2);\\n    border: 1px solid rgba(0, 0, 0, 0.2); }\\n    .app-form .form-control:focus, .app-form .form-control:active {\\n      outline: none;\\n      border: 1px solid rgba(0, 0, 0, 0.4); }\\n  .app-form .btn {\\n    border: 1px solid rgba(0, 0, 0, 0.2); }\\n    .app-form .btn:focus, .app-form .btn:active {\\n      outline: none;\\n      border: 1px solid rgba(0, 0, 0, 0.4); }\\n  .app-form h2.title {\\n    margin: 0px;\\n    margin-bottom: 10px; }\\n  .app-form input {\\n    padding: 12px 20px; }\\n\\n.jumbotron {\\n  background-color: #f2f2f2 !important; }\\n\\n.app-navbar a.active, .app-navbar li.active a {\\n  color: red; }\\n\\n.app-navbar a {\\n  text-decoration: none;\\n  color: #6F9ECE; }\\n  .app-navbar a span:first-child {\\n    margin-right: 5px; }\\n  .app-navbar a:hover {\\n    text-decoration: none;\\n    color: red; }\\n    .app-navbar a:hover span:last-child {\\n      text-decoration: underline; }\\n\\n.app-content {\\n  font-family: 'Arial Narrow';\\n  background-color: tomato;\\n  padding: 20px; }\\n  .app-content h2.title {\\n    margin-top: 10px; }\\n\\nul.app-horizontal-nav {\\n  list-style: none;\\n  margin: 0px;\\n  padding: 0px;\\n  background-color: #f2f2f2;\\n  overflow: hidden; }\\n  ul.app-horizontal-nav li {\\n    float: left; }\\n  ul.app-horizontal-nav li.active a, ul.app-horizontal-nav a.active {\\n    background-color: #4caf50;\\n    color: white; }\\n  ul.app-horizontal-nav a {\\n    color: #333333;\\n    padding: 8px 16px;\\n    text-decoration: none;\\n    display: block;\\n    min-width: 60px; }\\n    ul.app-horizontal-nav a:hover {\\n      background-color: #555;\\n      color: white; }\\n\\n.app-group {\\n  border-left: 2px solid #333333;\\n  background-color: #FF3334;\\n  color: white;\\n  padding: 10px 3px;\\n  margin-bottom: 5px; }\\n  .app-group input {\\n    outline: none;\\n    color: #333333; }\\n    .app-group input:active {\\n      outline: none; }\\n\\n.app-group-container .app-group:nth-child(even) {\\n  background-color: #F75D37; }\\n\\n.app-input {\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  font-size: 12px;\\n  padding: 0px;\\n  margin: 0px;\\n  line-height: 12px; }\\n\\n.jumbotron {\\n  background-color: #f2f2f2 !important;\\n  border-radius: 0px !important; }\\n  .jumbotron a, .jumbotron button {\\n    border-radius: 0px !important; }\\n\\ncode {\\n  border-radius: 0px;\\n  margin: 0px;\\n  padding: 0px;\\n  font-family: 'Courier New'; }\\n\\npre {\\n  border-radius: 0px;\\n  padding: 0px;\\n  margin: 0px; }\\n\\nspan.app-break {\\n  display: block;\\n  height: 5px; }\\n\\n.form-group .form-control {\\n  border-radius: 0px; }\\n\\n.btn {\\n  border-radius: 0px; }\\n\\n.form-control {\\n  border: none; }\\n  .form-control:active {\\n    border: none;\\n    outline: 1px solid #333333; }\\n  .form-control:focus {\\n    border: none;\\n    outline: 1px solid #333333; }\\n\\n.btn:focus, .btn-default:focus, .btn[type=\\\"submit\\\"]:focus {\\n  outline: none;\\n  border: none; }\\n\\n.btn:active, .btn-default:active, .btn[type=\\\"submit\\\"]:active {\\n  outline: 1px solid #333333;\\n  border: none; }\\n\\nbootstrap-editor pre code {\\n  overflow: auto; }\\n\\n.app-vertical-nav {\\n  list-style: none;\\n  margin: 0px;\\n  padding: 0px; }\\n  .app-vertical-nav li {\\n    display: block;\\n    margin-bottom: 10px; }\\n  .app-vertical-nav li.active a, .app-vertical-nav a.active {\\n    background-color: #28ABE5;\\n    color: white; }\\n  .app-vertical-nav a {\\n    display: block;\\n    background-color: #f2f2f2;\\n    padding: 7px 20px;\\n    color: #333333; }\\n    .app-vertical-nav a:hover {\\n      background-color: #555;\\n      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);\\n      color: white; }\\n    .app-vertical-nav a:active {\\n      outline: 1px solid rgba(0, 0, 0, 0.5); }\\n\\n[ng\\\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\\n  display: none !important; }\\n\\n.app-bar {\\n  background-color: #000; }\\n  .app-bar button {\\n    background-color: #000;\\n    border: none;\\n    outline: none;\\n    color: #FFF;\\n    padding: 5px 10px;\\n    font-size: 16px;\\n    line-height: 29px; }\\n    .app-bar button:hover {\\n      background-color: #FFF;\\n      color: #000; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/app.scss\n// module id = 278\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"color-box {\\n  font-family: verdana;\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  display: block;\\n  width: 300px;\\n  height: 300px;\\n  background-color: #6F9ECE; }\\n  color-box h1 {\\n    font-size: 20px;\\n    margin: 0px;\\n    padding: 0px; }\\n  color-box ul {\\n    display: block;\\n    margin: 0px;\\n    padding: 0px;\\n    padding-top: 3px;\\n    list-style: none; }\\n  color-box li {\\n    overflow: hidden;\\n    margin-bottom: 2px; }\\n    color-box li .left, color-box li right {\\n      overflow: hidden; }\\n    color-box li .left {\\n      float: left;\\n      width: 250px; }\\n    color-box li .right {\\n      float: right;\\n      width: 50px; }\\n    color-box li button, color-box li .btn {\\n      float: right;\\n      margin: 0px;\\n      padding: 0px;\\n      padding: 0px 3px;\\n      margin: 3px; }\\n  color-box .color {\\n    width: 100%;\\n    margin-left: 3px;\\n    padding: 3px;\\n    border: 1px solid rgba(0, 0, 0, 0.5);\\n    font-size: 14px; }\\n    color-box .color .hex {\\n      float: right;\\n      margin-right: 3px;\\n      mix-blend-mode: multiply; }\\n  color-box form {\\n    display: block;\\n    line-height: 20px; }\\n    color-box form label {\\n      float: left;\\n      display: block;\\n      width: 50px; }\\n    color-box form .form-group {\\n      overflow: hidden; }\\n    color-box form .form-control {\\n      float: left;\\n      width: 250px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/components/color-box/color-box.scss\n// module id = 279\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".document-navigation {\\n  list-style: none;\\n  margin: 10px;\\n  padding: 0px; }\\n  .document-navigation li {\\n    float: left; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/document/document.scss\n// module id = 280\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/document.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(133).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Ch1\\u003ELogin.\\u003C\\u002Fh1\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"AuthCtrl.login(AuthCtrl.credentials)\\\" ng-if=\\\"!currentUser\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"AuthCtrl.credentials.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"AuthCtrl.credentials.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" type=\\\"submit\\\"\\u003ELogin.\\u003C\\u002Fbutton\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = \" \") ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Ca class=\\\"btn btn-default\\\" ui-sref=\\\"register\\\"\\u003EBecome a member.\\u003C\\u002Fa\\u003E\\u003C\\u002Fform\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/login/login.view.pug\n// module id = 310\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/login/login.view.pug?");

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"AuthCtrl.register(AuthCtrl.credentials)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"AuthCtrl.credentials.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"AuthCtrl.credentials.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword Confirmation.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"AuthCtrl.credentials.password2\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" type=\\\"submit\\\"\\u003EBecome a member.\\u003C\\u002Fbutton\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = \" \") ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Ca class=\\\"btn btn-default\\\" ui-sref=\\\"login\\\"\\u003ELogin.\\u003C\\u002Fa\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/register/register.view.pug\n// module id = 311\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/register/register.view.pug?");

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog\\\"\\u003EBlog.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog.post.index\\\"\\u003EPosts\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog.post.create\\\"\\u003ECreate a post.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.nav.pug\n// module id = 312\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.nav.pug?");

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"app-content w3-container\\\"\\u003E\\u003Ch2 class=\\\"title\\\"\\u003EBlog.\\u003C\\u002Fh2\\u003E\" + (null == (pug_interp = __webpack_require__(312).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.view.pug\n// module id = 313\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.view.pug?");

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003ECreate a new post.\\u003C\\u002Fh3\\u003E\\u003Cform class=\\\"app-form\\\" id=\\\"create-post-form\\\" ng-submit=\\\"vm.createPost(vm.post)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003ETitle.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"vm.post.title\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EContent.\\u003C\\u002Flabel\\u003E\\u003Ctextarea class=\\\"form-control\\\" ng-model=\\\"vm.post.body\\\"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" type=\\\"submit\\\"\\u003ECreate new post.\\u003C\\u002Fbutton\\u003E\\u003Cscript\\u003E$('#create-post-form input').focus();\\u003C\\u002Fscript\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/views/create.view.pug\n// module id = 314\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/views/create.view.pug?");

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EPage of posts.\\u003C\\u002Fh3\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/views/index.view.pug\n// module id = 315\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/views/index.view.pug?");

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EThis is the home of blog.\\u003C\\u002Fh3\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/views/home.view.pug\n// module id = 316\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/views/home.view.pug?");

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul\\u003E\\u003Cli ng-repeat=\\\"color in colors\\\"\\u003E\\u003Cdiv class=\\\"left\\\"\\u003E\\u003Cdiv class=\\\"color\\\" ng-style=\\\"{'background-color': color.hex}\\\"\\u003E \\u003Cspan class=\\\"name\\\"\\u003E{{ color.name }}\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"hex\\\"\\u003E{{ color.hex }}\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"right\\\"\\u003E\\u003Cbutton class=\\\"btn btn-danger btn-xs\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-remove\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C!-- button.btn.btn-default.btn-xs \\u002F\\u002F span.glyphicon.glyphicon-remove--\\u003E\\u003C\\u002Fbutton\\u003E\\u003C!-- div.btn-group(role=\\\"group\\\", aria-label=\\\"label\\\")\\u002F\\u002F button.btn.btn-default.btn-xs\\n   \\u002F\\u002F span.glyphicon.glyphicon-remove\\n\\u002F\\u002F button.btn.btn-default.btn-xs\\n   \\u002F\\u002F span.glyphicon.glyphicon-remove\\n--\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Chr\\u003E\\u003Cform ng-submit=\\\"addColor(color)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EHex.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003EAdd.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.template.pug\n// module id = 317\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.template.pug?");

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"w3-panel w3-light-gray\\\"\\u003E\\u003Ch4\\u003EThis is the footer.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EConsectetur expedita temporibus quia enim eum deleniti eius cum reprehenderit deleniti numquam. In eveniet eos ex ut quos! Deleniti aliquid qui qui sequi placeat laborum. Saepe asperiores odit nostrum accusantium.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/footer/footer.template.pug\n// module id = 318\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/footer/footer.template.pug?");

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnav class=\\\"app-navbar\\\"\\u003E\\u003Cul class=\\\"w3-bar w3-black\\\"\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"home\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-home\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EHome\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial\\\"\\u003E\\u003Cspan class=\\\"glyphicon glyphicon-book\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ETutorial\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks\\\"\\u003E\\u003Cspan class=\\\"glyphicon glyphicon-list-alt\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ETasks\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog\\\"\\u003E\\u003Cspan class=\\\"glyphicon glyphicon-bold\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EBlog\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\"\\u003E\\u003Ca href=\\\"\\u002F\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-link\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ELink\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item w3-right\\\" ng-if=\\\"!currentUser\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"login\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-link\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ELogin\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item w3-right\\\" ng-if=\\\"currentUser\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca href=\\\"#\\\" ng-click=\\\"NavCtrl.logout()\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-link\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ELog out\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item w3-right\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"dashboard\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-dashboard\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EDashboard\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003C\\u002Fnav\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/navbar/navbar.template.pug\n// module id = 319\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/navbar/navbar.template.pug?");

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"w3-container\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(322).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Ch1\\u003EDocument Template.\\u003C\\u002Fh1\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/document.template.pug\n// module id = 320\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/document.template.pug?");

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EIndex.\\u003C\\u002Fh2\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/index/index.template.pug\n// module id = 321\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/index/index.template.pug?");

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"document-navigation\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"document.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"document.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/partials/navbar.pug\n// module id = 322\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/partials/navbar.pug?");

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch1\\u003EAimbooster.\\u003C\\u002Fh1\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/aimbooster/aimbooster.view.pug\n// module id = 323\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/aimbooster/aimbooster.view.pug?");

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003C!-- Header.--\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch1\\u003EW3 View.\\u003C\\u002Fh1\\u003E\\u003Chr\\u003E\\u003Ca ui-sref=\\\"home\\\"\\u003EHome.\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Ch2\\u003EResponsive.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing a reprehenderit perferendis ducimus pariatur vitae necessitatibus sit? Voluptas molestiae illo cupiditate aliquam odio accusantium possimus corporis ut sit omnis quam natus pariatur sequi? Necessitatibus enim amet nemo quaerat.\\u003C\\u002Fp\\u003E\\u003Ch3\\u003EHalf and half.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-half w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EOne Half.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003ESit ea nulla rerum maxime numquam! Cumque hic mollitia id culpa repellendus quasi ut? Nisi nam pariatur libero praesentium quas delectus nam rem, sapiente. Sit ipsa mollitia alias beatae tempora.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-half w3-container w3-red\\\"\\u003E\\u003Ch4\\u003ESecond Half.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet autem incidunt adipisci laboriosam ea minus. Aut molestiae delectus autem debitis minima? Itaque earum animi beatae sint incidunt doloremque optio, ea illo iste assumenda blanditiis! Saepe sint itaque facere.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003EOne Third.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet facere repudiandae repellendus accusamus asperiores. Ipsa ea eligendi sapiente vitae assumenda? Optio quam atque eos a praesentium enim? Ipsam unde placeat repudiandae quos itaque excepturi provident odio? Dolor autem.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-red\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet facere repudiandae repellendus accusamus asperiores. Ipsa ea eligendi sapiente vitae assumenda? Optio quam atque eos a praesentium enim? Ipsam unde placeat repudiandae quos itaque excepturi provident odio? Dolor autem.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-blue\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet facere repudiandae repellendus accusamus asperiores. Ipsa ea eligendi sapiente vitae assumenda? Optio quam atque eos a praesentium enim? Ipsam unde placeat repudiandae quos itaque excepturi provident odio? Dolor autem.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003ETwo third.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-twothird w3-green w3-container\\\"\\u003E\\u003Ch4\\u003ETwo Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EElit sed quae ratione ex obcaecati. Corrupti optio ea id aliquid blanditiis reiciendis in minus tempora? Similique minus debitis adipisci recusandae debitis aliquid non eligendi sequi cupiditate explicabo exercitationem ratione.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-red\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum placeat quos exercitationem omnis obcaecati soluta quaerat quam error corrupti nihil. Quod facere debitis exercitationem perspiciatis reprehenderit neque, quo maxime dolorem nulla nostrum, error inventore quia accusantium. Reiciendis dolorem?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003EQuarter.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-red\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-blue\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-yellow\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003EThree quarter.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-threequarter w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003Cp\\u003ESit nihil repellat reiciendis tempore officiis eaque, eveniet autem a, quae? Natus nisi suscipit voluptates facere necessitatibus aut id quam exercitationem veniam! Ducimus exercitationem iste repellendus amet obcaecati ad autem?\\u003C\\u002Fp\\u003E\\u003Cp\\u003EAmet modi temporibus labore fugit ut, optio adipisci vero voluptate! Rerum id vero veniam velit velit? Similique esse ut eum voluptatum tempora rerum numquam. Odio commodi cumque ea corporis et.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-yellow\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003ERest.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-col w3-red w3-container\\\" style=\\\"width: 150px;\\\"\\u003E \\u003Cbr\\u003E\\u003Cp\\u003E150px.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-blue w3-rest w3-container\\\"\\u003E\\u003Cbr\\u003E\\u003Cp\\u003ERest.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Ch1\\u003EHeader.\\u003C\\u002Fh1\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container w3-light-gray\\\"\\u003E\\u003Cbr\\u003E\\u003Cp\\u003EConsectetur sed iure error consequuntur alias? Eligendi voluptatum reprehenderit consequatur fugit dignissimos. Porro cumque perferendis expedita rerum odit repudiandae voluptas perferendis cupiditate excepturi voluptatem. Nesciunt repudiandae placeat at quaerat eveniet.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Cbr\\u003E\\u003Cp\\u003EFooter.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white w3-hover-blue\\\"\\u003E\\u003Ch2\\u003ELondon.\\u003C\\u002Fh2\\u003E\\u003Cp class=\\\"w3-text-black\\\"\\u003EAdipisicing earum repudiandae provident corporis necessitatibus, reprehenderit? Expedita placeat sit corrupti officia porro? Ab eveniet ex illum qui reiciendis ex. Praesentium veritatis ipsam laboriosam corporis voluptatum dignissimos. Autem assumenda itaque!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Ch2\\u003ETable.\\u003C\\u002Fh2\\u003E\\u003Cp class=\\\"w3-text-black\\\"\\u003ESit sint aspernatur reprehenderit ad maiores laboriosam. Dignissimos sunt cumque similique quidem id ratione temporibus id et quia. Corrupti omnis dolore neque autem necessitatibus dolor blanditiis itaque recusandae? Ad atque.\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Ch3\\u003ESample data.\\u003C\\u002Fh3\\u003E\\u003Ctable class=\\\"w3-table w3-striped w3-border\\\"\\u003E\\u003Cthead\\u003E\\u003Ctr class=\\\"w3-light-gray\\\"\\u003E\\u003Cth\\u003EName\\u003C\\u002Fth\\u003E\\u003Cth\\u003EEmail\\u003C\\u002Fth\\u003E\\u003Cth\\u003EPassword\\u003C\\u002Fth\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Fthead\\u003E\\u003Ctbody\\u003E\\u003Ctr ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Ctd\\u003EWilliam Valhakis\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Ewilliam.valhakis@gmail.com\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Eihavenopassword\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Ftbody\\u003E\\u003C\\u002Ftable\\u003E\\u003Chr\\u003E\\u003Ch3\\u003ESample data.\\u003C\\u002Fh3\\u003E\\u003Ctable class=\\\"w3-table-all\\\"\\u003E\\u003Cthead class=\\\"w3-light-gray\\\"\\u003E\\u003Ctr\\u003E\\u003Cth\\u003EName\\u003C\\u002Fth\\u003E\\u003Cth\\u003EEmail\\u003C\\u002Fth\\u003E\\u003Cth\\u003EPassword\\u003C\\u002Fth\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Fthead\\u003E\\u003Ctbody\\u003E\\u003Ctr ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Ctd\\u003EWilliam Valhakis\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Ewilliam.valhakis@gmail.com\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Eihavenopassword\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Ftbody\\u003E\\u003C\\u002Ftable\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EButtons with width of 33.3%.\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-bar\\\"\\u003E\\u003Cdiv class=\\\"w3-bar-item w3-button w3-red\\\" style=\\\"width: 33.3%;\\\"\\u003EButton.\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-bar-item w3-button w3-green\\\" style=\\\"width: 33.3%;\\\"\\u003EButton.\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-bar-item w3-button w3-blue\\\" style=\\\"width: 33.3%;\\\"\\u003EButton.\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003ENavigation bar.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-bar w3-black\\\"\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-button w3-hover-text-red\\\"\\u003ELink.\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-button w3-hover-text-red\\\"\\u003ELink.\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-button w3-hover-text-red\\\"\\u003ELink.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EPanel.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003ESit incidunt molestiae omnis iste voluptate. Dolores ex deleniti dolores et delectus aliquid. Perferendis enim tempora iusto eum mollitia est? Accusantium fugit officiis harum quia consequuntur. Mollitia maxime minus earum.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EAlerts.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing molestias quo iste quam nesciunt obcaecati saepe voluptate illo. Magnam sit libero minima similique dicta autem a adipisci, consequatur placeat praesentium, eius eligendi architecto facilis nobis ea. Culpa facilis!\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-panel w3-red w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-red w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003EDanger.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EAdipisicing maxime debitis iste possimus consequuntur nulla consequatur vero. Aperiam quia delectus temporibus eius fuga. Molestiae explicabo consequuntur porro nihil est. Elit dolore provident dicta saepe voluptatem perferendis nesciunt ullam.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-yellow w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-yellow w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003EWarning.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum unde adipisicing illo exercitationem omnis sunt? Cupiditate voluptates eos culpa doloremque quas rem nihil quod. Quod fuga pariatur eius rerum corrupti odio cumque. Optio animi ut facilis quia totam!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-green w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-green w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003ESuccess.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum unde adipisicing illo exercitationem omnis sunt? Cupiditate voluptates eos culpa doloremque quas rem nihil quod. Quod fuga pariatur eius rerum corrupti odio cumque. Optio animi ut facilis quia totam!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-blue w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-blue w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003EInfo.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum unde adipisicing illo exercitationem omnis sunt? Cupiditate voluptates eos culpa doloremque quas rem nihil quod. Quod fuga pariatur eius rerum corrupti odio cumque. Optio animi ut facilis quia totam!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-card-4\\\"\\u003E\\u003Ch2\\u003EPanel as card.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing odio blanditiis ex omnis recusandae quibusdam voluptas natus, rem incidunt. Omnis est harum qui animi assumenda, quasi voluptatum. Nihil quo maxime voluptate fuga voluptatem? Ipsum blanditiis deleniti fugit veniam.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-round-large\\\"\\u003E\\u003Ch2\\u003ERounded panel.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EIpsum explicabo non itaque fugit inventore pariatur rerum suscipit veritatis fugiat error debitis, odit voluptates obcaecati est. In dolorem accusamus voluptatibus voluptatibus vel praesentium earum nihil repudiandae reiciendis dicta error?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003ELists.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003ELorem aspernatur cum laboriosam nemo quasi, laudantium dolore quaerat dolores! Quo fugiat id voluptatum aspernatur ex asperiores. Suscipit ducimus libero quaerat necessitatibus veritatis fugiat. Asperiores voluptatibus consequatur tempora ipsum ducimus.\\u003C\\u002Fp\\u003E\\u003Cul class=\\\"w3-list\\\"\\u003E\\u003Cli class=\\\"w3-display-container\\\" ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Cdiv\\u003EWilliam Valhakis.\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cspan class=\\\"w3-button w3-display-right\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Chr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EIcons.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing amet praesentium nemo ea fugiat. Sapiente alias accusamus officiis eligendi beatae totam in sunt labore aspernatur. Minima voluptatum alias tenetur reprehenderit at rem id. Molestiae quis autem veritatis sequi?\\u003C\\u002Fp\\u003E\\u003Cp\\u003EHome.\\u003Ci class=\\\"fa fa-home\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EBars.\\u003Ci class=\\\"fa fa-bars\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ELeft.\\u003Ci class=\\\"fa fa-arrow-left\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ERight.\\u003Ci class=\\\"fa fa-arrow-right\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ESearch.\\u003Ci class=\\\"fa fa-search\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EClose.\\u003Ci class=\\\"fa fa-close\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ERefresh.\\u003Ci class=\\\"fa fa-refresh\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ETrash.\\u003Ci class=\\\"fa fa-trash\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EMale.\\u003Ci class=\\\"fa fa-male\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ECar.\\u003Ci class=\\\"fa fa-car\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ETruck.\\u003Ci class=\\\"fa fa-truck\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EPlane.\\u003Ci class=\\\"fa fa-plane\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EForms.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EDolor fugit molestias dolorem sunt dolor, quis tempore modi ipsam ea, fuga culpa iure beatae. Expedita ut laboriosam corrupti architecto dolores quaerat, libero quis illo, esse corrupti doloremque vitae corporis.\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cdiv class=\\\"w3-container w3-red\\\"\\u003E\\u003Ch3\\u003EInput Form.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cform class=\\\"w3-container\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003Cbr\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003C\\u002Fform\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cdiv class=\\\"w3-container w3-green\\\"\\u003E\\u003Ch3\\u003EInput Form.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cform class=\\\"w3-container\\\"\\u003E\\u003Cbr\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cbr\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003C\\u002Fform\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cdiv class=\\\"w3-container w3-blue\\\"\\u003E\\u003Ch3\\u003EInput Form.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cform class=\\\"w3-container\\\"\\u003E\\u003Cbr\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\"\\u003E\\u003Cbr\\u003E\\u003Cbr\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\"\\u003E\\u003Cbr\\u003E\\u003Cbr\\u003E\\u003Cbutton class=\\\"w3-btn w3-blue\\\"\\u003ESubmit.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003ETags.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing possimus natus nisi nihil ab! Quia ad consequuntur natus veritatis nemo quaerat quibusdam ab aperiam, ratione voluptate sequi atque? Veniam veritatis voluptatibus eos doloribus libero. Optio similique perspiciatis iste?\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Cp\\u003E \\u003Cspan\\u003EStatus: \\u003Cspan class=\\\"w3-tag\\\"\\u003EDone.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cspan class=\\\"w3-tag w3-blue\\\"\\u003ENew.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E \\u003Cspan class=\\\"w3-tag w3-teal\\\"\\u003EMaybe Later.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge\\\"\\u003EA\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge w3-red\\\"\\u003EU\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge\\\"\\u003EG\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge w3-red\\\"\\u003EU\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge\\\"\\u003ES\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge w3-red\\\"\\u003ET\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cbr\\u003E\\u003Cp\\u003E\\u003Cspan class=\\\"w3-tag w3-spin w3-large w3-red w3-border w3-border-black\\\"\\u003ESPIN\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-leftbar w3-border-black w3-border\\\"\\u003E\\u003Ch2\\u003EPanel with left border.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003ELorem cum magnam aspernatur ad velit. Quasi repudiandae unde rerum quaerat consectetur autem maxime! Omnis necessitatibus a voluptatibus earum omnis dolores totam pariatur consectetur debitis magni similique commodi? Itaque fuga.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cbutton class=\\\"w3-btn\\\" onclick=\\\"this.nextSibling.style.display='block'\\\"\\u003ESHOW.\\u003C\\u002Fbutton\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-display-container\\\"\\u003E\\u003Ch2\\u003EHide panel.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EConsectetur maiores vitae saepe corporis in ducimus voluptatum veniam unde. Consectetur asperiores quae consectetur quas sequi, itaque? Cum ipsam eaque nemo nemo omnis amet! Iure harum perferendis fugiat nam provident.\\u003C\\u002Fp\\u003E\\u003Cspan class=\\\"w3-button w3-display-topright w3-black\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003ECLOSE.\\u003C\\u002Fspan\\u003E\\u003Cp\\u003EElit animi corrupti libero illo totam, ipsum elit! Suscipit assumenda ex obcaecati dolor aut voluptatem nisi qui sequi? Accusantium tenetur illum iste hic nulla dolore saepe ipsum, tempore. Porro nulla!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EFooter.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAmet assumenda aperiam porro cumque deleniti. Autem dolorem necessitatibus quaerat ad doloremque dolor quos! Quis accusantium voluptas fugiat sit repellendus! Consequuntur repellat deleniti tenetur magni provident, mollitia ipsa? Vitae voluptatibus.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-panel\\\" ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Ch3\\u003EItem {{ i }}.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EElit fuga harum repellat quisquam enim nihil quaerat et odit voluptas asperiores eaque totam impedit dolore itaque inventore iste incidunt quibusdam. Voluptas fuga aperiam quo dicta voluptatem. Magnam laudantium architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cp\\u003ESit eos ducimus repellendus quod nulla recusandae. Nesciunt a quisquam sunt odit quam? Earum laudantium iusto aspernatur itaque porro ab libero laboriosam suscipit, laboriosam ut veritatis optio unde fugit sunt.\\u003C\\u002Fp\\u003E\\u003Cp\\u003EConsectetur molestias earum harum at animi! Libero fugit quos magni in consequuntur porro consectetur vel! Omnis officia soluta dolores unde et nobis laudantium enim ipsam! Error explicabo sunt soluta voluptates?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/w3/w3.view.pug\n// module id = 324\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/w3/w3.view.pug?");

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"app-content\\\"\\u003E\\u003Ch1\\u003EDashboard.\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EWelcome \\u003Ci\\u003E{{ currentUser.email }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fh2\\u003E\\u003Cp\\u003E \\u003Ci\\u003E{{ currentUser.id }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003ELite Server\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAmet saepe aperiam iusto earum nemo sit ipsa ab quae id. Consequuntur aliquid itaque aliquid accusamus vel fuga facere distinctio omnis. Voluptate dignissimos odit quaerat cum aspernatur fuga? Impedit necessitatibus.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-bar w3-black\\\"\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.startClass()\\\" ng-click=\\\"lite.start()\\\"\\u003ESTART\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.stopClass()\\\" ng-click=\\\"lite.stop()\\\"\\u003ESTOP\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.statusClass()\\\" ng-click=\\\"lite.status()\\\"\\u003ESTATUS\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.openClass()\\\" ng-click=\\\"lite.open()\\\"\\u003EOPEN IN NEW TAB\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EPROJECTS\\u003C\\u002Fh2\\u003E\\u003Chr\\u003E\\u003Ch3\\u003EProject 01 - Example.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EConsectetur mollitia eum assumenda omnis optio beatae quam commodi deleniti corporis nemo nihil quisquam maiores labore beatae. Suscipit accusantium iste placeat quisquam accusamus amet officiis deserunt. Minus minima soluta quasi.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"app-bar\\\"\\u003E\\u003Cbutton ng-click=\\\"project01.start()\\\" ng-class=\\\"{'w3-disabled':project01.isOpen}\\\"\\u003ESTART\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-click=\\\"project01.stop()\\\" ng-class=\\\"{'w3-disabled':!project01.isOpen}\\\"\\u003ESTOP\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-click=\\\"project01.status()\\\" ng-class=\\\"{'w3-green':project01.isOpen, 'w3-red':!project01.isOpen}\\\"\\u003ESTATUS\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-click=\\\"project01.open()\\\" ng-class=\\\"{'w3-disabled':!project01.isOpen}\\\"\\u003EOPEN IN NEW TAB\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/dashboard/dashboard.view.pug\n// module id = 325\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/dashboard/dashboard.view.pug?");

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003C!-- include \\u002Fapp\\u002Fviews\\u002Fincludes\\u002F_jumbotron.pug--\\u003E\\u003Cbutton class=\\\"btn btn-primary\\\" ng-click=\\\"authenticate('facebook')\\\"\\u003E\\u003Cspan\\u003ESign in with Facebook.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton\\u003E\\u003Chr\\u003E\\u003Cul class=\\\"app-list\\\"\\u003E\\u003Cli ng-repeat=\\\"i in [0, 1, 2, 3, 4, 5]\\\"\\u003E\\u003Cspan\\u003EThis is my list item {{ i }}.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Cform class=\\\"app-form\\\"\\u003E\\u003Ch2 class=\\\"title\\\"\\u003ERegistration.\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EThe label of item.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EThe label of item.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EThe label of item.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EThe label of item.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default btn-block\\\"\\u003ESubmit form.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-blue\\\"\\u003E\\u003Cp\\u003EElit ab maxime odit maxime repellat quaerat ipsa aperiam accusamus quae corporis esse excepturi aspernatur officiis. Cumque tempora autem quam voluptates sit architecto sint voluptas eveniet fugiat! Iste quae nobis.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-black\\\"\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-container w3-red\\\"\\u003E\\u003Cp\\u003EAdipisicing illum ullam similique ipsa modi obcaecati adipisci debitis doloribus ullam totam. Error consectetur saepe officiis provident accusantium. Ad temporibus in inventore ipsa perferendis. Necessitatibus sapiente nihil placeat quisquam quasi.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container w3-red\\\"\\u003E\\u003Cp\\u003EAdipisicing illum ullam similique ipsa modi obcaecati adipisci debitis doloribus ullam totam. Error consectetur saepe officiis provident accusantium. Ad temporibus in inventore ipsa perferendis. Necessitatibus sapiente nihil placeat quisquam quasi.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-red\\\"\\u003E\\u003Cp\\u003EAdipisicing illum ullam similique ipsa modi obcaecati adipisci debitis doloribus ullam totam. Error consectetur saepe officiis provident accusantium. Ad temporibus in inventore ipsa perferendis. Necessitatibus sapiente nihil placeat quisquam quasi.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-red\\\"\\u003E\\u003Cp\\u003EAdipisicing illum ullam similique ipsa modi obcaecati adipisci debitis doloribus ullam totam. Error consectetur saepe officiis provident accusantium. Ad temporibus in inventore ipsa perferendis. Necessitatibus sapiente nihil placeat quisquam quasi.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-red\\\"\\u003E\\u003Ch3\\u003EDanger.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EDolor incidunt molestias dignissimos dignissimos saepe autem illum. Consequuntur suscipit cupiditate veritatis quos veniam quam vel asperiores obcaecati obcaecati sunt dolore, laborum accusamus. Veniam deleniti non cum beatae adipisci? Totam.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-black\\\"\\u003E\\u003Cdiv class=\\\"w3-panel w3-border w3-border-red\\\"\\u003E\\u003Cspan\\u003EAdipisicing nobis id voluptatem amet unde error. Consectetur praesentium cupiditate eius labore veniam eius officia blanditiis magnam optio consectetur! Quasi repellendus vero sequi aliquid quasi repellendus omnis vel! Ut ducimus!\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-border-left w3-border-red w3-pale-red\\\"\\u003E\\u003Cspan\\u003EElit neque illum architecto quia nam. Quis officia omnis sunt explicabo molestias sed quaerat minus. Laudantium quam eius molestiae maiores molestiae deserunt laborum natus impedit culpa cumque. Accusamus numquam omnis.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-card w3-yellow\\\"\\u003E\\u003Cp\\u003EConsectetur mollitia soluta provident architecto numquam. Doloribus animi vero in nemo assumenda. Unde illo consequatur beatae reprehenderit repudiandae. Vitae rem obcaecati cumque quos praesentium quos. Ad dignissimos sequi non culpa.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cheader class=\\\"w3-container w3-blue\\\"\\u003E\\u003Ch1\\u003EHeader.\\u003C\\u002Fh1\\u003E\\u003C\\u002Fheader\\u003E\\u003Cdiv class=\\\"w3-container w3-pale-blue\\\"\\u003E\\u003Cp\\u003ESit rem aspernatur molestias doloremque molestias, labore recusandae facere molestiae fuga eaque natus nisi blanditiis sit quidem dolor quia assumenda. Porro odio maxime rerum iure laudantium. Optio nemo natus veritatis.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cfooter class=\\\"w3-container w3-blue\\\"\\u003E\\u003Ch5\\u003EFooter.\\u003C\\u002Fh5\\u003E\\u003C\\u002Ffooter\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-light-gray\\\"\\u003E\\u003Ca ui-sref=\\\"blog\\\"\\u003ELink to blog.\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003C!-- div.rowdiv.col-sm-2\\n   ul.app-vertical-nav\\n      li(ui-sref-active=\\\"active\\\")\\n         a(ui-sref=\\\"mongoose\\\") Mongoose.\\n      li(ui-sref-active=\\\"active\\\")\\n         a(ui-sref=\\\"aimbooster\\\") Aimbooster.\\n      li(ui-sref-active=\\\"active\\\")\\n         a(ui-sref=\\\"w3\\\") W3.\\n      li\\n         a(href=\\\"\\u002Freact-app\\\") React App.\\ndiv.col-sm-8\\n   block content\\ndiv.col-sm-2\\n   ul.app-vertical-nav\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n      li\\n         a(href=\\\"#\\\") Link.\\n--\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/home/home.template.pug\n// module id = 326\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/home/home.template.pug?");

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EEditor view.\\u003C\\u002Fh2\\u003E\\u003Cmongoose-editor\\u003E\\u003C\\u002Fmongoose-editor\\u003E\\u003Cp ng-bind=\\\"code.body\\\"\\u003E\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/editor/editor.view.pug\n// module id = 327\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/editor/editor.view.pug?");

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EIndex view.\\u003C\\u002Fh2\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/index/index.view.pug\n// module id = 328\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/index/index.view.pug?");

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"app-content\\\"\\u003E\\u003Ch1\\u003EMongoose View.\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cdiv class=\\\"app-vertical-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"mongoose.index\\\"\\u003EIndex.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"mongoose.editor\\\"\\u003EEditor.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/mongoose.view.pug\n// module id = 329\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/mongoose.view.pug?");

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform ng-submit=\\\"TaskCtrl.new(TaskCtrl.task)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EContent.\\u003C\\u002Flabel\\u003E\\u003Ctextarea class=\\\"form-control\\\" ng-model=\\\"TaskCtrl.task.body\\\"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003ECreate new task.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/_new_task_form.pug\n// module id = 330\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/_new_task_form.pug?");

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EList of Tasks.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EElit cumque maxime quam quos sint inventore? Nulla quisquam modi repellat iure pariatur fugiat ad eos aspernatur error temporibus, velit qui aliquid eaque a ratione. Corporis perferendis recusandae at sed!\\u003C\\u002Fp\\u003E\\u003Cul class=\\\"w3-ul\\\"\\u003E\\u003Cli ng-repeat=\\\"task in TaskCtrl.tasks\\\"\\u003E\\u003Cp\\u003E{{ task.body }}\\u003C\\u002Fp\\u003E\\u003Cbutton class=\\\"btn btn-danger btn-xs\\\" ng-click=\\\"TaskCtrl.remove(task)\\\"\\u003ERemove.\\u003C\\u002Fbutton\\u003E\\u003Cdiv class=\\\"w3-panel w3-light-gray\\\"\\u003E\\u003Cjson-formatter json=\\\"task\\\" open=\\\"1\\\"\\u003E\\u003C\\u002Fjson-formatter\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/list.view.pug\n// module id = 331\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/list.view.pug?");

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks.list\\\"\\u003EList of tasks.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks.new\\\"\\u003ECreate a new task.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks.removed\\\"\\u003EList of removed tasks.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/nav.pug\n// module id = 332\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/nav.pug?");

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + (\"\\u003Ch3\\u003EPage to create a task.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003ESit possimus laudantium reiciendis adipisci soluta amet, numquam officiis tempore? Rem omnis odit eos provident debitis eos ratione in quaerat quidem cumque beatae minus a sint dolorum placeat repellendus ipsam?\\u003C\\u002Fp\\u003E\" + (null == (pug_interp = __webpack_require__(330).call(this, locals)) ? \"\" : pug_interp));;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/new.view.pug\n// module id = 333\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/new.view.pug?");

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EThis page should containd removed tasks.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EConsectetur nesciunt fuga dicta non sequi. Fuga inventore omnis animi aspernatur itaque distinctio eligendi reiciendis. Nulla enim eveniet dignissimos reprehenderit fugit nostrum dignissimos? Vero voluptate eos ex illum dolor quo!\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/removed.view.pug\n// module id = 334\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/removed.view.pug?");

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(133).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C!-- include \\u002Fbower_components\\u002Fexample.pug--\\u003E\\u003Cdiv class=\\\"app-content\\\"\\u003E\\u003Ch2\\u003ETasks.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EHere should be information about what should be done.\\u003C\\u002Fp\\u003E\" + (null == (pug_interp = __webpack_require__(332).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/task.view.pug\n// module id = 335\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/task.view.pug?");

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cp\\u003EThis is tutorial 01.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"app-group-container\\\"\\u003E\\u003Cdiv class=\\\"app-group\\\"\\u003EName: \\u003Cinput class=\\\"app-input\\\" type=\\\"text\\\" ng-model=\\\"name\\\"\\u003E\\u003Cspan\\u003E{{ ' Hello ' + name }}\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"app-group\\\" ng-init=\\\"color = '#FF0000'\\\"\\u003EColor: \\u003Cinput class=\\\"app-input\\\" style=\\\"background-color: {{ color }};\\\" value=\\\"{{color}}\\\" type=\\\"text\\\" ng-model=\\\"color\\\"\\u003E\\u003Cspan\\u003E{{ ' Hello ' + name }}\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"app-group\\\" ng-init=\\\"quantity = 23; price = 5\\\"\\u003E\\u003Ctable class=\\\"table table-bordered\\\" style=\\\"width: 150px; margin: 0px;\\\"\\u003E\\u003Ctbody\\u003E\\u003Ctr\\u003E\\u003Cth\\u003EQuantity: \\u003C\\u002Fth\\u003E\\u003Ctd\\u003E{{ quantity }}\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003Ctr\\u003E\\u003Cth\\u003EPrice: \\u003C\\u002Fth\\u003E\\u003Ctd\\u003E{{ price }}\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003Ctr\\u003E\\u003Cth\\u003ETotal in dollars: \\u003C\\u002Fth\\u003E\\u003Ctd\\u003E{{ quantity * price + ' $'}}\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Ftbody\\u003E\\u003C\\u002Ftable\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"app-group\\\" ng-init=\\\"points=[3, 5, 2, 8, 9]\\\"\\u003E\\u003Cspan\\u003EPoints: \\u003Cspan ng-repeat=\\\"point in points\\\"\\u003E{{ point + ' '}}\\u003C\\u002Fspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"app-group\\\" ng-init=\\\"person={name: 'William', lname: 'Valhakis', age: 23}\\\"\\u003E\\u003Cspan\\u003EPerson: {{ person.name + ' ' + person.lname + '; Age: ' + person.age }}\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"app-group\\\"\\u003E\\u003Ch4\\u003EPersons.\\u003C\\u002Fh4\\u003E\\u003Ctable class=\\\"table table-bordered\\\" style=\\\"width: 200px;\\\"\\u003E\\u003Cthead\\u003E\\u003Ctr\\u003E\\u003Cth\\u003EIndex\\u003C\\u002Fth\\u003E\\u003Cth\\u003EFirst name\\u003C\\u002Fth\\u003E\\u003Cth\\u003ELast name\\u003C\\u002Fth\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Fthead\\u003E\\u003Ctbody\\u003E\\u003Ctr ng-repeat=\\\"person in persons\\\"\\u003E\\u003Ctd style=\\\"text-align: center;\\\"\\u003E{{ $index }}\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003E{{ person.fname }}\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003E{{ person.lname }}\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Ftbody\\u003E\\u003C\\u002Ftable\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"app-group\\\"\\u003E\\u003Cspan\\u003EEmail: {{ ' ' }}\\u003C\\u002Fspan\\u003E\\u003Cform name=\\\"form\\\" style=\\\"display: inline;\\\"\\u003E\\u003Cinput class=\\\"app-input\\\" type=\\\"email\\\" name=\\\"email\\\" ng-model=\\\"text\\\"\\u003E\\u003C\\u002Fform\\u003E\\u003Cspan ng-show=\\\"form.email.$error.email\\\"\\u003E This is not a valid email.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/components/O01-tutorial/O01-tutorial.template.pug\n// module id = 336\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/components/O01-tutorial/O01-tutorial.template.pug?");

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EHandsontable.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EAdipisicing earum autem laudantium porro ducimus! Esse sunt officia maxime quidem eius. Nobis unde culpa a deleniti illum vero voluptates. Eos ea dignissimos laborum unde quod maxime nam. Veniam repellendus.\\u003C\\u002Fp\\u003E\\u003Cdiv id=\\\"handsontable\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cscript\\u003Evar hot = new Handsontable(document.getElementById('handsontable'), {\\nrowHeaders: true,\\ncolHeaders: true\\n});\\n\\u003C\\u002Fscript\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/components/handsontable/views/handsontable.view.pug\n// module id = 337\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/components/handsontable/views/handsontable.view.pug?");

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-vertical-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.users\\\"\\u003EUsers.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.posts\\\"\\u003EPosts.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.kittens\\\"\\u003EKittens.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.codes\\\"\\u003ECodes.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.authors\\\"\\u003EAuthors.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.stories\\\"\\u003EStories.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E\\u003Ca href=\\\"#\\\"\\u003Elink\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E\\u003Ca href=\\\"#\\\"\\u003Elink\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E\\u003Ca href=\\\"#\\\"\\u003Elink\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E\\u003Ca href=\\\"#\\\"\\u003Elink\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/_navbar.pug\n// module id = 338\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/_navbar.pug?");

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EAuthor Master View.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003ELorem voluptate magnam pariatur dolor aliquam optio. Eum delectus distinctio aperiam hic aliquam. Consequatur earum aperiam excepturi soluta cum. Autem neque dolor veniam inventore animi molestiae consequatur inventore. Architecto dignissimos.\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/author/master.view.pug\n// module id = 339\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/author/master.view.pug?");

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003ECode Master View.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EAdipisicing incidunt consequuntur a dolorum nam! Repellat numquam odit hic laudantium ad odit suscipit adipisci. Excepturi aliquam commodi magni iure corporis qui, quae, dolorum officia beatae deserunt modi, aperiam repellendus?\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/code/master.view.pug\n// module id = 340\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/code/master.view.pug?");

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.kittens.index\\\"\\u003EKitten Home.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.kittens.create\\\"\\u003ECreate Kitten.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/kitten/_nav.pug\n// module id = 341\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/kitten/_nav.pug?");

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003EKitten Create View.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAdipisicing delectus beatae deleniti tempore ea? Quisquam excepturi ipsa veritatis voluptate voluptates veritatis explicabo? Eius quidem omnis nesciunt voluptatem at rem. Possimus eaque at optio accusamus magni! Ratione vel natus.\\u003C\\u002Fp\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"KittenCtrl.create(KittenCtrl.kitten)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"KittenCtrl.kitten.name\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003ECreate Kitten.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/kitten/create.view.pug\n// module id = 342\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/kitten/create.view.pug?");

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003EKitten Home View.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003ELorem corporis pariatur quaerat ratione beatae. Tenetur optio inventore ea accusamus ad ullam at aut fugit doloremque aperiam nam provident quibusdam optio consequuntur! Nemo modi voluptatem adipisci unde error nostrum!\\u003C\\u002Fp\\u003E\\u003Ch4\\u003EList of kittens.\\u003C\\u002Fh4\\u003E\\u003Cul class=\\\"w3-ul w3-border\\\"\\u003E\\u003Cli class=\\\"w3-pale-blue\\\" ng-repeat=\\\"kitten in KittenCtrl.kittens\\\" style=\\\"margin-bottom: 5px;\\\"\\u003E\\u003Ch5\\u003E{{ kitten.name }}\\u003C\\u002Fh5\\u003E\\u003Cp\\u003E\\u003Ci\\u003EBirthday: {{ kitten.birthday | date:'dd.MM.yyyy HH:mm:ss' }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cbutton class=\\\"btn btn-default btn-xs pull-right\\\" ng-click=\\\"KittenCtrl.remove(kitten)\\\"\\u003ERemove Kitten.\\u003C\\u002Fbutton\\u003E\\u003Cdiv class=\\\"clearfix\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/kitten/index.view.pug\n// module id = 343\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/kitten/index.view.pug?");

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + (\"\\u003Ch3\\u003EKitten Master View.\\u003C\\u002Fh3\\u003E\" + (null == (pug_interp = __webpack_require__(341).call(this, locals)) ? \"\" : pug_interp));;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/kitten/master.view.pug\n// module id = 344\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/kitten/master.view.pug?");

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EMongoose master view.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003ELorem dicta corporis laudantium voluptas ex! Tempore eum sapiente illo ullam natus in. Adipisci ea voluptates quam quis minus ipsa hic. Et ut exercitationem repellat at minima possimus similique dignissimos!\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(338).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch3\\u003EViews.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EAmet asperiores soluta consequuntur similique architecto sequi consequatur architecto? Fugiat libero esse hic cupiditate consectetur dolor velit vero soluta. Aliquam sit ipsam quod beatae quae esse beatae tempora. Aliquid explicabo.\\u003C\\u002Fp\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/mongoose.master.view.pug\n// module id = 345\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/mongoose.master.view.pug?");

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003EPost create.\\u003C\\u002Fh4\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"PostCtrl.create(PostCtrl.post)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003ETitle.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"PostCtrl.post.title\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EContent.\\u003C\\u002Flabel\\u003E\\u003Ctextarea class=\\\"form-control\\\" ng-model=\\\"PostCtrl.post.body\\\"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003ECreate.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/post/create.view.pug\n// module id = 346\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/post/create.view.pug?");

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EThis is post index view.\\u003C\\u002Fh3\\u003E\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.posts.list\\\"\\u003EList of posts.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.posts.create\\\"\\u003ECreate new post.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/post/index.view.pug\n// module id = 347\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/post/index.view.pug?");

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003EList of posts.\\u003C\\u002Fh4\\u003E\\u003Cbutton class=\\\"btn btn-primary\\\" ng-click=\\\"PostCtrl.loadPosts()\\\"\\u003EReload posts.\\u003C\\u002Fbutton\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = \" \") ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cbutton class=\\\"btn btn-primary\\\" ng-click=\\\"PostCtrl.drop()\\\"\\u003ERemove posts collection.\\u003C\\u002Fbutton\\u003E\\u003Cbr\\u003E\\u003Cbr\\u003E\\u003Cul class=\\\"w3-ul\\\"\\u003E\\u003Cli class=\\\"w3-red\\\" ng-repeat=\\\"post in PostCtrl.posts\\\" style=\\\"margin-bottom: 9px;\\\"\\u003E\\u003Ch5\\u003E{{ post.title }}\\u003C\\u002Fh5\\u003E\\u003Cdiv class=\\\"w3-container w3-pale-red\\\"\\u003E\\u003Cjson-formatter json=\\\"post\\\" open=\\\"true\\\"\\u003E\\u003C\\u002Fjson-formatter\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cbutton class=\\\"btn btn-primary btn-xs\\\" ng-click=\\\"PostCtrl.remove(post)\\\"\\u003ERemove post.\\u003C\\u002Fbutton\\u003E\\u003Cbr\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/post/list.view.pug\n// module id = 348\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/post/list.view.pug?");

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EStory Master View.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum rerum eveniet tempore et incidunt? Inventore cum sint voluptatum numquam cupiditate repellendus necessitatibus praesentium odio recusandae possimus quibusdam velit laudantium natus non sequi porro? Magni quos asperiores deleniti qui.\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/story/master.view.pug\n// module id = 349\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/story/master.view.pug?");

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003EAdd user.\\u003C\\u002Fh4\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"UserCtrl.add(UserCtrl.user)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"UserCtrl.user.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"UserCtrl.user.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003EAdd.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/user/create.view.pug\n// module id = 350\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/user/create.view.pug?");

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EThis is user index view.\\u003C\\u002Fh3\\u003E\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.users.list\\\"\\u003EList of all users.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.mongoose.users.create\\\"\\u003ECreate new user.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/user/index.view.pug\n// module id = 351\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/user/index.view.pug?");

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003EList of users.\\u003C\\u002Fh4\\u003E\\u003Cbutton class=\\\"btn btn-primary\\\" ng-click=\\\"UserCtrl.loadUsers()\\\"\\u003EReload users.\\u003C\\u002Fbutton\\u003E\\u003Cbr\\u003E\\u003Cbr\\u003E\\u003Cul class=\\\"w3-ul\\\"\\u003E\\u003Cli class=\\\"w3-red\\\" ng-repeat=\\\"user in UserCtrl.users\\\" style=\\\"margin-bottom: 9px;\\\"\\u003E\\u003Ch5\\u003E{{ user.email }}\\u003C\\u002Fh5\\u003E\\u003Cdiv class=\\\"w3-container w3-pale-red\\\"\\u003E\\u003Cjson-formatter json=\\\"user\\\" open=\\\"true\\\"\\u003E\\u003C\\u002Fjson-formatter\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cbutton class=\\\"btn btn-primary btn-xs\\\" ng-click=\\\"UserCtrl.remove(user)\\\"\\u003ERemove user.\\u003C\\u002Fbutton\\u003E\\u003Cbr\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/modules/mongoose/views/user/list.view.pug\n// module id = 352\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/modules/mongoose/views/user/list.view.pug?");

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial\\\"\\u003ETutorial\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.handsontable\\\"\\u003EHandsontable\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.highlightjs\\\"\\u003EHighlightJS\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.ace\\\"\\u003EAce Editor\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial.angular\\\"\\u003EAngular\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/partials/nav.pug\n// module id = 353\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/partials/nav.pug?");

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"app-content\\\"\\u003E\\u003Ch2\\u003ETutorial page.\\u003C\\u002Fh2\\u003E\" + (null == (pug_interp = __webpack_require__(353).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/tutorial.view.pug\n// module id = 354\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/tutorial.view.pug?");

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EAce Editor\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EElit esse quam perferendis provident optio magni distinctio nulla minus aliquid deleniti porro id numquam, ea, incidunt ullam ullam voluptates, iusto, impedit fuga laborum! Laudantium maiores ex dolorem minima aspernatur.\\u003C\\u002Fp\\u003E\\u003Cdiv id=\\\"editor\\\" style=\\\"min-height: 300px;\\\"\\u003E\\u003Cscript\\u003Evar editor = ace.edit($('#editor')[0]);\\neditor.setTheme('ace\\u002Ftheme\\u002Fmonokai');\\neditor.getSession().setMode('ace\\u002Fmode\\u002Fjavascript');\\neditor.setKeyboardHandler('ace\\u002Fkeyboard\\u002Fvim');\\nace.config.loadModule('ace\\u002Fkeyboard\\u002Fvim', function(m) {\\n   var VimApi = ace.require('ace\\u002Fkeyboard\\u002Fvim').CodeMirror.Vim;\\n   VimApi.defineEx('write', 'w', function(cm, input) {\\n      console.log('I should write a book.');\\n      cm.ace.execCommand('save');\\n   });\\n});\\u003C\\u002Fscript\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/ace.view.pug\n// module id = 355\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/ace.view.pug?");

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EAngular.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003ELorem assumenda eaque rem voluptas rem totam nobis quibusdam in error. Dolore quibusdam fuga libero necessitatibus commodi provident sunt. Beatae reiciendis quidem id sit omnis necessitatibus? In animi velit maiores.\\u003C\\u002Fp\\u003E\\u003Ch3\\u003EHardcoded samples.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003ESit accusamus eos at molestiae fugiat cumque! Aliquam quia recusandae est dignissimos reprehenderit beatae repellat. Nam impedit quia magnam tempore non. Necessitatibus at maiores animi voluptatem non quibusdam! Dicta omnis.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-container w3-light-gray\\\"\\u003E\\u003Ch4\\u003EData Binding.\\u003C\\u002Fh4\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code javascript\\\"\\u003Evar app = angular.module('app', []);\\n\\napp.run(function($rootScope) {\\n   $rootScope.color = 'red';\\n});\\n\\napp.controller('MyController', function($scope) {\\n   $scope.color = 'red';\\n\\n   $scope.name = 'William Valhakis';\\n\\n   $scope.persons = [{\\n      id: 1,\\n      name: \\\"Person Name\\\"\\n   },{\\n      id: 2,\\n      name: \\\"Person Name\\\"\\n   },{\\n      id: 3,\\n      name: \\\"Person Name\\\"\\n   }];\\n\\n   $scope.click = function() {\\n      console.log('clicked');\\n   };\\n});\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cspan class=\\\"app-break\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code pug\\\"\\u003Ebutton(ng-click=\\\"click()\\\")\\n\\nul\\n   li(ng-repeat=\\\"person in persons\\\")\\n      span(ng-bind=\\\"person.name\\\")\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-container w3-light-gray\\\"\\u003E\\u003Ch4\\u003EModule and Controller.\\u003C\\u002Fh4\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code pug\\\"\\u003Ediv(ng-app=\\\"app\\\", ng-controller=\\\"MainController as main\\\")\\n   input(ng-model=\\\"name\\\")\\n   p \\u003C% name %\\u003E\\n   p(ng-bind=\\\"name\\\")\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cspan class=\\\"app-break\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code javascript\\\"\\u003Evar app = angular.module('app', []);\\napp.controller('MainController', function MainController() {\\n   $scope.name = 'William Valhakis';\\n});\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-container w3-light-gray\\\"\\u003E\\u003Ch4\\u003EForm Validation.\\u003C\\u002Fh4\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code pug\\\"\\u003Eform(name=\\\"form1\\\")\\n   label Email.\\n   input(type=\\\"email\\\", name=\\\"email\\\", ng-model=\\\"email\\\")\\n\\np {{ form1.email.$valid }}\\np {{ form1.email.$dirty }}\\np {{ form1.email.$touched }}\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cspan class=\\\"app-break\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code css\\\"\\u003Einput.ng-invalid {\\n   background-color: red;\\n}\\ninput.ng-valid {\\n   background-color: red;\\n}\\ninput.ng-pristine {\\n   background-color: red;\\n}\\ninput.ng-pending {\\n   background-color: red;\\n}\\ninput.ng-dirty {\\n   background-color: red;\\n}\\ninput.ng-empty {\\n   background-color: red;\\n}\\ninput.ng-not-empty {\\n   background-color: red;\\n}\\ninput.ng-touched {\\n   background-color: red;\\n}\\ninput.ng-untouched {\\n   background-color: red;\\n}\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-container w3-light-gray\\\"\\u003E\\u003Ch4\\u003EFilters to Experssions.\\u003C\\u002Fh4\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code pug\\\"\\u003Ep The name is \\u003C% name | uppercase %\\u003E\\np The name is \\u003C% name | lowercase %\\u003E\\np The price is \\u003C% price | currency %\\u003E\\n\\ninput(ng-model=\\\"text\\\")\\nul\\n   li(ng-repeat=\\\"name in names | filter : text\\\")\\n      {{ name }}\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-container w3-light-gray\\\"\\u003E\\u003Ch4\\u003EAjax.\\u003C\\u002Fh4\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code javascript\\\"\\u003Efunction MainController($http) {\\n   $http.get('\\u002Fapi\\u002Fusers').then(function(res) {\\n      console.log(res.data);\\n   });\\n\\n   $http({ method: 'GET', url: '\\u002Fapi\\u002Fusers' }).then(function(res) {\\n      console.log(res.data);\\n   });\\n}\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cscript\\u003E$('pre code.code').each(function(index, block) {\\n   hljs.highlightBlock(block); \\n});\\u003C\\u002Fscript\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/angular.view.pug\n// module id = 356\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/angular.view.pug?");

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EThis is the bootstrap view.\\u003C\\u002Fh3\\u003E\\u003Ch4\\u003EAdd new bootstrap element.\\u003C\\u002Fh4\\u003E\\u003Cform ng-submit=\\\"bs.addElement()\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EElement title.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EElement content.\\u003C\\u002Flabel\\u003E\\u003Cbootstrap-editor\\u003E\\u003C\\u002Fbootstrap-editor\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" type=\\\"submit\\\"\\u003EAdd element.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/bootstrap.view.pug\n// module id = 357\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/bootstrap.view.pug?");

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch2\\u003EDashboard.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EElit asperiores ea provident recusandae modi adipisicing voluptatem blanditiis repudiandae eligendi pariatur nostrum sequi assumenda officia. Non necessitatibus eligendi blanditiis accusantium ratione. Tempore nobis illum repellat aspernatur placeat veritatis repellat?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/dashboard.view.pug\n// module id = 358\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/dashboard.view.pug?");

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EHighlightJS\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum rem eveniet alias nobis saepe? Debitis quisquam nemo quis tempora laudantium velit. Ad doloribus eaque neque sint illum quibusdam recusandae. Ea id molestias iusto impedit nobis porro quis, ad!\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"javascript\\\" id=\\\"example-code\\\"\\u003Evar name = 'William Valhakis';\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code\\\"\\u003Ehljs.highlightBlock(document.getElementById('example-code'));\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code\\\"\\u003E$('pre code.code').each(function(i, block) { hljs.highlightBlock(block); });\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code\\\"\\u003Evar number = 12;\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code\\\"\\u003Evar number = 13;\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-container w3-red\\\"\\u003E\\u003Ch4\\u003EHardcoded code.\\u003C\\u002Fh4\\u003E\\u003Cpre\\u003E\\u003Ccode class=\\\"code\\\"\\u003Evar app = angular.module('app', []);\\nvar app = angular.module('app', []);\\nvar app = angular.module('app', []);\\nvar app = angular.module('app', []);\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cscript\\u003Ehljs.highlightBlock(document.getElementById('example-code'));\\n\\u003C\\u002Fscript\\u003E\\u003Cscript\\u003E$(\\\"pre code.code\\\").each(function(i, block) { hljs.highlightBlock(block); });\\u003C\\u002Fscript\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/highlightjs.view.pug\n// module id = 359\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/highlightjs.view.pug?");

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch3\\u003EIndex.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EConsectetur tempore ab placeat voluptas asperiores commodi. Doloremque qui dolore iste unde vero autem excepturi inventore magni dolores autem rem, iusto neque perspiciatis delectus? Recusandae at doloribus in saepe beatae.\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Ch4\\u003EHandsontable\\u003C\\u002Fh4\\u003E\\u003Cp\\u003ELorem nisi voluptatibus corrupti eaque modi aut! A labore nam eos animi ea, at expedita suscipit provident! Quisquam ut ipsum quis quos ut tempora animi, reprehenderit dolorum voluptates hic. Nam.\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Ch4\\u003EHighlightJS\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EDolor perspiciatis nobis dicta libero architecto nemo aut. Libero aliquam sit vel necessitatibus nostrum autem facilis repellat quos culpa maxime nihil a harum? Officia dolorem incidunt veritatis necessitatibus beatae, nobis.\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Ch4\\u003EAce Editor\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EElit pariatur assumenda nam sit dolore, perspiciatis. Sapiente facilis accusamus quae accusamus consequatur consequuntur sit. Dolores repellendus obcaecati quaerat eaque repudiandae aut? Sed deleniti perferendis ducimus tempore asperiores incidunt? Repellat!\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Ch4\\u003EBootstrap\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EElit pariatur assumenda nam sit dolore, perspiciatis. Sapiente facilis accusamus quae accusamus consequatur consequuntur sit. Dolores repellendus obcaecati quaerat eaque repudiandae aut? Sed deleniti perferendis ducimus tempore asperiores incidunt? Repellat!\\u003C\\u002Fp\\u003E\\u003Ca class=\\\"btn btn-primary\\\" ui-sref=\\\"tutorial.bootstrap\\\"\\u003ELearn more.\\u003C\\u002Fa\\u003E\\u003Chr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/index.view.pug\n// module id = 360\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/index.view.pug?");

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch2\\u003EJWT Authentication.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EIpsum nemo deserunt deleniti rerum quo ipsum, nulla reiciendis voluptate voluptate accusamus a praesentium nesciunt itaque vel maiores saepe. Reprehenderit laborum hic quae placeat veritatis? Quo rerum ullam architecto dignissimos.\\u003C\\u002Fp\\u003E\\u003Ch3\\u003ELog in to your account.\\u003C\\u002Fh3\\u003E\\u003Cform ng-submit=\\\"UserCtrl.login(UserCtrl.user)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"UserCtrl.user.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"UserCtrl.user.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003ELogin.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\\u003Ch3\\u003EYour account login status.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003E{{ UserCtrl.currentUser }}\\u003C\\u002Fp\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" ng-click=\\\"UserCtrl.logout()\\\"\\u003ELog out.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/jwt-auth.view.pug\n// module id = 361\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/jwt-auth.view.pug?");

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch3\\u003ENode.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/node.view.pug\n// module id = 362\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/node.view.pug?");

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch3\\u003EProgramming Languages.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EAdipisicing architecto est minus repudiandae rerum nobis temporibus qui eaque ducimus. Ipsum perspiciatis et voluptate dicta rerum voluptatem consectetur explicabo officiis earum, harum. Explicabo laboriosam odio reprehenderit illum facilis libero?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/programming-languages.view.pug\n// module id = 363\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/programming-languages.view.pug?");

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch2\\u003EThis is protected page.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAmet atque libero non amet optio vero voluptatum quam? Perferendis accusantium ex asperiores nam sequi? Ipsum iste totam quos voluptates accusamus velit consequuntur nulla ipsam commodi autem. Eveniet culpa cumque?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/protected.view.pug\n// module id = 364\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/protected.view.pug?");

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch3\\u003ESections.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EElit debitis reiciendis asperiores qui corporis praesentium. Minima ab consequuntur voluptatum tempora officia inventore illo dolorem impedit laudantium. Nihil consectetur consequatur aperiam est voluptate ullam vel! Sed amet odio ratione.\\u003C\\u002Fp\\u003E\\u003Ch4\\u003EAdd new section.\\u003C\\u002Fh4\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"SectionCtrl.create(SectionCtrl.section)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"SectionCtrl.section.name\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003ECreate new section.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\\u003Ch4\\u003EList of sections.\\u003C\\u002Fh4\\u003E\\u003Cul class=\\\"w3-ul\\\"\\u003E\\u003Cli ng-repeat=\\\"section in SectionCtrl.sections\\\"\\u003E\\u003Cp\\u003E{{ section.name }}\\u003C\\u002Fp\\u003E\\u003Cbutton class=\\\"btn btn-danger btn-xs pull-right\\\" ng-click=\\\"SectionCtrl.remove(section)\\\"\\u003ERemove section.\\u003C\\u002Fbutton\\u003E\\u003Cdiv class=\\\"clearfix\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/sections.view.pug\n// module id = 365\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/sections.view.pug?");

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch3\\u003ETodos.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/todos.view.pug\n// module id = 366\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/todos.view.pug?");

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Ch2\\u003EThis is users page.\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-sm-5\\\"\\u003E\\u003Ch3\\u003EBecome a member.\\u003C\\u002Fh3\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"UserCtrl.register(UserCtrl.user)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"UserCtrl.user.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"UserCtrl.user.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword Confirmation.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"UserCtrl.user.password2\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003EBecome a member\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\\u003Ch3\\u003ELog in.\\u003C\\u002Fh3\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"UserCtrl.login(UserCtrl.user)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"UserCtrl.user.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"UserCtrl.user.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003ELogin.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\\u003Ch3\\u003EAbout user something.\\u003C\\u002Fh3\\u003E\\u003Cdiv ng-if=\\\"UserCtrl.currentUser\\\"\\u003EWelcome, {{ UserCtrl.currentUser.email }}.\\u003C\\u002Fdiv\\u003E\\u003Cdiv ng-if=\\\"UserCtrl.isAuthorized(UserCtrl.userRoles.normal)\\\"\\u003EYou're normal user.\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-sm-7\\\"\\u003E\\u003Ch3\\u003EList of users.\\u003C\\u002Fh3\\u003E\\u003Cul class=\\\"w3-ul\\\"\\u003E\\u003Cli ng-repeat=\\\"user in UserCtrl.users\\\"\\u003E\\u003Cjson-formatter class=\\\"w3-panel w3-light-gray\\\" json=\\\"user\\\" open=\\\"true\\\"\\u003E\\u003C\\u002Fjson-formatter\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cbr\\u003E\" + (null == (pug_interp = __webpack_require__(22).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/views/users.view.pug\n// module id = 367\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/views/users.view.pug?");

/***/ }),
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(278);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(41)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/app.scss\n// module id = 476\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.scss?");

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(279);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(41)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./color-box.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./color-box.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.scss\n// module id = 477\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.scss?");

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(280);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(41)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./document.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./document.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/document.scss\n// module id = 478\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/document.scss?");

/***/ }),
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//////////////////\n// WEBPACK FOOTER\n// fs (ignored)\n// module id = 482\n// module chunks = 0\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })
]),[273]);