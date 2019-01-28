webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/react-messenger-customer-chat/lib/MessengerCustomerChat.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-messenger-customer-chat/lib/MessengerCustomerChat.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var removeElementByIds = function removeElementByIds(ids) {
  ids.forEach(function (id) {
    var element = document.getElementById(id);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

var MessengerCustomerChat = function (_Component) {
  _inherits(MessengerCustomerChat, _Component);

  function MessengerCustomerChat() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MessengerCustomerChat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MessengerCustomerChat.__proto__ || Object.getPrototypeOf(MessengerCustomerChat)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fbLoaded: false,
      shouldShowDialog: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MessengerCustomerChat, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setFbAsyncInit();
      this.reloadSDKAsynchronously();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.pageId !== this.props.pageId || prevProps.appId !== this.props.appId || prevProps.shouldShowDialog !== this.props.shouldShowDialog || prevProps.htmlRef !== this.props.htmlRef || prevProps.minimized !== this.props.minimized || prevProps.themeColor !== this.props.themeColor || prevProps.loggedInGreeting !== this.props.loggedInGreeting || prevProps.loggedOutGreeting !== this.props.loggedOutGreeting || prevProps.greetingDialogDisplay !== this.props.greetingDialogDisplay || prevProps.greetingDialogDelay !== this.props.greetingDialogDelay || prevProps.autoLogAppEvents !== this.props.autoLogAppEvents || prevProps.xfbml !== this.props.xfbml || prevProps.version !== this.props.version || prevProps.language !== this.props.language) {
        this.setFbAsyncInit();
        this.reloadSDKAsynchronously();
      }
    }
  }, {
    key: 'setFbAsyncInit',
    value: function setFbAsyncInit() {
      var _this2 = this;

      var _props = this.props,
          appId = _props.appId,
          autoLogAppEvents = _props.autoLogAppEvents,
          xfbml = _props.xfbml,
          version = _props.version;


      window.fbAsyncInit = function () {
        window.FB.init({
          appId: appId,
          autoLogAppEvents: autoLogAppEvents,
          xfbml: xfbml,
          version: 'v' + version
        });

        _this2.setState({ fbLoaded: true });
      };
    }
  }, {
    key: 'loadSDKAsynchronously',
    value: function loadSDKAsynchronously() {
      var language = this.props.language;
      /* eslint-disable */

      (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/' + language + '/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
      /* eslint-enable */
    }
  }, {
    key: 'removeFacebookSDK',
    value: function removeFacebookSDK() {
      removeElementByIds(['facebook-jssdk', 'fb-root']);

      delete window.FB;
    }
  }, {
    key: 'reloadSDKAsynchronously',
    value: function reloadSDKAsynchronously() {
      this.removeFacebookSDK();
      this.loadSDKAsynchronously();
    }
  }, {
    key: 'controlPlugin',
    value: function controlPlugin() {
      var shouldShowDialog = this.props.shouldShowDialog;


      if (shouldShowDialog) {
        window.FB.CustomerChat.showDialog();
      } else {
        window.FB.CustomerChat.hideDialog();
      }
    }
  }, {
    key: 'subscribeEvents',
    value: function subscribeEvents() {
      var _props2 = this.props,
          onCustomerChatDialogShow = _props2.onCustomerChatDialogShow,
          onCustomerChatDialogHide = _props2.onCustomerChatDialogHide;


      if (onCustomerChatDialogShow) {
        window.FB.Event.subscribe('customerchat.dialogShow', onCustomerChatDialogShow);
      }

      if (onCustomerChatDialogHide) {
        window.FB.Event.subscribe('customerchat.dialogHide', onCustomerChatDialogHide);
      }
    }
  }, {
    key: 'createMarkup',
    value: function createMarkup() {
      var _props3 = this.props,
          pageId = _props3.pageId,
          htmlRef = _props3.htmlRef,
          minimized = _props3.minimized,
          themeColor = _props3.themeColor,
          loggedInGreeting = _props3.loggedInGreeting,
          loggedOutGreeting = _props3.loggedOutGreeting,
          greetingDialogDisplay = _props3.greetingDialogDisplay,
          greetingDialogDelay = _props3.greetingDialogDelay;


      var refAttribute = htmlRef !== undefined ? 'ref="' + htmlRef + '"' : '';
      var minimizedAttribute = minimized !== undefined ? 'minimized="' + minimized + '"' : '';
      var themeColorAttribute = themeColor !== undefined ? 'theme_color="' + themeColor + '"' : '';
      var loggedInGreetingAttribute = loggedInGreeting !== undefined ? 'logged_in_greeting="' + loggedInGreeting + '"' : '';
      var loggedOutGreetingAttribute = loggedOutGreeting !== undefined ? 'logged_out_greeting="' + loggedOutGreeting + '"' : '';
      var greetingDialogDisplayAttribute = greetingDialogDisplay !== undefined ? 'greeting_dialog_display="' + greetingDialogDisplay + '"' : '';
      var greetingDialogDelayAttribute = greetingDialogDelay !== undefined ? 'greeting_dialog_delay="' + greetingDialogDelay + '"' : '';

      return {
        __html: '<div\n        class="fb-customerchat"\n        page_id="' + pageId + '"\n        ' + refAttribute + '\n        ' + minimizedAttribute + '\n        ' + themeColorAttribute + '\n        ' + loggedInGreetingAttribute + '\n        ' + loggedOutGreetingAttribute + '\n        ' + greetingDialogDisplayAttribute + '\n        ' + greetingDialogDelayAttribute + '\n      ></div>'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          fbLoaded = _state.fbLoaded,
          shouldShowDialog = _state.shouldShowDialog;


      if (fbLoaded && shouldShowDialog !== this.props.shouldShowDialog) {
        document.addEventListener('DOMNodeInserted', function (event) {
          var element = event.target;
          if (element.className && typeof element.className === 'string' && element.className.includes('fb_dialog')) {
            _this3.controlPlugin();
          }
        }, false);
        this.subscribeEvents();
      }
      // Add a random key to rerender. Reference:
      // https://stackoverflow.com/questions/30242530/dangerouslysetinnerhtml-doesnt-update-during-render
      return _react2.default.createElement('div', { key: Date(), dangerouslySetInnerHTML: this.createMarkup() });
    }
  }]);

  return MessengerCustomerChat;
}(_react.Component);

