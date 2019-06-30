webpackHotUpdate("static/development/pages/reaction-commerce-support-plans.js",{

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/bson/dist/bson.browser.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/bson/dist/bson.browser.esm.js ***!
  \****************************************************/
/*! exports provided: default, BSON_INT32_MAX, BSON_INT32_MIN, BSON_INT64_MAX, BSON_INT64_MIN, JS_INT_MAX, JS_INT_MIN, BSON_DATA_NUMBER, BSON_DATA_STRING, BSON_DATA_OBJECT, BSON_DATA_ARRAY, BSON_DATA_BINARY, BSON_DATA_UNDEFINED, BSON_DATA_OID, BSON_DATA_BOOLEAN, BSON_DATA_DATE, BSON_DATA_NULL, BSON_DATA_REGEXP, BSON_DATA_DBPOINTER, BSON_DATA_CODE, BSON_DATA_SYMBOL, BSON_DATA_CODE_W_SCOPE, BSON_DATA_INT, BSON_DATA_TIMESTAMP, BSON_DATA_LONG, BSON_DATA_DECIMAL128, BSON_DATA_MIN_KEY, BSON_DATA_MAX_KEY, BSON_BINARY_SUBTYPE_DEFAULT, BSON_BINARY_SUBTYPE_FUNCTION, BSON_BINARY_SUBTYPE_BYTE_ARRAY, BSON_BINARY_SUBTYPE_UUID, BSON_BINARY_SUBTYPE_MD5, BSON_BINARY_SUBTYPE_USER_DEFINED, Code, BSONSymbol, DBRef, Binary, ObjectId, Long, Timestamp, Double, Int32, MinKey, MaxKey, BSONRegExp, Decimal128, serialize, serializeWithBufferAndIndex, deserialize, calculateObjectSize, deserializeStream, setInternalBufferSize, ObjectID, EJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT32_MAX", function() { return bson_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT32_MIN", function() { return bson_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT64_MAX", function() { return bson_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT64_MIN", function() { return bson_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JS_INT_MAX", function() { return bson_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JS_INT_MIN", function() { return bson_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_NUMBER", function() { return bson_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_STRING", function() { return bson_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_OBJECT", function() { return bson_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_ARRAY", function() { return bson_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_BINARY", function() { return bson_11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_UNDEFINED", function() { return bson_12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_OID", function() { return bson_13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_BOOLEAN", function() { return bson_14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_DATE", function() { return bson_15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_NULL", function() { return bson_16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_REGEXP", function() { return bson_17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_DBPOINTER", function() { return bson_18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_CODE", function() { return bson_19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_SYMBOL", function() { return bson_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_CODE_W_SCOPE", function() { return bson_21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_INT", function() { return bson_22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_TIMESTAMP", function() { return bson_23; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_LONG", function() { return bson_24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_DECIMAL128", function() { return bson_25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_MIN_KEY", function() { return bson_26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_MAX_KEY", function() { return bson_27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_DEFAULT", function() { return bson_28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_FUNCTION", function() { return bson_29; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_BYTE_ARRAY", function() { return bson_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_UUID", function() { return bson_31; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_MD5", function() { return bson_32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_USER_DEFINED", function() { return bson_33; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return bson_34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSONSymbol", function() { return bson_35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBRef", function() { return bson_36; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return bson_37; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectId", function() { return bson_38; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Long", function() { return bson_39; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return bson_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Double", function() { return bson_41; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int32", function() { return bson_42; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinKey", function() { return bson_43; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxKey", function() { return bson_44; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSONRegExp", function() { return bson_45; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimal128", function() { return bson_46; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return bson_47; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeWithBufferAndIndex", function() { return bson_48; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return bson_49; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateObjectSize", function() { return bson_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeStream", function() { return bson_51; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInternalBufferSize", function() { return bson_52; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectID", function() { return bson_53; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EJSON", function() { return bson_54; });
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! long */ "./node_modules/long/src/long.js");
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);



var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var map = createCommonjsModule(function (module) {

  if (typeof commonjsGlobal.Map !== 'undefined') {
    module.exports = commonjsGlobal.Map;
    module.exports.Map = commonjsGlobal.Map;
  } else {
    // We will return a polyfill
    var Map = function Map(array) {
      this._keys = [];
      this._values = {};

      for (var i = 0; i < array.length; i++) {
        if (array[i] == null) continue; // skip null and undefined

        var entry = array[i];
        var key = entry[0];
        var value = entry[1]; // Add the key to the list of keys in order

        this._keys.push(key); // Add the key and value to the values dictionary with a point
        // to the location in the ordered keys list


        this._values[key] = {
          v: value,
          i: this._keys.length - 1
        };
      }
    };

    Map.prototype.clear = function () {
      this._keys = [];
      this._values = {};
    };

    Map.prototype.delete = function (key) {
      var value = this._values[key];
      if (value == null) return false; // Delete entry

      delete this._values[key]; // Remove the key from the ordered keys list

      this._keys.splice(value.i, 1);

      return true;
    };

    Map.prototype.entries = function () {
      var self = this;
      var index = 0;
      return {
        next: function next() {
          var key = self._keys[index++];
          return {
            value: key !== undefined ? [key, self._values[key].v] : undefined,
            done: key !== undefined ? false : true
          };
        }
      };
    };

    Map.prototype.forEach = function (callback, self) {
      self = self || this;

      for (var i = 0; i < this._keys.length; i++) {
        var key = this._keys[i]; // Call the forEach callback

        callback.call(self, this._values[key].v, key, self);
      }
    };

    Map.prototype.get = function (key) {
      return this._values[key] ? this._values[key].v : undefined;
    };

    Map.prototype.has = function (key) {
      return this._values[key] != null;
    };

    Map.prototype.keys = function () {
      var self = this;
      var index = 0;
      return {
        next: function next() {
          var key = self._keys[index++];
          return {
            value: key !== undefined ? key : undefined,
            done: key !== undefined ? false : true
          };
        }
      };
    };

    Map.prototype.set = function (key, value) {
      if (this._values[key]) {
        this._values[key].v = value;
        return this;
      } // Add the key to the list of keys in order


      this._keys.push(key); // Add the key and value to the values dictionary with a point
      // to the location in the ordered keys list


      this._values[key] = {
        v: value,
        i: this._keys.length - 1
      };
      return this;
    };

    Map.prototype.values = function () {
      var self = this;
      var index = 0;
      return {
        next: function next() {
          var key = self._keys[index++];
          return {
            value: key !== undefined ? self._values[key].v : undefined,
            done: key !== undefined ? false : true
          };
        }
      };
    }; // Last ismaster


    Object.defineProperty(Map.prototype, 'size', {
      enumerable: true,
      get: function get() {
        return this._keys.length;
      }
    });
    module.exports = Map;
  }
});
var map_1 = map.Map;

/**
 * @ignore
 */


long__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.toExtendedJSON = function (options) {
  if (options && options.relaxed) return this.toNumber();
  return {
    $numberLong: this.toString()
  };
};
/**
 * @ignore
 */


long__WEBPACK_IMPORTED_MODULE_0___default.a.fromExtendedJSON = function (doc, options) {
  var result = long__WEBPACK_IMPORTED_MODULE_0___default.a.fromString(doc.$numberLong);
  return options && options.relaxed ? result.toNumber() : result;
};

Object.defineProperty(long__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, '_bsontype', {
  value: 'Long'
});
var long_1 = long__WEBPACK_IMPORTED_MODULE_0___default.a;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Double =
/*#__PURE__*/
function () {
  /**
   * Create a Double type
   *
   * @param {number} value the number we want to represent as a double.
   * @return {Double}
   */
  function Double(value) {
    _classCallCheck(this, Double);

    this.value = value;
  }
  /**
   * Access the number value.
   *
   * @method
   * @return {number} returns the wrapped double number.
   */


  _createClass(Double, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed && isFinite(this.value)) return this.value;
      return {
        $numberDouble: this.value.toString()
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseFloat(doc.$numberDouble) : new Double(parseFloat(doc.$numberDouble));
    }
  }]);

  return Double;
}();

Object.defineProperty(Double.prototype, '_bsontype', {
  value: 'Double'
});
var double_1 = Double;

/**
 * @class
 * @param {number} low  the low (signed) 32 bits of the Timestamp.
 * @param {number} high the high (signed) 32 bits of the Timestamp.
 * @return {Timestamp}
 */


var Timestamp =
/*#__PURE__*/
function (_Long) {
  _inherits(Timestamp, _Long);

  function Timestamp(low, high) {
    var _this;

    _classCallCheck(this, Timestamp);

    if (low instanceof long_1) {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low.low, low.high));
    } else {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low, high));
    }

    return _possibleConstructorReturn(_this);
  }
  /**
   * Return the JSON value.
   *
   * @method
   * @return {String} the JSON representation.
   */


  _createClass(Timestamp, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        $timestamp: this.toString()
      };
    }
    /**
     * Returns a Timestamp represented by the given (32-bit) integer value.
     *
     * @method
     * @param {number} value the 32-bit integer in question.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "toExtendedJSON",

    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      return {
        $timestamp: {
          t: this.high,
          i: this.low
        }
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromInt",
    value: function fromInt(value) {
      return new Timestamp(long_1.fromInt(value));
    }
    /**
     * Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned.
     *
     * @method
     * @param {number} value the number in question.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      return new Timestamp(long_1.fromNumber(value));
    }
    /**
     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
     *
     * @method
     * @param {number} lowBits the low 32-bits.
     * @param {number} highBits the high 32-bits.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "fromBits",
    value: function fromBits(lowBits, highBits) {
      return new Timestamp(lowBits, highBits);
    }
    /**
     * Returns a Timestamp from the given string, optionally using the given radix.
     *
     * @method
     * @param {String} str the textual representation of the Timestamp.
     * @param {number} [opt_radix] the radix in which the text is written.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "fromString",
    value: function fromString(str, opt_radix) {
      return new Timestamp(long_1.fromString(str, opt_radix));
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Timestamp(doc.$timestamp.i, doc.$timestamp.t);
    }
  }]);

  return Timestamp;
}(long_1);

Object.defineProperty(Timestamp.prototype, '_bsontype', {
  value: 'Timestamp'
});
var timestamp = Timestamp;

var require$$0 = {};

/* global window */

/**
 * Normalizes our expected stringified form of a function across versions of node
 * @param {Function} fn The function to stringify
 */


function normalizedFunctionString(fn) {
  return fn.toString().replace('function(', 'function (');
}

function insecureRandomBytes(size) {
  var result = new Uint8Array(size);

  for (var i = 0; i < size; ++i) {
    result[i] = Math.floor(Math.random() * 256);
  }

  return result;
}

var randomBytes = insecureRandomBytes;

if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
  randomBytes = function randomBytes(size) {
    return window.crypto.getRandomValues(new Uint8Array(size));
  };
} else {
  try {
    randomBytes = require$$0.randomBytes;
  } catch (e) {} // keep the fallback
  // NOTE: in transpiled cases the above require might return null/undefined


  if (randomBytes == null) {
    randomBytes = insecureRandomBytes;
  }
}

var utils = {
  normalizedFunctionString: normalizedFunctionString,
  randomBytes: randomBytes
};

var Buffer$1 = buffer__WEBPACK_IMPORTED_MODULE_1___default.a.Buffer;
var randomBytes$1 = utils.randomBytes; // constants

var PROCESS_UNIQUE = randomBytes$1(5); // Regular expression that checks for hex value

var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
var hasBufferType = false; // Check if buffer exists

try {
  if (Buffer$1 && Buffer$1.from) hasBufferType = true;
} catch (err) {
  hasBufferType = false;
} // Precomputed hex table enables speedy hex string conversion


var hexTable = [];

for (var _i = 0; _i < 256; _i++) {
  hexTable[_i] = (_i <= 15 ? '0' : '') + _i.toString(16);
} // Lookup tables


var decodeLookup = [];
var i = 0;

while (i < 10) {
  decodeLookup[0x30 + i] = i++;
}

while (i < 16) {
  decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
}

var _Buffer = Buffer$1;

function convertToHex(bytes) {
  return bytes.toString('hex');
}

function makeObjectIdError(invalidString, index) {
  var invalidCharacter = invalidString[index];
  return new TypeError("ObjectId string \"".concat(invalidString, "\" contains invalid character \"").concat(invalidCharacter, "\" with character code (").concat(invalidString.charCodeAt(index), "). All character codes for a non-hex string must be less than 256."));
}
/**
 * A class representation of the BSON ObjectId type.
 */


var ObjectId =
/*#__PURE__*/
function () {
  /**
   * Create an ObjectId type
   *
   * @param {(string|number)} id Can be a 24 byte hex string, 12 byte binary string or a Number.
   * @property {number} generationTime The generation time of this ObjectId instance
   * @return {ObjectId} instance of ObjectId.
   */
  function ObjectId(id) {
    _classCallCheck(this, ObjectId);

    // Duck-typing to support ObjectId from different npm packages
    if (id instanceof ObjectId) return id; // The most common usecase (blank id, new objectId instance)

    if (id == null || typeof id === 'number') {
      // Generate a new id
      this.id = this.generate(id); // If we are caching the hex string

      if (ObjectId.cacheHexString) this.__id = this.toString('hex'); // Return the object

      return;
    } // Check if the passed in id is valid


    var valid = ObjectId.isValid(id); // Throw an error if it's not a valid setup

    if (!valid && id != null) {
      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    } else if (valid && typeof id === 'string' && id.length === 24 && hasBufferType) {
      return new ObjectId(Buffer$1.from(id, 'hex'));
    } else if (valid && typeof id === 'string' && id.length === 24) {
      return ObjectId.createFromHexString(id);
    } else if (id != null && id.length === 12) {
      // assume 12 byte string
      this.id = id;
    } else if (id != null && id.toHexString) {
      // Duck-typing to support ObjectId from different npm packages
      return id;
    } else {
      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }

    if (ObjectId.cacheHexString) this.__id = this.toString('hex');
  }
  /**
   * Return the ObjectId id as a 24 byte hex string representation
   *
   * @method
   * @return {string} return the 24 byte hex string representation.
   */


  _createClass(ObjectId, [{
    key: "toHexString",
    value: function toHexString() {
      if (ObjectId.cacheHexString && this.__id) return this.__id;
      var hexString = '';

      if (!this.id || !this.id.length) {
        throw new TypeError('invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [' + JSON.stringify(this.id) + ']');
      }

      if (this.id instanceof _Buffer) {
        hexString = convertToHex(this.id);
        if (ObjectId.cacheHexString) this.__id = hexString;
        return hexString;
      }

      for (var _i2 = 0; _i2 < this.id.length; _i2++) {
        var hexChar = hexTable[this.id.charCodeAt(_i2)];

        if (typeof hexChar !== 'string') {
          throw makeObjectIdError(this.id, _i2);
        }

        hexString += hexChar;
      }

      if (ObjectId.cacheHexString) this.__id = hexString;
      return hexString;
    }
    /**
     * Update the ObjectId index used in generating new ObjectId's on the driver
     *
     * @method
     * @return {number} returns next index value.
     * @ignore
     */

  }, {
    key: "get_inc",
    value: function get_inc() {
      return ObjectId.index = (ObjectId.index + 1) % 0xffffff;
    }
    /**
     * Update the ObjectId index used in generating new ObjectId's on the driver
     *
     * @method
     * @return {number} returns next index value.
     * @ignore
     */

  }, {
    key: "getInc",
    value: function getInc() {
      return this.get_inc();
    }
    /**
     * Generate a 12 byte id buffer used in ObjectId's
     *
     * @method
     * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
     * @return {Buffer} return the 12 byte id buffer string.
     */

  }, {
    key: "generate",
    value: function generate(time) {
      if ('number' !== typeof time) {
        time = ~~(Date.now() / 1000);
      }

      var inc = this.get_inc();
      var buffer$$1 = Buffer$1.alloc(12); // 4-byte timestamp

      buffer$$1[3] = time & 0xff;
      buffer$$1[2] = time >> 8 & 0xff;
      buffer$$1[1] = time >> 16 & 0xff;
      buffer$$1[0] = time >> 24 & 0xff; // 5-byte process unique

      buffer$$1[4] = PROCESS_UNIQUE[0];
      buffer$$1[5] = PROCESS_UNIQUE[1];
      buffer$$1[6] = PROCESS_UNIQUE[2];
      buffer$$1[7] = PROCESS_UNIQUE[3];
      buffer$$1[8] = PROCESS_UNIQUE[4]; // 3-byte counter

      buffer$$1[11] = inc & 0xff;
      buffer$$1[10] = inc >> 8 & 0xff;
      buffer$$1[9] = inc >> 16 & 0xff;
      return buffer$$1;
    }
    /**
     * Converts the id into a 24 byte hex string for printing
     *
     * @param {String} format The Buffer toString format parameter.
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */

  }, {
    key: "toString",
    value: function toString(format) {
      // Is the id a buffer then use the buffer toString method to return the format
      if (this.id && this.id.copy) {
        return this.id.toString(typeof format === 'string' ? format : 'hex');
      }

      return this.toHexString();
    }
    /**
     * Converts to its JSON representation.
     *
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toHexString();
    }
    /**
     * Compares the equality of this ObjectId with `otherID`.
     *
     * @method
     * @param {object} otherID ObjectId instance to compare against.
     * @return {boolean} the result of comparing two ObjectId's
     */

  }, {
    key: "equals",
    value: function equals(otherId) {
      if (otherId instanceof ObjectId) {
        return this.toString() === otherId.toString();
      }

      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12 && this.id instanceof _Buffer) {
        return otherId === this.id.toString('binary');
      }

      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 24) {
        return otherId.toLowerCase() === this.toHexString();
      }

      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12) {
        return otherId === this.id;
      }

      if (otherId != null && (otherId instanceof ObjectId || otherId.toHexString)) {
        return otherId.toHexString() === this.toHexString();
      }

      return false;
    }
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     *
     * @method
     * @return {date} the generation date
     */

  }, {
    key: "getTimestamp",
    value: function getTimestamp() {
      var timestamp = new Date();
      var time = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
      timestamp.setTime(Math.floor(time) * 1000);
      return timestamp;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",

    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      if (this.toHexString) return {
        $oid: this.toHexString()
      };
      return {
        $oid: this.toString('hex')
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "createPk",
    value: function createPk() {
      return new ObjectId();
    }
    /**
     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
     *
     * @method
     * @param {number} time an integer number representing a number of seconds.
     * @return {ObjectId} return the created ObjectId
     */

  }, {
    key: "createFromTime",
    value: function createFromTime(time) {
      var buffer$$1 = Buffer$1.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // Encode time into first 4 bytes

      buffer$$1[3] = time & 0xff;
      buffer$$1[2] = time >> 8 & 0xff;
      buffer$$1[1] = time >> 16 & 0xff;
      buffer$$1[0] = time >> 24 & 0xff; // Return the new objectId

      return new ObjectId(buffer$$1);
    }
    /**
     * Creates an ObjectId from a hex string representation of an ObjectId.
     *
     * @method
     * @param {string} hexString create a ObjectId from a passed in 24 byte hexstring.
     * @return {ObjectId} return the created ObjectId
     */

  }, {
    key: "createFromHexString",
    value: function createFromHexString(string) {
      // Throw an error if it's not a valid setup
      if (typeof string === 'undefined' || string != null && string.length !== 24) {
        throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
      } // Use Buffer.from method if available


      if (hasBufferType) return new ObjectId(Buffer$1.from(string, 'hex')); // Calculate lengths

      var array = new _Buffer(12);
      var n = 0;
      var i = 0;

      while (i < 24) {
        array[n++] = decodeLookup[string.charCodeAt(i++)] << 4 | decodeLookup[string.charCodeAt(i++)];
      }

      return new ObjectId(array);
    }
    /**
     * Checks if a value is a valid bson ObjectId
     *
     * @method
     * @return {boolean} return true if the value is a valid bson ObjectId, return false otherwise.
     */

  }, {
    key: "isValid",
    value: function isValid(id) {
      if (id == null) return false;

      if (typeof id === 'number') {
        return true;
      }

      if (typeof id === 'string') {
        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
      }

      if (id instanceof ObjectId) {
        return true;
      }

      if (id instanceof _Buffer && id.length === 12) {
        return true;
      } // Duck-Typing detection of ObjectId like objects


      if (id.toHexString) {
        return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
      }

      return false;
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new ObjectId(doc.$oid);
    }
  }]);

  return ObjectId;
}();
/**
 * @ignore
 */


Object.defineProperty(ObjectId.prototype, 'generationTime', {
  enumerable: true,
  get: function get() {
    return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
  },
  set: function set(value) {
    // Encode time into first 4 bytes
    this.id[3] = value & 0xff;
    this.id[2] = value >> 8 & 0xff;
    this.id[1] = value >> 16 & 0xff;
    this.id[0] = value >> 24 & 0xff;
  }
});
/**
 * Converts to a string representation of this Id.
 *
 * @return {String} return the 24 byte hex string representation.
 * @ignore
 */

ObjectId.prototype.inspect = ObjectId.prototype.toString;
/**
 * @ignore
 */

ObjectId.index = ~~(Math.random() * 0xffffff);
Object.defineProperty(ObjectId.prototype, '_bsontype', {
  value: 'ObjectId'
});
var objectid = ObjectId;

function alphabetize(str) {
  return str.split('').sort().join('');
}
/**
 * A class representation of the BSON RegExp type.
 */


var BSONRegExp =
/*#__PURE__*/
function () {
  /**
   * Create a RegExp type
   *
   * @param {string} pattern The regular expression pattern to match
   * @param {string} options The regular expression options
   */
  function BSONRegExp(pattern, options) {
    _classCallCheck(this, BSONRegExp);

    // Execute
    this.pattern = pattern || '';
    this.options = options ? alphabetize(options) : ''; // Validate options

    for (var i = 0; i < this.options.length; i++) {
      if (!(this.options[i] === 'i' || this.options[i] === 'm' || this.options[i] === 'x' || this.options[i] === 'l' || this.options[i] === 's' || this.options[i] === 'u')) {
        throw new Error("The regular expression option [".concat(this.options[i], "] is not supported"));
      }
    }
  }
  /**
   * @ignore
   */


  _createClass(BSONRegExp, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $regularExpression: {
          pattern: this.pattern,
          options: this.options
        }
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONRegExp(doc.$regularExpression.pattern, doc.$regularExpression.options.split('').sort().join(''));
    }
  }]);

  return BSONRegExp;
}();

Object.defineProperty(BSONRegExp.prototype, '_bsontype', {
  value: 'BSONRegExp'
});
var regexp = BSONRegExp;

var BSONSymbol =
/*#__PURE__*/
function () {
  /**
   * Create a Symbol type
   *
   * @param {string} value the string representing the symbol.
   */
  function BSONSymbol(value) {
    _classCallCheck(this, BSONSymbol);

    this.value = value;
  }
  /**
   * Access the wrapped string value.
   *
   * @method
   * @return {String} returns the wrapped string.
   */


  _createClass(BSONSymbol, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "inspect",
    value: function inspect() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $symbol: this.value
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONSymbol(doc.$symbol);
    }
  }]);

  return BSONSymbol;
}();

Object.defineProperty(BSONSymbol.prototype, '_bsontype', {
  value: 'Symbol'
});
var symbol = BSONSymbol;

var Int32 =
/*#__PURE__*/
function () {
  /**
   * Create an Int32 type
   *
   * @param {number} value the number we want to represent as an int32.
   * @return {Int32}
   */
  function Int32(value) {
    _classCallCheck(this, Int32);

    this.value = value;
  }
  /**
   * Access the number value.
   *
   * @method
   * @return {number} returns the wrapped int32 number.
   */


  _createClass(Int32, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed) return this.value;
      return {
        $numberInt: this.value.toString()
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
    }
  }]);

  return Int32;
}();

Object.defineProperty(Int32.prototype, '_bsontype', {
  value: 'Int32'
});
var int_32 = Int32;

var Code =
/*#__PURE__*/
function () {
  /**
   * Create a Code type
   *
   * @param {(string|function)} code a string or function.
   * @param {Object} [scope] an optional scope for the function.
   * @return {Code}
   */
  function Code(code, scope) {
    _classCallCheck(this, Code);

    this.code = code;
    this.scope = scope;
  }
  /**
   * @ignore
   */


  _createClass(Code, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        scope: this.scope,
        code: this.code
      };
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      if (this.scope) {
        return {
          $code: this.code,
          $scope: this.scope
        };
      }

      return {
        $code: this.code
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Code(doc.$code, doc.$scope);
    }
  }]);

  return Code;
}();

Object.defineProperty(Code.prototype, '_bsontype', {
  value: 'Code'
});
var code = Code;

var PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
var PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
var PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
var EXPONENT_MAX = 6111;
var EXPONENT_MIN = -6176;
var EXPONENT_BIAS = 6176;
var MAX_DIGITS = 34; // Nan value bits as 32 bit values (due to lack of longs)

var NAN_BUFFER = [0x7c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse(); // Infinity value bits 32 bit values (due to lack of longs)

var INF_NEGATIVE_BUFFER = [0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
var INF_POSITIVE_BUFFER = [0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
var EXPONENT_REGEX = /^([-+])?(\d+)?$/; // Detect if the value is a digit

function isDigit(value) {
  return !isNaN(parseInt(value, 10));
} // Divide two uint128 values


function divideu128(value) {
  var DIVISOR = long_1.fromNumber(1000 * 1000 * 1000);

  var _rem = long_1.fromNumber(0);

  if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
    return {
      quotient: value,
      rem: _rem
    };
  }

  for (var i = 0; i <= 3; i++) {
    // Adjust remainder to match value of next dividend
    _rem = _rem.shiftLeft(32); // Add the divided to _rem

    _rem = _rem.add(new long_1(value.parts[i], 0));
    value.parts[i] = _rem.div(DIVISOR).low;
    _rem = _rem.modulo(DIVISOR);
  }

  return {
    quotient: value,
    rem: _rem
  };
} // Multiply two Long values and return the 128 bit value


function multiply64x2(left, right) {
  if (!left && !right) {
    return {
      high: long_1.fromNumber(0),
      low: long_1.fromNumber(0)
    };
  }

  var leftHigh = left.shiftRightUnsigned(32);
  var leftLow = new long_1(left.getLowBits(), 0);
  var rightHigh = right.shiftRightUnsigned(32);
  var rightLow = new long_1(right.getLowBits(), 0);
  var productHigh = leftHigh.multiply(rightHigh);
  var productMid = leftHigh.multiply(rightLow);
  var productMid2 = leftLow.multiply(rightHigh);
  var productLow = leftLow.multiply(rightLow);
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productMid = new long_1(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productLow = productMid.shiftLeft(32).add(new long_1(productLow.getLowBits(), 0)); // Return the 128 bit result

  return {
    high: productHigh,
    low: productLow
  };
}

function lessThan(left, right) {
  // Make values unsigned
  var uhleft = left.high >>> 0;
  var uhright = right.high >>> 0; // Compare high bits first

  if (uhleft < uhright) {
    return true;
  } else if (uhleft === uhright) {
    var ulleft = left.low >>> 0;
    var ulright = right.low >>> 0;
    if (ulleft < ulright) return true;
  }

  return false;
}

function invalidErr(string, message) {
  throw new TypeError("\"".concat(string, "\" is not a valid Decimal128 string - ").concat(message));
}
/**
 * A class representation of the BSON Decimal128 type.
 *
 * @class
 * @param {Buffer} bytes a buffer containing the raw Decimal128 bytes.
 * @return {Double}
 */


function Decimal128(bytes) {
  this.bytes = bytes;
}
/**
 * Create a Decimal128 instance from a string representation
 *
 * @method
 * @param {string} string a numeric string representation.
 * @return {Decimal128} returns a Decimal128 instance.
 */


Decimal128.fromString = function (string) {
  // Parse state tracking
  var isNegative = false;
  var sawRadix = false;
  var foundNonZero = false; // Total number of significant digits (no leading or trailing zero)

  var significantDigits = 0; // Total number of significand digits read

  var nDigitsRead = 0; // Total number of digits (no leading zeros)

  var nDigits = 0; // The number of the digits after radix

  var radixPosition = 0; // The index of the first non-zero in *str*

  var firstNonZero = 0; // Digits Array

  var digits = [0]; // The number of digits in digits

  var nDigitsStored = 0; // Insertion pointer for digits

  var digitsInsert = 0; // The index of the first non-zero digit

  var firstDigit = 0; // The index of the last digit

  var lastDigit = 0; // Exponent

  var exponent = 0; // loop index over array

  var i = 0; // The high 17 digits of the significand

  var significandHigh = [0, 0]; // The low 17 digits of the significand

  var significandLow = [0, 0]; // The biased exponent

  var biasedExponent = 0; // Read index

  var index = 0; // Naively prevent against REDOS attacks.
  // TODO: implementing a custom parsing for this, or refactoring the regex would yield
  //       further gains.

  if (string.length >= 7000) {
    throw new TypeError('' + string + ' not a valid Decimal128 string');
  } // Results


  var stringMatch = string.match(PARSE_STRING_REGEXP);
  var infMatch = string.match(PARSE_INF_REGEXP);
  var nanMatch = string.match(PARSE_NAN_REGEXP); // Validate the string

  if (!stringMatch && !infMatch && !nanMatch || string.length === 0) {
    throw new TypeError('' + string + ' not a valid Decimal128 string');
  }

  if (stringMatch) {
    // full_match = stringMatch[0]
    // sign = stringMatch[1]
    var unsignedNumber = stringMatch[2]; // stringMatch[3] is undefined if a whole number (ex "1", 12")
    // but defined if a number w/ decimal in it (ex "1.0, 12.2")

    var e = stringMatch[4];
    var expSign = stringMatch[5];
    var expNumber = stringMatch[6]; // they provided e, but didn't give an exponent number. for ex "1e"

    if (e && expNumber === undefined) invalidErr(string, 'missing exponent power'); // they provided e, but didn't give a number before it. for ex "e1"

    if (e && unsignedNumber === undefined) invalidErr(string, 'missing exponent base');

    if (e === undefined && (expSign || expNumber)) {
      invalidErr(string, 'missing e before exponent');
    }
  } // Get the negative or positive sign


  if (string[index] === '+' || string[index] === '-') {
    isNegative = string[index++] === '-';
  } // Check if user passed Infinity or NaN


  if (!isDigit(string[index]) && string[index] !== '.') {
    if (string[index] === 'i' || string[index] === 'I') {
      return new Decimal128(Buffer.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
    } else if (string[index] === 'N') {
      return new Decimal128(Buffer.from(NAN_BUFFER));
    }
  } // Read all the digits


  while (isDigit(string[index]) || string[index] === '.') {
    if (string[index] === '.') {
      if (sawRadix) invalidErr(string, 'contains multiple periods');
      sawRadix = true;
      index = index + 1;
      continue;
    }

    if (nDigitsStored < 34) {
      if (string[index] !== '0' || foundNonZero) {
        if (!foundNonZero) {
          firstNonZero = nDigitsRead;
        }

        foundNonZero = true; // Only store 34 digits

        digits[digitsInsert++] = parseInt(string[index], 10);
        nDigitsStored = nDigitsStored + 1;
      }
    }

    if (foundNonZero) nDigits = nDigits + 1;
    if (sawRadix) radixPosition = radixPosition + 1;
    nDigitsRead = nDigitsRead + 1;
    index = index + 1;
  }

  if (sawRadix && !nDigitsRead) throw new TypeError('' + string + ' not a valid Decimal128 string'); // Read exponent if exists

  if (string[index] === 'e' || string[index] === 'E') {
    // Read exponent digits
    var match = string.substr(++index).match(EXPONENT_REGEX); // No digits read

    if (!match || !match[2]) return new Decimal128(Buffer.from(NAN_BUFFER)); // Get exponent

    exponent = parseInt(match[0], 10); // Adjust the index

    index = index + match[0].length;
  } // Return not a number


  if (string[index]) return new Decimal128(Buffer.from(NAN_BUFFER)); // Done reading input
  // Find first non-zero digit in digits

  firstDigit = 0;

  if (!nDigitsStored) {
    firstDigit = 0;
    lastDigit = 0;
    digits[0] = 0;
    nDigits = 1;
    nDigitsStored = 1;
    significantDigits = 0;
  } else {
    lastDigit = nDigitsStored - 1;
    significantDigits = nDigits;

    if (significantDigits !== 1) {
      while (string[firstNonZero + significantDigits - 1] === '0') {
        significantDigits = significantDigits - 1;
      }
    }
  } // Normalization of exponent
  // Correct exponent based on radix position, and shift significand as needed
  // to represent user input
  // Overflow prevention


  if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
    exponent = EXPONENT_MIN;
  } else {
    exponent = exponent - radixPosition;
  } // Attempt to normalize the exponent


  while (exponent > EXPONENT_MAX) {
    // Shift exponent to significand and decrease
    lastDigit = lastDigit + 1;

    if (lastDigit - firstDigit > MAX_DIGITS) {
      // Check if we have a zero then just hard clamp, otherwise fail
      var digitsString = digits.join('');

      if (digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX;
        break;
      }

      invalidErr(string, 'overflow');
    }

    exponent = exponent - 1;
  }

  while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
    // Shift last digit. can only do this if < significant digits than # stored.
    if (lastDigit === 0 && significantDigits < nDigitsStored) {
      exponent = EXPONENT_MIN;
      significantDigits = 0;
      break;
    }

    if (nDigitsStored < nDigits) {
      // adjust to match digits not stored
      nDigits = nDigits - 1;
    } else {
      // adjust to round
      lastDigit = lastDigit - 1;
    }

    if (exponent < EXPONENT_MAX) {
      exponent = exponent + 1;
    } else {
      // Check if we have a zero then just hard clamp, otherwise fail
      var _digitsString = digits.join('');

      if (_digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX;
        break;
      }

      invalidErr(string, 'overflow');
    }
  } // Round
  // We've normalized the exponent, but might still need to round.


  if (lastDigit - firstDigit + 1 < significantDigits) {
    var endOfString = nDigitsRead; // If we have seen a radix point, 'string' is 1 longer than we have
    // documented with ndigits_read, so inc the position of the first nonzero
    // digit and the position that digits are read to.

    if (sawRadix) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    } // if negative, we need to increment again to account for - sign at start.


    if (isNegative) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    }

    var roundDigit = parseInt(string[firstNonZero + lastDigit + 1], 10);
    var roundBit = 0;

    if (roundDigit >= 5) {
      roundBit = 1;

      if (roundDigit === 5) {
        roundBit = digits[lastDigit] % 2 === 1;

        for (i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
          if (parseInt(string[i], 10)) {
            roundBit = 1;
            break;
          }
        }
      }
    }

    if (roundBit) {
      var dIdx = lastDigit;

      for (; dIdx >= 0; dIdx--) {
        if (++digits[dIdx] > 9) {
          digits[dIdx] = 0; // overflowed most significant digit

          if (dIdx === 0) {
            if (exponent < EXPONENT_MAX) {
              exponent = exponent + 1;
              digits[dIdx] = 1;
            } else {
              return new Decimal128(Buffer.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
            }
          }
        }
      }
    }
  } // Encode significand
  // The high 17 digits of the significand


  significandHigh = long_1.fromNumber(0); // The low 17 digits of the significand

  significandLow = long_1.fromNumber(0); // read a zero

  if (significantDigits === 0) {
    significandHigh = long_1.fromNumber(0);
    significandLow = long_1.fromNumber(0);
  } else if (lastDigit - firstDigit < 17) {
    var _dIdx = firstDigit;
    significandLow = long_1.fromNumber(digits[_dIdx++]);
    significandHigh = new long_1(0, 0);

    for (; _dIdx <= lastDigit; _dIdx++) {
      significandLow = significandLow.multiply(long_1.fromNumber(10));
      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx]));
    }
  } else {
    var _dIdx2 = firstDigit;
    significandHigh = long_1.fromNumber(digits[_dIdx2++]);

    for (; _dIdx2 <= lastDigit - 17; _dIdx2++) {
      significandHigh = significandHigh.multiply(long_1.fromNumber(10));
      significandHigh = significandHigh.add(long_1.fromNumber(digits[_dIdx2]));
    }

    significandLow = long_1.fromNumber(digits[_dIdx2++]);

    for (; _dIdx2 <= lastDigit; _dIdx2++) {
      significandLow = significandLow.multiply(long_1.fromNumber(10));
      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx2]));
    }
  }

  var significand = multiply64x2(significandHigh, long_1.fromString('100000000000000000'));
  significand.low = significand.low.add(significandLow);

  if (lessThan(significand.low, significandLow)) {
    significand.high = significand.high.add(long_1.fromNumber(1));
  } // Biased exponent


  biasedExponent = exponent + EXPONENT_BIAS;
  var dec = {
    low: long_1.fromNumber(0),
    high: long_1.fromNumber(0)
  }; // Encode combination, exponent, and significand.

  if (significand.high.shiftRightUnsigned(49).and(long_1.fromNumber(1)).equals(long_1.fromNumber(1))) {
    // Encode '11' into bits 1 to 3
    dec.high = dec.high.or(long_1.fromNumber(0x3).shiftLeft(61));
    dec.high = dec.high.or(long_1.fromNumber(biasedExponent).and(long_1.fromNumber(0x3fff).shiftLeft(47)));
    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x7fffffffffff)));
  } else {
    dec.high = dec.high.or(long_1.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x1ffffffffffff)));
  }

  dec.low = significand.low; // Encode sign

  if (isNegative) {
    dec.high = dec.high.or(long_1.fromString('9223372036854775808'));
  } // Encode into a buffer


  var buffer$$1 = Buffer.alloc(16);
  index = 0; // Encode the low 64 bits of the decimal
  // Encode low bits

  buffer$$1[index++] = dec.low.low & 0xff;
  buffer$$1[index++] = dec.low.low >> 8 & 0xff;
  buffer$$1[index++] = dec.low.low >> 16 & 0xff;
  buffer$$1[index++] = dec.low.low >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = dec.low.high & 0xff;
  buffer$$1[index++] = dec.low.high >> 8 & 0xff;
  buffer$$1[index++] = dec.low.high >> 16 & 0xff;
  buffer$$1[index++] = dec.low.high >> 24 & 0xff; // Encode the high 64 bits of the decimal
  // Encode low bits

  buffer$$1[index++] = dec.high.low & 0xff;
  buffer$$1[index++] = dec.high.low >> 8 & 0xff;
  buffer$$1[index++] = dec.high.low >> 16 & 0xff;
  buffer$$1[index++] = dec.high.low >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = dec.high.high & 0xff;
  buffer$$1[index++] = dec.high.high >> 8 & 0xff;
  buffer$$1[index++] = dec.high.high >> 16 & 0xff;
  buffer$$1[index++] = dec.high.high >> 24 & 0xff; // Return the new Decimal128

  return new Decimal128(buffer$$1);
}; // Extract least significant 5 bits


var COMBINATION_MASK = 0x1f; // Extract least significant 14 bits

var EXPONENT_MASK = 0x3fff; // Value of combination field for Inf

var COMBINATION_INFINITY = 30; // Value of combination field for NaN

var COMBINATION_NAN = 31;
/**
 * Create a string representation of the raw Decimal128 value
 *
 * @method
 * @return {string} returns a Decimal128 string representation.
 */

Decimal128.prototype.toString = function () {
  // Note: bits in this routine are referred to starting at 0,
  // from the sign bit, towards the coefficient.
  // bits 0 - 31
  var high; // bits 32 - 63

  var midh; // bits 64 - 95

  var midl; // bits 96 - 127

  var low; // bits 1 - 5

  var combination; // decoded biased exponent (14 bits)

  var biased_exponent; // the number of significand digits

  var significand_digits = 0; // the base-10 digits in the significand

  var significand = new Array(36);

  for (var i = 0; i < significand.length; i++) {
    significand[i] = 0;
  } // read pointer into significand


  var index = 0; // unbiased exponent

  var exponent; // the exponent if scientific notation is used

  var scientific_exponent; // true if the number is zero

  var is_zero = false; // the most signifcant significand bits (50-46)

  var significand_msb; // temporary storage for significand decoding

  var significand128 = {
    parts: new Array(4)
  }; // indexing variables

  var j, k; // Output string

  var string = []; // Unpack index

  index = 0; // Buffer reference

  var buffer$$1 = this.bytes; // Unpack the low 64bits into a long

  low = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  midl = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack the high 64bits into a long

  midh = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  high = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack index

  index = 0; // Create the state of the decimal

  var dec = {
    low: new long_1(low, midl),
    high: new long_1(midh, high)
  };

  if (dec.high.lessThan(long_1.ZERO)) {
    string.push('-');
  } // Decode combination field and exponent


  combination = high >> 26 & COMBINATION_MASK;

  if (combination >> 3 === 3) {
    // Check for 'special' values
    if (combination === COMBINATION_INFINITY) {
      return string.join('') + 'Infinity';
    } else if (combination === COMBINATION_NAN) {
      return 'NaN';
    } else {
      biased_exponent = high >> 15 & EXPONENT_MASK;
      significand_msb = 0x08 + (high >> 14 & 0x01);
    }
  } else {
    significand_msb = high >> 14 & 0x07;
    biased_exponent = high >> 17 & EXPONENT_MASK;
  }

  exponent = biased_exponent - EXPONENT_BIAS; // Create string of significand digits
  // Convert the 114-bit binary number represented by
  // (significand_high, significand_low) to at most 34 decimal
  // digits through modulo and division.

  significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
  significand128.parts[1] = midh;
  significand128.parts[2] = midl;
  significand128.parts[3] = low;

  if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
    is_zero = true;
  } else {
    for (k = 3; k >= 0; k--) {
      var least_digits = 0; // Peform the divide

      var result = divideu128(significand128);
      significand128 = result.quotient;
      least_digits = result.rem.low; // We now have the 9 least significant digits (in base 2).
      // Convert and output to string.

      if (!least_digits) continue;

      for (j = 8; j >= 0; j--) {
        // significand[k * 9 + j] = Math.round(least_digits % 10);
        significand[k * 9 + j] = least_digits % 10; // least_digits = Math.round(least_digits / 10);

        least_digits = Math.floor(least_digits / 10);
      }
    }
  } // Output format options:
  // Scientific - [-]d.dddE(+/-)dd or [-]dE(+/-)dd
  // Regular    - ddd.ddd


  if (is_zero) {
    significand_digits = 1;
    significand[index] = 0;
  } else {
    significand_digits = 36;

    while (!significand[index]) {
      significand_digits = significand_digits - 1;
      index = index + 1;
    }
  }

  scientific_exponent = significand_digits - 1 + exponent; // The scientific exponent checks are dictated by the string conversion
  // specification and are somewhat arbitrary cutoffs.
  //
  // We must check exponent > 0, because if this is the case, the number
  // has trailing zeros.  However, we *cannot* output these trailing zeros,
  // because doing so would change the precision of the value, and would
  // change stored data if the string converted number is round tripped.

  if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
    // Scientific format
    // if there are too many significant digits, we should just be treating numbers
    // as + or - 0 and using the non-scientific exponent (this is for the "invalid
    // representation should be treated as 0/-0" spec cases in decimal128-1.json)
    if (significand_digits > 34) {
      string.push(0);
      if (exponent > 0) string.push('E+' + exponent);else if (exponent < 0) string.push('E' + exponent);
      return string.join('');
    }

    string.push(significand[index++]);
    significand_digits = significand_digits - 1;

    if (significand_digits) {
      string.push('.');
    }

    for (var _i = 0; _i < significand_digits; _i++) {
      string.push(significand[index++]);
    } // Exponent


    string.push('E');

    if (scientific_exponent > 0) {
      string.push('+' + scientific_exponent);
    } else {
      string.push(scientific_exponent);
    }
  } else {
    // Regular format with no decimal place
    if (exponent >= 0) {
      for (var _i2 = 0; _i2 < significand_digits; _i2++) {
        string.push(significand[index++]);
      }
    } else {
      var radix_position = significand_digits + exponent; // non-zero digits before radix

      if (radix_position > 0) {
        for (var _i3 = 0; _i3 < radix_position; _i3++) {
          string.push(significand[index++]);
        }
      } else {
        string.push('0');
      }

      string.push('.'); // add leading zeros after radix

      while (radix_position++ < 0) {
        string.push('0');
      }

      for (var _i4 = 0; _i4 < significand_digits - Math.max(radix_position - 1, 0); _i4++) {
        string.push(significand[index++]);
      }
    }
  }

  return string.join('');
};

Decimal128.prototype.toJSON = function () {
  return {
    $numberDecimal: this.toString()
  };
};
/**
 * @ignore
 */


Decimal128.prototype.toExtendedJSON = function () {
  return {
    $numberDecimal: this.toString()
  };
};
/**
 * @ignore
 */


Decimal128.fromExtendedJSON = function (doc) {
  return Decimal128.fromString(doc.$numberDecimal);
};

Object.defineProperty(Decimal128.prototype, '_bsontype', {
  value: 'Decimal128'
});
var decimal128 = Decimal128;

var MinKey =
/*#__PURE__*/
function () {
  /**
   * Create a MinKey type
   *
   * @return {MinKey} A MinKey instance
   */
  function MinKey() {
    _classCallCheck(this, MinKey);
  }
  /**
   * @ignore
   */


  _createClass(MinKey, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $minKey: 1
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MinKey();
    }
  }]);

  return MinKey;
}();

Object.defineProperty(MinKey.prototype, '_bsontype', {
  value: 'MinKey'
});
var min_key = MinKey;

var MaxKey =
/*#__PURE__*/
function () {
  /**
   * Create a MaxKey type
   *
   * @return {MaxKey} A MaxKey instance
   */
  function MaxKey() {
    _classCallCheck(this, MaxKey);
  }
  /**
   * @ignore
   */


  _createClass(MaxKey, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $maxKey: 1
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MaxKey();
    }
  }]);

  return MaxKey;
}();

Object.defineProperty(MaxKey.prototype, '_bsontype', {
  value: 'MaxKey'
});
var max_key = MaxKey;

var DBRef =
/*#__PURE__*/
function () {
  /**
   * Create a DBRef type
   *
   * @param {string} collection the collection name.
   * @param {ObjectId} oid the reference ObjectId.
   * @param {string} [db] optional db name, if omitted the reference is local to the current db.
   * @return {DBRef}
   */
  function DBRef(collection, oid, db, fields) {
    _classCallCheck(this, DBRef);

    // check if namespace has been provided
    var parts = collection.split('.');

    if (parts.length === 2) {
      db = parts.shift();
      collection = parts.shift();
    }

    this.collection = collection;
    this.oid = oid;
    this.db = db;
    this.fields = fields || {};
  }
  /**
   * @ignore
   * @api private
   */


  _createClass(DBRef, [{
    key: "toJSON",
    value: function toJSON() {
      var o = Object.assign({
        $ref: this.collection,
        $id: this.oid
      }, this.fields);
      if (this.db != null) o.$db = this.db;
      return o;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var o = {
        $ref: this.collection,
        $id: this.oid
      };
      if (this.db) o.$db = this.db;
      o = Object.assign(o, this.fields);
      return o;
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var copy = Object.assign({}, doc);
      ['$ref', '$id', '$db'].forEach(function (k) {
        return delete copy[k];
      });
      return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
    }
  }]);

  return DBRef;
}();

Object.defineProperty(DBRef.prototype, '_bsontype', {
  value: 'DBRef'
});
var db_ref = DBRef;

var Binary =
/*#__PURE__*/
function () {
  /**
   * Create a Binary type
   *
   * Sub types
   *  - **BSON.BSON_BINARY_SUBTYPE_DEFAULT**, default BSON type.
   *  - **BSON.BSON_BINARY_SUBTYPE_FUNCTION**, BSON function type.
   *  - **BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY**, BSON byte array type.
   *  - **BSON.BSON_BINARY_SUBTYPE_UUID**, BSON uuid type.
   *  - **BSON.BSON_BINARY_SUBTYPE_MD5**, BSON md5 type.
   *  - **BSON.BSON_BINARY_SUBTYPE_USER_DEFINED**, BSON user defined type.
   *
   * @param {Buffer} buffer a buffer object containing the binary data.
   * @param {Number} [subType] the option binary type.
   * @return {Binary}
   */
  function Binary(buffer$$1, subType) {
    _classCallCheck(this, Binary);

    if (buffer$$1 != null && !(typeof buffer$$1 === 'string') && !Buffer.isBuffer(buffer$$1) && !(buffer$$1 instanceof Uint8Array) && !Array.isArray(buffer$$1)) {
      throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
    }

    this.sub_type = subType == null ? BSON_BINARY_SUBTYPE_DEFAULT : subType;
    this.position = 0;

    if (buffer$$1 != null && !(buffer$$1 instanceof Number)) {
      // Only accept Buffer, Uint8Array or Arrays
      if (typeof buffer$$1 === 'string') {
        // Different ways of writing the length of the string for the different types
        if (typeof Buffer !== 'undefined') {
          this.buffer = Buffer.from(buffer$$1);
        } else if (typeof Uint8Array !== 'undefined' || Array.isArray(buffer$$1)) {
          this.buffer = writeStringToArray(buffer$$1);
        } else {
          throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
        }
      } else {
        this.buffer = buffer$$1;
      }

      this.position = buffer$$1.length;
    } else {
      if (typeof Buffer !== 'undefined') {
        this.buffer = Buffer.alloc(Binary.BUFFER_SIZE);
      } else if (typeof Uint8Array !== 'undefined') {
        this.buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE));
      } else {
        this.buffer = new Array(Binary.BUFFER_SIZE);
      }
    }
  }
  /**
   * Updates this binary with byte_value.
   *
   * @method
   * @param {string} byte_value a single byte we wish to write.
   */


  _createClass(Binary, [{
    key: "put",
    value: function put(byte_value) {
      // If it's a string and a has more than one character throw an error
      if (byte_value['length'] != null && typeof byte_value !== 'number' && byte_value.length !== 1) throw new TypeError('only accepts single character String, Uint8Array or Array');
      if (typeof byte_value !== 'number' && byte_value < 0 || byte_value > 255) throw new TypeError('only accepts number in a valid unsigned byte range 0-255'); // Decode the byte value once

      var decoded_byte = null;

      if (typeof byte_value === 'string') {
        decoded_byte = byte_value.charCodeAt(0);
      } else if (byte_value['length'] != null) {
        decoded_byte = byte_value[0];
      } else {
        decoded_byte = byte_value;
      }

      if (this.buffer.length > this.position) {
        this.buffer[this.position++] = decoded_byte;
      } else {
        if (typeof Buffer !== 'undefined' && Buffer.isBuffer(this.buffer)) {
          // Create additional overflow buffer
          var buffer$$1 = Buffer.alloc(Binary.BUFFER_SIZE + this.buffer.length); // Combine the two buffers together

          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
          this.buffer = buffer$$1;
          this.buffer[this.position++] = decoded_byte;
        } else {
          var _buffer = null; // Create a new buffer (typed or normal array)

          if (isUint8Array(this.buffer)) {
            _buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE + this.buffer.length));
          } else {
            _buffer = new Array(Binary.BUFFER_SIZE + this.buffer.length);
          } // We need to copy all the content to the new array


          for (var i = 0; i < this.buffer.length; i++) {
            _buffer[i] = this.buffer[i];
          } // Reassign the buffer


          this.buffer = _buffer; // Write the byte

          this.buffer[this.position++] = decoded_byte;
        }
      }
    }
    /**
     * Writes a buffer or string to the binary.
     *
     * @method
     * @param {(Buffer|string)} string a string or buffer to be written to the Binary BSON object.
     * @param {number} offset specify the binary of where to write the content.
     * @return {null}
     */

  }, {
    key: "write",
    value: function write(string, offset) {
      offset = typeof offset === 'number' ? offset : this.position; // If the buffer is to small let's extend the buffer

      if (this.buffer.length < offset + string.length) {
        var buffer$$1 = null; // If we are in node.js

        if (typeof Buffer !== 'undefined' && Buffer.isBuffer(this.buffer)) {
          buffer$$1 = Buffer.alloc(this.buffer.length + string.length);
          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
        } else if (isUint8Array(this.buffer)) {
          // Create a new buffer
          buffer$$1 = new Uint8Array(new ArrayBuffer(this.buffer.length + string.length)); // Copy the content

          for (var i = 0; i < this.position; i++) {
            buffer$$1[i] = this.buffer[i];
          }
        } // Assign the new buffer


        this.buffer = buffer$$1;
      }

      if (typeof Buffer !== 'undefined' && Buffer.isBuffer(string) && Buffer.isBuffer(this.buffer)) {
        string.copy(this.buffer, offset, 0, string.length);
        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length
      } else if (typeof Buffer !== 'undefined' && typeof string === 'string' && Buffer.isBuffer(this.buffer)) {
        this.buffer.write(string, offset, 'binary');
        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length;
      } else if (isUint8Array(string) || Array.isArray(string) && typeof string !== 'string') {
        for (var _i = 0; _i < string.length; _i++) {
          this.buffer[offset++] = string[_i];
        }

        this.position = offset > this.position ? offset : this.position;
      } else if (typeof string === 'string') {
        for (var _i2 = 0; _i2 < string.length; _i2++) {
          this.buffer[offset++] = string.charCodeAt(_i2);
        }

        this.position = offset > this.position ? offset : this.position;
      }
    }
    /**
     * Reads **length** bytes starting at **position**.
     *
     * @method
     * @param {number} position read from the given position in the Binary.
     * @param {number} length the number of bytes to read.
     * @return {Buffer}
     */

  }, {
    key: "read",
    value: function read(position, length) {
      length = length && length > 0 ? length : this.position; // Let's return the data based on the type we have

      if (this.buffer['slice']) {
        return this.buffer.slice(position, position + length);
      } // Create a buffer to keep the result


      var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(length)) : new Array(length);

      for (var i = 0; i < length; i++) {
        buffer$$1[i] = this.buffer[position++];
      } // Return the buffer


      return buffer$$1;
    }
    /**
     * Returns the value of this binary as a string.
     *
     * @method
     * @return {string}
     */

  }, {
    key: "value",
    value: function value(asRaw) {
      asRaw = asRaw == null ? false : asRaw; // Optimize to serialize for the situation where the data == size of buffer

      if (asRaw && typeof Buffer !== 'undefined' && Buffer.isBuffer(this.buffer) && this.buffer.length === this.position) return this.buffer; // If it's a node.js buffer object

      if (typeof Buffer !== 'undefined' && Buffer.isBuffer(this.buffer)) {
        return asRaw ? this.buffer.slice(0, this.position) : this.buffer.toString('binary', 0, this.position);
      } else {
        if (asRaw) {
          // we support the slice command use it
          if (this.buffer['slice'] != null) {
            return this.buffer.slice(0, this.position);
          } else {
            // Create a new buffer to copy content to
            var newBuffer = isUint8Array(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position); // Copy content

            for (var i = 0; i < this.position; i++) {
              newBuffer[i] = this.buffer[i];
            } // Return the buffer


            return newBuffer;
          }
        } else {
          return convertArraytoUtf8BinaryString(this.buffer, 0, this.position);
        }
      }
    }
    /**
     * Length.
     *
     * @method
     * @return {number} the length of the binary.
     */

  }, {
    key: "length",
    value: function length() {
      return this.position;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.buffer != null ? this.buffer.toString('base64') : '';
    }
    /**
     * @ignore
     */

  }, {
    key: "toString",
    value: function toString(format) {
      return this.buffer != null ? this.buffer.slice(0, this.position).toString(format) : '';
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var base64String = Buffer.isBuffer(this.buffer) ? this.buffer.toString('base64') : Buffer.from(this.buffer).toString('base64');
      var subType = Number(this.sub_type).toString(16);
      return {
        $binary: {
          base64: base64String,
          subType: subType.length === 1 ? '0' + subType : subType
        }
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
      var data = new Buffer(doc.$binary.base64, 'base64');
      return new Binary(data, type);
    }
  }]);

  return Binary;
}();
/**
 * Binary default subtype
 * @ignore
 */


var BSON_BINARY_SUBTYPE_DEFAULT = 0;

function isUint8Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Uint8Array]';
}
/**
 * @ignore
 */


function writeStringToArray(data) {
  // Create a buffer
  var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(data.length)) : new Array(data.length); // Write the content to the buffer

  for (var i = 0; i < data.length; i++) {
    buffer$$1[i] = data.charCodeAt(i);
  } // Write the string to the buffer


  return buffer$$1;
}
/**
 * Convert Array ot Uint8Array to Binary String
 *
 * @ignore
 */


function convertArraytoUtf8BinaryString(byteArray, startIndex, endIndex) {
  var result = '';

  for (var i = startIndex; i < endIndex; i++) {
    result = result + String.fromCharCode(byteArray[i]);
  }

  return result;
}

Binary.BUFFER_SIZE = 256;
/**
 * Default BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_DEFAULT = 0;
/**
 * Function BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_FUNCTION = 1;
/**
 * Byte Array BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_BYTE_ARRAY = 2;
/**
 * OLD UUID BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_UUID_OLD = 3;
/**
 * UUID BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_UUID = 4;
/**
 * MD5 BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_MD5 = 5;
/**
 * User BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_USER_DEFINED = 128;
Object.defineProperty(Binary.prototype, '_bsontype', {
  value: 'Binary'
});
var binary = Binary;

var constants = {
  // BSON MAX VALUES
  BSON_INT32_MAX: 0x7fffffff,
  BSON_INT32_MIN: -0x80000000,
  BSON_INT64_MAX: Math.pow(2, 63) - 1,
  BSON_INT64_MIN: -Math.pow(2, 63),
  // JS MAX PRECISE VALUES
  JS_INT_MAX: 0x20000000000000,
  // Any integer up to 2^53 can be precisely represented by a double.
  JS_INT_MIN: -0x20000000000000,
  // Any integer down to -2^53 can be precisely represented by a double.

  /**
   * Number BSON Type
   *
   * @classconstant BSON_DATA_NUMBER
   **/
  BSON_DATA_NUMBER: 1,

  /**
   * String BSON Type
   *
   * @classconstant BSON_DATA_STRING
   **/
  BSON_DATA_STRING: 2,

  /**
   * Object BSON Type
   *
   * @classconstant BSON_DATA_OBJECT
   **/
  BSON_DATA_OBJECT: 3,

  /**
   * Array BSON Type
   *
   * @classconstant BSON_DATA_ARRAY
   **/
  BSON_DATA_ARRAY: 4,

  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_BINARY
   **/
  BSON_DATA_BINARY: 5,

  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_UNDEFINED
   **/
  BSON_DATA_UNDEFINED: 6,

  /**
   * ObjectId BSON Type
   *
   * @classconstant BSON_DATA_OID
   **/
  BSON_DATA_OID: 7,

  /**
   * Boolean BSON Type
   *
   * @classconstant BSON_DATA_BOOLEAN
   **/
  BSON_DATA_BOOLEAN: 8,

  /**
   * Date BSON Type
   *
   * @classconstant BSON_DATA_DATE
   **/
  BSON_DATA_DATE: 9,

  /**
   * null BSON Type
   *
   * @classconstant BSON_DATA_NULL
   **/
  BSON_DATA_NULL: 10,

  /**
   * RegExp BSON Type
   *
   * @classconstant BSON_DATA_REGEXP
   **/
  BSON_DATA_REGEXP: 11,

  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_DBPOINTER
   **/
  BSON_DATA_DBPOINTER: 12,

  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_CODE
   **/
  BSON_DATA_CODE: 13,

  /**
   * Symbol BSON Type
   *
   * @classconstant BSON_DATA_SYMBOL
   **/
  BSON_DATA_SYMBOL: 14,

  /**
   * Code with Scope BSON Type
   *
   * @classconstant BSON_DATA_CODE_W_SCOPE
   **/
  BSON_DATA_CODE_W_SCOPE: 15,

  /**
   * 32 bit Integer BSON Type
   *
   * @classconstant BSON_DATA_INT
   **/
  BSON_DATA_INT: 16,

  /**
   * Timestamp BSON Type
   *
   * @classconstant BSON_DATA_TIMESTAMP
   **/
  BSON_DATA_TIMESTAMP: 17,

  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_LONG
   **/
  BSON_DATA_LONG: 18,

  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_DECIMAL128
   **/
  BSON_DATA_DECIMAL128: 19,

  /**
   * MinKey BSON Type
   *
   * @classconstant BSON_DATA_MIN_KEY
   **/
  BSON_DATA_MIN_KEY: 0xff,

  /**
   * MaxKey BSON Type
   *
   * @classconstant BSON_DATA_MAX_KEY
   **/
  BSON_DATA_MAX_KEY: 0x7f,

  /**
   * Binary Default Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_DEFAULT
   **/
  BSON_BINARY_SUBTYPE_DEFAULT: 0,

  /**
   * Binary Function Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_FUNCTION
   **/
  BSON_BINARY_SUBTYPE_FUNCTION: 1,

  /**
   * Binary Byte Array Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_BYTE_ARRAY
   **/
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,

  /**
   * Binary UUID Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_UUID
   **/
  BSON_BINARY_SUBTYPE_UUID: 3,

  /**
   * Binary MD5 Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_MD5
   **/
  BSON_BINARY_SUBTYPE_MD5: 4,

  /**
   * Binary User Defined Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_USER_DEFINED
   **/
  BSON_BINARY_SUBTYPE_USER_DEFINED: 128
};

// const Map = require('./map');

/**
 * @namespace EJSON
 */
// all the types where we don't need to do any special processing and can just pass the EJSON
//straight to type.fromExtendedJSON


var keysToCodecs = {
  $oid: objectid,
  $binary: binary,
  $symbol: symbol,
  $numberInt: int_32,
  $numberDecimal: decimal128,
  $numberDouble: double_1,
  $numberLong: long_1,
  $minKey: min_key,
  $maxKey: max_key,
  $regularExpression: regexp,
  $timestamp: timestamp
};

function deserializeValue(self, key, value, options) {
  if (typeof value === 'number') {
    if (options.relaxed) {
      return value;
    } // if it's an integer, should interpret as smallest BSON integer
    // that can represent it exactly. (if out of range, interpret as double.)


    if (Math.floor(value) === value) {
      if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) return new int_32(value);
      if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) return new long_1.fromNumber(value);
    } // If the number is a non-integer or out of integer range, should interpret as BSON Double.


    return new double_1(value);
  } // from here on out we're looking for bson types, so bail if its not an object


  if (value == null || _typeof(value) !== 'object') return value; // upgrade deprecated undefined to null

  if (value.$undefined) return null;
  var keys = Object.keys(value).filter(function (k) {
    return k.startsWith('$') && value[k] != null;
  });

  for (var i = 0; i < keys.length; i++) {
    var c = keysToCodecs[keys[i]];
    if (c) return c.fromExtendedJSON(value, options);
  }

  if (value.$date != null) {
    var d = value.$date;
    var date = new Date();
    if (typeof d === 'string') date.setTime(Date.parse(d));else if (d instanceof long_1) date.setTime(d.toNumber());else if (typeof d === 'number' && options.relaxed) date.setTime(d);
    return date;
  }

  if (value.$code != null) {
    var copy = Object.assign({}, value);

    if (value.$scope) {
      copy.$scope = deserializeValue(self, null, value.$scope);
    }

    return code.fromExtendedJSON(value);
  }

  if (value.$ref != null || value.$dbPointer != null) {
    var v = value.$ref ? value : value.$dbPointer; // we run into this in a "degenerate EJSON" case (with $id and $ref order flipped)
    // because of the order JSON.parse goes through the document

    if (v instanceof db_ref) return v;
    var dollarKeys = Object.keys(v).filter(function (k) {
      return k.startsWith('$');
    });
    var valid = true;
    dollarKeys.forEach(function (k) {
      if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
    }); // only make DBRef if $ keys are all valid

    if (valid) return db_ref.fromExtendedJSON(v);
  }

  return value;
}
/**
 * Parse an Extended JSON string, constructing the JavaScript value or object described by that
 * string.
 *
 * @memberof EJSON
 * @param {string} text
 * @param {object} [options] Optional settings
 * @param {boolean} [options.relaxed=true] Attempt to return native JS types where possible, rather than BSON types (if true)
 * @return {object}
 *
 * @example
 * const { EJSON } = require('bson');
 * const text = '{ "int32": { "$numberInt": "10" } }';
 *
 * // prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
 * console.log(EJSON.parse(text, { relaxed: false }));
 *
 * // prints { int32: 10 }
 * console.log(EJSON.parse(text));
 */


function parse(text, options) {
  var _this = this;

  options = Object.assign({}, {
    relaxed: true
  }, options); // relaxed implies not strict

  if (typeof options.relaxed === 'boolean') options.strict = !options.relaxed;
  if (typeof options.strict === 'boolean') options.relaxed = !options.strict;
  return JSON.parse(text, function (key, value) {
    return deserializeValue(_this, key, value, options);
  });
} //
// Serializer
//
// MAX INT32 boundaries


var BSON_INT32_MAX = 0x7fffffff,
    BSON_INT32_MIN = -0x80000000,
    BSON_INT64_MAX = 0x7fffffffffffffff,
    BSON_INT64_MIN = -0x8000000000000000;
/**
 * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
 * function is specified or optionally including only the specified properties if a replacer array
 * is specified.
 *
 * @memberof EJSON
 * @param {object} value The value to convert to extended JSON
 * @param {function|array} [replacer] A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
 * @param {string|number} [space] A String or Number object that's used to insert white space into the output JSON string for readability purposes.
 * @param {object} [options] Optional settings
 * @param {boolean} [options.relaxed=true] Enabled Extended JSON's `relaxed` mode
 * @returns {string}
 *
 * @example
 * const { EJSON } = require('bson');
 * const Int32 = require('mongodb').Int32;
 * const doc = { int32: new Int32(10) };
 *
 * // prints '{"int32":{"$numberInt":"10"}}'
 * console.log(EJSON.stringify(doc, { relaxed: false }));
 *
 * // prints '{"int32":10}'
 * console.log(EJSON.stringify(doc));
 */

function stringify(value, replacer, space, options) {
  if (space != null && _typeof(space) === 'object') options = space, space = 0;
  if (replacer != null && _typeof(replacer) === 'object') options = replacer, replacer = null, space = 0;
  options = Object.assign({}, {
    relaxed: true
  }, options);
  var doc = Array.isArray(value) ? serializeArray(value, options) : serializeDocument(value, options);
  return JSON.stringify(doc, replacer, space);
}
/**
 * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
 *
 * @memberof EJSON
 * @param {object} bson The object to serialize
 * @param {object} [options] Optional settings passed to the `stringify` function
 * @return {object}
 */


function serialize(bson, options) {
  options = options || {};
  return JSON.parse(stringify(bson, options));
}
/**
 * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
 *
 * @memberof EJSON
 * @param {object} ejson The Extended JSON object to deserialize
 * @param {object} [options] Optional settings passed to the parse method
 * @return {object}
 */


function deserialize(ejson, options) {
  options = options || {};
  return parse(JSON.stringify(ejson), options);
}

function serializeArray(array, options) {
  return array.map(function (v) {
    return serializeValue(v, options);
  });
}

function getISOString(date) {
  var isoStr = date.toISOString(); // we should only show milliseconds in timestamp if they're non-zero

  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
}

function serializeValue(value, options) {
  if (Array.isArray(value)) return serializeArray(value, options);
  if (value === undefined) return null;

  if (value instanceof Date) {
    var dateNum = value.getTime(),
        // is it in year range 1970-9999?
    inRange = dateNum > -1 && dateNum < 253402318800000;
    return options.relaxed && inRange ? {
      $date: getISOString(value)
    } : {
      $date: {
        $numberLong: value.getTime().toString()
      }
    };
  }

  if (typeof value === 'number' && !options.relaxed) {
    // it's an integer
    if (Math.floor(value) === value) {
      var int32Range = value >= BSON_INT32_MIN && value <= BSON_INT32_MAX,
          int64Range = value >= BSON_INT64_MIN && value <= BSON_INT64_MAX; // interpret as being of the smallest BSON integer type that can represent the number exactly

      if (int32Range) return {
        $numberInt: value.toString()
      };
      if (int64Range) return {
        $numberLong: value.toString()
      };
    }

    return {
      $numberDouble: value.toString()
    };
  }

  if (value != null && _typeof(value) === 'object') return serializeDocument(value, options);
  return value;
}

function serializeDocument(doc, options) {
  if (doc == null || _typeof(doc) !== 'object') throw new Error('not an object instance'); // the document itself is a BSON type

  if (doc._bsontype && typeof doc.toExtendedJSON === 'function') {
    if (doc._bsontype === 'Code' && doc.scope) {
      doc.scope = serializeDocument(doc.scope, options);
    } else if (doc._bsontype === 'DBRef' && doc.oid) {
      doc.oid = serializeDocument(doc.oid, options);
    }

    return doc.toExtendedJSON(options);
  } // the document is an object with nested BSON types


  var _doc = {};

  for (var name in doc) {
    var val = doc[name];

    if (Array.isArray(val)) {
      _doc[name] = serializeArray(val, options);
    } else if (val != null && typeof val.toExtendedJSON === 'function') {
      if (val._bsontype === 'Code' && val.scope) {
        val.scope = serializeDocument(val.scope, options);
      } else if (val._bsontype === 'DBRef' && val.oid) {
        val.oid = serializeDocument(val.oid, options);
      }

      _doc[name] = val.toExtendedJSON(options);
    } else if (val instanceof Date) {
      _doc[name] = serializeValue(val, options);
    } else if (val != null && _typeof(val) === 'object') {
      _doc[name] = serializeDocument(val, options);
    }

    _doc[name] = serializeValue(val, options);

    if (val instanceof RegExp) {
      var flags = val.flags;

      if (flags === undefined) {
        flags = val.toString().match(/[gimuy]*$/)[0];
      }

      var rx = new regexp(val.source, flags);
      _doc[name] = rx.toExtendedJSON();
    }
  }

  return _doc;
}

var extended_json = {
  parse: parse,
  deserialize: deserialize,
  serialize: serialize,
  stringify: stringify
};

var FIRST_BIT = 0x80;
var FIRST_TWO_BITS = 0xc0;
var FIRST_THREE_BITS = 0xe0;
var FIRST_FOUR_BITS = 0xf0;
var FIRST_FIVE_BITS = 0xf8;
var TWO_BIT_CHAR = 0xc0;
var THREE_BIT_CHAR = 0xe0;
var FOUR_BIT_CHAR = 0xf0;
var CONTINUING_CHAR = 0x80;
/**
 * Determines if the passed in bytes are valid utf8
 * @param {Buffer|Uint8Array} bytes An array of 8-bit bytes. Must be indexable and have length property
 * @param {Number} start The index to start validating
 * @param {Number} end The index to end validating
 * @returns {boolean} True if valid utf8
 */

function validateUtf8(bytes, start, end) {
  var continuation = 0;

  for (var i = start; i < end; i += 1) {
    var byte = bytes[i];

    if (continuation) {
      if ((byte & FIRST_TWO_BITS) !== CONTINUING_CHAR) {
        return false;
      }

      continuation -= 1;
    } else if (byte & FIRST_BIT) {
      if ((byte & FIRST_THREE_BITS) === TWO_BIT_CHAR) {
        continuation = 1;
      } else if ((byte & FIRST_FOUR_BITS) === THREE_BIT_CHAR) {
        continuation = 2;
      } else if ((byte & FIRST_FIVE_BITS) === FOUR_BIT_CHAR) {
        continuation = 3;
      } else {
        return false;
      }
    }
  }

  return !continuation;
}

var validateUtf8_1 = validateUtf8;
var validate_utf8 = {
  validateUtf8: validateUtf8_1
};

var Buffer$2 = buffer__WEBPACK_IMPORTED_MODULE_1___default.a.Buffer;
var validateUtf8$1 = validate_utf8.validateUtf8; // Internal long versions

var JS_INT_MAX_LONG = long_1.fromNumber(constants.JS_INT_MAX);
var JS_INT_MIN_LONG = long_1.fromNumber(constants.JS_INT_MIN);
var functionCache = {};

function deserialize$1(buffer$$1, options, isArray) {
  options = options == null ? {} : options;
  var index = options && options.index ? options.index : 0; // Read the document size

  var size = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

  if (size < 5) {
    throw new Error("bson size must be >= 5, is ".concat(size));
  }

  if (options.allowObjectSmallerThanBufferSize && buffer$$1.length < size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must be >= bson size ").concat(size));
  }

  if (!options.allowObjectSmallerThanBufferSize && buffer$$1.length !== size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must === bson size ").concat(size));
  }

  if (size + index > buffer$$1.length) {
    throw new Error("(bson size ".concat(size, " + options.index ").concat(index, " must be <= buffer length ").concat(Buffer$2.byteLength(buffer$$1), ")"));
  } // Illegal end value


  if (buffer$$1[index + size - 1] !== 0) {
    throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
  } // Start deserializtion


  return deserializeObject(buffer$$1, index, options, isArray);
}

function deserializeObject(buffer$$1, index, options, isArray) {
  var evalFunctions = options['evalFunctions'] == null ? false : options['evalFunctions'];
  var cacheFunctions = options['cacheFunctions'] == null ? false : options['cacheFunctions'];
  var cacheFunctionsCrc32 = options['cacheFunctionsCrc32'] == null ? false : options['cacheFunctionsCrc32'];
  if (!cacheFunctionsCrc32) var crc32 = null;
  var fieldsAsRaw = options['fieldsAsRaw'] == null ? null : options['fieldsAsRaw']; // Return raw bson buffer instead of parsing it

  var raw = options['raw'] == null ? false : options['raw']; // Return BSONRegExp objects instead of native regular expressions

  var bsonRegExp = typeof options['bsonRegExp'] === 'boolean' ? options['bsonRegExp'] : false; // Controls the promotion of values vs wrapper classes

  var promoteBuffers = options['promoteBuffers'] == null ? false : options['promoteBuffers'];
  var promoteLongs = options['promoteLongs'] == null ? true : options['promoteLongs'];
  var promoteValues = options['promoteValues'] == null ? true : options['promoteValues']; // Set the start index

  var startIndex = index; // Validate that we have at least 4 bytes of buffer

  if (buffer$$1.length < 5) throw new Error('corrupt bson message < 5 bytes long'); // Read the document size

  var size = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Ensure buffer is valid size

  if (size < 5 || size > buffer$$1.length) throw new Error('corrupt bson message'); // Create holding object

  var object = isArray ? [] : {}; // Used for arrays to skip having to perform utf8 decoding

  var arrayIndex = 0;
  var done = false; // While we have more left data left keep parsing

  while (!done) {
    // Read the type
    var elementType = buffer$$1[index++]; // If we get a zero it's the last byte, exit

    if (elementType === 0) break; // Get the start search index

    var i = index; // Locate the end of the c string

    while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
      i++;
    } // If are at the end of the buffer there is a problem with the document


    if (i >= Buffer$2.byteLength(buffer$$1)) throw new Error('Bad BSON Document: illegal CString');
    var name = isArray ? arrayIndex++ : buffer$$1.toString('utf8', index, i);
    index = i + 1;

    if (elementType === constants.BSON_DATA_STRING) {
      var stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (stringSize <= 0 || stringSize > buffer$$1.length - index || buffer$$1[index + stringSize - 1] !== 0) throw new Error('bad string length in bson');

      if (!validateUtf8$1(buffer$$1, index, index + stringSize - 1)) {
        throw new Error('Invalid UTF-8 string in BSON document');
      }

      var s = buffer$$1.toString('utf8', index, index + stringSize - 1);
      object[name] = s;
      index = index + stringSize;
    } else if (elementType === constants.BSON_DATA_OID) {
      var oid = Buffer$2.alloc(12);
      buffer$$1.copy(oid, 0, index, index + 12);
      object[name] = new objectid(oid);
      index = index + 12;
    } else if (elementType === constants.BSON_DATA_INT && promoteValues === false) {
      object[name] = new int_32(buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24);
    } else if (elementType === constants.BSON_DATA_INT) {
      object[name] = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    } else if (elementType === constants.BSON_DATA_NUMBER && promoteValues === false) {
      object[name] = new double_1(buffer$$1.readDoubleLE(index));
      index = index + 8;
    } else if (elementType === constants.BSON_DATA_NUMBER) {
      object[name] = buffer$$1.readDoubleLE(index);
      index = index + 8;
    } else if (elementType === constants.BSON_DATA_DATE) {
      var lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      object[name] = new Date(new long_1(lowBits, highBits).toNumber());
    } else if (elementType === constants.BSON_DATA_BOOLEAN) {
      if (buffer$$1[index] !== 0 && buffer$$1[index] !== 1) throw new Error('illegal boolean type value');
      object[name] = buffer$$1[index++] === 1;
    } else if (elementType === constants.BSON_DATA_OBJECT) {
      var _index = index;
      var objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      if (objectSize <= 0 || objectSize > buffer$$1.length - index) throw new Error('bad embedded document length in bson'); // We have a raw value

      if (raw) {
        object[name] = buffer$$1.slice(index, index + objectSize);
      } else {
        object[name] = deserializeObject(buffer$$1, _index, options, false);
      }

      index = index + objectSize;
    } else if (elementType === constants.BSON_DATA_ARRAY) {
      var _index2 = index;

      var _objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

      var arrayOptions = options; // Stop index

      var stopIndex = index + _objectSize; // All elements of array to be returned as raw bson

      if (fieldsAsRaw && fieldsAsRaw[name]) {
        arrayOptions = {};

        for (var n in options) {
          arrayOptions[n] = options[n];
        }

        arrayOptions['raw'] = true;
      }

      object[name] = deserializeObject(buffer$$1, _index2, arrayOptions, true);
      index = index + _objectSize;
      if (buffer$$1[index - 1] !== 0) throw new Error('invalid array terminator byte');
      if (index !== stopIndex) throw new Error('corrupted array bson');
    } else if (elementType === constants.BSON_DATA_UNDEFINED) {
      object[name] = undefined;
    } else if (elementType === constants.BSON_DATA_NULL) {
      object[name] = null;
    } else if (elementType === constants.BSON_DATA_LONG) {
      // Unpack the low and high bits
      var _lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      var _highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      var long$$1 = new long_1(_lowBits, _highBits); // Promote the long if possible

      if (promoteLongs && promoteValues === true) {
        object[name] = long$$1.lessThanOrEqual(JS_INT_MAX_LONG) && long$$1.greaterThanOrEqual(JS_INT_MIN_LONG) ? long$$1.toNumber() : long$$1;
      } else {
        object[name] = long$$1;
      }
    } else if (elementType === constants.BSON_DATA_DECIMAL128) {
      // Buffer to contain the decimal bytes
      var bytes = Buffer$2.alloc(16); // Copy the next 16 bytes into the bytes buffer

      buffer$$1.copy(bytes, 0, index, index + 16); // Update index

      index = index + 16; // Assign the new Decimal128 value

      var decimal128$$1 = new decimal128(bytes); // If we have an alternative mapper use that

      object[name] = decimal128$$1.toObject ? decimal128$$1.toObject() : decimal128$$1;
    } else if (elementType === constants.BSON_DATA_BINARY) {
      var binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var totalBinarySize = binarySize;
      var subType = buffer$$1[index++]; // Did we have a negative binary size, throw

      if (binarySize < 0) throw new Error('Negative binary type element size found'); // Is the length longer than the document

      if (binarySize > Buffer$2.byteLength(buffer$$1)) throw new Error('Binary type size larger than document size'); // Decode as raw Buffer object if options specifies it

      if (buffer$$1['slice'] != null) {
        // If we have subtype 2 skip the 4 bytes for the size
        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
        }

        if (promoteBuffers && promoteValues) {
          object[name] = buffer$$1.slice(index, index + binarySize);
        } else {
          object[name] = new binary(buffer$$1.slice(index, index + binarySize), subType);
        }
      } else {
        var _buffer = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(binarySize)) : new Array(binarySize); // If we have subtype 2 skip the 4 bytes for the size


        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
        } // Copy the data


        for (i = 0; i < binarySize; i++) {
          _buffer[i] = buffer$$1[index + i];
        }

        if (promoteBuffers && promoteValues) {
          object[name] = _buffer;
        } else {
          object[name] = new binary(_buffer, subType);
        }
      } // Update the index


      index = index + binarySize;
    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === false) {
      // Get the start search index
      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var source = buffer$$1.toString('utf8', index, i); // Create the regexp

      index = i + 1; // Get the start search index

      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var regExpOptions = buffer$$1.toString('utf8', index, i);
      index = i + 1; // For each option add the corresponding one for javascript

      var optionsArray = new Array(regExpOptions.length); // Parse options

      for (i = 0; i < regExpOptions.length; i++) {
        switch (regExpOptions[i]) {
          case 'm':
            optionsArray[i] = 'm';
            break;

          case 's':
            optionsArray[i] = 'g';
            break;

          case 'i':
            optionsArray[i] = 'i';
            break;
        }
      }

      object[name] = new RegExp(source, optionsArray.join(''));
    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === true) {
      // Get the start search index
      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var _source = buffer$$1.toString('utf8', index, i);

      index = i + 1; // Get the start search index

      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var _regExpOptions = buffer$$1.toString('utf8', index, i);

      index = i + 1; // Set the object

      object[name] = new regexp(_source, _regExpOptions);
    } else if (elementType === constants.BSON_DATA_SYMBOL) {
      var _stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      if (_stringSize <= 0 || _stringSize > buffer$$1.length - index || buffer$$1[index + _stringSize - 1] !== 0) throw new Error('bad string length in bson'); // symbol is deprecated - upgrade to string.

      object[name] = buffer$$1.toString('utf8', index, index + _stringSize - 1);
      index = index + _stringSize;
    } else if (elementType === constants.BSON_DATA_TIMESTAMP) {
      var _lowBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      var _highBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      object[name] = new timestamp(_lowBits2, _highBits2);
    } else if (elementType === constants.BSON_DATA_MIN_KEY) {
      object[name] = new min_key();
    } else if (elementType === constants.BSON_DATA_MAX_KEY) {
      object[name] = new max_key();
    } else if (elementType === constants.BSON_DATA_CODE) {
      var _stringSize2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      if (_stringSize2 <= 0 || _stringSize2 > buffer$$1.length - index || buffer$$1[index + _stringSize2 - 1] !== 0) throw new Error('bad string length in bson');
      var functionString = buffer$$1.toString('utf8', index, index + _stringSize2 - 1); // If we are evaluating the functions

      if (evalFunctions) {
        // If we have cache enabled let's look for the md5 of the function in the cache
        if (cacheFunctions) {
          var hash = cacheFunctionsCrc32 ? crc32(functionString) : functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval

          object[name] = isolateEvalWithHash(functionCache, hash, functionString, object);
        } else {
          object[name] = isolateEval(functionString);
        }
      } else {
        object[name] = new code(functionString);
      } // Update parse index position


      index = index + _stringSize2;
    } else if (elementType === constants.BSON_DATA_CODE_W_SCOPE) {
      var totalSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Element cannot be shorter than totalSize + stringSize + documentSize + terminator

      if (totalSize < 4 + 4 + 4 + 1) {
        throw new Error('code_w_scope total size shorter minimum expected length');
      } // Get the code string size


      var _stringSize3 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


      if (_stringSize3 <= 0 || _stringSize3 > buffer$$1.length - index || buffer$$1[index + _stringSize3 - 1] !== 0) throw new Error('bad string length in bson'); // Javascript function

      var _functionString = buffer$$1.toString('utf8', index, index + _stringSize3 - 1); // Update parse index position


      index = index + _stringSize3; // Parse the element

      var _index3 = index; // Decode the size of the object document

      var _objectSize2 = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24; // Decode the scope object


      var scopeObject = deserializeObject(buffer$$1, _index3, options, false); // Adjust the index

      index = index + _objectSize2; // Check if field length is to short

      if (totalSize < 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error('code_w_scope total size is to short, truncating scope');
      } // Check if totalSize field is to long


      if (totalSize > 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error('code_w_scope total size is to long, clips outer document');
      } // If we are evaluating the functions


      if (evalFunctions) {
        // If we have cache enabled let's look for the md5 of the function in the cache
        if (cacheFunctions) {
          var _hash = cacheFunctionsCrc32 ? crc32(_functionString) : _functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval


          object[name] = isolateEvalWithHash(functionCache, _hash, _functionString, object);
        } else {
          object[name] = isolateEval(_functionString);
        }

        object[name].scope = scopeObject;
      } else {
        object[name] = new code(_functionString, scopeObject);
      }
    } else if (elementType === constants.BSON_DATA_DBPOINTER) {
      // Get the code string size
      var _stringSize4 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


      if (_stringSize4 <= 0 || _stringSize4 > buffer$$1.length - index || buffer$$1[index + _stringSize4 - 1] !== 0) throw new Error('bad string length in bson'); // Namespace

      if (!validateUtf8$1(buffer$$1, index, index + _stringSize4 - 1)) {
        throw new Error('Invalid UTF-8 string in BSON document');
      }

      var namespace = buffer$$1.toString('utf8', index, index + _stringSize4 - 1); // Update parse index position

      index = index + _stringSize4; // Read the oid

      var oidBuffer = Buffer$2.alloc(12);
      buffer$$1.copy(oidBuffer, 0, index, index + 12);

      var _oid = new objectid(oidBuffer); // Update the index


      index = index + 12; // Upgrade to DBRef type

      object[name] = new db_ref(namespace, _oid);
    } else {
      throw new Error('Detected unknown BSON type ' + elementType.toString(16) + ' for fieldname "' + name + '", are you using the latest BSON parser?');
    }
  } // Check if the deserialization was against a valid array/object


  if (size !== index - startIndex) {
    if (isArray) throw new Error('corrupt array bson');
    throw new Error('corrupt object bson');
  } // check if object's $ keys are those of a DBRef


  var dollarKeys = Object.keys(object).filter(function (k) {
    return k.startsWith('$');
  });
  var valid = true;
  dollarKeys.forEach(function (k) {
    if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
  }); // if a $key not in "$ref", "$id", "$db", don't make a DBRef

  if (!valid) return object;

  if (object['$id'] != null && object['$ref'] != null) {
    var copy = Object.assign({}, object);
    delete copy.$ref;
    delete copy.$id;
    delete copy.$db;
    return new db_ref(object.$ref, object.$id, object.$db || null, copy);
  }

  return object;
}
/**
 * Ensure eval is isolated.
 *
 * @ignore
 * @api private
 */


function isolateEvalWithHash(functionCache, hash, functionString, object) {
  // Contains the value we are going to set
  var value = null; // Check for cache hit, eval if missing and return cached function

  if (functionCache[hash] == null) {
    eval('value = ' + functionString);
    functionCache[hash] = value;
  } // Set the object


  return functionCache[hash].bind(object);
}
/**
 * Ensure eval is isolated.
 *
 * @ignore
 * @api private
 */


function isolateEval(functionString) {
  // Contains the value we are going to set
  var value = null; // Eval the function

  eval('value = ' + functionString);
  return value;
}

var deserializer = deserialize$1;

// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright notice,
//    this list of conditions and the following disclaimer.
//
//  * Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
//
//  * Neither the name of Fair Oaks Labs, Inc. nor the names of its contributors
//    may be used to endorse or promote products derived from this software
//    without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
//
// Modifications to writeIEEE754 to support negative zeroes made by Brian White

function readIEEE754(buffer$$1, offset, endian, mLen, nBytes) {
  var e,
      m,
      bBE = endian === 'big',
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = bBE ? 0 : nBytes - 1,
      d = bBE ? 1 : -1,
      s = buffer$$1[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
  }

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
  }

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}

function writeIEEE754(buffer$$1, value, offset, endian, mLen, nBytes) {
  var e,
      m,
      c,
      bBE = endian === 'big',
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      i = bBE ? nBytes - 1 : 0,
      d = bBE ? -1 : 1,
      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  if (isNaN(value)) m = 0;

  while (mLen >= 8) {
    buffer$$1[offset + i] = m & 0xff;
    i += d;
    m /= 256;
    mLen -= 8;
  }

  e = e << mLen | m;
  if (isNaN(value)) e += 8;
  eLen += mLen;

  while (eLen > 0) {
    buffer$$1[offset + i] = e & 0xff;
    i += d;
    e /= 256;
    eLen -= 8;
  }

  buffer$$1[offset + i - d] |= s * 128;
}

var float_parser = {
  readIEEE754: readIEEE754,
  writeIEEE754: writeIEEE754
};

var Buffer$3 = buffer__WEBPACK_IMPORTED_MODULE_1___default.a.Buffer;
var writeIEEE754$1 = float_parser.writeIEEE754;
var normalizedFunctionString$1 = utils.normalizedFunctionString;
var regexp$1 = /\x00/; // eslint-disable-line no-control-regex

var ignoreKeys = new Set(['$db', '$ref', '$id', '$clusterTime']); // To ensure that 0.4 of node works correctly

var isDate = function isDate(d) {
  return _typeof(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
};

var isRegExp = function isRegExp(d) {
  return Object.prototype.toString.call(d) === '[object RegExp]';
};

function serializeString(buffer$$1, key, value, index, isArray) {
  // Encode String type
  buffer$$1[index++] = constants.BSON_DATA_STRING; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes + 1;
  buffer$$1[index - 1] = 0; // Write the string

  var size = buffer$$1.write(value, index + 4, 'utf8'); // Write the size of the string to buffer

  buffer$$1[index + 3] = size + 1 >> 24 & 0xff;
  buffer$$1[index + 2] = size + 1 >> 16 & 0xff;
  buffer$$1[index + 1] = size + 1 >> 8 & 0xff;
  buffer$$1[index] = size + 1 & 0xff; // Update index

  index = index + 4 + size; // Write zero

  buffer$$1[index++] = 0;
  return index;
}

function serializeNumber(buffer$$1, key, value, index, isArray) {
  // We have an integer value
  if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
    // If the value fits in 32 bits encode as int, if it fits in a double
    // encode it as a double, otherwise long
    if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
      // Set int type 32 bits or less
      buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

      var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

      index = index + numberOfWrittenBytes;
      buffer$$1[index++] = 0; // Write the int value

      buffer$$1[index++] = value & 0xff;
      buffer$$1[index++] = value >> 8 & 0xff;
      buffer$$1[index++] = value >> 16 & 0xff;
      buffer$$1[index++] = value >> 24 & 0xff;
    } else if (value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
      // Encode as double
      buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

      var _numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


      index = index + _numberOfWrittenBytes;
      buffer$$1[index++] = 0; // Write float

      writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

      index = index + 8;
    } else {
      // Set long type
      buffer$$1[index++] = constants.BSON_DATA_LONG; // Number of written bytes

      var _numberOfWrittenBytes2 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


      index = index + _numberOfWrittenBytes2;
      buffer$$1[index++] = 0;
      var longVal = long_1.fromNumber(value);
      var lowBits = longVal.getLowBits();
      var highBits = longVal.getHighBits(); // Encode low bits

      buffer$$1[index++] = lowBits & 0xff;
      buffer$$1[index++] = lowBits >> 8 & 0xff;
      buffer$$1[index++] = lowBits >> 16 & 0xff;
      buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

      buffer$$1[index++] = highBits & 0xff;
      buffer$$1[index++] = highBits >> 8 & 0xff;
      buffer$$1[index++] = highBits >> 16 & 0xff;
      buffer$$1[index++] = highBits >> 24 & 0xff;
    }
  } else {
    // Encode as double
    buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

    var _numberOfWrittenBytes3 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    index = index + _numberOfWrittenBytes3;
    buffer$$1[index++] = 0; // Write float

    writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

    index = index + 8;
  }

  return index;
}

function serializeNull(buffer$$1, key, value, index, isArray) {
  // Set long type
  buffer$$1[index++] = constants.BSON_DATA_NULL; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}

function serializeBoolean(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_BOOLEAN; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Encode the boolean value

  buffer$$1[index++] = value ? 1 : 0;
  return index;
}

function serializeDate(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_DATE; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the date

  var dateInMilis = long_1.fromNumber(value.getTime());
  var lowBits = dateInMilis.getLowBits();
  var highBits = dateInMilis.getHighBits(); // Encode low bits

  buffer$$1[index++] = lowBits & 0xff;
  buffer$$1[index++] = lowBits >> 8 & 0xff;
  buffer$$1[index++] = lowBits >> 16 & 0xff;
  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = highBits & 0xff;
  buffer$$1[index++] = highBits >> 8 & 0xff;
  buffer$$1[index++] = highBits >> 16 & 0xff;
  buffer$$1[index++] = highBits >> 24 & 0xff;
  return index;
}

function serializeRegExp(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;

  if (value.source && value.source.match(regexp$1) != null) {
    throw Error('value ' + value.source + ' must not contain null bytes');
  } // Adjust the index


  index = index + buffer$$1.write(value.source, index, 'utf8'); // Write zero

  buffer$$1[index++] = 0x00; // Write the parameters

  if (value.ignoreCase) buffer$$1[index++] = 0x69; // i

  if (value.global) buffer$$1[index++] = 0x73; // s

  if (value.multiline) buffer$$1[index++] = 0x6d; // m
  // Add ending zero

  buffer$$1[index++] = 0x00;
  return index;
}

function serializeBSONRegExp(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Check the pattern for 0 bytes

  if (value.pattern.match(regexp$1) != null) {
    // The BSON spec doesn't allow keys with null bytes because keys are
    // null-terminated.
    throw Error('pattern ' + value.pattern + ' must not contain null bytes');
  } // Adjust the index


  index = index + buffer$$1.write(value.pattern, index, 'utf8'); // Write zero

  buffer$$1[index++] = 0x00; // Write the options

  index = index + buffer$$1.write(value.options.split('').sort().join(''), index, 'utf8'); // Add ending zero

  buffer$$1[index++] = 0x00;
  return index;
}

function serializeMinMax(buffer$$1, key, value, index, isArray) {
  console.log({
    value: value,
    MinKey: min_key,
    isMinKey: value instanceof min_key
  }); // Write the type of either min or max key

  if (value === null) {
    buffer$$1[index++] = constants.BSON_DATA_NULL;
  } else if (value instanceof min_key) {
    buffer$$1[index++] = constants.BSON_DATA_MIN_KEY;
  } else {
    buffer$$1[index++] = constants.BSON_DATA_MAX_KEY;
  } // Number of written bytes


  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}

function serializeObjectId(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_OID; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the objectId into the shared buffer

  if (typeof value.id === 'string') {
    buffer$$1.write(value.id, index, 'binary');
  } else if (value.id && value.id.copy) {
    value.id.copy(buffer$$1, index, 0, 12);
  } else {
    throw new TypeError('object [' + JSON.stringify(value) + '] is not a valid ObjectId');
  } // Ajust index


  return index + 12;
}

function serializeBuffer(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Get size of the buffer (current write point)

  var size = value.length; // Write the size of the string to buffer

  buffer$$1[index++] = size & 0xff;
  buffer$$1[index++] = size >> 8 & 0xff;
  buffer$$1[index++] = size >> 16 & 0xff;
  buffer$$1[index++] = size >> 24 & 0xff; // Write the default subtype

  buffer$$1[index++] = constants.BSON_BINARY_SUBTYPE_DEFAULT; // Copy the content form the binary field to the buffer

  value.copy(buffer$$1, index, 0, size); // Adjust the index

  index = index + size;
  return index;
}

function serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray, path) {
  for (var i = 0; i < path.length; i++) {
    if (path[i] === value) throw new Error('cyclic dependency detected');
  } // Push value to stack


  path.push(value); // Write the type

  buffer$$1[index++] = Array.isArray(value) ? constants.BSON_DATA_ARRAY : constants.BSON_DATA_OBJECT; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var endIndex = serializeInto(buffer$$1, value, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path); // Pop stack

  path.pop();
  return endIndex;
}

function serializeDecimal128(buffer$$1, key, value, index, isArray) {
  buffer$$1[index++] = constants.BSON_DATA_DECIMAL128; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the data from the value

  value.bytes.copy(buffer$$1, index, 0, 16);
  return index + 16;
}

function serializeLong(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = value._bsontype === 'Long' ? constants.BSON_DATA_LONG : constants.BSON_DATA_TIMESTAMP; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the date

  var lowBits = value.getLowBits();
  var highBits = value.getHighBits(); // Encode low bits

  buffer$$1[index++] = lowBits & 0xff;
  buffer$$1[index++] = lowBits >> 8 & 0xff;
  buffer$$1[index++] = lowBits >> 16 & 0xff;
  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = highBits & 0xff;
  buffer$$1[index++] = highBits >> 8 & 0xff;
  buffer$$1[index++] = highBits >> 16 & 0xff;
  buffer$$1[index++] = highBits >> 24 & 0xff;
  return index;
}

function serializeInt32(buffer$$1, key, value, index, isArray) {
  // Set int type 32 bits or less
  buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the int value

  buffer$$1[index++] = value & 0xff;
  buffer$$1[index++] = value >> 8 & 0xff;
  buffer$$1[index++] = value >> 16 & 0xff;
  buffer$$1[index++] = value >> 24 & 0xff;
  return index;
}

function serializeDouble(buffer$$1, key, value, index, isArray) {
  // Encode as double
  buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write float

  writeIEEE754$1(buffer$$1, value.value, index, 'little', 52, 8); // Adjust index

  index = index + 8;
  return index;
}

function serializeFunction(buffer$$1, key, value, index, checkKeys, depth, isArray) {
  buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Function string

  var functionString = normalizedFunctionString$1(value); // Write the string

  var size = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

  buffer$$1[index] = size & 0xff;
  buffer$$1[index + 1] = size >> 8 & 0xff;
  buffer$$1[index + 2] = size >> 16 & 0xff;
  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

  index = index + 4 + size - 1; // Write zero

  buffer$$1[index++] = 0;
  return index;
}

function serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray) {
  if (value.scope && _typeof(value.scope) === 'object') {
    // Write the type
    buffer$$1[index++] = constants.BSON_DATA_CODE_W_SCOPE; // Number of written bytes

    var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    index = index + numberOfWrittenBytes;
    buffer$$1[index++] = 0; // Starting index

    var startIndex = index; // Serialize the function
    // Get the function string

    var functionString = typeof value.code === 'string' ? value.code : value.code.toString(); // Index adjustment

    index = index + 4; // Write string into buffer

    var codeSize = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    buffer$$1[index] = codeSize & 0xff;
    buffer$$1[index + 1] = codeSize >> 8 & 0xff;
    buffer$$1[index + 2] = codeSize >> 16 & 0xff;
    buffer$$1[index + 3] = codeSize >> 24 & 0xff; // Write end 0

    buffer$$1[index + 4 + codeSize - 1] = 0; // Write the

    index = index + codeSize + 4; //
    // Serialize the scope value

    var endIndex = serializeInto(buffer$$1, value.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined);
    index = endIndex - 1; // Writ the total

    var totalSize = endIndex - startIndex; // Write the total size of the object

    buffer$$1[startIndex++] = totalSize & 0xff;
    buffer$$1[startIndex++] = totalSize >> 8 & 0xff;
    buffer$$1[startIndex++] = totalSize >> 16 & 0xff;
    buffer$$1[startIndex++] = totalSize >> 24 & 0xff; // Write trailing zero

    buffer$$1[index++] = 0;
  } else {
    buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

    var _numberOfWrittenBytes4 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    index = index + _numberOfWrittenBytes4;
    buffer$$1[index++] = 0; // Function string

    var _functionString = value.code.toString(); // Write the string


    var size = buffer$$1.write(_functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    buffer$$1[index] = size & 0xff;
    buffer$$1[index + 1] = size >> 8 & 0xff;
    buffer$$1[index + 2] = size >> 16 & 0xff;
    buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

    index = index + 4 + size - 1; // Write zero

    buffer$$1[index++] = 0;
  }

  return index;
}

function serializeBinary(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Extract the buffer

  var data = value.value(true); // Calculate size

  var size = value.position; // Add the deprecated 02 type 4 bytes of size to total

  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) size = size + 4; // Write the size of the string to buffer

  buffer$$1[index++] = size & 0xff;
  buffer$$1[index++] = size >> 8 & 0xff;
  buffer$$1[index++] = size >> 16 & 0xff;
  buffer$$1[index++] = size >> 24 & 0xff; // Write the subtype to the buffer

  buffer$$1[index++] = value.sub_type; // If we have binary type 2 the 4 first bytes are the size

  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
    size = size - 4;
    buffer$$1[index++] = size & 0xff;
    buffer$$1[index++] = size >> 8 & 0xff;
    buffer$$1[index++] = size >> 16 & 0xff;
    buffer$$1[index++] = size >> 24 & 0xff;
  } // Write the data to the object


  data.copy(buffer$$1, index, 0, value.position); // Adjust the index

  index = index + value.position;
  return index;
}

function serializeSymbol(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_SYMBOL; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the string

  var size = buffer$$1.write(value.value, index + 4, 'utf8') + 1; // Write the size of the string to buffer

  buffer$$1[index] = size & 0xff;
  buffer$$1[index + 1] = size >> 8 & 0xff;
  buffer$$1[index + 2] = size >> 16 & 0xff;
  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

  index = index + 4 + size - 1; // Write zero

  buffer$$1[index++] = 0x00;
  return index;
}

function serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_OBJECT; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var startIndex = index;
  var endIndex;
  var output = {
    $ref: value.collection,
    $id: value.oid
  };
  if (value.db != null) output.$db = value.db;
  output = Object.assign(output, value.fields);
  endIndex = serializeInto(buffer$$1, output, false, index, depth + 1, serializeFunctions); // Calculate object size

  var size = endIndex - startIndex; // Write the size

  buffer$$1[startIndex++] = size & 0xff;
  buffer$$1[startIndex++] = size >> 8 & 0xff;
  buffer$$1[startIndex++] = size >> 16 & 0xff;
  buffer$$1[startIndex++] = size >> 24 & 0xff; // Set index

  return endIndex;
}

function serializeInto(buffer$$1, object, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
  startingIndex = startingIndex || 0;
  path = path || []; // Push the object to the path

  path.push(object); // Start place to serialize into

  var index = startingIndex + 4; // Special case isArray

  if (Array.isArray(object)) {
    // Get object keys
    for (var i = 0; i < object.length; i++) {
      var key = '' + i;
      var value = object[i]; // Is there an override value

      if (value && value.toBSON) {
        if (typeof value.toBSON !== 'function') throw new TypeError('toBSON is not a function');
        value = value.toBSON();
      }

      var type = _typeof(value);

      if (type === 'string') {
        index = serializeString(buffer$$1, key, value, index, true);
      } else if (type === 'number') {
        index = serializeNumber(buffer$$1, key, value, index, true);
      } else if (type === 'boolean') {
        index = serializeBoolean(buffer$$1, key, value, index, true);
      } else if (value instanceof Date || isDate(value)) {
        index = serializeDate(buffer$$1, key, value, index, true);
      } else if (value === undefined) {
        index = serializeNull(buffer$$1, key, value, index, true);
      } else if (value === null) {
        index = serializeNull(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'ObjectId') {
        index = serializeObjectId(buffer$$1, key, value, index, true);
      } else if (Buffer$3.isBuffer(value)) {
        index = serializeBuffer(buffer$$1, key, value, index, true);
      } else if (value instanceof RegExp || isRegExp(value)) {
        index = serializeRegExp(buffer$$1, key, value, index, true);
      } else if (type === 'object' && value['_bsontype'] == null) {
        index = serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true, path);
      } else if (type === 'object' && value['_bsontype'] === 'Decimal128') {
        index = serializeDecimal128(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Timestamp') {
        index = serializeLong(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Double') {
        index = serializeDouble(buffer$$1, key, value, index, true);
      } else if (typeof value === 'function' && serializeFunctions) {
        index = serializeFunction(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, true);
      } else if (value['_bsontype'] === 'Code') {
        index = serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true);
      } else if (value['_bsontype'] === 'Binary') {
        index = serializeBinary(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Symbol') {
        index = serializeSymbol(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'DBRef') {
        index = serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, true);
      } else if (value['_bsontype'] === 'BSONRegExp') {
        index = serializeBSONRegExp(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Int32') {
        index = serializeInt32(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
        index = serializeMinMax(buffer$$1, key, value, index, true);
      }
    }
  } else if (object instanceof map) {
    var iterator = object.entries();
    var done = false;

    while (!done) {
      // Unpack the next entry
      var entry = iterator.next();
      done = entry.done; // Are we done, then skip and terminate

      if (done) continue; // Get the entry values

      var _key = entry.value[0];
      var _value = entry.value[1]; // Check the type of the value

      var _type = _typeof(_value); // Check the key and throw error if it's illegal


      if (typeof _key === 'string' && !ignoreKeys.has(_key)) {
        if (_key.match(regexp$1) != null) {
          // The BSON spec doesn't allow keys with null bytes because keys are
          // null-terminated.
          throw Error('key ' + _key + ' must not contain null bytes');
        }

        if (checkKeys) {
          if ('$' === _key[0]) {
            throw Error('key ' + _key + " must not start with '$'");
          } else if (~_key.indexOf('.')) {
            throw Error('key ' + _key + " must not contain '.'");
          }
        }
      }

      if (_type === 'string') {
        index = serializeString(buffer$$1, _key, _value, index);
      } else if (_type === 'number') {
        index = serializeNumber(buffer$$1, _key, _value, index);
      } else if (_type === 'boolean') {
        index = serializeBoolean(buffer$$1, _key, _value, index);
      } else if (_value instanceof Date || isDate(_value)) {
        index = serializeDate(buffer$$1, _key, _value, index);
      } else if (_value === null || _value === undefined && ignoreUndefined === false) {
        index = serializeNull(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'ObjectId') {
        index = serializeObjectId(buffer$$1, _key, _value, index);
      } else if (Buffer$3.isBuffer(_value)) {
        index = serializeBuffer(buffer$$1, _key, _value, index);
      } else if (_value instanceof RegExp || isRegExp(_value)) {
        index = serializeRegExp(buffer$$1, _key, _value, index);
      } else if (_type === 'object' && _value['_bsontype'] == null) {
        index = serializeObject(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type === 'object' && _value['_bsontype'] === 'Decimal128') {
        index = serializeDecimal128(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Long' || _value['_bsontype'] === 'Timestamp') {
        index = serializeLong(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Double') {
        index = serializeDouble(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Code') {
        index = serializeCode(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value === 'function' && serializeFunctions) {
        index = serializeFunction(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions);
      } else if (_value['_bsontype'] === 'Binary') {
        index = serializeBinary(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Symbol') {
        index = serializeSymbol(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'DBRef') {
        index = serializeDBRef(buffer$$1, _key, _value, index, depth, serializeFunctions);
      } else if (_value['_bsontype'] === 'BSONRegExp') {
        index = serializeBSONRegExp(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Int32') {
        index = serializeInt32(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'MinKey' || _value['_bsontype'] === 'MaxKey') {
        index = serializeMinMax(buffer$$1, _key, _value, index);
      }
    }
  } else {
    // Did we provide a custom serialization method
    if (object.toBSON) {
      if (typeof object.toBSON !== 'function') throw new TypeError('toBSON is not a function');
      object = object.toBSON();
      if (object != null && _typeof(object) !== 'object') throw new TypeError('toBSON function did not return an object');
    } // Iterate over all the keys


    for (var _key2 in object) {
      var _value2 = object[_key2]; // Is there an override value

      if (_value2 && _value2.toBSON) {
        if (typeof _value2.toBSON !== 'function') throw new TypeError('toBSON is not a function');
        _value2 = _value2.toBSON();
      } // Check the type of the value


      var _type2 = _typeof(_value2); // Check the key and throw error if it's illegal


      if (typeof _key2 === 'string' && !ignoreKeys.has(_key2)) {
        if (_key2.match(regexp$1) != null) {
          // The BSON spec doesn't allow keys with null bytes because keys are
          // null-terminated.
          throw Error('key ' + _key2 + ' must not contain null bytes');
        }

        if (checkKeys) {
          if ('$' === _key2[0]) {
            throw Error('key ' + _key2 + " must not start with '$'");
          } else if (~_key2.indexOf('.')) {
            throw Error('key ' + _key2 + " must not contain '.'");
          }
        }
      }

      if (_type2 === 'string') {
        index = serializeString(buffer$$1, _key2, _value2, index);
      } else if (_type2 === 'number') {
        index = serializeNumber(buffer$$1, _key2, _value2, index);
      } else if (_type2 === 'boolean') {
        index = serializeBoolean(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof Date || isDate(_value2)) {
        index = serializeDate(buffer$$1, _key2, _value2, index);
      } else if (_value2 === undefined) {
        if (ignoreUndefined === false) index = serializeNull(buffer$$1, _key2, _value2, index);
      } else if (_value2 === null) {
        index = serializeNull(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'ObjectId') {
        index = serializeObjectId(buffer$$1, _key2, _value2, index);
      } else if (Buffer$3.isBuffer(_value2)) {
        index = serializeBuffer(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof RegExp || isRegExp(_value2)) {
        index = serializeRegExp(buffer$$1, _key2, _value2, index);
      } else if (_type2 === 'object' && _value2['_bsontype'] == null) {
        index = serializeObject(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type2 === 'object' && _value2['_bsontype'] === 'Decimal128') {
        index = serializeDecimal128(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Long' || _value2['_bsontype'] === 'Timestamp') {
        index = serializeLong(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Double') {
        index = serializeDouble(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Code') {
        index = serializeCode(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value2 === 'function' && serializeFunctions) {
        index = serializeFunction(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions);
      } else if (_value2['_bsontype'] === 'Binary') {
        index = serializeBinary(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Symbol') {
        index = serializeSymbol(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'DBRef') {
        index = serializeDBRef(buffer$$1, _key2, _value2, index, depth, serializeFunctions);
      } else if (_value2['_bsontype'] === 'BSONRegExp') {
        index = serializeBSONRegExp(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Int32') {
        index = serializeInt32(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'MinKey' || _value2['_bsontype'] === 'MaxKey') {
        index = serializeMinMax(buffer$$1, _key2, _value2, index);
      }
    }
  } // Remove the path


  path.pop(); // Final padding byte for object

  buffer$$1[index++] = 0x00; // Final size

  var size = index - startingIndex; // Write the size of the object

  buffer$$1[startingIndex++] = size & 0xff;
  buffer$$1[startingIndex++] = size >> 8 & 0xff;
  buffer$$1[startingIndex++] = size >> 16 & 0xff;
  buffer$$1[startingIndex++] = size >> 24 & 0xff;
  return index;
}

var serializer = serializeInto;

var Buffer$4 = buffer__WEBPACK_IMPORTED_MODULE_1___default.a.Buffer;
var normalizedFunctionString$2 = utils.normalizedFunctionString; // To ensure that 0.4 of node works correctly

function isDate$1(d) {
  return _typeof(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
}

function calculateObjectSize(object, serializeFunctions, ignoreUndefined) {
  var totalLength = 4 + 1;

  if (Array.isArray(object)) {
    for (var i = 0; i < object.length; i++) {
      totalLength += calculateElement(i.toString(), object[i], serializeFunctions, true, ignoreUndefined);
    }
  } else {
    // If we have toBSON defined, override the current object
    if (object.toBSON) {
      object = object.toBSON();
    } // Calculate size


    for (var key in object) {
      totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
    }
  }

  return totalLength;
}
/**
 * @ignore
 * @api private
 */


function calculateElement(name, value, serializeFunctions, isArray, ignoreUndefined) {
  // If we have toBSON defined, override the current object
  if (value && value.toBSON) {
    value = value.toBSON();
  }

  switch (_typeof(value)) {
    case 'string':
      return 1 + Buffer$4.byteLength(name, 'utf8') + 1 + 4 + Buffer$4.byteLength(value, 'utf8') + 1;

    case 'number':
      if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
        if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
          // 32 bit
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (4 + 1);
        } else {
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
        }
      } else {
        // 64 bit
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
      }

    case 'undefined':
      if (isArray || !ignoreUndefined) return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1;
      return 0;

    case 'boolean':
      return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (1 + 1);

    case 'object':
      if (value == null || value instanceof min_key || value instanceof max_key || value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1;
      } else if (value instanceof objectid || value['_bsontype'] === 'ObjectId') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (12 + 1);
      } else if (value instanceof Date || isDate$1(value)) {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
      } else if (typeof Buffer$4 !== 'undefined' && Buffer$4.isBuffer(value)) {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (1 + 4 + 1) + value.length;
      } else if (value instanceof long_1 || value instanceof double_1 || value instanceof timestamp || value['_bsontype'] === 'Long' || value['_bsontype'] === 'Double' || value['_bsontype'] === 'Timestamp') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
      } else if (value instanceof decimal128 || value['_bsontype'] === 'Decimal128') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (16 + 1);
      } else if (value instanceof code || value['_bsontype'] === 'Code') {
        // Calculate size depending on the availability of a scope
        if (value.scope != null && Object.keys(value.scope).length > 0) {
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$4.byteLength(value.code.toString(), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
        } else {
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$4.byteLength(value.code.toString(), 'utf8') + 1;
        }
      } else if (value instanceof binary || value['_bsontype'] === 'Binary') {
        // Check what kind of subtype we have
        if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1 + 4);
        } else {
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1);
        }
      } else if (value instanceof symbol || value['_bsontype'] === 'Symbol') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + Buffer$4.byteLength(value.value, 'utf8') + 4 + 1 + 1;
      } else if (value instanceof db_ref || value['_bsontype'] === 'DBRef') {
        // Set up correct object for serialization
        var ordered_values = Object.assign({
          $ref: value.collection,
          $id: value.oid
        }, value.fields); // Add db reference if it exists

        if (value.db != null) {
          ordered_values['$db'] = value.db;
        }

        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + calculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined);
      } else if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$4.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
      } else if (value instanceof regexp || value['_bsontype'] === 'BSONRegExp') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$4.byteLength(value.pattern, 'utf8') + 1 + Buffer$4.byteLength(value.options, 'utf8') + 1;
      } else {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + calculateObjectSize(value, serializeFunctions, ignoreUndefined) + 1;
      }

    case 'function':
      // WTF for 0.4.X where typeof /someregexp/ === 'function'
      if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]' || String.call(value) === '[object RegExp]') {
        return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$4.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
      } else {
        if (serializeFunctions && value.scope != null && Object.keys(value.scope).length > 0) {
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$4.byteLength(normalizedFunctionString$2(value), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
        } else if (serializeFunctions) {
          return (name != null ? Buffer$4.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$4.byteLength(normalizedFunctionString$2(value), 'utf8') + 1;
        }
      }

  }

  return 0;
}

var calculate_size = calculateObjectSize;

var Buffer$5 = buffer__WEBPACK_IMPORTED_MODULE_1___default.a.Buffer;
/**
 * Makes sure that, if a Uint8Array is passed in, it is wrapped in a Buffer.
 *
 * @param {Buffer|Uint8Array} potentialBuffer The potential buffer
 * @returns {Buffer} the input if potentialBuffer is a buffer, or a buffer that
 * wraps a passed in Uint8Array
 * @throws {TypeError} If anything other than a Buffer or Uint8Array is passed in
 */

var ensure_buffer = function ensureBuffer(potentialBuffer) {
  if (potentialBuffer instanceof Buffer$5) {
    return potentialBuffer;
  }

  if (potentialBuffer instanceof Uint8Array) {
    return Buffer$5.from(potentialBuffer.buffer);
  }

  throw new TypeError('Must use either Buffer or Uint8Array');
};

var Buffer$6 = buffer__WEBPACK_IMPORTED_MODULE_1___default.a.Buffer; // Parts of the parser

/**
 * @ignore
 */
// Default Max Size

var MAXSIZE = 1024 * 1024 * 17; // Current Internal Temporary Serialization Buffer

var buffer$1 = Buffer$6.alloc(MAXSIZE);
/**
 * Sets the size of the internal serialization buffer.
 *
 * @method
 * @param {number} size The desired size for the internal serialization buffer
 */

function setInternalBufferSize(size) {
  // Resize the internal serialization buffer if needed
  if (buffer$1.length < size) {
    buffer$1 = Buffer$6.alloc(size);
  }
}
/**
 * Serialize a Javascript object.
 *
 * @param {Object} object the Javascript object to serialize.
 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
 * @return {Buffer} returns the Buffer object containing the serialized object.
 */


function serialize$1(object, options) {
  options = options || {}; // Unpack the options

  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
  var minInternalBufferSize = typeof options.minInternalBufferSize === 'number' ? options.minInternalBufferSize : MAXSIZE; // Resize the internal serialization buffer if needed

  if (buffer$1.length < minInternalBufferSize) {
    buffer$1 = Buffer$6.alloc(minInternalBufferSize);
  } // Attempt to serialize


  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, []); // Create the final buffer

  var finishedBuffer = Buffer$6.alloc(serializationIndex); // Copy into the finished buffer

  buffer$1.copy(finishedBuffer, 0, 0, finishedBuffer.length); // Return the buffer

  return finishedBuffer;
}
/**
 * Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.
 *
 * @param {Object} object the Javascript object to serialize.
 * @param {Buffer} buffer the Buffer you pre-allocated to store the serialized BSON object.
 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
 * @param {Number} [options.index] the index in the buffer where we wish to start serializing into.
 * @return {Number} returns the index pointing to the last written byte in the buffer.
 */


function serializeWithBufferAndIndex(object, finalBuffer, options) {
  options = options || {}; // Unpack the options

  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
  var startIndex = typeof options.index === 'number' ? options.index : 0; // Attempt to serialize

  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined);
  buffer$1.copy(finalBuffer, startIndex, 0, serializationIndex); // Return the index

  return startIndex + serializationIndex - 1;
}
/**
 * Deserialize data as BSON.
 *
 * @param {Buffer} buffer the buffer containing the serialized set of BSON documents.
 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
 * @param {boolean} [options.allowObjectSmallerThanBufferSize=false] allows the buffer to be larger than the parsed BSON object
 * @return {Object} returns the deserialized Javascript Object.
 */


function deserialize$2(buffer$$1, options) {
  buffer$$1 = ensure_buffer(buffer$$1);
  return deserializer(buffer$$1, options);
}
/**
 * Calculate the bson size for a passed in Javascript object.
 *
 * @param {Object} object the Javascript object to calculate the BSON byte size for.
 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
 * @return {Number} returns the number of bytes the BSON object will take up.
 */


function calculateObjectSize$1(object, options) {
  options = options || {};
  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
  return calculate_size(object, serializeFunctions, ignoreUndefined);
}
/**
 * Deserialize stream data as BSON documents.
 *
 * @param {Buffer} data the buffer containing the serialized set of BSON documents.
 * @param {Number} startIndex the start index in the data Buffer where the deserialization is to start.
 * @param {Number} numberOfDocuments number of documents to deserialize.
 * @param {Array} documents an array where to store the deserialized documents.
 * @param {Number} docStartIndex the index in the documents array from where to start inserting documents.
 * @param {Object} [options] additional options used for the deserialization.
 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
 * @return {Number} returns the next index in the buffer after deserialization **x** numbers of documents.
 */


function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
  options = Object.assign({
    allowObjectSmallerThanBufferSize: true
  }, options);
  data = ensure_buffer(data);
  var index = startIndex; // Loop over all documents

  for (var i = 0; i < numberOfDocuments; i++) {
    // Find size of the document
    var size = data[index] | data[index + 1] << 8 | data[index + 2] << 16 | data[index + 3] << 24; // Update options with index

    options.index = index; // Parse the document at this point

    documents[docStartIndex + i] = deserializer(data, options); // Adjust index by the document size

    index = index + size;
  } // Return object containing end index of parsing and list of documents


  return index;
}

var bson = {
  // constants
  // NOTE: this is done this way because rollup can't resolve an `Object.assign`ed export
  BSON_INT32_MAX: constants.BSON_INT32_MAX,
  BSON_INT32_MIN: constants.BSON_INT32_MIN,
  BSON_INT64_MAX: constants.BSON_INT64_MAX,
  BSON_INT64_MIN: constants.BSON_INT64_MIN,
  JS_INT_MAX: constants.JS_INT_MAX,
  JS_INT_MIN: constants.JS_INT_MIN,
  BSON_DATA_NUMBER: constants.BSON_DATA_NUMBER,
  BSON_DATA_STRING: constants.BSON_DATA_STRING,
  BSON_DATA_OBJECT: constants.BSON_DATA_OBJECT,
  BSON_DATA_ARRAY: constants.BSON_DATA_ARRAY,
  BSON_DATA_BINARY: constants.BSON_DATA_BINARY,
  BSON_DATA_UNDEFINED: constants.BSON_DATA_UNDEFINED,
  BSON_DATA_OID: constants.BSON_DATA_OID,
  BSON_DATA_BOOLEAN: constants.BSON_DATA_BOOLEAN,
  BSON_DATA_DATE: constants.BSON_DATA_DATE,
  BSON_DATA_NULL: constants.BSON_DATA_NULL,
  BSON_DATA_REGEXP: constants.BSON_DATA_REGEXP,
  BSON_DATA_DBPOINTER: constants.BSON_DATA_DBPOINTER,
  BSON_DATA_CODE: constants.BSON_DATA_CODE,
  BSON_DATA_SYMBOL: constants.BSON_DATA_SYMBOL,
  BSON_DATA_CODE_W_SCOPE: constants.BSON_DATA_CODE_W_SCOPE,
  BSON_DATA_INT: constants.BSON_DATA_INT,
  BSON_DATA_TIMESTAMP: constants.BSON_DATA_TIMESTAMP,
  BSON_DATA_LONG: constants.BSON_DATA_LONG,
  BSON_DATA_DECIMAL128: constants.BSON_DATA_DECIMAL128,
  BSON_DATA_MIN_KEY: constants.BSON_DATA_MIN_KEY,
  BSON_DATA_MAX_KEY: constants.BSON_DATA_MAX_KEY,
  BSON_BINARY_SUBTYPE_DEFAULT: constants.BSON_BINARY_SUBTYPE_DEFAULT,
  BSON_BINARY_SUBTYPE_FUNCTION: constants.BSON_BINARY_SUBTYPE_FUNCTION,
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: constants.BSON_BINARY_SUBTYPE_BYTE_ARRAY,
  BSON_BINARY_SUBTYPE_UUID: constants.BSON_BINARY_SUBTYPE_UUID,
  BSON_BINARY_SUBTYPE_MD5: constants.BSON_BINARY_SUBTYPE_MD5,
  BSON_BINARY_SUBTYPE_USER_DEFINED: constants.BSON_BINARY_SUBTYPE_USER_DEFINED,
  // wrapped types
  Code: code,
  Map: map,
  BSONSymbol: symbol,
  DBRef: db_ref,
  Binary: binary,
  ObjectId: objectid,
  Long: long_1,
  Timestamp: timestamp,
  Double: double_1,
  Int32: int_32,
  MinKey: min_key,
  MaxKey: max_key,
  BSONRegExp: regexp,
  Decimal128: decimal128,
  // methods
  serialize: serialize$1,
  serializeWithBufferAndIndex: serializeWithBufferAndIndex,
  deserialize: deserialize$2,
  calculateObjectSize: calculateObjectSize$1,
  deserializeStream: deserializeStream,
  setInternalBufferSize: setInternalBufferSize,
  // legacy support
  ObjectID: objectid,
  // Extended JSON
  EJSON: extended_json
};
var bson_1 = bson.BSON_INT32_MAX;
var bson_2 = bson.BSON_INT32_MIN;
var bson_3 = bson.BSON_INT64_MAX;
var bson_4 = bson.BSON_INT64_MIN;
var bson_5 = bson.JS_INT_MAX;
var bson_6 = bson.JS_INT_MIN;
var bson_7 = bson.BSON_DATA_NUMBER;
var bson_8 = bson.BSON_DATA_STRING;
var bson_9 = bson.BSON_DATA_OBJECT;
var bson_10 = bson.BSON_DATA_ARRAY;
var bson_11 = bson.BSON_DATA_BINARY;
var bson_12 = bson.BSON_DATA_UNDEFINED;
var bson_13 = bson.BSON_DATA_OID;
var bson_14 = bson.BSON_DATA_BOOLEAN;
var bson_15 = bson.BSON_DATA_DATE;
var bson_16 = bson.BSON_DATA_NULL;
var bson_17 = bson.BSON_DATA_REGEXP;
var bson_18 = bson.BSON_DATA_DBPOINTER;
var bson_19 = bson.BSON_DATA_CODE;
var bson_20 = bson.BSON_DATA_SYMBOL;
var bson_21 = bson.BSON_DATA_CODE_W_SCOPE;
var bson_22 = bson.BSON_DATA_INT;
var bson_23 = bson.BSON_DATA_TIMESTAMP;
var bson_24 = bson.BSON_DATA_LONG;
var bson_25 = bson.BSON_DATA_DECIMAL128;
var bson_26 = bson.BSON_DATA_MIN_KEY;
var bson_27 = bson.BSON_DATA_MAX_KEY;
var bson_28 = bson.BSON_BINARY_SUBTYPE_DEFAULT;
var bson_29 = bson.BSON_BINARY_SUBTYPE_FUNCTION;
var bson_30 = bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
var bson_31 = bson.BSON_BINARY_SUBTYPE_UUID;
var bson_32 = bson.BSON_BINARY_SUBTYPE_MD5;
var bson_33 = bson.BSON_BINARY_SUBTYPE_USER_DEFINED;
var bson_34 = bson.Code;
var bson_35 = bson.BSONSymbol;
var bson_36 = bson.DBRef;
var bson_37 = bson.Binary;
var bson_38 = bson.ObjectId;
var bson_39 = bson.Long;
var bson_40 = bson.Timestamp;
var bson_41 = bson.Double;
var bson_42 = bson.Int32;
var bson_43 = bson.MinKey;
var bson_44 = bson.MaxKey;
var bson_45 = bson.BSONRegExp;
var bson_46 = bson.Decimal128;
var bson_47 = bson.serialize;
var bson_48 = bson.serializeWithBufferAndIndex;
var bson_49 = bson.deserialize;
var bson_50 = bson.calculateObjectSize;
var bson_51 = bson.deserializeStream;
var bson_52 = bson.setInternalBufferSize;
var bson_53 = bson.ObjectID;
var bson_54 = bson.EJSON;

/* harmony default export */ __webpack_exports__["default"] = (bson);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-polyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-polyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __root__ = (function (root) {
function F() { this.fetch = false; }
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);
}).call(__root__, void(0));
var fetch = __root__.fetch;
var Response = fetch.Response = __root__.Response;
var Request = fetch.Request = __root__.Request;
var Headers = fetch.Headers = __root__.Headers;
if (typeof module === 'object' && module.exports) {
module.exports = fetch;
// Needed for TypeScript consumers without esModuleInterop.
module.exports.default = fetch;
}


/***/ }),

/***/ "./node_modules/detect-browser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/detect-browser/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function detect() {
  if (typeof navigator !== 'undefined') {
    return parseUserAgent(navigator.userAgent);
  }

  return getNodeVersion();
}

function detectOS(userAgentString) {
  var rules = getOperatingSystemRules();
  var detected = rules.filter(function (os) {
    return os.rule && os.rule.test(userAgentString);
  })[0];

  return detected ? detected.name : null;
}

function getNodeVersion() {
  var isNode = typeof process !== 'undefined' && process.version;
  return isNode && {
    name: 'node',
    version: process.version.slice(1),
    os: process.platform
  };
}

function parseUserAgent(userAgentString) {
  var browsers = getBrowserRules();
  if (!userAgentString) {
    return null;
  }

  var detected = browsers.map(function(browser) {
    var match = browser.rule.exec(userAgentString);
    var version = match && match[1].split(/[._]/).slice(0,3);

    if (version && version.length < 3) {
      version = version.concat(version.length == 1 ? [0, 0] : [0]);
    }

    return match && {
      name: browser.name,
      version: version.join('.')
    };
  }).filter(Boolean)[0] || null;

  if (detected) {
    detected.os = detectOS(userAgentString);
  }

  if (/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(userAgentString)) {
    detected = detected || {};
    detected.bot = true;
  }

  return detected;
}

function getBrowserRules() {
  return buildRules([
    [ 'aol', /AOLShield\/([0-9\._]+)/ ],
    [ 'edge', /Edge\/([0-9\._]+)/ ],
    [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ],
    [ 'vivaldi', /Vivaldi\/([0-9\.]+)/ ],
    [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ],
    [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ],
    [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ],
    [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ],
    [ 'fxios', /FxiOS\/([0-9\.]+)/ ],
    [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ],
    [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)$/ ],
    [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ],
    [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ],
    [ 'ie', /MSIE\s(7\.0)/ ],
    [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ],
    [ 'android', /Android\s([0-9\.]+)/ ],
    [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ],
    [ 'safari', /Version\/([0-9\._]+).*Safari/ ],
    [ 'facebook', /FBAV\/([0-9\.]+)/],
    [ 'instagram', /Instagram\s([0-9\.]+)/],
    [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/]
  ]);
}

function getOperatingSystemRules() {
  return buildRules([
    [ 'iOS', /iP(hone|od|ad)/ ],
    [ 'Android OS', /Android/ ],
    [ 'BlackBerry OS', /BlackBerry|BB10/ ],
    [ 'Windows Mobile', /IEMobile/ ],
    [ 'Amazon OS', /Kindle/ ],
    [ 'Windows 3.11', /Win16/ ],
    [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ],
    [ 'Windows 98', /(Windows 98)|(Win98)/ ],
    [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ],
    [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ],
    [ 'Windows Server 2003', /(Windows NT 5.2)/ ],
    [ 'Windows Vista', /(Windows NT 6.0)/ ],
    [ 'Windows 7', /(Windows NT 6.1)/ ],
    [ 'Windows 8', /(Windows NT 6.2)/ ],
    [ 'Windows 8.1', /(Windows NT 6.3)/ ],
    [ 'Windows 10', /(Windows NT 10.0)/ ],
    [ 'Windows ME', /Windows ME/ ],
    [ 'Open BSD', /OpenBSD/ ],
    [ 'Sun OS', /SunOS/ ],
    [ 'Linux', /(Linux)|(X11)/ ],
    [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ],
    [ 'QNX', /QNX/ ],
    [ 'BeOS', /BeOS/ ],
    [ 'OS/2', /OS\/2/ ],
    [ 'Search Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/ ]
  ]);
}

function buildRules(ruleTuples) {
  return ruleTuples.map(function(tuple) {
    return {
      name: tuple[0],
      rule: tuple[1]
    };
  });
}

module.exports = {
  detect: detect,
  detectOS: detectOS,
  getNodeVersion: getNodeVersion,
  parseUserAgent: parseUserAgent
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/long/src/long.js":
/*!***************************************!*\
  !*** ./node_modules/long/src/long.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/Stitch.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/Stitch.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
/* harmony import */ var _internal_common_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/common/LocalStorage */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/LocalStorage.js");
/* harmony import */ var _internal_net_FetchStreamTransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/net/FetchStreamTransport */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/FetchStreamTransport.js");
/* harmony import */ var _internal_StitchAppClientImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/StitchAppClientImpl */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/StitchAppClientImpl.js");




var DEFAULT_BASE_URL = "https://stitch.mongodb.com";
var appClients = {};
var Stitch = (function () {
    function Stitch() {
    }
    Object.defineProperty(Stitch, "defaultAppClient", {
        get: function () {
            if (Stitch.defaultClientAppId === undefined) {
                throw new Error("default app client has not yet been initialized/set");
            }
            return appClients[Stitch.defaultClientAppId];
        },
        enumerable: true,
        configurable: true
    });
    Stitch.getAppClient = function (clientAppId) {
        if (appClients[clientAppId] === undefined) {
            throw new Error("client for app '" + clientAppId + "' has not yet been initialized");
        }
        return appClients[clientAppId];
    };
    Stitch.hasAppClient = function (clientAppId) {
        return appClients[clientAppId] !== undefined;
    };
    Stitch.initializeDefaultAppClient = function (clientAppId, config) {
        if (config === void 0) { config = new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientConfiguration"].Builder().build(); }
        if (clientAppId === undefined || clientAppId === "") {
            throw new Error("clientAppId must be set to a non-empty string");
        }
        if (Stitch.defaultClientAppId !== undefined) {
            throw new Error("default app can only be set once; currently set to '" + Stitch.defaultClientAppId + "'");
        }
        var client = Stitch.initializeAppClient(clientAppId, config);
        Stitch.defaultClientAppId = clientAppId;
        return client;
    };
    Stitch.initializeAppClient = function (clientAppId, config) {
        if (config === void 0) { config = new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientConfiguration"].Builder().build(); }
        if (clientAppId === undefined || clientAppId === "") {
            throw new Error("clientAppId must be set to a non-empty string");
        }
        if (appClients[clientAppId] !== undefined) {
            throw new Error("client for app '" + clientAppId + "' has already been initialized");
        }
        var builder = config.builder ? config.builder() : new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientConfiguration"].Builder(config);
        if (builder.storage === undefined) {
            builder.withStorage(new _internal_common_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"](clientAppId));
        }
        if (builder.transport === undefined) {
            builder.withTransport(new _internal_net_FetchStreamTransport__WEBPACK_IMPORTED_MODULE_2__["default"]());
        }
        if (builder.baseUrl === undefined || builder.baseUrl === "") {
            builder.withBaseUrl(DEFAULT_BASE_URL);
        }
        if (builder.localAppName === undefined || builder.localAppName === "") {
            builder.withLocalAppName(Stitch.localAppName);
        }
        if (builder.localAppVersion === undefined ||
            builder.localAppVersion === "") {
            builder.withLocalAppVersion(Stitch.localAppVersion);
        }
        var client = new _internal_StitchAppClientImpl__WEBPACK_IMPORTED_MODULE_3__["default"](clientAppId, builder.build());
        appClients[clientAppId] = client;
        return client;
    };
    return Stitch;
}());
/* harmony default export */ __webpack_exports__["default"] = (Stitch);
//# sourceMappingURL=Stitch.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectFragmentFields.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectFragmentFields.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RedirectFragmentFields;
(function (RedirectFragmentFields) {
    RedirectFragmentFields["StitchError"] = "_stitch_error";
    RedirectFragmentFields["State"] = "_stitch_state";
    RedirectFragmentFields["UserAuth"] = "_stitch_ua";
    RedirectFragmentFields["LinkUser"] = "_stitch_link_user";
    RedirectFragmentFields["StitchLink"] = "_stitch_link";
    RedirectFragmentFields["ClientAppId"] = "_stitch_client_app_id";
})(RedirectFragmentFields || (RedirectFragmentFields = {}));
/* harmony default export */ __webpack_exports__["default"] = (RedirectFragmentFields);
//# sourceMappingURL=RedirectFragmentFields.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectKeys.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectKeys.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RedirectKeys;
(function (RedirectKeys) {
    RedirectKeys["ProviderName"] = "_stitch_redirect_provider_name";
    RedirectKeys["ProviderType"] = "_stitch_redirect_provider_type";
    RedirectKeys["State"] = "_stitch_redirect_state";
})(RedirectKeys || (RedirectKeys = {}));
/* harmony default export */ __webpack_exports__["default"] = (RedirectKeys);
//# sourceMappingURL=RedirectKeys.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchAuthImpl.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchAuthImpl.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js");
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch/polyfill */ "./node_modules/cross-fetch/dist/browser-polyfill.js");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
/* harmony import */ var _internal_common_Version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/common/Version */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/Version.js");
/* harmony import */ var _RedirectFragmentFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RedirectFragmentFields */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectFragmentFields.js");
/* harmony import */ var _RedirectKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RedirectKeys */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectKeys.js");
/* harmony import */ var _StitchRedirectError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StitchRedirectError */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchRedirectError.js");
/* harmony import */ var _StitchUserFactoryImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StitchUserFactoryImpl */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserFactoryImpl.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var alphaNumericCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var StitchAuthImpl = (function (_super) {
    __extends(StitchAuthImpl, _super);
    function StitchAuthImpl(requestClient, browserAuthRoutes, authStorage, appInfo, jsdomWindow) {
        if (jsdomWindow === void 0) { jsdomWindow = window; }
        var _this = _super.call(this, requestClient, browserAuthRoutes, authStorage) || this;
        _this.browserAuthRoutes = browserAuthRoutes;
        _this.authStorage = authStorage;
        _this.appInfo = appInfo;
        _this.jsdomWindow = jsdomWindow;
        _this.listeners = new Set();
        return _this;
    }
    Object.defineProperty(StitchAuthImpl.prototype, "userFactory", {
        get: function () {
            return new _StitchUserFactoryImpl__WEBPACK_IMPORTED_MODULE_7__["default"](this);
        },
        enumerable: true,
        configurable: true
    });
    StitchAuthImpl.prototype.getProviderClient = function (factory, providerName) {
        if (isAuthProviderClientFactory(factory)) {
            return factory.getClient(this, this.requestClient, this.authRoutes);
        }
        else {
            return factory.getNamedClient(providerName, this.requestClient, this.authRoutes);
        }
    };
    StitchAuthImpl.prototype.loginWithCredential = function (credential) {
        return _super.prototype.loginWithCredentialInternal.call(this, credential);
    };
    StitchAuthImpl.prototype.loginWithRedirect = function (credential) {
        var _this = this;
        var _a = this.prepareRedirect(credential), redirectUrl = _a.redirectUrl, state = _a.state;
        this.requestClient.getBaseURL().then(function (baseUrl) {
            _this.jsdomWindow.location.replace(baseUrl +
                _this.browserAuthRoutes.getAuthProviderRedirectRoute(credential, redirectUrl, state, _this.deviceInfo));
        });
    };
    StitchAuthImpl.prototype.linkWithRedirectInternal = function (user, credential) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, redirectUrl, state, baseUrl, link;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.user !== undefined && user.id !== this.user.id) {
                            return [2, Promise.reject(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["StitchClientError"](mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["StitchClientErrorCode"].UserNoLongerValid))];
                        }
                        _a = this.prepareRedirect(credential), redirectUrl = _a.redirectUrl, state = _a.state;
                        return [4, this.requestClient.getBaseURL()];
                    case 1:
                        baseUrl = _b.sent();
                        link = baseUrl +
                            this.browserAuthRoutes.getAuthProviderLinkRedirectRoute(credential, redirectUrl, state, this.deviceInfo);
                        return [2, (StitchAuthImpl.injectedFetch ? StitchAuthImpl.injectedFetch : fetch)(new Request(link, {
                                credentials: "include",
                                headers: {
                                    Authorization: "Bearer " + this.authInfo.accessToken
                                },
                                mode: 'cors'
                            })).then(function (response) {
                                _this.jsdomWindow.location.replace(response.headers.get("X-Stitch-Location"));
                            })];
                }
            });
        });
    };
    StitchAuthImpl.prototype.hasRedirectResult = function () {
        var isValid = false;
        try {
            isValid = this.parseRedirect().isValid;
            return isValid;
        }
        catch (_) {
            return false;
        }
        finally {
            if (!isValid) {
                this.cleanupRedirect();
            }
        }
    };
    StitchAuthImpl.prototype.handleRedirectResult = function () {
        try {
            var providerName = this.authStorage.get(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].ProviderName);
            var providerType = this.authStorage.get(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].ProviderType);
            var redirectFragment = this.parseRedirect();
            return this.loginWithCredentialInternal(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["StitchAuthResponseCredential"](this.processRedirectResult(redirectFragment), providerType, providerName, redirectFragment.asLink)).then(function (user) {
                return user;
            });
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    StitchAuthImpl.prototype.linkWithCredential = function (user, credential) {
        return _super.prototype.linkUserWithCredentialInternal.call(this, user, credential);
    };
    StitchAuthImpl.prototype.logout = function () {
        return Promise.resolve(_super.prototype.logoutInternal.call(this));
    };
    Object.defineProperty(StitchAuthImpl.prototype, "deviceInfo", {
        get: function () {
            var info = {};
            if (this.hasDeviceId) {
                info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].DEVICE_ID] = this.deviceId;
            }
            if (this.appInfo.localAppName !== undefined) {
                info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].APP_ID] = this.appInfo.localAppName;
            }
            if (this.appInfo.localAppVersion !== undefined) {
                info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].APP_VERSION] = this.appInfo.localAppVersion;
            }
            var browser = Object(detect_browser__WEBPACK_IMPORTED_MODULE_0__["detect"])();
            if (browser) {
                info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].PLATFORM] = browser.name;
                info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].PLATFORM_VERSION] = browser.version;
            }
            else {
                info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].PLATFORM] = "web";
                info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].PLATFORM_VERSION] = "0.0.0";
            }
            info[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["DeviceFields"].SDK_VERSION] = _internal_common_Version__WEBPACK_IMPORTED_MODULE_3__["default"];
            return info;
        },
        enumerable: true,
        configurable: true
    });
    StitchAuthImpl.prototype.addAuthListener = function (listener) {
        this.listeners.add(listener);
        this.onAuthEvent(listener);
    };
    StitchAuthImpl.prototype.removeAuthListener = function (listener) {
        this.listeners.delete(listener);
    };
    StitchAuthImpl.prototype.onAuthEvent = function (listener) {
        var _this = this;
        if (listener) {
            var auth_1 = this;
            var _1 = new Promise(function (resolve) {
                listener.onAuthEvent(auth_1);
                resolve(undefined);
            });
        }
        else {
            this.listeners.forEach(function (one) {
                _this.onAuthEvent(one);
            });
        }
    };
    StitchAuthImpl.prototype.cleanupRedirect = function () {
        this.jsdomWindow.history.replaceState(null, "", this.pageRootUrl());
        this.authStorage.remove(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].State);
        this.authStorage.remove(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].ProviderName);
        this.authStorage.remove(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].ProviderType);
    };
    StitchAuthImpl.prototype.parseRedirect = function () {
        if (typeof this.jsdomWindow === "undefined") {
            throw new _StitchRedirectError__WEBPACK_IMPORTED_MODULE_6__["default"]("running in a non-browser environment");
        }
        if (!this.jsdomWindow.location || !this.jsdomWindow.location.hash) {
            throw new _StitchRedirectError__WEBPACK_IMPORTED_MODULE_6__["default"]("window location hash was undefined");
        }
        var ourState = this.authStorage.get(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].State);
        var redirectFragment = this.jsdomWindow.location.hash.substring(1);
        return parseRedirectFragment(redirectFragment, ourState, this.appInfo.clientAppId);
    };
    StitchAuthImpl.prototype.processRedirectResult = function (redirectFragment) {
        try {
            if (!redirectFragment.isValid) {
                throw new _StitchRedirectError__WEBPACK_IMPORTED_MODULE_6__["default"]("invalid redirect result");
            }
            if (redirectFragment.lastError) {
                throw new _StitchRedirectError__WEBPACK_IMPORTED_MODULE_6__["default"]("error handling redirect: " + redirectFragment.lastError);
            }
            if (!redirectFragment.authInfo) {
                throw new _StitchRedirectError__WEBPACK_IMPORTED_MODULE_6__["default"]("no user auth value was found: it could not be decoded from fragment");
            }
        }
        catch (err) {
            throw err;
        }
        finally {
            this.cleanupRedirect();
        }
        return redirectFragment.authInfo;
    };
    StitchAuthImpl.prototype.prepareRedirect = function (credential) {
        this.authStorage.set(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].ProviderName, credential.providerName);
        this.authStorage.set(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].ProviderType, credential.providerType);
        var redirectUrl = credential.redirectUrl;
        if (redirectUrl === undefined) {
            redirectUrl = this.pageRootUrl();
        }
        var state = generateState();
        this.authStorage.set(_RedirectKeys__WEBPACK_IMPORTED_MODULE_5__["default"].State, state);
        return { redirectUrl: redirectUrl, state: state };
    };
    StitchAuthImpl.prototype.pageRootUrl = function () {
        return [
            this.jsdomWindow.location.protocol,
            "//",
            this.jsdomWindow.location.host,
            this.jsdomWindow.location.pathname
        ].join("");
    };
    return StitchAuthImpl;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["CoreStitchAuth"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchAuthImpl);
function generateState() {
    var state = "";
    for (var i = 0; i < 64; ++i) {
        state += alphaNumericCharacters.charAt(Math.floor(Math.random() * alphaNumericCharacters.length));
    }
    return state;
}
function unmarshallUserAuth(data) {
    var parts = data.split("$");
    if (parts.length !== 4) {
        throw new _StitchRedirectError__WEBPACK_IMPORTED_MODULE_6__["default"]("invalid user auth data provided while " +
            "marshalling user authentication data: " +
            data);
    }
    var accessToken = parts[0], refreshToken = parts[1], userId = parts[2], deviceId = parts[3];
    return new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_2__["AuthInfo"](userId, deviceId, accessToken, refreshToken);
}
var ParsedRedirectFragment = (function () {
    function ParsedRedirectFragment() {
        this.stateValid = false;
        this.clientAppIdValid = false;
        this.asLink = false;
    }
    Object.defineProperty(ParsedRedirectFragment.prototype, "isValid", {
        get: function () {
            return this.stateValid && this.clientAppIdValid;
        },
        enumerable: true,
        configurable: true
    });
    return ParsedRedirectFragment;
}());
function parseRedirectFragment(fragment, ourState, ourClientAppId) {
    var vars = fragment.split("&");
    var result = new ParsedRedirectFragment();
    vars.forEach(function (kvp) {
        var pairParts = kvp.split("=");
        var pairKey = decodeURIComponent(pairParts[0]);
        switch (pairKey) {
            case _RedirectFragmentFields__WEBPACK_IMPORTED_MODULE_4__["default"].StitchError:
                result.lastError = decodeURIComponent(pairParts[1]);
                break;
            case _RedirectFragmentFields__WEBPACK_IMPORTED_MODULE_4__["default"].UserAuth:
                try {
                    result.authInfo = unmarshallUserAuth(decodeURIComponent(pairParts[1]));
                }
                catch (e) {
                    result.lastError = e;
                }
                break;
            case _RedirectFragmentFields__WEBPACK_IMPORTED_MODULE_4__["default"].StitchLink:
                if (pairParts[1] == "ok") {
                    result.asLink = true;
                }
                break;
            case _RedirectFragmentFields__WEBPACK_IMPORTED_MODULE_4__["default"].State:
                var theirState = decodeURIComponent(pairParts[1]);
                if (ourState === theirState) {
                    result.stateValid = true;
                }
                break;
            case _RedirectFragmentFields__WEBPACK_IMPORTED_MODULE_4__["default"].ClientAppId:
                var clientAppId = decodeURIComponent(pairParts[1]);
                if (ourClientAppId === clientAppId) {
                    result.clientAppIdValid = true;
                }
                break;
            default:
                break;
        }
    });
    return result;
}
function isAuthProviderClientFactory(factory) {
    return (factory.getClient !== undefined);
}
//# sourceMappingURL=StitchAuthImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppAuthRoutes.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppAuthRoutes.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchBrowserAppAuthRoutes = (function (_super) {
    __extends(StitchBrowserAppAuthRoutes, _super);
    function StitchBrowserAppAuthRoutes(clientAppId) {
        return _super.call(this, clientAppId) || this;
    }
    StitchBrowserAppAuthRoutes.prototype.getAuthProviderRedirectRoute = function (credential, redirectUrl, state, deviceInfo) {
        return this.getAuthProviderLoginRoute(credential.providerName) + "?redirect=" + encodeURI(redirectUrl) + "&state=" + state + "&device=" + this.uriEncodeObject(deviceInfo);
    };
    StitchBrowserAppAuthRoutes.prototype.getAuthProviderLinkRedirectRoute = function (credential, redirectUrl, state, deviceInfo) {
        return this.getAuthProviderLoginRoute(credential.providerName) + "?redirect=" + encodeURI(redirectUrl) + "&state=" + state + "&device=" + this.uriEncodeObject(deviceInfo) + "&link=true&providerRedirectHeader=true";
    };
    StitchBrowserAppAuthRoutes.prototype.uriEncodeObject = function (obj) {
        return encodeURIComponent(Object(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["base64Encode"])(JSON.stringify(obj)));
    };
    return StitchBrowserAppAuthRoutes;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppAuthRoutes"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchBrowserAppAuthRoutes);
//# sourceMappingURL=StitchBrowserAppAuthRoutes.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppRoutes.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppRoutes.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
/* harmony import */ var _StitchBrowserAppAuthRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StitchBrowserAppAuthRoutes */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppAuthRoutes.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchBrowserAppRoutes = (function (_super) {
    __extends(StitchBrowserAppRoutes, _super);
    function StitchBrowserAppRoutes(clientAppId) {
        var _this = _super.call(this, clientAppId) || this;
        _this.authRoutes = new _StitchBrowserAppAuthRoutes__WEBPACK_IMPORTED_MODULE_1__["default"](clientAppId);
        return _this;
    }
    return StitchBrowserAppRoutes;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppRoutes"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchBrowserAppRoutes);
//# sourceMappingURL=StitchBrowserAppRoutes.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchRedirectError.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchRedirectError.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchRedirectError = (function (_super) {
    __extends(StitchRedirectError, _super);
    function StitchRedirectError(msg) {
        return _super.call(this, msg) || this;
    }
    return StitchRedirectError;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchError"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchRedirectError);
//# sourceMappingURL=StitchRedirectError.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserFactoryImpl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserFactoryImpl.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchUserImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchUserImpl */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserImpl.js");

var StitchUserFactoryImpl = (function () {
    function StitchUserFactoryImpl(auth) {
        this.auth = auth;
    }
    StitchUserFactoryImpl.prototype.makeUser = function (id, loggedInProviderType, loggedInProviderName, userProfile) {
        return new _StitchUserImpl__WEBPACK_IMPORTED_MODULE_0__["default"](id, loggedInProviderType, loggedInProviderName, userProfile, this.auth);
    };
    return StitchUserFactoryImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchUserFactoryImpl);
//# sourceMappingURL=StitchUserFactoryImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserImpl.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserImpl.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchUserImpl = (function (_super) {
    __extends(StitchUserImpl, _super);
    function StitchUserImpl(id, loggedInProviderType, loggedInProviderName, profile, auth) {
        var _this = _super.call(this, id, loggedInProviderType, loggedInProviderName, profile) || this;
        _this.auth = auth;
        return _this;
    }
    StitchUserImpl.prototype.linkWithCredential = function (credential) {
        return this.auth.linkWithCredential(this, credential);
    };
    StitchUserImpl.prototype.linkUserWithRedirect = function (credential) {
        return this.auth.linkWithRedirectInternal(this, credential);
    };
    return StitchUserImpl;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CoreStitchUserImpl"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchUserImpl);
//# sourceMappingURL=StitchUserImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/facebook/FacebookRedirectCredential.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/facebook/FacebookRedirectCredential.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");

var FacebookRedirectCredential = (function () {
    function FacebookRedirectCredential(redirectUrl, providerName, providerType) {
        if (providerName === void 0) { providerName = mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["FacebookAuthProvider"].DEFAULT_NAME; }
        if (providerType === void 0) { providerType = mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["FacebookAuthProvider"].TYPE; }
        this.redirectUrl = redirectUrl;
        this.providerName = providerName;
        this.providerType = providerType;
    }
    return FacebookRedirectCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (FacebookRedirectCredential);
//# sourceMappingURL=FacebookRedirectCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/google/GoogleRedirectCredential.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/google/GoogleRedirectCredential.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");

var GoogleRedirectCredential = (function () {
    function GoogleRedirectCredential(redirectUrl, providerName, providerType) {
        if (providerName === void 0) { providerName = mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthProvider"].DEFAULT_NAME; }
        if (providerType === void 0) { providerType = mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthProvider"].TYPE; }
        this.redirectUrl = redirectUrl;
        this.providerName = providerName;
        this.providerType = providerType;
    }
    return GoogleRedirectCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (GoogleRedirectCredential);
//# sourceMappingURL=GoogleRedirectCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/UserApiKeyAuthProviderClient.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/UserApiKeyAuthProviderClient.js ***!
  \**************************************************************************************************************************/
/*! exports provided: UserApiKeyAuthProviderClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyAuthProviderClient", function() { return UserApiKeyAuthProviderClient; });
/* harmony import */ var _internal_UserApiKeyAuthProviderClientImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/UserApiKeyAuthProviderClientImpl */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/internal/UserApiKeyAuthProviderClientImpl.js");

var UserApiKeyAuthProviderClient;
(function (UserApiKeyAuthProviderClient) {
    UserApiKeyAuthProviderClient.factory = new (function () {
        function class_1() {
        }
        class_1.prototype.getClient = function (authRequestClient, requestClient, routes) {
            return new _internal_UserApiKeyAuthProviderClientImpl__WEBPACK_IMPORTED_MODULE_0__["default"](authRequestClient, routes);
        };
        return class_1;
    }())();
})(UserApiKeyAuthProviderClient || (UserApiKeyAuthProviderClient = {}));
//# sourceMappingURL=UserApiKeyAuthProviderClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/internal/UserApiKeyAuthProviderClientImpl.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/internal/UserApiKeyAuthProviderClientImpl.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserApiKeyAuthProviderClientImpl = (function (_super) {
    __extends(UserApiKeyAuthProviderClientImpl, _super);
    function UserApiKeyAuthProviderClientImpl(requestClient, routes) {
        return _super.call(this, requestClient, routes) || this;
    }
    UserApiKeyAuthProviderClientImpl.prototype.createApiKey = function (name) {
        return _super.prototype.createApiKey.call(this, name);
    };
    UserApiKeyAuthProviderClientImpl.prototype.fetchApiKey = function (keyId) {
        return _super.prototype.fetchApiKey.call(this, keyId);
    };
    UserApiKeyAuthProviderClientImpl.prototype.fetchApiKeys = function () {
        return _super.prototype.fetchApiKeys.call(this);
    };
    UserApiKeyAuthProviderClientImpl.prototype.deleteApiKey = function (keyId) {
        return _super.prototype.deleteApiKey.call(this, keyId);
    };
    UserApiKeyAuthProviderClientImpl.prototype.enableApiKey = function (keyId) {
        return _super.prototype.enableApiKey.call(this, keyId);
    };
    UserApiKeyAuthProviderClientImpl.prototype.disableApiKey = function (keyId) {
        return _super.prototype.disableApiKey.call(this, keyId);
    };
    return UserApiKeyAuthProviderClientImpl;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CoreUserApiKeyAuthProviderClient"]));
/* harmony default export */ __webpack_exports__["default"] = (UserApiKeyAuthProviderClientImpl);
//# sourceMappingURL=UserApiKeyAuthProviderClientImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/UserPasswordAuthProviderClient.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/UserPasswordAuthProviderClient.js ***!
  \******************************************************************************************************************************/
/*! exports provided: UserPasswordAuthProviderClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordAuthProviderClient", function() { return UserPasswordAuthProviderClient; });
/* harmony import */ var _internal_UserPasswordAuthProviderClientImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/UserPasswordAuthProviderClientImpl */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/internal/UserPasswordAuthProviderClientImpl.js");

var UserPasswordAuthProviderClient;
(function (UserPasswordAuthProviderClient) {
    UserPasswordAuthProviderClient.factory = new (function () {
        function class_1() {
        }
        class_1.prototype.getClient = function (authRequestClient, requestClient, routes) {
            return new _internal_UserPasswordAuthProviderClientImpl__WEBPACK_IMPORTED_MODULE_0__["default"](requestClient, routes);
        };
        return class_1;
    }())();
})(UserPasswordAuthProviderClient || (UserPasswordAuthProviderClient = {}));
//# sourceMappingURL=UserPasswordAuthProviderClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/internal/UserPasswordAuthProviderClientImpl.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/internal/UserPasswordAuthProviderClientImpl.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserPasswordAuthProviderClientImpl = (function (_super) {
    __extends(UserPasswordAuthProviderClientImpl, _super);
    function UserPasswordAuthProviderClientImpl(requestClient, routes) {
        return _super.call(this, mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["UserPasswordAuthProvider"].DEFAULT_NAME, requestClient, routes) || this;
    }
    UserPasswordAuthProviderClientImpl.prototype.registerWithEmail = function (email, password) {
        return _super.prototype.registerWithEmailInternal.call(this, email, password);
    };
    UserPasswordAuthProviderClientImpl.prototype.confirmUser = function (token, tokenId) {
        return _super.prototype.confirmUserInternal.call(this, token, tokenId);
    };
    UserPasswordAuthProviderClientImpl.prototype.resendConfirmationEmail = function (email) {
        return _super.prototype.resendConfirmationEmailInternal.call(this, email);
    };
    UserPasswordAuthProviderClientImpl.prototype.resetPassword = function (token, tokenId, password) {
        return _super.prototype.resetPasswordInternal.call(this, token, tokenId, password);
    };
    UserPasswordAuthProviderClientImpl.prototype.sendResetPasswordEmail = function (email) {
        return _super.prototype.sendResetPasswordEmailInternal.call(this, email);
    };
    return UserPasswordAuthProviderClientImpl;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CoreUserPassAuthProviderClient"]));
/* harmony default export */ __webpack_exports__["default"] = (UserPasswordAuthProviderClientImpl);
//# sourceMappingURL=UserPasswordAuthProviderClientImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/StitchAppClientImpl.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/StitchAppClientImpl.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
/* harmony import */ var _auth_internal_StitchAuthImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/internal/StitchAuthImpl */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchAuthImpl.js");
/* harmony import */ var _auth_internal_StitchBrowserAppRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/internal/StitchBrowserAppRoutes */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppRoutes.js");
/* harmony import */ var _services_internal_StitchServiceClientImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/internal/StitchServiceClientImpl */ "./node_modules/mongodb-stitch-browser-core/dist/esm/services/internal/StitchServiceClientImpl.js");




var StitchAppClientImpl = (function () {
    function StitchAppClientImpl(clientAppId, config) {
        this.info = new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientInfo"](clientAppId, config.dataDirectory, config.localAppName, config.localAppVersion);
        this.routes = new _auth_internal_StitchBrowserAppRoutes__WEBPACK_IMPORTED_MODULE_2__["default"](this.info.clientAppId);
        var requestClient = new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppRequestClient"](clientAppId, config.baseUrl, config.transport);
        this.auth = new _auth_internal_StitchAuthImpl__WEBPACK_IMPORTED_MODULE_1__["default"](requestClient, this.routes.authRoutes, config.storage, this.info);
        this.coreClient = new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CoreStitchAppClient"](this.auth, this.routes);
    }
    StitchAppClientImpl.prototype.getServiceClient = function (factory, serviceName) {
        if (isServiceClientFactory(factory)) {
            return factory.getClient(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CoreStitchServiceClientImpl"](this.auth, this.routes.serviceRoutes, ""), this.info);
        }
        else {
            return factory.getNamedClient(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CoreStitchServiceClientImpl"](this.auth, this.routes.serviceRoutes, serviceName), this.info);
        }
    };
    StitchAppClientImpl.prototype.getGeneralServiceClient = function (serviceName) {
        return new _services_internal_StitchServiceClientImpl__WEBPACK_IMPORTED_MODULE_3__["default"](new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CoreStitchServiceClientImpl"](this.auth, this.routes.serviceRoutes, serviceName));
    };
    StitchAppClientImpl.prototype.callFunction = function (name, args) {
        return this.coreClient.callFunction(name, args);
    };
    return StitchAppClientImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchAppClientImpl);
function isServiceClientFactory(factory) {
    return factory.getClient !== undefined;
}
//# sourceMappingURL=StitchAppClientImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/LocalStorage.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/LocalStorage.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var stitchPrefixKey = "__stitch.client";
var LocalStorage = (function () {
    function LocalStorage(suiteName) {
        this.suiteName = suiteName;
    }
    LocalStorage.prototype.getKey = function (forKey) {
        return stitchPrefixKey + "." + this.suiteName + "." + forKey;
    };
    LocalStorage.prototype.get = function (key) {
        return localStorage.getItem(this.getKey(key));
    };
    LocalStorage.prototype.set = function (key, value) {
        localStorage.setItem(this.getKey(key), value);
    };
    LocalStorage.prototype.remove = function (key) {
        localStorage.removeItem(this.getKey(key));
    };
    return LocalStorage;
}());
/* harmony default export */ __webpack_exports__["default"] = (LocalStorage);
//# sourceMappingURL=LocalStorage.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/Version.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/Version.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return version; });
var version = "4.1.3";

//# sourceMappingURL=Version.js.map


/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/EventSourceEventStream.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/EventSourceEventStream.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EventSourceEventStream = (function (_super) {
    __extends(EventSourceEventStream, _super);
    function EventSourceEventStream(evtSrc, onOpen, onOpenError, reconnecter) {
        var _this = _super.call(this, reconnecter) || this;
        _this.evtSrc = evtSrc;
        _this.onOpenError = onOpenError;
        _this.openedOnce = false;
        _this.evtSrc.onopen = function (e) {
            onOpen(_this);
            _this.openedOnce = true;
        };
        _this.reset();
        return _this;
    }
    EventSourceEventStream.prototype.open = function () {
        if (this.closed) {
            throw new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientError"](mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"].StreamClosed);
        }
    };
    EventSourceEventStream.prototype.reset = function () {
        var _this = this;
        this.evtSrc.onmessage = function (e) {
            _this.events.push(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Event"](mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Event"].MESSAGE_EVENT, e.data));
            _this.poll();
        };
        this.evtSrc.onerror = function (e) {
            if (e instanceof MessageEvent) {
                _this.lastErr = e.data;
                _this.events.push(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Event"](mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchEvent"].ERROR_EVENT_NAME, _this.lastErr));
                _this.close();
                _this.poll();
                return;
            }
            if (!_this.openedOnce) {
                _this.close();
                _this.onOpenError(new Error("event source failed to open and will not reconnect; check network log for more details"));
                return;
            }
            _this.evtSrc.close();
            _this.reconnect();
        };
    };
    EventSourceEventStream.prototype.onReconnect = function (next) {
        this.evtSrc = next.evtSrc;
        this.reset();
        this.events = next.events.concat(this.events);
    };
    EventSourceEventStream.prototype.afterClose = function () {
        this.evtSrc.close();
    };
    return EventSourceEventStream;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["BaseEventStream"]));
/* harmony default export */ __webpack_exports__["default"] = (EventSourceEventStream);
//# sourceMappingURL=EventSourceEventStream.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/FetchStreamTransport.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/FetchStreamTransport.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
/* harmony import */ var _ReaderEventStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReaderEventStream */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/ReaderEventStream.js");
/* harmony import */ var _EventSourceEventStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceEventStream */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/EventSourceEventStream.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var FetchStreamTransport = (function () {
    function FetchStreamTransport() {
    }
    FetchStreamTransport.prototype.roundTrip = function (request) {
        var responsePromise = cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(request.url, {
            body: request.body,
            headers: request.headers,
            method: request.method,
            mode: 'cors'
        });
        var responseTextPromise = responsePromise.then(function (response) {
            return response.text();
        });
        return Promise.all([responsePromise, responseTextPromise]).then(function (values) {
            var response = values[0];
            var body = values[1];
            var headers = {};
            response.headers.forEach(function (value, key) {
                headers[key] = value;
            });
            return new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Response"](headers, response.status, body);
        });
    };
    FetchStreamTransport.prototype.stream = function (request, open, retryRequest) {
        if (open === void 0) { open = true; }
        var rsSupported;
        try {
            new ReadableStream();
            rsSupported = true;
        }
        catch (err) {
            rsSupported = false;
        }
        var headers = __assign({}, request.headers);
        headers[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Headers"].ACCEPT] = mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["ContentTypes"].TEXT_EVENT_STREAM;
        headers[mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Headers"].CONTENT_TYPE] = mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["ContentTypes"].TEXT_EVENT_STREAM;
        if (!rsSupported) {
            return cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(request.url + "&stitch_validate=true", {
                body: request.body,
                headers: headers,
                method: request.method,
                mode: 'cors'
            }).then(function (response) {
                var headers = {};
                response.headers.forEach(function (value, key) {
                    headers[key] = value;
                });
                if (response.status < 200 || response.status >= 300) {
                    return response.text()
                        .then(function (body) { return Object(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["handleRequestError"])(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Response"](headers, response.status, body)); });
                }
                return new Promise(function (resolve, reject) {
                    new _EventSourceEventStream__WEBPACK_IMPORTED_MODULE_2__["default"](new EventSource(request.url), function (stream) { return resolve(stream); }, function (error) { return reject(error); }, retryRequest ?
                        function () { return retryRequest().then(function (es) { return es; }); }
                        : undefined);
                });
            });
        }
        return cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(request.url, {
            body: request.body,
            headers: headers,
            method: request.method,
            mode: 'cors'
        }).then(function (response) {
            var headers = {};
            response.headers.forEach(function (value, key) {
                headers[key] = value;
            });
            if (response.status < 200 || response.status >= 300) {
                return response.text()
                    .then(function (body) { return Object(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["handleRequestError"])(new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Response"](headers, response.status, body)); });
            }
            if (!retryRequest) {
                throw new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientError"](mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"].StreamClosed);
            }
            if (!response.body) {
                throw new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientError"](mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"].StreamingNotSupported);
            }
            return Promise.resolve(new _ReaderEventStream__WEBPACK_IMPORTED_MODULE_1__["default"](response.body, open, retryRequest ? function () {
                return retryRequest().then(function (es) { return es; });
            } : undefined));
        });
    };
    return FetchStreamTransport;
}());
/* harmony default export */ __webpack_exports__["default"] = (FetchStreamTransport);
//# sourceMappingURL=FetchStreamTransport.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/ReaderEventStream.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/ReaderEventStream.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ReaderEventStream = (function (_super) {
    __extends(ReaderEventStream, _super);
    function ReaderEventStream(readerStream, open, reconnecter) {
        var _this = _super.call(this, reconnecter) || this;
        _this.readerStream = readerStream;
        if (open) {
            _this.reset();
        }
        return _this;
    }
    ReaderEventStream.prototype.open = function () {
        if (this.closed) {
            throw new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientError"](mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"].StreamClosed);
        }
        this.reset();
    };
    ReaderEventStream.prototype.reset = function () {
        this.reader = this.readerStream.getReader();
        this.dataBuffer = new Array();
        this.eventName = "";
        this.bufferPos = 0;
        this.buffer = new Array();
        this.doneOnce = false;
        this.processLine();
    };
    ReaderEventStream.prototype.onReconnect = function (next) {
        this.readerStream = next.readerStream;
        this.reset();
    };
    ReaderEventStream.prototype.readLine = function () {
        var _this = this;
        for (; this.bufferPos < this.buffer.length; this.bufferPos++) {
            var spliceAt = -1;
            if (this.buffer[this.bufferPos] === 0x0D && this.bufferPos + 1 > this.buffer.length && this.buffer[this.bufferPos] === 0x0A) {
                spliceAt = this.bufferPos + 2;
            }
            else if (this.buffer[this.bufferPos] === 0x0A) {
                spliceAt = this.bufferPos + 1;
            }
            else if (this.doneOnce && this.buffer[this.bufferPos] === 0x0D) {
                spliceAt = this.bufferPos + 1;
            }
            else if (this.doneOnce) {
                spliceAt = 0;
            }
            if (spliceAt !== -1) {
                var line = Object(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["utf8Slice"])(new Uint8Array(this.buffer.slice(0, this.bufferPos)), 0, this.bufferPos);
                this.buffer.splice(0, spliceAt);
                this.bufferPos = 0;
                return Promise.resolve({ line: line, ok: true });
            }
        }
        if (this.doneOnce) {
            return Promise.resolve({ line: "", ok: false });
        }
        return this.reader.read().then(function (result) {
            if (result.done) {
                _this.doneOnce = true;
                return _this.readLine();
            }
            var bytes = result.value;
            for (var idx = 0; idx < bytes.length; idx++) {
                _this.buffer.push(bytes[idx]);
            }
            return _this.readLine();
        });
    };
    ReaderEventStream.prototype.processField = function (field, value) {
        if (field === "event") {
            this.eventName = value;
        }
        else if (field === "data") {
            if (this.dataBuffer.length !== 0) {
                this.dataBuffer.push('\n');
            }
            for (var i = 0; i < value.length; i++) {
                this.dataBuffer.push(value[i]);
            }
        }
        else if (field === "id") {
        }
        else if (field === "retry") {
        }
        else {
        }
    };
    ReaderEventStream.prototype.dispatchEvent = function () {
        if (this.dataBuffer.length === 0) {
            this.eventName = "";
            return;
        }
        var event = new mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Event"](this.eventName ? this.eventName : mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Event"].MESSAGE_EVENT, this.dataBuffer.join(''));
        this.dataBuffer = new Array();
        this.eventName = "";
        if (event.eventName === mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchEvent"].ERROR_EVENT_NAME) {
            this.lastErr = event.data;
            this.close();
        }
        this.events.push(event);
        this.poll();
    };
    ReaderEventStream.prototype.processLine = function () {
        var _this = this;
        this.readLine().then(function (result) {
            if (!result.ok) {
                if (_this.closed) {
                    return;
                }
                _this.reconnect();
                return;
            }
            var line = result.line;
            if (line.length === 0) {
                _this.dispatchEvent();
            }
            else if (line.startsWith(":")) {
            }
            else if (line.includes(":")) {
                var colonIdx = line.indexOf(":");
                var field = line.substring(0, colonIdx);
                var value = line.substring(colonIdx + 1);
                value = value.startsWith(" ") ? value.substring(1) : value;
                _this.processField(field, value);
            }
            else {
                _this.processField(line, "");
            }
            _this.processLine();
        }).catch(function (error) { return _this.reconnect(error); });
    };
    ReaderEventStream.prototype.afterClose = function () {
        this.reader.cancel();
    };
    return ReaderEventStream;
}(mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["BaseEventStream"]));
/* harmony default export */ __webpack_exports__["default"] = (ReaderEventStream);
//# sourceMappingURL=ReaderEventStream.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/index.js ***!
  \********************************************************************/
/*! exports provided: BSON, AnonymousAuthProvider, AnonymousCredential, CustomAuthProvider, CustomCredential, FacebookAuthProvider, FacebookCredential, GoogleAuthProvider, GoogleCredential, ServerApiKeyAuthProvider, ServerApiKeyCredential, UserApiKeyAuthProvider, UserApiKey, UserApiKeyCredential, UserPasswordAuthProvider, UserPasswordCredential, StitchAppClientInfo, StitchAppClientConfiguration, StitchClientError, StitchClientErrorCode, StitchRequestError, StitchRequestErrorCode, StitchServiceError, StitchServiceErrorCode, StitchUserIdentity, MemoryStorage, UserType, Stitch, UserApiKeyAuthProviderClient, UserPasswordAuthProviderClient, FacebookRedirectCredential, GoogleRedirectCredential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BSON", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["BSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousAuthProvider", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["AnonymousAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousCredential", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["AnonymousCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomAuthProvider", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CustomAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomCredential", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["CustomCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookAuthProvider", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["FacebookAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookCredential", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["FacebookCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthProvider", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleCredential", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["GoogleCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerApiKeyAuthProvider", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["ServerApiKeyAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerApiKeyCredential", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["ServerApiKeyCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyAuthProvider", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["UserApiKeyAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKey", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["UserApiKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyCredential", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["UserApiKeyCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordAuthProvider", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["UserPasswordAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordCredential", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["UserPasswordCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppClientInfo", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppClientConfiguration", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchClientError", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchClientErrorCode", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchRequestError", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchRequestError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchRequestErrorCode", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchRequestErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchServiceError", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchServiceError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchServiceErrorCode", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchServiceErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchUserIdentity", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["StitchUserIdentity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryStorage", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["MemoryStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["UserType"]; });

/* harmony import */ var _core_auth_providers_facebook_FacebookRedirectCredential__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth/providers/facebook/FacebookRedirectCredential */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/facebook/FacebookRedirectCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookRedirectCredential", function() { return _core_auth_providers_facebook_FacebookRedirectCredential__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_auth_providers_google_GoogleRedirectCredential__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth/providers/google/GoogleRedirectCredential */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/google/GoogleRedirectCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleRedirectCredential", function() { return _core_auth_providers_google_GoogleRedirectCredential__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_auth_providers_userapikey_UserApiKeyAuthProviderClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/providers/userapikey/UserApiKeyAuthProviderClient */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/UserApiKeyAuthProviderClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyAuthProviderClient", function() { return _core_auth_providers_userapikey_UserApiKeyAuthProviderClient__WEBPACK_IMPORTED_MODULE_3__["UserApiKeyAuthProviderClient"]; });

/* harmony import */ var _core_auth_providers_userpassword_UserPasswordAuthProviderClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/providers/userpassword/UserPasswordAuthProviderClient */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/UserPasswordAuthProviderClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordAuthProviderClient", function() { return _core_auth_providers_userpassword_UserPasswordAuthProviderClient__WEBPACK_IMPORTED_MODULE_4__["UserPasswordAuthProviderClient"]; });

/* harmony import */ var _core_Stitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Stitch */ "./node_modules/mongodb-stitch-browser-core/dist/esm/core/Stitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stitch", function() { return _core_Stitch__WEBPACK_IMPORTED_MODULE_5__["default"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-core/dist/esm/services/internal/StitchServiceClientImpl.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-core/dist/esm/services/internal/StitchServiceClientImpl.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var StitchServiceClientImpl = (function () {
    function StitchServiceClientImpl(proxy) {
        this.proxy = proxy;
    }
    StitchServiceClientImpl.prototype.callFunction = function (name, args, codec) {
        return this.proxy.callFunction(name, args, codec);
    };
    StitchServiceClientImpl.prototype.streamFunction = function (name, args, codec) {
        return this.proxy.streamFunction(name, args, codec);
    };
    return StitchServiceClientImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchServiceClientImpl);
//# sourceMappingURL=StitchServiceClientImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js ***!
  \*******************************************************************/
/*! exports provided: BSON, AnonymousAuthProvider, AnonymousCredential, CustomAuthProvider, CustomCredential, FacebookAuthProvider, FacebookCredential, GoogleAuthProvider, GoogleCredential, ServerApiKeyAuthProvider, ServerApiKeyCredential, UserApiKeyAuthProvider, UserApiKey, UserApiKeyCredential, UserPasswordAuthProvider, UserPasswordCredential, StitchAppClientInfo, StitchAppClientConfiguration, StitchClientError, StitchClientErrorCode, StitchRequestError, StitchRequestErrorCode, StitchServiceError, StitchServiceErrorCode, StitchUserIdentity, MemoryStorage, UserType, Stitch, UserApiKeyAuthProviderClient, UserPasswordAuthProviderClient, FacebookRedirectCredential, GoogleRedirectCredential, RemoteInsertManyResult, RemoteMongoReadOperation, RemoteMongoClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-browser-core */ "./node_modules/mongodb-stitch-browser-core/dist/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BSON", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["BSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousAuthProvider", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["AnonymousAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["AnonymousCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomAuthProvider", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["CustomAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["CustomCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookAuthProvider", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["FacebookAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["FacebookCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthProvider", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["GoogleCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerApiKeyAuthProvider", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["ServerApiKeyAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerApiKeyCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["ServerApiKeyCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyAuthProvider", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserApiKeyAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKey", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserApiKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserApiKeyCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordAuthProvider", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserPasswordAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserPasswordCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppClientInfo", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppClientConfiguration", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchAppClientConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchClientError", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchClientError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchClientErrorCode", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchRequestError", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchRequestError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchRequestErrorCode", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchRequestErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchServiceError", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchServiceError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchServiceErrorCode", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchServiceErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchUserIdentity", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["StitchUserIdentity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryStorage", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["MemoryStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stitch", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["Stitch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyAuthProviderClient", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserApiKeyAuthProviderClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordAuthProviderClient", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["UserPasswordAuthProviderClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookRedirectCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["FacebookRedirectCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleRedirectCredential", function() { return mongodb_stitch_browser_core__WEBPACK_IMPORTED_MODULE_0__["GoogleRedirectCredential"]; });

/* harmony import */ var mongodb_stitch_browser_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb-stitch-browser-services-mongodb-remote */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteInsertManyResult", function() { return mongodb_stitch_browser_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_1__["RemoteInsertManyResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteMongoReadOperation", function() { return mongodb_stitch_browser_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_1__["RemoteMongoReadOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteMongoClient", function() { return mongodb_stitch_browser_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_1__["RemoteMongoClient"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoClient.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoClient.js ***!
  \***************************************************************************************************/
/*! exports provided: RemoteMongoClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteMongoClient", function() { return RemoteMongoClient; });
/* harmony import */ var mongodb_stitch_core_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-services-mongodb-remote */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/index.js");
/* harmony import */ var _internal_RemoteMongoClientImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/RemoteMongoClientImpl */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoClientImpl.js");


var RemoteMongoClient;
(function (RemoteMongoClient) {
    RemoteMongoClient.factory = new (function () {
        function class_1() {
        }
        class_1.prototype.getNamedClient = function (service, client) {
            return new _internal_RemoteMongoClientImpl__WEBPACK_IMPORTED_MODULE_1__["default"](new mongodb_stitch_core_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_0__["CoreRemoteMongoClientImpl"](service));
        };
        return class_1;
    }())();
})(RemoteMongoClient || (RemoteMongoClient = {}));
//# sourceMappingURL=RemoteMongoClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoCursor.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoCursor.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RemoteMongoCursor = (function () {
    function RemoteMongoCursor(proxy) {
        this.proxy = proxy;
    }
    RemoteMongoCursor.prototype.next = function () {
        return Promise.resolve(this.proxy.next().value);
    };
    return RemoteMongoCursor;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteMongoCursor);
//# sourceMappingURL=RemoteMongoCursor.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoReadOperation.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoReadOperation.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoteMongoCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteMongoCursor */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoCursor.js");

var RemoteMongoReadOperation = (function () {
    function RemoteMongoReadOperation(proxy) {
        this.proxy = proxy;
    }
    RemoteMongoReadOperation.prototype.first = function () {
        return this.proxy.first();
    };
    RemoteMongoReadOperation.prototype.toArray = function () {
        return this.proxy.toArray();
    };
    RemoteMongoReadOperation.prototype.asArray = function () {
        return this.toArray();
    };
    RemoteMongoReadOperation.prototype.iterator = function () {
        return this.proxy.iterator().then(function (res) { return new _RemoteMongoCursor__WEBPACK_IMPORTED_MODULE_0__["default"](res); });
    };
    return RemoteMongoReadOperation;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteMongoReadOperation);
//# sourceMappingURL=RemoteMongoReadOperation.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/index.js ***!
  \***************************************************************************************/
/*! exports provided: RemoteInsertManyResult, RemoteMongoReadOperation, RemoteMongoClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-services-mongodb-remote */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteInsertManyResult", function() { return mongodb_stitch_core_services_mongodb_remote__WEBPACK_IMPORTED_MODULE_0__["RemoteInsertManyResult"]; });

/* harmony import */ var _RemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoteMongoReadOperation */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoReadOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteMongoReadOperation", function() { return _RemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _RemoteMongoClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoteMongoClient */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteMongoClient", function() { return _RemoteMongoClient__WEBPACK_IMPORTED_MODULE_2__["RemoteMongoClient"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoClientImpl.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoClientImpl.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoteMongoDatabaseImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteMongoDatabaseImpl */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoDatabaseImpl.js");

var RemoteMongoClientImpl = (function () {
    function RemoteMongoClientImpl(proxy) {
        this.proxy = proxy;
    }
    RemoteMongoClientImpl.prototype.db = function (name) {
        return new _RemoteMongoDatabaseImpl__WEBPACK_IMPORTED_MODULE_0__["default"](this.proxy.db(name));
    };
    return RemoteMongoClientImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteMongoClientImpl);
//# sourceMappingURL=RemoteMongoClientImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoCollectionImpl.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoCollectionImpl.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../RemoteMongoReadOperation */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoReadOperation.js");

var RemoteMongoCollectionImpl = (function () {
    function RemoteMongoCollectionImpl(proxy) {
        this.proxy = proxy;
        this.namespace = this.proxy.namespace;
    }
    RemoteMongoCollectionImpl.prototype.withCollectionType = function (codec) {
        return new RemoteMongoCollectionImpl(this.proxy.withCollectionType(codec));
    };
    RemoteMongoCollectionImpl.prototype.count = function (query, options) {
        return this.proxy.count(query, options);
    };
    RemoteMongoCollectionImpl.prototype.find = function (query, options) {
        return new _RemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_0__["default"](this.proxy.find(query, options));
    };
    RemoteMongoCollectionImpl.prototype.aggregate = function (pipeline) {
        return new _RemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_0__["default"](this.proxy.aggregate(pipeline));
    };
    RemoteMongoCollectionImpl.prototype.insertOne = function (doc) {
        return this.proxy.insertOne(doc);
    };
    RemoteMongoCollectionImpl.prototype.insertMany = function (docs) {
        return this.proxy.insertMany(docs);
    };
    RemoteMongoCollectionImpl.prototype.deleteOne = function (query) {
        return this.proxy.deleteOne(query);
    };
    RemoteMongoCollectionImpl.prototype.deleteMany = function (query) {
        return this.proxy.deleteMany(query);
    };
    RemoteMongoCollectionImpl.prototype.updateOne = function (query, update, updateOptions) {
        return this.proxy.updateOne(query, update, updateOptions);
    };
    RemoteMongoCollectionImpl.prototype.updateMany = function (query, update, updateOptions) {
        return this.proxy.updateMany(query, update, updateOptions);
    };
    RemoteMongoCollectionImpl.prototype.watch = function (ids) {
        return this.proxy.watch(ids);
    };
    return RemoteMongoCollectionImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteMongoCollectionImpl);
//# sourceMappingURL=RemoteMongoCollectionImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoDatabaseImpl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoDatabaseImpl.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoteMongoCollectionImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteMongoCollectionImpl */ "./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoCollectionImpl.js");

var RemoteMongoDatabaseImpl = (function () {
    function RemoteMongoDatabaseImpl(proxy) {
        this.proxy = proxy;
        this.name = this.proxy.name;
    }
    RemoteMongoDatabaseImpl.prototype.collection = function (name, codec) {
        return new _RemoteMongoCollectionImpl__WEBPACK_IMPORTED_MODULE_0__["default"](this.proxy.collection(name, codec));
    };
    return RemoteMongoDatabaseImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteMongoDatabaseImpl);
//# sourceMappingURL=RemoteMongoDatabaseImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientConfiguration.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientConfiguration.js ***!
  \***************************************************************************************/
/*! exports provided: StitchAppClientConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchAppClientConfiguration", function() { return StitchAppClientConfiguration; });
/* harmony import */ var _StitchClientConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchClientConfiguration */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchAppClientConfiguration = (function (_super) {
    __extends(StitchAppClientConfiguration, _super);
    function StitchAppClientConfiguration(config, localAppName, localAppVersion) {
        var _this = _super.call(this, config.baseUrl, config.storage, config.dataDirectory, config.transport) || this;
        _this.localAppVersion = localAppVersion;
        _this.localAppName = localAppName;
        return _this;
    }
    StitchAppClientConfiguration.prototype.builder = function () {
        return new StitchAppClientConfiguration.Builder(this);
    };
    return StitchAppClientConfiguration;
}(_StitchClientConfiguration__WEBPACK_IMPORTED_MODULE_0__["StitchClientConfiguration"]));

(function (StitchAppClientConfiguration) {
    var Builder = (function (_super) {
        __extends(Builder, _super);
        function Builder(config) {
            var _this = _super.call(this, config) || this;
            if (config) {
                _this.localAppVersion = config.localAppVersion;
                _this.localAppName = config.localAppName;
            }
            return _this;
        }
        Builder.prototype.withLocalAppName = function (localAppName) {
            this.localAppName = localAppName;
            return this;
        };
        Builder.prototype.withLocalAppVersion = function (localAppVersion) {
            this.localAppVersion = localAppVersion;
            return this;
        };
        Builder.prototype.build = function () {
            var config = _super.prototype.build.call(this);
            return new StitchAppClientConfiguration(config, this.localAppName, this.localAppVersion);
        };
        return Builder;
    }(_StitchClientConfiguration__WEBPACK_IMPORTED_MODULE_0__["StitchClientConfiguration"].Builder));
    StitchAppClientConfiguration.Builder = Builder;
})(StitchAppClientConfiguration || (StitchAppClientConfiguration = {}));
//# sourceMappingURL=StitchAppClientConfiguration.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientInfo.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientInfo.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var StitchAppClientInfo = (function () {
    function StitchAppClientInfo(clientAppId, dataDirectory, localAppName, localAppVersion) {
        this.clientAppId = clientAppId;
        this.dataDirectory = dataDirectory;
        this.localAppName = localAppName;
        this.localAppVersion = localAppVersion;
    }
    return StitchAppClientInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchAppClientInfo);
//# sourceMappingURL=StitchAppClientInfo.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration.js ***!
  \************************************************************************************/
/*! exports provided: StitchClientConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchClientConfiguration", function() { return StitchClientConfiguration; });
var StitchClientConfiguration = (function () {
    function StitchClientConfiguration(baseUrl, storage, dataDirectory, transport) {
        this.baseUrl = baseUrl;
        this.storage = storage;
        this.dataDirectory = dataDirectory;
        this.transport = transport;
    }
    StitchClientConfiguration.prototype.builder = function () {
        return new StitchClientConfiguration.Builder(this);
    };
    return StitchClientConfiguration;
}());

(function (StitchClientConfiguration) {
    var Builder = (function () {
        function Builder(config) {
            if (config) {
                this.baseUrl = config.baseUrl;
                this.storage = config.storage;
                this.dataDirectory = config.dataDirectory;
                this.transport = config.transport;
            }
        }
        Builder.prototype.withBaseUrl = function (baseUrl) {
            this.baseUrl = baseUrl;
            return this;
        };
        Builder.prototype.withStorage = function (storage) {
            this.storage = storage;
            return this;
        };
        Builder.prototype.withDataDirectory = function (dataDirectory) {
            this.dataDirectory = dataDirectory;
            return this;
        };
        Builder.prototype.withTransport = function (transport) {
            this.transport = transport;
            return this;
        };
        Builder.prototype.build = function () {
            return new StitchClientConfiguration(this.baseUrl, this.storage, this.dataDirectory, this.transport);
        };
        return Builder;
    }());
    StitchClientConfiguration.Builder = Builder;
})(StitchClientConfiguration || (StitchClientConfiguration = {}));
//# sourceMappingURL=StitchClientConfiguration.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientError.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientError.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchClientErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js");
/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchClientError = (function (_super) {
    __extends(StitchClientError, _super);
    function StitchClientError(errorCode) {
        var _this = this;
        var message = "(" + _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"][errorCode] + "): " + _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_0__["clientErrorCodeDescs"][errorCode];
        _this = _super.call(this, message) || this;
        _this.errorCode = errorCode;
        _this.errorCodeName = _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_0__["StitchClientErrorCode"][errorCode];
        return _this;
    }
    return StitchClientError;
}(_StitchError__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchClientError);
//# sourceMappingURL=StitchClientError.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js ***!
  \********************************************************************************/
/*! exports provided: StitchClientErrorCode, clientErrorCodeDescs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchClientErrorCode", function() { return StitchClientErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientErrorCodeDescs", function() { return clientErrorCodeDescs; });
var _a;
var StitchClientErrorCode;
(function (StitchClientErrorCode) {
    StitchClientErrorCode[StitchClientErrorCode["LoggedOutDuringRequest"] = 0] = "LoggedOutDuringRequest";
    StitchClientErrorCode[StitchClientErrorCode["MustAuthenticateFirst"] = 1] = "MustAuthenticateFirst";
    StitchClientErrorCode[StitchClientErrorCode["UserNoLongerValid"] = 2] = "UserNoLongerValid";
    StitchClientErrorCode[StitchClientErrorCode["CouldNotLoadPersistedAuthInfo"] = 3] = "CouldNotLoadPersistedAuthInfo";
    StitchClientErrorCode[StitchClientErrorCode["CouldNotPersistAuthInfo"] = 4] = "CouldNotPersistAuthInfo";
    StitchClientErrorCode[StitchClientErrorCode["StreamingNotSupported"] = 5] = "StreamingNotSupported";
    StitchClientErrorCode[StitchClientErrorCode["StreamClosed"] = 6] = "StreamClosed";
})(StitchClientErrorCode || (StitchClientErrorCode = {}));
var clientErrorCodeDescs = (_a = {},
    _a[StitchClientErrorCode.LoggedOutDuringRequest] = "logged out while making a request to Stitch",
    _a[StitchClientErrorCode.MustAuthenticateFirst] = "method called requires being authenticated",
    _a[StitchClientErrorCode.UserNoLongerValid] = "user instance being accessed is no longer valid; please get a new user with auth.getUser()",
    _a[StitchClientErrorCode.CouldNotLoadPersistedAuthInfo] = "failed to load stored auth information for Stitch",
    _a[StitchClientErrorCode.CouldNotPersistAuthInfo] = "failed to save auth information for Stitch",
    _a[StitchClientErrorCode.StreamingNotSupported] = "streaming not supported in this SDK",
    _a[StitchClientErrorCode.StreamClosed] = "stream is closed",
    _a);
//# sourceMappingURL=StitchClientErrorCode.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _Error = function (message) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this);
    }
    this.message = message;
    this.name = this.constructor.name;
};
_Error.prototype = Object.create(Error.prototype);
var StitchError = (function (_super) {
    __extends(StitchError, _super);
    function StitchError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StitchError;
}(_Error));
/* harmony default export */ __webpack_exports__["default"] = (StitchError);
//# sourceMappingURL=StitchError.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
/* harmony import */ var _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StitchRequestErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchRequestError = (function (_super) {
    __extends(StitchRequestError, _super);
    function StitchRequestError(underlyingError, errorCode) {
        var _this = this;
        var message = "(" + _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_1__["StitchRequestErrorCode"][errorCode] + "): " + _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_1__["requestErrorCodeDescs"][errorCode] + ": " + underlyingError.message;
        _this = _super.call(this, message) || this;
        _this.underlyingError = underlyingError;
        _this.errorCode = errorCode;
        _this.errorCodeName = _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_1__["StitchRequestErrorCode"][errorCode];
        return _this;
    }
    return StitchRequestError;
}(_StitchError__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchRequestError);
//# sourceMappingURL=StitchRequestError.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js ***!
  \*********************************************************************************/
/*! exports provided: StitchRequestErrorCode, requestErrorCodeDescs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchRequestErrorCode", function() { return StitchRequestErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestErrorCodeDescs", function() { return requestErrorCodeDescs; });
var _a;
var StitchRequestErrorCode;
(function (StitchRequestErrorCode) {
    StitchRequestErrorCode[StitchRequestErrorCode["TRANSPORT_ERROR"] = 0] = "TRANSPORT_ERROR";
    StitchRequestErrorCode[StitchRequestErrorCode["DECODING_ERROR"] = 1] = "DECODING_ERROR";
    StitchRequestErrorCode[StitchRequestErrorCode["ENCODING_ERROR"] = 2] = "ENCODING_ERROR";
})(StitchRequestErrorCode || (StitchRequestErrorCode = {}));
var requestErrorCodeDescs = (_a = {},
    _a[StitchRequestErrorCode.TRANSPORT_ERROR] = "the request transport encountered an error communicating with Stitch",
    _a[StitchRequestErrorCode.DECODING_ERROR] = "an error occurred while decoding a response from Stitch",
    _a[StitchRequestErrorCode.ENCODING_ERROR] = "an error occurred while encoding a request for Stitch",
    _a);
//# sourceMappingURL=StitchRequestErrorCode.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
/* harmony import */ var _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StitchServiceErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchServiceError = (function (_super) {
    __extends(StitchServiceError, _super);
    function StitchServiceError(message, errorCode) {
        if (errorCode === void 0) { errorCode = _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_1__["StitchServiceErrorCode"].Unknown; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.errorCode = errorCode;
        _this.errorCodeName = _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_1__["StitchServiceErrorCode"][errorCode];
        return _this;
    }
    return StitchServiceError;
}(_StitchError__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchServiceError);
//# sourceMappingURL=StitchServiceError.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js ***!
  \*********************************************************************************/
/*! exports provided: StitchServiceErrorCode, stitchServiceErrorCodeFromApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchServiceErrorCode", function() { return StitchServiceErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stitchServiceErrorCodeFromApi", function() { return stitchServiceErrorCodeFromApi; });
var StitchServiceErrorCode;
(function (StitchServiceErrorCode) {
    StitchServiceErrorCode[StitchServiceErrorCode["MissingAuthReq"] = 0] = "MissingAuthReq";
    StitchServiceErrorCode[StitchServiceErrorCode["InvalidSession"] = 1] = "InvalidSession";
    StitchServiceErrorCode[StitchServiceErrorCode["UserAppDomainMismatch"] = 2] = "UserAppDomainMismatch";
    StitchServiceErrorCode[StitchServiceErrorCode["DomainNotAllowed"] = 3] = "DomainNotAllowed";
    StitchServiceErrorCode[StitchServiceErrorCode["ReadSizeLimitExceeded"] = 4] = "ReadSizeLimitExceeded";
    StitchServiceErrorCode[StitchServiceErrorCode["InvalidParameter"] = 5] = "InvalidParameter";
    StitchServiceErrorCode[StitchServiceErrorCode["MissingParameter"] = 6] = "MissingParameter";
    StitchServiceErrorCode[StitchServiceErrorCode["TwilioError"] = 7] = "TwilioError";
    StitchServiceErrorCode[StitchServiceErrorCode["GCMError"] = 8] = "GCMError";
    StitchServiceErrorCode[StitchServiceErrorCode["HTTPError"] = 9] = "HTTPError";
    StitchServiceErrorCode[StitchServiceErrorCode["AWSError"] = 10] = "AWSError";
    StitchServiceErrorCode[StitchServiceErrorCode["MongoDBError"] = 11] = "MongoDBError";
    StitchServiceErrorCode[StitchServiceErrorCode["ArgumentsNotAllowed"] = 12] = "ArgumentsNotAllowed";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionExecutionError"] = 13] = "FunctionExecutionError";
    StitchServiceErrorCode[StitchServiceErrorCode["NoMatchingRuleFound"] = 14] = "NoMatchingRuleFound";
    StitchServiceErrorCode[StitchServiceErrorCode["InternalServerError"] = 15] = "InternalServerError";
    StitchServiceErrorCode[StitchServiceErrorCode["AuthProviderNotFound"] = 16] = "AuthProviderNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["AuthProviderAlreadyExists"] = 17] = "AuthProviderAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceNotFound"] = 18] = "ServiceNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceTypeNotFound"] = 19] = "ServiceTypeNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceAlreadyExists"] = 20] = "ServiceAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceCommandNotFound"] = 21] = "ServiceCommandNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ValueNotFound"] = 22] = "ValueNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ValueAlreadyExists"] = 23] = "ValueAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["ValueDuplicateName"] = 24] = "ValueDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionNotFound"] = 25] = "FunctionNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionAlreadyExists"] = 26] = "FunctionAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionDuplicateName"] = 27] = "FunctionDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionSyntaxError"] = 28] = "FunctionSyntaxError";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionInvalid"] = 29] = "FunctionInvalid";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookNotFound"] = 30] = "IncomingWebhookNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookAlreadyExists"] = 31] = "IncomingWebhookAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookDuplicateName"] = 32] = "IncomingWebhookDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["RuleNotFound"] = 33] = "RuleNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ApiKeyNotFound"] = 34] = "ApiKeyNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["RuleAlreadyExists"] = 35] = "RuleAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["RuleDuplicateName"] = 36] = "RuleDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["AuthProviderDuplicateName"] = 37] = "AuthProviderDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["RestrictedHost"] = 38] = "RestrictedHost";
    StitchServiceErrorCode[StitchServiceErrorCode["ApiKeyAlreadyExists"] = 39] = "ApiKeyAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookAuthFailed"] = 40] = "IncomingWebhookAuthFailed";
    StitchServiceErrorCode[StitchServiceErrorCode["ExecutionTimeLimitExceeded"] = 41] = "ExecutionTimeLimitExceeded";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionNotCallable"] = 42] = "FunctionNotCallable";
    StitchServiceErrorCode[StitchServiceErrorCode["UserAlreadyConfirmed"] = 43] = "UserAlreadyConfirmed";
    StitchServiceErrorCode[StitchServiceErrorCode["UserNotFound"] = 44] = "UserNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["UserDisabled"] = 45] = "UserDisabled";
    StitchServiceErrorCode[StitchServiceErrorCode["Unknown"] = 46] = "Unknown";
})(StitchServiceErrorCode || (StitchServiceErrorCode = {}));
var apiErrorCodes = {
    MissingAuthReq: StitchServiceErrorCode.MissingAuthReq,
    InvalidSession: StitchServiceErrorCode.InvalidSession,
    UserAppDomainMismatch: StitchServiceErrorCode.UserAppDomainMismatch,
    DomainNotAllowed: StitchServiceErrorCode.DomainNotAllowed,
    ReadSizeLimitExceeded: StitchServiceErrorCode.ReadSizeLimitExceeded,
    InvalidParameter: StitchServiceErrorCode.InvalidParameter,
    MissingParameter: StitchServiceErrorCode.MissingParameter,
    TwilioError: StitchServiceErrorCode.TwilioError,
    GCMError: StitchServiceErrorCode.GCMError,
    HTTPError: StitchServiceErrorCode.HTTPError,
    AWSError: StitchServiceErrorCode.AWSError,
    MongoDBError: StitchServiceErrorCode.MongoDBError,
    ArgumentsNotAllowed: StitchServiceErrorCode.ArgumentsNotAllowed,
    FunctionExecutionError: StitchServiceErrorCode.FunctionExecutionError,
    NoMatchingRuleFound: StitchServiceErrorCode.NoMatchingRuleFound,
    InternalServerError: StitchServiceErrorCode.InternalServerError,
    AuthProviderNotFound: StitchServiceErrorCode.AuthProviderNotFound,
    AuthProviderAlreadyExists: StitchServiceErrorCode.AuthProviderAlreadyExists,
    ServiceNotFound: StitchServiceErrorCode.ServiceNotFound,
    ServiceTypeNotFound: StitchServiceErrorCode.ServiceTypeNotFound,
    ServiceAlreadyExists: StitchServiceErrorCode.ServiceAlreadyExists,
    ServiceCommandNotFound: StitchServiceErrorCode.ServiceCommandNotFound,
    ValueNotFound: StitchServiceErrorCode.ValueNotFound,
    ValueAlreadyExists: StitchServiceErrorCode.ValueAlreadyExists,
    ValueDuplicateName: StitchServiceErrorCode.ValueDuplicateName,
    FunctionNotFound: StitchServiceErrorCode.FunctionNotFound,
    FunctionAlreadyExists: StitchServiceErrorCode.FunctionAlreadyExists,
    FunctionDuplicateName: StitchServiceErrorCode.FunctionDuplicateName,
    FunctionSyntaxError: StitchServiceErrorCode.FunctionSyntaxError,
    FunctionInvalid: StitchServiceErrorCode.FunctionInvalid,
    IncomingWebhookNotFound: StitchServiceErrorCode.IncomingWebhookNotFound,
    IncomingWebhookAlreadyExists: StitchServiceErrorCode.IncomingWebhookAlreadyExists,
    IncomingWebhookDuplicateName: StitchServiceErrorCode.IncomingWebhookDuplicateName,
    RuleNotFound: StitchServiceErrorCode.RuleNotFound,
    APIKeyNotFound: StitchServiceErrorCode.ApiKeyNotFound,
    RuleAlreadyExists: StitchServiceErrorCode.RuleAlreadyExists,
    RuleDuplicateName: StitchServiceErrorCode.RuleDuplicateName,
    AuthProviderDuplicateName: StitchServiceErrorCode.AuthProviderDuplicateName,
    RestrictedHost: StitchServiceErrorCode.RestrictedHost,
    APIKeyAlreadyExists: StitchServiceErrorCode.ApiKeyAlreadyExists,
    IncomingWebhookAuthFailed: StitchServiceErrorCode.IncomingWebhookAuthFailed,
    ExecutionTimeLimitExceeded: StitchServiceErrorCode.ExecutionTimeLimitExceeded,
    FunctionNotCallable: StitchServiceErrorCode.FunctionNotCallable,
    UserAlreadyConfirmed: StitchServiceErrorCode.UserAlreadyConfirmed,
    UserNotFound: StitchServiceErrorCode.UserNotFound,
    UserDisabled: StitchServiceErrorCode.UserDisabled
};
function stitchServiceErrorCodeFromApi(code) {
    if (!(code in apiErrorCodes)) {
        return StitchServiceErrorCode.Unknown;
    }
    return apiErrorCodes[code];
}
//# sourceMappingURL=StitchServiceErrorCode.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ProviderCapabilities = (function () {
    function ProviderCapabilities(reusesExistingSession) {
        if (reusesExistingSession === void 0) { reusesExistingSession = false; }
        this.reusesExistingSession = reusesExistingSession;
    }
    return ProviderCapabilities;
}());
/* harmony default export */ __webpack_exports__["default"] = (ProviderCapabilities);
//# sourceMappingURL=ProviderCapabilities.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/StitchUserIdentity.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/StitchUserIdentity.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var StitchUserIdentity = (function () {
    function StitchUserIdentity(id, providerType) {
        this.id = id;
        this.providerType = providerType;
    }
    return StitchUserIdentity;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchUserIdentity);
//# sourceMappingURL=StitchUserIdentity.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/UserType.js":
/*!************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/UserType.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UserType;
(function (UserType) {
    UserType["Normal"] = "normal";
    UserType["Server"] = "server";
    UserType["Unknown"] = "unknown";
})(UserType || (UserType = {}));
/* harmony default export */ __webpack_exports__["default"] = (UserType);
//# sourceMappingURL=UserType.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AccessTokenRefresher.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AccessTokenRefresher.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JWT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JWT */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/JWT.js");

var SLEEP_MILLIS = 60000;
var EXPIRATION_WINDOW_SECS = 300;
var AccessTokenRefresher = (function () {
    function AccessTokenRefresher(auth) {
        this.auth = auth;
    }
    AccessTokenRefresher.prototype.shouldRefresh = function () {
        var auth = this.auth;
        if (auth === undefined) {
            return false;
        }
        if (!auth.isLoggedIn) {
            return false;
        }
        var info = auth.authInfo;
        if (info === undefined) {
            return false;
        }
        var jwt;
        try {
            jwt = _JWT__WEBPACK_IMPORTED_MODULE_0__["default"].fromEncoded(info.accessToken);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        if (Date.now() / 1000 < jwt.expires - EXPIRATION_WINDOW_SECS) {
            return false;
        }
        return true;
    };
    AccessTokenRefresher.prototype.run = function () {
        var _this = this;
        if (!this.shouldRefresh()) {
            this.nextTimeout = setTimeout(function () { return _this.run(); }, SLEEP_MILLIS);
        }
        else {
            this.auth.refreshAccessToken().then(function () {
                _this.nextTimeout = setTimeout(function () { return _this.run(); }, SLEEP_MILLIS);
            }).catch(function () {
                _this.nextTimeout = setTimeout(function () { return _this.run(); }, SLEEP_MILLIS);
            });
        }
    };
    AccessTokenRefresher.prototype.stop = function () {
        clearTimeout(this.nextTimeout);
    };
    return AccessTokenRefresher;
}());
/* harmony default export */ __webpack_exports__["default"] = (AccessTokenRefresher);
//# sourceMappingURL=AccessTokenRefresher.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AuthInfo = (function () {
    function AuthInfo(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, userProfile) {
        this.userId = userId;
        this.deviceId = deviceId;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.loggedInProviderType = loggedInProviderType;
        this.loggedInProviderName = loggedInProviderName;
        this.userProfile = userProfile;
    }
    AuthInfo.empty = function () {
        return new AuthInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    };
    AuthInfo.prototype.loggedOut = function () {
        return new AuthInfo(undefined, this.deviceId, undefined, undefined, undefined, undefined, undefined);
    };
    AuthInfo.prototype.merge = function (newInfo) {
        return new AuthInfo(newInfo.userId === undefined ? this.userId : newInfo.userId, newInfo.deviceId === undefined ? this.deviceId : newInfo.deviceId, newInfo.accessToken === undefined
            ? this.accessToken
            : newInfo.accessToken, newInfo.refreshToken === undefined
            ? this.refreshToken
            : newInfo.refreshToken, newInfo.loggedInProviderType === undefined
            ? this.loggedInProviderType
            : newInfo.loggedInProviderType, newInfo.loggedInProviderName === undefined
            ? this.loggedInProviderName
            : newInfo.loggedInProviderName, newInfo.userProfile === undefined ? this.userProfile : newInfo.userProfile);
    };
    return AuthInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (AuthInfo);
//# sourceMappingURL=AuthInfo.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchAuth.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchAuth.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/common/StitchErrorUtils */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js");
/* harmony import */ var _internal_net_Headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/net/Headers */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js");
/* harmony import */ var _internal_net_Method__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/net/Method */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js");
/* harmony import */ var _internal_net_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/net/Stream */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Stream.js");
/* harmony import */ var _internal_net_StitchAuthDocRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/net/StitchAuthDocRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthDocRequest.js");
/* harmony import */ var _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/net/StitchAuthRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js");
/* harmony import */ var _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/net/StitchDocRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchDocRequest.js");
/* harmony import */ var _StitchClientError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../StitchClientError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientError.js");
/* harmony import */ var _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../StitchClientErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js");
/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
/* harmony import */ var _StitchRequestError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../StitchRequestError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js");
/* harmony import */ var _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../StitchRequestErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js");
/* harmony import */ var _StitchServiceError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../StitchServiceError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js");
/* harmony import */ var _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../StitchServiceErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js");
/* harmony import */ var _providers_internal_StitchAuthResponseCredential__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/internal/StitchAuthResponseCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/StitchAuthResponseCredential.js");
/* harmony import */ var _AccessTokenRefresher__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AccessTokenRefresher */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AccessTokenRefresher.js");
/* harmony import */ var _AuthInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AuthInfo */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js");
/* harmony import */ var _JWT__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./JWT */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/JWT.js");
/* harmony import */ var _models_ApiAuthInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./models/ApiAuthInfo */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiAuthInfo.js");
/* harmony import */ var _models_ApiCoreUserProfile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./models/ApiCoreUserProfile */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiCoreUserProfile.js");
/* harmony import */ var _models_StoreAuthInfo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./models/StoreAuthInfo */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreAuthInfo.js");






















var OPTIONS = "options";
var DEVICE = "device";
var CoreStitchAuth = (function () {
    function CoreStitchAuth(requestClient, authRoutes, storage, useTokenRefresher) {
        if (useTokenRefresher === void 0) { useTokenRefresher = true; }
        this.requestClient = requestClient;
        this.authRoutes = authRoutes;
        this.storage = storage;
        var info;
        try {
            info = Object(_models_StoreAuthInfo__WEBPACK_IMPORTED_MODULE_21__["readFromStorage"])(storage);
        }
        catch (e) {
            throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].CouldNotLoadPersistedAuthInfo);
        }
        if (info === undefined) {
            this.authInfo = _AuthInfo__WEBPACK_IMPORTED_MODULE_17__["default"].empty();
        }
        else {
            this.authInfo = info;
        }
        this.prepUser();
        if (useTokenRefresher) {
            this.accessTokenRefresher = new _AccessTokenRefresher__WEBPACK_IMPORTED_MODULE_16__["default"](this);
            this.accessTokenRefresher.run();
        }
    }
    Object.defineProperty(CoreStitchAuth.prototype, "isLoggedIn", {
        get: function () {
            return this.currentUser !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchAuth.prototype, "user", {
        get: function () {
            return this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    CoreStitchAuth.prototype.doAuthenticatedRequest = function (stitchReq) {
        var _this = this;
        return this.requestClient
            .doRequest(this.prepareAuthRequest(stitchReq))
            .catch(function (err) {
            return _this.handleAuthFailure(err, stitchReq);
        });
    };
    CoreStitchAuth.prototype.doAuthenticatedRequestWithDecoder = function (stitchReq, decoder) {
        return this.doAuthenticatedRequest(stitchReq)
            .then(function (response) {
            var obj = bson__WEBPACK_IMPORTED_MODULE_0__["EJSON"].parse(response.body, { strict: false });
            if (decoder) {
                return decoder.decode(obj);
            }
            return obj;
        })
            .catch(function (err) {
            throw Object(_internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_1__["wrapDecodingError"])(err);
        });
    };
    CoreStitchAuth.prototype.openAuthenticatedEventStream = function (stitchReq, open) {
        var _this = this;
        if (open === void 0) { open = true; }
        if (!this.isLoggedIn) {
            throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].MustAuthenticateFirst);
        }
        var authToken;
        if (stitchReq.useRefreshToken) {
            authToken = this.authInfo.refreshToken;
        }
        else {
            authToken = this.authInfo.accessToken;
        }
        return this.requestClient.doStreamRequest(stitchReq.builder
            .withPath(stitchReq.path + "&stitch_at=" + authToken)
            .build(), open, function () { return _this.openAuthenticatedEventStream(stitchReq, false); })
            .catch(function (err) {
            return _this.handleAuthFailureForEventStream(err, stitchReq, open);
        });
    };
    CoreStitchAuth.prototype.openAuthenticatedStreamWithDecoder = function (stitchReq, decoder) {
        return this.openAuthenticatedEventStream(stitchReq)
            .then(function (eventStream) {
            return new _internal_net_Stream__WEBPACK_IMPORTED_MODULE_4__["default"](eventStream, decoder);
        });
    };
    CoreStitchAuth.prototype.refreshAccessToken = function () {
        var _this = this;
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_6__["StitchAuthRequest"].Builder()
            .withRefreshToken()
            .withPath(this.authRoutes.sessionRoute)
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_3__["default"].POST);
        return this.doAuthenticatedRequest(reqBuilder.build()).then(function (response) {
            try {
                var partialInfo = _models_ApiAuthInfo__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(JSON.parse(response.body));
                _this.authInfo = _this.authInfo.merge(partialInfo);
            }
            catch (err) {
                throw new _StitchRequestError__WEBPACK_IMPORTED_MODULE_11__["default"](err, _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_12__["StitchRequestErrorCode"].DECODING_ERROR);
            }
            try {
                Object(_models_StoreAuthInfo__WEBPACK_IMPORTED_MODULE_21__["writeToStorage"])(_this.authInfo, _this.storage);
            }
            catch (err) {
                throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].CouldNotPersistAuthInfo);
            }
        });
    };
    CoreStitchAuth.prototype.loginWithCredentialInternal = function (credential) {
        if (credential instanceof _providers_internal_StitchAuthResponseCredential__WEBPACK_IMPORTED_MODULE_15__["default"]) {
            return this.processLogin(credential, credential.authInfo, credential.asLink);
        }
        if (!this.isLoggedIn) {
            return this.doLogin(credential, false);
        }
        if (credential.providerCapabilities.reusesExistingSession) {
            if (credential.providerType === this.currentUser.loggedInProviderType) {
                return Promise.resolve(this.currentUser);
            }
        }
        this.logoutInternal();
        return this.doLogin(credential, false);
    };
    CoreStitchAuth.prototype.linkUserWithCredentialInternal = function (user, credential) {
        if (this.currentUser !== undefined && user.id !== this.currentUser.id) {
            return Promise.reject(new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].UserNoLongerValid));
        }
        return this.doLogin(credential, true);
    };
    CoreStitchAuth.prototype.logoutInternal = function () {
        var _this = this;
        if (!this.isLoggedIn) {
            return Promise.resolve();
        }
        return this.doLogout()
            .then(function () {
            _this.clearAuth();
        })
            .catch(function () {
            _this.clearAuth();
        });
    };
    Object.defineProperty(CoreStitchAuth.prototype, "hasDeviceId", {
        get: function () {
            return (this.authInfo.deviceId !== undefined &&
                this.authInfo.deviceId !== "" &&
                this.authInfo.deviceId !== "000000000000000000000000");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchAuth.prototype, "deviceId", {
        get: function () {
            if (!this.hasDeviceId) {
                return undefined;
            }
            return this.authInfo.deviceId;
        },
        enumerable: true,
        configurable: true
    });
    CoreStitchAuth.prototype.prepareAuthRequest = function (stitchReq) {
        if (!this.isLoggedIn) {
            throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].MustAuthenticateFirst);
        }
        var newReq = stitchReq.builder;
        var newHeaders = newReq.headers || {};
        if (stitchReq.useRefreshToken) {
            newHeaders[_internal_net_Headers__WEBPACK_IMPORTED_MODULE_2__["default"].AUTHORIZATION] = _internal_net_Headers__WEBPACK_IMPORTED_MODULE_2__["default"].getAuthorizationBearer(this.authInfo.refreshToken);
        }
        else {
            newHeaders[_internal_net_Headers__WEBPACK_IMPORTED_MODULE_2__["default"].AUTHORIZATION] = _internal_net_Headers__WEBPACK_IMPORTED_MODULE_2__["default"].getAuthorizationBearer(this.authInfo.accessToken);
        }
        newReq.withHeaders(newHeaders);
        return newReq.build();
    };
    CoreStitchAuth.prototype.handleAuthFailureForEventStream = function (ex, req, open) {
        var _this = this;
        if (open === void 0) { open = true; }
        if (!(ex instanceof _StitchServiceError__WEBPACK_IMPORTED_MODULE_13__["default"]) ||
            ex.errorCode !== _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_14__["StitchServiceErrorCode"].InvalidSession) {
            throw ex;
        }
        if (req.useRefreshToken || !req.shouldRefreshOnFailure) {
            this.clearAuth();
            throw ex;
        }
        return this.tryRefreshAccessToken(req.startedAt).then(function () {
            return _this.openAuthenticatedEventStream(req.builder.withShouldRefreshOnFailure(false).build(), open);
        });
    };
    CoreStitchAuth.prototype.handleAuthFailure = function (ex, req) {
        var _this = this;
        if (!(ex instanceof _StitchServiceError__WEBPACK_IMPORTED_MODULE_13__["default"]) ||
            ex.errorCode !== _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_14__["StitchServiceErrorCode"].InvalidSession) {
            throw ex;
        }
        if (req.useRefreshToken || !req.shouldRefreshOnFailure) {
            this.clearAuth();
            throw ex;
        }
        return this.tryRefreshAccessToken(req.startedAt).then(function () {
            return _this.doAuthenticatedRequest(req.builder.withShouldRefreshOnFailure(false).build());
        });
    };
    CoreStitchAuth.prototype.tryRefreshAccessToken = function (reqStartedAt) {
        if (!this.isLoggedIn) {
            throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].LoggedOutDuringRequest);
        }
        try {
            var jwt = _JWT__WEBPACK_IMPORTED_MODULE_18__["default"].fromEncoded(this.authInfo.accessToken);
            if (jwt.issuedAt >= reqStartedAt) {
                return Promise.resolve();
            }
        }
        catch (e) {
        }
        return this.refreshAccessToken();
    };
    CoreStitchAuth.prototype.prepUser = function () {
        if (this.authInfo.userId !== undefined) {
            this.currentUser = this.userFactory.makeUser(this.authInfo.userId, this.authInfo.loggedInProviderType, this.authInfo.loggedInProviderName, this.authInfo.userProfile);
        }
    };
    CoreStitchAuth.prototype.attachAuthOptions = function (authBody) {
        var options = {};
        options[DEVICE] = this.deviceInfo;
        authBody[OPTIONS] = options;
    };
    CoreStitchAuth.prototype.doLogin = function (credential, asLinkRequest) {
        var _this = this;
        return this.doLoginRequest(credential, asLinkRequest)
            .then(function (response) { return _this.processLoginResponse(credential, response, asLinkRequest); })
            .then(function (user) {
            _this.onAuthEvent();
            return user;
        });
    };
    CoreStitchAuth.prototype.doLoginRequest = function (credential, asLinkRequest) {
        var reqBuilder = new _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_7__["StitchDocRequest"].Builder();
        reqBuilder.withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_3__["default"].POST);
        if (asLinkRequest) {
            reqBuilder.withPath(this.authRoutes.getAuthProviderLinkRoute(credential.providerName));
        }
        else {
            reqBuilder.withPath(this.authRoutes.getAuthProviderLoginRoute(credential.providerName));
        }
        var material = credential.material;
        this.attachAuthOptions(material);
        reqBuilder.withDocument(material);
        if (!asLinkRequest) {
            return this.requestClient.doRequest(reqBuilder.build());
        }
        var linkRequest = new _internal_net_StitchAuthDocRequest__WEBPACK_IMPORTED_MODULE_5__["StitchAuthDocRequest"](reqBuilder.build(), reqBuilder.document);
        return this.doAuthenticatedRequest(linkRequest);
    };
    CoreStitchAuth.prototype.processLogin = function (credential, newAuthInfo, asLinkRequest) {
        var _this = this;
        var oldInfo = this.authInfo;
        var oldUser = this.currentUser;
        newAuthInfo = this.authInfo.merge(new _AuthInfo__WEBPACK_IMPORTED_MODULE_17__["default"](newAuthInfo.userId, newAuthInfo.deviceId, newAuthInfo.accessToken, newAuthInfo.refreshToken, credential.providerType, credential.providerName, undefined));
        this.authInfo = newAuthInfo;
        this.currentUser = this.userFactory.makeUser(this.authInfo.userId, credential.providerType, credential.providerName, undefined);
        return this.doGetUserProfile()
            .then(function (profile) {
            newAuthInfo = newAuthInfo.merge(new _AuthInfo__WEBPACK_IMPORTED_MODULE_17__["default"](newAuthInfo.userId, newAuthInfo.deviceId, newAuthInfo.accessToken, newAuthInfo.refreshToken, credential.providerType, credential.providerName, profile));
            try {
                Object(_models_StoreAuthInfo__WEBPACK_IMPORTED_MODULE_21__["writeToStorage"])(newAuthInfo, _this.storage);
            }
            catch (err) {
                throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].CouldNotPersistAuthInfo);
            }
            _this.authInfo = newAuthInfo;
            _this.currentUser = _this.userFactory.makeUser(_this.authInfo.userId, credential.providerType, credential.providerName, profile);
            return _this.currentUser;
        })
            .catch(function (err) {
            if (asLinkRequest) {
                _this.authInfo = oldInfo;
                _this.currentUser = oldUser;
            }
            else {
                _this.clearAuth();
            }
            throw err;
        });
    };
    CoreStitchAuth.prototype.processLoginResponse = function (credential, response, asLinkRequest) {
        try {
            if (!response) {
                throw new _StitchServiceError__WEBPACK_IMPORTED_MODULE_13__["default"]("the login response could not be processed for credential: " + credential + ";" +
                    "response was undefined");
            }
            if (!response.body) {
                throw new _StitchServiceError__WEBPACK_IMPORTED_MODULE_13__["default"]("response with status code " + response.statusCode + " has empty body");
            }
            return this.processLogin(credential, _models_ApiAuthInfo__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(JSON.parse(response.body)), asLinkRequest);
        }
        catch (err) {
            throw new _StitchRequestError__WEBPACK_IMPORTED_MODULE_11__["default"](err, _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_12__["StitchRequestErrorCode"].DECODING_ERROR);
        }
    };
    CoreStitchAuth.prototype.doGetUserProfile = function () {
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_6__["StitchAuthRequest"].Builder();
        reqBuilder.withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_3__["default"].GET).withPath(this.authRoutes.profileRoute);
        return this.doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) { return _models_ApiCoreUserProfile__WEBPACK_IMPORTED_MODULE_20__["default"].fromJSON(JSON.parse(response.body)); })
            .catch(function (err) {
            if (err instanceof _StitchError__WEBPACK_IMPORTED_MODULE_10__["default"]) {
                throw err;
            }
            else {
                throw new _StitchRequestError__WEBPACK_IMPORTED_MODULE_11__["default"](err, _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_12__["StitchRequestErrorCode"].DECODING_ERROR);
            }
        });
    };
    CoreStitchAuth.prototype.doLogout = function () {
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_6__["StitchAuthRequest"].Builder();
        reqBuilder
            .withRefreshToken()
            .withPath(this.authRoutes.sessionRoute)
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_3__["default"].DELETE);
        return this.doAuthenticatedRequest(reqBuilder.build()).then(function () {
            return;
        });
    };
    CoreStitchAuth.prototype.clearAuth = function () {
        if (!this.isLoggedIn) {
            return;
        }
        this.authInfo = this.authInfo.loggedOut();
        try {
            Object(_models_StoreAuthInfo__WEBPACK_IMPORTED_MODULE_21__["writeToStorage"])(this.authInfo, this.storage);
        }
        catch (e) {
            throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_8__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_9__["StitchClientErrorCode"].CouldNotPersistAuthInfo);
        }
        this.currentUser = undefined;
        this.onAuthEvent();
    };
    CoreStitchAuth.prototype.close = function () {
        if (this.accessTokenRefresher) {
            this.accessTokenRefresher.stop();
        }
    };
    return CoreStitchAuth;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreStitchAuth);
//# sourceMappingURL=CoreStitchAuth.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchUserImpl.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchUserImpl.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchUserProfileImpl */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js");

var CoreStitchUserImpl = (function () {
    function CoreStitchUserImpl(id, loggedInProviderType, loggedInProviderName, profile) {
        this.id = id;
        this.loggedInProviderType = loggedInProviderType;
        this.loggedInProviderName = loggedInProviderName;
        this.profile =
            profile === undefined ? _StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_0__["default"].empty() : profile;
    }
    Object.defineProperty(CoreStitchUserImpl.prototype, "userType", {
        get: function () {
            return this.profile.userType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchUserImpl.prototype, "identities", {
        get: function () {
            return this.profile.identities;
        },
        enumerable: true,
        configurable: true
    });
    return CoreStitchUserImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreStitchUserImpl);
//# sourceMappingURL=CoreStitchUserImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/DeviceFields.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/DeviceFields.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DeviceFields;
(function (DeviceFields) {
    DeviceFields["DEVICE_ID"] = "deviceId";
    DeviceFields["APP_ID"] = "appId";
    DeviceFields["APP_VERSION"] = "appVersion";
    DeviceFields["PLATFORM"] = "platform";
    DeviceFields["PLATFORM_VERSION"] = "platformVersion";
    DeviceFields["SDK_VERSION"] = "sdkVersion";
})(DeviceFields || (DeviceFields = {}));
/* harmony default export */ __webpack_exports__["default"] = (DeviceFields);
//# sourceMappingURL=DeviceFields.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/JWT.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/JWT.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_common_Base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/common/Base64 */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Base64.js");

var EXPIRES = "exp";
var ISSUED_AT = "iat";
var JWT = (function () {
    function JWT(expires, issuedAt) {
        this.expires = expires;
        this.issuedAt = issuedAt;
    }
    JWT.fromEncoded = function (encodedJWT) {
        var parts = JWT.splitToken(encodedJWT);
        var json = JSON.parse(Object(_internal_common_Base64__WEBPACK_IMPORTED_MODULE_0__["base64Decode"])(parts[1]));
        var expires = json[EXPIRES];
        var iat = json[ISSUED_AT];
        return new JWT(expires, iat);
    };
    JWT.splitToken = function (jwt) {
        var parts = jwt.split(".");
        if (parts.length !== 3) {
            throw new Error("Malformed JWT token. The string " + jwt + " should have 3 parts.");
        }
        return parts;
    };
    return JWT;
}());
/* harmony default export */ __webpack_exports__["default"] = (JWT);
//# sourceMappingURL=JWT.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAME = "name";
var EMAIL = "email";
var PICTURE_Url = "picture";
var FIRST_NAME = "first_name";
var LAST_NAME = "last_name";
var GENDER = "gender";
var BIRTHDAY = "birthday";
var MIN_AGE = "min_age";
var MAX_AGE = "max_age";
var StitchUserProfileImpl = (function () {
    function StitchUserProfileImpl(userType, data, identities) {
        if (data === void 0) { data = {}; }
        if (identities === void 0) { identities = []; }
        this.userType = userType;
        this.data = data;
        this.identities = identities;
    }
    StitchUserProfileImpl.empty = function () {
        return new StitchUserProfileImpl();
    };
    Object.defineProperty(StitchUserProfileImpl.prototype, "name", {
        get: function () {
            return this.data[NAME];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "email", {
        get: function () {
            return this.data[EMAIL];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "pictureUrl", {
        get: function () {
            return this.data[PICTURE_Url];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "firstName", {
        get: function () {
            return this.data[FIRST_NAME];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "lastName", {
        get: function () {
            return this.data[LAST_NAME];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "gender", {
        get: function () {
            return this.data[GENDER];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "birthday", {
        get: function () {
            return this.data[BIRTHDAY];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "minAge", {
        get: function () {
            var age = this.data[MIN_AGE];
            if (age === undefined) {
                return undefined;
            }
            return age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "maxAge", {
        get: function () {
            var age = this.data[MAX_AGE];
            if (age === undefined) {
                return undefined;
            }
            return age;
        },
        enumerable: true,
        configurable: true
    });
    return StitchUserProfileImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchUserProfileImpl);
//# sourceMappingURL=StitchUserProfileImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiAuthInfo.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiAuthInfo.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AuthInfo */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Fields;
(function (Fields) {
    Fields["USER_ID"] = "user_id";
    Fields["DEVICE_ID"] = "device_id";
    Fields["ACCESS_TOKEN"] = "access_token";
    Fields["REFRESH_TOKEN"] = "refresh_token";
})(Fields || (Fields = {}));
var ApiAuthInfo = (function (_super) {
    __extends(ApiAuthInfo, _super);
    function ApiAuthInfo(userId, deviceId, accessToken, refreshToken) {
        return _super.call(this, userId, deviceId, accessToken, refreshToken) || this;
    }
    ApiAuthInfo.fromJSON = function (json) {
        return new ApiAuthInfo(json[Fields.USER_ID], json[Fields.DEVICE_ID], json[Fields.ACCESS_TOKEN], json[Fields.REFRESH_TOKEN]);
    };
    ApiAuthInfo.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[Fields.USER_ID] = this.userId,
            _a[Fields.DEVICE_ID] = this.deviceId,
            _a[Fields.ACCESS_TOKEN] = this.accessToken,
            _a[Fields.REFRESH_TOKEN] = this.refreshToken,
            _a;
    };
    return ApiAuthInfo;
}(_AuthInfo__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ApiAuthInfo);
//# sourceMappingURL=ApiAuthInfo.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiCoreUserProfile.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiCoreUserProfile.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../internal/common/Assertions */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Assertions.js");
/* harmony import */ var _StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StitchUserProfileImpl */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js");
/* harmony import */ var _ApiStitchUserIdentity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiStitchUserIdentity */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiStitchUserIdentity.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Fields;
(function (Fields) {
    Fields["DATA"] = "data";
    Fields["USER_TYPE"] = "type";
    Fields["IDENTITIES"] = "identities";
})(Fields || (Fields = {}));
var ApiCoreUserProfile = (function (_super) {
    __extends(ApiCoreUserProfile, _super);
    function ApiCoreUserProfile(userType, data, identities) {
        return _super.call(this, userType, data, identities) || this;
    }
    ApiCoreUserProfile.fromJSON = function (json) {
        _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_0__["default"].keyPresent(Fields.USER_TYPE, json);
        _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_0__["default"].keyPresent(Fields.DATA, json);
        _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_0__["default"].keyPresent(Fields.IDENTITIES, json);
        return new ApiCoreUserProfile(json[Fields.USER_TYPE], json[Fields.DATA], json[Fields.IDENTITIES].map(_ApiStitchUserIdentity__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON));
    };
    ApiCoreUserProfile.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[Fields.DATA] = this.data,
            _a[Fields.USER_TYPE] = this.userType,
            _a[Fields.IDENTITIES] = this.identities,
            _a;
    };
    return ApiCoreUserProfile;
}(_StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ApiCoreUserProfile);
//# sourceMappingURL=ApiCoreUserProfile.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiStitchUserIdentity.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiStitchUserIdentity.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchUserIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../StitchUserIdentity */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/StitchUserIdentity.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Fields;
(function (Fields) {
    Fields["ID"] = "id";
    Fields["PROVIDER_TYPE"] = "provider_type";
})(Fields || (Fields = {}));
var ApiStitchUserIdentity = (function (_super) {
    __extends(ApiStitchUserIdentity, _super);
    function ApiStitchUserIdentity(id, providerType) {
        return _super.call(this, id, providerType) || this;
    }
    ApiStitchUserIdentity.fromJSON = function (json) {
        return new ApiStitchUserIdentity(json[Fields.ID], json[Fields.PROVIDER_TYPE]);
    };
    ApiStitchUserIdentity.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[Fields.ID] = this.id,
            _a[Fields.PROVIDER_TYPE] = this.providerType,
            _a;
    };
    return ApiStitchUserIdentity;
}(_StitchUserIdentity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ApiStitchUserIdentity);
//# sourceMappingURL=ApiStitchUserIdentity.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreAuthInfo.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreAuthInfo.js ***!
  \*********************************************************************************************/
/*! exports provided: StoreAuthInfo, readFromStorage, writeToStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreAuthInfo", function() { return StoreAuthInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFromStorage", function() { return readFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeToStorage", function() { return writeToStorage; });
/* harmony import */ var _AuthInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AuthInfo */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js");
/* harmony import */ var _StoreCoreUserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreCoreUserProfile */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreCoreUserProfile.js");
/* harmony import */ var _StoreStitchUserIdentity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StoreStitchUserIdentity */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreStitchUserIdentity.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Fields;
(function (Fields) {
    Fields["USER_ID"] = "user_id";
    Fields["DEVICE_ID"] = "device_id";
    Fields["ACCESS_TOKEN"] = "access_token";
    Fields["REFRESH_TOKEN"] = "refresh_token";
    Fields["LOGGED_IN_PROVIDER_TYPE"] = "logged_in_provider_type";
    Fields["LOGGED_IN_PROVIDER_NAME"] = "logged_in_provider_name";
    Fields["USER_PROFILE"] = "user_profile";
})(Fields || (Fields = {}));
function readFromStorage(storage) {
    var rawInfo = storage.get(StoreAuthInfo.STORAGE_NAME);
    if (!rawInfo) {
        return undefined;
    }
    return StoreAuthInfo.decode(JSON.parse(rawInfo));
}
function writeToStorage(authInfo, storage) {
    var info = new StoreAuthInfo(authInfo.userId, authInfo.deviceId, authInfo.accessToken, authInfo.refreshToken, authInfo.loggedInProviderType, authInfo.loggedInProviderName, authInfo.userProfile
        ? new _StoreCoreUserProfile__WEBPACK_IMPORTED_MODULE_1__["default"](authInfo.userProfile.userType, authInfo.userProfile.data, authInfo.userProfile.identities.map(function (identity) {
            return new _StoreStitchUserIdentity__WEBPACK_IMPORTED_MODULE_2__["default"](identity.id, identity.providerType);
        }))
        : undefined);
    storage.set(StoreAuthInfo.STORAGE_NAME, JSON.stringify(info.encode()));
}
var StoreAuthInfo = (function (_super) {
    __extends(StoreAuthInfo, _super);
    function StoreAuthInfo(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, userProfile) {
        var _this = _super.call(this, userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, userProfile) || this;
        _this.userProfile = userProfile;
        return _this;
    }
    StoreAuthInfo.decode = function (from) {
        var userId = from[Fields.USER_ID];
        var deviceId = from[Fields.DEVICE_ID];
        var accessToken = from[Fields.ACCESS_TOKEN];
        var refreshToken = from[Fields.REFRESH_TOKEN];
        var loggedInProviderType = from[Fields.LOGGED_IN_PROVIDER_TYPE];
        var loggedInProviderName = from[Fields.LOGGED_IN_PROVIDER_NAME];
        var userProfile = from[Fields.USER_PROFILE];
        return new StoreAuthInfo(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, _StoreCoreUserProfile__WEBPACK_IMPORTED_MODULE_1__["default"].decode(userProfile));
    };
    StoreAuthInfo.prototype.encode = function () {
        var to = {};
        to[Fields.USER_ID] = this.userId;
        to[Fields.ACCESS_TOKEN] = this.accessToken;
        to[Fields.REFRESH_TOKEN] = this.refreshToken;
        to[Fields.DEVICE_ID] = this.deviceId;
        to[Fields.LOGGED_IN_PROVIDER_NAME] = this.loggedInProviderName;
        to[Fields.LOGGED_IN_PROVIDER_TYPE] = this.loggedInProviderType;
        to[Fields.USER_PROFILE] = this.userProfile
            ? this.userProfile.encode()
            : undefined;
        return to;
    };
    StoreAuthInfo.STORAGE_NAME = "auth_info";
    return StoreAuthInfo;
}(_AuthInfo__WEBPACK_IMPORTED_MODULE_0__["default"]));

//# sourceMappingURL=StoreAuthInfo.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreCoreUserProfile.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreCoreUserProfile.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StitchUserProfileImpl */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js");
/* harmony import */ var _StoreStitchUserIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreStitchUserIdentity */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreStitchUserIdentity.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Fields;
(function (Fields) {
    Fields["DATA"] = "data";
    Fields["USER_TYPE"] = "type";
    Fields["IDENTITIES"] = "identities";
})(Fields || (Fields = {}));
var StoreCoreUserProfile = (function (_super) {
    __extends(StoreCoreUserProfile, _super);
    function StoreCoreUserProfile(userType, data, identities) {
        var _this = _super.call(this, userType, data, identities) || this;
        _this.userType = userType;
        _this.data = data;
        _this.identities = identities;
        return _this;
    }
    StoreCoreUserProfile.decode = function (from) {
        return from
            ? new StoreCoreUserProfile(from[Fields.USER_TYPE], from[Fields.DATA], from[Fields.IDENTITIES].map(function (identity) {
                return _StoreStitchUserIdentity__WEBPACK_IMPORTED_MODULE_1__["default"].decode(identity);
            }))
            : undefined;
    };
    StoreCoreUserProfile.prototype.encode = function () {
        var _a;
        return _a = {},
            _a[Fields.DATA] = this.data,
            _a[Fields.USER_TYPE] = this.userType,
            _a[Fields.IDENTITIES] = this.identities.map(function (identity) { return identity.encode(); }),
            _a;
    };
    return StoreCoreUserProfile;
}(_StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StoreCoreUserProfile);
//# sourceMappingURL=StoreCoreUserProfile.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreStitchUserIdentity.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreStitchUserIdentity.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchUserIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../StitchUserIdentity */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/StitchUserIdentity.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Fields;
(function (Fields) {
    Fields["ID"] = "id";
    Fields["PROVIDER_TYPE"] = "provider_type";
})(Fields || (Fields = {}));
var StoreStitchUserIdentity = (function (_super) {
    __extends(StoreStitchUserIdentity, _super);
    function StoreStitchUserIdentity(id, providerType) {
        return _super.call(this, id, providerType) || this;
    }
    StoreStitchUserIdentity.decode = function (from) {
        return new StoreStitchUserIdentity(from[Fields.ID], from[Fields.PROVIDER_TYPE]);
    };
    StoreStitchUserIdentity.prototype.encode = function () {
        var _a;
        return _a = {},
            _a[Fields.ID] = this.id,
            _a[Fields.PROVIDER_TYPE] = this.providerType,
            _a;
    };
    return StoreStitchUserIdentity;
}(_StitchUserIdentity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StoreStitchUserIdentity);
//# sourceMappingURL=StoreStitchUserIdentity.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousAuthProvider.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousAuthProvider.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AnonymousAuthProvider = (function () {
    function AnonymousAuthProvider() {
    }
    AnonymousAuthProvider.TYPE = "anon-user";
    AnonymousAuthProvider.DEFAULT_NAME = "anon-user";
    return AnonymousAuthProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (AnonymousAuthProvider);
//# sourceMappingURL=AnonymousAuthProvider.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ProviderCapabilities */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js");
/* harmony import */ var _AnonymousAuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnonymousAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousAuthProvider.js");


var AnonymousCredential = (function () {
    function AnonymousCredential(providerName) {
        if (providerName === void 0) { providerName = _AnonymousAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_NAME; }
        this.providerType = _AnonymousAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE;
        this.material = {};
        this.providerCapabilities = new _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__["default"](true);
        this.providerName = providerName;
    }
    return AnonymousCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (AnonymousCredential);
//# sourceMappingURL=AnonymousCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomAuthProvider.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomAuthProvider.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CustomAuthProvider = (function () {
    function CustomAuthProvider() {
    }
    CustomAuthProvider.TYPE = "custom-token";
    CustomAuthProvider.DEFAULT_NAME = "custom-token";
    return CustomAuthProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (CustomAuthProvider);
//# sourceMappingURL=CustomAuthProvider.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomCredential.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomCredential.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ProviderCapabilities */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js");
/* harmony import */ var _CustomAuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomAuthProvider.js");


var Fields;
(function (Fields) {
    Fields["TOKEN"] = "token";
})(Fields || (Fields = {}));
var CustomCredential = (function () {
    function CustomCredential(token, providerName) {
        var _a;
        if (providerName === void 0) { providerName = _CustomAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_NAME; }
        this.providerType = _CustomAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE;
        this.providerCapabilities = new _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__["default"](false);
        this.providerName = providerName;
        this.token = token;
        this.material = (_a = {}, _a[Fields.TOKEN] = this.token, _a);
    }
    return CustomCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (CustomCredential);
//# sourceMappingURL=CustomCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookAuthProvider.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookAuthProvider.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FacebookAuthProvider = (function () {
    function FacebookAuthProvider() {
    }
    FacebookAuthProvider.TYPE = "oauth2-facebook";
    FacebookAuthProvider.DEFAULT_NAME = "oauth2-facebook";
    return FacebookAuthProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (FacebookAuthProvider);
//# sourceMappingURL=FacebookAuthProvider.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookCredential.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookCredential.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ProviderCapabilities */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js");
/* harmony import */ var _FacebookAuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FacebookAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookAuthProvider.js");


var Fields;
(function (Fields) {
    Fields["ACCESS_TOKEN"] = "accessToken";
})(Fields || (Fields = {}));
var FacebookCredential = (function () {
    function FacebookCredential(accessToken, providerName) {
        var _a;
        if (providerName === void 0) { providerName = _FacebookAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_NAME; }
        this.providerType = _FacebookAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE;
        this.providerName = providerName;
        this.accessToken = accessToken;
        this.material = (_a = {}, _a[Fields.ACCESS_TOKEN] = this.accessToken, _a);
    }
    Object.defineProperty(FacebookCredential.prototype, "providerCapabilities", {
        get: function () {
            return new _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__["default"](false);
        },
        enumerable: true,
        configurable: true
    });
    return FacebookCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (FacebookCredential);
//# sourceMappingURL=FacebookCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleAuthProvider.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleAuthProvider.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GoogleAuthProvider = (function () {
    function GoogleAuthProvider() {
    }
    GoogleAuthProvider.TYPE = "oauth2-google";
    GoogleAuthProvider.DEFAULT_NAME = "oauth2-google";
    return GoogleAuthProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (GoogleAuthProvider);
//# sourceMappingURL=GoogleAuthProvider.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleCredential.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleCredential.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ProviderCapabilities */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js");
/* harmony import */ var _GoogleAuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleAuthProvider.js");


var Fields;
(function (Fields) {
    Fields["AUTH_CODE"] = "authCode";
})(Fields || (Fields = {}));
var GoogleCredential = (function () {
    function GoogleCredential(authCode, providerName) {
        var _a;
        if (providerName === void 0) { providerName = _GoogleAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_NAME; }
        this.providerType = _GoogleAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE;
        this.providerCapabilities = new _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__["default"](false);
        this.providerName = providerName;
        this.authCode = authCode;
        this.material = (_a = {}, _a[Fields.AUTH_CODE] = this.authCode, _a);
    }
    return GoogleCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (GoogleCredential);
//# sourceMappingURL=GoogleCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/CoreAuthProviderClient.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/CoreAuthProviderClient.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CoreAuthProviderClient = (function () {
    function CoreAuthProviderClient(providerName, requestClient, baseRoute) {
        this.providerName = providerName;
        this.requestClient = requestClient;
        this.baseRoute = baseRoute;
    }
    return CoreAuthProviderClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreAuthProviderClient);
//# sourceMappingURL=CoreAuthProviderClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/StitchAuthResponseCredential.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/StitchAuthResponseCredential.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var StitchAuthResponseCredential = (function () {
    function StitchAuthResponseCredential(authInfo, providerType, providerName, asLink) {
        this.authInfo = authInfo;
        this.providerType = providerType;
        this.providerName = providerName;
        this.asLink = asLink;
    }
    return StitchAuthResponseCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchAuthResponseCredential);
//# sourceMappingURL=StitchAuthResponseCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyAuthProvider.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyAuthProvider.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ServerApiKeyAuthProvider = (function () {
    function ServerApiKeyAuthProvider() {
    }
    ServerApiKeyAuthProvider.TYPE = "api-key";
    ServerApiKeyAuthProvider.DEFAULT_NAME = "api-key";
    return ServerApiKeyAuthProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (ServerApiKeyAuthProvider);
//# sourceMappingURL=ServerApiKeyAuthProvider.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyCredential.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyCredential.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ProviderCapabilities */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js");
/* harmony import */ var _ServerApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServerApiKeyAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyAuthProvider.js");


var Fields;
(function (Fields) {
    Fields["KEY"] = "key";
})(Fields || (Fields = {}));
var ServerApiKeyCredential = (function () {
    function ServerApiKeyCredential(key, providerName) {
        var _a;
        if (providerName === void 0) { providerName = _ServerApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_NAME; }
        this.providerType = _ServerApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE;
        this.providerCapabilities = new _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__["default"](false);
        this.providerName = providerName;
        this.key = key;
        this.material = (_a = {}, _a[Fields.KEY] = this.key, _a);
    }
    return ServerApiKeyCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (ServerApiKeyCredential);
//# sourceMappingURL=ServerApiKeyCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/CoreUserApiKeyAuthProviderClient.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/CoreUserApiKeyAuthProviderClient.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_net_Method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../internal/net/Method */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js");
/* harmony import */ var _internal_net_StitchAuthDocRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../internal/net/StitchAuthDocRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthDocRequest.js");
/* harmony import */ var _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../internal/net/StitchAuthRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js");
/* harmony import */ var _internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../internal/common/StitchErrorUtils */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js");
/* harmony import */ var _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StitchRequestErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js");
/* harmony import */ var _StitchRequestError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../StitchRequestError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js");
/* harmony import */ var _internal_CoreAuthProviderClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/CoreAuthProviderClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/CoreAuthProviderClient.js");
/* harmony import */ var _models_UserApiKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/UserApiKey */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/models/UserApiKey.js");
/* harmony import */ var _UserApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserApiKeyAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyAuthProvider.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var ApiKeyFields;
(function (ApiKeyFields) {
    ApiKeyFields["NAME"] = "name";
})(ApiKeyFields || (ApiKeyFields = {}));
var CoreUserApiKeyAuthProviderClient = (function (_super) {
    __extends(CoreUserApiKeyAuthProviderClient, _super);
    function CoreUserApiKeyAuthProviderClient(requestClient, authRoutes) {
        var _this = this;
        var baseRoute = authRoutes.baseAuthRoute + "/api_keys";
        var name = _UserApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_8__["default"].DEFAULT_NAME;
        _this = _super.call(this, name, requestClient, baseRoute) || this;
        return _this;
    }
    CoreUserApiKeyAuthProviderClient.prototype.createApiKey = function (name) {
        var _a;
        var reqBuilder = new _internal_net_StitchAuthDocRequest__WEBPACK_IMPORTED_MODULE_1__["StitchAuthDocRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].POST)
            .withPath(this.baseRoute)
            .withDocument((_a = {},
            _a[ApiKeyFields.NAME] = name,
            _a))
            .withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) {
            return _models_UserApiKey__WEBPACK_IMPORTED_MODULE_7__["default"].readFromApi(response.body);
        })
            .catch(function (err) {
            throw Object(_internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_3__["wrapDecodingError"])(err);
        });
    };
    CoreUserApiKeyAuthProviderClient.prototype.fetchApiKey = function (keyId) {
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_2__["StitchAuthRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].GET)
            .withPath(this.getApiKeyRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) {
            return _models_UserApiKey__WEBPACK_IMPORTED_MODULE_7__["default"].readFromApi(response.body);
        })
            .catch(function (err) {
            throw Object(_internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_3__["wrapDecodingError"])(err);
        });
    };
    CoreUserApiKeyAuthProviderClient.prototype.fetchApiKeys = function () {
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_2__["StitchAuthRequest"].Builder();
        reqBuilder.withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].GET).withPath(this.baseRoute);
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) {
            var json = JSON.parse(response.body);
            if (Array.isArray(json)) {
                return json.map(function (value) { return _models_UserApiKey__WEBPACK_IMPORTED_MODULE_7__["default"].readFromApi(value); });
            }
            throw new _StitchRequestError__WEBPACK_IMPORTED_MODULE_5__["default"](new Error("unexpected non-array response from server"), _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_4__["StitchRequestErrorCode"].DECODING_ERROR);
        })
            .catch(function (err) {
            throw Object(_internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_3__["wrapDecodingError"])(err);
        });
    };
    CoreUserApiKeyAuthProviderClient.prototype.deleteApiKey = function (keyId) {
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_2__["StitchAuthRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE)
            .withPath(this.getApiKeyRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function () { });
    };
    CoreUserApiKeyAuthProviderClient.prototype.enableApiKey = function (keyId) {
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_2__["StitchAuthRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].PUT)
            .withPath(this.getApiKeyEnableRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function () { });
    };
    CoreUserApiKeyAuthProviderClient.prototype.disableApiKey = function (keyId) {
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_2__["StitchAuthRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].PUT)
            .withPath(this.getApiKeyDisableRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function () { });
    };
    CoreUserApiKeyAuthProviderClient.prototype.getApiKeyRoute = function (keyId) {
        return this.baseRoute + "/" + keyId;
    };
    CoreUserApiKeyAuthProviderClient.prototype.getApiKeyEnableRoute = function (keyId) {
        return this.getApiKeyRoute(keyId) + "/enable";
    };
    CoreUserApiKeyAuthProviderClient.prototype.getApiKeyDisableRoute = function (keyId) {
        return this.getApiKeyRoute(keyId) + "/disable";
    };
    return CoreUserApiKeyAuthProviderClient;
}(_internal_CoreAuthProviderClient__WEBPACK_IMPORTED_MODULE_6__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CoreUserApiKeyAuthProviderClient);
//# sourceMappingURL=CoreUserApiKeyAuthProviderClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyAuthProvider.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyAuthProvider.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UserApiKeyAuthProvider = (function () {
    function UserApiKeyAuthProvider() {
    }
    UserApiKeyAuthProvider.TYPE = "api-key";
    UserApiKeyAuthProvider.DEFAULT_NAME = "api-key";
    return UserApiKeyAuthProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserApiKeyAuthProvider);
//# sourceMappingURL=UserApiKeyAuthProvider.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyCredential.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyCredential.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ProviderCapabilities */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js");
/* harmony import */ var _UserApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserApiKeyAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyAuthProvider.js");


var Fields;
(function (Fields) {
    Fields["KEY"] = "key";
})(Fields || (Fields = {}));
var UserApiKeyCredential = (function () {
    function UserApiKeyCredential(key, providerName) {
        var _a;
        if (providerName === void 0) { providerName = _UserApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_NAME; }
        this.providerType = _UserApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE;
        this.providerCapabilities = new _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__["default"](false);
        this.providerName = providerName;
        this.key = key;
        this.material = (_a = {},
            _a[Fields.KEY] = this.key,
            _a);
    }
    return UserApiKeyCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserApiKeyCredential);
//# sourceMappingURL=UserApiKeyCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/models/UserApiKey.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/models/UserApiKey.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../internal/common/Assertions */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Assertions.js");


var Fields;
(function (Fields) {
    Fields["ID"] = "_id";
    Fields["KEY"] = "key";
    Fields["NAME"] = "name";
    Fields["DISABLED"] = "disabled";
})(Fields || (Fields = {}));
var UserApiKey = (function () {
    function UserApiKey(id, key, name, disabled) {
        this.id = bson__WEBPACK_IMPORTED_MODULE_0__["default"].ObjectID.createFromHexString(id);
        this.key = key;
        this.name = name;
        this.disabled = disabled;
    }
    UserApiKey.readFromApi = function (json) {
        var body = typeof json === "string" ? JSON.parse(json) : json;
        _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_1__["default"].keyPresent(Fields.ID, body);
        _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_1__["default"].keyPresent(Fields.NAME, body);
        _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_1__["default"].keyPresent(Fields.DISABLED, body);
        return new UserApiKey(body[Fields.ID], body[Fields.KEY], body[Fields.NAME], body[Fields.DISABLED]);
    };
    UserApiKey.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[Fields.ID] = this.id,
            _a[Fields.KEY] = this.key,
            _a[Fields.NAME] = this.name,
            _a[Fields.DISABLED] = this.disabled,
            _a;
    };
    return UserApiKey;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserApiKey);
//# sourceMappingURL=UserApiKey.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/CoreUserPasswordAuthProviderClient.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/CoreUserPasswordAuthProviderClient.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_net_Method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../internal/net/Method */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js");
/* harmony import */ var _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../internal/net/StitchDocRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchDocRequest.js");
/* harmony import */ var _internal_CoreAuthProviderClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/CoreAuthProviderClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/CoreAuthProviderClient.js");
/* harmony import */ var _UserPasswordAuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserPasswordAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordAuthProvider.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RegistrationFields;
(function (RegistrationFields) {
    RegistrationFields["EMAIL"] = "email";
    RegistrationFields["PASSWORD"] = "password";
})(RegistrationFields || (RegistrationFields = {}));
var ActionFields;
(function (ActionFields) {
    ActionFields["EMAIL"] = "email";
    ActionFields["PASSWORD"] = "password";
    ActionFields["TOKEN"] = "token";
    ActionFields["TOKEN_ID"] = "tokenId";
})(ActionFields || (ActionFields = {}));
var CoreUserPasswordAuthProviderClient = (function (_super) {
    __extends(CoreUserPasswordAuthProviderClient, _super);
    function CoreUserPasswordAuthProviderClient(providerName, requestClient, authRoutes) {
        if (providerName === void 0) { providerName = _UserPasswordAuthProvider__WEBPACK_IMPORTED_MODULE_3__["default"].DEFAULT_NAME; }
        var _this = this;
        var baseRoute = authRoutes.getAuthProviderRoute(providerName);
        _this = _super.call(this, providerName, requestClient, baseRoute) || this;
        return _this;
    }
    CoreUserPasswordAuthProviderClient.prototype.registerWithEmailInternal = function (email, password) {
        var _a;
        var reqBuilder = new _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_1__["StitchDocRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].POST)
            .withPath(this.getRegisterWithEmailRoute());
        reqBuilder.withDocument((_a = {},
            _a[RegistrationFields.EMAIL] = email,
            _a[RegistrationFields.PASSWORD] = password,
            _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.confirmUserInternal = function (token, tokenId) {
        var _a;
        var reqBuilder = new _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_1__["StitchDocRequest"].Builder();
        reqBuilder.withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].POST).withPath(this.getConfirmUserRoute());
        reqBuilder.withDocument((_a = {},
            _a[ActionFields.TOKEN] = token,
            _a[ActionFields.TOKEN_ID] = tokenId,
            _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.resendConfirmationEmailInternal = function (email) {
        var _a;
        var reqBuilder = new _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_1__["StitchDocRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].POST)
            .withPath(this.getResendConfirmationEmailRoute());
        reqBuilder.withDocument((_a = {}, _a[ActionFields.EMAIL] = email, _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.resetPasswordInternal = function (token, tokenId, password) {
        var _a;
        var reqBuilder = new _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_1__["StitchDocRequest"].Builder();
        reqBuilder.withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].POST).withPath(this.getResetPasswordRoute());
        reqBuilder.withDocument((_a = {},
            _a[ActionFields.TOKEN] = token,
            _a[ActionFields.TOKEN_ID] = tokenId,
            _a[ActionFields.PASSWORD] = password,
            _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.sendResetPasswordEmailInternal = function (email) {
        var _a;
        var reqBuilder = new _internal_net_StitchDocRequest__WEBPACK_IMPORTED_MODULE_1__["StitchDocRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_0__["default"].POST)
            .withPath(this.getSendResetPasswordEmailRoute());
        reqBuilder.withDocument((_a = {}, _a[ActionFields.EMAIL] = email, _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.getRegisterWithEmailRoute = function () {
        return this.getExtensionRoute("register");
    };
    CoreUserPasswordAuthProviderClient.prototype.getConfirmUserRoute = function () {
        return this.getExtensionRoute("confirm");
    };
    CoreUserPasswordAuthProviderClient.prototype.getResendConfirmationEmailRoute = function () {
        return this.getExtensionRoute("confirm/send");
    };
    CoreUserPasswordAuthProviderClient.prototype.getResetPasswordRoute = function () {
        return this.getExtensionRoute("reset");
    };
    CoreUserPasswordAuthProviderClient.prototype.getSendResetPasswordEmailRoute = function () {
        return this.getExtensionRoute("reset/send");
    };
    CoreUserPasswordAuthProviderClient.prototype.getExtensionRoute = function (path) {
        return this.baseRoute + "/" + path;
    };
    return CoreUserPasswordAuthProviderClient;
}(_internal_CoreAuthProviderClient__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CoreUserPasswordAuthProviderClient);
//# sourceMappingURL=CoreUserPasswordAuthProviderClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordAuthProvider.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordAuthProvider.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UserPasswordAuthProvider = (function () {
    function UserPasswordAuthProvider() {
    }
    UserPasswordAuthProvider.TYPE = "local-userpass";
    UserPasswordAuthProvider.DEFAULT_NAME = "local-userpass";
    return UserPasswordAuthProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserPasswordAuthProvider);
//# sourceMappingURL=UserPasswordAuthProvider.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordCredential.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordCredential.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ProviderCapabilities */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js");
/* harmony import */ var _UserPasswordAuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPasswordAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordAuthProvider.js");


var Fields;
(function (Fields) {
    Fields["USERNAME"] = "username";
    Fields["PASSWORD"] = "password";
})(Fields || (Fields = {}));
var UserPasswordCredential = (function () {
    function UserPasswordCredential(username, password, providerName) {
        var _a;
        if (providerName === void 0) { providerName = _UserPasswordAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_NAME; }
        this.username = username;
        this.password = password;
        this.providerName = providerName;
        this.providerType = _UserPasswordAuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE;
        this.providerCapabilities = new _ProviderCapabilities__WEBPACK_IMPORTED_MODULE_0__["default"](false);
        this.material = (_a = {},
            _a[Fields.USERNAME] = this.username,
            _a[Fields.PASSWORD] = this.password,
            _a);
    }
    return UserPasswordCredential;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserPasswordCredential);
//# sourceMappingURL=UserPasswordCredential.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js ***!
  \****************************************************************/
/*! exports provided: BSON, AuthInfo, StitchAuthResponseCredential, AnonymousAuthProvider, AnonymousCredential, ApiStitchUserIdentity, CustomAuthProvider, CustomCredential, FacebookAuthProvider, FacebookCredential, GoogleAuthProvider, GoogleCredential, ServerApiKeyAuthProvider, ServerApiKeyCredential, UserApiKeyAuthProvider, UserApiKey, UserApiKeyCredential, StitchAuthCredential, StitchError, StitchClientError, StitchClientErrorCode, CoreUserApiKeyAuthProviderClient, UserPasswordAuthProvider, UserPasswordCredential, CoreUserPassAuthProviderClient, CoreStitchAppClient, CoreStitchAuth, CoreStitchUserImpl, DeviceFields, BasicRequest, ContentTypes, Event, BaseEventStream, StitchEvent, FetchTransport, Headers, Stream, StitchAppClientInfo, StitchAppClientConfiguration, StitchAppRequestClient, StitchAppRoutes, StitchAuthRequest, StitchRequestClient, StitchRequestError, StitchRequestErrorCode, StitchServiceRoutes, StitchServiceError, StitchServiceErrorCode, StitchUserProfileImpl, CoreStitchServiceClientImpl, StitchUserIdentity, StitchAppAuthRoutes, Method, Response, MemoryStorage, handleRequestError, UserType, Assertions, base64Decode, base64Encode, utf8Slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BSON", function() { return bson__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _auth_internal_AuthInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/internal/AuthInfo */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInfo", function() { return _auth_internal_AuthInfo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _auth_internal_CoreStitchAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/internal/CoreStitchAuth */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchAuth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreStitchAuth", function() { return _auth_internal_CoreStitchAuth__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _auth_internal_CoreStitchUserImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/internal/CoreStitchUserImpl */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchUserImpl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreStitchUserImpl", function() { return _auth_internal_CoreStitchUserImpl__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _auth_internal_DeviceFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/internal/DeviceFields */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/DeviceFields.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeviceFields", function() { return _auth_internal_DeviceFields__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _auth_internal_models_ApiStitchUserIdentity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/internal/models/ApiStitchUserIdentity */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiStitchUserIdentity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiStitchUserIdentity", function() { return _auth_internal_models_ApiStitchUserIdentity__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _auth_internal_StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/internal/StitchUserProfileImpl */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchUserProfileImpl", function() { return _auth_internal_StitchUserProfileImpl__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _auth_providers_anonymous_AnonymousAuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/providers/anonymous/AnonymousAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousAuthProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousAuthProvider", function() { return _auth_providers_anonymous_AnonymousAuthProvider__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _auth_providers_anonymous_AnonymousCredential__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/providers/anonymous/AnonymousCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousCredential", function() { return _auth_providers_anonymous_AnonymousCredential__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _auth_providers_custom_CustomAuthProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/providers/custom/CustomAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomAuthProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomAuthProvider", function() { return _auth_providers_custom_CustomAuthProvider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _auth_providers_custom_CustomCredential__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/providers/custom/CustomCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomCredential", function() { return _auth_providers_custom_CustomCredential__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _auth_providers_facebook_FacebookAuthProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/providers/facebook/FacebookAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookAuthProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookAuthProvider", function() { return _auth_providers_facebook_FacebookAuthProvider__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _auth_providers_facebook_FacebookCredential__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/providers/facebook/FacebookCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookCredential", function() { return _auth_providers_facebook_FacebookCredential__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _auth_providers_google_GoogleAuthProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/providers/google/GoogleAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleAuthProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthProvider", function() { return _auth_providers_google_GoogleAuthProvider__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _auth_providers_google_GoogleCredential__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/providers/google/GoogleCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleCredential", function() { return _auth_providers_google_GoogleCredential__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _auth_providers_internal_StitchAuthResponseCredential__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/providers/internal/StitchAuthResponseCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/StitchAuthResponseCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAuthCredential", function() { return _auth_providers_internal_StitchAuthResponseCredential__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAuthResponseCredential", function() { return _auth_providers_internal_StitchAuthResponseCredential__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _auth_providers_serverapikey_ServerApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/providers/serverapikey/ServerApiKeyAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyAuthProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerApiKeyAuthProvider", function() { return _auth_providers_serverapikey_ServerApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _auth_providers_serverapikey_ServerApiKeyCredential__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/providers/serverapikey/ServerApiKeyCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerApiKeyCredential", function() { return _auth_providers_serverapikey_ServerApiKeyCredential__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _auth_providers_userapikey_CoreUserApiKeyAuthProviderClient__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/providers/userapikey/CoreUserApiKeyAuthProviderClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/CoreUserApiKeyAuthProviderClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreUserApiKeyAuthProviderClient", function() { return _auth_providers_userapikey_CoreUserApiKeyAuthProviderClient__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _auth_providers_userapikey_models_UserApiKey__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/providers/userapikey/models/UserApiKey */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/models/UserApiKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKey", function() { return _auth_providers_userapikey_models_UserApiKey__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _auth_providers_userapikey_UserApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/providers/userapikey/UserApiKeyAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyAuthProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyAuthProvider", function() { return _auth_providers_userapikey_UserApiKeyAuthProvider__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _auth_providers_userapikey_UserApiKeyCredential__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/providers/userapikey/UserApiKeyCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiKeyCredential", function() { return _auth_providers_userapikey_UserApiKeyCredential__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _auth_providers_userpass_CoreUserPasswordAuthProviderClient__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/providers/userpass/CoreUserPasswordAuthProviderClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/CoreUserPasswordAuthProviderClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreUserPassAuthProviderClient", function() { return _auth_providers_userpass_CoreUserPasswordAuthProviderClient__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _auth_providers_userpass_UserPasswordAuthProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/providers/userpass/UserPasswordAuthProvider */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordAuthProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordAuthProvider", function() { return _auth_providers_userpass_UserPasswordAuthProvider__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _auth_providers_userpass_UserPasswordCredential__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/providers/userpass/UserPasswordCredential */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordCredential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPasswordCredential", function() { return _auth_providers_userpass_UserPasswordCredential__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _auth_StitchUserIdentity__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/StitchUserIdentity */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/StitchUserIdentity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchUserIdentity", function() { return _auth_StitchUserIdentity__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _auth_UserType__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/UserType */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/UserType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return _auth_UserType__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/common/Assertions */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Assertions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assertions", function() { return _internal_common_Assertions__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _internal_common_Base64__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/common/Base64 */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Base64.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64Decode", function() { return _internal_common_Base64__WEBPACK_IMPORTED_MODULE_28__["base64Decode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64Encode", function() { return _internal_common_Base64__WEBPACK_IMPORTED_MODULE_28__["base64Encode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utf8Slice", function() { return _internal_common_Base64__WEBPACK_IMPORTED_MODULE_28__["utf8Slice"]; });

/* harmony import */ var _internal_common_Storage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/common/Storage */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryStorage", function() { return _internal_common_Storage__WEBPACK_IMPORTED_MODULE_29__["MemoryStorage"]; });

/* harmony import */ var _internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/common/StitchErrorUtils */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleRequestError", function() { return _internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_30__["handleRequestError"]; });

/* harmony import */ var _internal_CoreStitchAppClient__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/CoreStitchAppClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/CoreStitchAppClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreStitchAppClient", function() { return _internal_CoreStitchAppClient__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _internal_net_BasicRequest__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/net/BasicRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BasicRequest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicRequest", function() { return _internal_net_BasicRequest__WEBPACK_IMPORTED_MODULE_32__["BasicRequest"]; });

/* harmony import */ var _internal_net_ContentTypes__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/net/ContentTypes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentTypes", function() { return _internal_net_ContentTypes__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _internal_net_Event__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/net/Event */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _internal_net_Event__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _internal_net_BaseEventStream__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/net/BaseEventStream */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseEventStream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEventStream", function() { return _internal_net_BaseEventStream__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _internal_net_StitchEvent__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/net/StitchEvent */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchEvent", function() { return _internal_net_StitchEvent__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _internal_net_FetchTransport__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/net/FetchTransport */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/FetchTransport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchTransport", function() { return _internal_net_FetchTransport__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _internal_net_Headers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/net/Headers */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return _internal_net_Headers__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _internal_net_Method__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/net/Method */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Method", function() { return _internal_net_Method__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _internal_net_Response__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/net/Response */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Response.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _internal_net_Response__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _internal_net_Stream__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/net/Stream */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Stream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return _internal_net_Stream__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _internal_net_StitchAppAuthRoutes__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/net/StitchAppAuthRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppAuthRoutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppAuthRoutes", function() { return _internal_net_StitchAppAuthRoutes__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _internal_net_StitchAppRequestClient__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/net/StitchAppRequestClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRequestClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppRequestClient", function() { return _internal_net_StitchAppRequestClient__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _internal_net_StitchAppRoutes__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/net/StitchAppRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRoutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppRoutes", function() { return _internal_net_StitchAppRoutes__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/net/StitchAuthRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAuthRequest", function() { return _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_45__["StitchAuthRequest"]; });

/* harmony import */ var _internal_net_StitchRequestClient__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/net/StitchRequestClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequestClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchRequestClient", function() { return _internal_net_StitchRequestClient__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _services_internal_CoreStitchServiceClientImpl__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/internal/CoreStitchServiceClientImpl */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/CoreStitchServiceClientImpl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreStitchServiceClientImpl", function() { return _services_internal_CoreStitchServiceClientImpl__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _services_internal_StitchServiceRoutes__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/internal/StitchServiceRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/StitchServiceRoutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchServiceRoutes", function() { return _services_internal_StitchServiceRoutes__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _StitchAppClientConfiguration__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./StitchAppClientConfiguration */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientConfiguration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppClientConfiguration", function() { return _StitchAppClientConfiguration__WEBPACK_IMPORTED_MODULE_49__["StitchAppClientConfiguration"]; });

/* harmony import */ var _StitchAppClientInfo__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./StitchAppClientInfo */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchAppClientInfo", function() { return _StitchAppClientInfo__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _StitchClientError__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./StitchClientError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchClientError", function() { return _StitchClientError__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./StitchClientErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchClientErrorCode", function() { return _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_52__["StitchClientErrorCode"]; });

/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchError", function() { return _StitchError__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _StitchRequestError__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./StitchRequestError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchRequestError", function() { return _StitchRequestError__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./StitchRequestErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchRequestErrorCode", function() { return _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_55__["StitchRequestErrorCode"]; });

/* harmony import */ var _StitchServiceError__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./StitchServiceError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchServiceError", function() { return _StitchServiceError__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./StitchServiceErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StitchServiceErrorCode", function() { return _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_57__["StitchServiceErrorCode"]; });





























































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/CoreStitchAppClient.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/CoreStitchAppClient.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_internal_CoreStitchServiceClientImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/internal/CoreStitchServiceClientImpl */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/CoreStitchServiceClientImpl.js");

var CoreStitchAppClient = (function () {
    function CoreStitchAppClient(authRequestClient, routes) {
        this.functionService =
            new _services_internal_CoreStitchServiceClientImpl__WEBPACK_IMPORTED_MODULE_0__["default"](authRequestClient, routes.serviceRoutes);
    }
    CoreStitchAppClient.prototype.callFunction = function (name, args, decoder) {
        return this.functionService.callFunction(name, args, decoder);
    };
    return CoreStitchAppClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreStitchAppClient);
//# sourceMappingURL=CoreStitchAppClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Assertions.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Assertions.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Assertions = (function () {
    function Assertions() {
    }
    Assertions.keyPresent = function (key, object) {
        if (object[key] === undefined) {
            throw new Error("expected " + key + " to be present");
        }
    };
    return Assertions;
}());
/* harmony default export */ __webpack_exports__["default"] = (Assertions);
//# sourceMappingURL=Assertions.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Base64.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Base64.js ***!
  \*********************************************************************************/
/*! exports provided: base64Decode, base64Encode, utf8Slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Decode", function() { return base64Decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Encode", function() { return base64Encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8Slice", function() { return utf8Slice; });
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_0__);

function base64Decode(str) {
    var unevenBytes = str.length % 4;
    var strToDecode;
    if (unevenBytes != 0) {
        var paddingNeeded = 4 - unevenBytes;
        strToDecode = str + "=".repeat(paddingNeeded);
    }
    else {
        strToDecode = str;
    }
    var bytes = Object(base64_js__WEBPACK_IMPORTED_MODULE_0__["toByteArray"])(strToDecode);
    return utf8Slice(bytes, 0, bytes.length);
}
function base64Encode(str) {
    var result;
    if ("undefined" === typeof Uint8Array) {
        result = utf8ToBytes(str);
    }
    result = new Uint8Array(utf8ToBytes(str));
    return Object(base64_js__WEBPACK_IMPORTED_MODULE_0__["fromByteArray"])(result);
}
function utf8ToBytes(string) {
    var units = Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    var i = 0;
    for (; i < length; i++) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 0xd7ff && codePoint < 0xe000) {
            if (leadSurrogate) {
                if (codePoint < 0xdc00) {
                    if ((units -= 3) > -1)
                        bytes.push(0xef, 0xbf, 0xbd);
                    leadSurrogate = codePoint;
                    continue;
                }
                else {
                    codePoint =
                        ((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00) | 0x10000;
                    leadSurrogate = null;
                }
            }
            else {
                if (codePoint > 0xdbff) {
                    if ((units -= 3) > -1) {
                        bytes.push(0xef, 0xbf, 0xbd);
                    }
                    continue;
                }
                else if (i + 1 === length) {
                    if ((units -= 3) > -1) {
                        bytes.push(0xef, 0xbf, 0xbd);
                    }
                    continue;
                }
                else {
                    leadSurrogate = codePoint;
                    continue;
                }
            }
        }
        else if (leadSurrogate) {
            if ((units -= 3) > -1) {
                bytes.push(0xef, 0xbf, 0xbd);
            }
            leadSurrogate = null;
        }
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) {
                break;
            }
            bytes.push(codePoint);
        }
        else if (codePoint < 0x800) {
            if ((units -= 2) < 0) {
                break;
            }
            bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) {
                break;
            }
            bytes.push((codePoint >> 0xc) | 0xe0, ((codePoint >> 0x6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint < 0x200000) {
            if ((units -= 4) < 0) {
                break;
            }
            bytes.push((codePoint >> 0x12) | 0xf0, ((codePoint >> 0xc) & 0x3f) | 0x80, ((codePoint >> 0x6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
        else {
            throw new Error("Invalid code point");
        }
    }
    return bytes;
}
function utf8Slice(buf, start, end) {
    var res = "";
    var tmp = "";
    end = Math.min(buf.length, end || Infinity);
    start = start || 0;
    for (var i = start; i < end; i++) {
        if (buf[i] <= 0x7f) {
            res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
            tmp = "";
        }
        else {
            tmp += "%" + buf[i].toString(16);
        }
    }
    return res + decodeUtf8Char(tmp);
}
function decodeUtf8Char(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (err) {
        return String.fromCharCode(0xfffd);
    }
}
//# sourceMappingURL=Base64.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js ***!
  \*******************************************************************************************/
/*! exports provided: wrapDecodingError, handleRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapDecodingError", function() { return wrapDecodingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequestError", function() { return handleRequestError; });
/* harmony import */ var _net_ContentTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../net/ContentTypes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js");
/* harmony import */ var _net_Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../net/Headers */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js");
/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
/* harmony import */ var _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StitchRequestErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js");
/* harmony import */ var _StitchRequestError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StitchRequestError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js");
/* harmony import */ var _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../StitchServiceErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js");
/* harmony import */ var _StitchServiceError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StitchServiceError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js");







var Fields;
(function (Fields) {
    Fields["ERROR"] = "error";
    Fields["ERROR_CODE"] = "error_code";
})(Fields || (Fields = {}));
function wrapDecodingError(err) {
    if (err instanceof _StitchError__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return err;
    }
    return new _StitchRequestError__WEBPACK_IMPORTED_MODULE_4__["default"](err, _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_3__["StitchRequestErrorCode"].DECODING_ERROR);
}
function handleRequestError(response) {
    if (response.body === undefined) {
        throw new _StitchServiceError__WEBPACK_IMPORTED_MODULE_6__["default"]("received unexpected status code " + response.statusCode, _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_5__["StitchServiceErrorCode"].Unknown);
    }
    var body;
    try {
        body = response.body;
    }
    catch (e) {
        throw new _StitchServiceError__WEBPACK_IMPORTED_MODULE_6__["default"]("received unexpected status code " + response.statusCode, _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_5__["StitchServiceErrorCode"].Unknown);
    }
    var errorMsg = handleRichError(response, body);
    throw new _StitchServiceError__WEBPACK_IMPORTED_MODULE_6__["default"](errorMsg, _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_5__["StitchServiceErrorCode"].Unknown);
}
function handleRichError(response, body) {
    if (response.headers[_net_Headers__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_TYPE] === undefined ||
        (response.headers[_net_Headers__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_TYPE] !== undefined &&
            response.headers[_net_Headers__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_TYPE] !== _net_ContentTypes__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION_JSON)) {
        return body;
    }
    var bsonObj = JSON.parse(body);
    if (!(bsonObj instanceof Object)) {
        return body;
    }
    var doc = bsonObj;
    if (doc[Fields.ERROR] === undefined) {
        return body;
    }
    var errorMsg = doc[Fields.ERROR];
    if (doc[Fields.ERROR_CODE] === undefined) {
        return errorMsg;
    }
    var errorCode = doc[Fields.ERROR_CODE];
    throw new _StitchServiceError__WEBPACK_IMPORTED_MODULE_6__["default"](errorMsg, Object(_StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_5__["stitchServiceErrorCodeFromApi"])(errorCode));
}
//# sourceMappingURL=StitchErrorUtils.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Storage.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Storage.js ***!
  \**********************************************************************************/
/*! exports provided: MemoryStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryStorage", function() { return MemoryStorage; });
var MemoryStorage = (function () {
    function MemoryStorage(suiteName) {
        this.suiteName = suiteName;
        this.storage = {};
    }
    MemoryStorage.prototype.get = function (key) {
        return this.storage[this.suiteName + "." + key];
    };
    MemoryStorage.prototype.set = function (key, value) {
        this.storage[this.suiteName + "." + key] = value;
    };
    MemoryStorage.prototype.remove = function (key) {
        delete this.storage[this.suiteName + "." + key];
    };
    return MemoryStorage;
}());

//# sourceMappingURL=Storage.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ApiAppMetadata.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ApiAppMetadata.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Fields;
(function (Fields) {
    Fields["DEPLOYMENT_MODEL"] = "deployment_model";
    Fields["LOCATION"] = "location";
    Fields["HOSTNAME"] = "hostname";
})(Fields || (Fields = {}));
var ApiAppMetadata = (function () {
    function ApiAppMetadata(deploymentModel, location, hostname) {
        this.deploymentModel = deploymentModel;
        this.location = location;
        this.hostname = hostname;
    }
    ApiAppMetadata.fromJSON = function (json) {
        return new ApiAppMetadata(json[Fields.DEPLOYMENT_MODEL], json[Fields.LOCATION], json[Fields.HOSTNAME]);
    };
    ApiAppMetadata.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[Fields.DEPLOYMENT_MODEL] = this.deploymentModel,
            _a[Fields.LOCATION] = this.location,
            _a[Fields.HOSTNAME] = this.hostname,
            _a;
    };
    return ApiAppMetadata;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApiAppMetadata);
//# sourceMappingURL=ApiAppMetadata.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseEventStream.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseEventStream.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js");
/* harmony import */ var _StitchEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StitchEvent */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchEvent.js");
/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
/* harmony import */ var _StitchRequestError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StitchRequestError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js");




var BaseEventStream = (function () {
    function BaseEventStream(reconnecter) {
        this.reconnecter = reconnecter;
        this.closed = false;
        this.events = [];
        this.listeners = [];
        this.lastErr = undefined;
    }
    BaseEventStream.prototype.reconnect = function (error) {
        var _this = this;
        if (!this.reconnecter) {
            if (!this.closed) {
                this.closed = true;
                this.events.push(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, "stream closed: " + error));
                this.poll();
            }
            return;
        }
        this.reconnecter()
            .then(function (next) {
            _this.onReconnect(next);
        })
            .catch(function (e) {
            if (!(e instanceof _StitchError__WEBPACK_IMPORTED_MODULE_2__["default"]) || !(e instanceof _StitchRequestError__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                _this.closed = true;
                _this.events.push(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, "stream closed: " + error));
                _this.poll();
                return;
            }
            setTimeout(function () { return _this.reconnect(e); }, BaseEventStream.RETRY_TIMEOUT_MILLIS);
        });
    };
    BaseEventStream.prototype.poll = function () {
        while (this.events.length !== 0) {
            var event_1 = this.events.pop();
            for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                var listener = _a[_i];
                if (listener.onEvent) {
                    listener.onEvent(event_1);
                }
            }
        }
    };
    BaseEventStream.prototype.addListener = function (listener) {
        var _this = this;
        if (this.closed) {
            setTimeout(function () { return listener.onEvent(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, "stream closed")); }, 0);
            return;
        }
        if (this.lastErr !== undefined) {
            setTimeout(function () { return listener.onEvent(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, _this.lastErr)); }, 0);
            return;
        }
        this.listeners.push(listener);
        this.poll();
    };
    BaseEventStream.prototype.removeListener = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index === -1) {
            return;
        }
        this.listeners.splice(index, 1);
    };
    BaseEventStream.prototype.listenOnce = function (listener) {
        var _this = this;
        if (this.closed) {
            setTimeout(function () { return listener.onEvent(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, "stream closed")); }, 0);
            return;
        }
        if (this.lastErr !== undefined) {
            setTimeout(function () { return listener.onEvent(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, _this.lastErr)); }, 0);
            return;
        }
        var wrapper = {
            onEvent: function (e) {
                _this.removeListener(wrapper);
                listener.onEvent(e);
            }
        };
        this.addListener(wrapper);
    };
    BaseEventStream.prototype.nextEvent = function () {
        var _this = this;
        if (this.closed) {
            return Promise.reject(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, "stream closed"));
        }
        if (this.lastErr !== undefined) {
            return Promise.reject(new _Event__WEBPACK_IMPORTED_MODULE_0__["default"](_StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME, this.lastErr));
        }
        return new Promise(function (resolve, reject) {
            _this.listenOnce({
                onEvent: function (e) {
                    resolve(e);
                }
            });
        });
    };
    BaseEventStream.prototype.close = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.afterClose();
    };
    BaseEventStream.RETRY_TIMEOUT_MILLIS = 5000;
    return BaseEventStream;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseEventStream);
//# sourceMappingURL=BaseEventStream.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseStitchRequestClient.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseStitchRequestClient.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/common/StitchErrorUtils */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js");
/* harmony import */ var _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../StitchRequestErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js");
/* harmony import */ var _StitchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StitchError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js");
/* harmony import */ var _StitchRequestError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StitchRequestError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js");
/* harmony import */ var _BasicRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BasicRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BasicRequest.js");





function inspectResponse(request, url, response) {
    if (response.statusCode >= 200 && response.statusCode < 300) {
        return response;
    }
    return Object(_internal_common_StitchErrorUtils__WEBPACK_IMPORTED_MODULE_0__["handleRequestError"])(response);
}
var StitchRequestClient = (function () {
    function StitchRequestClient(baseUrl, transport) {
        this.baseUrl = baseUrl;
        this.transport = transport;
    }
    StitchRequestClient.prototype.doRequestToURL = function (stitchReq, url) {
        return this.transport
            .roundTrip(this.buildRequest(stitchReq, url))
            .catch(function (error) {
            throw new _StitchRequestError__WEBPACK_IMPORTED_MODULE_3__["default"](error, _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_1__["StitchRequestErrorCode"].TRANSPORT_ERROR);
        })
            .then(function (resp) { return inspectResponse(stitchReq, url, resp); });
    };
    StitchRequestClient.prototype.doStreamRequestToURL = function (stitchReq, url, open, retryRequest) {
        if (open === void 0) { open = true; }
        return this.transport
            .stream(this.buildRequest(stitchReq, url), open, retryRequest)
            .catch(function (error) {
            if (error instanceof _StitchError__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                throw error;
            }
            throw new _StitchRequestError__WEBPACK_IMPORTED_MODULE_3__["default"](error, _StitchRequestErrorCode__WEBPACK_IMPORTED_MODULE_1__["StitchRequestErrorCode"].TRANSPORT_ERROR);
        });
    };
    StitchRequestClient.prototype.buildRequest = function (stitchReq, url) {
        return new _BasicRequest__WEBPACK_IMPORTED_MODULE_4__["BasicRequest"].Builder()
            .withMethod(stitchReq.method)
            .withUrl("" + url + stitchReq.path)
            .withHeaders(stitchReq.headers)
            .withBody(stitchReq.body)
            .build();
    };
    return StitchRequestClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchRequestClient);
//# sourceMappingURL=BaseStitchRequestClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BasicRequest.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BasicRequest.js ***!
  \************************************************************************************/
/*! exports provided: BasicRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRequest", function() { return BasicRequest; });
var BasicRequest = (function () {
    function BasicRequest(method, url, headers, body) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.body = body;
    }
    return BasicRequest;
}());

(function (BasicRequest) {
    var Builder = (function () {
        function Builder(request) {
            if (!request) {
                return;
            }
            this.method = request.method;
            this.url = request.url;
            this.headers = request.headers;
            this.body = request.body;
        }
        Builder.prototype.withMethod = function (method) {
            this.method = method;
            return this;
        };
        Builder.prototype.withUrl = function (url) {
            this.url = url;
            return this;
        };
        Builder.prototype.withHeaders = function (headers) {
            this.headers = headers;
            return this;
        };
        Builder.prototype.withBody = function (body) {
            this.body = body;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.method === undefined) {
                throw new Error("must set method");
            }
            if (this.url === undefined) {
                throw new Error("must set non-empty url");
            }
            return new BasicRequest(this.method, this.url, this.headers === undefined
                ? {}
                : this.headers, this.body);
        };
        return Builder;
    }());
    BasicRequest.Builder = Builder;
})(BasicRequest || (BasicRequest = {}));
//# sourceMappingURL=BasicRequest.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ContentTypes = (function () {
    function ContentTypes() {
    }
    ContentTypes.APPLICATION_JSON = "application/json";
    ContentTypes.TEXT_EVENT_STREAM = "text/event-stream";
    return ContentTypes;
}());
/* harmony default export */ __webpack_exports__["default"] = (ContentTypes);
//# sourceMappingURL=ContentTypes.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Event = (function () {
    function Event(eventName, data) {
        this.eventName = eventName;
        this.data = data;
    }
    Event.MESSAGE_EVENT = "message";
    return Event;
}());
/* harmony default export */ __webpack_exports__["default"] = (Event);
//# sourceMappingURL=Event.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/FetchTransport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/FetchTransport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Response */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Response.js");
/* harmony import */ var _StitchClientError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../StitchClientError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientError.js");
/* harmony import */ var _StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StitchClientErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);




var FetchTransport = (function () {
    function FetchTransport() {
    }
    FetchTransport.prototype.roundTrip = function (request) {
        var responsePromise = cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(request.url, {
            body: request.body,
            headers: request.headers,
            method: request.method,
            mode: 'cors'
        });
        var responseTextPromise = responsePromise.then(function (response) {
            return response.text();
        });
        return Promise.all([responsePromise, responseTextPromise]).then(function (values) {
            var response = values[0];
            var body = values[1];
            var headers = {};
            response.headers.forEach(function (value, key) {
                headers[key] = value;
            });
            return new _Response__WEBPACK_IMPORTED_MODULE_0__["default"](headers, response.status, body);
        });
    };
    FetchTransport.prototype.stream = function (request, open, retryRequest) {
        if (open === void 0) { open = true; }
        throw new _StitchClientError__WEBPACK_IMPORTED_MODULE_1__["default"](_StitchClientErrorCode__WEBPACK_IMPORTED_MODULE_2__["StitchClientErrorCode"].StreamingNotSupported);
    };
    return FetchTransport;
}());
/* harmony default export */ __webpack_exports__["default"] = (FetchTransport);
//# sourceMappingURL=FetchTransport.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Headers = (function () {
    function Headers() {
    }
    Headers.getAuthorizationBearer = function (value) {
        return Headers.AUTHORIZATION_BEARER + " " + value;
    };
    Headers.CONTENT_TYPE_CANON = "Content-Type";
    Headers.CONTENT_TYPE = Headers.CONTENT_TYPE_CANON.toLocaleLowerCase();
    Headers.AUTHORIZATION_CANON = "Authorization";
    Headers.AUTHORIZATION = Headers.AUTHORIZATION_CANON.toLocaleLowerCase();
    Headers.ACCEPT_CANON = "Accept";
    Headers.ACCEPT = Headers.ACCEPT_CANON.toLocaleLowerCase();
    Headers.AUTHORIZATION_BEARER = "Bearer";
    return Headers;
}());
/* harmony default export */ __webpack_exports__["default"] = (Headers);
//# sourceMappingURL=Headers.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Method;
(function (Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["DELETE"] = "DELETE";
    Method["HEAD"] = "HEAD";
    Method["OPTIONS"] = "OPTIONS";
    Method["TRACE"] = "TRACE";
    Method["PATCH"] = "PATCH";
})(Method || (Method = {}));
/* harmony default export */ __webpack_exports__["default"] = (Method);
//# sourceMappingURL=Method.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Response.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Response.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Response = (function () {
    function Response(headers, statusCode, body) {
        var _this = this;
        this.statusCode = statusCode;
        this.body = body;
        this.headers = {};
        Object.keys(headers).map(function (key, index) {
            _this.headers[key.toLocaleLowerCase()] = headers[key];
        });
    }
    return Response;
}());
/* harmony default export */ __webpack_exports__["default"] = (Response);
//# sourceMappingURL=Response.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppAuthRoutes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppAuthRoutes.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StitchRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRoutes.js");

function getAuthProviderRoute(clientAppId, providerName) {
    return Object(_StitchRoutes__WEBPACK_IMPORTED_MODULE_0__["getAppRoute"])(clientAppId) + ("/auth/providers/" + providerName);
}
function getAuthProviderLoginRoute(clientAppId, providerName) {
    return getAuthProviderRoute(clientAppId, providerName) + "/login";
}
function getAuthProviderLinkRoute(clientAppId, providerName) {
    return getAuthProviderLoginRoute(clientAppId, providerName) + "?link=true";
}
var StitchAppAuthRoutes = (function () {
    function StitchAppAuthRoutes(clientAppId) {
        var _this = this;
        this.baseAuthRoute = _StitchRoutes__WEBPACK_IMPORTED_MODULE_0__["BASE_ROUTE"] + "/auth";
        this.sessionRoute = (function () {
            return _this.baseAuthRoute + "/session";
        })();
        this.profileRoute = (function () {
            return _this.baseAuthRoute + "/profile";
        })();
        this.clientAppId = clientAppId;
    }
    StitchAppAuthRoutes.prototype.getAuthProviderRoute = function (providerName) {
        return getAuthProviderRoute(this.clientAppId, providerName);
    };
    StitchAppAuthRoutes.prototype.getAuthProviderLoginRoute = function (providerName) {
        return getAuthProviderLoginRoute(this.clientAppId, providerName);
    };
    StitchAppAuthRoutes.prototype.getAuthProviderLinkRoute = function (providerName) {
        return getAuthProviderLinkRoute(this.clientAppId, providerName);
    };
    StitchAppAuthRoutes.prototype.getAuthProviderExtensionRoute = function (providerName, path) {
        return this.getAuthProviderRoute(providerName) + "/" + path;
    };
    return StitchAppAuthRoutes;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchAppAuthRoutes);
//# sourceMappingURL=StitchAppAuthRoutes.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRequestClient.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRequestClient.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _ApiAppMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiAppMetadata */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ApiAppMetadata.js");
/* harmony import */ var _BaseStitchRequestClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseStitchRequestClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseStitchRequestClient.js");
/* harmony import */ var _Method__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Method */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js");
/* harmony import */ var _StitchAppRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StitchAppRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRoutes.js");
/* harmony import */ var _StitchRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StitchRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequest.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var StitchAppRequestClient = (function (_super) {
    __extends(StitchAppRequestClient, _super);
    function StitchAppRequestClient(clientAppId, baseUrl, transport) {
        var _this = _super.call(this, baseUrl, transport) || this;
        _this.clientAppId = clientAppId;
        _this.routes = new _StitchAppRoutes__WEBPACK_IMPORTED_MODULE_4__["default"](clientAppId);
        return _this;
    }
    StitchAppRequestClient.prototype.doRequest = function (stitchReq) {
        var _this = this;
        return this.initAppMetadata()
            .then(function (metadata) { return _super.prototype.doRequestToURL.call(_this, stitchReq, metadata.hostname); });
    };
    StitchAppRequestClient.prototype.doStreamRequest = function (stitchReq, open, retryRequest) {
        var _this = this;
        if (open === void 0) { open = true; }
        return this.initAppMetadata()
            .then(function (metadata) { return _super.prototype.doStreamRequestToURL.call(_this, stitchReq, metadata.hostname, open, retryRequest); });
    };
    StitchAppRequestClient.prototype.getBaseURL = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.initAppMetadata().then(function (metadata) { return metadata.hostname; })];
            });
        });
    };
    StitchAppRequestClient.prototype.initAppMetadata = function () {
        var _this = this;
        if (this.appMetadata) {
            return Promise.resolve(this.appMetadata);
        }
        var request = new _StitchRequest__WEBPACK_IMPORTED_MODULE_5__["StitchRequest"].Builder()
            .withMethod(_Method__WEBPACK_IMPORTED_MODULE_3__["default"].GET)
            .withPath(this.routes.appMetadataRoute)
            .build();
        return _super.prototype.doRequestToURL.call(this, request, this.baseUrl)
            .then(function (resp) {
            _this.appMetadata = _ApiAppMetadata__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(bson__WEBPACK_IMPORTED_MODULE_0__["EJSON"].parse(resp.body));
            return _this.appMetadata;
        });
    };
    return StitchAppRequestClient;
}(_BaseStitchRequestClient__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchAppRequestClient);
//# sourceMappingURL=StitchAppRequestClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRoutes.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRoutes.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_internal_StitchServiceRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/internal/StitchServiceRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/StitchServiceRoutes.js");
/* harmony import */ var _StitchAppAuthRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StitchAppAuthRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppAuthRoutes.js");
/* harmony import */ var _StitchRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StitchRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRoutes.js");



var StitchAppRoutes = (function () {
    function StitchAppRoutes(clientAppId) {
        this.clientAppId = clientAppId;
        this.authRoutes = new _StitchAppAuthRoutes__WEBPACK_IMPORTED_MODULE_1__["default"](clientAppId);
        this.serviceRoutes = new _services_internal_StitchServiceRoutes__WEBPACK_IMPORTED_MODULE_0__["default"](clientAppId);
        this.appMetadataRoute = Object(_StitchRoutes__WEBPACK_IMPORTED_MODULE_2__["getAppMetadataRoute"])(clientAppId);
        this.functionCallRoute = Object(_StitchRoutes__WEBPACK_IMPORTED_MODULE_2__["getFunctionCallRoute"])(clientAppId);
    }
    return StitchAppRoutes;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchAppRoutes);
//# sourceMappingURL=StitchAppRoutes.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthDocRequest.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthDocRequest.js ***!
  \********************************************************************************************/
/*! exports provided: StitchAuthDocRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchAuthDocRequest", function() { return StitchAuthDocRequest; });
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _ContentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentTypes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js");
/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Headers */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js");
/* harmony import */ var _StitchAuthRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StitchAuthRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var StitchAuthDocRequest = (function (_super) {
    __extends(StitchAuthDocRequest, _super);
    function StitchAuthDocRequest(request, document) {
        var _this = this;
        request instanceof _StitchAuthRequest__WEBPACK_IMPORTED_MODULE_3__["StitchAuthRequest"]
            ? _this = _super.call(this, request, request.useRefreshToken, request.shouldRefreshOnFailure) || this : _this = _super.call(this, request) || this;
        _this.document = document;
        return _this;
    }
    Object.defineProperty(StitchAuthDocRequest.prototype, "builder", {
        get: function () {
            return new StitchAuthDocRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchAuthDocRequest;
}(_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_3__["StitchAuthRequest"]));

(function (StitchAuthDocRequest) {
    var Builder = (function (_super) {
        __extends(Builder, _super);
        function Builder(request) {
            var _this = _super.call(this, request) || this;
            if (request !== undefined) {
                _this.document = request.document;
                _this.useRefreshToken = request.useRefreshToken;
            }
            return _this;
        }
        Builder.prototype.withDocument = function (document) {
            this.document = document;
            return this;
        };
        Builder.prototype.withAccessToken = function () {
            this.useRefreshToken = false;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.document === undefined || !(this.document instanceof Object)) {
                throw new Error("document must be set: " + this.document);
            }
            if (this.headers === undefined) {
                this.withHeaders({});
            }
            this.headers[_Headers__WEBPACK_IMPORTED_MODULE_2__["default"].CONTENT_TYPE] = _ContentTypes__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION_JSON;
            this.withBody(bson__WEBPACK_IMPORTED_MODULE_0__["EJSON"].stringify(this.document, { relaxed: false }));
            return new StitchAuthDocRequest(_super.prototype.build.call(this), this.document);
        };
        return Builder;
    }(_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_3__["StitchAuthRequest"].Builder));
    StitchAuthDocRequest.Builder = Builder;
})(StitchAuthDocRequest || (StitchAuthDocRequest = {}));
//# sourceMappingURL=StitchAuthDocRequest.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js ***!
  \*****************************************************************************************/
/*! exports provided: StitchAuthRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchAuthRequest", function() { return StitchAuthRequest; });
/* harmony import */ var _StitchRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequest.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchAuthRequest = (function (_super) {
    __extends(StitchAuthRequest, _super);
    function StitchAuthRequest(request, useRefreshToken, shouldRefreshOnFailure) {
        if (useRefreshToken === void 0) { useRefreshToken = false; }
        if (shouldRefreshOnFailure === void 0) { shouldRefreshOnFailure = true; }
        var _this = _super.call(this, request.method, request.path, request.headers, request.startedAt, request.body) || this;
        _this.useRefreshToken = useRefreshToken;
        _this.shouldRefreshOnFailure = shouldRefreshOnFailure;
        return _this;
    }
    Object.defineProperty(StitchAuthRequest.prototype, "builder", {
        get: function () {
            return new StitchAuthRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchAuthRequest;
}(_StitchRequest__WEBPACK_IMPORTED_MODULE_0__["StitchRequest"]));

(function (StitchAuthRequest) {
    var Builder = (function (_super) {
        __extends(Builder, _super);
        function Builder(request) {
            return _super.call(this, request) || this;
        }
        Builder.prototype.withAccessToken = function () {
            this.useRefreshToken = false;
            return this;
        };
        Builder.prototype.withRefreshToken = function () {
            this.useRefreshToken = true;
            return this;
        };
        Builder.prototype.withShouldRefreshOnFailure = function (shouldRefreshOnFailure) {
            this.shouldRefreshOnFailure = shouldRefreshOnFailure;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.useRefreshToken) {
                this.shouldRefreshOnFailure = false;
            }
            return new StitchAuthRequest(_super.prototype.build.call(this), this.useRefreshToken, this.shouldRefreshOnFailure);
        };
        return Builder;
    }(_StitchRequest__WEBPACK_IMPORTED_MODULE_0__["StitchRequest"].Builder));
    StitchAuthRequest.Builder = Builder;
})(StitchAuthRequest || (StitchAuthRequest = {}));
//# sourceMappingURL=StitchAuthRequest.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchDocRequest.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchDocRequest.js ***!
  \****************************************************************************************/
/*! exports provided: StitchDocRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchDocRequest", function() { return StitchDocRequest; });
/* harmony import */ var _StitchRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StitchRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequest.js");
/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Headers */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js");
/* harmony import */ var _ContentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentTypes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js");
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var StitchDocRequest = (function (_super) {
    __extends(StitchDocRequest, _super);
    function StitchDocRequest(request, document) {
        var _this = _super.call(this, request.method, request.path, request.headers, request.startedAt, request.body) || this;
        _this.document = document;
        return _this;
    }
    Object.defineProperty(StitchDocRequest.prototype, "builder", {
        get: function () {
            return new StitchDocRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchDocRequest;
}(_StitchRequest__WEBPACK_IMPORTED_MODULE_0__["StitchRequest"]));

(function (StitchDocRequest) {
    var Builder = (function (_super) {
        __extends(Builder, _super);
        function Builder(request) {
            var _this = _super.call(this, request) || this;
            if (request !== undefined) {
                _this.document = request.document;
            }
            return _this;
        }
        Builder.prototype.withDocument = function (document) {
            this.document = document;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.document === undefined || !(this.document instanceof Object)) {
                throw new Error("document must be set");
            }
            if (this.headers === undefined) {
                this.withHeaders({});
            }
            this.headers[_Headers__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_TYPE] = _ContentTypes__WEBPACK_IMPORTED_MODULE_2__["default"].APPLICATION_JSON;
            this.withBody(bson__WEBPACK_IMPORTED_MODULE_3__["EJSON"].stringify(this.document, { relaxed: false }));
            return new StitchDocRequest(_super.prototype.build.call(this), this.document);
        };
        return Builder;
    }(_StitchRequest__WEBPACK_IMPORTED_MODULE_0__["StitchRequest"].Builder));
    StitchDocRequest.Builder = Builder;
})(StitchDocRequest || (StitchDocRequest = {}));
//# sourceMappingURL=StitchDocRequest.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchEvent.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchEvent.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js");
/* harmony import */ var _StitchServiceError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StitchServiceError */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js");
/* harmony import */ var _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StitchServiceErrorCode */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js");




var StitchEvent = (function () {
    function StitchEvent(eventName, data, decoder) {
        this.eventName = eventName;
        data = data ? data : "";
        var decodedStringBuffer = [];
        for (var chIdx = 0; chIdx < data.length; chIdx++) {
            var c = data[chIdx];
            switch (c) {
                case '%':
                    if (chIdx + 2 >= data.length) {
                        break;
                    }
                    var code = data.substring(chIdx + 1, chIdx + 3);
                    var found = void 0;
                    switch (code) {
                        case "25":
                            found = true;
                            decodedStringBuffer.push("%");
                            break;
                        case "0A":
                            found = true;
                            decodedStringBuffer.push("\n");
                            break;
                        case "0D":
                            found = true;
                            decodedStringBuffer.push("\r");
                            break;
                        default:
                            found = false;
                    }
                    if (found) {
                        chIdx += 2;
                        continue;
                    }
                    break;
                default:
                    break;
            }
            decodedStringBuffer.push(c);
        }
        var decodedData = decodedStringBuffer.join('');
        switch (this.eventName) {
            case StitchEvent.ERROR_EVENT_NAME:
                var errorMsg = void 0;
                var errorCode = void 0;
                try {
                    var errorDoc = bson__WEBPACK_IMPORTED_MODULE_0__["EJSON"].parse(decodedData, { strict: false });
                    errorMsg = errorDoc[ErrorFields.Error];
                    errorCode = Object(_StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_3__["stitchServiceErrorCodeFromApi"])(errorDoc[ErrorFields.ErrorCode]);
                }
                catch (error) {
                    errorMsg = decodedData;
                    errorCode = _StitchServiceErrorCode__WEBPACK_IMPORTED_MODULE_3__["StitchServiceErrorCode"].Unknown;
                }
                this.error = new _StitchServiceError__WEBPACK_IMPORTED_MODULE_2__["default"](errorMsg, errorCode);
                break;
            case _Event__WEBPACK_IMPORTED_MODULE_1__["default"].MESSAGE_EVENT:
                this.data = bson__WEBPACK_IMPORTED_MODULE_0__["EJSON"].parse(decodedData, { strict: false });
                if (decoder) {
                    this.data = decoder.decode(this.data);
                }
                break;
        }
    }
    StitchEvent.fromEvent = function (event, decoder) {
        return new StitchEvent(event.eventName, event.data, decoder);
    };
    StitchEvent.ERROR_EVENT_NAME = "error";
    return StitchEvent;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchEvent);
var ErrorFields;
(function (ErrorFields) {
    ErrorFields["Error"] = "error";
    ErrorFields["ErrorCode"] = "error_code";
})(ErrorFields || (ErrorFields = {}));
//# sourceMappingURL=StitchEvent.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequest.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequest.js ***!
  \*************************************************************************************/
/*! exports provided: StitchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StitchRequest", function() { return StitchRequest; });
var StitchRequest = (function () {
    function StitchRequest(method, path, headers, startedAt, body) {
        this.method = method;
        this.path = path;
        this.headers = headers;
        this.body = body;
        this.startedAt = startedAt;
    }
    Object.defineProperty(StitchRequest.prototype, "builder", {
        get: function () {
            return new StitchRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchRequest;
}());

(function (StitchRequest) {
    var Builder = (function () {
        function Builder(request) {
            if (request !== undefined) {
                this.method = request.method;
                this.path = request.path;
                this.headers = request.headers;
                this.body = request.body;
                this.startedAt = request.startedAt;
            }
        }
        Builder.prototype.withMethod = function (method) {
            this.method = method;
            return this;
        };
        Builder.prototype.withPath = function (path) {
            this.path = path;
            return this;
        };
        Builder.prototype.withHeaders = function (headers) {
            this.headers = headers;
            return this;
        };
        Builder.prototype.withBody = function (body) {
            this.body = body;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.method === undefined) {
                throw Error("must set method");
            }
            if (this.path === undefined) {
                throw Error("must set non-empty path");
            }
            if (this.startedAt === undefined) {
                this.startedAt = Date.now() / 1000;
            }
            return new StitchRequest(this.method, this.path, this.headers === undefined ? {} : this.headers, this.startedAt, this.body);
        };
        return Builder;
    }());
    StitchRequest.Builder = Builder;
})(StitchRequest || (StitchRequest = {}));
//# sourceMappingURL=StitchRequest.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequestClient.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequestClient.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseStitchRequestClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseStitchRequestClient */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseStitchRequestClient.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var StitchRequestClient = (function (_super) {
    __extends(StitchRequestClient, _super);
    function StitchRequestClient(baseUrl, transport) {
        return _super.call(this, baseUrl, transport) || this;
    }
    StitchRequestClient.prototype.doRequest = function (stitchReq) {
        return _super.prototype.doRequestToURL.call(this, stitchReq, this.baseUrl);
    };
    StitchRequestClient.prototype.doStreamRequest = function (stitchReq, open, retryRequest) {
        if (open === void 0) { open = true; }
        return _super.prototype.doStreamRequestToURL.call(this, stitchReq, this.baseUrl, open, retryRequest);
    };
    StitchRequestClient.prototype.getBaseURL = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.baseUrl];
            });
        });
    };
    return StitchRequestClient;
}(_BaseStitchRequestClient__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StitchRequestClient);
//# sourceMappingURL=StitchRequestClient.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRoutes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRoutes.js ***!
  \************************************************************************************/
/*! exports provided: BASE_ROUTE, getAppRoute, getFunctionCallRoute, getAppMetadataRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_ROUTE", function() { return BASE_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppRoute", function() { return getAppRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionCallRoute", function() { return getFunctionCallRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppMetadataRoute", function() { return getAppMetadataRoute; });
var BASE_ROUTE = "/api/client/v2.0";
function getAppRoute(clientAppId) {
    return BASE_ROUTE + ("/app/" + clientAppId);
}
function getFunctionCallRoute(clientAppId) {
    return getAppRoute(clientAppId) + "/functions/call";
}
function getAppMetadataRoute(clientAppId) {
    return getAppRoute(clientAppId) + "/location";
}

//# sourceMappingURL=StitchRoutes.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Stream.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Stream.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js");
/* harmony import */ var _StitchEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StitchEvent */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchEvent.js");


var Stream = (function () {
    function Stream(eventStream, decoder) {
        this.eventStream = eventStream;
        this.decoder = decoder;
        this.listeners = [];
    }
    Stream.prototype.next = function () {
        var _this = this;
        return this.eventStream.nextEvent()
            .then(function (event) {
            var se = _StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].fromEvent(event, _this.decoder);
            if (se.eventName === _StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME) {
                throw se.error;
            }
            if (se.eventName === _Event__WEBPACK_IMPORTED_MODULE_0__["default"].MESSAGE_EVENT) {
                return se.data;
            }
            return _this.next();
        });
    };
    Stream.prototype.onNext = function (callback) {
        var _this = this;
        var wrapper = {
            onEvent: function (e) {
                var se = _StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].fromEvent(e, _this.decoder);
                if (se.eventName !== _Event__WEBPACK_IMPORTED_MODULE_0__["default"].MESSAGE_EVENT) {
                    return;
                }
                callback(se.data);
            }
        };
        this.eventStream.addListener(wrapper);
    };
    Stream.prototype.onError = function (callback) {
        var _this = this;
        var wrapper = {
            onEvent: function (e) {
                var se = _StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].fromEvent(e, _this.decoder);
                if (se.eventName === _StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME) {
                    callback(se.error);
                }
            }
        };
        this.eventStream.addListener(wrapper);
    };
    Stream.prototype.addListener = function (listener) {
        var _this = this;
        var wrapper = {
            onEvent: function (e) {
                var se = _StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].fromEvent(e, _this.decoder);
                if (se.eventName === _StitchEvent__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_EVENT_NAME) {
                    if (listener.onError) {
                        listener.onError(se.error);
                    }
                }
                else {
                    if (listener.onNext) {
                        listener.onNext(se.data);
                    }
                }
            }
        };
        this.listeners.push([listener, wrapper]);
        this.eventStream.addListener(wrapper);
    };
    Stream.prototype.removeListener = function (listener) {
        var index = -1;
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i][0] === listener) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            return;
        }
        var wrapper = this.listeners[index][1];
        this.listeners.splice(index, 1);
        this.eventStream.removeListener(wrapper);
    };
    Stream.prototype.close = function () {
        this.eventStream.close();
    };
    return Stream;
}());
/* harmony default export */ __webpack_exports__["default"] = (Stream);
//# sourceMappingURL=Stream.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/CoreStitchServiceClientImpl.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/CoreStitchServiceClientImpl.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_common_Base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/common/Base64 */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Base64.js");
/* harmony import */ var _internal_net_Method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/net/Method */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js");
/* harmony import */ var _internal_net_StitchAuthDocRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/net/StitchAuthDocRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthDocRequest.js");
/* harmony import */ var _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/net/StitchAuthRequest */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js");




var CoreStitchServiceClientImpl = (function () {
    function CoreStitchServiceClientImpl(requestClient, routes, name) {
        this.requestClient = requestClient;
        this.serviceRoutes = routes;
        this.serviceName = name;
    }
    CoreStitchServiceClientImpl.prototype.callFunction = function (name, args, decoder) {
        return this.requestClient.doAuthenticatedRequestWithDecoder(this.getCallServiceFunctionRequest(name, args), decoder);
    };
    CoreStitchServiceClientImpl.prototype.streamFunction = function (name, args, decoder) {
        return this.requestClient.openAuthenticatedStreamWithDecoder(this.getStreamServiceFunctionRequest(name, args), decoder);
    };
    CoreStitchServiceClientImpl.prototype.getStreamServiceFunctionRequest = function (name, args) {
        var body = { name: name };
        if (this.serviceName !== undefined) {
            body["service"] = this.serviceName;
        }
        body["arguments"] = args;
        var reqBuilder = new _internal_net_StitchAuthRequest__WEBPACK_IMPORTED_MODULE_3__["StitchAuthRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_1__["default"].GET)
            .withPath(this.serviceRoutes.functionCallRoute +
            ("?stitch_request=" + encodeURIComponent(Object(_internal_common_Base64__WEBPACK_IMPORTED_MODULE_0__["base64Encode"])(JSON.stringify(body)))));
        return reqBuilder.build();
    };
    CoreStitchServiceClientImpl.prototype.getCallServiceFunctionRequest = function (name, args) {
        var body = { name: name };
        if (this.serviceName !== undefined) {
            body["service"] = this.serviceName;
        }
        body["arguments"] = args;
        var reqBuilder = new _internal_net_StitchAuthDocRequest__WEBPACK_IMPORTED_MODULE_2__["StitchAuthDocRequest"].Builder();
        reqBuilder
            .withMethod(_internal_net_Method__WEBPACK_IMPORTED_MODULE_1__["default"].POST)
            .withPath(this.serviceRoutes.functionCallRoute);
        reqBuilder.withDocument(body);
        return reqBuilder.build();
    };
    return CoreStitchServiceClientImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreStitchServiceClientImpl);
//# sourceMappingURL=CoreStitchServiceClientImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/StitchServiceRoutes.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/StitchServiceRoutes.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_net_StitchRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/net/StitchRoutes */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRoutes.js");

var StitchServiceRoutes = (function () {
    function StitchServiceRoutes(clientAppId) {
        this.clientAppId = clientAppId;
        this.functionCallRoute = Object(_internal_net_StitchRoutes__WEBPACK_IMPORTED_MODULE_0__["getFunctionCallRoute"])(clientAppId);
    }
    return StitchServiceRoutes;
}());
/* harmony default export */ __webpack_exports__["default"] = (StitchServiceRoutes);
//# sourceMappingURL=StitchServiceRoutes.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/OperationType.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/OperationType.js ***!
  \********************************************************************************************/
/*! exports provided: OperationType, operationTypeFromRemote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationType", function() { return OperationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationTypeFromRemote", function() { return operationTypeFromRemote; });
var OperationType;
(function (OperationType) {
    OperationType["Insert"] = "insert";
    OperationType["Delete"] = "delete";
    OperationType["Replace"] = "replace";
    OperationType["Update"] = "update";
    OperationType["Unknown"] = "unknown";
})(OperationType || (OperationType = {}));
function operationTypeFromRemote(type) {
    switch (type) {
        case "insert":
            return OperationType.Insert;
        case "delete":
            return OperationType.Delete;
        case "replace":
            return OperationType.Replace;
        case "update":
            return OperationType.Update;
        default:
            return OperationType.Unknown;
    }
}
//# sourceMappingURL=OperationType.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/RemoteInsertManyResult.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/RemoteInsertManyResult.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RemoteInsertManyResult = (function () {
    function RemoteInsertManyResult(arr) {
        var inserted = {};
        arr.forEach(function (value, index) {
            inserted[index] = value;
        });
        this.insertedIds = inserted;
    }
    return RemoteInsertManyResult;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteInsertManyResult);
//# sourceMappingURL=RemoteInsertManyResult.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/index.js ***!
  \************************************************************************************/
/*! exports provided: CoreRemoteMongoClientImpl, CoreRemoteMongoCollectionImpl, CoreRemoteMongoDatabaseImpl, CoreRemoteMongoReadOperation, RemoteInsertManyResult, OperationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_CoreRemoteMongoClientImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/CoreRemoteMongoClientImpl */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoClientImpl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreRemoteMongoClientImpl", function() { return _internal_CoreRemoteMongoClientImpl__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _internal_CoreRemoteMongoCollectionImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/CoreRemoteMongoCollectionImpl */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoCollectionImpl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreRemoteMongoCollectionImpl", function() { return _internal_CoreRemoteMongoCollectionImpl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _internal_CoreRemoteMongoDatabaseImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/CoreRemoteMongoDatabaseImpl */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoDatabaseImpl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreRemoteMongoDatabaseImpl", function() { return _internal_CoreRemoteMongoDatabaseImpl__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _internal_CoreRemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/CoreRemoteMongoReadOperation */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoReadOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreRemoteMongoReadOperation", function() { return _internal_CoreRemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _RemoteInsertManyResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoteInsertManyResult */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/RemoteInsertManyResult.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteInsertManyResult", function() { return _RemoteInsertManyResult__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _OperationType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperationType */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/OperationType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationType", function() { return _OperationType__WEBPACK_IMPORTED_MODULE_5__["OperationType"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoClientImpl.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoClientImpl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoreRemoteMongoDatabaseImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoreRemoteMongoDatabaseImpl */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoDatabaseImpl.js");

var CoreRemoteMongoClientImpl = (function () {
    function CoreRemoteMongoClientImpl(service) {
        this.service = service;
    }
    CoreRemoteMongoClientImpl.prototype.db = function (name) {
        return new _CoreRemoteMongoDatabaseImpl__WEBPACK_IMPORTED_MODULE_0__["default"](name, this.service);
    };
    return CoreRemoteMongoClientImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreRemoteMongoClientImpl);
//# sourceMappingURL=CoreRemoteMongoClientImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoCollectionImpl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoCollectionImpl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _CoreRemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoreRemoteMongoReadOperation */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoReadOperation.js");
/* harmony import */ var _ResultDecoders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultDecoders */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/ResultDecoders.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var CoreRemoteMongoCollectionImpl = (function () {
    function CoreRemoteMongoCollectionImpl(name, databaseName, service, codec) {
        var _this = this;
        this.name = name;
        this.databaseName = databaseName;
        this.service = service;
        this.codec = codec;
        this.namespace = this.databaseName + "." + this.name;
        this.baseOperationArgs = (function () { return ({
            collection: _this.name,
            database: _this.databaseName
        }); })();
    }
    CoreRemoteMongoCollectionImpl.prototype.withCollectionType = function (codec) {
        return new CoreRemoteMongoCollectionImpl(this.name, this.databaseName, this.service, codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.find = function (filter, options) {
        if (filter === void 0) { filter = {}; }
        var args = __assign({}, this.baseOperationArgs);
        args.query = filter;
        if (options) {
            if (options.limit) {
                args.limit = options.limit;
            }
            if (options.projection) {
                args.project = options.projection;
            }
            if (options.sort) {
                args.sort = options.sort;
            }
        }
        return new _CoreRemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_1__["default"]("find", args, this.service, this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.aggregate = function (pipeline) {
        var args = __assign({}, this.baseOperationArgs);
        args.pipeline = pipeline;
        return new _CoreRemoteMongoReadOperation__WEBPACK_IMPORTED_MODULE_1__["default"]("aggregate", args, this.service, this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.count = function (query, options) {
        if (query === void 0) { query = {}; }
        var args = __assign({}, this.baseOperationArgs);
        args.query = query;
        if (options && options.limit) {
            args.limit = options.limit;
        }
        return this.service.callFunction("count", [args]);
    };
    CoreRemoteMongoCollectionImpl.prototype.insertOne = function (value) {
        var args = __assign({}, this.baseOperationArgs);
        args.document = this.generateObjectIdIfMissing(this.codec ? this.codec.encode(value) : value);
        return this.service.callFunction("insertOne", [args], _ResultDecoders__WEBPACK_IMPORTED_MODULE_2__["default"].remoteInsertOneResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.insertMany = function (docs) {
        var _this = this;
        var args = __assign({}, this.baseOperationArgs);
        args.documents = docs.map(function (doc) {
            return _this.generateObjectIdIfMissing(_this.codec ? _this.codec.encode(doc) : doc);
        });
        return this.service.callFunction("insertMany", [args], _ResultDecoders__WEBPACK_IMPORTED_MODULE_2__["default"].remoteInsertManyResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.deleteOne = function (query) {
        return this.executeDelete(query, false);
    };
    CoreRemoteMongoCollectionImpl.prototype.deleteMany = function (query) {
        return this.executeDelete(query, true);
    };
    CoreRemoteMongoCollectionImpl.prototype.updateOne = function (query, update, options) {
        return this.executeUpdate(query, update, options, false);
    };
    CoreRemoteMongoCollectionImpl.prototype.updateMany = function (query, update, options) {
        return this.executeUpdate(query, update, options, true);
    };
    CoreRemoteMongoCollectionImpl.prototype.watch = function (ids) {
        var args = __assign({}, this.baseOperationArgs);
        args.ids = ids;
        return this.service.streamFunction("watch", [args], new _ResultDecoders__WEBPACK_IMPORTED_MODULE_2__["default"].ChangeEventDecoder(this.codec));
    };
    CoreRemoteMongoCollectionImpl.prototype.executeDelete = function (query, multi) {
        var args = __assign({}, this.baseOperationArgs);
        args.query = query;
        return this.service.callFunction(multi ? "deleteMany" : "deleteOne", [args], _ResultDecoders__WEBPACK_IMPORTED_MODULE_2__["default"].remoteDeleteResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.executeUpdate = function (query, update, options, multi) {
        if (multi === void 0) { multi = false; }
        var args = __assign({}, this.baseOperationArgs);
        args.query = query;
        args.update = update;
        if (options && options.upsert) {
            args.upsert = options.upsert;
        }
        return this.service.callFunction(multi ? "updateMany" : "updateOne", [args], _ResultDecoders__WEBPACK_IMPORTED_MODULE_2__["default"].remoteUpdateResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.generateObjectIdIfMissing = function (doc) {
        if (!doc._id) {
            var newDoc = doc;
            newDoc._id = new bson__WEBPACK_IMPORTED_MODULE_0__["default"].ObjectID();
            return newDoc;
        }
        return doc;
    };
    return CoreRemoteMongoCollectionImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreRemoteMongoCollectionImpl);
//# sourceMappingURL=CoreRemoteMongoCollectionImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoDatabaseImpl.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoDatabaseImpl.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoreRemoteMongoCollectionImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoreRemoteMongoCollectionImpl */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoCollectionImpl.js");

var CoreRemoteMongoDatabaseImpl = (function () {
    function CoreRemoteMongoDatabaseImpl(name, service) {
        this.name = name;
        this.service = service;
    }
    CoreRemoteMongoDatabaseImpl.prototype.collection = function (name, codec) {
        return new _CoreRemoteMongoCollectionImpl__WEBPACK_IMPORTED_MODULE_0__["default"](name, this.name, this.service, codec);
    };
    return CoreRemoteMongoDatabaseImpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreRemoteMongoDatabaseImpl);
//# sourceMappingURL=CoreRemoteMongoDatabaseImpl.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoReadOperation.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoReadOperation.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CoreRemoteMongoReadOperation = (function () {
    function CoreRemoteMongoReadOperation(command, args, service, decoder) {
        this.command = command;
        this.args = args;
        this.service = service;
        if (decoder) {
            this.collectionDecoder = new (function () {
                function class_1() {
                }
                class_1.prototype.decode = function (from) {
                    if (from instanceof Array) {
                        return from.map(function (t) { return decoder.decode(t); });
                    }
                    return [decoder.decode(from)];
                };
                return class_1;
            }())();
        }
    }
    CoreRemoteMongoReadOperation.prototype.iterator = function () {
        return this.executeRead().then(function (res) { return res[Symbol.iterator](); });
    };
    CoreRemoteMongoReadOperation.prototype.first = function () {
        return this.executeRead().then(function (res) { return res[0]; });
    };
    CoreRemoteMongoReadOperation.prototype.toArray = function () {
        return this.executeRead();
    };
    CoreRemoteMongoReadOperation.prototype.asArray = function () {
        return this.toArray();
    };
    CoreRemoteMongoReadOperation.prototype.executeRead = function () {
        return this.service.callFunction(this.command, [this.args], this.collectionDecoder);
    };
    return CoreRemoteMongoReadOperation;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoreRemoteMongoReadOperation);
//# sourceMappingURL=CoreRemoteMongoReadOperation.js.map

/***/ }),

/***/ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/ResultDecoders.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/ResultDecoders.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb-stitch-core-sdk */ "./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js");
/* harmony import */ var _OperationType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OperationType */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/OperationType.js");
/* harmony import */ var _RemoteInsertManyResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RemoteInsertManyResult */ "./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/RemoteInsertManyResult.js");



var RemoteInsertManyResultFields;
(function (RemoteInsertManyResultFields) {
    RemoteInsertManyResultFields["InsertedIds"] = "insertedIds";
})(RemoteInsertManyResultFields || (RemoteInsertManyResultFields = {}));
var RemoteInsertOneResultFields;
(function (RemoteInsertOneResultFields) {
    RemoteInsertOneResultFields["InsertedId"] = "insertedId";
})(RemoteInsertOneResultFields || (RemoteInsertOneResultFields = {}));
var RemoteUpdateResultFields;
(function (RemoteUpdateResultFields) {
    RemoteUpdateResultFields["MatchedCount"] = "matchedCount";
    RemoteUpdateResultFields["ModifiedCount"] = "modifiedCount";
    RemoteUpdateResultFields["UpsertedId"] = "upsertedId";
})(RemoteUpdateResultFields || (RemoteUpdateResultFields = {}));
var RemoteDeleteResultFields;
(function (RemoteDeleteResultFields) {
    RemoteDeleteResultFields["DeletedCount"] = "deletedCount";
})(RemoteDeleteResultFields || (RemoteDeleteResultFields = {}));
var ChangeEventFields;
(function (ChangeEventFields) {
    ChangeEventFields["Id"] = "_id";
    ChangeEventFields["OperationType"] = "operationType";
    ChangeEventFields["FullDocument"] = "fullDocument";
    ChangeEventFields["DocumentKey"] = "documentKey";
    ChangeEventFields["Namespace"] = "ns";
    ChangeEventFields["NamespaceDb"] = "db";
    ChangeEventFields["NamespaceColl"] = "coll";
    ChangeEventFields["UpdateDescription"] = "updateDescription";
    ChangeEventFields["UpdateDescriptionUpdatedFields"] = "updatedFields";
    ChangeEventFields["UpdateDescriptionRemovedFields"] = "removedFields";
})(ChangeEventFields || (ChangeEventFields = {}));
var RemoteInsertManyResultDecoder = (function () {
    function RemoteInsertManyResultDecoder() {
    }
    RemoteInsertManyResultDecoder.prototype.decode = function (from) {
        return new _RemoteInsertManyResult__WEBPACK_IMPORTED_MODULE_2__["default"](from[RemoteInsertManyResultFields.InsertedIds]);
    };
    return RemoteInsertManyResultDecoder;
}());
var RemoteInsertOneResultDecoder = (function () {
    function RemoteInsertOneResultDecoder() {
    }
    RemoteInsertOneResultDecoder.prototype.decode = function (from) {
        return {
            insertedId: from[RemoteInsertOneResultFields.InsertedId]
        };
    };
    return RemoteInsertOneResultDecoder;
}());
var RemoteUpdateResultDecoder = (function () {
    function RemoteUpdateResultDecoder() {
    }
    RemoteUpdateResultDecoder.prototype.decode = function (from) {
        return {
            matchedCount: from[RemoteUpdateResultFields.MatchedCount],
            modifiedCount: from[RemoteUpdateResultFields.ModifiedCount],
            upsertedId: from[RemoteUpdateResultFields.UpsertedId]
        };
    };
    return RemoteUpdateResultDecoder;
}());
var RemoteDeleteResultDecoder = (function () {
    function RemoteDeleteResultDecoder() {
    }
    RemoteDeleteResultDecoder.prototype.decode = function (from) {
        return {
            deletedCount: from[RemoteDeleteResultFields.DeletedCount]
        };
    };
    return RemoteDeleteResultDecoder;
}());
var ChangeEventDecoder = (function () {
    function ChangeEventDecoder(decoder) {
        this.decoder = decoder;
    }
    ChangeEventDecoder.prototype.decode = function (from) {
        mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Assertions"].keyPresent(ChangeEventFields.Id, from);
        mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Assertions"].keyPresent(ChangeEventFields.OperationType, from);
        mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Assertions"].keyPresent(ChangeEventFields.Namespace, from);
        mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Assertions"].keyPresent(ChangeEventFields.DocumentKey, from);
        var nsDoc = from[ChangeEventFields.Namespace];
        var updateDescription;
        if (ChangeEventFields.UpdateDescription in from) {
            var updateDescDoc = from[ChangeEventFields.UpdateDescription];
            mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Assertions"].keyPresent(ChangeEventFields.UpdateDescriptionUpdatedFields, updateDescDoc);
            mongodb_stitch_core_sdk__WEBPACK_IMPORTED_MODULE_0__["Assertions"].keyPresent(ChangeEventFields.UpdateDescriptionRemovedFields, updateDescDoc);
            updateDescription = {
                removedFields: updateDescDoc[ChangeEventFields.UpdateDescriptionRemovedFields],
                updatedFields: updateDescDoc[ChangeEventFields.UpdateDescriptionUpdatedFields],
            };
        }
        else {
            updateDescription = undefined;
        }
        var fullDocument;
        if (ChangeEventFields.FullDocument in from) {
            fullDocument = from[ChangeEventFields.FullDocument];
            if (this.decoder) {
                fullDocument = this.decoder.decode(fullDocument);
            }
        }
        else {
            fullDocument = undefined;
        }
        return {
            documentKey: from[ChangeEventFields.DocumentKey],
            fullDocument: fullDocument,
            id: from[ChangeEventFields.Id],
            namespace: {
                collection: nsDoc[ChangeEventFields.NamespaceColl],
                database: nsDoc[ChangeEventFields.NamespaceDb]
            },
            operationType: Object(_OperationType__WEBPACK_IMPORTED_MODULE_1__["operationTypeFromRemote"])(from[ChangeEventFields.OperationType]),
            updateDescription: updateDescription
        };
    };
    return ChangeEventDecoder;
}());
var ResultDecoders = (function () {
    function ResultDecoders() {
    }
    ResultDecoders.remoteInsertManyResultDecoder = new RemoteInsertManyResultDecoder();
    ResultDecoders.remoteInsertOneResultDecoder = new RemoteInsertOneResultDecoder();
    ResultDecoders.remoteUpdateResultDecoder = new RemoteUpdateResultDecoder();
    ResultDecoders.remoteDeleteResultDecoder = new RemoteDeleteResultDecoder();
    ResultDecoders.ChangeEventDecoder = ChangeEventDecoder;
    return ResultDecoders;
}());
/* harmony default export */ __webpack_exports__["default"] = (ResultDecoders);
//# sourceMappingURL=ResultDecoders.js.map

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! segmented-control */ "./node_modules/segmented-control/dist/index.js");
/* harmony import */ var segmented_control__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(segmented_control__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb-stitch-browser-sdk */ "./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/mediaQueries */ "./styles/mediaQueries.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
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
        var faceTimeTotal = 800 * hours;

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (stuff) {
      var target = stuff.target;
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      if (_this.state.step === 0) {
        _this.setState({
          step: 1
        });
      }
    });

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
      step: 0
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
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Head"], {
        title: "Reaction Commerce Support Plans | Official Partner | Chat & Live Developer Help | out:grow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
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
          lineNumber: 255
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Wire"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        id: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Our Reaction Commerce support plans."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "Because every project is different, there is no one-size-fits-all in the world of support. Our Reaction Commerce experts are available to your team \u2014 whether you need a full-featured dedicated plan with a guaranteed response time, or a lightweight chat-only membership for non-urgent use."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "With our support plan configurator, we're leading the way by giving our customers full power. Estimate your base pricing, choose your payment terms and sign up right from our website. Getting peace of mind for your Reaction Commerce infrastructure has never been that easy."), this.state.step === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "chat-support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "Unlimited chat support (via Slack or your team's preferred tool)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          lineNumber: 279
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "response-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Guaranteed chat response time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          lineNumber: 292
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Yearly face-time hours: ", this.state.hours), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slider, {
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
          lineNumber: 308
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "advance-notice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Minimum advance notice to book a face-time session"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          lineNumber: 313
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "dedicated-experts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "Dedicated experts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(segmented_control__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
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
          lineNumber: 328
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PriceBreakdown, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Your total is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Price, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, this.state.showPriceMonthly ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, this.state.monthlyPrice, " per month") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, this.state.yearlyPrice, " per year"))), !this.state.showPriceMonthly && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SavingsIndicator, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, "You are saving ", this.state.yearlySavings, " by paying yearly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaymentSwitcher, {
        href: "#",
        onClick: this.handleSwitchPricing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "Pay ", this.state.showPriceMonthly ? "yearly and get 10% off" : "monthly for more flexibility")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "Need help? Call our 24/7 sales team at +1 (281) OUT-GROW.")))), this.state.step === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Title"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        noMarginLeft: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, "Nice to meet you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
        marginBottom: true,
        noMarginLeft: true,
        noMarginRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "Before going further, we need to know a little bit more about you and the company you work with. We'll reach out as soon as we can to activate your plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "first-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "first-name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "last-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "last-name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "E-Mail Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "email",
        id: "email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "tel",
        id: "phone",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "company",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Headquarters Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "address",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "city",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, "ZIP Code (if applicable)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "zip",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBySide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, "State/Province (if applicable)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "state",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
        type: "text",
        id: "country",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["white"],
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, "Sign Up Online"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
        color: _styles_colors__WEBPACK_IMPORTED_MODULE_6__["green"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
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
//# sourceMappingURL=reaction-commerce-support-plans.js.cf47ade2517738e46e93.hot-update.js.map