webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _angular = __webpack_require__(0);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _angularjs = __webpack_require__(1);\n\nvar _angularjs2 = _interopRequireDefault(_angularjs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _angular2.default.module('app', [_angularjs2.default]);\n\napp.config(function config($stateProvider) {\n\t$stateProvider.state('home', {\n\t\turl: '/home',\n\t\ttemplate: __webpack_require__(5)\n\t});\n});\n\napp.run(function run($rootScope) {\n\t$rootScope.title = 'MONGO';\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY2xpZW50L2luZGV4LmpzP2UxZDUiXSwibmFtZXMiOlsiYXBwIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlIiwicmVxdWlyZSIsInJ1biIsIiRyb290U2NvcGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLGtCQUFRQyxNQUFSLENBQWUsS0FBZixFQUFzQixxQkFBdEIsQ0FBWjs7QUFFQUQsSUFBSUUsTUFBSixDQUFXLFNBQVNBLE1BQVQsQ0FBZ0JDLGNBQWhCLEVBQWdDO0FBQzFDQSxnQkFBZUMsS0FBZixDQUFxQixNQUFyQixFQUE2QjtBQUM1QkMsT0FBSyxPQUR1QjtBQUU1QkMsWUFBVSxtQkFBQUMsQ0FBUSxDQUFSO0FBRmtCLEVBQTdCO0FBSUEsQ0FMRDs7QUFPQVAsSUFBSVEsR0FBSixDQUFRLFNBQVNBLEdBQVQsQ0FBYUMsVUFBYixFQUF5QjtBQUNoQ0EsWUFBV0MsS0FBWCxHQUFtQixPQUFuQjtBQUNBLENBRkQiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHVpUm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xuXG5jb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW3VpUm91dGVyXSk7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24gY29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuXHRcdHVybDogJy9ob21lJyxcblx0XHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLnRlbXBsYXRlLmh0bWwnKVxuXHR9KTtcbn0pO1xuXG5hcHAucnVuKGZ1bmN0aW9uIHJ1bigkcm9vdFNjb3BlKSB7XG5cdCRyb290U2NvcGUudGl0bGUgPSAnTU9OR08nO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY2xpZW50L2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"w3-panel\\\">\\n\\t<h4>HOME</h4>\\n</div>\\n\\n<div class=\\\"w3-panel\\\">\\n\\t<p>HAVE TO LEARN MONGODB</p>\\n</div>\\n\\n<div class=\\\"w3-panel\\\">\\n\\t<p>WHERE SHOULD I START</p>\\n</div>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY2xpZW50L2hvbWUudGVtcGxhdGUuaHRtbD84Y2Q5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidzMtcGFuZWxcXFwiPlxcblxcdDxoND5IT01FPC9oND5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJ3My1wYW5lbFxcXCI+XFxuXFx0PHA+SEFWRSBUTyBMRUFSTiBNT05HT0RCPC9wPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcInczLXBhbmVsXFxcIj5cXG5cXHQ8cD5XSEVSRSBTSE9VTEQgSSBTVEFSVDwvcD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jbGllbnQvaG9tZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })

},[2]);