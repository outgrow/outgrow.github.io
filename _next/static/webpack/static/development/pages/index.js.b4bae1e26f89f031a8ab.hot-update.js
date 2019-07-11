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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWithBackgroundImage, {
        background: showBackgroundImage ? "url(".concat(backgroundImage, ")") : "rgb(".concat(buttonColor, ")"),
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

/***/ }),

/***/ "./utils/modernizr.js":
/*!****************************!*\
  !*** ./utils/modernizr.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.7.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-jpeg2000-webplossless_webp_lossless-setclasses !*/
!function (n, e, A) {
  function o(n, e) {
    return _typeof(n) === e;
  }

  function s(n) {
    var e = f.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (e = e.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      e = e.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n.length > 0 && (e += " " + A + n.join(" " + A)), c ? f.className.baseVal = e : f.className = e);
  }

  function t(n, e) {
    if ("object" == _typeof(n)) for (var A in n) {
      l(n, A) && t(A, n[A]);
    } else {
      n = n.toLowerCase();
      var o = n.split("."),
          i = Modernizr[o[0]];
      if (2 === o.length && (i = i[o[1]]), void 0 !== i) return Modernizr;
      e = "function" == typeof e ? e() : e, 1 === o.length ? Modernizr[o[0]] = e : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = e), s([(e && !1 !== e ? "" : "no-") + o.join("-")]), Modernizr._trigger(n, e);
    }
    return Modernizr;
  }

  var i = [],
      a = {
    _version: "3.7.1",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(n, e) {
      var A = this;
      setTimeout(function () {
        e(A[n]);
      }, 0);
    },
    addTest: function addTest(n, e, A) {
      i.push({
        name: n,
        fn: e,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(n) {
      i.push({
        name: null,
        fn: n
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = a, Modernizr = new Modernizr();
  var l,
      r = [],
      f = e.documentElement,
      c = "svg" === f.nodeName.toLowerCase();
  !function () {
    var n = {}.hasOwnProperty;
    l = o(n, "undefined") || o(n.call, "undefined") ? function (n, e) {
      return e in n && o(n.constructor.prototype[e], "undefined");
    } : function (e, A) {
      return n.call(e, A);
    };
  }(), a._l = {}, a.on = function (n, e) {
    this._l[n] || (this._l[n] = []), this._l[n].push(e), Modernizr.hasOwnProperty(n) && setTimeout(function () {
      Modernizr._trigger(n, Modernizr[n]);
    }, 0);
  }, a._trigger = function (n, e) {
    if (this._l[n]) {
      var A = this._l[n];
      setTimeout(function () {
        var n;

        for (n = 0; n < A.length; n++) {
          (0, A[n])(e);
        }
      }, 0), delete this._l[n];
    }
  }, Modernizr._q.push(function () {
    a.addTest = t;
  }), Modernizr.addAsyncTest(function () {
    var n = new Image();
    n.onload = n.onerror = function () {
      t("jpeg2000", 1 === n.width);
    }, n.src = "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=";
  }), Modernizr.addAsyncTest(function () {
    var n = new Image();
    n.onerror = function () {
      t("webplossless", !1, {
        aliases: ["webp-lossless"]
      });
    }, n.onload = function () {
      t("webplossless", 1 === n.width, {
        aliases: ["webp-lossless"]
      });
    }, n.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  }), function () {
    var n, e, A, s, t, a, l;

    for (var f in i) {
      if (i.hasOwnProperty(f)) {
        if (n = [], e = i[f], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (A = 0; A < e.options.aliases.length; A++) {
          n.push(e.options.aliases[A].toLowerCase());
        }

        for (s = o(e.fn, "function") ? e.fn() : e.fn, t = 0; t < n.length; t++) {
          a = n[t], l = a.split("."), 1 === l.length ? Modernizr[l[0]] = s : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = s), r.push((s ? "" : "no-") + l.join("-"));
        }
      }
    }
  }(), s(r), delete a.addTest, delete a.addAsyncTest;

  for (var u = 0; u < Modernizr._q.length; u++) {
    Modernizr._q[u]();
  }

  n.Modernizr = Modernizr;
}(window, document);

/***/ })

})
//# sourceMappingURL=index.js.b4bae1e26f89f031a8ab.hot-update.js.map