webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! segmented-control */ "./node_modules/segmented-control/dist/index.js");
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(segmented_control__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb-stitch-browser-sdk */ "./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/pages/contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
  var data = _taggedTemplateLiteral(["height: 1.9rem"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["margin-left: 28rem;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["max-width: 50%;"]);

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










var DatePicker = function DatePicker() {
  return null;
}; // Only import react-datepicker if running on client


if (typeof window !== "undefined") {
  DatePicker = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! react-datepicker */ "./node_modules/react-datepicker/es/index.js"));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js")];
      },
      modules: ["react-datepicker"]
    }
  });
  next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    return __webpack_require__.e(/*! import() */ "styles").then(__webpack_require__.t.bind(null, /*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css", 7));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css")];
      },
      modules: ["react-datepicker/dist/react-datepicker.css"]
    }
  });
  next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    return __webpack_require__.e(/*! import() */ "styles").then(__webpack_require__.t.bind(null, /*! ../styles/datePicker.css */ "./styles/datePicker.css", 7));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! ../styles/datePicker.css */ "./styles/datePicker.css")];
      },
      modules: ["../styles/datePicker.css"]
    }
  });
  next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
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

var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__PageWrapper",
  componentId: "v88xgx-0"
})(["padding:1.2rem;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].smallTablet(_templateObject()));
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__ButtonWrapper",
  componentId: "v88xgx-1"
})(["margin:.5rem auto 0 auto;"]);
var Locations = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__Locations",
  componentId: "v88xgx-2"
})(["display:flex;align-items:flex-start;justify-content:space-between;margin-top:1.5rem;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject2()));
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__Location",
  componentId: "v88xgx-3"
})(["display:flex;flex-direction:column;flex-basis:0;flex-grow:1;"]);
var LocationTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "contact__LocationTitle",
  componentId: "v88xgx-4"
})([""]);
var LocationIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "contact__LocationIcon",
  componentId: "v88xgx-5"
})(["width:5rem;margin:.7rem 0;"]);
var LocationAddress = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "contact__LocationAddress",
  componentId: "v88xgx-6"
})(["font-size:.8rem;font-weight:100;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "contact__Form",
  componentId: "v88xgx-7"
})(["width:100%;", " ", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject3()), _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject4()));
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "contact__Label",
  componentId: "v88xgx-8"
})(["display:block;width:100%;color:rgb(", ");font-size:0.9rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["black"]);
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "contact__TextInput",
  componentId: "v88xgx-9"
})(["display:block;width:100%;height:1.3rem;", " padding:.8rem .9rem;border:1px solid rgb(", ");border-radius:15px;font-family:Axiforma,Helvetica,\"sans-serif\";background:rgb(", ");"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].veryLargeSmartphone(_templateObject5()), _styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["white"]);
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__FieldWrapper",
  componentId: "v88xgx-10"
})(["display:flex;align-items:center;width:100%;margin:.4rem 0;", " ", ""], function (props) {
  return props.marginRight && "margin-right: .25rem";
}, function (props) {
  return props.marginLeft && "margin-left: .25rem";
});
var DividedFieldWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FieldWrapper).withConfig({
  displayName: "contact__DividedFieldWrapper",
  componentId: "v88xgx-11"
})(["display:flex;"]);
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea.withConfig({
  displayName: "contact__Textarea",
  componentId: "v88xgx-12"
})(["width:100%;border:1px solid rgb(", ");border-radius:15px;font-family:Axiforma,\"sans-serif\";padding:0.7rem 1rem;background:rgb(", ");"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["white"]);
var Error = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "contact__Error",
  componentId: "v88xgx-13"
})(["color:rgb(", ");font-size:.9rem;margin-top:1rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_6__["red"]);
var defaultState = {
  emailAddress: "",
  category: "",
  phoneNumber: "",
  message: "",
  callbackPreferred: false,
  preferredTimeForCallback: new Date(),
  error: false
};

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCallbackPreferredToggle", function (callbackPreferred) {
      return _this.setState({
        callbackPreferred: callbackPreferred
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCategoryChange", function (category) {
      return _this.setState({
        category: category
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFieldChange", function (event) {
      return _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePreferredTimeChange", function (preferredTimeForCallback) {
      return _this.setState({
        preferredTimeForCallback: preferredTimeForCallback
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      event.preventDefault();

      _this.stitchClient.callFunction("sendContactRequest", [_this.state]).then(function (result) {
        if (typeof result !== "undefined" && typeof result.MessageId === "string") {
          _this.setState(_objectSpread({}, defaultState, {
            sent: result
          }));
        } else {
          _this.setState({
            error: true
          });
        }
      });
    });

    _this.state = _objectSpread({}, defaultState, {
      sent: false
    });
    return _this;
  }

  _createClass(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.stitchClient === "undefined") {
        this.stitchClient = mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["Stitch"].initializeDefaultAppClient("outgrow-hunql");
      }

      this.stitchClient.auth.loginWithCredential(new mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["AnonymousCredential"]());
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
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Head"], {
        title: "E-Commerce Consultancy | Get a Quote \u2014 Contact Our Team Now | out:grow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["ServicePageHeader"], {
        backgroundImage: "/static/contact.jpg",
        body: ["Submit the form below and an out:grow representative will get back to you at your preferred time. Alternatively, set up a face-to-face meeting at one of our locations around the world.", "For emergencies, do not wait and call our 24/7 hotline at +1 (281) OUT-GROW."],
        buttonText: "Reach out",
        buttonTextColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"],
        overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["lightBlue"],
        title: "Get in touch.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Wire"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        id: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Our locations."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "As a global company helping global clients, we at out:grow provide 24/7 services to retailers and agencies around the world thanks to our offices in Los Angeles and Dubai."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Locations, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
        style: {
          marginRight: ".5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Los Angeles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationIcon, {
        alt: "Los Angeles, California",
        src: "/static/california.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationAddress, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "601 S. Figueroa Street", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }), "Suite 4050", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), "Los Angeles, CA 90071", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), "United States of America")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
        style: {
          marginLeft: ".5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Dubai"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationIcon, {
        alt: "Dubai, United Arab Emirates",
        src: "/static/uae.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LocationAddress, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "The Offices 3", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }), "One Central, World Trade Center", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), "Sheikh Zayed Road", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), "Dubai", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), "United Arab Emirates"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Let us help."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividedFieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        id: "emailAddress",
        name: "emailAddress",
        onChange: this.handleFieldChange,
        type: "email",
        value: this.state.emailAddress,
        placeholder: "E-mail Address",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        id: "phoneNumber",
        name: "phoneNumber",
        onChange: this.handleFieldChange,
        type: "tel",
        value: this.state.phoneNumber,
        placeholder: "Phone Number",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividedFieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        htmlFor: "callbackPreferred",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Should we call?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        className: "small-segmented-control-container",
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_3__["SegmentedControl"], {
        className: "small",
        name: "callbackPreferred",
        options: [{
          label: "Yes",
          value: true,
          default: true
        }, {
          label: "No",
          value: false
        }],
        setValue: this.handleCallbackPreferredToggle,
        style: {
          borderRadius: "25px",
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"], ")"),
          fontSize: ".8rem",
          height: "1.6rem",
          transitionDuration: "300ms"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }))), this.state.callbackPreferred && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividedFieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        htmlFor: "preferredTimeForCallback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "Preferred time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DatePicker, {
        id: "preferredTimeForCallback",
        name: "preferredTimeForCallback",
        onChange: this.handlePreferredTimeChange,
        selected: this.state.preferredTimeForCallback,
        dateFormat: "MM-dd-yyyy HH:mm",
        showTimeSelect: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_3__["SegmentedControl"], {
        name: "category",
        options: [{
          label: "Consulting",
          value: "consulting",
          default: true
        }, {
          label: "Training",
          value: "training"
        }, {
          label: "Support",
          value: "support"
        }],
        setValue: this.handleCategoryChange,
        style: {
          borderRadius: "25px",
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"], ")"),
          fontSize: ".8rem",
          transitionDuration: "300ms"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        style: {
          marginTop: ".8rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Textarea, {
        id: "message",
        name: "message",
        onChange: this.handleFieldChange,
        value: this.state.message,
        rows: 4,
        placeholder: "Message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["blue"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["white"],
        type: "submit",
        disabled: this.state.sent || this.state.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, this.state.sent ? "Thank you!" : "Send")), this.state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "We're sorry, something wrong happened. Please send your inquiry manually to contact@outgrow.io while our engineers are fixing this."))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contact")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contact.js.44e5c8d83fdc30dd6c29.hot-update.js.map