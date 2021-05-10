(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["math"],{

/***/ "./src/lib/math.js":
/*!*************************!*\
  !*** ./src/lib/math.js ***!
  \*************************/
/*! exports provided: square, cube, cla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cube\", function() { return cube; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cla\", function() { return cla; });\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/lib/test.js\");\n\n\nconsole.log(_test__WEBPACK_IMPORTED_MODULE_0__[\"fn\"])\nfunction square(x = {}) {\n    console.log(11111)\n    x.a = 1\n    x.b = 2\n    cube()\n}\n\nlet obj = {}\nfunction cube(x) {\n    console.log(22222)\n    obj.a = 'abc'\n    window.asdf = 43\n    return x * x * x;\n}\n\nclass cla {\n    constructor() {\n        console.log(33333)\n        console.log(33333)\n    }\n}\n\n//# sourceURL=webpack:///./src/lib/math.js?");

/***/ })

}]);