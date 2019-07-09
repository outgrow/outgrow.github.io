webpackHotUpdate("static/development/pages/reaction-commerce-support-plans.js",{

/***/ "./pages/reaction-commerce-support-plans.js":
/*!**************************************************!*\
  !*** ./pages/reaction-commerce-support-plans.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! segmented-control */ "./node_modules/segmented-control/dist/index.js");
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(segmented_control__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb-stitch-browser-sdk */ "./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _utils_googleAds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/googleAds */ "./utils/googleAds.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/pages/reaction-commerce-support-plans.js";

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["flex-direction: row;"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    \n    ", "\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["flex-direction: row;"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1rem;\n    font-weight: regular;\n    \n    a {\n      color: rgb(", ");\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["margin-right: 8rem;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["margin-left: 28rem;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["padding: 3rem;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












if (typeof window !== "undefined") {
  next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    return __webpack_require__.e(/*! import() */ "styles").then(__webpack_require__.t.bind(null, /*! ../styles/segmentedControl.css */ "./styles/segmentedControl.css", 7));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! ../styles/segmentedControl.css */ "./styles/segmentedControl.css")];
      },
      modules: ["../styles/segmentedControl.css"]
    }
  });
}

var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__PageWrapper",
  componentId: "c17oh8-0"
})(["padding:1.2rem;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].smallTablet(_templateObject()));
var Form = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "reaction-commerce-support-plans__Form",
  componentId: "c17oh8-1"
})(["margin-top:2rem;", " ", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject2()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].laptop(_templateObject3()));
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__FieldWrapper",
  componentId: "c17oh8-2"
})(["margin-bottom:.8rem;width:100%;padding-right:1rem;"]);
var Slider = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "reaction-commerce-support-plans__Slider",
  componentId: "c17oh8-3"
})(["display:block;width:100%;margin:1.5rem 0;-webkit-appearance:none;&::-moz-range-thumb{background:rgb(", ");box-shadow:none;border:none;width:1rem;height:1rem;border-radius:1rem;}&::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-7px;background:rgb(", ");box-shadow:none;border:none;width:1rem;height:1rem;border-radius:1rem;}&::-moz-range-track{background:rgb(", ");}&::-webkit-slider-runnable-track{height:2px;background:rgb(", ");}&:focus{outline-color:rgb(", ");}"], _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"]);
var Price = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "reaction-commerce-support-plans__Price",
  componentId: "c17oh8-4"
})(["font-size:1.3rem;"]);
var PaymentSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "reaction-commerce-support-plans__PaymentSwitcher",
  componentId: "c17oh8-5"
})(["display:block;margin:1.5rem 0;color:rgb(", ");"], function (props) {
  return props.isFloating ? _styles_colors__WEBPACK_IMPORTED_MODULE_8__["white"] : _styles_colors__WEBPACK_IMPORTED_MODULE_8__["black"];
});
var HelpPhone = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "reaction-commerce-support-plans__HelpPhone",
  componentId: "c17oh8-6"
})(["a{color:rgb(", ");}", " ", ""], _styles_colors__WEBPACK_IMPORTED_MODULE_8__["black"], function (props) {
  return props.isFloating && "\n    font-size: .8rem;\n    font-weight: lighter;\n    \n    a {\n      color: rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["white"], ");\n    }\n  ");
}, _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject4(), _styles_colors__WEBPACK_IMPORTED_MODULE_8__["black"]));
var SavingsIndicator = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "reaction-commerce-support-plans__SavingsIndicator",
  componentId: "c17oh8-7"
})(["display:block;margin-top:.5rem;"]);
var PriceBreakdown = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__PriceBreakdown",
  componentId: "c17oh8-8"
})(["display:flex;flex-direction:column;justify-content:space-between;position:", ";bottom:0;z-index:99;", " ", " ", ""], function (props) {
  return props.isSticky ? "sticky" : "relative";
}, _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject5()), function (props) {
  return props.isFloating && "\n    background: rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"], ");\n    color: rgb(").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["white"], ");\n    width: 100vw;\n    transform: translateX(-1.2rem);\n    padding: 1.2rem;\n  ");
}, _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject6(), function (props) {
  return props.isFloating && "\n      background: transparent;\n      color: rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["black"], ");\n      width: auto;\n      transform: translateX(0);\n      padding: 0;\n    ");
}));
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "reaction-commerce-support-plans__TextInput",
  componentId: "c17oh8-9"
})(["display:block;width:100%;margin:1rem 0;height:2.5rem;padding-left:.5rem;font-size:1rem;"]);
var SideBySide = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__SideBySide",
  componentId: "c17oh8-10"
})(["display:flex;flex-direction:column;width:100%;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject7()));
var Back = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(PaymentSwitcher).withConfig({
  displayName: "reaction-commerce-support-plans__Back",
  componentId: "c17oh8-11"
})(["", ""], function (props) {
  return props.marginLeft && "margin-left: 1rem;";
});
var SubLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "reaction-commerce-support-plans__SubLabel",
  componentId: "c17oh8-12"
})(["font-weight:lighter;font-size:1rem;"]);

