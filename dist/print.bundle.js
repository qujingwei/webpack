(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["print"],{

/***/ "./src/lib/print.js":
/*!**************************!*\
  !*** ./src/lib/print.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printMe; });\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/lib/test.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconsole.log(_test__WEBPACK_IMPORTED_MODULE_0__[\"fn\"])\n\n\nconsole.log(\n    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.join(['Another', 'module', 'loaded!'], ' ')\n)\n\nfunction printMe() {\n    console.log('I get called from print.js!');\n    console.log('I get called from print.js!');\n}\n\n//# sourceURL=webpack:///./src/lib/print.js?");

/***/ }),

/***/ "./src/lib/test.js":
/*!*************************!*\
  !*** ./src/lib/test.js ***!
  \*************************/
/*! exports provided: fn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fn\", function() { return fn; });\nconst fn = () => {\n    console.log(111)\n}\n\n//# sourceURL=webpack:///./src/lib/test.js?");

/***/ })

},[["./src/lib/print.js","runtime","vendors~main~print"]]]);