MessengerCustomerChat.propTypes = {
  pageId: _propTypes2.default.string.isRequired,
  appId: _propTypes2.default.string.isRequired,

  shouldShowDialog: _propTypes2.default.bool,
  htmlRef: _propTypes2.default.string,
  minimized: _propTypes2.default.bool,
  themeColor: _propTypes2.default.string,
  loggedInGreeting: _propTypes2.default.string,
  loggedOutGreeting: _propTypes2.default.string,
  greetingDialogDisplay: _propTypes2.default.oneOf(['show', 'hide', 'fade']),
  greetingDialogDelay: _propTypes2.default.number,
  autoLogAppEvents: _propTypes2.default.bool,
  xfbml: _propTypes2.default.bool,
  version: _propTypes2.default.string,
  language: _propTypes2.default.string,
  onCustomerChatDialogShow: _propTypes2.default.func,
  onCustomerChatDialogHide: _propTypes2.default.func
};
MessengerCustomerChat.defaultProps = {
  shouldShowDialog: false,
  htmlRef: undefined,
  minimized: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  greetingDialogDisplay: undefined,
  greetingDialogDelay: undefined,
  autoLogAppEvents: true,
  xfbml: true,
  version: '2.11',
  language: 'en_US',
  onCustomerChatDialogShow: undefined,
  onCustomerChatDialogHide: undefined
};
exports.default = MessengerCustomerChat;

/***/ }),

/***/ "./node_modules/react-messenger-customer-chat/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-messenger-customer-chat/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MessengerCustomerChat = __webpack_require__(/*! ./MessengerCustomerChat */ "./node_modules/react-messenger-customer-chat/lib/MessengerCustomerChat.js");

var _MessengerCustomerChat2 = _interopRequireDefault(_MessengerCustomerChat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _MessengerCustomerChat2.default;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-ga */ "./node_modules/next-ga/index.js");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_fullstory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-fullstory */ "./node_modules/react-fullstory/build/index.js");
/* harmony import */ var react_fullstory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_fullstory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-messenger-customer-chat */ "./node_modules/react-messenger-customer-chat/lib/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_googleAds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/googleAds */ "./utils/googleAds.js");

var _jsxFileName = "/Users/loan/Documents/Development/outgrow-website/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var CustomApp =
/*#__PURE__*/
function (_App) {
  _inherits(CustomApp, _App);

  function CustomApp() {
    _classCallCheck(this, CustomApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomApp).apply(this, arguments));
  }

  _createClass(CustomApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_utils_googleAds__WEBPACK_IMPORTED_MODULE_7__["initializeGoogleAds"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), true && window.location.hostname === "outgrow.io" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_fullstory__WEBPACK_IMPORTED_MODULE_5___default.a, {
        key: "fullstory",
        org: "J1X09",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6___default.a, {
        pageId: "2484584108224578",
        appId: "facebook-jssdk",
        htmlRef: "messenger-customer-chat",
        themeColor: "#016FB9",
        loggedInGreeting: "Welcome to out:grow. How can we help?",
        loggedOutGreeting: "Welcome to out:grow. How can we help?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CustomApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_4___default()("UA-132569116-1", next_router__WEBPACK_IMPORTED_MODULE_3___default.a)(CustomApp));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.f8341a4f14403fb799f0.hot-update.js.map