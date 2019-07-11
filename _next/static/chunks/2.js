(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

}]);
//# sourceMappingURL=2.js.map