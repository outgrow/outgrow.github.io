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
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! segmented-control */ "./node_modules/segmented-control/dist/index.js");
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(segmented_control__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb-stitch-browser-sdk */ "./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _utils_googleAds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/googleAds */ "./utils/googleAds.js");
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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["flex-direction: row;"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["flex-direction: row;"]);

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









var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__PageWrapper",
  componentId: "c17oh8-0"
})(["padding:1.2rem;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_5__["default"].smallTablet(_templateObject()));
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "reaction-commerce-support-plans__Form",
  componentId: "c17oh8-1"
})(["margin-top:2rem;", " ", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_5__["default"].tablet(_templateObject2()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_5__["default"].laptop(_templateObject3()));
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__FieldWrapper",
  componentId: "c17oh8-2"
})(["margin-bottom:.8rem;width:100%;padding-right:1rem;"]);
var Slider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "reaction-commerce-support-plans__Slider",
  componentId: "c17oh8-3"
})(["display:block;width:100%;margin:1.5rem 0;-webkit-appearance:none;&::-moz-range-thumb{background:rgb(", ");box-shadow:none;border:none;width:1rem;height:1rem;border-radius:1rem;}&::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-7px;background:rgb(", ");box-shadow:none;border:none;width:1rem;height:1rem;border-radius:1rem;}&::-moz-range-track{background:rgb(", ");}&::-webkit-slider-runnable-track{height:2px;background:rgb(", ");}&:focus{outline-color:rgb(", ");}"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"]);
var Price = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "reaction-commerce-support-plans__Price",
  componentId: "c17oh8-4"
})(["font-size:1.3rem;"]);
var PaymentSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "reaction-commerce-support-plans__PaymentSwitcher",
  componentId: "c17oh8-5"
})(["display:block;margin:1.5rem 0;color:rgb(", ");"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["black"]);
var SavingsIndicator = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "reaction-commerce-support-plans__SavingsIndicator",
  componentId: "c17oh8-6"
})(["display:block;margin-top:.5rem;"]);
var PriceBreakdown = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__PriceBreakdown",
  componentId: "c17oh8-7"
})(["display:flex;flex-direction:column;justify-content:space-between;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_5__["default"].tablet(_templateObject4()));
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "reaction-commerce-support-plans__TextInput",
  componentId: "c17oh8-8"
})(["display:block;width:100%;margin:1rem 0;height:2.5rem;padding-left:.5rem;font-size:1rem;"]);
var SideBySide = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__SideBySide",
  componentId: "c17oh8-9"
})(["display:flex;flex-direction:column;width:100%;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_5__["default"].tablet(_templateObject5()));
var Back = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(PaymentSwitcher).withConfig({
  displayName: "reaction-commerce-support-plans__Back",
  componentId: "c17oh8-10"
})(["", ""], function (props) {
  return props.marginLeft && "margin-left: 1rem;";
});
var SubLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "reaction-commerce-support-plans__SubLabel",
  componentId: "c17oh8-11"
})(["font-weight:lighter;font-size:1rem;"]);