var SupportPlans =
/*#__PURE__*/
function (_Component) {
  _inherits(SupportPlans, _Component);

  function SupportPlans() {
    var _this;

    _classCallCheck(this, SupportPlans);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SupportPlans).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpdatePrice", function () {
      var price = 0;
      var _this$state = _this.state,
          chatSupport = _this$state.chatSupport,
          dedicatedExperts = _this$state.dedicatedExperts,
          timeZone = _this$state.timeZone;
      var hours = parseInt(_this.state.hours);
      var advanceNotice = parseInt(_this.state.advanceNotice);
      var responseTime = parseInt(_this.state.responseTime);

      if (chatSupport) {
        price += 5990;
      }

      if (hours) {
        var faceTimeTotal = 1000 * hours;

        if (hours > 10 && hours <= 15) {
          faceTimeTotal = faceTimeTotal * 0.95;
        }

        if (hours > 15) {
          faceTimeTotal = faceTimeTotal * 0.9;
        }

        price += faceTimeTotal;

        if (advanceNotice === 24) {
          price += 3000;
        }

        if (advanceNotice === 5) {
          price += 6000;
        }

        if (advanceNotice === 1) {
          price += 10000;
        }
      }

      if (chatSupport) {
        if (responseTime === 30) {
          price += 10000;
        }

        if (responseTime === 60) {
          price += 8000;
        }

        if (responseTime === 120) {
          price += 6000;
        }

        if (responseTime === 180) {
          price += 4000;
        }
      }

      if (dedicatedExperts && hours && hours > 0) {
        price = price * 1.35;
      } else if (dedicatedExperts) {
        price = price * 1.2;
      }

      if (timeZone === "247") {
        price = price * 2.35;
      }

      var currency = {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      };

      _this.setState({
        monthlyPrice: parseInt(price / 12).toLocaleString("en-US", currency),
        yearlyPrice: parseInt(price * 0.9).toLocaleString("en-US", currency),
        yearlySavings: parseInt(price * 0.1).toLocaleString("en-US", currency)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSegmentedControlChange", function (fieldName, value) {
      _this.setState(_defineProperty({}, fieldName, value), _this.handleUpdatePrice);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (event) {
      var target = event.target;
      var name = target.name,
          value = target.value;

      _this.setState(_defineProperty({}, name, value), _this.handleUpdatePrice);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSwitchPricing", function (event) {
      event.preventDefault();

      _this.setState({
        showPriceMonthly: !_this.state.showPriceMonthly
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNextStep", function () {
      if (_this.state.step === 0) {
        _this.setState({
          step: 1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePreviousStep", function (event) {
      event.preventDefault();

      if (_this.state.step === 1) {
        _this.setState({
          step: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFormSubmit", function (event) {
      event.preventDefault();
      mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["Stitch"].defaultAppClient.callFunction("requestSupportPlan", [_this.state]).then(function (result) {
        if (typeof result !== "undefined" && typeof result.MessageId === "string") {
          Object(_utils_googleAds__WEBPACK_IMPORTED_MODULE_9__["reportConversion"])();

          _this.setState({
            step: 2
          });
        } else if (typeof result !== "undefined" && result.error === true && typeof result.message === "string") {
          _this.setState({
            error: true,
            errorMessage: result.message
          });
        } else {
          _this.setState({
            error: true
          });
        }
      }).catch(function (err) {
        _this.setState({
          error: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePriceBreakdownSticky", function (shouldBeSticky) {
      if (!_this.state.isPriceBreakdownSticky && shouldBeSticky) {
        _this.setState({
          isPriceBreakdownSticky: shouldBeSticky
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePriceBreakdownFloating", function (isNotFloating) {
      _this.setState({
        isPriceBreakdownFloating: !isNotFloating,
        isPriceBreakdownSticky: isNotFloating
      });
    });

    _this.customerDetailForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      chatSupport: false,
      responseTime: 0,
      hours: 0,
      advanceNotice: 72,
      timeZone: "dubai",
      dedicatedExperts: false,
      showPriceMonthly: true,
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      yearlySavings: "$0",
      step: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      country: ""
    };
    return _this;
  }

  _createClass(SupportPlans, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var client = mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["Stitch"].defaultAppClient; // Stitch client is already initiated if this didn't crash
      } catch (err) {
        // Threw error because client is not initiated
        var stitchClient = mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["Stitch"].initializeDefaultAppClient("outgrow-hunql");
        stitchClient.auth.loginWithCredential(new mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["AnonymousCredential"]());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Head"], {
        title: "Reaction Commerce Support Plans | Official Partner | Chat & Live Developer Help | out:grow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ServicePageHeader"], {
        backgroundImage: "/static/emergency.jpg",
        body: ["Your new Reaction Commerce project is looking sharper than ever. But is your team ready to react in case an emergency happens? At out:grow, we've got the support plan you need for any situation.", "With a support plan, our team is at your service 24/7 for your needs. Whether you prefer chat, screen-sharing calls or need a guaranteed response time — we have a solution to answer your needs."],
        buttonTextColor: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        title: "We've got your back.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Wire"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        id: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, "Our Reaction Commerce support plans."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, "Because every project is different, there is no one-size-fits-all in the world of support. Our Reaction Commerce experts are available to your team \u2014 whether you need a full-featured dedicated plan with a guaranteed response time, or a lightweight chat-only membership for non-urgent use."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "With our support plan configurator, we're leading the way by giving our customers full power. Estimate your base pricing, choose your payment terms and sign up right from our website. Getting peace of mind for your Reaction Commerce infrastructure has never been that easy."), this.state.step === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, "Let's figure out your needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "chat-support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, "Unlimited chat support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "Our experts will be reachable on your company's Slack or any other chat solution, as well as by e-mail."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
        name: "chat-support",
        options: [{
          label: "Yes",
          value: true
        }, {
          label: "No",
          value: false,
          default: true
        }],
        setValue: function setValue(value) {
          return _this2.handleSegmentedControlChange("chatSupport", value);
        },
        style: {
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "response-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, "Guaranteed chat response time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, "We'll be legally bound to respect this response time within your chosen working hours (see below)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onChange: this.togglePriceBreakdownSticky,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
        name: "response-time",
        options: [{
          label: "30 min.",
          value: 30,
          disabled: !this.state.chatSupport
        }, {
          label: "1 hour",
          value: 60,
          disabled: !this.state.chatSupport
        }, {
          label: "2 hours",
          value: 120,
          disabled: !this.state.chatSupport
        }, {
          label: "3 hours",
          value: 180,
          disabled: !this.state.chatSupport
        }, {
          label: "None",
          value: 0,
          default: true
        }],
        setValue: function setValue(value) {
          return _this2.handleSegmentedControlChange("responseTime", value);
        },
        style: {
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "Yearly face-time hours: ", this.state.hours), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, "Your team can use these hours throughout the year for problem-solving calls using screen-sharing."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slider, {
        type: "range",
        id: "hours",
        min: "0",
        max: "20",
        step: "1",
        name: "hours",
        onChange: this.handleInputChange,
        value: this.state.hours,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "advance-notice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, "Minimum advance notice to book a face-time session"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, "Your team will have to respect this minimum delay when booking their face-time sessions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
        name: "advance-notice",
        options: [{
          label: "1 hour",
          value: 1
        }, {
          label: "5 hours",
          value: 5
        }, {
          label: "24 hours",
          value: 24
        }, {
          label: "72 hours",
          value: 72,
          default: true
        }],
        setValue: function setValue(value) {
          return _this2.handleSegmentedControlChange("advanceNotice", value);
        },
        style: {
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "dedicated-experts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, "Dedicated experts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, "We'll make sure that your developers always deal with the same people at out:grow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
        name: "dedicated-experts",
        options: [{
          label: "Yes",
          value: true
        }, {
          label: "No",
          value: false,
          default: true
        }],
        setValue: function setValue(value) {
          return _this2.handleSegmentedControlChange("dedicatedExperts", value);
        },
        style: {
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "time-zone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "Operating time zone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, "Our experts will be reachable by your team during these working hours."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
        name: "time-zone",
        options: [{
          label: "Los Angeles\r\nMon-Fri 9AM-5PM PST",
          value: "losangeles"
        }, {
          label: "Dubai\r\nSun-Thu 9AM-5PM GMT+4",
          value: "dubai",
          default: true
        }, {
          label: "24/7\r\nIncluding bank holidays",
          value: "247"
        }],
        setValue: function setValue(value) {
          return _this2.handleSegmentedControlChange("timeZone", value);
        },
        style: {
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PriceBreakdown, {
        isFloating: this.state.isPriceBreakdownFloating,
        isSticky: this.state.isPriceBreakdownSticky,
        ref: this.priceBreakdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, "Your total is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Price, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, this.state.showPriceMonthly ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, this.state.monthlyPrice, " per month") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, this.state.yearlyPrice, " per year"))), !this.state.showPriceMonthly && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SavingsIndicator, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, "You are saving ", this.state.yearlySavings, " by paying yearly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentSwitcher, {
        href: "#",
        onClick: this.handleSwitchPricing,
        isFloating: this.state.isPriceBreakdownFloating,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, "Pay ", this.state.showPriceMonthly ? "yearly and get 10% off" : "monthly for more flexibility")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelpPhone, {
        isFloating: this.state.isPriceBreakdownFloating,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, "Need help? Call our 24/7 sales team at ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:+12816884769",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, "+1 (281) OUT-GROW"), "."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onChange: this.togglePriceBreakdownFloating,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], {
        keepLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["white"],
        onClick: this.handleNextStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "Sign Up Online")))), this.state.step === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        ref: this.customerDetailForm,
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, "Nice to meet you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        marginBottom: true,
        noMarginLeft: true,
        noMarginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, "Before going further, we need to know a little bit more about you and the company you work with. We'll reach out as soon as we can to activate your plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "first-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "first-name",
        name: "firstName",
        value: this.state.firstName,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "last-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "last-name",
        name: "lastName",
        value: this.state.lastName,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, "E-Mail Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "email",
        id: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "tel",
        id: "phone",
        name: "phone",
        value: this.state.phone,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "company",
        name: "company",
        value: this.state.company,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      }, "Headquarters Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "address",
        name: "address",
        value: this.state.address,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "city",
        name: "city",
        value: this.state.city,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        },
        __self: this
      }, "ZIP Code (if applicable)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "zip",
        name: "zip",
        value: this.state.zip,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, "State/Province (if applicable)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "state",
        name: "state",
        value: this.state.state,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "country",
        name: "country",
        value: this.state.country,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], {
        keepLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["white"],
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }, "Sign Up Online"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Back, {
        href: "#",
        onClick: this.handlePreviousStep,
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, "or go back to the configurator"))), this.state.step === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        },
        __self: this
      }, "Thank you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, "Our team will be in touch soon to activate your support plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Back, {
        href: "#",
        onClick: this.handlePreviousStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, "Go back to the configurator."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        },
        __self: this
      }));
    }
  }]);

  return SupportPlans;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SupportPlans);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reaction-commerce-support-plans")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=reaction-commerce-support-plans.js.d1bc8629aebb40ce5e73.hot-update.js.map