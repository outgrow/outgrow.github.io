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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/pages/contact.js";

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["height: 1.9rem"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["max-width: 60%;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["font-size: 3rem;"]);

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
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! react-datepicker */ "./node_modules/react-datepicker/es/index.js"));
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
})(["padding:1.2rem;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].smallTablet(_templateObject()));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "contact__Title",
  componentId: "v88xgx-1"
})(["color:rgb(", ");font-size:2.4rem;", " font-weight:800;letter-spacing:-2px;margin-top:1.3rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_5__["white"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].smallTablet(_templateObject2()));
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "contact__Paragraph",
  componentId: "v88xgx-2"
})(["color:rgb(", ");margin-bottom:1.4rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_5__["white"]);
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__ButtonWrapper",
  componentId: "v88xgx-3"
})(["margin:.5rem auto 0 auto;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "contact__Form",
  componentId: "v88xgx-4"
})(["width:100%;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].tablet(_templateObject3()));
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "contact__Label",
  componentId: "v88xgx-5"
})(["display:block;width:100%;color:rgb(", ");font-size:0.9rem;"], _styles_colors__WEBPACK_IMPORTED_MODULE_5__["white"]);
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "contact__TextInput",
  componentId: "v88xgx-6"
})(["display:block;width:100%;height:1.3rem;", " padding:.8rem .9rem;border:none;border-radius:15px;font-family:Axiforma,Helvetica,\"sans-serif\";"], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].veryLargeSmartphone(_templateObject4()));
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "contact__FieldWrapper",
  componentId: "v88xgx-7"
})(["display:flex;align-items:center;width:100%;margin:.4rem 0;", " ", ""], function (props) {
  return props.marginRight && "margin-right: .25rem";
}, function (props) {
  return props.marginLeft && "margin-left: .25rem";
});
var DividedFieldWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FieldWrapper).withConfig({
  displayName: "contact__DividedFieldWrapper",
  componentId: "v88xgx-8"
})(["display:flex;"]);
var SelectInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select.withConfig({
  displayName: "contact__SelectInput",
  componentId: "v88xgx-9"
})(["background:rgb(", ");color:rgb(", ");height:1.8rem;padding:.4rem .9rem;border:none;border-radius:15px;"], _styles_colors__WEBPACK_IMPORTED_MODULE_5__["white"], _styles_colors__WEBPACK_IMPORTED_MODULE_5__["black"]);
var CheckboxInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "contact__CheckboxInput",
  componentId: "v88xgx-10"
})(["background:white;"]);
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea.withConfig({
  displayName: "contact__Textarea",
  componentId: "v88xgx-11"
})(["width:100%;border:none;border-radius:15px;font-family:Axiforma,\"sans-serif\";padding:0.7rem 1rem;"]);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFieldChange", function (event) {
      return _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePreferredTimeChange", function (preferredTimeForCallback) {
      return _this.setState({
        preferredTimeForCallback: preferredTimeForCallback
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {});

    _this.state = {
      emailAddress: "",
      category: "",
      phoneNumber: "",
      message: "",
      callbackPreferred: false,
      preferredTimeForCallback: new Date()
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Head"], {
        title: "E-Commerce Consultancy | Get a Quote \u2014 Contact Our Team Now | out:grow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ServicePageHeader"], {
        backgroundImage: "/static/contact.jpg",
        body: ["Submit this form and an out:grow representative will get back to you at your preferred time. For emergencies, immediately call our 24/7 hotline at (800) 918-0818."],
        buttonTextColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["blue"],
        overlayColor: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["lightBlue"],
        title: "Get in touch.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        id: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividedFieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        id: "emailAddress",
        name: "emailAddress",
        onChange: this.handleFieldChange,
        type: "email",
        value: this.state.emailAddress,
        placeholder: "E-mail Address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        id: "phoneNumber",
        name: "phoneNumber",
        onChange: this.handleFieldChange,
        type: "tel",
        value: this.state.phoneNumber,
        placeholder: "Phone Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividedFieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        htmlFor: "callbackPreferred",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Should we call?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        className: "small-segmented-control-container",
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
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
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["white"], ")"),
          fontSize: ".8rem",
          height: "1.6rem",
          transitionDuration: "300ms"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }))), this.state.callbackPreferred && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividedFieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        htmlFor: "preferredTimeForCallback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Preferred time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
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
          lineNumber: 210
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
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
          color: "rgb(".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["white"], ")"),
          fontSize: ".8rem",
          transitionDuration: "300ms"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        style: {
          marginTop: ".8rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
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
          lineNumber: 241
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_5__["blue"],
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Send")))));
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
//# sourceMappingURL=contact.js.11ad77746143d93c5bdf.hot-update.js.map