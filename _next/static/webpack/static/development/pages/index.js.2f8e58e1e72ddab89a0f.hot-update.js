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
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _utils_modernizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/modernizr */ "./utils/modernizr.js");
/* harmony import */ var _utils_modernizr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_modernizr__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/components/homeSection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
})(["height:100%;width:100%;", " padding:0 1.2rem;", " display:flex;align-items:flex-start;justify-content:center;flex-direction:column;"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["default"].smallTablet(_templateObject()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["default"].smallTablet(_templateObject2()));
var SectionWithBackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "homeSection__SectionWithBackgroundImage",
  componentId: "sc-1cid17h-1"
})(["height:100vh;width:100vw;background-size:cover;background-position:50%;", ""], function (props) {
  return props.background && "background: ".concat(props.background, ";");
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "homeSection__Title",
  componentId: "sc-1cid17h-2"
})(["color:rgb(", ");font-size:2.4rem;", " font-weight:800;letter-spacing:-2px;"], _styles_colors__WEBPACK_IMPORTED_MODULE_5__["white"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["default"].smallTablet(_templateObject3()));
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "homeSection__ButtonWrapper",
  componentId: "sc-1cid17h-3"
})(["margin-top:1rem;"]);

var HomeSection =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeSection, _Component);

  function HomeSection() {
    var _this;

    _classCallCheck(this, HomeSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomeSection).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLoadBackgroundImage", function (visible) {
      console.log("".concat(_this.props.title, " ").concat(visible ? "visible" : "hidden"));

      if (visible) {
        _this.setState({
          showBackgroundImage: true
        });
      }
    });

    _this.state = {
      showBackgroundImage: false
    };
    return _this;
  }

  _createClass(HomeSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backgroundImage = _this$props.backgroundImage,
          buttonColor = _this$props.buttonColor,
          buttonHref = _this$props.buttonHref,
          buttonText = _this$props.buttonText,
          overlayColor = _this$props.overlayColor,
          title = _this$props.title;
      var showBackgroundImage = this.state.showBackgroundImage;
      var imageExtension = "jpg";

      if (_utils_modernizr__WEBPACK_IMPORTED_MODULE_6___default.a.webplossless) {
        imageExtension = "webp";
      } else if (_utils_modernizr__WEBPACK_IMPORTED_MODULE_6___default.a.jpeg2000) {
        imageExtension = "jp2";
      }

      var backgroundImageUrl = "".concat(backgroundImage, ".").concat(imageExtension);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWithBackgroundImage, {
        background: showBackgroundImage ? "url(".concat(backgroundImageUrl, ")") : "rgb(".concat(buttonColor, ")"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
        style: {
          backgroundColor: "rgba(".concat(overlayColor, ", .57)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.handleLoadBackgroundImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
        dangerouslySetInnerHTML: {
          __html: title
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: buttonColor,
        href: buttonHref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, buttonText))));
    }
  }]);

  return HomeSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomeSection);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_homeSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homeSection */ "./components/homeSection.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/pages/index.js";







var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Technical E-Commerce Consulting, Training & Emergency Support | out:grow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_homeSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundImage: "/static/consulting",
    buttonColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["blue"],
    buttonHref: "/ecommerce-consulting",
    buttonText: "Consulting",
    overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["lightBlue"],
    title: "Redefining<br/><nobr>e-commerce</nobr><br/>consulting.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_homeSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundImage: "/static/training",
    buttonColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["red"],
    buttonHref: "/developer-training",
    buttonText: "Training",
    overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["red"],
    title: "Providing<br/><nobr>ROI-focused</nobr><br/>training.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_homeSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundImage: "/static/emergency",
    buttonColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["green"],
    buttonHref: "/support-plans",
    buttonText: "Support plans",
    overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["green"],
    title: "Emergency?<br/>We have your back. 24/7.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2f8e58e1e72ddab89a0f.hot-update.js.map