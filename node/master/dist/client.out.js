webpackJsonp([0],Array(262).concat([
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"jumbotron\\\"\\u003E\\u003Ch1\\u003E{{ title ? title : 'Application' }}\\u003C\\u002Fh1\\u003E\\u003Cp\\u003E{{ description ? description : 'Ipsum ipsum exercitationem deleniti eos esse rerum veniam eaque ut numquam. Voluptates commodi eligendi ratione numquam consequatur porro id aut? Eligendi numquam perferendis odio harum asperiores cumque fuga quis possimus.' }}\\u003C\\u002Fp\\u003E\\u003Cul class=\\\"app-horizontal-nav w3-black\\\"\\u003E\\u003Cli\\u003E \\u003Ca class=\\\"w3-text-white\\\" href=\\\"\\u002Fserver\\\"\\u003EServer.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cp\\u003E \\u003Ci\\u003EID {{ currentUser.id }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Ci\\u003EEmail {{ currentUser.email }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cp\\u003E\\u003Ca class=\\\"btn btn-primary btn-lg\\\" href=\\\"\\u002F\\\" role=\\\"button\\\"\\u003ELearn more.\\u003C\\u002Fa\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/views/includes/_jumbotron.pug\n// module id = 262\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/views/includes/_jumbotron.pug?");

/***/ }),
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
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
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n__webpack_require__(881);\n\n__webpack_require__(330);\n\n__webpack_require__(686);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _angularUiRouter = __webpack_require__(323);\n\nvar _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);\n\nvar _ngstorage = __webpack_require__(689);\n\nvar _ngstorage2 = _interopRequireDefault(_ngstorage);\n\nvar _angularLocalStorage = __webpack_require__(320);\n\nvar _angularLocalStorage2 = _interopRequireDefault(_angularLocalStorage);\n\nvar _satellizer = __webpack_require__(879);\n\nvar _satellizer2 = _interopRequireDefault(_satellizer);\n\nvar _filters = __webpack_require__(391);\n\nvar _filters2 = _interopRequireDefault(_filters);\n\nvar _problem = __webpack_require__(431);\n\nvar _problem2 = _interopRequireDefault(_problem);\n\nvar _book = __webpack_require__(358);\n\nvar _book2 = _interopRequireDefault(_book);\n\nvar _note = __webpack_require__(419);\n\nvar _note2 = _interopRequireDefault(_note);\n\nvar _snippet = __webpack_require__(441);\n\nvar _snippet2 = _interopRequireDefault(_snippet);\n\nvar _mongoose = __webpack_require__(414);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _home = __webpack_require__(405);\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _services = __webpack_require__(433);\n\nvar _services2 = _interopRequireDefault(_services);\n\nvar _code = __webpack_require__(363);\n\nvar _code2 = _interopRequireDefault(_code);\n\nvar _history = __webpack_require__(400);\n\nvar _history2 = _interopRequireDefault(_history);\n\nvar _document = __webpack_require__(387);\n\nvar _document2 = _interopRequireDefault(_document);\n\nvar _modules = __webpack_require__(408);\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nvar _aimbooster = __webpack_require__(407);\n\nvar _aimbooster2 = _interopRequireDefault(_aimbooster);\n\nvar _mongoose3 = __webpack_require__(424);\n\nvar _mongoose4 = _interopRequireDefault(_mongoose3);\n\nvar _authJwt = __webpack_require__(338);\n\nvar _authJwt2 = _interopRequireDefault(_authJwt);\n\nvar _tasks = __webpack_require__(445);\n\nvar _tasks2 = _interopRequireDefault(_tasks);\n\nvar _auth = __webpack_require__(346);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _exercise = __webpack_require__(390);\n\nvar _exercise2 = _interopRequireDefault(_exercise);\n\nvar _blog = __webpack_require__(351);\n\nvar _blog2 = _interopRequireDefault(_blog);\n\nvar _navbar = __webpack_require__(374);\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nvar _todo = __webpack_require__(450);\n\nvar _todo2 = _interopRequireDefault(_todo);\n\nvar _footer = __webpack_require__(373);\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nvar _tutorial = __webpack_require__(461);\n\nvar _tutorial2 = _interopRequireDefault(_tutorial);\n\nvar _colorBox = __webpack_require__(371);\n\nvar _colorBox2 = _interopRequireDefault(_colorBox);\n\nvar _directives = __webpack_require__(384);\n\nvar _directives2 = _interopRequireDefault(_directives);\n\nvar _project = __webpack_require__(435);\n\nvar _project2 = _interopRequireDefault(_project);\n\nvar _liteServer = __webpack_require__(434);\n\nvar _liteServer2 = _interopRequireDefault(_liteServer);\n\nvar _appMainNav = __webpack_require__(380);\n\nvar _appMainNav2 = _interopRequireDefault(_appMainNav);\n\nvar _appModelJson = __webpack_require__(382);\n\nvar _appModelJson2 = _interopRequireDefault(_appModelJson);\n\nvar _appTime = __webpack_require__(383);\n\nvar _appTime2 = _interopRequireDefault(_appTime);\n\nvar _app = __webpack_require__(333);\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _app3 = __webpack_require__(334);\n\nvar _app4 = _interopRequireDefault(_app3);\n\nvar _login = __webpack_require__(377);\n\nvar _login2 = _interopRequireDefault(_login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import AppEditor from './directives/editor';\n\nvar app = _angular2.default.module('app', [\n/* 'ui.router',*/'ui.router.state.events', 'satellizer', /* 'jsonFormatter' ,*/ /* 'LocalStorageModule' , */\n_angularUiRouter2.default, 'ngStorage', _satellizer2.default, _angularLocalStorage2.default,\n/* Home, */_auth2.default, _authJwt2.default, _blog2.default, _tutorial2.default, _tasks2.default, _mongoose4.default, _aimbooster2.default, _navbar2.default, _footer2.default, _colorBox2.default, _modules2.default, _document2.default, _history2.default, _home2.default, _code2.default, _mongoose2.default, _appMainNav2.default, _book2.default, _problem2.default, _appTime2.default, /* AppEditor, */_snippet2.default, _todo2.default, _appModelJson2.default, _note2.default, _exercise2.default, _filters2.default, _directives2.default, _services2.default]);\n// import Home from './pages/home';\n\n// import './app.css';\n\napp.run(_app4.default);\napp.config(_app2.default);\n\napp.controller('LoginController', _login2.default);\napp.factory('LiteServer', _liteServer2.default);\napp.factory('Project01Service', _project2.default);\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/index.js\n// module id = 292\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/index.js?");

/***/ }),
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
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\n\nvar _dashboard = __webpack_require__(376);\n\nvar _dashboard2 = _interopRequireDefault(_dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction config($stateProvider, $authProvider) {\n   $authProvider.facebook({\n      clientId: 'Facebook App ID'\n   });\n\n   $authProvider.oauth2({\n      name: '',\n      url: '',\n      clientId: '',\n      redirectUri: '',\n      authorizationEndpoint: ''\n   });\n\n   $stateProvider.state('dashboard', {\n      url: '/dashboard',\n      template: __webpack_require__(734)(),\n      controller: _dashboard2.default,\n      controllerAs: 'DashCtrl',\n      resolve: {\n         auth: function resolveAuthentication(AuthResolver) {\n            return AuthResolver.resolve();\n         }\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/app.config.js\n// module id = 333\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.config.js?");

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = run;\nfunction run($rootScope, $state) {\n   if (!location.hash) {\n      $state.go('home');\n   }\n   $rootScope.$on('$stateChangeStart', function (event, to, params) {\n      if (to.redirectTo) {\n         event.preventDefault();\n         $state.go(to.redirectTo, params, { location: 'replace' });\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/app.run.js\n// module id = 334\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.run.js?");

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = routes;\nfunction routes() {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/auth.routes.js\n// module id = 335\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/auth.routes.js?");

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = run;\nfunction run($rootScope, $http, $localStorage, $location) {\n\n   if ($localStorage.currentUser) {\n      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;\n      $rootScope.currentUser = $localStorage.currentUser;\n   }\n\n   $rootScope.$on('$locationChangeStart', function (event, next, current) {\n      //var publicPages = ['/login'];\n      //var restrictedPage = publicPages.indexOf($location.path()) === -1;\n      //if (restrictedPage && !$localStorage.currentUser) {\n      //$location.path('/login');\n      //}\n   });\n\n   var testUser = {\n      email: 'ruudi170@gmail.com',\n      password: 'newbeginning'\n   };\n   /*\n   $httpBackend\n      .whenPOST('/api/authenticate')\n      .respond(function(method, url, data) {\n         var params = angular.fromJson(data);\n         console.log(params);\n         if (params.email === testUser.email && params.password === testUser.password) {\n            return [200, { token: 'fake-jwt-token' }, {}];\n         } else {\n            return [200, {}, {}];\n         }\n      });\n   */\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/auth.run.js\n// module id = 336\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/auth.run.js?");

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthService;\nfunction AuthService($rootScope, $http, $localStorage) {\n   var service = {};\n\n   service.login = function (email, password, callback) {\n      $http.post('/api/authenticate', { email: email, password: password }).then(function (response) {\n         if (response.data.token) {\n            $localStorage.currentUser = {\n               id: response.data.user._id,\n               email: email,\n               token: response.data.token\n            };\n            $rootScope.currentUser = $localStorage.currentUser;\n            $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;\n            callback(true);\n         } else {\n            callback(false);\n         }\n         console.log(response.data);\n      });\n   };\n\n   service.logout = function () {\n      delete $rootScope.currentUser;\n      delete $localStorage.currentUser;\n      $http.defaults.headers.common.Authorization = '';\n   };\n\n   service.currentUser = function () {\n      return $localStorage.currentUser;\n   };\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/auth.service.js\n// module id = 337\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/auth.service.js?");

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _auth = __webpack_require__(336);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _auth3 = __webpack_require__(335);\n\nvar _auth4 = _interopRequireDefault(_auth3);\n\nvar _auth5 = __webpack_require__(337);\n\nvar _auth6 = _interopRequireDefault(_auth5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.authJwt', [\n   // 'ngMockE2E', \n   // 'ngStorage'\n]).run(_auth2.default).config(_auth4.default).factory('Auth', _auth6.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth-jwt/index.js\n// module id = 338\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth-jwt/index.js?");

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthController;\nfunction AuthController($rootScope, $http, AuthService, AuthEvents, Auth) {\n   var _this = this;\n\n   this.credentials = {\n      email: '',\n      password: ''\n   };\n\n   this.setCurrentUser = function (user) {\n      $rootScope.currentUser = user;\n   };\n\n   this.login = function (credentials) {\n      AuthService.login(credentials).then(function (user) {\n         $rootScope.$broadcast(AuthEvents.loginSuccess);\n         _this.setCurrentUser(user);\n      }, function () {\n         $rootScope.$broadcast(AuthEvents.loginFailed);\n      });\n   };\n\n   this.login = function (credentials) {\n      Auth.login(credentials.email, credentials.password, function (result) {});\n   };\n\n   this.register = function (credentials) {\n      console.log(credentials);\n      $http.post('/api/auth/register', credentials).then(function (res) {\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.controller.js\n// module id = 339\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.controller.js?");

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = {\n   loginSuccess: 'auth-login-success',\n   loginFailed: 'auth-login-failed',\n   logoutSuccess: 'auth-logout-success',\n   sessionTimeout: 'auth-session-timeout',\n   notAuthenticated: 'auth-not-authenticated',\n   notAuthorized: 'auth-not-authorized'\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.events.js\n// module id = 340\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.events.js?");

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthInterceptor;\nfunction AuthInterceptor($rootScope, $q, AuthEvents) {\n   return {\n      responseError: function responseError(response) {\n         $rootScope.$broadcast({\n            401: AuthEvents.notAuthenticated,\n            403: AuthEvents.notAuthorized,\n            419: AuthEvents.sessionTimeout,\n            440: AuthEvents.sessionTimeout\n         }[response.status], response);\n         return $q.reject(response);\n      }\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.interceptor.service.js\n// module id = 341\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.interceptor.service.js?");

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthResolver;\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AuthResolver($q, $rootScope, $state) {\n   return {\n      resolve: function resolve() {\n         var deferred = $q.defer();\n         var unwatch = $rootScope.$watch('currentUser', function (currentUser) {\n            if (_angular2.default.isDefined(currentUser)) {\n               if (currentUser) {\n                  deferred.resolve(currentUser);\n               } else {\n                  deferred.reject();\n                  $state.go('login');\n               }\n               unwatch();\n            }\n         });\n         return deferred.promise;\n      }\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.resolver.service.js\n// module id = 342\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.resolver.service.js?");

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\nfunction routes($httpProvider, $stateProvider) {\n   $httpProvider.interceptors.push(['$injector', function ($injector) {\n      return $injector.get('AuthInterceptor');\n   }]);\n   $stateProvider.state('login', {\n      url: '/login',\n      template: __webpack_require__(693)(),\n      controller: 'AuthController',\n      controllerAs: 'AuthCtrl'\n   }).state('register', {\n      url: '/register',\n      template: __webpack_require__(694)(),\n      controller: 'AuthController',\n      controllerAs: 'AuthCtrl'\n   }).state('logout', {\n      url: '/logout',\n      controller: function controller(Auth) {\n         // Auth.logout();\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.routes.js\n// module id = 343\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.routes.js?");

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = run;\nfunction run($httpBackend) {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.run.js\n// module id = 344\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.run.js?");

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AuthService;\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AuthService($http, Session) {\n   var service = {};\n\n   service.login = function (credentials) {\n      return $http.post('/api/auth/login', credentials).then(function (res) {\n         Session.create(res.data.sessionId, res.data.user._id, res.data.user.group);\n         return res.data.user;\n      });\n   };\n\n   service.isAuthenticated = function () {\n      return !!Session.userId;\n   };\n\n   service.isAuthorized = function (authorizedRoles) {\n      if (!_angular2.default.isArray(authorizedRoles)) {\n         authorizedRoles = [authorizedRoles];\n      }\n      return service.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1;\n   };\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/auth.service.js\n// module id = 345\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/auth.service.js?");

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _auth = __webpack_require__(343);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _auth3 = __webpack_require__(340);\n\nvar _auth4 = _interopRequireDefault(_auth3);\n\nvar _auth5 = __webpack_require__(339);\n\nvar _auth6 = _interopRequireDefault(_auth5);\n\nvar _auth7 = __webpack_require__(344);\n\nvar _auth8 = _interopRequireDefault(_auth7);\n\nvar _authService = __webpack_require__(345);\n\nvar _authService2 = _interopRequireDefault(_authService);\n\nvar _user = __webpack_require__(348);\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _session = __webpack_require__(347);\n\nvar _session2 = _interopRequireDefault(_session);\n\nvar _authInterceptor = __webpack_require__(341);\n\nvar _authInterceptor2 = _interopRequireDefault(_authInterceptor);\n\nvar _authResolver = __webpack_require__(342);\n\nvar _authResolver2 = _interopRequireDefault(_authResolver);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('auth', []);\n\nmod.run(_auth8.default);\nmod.config(_auth2.default);\nmod.constant('AuthEvents', _auth4.default);\nmod.constant('UserRoles', _user2.default);\nmod.factory('AuthService', _authService2.default);\nmod.factory('AuthInterceptor', _authInterceptor2.default);\nmod.factory('AuthResolver', _authResolver2.default);\nmod.controller('AuthController', _auth6.default);\nmod.service('Session', _session2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/index.js\n// module id = 346\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/index.js?");

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = Session;\nfunction Session() {\n   this.create = function (sessionId, userId, userRole) {\n      this.id = sessionId;\n      this.userId = userId;\n      this.userRole = userRole;\n   };\n\n   this.destroy = function () {\n      this.id = null;\n      this.userId = null;\n      this.userRole = null;\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/session.service.js\n// module id = 347\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/session.service.js?");

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nvar userRoles = {\n   master: '*',\n   admin: 'admin',\n   guest: 'guest',\n   normal: 'normal'\n};\n\nexports.default = userRoles;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/user.roles.js\n// module id = 348\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/user.roles.js?");

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = BlogController;\nfunction BlogController($rootScope) {\n   $rootScope.title = 'This is the Blog.';\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.controller.js\n// module id = 349\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.controller.js?");

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _blog = __webpack_require__(349);\n\nvar _blog2 = _interopRequireDefault(_blog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider.state('blog', {\n      url: '/blog',\n      template: __webpack_require__(696)(),\n      controller: _blog2.default,\n      controllerAs: 'blog'\n   }).state('blog.home', {\n      url: '/home',\n      template: __webpack_require__(699)()\n   }).state('blog.post', {});\n   // .state('blog.post.create', {\n\n   // });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.routes.js\n// module id = 350\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.routes.js?");

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _post = __webpack_require__(352);\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _blog = __webpack_require__(350);\n\nvar _blog2 = _interopRequireDefault(_blog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.blog', [_post2.default]);\n\nmod.config(_blog2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/index.js\n// module id = 351\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/index.js?");

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _post = __webpack_require__(355);\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _post3 = __webpack_require__(354);\n\nvar _post4 = _interopRequireDefault(_post3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.blog.post', []);\n\nmod.run(_post2.default);\nmod.config(_post4.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/index.js\n// module id = 352\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/index.js?");

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = PostController;\nfunction PostController($http) {\n   this.post = {\n      title: '',\n      body: ''\n   };\n\n   this.posts = [];\n\n   this.createPost = function (post) {\n      console.log(post);\n      $http.post('/api/posts', post).then(function (res) {\n         console.log(res.data);\n      });\n   };\n\n   $http.get('/api/posts').then(function (res) {\n      console.log(res.data);\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/post.controller.js\n// module id = 353\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/post.controller.js?");

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _post = __webpack_require__(353);\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider.state('blog.post.create', {\n      url: '/create',\n      template: __webpack_require__(697)(),\n      controller: _post2.default,\n      controllerAs: 'vm'\n   }).state('blog.post.index', {\n      url: '/index',\n      template: __webpack_require__(698)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/post.routes.js\n// module id = 354\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/post.routes.js?");

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = run;\nfunction run($rootScope) {}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/post.run.js\n// module id = 355\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/post.run.js?");

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\nfunction config($stateProvider) {\n   $stateProvider.state('book', {\n      url: '/book',\n      template: __webpack_require__(701)(),\n      redirectTo: 'book.index',\n      controller: __webpack_require__(357)\n   }).state('book.index', {\n      url: '/index',\n      template: __webpack_require__(700)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/book/config.js\n// module id = 356\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/book/config.js?");

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, $http) {\n   $scope.book = {};\n   $scope.books = [];\n\n   $scope.resetBook = function () {\n      $scope.book = {\n         name: '',\n         description: ''\n      };\n   };\n\n   $scope.createBook = function (book) {\n      $http.post('/api/books', book).then(function (res) {\n         $scope.resetBook();\n         $scope.updateBooks();\n      });\n   };\n\n   $scope.removeBook = function (book) {\n      $http.delete('/api/books/' + book._id).then(function (res) {\n         $scope.updateBooks();\n      });\n   };\n\n   $scope.updateBooks = function () {\n      $http.get('/api/books').then(function (res) {\n         $scope.books = res.data;\n      });\n   };\n\n   (function () {\n      $scope.resetBook();\n      $scope.updateBooks();\n   })();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/book/controller.js\n// module id = 357\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/book/controller.js?");

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _config = __webpack_require__(356);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.book', []);\n\nmod.config(_config2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/book/index.js\n// module id = 358\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/book/index.js?");

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\nfunction config($stateProvider) {\n   $stateProvider.state('code', {\n      url: '/code',\n      template: __webpack_require__(708)(),\n      redirectTo: 'code.index',\n      controller: __webpack_require__(360)\n   }).state('code.index', {\n      url: '/index',\n      controller: __webpack_require__(364),\n      template: __webpack_require__(704)()\n   }).state('code.create', {\n      url: '/create',\n      controller: __webpack_require__(361),\n      template: __webpack_require__(702)()\n   }).state('code.list', {\n      url: '/list',\n      template: __webpack_require__(705)(),\n      controller: __webpack_require__(365),\n      controllerAs: 'vm'\n   }).state('code.removed', {\n      url: '/removed',\n      template: __webpack_require__(706)(),\n      controller: __webpack_require__(366),\n      controllerAs: 'vm'\n   }).state('code.edit', {\n      url: '/edit/{codeId}',\n      template: __webpack_require__(703)(),\n      controller: __webpack_require__(362),\n      controllerAs: 'vm',\n      resolve: {\n         code: function code(Code, $transition$) {\n            return Code.findById($transition$.params().codeId);\n         }\n      }\n   }).state('code.single', {\n      url: '/single/{codeId}',\n      template: __webpack_require__(707)(),\n      controller: __webpack_require__(368),\n      controllerAs: 'vm',\n      resolve: {\n         code: function code(Code, $transition$) {\n            return Code.findById($transition$.params().codeId);\n         }\n      }\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/config.js\n// module id = 359\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/config.js?");

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nmodule.exports = function controller($scope, $http, Code, $state) {\n   $scope.code = {};\n\n   $scope.codes = [];\n\n   $scope.resetCode = function () {\n      $scope.code = {\n         title: '',\n         body: ''\n      };\n   };\n\n   $scope.setTemplateCode = function (code) {\n      $scope.code = code;\n      $state.go('code.create');\n   };\n\n   $scope.createCode = function (code) {\n      $http.post('/api/codes', code).then(function (res) {\n         $scope.updateCodes();\n         $scope.resetCode();\n      });\n   };\n\n   $scope.updateCodes = function () {\n      $http.get('/api/codes').then(function (res) {\n         $scope.codes = res.data;\n      });\n   };\n\n   $scope.removeCode = function (code) {\n      $http.delete('/api/codes/' + code._id).then(function () {\n         $scope.updateCodes();\n      });\n   };\n\n   $scope.updateHighlighting = function () {\n      $('pre code').each(function (i, block) {\n         hljs.highlightBlock(block);\n      });\n   };\n\n   (function () {\n      $scope.updateCodes();\n   })();\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/controller.js\n// module id = 360\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/controller.js?");

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Code) {\n   $scope.createCode = function (code) {\n      Code.create(code, function (code) {\n         $scope.updateCodes();\n         $scope.resetCode();\n      });\n   };\n   $scope.updateCodes();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/create/controller.js\n// module id = 361\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/create/controller.js?");

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(code, Code, $state) {\n   var vm = {};\n\n   vm.code = code;\n\n   vm.updateCode = function (code) {\n      Code.update(code).then(function (code) {\n         $state.go('code.single', { codeId: code._id });\n      });\n   };\n\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/edit/controller.js\n// module id = 362\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/edit/controller.js?");

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _config = __webpack_require__(359);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('modules.code', []);\n\nmod.config(_config2.default);\nmod.factory('Code', __webpack_require__(367));\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/index.js\n// module id = 363\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/index.js?");

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(Code) {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/index/controller.js\n// module id = 364\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/index/controller.js?");

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Code) {\n   $scope.updateCodes();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/list/controller.js\n// module id = 365\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/list/controller.js?");

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/removed/controller.js\n// module id = 366\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/removed/controller.js?");

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function CodeService($http) {\n   var service = {};\n\n   service.codes = [];\n\n   service.create = function (code, callback) {\n      $http.post('/api/codes', code).then(function (res) {\n         if (callback) callback(res.data);\n         service.all();\n      });\n   };\n\n   service.all = function (callback) {\n      $http.get('/api/codes').then(function (res) {\n         service.codes = res.data;\n         if (callback) callback(res.data);\n      });\n   };\n\n   service.findById = function (codeId) {\n      return $http.get('/api/codes/' + codeId).then(function (res) {\n         return res.data;\n      });\n   };\n\n   service.update = function (code) {\n      return $http.put('/api/codes/' + code._id, code).then(function (res) {\n         return res.data;\n      });\n   };\n\n   return service;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/service.js\n// module id = 367\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/service.js?");

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(code) {\n   var vm = {};\n\n   vm.code = code;\n\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/single/controller.js\n// module id = 368\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/single/controller.js?");

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ColorBoxController = function ColorBoxController($scope) {\n   _classCallCheck(this, ColorBoxController);\n\n   $scope.colors = [{\n      name: \"red\",\n      hex: \"#FF0000\"\n   }, {\n      name: \"green\",\n      hex: \"#00FF00\"\n   }, {\n      name: \"blue\",\n      hex: \"#0000FF\"\n   }, {\n      name: \"purple\",\n      hex: \"#FF00FF\"\n   }];\n};\n\nexports.default = ColorBoxController;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.controller.js\n// module id = 369\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.controller.js?");

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = ColorBoxDirective;\n\nvar _colorBox = __webpack_require__(369);\n\nvar _colorBox2 = _interopRequireDefault(_colorBox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ColorBoxDirective() {\n   return {\n      template: __webpack_require__(709)(),\n      controller: _colorBox2.default,\n      link: function link() {}\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.directive.js\n// module id = 370\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.directive.js?");

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\n__webpack_require__(882);\n\nvar _colorBox = __webpack_require__(370);\n\nvar _colorBox2 = _interopRequireDefault(_colorBox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.colorBox', []);\n\nmod.directive('colorBox', _colorBox2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/index.js\n// module id = 371\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/index.js?");

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = FooterDirective;\nfunction FooterDirective() {\n   return {\n      template: __webpack_require__(710)()\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/footer/footer.directive.js\n// module id = 372\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/footer/footer.directive.js?");

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _footer = __webpack_require__(372);\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.components.footer', []);\n\nmod.directive('appFooter', _footer2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/footer/index.js\n// module id = 373\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/footer/index.js?");

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _navbar = __webpack_require__(375);\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.components.navbar', []);\n\nmod.directive('navbar', _navbar2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/navbar/index.js\n// module id = 374\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/navbar/index.js?");

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = NavbarDirective;\nfunction NavbarDirective() {\n   return {\n      template: __webpack_require__(711)(),\n      controller: function controller($rootScope, $scope, Auth) {\n         this.logout = function () {\n            Auth.logout();\n         };\n      },\n      controllerAs: 'NavCtrl'\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/navbar/navbar.directive.js\n// module id = 375\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/navbar/navbar.directive.js?");

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = DashboardController;\nfunction DashboardController($scope, $http, $interval, LiteServer, Project01Service) {\n   var _this = this;\n\n   // LITE-SERVER\n   $scope.lite = {};\n   $scope.lite.open = false;\n   $scope.lite.startClass = function () {\n      return { 'w3-disabled': LiteServer.open };\n   };\n   $scope.lite.stopClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n   $scope.lite.statusClass = function () {\n      return { 'w3-green': LiteServer.open, 'w3-red': !LiteServer.open };\n   };\n   $scope.lite.openClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n   $scope.lite.start = function () {\n      LiteServer.start(function () {});\n   };\n   $scope.lite.stop = function () {\n      LiteServer.stop(function () {});\n   };\n   $scope.lite.open = function () {\n      window.open('http://192.168.0.2:3100', '_blank');\n   };\n   // PROJECT 01 \n   $scope.project01 = {};\n   $scope.project01.isOpen = false;\n   $scope.project01.start = function () {\n      $http.post('/api/projects/01/start').then(function (res) {});\n   };\n   $scope.project01.stop = function () {\n      $http.post('/api/projects/01/stop').then(function (res) {});\n   };\n   $scope.project01.status = function () {\n      $http.post('/api/projects/01/status').then(function (res) {\n         $scope.project01.isOpen = res.data.open;\n      });\n   };\n   $scope.project01.open = function () {\n      window.open('http://192.168.0.2:3200', '_blank');\n   };\n   $interval(function () {\n      $scope.project01.status();\n   }, 1000);\n\n   // REST OF SOMETHING\n   this.statusInterval = null;\n   this.open = false;\n   this.liteServerOpen = false;\n\n   this.startLiteServer = function () {\n      LiteServer.start(function () {});\n   };\n\n   this.stopLiteServer = function () {\n      LiteServer.stop(function () {});\n   };\n\n   this.liteServerStartClass = function () {\n      return { 'w3-disabled': LiteServer.open };\n   };\n\n   this.liteServerStopClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n\n   this.liteServerStatusClass = function () {\n      return { 'w3-green': LiteServer.open, 'w3-red': !LiteServer.open };\n   };\n   this.liteServerOpenInTabClass = function () {\n      return { 'w3-disabled': !LiteServer.open };\n   };\n\n   this.liteServerStatus = function () {\n      LiteServer.status(function (response) {\n         _this.liteServerOpen = response.open;\n      });\n   };\n\n   this.setLiteserverStatusInterval = function () {};\n\n   this.start = function () {\n      $http.get('/api/example/start').then(function (res) {});\n   };\n\n   this.stop = function () {\n      $http.get('/api/example/stop').then(function (res) {});\n   };\n\n   this.status = function () {\n      $http.get('/api/example/status').then(function (res) {\n         if (res.data.open) {\n            _this.open = true;\n         } else {\n            _this.open = false;\n         }\n      });\n   };\n\n   this.setStatusInterval = function () {\n      _this.statusInterval = $interval(function () {\n         $http.get('/api/example/status').then(function (res) {\n            if (res.data.open) {\n               _this.open = true;\n            } else {\n               _this.open = false;\n            }\n         }, function (res) {});\n      }, 1000);\n   };\n\n   (function () {\n      _this.setStatusInterval();\n   })();\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/controllers/dashboard.controller.js\n// module id = 376\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/controllers/dashboard.controller.js?");

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = LoginController;\nfunction LoginController($scope, $auth) {\n   $scope.authenticate = function (provider) {\n      $auth.authenticate(provider);\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/controllers/login.controller.js\n// module id = 377\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/controllers/login.controller.js?");

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _highlight = __webpack_require__(65);\n\nvar _highlight2 = _interopRequireDefault(_highlight);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function ($timeout) {\n   return {\n      template: '<pre><code></code></pre>',\n      scope: {\n         object: '=',\n         body: '=',\n         code: '=',\n         bind: '=',\n         language: '='\n      },\n      link: function link(scope, element, attributes) {\n         var xCode = element[0].getElementsByTagName('code')[0];\n\n         if (scope.language) {\n            xCode.classList.add(scope.language);\n         }\n\n         if (scope.object) {\n            xCode.innerText = JSON.stringify(scope.object, ' ', 2);\n         } else if (scope.body) {\n            xCode.innerText = scope.body;\n         } else if (scope.code) {\n            xCode.innerText = scope.code;\n         }\n\n         _highlight2.default.highlightBlock(xCode);\n\n         scope.$watch('language', function (newValue, oldValue) {\n            if (oldValue) {\n               xCode.classList.remove(oldValue);\n            }\n            if (newValue) {\n               xCode.classList.add(newValue);\n            }\n            _highlight2.default.highlightBlock(xCode);\n         });\n\n         var timeoutId = null;\n         var update = function update(newValue) {\n            if (timeoutId === null) {\n               if (!newValue || newValue == 'undefined') return;\n               timeoutId = $timeout(function () {\n                  xCode.innerText = newValue;\n                  _highlight2.default.highlightBlock(xCode);\n                  timeoutId = null;\n               }, 1000);\n            }\n         };\n\n         scope.$watch('object', function (newValue, oldValue) {\n            if ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) == 'object') {\n               if (newValue.length > 0) {\n                  update(JSON.stringify(newValue, ' ', 2));\n               }\n            }\n         });\n         scope.$watch('body', function (newValue, oldValue) {\n            update(newValue);\n         });\n         scope.$watch('code', function (newValue, oldValue) {\n            update(newValue);\n         });\n         scope.$watch('bind', function (newValue, oldValue) {\n            update(newValue);\n         });\n\n         /*\n         scope.$watchGroup(['language', 'body', 'code', 'language'], function() {\n            console.log(scope.language);\n               timeoutId = $timeout(function() {\n                  console.log('HIGHLIGHT!');\n                  hljs.highlightBlock(xCode);\n                  timeoutId = null;\n               }, 1000);\n            }\n         });\n         */\n      }\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-code/index.js\n// module id = 378\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-code/index.js?");

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _brace = __webpack_require__(132);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _highlight = __webpack_require__(76);\n\nvar _highlight2 = _interopRequireDefault(_highlight);\n\nvar _javascript = __webpack_require__(78);\n\nvar _javascript2 = _interopRequireDefault(_javascript);\n\nvar _cpp = __webpack_require__(77);\n\nvar _cpp2 = _interopRequireDefault(_cpp);\n\n__webpack_require__(290);\n\nvar _jsBeautify = __webpack_require__(684);\n\nvar _jsBeautify2 = _interopRequireDefault(_jsBeautify);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(136);\n__webpack_require__(134);\n__webpack_require__(473);\n__webpack_require__(135);\n__webpack_require__(137);\n__webpack_require__(133);\n\n// var sample = jsBeautify.js_beautify(script, { indent_size: 2 });\n\nvar beautify = function beautify(code) {\n   return _jsBeautify2.default.js_beautify(code, { indent_size: 2 });\n};\n\nmodule.exports = function directive($timeout) {\n   return {\n      // require: 'ngModel',\n      //scope: {\n      // @myText\n      // =twoWay\n      // &oneWay\n      //'eId': '@'\n      //},\n      //scope: true,\n      template: '',\n      scope: {\n         'bind': '=',\n         'mode': '@'\n      },\n      //template: `\n      //{{ ::$id }}\n      //<div id=\"editor_{{::$id}}\" class=\"editor\"></div>\n      //<pre ng-class=\"{'hide': !code.body}\">\n      //<code id=\"code_{{::$id}}\" class=\"code\" ng-bind=\"code.body\">\n      //</code></pre>\n      //`,\n      controller: function controller($scope) {\n         $scope.getEditorValue = function () {};\n      },\n      link: function link(scope, element, attributes) {\n         /*\n         scope.code = {\n            body: ''\n         };\n         */\n\n         var xEditor = document.createElement('div');\n         xEditor.classList.add('editor');\n         xEditor.style.minHeight = '200px';\n\n         // append dom elements to template\n         element[0].appendChild(xEditor);\n\n         var editor = _brace2.default.edit(xEditor);\n         editor.$blockScrolling = Infinity;\n         editor.session.setOptions({\n            tabSize: 2,\n            useSoftTabs: true\n         });\n         editor.getSession().setMode('ace/mode/' + (scope.mode ? scope.mode : 'javascript'));\n         editor.setTheme('ace/theme/monokai');\n         editor.setKeyboardHandler('ace/keyboard/vim');\n         _brace2.default.config.loadModule('ace/keyboard/vim', function (module) {\n            var VimApi = module.CodeMirror.Vim;\n            VimApi.defineEx('write', 'w', function (cm, input) {\n               cm.ace.execCommand('save');\n               /*\n               scope.createCode(scope.code);\n               */\n            });\n            VimApi.defineEx('beautify', 'be', function (cm, input) {\n               var code = editor.getValue();\n               editor.setValue('');\n               editor.insert(beautify(code));\n            });\n         });\n         editor.setValue('');\n         if (scope.bind) {\n            editor.insert(scope.bind);\n         }\n         editor.on('change', function () {\n            scope.bind = editor.getValue();\n         });\n      }\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-editor/index.js\n// module id = 379\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-editor/index.js?");

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.appMainNav', []);\n\nmod.directive('appMainNav', function AppMainNavDirective() {\n   return {\n      template: __webpack_require__(712)()\n   };\n});\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-main-nav/index.js\n// module id = 380\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-main-nav/index.js?");

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _highlight = __webpack_require__(65);\n\nvar _highlight2 = _interopRequireDefault(_highlight);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function directive() {\n   return {\n      scope: {\n         object: '='\n      },\n      template: '<pre><code></code></pre>',\n      link: function link(scope, element, attributes) {\n         var xCode = element[0].getElementsByTagName('code')[0];\n         xCode.innerText = JSON.stringify(scope.object, ' ', 4);\n         xCode.classList.add('json');\n         _highlight2.default.highlightBlock(xCode);\n      }\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-model-json/directive.js\n// module id = 381\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-model-json/directive.js?");

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\n__webpack_require__(883);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('directives.modelJson', []).directive('appModelJson', __webpack_require__(381)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-model-json/index.js\n// module id = 382\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-model-json/index.js?");

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\n__webpack_require__(884);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _moment = __webpack_require__(0);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(687);\n\nexports.default = _angular2.default.module('directives.appTime', []).directive('appTime', function ($interval) {\n   return {\n      template: 'app-time',\n      controller: function controller() {},\n      link: function link(scope, element, attributes) {\n         var intervalId = null;\n         var timezone = _moment2.default.tz.guess();\n         var format = 'HH:mm:ss | dddd | D. MMM | D.M.YYYY';\n         function update() {\n            element.text((0, _moment2.default)().format(format) + ' | ' + timezone);\n         }\n         update();\n         intervalId = $interval(update, 1000);\n         element.on('$destroy', function () {\n            $interval.cancel(intervalId);\n         });\n      }\n   };\n}).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-time/index.js\n// module id = 383\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-time/index.js?");

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('directives', []).directive('appCode', __webpack_require__(378)).directive('appEditor', __webpack_require__(379)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/index.js\n// module id = 384\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/index.js?");

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function DocumentConfig($stateProvider) {\n   $stateProvider.state('document', {\n      url: '/document',\n      template: __webpack_require__(715)(),\n      redirectTo: 'document.index',\n      controller: __webpack_require__(386)\n   }).state('document.index', {\n      url: '/index',\n      template: __webpack_require__(714)()\n   }).state('document.documents', {\n      url: '/documents',\n      template: __webpack_require__(713)()\n   });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/config.js\n// module id = 385\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/config.js?");

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _moment = __webpack_require__(0);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function controller($scope, Document) {\n   $scope.documents = [];\n   $scope.currentDate = new Date();\n   var date = new Date();\n\n   $scope.day = function (i) {\n      return new Date(new Date().setDate(new Date().getDate() - i));\n   };\n   $scope.getDate = function (i) {\n      return new Date(new Date().setDate(new Date().getDate() - i));\n   };\n\n   $scope.removeDocument = function (document) {\n      Document.remove(document);\n      $scope.updateDocuments();\n   };\n\n   $scope.unRemoveDocument = function (document) {\n      Document.unRemove(document, function () {\n         $scope.updateDocuments();\n      });\n   };\n\n   $scope.setDate = function (date) {\n      console.log(date);\n      $scope.currentDate = date;\n   };\n\n   $scope.updateDocuments = function () {\n      Document.all(function (documents) {\n         $scope.documents = documents;\n      });\n   };\n   $scope.updateDocuments();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/controller.js\n// module id = 386\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/controller.js?");

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(885);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.document', []);\n\nmod.config(__webpack_require__(385));\nmod.factory('Document', __webpack_require__(388));\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/index.js\n// module id = 387\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/index.js?");

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function DocumentService($http) {\n   var service = {};\n\n   service.all = function (callback) {\n      $http.get('/api/documents').then(function (res) {\n         callback(res.data);\n      });\n   };\n\n   service.remove = function (document, callback) {\n      $http.delete('/api/documents/' + document._id).then(function (res) {\n         if (callback) {\n            callback(res.data);\n         }\n      });\n   };\n\n   service.unRemove = function (document, callback) {\n      $http.put('/api/documents/' + document._id + '/unremove').then(function (res) {\n         if (callback) {\n            callback(res.data);\n         }\n      });\n   };\n\n   return service;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/service.js\n// module id = 388\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/service.js?");

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function config($stateProvider) {\n   $stateProvider.state('exercise', {\n      url: '/exercise',\n      template: __webpack_require__(718)(),\n      redirectTo: 'exercise.index'\n   }).state('exercise.index', {\n      url: '/index',\n      template: __webpack_require__(717)()\n   }).state('exercise.create', {\n      url: '/create',\n      template: __webpack_require__(716)()\n   });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/exercise/config.js\n// module id = 389\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/exercise/config.js?");

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.exercise', []).config(__webpack_require__(389)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/exercise/index.js\n// module id = 390\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/exercise/index.js?");

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _linebreaks = __webpack_require__(393);\n\nvar _linebreaks2 = _interopRequireDefault(_linebreaks);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('filters', [_linebreaks2.default]).filter('notNull', __webpack_require__(394)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/filters/index.js\n// module id = 391\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/filters/index.js?");

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function LinebreaksFilter() {\n   return function (input, optional1, optional2) {\n      // return input.replace(/(?:\\r\\n|\\r|\\n)/g, '<br />');\n      // console.log(input);\n      return input;\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/filters/linebreaks/filter.js\n// module id = 392\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/filters/linebreaks/filter.js?");

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('filters.linebreaks', []).filter('linebreaks', __webpack_require__(392)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/filters/linebreaks/index.js\n// module id = 393\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/filters/linebreaks/index.js?");

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function () {\n   return function (items, optional1) {\n      var filtered = [];\n      _angular2.default.forEach(items, function (item) {\n         if (item[optional1] !== null) {\n            filtered.push(item);\n         }\n      });\n      return filtered;\n      /*\n      console.log(optional1, optional2);\n      angular.forEach(object, function(value, key) {\n         if (value !== null) {\n            if (typeof(value) === 'object') {\n               if (Obj.keys(value).lenght > 0) {\n                }\n            }\n         }\n      });\n      */\n\n      /*\n      for (var i=0; i<objects.length; i++) {\n         if (objects[i].createdAt !== null) {\n            delete objects[i];\n         }\n         //objects[i].text = `EXAMPLE TITLE ${i}.`;\n      }\n      */\n\n      //return objects;\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/filters/not-null/index.js\n// module id = 394\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/filters/not-null/index.js?");

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _moment = __webpack_require__(0);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function HistorySampleDirective() {\n   return {\n      template: '\\n         <div class=\"item\" ng-repeat=\"day in days\">\\n            <p>{{ day }}</p>\\n         </div>\\n      ',\n      controller: function controller($scope) {\n         $scope.days = [];\n         var days = [];\n         var format = 'DD.MM.YYYY';\n\n         for (var i = 0; i < 10; i++) {\n            var day = (0, _moment2.default)().add(i, 'days').format(format);\n            $scope.days.push(day);\n         }\n\n         // console.log(days);\n      },\n      link: function link() {}\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/components/history-sample/index.js\n// module id = 395\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/components/history-sample/index.js?");

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\nfunction config($stateProvider) {\n   $stateProvider.state('history', {\n      url: '/history',\n      template: __webpack_require__(722)(),\n      redirectTo: 'history.list'\n   }).state('history.single', {\n      url: '/history/{historyId}',\n      template: __webpack_require__(721)(),\n      controller: __webpack_require__(402),\n      resolve: {\n         history: function history($http, $transition$) {\n            var historyId = $transition$.params().historyId;\n            function success(res) {\n               return res.data;\n            }\n            return $http.get('/api/histories/' + historyId).then(function (res) {\n               return res.data;\n            });\n         }\n      }\n   }).state('history.create', {\n      url: '/create',\n      template: __webpack_require__(719)(),\n      controller: __webpack_require__(397)\n   }).state('history.list', {\n      url: '/list',\n      template: __webpack_require__(720)(),\n      controller: __webpack_require__(401)\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/config.js\n// module id = 396\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/config.js?");

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($rootScope, $scope, $http) {\n\n   $scope.create = function () {\n      function success(res) {\n         // console.log(res.data);\n      }\n      function error(res) {\n         // console.log(res.data);\n      }\n      $http.post('/api/histories', {\n         userId: $rootScope.currentUser.id\n      }).then(success, error);\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/create/controller.js\n// module id = 397\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/create/controller.js?");

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = DocumentCodeEditorDirective;\n\nvar _brace = __webpack_require__(132);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(136);\n__webpack_require__(134);\n__webpack_require__(135);\n__webpack_require__(137);\n__webpack_require__(133);\n\nfunction DocumentCodeEditorDirective() {\n   return {\n      template: '\\n         <div class=\"editor\"></div>\\n      ',\n      controller: function controller($scope) {\n         $scope.title = 'SCOPE TITLE';\n      },\n      link: function link(scope, element, attributes) {\n         var x_editor = element[0].getElementsByClassName('editor')[0];\n\n         /*\n         ace.config.loadModule('ace/keyboard/vim', function(module) {\n            var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;\n            VimApi.defineEx('write', 'w', function(cm, input) {\n               console.log('VIM WRITE');\n               cm.ace.execCommand('save');\n            });\n         });\n         */\n         //var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;\n         _brace2.default.config.loadModule('ace/keyboard/vim', function (module) {\n            var VimApi = module.CodeMirror.Vim;\n            VimApi.defineEx('write', 'w', function (cm, input) {\n               cm.ace.execCommand('save');\n               scope.setAndAddCode(scope.code);\n            });\n         });\n\n         var editor = _brace2.default.edit(x_editor);\n         editor.$blockScrolling = Infinity;\n         editor.getSession().setMode('ace/mode/javascript');\n         editor.setTheme('ace/theme/monokai');\n         editor.setKeyboardHandler('ace/keyboard/vim');\n\n         scope.updateLangugage = function (something) {\n            if (scope.code.language.value === 'c' || scope.code.language.value === 'c++') {\n               scope.code.language.value = 'c_cpp';\n            }\n            editor.getSession().setMode('ace/mode/' + scope.code.language.value);\n            // console.log('updated required', scope.code.language);\n         };\n\n         scope.setAndAddCode = function (code) {\n            code.body = editor.getValue();\n            scope.addCode(code);\n            editor.setValue('');\n         };\n      }\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/directives/document-code-editor/index.js\n// module id = 398\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/directives/document-code-editor/index.js?");

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = DocumentCodeDirective;\n\n__webpack_require__(886);\n\nvar _highlight = __webpack_require__(76);\n\nvar _highlight2 = _interopRequireDefault(_highlight);\n\nvar _javascript = __webpack_require__(78);\n\nvar _javascript2 = _interopRequireDefault(_javascript);\n\nvar _cpp = __webpack_require__(77);\n\nvar _cpp2 = _interopRequireDefault(_cpp);\n\n__webpack_require__(290);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n['javascript', 'python', 'bash'].forEach((langName) => {\n  // Using require() here because import() support hasn't landed in Webpack yet\n  const langModule = require(`highlight.js/lib/languages/${langName}`);\n  hljs.registerLanguage(langName, langModule);\n});\n*/\n\n_highlight2.default.registerLanguage('javascript', _javascript2.default);\n\nfunction removeTwoSpacesFromBeginning(string) {\n   return string.replace(/^\\s\\s|\\s+$/gm, '');\n}\n\nfunction DocumentCodeDirective() {\n   return {\n      template: '\\n         <pre><code class=\"code\"></code></pre>\\n      ',\n      scope: {\n         body: '=',\n         language: '='\n      },\n      link: function link(scope, element, attributes) {\n         var x_code = element[0].getElementsByClassName('code')[0];\n         // console.log('LANGUAGE IN CODE:', scope.language);\n         x_code.innerText = removeTwoSpacesFromBeginning(scope.body);\n         // x_code.classList.add(scope.language);\n         _highlight2.default.highlightBlock(x_code);\n      }\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/directives/document-code/index.js\n// module id = 399\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/directives/document-code/index.js?");

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(887);\n\nvar _config = __webpack_require__(396);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _documentCodeEditor = __webpack_require__(398);\n\nvar _documentCodeEditor2 = _interopRequireDefault(_documentCodeEditor);\n\nvar _documentCode = __webpack_require__(399);\n\nvar _documentCode2 = _interopRequireDefault(_documentCode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('history', []);\n\nmod.directive('documentCodeEditor', _documentCodeEditor2.default);\nmod.directive('documentCode', _documentCode2.default);\n\nmod.directive('historySample', __webpack_require__(395));\n\nmod.config(_config2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/index.js\n// module id = 400\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/index.js?");

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function ($scope, $http) {\n   $scope.histories = [];\n   $scope.findHistories = function () {\n      function success(res) {\n         $scope.histories = res.data;\n      }\n      $http.get('/api/histories').then(success);\n   };\n   (function () {\n      $scope.findHistories();\n   })();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/list/controller.js\n// module id = 401\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/list/controller.js?");

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function ($state, $http, $scope, history) {\n   $scope.title = 'SINGLE CONTROLLER SCOPE';\n   $scope.history = history;\n\n   $scope.languages = [{\n      name: \"Javascript\",\n      value: \"javascript\"\n   }, {\n      name: \"PHP\",\n      value: \"php\"\n   }, {\n      name: \"C\",\n      value: \"c\"\n   }];\n\n   $scope.post = {};\n   $scope.code = {};\n\n   $scope.resetPost = function () {\n      $scope.post = {\n         title: '',\n         body: ''\n      };\n   };\n\n   $scope.resetCode = function () {\n      $scope.code = {\n         title: '',\n         body: ''\n      };\n   };\n\n   $scope.addPost = function (post) {\n      $http.post(\"/api/histories/\" + history._id + \"/posts\", {\n         title: post.title,\n         body: post.body\n      }).then(function (res) {\n         $scope.updateHistory();\n         $scope.resetPost();\n      });\n   };\n\n   $scope.addCode = function (code) {\n      $http.post(\"/api/histories/\" + history._id + \"/codes\", {\n         title: code.title,\n         body: code.body,\n         language: code.language\n      }).then(function (res) {\n         $scope.updateHistory();\n         $scope.resetCode();\n      });\n   };\n\n   $scope.deleteHistory = function (history) {\n      $http.delete(\"/api/histories/\" + history._id).then(function (res) {\n         $scope.updateHistory();\n      });\n   };\n\n   $scope.removeCode = function (code) {\n      $http.delete(\"/api/histories/\" + history._id + \"/codes/\" + code._id).then(function (res) {\n         $scope.updateHistory();\n         // console.log(res.data);\n      });\n   };\n\n   $scope.updateHistory = function () {\n      $http.get(\"/api/histories/\" + $scope.history._id).then(function (res) {\n         $scope.history = res.data;\n      });\n   };\n\n   (function () {\n      $scope.resetPost();\n   })();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/single/controller.js\n// module id = 402\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/single/controller.js?");

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\nfunction config($stateProvider) {\n   $stateProvider.state('home', {\n      url: '/home',\n      template: __webpack_require__(723),\n      controller: __webpack_require__(404)\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/home/config.js\n// module id = 403\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/home/config.js?");

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Note) {\n   $scope.notes = [];\n\n   $scope.updateNotes = function () {\n      Note.findAll().then(function (notes) {\n         $scope.notes = notes;\n      });\n   };\n\n   $scope.updateNotes();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/home/controller.js\n// module id = 404\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/home/controller.js?");

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _config = __webpack_require__(403);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.home', []);\n\nmod.config(_config2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/home/index.js\n// module id = 405\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/home/index.js?");

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = AimboosterRoutes;\nfunction AimboosterRoutes($stateProvider) {\n   $stateProvider.state('aimbooster', {\n      url: '/aimbooster',\n      template: __webpack_require__(724)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/aimbooster/aimbooster.routes.js\n// module id = 406\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/aimbooster/aimbooster.routes.js?");

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _aimbooster = __webpack_require__(406);\n\nvar _aimbooster2 = _interopRequireDefault(_aimbooster);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('aimbooster', []).config(_aimbooster2.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/aimbooster/index.js\n// module id = 407\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/aimbooster/index.js?");

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _w = __webpack_require__(409);\n\nvar _w2 = _interopRequireDefault(_w);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('modules', [_w2.default]).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/index.js\n// module id = 408\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/index.js?");

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\n__webpack_require__(505);\n\nvar _w = __webpack_require__(410);\n\nvar _w2 = _interopRequireDefault(_w);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('modules.w3', []).config(_w2.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/w3/index.js\n// module id = 409\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/w3/index.js?");

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = W3Routes;\nfunction W3Routes($stateProvider) {\n   $stateProvider.state('w3', {\n      url: '/w3',\n      template: __webpack_require__(725)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/w3/w3.routes.js\n// module id = 410\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/w3/w3.routes.js?");

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\nfunction config($stateProvider) {\n   $stateProvider.state('mongoose', {\n      url: '/mongoose',\n      template: __webpack_require__(728)(),\n      controller: __webpack_require__(412),\n      redirectTo: 'mongoose.index'\n   }).state('mongoose.index', {\n      url: '/index',\n      template: __webpack_require__(727)()\n   }).state('mongoose.create', {\n      url: '/create',\n      template: __webpack_require__(726)(),\n      controller: __webpack_require__(413)\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/mongoose/config.js\n// module id = 411\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/mongoose/config.js?");

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, $http) {\n   $scope.currentMongoose = null;\n\n   $scope.mongooses = [];\n\n   $http.get('/api/mongoose').then(function (res) {\n      // console.log(res.data);\n   });\n\n   $scope.updateMongooses = function () {\n      $http.get('/api/mongooses').then(function (res) {\n         $scope.mongooses = res.data;\n         // console.log(res.data);\n      });\n   };\n\n   $scope.setCurrentMongoose = function (mongoose) {\n      $scope.currentMongoose = mongoose;\n   };\n\n   $scope.unsetMongoose = function () {\n      $scope.currentMongoose = null;\n   };\n\n   (function () {\n      $scope.updateMongooses();\n   })();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/mongoose/controller.js\n// module id = 412\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/mongoose/controller.js?");

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, $http) {\n   $scope.mongoose = {};\n\n   $scope.create = function (mongoose) {\n      $http.post('/api/mongooses', {\n         name: mongoose.name\n      }).then(function (res) {\n         $scope.resetMongoose();\n         $scope.updateMongooses();\n         console.log(res.data);\n      });\n   };\n\n   $scope.resetMongoose = function () {\n      $scope.mongoose = {\n         name: ''\n      };\n   };\n\n   (function () {\n      $scope.resetMongoose();\n   })();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/mongoose/create/controller.js\n// module id = 413\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/mongoose/create/controller.js?");

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _config = __webpack_require__(411);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.mongoose', []);\n\nmod.config(_config2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/mongoose/index.js\n// module id = 414\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/mongoose/index.js?");

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function config($stateProvider) {\n   $stateProvider.state('note', {\n      url: '/note',\n      template: __webpack_require__(733)(),\n      controller: __webpack_require__(416),\n      redirectTo: 'note.index'\n   }).state('note.index', {\n      url: '/index',\n      template: __webpack_require__(730)(),\n      controller: __webpack_require__(420),\n      controllerAs: 'vm'\n   }).state('note.create', {\n      url: '/create',\n      template: __webpack_require__(729)(),\n      controller: __webpack_require__(417),\n      controllerAs: 'vm'\n   }).state('note.list', {\n      url: '/list',\n      template: __webpack_require__(731)(),\n      controller: __webpack_require__(421),\n      controllerAs: 'vm'\n   }).state('note.removed', {\n      url: '/removed',\n      template: __webpack_require__(732)(),\n      controller: __webpack_require__(422),\n      controllerAs: 'vm'\n   });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/config.js\n// module id = 415\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/config.js?");

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Note) {\n   $scope.note = {};\n   $scope.notes = [];\n\n   $scope.resetNote = function () {\n      $scope.note = {\n         title: '',\n         content: ''\n      };\n   };\n\n   $scope.findRemoved = function () {\n      Note.findRemoved().then(function (notes) {\n         $scope.notes = notes;\n      });\n   };\n\n   $scope.createNote = function (note) {\n      Note.create(note).then(function (note) {\n         $scope.updateNotes();\n         $scope.resetNote();\n      });\n   };\n\n   $scope.removeNote = function (note) {\n      Note.remove(note).then(function (note) {\n         $scope.updateNotes();\n      });\n   };\n\n   $scope.updateNotes = function () {\n      Note.findAll().then(function (notes) {\n         $scope.notes = notes;\n      });\n   };\n\n   $scope.resetNote();\n   $scope.updateNotes();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/controller.js\n// module id = 416\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/controller.js?");

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/create/controller.js\n// module id = 417\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/create/controller.js?");

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function NoteFactory($http) {\n   var factory = {};\n\n   factory.findAll = function () {\n      return $http.get('/api/notes').then(function (res) {\n         return res.data;\n      });\n   };\n\n   factory.create = function (note) {\n      return $http.post('/api/notes', note).then(function (res) {\n         return res.data;\n      });\n   };\n\n   factory.remove = function (note) {\n      return $http.delete('/api/notes/' + note._id).then(function (res) {\n         return res.data;\n      });\n   };\n\n   factory.findRemoved = function () {\n      return $http.get('/api/notes?removed=true').then(function (res) {\n         return res.data;\n      });\n   };\n\n   factory.destroy = function (note) {\n      return $http.delete('/api/notes/' + note._id + '?destroy=true').then(function (res) {\n         return res.data;\n      });\n   };\n\n   return factory;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/factory.js\n// module id = 418\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/factory.js?");

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\n__webpack_require__(888);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.notes', []).config(__webpack_require__(415)).factory('Note', __webpack_require__(418)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/index.js\n// module id = 419\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/index.js?");

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/index/controller.js\n// module id = 420\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/index/controller.js?");

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope) {\n   $scope.updateNotes();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/list/controller.js\n// module id = 421\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/list/controller.js?");

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Note) {\n   var vm = {};\n\n   vm.notes = [];\n\n   vm.findRemoved = function () {\n      Note.findRemoved().then(function (notes) {\n         vm.notes = notes;\n      });\n   };\n\n   vm.removeNotePermanently = function (note) {\n      Note.destroy(note).then(function () {\n         vm.updateNotes();\n      });\n   };\n\n   vm.updateNotes = function () {\n      vm.findRemoved();\n   };\n\n   vm.findRemoved();\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/removed/controller.js\n// module id = 422\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/removed/controller.js?");

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = EditorDirective;\nfunction EditorDirective() {\n   return {\n      template: 'This is editor directive.',\n      scope: {\n         code: '='\n      },\n      link: function link(scope, element, attributes) {\n         $(element).css({\n            'height': '300px',\n            'display': 'block'\n         });\n         scope.$watch('code', function (newValue, oldValue) {\n            console.log('changed: ', newValue);\n         });\n         var editor = ace.edit(element[0]);\n         editor.setTheme('ace/theme/monokai');\n         editor.getSession().setMode('ace/mode/javascript');\n         editor.setKeyboardHandler('ace/keyboard/vim');\n         ace.config.loadModule('ace/keyboard/vim', function (m) {\n            var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;\n            VimApi.defineEx('write', 'w', function (cm, input) {\n               console.log(editor.getValue());\n               scope.code = {\n                  body: 'working ?'\n               };\n               console.log(scope.code);\n               cm.ace.execCommand('save');\n            });\n         });\n         // scope.code = {\n         // body: 'editor has set code'\n         // };\n      }\n   };\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/editor/editor.directive.js\n// module id = 423\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/editor/editor.directive.js?");

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _mongoose = __webpack_require__(426);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _editor = __webpack_require__(423);\n\nvar _editor2 = _interopRequireDefault(_editor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('mongoose', []).config(_mongoose2.default).directive('mongooseEditor', _editor2.default).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/index.js\n// module id = 424\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/index.js?");

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = MongooseController;\nfunction MongooseController($scope) {\n   $scope.code = {\n      body: 'no body is available'\n   };\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/mongoose.controller.js\n// module id = 425\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/mongoose.controller.js?");

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = MongooseRoutes;\n\nvar _mongoose = __webpack_require__(425);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction MongooseRoutes($stateProvider) {\n   $stateProvider.state('pages.mongoose', {\n      url: '/mongoose',\n      template: __webpack_require__(737)(),\n      redirectTo: 'mongoose.index',\n      controller: _mongoose2.default,\n      controllerAs: 'MongooseCtrl'\n   }).state('pages.mongoose.index', {\n      url: '/index',\n      template: __webpack_require__(736)()\n   }).state('pages.mongoose.editor', {\n      url: '/editor',\n      template: __webpack_require__(735)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/mongoose.routes.js\n// module id = 426\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/mongoose.routes.js?");

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = config;\nfunction config($stateProvider) {\n   $stateProvider.state('problem', {\n      url: '/problem',\n      template: __webpack_require__(742)(),\n      redirectTo: 'problem.index',\n      controller: __webpack_require__(428)\n   }).state('problem.index', {\n      url: '/index',\n      template: __webpack_require__(740)()\n   }).state('problem.create', {\n      url: '/create',\n      template: __webpack_require__(738)()\n   }).state('problem.list', {\n      url: '/list',\n      template: __webpack_require__(741)(),\n      controller: __webpack_require__(432),\n      controllerAs: 'vm'\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/config.js\n// module id = 427\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/config.js?");

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(Problem, $scope) {\n   $scope.problems = [];\n   $scope.problem = {};\n\n   $scope.resetProblem = function () {\n      $scope.problem = {\n         title: '',\n         content: ''\n      };\n   };\n\n   $scope.createProblem = function (problem) {\n      Problem.create(problem).then(function (problem) {\n         $scope.updateProblems();\n         $scope.resetProblem();\n      });\n   };\n\n   $scope.updateProblems = function () {\n      Problem.findAll().then(function (problems) {\n         $scope.problems = problems;\n      });\n   };\n\n   $scope.resetProblem();\n   $scope.updateProblems();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/controller.js\n// module id = 428\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/controller.js?");

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function listDirective() {\n   return {\n      scope: {\n         problems: '='\n      },\n      template: __webpack_require__(739)()\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/directives/list/index.js\n// module id = 429\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/directives/list/index.js?");

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function problemFactory($http) {\n   var factory = {};\n\n   factory.handleErrors = function (res) {\n      console.log(res.data);\n   };\n\n   factory.findAll = function () {\n      return $http.get('/api/problems').then(function (res) {\n         return res.data;\n      }, factory.handleErrors);\n   };\n\n   factory.single = function (problemId) {\n      return $http.get('/api/problems/' + problemId).then(function (res) {\n         return res.data;\n      }, factory.handleErrors);\n   };\n\n   factory.create = function (problem) {\n      return $http.post('/api/problems', problem).then(function (res) {\n         return res.data;\n      }, factory.handleErrors);\n   };\n\n   factory.delete = function (problem) {\n      return $http.delete('/api/problems/' + problem._id).then(function (res) {\n         return res.data;\n      }, factory.handleErrors);\n   };\n\n   factory.update = function (problem) {\n      return $http.put('/api/problems/' + problem._id, problem).then(function (res) {\n         return res.data;\n      }, factory.handleErrors);\n   };\n\n   return factory;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/factory.js\n// module id = 430\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/factory.js?");

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _config = __webpack_require__(427);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.problem', []).config(_config2.default).directive('problemList', __webpack_require__(429)).factory('Problem', __webpack_require__(430)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/index.js\n// module id = 431\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/index.js?");

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(Problem) {\n   var vm = {};\n   vm.problems = [];\n\n   vm.updateProblems = function () {\n      Problem.findAll().then(function (problems) {\n         vm.problems = problems;\n      });\n   };\n\n   vm.updateProblems();\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/list/controller.js\n// module id = 432\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/list/controller.js?");

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.services', []).factory('Run', __webpack_require__(436)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/services/index.js\n// module id = 433\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/services/index.js?");

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = LiteServerService;\nfunction LiteServerService($http, $timeout, $interval) {\n   var service = {};\n\n   service.open = false;\n   service.intervalId = null;\n\n   service.start = function (callback) {\n      $http.post('/api/lite-server/start', {}).then(function (res) {\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n      callback();\n   };\n\n   service.stop = function (callback) {\n      $http.post('/api/lite-server/stop', {}).then(function (res) {\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n      callback();\n   };\n\n   service.status = function (callback) {\n      $http.post('/api/lite-server/status', {}).then(function (res) {\n         callback(res.data);\n         console.log(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   (function () {\n      service.intervalId = $interval(function () {\n         $http.post('/api/lite-server/status', {}).then(function (res) {\n            service.open = res.data.open;\n         }, function (res) {\n            console.log(res.data);\n         });\n      }, 1000);\n   })();\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/services/lite-server.service.js\n// module id = 434\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/services/lite-server.service.js?");

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = Project01Service;\nfunction Project01Service() {\n   var service = {};\n\n   return service;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/services/project-01.service.js\n// module id = 435\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/services/project-01.service.js?");

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function RunService($http) {\n   var service = {};\n\n   var successHandler = function successHandler(res) {\n      console.log(res.data);\n   };\n   var errorHandler = function errorHandler(res) {\n      console.log(res.data);\n   };\n\n   service.run = function (code, type) {\n\n      $http.post('/api/run', {\n         type: 'node',\n         code: code\n      }).then(successHandler, errorHandler);\n\n      return new Promise(function (resolve, reject) {\n         if (type !== 'node') {\n            return reject({ message: 'Currently only \\'node\\' type is allowed.' });\n         }\n         resolve({ message: 'I have to execute the following code', code: code });\n      });\n   };\n\n   return service;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/services/run/index.js\n// module id = 436\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/services/run/index.js?");

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n   bindings: { snippets: '<' },\n   template: '\\n      <h4>Some snippets.</h4>\\n      <ul>\\n         <li ng-repeat=\"snippet in $ctrl.snippets\">\\n            <a ui-sref=\"snippet.single({snippetId: snippet._id})\">{{snippet.name}}</a>\\n         </li>\\n      </ul>\\n   '\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/components/snippets/index.js\n// module id = 437\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/components/snippets/index.js?");

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function config($stateProvider) {\n   $stateProvider.state('snippet', {\n      url: '/snippet',\n      template: __webpack_require__(747)(),\n      redirectTo: 'snippet.index',\n      controller: __webpack_require__(439),\n      resolve: {\n         snippets: function snippets(Snippet) {\n            return Snippet.getAllSnippets();\n         }\n      }\n   }).state('snippet.index', {\n      url: '/index',\n      template: __webpack_require__(744)()\n   }).state('snippet.create', {\n      url: '/create',\n      template: __webpack_require__(743)()\n   }).state('snippet.list', {\n      url: '/list',\n      template: __webpack_require__(745)()\n   }).state('snippet.single', {\n      url: '/single/{snippetId}',\n      template: __webpack_require__(746)(),\n      resolve: {\n         snippet: function snippet(Snippet, $transition$) {\n            return Snippet.getSnippet($transition$.params().snippetId);\n         }\n      },\n      controller: __webpack_require__(443)\n   });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/config.js\n// module id = 438\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/config.js?");

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Snippet) {\n   // $scope.snippets = snippets;\n   $scope.snippet = {};\n\n   $scope.saveSnippet = function (snippet) {\n      Snippet.save(snippet).then(function (snippet) {\n         console.log(snippet);\n      });\n   };\n\n   $scope.createSnippet = function (snippet) {\n      Snippet.create(snippet, function (snippet) {\n         $scope.updateSnippets();\n         $scope.resetSnippet();\n      });\n   };\n\n   $scope.removeSnippet = function (snippet) {\n      Snippet.remove(snippet._id).then(function (snippet) {\n         console.log(snippet);\n         $scope.updateSnippets();\n      });\n   };\n\n   // console.log(Snippet.getSnippet($scope.snippets[0]));\n\n   //Snippet.getSnippet($scope.snippets[1]._id).then(function(snippet) {\n   // console.log(snippet);\n   //});\n\n   $scope.resetSnippet = function () {\n      $scope.snippet = {\n         name: '',\n         javascript: '',\n         css: '',\n         html: ''\n      };\n   };\n\n   $scope.updateSnippets = function () {\n      Snippet.all(function (snippets) {\n         $scope.snippets = snippets;\n      });\n   };\n\n   $scope.openNewTab = function (snippet) {\n      var html = '\\n         <html>\\n            <head>\\n               <style>' + snippet.css + '</style>\\n            </head>\\n            <body>\\n               ' + snippet.html + '\\n               <script>' + snippet.javascript + '</script>\\n            </body>\\n         </html>\\n      ';\n      var data = 'data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E';\n      var win = window.open(data, '_blank');\n      win.focus();\n      // html = `<p>example content text</p>`;\n      // var win = window.open(`data:text/html,<script>alert('hi');</script>`);\n   };\n\n   $scope.resetSnippet();\n   $scope.updateSnippets();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/controller.js\n// module id = 439\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/controller.js?");

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function preview() {\n   return {\n      scope: {\n         html: '=',\n         javascript: '=',\n         css: '='\n      },\n      template: '',\n      link: function link(scope, element, attributes) {\n         var xIframe = document.createElement('iframe');\n         element[0].appendChild(xIframe);\n\n         function update() {\n            console.clear();\n            var html = '\\n               <html>\\n                  <head>\\n                     <base href=\"http://192.168.0.2:3000/\">\\n                     <title>App</title>\\n                  </head>\\n                  <body>\\n                     <style>' + scope.css + '</style>\\n                     ' + scope.html + '\\n                     <script>' + scope.javascript + '</script>\\n                  </body>\\n               </html>\\n            ';\n            xIframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);\n         }\n         update();\n\n         scope.$watch('html', function () {\n            update();\n         }, true);\n         scope.$watchCollection('css', function () {\n            update();\n         });\n         scope.$watchCollection('javascript', function () {\n            update();\n         });\n      }\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/directives/preview/index.js\n// module id = 440\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/directives/preview/index.js?");

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\n__webpack_require__(889);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.snipper', []).config(__webpack_require__(438)).factory('Snippet', __webpack_require__(442)).directive('snippetPreview', __webpack_require__(440)).component('snippets', __webpack_require__(437)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/index.js\n// module id = 441\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/index.js?");

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function SnippetService($http) {\n   var service = {};\n\n   service.save = function (snippet) {\n      console.log(snippet);\n      return $http.put('/api/snippets/' + snippet._id, snippet).then(function (res) {\n         return res.data;\n      });\n   };\n\n   service.all = function (callback) {\n      $http.get('/api/snippets').then(function (res) {\n         if (callback) callback(res.data);\n      });\n   };\n\n   service.create = function (snippet, callback) {\n      $http.post('/api/snippets', snippet).then(function (res) {\n         if (callback) callback(res.data);\n      });\n   };\n\n   service.remove = function (snippetId) {\n      return $http.delete('/api/snippets/' + snippetId).then(function (res) {\n         return res.data;\n      });\n   };\n\n   service.getSnippet = function (_id) {\n      return service.getAllSnippets().then(function (snippets) {\n         return snippets.find(function (snippet) {\n            return snippet._id === _id;\n         });\n      });\n   };\n\n   service.getAllSnippets = function () {\n      return $http.get('/api/snippets').then(function (res) {\n         return res.data;\n      });\n   };\n\n   return service;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/service.js\n// module id = 442\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/service.js?");

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, snippet) {\n   $scope.snippet = snippet;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/single/controller.js\n// module id = 443\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/single/controller.js?");

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = TaskController;\nfunction TaskController($scope, $http) {\n   var _this = this;\n\n   this.tasks = [];\n\n   this.resetTask = function () {\n      _this.task = {\n         body: ''\n      };\n   };\n\n   this.resetTask();\n\n   this.new = function (task) {\n      $http.post('/api/tasks', task).then(function (res) {\n         _this.tasks.push(res.data);\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   this.remove = function (task) {\n      $http.delete('/api/tasks/' + task._id).then(function (res) {\n         _this.tasks.splice(_this.tasks.indexOf(task), 1);\n         _this.resetTask();\n      }, function (res) {\n         console.log(res.data);\n      });\n   };\n\n   $http.get('/api/tasks').then(function (res) {\n      _this.tasks = res.data;\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/controllers/task.controller.js\n// module id = 444\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/controllers/task.controller.js?");

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _task = __webpack_require__(446);\n\nvar _task2 = _interopRequireDefault(_task);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mod = _angular2.default.module('app.tasks', []);\n\nmod.config(_task2.default);\n\nexports.default = mod.name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/index.js\n// module id = 445\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/index.js?");

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = routes;\n\nvar _task = __webpack_require__(444);\n\nvar _task2 = _interopRequireDefault(_task);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction routes($stateProvider) {\n   $stateProvider.state('tasks', {\n      url: '/tasks',\n      template: __webpack_require__(753)(),\n      controller: _task2.default,\n      controllerAs: 'TaskCtrl',\n      redirectTo: 'tasks.list'\n   }).state('tasks.new', {\n      url: '/new',\n      template: __webpack_require__(751)()\n   }).state('tasks.list', {\n      url: '/list',\n      template: __webpack_require__(749)()\n   }).state('tasks.removed', {\n      url: '/removed',\n      template: __webpack_require__(752)()\n   });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/task.routes.js\n// module id = 446\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/task.routes.js?");

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function config($stateProvider) {\n   $stateProvider.state('todo', {\n      url: '/todo',\n      template: __webpack_require__(759)(),\n      controller: __webpack_require__(448),\n      redirectTo: 'todo.index'\n   }).state('todo.index', {\n      url: '/index',\n      template: __webpack_require__(755)(),\n      controller: __webpack_require__(451)\n   }).state('todo.create', {\n      url: '/create',\n      template: __webpack_require__(754)(),\n      controller: __webpack_require__(449)\n   }).state('todo.removed', {\n      url: '/removed',\n      template: __webpack_require__(757)(),\n      controller: __webpack_require__(453),\n      controllerAs: 'vm'\n   }).state('todo.list', {\n      url: '/list',\n      template: __webpack_require__(756)(),\n      controller: __webpack_require__(452)\n   }).state('todo.single', {\n      url: '/single/{todoId}',\n      template: __webpack_require__(758)(),\n      controller: __webpack_require__(455),\n      controllerAs: 'vm',\n      resolve: {\n         todo: function todo(Todo, $transition$) {\n            return Todo.findById($transition$.params().todoId);\n         }\n      }\n   });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/config.js\n// module id = 447\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/config.js?");

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Todo) {\n   $scope.todos = [];\n   $scope.todo = {};\n\n   $scope.createTodo = function (todo) {\n      Todo.create(todo).then(function (todo) {\n         $scope.resetTodo();\n         $scope.updateTodos();\n      });\n   };\n\n   $scope.setDone = function (todo) {\n      Todo.setDone(todo).then(function () {\n         $scope.updateTodos();\n      });\n   };\n\n   $scope.setNotDone = function (todo) {\n      Todo.setNotDone(todo).then(function () {\n         $scope.updateTodos();\n      });\n   };\n\n   $scope.resetTodo = function () {\n      $scope.todo = {\n         text: ''\n      };\n   };\n\n   $scope.updateTodos = function () {\n      Todo.findAll().then(function (todos) {\n         $scope.todos = todos;\n      });\n   };\n\n   $scope.removeTodo = function (todo) {\n      Todo.remove(todo).then(function (todo) {\n         $scope.updateTodos();\n      });\n   };\n\n   $scope.updateTodos();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/controller.js\n// module id = 448\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/controller.js?");

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/create/controller.js\n// module id = 449\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/create/controller.js?");

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\n__webpack_require__(890);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.todo', []).config(__webpack_require__(447)).factory('Todo', __webpack_require__(454)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/index.js\n// module id = 450\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/index.js?");

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/index/controller.js\n// module id = 451\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/index/controller.js?");

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/list/controller.js\n// module id = 452\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/list/controller.js?");

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(Todo) {\n   var vm = {};\n\n   vm.todos = [];\n\n   vm.updateTodos = function () {\n      Todo.findRemoved().then(function (todos) {\n         vm.todos = todos;\n      });\n   };\n\n   vm.recoverTodo = function (todo) {\n      Todo.recover(todo).then(function () {\n         vm.updateTodos();\n      });\n   };\n\n   vm.removePermanently = function (todo) {\n      Todo.destroy(todo).then(function () {\n         vm.updateTodos();\n      });\n   };\n\n   vm.updateTodos();\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/removed/controller.js\n// module id = 453\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/removed/controller.js?");

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function service($http) {\n   var service = {\n      create: function create(todo) {\n         return $http.post('/api/todos', todo).then(function (res) {\n            return res.data;\n         });\n      },\n      findAll: function findAll() {\n         return $http.get('/api/todos').then(function (res) {\n            return res.data;\n         });\n      },\n      findRemoved: function findRemoved() {\n         return $http.get('/api/todos?removed=true').then(function (res) {\n            return res.data;\n         });\n      },\n      setDone: function setDone(todo) {\n         return $http.put('/api/todos/' + todo._id + '/done').then(function (res) {\n            return res.data;\n         });\n      },\n      setNotDone: function setNotDone(todo) {\n         return $http.put('/api/todos/' + todo._id + '/notDone').then(function (res) {\n            return res.data;\n         });\n      },\n      remove: function remove(todo) {\n         return $http.delete('/api/todos/' + todo._id).then(function (res) {\n            return res.data;\n         });\n      },\n      destroy: function destroy(todo) {\n         return $http.delete('/api/todos/' + todo._id + '?destroy=true').then(function (res) {\n            return res.data;\n         });\n      },\n      recover: function recover(todo) {\n         return $http.put('/api/todos/' + todo._id + '/recover').then(function (res) {\n            return res.data;\n         });\n      },\n      findById: function findById(todoId) {\n         return $http.get('/api/todos/' + todoId).then(function (res) {\n            return res.data;\n         });\n      }\n   };\n   return service;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/service.js\n// module id = 454\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/service.js?");

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(todo) {\n   var vm = {};\n\n   vm.todo = todo;\n\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/single/controller.js\n// module id = 455\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/single/controller.js?");

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function config($stateProvider) {\n   $stateProvider\n   /* tutorial routes */\n   .state('tutorial', {\n      url: '/tutorial',\n      controller: __webpack_require__(457),\n      template: __webpack_require__(772)(),\n      redirectTo: 'tutorial.index'\n   }).state('tutorial.index', {\n      url: '/index',\n      controller: __webpack_require__(462),\n      template: __webpack_require__(762)()\n   }).state('tutorial.create', {\n      url: '/create',\n      controller: __webpack_require__(458),\n      template: __webpack_require__(760)()\n   }).state('tutorial.list', {\n      url: '/list',\n      controller: __webpack_require__(463),\n      template: __webpack_require__(763)()\n   }).state('tutorial.removed', {\n      url: '/removed',\n      controller: __webpack_require__(464),\n      template: __webpack_require__(764)()\n   })\n   /* tutorial single routes */\n   .state('tutorial.single', {\n      url: '/single/{tutorialId}',\n      controller: __webpack_require__(469),\n      template: __webpack_require__(771)(),\n      resolve: {\n         tutorial: function tutorial(Tutorial, $transition$) {\n            return Tutorial.single($transition$.params().tutorialId);\n         }\n      },\n      redirectTo: 'tutorial.single.index'\n   }).state('tutorial.single.index', {\n      url: '/index',\n      template: __webpack_require__(770)()\n   })\n   /* tutorial single code routes */\n   .state('tutorial.single.code', {\n      url: '/code',\n      template: __webpack_require__(769)(),\n      redirectTo: 'tutorial.single.code.index'\n   }).state('tutorial.single.code.index', {\n      url: '/index',\n      template: __webpack_require__(767)(),\n      controller: __webpack_require__(467),\n      controllerAs: 'vm'\n   }).state('tutorial.single.code.list', {\n      url: '/list',\n      template: __webpack_require__(768)(),\n      controller: __webpack_require__(468),\n      controllerAs: 'vm'\n   }).state('tutorial.single.code.create', {\n      url: '/create',\n      controller: __webpack_require__(465),\n      controllerAs: 'vm',\n      template: __webpack_require__(765)\n   });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/config.js\n// module id = 456\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/config.js?");

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(Tutorial, $scope) {\n   $scope.tutorials = [];\n   $scope.tutorial = {};\n\n   $scope.createTutorial = function (tutorial) {\n      Tutorial.create(tutorial).then(function (tutorial) {\n         $scope.updateTutorials();\n         $scope.resetTutorial();\n      });\n   };\n\n   $scope.updateTutorials = function () {\n      Tutorial.findAll().then(function (tutorials) {\n         $scope.tutorials = tutorials;\n      });\n   };\n\n   $scope.resetTutorial = function () {\n      $scope.tutorial = {\n         name: ''\n      };\n   };\n\n   $scope.updateTutorials();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/controller.js\n// module id = 457\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/controller.js?");

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/create/controller.js\n// module id = 458\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/create/controller.js?");

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function TutorialListDirective() {\n   return {\n      scope: {\n         'tutorials': '=',\n         'removed': '='\n      },\n      controllerAs: 'vm',\n      controller: function controller(Tutorial, $scope) {\n         var vm = {};\n\n         vm.tutorials = [];\n\n         if ($scope.tutorials) {\n            vm.tutorials = $scope.tutorials;\n         }\n\n         vm.updateTutorials = function () {\n            if ($scope.removed) {\n               Tutorial.findRemoved().then(function (tutorials) {\n                  vm.tutorials = tutorials;\n               });\n            } else {\n               Tutorial.findAll().then(function (tutorials) {\n                  vm.tutorials = tutorials;\n               });\n            }\n         };\n\n         vm.removeTutorial = function (tutorial) {\n            Tutorial.remove(tutorial).then(function () {\n               vm.updateTutorials();\n            });\n         };\n\n         vm.recoverTutorial = function (tutorial) {\n            Tutorial.recover(tutorial).then(function () {\n               vm.updateTutorials();\n            });\n         };\n\n         vm.removePermanently = function (tutorial) {\n            Tutorial.destroy(tutorial).then(function () {\n               vm.updateTutorials();\n            });\n         };\n\n         return vm;\n      },\n      template: __webpack_require__(761)(),\n      link: function link(scope, element, attributes, vm) {\n         scope.$watchGroup(['tutorials', 'removed'], function () {\n            vm.updateTutorials();\n         });\n      }\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/directives/tutorial-list/index.js\n// module id = 459\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/directives/tutorial-list/index.js?");

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function TutorialFactory($http) {\n   var factory = {};\n\n   var handleError = function handleError(res) {\n      console.log(res.data);\n   };\n\n   factory.remove = function (tutorial) {\n      return $http.delete('/api/tutorials/' + tutorial._id).then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.destroy = function (tutorial) {\n      return $http.delete('/api/tutorials/' + tutorial._id + '?destroy=true').then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.recover = function (tutorial) {\n      return $http.put('/api/tutorials/' + tutorial._id + '/recover').then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.findById = function (tutorialId) {\n      return $http.get('/api/tutorials/' + tutorialId).then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.findRemoved = function () {\n      return $http.get('/api/tutorials?removed=true').then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.findAll = function () {\n      return $http.get('/api/tutorials').then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.create = function (tutorial) {\n      return $http.post('/api/tutorials', tutorial).then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.single = function (tutorialId) {\n      return $http.get('/api/tutorials/' + tutorialId).then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   factory.createCode = function (tutorialId, code) {\n      return $http.post('/api/tutorials/' + tutorialId + '/codes', code).then(function (res) {\n         return res.data;\n      }, handleError);\n   };\n\n   return factory;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/factory.js\n// module id = 460\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/factory.js?");

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('app.tutorial', []).config(__webpack_require__(456)).factory('Tutorial', __webpack_require__(460)).directive('tutorialSingleCodeLatest', __webpack_require__(466)).directive('tutorialList', __webpack_require__(459)).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/index.js\n// module id = 461\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/index.js?");

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/index/controller.js\n// module id = 462\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/index/controller.js?");

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, Tutorial) {\n   $scope.updateTutorials();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/list/controller.js\n// module id = 463\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/list/controller.js?");

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller() {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/removed/controller.js\n// module id = 464\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/removed/controller.js?");

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(Tutorial, tutorial) {\n   var vm = {};\n\n   vm.code = {};\n\n   vm.resetCode = function () {\n      vm.code = {\n         title: '',\n         body: ''\n      };\n   };\n\n   vm.createCode = function (code) {\n      Tutorial.createCode(tutorial._id, code).then(function (code) {\n         vm.resetCode();\n      });\n   };\n\n   vm.resetCode();\n\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/create/controller.js\n// module id = 465\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/create/controller.js?");

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function latestDirective() {\n   return {\n      scope: {\n         tutorialId: '='\n      },\n      controller: function controller(Tutorial, $scope) {\n         Tutorial.findById($scope.tutorialId).then(function (tutorial) {\n            $scope.codes = tutorial.codes;\n         });\n      },\n      template: __webpack_require__(766)(),\n      link: function link(scope, element, attributes) {}\n   };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/directives/latest/index.js\n// module id = 466\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/directives/latest/index.js?");

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, tutorial) {\n   var vm = {};\n\n   $scope.tutorial = tutorial;\n   vm.tutorial = tutorial;\n\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/index/controller.js\n// module id = 467\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/index/controller.js?");

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller(tutorial, Run) {\n   var vm = {};\n\n   vm.codes = tutorial.codes;\n   vm.tutorial = tutorial;\n\n   vm.runCode = function (code) {\n      Run.run(code.body, 'node').then(function (res) {\n         console.log(res);\n      }).catch(function (err) {\n         console.log(err);\n      });\n   };\n\n   return vm;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/list/controller.js\n// module id = 468\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/list/controller.js?");

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function controller($scope, tutorial) {\n   $scope.code = {};\n   $scope.resetCode = function () {\n      $scope.code = {\n         language: 'javascript',\n         body: ''\n      };\n   };\n   $scope.tutorial = tutorial;\n   $scope.resetCode();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/controller.js\n// module id = 469\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/controller.js?");

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(295);\n\n__webpack_require__(294);\n\n__webpack_require__(296);\n\nvar _angular = __webpack_require__(4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\n__webpack_require__(65);\n\nvar _jquery = __webpack_require__(66);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _highlightjs = __webpack_require__(293);\n\nvar _highlightjs2 = _interopRequireDefault(_highlightjs);\n\nvar _app = __webpack_require__(292);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import reactApp from './react-app';\n\n(0, _jquery2.default)(document).ready(function () {\n   (0, _jquery2.default)('pre code').each(function (i, block) {\n      _highlightjs2.default.highlightBlock(block);\n   });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/index.js\n// module id = 470\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);\", \"\"]);\nexports.push([module.i, \"@import url(https://www.fontify.me/wf/42a6cdb26bad8bf22678dbaaa59e2d3a);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=PT+Sans+Narrow);\", \"\"]);\n\n// module\nexports.push([module.i, \"* {\\n  box-sizing: border-box; }\\n\\nbody {\\n  background-color: #DE524B;\\n  font-family: 'Arial Narrow', 'PT Sans Narrow', sans-serif;\\n  padding-bottom: 100px; }\\n\\n.app-list {\\n  font-family: 'Arial Narrow', Arial, sans-serif;\\n  margin: 0px;\\n  padding: 0px;\\n  list-style: none; }\\n  .app-list li {\\n    border: 1px solid rgba(0, 0, 0, 0.5);\\n    border-radius: 3px;\\n    margin-bottom: 3px;\\n    background-color: #f2f2f2;\\n    color: #111;\\n    padding: 1px 3px 1px 3px; }\\n    .app-list li:hover {\\n      background-color: #1DDB99; }\\n\\n.app-title {\\n  background-color: #1DDB99;\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  border-radius: 3px;\\n  padding: 2px 3px; }\\n\\n.app-form {\\n  font-family: 'Arial Narrow', Arial, sans-serif;\\n  background-color: #f2f2f2;\\n  padding: 20px;\\n  border-radius: 3px;\\n  border: 1px solid rgba(0, 0, 0, 0.5); }\\n  .app-form .form-control {\\n    border: 1px solid rgba(0, 0, 0, 0.2);\\n    border: 1px solid rgba(0, 0, 0, 0.2); }\\n    .app-form .form-control:focus, .app-form .form-control:active {\\n      outline: none;\\n      border: 1px solid rgba(0, 0, 0, 0.4); }\\n  .app-form .btn {\\n    border: 1px solid rgba(0, 0, 0, 0.2); }\\n    .app-form .btn:focus, .app-form .btn:active {\\n      outline: none;\\n      border: 1px solid rgba(0, 0, 0, 0.4); }\\n  .app-form h2.title {\\n    margin: 0px;\\n    margin-bottom: 10px; }\\n  .app-form input {\\n    padding: 12px 20px; }\\n\\n.jumbotron {\\n  background-color: #f2f2f2 !important; }\\n\\n.app-navbar a.active, .app-navbar li.active a {\\n  color: red; }\\n\\n.app-navbar a {\\n  text-decoration: none;\\n  color: #6F9ECE; }\\n  .app-navbar a span:first-child {\\n    margin-right: 5px; }\\n  .app-navbar a:hover {\\n    text-decoration: none;\\n    color: red; }\\n    .app-navbar a:hover span:last-child {\\n      text-decoration: underline; }\\n\\n.app-content {\\n  font-family: 'Arial Narrow';\\n  background-color: tomato;\\n  padding: 20px; }\\n  .app-content h2.title {\\n    margin-top: 10px; }\\n\\nul.app-horizontal-nav {\\n  list-style: none;\\n  margin: 0px;\\n  padding: 0px;\\n  background-color: #f2f2f2;\\n  overflow: hidden; }\\n  ul.app-horizontal-nav li {\\n    float: left; }\\n  ul.app-horizontal-nav li.active a, ul.app-horizontal-nav a.active {\\n    background-color: #4caf50;\\n    color: white; }\\n  ul.app-horizontal-nav a {\\n    color: #111;\\n    padding: 8px 16px;\\n    text-decoration: none;\\n    display: block;\\n    min-width: 60px; }\\n    ul.app-horizontal-nav a:hover {\\n      background-color: #555;\\n      color: white; }\\n\\n.app-group {\\n  border-left: 2px solid #111;\\n  background-color: #FF3334;\\n  color: white;\\n  padding: 10px 3px;\\n  margin-bottom: 5px; }\\n  .app-group input {\\n    outline: none;\\n    color: #111; }\\n    .app-group input:active {\\n      outline: none; }\\n\\n.app-group-container .app-group:nth-child(even) {\\n  background-color: #F75D37; }\\n\\n.app-input {\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  font-size: 12px;\\n  padding: 0px;\\n  margin: 0px;\\n  line-height: 12px; }\\n\\n.jumbotron {\\n  background-color: #f2f2f2 !important;\\n  border-radius: 0px !important; }\\n  .jumbotron a, .jumbotron button {\\n    border-radius: 0px !important; }\\n\\ncode {\\n  border-radius: 0px;\\n  margin: 0px;\\n  padding: 0px;\\n  font-family: 'Courier New'; }\\n\\npre {\\n  border-radius: 0px;\\n  padding: 0px;\\n  margin: 0px; }\\n\\nspan.app-break {\\n  display: block;\\n  height: 5px; }\\n\\n.form-group .form-control {\\n  border-radius: 0px; }\\n\\n.btn {\\n  border-radius: 0px; }\\n\\n.form-control {\\n  border: none; }\\n  .form-control:active {\\n    border: none;\\n    outline: 1px solid #111; }\\n  .form-control:focus {\\n    border: none;\\n    outline: 1px solid #111; }\\n\\n.btn:focus, .btn-default:focus, .btn[type=\\\"submit\\\"]:focus {\\n  outline: none;\\n  border: none; }\\n\\n.btn:active, .btn-default:active, .btn[type=\\\"submit\\\"]:active {\\n  outline: 1px solid #111;\\n  border: none; }\\n\\nbootstrap-editor pre code {\\n  overflow: auto; }\\n\\n.app-vertical-nav {\\n  list-style: none;\\n  margin: 0px;\\n  padding: 0px; }\\n  .app-vertical-nav li {\\n    display: block;\\n    margin-bottom: 10px; }\\n  .app-vertical-nav li.active a, .app-vertical-nav a.active {\\n    background-color: #28ABE5;\\n    color: white; }\\n  .app-vertical-nav a {\\n    display: block;\\n    background-color: #f2f2f2;\\n    padding: 7px 20px;\\n    color: #111; }\\n    .app-vertical-nav a:hover {\\n      background-color: #555;\\n      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);\\n      color: white; }\\n    .app-vertical-nav a:active {\\n      outline: 1px solid rgba(0, 0, 0, 0.5); }\\n\\n[ng\\\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\\n  display: none !important; }\\n\\n.app-bar {\\n  background-color: #000; }\\n  .app-bar button {\\n    background-color: #000;\\n    border: none;\\n    outline: none;\\n    color: #FFF;\\n    padding: 5px 10px;\\n    font-size: 16px;\\n    line-height: 29px; }\\n    .app-bar button:hover {\\n      background-color: #fff;\\n      color: #000; }\\n\\n.menu {\\n  background-color: #fff; }\\n  .menu a {\\n    display: inline-block;\\n    padding: 5px 10px; }\\n    .menu a:hover {\\n      background-color: #F2ED6F;\\n      color: #111;\\n      text-decoration: none; }\\n    .menu a.active {\\n      transition: all 0.5s;\\n      background-color: #7EE8FA; }\\n    .menu a:focus {\\n      text-decoration: none; }\\n\\n.form {\\n  margin: 20px;\\n  padding: 20px;\\n  border: 1px solid #5DA9E9;\\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\\n  .form > p {\\n    padding: 20px; }\\n    .form > p label, .form > p input, .form > p textarea {\\n      display: block;\\n      width: 100%; }\\n    .form > p input, .form > p textarea {\\n      border: 1px solid #5DA9E9;\\n      padding: 6px 4px; }\\n  .form button[type=\\\"submit\\\"] {\\n    font-size: 15px;\\n    padding: 5px 10px;\\n    border: 1px solid #5DA9E9;\\n    background-color: #F2ED6F; }\\n    .form button[type=\\\"submit\\\"]:hover {\\n      background-color: #5DA9E9; }\\n    .form button[type=\\\"submit\\\"]:active {\\n      background-color: #111;\\n      color: #fff; }\\n\\n.list .pre {\\n  white-space: pre; }\\n\\n.list .excerpt {\\n  max-height: 150px;\\n  overflow: hidden;\\n  position: relative; }\\n\\n.list > div {\\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);\\n  padding: 20px;\\n  margin-bottom: 10px; }\\n  .list > div h3 {\\n    font-size: 15px; }\\n  .list > div .tag {\\n    float: right;\\n    background-color: #5DA9E9;\\n    display: inline-block;\\n    padding: 2px 5px; }\\n  .list > div.done .tag {\\n    background-color: #80FF72; }\\n  .list > div button {\\n    margin-right: 5px; }\\n    .list > div button:last-child {\\n      margin-right: 0px; }\\n\\npre code, code.code {\\n  font-family: 'Roboto Mono', monospace;\\n  font-size: 14px; }\\n\\ndiv.main {\\n  background-color: #fff;\\n  padding-bottom: 20px;\\n  margin: 10px auto;\\n  padding: 10px;\\n  display: block;\\n  min-width: 400px;\\n  max-width: 1000px;\\n  border: 5px solid #000; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/app.scss\n// module id = 478\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"color-box {\\n  font-family: verdana;\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  display: block;\\n  width: 300px;\\n  height: 300px;\\n  background-color: #6F9ECE; }\\n  color-box h1 {\\n    font-size: 20px;\\n    margin: 0px;\\n    padding: 0px; }\\n  color-box ul {\\n    display: block;\\n    margin: 0px;\\n    padding: 0px;\\n    padding-top: 3px;\\n    list-style: none; }\\n  color-box li {\\n    overflow: hidden;\\n    margin-bottom: 2px; }\\n    color-box li .left, color-box li right {\\n      overflow: hidden; }\\n    color-box li .left {\\n      float: left;\\n      width: 250px; }\\n    color-box li .right {\\n      float: right;\\n      width: 50px; }\\n    color-box li button, color-box li .btn {\\n      float: right;\\n      margin: 0px;\\n      padding: 0px;\\n      padding: 0px 3px;\\n      margin: 3px; }\\n  color-box .color {\\n    width: 100%;\\n    margin-left: 3px;\\n    padding: 3px;\\n    border: 1px solid rgba(0, 0, 0, 0.5);\\n    font-size: 14px; }\\n    color-box .color .hex {\\n      float: right;\\n      margin-right: 3px;\\n      mix-blend-mode: multiply; }\\n  color-box form {\\n    display: block;\\n    line-height: 20px; }\\n    color-box form label {\\n      float: left;\\n      display: block;\\n      width: 50px; }\\n    color-box form .form-group {\\n      overflow: hidden; }\\n    color-box form .form-control {\\n      float: left;\\n      width: 250px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/components/color-box/color-box.scss\n// module id = 479\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/directives/app-model-json/style.scss\n// module id = 480\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-model-json/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"app-time {\\n  border: 1px solid #000;\\n  display: block;\\n  position: fixed;\\n  bottom: 0px;\\n  left: 0px;\\n  background-color: #fff;\\n  padding: 3px 8px;\\n  border-bottom: none;\\n  border-left: none; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/directives/app-time/style.scss\n// module id = 481\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-time/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"#document-page {\\n  background-color: #fff;\\n  padding-top: 10px; }\\n  #document-page .menu a {\\n    display: inline-block;\\n    padding: 5px 10px; }\\n    #document-page .menu a:hover {\\n      background-color: #F2ED6F;\\n      color: #111;\\n      text-decoration: none; }\\n    #document-page .menu a.active {\\n      background-color: #7EE8FA; }\\n    #document-page .menu a:focus {\\n      text-decoration: none; }\\n  #document-page .panel {\\n    border: 1px solid #000;\\n    border-radius: 0px;\\n    background-color: #5DA9E9;\\n    color: #111;\\n    padding: 3px 5px; }\\n    #document-page .panel.removed {\\n      background-color: #ED6A5A; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/document/style.scss\n// module id = 482\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"document-code code {\\n  border: 5px solid #000; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/history/directives/document-code/style.scss\n// module id = 483\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/directives/document-code/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"document-code-editor {\\n  display: block; }\\n  document-code-editor .editor {\\n    min-height: 200px; }\\n\\nhistory-sample {\\n  border: 1px solid #000;\\n  display: block;\\n  background-color: white;\\n  margin: 10px;\\n  padding: 5px; }\\n  history-sample .item {\\n    border: 1px solid #000;\\n    display: inline-block;\\n    padding: 10px;\\n    text-align: center;\\n    vertical-align: center;\\n    margin-right: 5px;\\n    margin-bottom: 5px; }\\n    history-sample .item p {\\n      margin: 0px;\\n      padding: 0px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/history/style.scss\n// module id = 484\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/note/style.scss\n// module id = 485\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"snippet-preview iframe {\\n  width: 100%;\\n  border: 2px solid #111;\\n  min-height: 500px; }\\n\\nh4.title {\\n  overflow: hidden; }\\n  h4.title button {\\n    float: right;\\n    font-size: 12px; }\\n\\n.snippet-list .buttons {\\n  margin-bottom: 10px; }\\n  .snippet-list .buttons button {\\n    font-size: 10px;\\n    padding: 0px 4px;\\n    margin-right: 4px; }\\n    .snippet-list .buttons button:last-child {\\n      margin-right: 0px; }\\n    @media (max-width: 800px) {\\n      .snippet-list .buttons button {\\n        display: block;\\n        width: 100%; } }\\n    @media (min-width: 800px) {\\n      .snippet-list .buttons button {\\n        font-size: 12px; }\\n        .snippet-list .buttons button.right {\\n          float: right;\\n          margin-left: 5px; }\\n          .snippet-list .buttons button.right:first-child {\\n            margin-left: 0px; } }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/snippet/style.scss\n// module id = 486\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n  background-color: #67AAF9; }\\n\\n#content {\\n  margin-top: 10px;\\n  padding-bottom: 20px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// .._modules/css-loader!.._modules/sass-loader/lib/loader.js!./client/app/todo/style.scss\n// module id = 487\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/style.scss?.._modules/css-loader!.._modules/sass-loader/lib/loader.js");

/***/ }),
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(262).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Ch1\\u003ELogin.\\u003C\\u002Fh1\\u003E\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"AuthCtrl.login(AuthCtrl.credentials)\\\" ng-if=\\\"!currentUser\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"AuthCtrl.credentials.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"AuthCtrl.credentials.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" type=\\\"submit\\\"\\u003ELogin.\\u003C\\u002Fbutton\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = \" \") ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Ca class=\\\"btn btn-default\\\" ui-sref=\\\"register\\\"\\u003EBecome a member.\\u003C\\u002Fa\\u003E\\u003C\\u002Fform\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/login/login.view.pug\n// module id = 693\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/login/login.view.pug?");

/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"app-form\\\" ng-submit=\\\"AuthCtrl.register(AuthCtrl.credentials)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"AuthCtrl.credentials.email\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"AuthCtrl.credentials.password\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EPassword Confirmation.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"password\\\" ng-model=\\\"AuthCtrl.credentials.password2\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" type=\\\"submit\\\"\\u003EBecome a member.\\u003C\\u002Fbutton\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = \" \") ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Ca class=\\\"btn btn-default\\\" ui-sref=\\\"login\\\"\\u003ELogin.\\u003C\\u002Fa\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/auth/register/register.view.pug\n// module id = 694\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/auth/register/register.view.pug?");

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog\\\"\\u003EBlog.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog.post.index\\\"\\u003EPosts\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog.post.create\\\"\\u003ECreate a post.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.nav.pug\n// module id = 695\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.nav.pug?");

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003Cdiv class=\\\"app-content w3-container\\\"\\u003E\\u003Ch2 class=\\\"title\\\"\\u003EBlog.\\u003C\\u002Fh2\\u003E\" + (null == (pug_interp = __webpack_require__(695).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/blog.view.pug\n// module id = 696\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/blog.view.pug?");

/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003ECreate a new post.\\u003C\\u002Fh3\\u003E\\u003Cform class=\\\"app-form\\\" id=\\\"create-post-form\\\" ng-submit=\\\"vm.createPost(vm.post)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003ETitle.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\" ng-model=\\\"vm.post.title\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EContent.\\u003C\\u002Flabel\\u003E\\u003Ctextarea class=\\\"form-control\\\" ng-model=\\\"vm.post.body\\\"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\" type=\\\"submit\\\"\\u003ECreate new post.\\u003C\\u002Fbutton\\u003E\\u003Cscript\\u003E$('#create-post-form input').focus();\\u003C\\u002Fscript\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/views/create.view.pug\n// module id = 697\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/views/create.view.pug?");

/***/ }),
/* 698 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EPage of posts.\\u003C\\u002Fh3\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/post/views/index.view.pug\n// module id = 698\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/post/views/index.view.pug?");

/***/ }),
/* 699 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EThis is the home of blog.\\u003C\\u002Fh3\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/blog/views/home.view.pug\n// module id = 699\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/blog/views/home.view.pug?");

/***/ }),
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EINDEX\\u003C\\u002Fh2\\u003E\\u003Cform class=\\\"w3-card-4 w3-panel\\\" ng-submit=\\\"createBook(book)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ENAME\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\" ng-model=\\\"book.name\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EDESCRIPTION\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\" ng-model=\\\"book.description\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\" type=\\\"submit\\\"\\u003ECREATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-panel\\\"\\u003E\\u003Cul class=\\\"w3-ul\\\"\\u003E\\u003Cli ng-repeat=\\\"book in books\\\"\\u003E\\u003Ch4\\u003E{{book.name}}\\u003C\\u002Fh4\\u003E\\u003Cp\\u003E{{book.description}}\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-bar\\\"\\u003E\\u003Cbutton class=\\\"w3-btn w3-bar-item w3-red w3-right\\\" ng-click=\\\"removeBook(book)\\\"\\u003EREMOVE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/book/index/template.pug\n// module id = 700\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/book/index/template.pug?");

/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"w3-container\\\"\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch1\\u003EBOOK\\u003C\\u002Fh1\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/book/template.pug\n// module id = 701\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/book/template.pug?");

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ECREATE\\u003C\\u002Fh2\\u003E\\u003Cform ng-submit=\\\"createCode(code)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ETITLE\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input\\\" ng-model=\\\"code.title\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EEDITOR\\u003C\\u002Flabel\\u003E\\u003Capp-editor bind=\\\"code.body\\\"\\u003E\\u003C\\u002Fapp-editor\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\"\\u003ECREATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/create/template.pug\n// module id = 702\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/create/template.pug?");

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EEDIT CODE\\u003C\\u002Fh2\\u003E\\u003Cform class=\\\"form\\\" ng-submit=\\\"vm.updateCode(vm.code)\\\"\\u003E\\u003Cp\\u003E \\u003Clabel\\u003ETITLE\\u003C\\u002Flabel\\u003E\\u003Cinput ng-model=\\\"vm.code.title\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EBODY\\u003C\\u002Flabel\\u003E\\u003Capp-editor bind=\\\"vm.code.body\\\"\\u003E\\u003C\\u002Fapp-editor\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton type=\\\"submit\\\"\\u003EUPDATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/edit/template.pug\n// module id = 703\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/edit/template.pug?");

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EINDEX\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-panel\\\" ng-repeat=\\\"code in codes\\\"\\u003E\\u003Cp\\u003E\\u003Cdocument-code body=\\\"code.body\\\" language=\\\"{'value': 'javascript', 'name': 'Javascript'}\\\"\\u003E\\u003C\\u002Fdocument-code\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\" ng-click=\\\"removeCode(code)\\\" style=\\\"margin-right: 5px;\\\"\\u003EREMOVE\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-btn\\\" ng-click=\\\"setTemplateCode(code)\\\"\\u003EUSE ASE TEMPLATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\" onclick=\\\"this.nextSibling.classList.toggle('hide')\\\"\\u003ESHOW JSON OBJECT\\u003C\\u002Fbutton\\u003E\\u003Cdocument-code class=\\\"hide\\\" body=\\\"code | json\\\" language=\\\"{'value': 'json', 'name': 'JSON'}\\\"\\u003E\\u003C\\u002Fdocument-code\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/index/template.pug\n// module id = 704\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/index/template.pug?");

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003ELIST OF ALL CODES\\u003C\\u002Fh4\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"code in codes\\\"\\u003E\\u003Ch5\\u003E{{ code.title }}\\u003C\\u002Fh5\\u003E\\u003Capp-code body=\\\"code.body\\\" language=\\\"'javascript'\\\"\\u003E\\u003C\\u002Fapp-code\\u003E\\u003Cdiv class=\\\"buttons\\\" style=\\\"margin-top: 10px;\\\"\\u003E\\u003Cbutton ui-sref=\\\"code.edit({codeId: code._id})\\\"\\u003EEDIT\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/list/template.pug\n// module id = 705\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/list/template.pug?");

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/removed/template.pug\n// module id = 706\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/removed/template.pug?");

/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ESINGLE CODE\\u003C\\u002Fh2\\u003E\\u003Ch4\\u003E{{ vm.code.title }}\\u003C\\u002Fh4\\u003E\\u003Capp-code body=\\\"vm.code.body\\\"\\u003E\\u003C\\u002Fapp-code\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/single/template.pug\n// module id = 707\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/single/template.pug?");

/***/ }),
/* 708 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cstyle\\u003E#content \\u003E .w3-container {\\n   border: 1px solid #D6F49D;\\n}\\n#content .w3-btn.active {\\n   background-color: #EE6352;\\n   color: #D6F49D;\\n}\\n\\n\\u003C\\u002Fstyle\\u003E\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"main\\\"\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Ch1\\u003ECODE\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"code.index\\\"\\u003EINDEX\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"code.create\\\"\\u003ECREATE\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"code.list\\\"\\u003ELIST\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"code.removed\\\"\\u003EREMOVED\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"content\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/code/template.pug\n// module id = 708\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/code/template.pug?");

/***/ }),
/* 709 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul\\u003E\\u003Cli ng-repeat=\\\"color in colors\\\"\\u003E\\u003Cdiv class=\\\"left\\\"\\u003E\\u003Cdiv class=\\\"color\\\" ng-style=\\\"{'background-color': color.hex}\\\"\\u003E \\u003Cspan class=\\\"name\\\"\\u003E{{ color.name }}\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"hex\\\"\\u003E{{ color.hex }}\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"right\\\"\\u003E\\u003Cbutton class=\\\"btn btn-danger btn-xs\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-remove\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C!-- button.btn.btn-default.btn-xs \\u002F\\u002F span.glyphicon.glyphicon-remove--\\u003E\\u003C\\u002Fbutton\\u003E\\u003C!-- div.btn-group(role=\\\"group\\\", aria-label=\\\"label\\\")\\u002F\\u002F button.btn.btn-default.btn-xs\\n   \\u002F\\u002F span.glyphicon.glyphicon-remove\\n\\u002F\\u002F button.btn.btn-default.btn-xs\\n   \\u002F\\u002F span.glyphicon.glyphicon-remove\\n--\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Chr\\u003E\\u003Cform ng-submit=\\\"addColor(color)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EHex.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"form-control\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003EAdd.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.template.pug\n// module id = 709\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.template.pug?");

/***/ }),
/* 710 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"w3-panel w3-light-gray\\\"\\u003E\\u003Ch4\\u003EThis is the footer.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EConsectetur expedita temporibus quia enim eum deleniti eius cum reprehenderit deleniti numquam. In eveniet eos ex ut quos! Deleniti aliquid qui qui sequi placeat laborum. Saepe asperiores odit nostrum accusantium.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/footer/footer.template.pug\n// module id = 710\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/footer/footer.template.pug?");

/***/ }),
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnav class=\\\"app-navbar\\\"\\u003E\\u003Cul class=\\\"w3-bar w3-black\\\"\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"home\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-home\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EHome\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tutorial\\\"\\u003E\\u003Cspan class=\\\"glyphicon glyphicon-book\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ETutorial\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks\\\"\\u003E\\u003Cspan class=\\\"glyphicon glyphicon-list-alt\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ETasks\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"blog\\\"\\u003E\\u003Cspan class=\\\"glyphicon glyphicon-bold\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EBlog\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item\\\"\\u003E\\u003Ca href=\\\"\\u002F\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-link\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ELink\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item w3-right\\\" ng-if=\\\"!currentUser\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"login\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-link\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ELogin\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item w3-right\\\" ng-if=\\\"currentUser\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca href=\\\"#\\\" ng-click=\\\"NavCtrl.logout()\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-link\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ELog out\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"w3-bar-item w3-right\\\" ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"dashboard\\\"\\u003E \\u003Cspan class=\\\"glyphicon glyphicon-dashboard\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EDashboard\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003C\\u002Fnav\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/navbar/navbar.template.pug\n// module id = 711\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/navbar/navbar.template.pug?");

/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"w3-bar w3-white\\\"\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"home\\\"\\u003EHome\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"document\\\"\\u003EDocument\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"code\\\"\\u003ECode\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"history\\\"\\u003EHistory\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"problem\\\"\\u003EProblem\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"mongoose\\\"\\u003EMongoose\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial\\\"\\u003ETutorial\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"snippet\\\"\\u003ESnippet\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"todo\\\"\\u003ETodo\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"note\\\"\\u003ENote\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-btn\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"exercise\\\"\\u003EExercise\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-main-nav/template.pug\n// module id = 712\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-main-nav/template.pug?");

/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EDocuments.\\u003C\\u002Fh2\\u003E\\u003Cdiv\\u003E\\u003Cp\\u003ECurrent date: {{ currentDate }}\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv ng-repeat=\\\"i in [0, 1, 2, 3, 4, 5, 6]\\\"\\u003E\\u003Cbutton ng-click=\\\"setDate(getDate(i))\\\"\\u003E{{ i + ': ' + day(i) }}\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch2\\u003EList of documents.\\u003C\\u002Fh2\\u003E\\u003Cdiv ng-repeat=\\\"document in documents\\\"\\u003E\\u003Cdiv class=\\\"panel\\\" ng-class=\\\"{'removed': document.removedAt}\\\"\\u003E\\u003Ch3\\u003E{{ document.name }}\\u003C\\u002Fh3\\u003E\\u003Cbutton onclick=\\\"this.nextSibling.classList.toggle('hide')\\\"\\u003EView json\\u003C\\u002Fbutton\\u003E\\u003Cpre class=\\\"hide\\\"\\u003E\\u003Ccode\\u003E{{ document | json }}\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003Cdiv style=\\\"margin-top: 10px;\\\"\\u003E\\u003Cp\\u003ECreated At: {{ document.createdAt | date : 'd.M.yyyy' }}\\u003C\\u002Fp\\u003E\\u003Cp ng-if=\\\"document.removedAt\\\"\\u003ERemoved At: {{ document.removedAt | date : 'd.M.yyyy' }}\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"w3-red w3-btn\\\" ng-if=\\\"!document.removedAt\\\" ng-click=\\\"removeDocument(document)\\\"\\u003ERemove\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-blue w3-btn\\\" ng-if=\\\"document.removedAt\\\" ng-click=\\\"unRemoveDocument(document)\\\"\\u003EUn remove.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/documents/template.pug\n// module id = 713\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/documents/template.pug?");

/***/ }),
/* 714 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EIndex.\\u003C\\u002Fh2\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/index/template.pug\n// module id = 714\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/index/template.pug?");

/***/ }),
/* 715 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"w3-container\\\"\\u003E\\u003Cdiv class=\\\"w3-panel\\\" id=\\\"document-page\\\"\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\";\nvar attrs = {'ui-sref-active': 'active'};\npug_html = pug_html + \"\\u003Ca\" + (pug.attrs(pug.merge([{\"ui-sref\": \"document.index\"},attrs]), true)) + \"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003Ca\" + (pug.attrs(pug.merge([{\"ui-sref\": \"document.documents\"},attrs]), true)) + \"\\u003EDocuments\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/template.pug\n// module id = 715\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/template.pug?");

/***/ }),
/* 716 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ECREATE\\u003C\\u002Fh2\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/exercise/create/template.pug\n// module id = 716\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/exercise/create/template.pug?");

/***/ }),
/* 717 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EINDEX\\u003C\\u002Fh2\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/exercise/index/template.pug\n// module id = 717\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/exercise/index/template.pug?");

/***/ }),
/* 718 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"main\\\"\\u003E\\u003Ch1\\u003EEXERCISE\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"exercise.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"exercise.create\\\"\\u003ECreate\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"content\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/exercise/template.pug\n// module id = 718\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/exercise/template.pug?");

/***/ }),
/* 719 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ECREATE HISTORY\\u003C\\u002Fh2\\u003E\\u003Cform ng-submit=\\\"create(history)\\\"\\u003E\\u003Cbutton class=\\\"w3-btn w3-light-gray\\\" type=\\\"submit\\\"\\u003ECREATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/create/template.pug\n// module id = 719\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/create/template.pug?");

/***/ }),
/* 720 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EHISTORIES LIST\\u003C\\u002Fh2\\u003E\\u003Cstyle\\u003E.loc-btn {\\n   margin-top: -20px;\\n   margin-right: 5px;\\n}\\n\\u003C\\u002Fstyle\\u003E\\u003Cdiv class=\\\"w3-panel\\\" ng-repeat=\\\"history in histories | orderBy: '-createdAt'\\\"\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-white\\\"\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Ch3\\u003E{{history.createdAt | date : 'dd.MM.yyyy HH:mm:ss'}}\\u003C\\u002Fh3\\u003E\\u003Cp\\u003E\\u003Ci\\u003ENum codes: {{history.codes.length}}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Ci\\u003ENum posts: {{history.posts.length}}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ca class=\\\"w3-btn w3-right loc-btn\\\" ui-sref=\\\"history.single({ historyId: history._id })\\\"\\u003EGO TO HISTORY\\u003C\\u002Fa\\u003E\\u003C!-- pre {{ history | json }}--\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/list/template.pug\n// module id = 720\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/list/template.pug?");

/***/ }),
/* 721 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cstyle\\u003E.toggle-btn {\\n   float: right;\\n   font-size: 12px;\\n}\\n.local-btns {\\n   margin-top: -20px;\\n   margin-right: 10px;\\n}\\n\\u003C\\u002Fstyle\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-white\\\"\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Ch2\\u003ESINGLE HISTORY\\u003C\\u002Fh2\\u003E\\u003Chr\\u003E\\u003Ch3\\u003E{{history.createdAt | date : 'dd.MM.yyyy hh:mm:ss'}}\\u003C\\u002Fh3\\u003E\\u003Cdiv ng-if=\\\"history.removedAt\\\"\\u003ERemovedAt:\\u003Ci\\u003E{{ history.removedAt }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv ng-if=\\\"history.updatedAt\\\"\\u003EUpdatedAt:\\u003Ci\\u003E{{ history.updatedAt }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C!-- pre {{ history | json }}--\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"local-btns w3-right\\\"\\u003E\\u003Ca class=\\\"w3-btn loc-btn w3-blue\\\" ui-sref=\\\"\\\"\\u003EEDIT\\u003C\\u002Fa\\u003E\\u003Cbutton class=\\\"w3-btn loc-btn w3-red\\\" ng-click=\\\"deleteHistory(history)\\\"\\u003EDELETE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-card-4\\\"\\u003E\\u003Ch3\\u003EADD POST\\u003Cbutton class=\\\"toggle-btn w3-btn\\\" onclick=\\\"this.parentElement.nextSibling.classList.toggle('w3-hide')\\\"\\u003ETOGGLE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fh3\\u003E\\u003Cform class=\\\"w3-hide\\\" ng-submit=\\\"addPost(post)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ETitle\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\" ng-model=\\\"post.title\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EBody\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\" ng-model=\\\"post.body\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\"\\u003EADD POST\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-card-4\\\"\\u003E\\u003Ch3\\u003EADD CODE\\u003Cbutton class=\\\"toggle-btn w3-btn\\\" onclick=\\\"this.parentElement.nextSibling.classList.toggle('w3-hide')\\\"\\u003ETOGGLE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fh3\\u003E\\u003Cform class=\\\"w3-hide\\\" ng-submit=\\\"setAndAddCode(code)\\\"\\u003E\\u003Cp\\u003E \\u003Clabel\\u003ELanguage\\u003C\\u002Flabel\\u003E\\u003Cselect class=\\\"w3-select\\\" ng-options=\\\"language as language.name for language in languages track by language.value\\\" ng-model=\\\"code.language\\\" ng-change=\\\"updateLangugage()\\\"\\u003E\\u003C\\u002Fselect\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ETitle\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\" ng-model=\\\"code.title\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E \\u003Clabel\\u003EBody\\u003C\\u002Flabel\\u003E\\u003Cdocument-code-editor\\u003E\\u003C\\u002Fdocument-code-editor\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\"\\u003EADD CODE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container\\\"\\u003E\\u003Ch2\\u003EPOSTS\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-panel w3-white\\\" ng-repeat=\\\"post in history.posts | orderBy: '-createdAt'\\\"\\u003E\\u003Ch4\\u003E{{ post.title }}\\u003C\\u002Fh4\\u003E\\u003Cp\\u003E{{ post.body }}\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container\\\"\\u003E\\u003Ch2\\u003ECODES\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-panel w3-white\\\" ng-repeat=\\\"code in history.codes | orderBy: '-createdAt'\\\"\\u003E\\u003Ch4\\u003E{{ code.title }}\\u003C\\u002Fh4\\u003E\\u003Cp\\u003E\\u003Cdocument-code body=\\\"code.body\\\" language=\\\"code.language\\\"\\u003E\\u003C\\u002Fdocument-code\\u003E\\u003C\\u002Fp\\u003E\\u003Cp class=\\\"w3-bar\\\"\\u003E\\u003Cbutton class=\\\"w3-right w3-bar-item w3-btn w3-red\\\" ng-click=\\\"removeCode(code)\\\"\\u003ERemove\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/single/template.pug\n// module id = 721\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/single/template.pug?");

/***/ }),
/* 722 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Chistory-sample\\u003E\\u003C\\u002Fhistory-sample\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cbutton class=\\\"w3-btn\\\" onclick=\\\"this.nextSibling.classList.toggle('w3-hide')\\\"\\u003E{{ currentUser.email + '| JSON'}}\\u003C\\u002Fbutton\\u003E\\u003Cdiv class=\\\"w3-panel w3-hide\\\"\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cpre\\u003E \\u003Ccode class=\\\"json\\\"\\u003E{{ currentUser | json }}\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container\\\"\\u003E\\u003Ch1\\u003EHISTORY\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"w3-bar\\\"\\u003E\\u003Ca class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"history.create\\\"\\u003ECREATE HISTORY\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"history.list\\\"\\u003EHISTORIES LIST\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/template.pug\n// module id = 722\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/template.pug?");

/***/ }),
/* 723 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"main\\\"\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch1\\u003EHOME\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref=\\\"book\\\"\\u003EBook\\u003C\\u002Fa\\u003E\\u003Ca ui-sref=\\\"movie\\\"\\u003EMovie\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch2\\u003ELATEST NOTES\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"note in notes\\\"\\u003E\\u003Ch4\\u003E{{note.title}}\\u003C\\u002Fh4\\u003E\\u003Cdiv class=\\\"pre excerpt\\\"\\u003E{{note.content}}\\u003C\\u002Fdiv\\u003E\\u003Cp\\u003E[excerpt]\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/home/template.pug\n// module id = 723\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/home/template.pug?");

/***/ }),
/* 724 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch1\\u003EAimbooster.\\u003C\\u002Fh1\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/aimbooster/aimbooster.view.pug\n// module id = 724\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/aimbooster/aimbooster.view.pug?");

/***/ }),
/* 725 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\\u003C!-- Header.--\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch1\\u003EW3 View.\\u003C\\u002Fh1\\u003E\\u003Chr\\u003E\\u003Ca ui-sref=\\\"home\\\"\\u003EHome.\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Ch2\\u003EResponsive.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing a reprehenderit perferendis ducimus pariatur vitae necessitatibus sit? Voluptas molestiae illo cupiditate aliquam odio accusantium possimus corporis ut sit omnis quam natus pariatur sequi? Necessitatibus enim amet nemo quaerat.\\u003C\\u002Fp\\u003E\\u003Ch3\\u003EHalf and half.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-half w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EOne Half.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003ESit ea nulla rerum maxime numquam! Cumque hic mollitia id culpa repellendus quasi ut? Nisi nam pariatur libero praesentium quas delectus nam rem, sapiente. Sit ipsa mollitia alias beatae tempora.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-half w3-container w3-red\\\"\\u003E\\u003Ch4\\u003ESecond Half.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet autem incidunt adipisci laboriosam ea minus. Aut molestiae delectus autem debitis minima? Itaque earum animi beatae sint incidunt doloremque optio, ea illo iste assumenda blanditiis! Saepe sint itaque facere.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003EOne Third.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet facere repudiandae repellendus accusamus asperiores. Ipsa ea eligendi sapiente vitae assumenda? Optio quam atque eos a praesentium enim? Ipsam unde placeat repudiandae quos itaque excepturi provident odio? Dolor autem.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-red\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet facere repudiandae repellendus accusamus asperiores. Ipsa ea eligendi sapiente vitae assumenda? Optio quam atque eos a praesentium enim? Ipsam unde placeat repudiandae quos itaque excepturi provident odio? Dolor autem.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-blue\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EAmet facere repudiandae repellendus accusamus asperiores. Ipsa ea eligendi sapiente vitae assumenda? Optio quam atque eos a praesentium enim? Ipsam unde placeat repudiandae quos itaque excepturi provident odio? Dolor autem.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003ETwo third.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-twothird w3-green w3-container\\\"\\u003E\\u003Ch4\\u003ETwo Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EElit sed quae ratione ex obcaecati. Corrupti optio ea id aliquid blanditiis reiciendis in minus tempora? Similique minus debitis adipisci recusandae debitis aliquid non eligendi sequi cupiditate explicabo exercitationem ratione.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-third w3-container w3-red\\\"\\u003E\\u003Ch4\\u003EOne Third.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum placeat quos exercitationem omnis obcaecati soluta quaerat quam error corrupti nihil. Quod facere debitis exercitationem perspiciatis reprehenderit neque, quo maxime dolorem nulla nostrum, error inventore quia accusantium. Reiciendis dolorem?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003EQuarter.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-red\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-blue\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-yellow\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003EThree quarter.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-threequarter w3-container w3-green\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003Cp\\u003ESit nihil repellat reiciendis tempore officiis eaque, eveniet autem a, quae? Natus nisi suscipit voluptates facere necessitatibus aut id quam exercitationem veniam! Ducimus exercitationem iste repellendus amet obcaecati ad autem?\\u003C\\u002Fp\\u003E\\u003Cp\\u003EAmet modi temporibus labore fugit ut, optio adipisci vero voluptate! Rerum id vero veniam velit velit? Similique esse ut eum voluptatum tempora rerum numquam. Odio commodi cumque ea corporis et.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-quarter w3-container w3-yellow\\\"\\u003E\\u003Ch4\\u003EQuarter.\\u003C\\u002Fh4\\u003E\\u003Cp\\u003EIpsum eum illum veniam fuga itaque totam quibusdam quos eligendi nemo possimus sint laboriosam modi. Quis autem aut eveniet ut sit pariatur fugit maxime. Sapiente explicabo provident explicabo atque architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003ERest.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-col w3-red w3-container\\\" style=\\\"width: 150px;\\\"\\u003E \\u003Cbr\\u003E\\u003Cp\\u003E150px.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-blue w3-rest w3-container\\\"\\u003E\\u003Cbr\\u003E\\u003Cp\\u003ERest.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Ch1\\u003EHeader.\\u003C\\u002Fh1\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container w3-light-gray\\\"\\u003E\\u003Cbr\\u003E\\u003Cp\\u003EConsectetur sed iure error consequuntur alias? Eligendi voluptatum reprehenderit consequatur fugit dignissimos. Porro cumque perferendis expedita rerum odit repudiandae voluptas perferendis cupiditate excepturi voluptatem. Nesciunt repudiandae placeat at quaerat eveniet.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Cbr\\u003E\\u003Cp\\u003EFooter.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white w3-hover-blue\\\"\\u003E\\u003Ch2\\u003ELondon.\\u003C\\u002Fh2\\u003E\\u003Cp class=\\\"w3-text-black\\\"\\u003EAdipisicing earum repudiandae provident corporis necessitatibus, reprehenderit? Expedita placeat sit corrupti officia porro? Ab eveniet ex illum qui reiciendis ex. Praesentium veritatis ipsam laboriosam corporis voluptatum dignissimos. Autem assumenda itaque!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Ch2\\u003ETable.\\u003C\\u002Fh2\\u003E\\u003Cp class=\\\"w3-text-black\\\"\\u003ESit sint aspernatur reprehenderit ad maiores laboriosam. Dignissimos sunt cumque similique quidem id ratione temporibus id et quia. Corrupti omnis dolore neque autem necessitatibus dolor blanditiis itaque recusandae? Ad atque.\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Ch3\\u003ESample data.\\u003C\\u002Fh3\\u003E\\u003Ctable class=\\\"w3-table w3-striped w3-border\\\"\\u003E\\u003Cthead\\u003E\\u003Ctr class=\\\"w3-light-gray\\\"\\u003E\\u003Cth\\u003EName\\u003C\\u002Fth\\u003E\\u003Cth\\u003EEmail\\u003C\\u002Fth\\u003E\\u003Cth\\u003EPassword\\u003C\\u002Fth\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Fthead\\u003E\\u003Ctbody\\u003E\\u003Ctr ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Ctd\\u003EWilliam Valhakis\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Ewilliam.valhakis@gmail.com\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Eihavenopassword\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Ftbody\\u003E\\u003C\\u002Ftable\\u003E\\u003Chr\\u003E\\u003Ch3\\u003ESample data.\\u003C\\u002Fh3\\u003E\\u003Ctable class=\\\"w3-table-all\\\"\\u003E\\u003Cthead class=\\\"w3-light-gray\\\"\\u003E\\u003Ctr\\u003E\\u003Cth\\u003EName\\u003C\\u002Fth\\u003E\\u003Cth\\u003EEmail\\u003C\\u002Fth\\u003E\\u003Cth\\u003EPassword\\u003C\\u002Fth\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Fthead\\u003E\\u003Ctbody\\u003E\\u003Ctr ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Ctd\\u003EWilliam Valhakis\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Ewilliam.valhakis@gmail.com\\u003C\\u002Ftd\\u003E\\u003Ctd\\u003Eihavenopassword\\u003C\\u002Ftd\\u003E\\u003C\\u002Ftr\\u003E\\u003C\\u002Ftbody\\u003E\\u003C\\u002Ftable\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EButtons with width of 33.3%.\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-bar\\\"\\u003E\\u003Cdiv class=\\\"w3-bar-item w3-button w3-red\\\" style=\\\"width: 33.3%;\\\"\\u003EButton.\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-bar-item w3-button w3-green\\\" style=\\\"width: 33.3%;\\\"\\u003EButton.\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-bar-item w3-button w3-blue\\\" style=\\\"width: 33.3%;\\\"\\u003EButton.\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003ENavigation bar.\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-bar w3-black\\\"\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-button w3-hover-text-red\\\"\\u003ELink.\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-button w3-hover-text-red\\\"\\u003ELink.\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-button w3-hover-text-red\\\"\\u003ELink.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EPanel.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003ESit incidunt molestiae omnis iste voluptate. Dolores ex deleniti dolores et delectus aliquid. Perferendis enim tempora iusto eum mollitia est? Accusantium fugit officiis harum quia consequuntur. Mollitia maxime minus earum.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EAlerts.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing molestias quo iste quam nesciunt obcaecati saepe voluptate illo. Magnam sit libero minima similique dicta autem a adipisci, consequatur placeat praesentium, eius eligendi architecto facilis nobis ea. Culpa facilis!\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-panel w3-red w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-red w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003EDanger.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EAdipisicing maxime debitis iste possimus consequuntur nulla consequatur vero. Aperiam quia delectus temporibus eius fuga. Molestiae explicabo consequuntur porro nihil est. Elit dolore provident dicta saepe voluptatem perferendis nesciunt ullam.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-yellow w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-yellow w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003EWarning.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum unde adipisicing illo exercitationem omnis sunt? Cupiditate voluptates eos culpa doloremque quas rem nihil quod. Quod fuga pariatur eius rerum corrupti odio cumque. Optio animi ut facilis quia totam!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-green w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-green w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003ESuccess.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum unde adipisicing illo exercitationem omnis sunt? Cupiditate voluptates eos culpa doloremque quas rem nihil quod. Quod fuga pariatur eius rerum corrupti odio cumque. Optio animi ut facilis quia totam!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-blue w3-display-container\\\"\\u003E\\u003Cspan class=\\\"w3-button w3-blue w3-display-topright\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003Ch3\\u003EInfo.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EIpsum unde adipisicing illo exercitationem omnis sunt? Cupiditate voluptates eos culpa doloremque quas rem nihil quod. Quod fuga pariatur eius rerum corrupti odio cumque. Optio animi ut facilis quia totam!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-card-4\\\"\\u003E\\u003Ch2\\u003EPanel as card.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing odio blanditiis ex omnis recusandae quibusdam voluptas natus, rem incidunt. Omnis est harum qui animi assumenda, quasi voluptatum. Nihil quo maxime voluptate fuga voluptatem? Ipsum blanditiis deleniti fugit veniam.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-round-large\\\"\\u003E\\u003Ch2\\u003ERounded panel.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EIpsum explicabo non itaque fugit inventore pariatur rerum suscipit veritatis fugiat error debitis, odit voluptates obcaecati est. In dolorem accusamus voluptatibus voluptatibus vel praesentium earum nihil repudiandae reiciendis dicta error?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003ELists.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003ELorem aspernatur cum laboriosam nemo quasi, laudantium dolore quaerat dolores! Quo fugiat id voluptatum aspernatur ex asperiores. Suscipit ducimus libero quaerat necessitatibus veritatis fugiat. Asperiores voluptatibus consequatur tempora ipsum ducimus.\\u003C\\u002Fp\\u003E\\u003Cul class=\\\"w3-list\\\"\\u003E\\u003Cli class=\\\"w3-display-container\\\" ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Cdiv\\u003EWilliam Valhakis.\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cspan class=\\\"w3-button w3-display-right\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003EX\\u003C\\u002Fspan\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003Chr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EIcons.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing amet praesentium nemo ea fugiat. Sapiente alias accusamus officiis eligendi beatae totam in sunt labore aspernatur. Minima voluptatum alias tenetur reprehenderit at rem id. Molestiae quis autem veritatis sequi?\\u003C\\u002Fp\\u003E\\u003Cp\\u003EHome.\\u003Ci class=\\\"fa fa-home\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EBars.\\u003Ci class=\\\"fa fa-bars\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ELeft.\\u003Ci class=\\\"fa fa-arrow-left\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ERight.\\u003Ci class=\\\"fa fa-arrow-right\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ESearch.\\u003Ci class=\\\"fa fa-search\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EClose.\\u003Ci class=\\\"fa fa-close\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ERefresh.\\u003Ci class=\\\"fa fa-refresh\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ETrash.\\u003Ci class=\\\"fa fa-trash\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EMale.\\u003Ci class=\\\"fa fa-male\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ECar.\\u003Ci class=\\\"fa fa-car\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003ETruck.\\u003Ci class=\\\"fa fa-truck\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003EPlane.\\u003Ci class=\\\"fa fa-plane\\\"\\u003E\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EForms.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EDolor fugit molestias dolorem sunt dolor, quis tempore modi ipsam ea, fuga culpa iure beatae. Expedita ut laboriosam corrupti architecto dolores quaerat, libero quis illo, esse corrupti doloremque vitae corporis.\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cdiv class=\\\"w3-container w3-red\\\"\\u003E\\u003Ch3\\u003EInput Form.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cform class=\\\"w3-container\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003Cbr\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003C\\u002Fform\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cdiv class=\\\"w3-container w3-green\\\"\\u003E\\u003Ch3\\u003EInput Form.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cform class=\\\"w3-container\\\"\\u003E\\u003Cbr\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cbr\\u003E\\u003Cinput class=\\\"w3-input\\\"\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003C\\u002Fform\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003Cdiv class=\\\"w3-card-4\\\"\\u003E\\u003Cdiv class=\\\"w3-container w3-blue\\\"\\u003E\\u003Ch3\\u003EInput Form.\\u003C\\u002Fh3\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cform class=\\\"w3-container\\\"\\u003E\\u003Cbr\\u003E\\u003Clabel\\u003EName.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\"\\u003E\\u003Cbr\\u003E\\u003Cbr\\u003E\\u003Clabel\\u003EEmail.\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-border\\\"\\u003E\\u003Cbr\\u003E\\u003Cbr\\u003E\\u003Cbutton class=\\\"w3-btn w3-blue\\\"\\u003ESubmit.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003ETags.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAdipisicing possimus natus nisi nihil ab! Quia ad consequuntur natus veritatis nemo quaerat quibusdam ab aperiam, ratione voluptate sequi atque? Veniam veritatis voluptatibus eos doloribus libero. Optio similique perspiciatis iste?\\u003C\\u002Fp\\u003E\\u003Chr\\u003E\\u003Cp\\u003E \\u003Cspan\\u003EStatus: \\u003Cspan class=\\\"w3-tag\\\"\\u003EDone.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cspan class=\\\"w3-tag w3-blue\\\"\\u003ENew.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E \\u003Cspan class=\\\"w3-tag w3-teal\\\"\\u003EMaybe Later.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge\\\"\\u003EA\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge w3-red\\\"\\u003EU\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge\\\"\\u003EG\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge w3-red\\\"\\u003EU\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge\\\"\\u003ES\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"w3-tag w3-xlarge w3-red\\\"\\u003ET\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cbr\\u003E\\u003Cp\\u003E\\u003Cspan class=\\\"w3-tag w3-spin w3-large w3-red w3-border w3-border-black\\\"\\u003ESPIN\\u003C\\u002Fspan\\u003E\\u003C\\u002Fp\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-leftbar w3-border-black w3-border\\\"\\u003E\\u003Ch2\\u003EPanel with left border.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003ELorem cum magnam aspernatur ad velit. Quasi repudiandae unde rerum quaerat consectetur autem maxime! Omnis necessitatibus a voluptatibus earum omnis dolores totam pariatur consectetur debitis magni similique commodi? Itaque fuga.\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cbutton class=\\\"w3-btn\\\" onclick=\\\"this.nextSibling.style.display='block'\\\"\\u003ESHOW.\\u003C\\u002Fbutton\\u003E\\u003Cdiv class=\\\"w3-panel w3-white w3-display-container\\\"\\u003E\\u003Ch2\\u003EHide panel.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EConsectetur maiores vitae saepe corporis in ducimus voluptatum veniam unde. Consectetur asperiores quae consectetur quas sequi, itaque? Cum ipsam eaque nemo nemo omnis amet! Iure harum perferendis fugiat nam provident.\\u003C\\u002Fp\\u003E\\u003Cspan class=\\\"w3-button w3-display-topright w3-black\\\" onclick=\\\"this.parentElement.style.display='none'\\\"\\u003ECLOSE.\\u003C\\u002Fspan\\u003E\\u003Cp\\u003EElit animi corrupti libero illo totam, ipsum elit! Suscipit assumenda ex obcaecati dolor aut voluptatem nisi qui sequi? Accusantium tenetur illum iste hic nulla dolore saepe ipsum, tempore. Porro nulla!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EFooter.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAmet assumenda aperiam porro cumque deleniti. Autem dolorem necessitatibus quaerat ad doloremque dolor quos! Quis accusantium voluptas fugiat sit repellendus! Consequuntur repellat deleniti tenetur magni provident, mollitia ipsa? Vitae voluptatibus.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-panel\\\" ng-repeat=\\\"i in [0, 1, 2, 3, 4]\\\"\\u003E\\u003Ch3\\u003EItem {{ i }}.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EElit fuga harum repellat quisquam enim nihil quaerat et odit voluptas asperiores eaque totam impedit dolore itaque inventore iste incidunt quibusdam. Voluptas fuga aperiam quo dicta voluptatem. Magnam laudantium architecto?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cp\\u003ESit eos ducimus repellendus quod nulla recusandae. Nesciunt a quisquam sunt odit quam? Earum laudantium iusto aspernatur itaque porro ab libero laboriosam suscipit, laboriosam ut veritatis optio unde fugit sunt.\\u003C\\u002Fp\\u003E\\u003Cp\\u003EConsectetur molestias earum harum at animi! Libero fugit quos magni in consequuntur porro consectetur vel! Omnis officia soluta dolores unde et nobis laudantium enim ipsam! Error explicabo sunt soluta voluptates?\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/modules/w3/w3.view.pug\n// module id = 725\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/modules/w3/w3.view.pug?");

/***/ }),
/* 726 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"w3-panel w3-card-4 w3-red\\\" ng-submit=\\\"create(mongoose)\\\"\\u003E\\u003Ch3\\u003ECREATE MONGOOSE\\u003C\\u002Fh3\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ENAME\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input w3-text-black\\\" ng-model=\\\"mongoose.name\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\" type=\\\"submit\\\"\\u003ECREATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/mongoose/create/template.pug\n// module id = 726\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/mongoose/create/template.pug?");

/***/ }),
/* 727 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EINDEX\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-container\\\" ng-if=\\\"currentMongoose\\\"\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-panel\\\"\\u003E\\u003Ch3 ng-if=\\\"currentMongoose.name\\\"\\u003E{{ currentMongoose.name }}\\u003C\\u002Fh3\\u003E\\u003Ch3 ng-if=\\\"!currentMongoose.name\\\"\\u003ENO NAME IS SET\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"w3-bar\\\"\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-right w3-btn w3-black\\\" ng-click=\\\"unsetMongoose()\\\"\\u003EUNSET CURRENT MONGOOSE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container\\\" ng-repeat=\\\"mongoose in mongooses\\\" ng-if=\\\"!currentMongoose\\\"\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-panel\\\"\\u003E\\u003Ch4 ng-if=\\\"mongoose.name\\\"\\u003E{{ mongoose.name | uppercase }}\\u003C\\u002Fh4\\u003E\\u003Ch4 ng-if=\\\"!mongoose.name\\\"\\u003ENO NAME IS SET\\u003C\\u002Fh4\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-bar\\\" style=\\\"margin-top: -20px; padding-right: 5px;\\\"\\u003E\\u003Cbutton class=\\\"w3-panel-item w3-btn w3-right\\\" style=\\\"font-size: 12px; padding: 3px 6px; line-height: 12px;\\\" ng-click=\\\"setCurrentMongoose(mongoose)\\\"\\u003ESET AS CURRENT\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/mongoose/index/template.pug\n// module id = 727\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/mongoose/index/template.pug?");

/***/ }),
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"w3-container\\\"\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch1\\u003EMONGOOSE\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"w3-bar\\\"\\u003E\\u003Ca class=\\\"w3-bar-item w3-hover-red\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"mongoose.index\\\"\\u003EINDEX\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"w3-bar-item w3-hover-red\\\" ui-sref-active=\\\"active\\\" ui-sref=\\\"mongoose.create\\\" ng-if=\\\"!currentMongoose\\\"\\u003ECREATE\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/mongoose/template.pug\n// module id = 728\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/mongoose/template.pug?");

/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ECREATE A NOTE\\u003C\\u002Fh2\\u003E\\u003Cform class=\\\"form\\\" ng-submit=\\\"createNote(note)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ETitle\\u003C\\u002Flabel\\u003E\\u003Cinput ng-model=\\\"note.title\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EContent\\u003C\\u002Flabel\\u003E\\u003Ctextarea ng-model=\\\"note.content\\\"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton type=\\\"submit\\\"\\u003ECreate\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/create/template.pug\n// module id = 729\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/create/template.pug?");

/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EINDEX\\u003C\\u002Fh2\\u003E\\u003Ch3\\u003ELATEST 5 NOTES\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"note in notes | orderBy:'-createdAt' | limitTo:5\\\"\\u003E\\u003Ch4\\u003E{{ note.title ? note.title : 'NOTE HAS NO TITLE'}}\\u003C\\u002Fh4\\u003E\\u003Cdiv class=\\\"pre excerpt\\\" style=\\\"margin-bottom: 20px;\\\"\\u003E{{ note.content ? note.content : 'NOTE HAS NO CONTENT'}}\\u003C\\u002Fdiv\\u003E\\u003Cdiv\\u003E[excerpt]\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/index/template.pug\n// module id = 730\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/index/template.pug?");

/***/ }),
/* 731 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ELIST\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"note in notes\\\"\\u003E\\u003Cp\\u003E{{ 'sample data' | linebreaks }}\\u003C\\u002Fp\\u003E\\u003Ch4\\u003E{{ note.title ? note.title : 'NOTE HAS NO TITLE'}}\\u003C\\u002Fh4\\u003E\\u003Cdiv class=\\\"pre\\\" style=\\\"margin-bottom: 20px;\\\"\\u003E{{ (note.content ? note.content : 'NOTE HAS NO CONTENT') | linebreaks}}\\u003C\\u002Fdiv\\u003E\\u003Cbutton ng-click=\\\"removeNote(note)\\\"\\u003ERemove\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/list/template.pug\n// module id = 731\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/list/template.pug?");

/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ELIST OF REMOVED NOTES\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"note in vm.notes\\\"\\u003E\\u003Ch4\\u003E{{ note.title ? note.title : 'NOTE HAS NO TITLE'}}\\u003C\\u002Fh4\\u003E\\u003Cdiv\\u003E{{ note.content ? note.content : 'NOTE HAS NO CONTENT'}}\\u003C\\u002Fdiv\\u003E\\u003Cp style=\\\"margin-top: 20px;\\\"\\u003ERemovedAt: \\u003Ci\\u003E{{note.removedAt | date:'d.M.yyyy | HH:mm:ss'}}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003Cbutton ng-click=\\\"vm.removeNotePermanently(note)\\\"\\u003ERemove Permanently\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/removed/template.pug\n// module id = 732\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/removed/template.pug?");

/***/ }),
/* 733 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"main\\\"\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"note.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"note.create\\\"\\u003ECreate\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"note.list\\\"\\u003EList\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"note.removed\\\"\\u003ERemoved\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"content\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/template.pug\n// module id = 733\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/template.pug?");

/***/ }),
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"app-content\\\"\\u003E\\u003Ch1\\u003EDashboard.\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EWelcome \\u003Ci\\u003E{{ currentUser.email }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fh2\\u003E\\u003Cp\\u003E \\u003Ci\\u003E{{ currentUser.id }}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003ELite Server\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EAmet saepe aperiam iusto earum nemo sit ipsa ab quae id. Consequuntur aliquid itaque aliquid accusamus vel fuga facere distinctio omnis. Voluptate dignissimos odit quaerat cum aspernatur fuga? Impedit necessitatibus.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"w3-bar w3-black\\\"\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.startClass()\\\" ng-click=\\\"lite.start()\\\"\\u003ESTART\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.stopClass()\\\" ng-click=\\\"lite.stop()\\\"\\u003ESTOP\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.statusClass()\\\" ng-click=\\\"lite.status()\\\"\\u003ESTATUS\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"w3-bar-item w3-btn w3-hover-white\\\" ng-class=\\\"lite.openClass()\\\" ng-click=\\\"lite.open()\\\"\\u003EOPEN IN NEW TAB\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-panel w3-white\\\"\\u003E\\u003Ch2\\u003EPROJECTS\\u003C\\u002Fh2\\u003E\\u003Chr\\u003E\\u003Ch3\\u003EProject 01 - Example.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EConsectetur mollitia eum assumenda omnis optio beatae quam commodi deleniti corporis nemo nihil quisquam maiores labore beatae. Suscipit accusantium iste placeat quisquam accusamus amet officiis deserunt. Minus minima soluta quasi.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"app-bar\\\"\\u003E\\u003Cbutton ng-click=\\\"project01.start()\\\" ng-class=\\\"{'w3-disabled':project01.isOpen}\\\"\\u003ESTART\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-click=\\\"project01.stop()\\\" ng-class=\\\"{'w3-disabled':!project01.isOpen}\\\"\\u003ESTOP\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-click=\\\"project01.status()\\\" ng-class=\\\"{'w3-green':project01.isOpen, 'w3-red':!project01.isOpen}\\\"\\u003ESTATUS\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-click=\\\"project01.open()\\\" ng-class=\\\"{'w3-disabled':!project01.isOpen}\\\"\\u003EOPEN IN NEW TAB\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbr\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/dashboard/dashboard.view.pug\n// module id = 734\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/dashboard/dashboard.view.pug?");

/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EEditor view.\\u003C\\u002Fh2\\u003E\\u003Cmongoose-editor\\u003E\\u003C\\u002Fmongoose-editor\\u003E\\u003Cp ng-bind=\\\"code.body\\\"\\u003E\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/editor/editor.view.pug\n// module id = 735\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/editor/editor.view.pug?");

/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EIndex view.\\u003C\\u002Fh2\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/index/index.view.pug\n// module id = 736\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/index/index.view.pug?");

/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"app-content\\\"\\u003E\\u003Ch1\\u003EMongoose View.\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"col-xs-3\\\"\\u003E\\u003Cdiv class=\\\"app-vertical-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"mongoose.index\\\"\\u003EIndex.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"mongoose.editor\\\"\\u003EEditor.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"col-xs-9\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/pages/mongoose/mongoose.view.pug\n// module id = 737\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/pages/mongoose/mongoose.view.pug?");

/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ECREATE NEW PROBLEM\\u003C\\u002Fh2\\u003E\\u003Cform class=\\\"form\\\" ng-submit=\\\"createProblem(problem)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ETitle\\u003C\\u002Flabel\\u003E\\u003Cinput ng-model=\\\"problem.title\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EProblem\\u003C\\u002Flabel\\u003E\\u003Ctextarea ng-model=\\\"problem.content\\\"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton type=\\\"submit\\\"\\u003ECreate\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/create/template.pug\n// module id = 738\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/create/template.pug?");

/***/ }),
/* 739 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"problem in problems\\\"\\u003E\\u003Ch5\\u003E{{ problem.title }}\\u003C\\u002Fh5\\u003E\\u003Cdiv class=\\\"pre\\\"\\u003E{{ problem.content }}\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/directives/list/template.pug\n// module id = 739\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/directives/list/template.pug?");

/***/ }),
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/index/template.pug\n// module id = 740\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/index/template.pug?");

/***/ }),
/* 741 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ELIST OF ALL PROBLEMS\\u003C\\u002Fh2\\u003E\\u003Cproblem-list problems=\\\"vm.problems\\\"\\u003E\\u003C\\u002Fproblem-list\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/list/template.pug\n// module id = 741\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/list/template.pug?");

/***/ }),
/* 742 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"main\\\"\\u003E\\u003Ch1\\u003EPROBLEM\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"problem.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"problem.create\\\"\\u003ECreate\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"problem.list\\\"\\u003EList\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"content\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/problem/template.pug\n// module id = 742\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/problem/template.pug?");

/***/ }),
/* 743 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ECREATE\\u003C\\u002Fh2\\u003E\\u003Cform ng-submit=\\\"createSnippet(snippet)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ENAME\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"w3-input\\\" ng-model=\\\"snippet.name\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton class=\\\"w3-btn\\\"\\u003ECREATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/create/template.pug\n// module id = 743\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/create/template.pug?");

/***/ }),
/* 744 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EINDEX\\u003C\\u002Fh2\\u003E\\u003Csnippets snippets=\\\"snippets\\\"\\u003E\\u003C\\u002Fsnippets\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/index/template.pug\n// module id = 744\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/index/template.pug?");

/***/ }),
/* 745 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ELIST\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-row snippet-list\\\"\\u003E\\u003Cdiv class=\\\"w3-col s4\\\" ng-repeat=\\\"snippet in snippets\\\"\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cdiv class=\\\"w3-card-4 w3-panel\\\"\\u003E\\u003Ch3 style=\\\"font-size: 16px;\\\"\\u003E{{ snippet.name }}\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"buttons\\\"\\u003E\\u003Cbutton ng-click=\\\"removeSnippet(snippet)\\\"\\u003EREMOVE\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"right\\\" ui-sref=\\\"snippet.single({snippetId: snippet._id})\\\"\\u003EOPEN\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"right\\\" ng-click=\\\"openNewTab(snippet)\\\"\\u003ENEW TAB\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/list/template.pug\n// module id = 745\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/list/template.pug?");

/***/ }),
/* 746 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ESINGLE\\u003C\\u002Fh2\\u003E\\u003Ch3\\u003E{{ snippet.name }}\\u003C\\u002Fh3\\u003E\\u003Cdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-row\\\"\\u003E\\u003Cdiv class=\\\"w3-col l4\\\"\\u003E\\u003Ch4 class=\\\"title\\\"\\u003EHTML\\u003Cbutton onclick=\\\"this.parentElement.nextSibling.classList.toggle('hide')\\\"\\u003ESHOW \\u002F HIDE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fh4\\u003E\\u003Capp-editor class=\\\"hide\\\" eId=\\\"1\\\" mode=\\\"html\\\" bind=\\\"snippet.html\\\"\\u003E\\u003C\\u002Fapp-editor\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-col l4\\\"\\u003E\\u003Ch4 class=\\\"title\\\"\\u003EJAVASCRIPT\\u003Cbutton onclick=\\\"this.parentElement.nextSibling.classList.toggle('hide')\\\"\\u003ESHOW \\u002F HIDE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fh4\\u003E\\u003Capp-editor class=\\\"hide\\\" eId=\\\"2\\\" mode=\\\"javascript\\\" bind=\\\"snippet.javascript\\\"\\u003E\\u003C\\u002Fapp-editor\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-col l4\\\"\\u003E\\u003Ch4 class=\\\"title\\\"\\u003ECSS\\u003Cbutton onclick=\\\"this.parentElement.nextSibling.classList.toggle('hide')\\\"\\u003ESHOW \\u002F HIDE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fh4\\u003E\\u003Capp-editor class=\\\"hide\\\" eId=\\\"3\\\" mode=\\\"css\\\" bind=\\\"snippet.css\\\"\\u003E\\u003C\\u002Fapp-editor\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-row\\\" style=\\\"margin-bottom: 10px;\\\"\\u003E\\u003Cdiv class=\\\"w3-col l12\\\"\\u003E\\u003Csnippet-preview html=\\\"snippet.html\\\" javascript=\\\"snippet.javascript\\\" css=\\\"snippet.css\\\"\\u003E\\u003C\\u002Fsnippet-preview\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton style=\\\"margin-bottom: 10px;\\\" ng-click=\\\"saveSnippet(snippet)\\\"\\u003ESAVE\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/single/template.pug\n// module id = 746\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/single/template.pug?");

/***/ }),
/* 747 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav style=\\\"margin-bottom: 0px;\\\"\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Ch1 style=\\\"margin: 10px 10px 0px 10px; padding: 10px; background-color: #fff;\\\"\\u003ESNIPPET\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"w3-panel\\\"\\u003E\\u003Cdiv class=\\\"menu\\\" style=\\\"margin-bottom: 5px;\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"snippet.index\\\"\\u003EINDEX\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"snippet.create\\\"\\u003ECREATE\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"snippet.list\\\"\\u003ELIST\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/template.pug\n// module id = 747\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/template.pug?");

/***/ }),
/* 748 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform ng-submit=\\\"TaskCtrl.new(TaskCtrl.task)\\\"\\u003E\\u003Cdiv class=\\\"form-group\\\"\\u003E\\u003Clabel\\u003EContent.\\u003C\\u002Flabel\\u003E\\u003Ctextarea class=\\\"form-control\\\" ng-model=\\\"TaskCtrl.task.body\\\"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"btn btn-default\\\"\\u003ECreate new task.\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/_new_task_form.pug\n// module id = 748\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/_new_task_form.pug?");

/***/ }),
/* 749 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EList of Tasks.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EElit cumque maxime quam quos sint inventore? Nulla quisquam modi repellat iure pariatur fugiat ad eos aspernatur error temporibus, velit qui aliquid eaque a ratione. Corporis perferendis recusandae at sed!\\u003C\\u002Fp\\u003E\\u003Cul class=\\\"w3-ul\\\"\\u003E\\u003Cli ng-repeat=\\\"task in TaskCtrl.tasks\\\"\\u003E\\u003Cp\\u003E{{ task.body }}\\u003C\\u002Fp\\u003E\\u003Cbutton class=\\\"btn btn-danger btn-xs\\\" ng-click=\\\"TaskCtrl.remove(task)\\\"\\u003ERemove.\\u003C\\u002Fbutton\\u003E\\u003Cdiv class=\\\"w3-panel w3-light-gray\\\"\\u003E\\u003Cjson-formatter json=\\\"task\\\" open=\\\"1\\\"\\u003E\\u003C\\u002Fjson-formatter\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/list.view.pug\n// module id = 749\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/list.view.pug?");

/***/ }),
/* 750 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cul class=\\\"app-horizontal-nav\\\"\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks.list\\\"\\u003EList of tasks.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks.new\\\"\\u003ECreate a new task.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli ui-sref-active=\\\"active\\\"\\u003E\\u003Ca ui-sref=\\\"tasks.removed\\\"\\u003EList of removed tasks.\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/nav.pug\n// module id = 750\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/nav.pug?");

/***/ }),
/* 751 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + (\"\\u003Ch3\\u003EPage to create a task.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003ESit possimus laudantium reiciendis adipisci soluta amet, numquam officiis tempore? Rem omnis odit eos provident debitis eos ratione in quaerat quidem cumque beatae minus a sint dolorum placeat repellendus ipsam?\\u003C\\u002Fp\\u003E\" + (null == (pug_interp = __webpack_require__(748).call(this, locals)) ? \"\" : pug_interp));;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/new.view.pug\n// module id = 751\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/new.view.pug?");

/***/ }),
/* 752 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003EThis page should containd removed tasks.\\u003C\\u002Fh3\\u003E\\u003Cp\\u003EConsectetur nesciunt fuga dicta non sequi. Fuga inventore omnis animi aspernatur itaque distinctio eligendi reiciendis. Nulla enim eveniet dignissimos reprehenderit fugit nostrum dignissimos? Vero voluptate eos ex illum dolor quo!\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/partials/removed.view.pug\n// module id = 752\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/partials/removed.view.pug?");

/***/ }),
/* 753 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cnavbar\\u003E\\u003C\\u002Fnavbar\\u003E\\u003Cdiv class=\\\"container-fluid\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(262).call(this, locals)) ? \"\" : pug_interp) + \"\\u003C!-- include \\u002Fbower_components\\u002Fexample.pug--\\u003E\\u003Cdiv class=\\\"app-content\\\"\\u003E\\u003Ch2\\u003ETasks.\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EHere should be information about what should be done.\\u003C\\u002Fp\\u003E\" + (null == (pug_interp = __webpack_require__(750).call(this, locals)) ? \"\" : pug_interp) + \"\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-footer\\u003E\\u003C\\u002Fapp-footer\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tasks/task.view.pug\n// module id = 753\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tasks/task.view.pug?");

/***/ }),
/* 754 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"form\\\" ng-submit=\\\"createTodo(todo)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ETodo \\u003C\\u002Flabel\\u003E\\u003Cinput ng-model=\\\"todo.text\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton type=\\\"submit\\\"\\u003ECreate\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/create/template.pug\n// module id = 754\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/create/template.pug?");

/***/ }),
/* 755 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch3\\u003ELATEST COMPLETED TODOS\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv class=\\\"done\\\" ng-repeat=\\\"todo in todos | notNull:'finishedAt' | orderBy:'-finishedAt'\\\"\\u003E\\u003Cdiv class=\\\"tag\\\"\\u003EHAS BEEN FINISHED\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003E{{todo.text}}\\u003C\\u002Fh3\\u003E\\u003Cdiv\\u003E\\u003Cp\\u003EFinished At \\u003Ci\\u003E{{todo.finishedAt}}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/index/template.pug\n// module id = 755\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/index/template.pug?");

/***/ }),
/* 756 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ELIST\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"todo in todos | orderBy:'-createdAt'\\\" ng-class=\\\"{'done': todo.finishedAt}\\\"\\u003E\\u003Cdiv class=\\\"tag\\\"\\u003E{{todo.finishedAt ? 'HAS BEEN FINISHED' : 'NOT DONE YET'}}\\u003C\\u002Fdiv\\u003E\\u003Ch3\\u003E{{todo.text}}\\u003C\\u002Fh3\\u003E\\u003Cbutton onclick=\\\"this.nextSibling.classList.toggle('hide')\\\"\\u003ESHOW JSON\\u003C\\u002Fbutton\\u003E\\u003Capp-model-json class=\\\"hide\\\" object=\\\"todo\\\"\\u003E\\u003C\\u002Fapp-model-json\\u003E\\u003Cbutton ng-if=\\\"!todo.finishedAt\\\" ng-click=\\\"setDone(todo)\\\"\\u003ESET DONE\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-if=\\\"todo.finishedAt\\\" ng-click=\\\"setNotDone(todo)\\\"\\u003EOOPS, NOT DONE YET\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-click=\\\"removeTodo(todo)\\\"\\u003EREMOVE\\u003C\\u002Fbutton\\u003E\\u003Cbutton ui-sref=\\\"todo.single({todoId: todo._id})\\\"\\u003EOPEN\\u003C\\u002Fbutton\\u003E\\u003Cdiv ng-if=\\\"todo.finishedAt\\\"\\u003E\\u003Cp\\u003EFinished At \\u003Ci\\u003E{{todo.finishedAt}}\\u003C\\u002Fi\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/list/template.pug\n// module id = 756\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/list/template.pug?");

/***/ }),
/* 757 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EREMOVED TODOS\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"todo in vm.todos\\\"\\u003E\\u003Cdiv class=\\\"buttons\\\"\\u003E\\u003Cbutton class=\\\"tag w3-red\\\" ng-click=\\\"vm.removePermanently(todo)\\\" ng-init=\\\"sample1='HAS BEEN REMOVED'\\\" ng-mouseout=\\\"sample1='HAS BEEN REMOVED'\\\" ng-mouseover=\\\"sample1='REMOVE PERMANENTLY'\\\"\\u003E{{ sample1 }}\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"tag w3-blue\\\" ng-click=\\\"vm.recoverTodo(todo)\\\"\\u003ERECOVER\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ch6\\u003E{{ todo.text }}\\u003C\\u002Fh6\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C!-- app-code(object=\\\"vm.todos\\\", language=\\\"json\\\")--\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/removed/template.pug\n// module id = 757\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/removed/template.pug?");

/***/ }),
/* 758 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ESINGLE TODO\\u003C\\u002Fh2\\u003E\\u003Cdiv\\u003E\\u003Ch4\\u003E{{ vm.todo.text }}\\u003C\\u002Fh4\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-code object=\\\"vm.todo\\\" language=\\\"json\\\"\\u003E\\u003C\\u002Fapp-code\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/single/template.pug\n// module id = 758\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/single/template.pug?");

/***/ }),
/* 759 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"w3-container w3-white\\\" id=\\\"content\\\"\\u003E\\u003Ch1\\u003ETODO\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"todo.index\\\"\\u003EINDEX\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"todo.create\\\"\\u003ECREATE\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"todo.list\\\"\\u003ELIST\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"todo.removed\\\"\\u003EREMOVED\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/template.pug\n// module id = 759\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/template.pug?");

/***/ }),
/* 760 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ECREATE NEW TUTORIAL\\u003C\\u002Fh2\\u003E\\u003Cform class=\\\"form\\\" ng-submit=\\\"createTutorial(tutorial)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EName\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"text\\\" ng-model=\\\"tutorial.name\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton type=\\\"submit\\\"\\u003ECreate\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/create/template.pug\n// module id = 760\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/create/template.pug?");

/***/ }),
/* 761 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003ELIST OF TUTORIALS\\u003C\\u002Fh4\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"tutorial in vm.tutorials | orderBy:'-createdAt'\\\"\\u003E\\u003Ch4\\u003E{{tutorial.name ? tutorial.name : 'HAS NO NAME'}}\\u003C\\u002Fh4\\u003E\\u003Cdiv class=\\\"buttons\\\"\\u003E\\u003Cbutton onclick=\\\"this.nextSibling.classList.toggle('hide')\\\"\\u003EShow Json\\u003C\\u002Fbutton\\u003E\\u003Capp-code class=\\\"hide\\\" object=\\\"tutorial\\\" language=\\\"json\\\"\\u003E\\u003C\\u002Fapp-code\\u003E\\u003Cbutton\\u003EEdit\\u003C\\u002Fbutton\\u003E\\u003Cbutton ui-sref=\\\"tutorial.single({tutorialId: tutorial._id})\\\"\\u003EOpen\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-if=\\\"!tutorial.removedAt\\\" ng-click=\\\"vm.removeTutorial(tutorial)\\\"\\u003ERemove\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-if=\\\"tutorial.removedAt\\\" ng-click=\\\"vm.recoverTutorial(tutorial)\\\"\\u003ERecover\\u003C\\u002Fbutton\\u003E\\u003Cbutton ng-if=\\\"tutorial.removedAt\\\" ng-click=\\\"vm.removePermanently(tutorial)\\\"\\u003ERemove Permanently\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/directives/tutorial-list/template.pug\n// module id = 761\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/directives/tutorial-list/template.pug?");

/***/ }),
/* 762 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EINDEX TUTORIAL PAGE\\u003C\\u002Fh2\\u003E\\u003Ctutorial-list tutorials=\\\"tutorials\\\"\\u003E\\u003C\\u002Ftutorial-list\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/index/template.pug\n// module id = 762\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/index/template.pug?");

/***/ }),
/* 763 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch1\\u003ELIST\\u003C\\u002Fh1\\u003E\\u003Ctutorial-list tutorials=\\\"tutorials\\\"\\u003E\\u003C\\u002Ftutorial-list\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/list/template.pug\n// module id = 763\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/list/template.pug?");

/***/ }),
/* 764 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003EREMOVED TUTORIALS PAGE\\u003C\\u002Fh2\\u003E\\u003Ctutorial-list removed=\\\"true\\\"\\u003E\\u003C\\u002Ftutorial-list\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/removed/template.pug\n// module id = 764\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/removed/template.pug?");

/***/ }),
/* 765 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch5\\u003ECREATE CODE\\u003C\\u002Fh5\\u003E\\u003Cform class=\\\"form\\\" ng-submit=\\\"vm.createCode(vm.code)\\\"\\u003E\\u003Cp\\u003E\\u003Clabel\\u003ETITLE\\u003C\\u002Flabel\\u003E\\u003Cinput ng-model=\\\"vm.code.title\\\"\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Clabel\\u003EBODY\\u003C\\u002Flabel\\u003E\\u003Capp-editor bind=\\\"vm.code.body\\\" language=\\\"javascript\\\"\\u003E\\u003C\\u002Fapp-editor\\u003E\\u003C\\u002Fp\\u003E\\u003Cp\\u003E\\u003Cbutton type=\\\"submit\\\"\\u003ECREATE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fp\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/create/template.pug\n// module id = 765\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/create/template.pug?");

/***/ }),
/* 766 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch6\\u003ELIST OF LATEST CODES\\u003C\\u002Fh6\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"code in codes\\\"\\u003E\\u003Capp-code bind=\\\"code.body\\\" language=\\\"javascript\\\"\\u003E\\u003C\\u002Fapp-code\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/directives/latest/template.pug\n// module id = 766\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/directives/latest/template.pug?");

/***/ }),
/* 767 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch5\\u003ETUTORIAL CODE INDEX PAGE\\u003C\\u002Fh5\\u003E\\u003Ctutorial-single-code-latest tutorial-id=\\\"vm.tutorial._id\\\"\\u003E\\u003C\\u002Ftutorial-single-code-latest\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/index/template.pug\n// module id = 767\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/index/template.pug?");

/***/ }),
/* 768 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch5\\u003ECODE LIST PAGE\\u003C\\u002Fh5\\u003E\\u003Cdiv class=\\\"list\\\"\\u003E\\u003Cdiv ng-repeat=\\\"code in vm.codes\\\"\\u003E\\u003Ch6\\u003E{{ code.title }}\\u003C\\u002Fh6\\u003E\\u003Capp-code bind=\\\"code.body\\\" language=\\\"javascript\\\"\\u003E\\u003C\\u002Fapp-code\\u003E\\u003Cdiv class=\\\"buttons\\\" style=\\\"margin-top: 10px;\\\"\\u003E\\u003Cbutton ng-click=\\\"vm.runCode(code)\\\"\\u003ERUN CODE\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C!--h6 LATEST CODES--\\u003E\\u003C!--tutorial-single-code-latest(tutorial-id=\\\"vm.tutorial._id\\\")--\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/list/template.pug\n// module id = 768\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/list/template.pug?");

/***/ }),
/* 769 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch4\\u003ETUTORIAL CODE PAGE\\u003C\\u002Fh4\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.single.code.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.single.code.create\\\"\\u003ECreate\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.single.code.list\\\"\\u003EList\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/code/template.pug\n// module id = 769\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/code/template.pug?");

/***/ }),
/* 770 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch5\\u003ETUTORIAL SINGLE INDEX PAGE\\u003C\\u002Fh5\\u003E\\u003Ctutorial-single-code-latest tutorial-id=\\\"tutorial._id\\\"\\u003E\\u003C\\u002Ftutorial-single-code-latest\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/index/template.pug\n// module id = 770\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/index/template.pug?");

/***/ }),
/* 771 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ch2\\u003ESINGLE TUTORIAL\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"w3-container\\\"\\u003E\\u003Ch3\\u003E{{ tutorial.name ? tutorial.name : 'HAS NO NAME' }}\\u003C\\u002Fh3\\u003E\\u003Cdiv class=\\\"menu\\\" style=\\\"margin-bottom: 10px;\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.single.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.single.code\\\"\\u003ECode\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"content\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C!--app-editor(language=\\\"code.language\\\", bind=\\\"code.body\\\")--\\u003E\\u003C!--app-code(language=\\\"code.language\\\", body=\\\"code.body\\\")--\\u003E\\u003C!--button(ng-click=\\\"addCode(code)\\\") Add--\\u003E\\u003C\\u002Fdiv\\u003E\\u003C!-- pre(language=\\\"\\\", bind=\\\"code.body\\\")--\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/single/template.pug\n// module id = 771\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/single/template.pug?");

/***/ }),
/* 772 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Capp-main-nav\\u003E\\u003C\\u002Fapp-main-nav\\u003E\\u003Cdiv class=\\\"main\\\"\\u003E\\u003Ch1\\u003ETUTORIAL\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"menu\\\"\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.index\\\"\\u003EIndex\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.create\\\"\\u003ECreate\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.list\\\"\\u003EList\\u003C\\u002Fa\\u003E\\u003Ca ui-sref-active=\\\"active\\\" ui-sref=\\\"tutorial.removed\\\"\\u003ERemoved\\u003C\\u002Fa\\u003E\\u003C!-- a(ui-sref-active=\\\"active\\\", ui-sref=\\\"tutorial.edit\\\") Edit--\\u003E\\u003C!-- a(ui-sref-active=\\\"active\\\", ui-sref=\\\"tutorial.edit\\\") Single--\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"content\\\"\\u003E\\u003Cui-view\\u003E\\u003C\\u002Fui-view\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Capp-main-footer\\u003E\\u003C\\u002Fapp-main-footer\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/tutorial/template.pug\n// module id = 772\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/tutorial/template.pug?");

/***/ }),
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(478);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/app.scss\n// module id = 881\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/app.scss?");

/***/ }),
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(479);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./color-box.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./color-box.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/components/color-box/color-box.scss\n// module id = 882\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/components/color-box/color-box.scss?");

/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(480);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-model-json/style.scss\n// module id = 883\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-model-json/style.scss?");

/***/ }),
/* 884 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(481);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/directives/app-time/style.scss\n// module id = 884\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/directives/app-time/style.scss?");

/***/ }),
/* 885 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(482);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/document/style.scss\n// module id = 885\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/document/style.scss?");

/***/ }),
/* 886 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(483);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/directives/document-code/style.scss\n// module id = 886\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/directives/document-code/style.scss?");

/***/ }),
/* 887 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(484);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/history/style.scss\n// module id = 887\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/history/style.scss?");

/***/ }),
/* 888 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(485);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/note/style.scss\n// module id = 888\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/note/style.scss?");

/***/ }),
/* 889 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(486);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/snippet/style.scss\n// module id = 889\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/snippet/style.scss?");

/***/ }),
/* 890 */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(487);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(15)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/todo/style.scss\n// module id = 890\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/app/todo/style.scss?");

/***/ }),
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//////////////////\n// WEBPACK FOOTER\n// fs (ignored)\n// module id = 895\n// module chunks = 0\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })
]),[470]);