webpackHotUpdate("static/development/pages/reaction-commerce-support-plans.js",{

/***/ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-visibility-sensor/dist/visibility-sensor.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isVisibleWithOffset = __webpack_require__(6);

var _isVisibleWithOffset2 = _interopRequireDefault(_isVisibleWithOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor = function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    _classCallCheck(this, VisibilitySensor);

    var _this = _possibleConstructorReturn(this, (VisibilitySensor.__proto__ || Object.getPrototypeOf(VisibilitySensor)).call(this, props));

    _this.getContainer = function () {
      return _this.props.containment || window;
    };

    _this.addEventListener = function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout = void 0;
      var func = void 0;

      var later = function later() {
        timeout = null;
        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };

      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    };

    _this.startWatching = function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      }

      // if dont need delayed call, check on load ( before the first interval fires )
      !_this.props.delayedCall && _this.check();
    };

    _this.stopWatching = function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];

            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);

            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }
      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    };

    _this.check = function () {
      var el = _this.node;
      var rect = void 0;
      var containmentRect = void 0;

      // if the component has rendered to null, dont update visibility
      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();
        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      }

      // Check if visibility is wanted via offset?
      var offset = _this.props.offset || {};
      var hasValidOffset = (typeof offset === "undefined" ? "undefined" : _typeof(offset)) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      };

      // https://github.com/joshwnj/react-visibility-sensor/pull/114
      var hasSize = rect.height > 0 && rect.width > 0;

      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right;

      // check for partial visibility
      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left;

        // account for partial visibility on a single edge
        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        }

        // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.
        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      }

      // Deprecated options for calculating offset.
      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);

        isVisible = (0, _isVisibleWithOffset2.default)(offset, rect, containmentRect);
      }

      var state = _this.state;
      // notify the parent when the value changes
      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };
        _this.setState(state);
        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    };

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = _reactDom2.default.findDOMNode(this);
      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = _reactDom2.default.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });

        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }

    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(_react2.default.Component);

VisibilitySensor.defaultProps = {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: _react2.default.createElement("span", null)
};
VisibilitySensor.propTypes = {
  onChange: _propTypes2.default.func,
  active: _propTypes2.default.bool,
  partialVisibility: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: _propTypes2.default.bool,
  offset: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    top: _propTypes2.default.number,
    left: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    right: _propTypes2.default.number
  }),
  // deprecated offset property
  _propTypes2.default.shape({
    direction: _propTypes2.default.oneOf(["top", "right", "bottom", "left"]),
    value: _propTypes2.default.number
  })]),
  scrollCheck: _propTypes2.default.bool,
  scrollDelay: _propTypes2.default.number,
  scrollThrottle: _propTypes2.default.number,
  resizeCheck: _propTypes2.default.bool,
  resizeDelay: _propTypes2.default.number,
  resizeThrottle: _propTypes2.default.number,
  intervalCheck: _propTypes2.default.bool,
  intervalDelay: _propTypes2.default.number,
  containment: typeof window !== "undefined" ? _propTypes2.default.instanceOf(window.Element) : _propTypes2.default.any,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  minTopValue: _propTypes2.default.number
};
exports.default = VisibilitySensor;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value;

  // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.
  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ })
/******/ ]);
});

/***/ }),

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
})(["display:block;margin:1.5rem 0;color:rgb(", ");"], _styles_colors__WEBPACK_IMPORTED_MODULE_8__["black"]);
var SavingsIndicator = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "reaction-commerce-support-plans__SavingsIndicator",
  componentId: "c17oh8-6"
})(["display:block;margin-top:.5rem;"]);
var PriceBreakdown = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__PriceBreakdown",
  componentId: "c17oh8-7"
})(["display:flex;flex-direction:column;justify-content:space-between;position:sticky;bottom:0;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject4()));
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "reaction-commerce-support-plans__TextInput",
  componentId: "c17oh8-8"
})(["display:block;width:100%;margin:1rem 0;height:2.5rem;padding-left:.5rem;font-size:1rem;"]);
var SideBySide = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reaction-commerce-support-plans__SideBySide",
  componentId: "c17oh8-9"
})(["display:flex;flex-direction:column;width:100%;", ""], _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__["default"].tablet(_templateObject5()));
var Back = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(PaymentSwitcher).withConfig({
  displayName: "reaction-commerce-support-plans__Back",
  componentId: "c17oh8-10"
})(["", ""], function (props) {
  return props.marginLeft && "margin-left: 1rem;";
});
var SubLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
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

  _createClass(Emergency, [{
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
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Head"], {
        title: "Reaction Commerce Support Plans | Official Partner | Chat & Live Developer Help | out:grow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
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
          lineNumber: 329
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Wire"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        id: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, "Our Reaction Commerce support plans."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "Because every project is different, there is no one-size-fits-all in the world of support. Our Reaction Commerce experts are available to your team \u2014 whether you need a full-featured dedicated plan with a guaranteed response time, or a lightweight chat-only membership for non-urgent use."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "With our support plan configurator, we're leading the way by giving our customers full power. Estimate your base pricing, choose your payment terms and sign up right from our website. Getting peace of mind for your Reaction Commerce infrastructure has never been that easy."), this.state.step === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "Let's figure out your needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "chat-support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Unlimited chat support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
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
          lineNumber: 356
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "response-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Guaranteed chat response time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "We'll be legally bound to respect this response time within your chosen working hours (see below)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
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
          lineNumber: 370
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, "Yearly face-time hours: ", this.state.hours), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
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
          lineNumber: 387
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "advance-notice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "Minimum advance notice to book a face-time session"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
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
          lineNumber: 393
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "dedicated-experts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "Dedicated experts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
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
          lineNumber: 409
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "time-zone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, "Operating time zone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
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
          lineNumber: 423
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PriceBreakdown, {
        ref: this.priceBreakdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "Your total is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Price, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, this.state.showPriceMonthly ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, this.state.monthlyPrice, " per month") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, this.state.yearlyPrice, " per year"))), !this.state.showPriceMonthly && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SavingsIndicator, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "You are saving ", this.state.yearlySavings, " by paying yearly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentSwitcher, {
        href: "#",
        onClick: this.handleSwitchPricing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, "Pay ", this.state.showPriceMonthly ? "yearly and get 10% off" : "monthly for more flexibility")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, "Need help? Call our 24/7 sales team at +1 (281) OUT-GROW."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], {
        keepLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["white"],
        onClick: this.handleNextStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, "Sign Up Online")))), this.state.step === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        ref: this.customerDetailForm,
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      }, "Nice to meet you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        marginBottom: true,
        noMarginLeft: true,
        noMarginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, "Before going further, we need to know a little bit more about you and the company you work with. We'll reach out as soon as we can to activate your plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "first-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
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
          lineNumber: 470
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "last-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
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
          lineNumber: 475
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
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
          lineNumber: 482
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
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
          lineNumber: 487
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
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
          lineNumber: 493
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
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
          lineNumber: 498
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
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
          lineNumber: 504
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
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
          lineNumber: 509
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
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
          lineNumber: 516
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
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
          lineNumber: 521
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], {
        keepLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["white"],
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, "Sign Up Online"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Back, {
        href: "#",
        onClick: this.handlePreviousStep,
        marginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, "or go back to the configurator"))), this.state.step === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "Thank you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], {
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "Our team will be in touch soon to activate your support plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Back, {
        href: "#",
        onClick: this.handlePreviousStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, "Go back to the configurator."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_8__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
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
//# sourceMappingURL=reaction-commerce-support-plans.js.72c5a6e16e5a149d9ee6.hot-update.js.map