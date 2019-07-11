webpackHotUpdate("static/development/pages/ecommerce-consulting.js",{

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
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/components/homeSection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    _this.state = {
      imageFormat: ""
    };
    return _this;
  }

  _createClass(HomeSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== "undefined" && window.Modernizr) {
        window.Modernizr.on("webplossless", function (hasWebp) {
          console.log("hasWebp", hasWebp);
        });
      }
    }
  }, {
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
      var backgroundImageUrl = "".concat(backgroundImage, ".");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWithBackgroundImage, {
        background: showBackgroundImage ? "url(".concat(backgroundImageUrl, ")") : "rgb(".concat(buttonColor, ")"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
        style: {
          backgroundColor: "rgba(".concat(overlayColor, ", .57)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.handleLoadBackgroundImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
        dangerouslySetInnerHTML: {
          __html: title
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: buttonColor,
        href: buttonHref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, buttonText))));
    }
  }]);

  return HomeSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomeSection);

/***/ })

})
//# sourceMappingURL=ecommerce-consulting.js.2473adee5cdb31bda8bc.hot-update.js.map