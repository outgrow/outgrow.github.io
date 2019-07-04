webpackHotUpdate("static/development/pages/ecommerce-consulting.js",{

/***/ "./components/servicePageHeader.js":
/*!*****************************************!*\
  !*** ./components/servicePageHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/components/servicePageHeader.js";

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
  displayName: "servicePageHeader__Overlay",
  componentId: "sc-1f0lbab-0"
})(["height:100%;width:100%;", " padding:0 1.2rem;", " display:flex;align-items:flex-start;justify-content:center;flex-direction:column;"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject2()));
var SectionWithBackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "servicePageHeader__SectionWithBackgroundImage",
  componentId: "sc-1f0lbab-1"
})(["height:90vh;width:100vw;background-size:cover;background-position:50%;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "servicePageHeader__Title",
  componentId: "sc-1f0lbab-2"
})(["color:rgb(", ");font-size:2.4rem;", " font-weight:800;letter-spacing:-2px;margin-bottom:1.3rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__["white"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].smallTablet(_templateObject3()));
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "servicePageHeader__Paragraph",
  componentId: "sc-1f0lbab-3"
})(["color:rgb(", ");margin-bottom:1rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__["white"]);
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "servicePageHeader__ButtonWrapper",
  componentId: "sc-1f0lbab-4"
})(["margin:.5rem auto 0 auto;"]);

var ServicePageHeader = function ServicePageHeader(_ref) {
  var backgroundImage = _ref.backgroundImage,
      body = _ref.body,
      buttonText = _ref.buttonText,
      buttonTextColor = _ref.buttonTextColor,
      overlayColor = _ref.overlayColor,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWithBackgroundImage, {
    style: {
      backgroundImage: "url(".concat(backgroundImage, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
    style: {
      backgroundColor: "rgba(".concat(overlayColor, ", .57)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, title), body.map(function (bodyParagraph, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, bodyParagraph);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: buttonTextColor,
    href: "#section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, buttonText || "Learn more"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ServicePageHeader);

/***/ })

})
//# sourceMappingURL=ecommerce-consulting.js.3974063a25aa780813cc.hot-update.js.map