webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/homeSection.js":
/*!***********************************!*\
  !*** ./components/homeSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/components/homeSection.js";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["font-size: 3rem;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["padding: 0 3rem;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["max-width: 27rem;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "homeSection__Overlay",
  componentId: "sc-1cid17h-0"
})(["height:100%;width:100%;", " padding:0 1.2rem;", " display:flex;align-items:flex-start;justify-content:center;flex-direction:column;"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject2()));
var SectionWithBackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "homeSection__SectionWithBackgroundImage",
  componentId: "sc-1cid17h-1"
})(["height:100vh;width:100vw;background-size:cover;background-position:50%;", " html.webplossless &{", "}html.jpeg2000 &{", "}html.no-jpeg2000.no-webplossless &{", "}"], function (props) {
  return props.backgroundColor && "background-color: rgb(".concat(props.backgroundColor, ");");
}, function (props) {
  return props.backgroundImage && "background-image: url(".concat(props.backgroundImage, ".webp);");
}, function (props) {
  return props.backgroundImage && "background-image: url(".concat(props.backgroundImage, ".jp2);");
}, function (props) {
  return props.backgroundImage && "background-image: url(".concat(props.backgroundImage, ".jpg);");
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "homeSection__Title",
  componentId: "sc-1cid17h-2"
})(["color:rgb(", ");font-size:2.4rem;", " font-weight:800;letter-spacing:-2px;"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__["white"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject3()));
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "homeSection__ButtonWrapper",
  componentId: "sc-1cid17h-3"
})(["margin-top:1rem;"]);

var HomeSection = function HomeSection(_ref) {
  var backgroundImage = _ref.backgroundImage,
      buttonColor = _ref.buttonColor,
      buttonHref = _ref.buttonHref,
      buttonText = _ref.buttonText,
      overlayColor = _ref.overlayColor,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWithBackgroundImage, {
    backgroundImage: backgroundImage,
    backgroundColor: buttonColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
    style: {
      backgroundColor: "rgba(".concat(overlayColor, ", .57)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    dangerouslySetInnerHTML: {
      __html: title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: buttonColor,
    href: buttonHref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, buttonText))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeSection);

/***/ })

})
//# sourceMappingURL=index.js.f75bc7a4851d14c9b030.hot-update.js.map