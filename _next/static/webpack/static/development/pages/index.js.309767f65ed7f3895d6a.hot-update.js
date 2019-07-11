webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/components/button.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["font-size: 1.3rem;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["font-size: 1.3rem;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "button__StyledLink",
  componentId: "sc-9g475i-0"
})(["display:flex;align-items:center;justify-content:center;background:rgb(", ");padding:.5rem 1rem;border-radius:35px;text-decoration:none;color:rgb(", ");font-weight:800;font-size:1.2rem;", ""], function (props) {
  return props.backgroundColor || _styles_colors__WEBPACK_IMPORTED_MODULE_4__["white"];
}, function (props) {
  return props.color;
}, _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject()));
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-9g475i-1"
})(["display:flex;align-items:center;justify-content:center;background:rgb(", ");", " padding:.5rem 2rem;border:none;border-radius:35px;text-decoration:none;color:rgb(", ");font-weight:800;font-size:1.2rem;", ""], function (props) {
  return props.backgroundColor || _styles_colors__WEBPACK_IMPORTED_MODULE_4__["white"];
}, function (props) {
  return props.disabled && "background: rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["grey"], ");");
}, function (props) {
  return props.color;
}, _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject2()));

var Button = function Button(_ref) {
  var backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      color = _ref.color,
      href = _ref.href,
      type = _ref.type,
      disabled = _ref.disabled,
      onClick = _ref.onClick;

  if (typeof href !== "undefined") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: href,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      backgroundColor: backgroundColor,
      color: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, children));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    backgroundColor: backgroundColor,
    color: color,
    type: type,
    disabled: disabled,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.309767f65ed7f3895d6a.hot-update.js.map