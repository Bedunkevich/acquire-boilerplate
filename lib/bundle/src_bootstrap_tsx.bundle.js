"use strict";
(self["webpackChunkAcquire"] = self["webpackChunkAcquire"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./src/lib/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_0__.Button, {
      title: "Click Me",
      onClick: console.log
    })
  });
};

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_app__WEBPACK_IMPORTED_MODULE_1__.App, {}), document.getElementById('root'));

/***/ }),

/***/ "./src/lib/index.tsx":
/*!***************************!*\
  !*** ./src/lib/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Greeter": () => (/* binding */ Greeter),
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Greeter = function Greeter(name) {
  return "Hello ".concat(name);
};
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 5px 10px;\n  background: ", ";\n  color: white;\n"])), function (_ref) {
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : theme.primaryColor) || 'black';
});
var Button = function Button(_ref2) {
  var title = _ref2.title,
      _onClick = _ref2.onClick;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledButton, {
    onClick: function onClick(event) {
      setCounter(function (prev) {
        return prev + 1;
      });

      _onClick(event);
    },
    children: [title, " ", counter]
  });
};

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_tsx.bundle.js.map