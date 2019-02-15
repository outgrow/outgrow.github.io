webpackHotUpdate("static/development/pages/is-reaction-commerce-right.js",{

/***/ "./pages/is-reaction-commerce-right.js":
/*!*********************************************!*\
  !*** ./pages/is-reaction-commerce-right.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/pages/is-reaction-commerce-right.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["margin-left: 28rem;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 3rem;\n    max-width: 88rem;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "is-reaction-commerce-right__PageWrapper",
  componentId: "sc-1gx78yc-0"
})(["padding:1.2rem;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["default"].smallTablet(_templateObject()));
var Calendly = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "is-reaction-commerce-right__Calendly",
  componentId: "sc-1gx78yc-1"
})(["min-width:286px;height:925px;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["default"].tablet(_templateObject2()));

var ReactionCommerce =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactionCommerce, _Component);

  function ReactionCommerce() {
    _classCallCheck(this, ReactionCommerce);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactionCommerce).apply(this, arguments));
  }

  _createClass(ReactionCommerce, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.getElementsByTagName("script")[0];
      var tagScript = document.createElement("script");
      tagScript.type = "text/javascript";
      tagScript.async = true;
      tagScript.src = "https://assets.calendly.com/assets/external/widget.js";
      script.parentNode.insertBefore(tagScript, script);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Head"], {
        title: "Is Reaction Commerce Right for Your Business? | out:grow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ServicePageHeader"], {
        backgroundImage: "/static/contact.jpg",
        body: ["Are you evalutating Reaction Commerce as a solution for your next e-commerce project? Unsure whether the platform is the right fit?", "We've helped ship countless projects with Reaction and other solutions. Let us answer your questions."],
        buttonText: "Learn how it compares",
        buttonTextColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["blue"],
        overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"],
        title: "Is Reaction Commerce the right fit?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Wire"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["blue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        id: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["blue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Why Reaction Commerce?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "In the world of e-commerce solutions, two very distinct categories stand out. On one hand, the older, often PHP (Magento, OpenCart) or ASP.Net (NopCommerce) based solutions that are supposed to be deployed and maintained manually. And on the other hand, the newer, cloud-based SaaS solutions such as Salesforce Commerce Cloud, Workarea and BigCommerce."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "In this scattered market, enterprise retailers usually end up choosing SaaS solutions because of their more modern architecture. However, this choice is made at the expense of flexibility and hosting costs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Reaction Commerce bridges this gap, allowing enterprise retailers to benefit from the latest web technologies (Node.js, React, MongoDB) while keeping total control over their deployment process and hosting expenses. It can be deployed on any private or public cloud thanks to it being built around Docker."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_3__["blue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Book a free consulting session."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        style: {
          marginBottom: "2rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Pick a time below for our consultants to assess your needs in a free 30-minute session. Bring your questions along, and we'll make sure to give your team all the information needed about moving forward with your project."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Calendly, {
        className: "calendly-inline-widget",
        "data-url": "https://calendly.com/outgrow-free-consultation/reaction-demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }));
    }
  }]);

  return ReactionCommerce;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ReactionCommerce);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/is-reaction-commerce-right")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=is-reaction-commerce-right.js.9c9621127d3966001a8f.hot-update.js.map