var Emergency =
/*#__PURE__*/
function (_Component) {
  _inherits(Emergency, _Component);

  function Emergency() {
    var _this;

    _classCallCheck(this, Emergency);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Emergency).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpdatePrice", function () {
      var price = 0;
      var _this$state = _this.state,
          chatSupport = _this$state.chatSupport,
          dedicatedExperts = _this$state.dedicatedExperts;
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
      }

      if (advanceNotice === 24) {
        price += 3000;
      }

      if (advanceNotice === 5) {
        price += 6000;
      }

      if (advanceNotice === 1) {
        price += 10000;
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
        price = price * 1.15;
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
      mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["Stitch"].defaultAppClient.callFunction("requestSupportPlan", [_this.state]).then(function (result) {
        if (typeof result !== "undefined" && typeof result.MessageId === "string") {
          Object(_utils_googleAds__WEBPACK_IMPORTED_MODULE_7__["reportConversion"])();

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

    _this.customerDetailForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      chatSupport: false,
      responseTime: 0,
      hours: 0,
      advanceNotice: 72,
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

  _createClass(Emergency, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var client = mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["Stitch"].defaultAppClient; // Stitch client is already initiated if this didn't crash
      } catch (err) {
        // Threw error because client is not initiated
        var stitchClient = mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["Stitch"].initializeDefaultAppClient("outgrow-hunql");
        stitchClient.auth.loginWithCredential(new mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["AnonymousCredential"]());
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
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Head"], {
        title: "Reaction Commerce Support Plans | Official Partner | Chat & Live Developer Help | out:grow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ServicePageHeader"], {
        backgroundImage: "/static/emergency.jpg",
        body: ["Your new Reaction Commerce project is looking sharper than ever. But is your team ready to react in case an emergency happens? At out:grow, we've got the support plan you need for any situation.", "With a support plan, our team is at your service 24/7 for your needs. Whether you prefer chat, screen-sharing calls or need a guaranteed response time — we have a solution to answer your needs."],
        buttonTextColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        title: "We've got your back.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Wire"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        id: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "Our Reaction Commerce support plans."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, "Because every project is different, there is no one-size-fits-all in the world of support. Our Reaction Commerce experts are available to your team \u2014 whether you need a full-featured dedicated plan with a guaranteed response time, or a lightweight chat-only membership for non-urgent use."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "With our support plan configurator, we're leading the way by giving our customers full power. Estimate your base pricing, choose your payment terms and sign up right from our website. Getting peace of mind for your Reaction Commerce infrastructure has never been that easy."), this.state.step === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, "Let's figure out your needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "chat-support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Unlimited chat support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Our experts will be reachable on your company's Slack or any other chat solution, as well as by e-mail."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "response-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "Guaranteed chat response time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "We'll be legally bound to respect this response time, and you'll get compensated if we fail."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "Yearly face-time hours: ", this.state.hours), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
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
          lineNumber: 374
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "advance-notice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Minimum advance notice to book a face-time session"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "Your team will have to respect this minimum delay when booking their face-time sessions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "dedicated-experts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "Dedicated experts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "We'll make sure that your developers always deal with the same people at out:grow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "time-zone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Operating time zone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, "We'll make sure that your developers always deal with the same people at out:grow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
        name: "time-zone",
        options: [{
          label: "Los Angeles \r\n Mon-Fri 9AM-5PM PST",
          value: "losangeles"
        }, {
          label: "Dubai\r\nSun-Thu 9AM-5PM GMT+4",
          value: "dubai",
          default: true
        }, {
          label: "24/7",
          value: "247"
        }],
        setValue: function setValue(value) {
          return _this2.handleSegmentedControlChange("timeZone", value);
        },
        style: {
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PriceBreakdown, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, "Your total is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Price, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, this.state.showPriceMonthly ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, this.state.monthlyPrice, " per month") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, this.state.yearlyPrice, " per year"))), !this.state.showPriceMonthly && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SavingsIndicator, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, "You are saving ", this.state.yearlySavings, " by paying yearly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentSwitcher, {
        href: "#",
        onClick: this.handleSwitchPricing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, "Pay ", this.state.showPriceMonthly ? "yearly and get 10% off" : "monthly for more flexibility")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, "Need help? Call our 24/7 sales team at +1 (281) OUT-GROW."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], {
        keepLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["white"],
        onClick: this.handleNextStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, "Sign Up Online"))), this.state.step === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        ref: this.customerDetailForm,
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, "Nice to meet you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
        marginBottom: true,
        noMarginLeft: true,
        noMarginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, "Before going further, we need to know a little bit more about you and the company you work with. We'll reach out as soon as we can to activate your plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "first-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
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
          lineNumber: 455
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "last-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
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
          lineNumber: 460
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
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
          lineNumber: 467
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
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
          lineNumber: 472
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
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
          lineNumber: 478
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
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
          lineNumber: 483
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
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
          lineNumber: 489
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
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
          lineNumber: 494
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
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
          lineNumber: 501
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
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
          lineNumber: 506
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], {
        keepLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["white"],
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, "Sign Up Online"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Back, {
        href: "#",
        onClick: this.handlePreviousStep,
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "or go back to the configurator"))), this.state.step === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, "Thank you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, "Our team will be in touch soon to activate your support plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Back, {
        href: "#",
        onClick: this.handlePreviousStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, "Go back to the configurator."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }));
    }
  }]);

  return Emergency;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Emergency);
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
//# sourceMappingURL=reaction-commerce-support-plans.js.15be9894e61b11a12327.hot-update.js.map