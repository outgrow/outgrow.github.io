webpackHotUpdate("static/development/pages/free-consultation.js",{

/***/ "./components/bulletPoint.js":
/*!***********************************!*\
  !*** ./components/bulletPoint.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/components/bulletPoint.js";



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "bulletPoint__Wrapper",
  componentId: "j7mrh-0"
})(["display:flex;align-items:flex-start;margin-top:1rem;"]);
var CheckMark = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "bulletPoint__CheckMark",
  componentId: "j7mrh-1"
})(["width:5rem;margin-right:1rem;max-width:1.85rem;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "bulletPoint__Title",
  componentId: "j7mrh-2"
})(["margin-bottom:.3rem;color:rgb(", ");"], _styles_colors__WEBPACK_IMPORTED_MODULE_2__["black"]);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "bulletPoint__Body",
  componentId: "j7mrh-3"
})(["font-weight:100;color:rgb(", ");"], _styles_colors__WEBPACK_IMPORTED_MODULE_2__["black"]);

var BulletPoint = function BulletPoint(_ref) {
  var body = _ref.body,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckMark, {
    src: "/static/check.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, body)));
};

/* harmony default export */ __webpack_exports__["default"] = (BulletPoint);

/***/ }),

/***/ "./components/buttonWrapper.js":
/*!*************************************!*\
  !*** ./components/buttonWrapper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    left: 22rem;\n    transform: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "buttonWrapper",
  componentId: "sc-1o6q1am-0"
})(["display:inline-block;margin:1.5rem 0;position:relative;left:50%;transform:translateX(-50%);", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__["default"].tablet(_templateObject())));

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: BulletPoint, Button, ButtonWrapper, Footer, Head, HomeSection, Nav, Paragraph, ServicePageHeader, Title, Wire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bulletPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bulletPoint */ "./components/bulletPoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BulletPoint", function() { return _bulletPoint__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _buttonWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonWrapper */ "./components/buttonWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return _buttonWrapper__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head */ "./components/head.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _head__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _homeSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeSection */ "./components/homeSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeSection", function() { return _homeSection__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _nav__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paragraph */ "./components/paragraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return _paragraph__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _servicePageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicePageHeader */ "./components/servicePageHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicePageHeader", function() { return _servicePageHeader__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./title */ "./components/title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _title__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _wire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wire */ "./components/wire.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wire", function() { return _wire__WEBPACK_IMPORTED_MODULE_10__["default"]; });













/***/ }),

/***/ "./components/paragraph.js":
/*!*********************************!*\
  !*** ./components/paragraph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["margin-right: 8rem;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["margin-left: 28rem;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "paragraph",
  componentId: "sc-1tqw3ab-0"
})(["color:rgb(", ");margin-top:1rem;", " ", ""], _styles_colors__WEBPACK_IMPORTED_MODULE_1__["black"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_2__["default"].laptop(_templateObject2())));

/***/ }),

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
})(["height:100vh;width:100vw;background-size:cover;background-position:50%;"]);
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

/***/ }),

/***/ "./components/title.js":
/*!*****************************!*\
  !*** ./components/title.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["margin-left: 28rem;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["font-size: 3rem;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "title",
  componentId: "sc-1he3guw-0"
})(["color:rgb(", ");font-size:2.4rem;", " font-weight:800;letter-spacing:-2px;margin:1.3rem 0;", " ", ""], function (props) {
  return props.color;
}, _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__["default"].smallTablet(_templateObject()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__["default"].tablet(_templateObject2()), function (props) {
  return props.noMarginTop && "margin-top: 0;";
}));

/***/ }),

/***/ "./components/wire.js":
/*!****************************!*\
  !*** ./components/wire.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["display: block;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "wire",
  componentId: "sc-1ewvnsx-0"
})(["display:none;", " width:27rem;border-right:rgb(", ") 2px solid;position:absolute;top:100vh;left:0;height:calc(100% - 100vh);"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_1__["default"].tablet(_templateObject()), function (props) {
  return props.color;
}));

/***/ }),

/***/ "./pages/free-consultation.js":
/*!************************************!*\
  !*** ./pages/free-consultation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/pages/free-consultation.js";



var FreeConsultation = function FreeConsultation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Hello World!"));
};

/* harmony default export */ __webpack_exports__["default"] = (FreeConsultation);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/free-consultation")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=free-consultation.js.f2a774ce6b6256a351f3.hot-update.js.map