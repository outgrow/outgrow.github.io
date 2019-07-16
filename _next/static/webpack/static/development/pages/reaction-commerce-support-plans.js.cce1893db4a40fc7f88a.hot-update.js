webpackHotUpdate("static/development/pages/reaction-commerce-support-plans.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");








var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/components/nav.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["height: 2rem;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var links = [{
  href: "/",
  label: "Home",
  hideOnDesktop: true
}, {
  href: "/ecommerce-consulting",
  label: "Technical Consulting"
}, {
  href: "/developer-training",
  label: "Developer Training"
}, {
  href: "/reaction-commerce-support-plans",
  label: "Support Plans"
}, {
  href: "/contact",
  label: "Contact Us"
}, {
  href: "/careers",
  label: "Careers"
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
var listItemAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["keyframes"])(["from{transform:translateY(-15px);opacity:0;}to{transform:translateY(0);opacity:1;}"]);
var TopBar = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "nav__TopBar",
  componentId: "sc-1m1ztfj-0"
})(["position:", ";top:0;width:100%;z-index:999;align-items:start;display:flex;justify-content:space-between;"], function (props) {
  return props.isMenuOpen ? "fixed" : "absolute";
});
var MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button.withConfig({
  displayName: "nav__MenuButton",
  componentId: "sc-1m1ztfj-1"
})(["padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible;&:hover{opacity:0.7;}&.is-active:hover{opacity:0.7;}&.is-active .hamburger-inner,&.is-active .hamburger-inner::before,&.is-active .hamburger-inner::after{background-color:#fff;}&.is-active .hamburger-inner{transition-delay:0.22s;background-color:transparent !important;}&.is-active .hamburger-inner::before{top:0;transition:top 0.1s 0.15s cubic-bezier(0.33333,0,0.66667,0.33333),transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,10px,0) rotate(45deg);}&.is-active .hamburger-inner::after{top:0;transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333),transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,10px,0) rotate(-45deg);}"]);
var MenuButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].span.withConfig({
  displayName: "nav__MenuButtonBox",
  componentId: "sc-1m1ztfj-2"
})(["width:40px;height:24px;display:inline-block;position:relative;"]);
var MenuButtonInner = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].span.withConfig({
  displayName: "nav__MenuButtonInner",
  componentId: "sc-1m1ztfj-3"
})(["display:block;margin-top:-2px;top:2px;transition:background-color 0s 0.13s linear;&,&::before,&::after{width:40px;height:2px;background-color:#fff;border-radius:4px;position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease;}&::before,&::after{content:\"\";display:block;}&::before{top:10px;transition:top 0.1s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1),transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}&::after{bottom:-10px;top:20px;transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1),transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].img.withConfig({
  displayName: "nav__Logo",
  componentId: "sc-1m1ztfj-4"
})(["height:1.5rem;", " margin:1rem .5rem 0 0;"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_11__["default"].smallTablet(_templateObject()));
var MobileNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].nav.withConfig({
  displayName: "nav__MobileNavWrapper",
  componentId: "sc-1m1ztfj-5"
})(["background:rgb(", ");height:100vh;width:100vw;position:fixed;z-index:99;"], _styles_colors__WEBPACK_IMPORTED_MODULE_12__["black"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].ul.withConfig({
  displayName: "nav__List",
  componentId: "sc-1m1ztfj-6"
})(["position:relative;top:50%;transform:translateY(-50%);list-style:none;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].li.withConfig({
  displayName: "nav__ListItem",
  componentId: "sc-1m1ztfj-7"
})(["text-align:center;padding:.5rem 0;color:rgb(", ");opacity:0;animation-name:", ";animation-duration:300ms;animation-delay:", "s;animation-fill-mode:forwards;"], _styles_colors__WEBPACK_IMPORTED_MODULE_12__["white"], listItemAnimation, function (props) {
  return props.iterationCount * 0.05;
});
var ListItemLink = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].a.withConfig({
  displayName: "nav__ListItemLink",
  componentId: "sc-1m1ztfj-8"
})(["font-size:1.2rem;color:rgb(", ");text-decoration:none;cursor:pointer;"], _styles_colors__WEBPACK_IMPORTED_MODULE_12__["white"]);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].hr.withConfig({
  displayName: "nav__Divider",
  componentId: "sc-1m1ztfj-9"
})(["width:90%;transform:translate(-50%,15px);z-index:1;position:relative;left:50%;"]);
var DividerText = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h3.withConfig({
  displayName: "nav__DividerText",
  componentId: "sc-1m1ztfj-10"
})(["display:inline-block;text-align:center;color:rgb(", ");font-weight:normal;background:rgb(", ");z-index:999;position:absolute;left:50%;transform:translateX(-50%);padding:0 1rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_12__["white"], _styles_colors__WEBPACK_IMPORTED_MODULE_12__["black"]);
var ButtonLink = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].a.withConfig({
  displayName: "nav__ButtonLink",
  componentId: "sc-1m1ztfj-11"
})(["display:flex;align-items:center;width:16rem;background:#016FB9;text-decoration:none;padding:1rem;margin-top:1rem;border-radius:68px;position:relative;left:50%;transform:translateX(-50%);"]);
var ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "nav__ButtonText",
  componentId: "sc-1m1ztfj-12"
})(["color:rgb(", ");text-align:center;font-weight:800;padding-right:.5rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_12__["white"]);
var ButtonCaption = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].span.withConfig({
  displayName: "nav__ButtonCaption",
  componentId: "sc-1m1ztfj-13"
})(["font-size:.8rem;font-weight:400;"]);
var ButtonIcon = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].img.withConfig({
  displayName: "nav__ButtonIcon",
  componentId: "sc-1m1ztfj-14"
})(["width:1.8rem;margin-right:1rem;"]);

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _Component);

  function Nav() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToggleMenu", function () {
      return _this.setState({
        isMenuOpen: !_this.state.isMenuOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCloseMenu", function () {
      return _this.setState({
        isMenuOpen: false
      });
    });

    _this.state = {
      isMenuOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopBar, {
        isMenuOpen: this.state.isMenuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuButton, {
        className: "hamburger hamburger--spring ".concat(this.state.isMenuOpen ? "is-active" : ""),
        "aria-label": "menu",
        type: "button",
        onClick: this.handleToggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuButtonBox, {
        className: "hamburger-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuButtonInner, {
        className: "hamburger-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListItemLink, {
        onClick: this.handleCloseMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Logo, {
        alt: "Outgrow logo",
        src: "/static/logo-white.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      })))), this.state.isMenuOpen && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileNavWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, links.map(function (_ref, index) {
        var key = _ref.key,
            href = _ref.href,
            label = _ref.label;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListItem, {
          key: key,
          iterationCount: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListItemLink, {
          onClick: _this2.handleCloseMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        }, label)));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListItem, {
        iterationCount: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DividerText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "or")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListItem, {
        style: {
          marginTop: "2.5rem"
        },
        iterationCount: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "E-Commerce Site Down?"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListItem, {
        iterationCount: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonLink, {
        href: "tel:+12816884769",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonIcon, {
        src: "/static/phone.png",
        alt: "Call",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "+1 (281) OUT-GROW", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonCaption, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "24/7 Emergency Hotline")))))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=reaction-commerce-support-plans.js.cce1893db4a40fc7f88a.hot-update.js.map