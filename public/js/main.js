/*!For license information please see main.js.LICENSE.txt*/ (() => {
  var t = {
    4065: () => {
      window.history.scrollRestoration &&
        (window.history.scrollRestoration = "manual");
    },
    6955: () => {
      "serviceWorker" in navigator &&
        navigator.serviceWorker.register("js/service-worker.js");
    },
    1663: (t) => {
      "use strict";
      t.exports = (t, { include: e, exclude: i } = {}) => {
        const s = (t) => {
          const s = (e) => ("string" == typeof e ? t === e : e.test(t));
          return e ? e.some(s) : !i || !i.some(s);
        };
        for (const [e, i] of ((t) => {
          const e = new Set();
          do {
            for (const i of Reflect.ownKeys(t)) e.add([t, i]);
          } while ((t = Reflect.getPrototypeOf(t)) && t !== Object.prototype);
          return e;
        })(t.constructor.prototype)) {
          if ("constructor" === i || !s(i)) continue;
          const n = Reflect.getOwnPropertyDescriptor(e, i);
          n && "function" == typeof n.value && (t[i] = t[i].bind(t));
        }
        return t;
      };
    },
    1590: (t) => {
      "use strict";
      var e,
        i = "object" == typeof Reflect ? Reflect : null,
        s =
          i && "function" == typeof i.apply
            ? i.apply
            : function (t, e, i) {
                return Function.prototype.apply.call(t, e, i);
              };
      e =
        i && "function" == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var n =
        Number.isNaN ||
        function (t) {
          return t != t;
        };
      function r() {
        r.init.call(this);
      }
      (t.exports = r),
        (t.exports.once = function (t, e) {
          return new Promise(function (i, s) {
            function n() {
              void 0 !== r && t.removeListener("error", r),
                i([].slice.call(arguments));
            }
            var r;
            "error" !== e &&
              ((r = function (i) {
                t.removeListener(e, n), s(i);
              }),
              t.once("error", r)),
              t.once(e, n);
          });
        }),
        (r.EventEmitter = r),
        (r.prototype._events = void 0),
        (r.prototype._eventsCount = 0),
        (r.prototype._maxListeners = void 0);
      var o = 10;
      function a(t) {
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
      }
      function h(t) {
        return void 0 === t._maxListeners
          ? r.defaultMaxListeners
          : t._maxListeners;
      }
      function c(t, e, i, s) {
        var n, r, o, c;
        if (
          (a(i),
          void 0 === (r = t._events)
            ? ((r = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== r.newListener &&
                (t.emit("newListener", e, i.listener ? i.listener : i),
                (r = t._events)),
              (o = r[e])),
          void 0 === o)
        )
          (o = r[e] = i), ++t._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = r[e] = s ? [i, o] : [o, i])
            : s
            ? o.unshift(i)
            : o.push(i),
          (n = h(t)) > 0 && o.length > n && !o.warned)
        ) {
          o.warned = !0;
          var u = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (u.name = "MaxListenersExceededWarning"),
            (u.emitter = t),
            (u.type = e),
            (u.count = o.length),
            (c = u),
            console && console.warn && console.warn(c);
        }
        return t;
      }
      function u() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function l(t, e, i) {
        var s = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: i,
          },
          n = u.bind(s);
        return (n.listener = i), (s.wrapFn = n), n;
      }
      function d(t, e, i) {
        var s = t._events;
        if (void 0 === s) return [];
        var n = s[e];
        return void 0 === n
          ? []
          : "function" == typeof n
          ? i
            ? [n.listener || n]
            : [n]
          : i
          ? (function (t) {
              for (var e = new Array(t.length), i = 0; i < e.length; ++i)
                e[i] = t[i].listener || t[i];
              return e;
            })(n)
          : m(n, n.length);
      }
      function f(t) {
        var e = this._events;
        if (void 0 !== e) {
          var i = e[t];
          if ("function" == typeof i) return 1;
          if (void 0 !== i) return i.length;
        }
        return 0;
      }
      function m(t, e) {
        for (var i = new Array(e), s = 0; s < e; ++s) i[s] = t[s];
        return i;
      }
      Object.defineProperty(r, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (t) {
          if ("number" != typeof t || t < 0 || n(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          o = t;
        },
      }),
        (r.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (r.prototype.setMaxListeners = function (t) {
          if ("number" != typeof t || t < 0 || n(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (r.prototype.getMaxListeners = function () {
          return h(this);
        }),
        (r.prototype.emit = function (t) {
          for (var e = [], i = 1; i < arguments.length; i++)
            e.push(arguments[i]);
          var n = "error" === t,
            r = this._events;
          if (void 0 !== r) n = n && void 0 === r.error;
          else if (!n) return !1;
          if (n) {
            var o;
            if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
            var a = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : "")
            );
            throw ((a.context = o), a);
          }
          var h = r[t];
          if (void 0 === h) return !1;
          if ("function" == typeof h) s(h, this, e);
          else {
            var c = h.length,
              u = m(h, c);
            for (i = 0; i < c; ++i) s(u[i], this, e);
          }
          return !0;
        }),
        (r.prototype.addListener = function (t, e) {
          return c(this, t, e, !1);
        }),
        (r.prototype.on = r.prototype.addListener),
        (r.prototype.prependListener = function (t, e) {
          return c(this, t, e, !0);
        }),
        (r.prototype.once = function (t, e) {
          return a(e), this.on(t, l(this, t, e)), this;
        }),
        (r.prototype.prependOnceListener = function (t, e) {
          return a(e), this.prependListener(t, l(this, t, e)), this;
        }),
        (r.prototype.removeListener = function (t, e) {
          var i, s, n, r, o;
          if ((a(e), void 0 === (s = this._events))) return this;
          if (void 0 === (i = s[t])) return this;
          if (i === e || i.listener === e)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete s[t],
                s.removeListener &&
                  this.emit("removeListener", t, i.listener || e));
          else if ("function" != typeof i) {
            for (n = -1, r = i.length - 1; r >= 0; r--)
              if (i[r] === e || i[r].listener === e) {
                (o = i[r].listener), (n = r);
                break;
              }
            if (n < 0) return this;
            0 === n
              ? i.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(i, n),
              1 === i.length && (s[t] = i[0]),
              void 0 !== s.removeListener &&
                this.emit("removeListener", t, o || e);
          }
          return this;
        }),
        (r.prototype.off = r.prototype.removeListener),
        (r.prototype.removeAllListeners = function (t) {
          var e, i, s;
          if (void 0 === (i = this._events)) return this;
          if (void 0 === i.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== i[t] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete i[t]),
              this
            );
          if (0 === arguments.length) {
            var n,
              r = Object.keys(i);
            for (s = 0; s < r.length; ++s)
              "removeListener" !== (n = r[s]) && this.removeAllListeners(n);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (e = i[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (s = e.length - 1; s >= 0; s--) this.removeListener(t, e[s]);
          return this;
        }),
        (r.prototype.listeners = function (t) {
          return d(this, t, !0);
        }),
        (r.prototype.rawListeners = function (t) {
          return d(this, t, !1);
        }),
        (r.listenerCount = function (t, e) {
          return "function" == typeof t.listenerCount
            ? t.listenerCount(e)
            : f.call(t, e);
        }),
        (r.prototype.listenerCount = f),
        (r.prototype.eventNames = function () {
          return this._eventsCount > 0 ? e(this._events) : [];
        });
    },
    7778: (t) => {
      !(function () {
        function e(t, e) {
          document.addEventListener
            ? t.addEventListener("scroll", e, !1)
            : t.attachEvent("scroll", e);
        }
        function i(t) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(t)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function s(t, e) {
          t.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            e +
            ";";
        }
        function n(t) {
          var e = t.a.offsetWidth,
            i = e + 100;
          return (
            (t.f.style.width = i + "px"),
            (t.c.scrollLeft = i),
            (t.b.scrollLeft = t.b.scrollWidth + 100),
            t.g !== e && ((t.g = e), !0)
          );
        }
        function r(t, i) {
          function s() {
            var t = r;
            n(t) && t.a.parentNode && i(t.g);
          }
          var r = t;
          e(t.b, s), e(t.c, s), n(t);
        }
        function o(t, e) {
          var i = e || {};
          (this.family = t),
            (this.style = i.style || "normal"),
            (this.weight = i.weight || "normal"),
            (this.stretch = i.stretch || "normal");
        }
        var a = null,
          h = null,
          c = null,
          u = null;
        function l() {
          return null === u && (u = !!document.fonts), u;
        }
        function d() {
          if (null === c) {
            var t = document.createElement("div");
            try {
              t.style.font = "Arial 100px sans-serif";
            } catch (t) {}
            c = "" !== t.style.font;
          }
          return c;
        }
        function f(t, e) {
          return [t.style, t.weight, d() ? t.stretch : "", "100px", e].join(
            " "
          );
        }
        (o.prototype.load = function (t, e) {
          var n = this,
            o = t || "BESbswy",
            c = 0,
            u = e || 3e3,
            d = new Date().getTime();
          return new Promise(function (t, e) {
            if (
              l() &&
              !(function () {
                if (null === h)
                  if (l() && /Apple/.test(window.navigator.vendor)) {
                    var t =
                      /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        window.navigator.userAgent
                      );
                    h = !!t && 603 > parseInt(t[1], 10);
                  } else h = !1;
                return h;
              })()
            ) {
              var m = new Promise(function (t, e) {
                  !(function i() {
                    new Date().getTime() - d >= u
                      ? e(Error(u + "ms timeout exceeded"))
                      : document.fonts
                          .load(f(n, '"' + n.family + '"'), o)
                          .then(function (e) {
                            1 <= e.length ? t() : setTimeout(i, 25);
                          }, e);
                  })();
                }),
                p = new Promise(function (t, e) {
                  c = setTimeout(function () {
                    e(Error(u + "ms timeout exceeded"));
                  }, u);
                });
              Promise.race([p, m]).then(function () {
                clearTimeout(c), t(n);
              }, e);
            } else
              !(function (t) {
                document.body
                  ? t()
                  : document.addEventListener
                  ? document.addEventListener(
                      "DOMContentLoaded",
                      function e() {
                        document.removeEventListener("DOMContentLoaded", e),
                          t();
                      }
                    )
                  : document.attachEvent("onreadystatechange", function e() {
                      ("interactive" != document.readyState &&
                        "complete" != document.readyState) ||
                        (document.detachEvent("onreadystatechange", e), t());
                    });
              })(function () {
                function h() {
                  var e;
                  (e =
                    (-1 != g && -1 != x) ||
                    (-1 != g && -1 != v) ||
                    (-1 != x && -1 != v)) &&
                    ((e = g != x && g != v && x != v) ||
                      (null === a &&
                        ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          window.navigator.userAgent
                        )),
                        (a =
                          !!e &&
                          (536 > parseInt(e[1], 10) ||
                            (536 === parseInt(e[1], 10) &&
                              11 >= parseInt(e[2], 10))))),
                      (e =
                        a &&
                        ((g == y && x == y && v == y) ||
                          (g == w && x == w && v == w) ||
                          (g == _ && x == _ && v == _)))),
                    (e = !e)),
                    e &&
                      (b.parentNode && b.parentNode.removeChild(b),
                      clearTimeout(c),
                      t(n));
                }
                var l = new i(o),
                  m = new i(o),
                  p = new i(o),
                  g = -1,
                  x = -1,
                  v = -1,
                  y = -1,
                  w = -1,
                  _ = -1,
                  b = document.createElement("div");
                (b.dir = "ltr"),
                  s(l, f(n, "sans-serif")),
                  s(m, f(n, "serif")),
                  s(p, f(n, "monospace")),
                  b.appendChild(l.a),
                  b.appendChild(m.a),
                  b.appendChild(p.a),
                  document.body.appendChild(b),
                  (y = l.a.offsetWidth),
                  (w = m.a.offsetWidth),
                  (_ = p.a.offsetWidth),
                  (function t() {
                    if (new Date().getTime() - d >= u)
                      b.parentNode && b.parentNode.removeChild(b),
                        e(Error(u + "ms timeout exceeded"));
                    else {
                      var i = document.hidden;
                      (!0 !== i && void 0 !== i) ||
                        ((g = l.a.offsetWidth),
                        (x = m.a.offsetWidth),
                        (v = p.a.offsetWidth),
                        h()),
                        (c = setTimeout(t, 50));
                    }
                  })(),
                  r(l, function (t) {
                    (g = t), h();
                  }),
                  s(l, f(n, '"' + n.family + '",sans-serif')),
                  r(m, function (t) {
                    (x = t), h();
                  }),
                  s(m, f(n, '"' + n.family + '",serif')),
                  r(p, function (t) {
                    (v = t), h();
                  }),
                  s(p, f(n, '"' + n.family + '",monospace'));
              });
          });
        }),
          (t.exports = o);
      })();
    },
    9940: (t, e, i) => {
      var s = i(3203)(i(4362), "DataView");
      t.exports = s;
    },
    1979: (t, e, i) => {
      var s = i(9129),
        n = i(7644),
        r = i(3486),
        o = i(4786),
        a = i(6444);
      function h(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i; ) {
          var s = t[e];
          this.set(s[0], s[1]);
        }
      }
      (h.prototype.clear = s),
        (h.prototype.delete = n),
        (h.prototype.get = r),
        (h.prototype.has = o),
        (h.prototype.set = a),
        (t.exports = h);
    },
    2768: (t, e, i) => {
      var s = i(3708),
        n = i(6993),
        r = i(286),
        o = i(1678),
        a = i(9743);
      function h(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i; ) {
          var s = t[e];
          this.set(s[0], s[1]);
        }
      }
      (h.prototype.clear = s),
        (h.prototype.delete = n),
        (h.prototype.get = r),
        (h.prototype.has = o),
        (h.prototype.set = a),
        (t.exports = h);
    },
    4804: (t, e, i) => {
      var s = i(3203)(i(4362), "Map");
      t.exports = s;
    },
    8423: (t, e, i) => {
      var s = i(6977),
        n = i(7474),
        r = i(727),
        o = i(3653),
        a = i(6140);
      function h(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i; ) {
          var s = t[e];
          this.set(s[0], s[1]);
        }
      }
      (h.prototype.clear = s),
        (h.prototype.delete = n),
        (h.prototype.get = r),
        (h.prototype.has = o),
        (h.prototype.set = a),
        (t.exports = h);
    },
    7114: (t, e, i) => {
      var s = i(3203)(i(4362), "Promise");
      t.exports = s;
    },
    689: (t, e, i) => {
      var s = i(3203)(i(4362), "Set");
      t.exports = s;
    },
    9832: (t, e, i) => {
      var s = i(8423),
        n = i(9911),
        r = i(7447);
      function o(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.__data__ = new s(); ++e < i; ) this.add(t[e]);
      }
      (o.prototype.add = o.prototype.push = n),
        (o.prototype.has = r),
        (t.exports = o);
    },
    959: (t, e, i) => {
      var s = i(2768),
        n = i(7553),
        r = i(6038),
        o = i(2397),
        a = i(2421),
        h = i(2936);
      function c(t) {
        var e = (this.__data__ = new s(t));
        this.size = e.size;
      }
      (c.prototype.clear = n),
        (c.prototype.delete = r),
        (c.prototype.get = o),
        (c.prototype.has = a),
        (c.prototype.set = h),
        (t.exports = c);
    },
    2773: (t, e, i) => {
      var s = i(4362).Symbol;
      t.exports = s;
    },
    2496: (t, e, i) => {
      var s = i(4362).Uint8Array;
      t.exports = s;
    },
    5284: (t, e, i) => {
      var s = i(3203)(i(4362), "WeakMap");
      t.exports = s;
    },
    4111: (t) => {
      t.exports = function (t, e) {
        for (
          var i = -1, s = null == t ? 0 : t.length;
          ++i < s && !1 !== e(t[i], i, t);

        );
        return t;
      };
    },
    6523: (t) => {
      t.exports = function (t, e) {
        for (
          var i = -1, s = null == t ? 0 : t.length, n = 0, r = [];
          ++i < s;

        ) {
          var o = t[i];
          e(o, i, t) && (r[n++] = o);
        }
        return r;
      };
    },
    6193: (t, e, i) => {
      var s = i(2123);
      t.exports = function (t, e) {
        return !(null == t || !t.length) && s(t, e, 0) > -1;
      };
    },
    8048: (t) => {
      t.exports = function (t, e, i) {
        for (var s = -1, n = null == t ? 0 : t.length; ++s < n; )
          if (i(e, t[s])) return !0;
        return !1;
      };
    },
    8083: (t, e, i) => {
      var s = i(5094),
        n = i(9246),
        r = i(3670),
        o = i(2343),
        a = i(4782),
        h = i(1589),
        c = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var i = r(t),
          u = !i && n(t),
          l = !i && !u && o(t),
          d = !i && !u && !l && h(t),
          f = i || u || l || d,
          m = f ? s(t.length, String) : [],
          p = m.length;
        for (var g in t)
          (!e && !c.call(t, g)) ||
            (f &&
              ("length" == g ||
                (l && ("offset" == g || "parent" == g)) ||
                (d &&
                  ("buffer" == g ||
                    "byteLength" == g ||
                    "byteOffset" == g)) ||
                a(g, p))) ||
            m.push(g);
        return m;
      };
    },
    9258: (t) => {
      t.exports = function (t, e) {
        for (
          var i = -1, s = null == t ? 0 : t.length, n = Array(s);
          ++i < s;

        )
          n[i] = e(t[i], i, t);
        return n;
      };
    },
    8421: (t) => {
      t.exports = function (t, e) {
        for (var i = -1, s = e.length, n = t.length; ++i < s; )
          t[n + i] = e[i];
        return t;
      };
    },
    4481: (t) => {
      t.exports = function (t, e) {
        for (var i = -1, s = null == t ? 0 : t.length; ++i < s; )
          if (e(t[i], i, t)) return !0;
        return !1;
      };
    },
    6213: (t, e, i) => {
      var s = i(7950);
      t.exports = function (t, e) {
        for (var i = t.length; i--; ) if (s(t[i][0], e)) return i;
        return -1;
      };
    },
    5806: (t, e, i) => {
      var s = i(5645),
        n = i(3978)(s);
      t.exports = n;
    },
    9319: (t, e, i) => {
      var s = i(5806);
      t.exports = function (t, e) {
        var i = [];
        return (
          s(t, function (t, s, n) {
            e(t, s, n) && i.push(t);
          }),
          i
        );
      };
    },
    5135: (t) => {
      t.exports = function (t, e, i, s) {
        for (var n = t.length, r = i + (s ? 1 : -1); s ? r-- : ++r < n; )
          if (e(t[r], r, t)) return r;
        return -1;
      };
    },
    7079: (t, e, i) => {
      var s = i(7924)();
      t.exports = s;
    },
    5645: (t, e, i) => {
      var s = i(7079),
        n = i(3225);
      t.exports = function (t, e) {
        return t && s(t, e, n);
      };
    },
    5974: (t, e, i) => {
      var s = i(6883),
        n = i(7102);
      t.exports = function (t, e) {
        for (var i = 0, r = (e = s(e, t)).length; null != t && i < r; )
          t = t[n(e[i++])];
        return i && i == r ? t : void 0;
      };
    },
    891: (t, e, i) => {
      var s = i(8421),
        n = i(3670);
      t.exports = function (t, e, i) {
        var r = e(t);
        return n(t) ? r : s(r, i(t));
      };
    },
    1185: (t, e, i) => {
      var s = i(2773),
        n = i(3888),
        r = i(2299),
        o = s ? s.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(t)
          ? n(t)
          : r(t);
      };
    },
    5529: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    2123: (t, e, i) => {
      var s = i(5135),
        n = i(9574),
        r = i(4266);
      t.exports = function (t, e, i) {
        return e == e ? r(t, e, i) : s(t, n, i);
      };
    },
    1075: (t, e, i) => {
      var s = i(1185),
        n = i(4939);
      t.exports = function (t) {
        return n(t) && "[object Arguments]" == s(t);
      };
    },
    9856: (t, e, i) => {
      var s = i(1829),
        n = i(4939);
      t.exports = function t(e, i, r, o, a) {
        return (
          e === i ||
          (null == e || null == i || (!n(e) && !n(i))
            ? e != e && i != i
            : s(e, i, r, o, t, a))
        );
      };
    },
    1829: (t, e, i) => {
      var s = i(959),
        n = i(3426),
        r = i(1402),
        o = i(4572),
        a = i(2417),
        h = i(3670),
        c = i(2343),
        u = i(1589),
        l = "[object Arguments]",
        d = "[object Array]",
        f = "[object Object]",
        m = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, i, p, g, x) {
        var v = h(t),
          y = h(e),
          w = v ? d : a(t),
          _ = y ? d : a(e),
          b = (w = w == l ? f : w) == f,
          M = (_ = _ == l ? f : _) == f,
          A = w == _;
        if (A && c(t)) {
          if (!c(e)) return !1;
          (v = !0), (b = !1);
        }
        if (A && !b)
          return (
            x || (x = new s()),
            v || u(t) ? n(t, e, i, p, g, x) : r(t, e, w, i, p, g, x)
          );
        if (!(1 & i)) {
          var T = b && m.call(t, "__wrapped__"),
            E = M && m.call(e, "__wrapped__");
          if (T || E) {
            var O = T ? t.value() : t,
              C = E ? e.value() : e;
            return x || (x = new s()), g(O, C, i, p, x);
          }
        }
        return !!A && (x || (x = new s()), o(t, e, i, p, g, x));
      };
    },
    4656: (t, e, i) => {
      var s = i(959),
        n = i(9856);
      t.exports = function (t, e, i, r) {
        var o = i.length,
          a = o,
          h = !r;
        if (null == t) return !a;
        for (t = Object(t); o--; ) {
          var c = i[o];
          if (h && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
        }
        for (; ++o < a; ) {
          var u = (c = i[o])[0],
            l = t[u],
            d = c[1];
          if (h && c[2]) {
            if (void 0 === l && !(u in t)) return !1;
          } else {
            var f = new s();
            if (r) var m = r(l, d, u, t, e, f);
            if (!(void 0 === m ? n(d, l, 3, r, f) : m)) return !1;
          }
        }
        return !0;
      };
    },
    9574: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    4106: (t, e, i) => {
      var s = i(3626),
        n = i(9249),
        r = i(71),
        o = i(1214),
        a = /^\[object .+?Constructor\]$/,
        h = Function.prototype,
        c = Object.prototype,
        u = h.toString,
        l = c.hasOwnProperty,
        d = RegExp(
          "^" +
            u
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!r(t) || n(t)) && (s(t) ? d : a).test(o(t));
      };
    },
    3638: (t, e, i) => {
      var s = i(1185),
        n = i(7100),
        r = i(4939),
        o = {};
      (o["[object Float32Array]"] =
        o["[object Float64Array]"] =
        o["[object Int8Array]"] =
        o["[object Int16Array]"] =
        o["[object Int32Array]"] =
        o["[object Uint8Array]"] =
        o["[object Uint8ClampedArray]"] =
        o["[object Uint16Array]"] =
        o["[object Uint32Array]"] =
          !0),
        (o["[object Arguments]"] =
          o["[object Array]"] =
          o["[object ArrayBuffer]"] =
          o["[object Boolean]"] =
          o["[object DataView]"] =
          o["[object Date]"] =
          o["[object Error]"] =
          o["[object Function]"] =
          o["[object Map]"] =
          o["[object Number]"] =
          o["[object Object]"] =
          o["[object RegExp]"] =
          o["[object Set]"] =
          o["[object String]"] =
          o["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return r(t) && n(t.length) && !!o[s(t)];
        });
    },
    9047: (t, e, i) => {
      var s = i(8334),
        n = i(5941),
        r = i(1559),
        o = i(3670),
        a = i(8886);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? r
          : "object" == typeof t
          ? o(t)
            ? n(t[0], t[1])
            : s(t)
          : a(t);
      };
    },
    7521: (t, e, i) => {
      var s = i(2803),
        n = i(3865),
        r = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!s(t)) return n(t);
        var e = [];
        for (var i in Object(t))
          r.call(t, i) && "constructor" != i && e.push(i);
        return e;
      };
    },
    5901: (t, e, i) => {
      var s = i(5806),
        n = i(6175);
      t.exports = function (t, e) {
        var i = -1,
          r = n(t) ? Array(t.length) : [];
        return (
          s(t, function (t, s, n) {
            r[++i] = e(t, s, n);
          }),
          r
        );
      };
    },
    8334: (t, e, i) => {
      var s = i(4656),
        n = i(2811),
        r = i(4248);
      t.exports = function (t) {
        var e = n(t);
        return 1 == e.length && e[0][2]
          ? r(e[0][0], e[0][1])
          : function (i) {
              return i === t || s(i, t, e);
            };
      };
    },
    5941: (t, e, i) => {
      var s = i(9856),
        n = i(643),
        r = i(9059),
        o = i(837),
        a = i(3631),
        h = i(4248),
        c = i(7102);
      t.exports = function (t, e) {
        return o(t) && a(e)
          ? h(c(t), e)
          : function (i) {
              var o = n(i, t);
              return void 0 === o && o === e ? r(i, t) : s(e, o, 3);
            };
      };
    },
    3184: (t) => {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    886: (t, e, i) => {
      var s = i(5974);
      t.exports = function (t) {
        return function (e) {
          return s(e, t);
        };
      };
    },
    5094: (t) => {
      t.exports = function (t, e) {
        for (var i = -1, s = Array(t); ++i < t; ) s[i] = e(i);
        return s;
      };
    },
    8257: (t, e, i) => {
      var s = i(2773),
        n = i(9258),
        r = i(3670),
        o = i(4655),
        a = s ? s.prototype : void 0,
        h = a ? a.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (r(e)) return n(e, t) + "";
        if (o(e)) return h ? h.call(e) : "";
        var i = e + "";
        return "0" == i && 1 / e == -1 / 0 ? "-0" : i;
      };
    },
    9081: (t) => {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    6174: (t, e, i) => {
      var s = i(9832),
        n = i(6193),
        r = i(8048),
        o = i(3159),
        a = i(9637),
        h = i(6983);
      t.exports = function (t, e, i) {
        var c = -1,
          u = n,
          l = t.length,
          d = !0,
          f = [],
          m = f;
        if (i) (d = !1), (u = r);
        else if (l >= 200) {
          var p = e ? null : a(t);
          if (p) return h(p);
          (d = !1), (u = o), (m = new s());
        } else m = e ? [] : f;
        t: for (; ++c < l; ) {
          var g = t[c],
            x = e ? e(g) : g;
          if (((g = i || 0 !== g ? g : 0), d && x == x)) {
            for (var v = m.length; v--; ) if (m[v] === x) continue t;
            e && m.push(x), f.push(g);
          } else u(m, x, i) || (m !== f && m.push(x), f.push(g));
        }
        return f;
      };
    },
    3159: (t) => {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    3183: (t, e, i) => {
      var s = i(1559);
      t.exports = function (t) {
        return "function" == typeof t ? t : s;
      };
    },
    6883: (t, e, i) => {
      var s = i(3670),
        n = i(837),
        r = i(376),
        o = i(2049);
      t.exports = function (t, e) {
        return s(t) ? t : n(t, e) ? [t] : r(o(t));
      };
    },
    1741: (t, e, i) => {
      var s = i(4362)["__core-js_shared__"];
      t.exports = s;
    },
    3978: (t, e, i) => {
      var s = i(6175);
      t.exports = function (t, e) {
        return function (i, n) {
          if (null == i) return i;
          if (!s(i)) return t(i, n);
          for (
            var r = i.length, o = e ? r : -1, a = Object(i);
            (e ? o-- : ++o < r) && !1 !== n(a[o], o, a);

          );
          return i;
        };
      };
    },
    7924: (t) => {
      t.exports = function (t) {
        return function (e, i, s) {
          for (var n = -1, r = Object(e), o = s(e), a = o.length; a--; ) {
            var h = o[t ? a : ++n];
            if (!1 === i(r[h], h, r)) break;
          }
          return e;
        };
      };
    },
    9637: (t, e, i) => {
      var s = i(689),
        n = i(9157),
        r = i(6983),
        o =
          s && 1 / r(new s([, -0]))[1] == 1 / 0
            ? function (t) {
                return new s(t);
              }
            : n;
      t.exports = o;
    },
    3426: (t, e, i) => {
      var s = i(9832),
        n = i(4481),
        r = i(3159);
      t.exports = function (t, e, i, o, a, h) {
        var c = 1 & i,
          u = t.length,
          l = e.length;
        if (u != l && !(c && l > u)) return !1;
        var d = h.get(t),
          f = h.get(e);
        if (d && f) return d == e && f == t;
        var m = -1,
          p = !0,
          g = 2 & i ? new s() : void 0;
        for (h.set(t, e), h.set(e, t); ++m < u; ) {
          var x = t[m],
            v = e[m];
          if (o) var y = c ? o(v, x, m, e, t, h) : o(x, v, m, t, e, h);
          if (void 0 !== y) {
            if (y) continue;
            p = !1;
            break;
          }
          if (g) {
            if (
              !n(e, function (t, e) {
                if (!r(g, e) && (x === t || a(x, t, i, o, h)))
                  return g.push(e);
              })
            ) {
              p = !1;
              break;
            }
          } else if (x !== v && !a(x, v, i, o, h)) {
            p = !1;
            break;
          }
        }
        return h.delete(t), h.delete(e), p;
      };
    },
    1402: (t, e, i) => {
      var s = i(2773),
        n = i(2496),
        r = i(7950),
        o = i(3426),
        a = i(8961),
        h = i(6983),
        c = s ? s.prototype : void 0,
        u = c ? c.valueOf : void 0;
      t.exports = function (t, e, i, s, c, l, d) {
        switch (i) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            return !(t.byteLength != e.byteLength || !l(new n(t), new n(e)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return r(+t, +e);
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var f = a;
          case "[object Set]":
            var m = 1 & s;
            if ((f || (f = h), t.size != e.size && !m)) return !1;
            var p = d.get(t);
            if (p) return p == e;
            (s |= 2), d.set(t, e);
            var g = o(f(t), f(e), s, c, l, d);
            return d.delete(t), g;
          case "[object Symbol]":
            if (u) return u.call(t) == u.call(e);
        }
        return !1;
      };
    },
    4572: (t, e, i) => {
      var s = i(5788),
        n = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, i, r, o, a) {
        var h = 1 & i,
          c = s(t),
          u = c.length;
        if (u != s(e).length && !h) return !1;
        for (var l = u; l--; ) {
          var d = c[l];
          if (!(h ? d in e : n.call(e, d))) return !1;
        }
        var f = a.get(t),
          m = a.get(e);
        if (f && m) return f == e && m == t;
        var p = !0;
        a.set(t, e), a.set(e, t);
        for (var g = h; ++l < u; ) {
          var x = t[(d = c[l])],
            v = e[d];
          if (r) var y = h ? r(v, x, d, e, t, a) : r(x, v, d, t, e, a);
          if (!(void 0 === y ? x === v || o(x, v, i, r, a) : y)) {
            p = !1;
            break;
          }
          g || (g = "constructor" == d);
        }
        if (p && !g) {
          var w = t.constructor,
            _ = e.constructor;
          w == _ ||
            !("constructor" in t) ||
            !("constructor" in e) ||
            ("function" == typeof w &&
              w instanceof w &&
              "function" == typeof _ &&
              _ instanceof _) ||
            (p = !1);
        }
        return a.delete(t), a.delete(e), p;
      };
    },
    8556: (t, e, i) => {
      var s = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
      t.exports = s;
    },
    5788: (t, e, i) => {
      var s = i(891),
        n = i(6918),
        r = i(3225);
      t.exports = function (t) {
        return s(t, r, n);
      };
    },
    404: (t, e, i) => {
      var s = i(4480);
      t.exports = function (t, e) {
        var i = t.__data__;
        return s(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
      };
    },
    2811: (t, e, i) => {
      var s = i(3631),
        n = i(3225);
      t.exports = function (t) {
        for (var e = n(t), i = e.length; i--; ) {
          var r = e[i],
            o = t[r];
          e[i] = [r, o, s(o)];
        }
        return e;
      };
    },
    3203: (t, e, i) => {
      var s = i(4106),
        n = i(7338);
      t.exports = function (t, e) {
        var i = n(t, e);
        return s(i) ? i : void 0;
      };
    },
    3888: (t, e, i) => {
      var s = i(2773),
        n = Object.prototype,
        r = n.hasOwnProperty,
        o = n.toString,
        a = s ? s.toStringTag : void 0;
      t.exports = function (t) {
        var e = r.call(t, a),
          i = t[a];
        try {
          t[a] = void 0;
          var s = !0;
        } catch (t) {}
        var n = o.call(t);
        return s && (e ? (t[a] = i) : delete t[a]), n;
      };
    },
    6918: (t, e, i) => {
      var s = i(6523),
        n = i(4043),
        r = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        a = o
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  s(o(t), function (e) {
                    return r.call(t, e);
                  }));
            }
          : n;
      t.exports = a;
    },
    2417: (t, e, i) => {
      var s = i(9940),
        n = i(4804),
        r = i(7114),
        o = i(689),
        a = i(5284),
        h = i(1185),
        c = i(1214),
        u = "[object Map]",
        l = "[object Promise]",
        d = "[object Set]",
        f = "[object WeakMap]",
        m = "[object DataView]",
        p = c(s),
        g = c(n),
        x = c(r),
        v = c(o),
        y = c(a),
        w = h;
      ((s && w(new s(new ArrayBuffer(1))) != m) ||
        (n && w(new n()) != u) ||
        (r && w(r.resolve()) != l) ||
        (o && w(new o()) != d) ||
        (a && w(new a()) != f)) &&
        (w = function (t) {
          var e = h(t),
            i = "[object Object]" == e ? t.constructor : void 0,
            s = i ? c(i) : "";
          if (s)
            switch (s) {
              case p:
                return m;
              case g:
                return u;
              case x:
                return l;
              case v:
                return d;
              case y:
                return f;
            }
          return e;
        }),
        (t.exports = w);
    },
    7338: (t) => {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    4727: (t, e, i) => {
      var s = i(6883),
        n = i(9246),
        r = i(3670),
        o = i(4782),
        a = i(7100),
        h = i(7102);
      t.exports = function (t, e, i) {
        for (var c = -1, u = (e = s(e, t)).length, l = !1; ++c < u; ) {
          var d = h(e[c]);
          if (!(l = null != t && i(t, d))) break;
          t = t[d];
        }
        return l || ++c != u
          ? l
          : !!(u = null == t ? 0 : t.length) &&
              a(u) &&
              o(d, u) &&
              (r(t) || n(t));
      };
    },
    9129: (t, e, i) => {
      var s = i(6326);
      t.exports = function () {
        (this.__data__ = s ? s(null) : {}), (this.size = 0);
      };
    },
    7644: (t) => {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    3486: (t, e, i) => {
      var s = i(6326),
        n = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (s) {
          var i = e[t];
          return "__lodash_hash_undefined__" === i ? void 0 : i;
        }
        return n.call(e, t) ? e[t] : void 0;
      };
    },
    4786: (t, e, i) => {
      var s = i(6326),
        n = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return s ? void 0 !== e[t] : n.call(e, t);
      };
    },
    6444: (t, e, i) => {
      var s = i(6326);
      t.exports = function (t, e) {
        var i = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (i[t] = s && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    4782: (t) => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, i) {
        var s = typeof t;
        return (
          !!(i = null == i ? 9007199254740991 : i) &&
          ("number" == s || ("symbol" != s && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < i
        );
      };
    },
    837: (t, e, i) => {
      var s = i(3670),
        n = i(4655),
        r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      t.exports = function (t, e) {
        if (s(t)) return !1;
        var i = typeof t;
        return (
          !(
            "number" != i &&
            "symbol" != i &&
            "boolean" != i &&
            null != t &&
            !n(t)
          ) ||
          o.test(t) ||
          !r.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    4480: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e ||
          "number" == e ||
          "symbol" == e ||
          "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    9249: (t, e, i) => {
      var s,
        n = i(1741),
        r = (s = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + s
          : "";
      t.exports = function (t) {
        return !!r && r in t;
      };
    },
    2803: (t) => {
      var e = Object.prototype;
      t.exports = function (t) {
        var i = t && t.constructor;
        return t === (("function" == typeof i && i.prototype) || e);
      };
    },
    3631: (t, e, i) => {
      var s = i(71);
      t.exports = function (t) {
        return t == t && !s(t);
      };
    },
    3708: (t) => {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    6993: (t, e, i) => {
      var s = i(6213),
        n = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          i = s(e, t);
        return !(
          i < 0 ||
          (i == e.length - 1 ? e.pop() : n.call(e, i, 1), --this.size, 0)
        );
      };
    },
    286: (t, e, i) => {
      var s = i(6213);
      t.exports = function (t) {
        var e = this.__data__,
          i = s(e, t);
        return i < 0 ? void 0 : e[i][1];
      };
    },
    1678: (t, e, i) => {
      var s = i(6213);
      t.exports = function (t) {
        return s(this.__data__, t) > -1;
      };
    },
    9743: (t, e, i) => {
      var s = i(6213);
      t.exports = function (t, e) {
        var i = this.__data__,
          n = s(i, t);
        return n < 0 ? (++this.size, i.push([t, e])) : (i[n][1] = e), this;
      };
    },
    6977: (t, e, i) => {
      var s = i(1979),
        n = i(2768),
        r = i(4804);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new s(),
            map: new (r || n)(),
            string: new s(),
          });
      };
    },
    7474: (t, e, i) => {
      var s = i(404);
      t.exports = function (t) {
        var e = s(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    727: (t, e, i) => {
      var s = i(404);
      t.exports = function (t) {
        return s(this, t).get(t);
      };
    },
    3653: (t, e, i) => {
      var s = i(404);
      t.exports = function (t) {
        return s(this, t).has(t);
      };
    },
    6140: (t, e, i) => {
      var s = i(404);
      t.exports = function (t, e) {
        var i = s(this, t),
          n = i.size;
        return i.set(t, e), (this.size += i.size == n ? 0 : 1), this;
      };
    },
    8961: (t) => {
      t.exports = function (t) {
        var e = -1,
          i = Array(t.size);
        return (
          t.forEach(function (t, s) {
            i[++e] = [s, t];
          }),
          i
        );
      };
    },
    4248: (t) => {
      t.exports = function (t, e) {
        return function (i) {
          return null != i && i[t] === e && (void 0 !== e || t in Object(i));
        };
      };
    },
    5933: (t, e, i) => {
      var s = i(104);
      t.exports = function (t) {
        var e = s(t, function (t) {
            return 500 === i.size && i.clear(), t;
          }),
          i = e.cache;
        return e;
      };
    },
    6326: (t, e, i) => {
      var s = i(3203)(Object, "create");
      t.exports = s;
    },
    3865: (t, e, i) => {
      var s = i(5290)(Object.keys, Object);
      t.exports = s;
    },
    1985: (t, e, i) => {
      t = i.nmd(t);
      var s = i(8556),
        n = e && !e.nodeType && e,
        r = n && t && !t.nodeType && t,
        o = r && r.exports === n && s.process,
        a = (function () {
          try {
            return (
              (r && r.require && r.require("util").types) ||
              (o && o.binding && o.binding("util"))
            );
          } catch (t) {}
        })();
      t.exports = a;
    },
    2299: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    5290: (t) => {
      t.exports = function (t, e) {
        return function (i) {
          return t(e(i));
        };
      };
    },
    4362: (t, e, i) => {
      var s = i(8556),
        n = "object" == typeof self && self && self.Object === Object && self,
        r = s || n || Function("return this")();
      t.exports = r;
    },
    9911: (t) => {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    7447: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    6983: (t) => {
      t.exports = function (t) {
        var e = -1,
          i = Array(t.size);
        return (
          t.forEach(function (t) {
            i[++e] = t;
          }),
          i
        );
      };
    },
    7553: (t, e, i) => {
      var s = i(2768);
      t.exports = function () {
        (this.__data__ = new s()), (this.size = 0);
      };
    },
    6038: (t) => {
      t.exports = function (t) {
        var e = this.__data__,
          i = e.delete(t);
        return (this.size = e.size), i;
      };
    },
    2397: (t) => {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    2421: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    2936: (t, e, i) => {
      var s = i(2768),
        n = i(4804),
        r = i(8423);
      t.exports = function (t, e) {
        var i = this.__data__;
        if (i instanceof s) {
          var o = i.__data__;
          if (!n || o.length < 199)
            return o.push([t, e]), (this.size = ++i.size), this;
          i = this.__data__ = new r(o);
        }
        return i.set(t, e), (this.size = i.size), this;
      };
    },
    4266: (t) => {
      t.exports = function (t, e, i) {
        for (var s = i - 1, n = t.length; ++s < n; ) if (t[s] === e) return s;
        return -1;
      };
    },
    376: (t, e, i) => {
      var s = i(5933),
        n =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        r = /\\(\\)?/g,
        o = s(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(n, function (t, i, s, n) {
              e.push(s ? n.replace(r, "$1") : i || t);
            }),
            e
          );
        });
      t.exports = o;
    },
    7102: (t, e, i) => {
      var s = i(4655);
      t.exports = function (t) {
        if ("string" == typeof t || s(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
      };
    },
    1214: (t) => {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    569: (t, e, i) => {
      var s = i(71),
        n = i(5989),
        r = i(6705),
        o = Math.max,
        a = Math.min;
      t.exports = function (t, e, i) {
        var h,
          c,
          u,
          l,
          d,
          f,
          m = 0,
          p = !1,
          g = !1,
          x = !0;
        if ("function" != typeof t)
          throw new TypeError("Expected a function");
        function v(e) {
          var i = h,
            s = c;
          return (h = c = void 0), (m = e), (l = t.apply(s, i));
        }
        function y(t) {
          return (m = t), (d = setTimeout(_, e)), p ? v(t) : l;
        }
        function w(t) {
          var i = t - f;
          return void 0 === f || i >= e || i < 0 || (g && t - m >= u);
        }
        function _() {
          var t = n();
          if (w(t)) return b(t);
          d = setTimeout(
            _,
            (function (t) {
              var i = e - (t - f);
              return g ? a(i, u - (t - m)) : i;
            })(t)
          );
        }
        function b(t) {
          return (d = void 0), x && h ? v(t) : ((h = c = void 0), l);
        }
        function M() {
          var t = n(),
            i = w(t);
          if (((h = arguments), (c = this), (f = t), i)) {
            if (void 0 === d) return y(f);
            if (g) return clearTimeout(d), (d = setTimeout(_, e)), v(f);
          }
          return void 0 === d && (d = setTimeout(_, e)), l;
        }
        return (
          (e = r(e) || 0),
          s(i) &&
            ((p = !!i.leading),
            (u = (g = "maxWait" in i) ? o(r(i.maxWait) || 0, e) : u),
            (x = "trailing" in i ? !!i.trailing : x)),
          (M.cancel = function () {
            void 0 !== d && clearTimeout(d),
              (m = 0),
              (h = f = c = d = void 0);
          }),
          (M.flush = function () {
            return void 0 === d ? l : b(n());
          }),
          M
        );
      };
    },
    6270: (t, e, i) => {
      t.exports = i(9982);
    },
    7950: (t) => {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    9045: (t, e, i) => {
      var s = i(6523),
        n = i(9319),
        r = i(9047),
        o = i(3670);
      t.exports = function (t, e) {
        return (o(t) ? s : n)(t, r(e, 3));
      };
    },
    9982: (t, e, i) => {
      var s = i(4111),
        n = i(5806),
        r = i(3183),
        o = i(3670);
      t.exports = function (t, e) {
        return (o(t) ? s : n)(t, r(e));
      };
    },
    643: (t, e, i) => {
      var s = i(5974);
      t.exports = function (t, e, i) {
        var n = null == t ? void 0 : s(t, e);
        return void 0 === n ? i : n;
      };
    },
    9059: (t, e, i) => {
      var s = i(5529),
        n = i(4727);
      t.exports = function (t, e) {
        return null != t && n(t, e, s);
      };
    },
    1559: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    9246: (t, e, i) => {
      var s = i(1075),
        n = i(4939),
        r = Object.prototype,
        o = r.hasOwnProperty,
        a = r.propertyIsEnumerable,
        h = s(
          (function () {
            return arguments;
          })()
        )
          ? s
          : function (t) {
              return n(t) && o.call(t, "callee") && !a.call(t, "callee");
            };
      t.exports = h;
    },
    3670: (t) => {
      var e = Array.isArray;
      t.exports = e;
    },
    6175: (t, e, i) => {
      var s = i(3626),
        n = i(7100);
      t.exports = function (t) {
        return null != t && n(t.length) && !s(t);
      };
    },
    2343: (t, e, i) => {
      t = i.nmd(t);
      var s = i(4362),
        n = i(3444),
        r = e && !e.nodeType && e,
        o = r && t && !t.nodeType && t,
        a = o && o.exports === r ? s.Buffer : void 0,
        h = (a ? a.isBuffer : void 0) || n;
      t.exports = h;
    },
    3626: (t, e, i) => {
      var s = i(1185),
        n = i(71);
      t.exports = function (t) {
        if (!n(t)) return !1;
        var e = s(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    7100: (t) => {
      t.exports = function (t) {
        return (
          "number" == typeof t &&
          t > -1 &&
          t % 1 == 0 &&
          t <= 9007199254740991
        );
      };
    },
    71: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    4939: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    4655: (t, e, i) => {
      var s = i(1185),
        n = i(4939);
      t.exports = function (t) {
        return "symbol" == typeof t || (n(t) && "[object Symbol]" == s(t));
      };
    },
    1589: (t, e, i) => {
      var s = i(3638),
        n = i(9081),
        r = i(1985),
        o = r && r.isTypedArray,
        a = o ? n(o) : s;
      t.exports = a;
    },
    3225: (t, e, i) => {
      var s = i(8083),
        n = i(7521),
        r = i(6175);
      t.exports = function (t) {
        return r(t) ? s(t) : n(t);
      };
    },
    7976: (t, e, i) => {
      var s = i(9258),
        n = i(9047),
        r = i(5901),
        o = i(3670);
      t.exports = function (t, e) {
        return (o(t) ? s : r)(t, n(e, 3));
      };
    },
    104: (t, e, i) => {
      var s = i(8423);
      function n(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var i = function () {
          var s = arguments,
            n = e ? e.apply(this, s) : s[0],
            r = i.cache;
          if (r.has(n)) return r.get(n);
          var o = t.apply(this, s);
          return (i.cache = r.set(n, o) || r), o;
        };
        return (i.cache = new (n.Cache || s)()), i;
      }
      (n.Cache = s), (t.exports = n);
    },
    9157: (t) => {
      t.exports = function () {};
    },
    5989: (t, e, i) => {
      var s = i(4362);
      t.exports = function () {
        return s.Date.now();
      };
    },
    8886: (t, e, i) => {
      var s = i(3184),
        n = i(886),
        r = i(837),
        o = i(7102);
      t.exports = function (t) {
        return r(t) ? s(o(t)) : n(t);
      };
    },
    4043: (t) => {
      t.exports = function () {
        return [];
      };
    },
    3444: (t) => {
      t.exports = function () {
        return !1;
      };
    },
    6705: (t, e, i) => {
      var s = i(71),
        n = i(4655),
        r = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        c = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (n(t)) return NaN;
        if (s(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = s(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(r, "");
        var i = a.test(t);
        return i || h.test(t)
          ? c(t.slice(2), i ? 2 : 8)
          : o.test(t)
          ? NaN
          : +t;
      };
    },
    2049: (t, e, i) => {
      var s = i(8257);
      t.exports = function (t) {
        return null == t ? "" : s(t);
      };
    },
    4849: (t, e, i) => {
      var s = i(6174);
      t.exports = function (t) {
        return t && t.length ? s(t) : [];
      };
    },
    6349: () => {
      window.NodeList &&
        !NodeList.prototype.forEach &&
        (NodeList.prototype.forEach = function (t, e) {
          e = e || window;
          for (var i = 0; i < this.length; i++) t.call(e, this[i], i, this);
        });
    },
    7320: (t, e, i) => {
      t.exports = i(1045);
    },
    7230: (t) => {
      "use strict";
      var e = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        i = {
          canUseDOM: e,
          canUseWorkers: "undefined" != typeof Worker,
          canUseEventListeners:
            e && !(!window.addEventListener && !window.attachEvent),
          canUseViewport: e && !!window.screen,
          isInWorker: !e,
        };
      t.exports = i;
    },
    2907: (t) => {
      var e,
        i,
        s,
        n,
        r,
        o,
        a,
        h,
        c,
        u,
        l,
        d,
        f,
        m,
        p,
        g = !1;
      function x() {
        if (!g) {
          g = !0;
          var t = navigator.userAgent,
            x =
              /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                t
              ),
            v = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
          if (
            ((d = /\b(iPhone|iP[ao]d)/.exec(t)),
            (f = /\b(iP[ao]d)/.exec(t)),
            (u = /Android/i.exec(t)),
            (m = /FBAN\/\w+;/i.exec(t)),
            (p = /Mobile/i.exec(t)),
            (l = !!/Win64/.exec(t)),
            x)
          ) {
            (e = x[1] ? parseFloat(x[1]) : x[5] ? parseFloat(x[5]) : NaN) &&
              document &&
              document.documentMode &&
              (e = document.documentMode);
            var y = /(?:Trident\/(\d+.\d+))/.exec(t);
            (o = y ? parseFloat(y[1]) + 4 : e),
              (i = x[2] ? parseFloat(x[2]) : NaN),
              (s = x[3] ? parseFloat(x[3]) : NaN),
              (n = x[4] ? parseFloat(x[4]) : NaN)
                ? ((x = /(?:Chrome\/(\d+\.\d+))/.exec(t)),
                  (r = x && x[1] ? parseFloat(x[1]) : NaN))
                : (r = NaN);
          } else e = i = s = r = n = NaN;
          if (v) {
            if (v[1]) {
              var w = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
              a = !w || parseFloat(w[1].replace("_", "."));
            } else a = !1;
            (h = !!v[2]), (c = !!v[3]);
          } else a = h = c = !1;
        }
      }
      var v = {
        ie: function () {
          return x() || e;
        },
        ieCompatibilityMode: function () {
          return x() || o > e;
        },
        ie64: function () {
          return v.ie() && l;
        },
        firefox: function () {
          return x() || i;
        },
        opera: function () {
          return x() || s;
        },
        webkit: function () {
          return x() || n;
        },
        safari: function () {
          return v.webkit();
        },
        chrome: function () {
          return x() || r;
        },
        windows: function () {
          return x() || h;
        },
        osx: function () {
          return x() || a;
        },
        linux: function () {
          return x() || c;
        },
        iphone: function () {
          return x() || d;
        },
        mobile: function () {
          return x() || d || f || u || p;
        },
        nativeApp: function () {
          return x() || m;
        },
        android: function () {
          return x() || u;
        },
        ipad: function () {
          return x() || f;
        },
      };
      t.exports = v;
    },
    4284: (t, e, i) => {
      "use strict";
      var s,
        n = i(7230);
      n.canUseDOM &&
        (s =
          document.implementation &&
          document.implementation.hasFeature &&
          !0 !== document.implementation.hasFeature("", "")),
        (t.exports = function (t, e) {
          if (!n.canUseDOM || (e && !("addEventListener" in document)))
            return !1;
          var i = "on" + t,
            r = i in document;
          if (!r) {
            var o = document.createElement("div");
            o.setAttribute(i, "return;"), (r = "function" == typeof o[i]);
          }
          return (
            !r &&
              s &&
              "wheel" === t &&
              (r = document.implementation.hasFeature("Events.wheel", "3.0")),
            r
          );
        });
    },
    1045: (t, e, i) => {
      "use strict";
      var s = i(2907),
        n = i(4284);
      function r(t) {
        var e = 0,
          i = 0,
          s = 0,
          n = 0;
        return (
          "detail" in t && (i = t.detail),
          "wheelDelta" in t && (i = -t.wheelDelta / 120),
          "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
          "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
          "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
          (s = 10 * e),
          (n = 10 * i),
          "deltaY" in t && (n = t.deltaY),
          "deltaX" in t && (s = t.deltaX),
          (s || n) &&
            t.deltaMode &&
            (1 == t.deltaMode
              ? ((s *= 40), (n *= 40))
              : ((s *= 800), (n *= 800))),
          s && !e && (e = s < 1 ? -1 : 1),
          n && !i && (i = n < 1 ? -1 : 1),
          { spinX: e, spinY: i, pixelX: s, pixelY: n }
        );
      }
      (r.getEventType = function () {
        return s.firefox()
          ? "DOMMouseScroll"
          : n("wheel")
          ? "wheel"
          : "mousewheel";
      }),
        (t.exports = r);
    },
    2273: (t) => {
      var e =
          "undefined" != typeof document
            ? document.createElement("p").style
            : {},
        i = ["O", "ms", "Moz", "Webkit"],
        s = /([A-Z])/g,
        n = {};
      function r(t) {
        if (
          ((t = t.replace(/-([a-z])/g, function (t, e) {
            return e.toUpperCase();
          })),
          void 0 !== e[t])
        )
          return t;
        for (
          var s = t.charAt(0).toUpperCase() + t.slice(1), n = i.length;
          n--;

        ) {
          var r = i[n] + s;
          if (void 0 !== e[r]) return r;
        }
        return t;
      }
      (t.exports = function (t) {
        return t in n ? n[t] : (n[t] = r(t));
      }),
        (t.exports.dash = function (t) {
          return (
            (t = r(t)),
            s.test(t) && ((t = "-" + t.replace(s, "-$1")), (s.lastIndex = 0)),
            t.toLowerCase()
          );
        });
    },
    3044: function (t) {
      var e;
      t.exports =
        (((e = function () {
          function t(t) {
            return n.appendChild(t.dom), t;
          }
          function i(t) {
            for (var e = 0; e < n.children.length; e++)
              n.children[e].style.display = e === t ? "block" : "none";
            s = t;
          }
          var s = 0,
            n = document.createElement("div");
          (n.style.cssText =
            "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
            n.addEventListener(
              "click",
              function (t) {
                t.preventDefault(), i(++s % n.children.length);
              },
              !1
            );
          var r = (performance || Date).now(),
            o = r,
            a = 0,
            h = t(new e.Panel("FPS", "#0ff", "#002")),
            c = t(new e.Panel("MS", "#0f0", "#020"));
          if (self.performance && self.performance.memory)
            var u = t(new e.Panel("MB", "#f08", "#201"));
          return (
            i(0),
            {
              REVISION: 16,
              dom: n,
              addPanel: t,
              showPanel: i,
              begin: function () {
                r = (performance || Date).now();
              },
              end: function () {
                a++;
                var t = (performance || Date).now();
                if (
                  (c.update(t - r, 200),
                  t > o + 1e3 &&
                    (h.update((1e3 * a) / (t - o), 100), (o = t), (a = 0), u))
                ) {
                  var e = performance.memory;
                  u.update(
                    e.usedJSHeapSize / 1048576,
                    e.jsHeapSizeLimit / 1048576
                  );
                }
                return t;
              },
              update: function () {
                r = this.end();
              },
              domElement: n,
              setMode: i,
            }
          );
        }).Panel = function (t, e, i) {
          var s = 1 / 0,
            n = 0,
            r = Math.round,
            o = r(window.devicePixelRatio || 1),
            a = 80 * o,
            h = 48 * o,
            c = 3 * o,
            u = 2 * o,
            l = 3 * o,
            d = 15 * o,
            f = 74 * o,
            m = 30 * o,
            p = document.createElement("canvas");
          (p.width = a),
            (p.height = h),
            (p.style.cssText = "width:80px;height:48px");
          var g = p.getContext("2d");
          return (
            (g.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif"),
            (g.textBaseline = "top"),
            (g.fillStyle = i),
            g.fillRect(0, 0, a, h),
            (g.fillStyle = e),
            g.fillText(t, c, u),
            g.fillRect(l, d, f, m),
            (g.fillStyle = i),
            (g.globalAlpha = 0.9),
            g.fillRect(l, d, f, m),
            {
              dom: p,
              update: function (h, x) {
                (s = Math.min(s, h)),
                  (n = Math.max(n, h)),
                  (g.fillStyle = i),
                  (g.globalAlpha = 1),
                  g.fillRect(0, 0, a, d),
                  (g.fillStyle = e),
                  g.fillText(
                    r(h) + " " + t + " (" + r(s) + "-" + r(n) + ")",
                    c,
                    u
                  ),
                  g.drawImage(p, l + o, d, f - o, m, l, d, f - o, m),
                  g.fillRect(l + f - o, d, o, m),
                  (g.fillStyle = i),
                  (g.globalAlpha = 0.9),
                  g.fillRect(l + f - o, d, o, r((1 - h / x) * m));
              },
            }
          );
        }),
        e);
    },
  },
  e = {};
function i(s) {
  if (e[s]) return e[s].exports;
  var n = (e[s] = { id: s, loaded: !1, exports: {} });
  return t[s].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
}
(i.n = (t) => {
  var e = t && t.__esModule ? () => t.default : () => t;
  return i.d(e, { a: e }), e;
}),
  (i.d = (t, e) => {
    for (var s in e)
      i.o(e, s) &&
        !i.o(t, s) &&
        Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
  }),
  (i.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
  (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
  (i.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
  (() => {
    var t;
    i.g.importScripts && (t = i.g.location + "");
    var e = i.g.document;
    if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
      var s = e.getElementsByTagName("script");
      s.length && (t = s[s.length - 1].src);
    }
    if (!t)
      throw new Error(
        "Automatic publicPath is not supported in this browser"
      );
    (t = t
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/")),
      (i.p = t);
  })(),
  (() => {
    "use strict";
    i(6349), i(4065), i(6955);
    var t = i(1663),
      e = i.n(t),
      s = i(7778),
      n = i.n(s),
      r = i(3044),
      o = i.n(r),
      a = i(6270),
      h = i.n(a);
    const c = new (class {
      isMobile() {
        return (
          this.isMobileChecked ||
            ((this.isMobileChecked = !0),
            (this.isMobileCheck =
              document.documentElement.classList.contains("mobile"))),
          this.isMobileCheck
        );
      }
      isWebPSupported() {
        if (!this.isWebPChecked) {
          this.isWebPChecked = !0;
          const t = document.createElement("canvas");
          t.getContext &&
            t.getContext("2d") &&
            (this.isWebPCheck =
              0 === t.toDataURL("image/webp").indexOf("data:image/webp"));
        }
        return this.isWebPCheck;
      }
    })();
    var u = i(1590),
      l = i.n(u),
      d = i(2273),
      f = i.n(d),
      m = i(7976),
      p = i.n(m);
    const g = (t, e = 0, i = 0) => {
      const s = t.getBoundingClientRect();
      return {
        bottom: s.bottom,
        height: s.height,
        left: s.left + i,
        top: s.top + e,
        width: s.width,
      };
    };
    function x(t, e) {
      return t instanceof window.HTMLElement ? [e(t)] : p()(t, e);
    }
    const v = class extends l() {
        constructor({ classes: t, element: i, elements: s }) {
          super(),
            e()(this),
            (this.classes = { ...t }),
            (this.selectors = {
              element: i,
              elements: {
                descriptions: "[data-text]",
                descriptionsLines: [],
                ...s,
              },
            }),
            (this.transformPrefix = f()("transform")),
            (this.transformStylePrefix = f()("transform-style")),
            this.create();
        }
        create() {
          (this.element = document.querySelector(this.selectors.element)),
            (this.elements = {}),
            h()(this.selectors.elements, (t, e) => {
              t instanceof window.HTMLElement ||
              t instanceof window.NodeList ||
              Array.isArray(t)
                ? (this.elements[e] = t)
                : ((this.elements[e] = this.element.querySelectorAll(t)),
                  0 === this.elements[e].length
                    ? (this.elements[e] = null)
                    : 1 === this.elements[e].length &&
                      (this.elements[e] = this.element.querySelector(t)));
            }),
            this.createDescription();
        }
        createDescription() {
          this.elements.descriptionsLines = x(
            this.elements.descriptions,
            (t) => t.querySelectorAll("span")
          );
        }
        show(t) {
          return (
            (this.isVisible = !0),
            this.elements.descriptionsLines.forEach((t, e) => {
              if (0 === t.length) return;
              const i = (function (t) {
                const e = [];
                let i = [],
                  s = t[0].offsetTop;
                return (
                  h()(t, (n, r) => {
                    n.offsetTop === s && i.push(n),
                      n.offsetTop !== s &&
                        (e.push(i), (i = []), i.push(n), (s = n.offsetTop)),
                      r + 1 === t.length && e.push(i);
                  }),
                  e
                );
              })(t);
              i.forEach((t, e) => {
                t.forEach((t) => {
                  (t.style.transition = "none"),
                    (t.style.opacity = 0),
                    (t.style[this.transformPrefix] =
                      "translate3d(0, 15px, 0)");
                });
              }),
                window.requestAnimationFrame((t) => {
                  window.requestAnimationFrame((t) => {
                    i.forEach((t, i) => {
                      t.forEach((t) => {
                        (t.style.opacity = 1),
                          (t.style.transition = `opacity 1s ${
                            1 + 0.1 * e + 0.1 * i
                          }s cubic-bezier(0.19, 1, 0.22, 1), transform 1s ${
                            1 + 0.1 * e + 0.1 * i
                          }s cubic-bezier(0.19, 1, 0.22, 1)`),
                          (t.style[this.transformPrefix] =
                            "translate3d(0, 0, 0)");
                      });
                    });
                  });
                });
            }),
            Promise.resolve()
          );
        }
        hide(t) {
          return (this.isVisible = !1), Promise.resolve();
        }
      },
      y = class extends v {
        constructor() {
          super({ classes: { active: "about--active" }, element: ".about" });
        }
        async show(t) {
          return (
            this.element.classList.add(this.classes.active), super.show(t)
          );
        }
        async hide(t) {
          return (
            this.element.classList.remove(this.classes.active), super.hide(t)
          );
        }
      },
      w = class extends v {
        constructor() {
          super({
            classes: { active: "cases--active", caseActive: "case--active" },
            element: ".cases",
            elements: { case: "#emblem", cases: ".case" },
          });
        }
        async show(t) {
          this.element.classList.add(this.classes.active);
          const e = t.replace("/case/", "").replace("/", "");
          return (
            this.elements.cases.forEach((t) => {
              t.classList.remove(this.classes.caseActive);
            }),
            (this.elements.case = Array.from(this.elements.cases).find(
              (t) => t.id === e
            )),
            this.elements.case.classList.add(this.classes.caseActive),
            super.show(t)
          );
        }
        async hide(t) {
          return (
            this.element.classList.remove(this.classes.active), super.hide(t)
          );
        }
      },
      _ = class extends v {
        constructor() {
          super({ classes: { active: "work--active" }, element: ".work" });
        }
        async show(t) {
          return (
            this.element.classList.add(this.classes.active), super.show(t)
          );
        }
        async hide(t) {
          return (
            this.element.classList.remove(this.classes.active), super.hide(t)
          );
        }
      },
      b = {
        black: "#000000",
        white: "#ffffff",
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        cyan: "#00ffff",
        yellow: "#ffff00",
        orange: "#ff8000",
      };
    function M(t) {
      4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
      const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return (
        e || console.warn(`Unable to convert hex string ${t} to rgb values`),
        [
          parseInt(e[1], 16) / 255,
          parseInt(e[2], 16) / 255,
          parseInt(e[3], 16) / 255,
        ]
      );
    }
    function A(t) {
      return [
        (((t = parseInt(t)) >> 16) & 255) / 255,
        ((t >> 8) & 255) / 255,
        (255 & t) / 255,
      ];
    }
    function T(t) {
      return void 0 === t
        ? [0, 0, 0]
        : 3 === arguments.length
        ? arguments
        : isNaN(t)
        ? "#" === t[0]
          ? M(t)
          : b[t.toLowerCase()]
          ? M(b[t.toLowerCase()])
          : (console.warn("Color format not recognised"), [0, 0, 0])
        : A(t);
    }
    class E extends Array {
      constructor(t) {
        return Array.isArray(t) ? super(...t) : super(...T(...arguments));
      }
      get r() {
        return this[0];
      }
      get g() {
        return this[1];
      }
      get b() {
        return this[2];
      }
      set r(t) {
        this[0] = t;
      }
      set g(t) {
        this[1] = t;
      }
      set b(t) {
        this[2] = t;
      }
      set(t) {
        return Array.isArray(t) ? this.copy(t) : this.copy(T(...arguments));
      }
      copy(t) {
        return (this[0] = t[0]), (this[1] = t[1]), (this[2] = t[2]), this;
      }
    }
    function O(t) {
      let e = t[0],
        i = t[1],
        s = t[2];
      return Math.sqrt(e * e + i * i + s * s);
    }
    function C(t, e) {
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
    }
    function S(t, e, i) {
      return (
        (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), t
      );
    }
    function P(t, e, i) {
      return (
        (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t
      );
    }
    function F(t, e, i) {
      return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), t;
    }
    function L(t) {
      let e = t[0],
        i = t[1],
        s = t[2];
      return e * e + i * i + s * s;
    }
    function k(t, e) {
      let i = e[0],
        s = e[1],
        n = e[2],
        r = i * i + s * s + n * n;
      return (
        r > 0 && (r = 1 / Math.sqrt(r)),
        (t[0] = e[0] * r),
        (t[1] = e[1] * r),
        (t[2] = e[2] * r),
        t
      );
    }
    function R(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
    }
    function D(t, e, i) {
      let s = e[0],
        n = e[1],
        r = e[2],
        o = i[0],
        a = i[1],
        h = i[2];
      return (
        (t[0] = n * h - r * a),
        (t[1] = r * o - s * h),
        (t[2] = s * a - n * o),
        t
      );
    }
    const z = (function () {
      const t = [0, 0, 0],
        e = [0, 0, 0];
      return function (i, s) {
        C(t, i), C(e, s), k(t, t), k(e, e);
        let n = R(t, e);
        return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
      };
    })();
    class I extends Array {
      constructor(t = 0, e = t, i = t) {
        return super(t, e, i), this;
      }
      get x() {
        return this[0];
      }
      get y() {
        return this[1];
      }
      get z() {
        return this[2];
      }
      set x(t) {
        this[0] = t;
      }
      set y(t) {
        this[1] = t;
      }
      set z(t) {
        this[2] = t;
      }
      set(t, e = t, i = t) {
        return t.length
          ? this.copy(t)
          : ((function (t, e, i, s) {
              (t[0] = e), (t[1] = i), (t[2] = s);
            })(this, t, e, i),
            this);
      }
      copy(t) {
        return C(this, t), this;
      }
      add(t, e) {
        return e ? S(this, t, e) : S(this, this, t), this;
      }
      sub(t, e) {
        return e ? P(this, t, e) : P(this, this, t), this;
      }
      multiply(t) {
        var e, i, s;
        return (
          t.length
            ? ((i = this),
              (s = t),
              ((e = this)[0] = i[0] * s[0]),
              (e[1] = i[1] * s[1]),
              (e[2] = i[2] * s[2]))
            : F(this, this, t),
          this
        );
      }
      divide(t) {
        var e, i, s;
        return (
          t.length
            ? ((i = this),
              (s = t),
              ((e = this)[0] = i[0] / s[0]),
              (e[1] = i[1] / s[1]),
              (e[2] = i[2] / s[2]))
            : F(this, this, 1 / t),
          this
        );
      }
      inverse(t = this) {
        var e, i;
        return (
          (i = t),
          ((e = this)[0] = 1 / i[0]),
          (e[1] = 1 / i[1]),
          (e[2] = 1 / i[2]),
          this
        );
      }
      len() {
        return O(this);
      }
      distance(t) {
        return t
          ? (function (t, e) {
              let i = e[0] - t[0],
                s = e[1] - t[1],
                n = e[2] - t[2];
              return Math.sqrt(i * i + s * s + n * n);
            })(this, t)
          : O(this);
      }
      squaredLen() {
        return L(this);
      }
      squaredDistance(t) {
        return t
          ? (function (t, e) {
              let i = e[0] - t[0],
                s = e[1] - t[1],
                n = e[2] - t[2];
              return i * i + s * s + n * n;
            })(this, t)
          : L(this);
      }
      negate(t = this) {
        var e, i;
        return (
          (i = t),
          ((e = this)[0] = -i[0]),
          (e[1] = -i[1]),
          (e[2] = -i[2]),
          this
        );
      }
      cross(t, e) {
        return e ? D(this, t, e) : D(this, this, t), this;
      }
      scale(t) {
        return F(this, this, t), this;
      }
      normalize() {
        return k(this, this), this;
      }
      dot(t) {
        return R(this, t);
      }
      equals(t) {
        return (
          (e = t), this[0] === e[0] && this[1] === e[1] && this[2] === e[2]
        );
        var e;
      }
      applyMatrix4(t) {
        return (
          (function (t, e, i) {
            let s = e[0],
              n = e[1],
              r = e[2],
              o = i[3] * s + i[7] * n + i[11] * r + i[15];
            (o = o || 1),
              (t[0] = (i[0] * s + i[4] * n + i[8] * r + i[12]) / o),
              (t[1] = (i[1] * s + i[5] * n + i[9] * r + i[13]) / o),
              (t[2] = (i[2] * s + i[6] * n + i[10] * r + i[14]) / o);
          })(this, this, t),
          this
        );
      }
      scaleRotateMatrix4(t) {
        return (
          (function (t, e, i) {
            let s = e[0],
              n = e[1],
              r = e[2],
              o = i[3] * s + i[7] * n + i[11] * r + i[15];
            (o = o || 1),
              (t[0] = (i[0] * s + i[4] * n + i[8] * r) / o),
              (t[1] = (i[1] * s + i[5] * n + i[9] * r) / o),
              (t[2] = (i[2] * s + i[6] * n + i[10] * r) / o);
          })(this, this, t),
          this
        );
      }
      applyQuaternion(t) {
        return (
          (function (t, e, i) {
            let s = e[0],
              n = e[1],
              r = e[2],
              o = i[0],
              a = i[1],
              h = i[2],
              c = a * r - h * n,
              u = h * s - o * r,
              l = o * n - a * s,
              d = a * l - h * u,
              f = h * c - o * l,
              m = o * u - a * c,
              p = 2 * i[3];
            (c *= p),
              (u *= p),
              (l *= p),
              (d *= 2),
              (f *= 2),
              (m *= 2),
              (t[0] = s + c + d),
              (t[1] = n + u + f),
              (t[2] = r + l + m);
          })(this, this, t),
          this
        );
      }
      angle(t) {
        return z(this, t);
      }
      lerp(t, e) {
        return (
          (function (t, e, i, s) {
            let n = e[0],
              r = e[1],
              o = e[2];
            (t[0] = n + s * (i[0] - n)),
              (t[1] = r + s * (i[1] - r)),
              (t[2] = o + s * (i[2] - o));
          })(this, this, t, e),
          this
        );
      }
      clone() {
        return new I(this[0], this[1], this[2]);
      }
      fromArray(t, e = 0) {
        return (
          (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), this
        );
      }
      toArray(t = [], e = 0) {
        return (
          (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t
        );
      }
      transformDirection(t) {
        const e = this[0],
          i = this[1],
          s = this[2];
        return (
          (this[0] = t[0] * e + t[4] * i + t[8] * s),
          (this[1] = t[1] * e + t[5] * i + t[9] * s),
          (this[2] = t[2] * e + t[6] * i + t[10] * s),
          this.normalize()
        );
      }
    }
    const B = new I();
    let N = 1;
    class U {
      constructor({
        canvas: t = document.createElement("canvas"),
        width: e = 300,
        height: i = 150,
        dpr: s = 1,
        alpha: n = !1,
        depth: r = !0,
        stencil: o = !1,
        antialias: a = !1,
        premultipliedAlpha: h = !1,
        preserveDrawingBuffer: c = !1,
        powerPreference: u = "default",
        autoClear: l = !0,
        webgl: d = 2,
      } = {}) {
        const f = {
          alpha: n,
          depth: r,
          stencil: o,
          antialias: a,
          premultipliedAlpha: h,
          preserveDrawingBuffer: c,
          powerPreference: u,
        };
        (this.dpr = s),
          (this.alpha = n),
          (this.color = !0),
          (this.depth = r),
          (this.stencil = o),
          (this.premultipliedAlpha = h),
          (this.autoClear = l),
          (this.id = N++),
          2 === d && (this.gl = t.getContext("webgl2", f)),
          (this.isWebgl2 = !!this.gl),
          this.gl ||
            (this.gl =
              t.getContext("webgl", f) ||
              t.getContext("experimental-webgl", f)),
          (this.gl.renderer = this),
          this.setSize(e, i),
          (this.state = {}),
          (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
          (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
          (this.state.cullFace = null),
          (this.state.frontFace = this.gl.CCW),
          (this.state.depthMask = !0),
          (this.state.depthFunc = this.gl.LESS),
          (this.state.premultiplyAlpha = !1),
          (this.state.flipY = !1),
          (this.state.unpackAlignment = 4),
          (this.state.framebuffer = null),
          (this.state.viewport = { width: null, height: null }),
          (this.state.textureUnits = []),
          (this.state.activeTextureUnit = 0),
          (this.state.boundBuffer = null),
          (this.state.uniformLocations = new Map()),
          (this.extensions = {}),
          this.isWebgl2
            ? (this.getExtension("EXT_color_buffer_float"),
              this.getExtension("OES_texture_float_linear"))
            : (this.getExtension("OES_texture_float"),
              this.getExtension("OES_texture_float_linear"),
              this.getExtension("OES_texture_half_float"),
              this.getExtension("OES_texture_half_float_linear"),
              this.getExtension("OES_element_index_uint"),
              this.getExtension("OES_standard_derivatives"),
              this.getExtension("EXT_sRGB"),
              this.getExtension("WEBGL_depth_texture"),
              this.getExtension("WEBGL_draw_buffers")),
          (this.vertexAttribDivisor = this.getExtension(
            "ANGLE_instanced_arrays",
            "vertexAttribDivisor",
            "vertexAttribDivisorANGLE"
          )),
          (this.drawArraysInstanced = this.getExtension(
            "ANGLE_instanced_arrays",
            "drawArraysInstanced",
            "drawArraysInstancedANGLE"
          )),
          (this.drawElementsInstanced = this.getExtension(
            "ANGLE_instanced_arrays",
            "drawElementsInstanced",
            "drawElementsInstancedANGLE"
          )),
          (this.createVertexArray = this.getExtension(
            "OES_vertex_array_object",
            "createVertexArray",
            "createVertexArrayOES"
          )),
          (this.bindVertexArray = this.getExtension(
            "OES_vertex_array_object",
            "bindVertexArray",
            "bindVertexArrayOES"
          )),
          (this.deleteVertexArray = this.getExtension(
            "OES_vertex_array_object",
            "deleteVertexArray",
            "deleteVertexArrayOES"
          )),
          (this.drawBuffers = this.getExtension(
            "WEBGL_draw_buffers",
            "drawBuffers",
            "drawBuffersWEBGL"
          )),
          (this.parameters = {}),
          (this.parameters.maxTextureUnits = this.gl.getParameter(
            this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
          )),
          (this.parameters.maxAnisotropy = this.getExtension(
            "EXT_texture_filter_anisotropic"
          )
            ? this.gl.getParameter(
                this.getExtension("EXT_texture_filter_anisotropic")
                  .MAX_TEXTURE_MAX_ANISOTROPY_EXT
              )
            : 0);
      }
      setSize(t, e) {
        (this.width = t),
          (this.height = e),
          (this.gl.canvas.width = t * this.dpr),
          (this.gl.canvas.height = e * this.dpr),
          Object.assign(this.gl.canvas.style, {
            width: t + "px",
            height: e + "px",
          });
      }
      setViewport(t, e) {
        (this.state.viewport.width === t &&
          this.state.viewport.height === e) ||
          ((this.state.viewport.width = t),
          (this.state.viewport.height = e),
          this.gl.viewport(0, 0, t, e));
      }
      enable(t) {
        !0 !== this.state[t] && (this.gl.enable(t), (this.state[t] = !0));
      }
      disable(t) {
        !1 !== this.state[t] && (this.gl.disable(t), (this.state[t] = !1));
      }
      setBlendFunc(t, e, i, s) {
        (this.state.blendFunc.src === t &&
          this.state.blendFunc.dst === e &&
          this.state.blendFunc.srcAlpha === i &&
          this.state.blendFunc.dstAlpha === s) ||
          ((this.state.blendFunc.src = t),
          (this.state.blendFunc.dst = e),
          (this.state.blendFunc.srcAlpha = i),
          (this.state.blendFunc.dstAlpha = s),
          void 0 !== i
            ? this.gl.blendFuncSeparate(t, e, i, s)
            : this.gl.blendFunc(t, e));
      }
      setBlendEquation(t, e) {
        (t = t || this.gl.FUNC_ADD),
          (this.state.blendEquation.modeRGB === t &&
            this.state.blendEquation.modeAlpha === e) ||
            ((this.state.blendEquation.modeRGB = t),
            (this.state.blendEquation.modeAlpha = e),
            void 0 !== e
              ? this.gl.blendEquationSeparate(t, e)
              : this.gl.blendEquation(t));
      }
      setCullFace(t) {
        this.state.cullFace !== t &&
          ((this.state.cullFace = t), this.gl.cullFace(t));
      }
      setFrontFace(t) {
        this.state.frontFace !== t &&
          ((this.state.frontFace = t), this.gl.frontFace(t));
      }
      setDepthMask(t) {
        this.state.depthMask !== t &&
          ((this.state.depthMask = t), this.gl.depthMask(t));
      }
      setDepthFunc(t) {
        this.state.depthFunc !== t &&
          ((this.state.depthFunc = t), this.gl.depthFunc(t));
      }
      activeTexture(t) {
        this.state.activeTextureUnit !== t &&
          ((this.state.activeTextureUnit = t),
          this.gl.activeTexture(this.gl.TEXTURE0 + t));
      }
      bindFramebuffer({
        target: t = this.gl.FRAMEBUFFER,
        buffer: e = null,
      } = {}) {
        this.state.framebuffer !== e &&
          ((this.state.framebuffer = e), this.gl.bindFramebuffer(t, e));
      }
      getExtension(t, e, i) {
        return e && this.gl[e]
          ? this.gl[e].bind(this.gl)
          : (this.extensions[t] ||
              (this.extensions[t] = this.gl.getExtension(t)),
            e
              ? this.extensions[t]
                ? this.extensions[t][i].bind(this.extensions[t])
                : null
              : this.extensions[t]);
      }
      sortOpaque(t, e) {
        return t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.program.id !== e.program.id
          ? t.program.id - e.program.id
          : t.zDepth !== e.zDepth
          ? t.zDepth - e.zDepth
          : e.id - t.id;
      }
      sortTransparent(t, e) {
        return t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.zDepth !== e.zDepth
          ? e.zDepth - t.zDepth
          : e.id - t.id;
      }
      sortUI(t, e) {
        return t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.program.id !== e.program.id
          ? t.program.id - e.program.id
          : e.id - t.id;
      }
      getRenderList({ scene: t, camera: e, frustumCull: i, sort: s }) {
        let n = [];
        if (
          (e && i && e.updateFrustum(),
          t.traverse((t) => {
            if (!t.visible) return !0;
            t.draw &&
              ((i && t.frustumCulled && e && !e.frustumIntersectsMesh(t)) ||
                n.push(t));
          }),
          s)
        ) {
          const t = [],
            i = [],
            s = [];
          n.forEach((n) => {
            n.program.transparent
              ? n.program.depthTest
                ? i.push(n)
                : s.push(n)
              : t.push(n),
              (n.zDepth = 0),
              0 === n.renderOrder &&
                n.program.depthTest &&
                e &&
                (n.worldMatrix.getTranslation(B),
                B.applyMatrix4(e.projectionViewMatrix),
                (n.zDepth = B.z));
          }),
            t.sort(this.sortOpaque),
            i.sort(this.sortTransparent),
            s.sort(this.sortUI),
            (n = t.concat(i, s));
        }
        return n;
      }
      render({
        scene: t,
        camera: e,
        target: i = null,
        update: s = !0,
        sort: n = !0,
        frustumCull: r = !0,
        clear: o,
      }) {
        null === i
          ? (this.bindFramebuffer(),
            this.setViewport(this.width * this.dpr, this.height * this.dpr))
          : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)),
          (o || (this.autoClear && !1 !== o)) &&
            (!this.depth ||
              (i && !i.depth) ||
              (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
            this.gl.clear(
              (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
                (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
                (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
            )),
          s && t.updateMatrixWorld(),
          e && e.updateMatrixWorld(),
          this.getRenderList({
            scene: t,
            camera: e,
            frustumCull: r,
            sort: n,
          }).forEach((t) => {
            t.draw({ camera: e });
          });
      }
    }
    function j(t, e, i) {
      return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), t;
    }
    function W(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), t;
    }
    function X(t, e, i) {
      return (t[0] = e[0] * i), (t[1] = e[1] * i), t;
    }
    function V(t) {
      var e = t[0],
        i = t[1];
      return Math.sqrt(e * e + i * i);
    }
    function Y(t, e) {
      return t[0] * e[1] - t[1] * e[0];
    }
    class q extends Array {
      constructor(t = 0, e = t) {
        return super(t, e), this;
      }
      get x() {
        return this[0];
      }
      get y() {
        return this[1];
      }
      set x(t) {
        this[0] = t;
      }
      set y(t) {
        this[1] = t;
      }
      set(t, e = t) {
        return t.length
          ? this.copy(t)
          : ((function (t, e, i) {
              (t[0] = e), (t[1] = i);
            })(this, t, e),
            this);
      }
      copy(t) {
        var e, i;
        return (i = t), ((e = this)[0] = i[0]), (e[1] = i[1]), this;
      }
      add(t, e) {
        return e ? j(this, t, e) : j(this, this, t), this;
      }
      sub(t, e) {
        return e ? W(this, t, e) : W(this, this, t), this;
      }
      multiply(t) {
        var e, i;
        return (
          t.length
            ? (this,
              (i = t),
              ((e = this)[0] = this[0] * i[0]),
              (e[1] = this[1] * i[1]))
            : X(this, this, t),
          this
        );
      }
      divide(t) {
        var e, i;
        return (
          t.length
            ? (this,
              (i = t),
              ((e = this)[0] = this[0] / i[0]),
              (e[1] = this[1] / i[1]))
            : X(this, this, 1 / t),
          this
        );
      }
      inverse(t = this) {
        var e, i;
        return (i = t), ((e = this)[0] = 1 / i[0]), (e[1] = 1 / i[1]), this;
      }
      len() {
        return V(this);
      }
      distance(t) {
        return t
          ? (this,
            (i = (e = t)[0] - this[0]),
            (s = e[1] - this[1]),
            Math.sqrt(i * i + s * s))
          : V(this);
        var e, i, s;
      }
      squaredLen() {
        return this.squaredDistance();
      }
      squaredDistance(t) {
        return t
          ? (this, (i = (e = t)[0] - this[0]) * i + (s = e[1] - this[1]) * s)
          : (function (t) {
              var e = t[0],
                i = t[1];
              return e * e + i * i;
            })(this);
        var e, i, s;
      }
      negate(t = this) {
        var e, i;
        return (i = t), ((e = this)[0] = -i[0]), (e[1] = -i[1]), this;
      }
      cross(t, e) {
        return e ? Y(t, e) : Y(this, t);
      }
      scale(t) {
        return X(this, this, t), this;
      }
      normalize() {
        var t, e, i, s;
        return (
          this,
          (s = (e = (t = this)[0]) * e + (i = t[1]) * i) > 0 &&
            (s = 1 / Math.sqrt(s)),
          (this[0] = t[0] * s),
          (this[1] = t[1] * s),
          this
        );
      }
      dot(t) {
        return (e = t), this[0] * e[0] + this[1] * e[1];
        var e;
      }
      equals(t) {
        return (e = t), this[0] === e[0] && this[1] === e[1];
        var e;
      }
      applyMatrix3(t) {
        var e, i, s;
        return (
          this,
          (e = t),
          (i = this[0]),
          (s = this[1]),
          (this[0] = e[0] * i + e[3] * s + e[6]),
          (this[1] = e[1] * i + e[4] * s + e[7]),
          this
        );
      }
      applyMatrix4(t) {
        return (
          (function (t, e, i) {
            let s = e[0],
              n = e[1];
            (t[0] = i[0] * s + i[4] * n + i[12]),
              (t[1] = i[1] * s + i[5] * n + i[13]);
          })(this, this, t),
          this
        );
      }
      lerp(t, e) {
        !(function (t, e, i, s) {
          var n = e[0],
            r = e[1];
          (t[0] = n + s * (i[0] - n)), (t[1] = r + s * (i[1] - r));
        })(this, this, t, e);
      }
      clone() {
        return new q(this[0], this[1]);
      }
      fromArray(t, e = 0) {
        return (this[0] = t[e]), (this[1] = t[e + 1]), this;
      }
      toArray(t = [], e = 0) {
        return (t[e] = this[0]), (t[e + 1] = this[1]), t;
      }
    }
    function G(t, e, i) {
      let s = e[0],
        n = e[1],
        r = e[2],
        o = e[3],
        a = i[0],
        h = i[1],
        c = i[2],
        u = i[3];
      return (
        (t[0] = s * u + o * a + n * c - r * h),
        (t[1] = n * u + o * h + r * a - s * c),
        (t[2] = r * u + o * c + s * h - n * a),
        (t[3] = o * u - s * a - n * h - r * c),
        t
      );
    }
    class H extends Array {
      constructor(t = 0, e = 0, i = 0, s = 1) {
        return super(t, e, i, s), (this.onChange = () => {}), this;
      }
      get x() {
        return this[0];
      }
      get y() {
        return this[1];
      }
      get z() {
        return this[2];
      }
      get w() {
        return this[3];
      }
      set x(t) {
        (this[0] = t), this.onChange();
      }
      set y(t) {
        (this[1] = t), this.onChange();
      }
      set z(t) {
        (this[2] = t), this.onChange();
      }
      set w(t) {
        (this[3] = t), this.onChange();
      }
      identity() {
        var t;
        return (
          ((t = this)[0] = 0),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 1),
          this.onChange(),
          this
        );
      }
      set(t, e, i, s) {
        return t.length
          ? this.copy(t)
          : ((function (t, e, i, s, n) {
              (t[0] = e), (t[1] = i), (t[2] = s), (t[3] = n);
            })(this, t, e, i, s),
            this.onChange(),
            this);
      }
      rotateX(t) {
        return (
          (function (t, e, i) {
            i *= 0.5;
            let s = e[0],
              n = e[1],
              r = e[2],
              o = e[3],
              a = Math.sin(i),
              h = Math.cos(i);
            (t[0] = s * h + o * a),
              (t[1] = n * h + r * a),
              (t[2] = r * h - n * a),
              (t[3] = o * h - s * a);
          })(this, this, t),
          this.onChange(),
          this
        );
      }
      rotateY(t) {
        return (
          (function (t, e, i) {
            i *= 0.5;
            let s = e[0],
              n = e[1],
              r = e[2],
              o = e[3],
              a = Math.sin(i),
              h = Math.cos(i);
            (t[0] = s * h - r * a),
              (t[1] = n * h + o * a),
              (t[2] = r * h + s * a),
              (t[3] = o * h - n * a);
          })(this, this, t),
          this.onChange(),
          this
        );
      }
      rotateZ(t) {
        return (
          (function (t, e, i) {
            i *= 0.5;
            let s = e[0],
              n = e[1],
              r = e[2],
              o = e[3],
              a = Math.sin(i),
              h = Math.cos(i);
            (t[0] = s * h + n * a),
              (t[1] = n * h - s * a),
              (t[2] = r * h + o * a),
              (t[3] = o * h - r * a);
          })(this, this, t),
          this.onChange(),
          this
        );
      }
      inverse(t = this) {
        return (
          (function (t, e) {
            let i = e[0],
              s = e[1],
              n = e[2],
              r = e[3],
              o = i * i + s * s + n * n + r * r,
              a = o ? 1 / o : 0;
            (t[0] = -i * a), (t[1] = -s * a), (t[2] = -n * a), (t[3] = r * a);
          })(this, t),
          this.onChange(),
          this
        );
      }
      conjugate(t = this) {
        var e, i;
        return (
          (i = t),
          ((e = this)[0] = -i[0]),
          (e[1] = -i[1]),
          (e[2] = -i[2]),
          (e[3] = i[3]),
          this.onChange(),
          this
        );
      }
      copy(t) {
        return (
          (i = t),
          ((e = this)[0] = i[0]),
          (e[1] = i[1]),
          (e[2] = i[2]),
          (e[3] = i[3]),
          this.onChange(),
          this
        );
        var e, i;
      }
      normalize(t = this) {
        return (
          (function (t, e) {
            let i = e[0],
              s = e[1],
              n = e[2],
              r = e[3],
              o = i * i + s * s + n * n + r * r;
            o > 0 && (o = 1 / Math.sqrt(o)),
              (t[0] = i * o),
              (t[1] = s * o),
              (t[2] = n * o),
              (t[3] = r * o);
          })(this, t),
          this.onChange(),
          this
        );
      }
      multiply(t, e) {
        return e ? G(this, t, e) : G(this, this, t), this.onChange(), this;
      }
      dot(t) {
        return (
          (i = t),
          (e = this)[0] * i[0] + e[1] * i[1] + e[2] * i[2] + e[3] * i[3]
        );
        var e, i;
      }
      fromMatrix3(t) {
        return (
          (function (t, e) {
            let i,
              s = e[0] + e[4] + e[8];
            if (s > 0)
              (i = Math.sqrt(s + 1)),
                (t[3] = 0.5 * i),
                (i = 0.5 / i),
                (t[0] = (e[5] - e[7]) * i),
                (t[1] = (e[6] - e[2]) * i),
                (t[2] = (e[1] - e[3]) * i);
            else {
              let s = 0;
              e[4] > e[0] && (s = 1), e[8] > e[3 * s + s] && (s = 2);
              let n = (s + 1) % 3,
                r = (s + 2) % 3;
              (i = Math.sqrt(e[3 * s + s] - e[3 * n + n] - e[3 * r + r] + 1)),
                (t[s] = 0.5 * i),
                (i = 0.5 / i),
                (t[3] = (e[3 * n + r] - e[3 * r + n]) * i),
                (t[n] = (e[3 * n + s] + e[3 * s + n]) * i),
                (t[r] = (e[3 * r + s] + e[3 * s + r]) * i);
            }
          })(this, t),
          this.onChange(),
          this
        );
      }
      fromEuler(t) {
        return (
          (function (t, e, i = "YXZ") {
            let s = Math.sin(0.5 * e[0]),
              n = Math.cos(0.5 * e[0]),
              r = Math.sin(0.5 * e[1]),
              o = Math.cos(0.5 * e[1]),
              a = Math.sin(0.5 * e[2]),
              h = Math.cos(0.5 * e[2]);
            "XYZ" === i
              ? ((t[0] = s * o * h + n * r * a),
                (t[1] = n * r * h - s * o * a),
                (t[2] = n * o * a + s * r * h),
                (t[3] = n * o * h - s * r * a))
              : "YXZ" === i
              ? ((t[0] = s * o * h + n * r * a),
                (t[1] = n * r * h - s * o * a),
                (t[2] = n * o * a - s * r * h),
                (t[3] = n * o * h + s * r * a))
              : "ZXY" === i
              ? ((t[0] = s * o * h - n * r * a),
                (t[1] = n * r * h + s * o * a),
                (t[2] = n * o * a + s * r * h),
                (t[3] = n * o * h - s * r * a))
              : "ZYX" === i
              ? ((t[0] = s * o * h - n * r * a),
                (t[1] = n * r * h + s * o * a),
                (t[2] = n * o * a - s * r * h),
                (t[3] = n * o * h + s * r * a))
              : "YZX" === i
              ? ((t[0] = s * o * h + n * r * a),
                (t[1] = n * r * h + s * o * a),
                (t[2] = n * o * a - s * r * h),
                (t[3] = n * o * h - s * r * a))
              : "XZY" === i &&
                ((t[0] = s * o * h - n * r * a),
                (t[1] = n * r * h - s * o * a),
                (t[2] = n * o * a + s * r * h),
                (t[3] = n * o * h + s * r * a));
          })(this, t, t.order),
          this
        );
      }
      fromAxisAngle(t, e) {
        return (
          (function (t, e, i) {
            i *= 0.5;
            let s = Math.sin(i);
            (t[0] = s * e[0]),
              (t[1] = s * e[1]),
              (t[2] = s * e[2]),
              (t[3] = Math.cos(i));
          })(this, t, e),
          this
        );
      }
      slerp(t, e) {
        return (
          (function (t, e, i, s) {
            let n,
              r,
              o,
              a,
              h,
              c = e[0],
              u = e[1],
              l = e[2],
              d = e[3],
              f = i[0],
              m = i[1],
              p = i[2],
              g = i[3];
            (r = c * f + u * m + l * p + d * g),
              r < 0 && ((r = -r), (f = -f), (m = -m), (p = -p), (g = -g)),
              1 - r > 1e-6
                ? ((n = Math.acos(r)),
                  (o = Math.sin(n)),
                  (a = Math.sin((1 - s) * n) / o),
                  (h = Math.sin(s * n) / o))
                : ((a = 1 - s), (h = s)),
              (t[0] = a * c + h * f),
              (t[1] = a * u + h * m),
              (t[2] = a * l + h * p),
              (t[3] = a * d + h * g);
          })(this, this, t, e),
          this
        );
      }
      fromArray(t, e = 0) {
        return (
          (this[0] = t[e]),
          (this[1] = t[e + 1]),
          (this[2] = t[e + 2]),
          (this[3] = t[e + 3]),
          this
        );
      }
      toArray(t = [], e = 0) {
        return (
          (t[e] = this[0]),
          (t[e + 1] = this[1]),
          (t[e + 2] = this[2]),
          (t[e + 3] = this[3]),
          t
        );
      }
    }
    function $(t, e, i) {
      let s = e[0],
        n = e[1],
        r = e[2],
        o = e[3],
        a = e[4],
        h = e[5],
        c = e[6],
        u = e[7],
        l = e[8],
        d = e[9],
        f = e[10],
        m = e[11],
        p = e[12],
        g = e[13],
        x = e[14],
        v = e[15],
        y = i[0],
        w = i[1],
        _ = i[2],
        b = i[3];
      return (
        (t[0] = y * s + w * a + _ * l + b * p),
        (t[1] = y * n + w * h + _ * d + b * g),
        (t[2] = y * r + w * c + _ * f + b * x),
        (t[3] = y * o + w * u + _ * m + b * v),
        (y = i[4]),
        (w = i[5]),
        (_ = i[6]),
        (b = i[7]),
        (t[4] = y * s + w * a + _ * l + b * p),
        (t[5] = y * n + w * h + _ * d + b * g),
        (t[6] = y * r + w * c + _ * f + b * x),
        (t[7] = y * o + w * u + _ * m + b * v),
        (y = i[8]),
        (w = i[9]),
        (_ = i[10]),
        (b = i[11]),
        (t[8] = y * s + w * a + _ * l + b * p),
        (t[9] = y * n + w * h + _ * d + b * g),
        (t[10] = y * r + w * c + _ * f + b * x),
        (t[11] = y * o + w * u + _ * m + b * v),
        (y = i[12]),
        (w = i[13]),
        (_ = i[14]),
        (b = i[15]),
        (t[12] = y * s + w * a + _ * l + b * p),
        (t[13] = y * n + w * h + _ * d + b * g),
        (t[14] = y * r + w * c + _ * f + b * x),
        (t[15] = y * o + w * u + _ * m + b * v),
        t
      );
    }
    function Z(t, e) {
      let i = e[0],
        s = e[1],
        n = e[2],
        r = e[4],
        o = e[5],
        a = e[6],
        h = e[8],
        c = e[9],
        u = e[10];
      return (
        (t[0] = Math.hypot(i, s, n)),
        (t[1] = Math.hypot(r, o, a)),
        (t[2] = Math.hypot(h, c, u)),
        t
      );
    }
    const Q = (function () {
      const t = [0, 0, 0];
      return function (e, i) {
        let s = t;
        Z(s, i);
        let n = 1 / s[0],
          r = 1 / s[1],
          o = 1 / s[2],
          a = i[0] * n,
          h = i[1] * r,
          c = i[2] * o,
          u = i[4] * n,
          l = i[5] * r,
          d = i[6] * o,
          f = i[8] * n,
          m = i[9] * r,
          p = i[10] * o,
          g = a + l + p,
          x = 0;
        return (
          g > 0
            ? ((x = 2 * Math.sqrt(g + 1)),
              (e[3] = 0.25 * x),
              (e[0] = (d - m) / x),
              (e[1] = (f - c) / x),
              (e[2] = (h - u) / x))
            : a > l && a > p
            ? ((x = 2 * Math.sqrt(1 + a - l - p)),
              (e[3] = (d - m) / x),
              (e[0] = 0.25 * x),
              (e[1] = (h + u) / x),
              (e[2] = (f + c) / x))
            : l > p
            ? ((x = 2 * Math.sqrt(1 + l - a - p)),
              (e[3] = (f - c) / x),
              (e[0] = (h + u) / x),
              (e[1] = 0.25 * x),
              (e[2] = (d + m) / x))
            : ((x = 2 * Math.sqrt(1 + p - a - l)),
              (e[3] = (h - u) / x),
              (e[0] = (f + c) / x),
              (e[1] = (d + m) / x),
              (e[2] = 0.25 * x)),
          e
        );
      };
    })();
    class K extends Array {
      constructor(
        t = 1,
        e = 0,
        i = 0,
        s = 0,
        n = 0,
        r = 1,
        o = 0,
        a = 0,
        h = 0,
        c = 0,
        u = 1,
        l = 0,
        d = 0,
        f = 0,
        m = 0,
        p = 1
      ) {
        return super(t, e, i, s, n, r, o, a, h, c, u, l, d, f, m, p), this;
      }
      get x() {
        return this[12];
      }
      get y() {
        return this[13];
      }
      get z() {
        return this[14];
      }
      get w() {
        return this[15];
      }
      set x(t) {
        this[12] = t;
      }
      set y(t) {
        this[13] = t;
      }
      set z(t) {
        this[14] = t;
      }
      set w(t) {
        this[15] = t;
      }
      set(t, e, i, s, n, r, o, a, h, c, u, l, d, f, m, p) {
        return t.length
          ? this.copy(t)
          : ((function (t, e, i, s, n, r, o, a, h, c, u, l, d, f, m, p, g) {
              (t[0] = e),
                (t[1] = i),
                (t[2] = s),
                (t[3] = n),
                (t[4] = r),
                (t[5] = o),
                (t[6] = a),
                (t[7] = h),
                (t[8] = c),
                (t[9] = u),
                (t[10] = l),
                (t[11] = d),
                (t[12] = f),
                (t[13] = m),
                (t[14] = p),
                (t[15] = g);
            })(this, t, e, i, s, n, r, o, a, h, c, u, l, d, f, m, p),
            this);
      }
      translate(t, e = this) {
        return (
          (function (t, e, i) {
            let s,
              n,
              r,
              o,
              a,
              h,
              c,
              u,
              l,
              d,
              f,
              m,
              p = i[0],
              g = i[1],
              x = i[2];
            e === t
              ? ((t[12] = e[0] * p + e[4] * g + e[8] * x + e[12]),
                (t[13] = e[1] * p + e[5] * g + e[9] * x + e[13]),
                (t[14] = e[2] * p + e[6] * g + e[10] * x + e[14]),
                (t[15] = e[3] * p + e[7] * g + e[11] * x + e[15]))
              : ((s = e[0]),
                (n = e[1]),
                (r = e[2]),
                (o = e[3]),
                (a = e[4]),
                (h = e[5]),
                (c = e[6]),
                (u = e[7]),
                (l = e[8]),
                (d = e[9]),
                (f = e[10]),
                (m = e[11]),
                (t[0] = s),
                (t[1] = n),
                (t[2] = r),
                (t[3] = o),
                (t[4] = a),
                (t[5] = h),
                (t[6] = c),
                (t[7] = u),
                (t[8] = l),
                (t[9] = d),
                (t[10] = f),
                (t[11] = m),
                (t[12] = s * p + a * g + l * x + e[12]),
                (t[13] = n * p + h * g + d * x + e[13]),
                (t[14] = r * p + c * g + f * x + e[14]),
                (t[15] = o * p + u * g + m * x + e[15]));
          })(this, e, t),
          this
        );
      }
      rotate(t, e, i = this) {
        return (
          (function (t, e, i, s) {
            let n,
              r,
              o,
              a,
              h,
              c,
              u,
              l,
              d,
              f,
              m,
              p,
              g,
              x,
              v,
              y,
              w,
              _,
              b,
              M,
              A,
              T,
              E,
              O,
              C = s[0],
              S = s[1],
              P = s[2],
              F = Math.hypot(C, S, P);
            Math.abs(F) < 1e-6 ||
              ((F = 1 / F),
              (C *= F),
              (S *= F),
              (P *= F),
              (n = Math.sin(i)),
              (r = Math.cos(i)),
              (o = 1 - r),
              (a = e[0]),
              (h = e[1]),
              (c = e[2]),
              (u = e[3]),
              (l = e[4]),
              (d = e[5]),
              (f = e[6]),
              (m = e[7]),
              (p = e[8]),
              (g = e[9]),
              (x = e[10]),
              (v = e[11]),
              (y = C * C * o + r),
              (w = S * C * o + P * n),
              (_ = P * C * o - S * n),
              (b = C * S * o - P * n),
              (M = S * S * o + r),
              (A = P * S * o + C * n),
              (T = C * P * o + S * n),
              (E = S * P * o - C * n),
              (O = P * P * o + r),
              (t[0] = a * y + l * w + p * _),
              (t[1] = h * y + d * w + g * _),
              (t[2] = c * y + f * w + x * _),
              (t[3] = u * y + m * w + v * _),
              (t[4] = a * b + l * M + p * A),
              (t[5] = h * b + d * M + g * A),
              (t[6] = c * b + f * M + x * A),
              (t[7] = u * b + m * M + v * A),
              (t[8] = a * T + l * E + p * O),
              (t[9] = h * T + d * E + g * O),
              (t[10] = c * T + f * E + x * O),
              (t[11] = u * T + m * E + v * O),
              e !== t &&
                ((t[12] = e[12]),
                (t[13] = e[13]),
                (t[14] = e[14]),
                (t[15] = e[15])));
          })(this, i, t, e),
          this
        );
      }
      scale(t, e = this) {
        return (
          (function (t, e, i) {
            let s = i[0],
              n = i[1],
              r = i[2];
            (t[0] = e[0] * s),
              (t[1] = e[1] * s),
              (t[2] = e[2] * s),
              (t[3] = e[3] * s),
              (t[4] = e[4] * n),
              (t[5] = e[5] * n),
              (t[6] = e[6] * n),
              (t[7] = e[7] * n),
              (t[8] = e[8] * r),
              (t[9] = e[9] * r),
              (t[10] = e[10] * r),
              (t[11] = e[11] * r),
              (t[12] = e[12]),
              (t[13] = e[13]),
              (t[14] = e[14]),
              (t[15] = e[15]);
          })(this, e, "number" == typeof t ? [t, t, t] : t),
          this
        );
      }
      multiply(t, e) {
        return e ? $(this, t, e) : $(this, this, t), this;
      }
      identity() {
        var t;
        return (
          ((t = this)[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = 1),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = 1),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          this
        );
      }
      copy(t) {
        var e, i;
        return (
          (i = t),
          ((e = this)[0] = i[0]),
          (e[1] = i[1]),
          (e[2] = i[2]),
          (e[3] = i[3]),
          (e[4] = i[4]),
          (e[5] = i[5]),
          (e[6] = i[6]),
          (e[7] = i[7]),
          (e[8] = i[8]),
          (e[9] = i[9]),
          (e[10] = i[10]),
          (e[11] = i[11]),
          (e[12] = i[12]),
          (e[13] = i[13]),
          (e[14] = i[14]),
          (e[15] = i[15]),
          this
        );
      }
      fromPerspective({ fov: t, aspect: e, near: i, far: s } = {}) {
        return (
          (function (t, e, i, s, n) {
            let r = 1 / Math.tan(e / 2),
              o = 1 / (s - n);
            (t[0] = r / i),
              (t[1] = 0),
              (t[2] = 0),
              (t[3] = 0),
              (t[4] = 0),
              (t[5] = r),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 0),
              (t[9] = 0),
              (t[10] = (n + s) * o),
              (t[11] = -1),
              (t[12] = 0),
              (t[13] = 0),
              (t[14] = 2 * n * s * o),
              (t[15] = 0);
          })(this, t, e, i, s),
          this
        );
      }
      fromOrthogonal({
        left: t,
        right: e,
        bottom: i,
        top: s,
        near: n,
        far: r,
      }) {
        return (
          (function (t, e, i, s, n, r, o) {
            let a = 1 / (e - i),
              h = 1 / (s - n),
              c = 1 / (r - o);
            (t[0] = -2 * a),
              (t[1] = 0),
              (t[2] = 0),
              (t[3] = 0),
              (t[4] = 0),
              (t[5] = -2 * h),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 0),
              (t[9] = 0),
              (t[10] = 2 * c),
              (t[11] = 0),
              (t[12] = (e + i) * a),
              (t[13] = (n + s) * h),
              (t[14] = (o + r) * c),
              (t[15] = 1);
          })(this, t, e, i, s, n, r),
          this
        );
      }
      fromQuaternion(t) {
        return (
          (function (t, e) {
            let i = e[0],
              s = e[1],
              n = e[2],
              r = e[3],
              o = i + i,
              a = s + s,
              h = n + n,
              c = i * o,
              u = s * o,
              l = s * a,
              d = n * o,
              f = n * a,
              m = n * h,
              p = r * o,
              g = r * a,
              x = r * h;
            (t[0] = 1 - l - m),
              (t[1] = u + x),
              (t[2] = d - g),
              (t[3] = 0),
              (t[4] = u - x),
              (t[5] = 1 - c - m),
              (t[6] = f + p),
              (t[7] = 0),
              (t[8] = d + g),
              (t[9] = f - p),
              (t[10] = 1 - c - l),
              (t[11] = 0),
              (t[12] = 0),
              (t[13] = 0),
              (t[14] = 0),
              (t[15] = 1);
          })(this, t),
          this
        );
      }
      setPosition(t) {
        return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
      }
      inverse(t = this) {
        return (
          (function (t, e) {
            let i = e[0],
              s = e[1],
              n = e[2],
              r = e[3],
              o = e[4],
              a = e[5],
              h = e[6],
              c = e[7],
              u = e[8],
              l = e[9],
              d = e[10],
              f = e[11],
              m = e[12],
              p = e[13],
              g = e[14],
              x = e[15],
              v = i * a - s * o,
              y = i * h - n * o,
              w = i * c - r * o,
              _ = s * h - n * a,
              b = s * c - r * a,
              M = n * c - r * h,
              A = u * p - l * m,
              T = u * g - d * m,
              E = u * x - f * m,
              O = l * g - d * p,
              C = l * x - f * p,
              S = d * x - f * g,
              P = v * S - y * C + w * O + _ * E - b * T + M * A;
            P &&
              ((P = 1 / P),
              (t[0] = (a * S - h * C + c * O) * P),
              (t[1] = (n * C - s * S - r * O) * P),
              (t[2] = (p * M - g * b + x * _) * P),
              (t[3] = (d * b - l * M - f * _) * P),
              (t[4] = (h * E - o * S - c * T) * P),
              (t[5] = (i * S - n * E + r * T) * P),
              (t[6] = (g * w - m * M - x * y) * P),
              (t[7] = (u * M - d * w + f * y) * P),
              (t[8] = (o * C - a * E + c * A) * P),
              (t[9] = (s * E - i * C - r * A) * P),
              (t[10] = (m * b - p * w + x * v) * P),
              (t[11] = (l * w - u * b - f * v) * P),
              (t[12] = (a * T - o * O - h * A) * P),
              (t[13] = (i * O - s * T + n * A) * P),
              (t[14] = (p * y - m * _ - g * v) * P),
              (t[15] = (u * _ - l * y + d * v) * P));
          })(this, t),
          this
        );
      }
      compose(t, e, i) {
        return (
          (function (t, e, i, s) {
            let n = e[0],
              r = e[1],
              o = e[2],
              a = e[3],
              h = n + n,
              c = r + r,
              u = o + o,
              l = n * h,
              d = n * c,
              f = n * u,
              m = r * c,
              p = r * u,
              g = o * u,
              x = a * h,
              v = a * c,
              y = a * u,
              w = s[0],
              _ = s[1],
              b = s[2];
            (t[0] = (1 - (m + g)) * w),
              (t[1] = (d + y) * w),
              (t[2] = (f - v) * w),
              (t[3] = 0),
              (t[4] = (d - y) * _),
              (t[5] = (1 - (l + g)) * _),
              (t[6] = (p + x) * _),
              (t[7] = 0),
              (t[8] = (f + v) * b),
              (t[9] = (p - x) * b),
              (t[10] = (1 - (l + m)) * b),
              (t[11] = 0),
              (t[12] = i[0]),
              (t[13] = i[1]),
              (t[14] = i[2]),
              (t[15] = 1);
          })(this, t, e, i),
          this
        );
      }
      getRotation(t) {
        return Q(t, this), this;
      }
      getTranslation(t) {
        var e, i;
        return (
          (i = this),
          ((e = t)[0] = i[12]),
          (e[1] = i[13]),
          (e[2] = i[14]),
          this
        );
      }
      getScaling(t) {
        return Z(t, this), this;
      }
      getMaxScaleOnAxis() {
        return (function (t) {
          let e = t[0],
            i = t[1],
            s = t[2],
            n = t[4],
            r = t[5],
            o = t[6],
            a = t[8],
            h = t[9],
            c = t[10];
          const u = e * e + i * i + s * s,
            l = n * n + r * r + o * o,
            d = a * a + h * h + c * c;
          return Math.sqrt(Math.max(u, l, d));
        })(this);
      }
      lookAt(t, e, i) {
        return (
          (function (t, e, i, s) {
            let n = e[0],
              r = e[1],
              o = e[2],
              a = s[0],
              h = s[1],
              c = s[2],
              u = n - i[0],
              l = r - i[1],
              d = o - i[2],
              f = u * u + l * l + d * d;
            0 === f
              ? (d = 1)
              : ((f = 1 / Math.sqrt(f)), (u *= f), (l *= f), (d *= f));
            let m = h * d - c * l,
              p = c * u - a * d,
              g = a * l - h * u;
            (f = m * m + p * p + g * g),
              0 === f &&
                (c ? (a += 1e-6) : h ? (c += 1e-6) : (h += 1e-6),
                (m = h * d - c * l),
                (p = c * u - a * d),
                (g = a * l - h * u),
                (f = m * m + p * p + g * g)),
              (f = 1 / Math.sqrt(f)),
              (m *= f),
              (p *= f),
              (g *= f),
              (t[0] = m),
              (t[1] = p),
              (t[2] = g),
              (t[3] = 0),
              (t[4] = l * g - d * p),
              (t[5] = d * m - u * g),
              (t[6] = u * p - l * m),
              (t[7] = 0),
              (t[8] = u),
              (t[9] = l),
              (t[10] = d),
              (t[11] = 0),
              (t[12] = n),
              (t[13] = r),
              (t[14] = o),
              (t[15] = 1);
          })(this, t, e, i),
          this
        );
      }
      determinant() {
        return (function (t) {
          let e = t[0],
            i = t[1],
            s = t[2],
            n = t[3],
            r = t[4],
            o = t[5],
            a = t[6],
            h = t[7],
            c = t[8],
            u = t[9],
            l = t[10],
            d = t[11],
            f = t[12],
            m = t[13],
            p = t[14],
            g = t[15];
          return (
            (e * o - i * r) * (l * g - d * p) -
            (e * a - s * r) * (u * g - d * m) +
            (e * h - n * r) * (u * p - l * m) +
            (i * a - s * o) * (c * g - d * f) -
            (i * h - n * o) * (c * p - l * f) +
            (s * h - n * a) * (c * m - u * f)
          );
        })(this);
      }
      fromArray(t, e = 0) {
        return (
          (this[0] = t[e]),
          (this[1] = t[e + 1]),
          (this[2] = t[e + 2]),
          (this[3] = t[e + 3]),
          (this[4] = t[e + 4]),
          (this[5] = t[e + 5]),
          (this[6] = t[e + 6]),
          (this[7] = t[e + 7]),
          (this[8] = t[e + 8]),
          (this[9] = t[e + 9]),
          (this[10] = t[e + 10]),
          (this[11] = t[e + 11]),
          (this[12] = t[e + 12]),
          (this[13] = t[e + 13]),
          (this[14] = t[e + 14]),
          (this[15] = t[e + 15]),
          this
        );
      }
      toArray(t = [], e = 0) {
        return (
          (t[e] = this[0]),
          (t[e + 1] = this[1]),
          (t[e + 2] = this[2]),
          (t[e + 3] = this[3]),
          (t[e + 4] = this[4]),
          (t[e + 5] = this[5]),
          (t[e + 6] = this[6]),
          (t[e + 7] = this[7]),
          (t[e + 8] = this[8]),
          (t[e + 9] = this[9]),
          (t[e + 10] = this[10]),
          (t[e + 11] = this[11]),
          (t[e + 12] = this[12]),
          (t[e + 13] = this[13]),
          (t[e + 14] = this[14]),
          (t[e + 15] = this[15]),
          t
        );
      }
    }
    const J = new K();
    class tt extends Array {
      constructor(t = 0, e = t, i = t, s = "YXZ") {
        return (
          super(t, e, i), (this.order = s), (this.onChange = () => {}), this
        );
      }
      get x() {
        return this[0];
      }
      get y() {
        return this[1];
      }
      get z() {
        return this[2];
      }
      set x(t) {
        (this[0] = t), this.onChange();
      }
      set y(t) {
        (this[1] = t), this.onChange();
      }
      set z(t) {
        (this[2] = t), this.onChange();
      }
      set(t, e = t, i = t) {
        return t.length
          ? this.copy(t)
          : ((this[0] = t),
            (this[1] = e),
            (this[2] = i),
            this.onChange(),
            this);
      }
      copy(t) {
        return (
          (this[0] = t[0]),
          (this[1] = t[1]),
          (this[2] = t[2]),
          this.onChange(),
          this
        );
      }
      reorder(t) {
        return (this.order = t), this.onChange(), this;
      }
      fromRotationMatrix(t, e = this.order) {
        return (
          (function (t, e, i = "YXZ") {
            "XYZ" === i
              ? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
                Math.abs(e[8]) < 0.99999
                  ? ((t[0] = Math.atan2(-e[9], e[10])),
                    (t[2] = Math.atan2(-e[4], e[0])))
                  : ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
              : "YXZ" === i
              ? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
                Math.abs(e[9]) < 0.99999
                  ? ((t[1] = Math.atan2(e[8], e[10])),
                    (t[2] = Math.atan2(e[1], e[5])))
                  : ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
              : "ZXY" === i
              ? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
                Math.abs(e[6]) < 0.99999
                  ? ((t[1] = Math.atan2(-e[2], e[10])),
                    (t[2] = Math.atan2(-e[4], e[5])))
                  : ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
              : "ZYX" === i
              ? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
                Math.abs(e[2]) < 0.99999
                  ? ((t[0] = Math.atan2(e[6], e[10])),
                    (t[2] = Math.atan2(e[1], e[0])))
                  : ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
              : "YZX" === i
              ? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
                Math.abs(e[1]) < 0.99999
                  ? ((t[0] = Math.atan2(-e[9], e[5])),
                    (t[1] = Math.atan2(-e[2], e[0])))
                  : ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
              : "XZY" === i &&
                ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
                Math.abs(e[4]) < 0.99999
                  ? ((t[0] = Math.atan2(e[6], e[5])),
                    (t[1] = Math.atan2(e[8], e[0])))
                  : ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0)));
          })(this, t, e),
          this
        );
      }
      fromQuaternion(t, e = this.order) {
        return J.fromQuaternion(t), this.fromRotationMatrix(J, e);
      }
    }
    class et {
      constructor() {
        (this.parent = null),
          (this.children = []),
          (this.visible = !0),
          (this.matrix = new K()),
          (this.worldMatrix = new K()),
          (this.matrixAutoUpdate = !0),
          (this.position = new I()),
          (this.quaternion = new H()),
          (this.scale = new I(1)),
          (this.rotation = new tt()),
          (this.up = new I(0, 1, 0)),
          (this.rotation.onChange = () =>
            this.quaternion.fromEuler(this.rotation)),
          (this.quaternion.onChange = () =>
            this.rotation.fromQuaternion(this.quaternion));
      }
      setParent(t, e = !0) {
        this.parent && t !== this.parent && this.parent.removeChild(this, !1),
          (this.parent = t),
          e && t && t.addChild(this, !1);
      }
      addChild(t, e = !0) {
        ~this.children.indexOf(t) || this.children.push(t),
          e && t.setParent(this, !1);
      }
      removeChild(t, e = !0) {
        ~this.children.indexOf(t) &&
          this.children.splice(this.children.indexOf(t), 1),
          e && t.setParent(null, !1);
      }
      updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
          (this.worldMatrixNeedsUpdate || t) &&
            (null === this.parent
              ? this.worldMatrix.copy(this.matrix)
              : this.worldMatrix.multiply(
                  this.parent.worldMatrix,
                  this.matrix
                ),
            (this.worldMatrixNeedsUpdate = !1),
            (t = !0));
        for (let e = 0, i = this.children.length; e < i; e++)
          this.children[e].updateMatrixWorld(t);
      }
      updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale),
          (this.worldMatrixNeedsUpdate = !0);
      }
      traverse(t) {
        if (!t(this))
          for (let e = 0, i = this.children.length; e < i; e++)
            this.children[e].traverse(t);
      }
      decompose() {
        this.matrix.getTranslation(this.position),
          this.matrix.getRotation(this.quaternion),
          this.matrix.getScaling(this.scale),
          this.rotation.fromQuaternion(this.quaternion);
      }
      lookAt(t, e = !1) {
        e
          ? this.matrix.lookAt(this.position, t, this.up)
          : this.matrix.lookAt(t, this.position, this.up),
          this.matrix.getRotation(this.quaternion),
          this.rotation.fromQuaternion(this.quaternion);
      }
    }
    const it = new K(),
      st = new I(),
      nt = new I();
    class rt extends et {
      constructor(
        t,
        {
          near: e = 0.1,
          far: i = 100,
          fov: s = 45,
          aspect: n = 1,
          left: r,
          right: o,
          bottom: a,
          top: h,
          zoom: c = 1,
        } = {}
      ) {
        super(),
          Object.assign(this, {
            near: e,
            far: i,
            fov: s,
            aspect: n,
            left: r,
            right: o,
            bottom: a,
            top: h,
            zoom: c,
          }),
          (this.projectionMatrix = new K()),
          (this.viewMatrix = new K()),
          (this.projectionViewMatrix = new K()),
          (this.worldPosition = new I()),
          (this.type = r || o ? "orthographic" : "perspective"),
          "orthographic" === this.type
            ? this.orthographic()
            : this.perspective();
      }
      perspective({
        near: t = this.near,
        far: e = this.far,
        fov: i = this.fov,
        aspect: s = this.aspect,
      } = {}) {
        return (
          Object.assign(this, { near: t, far: e, fov: i, aspect: s }),
          this.projectionMatrix.fromPerspective({
            fov: i * (Math.PI / 180),
            aspect: s,
            near: t,
            far: e,
          }),
          (this.type = "perspective"),
          this
        );
      }
      orthographic({
        near: t = this.near,
        far: e = this.far,
        left: i = this.left,
        right: s = this.right,
        bottom: n = this.bottom,
        top: r = this.top,
        zoom: o = this.zoom,
      } = {}) {
        return (
          Object.assign(this, {
            near: t,
            far: e,
            left: i,
            right: s,
            bottom: n,
            top: r,
            zoom: o,
          }),
          (i /= o),
          (s /= o),
          (n /= o),
          (r /= o),
          this.projectionMatrix.fromOrthogonal({
            left: i,
            right: s,
            bottom: n,
            top: r,
            near: t,
            far: e,
          }),
          (this.type = "orthographic"),
          this
        );
      }
      updateMatrixWorld() {
        return (
          super.updateMatrixWorld(),
          this.viewMatrix.inverse(this.worldMatrix),
          this.worldMatrix.getTranslation(this.worldPosition),
          this.projectionViewMatrix.multiply(
            this.projectionMatrix,
            this.viewMatrix
          ),
          this
        );
      }
      lookAt(t) {
        return super.lookAt(t, !0), this;
      }
      project(t) {
        return (
          t.applyMatrix4(this.viewMatrix),
          t.applyMatrix4(this.projectionMatrix),
          this
        );
      }
      unproject(t) {
        return (
          t.applyMatrix4(it.inverse(this.projectionMatrix)),
          t.applyMatrix4(this.worldMatrix),
          this
        );
      }
      updateFrustum() {
        this.frustum ||
          (this.frustum = [
            new I(),
            new I(),
            new I(),
            new I(),
            new I(),
            new I(),
          ]);
        const t = this.projectionViewMatrix;
        (this.frustum[0].set(
          t[3] - t[0],
          t[7] - t[4],
          t[11] - t[8]
        ).constant = t[15] - t[12]),
          (this.frustum[1].set(
            t[3] + t[0],
            t[7] + t[4],
            t[11] + t[8]
          ).constant = t[15] + t[12]),
          (this.frustum[2].set(
            t[3] + t[1],
            t[7] + t[5],
            t[11] + t[9]
          ).constant = t[15] + t[13]),
          (this.frustum[3].set(
            t[3] - t[1],
            t[7] - t[5],
            t[11] - t[9]
          ).constant = t[15] - t[13]),
          (this.frustum[4].set(
            t[3] - t[2],
            t[7] - t[6],
            t[11] - t[10]
          ).constant = t[15] - t[14]),
          (this.frustum[5].set(
            t[3] + t[2],
            t[7] + t[6],
            t[11] + t[10]
          ).constant = t[15] + t[14]);
        for (let t = 0; t < 6; t++) {
          const e = 1 / this.frustum[t].distance();
          this.frustum[t].multiply(e), (this.frustum[t].constant *= e);
        }
      }
      frustumIntersectsMesh(t) {
        if (!t.geometry.attributes.position) return !0;
        if (
          ((t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0) ||
            t.geometry.computeBoundingSphere(),
          !t.geometry.bounds)
        )
          return !0;
        const e = st;
        e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
        const i =
          t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(e, i);
      }
      frustumIntersectsSphere(t, e) {
        const i = nt;
        for (let s = 0; s < 6; s++) {
          const n = this.frustum[s];
          if (i.copy(n).dot(t) + n.constant < -e) return !1;
        }
        return !0;
      }
    }
    const ot = new Uint8Array(4);
    function at(t) {
      return 0 == (t & (t - 1));
    }
    let ht = 1;
    class ct {
      constructor(
        t,
        {
          image: e,
          target: i = t.TEXTURE_2D,
          type: s = t.UNSIGNED_BYTE,
          format: n = t.RGBA,
          internalFormat: r = n,
          wrapS: o = t.CLAMP_TO_EDGE,
          wrapT: a = t.CLAMP_TO_EDGE,
          generateMipmaps: h = !0,
          minFilter: c = h ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
          magFilter: u = t.LINEAR,
          premultiplyAlpha: l = !1,
          unpackAlignment: d = 4,
          flipY: f = i == t.TEXTURE_2D,
          anisotropy: m = 0,
          level: p = 0,
          width: g,
          height: x = g,
        } = {}
      ) {
        (this.gl = t),
          (this.id = ht++),
          (this.image = e),
          (this.target = i),
          (this.type = s),
          (this.format = n),
          (this.internalFormat = r),
          (this.minFilter = c),
          (this.magFilter = u),
          (this.wrapS = o),
          (this.wrapT = a),
          (this.generateMipmaps = h),
          (this.premultiplyAlpha = l),
          (this.unpackAlignment = d),
          (this.flipY = f),
          (this.anisotropy = Math.min(
            m,
            this.gl.renderer.parameters.maxAnisotropy
          )),
          (this.level = p),
          (this.width = g),
          (this.height = x),
          (this.texture = this.gl.createTexture()),
          (this.store = { image: null }),
          (this.glState = this.gl.renderer.state),
          (this.state = {}),
          (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
          (this.state.magFilter = this.gl.LINEAR),
          (this.state.wrapS = this.gl.REPEAT),
          (this.state.wrapT = this.gl.REPEAT),
          (this.state.anisotropy = 0);
      }
      bind() {
        this.glState.textureUnits[this.glState.activeTextureUnit] !==
          this.id &&
          (this.gl.bindTexture(this.target, this.texture),
          (this.glState.textureUnits[this.glState.activeTextureUnit] =
            this.id));
      }
      update(t = 0) {
        const e = !(this.image === this.store.image && !this.needsUpdate);
        if (
          ((e || this.glState.textureUnits[t] !== this.id) &&
            (this.gl.renderer.activeTexture(t), this.bind()),
          e)
        ) {
          if (
            ((this.needsUpdate = !1),
            this.flipY !== this.glState.flipY &&
              (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
              (this.glState.flipY = this.flipY)),
            this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
              (this.gl.pixelStorei(
                this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                this.premultiplyAlpha
              ),
              (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
            this.unpackAlignment !== this.glState.unpackAlignment &&
              (this.gl.pixelStorei(
                this.gl.UNPACK_ALIGNMENT,
                this.unpackAlignment
              ),
              (this.glState.unpackAlignment = this.unpackAlignment)),
            this.minFilter !== this.state.minFilter &&
              (this.gl.texParameteri(
                this.target,
                this.gl.TEXTURE_MIN_FILTER,
                this.minFilter
              ),
              (this.state.minFilter = this.minFilter)),
            this.magFilter !== this.state.magFilter &&
              (this.gl.texParameteri(
                this.target,
                this.gl.TEXTURE_MAG_FILTER,
                this.magFilter
              ),
              (this.state.magFilter = this.magFilter)),
            this.wrapS !== this.state.wrapS &&
              (this.gl.texParameteri(
                this.target,
                this.gl.TEXTURE_WRAP_S,
                this.wrapS
              ),
              (this.state.wrapS = this.wrapS)),
            this.wrapT !== this.state.wrapT &&
              (this.gl.texParameteri(
                this.target,
                this.gl.TEXTURE_WRAP_T,
                this.wrapT
              ),
              (this.state.wrapT = this.wrapT)),
            this.anisotropy &&
              this.anisotropy !== this.state.anisotropy &&
              (this.gl.texParameterf(
                this.target,
                this.gl.renderer.getExtension(
                  "EXT_texture_filter_anisotropic"
                ).TEXTURE_MAX_ANISOTROPY_EXT,
                this.anisotropy
              ),
              (this.state.anisotropy = this.anisotropy)),
            this.image)
          ) {
            if (
              (this.image.width &&
                ((this.width = this.image.width),
                (this.height = this.image.height)),
              this.target === this.gl.TEXTURE_CUBE_MAP)
            )
              for (let t = 0; t < 6; t++)
                this.gl.texImage2D(
                  this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  this.level,
                  this.internalFormat,
                  this.format,
                  this.type,
                  this.image[t]
                );
            else if (ArrayBuffer.isView(this.image))
              this.gl.texImage2D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                0,
                this.format,
                this.type,
                this.image
              );
            else if (this.image.isCompressedTexture)
              for (let t = 0; t < this.image.length; t++)
                this.gl.compressedTexImage2D(
                  this.target,
                  t,
                  this.internalFormat,
                  this.image[t].width,
                  this.image[t].height,
                  0,
                  this.image[t].data
                );
            else
              this.gl.texImage2D(
                this.target,
                this.level,
                this.internalFormat,
                this.format,
                this.type,
                this.image
              );
            this.generateMipmaps &&
              (this.gl.renderer.isWebgl2 ||
              (at(this.image.width) && at(this.image.height))
                ? this.gl.generateMipmap(this.target)
                : ((this.generateMipmaps = !1),
                  (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
                  (this.minFilter = this.gl.LINEAR))),
              this.onUpdate && this.onUpdate();
          } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
            for (let t = 0; t < 6; t++)
              this.gl.texImage2D(
                this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                0,
                this.gl.RGBA,
                1,
                1,
                0,
                this.gl.RGBA,
                this.gl.UNSIGNED_BYTE,
                ot
              );
          else
            this.width
              ? this.gl.texImage2D(
                  this.target,
                  this.level,
                  this.internalFormat,
                  this.width,
                  this.height,
                  0,
                  this.format,
                  this.type,
                  null
                )
              : this.gl.texImage2D(
                  this.target,
                  0,
                  this.gl.RGBA,
                  1,
                  1,
                  0,
                  this.gl.RGBA,
                  this.gl.UNSIGNED_BYTE,
                  ot
                );
          this.store.image = this.image;
        }
      }
    }
    class ut {
      constructor(
        t,
        {
          width: e = t.canvas.width,
          height: i = t.canvas.height,
          target: s = t.FRAMEBUFFER,
          color: n = 1,
          depth: r = !0,
          stencil: o = !1,
          depthTexture: a = !1,
          wrapS: h = t.CLAMP_TO_EDGE,
          wrapT: c = t.CLAMP_TO_EDGE,
          minFilter: u = t.LINEAR,
          magFilter: l = u,
          type: d = t.UNSIGNED_BYTE,
          format: f = t.RGBA,
          internalFormat: m = f,
          unpackAlignment: p,
          premultiplyAlpha: g,
        } = {}
      ) {
        (this.gl = t),
          (this.width = e),
          (this.height = i),
          (this.depth = r),
          (this.buffer = this.gl.createFramebuffer()),
          (this.target = s),
          this.gl.bindFramebuffer(this.target, this.buffer),
          (this.textures = []);
        const x = [];
        for (let s = 0; s < n; s++)
          this.textures.push(
            new ct(t, {
              width: e,
              height: i,
              wrapS: h,
              wrapT: c,
              minFilter: u,
              magFilter: l,
              type: d,
              format: f,
              internalFormat: m,
              unpackAlignment: p,
              premultiplyAlpha: g,
              flipY: !1,
              generateMipmaps: !1,
            })
          ),
            this.textures[s].update(),
            this.gl.framebufferTexture2D(
              this.target,
              this.gl.COLOR_ATTACHMENT0 + s,
              this.gl.TEXTURE_2D,
              this.textures[s].texture,
              0
            ),
            x.push(this.gl.COLOR_ATTACHMENT0 + s);
        x.length > 1 && this.gl.renderer.drawBuffers(x),
          (this.texture = this.textures[0]),
          a &&
          (this.gl.renderer.isWebgl2 ||
            this.gl.renderer.getExtension("WEBGL_depth_texture"))
            ? ((this.depthTexture = new ct(t, {
                width: e,
                height: i,
                minFilter: this.gl.NEAREST,
                magFilter: this.gl.NEAREST,
                format: this.gl.DEPTH_COMPONENT,
                internalFormat: t.renderer.isWebgl2
                  ? this.gl.DEPTH_COMPONENT16
                  : this.gl.DEPTH_COMPONENT,
                type: this.gl.UNSIGNED_INT,
              })),
              this.depthTexture.update(),
              this.gl.framebufferTexture2D(
                this.target,
                this.gl.DEPTH_ATTACHMENT,
                this.gl.TEXTURE_2D,
                this.depthTexture.texture,
                0
              ))
            : (r &&
                !o &&
                ((this.depthBuffer = this.gl.createRenderbuffer()),
                this.gl.bindRenderbuffer(
                  this.gl.RENDERBUFFER,
                  this.depthBuffer
                ),
                this.gl.renderbufferStorage(
                  this.gl.RENDERBUFFER,
                  this.gl.DEPTH_COMPONENT16,
                  e,
                  i
                ),
                this.gl.framebufferRenderbuffer(
                  this.target,
                  this.gl.DEPTH_ATTACHMENT,
                  this.gl.RENDERBUFFER,
                  this.depthBuffer
                )),
              o &&
                !r &&
                ((this.stencilBuffer = this.gl.createRenderbuffer()),
                this.gl.bindRenderbuffer(
                  this.gl.RENDERBUFFER,
                  this.stencilBuffer
                ),
                this.gl.renderbufferStorage(
                  this.gl.RENDERBUFFER,
                  this.gl.STENCIL_INDEX8,
                  e,
                  i
                ),
                this.gl.framebufferRenderbuffer(
                  this.target,
                  this.gl.STENCIL_ATTACHMENT,
                  this.gl.RENDERBUFFER,
                  this.stencilBuffer
                )),
              r &&
                o &&
                ((this.depthStencilBuffer = this.gl.createRenderbuffer()),
                this.gl.bindRenderbuffer(
                  this.gl.RENDERBUFFER,
                  this.depthStencilBuffer
                ),
                this.gl.renderbufferStorage(
                  this.gl.RENDERBUFFER,
                  this.gl.DEPTH_STENCIL,
                  e,
                  i
                ),
                this.gl.framebufferRenderbuffer(
                  this.target,
                  this.gl.DEPTH_STENCIL_ATTACHMENT,
                  this.gl.RENDERBUFFER,
                  this.depthStencilBuffer
                ))),
          this.gl.bindFramebuffer(this.target, null);
      }
    }
    let lt = 1;
    const dt = {};
    class ft {
      constructor(
        t,
        {
          vertex: e,
          fragment: i,
          uniforms: s = {},
          transparent: n = !1,
          cullFace: r = t.BACK,
          frontFace: o = t.CCW,
          depthTest: a = !0,
          depthWrite: h = !0,
          depthFunc: c = t.LESS,
        } = {}
      ) {
        t.canvas ||
          console.error("gl not passed as fist argument to Program"),
          (this.gl = t),
          (this.uniforms = s),
          (this.id = lt++),
          e || console.warn("vertex shader not supplied"),
          i || console.warn("fragment shader not supplied"),
          (this.transparent = n),
          (this.cullFace = r),
          (this.frontFace = o),
          (this.depthTest = a),
          (this.depthWrite = h),
          (this.depthFunc = c),
          (this.blendFunc = {}),
          (this.blendEquation = {}),
          this.transparent &&
            !this.blendFunc.src &&
            (this.gl.renderer.premultipliedAlpha
              ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
              : this.setBlendFunc(
                  this.gl.SRC_ALPHA,
                  this.gl.ONE_MINUS_SRC_ALPHA
                ));
        const u = t.createShader(t.VERTEX_SHADER);
        t.shaderSource(u, e),
          t.compileShader(u),
          "" !== t.getShaderInfoLog(u) &&
            console.warn(`${t.getShaderInfoLog(u)}\nVertex Shader\n${pt(e)}`);
        const l = t.createShader(t.FRAGMENT_SHADER);
        if (
          (t.shaderSource(l, i),
          t.compileShader(l),
          "" !== t.getShaderInfoLog(l) &&
            console.warn(
              `${t.getShaderInfoLog(l)}\nFragment Shader\n${pt(i)}`
            ),
          (this.program = t.createProgram()),
          t.attachShader(this.program, u),
          t.attachShader(this.program, l),
          t.linkProgram(this.program),
          !t.getProgramParameter(this.program, t.LINK_STATUS))
        )
          return console.warn(t.getProgramInfoLog(this.program));
        t.deleteShader(u),
          t.deleteShader(l),
          (this.uniformLocations = new Map());
        let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
        for (let e = 0; e < d; e++) {
          let i = t.getActiveUniform(this.program, e);
          this.uniformLocations.set(
            i,
            t.getUniformLocation(this.program, i.name)
          );
          const s = i.name.match(/(\w+)/g);
          (i.uniformName = s[0]),
            3 === s.length
              ? ((i.isStructArray = !0),
                (i.structIndex = Number(s[1])),
                (i.structProperty = s[2]))
              : 2 === s.length &&
                isNaN(Number(s[1])) &&
                ((i.isStruct = !0), (i.structProperty = s[1]));
        }
        this.attributeLocations = new Map();
        const f = [],
          m = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
        for (let e = 0; e < m; e++) {
          const i = t.getActiveAttrib(this.program, e),
            s = t.getAttribLocation(this.program, i.name);
          (f[s] = i.name), this.attributeLocations.set(i, s);
        }
        this.attributeOrder = f.join("");
      }
      setBlendFunc(t, e, i, s) {
        (this.blendFunc.src = t),
          (this.blendFunc.dst = e),
          (this.blendFunc.srcAlpha = i),
          (this.blendFunc.dstAlpha = s),
          t && (this.transparent = !0);
      }
      setBlendEquation(t, e) {
        (this.blendEquation.modeRGB = t), (this.blendEquation.modeAlpha = e);
      }
      applyState() {
        this.depthTest
          ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
          : this.gl.renderer.disable(this.gl.DEPTH_TEST),
          this.cullFace
            ? this.gl.renderer.enable(this.gl.CULL_FACE)
            : this.gl.renderer.disable(this.gl.CULL_FACE),
          this.blendFunc.src
            ? this.gl.renderer.enable(this.gl.BLEND)
            : this.gl.renderer.disable(this.gl.BLEND),
          this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
          this.gl.renderer.setFrontFace(this.frontFace),
          this.gl.renderer.setDepthMask(this.depthWrite),
          this.gl.renderer.setDepthFunc(this.depthFunc),
          this.blendFunc.src &&
            this.gl.renderer.setBlendFunc(
              this.blendFunc.src,
              this.blendFunc.dst,
              this.blendFunc.srcAlpha,
              this.blendFunc.dstAlpha
            ),
          this.gl.renderer.setBlendEquation(
            this.blendEquation.modeRGB,
            this.blendEquation.modeAlpha
          );
      }
      use({ flipFaces: t = !1 } = {}) {
        let e = -1;
        this.gl.renderer.currentProgram === this.id ||
          (this.gl.useProgram(this.program),
          (this.gl.renderer.currentProgram = this.id)),
          this.uniformLocations.forEach((t, i) => {
            let s = i.uniformName,
              n = this.uniforms[s];
            if (
              (i.isStruct &&
                ((n = n[i.structProperty]), (s += `.${i.structProperty}`)),
              i.isStructArray &&
                ((n = n[i.structIndex][i.structProperty]),
                (s += `[${i.structIndex}].${i.structProperty}`)),
              !n)
            )
              return xt(`Active uniform ${s} has not been supplied`);
            if (n && void 0 === n.value)
              return xt(`${s} uniform is missing a value parameter`);
            if (n.value.texture)
              return (e += 1), n.value.update(e), mt(this.gl, i.type, t, e);
            if (n.value.length && n.value[0].texture) {
              const s = [];
              return (
                n.value.forEach((t) => {
                  (e += 1), t.update(e), s.push(e);
                }),
                mt(this.gl, i.type, t, s)
              );
            }
            mt(this.gl, i.type, t, n.value);
          }),
          this.applyState(),
          t &&
            this.gl.renderer.setFrontFace(
              this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
            );
      }
      remove() {
        this.gl.deleteProgram(this.program);
      }
    }
    function mt(t, e, i, s) {
      s = s.length
        ? (function (t) {
            const e = t.length,
              i = t[0].length;
            if (void 0 === i) return t;
            const s = e * i;
            let n = dt[s];
            n || (dt[s] = n = new Float32Array(s));
            for (let s = 0; s < e; s++) n.set(t[s], s * i);
            return n;
          })(s)
        : s;
      const n = t.renderer.state.uniformLocations.get(i);
      if (s.length)
        if (void 0 === n || n.length !== s.length)
          t.renderer.state.uniformLocations.set(i, s.slice(0));
        else {
          if (
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let i = 0, s = t.length; i < s; i++)
                if (t[i] !== e[i]) return !1;
              return !0;
            })(n, s)
          )
            return;
          n.set
            ? n.set(s)
            : (function (t, e) {
                for (let i = 0, s = t.length; i < s; i++) t[i] = e[i];
              })(n, s),
            t.renderer.state.uniformLocations.set(i, n);
        }
      else {
        if (n === s) return;
        t.renderer.state.uniformLocations.set(i, s);
      }
      switch (e) {
        case 5126:
          return s.length ? t.uniform1fv(i, s) : t.uniform1f(i, s);
        case 35664:
          return t.uniform2fv(i, s);
        case 35665:
          return t.uniform3fv(i, s);
        case 35666:
          return t.uniform4fv(i, s);
        case 35670:
        case 5124:
        case 35678:
        case 35680:
          return s.length ? t.uniform1iv(i, s) : t.uniform1i(i, s);
        case 35671:
        case 35667:
          return t.uniform2iv(i, s);
        case 35672:
        case 35668:
          return t.uniform3iv(i, s);
        case 35673:
        case 35669:
          return t.uniform4iv(i, s);
        case 35674:
          return t.uniformMatrix2fv(i, !1, s);
        case 35675:
          return t.uniformMatrix3fv(i, !1, s);
        case 35676:
          return t.uniformMatrix4fv(i, !1, s);
      }
    }
    function pt(t) {
      let e = t.split("\n");
      for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
      return e.join("\n");
    }
    let gt = 0;
    function xt(t) {
      gt > 100 ||
        (console.warn(t),
        gt++,
        gt > 100 &&
          console.warn("More than 100 program warnings - stopping logs."));
    }
    function vt(t, e, i) {
      let s = e[0],
        n = e[1],
        r = e[2],
        o = e[3],
        a = e[4],
        h = e[5],
        c = e[6],
        u = e[7],
        l = e[8],
        d = i[0],
        f = i[1],
        m = i[2],
        p = i[3],
        g = i[4],
        x = i[5],
        v = i[6],
        y = i[7],
        w = i[8];
      return (
        (t[0] = d * s + f * o + m * c),
        (t[1] = d * n + f * a + m * u),
        (t[2] = d * r + f * h + m * l),
        (t[3] = p * s + g * o + x * c),
        (t[4] = p * n + g * a + x * u),
        (t[5] = p * r + g * h + x * l),
        (t[6] = v * s + y * o + w * c),
        (t[7] = v * n + y * a + w * u),
        (t[8] = v * r + y * h + w * l),
        t
      );
    }
    class yt extends Array {
      constructor(
        t = 1,
        e = 0,
        i = 0,
        s = 0,
        n = 1,
        r = 0,
        o = 0,
        a = 0,
        h = 1
      ) {
        return super(t, e, i, s, n, r, o, a, h), this;
      }
      set(t, e, i, s, n, r, o, a, h) {
        return t.length
          ? this.copy(t)
          : ((function (t, e, i, s, n, r, o, a, h, c) {
              (t[0] = e),
                (t[1] = i),
                (t[2] = s),
                (t[3] = n),
                (t[4] = r),
                (t[5] = o),
                (t[6] = a),
                (t[7] = h),
                (t[8] = c);
            })(this, t, e, i, s, n, r, o, a, h),
            this);
      }
      translate(t, e = this) {
        return (
          (function (t, e, i) {
            let s = e[0],
              n = e[1],
              r = e[2],
              o = e[3],
              a = e[4],
              h = e[5],
              c = e[6],
              u = e[7],
              l = e[8],
              d = i[0],
              f = i[1];
            (t[0] = s),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a),
              (t[5] = h),
              (t[6] = d * s + f * o + c),
              (t[7] = d * n + f * a + u),
              (t[8] = d * r + f * h + l);
          })(this, e, t),
          this
        );
      }
      rotate(t, e = this) {
        return (
          (function (t, e, i) {
            let s = e[0],
              n = e[1],
              r = e[2],
              o = e[3],
              a = e[4],
              h = e[5],
              c = e[6],
              u = e[7],
              l = e[8],
              d = Math.sin(i),
              f = Math.cos(i);
            (t[0] = f * s + d * o),
              (t[1] = f * n + d * a),
              (t[2] = f * r + d * h),
              (t[3] = f * o - d * s),
              (t[4] = f * a - d * n),
              (t[5] = f * h - d * r),
              (t[6] = c),
              (t[7] = u),
              (t[8] = l);
          })(this, e, t),
          this
        );
      }
      scale(t, e = this) {
        return (
          (function (t, e, i) {
            let s = i[0],
              n = i[1];
            (t[0] = s * e[0]),
              (t[1] = s * e[1]),
              (t[2] = s * e[2]),
              (t[3] = n * e[3]),
              (t[4] = n * e[4]),
              (t[5] = n * e[5]),
              (t[6] = e[6]),
              (t[7] = e[7]),
              (t[8] = e[8]);
          })(this, e, t),
          this
        );
      }
      multiply(t, e) {
        return e ? vt(this, t, e) : vt(this, this, t), this;
      }
      identity() {
        var t;
        return (
          ((t = this)[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 1),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          this
        );
      }
      copy(t) {
        var e, i;
        return (
          (i = t),
          ((e = this)[0] = i[0]),
          (e[1] = i[1]),
          (e[2] = i[2]),
          (e[3] = i[3]),
          (e[4] = i[4]),
          (e[5] = i[5]),
          (e[6] = i[6]),
          (e[7] = i[7]),
          (e[8] = i[8]),
          this
        );
      }
      fromMatrix4(t) {
        var e, i;
        return (
          (i = t),
          ((e = this)[0] = i[0]),
          (e[1] = i[1]),
          (e[2] = i[2]),
          (e[3] = i[4]),
          (e[4] = i[5]),
          (e[5] = i[6]),
          (e[6] = i[8]),
          (e[7] = i[9]),
          (e[8] = i[10]),
          this
        );
      }
      fromQuaternion(t) {
        return (
          (function (t, e) {
            let i = e[0],
              s = e[1],
              n = e[2],
              r = e[3],
              o = i + i,
              a = s + s,
              h = n + n,
              c = i * o,
              u = s * o,
              l = s * a,
              d = n * o,
              f = n * a,
              m = n * h,
              p = r * o,
              g = r * a,
              x = r * h;
            (t[0] = 1 - l - m),
              (t[3] = u - x),
              (t[6] = d + g),
              (t[1] = u + x),
              (t[4] = 1 - c - m),
              (t[7] = f - p),
              (t[2] = d - g),
              (t[5] = f + p),
              (t[8] = 1 - c - l);
          })(this, t),
          this
        );
      }
      fromBasis(t, e, i) {
        return (
          this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this
        );
      }
      inverse(t = this) {
        return (
          (function (t, e) {
            let i = e[0],
              s = e[1],
              n = e[2],
              r = e[3],
              o = e[4],
              a = e[5],
              h = e[6],
              c = e[7],
              u = e[8],
              l = u * o - a * c,
              d = -u * r + a * h,
              f = c * r - o * h,
              m = i * l + s * d + n * f;
            m &&
              ((m = 1 / m),
              (t[0] = l * m),
              (t[1] = (-u * s + n * c) * m),
              (t[2] = (a * s - n * o) * m),
              (t[3] = d * m),
              (t[4] = (u * i - n * h) * m),
              (t[5] = (-a * i + n * r) * m),
              (t[6] = f * m),
              (t[7] = (-c * i + s * h) * m),
              (t[8] = (o * i - s * r) * m));
          })(this, t),
          this
        );
      }
      getNormalMatrix(t) {
        return (
          (function (t, e) {
            let i = e[0],
              s = e[1],
              n = e[2],
              r = e[3],
              o = e[4],
              a = e[5],
              h = e[6],
              c = e[7],
              u = e[8],
              l = e[9],
              d = e[10],
              f = e[11],
              m = e[12],
              p = e[13],
              g = e[14],
              x = e[15],
              v = i * a - s * o,
              y = i * h - n * o,
              w = i * c - r * o,
              _ = s * h - n * a,
              b = s * c - r * a,
              M = n * c - r * h,
              A = u * p - l * m,
              T = u * g - d * m,
              E = u * x - f * m,
              O = l * g - d * p,
              C = l * x - f * p,
              S = d * x - f * g,
              P = v * S - y * C + w * O + _ * E - b * T + M * A;
            P &&
              ((P = 1 / P),
              (t[0] = (a * S - h * C + c * O) * P),
              (t[1] = (h * E - o * S - c * T) * P),
              (t[2] = (o * C - a * E + c * A) * P),
              (t[3] = (n * C - s * S - r * O) * P),
              (t[4] = (i * S - n * E + r * T) * P),
              (t[5] = (s * E - i * C - r * A) * P),
              (t[6] = (p * M - g * b + x * _) * P),
              (t[7] = (g * w - m * M - x * y) * P),
              (t[8] = (m * b - p * w + x * v) * P));
          })(this, t),
          this
        );
      }
    }
    let wt = 0;
    class _t extends et {
      constructor(
        t,
        {
          geometry: e,
          program: i,
          mode: s = t.TRIANGLES,
          frustumCulled: n = !0,
          renderOrder: r = 0,
        } = {}
      ) {
        super(),
          t.canvas ||
            console.error("gl not passed as first argument to Mesh"),
          (this.gl = t),
          (this.id = wt++),
          (this.geometry = e),
          (this.program = i),
          (this.mode = s),
          (this.frustumCulled = n),
          (this.renderOrder = r),
          (this.modelViewMatrix = new K()),
          (this.normalMatrix = new yt()),
          (this.beforeRenderCallbacks = []),
          (this.afterRenderCallbacks = []);
      }
      onBeforeRender(t) {
        return this.beforeRenderCallbacks.push(t), this;
      }
      onAfterRender(t) {
        return this.afterRenderCallbacks.push(t), this;
      }
      draw({ camera: t } = {}) {
        this.beforeRenderCallbacks.forEach(
          (e) => e && e({ mesh: this, camera: t })
        ),
          t &&
            (this.program.uniforms.modelMatrix ||
              Object.assign(this.program.uniforms, {
                modelMatrix: { value: null },
                viewMatrix: { value: null },
                modelViewMatrix: { value: null },
                normalMatrix: { value: null },
                projectionMatrix: { value: null },
                cameraPosition: { value: null },
              }),
            (this.program.uniforms.projectionMatrix.value =
              t.projectionMatrix),
            (this.program.uniforms.cameraPosition.value = t.worldPosition),
            (this.program.uniforms.viewMatrix.value = t.viewMatrix),
            this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
            (this.program.uniforms.modelMatrix.value = this.worldMatrix),
            (this.program.uniforms.modelViewMatrix.value =
              this.modelViewMatrix),
            (this.program.uniforms.normalMatrix.value = this.normalMatrix));
        let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({ flipFaces: e }),
          this.geometry.draw({ mode: this.mode, program: this.program }),
          this.afterRenderCallbacks.forEach(
            (e) => e && e({ mesh: this, camera: t })
          );
      }
    }
    const bt = new I();
    let Mt = 1,
      At = 1,
      Tt = !1;
    class Et {
      constructor(t, e = {}) {
        t.canvas ||
          console.error("gl not passed as first argument to Geometry"),
          (this.gl = t),
          (this.attributes = e),
          (this.id = Mt++),
          (this.VAOs = {}),
          (this.drawRange = { start: 0, count: 0 }),
          (this.instancedCount = 0),
          this.gl.renderer.bindVertexArray(null),
          (this.gl.renderer.currentGeometry = null),
          (this.glState = this.gl.renderer.state);
        for (let t in e) this.addAttribute(t, e[t]);
      }
      addAttribute(t, e) {
        if (
          ((this.attributes[t] = e),
          (e.id = At++),
          (e.size = e.size || 1),
          (e.type =
            e.type ||
            (e.data.constructor === Float32Array
              ? this.gl.FLOAT
              : e.data.constructor === Uint16Array
              ? this.gl.UNSIGNED_SHORT
              : this.gl.UNSIGNED_INT)),
          (e.target =
            "index" === t
              ? this.gl.ELEMENT_ARRAY_BUFFER
              : this.gl.ARRAY_BUFFER),
          (e.normalized = e.normalized || !1),
          (e.stride = e.stride || 0),
          (e.offset = e.offset || 0),
          (e.count =
            e.count ||
            (e.stride
              ? e.data.byteLength / e.stride
              : e.data.length / e.size)),
          (e.divisor = e.instanced || 0),
          (e.needsUpdate = !1),
          e.buffer ||
            ((e.buffer = this.gl.createBuffer()), this.updateAttribute(e)),
          e.divisor)
        ) {
          if (
            ((this.isInstanced = !0),
            this.instancedCount &&
              this.instancedCount !== e.count * e.divisor)
          )
            return (
              console.warn(
                "geometry has multiple instanced buffers of different length"
              ),
              (this.instancedCount = Math.min(
                this.instancedCount,
                e.count * e.divisor
              ))
            );
          this.instancedCount = e.count * e.divisor;
        } else
          "index" === t
            ? (this.drawRange.count = e.count)
            : this.attributes.index ||
              (this.drawRange.count = Math.max(
                this.drawRange.count,
                e.count
              ));
      }
      updateAttribute(t) {
        this.glState.boundBuffer !== t.buffer &&
          (this.gl.bindBuffer(t.target, t.buffer),
          (this.glState.boundBuffer = t.buffer)),
          this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW),
          (t.needsUpdate = !1);
      }
      setIndex(t) {
        this.addAttribute("index", t);
      }
      setDrawRange(t, e) {
        (this.drawRange.start = t), (this.drawRange.count = e);
      }
      setInstancedCount(t) {
        this.instancedCount = t;
      }
      createVAO(t) {
        (this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray()),
          this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
          this.bindAttributes(t);
      }
      bindAttributes(t) {
        t.attributeLocations.forEach((t, { name: e, type: i }) => {
          if (!this.attributes[e])
            return void console.warn(
              `active attribute ${e} not being supplied`
            );
          const s = this.attributes[e];
          this.gl.bindBuffer(s.target, s.buffer),
            (this.glState.boundBuffer = s.buffer);
          let n = 1;
          35674 === i && (n = 2),
            35675 === i && (n = 3),
            35676 === i && (n = 4);
          const r = s.size / n,
            o = 1 === n ? 0 : n * n * n,
            a = 1 === n ? 0 : n * n;
          for (let e = 0; e < n; e++)
            this.gl.vertexAttribPointer(
              t + e,
              r,
              s.type,
              s.normalized,
              s.stride + o,
              s.offset + e * a
            ),
              this.gl.enableVertexAttribArray(t + e),
              this.gl.renderer.vertexAttribDivisor(t + e, s.divisor);
        }),
          this.attributes.index &&
            this.gl.bindBuffer(
              this.gl.ELEMENT_ARRAY_BUFFER,
              this.attributes.index.buffer
            );
      }
      draw({ program: t, mode: e = this.gl.TRIANGLES }) {
        this.gl.renderer.currentGeometry !==
          `${this.id}_${t.attributeOrder}` &&
          (this.VAOs[t.attributeOrder] || this.createVAO(t),
          this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
          (this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
          t.attributeLocations.forEach((t, { name: e }) => {
            const i = this.attributes[e];
            i.needsUpdate && this.updateAttribute(i);
          }),
          this.isInstanced
            ? this.attributes.index
              ? this.gl.renderer.drawElementsInstanced(
                  e,
                  this.drawRange.count,
                  this.attributes.index.type,
                  this.attributes.index.offset + 2 * this.drawRange.start,
                  this.instancedCount
                )
              : this.gl.renderer.drawArraysInstanced(
                  e,
                  this.drawRange.start,
                  this.drawRange.count,
                  this.instancedCount
                )
            : this.attributes.index
            ? this.gl.drawElements(
                e,
                this.drawRange.count,
                this.attributes.index.type,
                this.attributes.index.offset + 2 * this.drawRange.start
              )
            : this.gl.drawArrays(
                e,
                this.drawRange.start,
                this.drawRange.count
              );
      }
      getPositionArray() {
        const t = this.attributes.position;
        return t.data
          ? t.data
          : Tt
          ? void 0
          : (console.warn("No position buffer data found to compute bounds"),
            (Tt = !0));
      }
      computeBoundingBox(t) {
        t || (t = this.getPositionArray()),
          this.bounds ||
            (this.bounds = {
              min: new I(),
              max: new I(),
              center: new I(),
              scale: new I(),
              radius: 1 / 0,
            });
        const e = this.bounds.min,
          i = this.bounds.max,
          s = this.bounds.center,
          n = this.bounds.scale;
        e.set(1 / 0), i.set(-1 / 0);
        for (let s = 0, n = t.length; s < n; s += 3) {
          const n = t[s],
            r = t[s + 1],
            o = t[s + 2];
          (e.x = Math.min(n, e.x)),
            (e.y = Math.min(r, e.y)),
            (e.z = Math.min(o, e.z)),
            (i.x = Math.max(n, i.x)),
            (i.y = Math.max(r, i.y)),
            (i.z = Math.max(o, i.z));
        }
        n.sub(i, e), s.add(e, i).divide(2);
      }
      computeBoundingSphere(t) {
        t || (t = this.getPositionArray()),
          this.bounds || this.computeBoundingBox(t);
        let e = 0;
        for (let i = 0, s = t.length; i < s; i += 3)
          bt.fromArray(t, i),
            (e = Math.max(e, this.bounds.center.squaredDistance(bt)));
        this.bounds.radius = Math.sqrt(e);
      }
      remove() {
        this.vao && this.gl.renderer.deleteVertexArray(this.vao);
        for (let t in this.attributes)
          this.gl.deleteBuffer(this.attributes[t].buffer),
            delete this.attributes[t];
      }
    }
    class Ot extends Et {
      constructor(t, { attributes: e = {} } = {}) {
        Object.assign(e, {
          position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3]),
          },
          uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
        }),
          super(t, e);
      }
    }
    class Ct {
      constructor(
        t,
        {
          size: e = 128,
          falloff: i = 0.3,
          alpha: s = 1,
          dissipation: n = 0.98,
          type: r,
        } = {}
      ) {
        const o = this;
        (this.gl = t),
          (this.uniform = { value: null }),
          (this.mask = {
            read: null,
            write: null,
            swap: () => {
              let t = o.mask.read;
              (o.mask.read = o.mask.write),
                (o.mask.write = t),
                (o.uniform.value = o.mask.read.texture);
            },
          }),
          (function () {
            r ||
              (r =
                t.HALF_FLOAT ||
                t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES);
            let i =
              t.renderer.isWebgl2 ||
              t.renderer.extensions[
                `OES_texture_${r === t.FLOAT ? "" : "half_"}float_linear`
              ]
                ? t.LINEAR
                : t.NEAREST;
            const s = {
              width: e,
              height: e,
              type: r,
              format: t.RGBA,
              internalFormat: t.renderer.isWebgl2
                ? r === t.FLOAT
                  ? t.RGBA32F
                  : t.RGBA16F
                : t.RGBA,
              minFilter: i,
              depth: !1,
            };
            (o.mask.read = new ut(t, s)),
              (o.mask.write = new ut(t, s)),
              o.mask.swap();
          })(),
          (this.aspect = 1),
          (this.mouse = new q()),
          (this.velocity = new q()),
          (this.mesh = new _t(t, {
            geometry: new Ot(t),
            program: new ft(t, {
              vertex: St,
              fragment: Pt,
              uniforms: {
                tMap: o.uniform,
                uFalloff: { value: 0.5 * i },
                uAlpha: { value: s },
                uDissipation: { value: n },
                uAspect: { value: 1 },
                uMouse: { value: o.mouse },
                uVelocity: { value: o.velocity },
              },
              depthTest: !1,
            }),
          }));
      }
      update() {
        (this.mesh.program.uniforms.uAspect.value = this.aspect),
          this.gl.renderer.render({
            scene: this.mesh,
            target: this.mask.write,
            clear: !1,
          }),
          this.mask.swap();
      }
    }
    const St =
        "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
      Pt =
        "\n    precision highp float;\n\n    uniform sampler2D tMap;\n\n    uniform float uFalloff;\n    uniform float uAlpha;\n    uniform float uDissipation;\n    \n    uniform float uAspect;\n    uniform vec2 uMouse;\n    uniform vec2 uVelocity;\n\n    varying vec2 vUv;\n\n    void main() {\n        vec4 color = texture2D(tMap, vUv) * uDissipation;\n\n        vec2 cursor = vUv - uMouse;\n        cursor.x *= uAspect;\n\n        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));\n        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n\n        color.rgb = mix(color.rgb, stamp, vec3(falloff));\n\n        gl_FragColor = color;\n    }\n";
    class Ft {
      constructor(
        t,
        {
          width: e,
          height: i,
          dpr: s,
          wrapS: n = t.CLAMP_TO_EDGE,
          wrapT: r = t.CLAMP_TO_EDGE,
          minFilter: o = t.LINEAR,
          magFilter: a = t.LINEAR,
          geometry: h = new Ot(t),
          targetOnly: c = null,
        } = {}
      ) {
        (this.gl = t),
          (this.options = { wrapS: n, wrapT: r, minFilter: o, magFilter: a }),
          (this.passes = []),
          (this.geometry = h),
          (this.uniform = { value: null }),
          (this.targetOnly = c);
        const u = (this.fbo = {
          read: null,
          write: null,
          swap: () => {
            let t = u.read;
            (u.read = u.write), (u.write = t);
          },
        });
        this.resize({ width: e, height: i, dpr: s });
      }
      addPass({
        vertex: t = Lt,
        fragment: e = kt,
        uniforms: i = {},
        textureUniform: s = "tMap",
        enabled: n = !0,
      } = {}) {
        i[s] = { value: this.fbo.read.texture };
        const r = new ft(this.gl, { vertex: t, fragment: e, uniforms: i }),
          o = {
            mesh: new _t(this.gl, { geometry: this.geometry, program: r }),
            program: r,
            uniforms: i,
            enabled: n,
            textureUniform: s,
          };
        return this.passes.push(o), o;
      }
      resize({ width: t, height: e, dpr: i } = {}) {
        i && (this.dpr = i),
          t && ((this.width = t), (this.height = e || t)),
          (i = this.dpr || this.gl.renderer.dpr),
          (t = (this.width || this.gl.renderer.width) * i),
          (e = (this.height || this.gl.renderer.height) * i),
          (this.options.width = t),
          (this.options.height = e),
          (this.fbo.read = new ut(this.gl, this.options)),
          (this.fbo.write = new ut(this.gl, this.options));
      }
      render({
        scene: t,
        camera: e,
        target: i = null,
        update: s = !0,
        sort: n = !0,
        frustumCull: r = !0,
      }) {
        const o = this.passes.filter((t) => t.enabled);
        this.gl.renderer.render({
          scene: t,
          camera: e,
          target: o.length || (!i && this.targetOnly) ? this.fbo.write : i,
          update: s,
          sort: n,
          frustumCull: r,
        }),
          this.fbo.swap(),
          o.forEach((t, e) => {
            (t.mesh.program.uniforms[t.textureUniform].value =
              this.fbo.read.texture),
              this.gl.renderer.render({
                scene: t.mesh,
                target:
                  e !== o.length - 1 || (!i && this.targetOnly)
                    ? this.fbo.write
                    : i,
                clear: !0,
              }),
              this.fbo.swap();
          }),
          (this.uniform.value = this.fbo.read.texture);
      }
    }
    const Lt =
        "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
      kt =
        "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";
    class Rt extends Et {
      constructor(
        t,
        {
          width: e = 1,
          height: i = 1,
          widthSegments: s = 1,
          heightSegments: n = 1,
          attributes: r = {},
        } = {}
      ) {
        const o = s,
          a = n,
          h = (o + 1) * (a + 1),
          c = o * a * 6,
          u = new Float32Array(3 * h),
          l = new Float32Array(3 * h),
          d = new Float32Array(2 * h),
          f = h > 65536 ? new Uint32Array(c) : new Uint16Array(c);
        Rt.buildPlane(u, l, d, f, e, i, 0, o, a),
          Object.assign(r, {
            position: { size: 3, data: u },
            normal: { size: 3, data: l },
            uv: { size: 2, data: d },
            index: { data: f },
          }),
          super(t, r);
      }
      static buildPlane(
        t,
        e,
        i,
        s,
        n,
        r,
        o,
        a,
        h,
        c = 0,
        u = 1,
        l = 2,
        d = 1,
        f = -1,
        m = 0,
        p = 0
      ) {
        const g = m,
          x = n / a,
          v = r / h;
        for (let y = 0; y <= h; y++) {
          let w = y * v - r / 2;
          for (let r = 0; r <= a; r++, m++) {
            let v = r * x - n / 2;
            if (
              ((t[3 * m + c] = v * d),
              (t[3 * m + u] = w * f),
              (t[3 * m + l] = o / 2),
              (e[3 * m + c] = 0),
              (e[3 * m + u] = 0),
              (e[3 * m + l] = o >= 0 ? 1 : -1),
              (i[2 * m] = r / a),
              (i[2 * m + 1] = 1 - y / h),
              y === h || r === a)
            )
              continue;
            let _ = g + r + y * (a + 1),
              b = g + r + (y + 1) * (a + 1),
              M = g + r + (y + 1) * (a + 1) + 1,
              A = g + r + y * (a + 1) + 1;
            (s[6 * p] = _),
              (s[6 * p + 1] = b),
              (s[6 * p + 2] = A),
              (s[6 * p + 3] = b),
              (s[6 * p + 4] = M),
              (s[6 * p + 5] = A),
              p++;
          }
        }
      }
    }
    function Dt(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function zt(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    var It,
      Bt,
      Nt,
      Ut,
      jt,
      Wt,
      Xt,
      Vt,
      Yt,
      qt,
      Gt,
      Ht,
      $t,
      Zt,
      Qt,
      Kt,
      Jt,
      te,
      ee,
      ie,
      se,
      ne,
      re,
      oe,
      ae,
      he,
      ce,
      ue,
      le = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      de = { duration: 0.5, overwrite: !1, delay: 0 },
      fe = 1e8,
      me = 1e-8,
      pe = 2 * Math.PI,
      ge = pe / 4,
      xe = 0,
      ve = Math.sqrt,
      ye = Math.cos,
      we = Math.sin,
      _e = function (t) {
        return "string" == typeof t;
      },
      be = function (t) {
        return "function" == typeof t;
      },
      Me = function (t) {
        return "number" == typeof t;
      },
      Ae = function (t) {
        return void 0 === t;
      },
      Te = function (t) {
        return "object" == typeof t;
      },
      Ee = function (t) {
        return !1 !== t;
      },
      Oe = function () {
        return "undefined" != typeof window;
      },
      Ce = function (t) {
        return be(t) || _e(t);
      },
      Se =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      Pe = Array.isArray,
      Fe = /(?:-?\.?\d|\.)+/gi,
      Le = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      ke = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Re = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      De = /[+-]=-?[.\d]+/,
      ze = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      Ie = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      Be = {},
      Ne = {},
      Ue = function (t) {
        return (Ne = di(t, Be)) && Zs;
      },
      je = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      We = function (t, e) {
        return !e && console.warn(t);
      },
      Xe = function (t, e) {
        return (t && (Be[t] = e) && Ne && (Ne[t] = e)) || Be;
      },
      Ve = function () {
        return 0;
      },
      Ye = {},
      qe = [],
      Ge = {},
      He = {},
      $e = {},
      Ze = 30,
      Qe = [],
      Ke = "",
      Je = function (t) {
        var e,
          i,
          s = t[0];
        if ((Te(s) || be(s) || (t = [t]), !(e = (s._gsap || {}).harness))) {
          for (i = Qe.length; i-- && !Qe[i].targetTest(s); );
          e = Qe[i];
        }
        for (i = t.length; i--; )
          (t[i] && (t[i]._gsap || (t[i]._gsap = new _s(t[i], e)))) ||
            t.splice(i, 1);
        return t;
      },
      ti = function (t) {
        return t._gsap || Je(Ui(t))[0]._gsap;
      },
      ei = function (t, e, i) {
        return (i = t[e]) && be(i)
          ? t[e]()
          : (Ae(i) && t.getAttribute && t.getAttribute(e)) || i;
      },
      ii = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      si = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      ni = function (t, e) {
        for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i; );
        return s < i;
      },
      ri = function (t, e, i) {
        var s,
          n = Me(t[1]),
          r = (n ? 2 : 1) + (e < 2 ? 0 : 1),
          o = t[r];
        if ((n && (o.duration = t[1]), (o.parent = i), e)) {
          for (s = o; i && !("immediateRender" in s); )
            (s = i.vars.defaults || {}), (i = Ee(i.vars.inherit) && i.parent);
          (o.immediateRender = Ee(s.immediateRender)),
            e < 2 ? (o.runBackwards = 1) : (o.startAt = t[r - 1]);
        }
        return o;
      },
      oi = function () {
        var t,
          e,
          i = qe.length,
          s = qe.slice(0);
        for (Ge = {}, qe.length = 0, t = 0; t < i; t++)
          (e = s[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      ai = function (t, e, i, s) {
        qe.length && oi(), t.render(e, i, s), qe.length && oi();
      },
      hi = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ze).length < 2
          ? e
          : _e(t)
          ? t.trim()
          : t;
      },
      ci = function (t) {
        return t;
      },
      ui = function (t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t;
      },
      li = function (t, e) {
        for (var i in e)
          i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
      },
      di = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      },
      fi = function t(e, i) {
        for (var s in i)
          "__proto__" !== s &&
            "constructor" !== s &&
            "prototype" !== s &&
            (e[s] = Te(i[s]) ? t(e[s] || (e[s] = {}), i[s]) : i[s]);
        return e;
      },
      mi = function (t, e) {
        var i,
          s = {};
        for (i in t) i in e || (s[i] = t[i]);
        return s;
      },
      pi = function (t) {
        var e = t.parent || Bt,
          i = t.keyframes ? li : ui;
        if (Ee(t.inherit))
          for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
      },
      gi = function (t, e, i, s) {
        void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
        var n = e._prev,
          r = e._next;
        n ? (n._next = r) : t[i] === e && (t[i] = r),
          r ? (r._prev = n) : t[s] === e && (t[s] = n),
          (e._next = e._prev = e.parent = null);
      },
      xi = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
          (t._act = 0);
      },
      vi = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
        return t;
      },
      yi = function (t) {
        for (var e = t.parent; e && e.parent; )
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      wi = function t(e) {
        return !e || (e._ts && t(e.parent));
      },
      _i = function (t) {
        return t._repeat
          ? bi(t._tTime, (t = t.duration() + t._rDelay)) * t
          : 0;
      },
      bi = function (t, e) {
        var i = Math.floor((t /= e));
        return t && i === t ? i - 1 : i;
      },
      Mi = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      Ai = function (t) {
        return (t._end = si(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || me) || 0)
        ));
      },
      Ti = function (t, e) {
        var i = t._dp;
        return (
          i &&
            i.smoothChildTiming &&
            t._ts &&
            ((t._start = si(
              i._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
            )),
            Ai(t),
            i._dirty || vi(i, t)),
          t
        );
      },
      Ei = function (t, e) {
        var i;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((i = Mi(t.rawTime(), e)),
            (!e._dur || zi(0, e.totalDuration(), i) - e._tTime > me) &&
              e.render(i, !0)),
          vi(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (i = t; i._dp; )
              i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
          t._zTime = -1e-8;
        }
      },
      Oi = function (t, e, i, s) {
        return (
          e.parent && xi(e),
          (e._start = si(i + e._delay)),
          (e._end = si(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          (function (t, e, i, s, n) {
            void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
            var r,
              o = t[s];
            if (n) for (r = e[n]; o && o[n] > r; ) o = o._prev;
            o
              ? ((e._next = o._next), (o._next = e))
              : ((e._next = t[i]), (t[i] = e)),
              e._next ? (e._next._prev = e) : (t[s] = e),
              (e._prev = o),
              (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
          (t._recent = e),
          s || Ei(t, e),
          t
        );
      },
      Ci = function (t, e) {
        return (
          (Be.ScrollTrigger || je("scrollTrigger", e)) &&
          Be.ScrollTrigger.create(e, t)
        );
      },
      Si = function (t, e, i, s) {
        return (
          Cs(t, e),
          t._initted
            ? !i &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              Xt !== hs.frame
              ? (qe.push(t), (t._lazy = [e, s]), 1)
              : void 0
            : 1
        );
      },
      Pi = function t(e) {
        var i = e.parent;
        return (
          i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
        );
      },
      Fi = function (t, e, i, s) {
        var n = t._repeat,
          r = si(e) || 0,
          o = t._tTime / t._tDur;
        return (
          o && !s && (t._time *= r / t._dur),
          (t._dur = r),
          (t._tDur = n
            ? n < 0
              ? 1e10
              : si(r * (n + 1) + t._rDelay * n)
            : r),
          o && !s ? Ti(t, (t._tTime = t._tDur * o)) : t.parent && Ai(t),
          i || vi(t.parent, t),
          t
        );
      },
      Li = function (t) {
        return t instanceof Ms ? vi(t) : Fi(t, t._dur);
      },
      ki = { _start: 0, endTime: Ve },
      Ri = function t(e, i) {
        var s,
          n,
          r = e.labels,
          o = e._recent || ki,
          a = e.duration() >= fe ? o.endTime(!1) : e._dur;
        return _e(i) && (isNaN(i) || i in r)
          ? "<" === (s = i.charAt(0)) || ">" === s
            ? ("<" === s ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0)
            : (s = i.indexOf("=")) < 0
            ? (i in r || (r[i] = a), r[i])
            : ((n = +(i.charAt(s - 1) + i.substr(s + 1))),
              s > 1 ? t(e, i.substr(0, s - 1)) + n : a + n)
          : null == i
          ? a
          : +i;
      },
      Di = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      zi = function (t, e, i) {
        return i < t ? t : i > e ? e : i;
      },
      Ii = function (t) {
        if ("string" != typeof t) return "";
        var e = Ie.exec(t);
        return e ? t.substr(e.index + e[0].length) : "";
      },
      Bi = [].slice,
      Ni = function (t, e) {
        return (
          t &&
          Te(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && Te(t[0]))) &&
          !t.nodeType &&
          t !== Nt
        );
      },
      Ui = function (t, e) {
        return !_e(t) || e || (!Ut && cs())
          ? Pe(t)
            ? (function (t, e, i) {
                return (
                  void 0 === i && (i = []),
                  t.forEach(function (t) {
                    var s;
                    return (_e(t) && !e) || Ni(t, 1)
                      ? (s = i).push.apply(s, Ui(t))
                      : i.push(t);
                  }) || i
                );
              })(t, e)
            : Ni(t)
            ? Bi.call(t, 0)
            : t
            ? [t]
            : []
          : Bi.call(jt.querySelectorAll(t), 0);
      },
      ji = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Wi = function (t) {
        if (be(t)) return t;
        var e = Te(t) ? t : { each: t },
          i = gs(e.ease),
          s = e.from || 0,
          n = parseFloat(e.base) || 0,
          r = {},
          o = s > 0 && s < 1,
          a = isNaN(s) || o,
          h = e.axis,
          c = s,
          u = s;
        return (
          _e(s)
            ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
            : !o && a && ((c = s[0]), (u = s[1])),
          function (t, o, l) {
            var d,
              f,
              m,
              p,
              g,
              x,
              v,
              y,
              w,
              _ = (l || e).length,
              b = r[_];
            if (!b) {
              if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, fe])[1])) {
                for (
                  v = -fe;
                  v < (v = l[w++].getBoundingClientRect().left) && w < _;

                );
                w--;
              }
              for (
                b = r[_] = [],
                  d = a ? Math.min(w, _) * c - 0.5 : s % w,
                  f = a ? (_ * u) / w - 0.5 : (s / w) | 0,
                  v = 0,
                  y = fe,
                  x = 0;
                x < _;
                x++
              )
                (m = (x % w) - d),
                  (p = f - ((x / w) | 0)),
                  (b[x] = g =
                    h ? Math.abs("y" === h ? p : m) : ve(m * m + p * p)),
                  g > v && (v = g),
                  g < y && (y = g);
              "random" === s && ji(b),
                (b.max = v - y),
                (b.min = y),
                (b.v = _ =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (w > _
                        ? _ - 1
                        : h
                        ? "y" === h
                          ? _ / w
                          : w
                        : Math.max(w, _ / w)) ||
                    0) * ("edges" === s ? -1 : 1)),
                (b.b = _ < 0 ? n - _ : n),
                (b.u = Ii(e.amount || e.each) || 0),
                (i = i && _ < 0 ? ms(i) : i);
            }
            return (
              (_ = (b[t] - b.min) / b.max || 0),
              si(b.b + (i ? i(_) : _) * b.v) + b.u
            );
          }
        );
      },
      Xi = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (i) {
          var s = Math.round(parseFloat(i) / t) * t * e;
          return (s - (s % 1)) / e + (Me(i) ? 0 : Ii(i));
        };
      },
      Vi = function (t, e) {
        var i,
          s,
          n = Pe(t);
        return (
          !n &&
            Te(t) &&
            ((i = n = t.radius || fe),
            t.values
              ? ((t = Ui(t.values)), (s = !Me(t[0])) && (i *= i))
              : (t = Xi(t.increment))),
          Di(
            e,
            n
              ? be(t)
                ? function (e) {
                    return (s = t(e)), Math.abs(s - e) <= i ? s : e;
                  }
                : function (e) {
                    for (
                      var n,
                        r,
                        o = parseFloat(s ? e.x : e),
                        a = parseFloat(s ? e.y : 0),
                        h = fe,
                        c = 0,
                        u = t.length;
                      u--;

                    )
                      (n = s
                        ? (n = t[u].x - o) * n + (r = t[u].y - a) * r
                        : Math.abs(t[u] - o)) < h && ((h = n), (c = u));
                    return (
                      (c = !i || h <= i ? t[c] : e),
                      s || c === e || Me(e) ? c : c + Ii(e)
                    );
                  }
              : Xi(t)
          )
        );
      },
      Yi = function (t, e, i, s) {
        return Di(Pe(t) ? !e : !0 === i ? !!(i = 0) : !s, function () {
          return Pe(t)
            ? t[~~(Math.random() * t.length)]
            : (i = i || 1e-5) &&
                (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                  ) *
                    i *
                    s
                ) / s;
        });
      },
      qi = function (t, e, i) {
        return Di(i, function (i) {
          return t[~~e(i)];
        });
      },
      Gi = function (t) {
        for (var e, i, s, n, r = 0, o = ""; ~(e = t.indexOf("random(", r)); )
          (s = t.indexOf(")", e)),
            (n = "[" === t.charAt(e + 7)),
            (i = t.substr(e + 7, s - e - 7).match(n ? ze : Fe)),
            (o +=
              t.substr(r, e - r) +
              Yi(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
            (r = s + 1);
        return o + t.substr(r, t.length - r);
      },
      Hi = function (t, e, i, s, n) {
        var r = e - t,
          o = s - i;
        return Di(n, function (e) {
          return i + (((e - t) / r) * o || 0);
        });
      },
      $i = function (t, e, i) {
        var s,
          n,
          r,
          o = t.labels,
          a = fe;
        for (s in o)
          (n = o[s] - e) < 0 == !!i &&
            n &&
            a > (n = Math.abs(n)) &&
            ((r = s), (a = n));
        return r;
      },
      Zi = function (t, e, i) {
        var s,
          n,
          r = t.vars,
          o = r[e];
        if (o)
          return (
            (s = r[e + "Params"]),
            (n = r.callbackScope || t),
            i && qe.length && oi(),
            s ? o.apply(n, s) : o.call(n)
          );
      },
      Qi = function (t) {
        return xi(t), t.progress() < 1 && Zi(t, "onInterrupt"), t;
      },
      Ki = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
          i = be(t),
          s =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: Ve,
            render: js,
            add: Es,
            kill: Xs,
            modifier: Ws,
            rawVars: 0,
          },
          r = {
            targetTest: 0,
            get: 0,
            getSetter: Is,
            aliases: {},
            register: 0,
          };
        if ((cs(), t !== s)) {
          if (He[e]) return;
          ui(s, ui(mi(t, n), r)),
            di(s.prototype, di(n, mi(t, r))),
            (He[(s.prop = e)] = s),
            t.targetTest && (Qe.push(s), (Ye[e] = 1)),
            (e =
              ("css" === e
                ? "CSS"
                : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
        }
        Xe(e, s), t.register && t.register(Zs, s, qs);
      },
      Ji = 255,
      ts = {
        aqua: [0, Ji, Ji],
        lime: [0, Ji, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ji],
        navy: [0, 0, 128],
        white: [Ji, Ji, Ji],
        olive: [128, 128, 0],
        yellow: [Ji, Ji, 0],
        orange: [Ji, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ji, 0, 0],
        pink: [Ji, 192, 203],
        cyan: [0, Ji, Ji],
        transparent: [Ji, Ji, Ji, 0],
      },
      es = function (t, e, i) {
        return (
          ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
            ? e + (i - e) * t * 6
            : t < 0.5
            ? i
            : 3 * t < 2
            ? e + (i - e) * (2 / 3 - t) * 6
            : e) *
            Ji +
            0.5) |
          0
        );
      },
      is = function (t, e, i) {
        var s,
          n,
          r,
          o,
          a,
          h,
          c,
          u,
          l,
          d,
          f = t ? (Me(t) ? [t >> 16, (t >> 8) & Ji, t & Ji] : 0) : ts.black;
        if (!f) {
          if (
            ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ts[t])
          )
            f = ts[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((s = t.charAt(1)),
                (n = t.charAt(2)),
                (r = t.charAt(3)),
                (t =
                  "#" +
                  s +
                  s +
                  n +
                  n +
                  r +
                  r +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (f = parseInt(t.substr(1, 6), 16)) >> 16,
                (f >> 8) & Ji,
                f & Ji,
                parseInt(t.substr(7), 16) / 255,
              ];
            f = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & Ji,
              t & Ji,
            ];
          } else if ("hsl" === t.substr(0, 3))
            if (((f = d = t.match(Fe)), e)) {
              if (~t.indexOf("="))
                return (f = t.match(Le)), i && f.length < 4 && (f[3] = 1), f;
            } else
              (o = (+f[0] % 360) / 360),
                (a = +f[1] / 100),
                (s =
                  2 * (h = +f[2] / 100) -
                  (n = h <= 0.5 ? h * (a + 1) : h + a - h * a)),
                f.length > 3 && (f[3] *= 1),
                (f[0] = es(o + 1 / 3, s, n)),
                (f[1] = es(o, s, n)),
                (f[2] = es(o - 1 / 3, s, n));
          else f = t.match(Fe) || ts.transparent;
          f = f.map(Number);
        }
        return (
          e &&
            !d &&
            ((s = f[0] / Ji),
            (n = f[1] / Ji),
            (r = f[2] / Ji),
            (h = ((c = Math.max(s, n, r)) + (u = Math.min(s, n, r))) / 2),
            c === u
              ? (o = a = 0)
              : ((l = c - u),
                (a = h > 0.5 ? l / (2 - c - u) : l / (c + u)),
                (o =
                  c === s
                    ? (n - r) / l + (n < r ? 6 : 0)
                    : c === n
                    ? (r - s) / l + 2
                    : (s - n) / l + 4),
                (o *= 60)),
            (f[0] = ~~(o + 0.5)),
            (f[1] = ~~(100 * a + 0.5)),
            (f[2] = ~~(100 * h + 0.5))),
          i && f.length < 4 && (f[3] = 1),
          f
        );
      },
      ss = function (t) {
        var e = [],
          i = [],
          s = -1;
        return (
          t.split(rs).forEach(function (t) {
            var n = t.match(ke) || [];
            e.push.apply(e, n), i.push((s += n.length + 1));
          }),
          (e.c = i),
          e
        );
      },
      ns = function (t, e, i) {
        var s,
          n,
          r,
          o,
          a = "",
          h = (t + a).match(rs),
          c = e ? "hsla(" : "rgba(",
          u = 0;
        if (!h) return t;
        if (
          ((h = h.map(function (t) {
            return (
              (t = is(t, e, 1)) &&
              c +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          i && ((r = ss(t)), (s = i.c).join(a) !== r.c.join(a)))
        )
          for (o = (n = t.replace(rs, "1").split(ke)).length - 1; u < o; u++)
            a +=
              n[u] +
              (~s.indexOf(u)
                ? h.shift() || c + "0,0,0,0)"
                : (r.length ? r : h.length ? h : i).shift());
        if (!n)
          for (o = (n = t.split(rs)).length - 1; u < o; u++) a += n[u] + h[u];
        return a + n[o];
      },
      rs = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in ts) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      os = /hsl[a]?\(/,
      as = function (t) {
        var e,
          i = t.join(" ");
        if (((rs.lastIndex = 0), rs.test(i)))
          return (
            (e = os.test(i)),
            (t[1] = ns(t[1], e)),
            (t[0] = ns(t[0], e, ss(t[1]))),
            !0
          );
      },
      hs =
        ((Kt = Date.now),
        (Jt = 500),
        (te = 33),
        (ee = Kt()),
        (ie = ee),
        (ne = se = 1e3 / 240),
        (oe = function t(e) {
          var i,
            s,
            n,
            r,
            o = Kt() - ie,
            a = !0 === e;
          if (
            (o > Jt && (ee += o - te),
            ((i = (n = (ie += o) - ee) - ne) > 0 || a) &&
              ((r = ++$t.frame),
              (Zt = n - 1e3 * $t.time),
              ($t.time = n /= 1e3),
              (ne += i + (i >= se ? 4 : se - i)),
              (s = 1)),
            a || (qt = Gt(t)),
            s)
          )
            for (Qt = 0; Qt < re.length; Qt++) re[Qt](n, Zt, r, e);
        }),
        ($t = {
          time: 0,
          frame: 0,
          tick: function () {
            oe(!0);
          },
          deltaRatio: function (t) {
            return Zt / (1e3 / (t || 60));
          },
          wake: function () {
            Wt &&
              (!Ut &&
                Oe() &&
                ((Nt = Ut = window),
                (jt = Nt.document || {}),
                (Be.gsap = Zs),
                (Nt.gsapVersions || (Nt.gsapVersions = [])).push(Zs.version),
                Ue(Ne || Nt.GreenSockGlobals || (!Nt.gsap && Nt) || {}),
                (Ht = Nt.requestAnimationFrame)),
              qt && $t.sleep(),
              (Gt =
                Ht ||
                function (t) {
                  return setTimeout(t, (ne - 1e3 * $t.time + 1) | 0);
                }),
              (Yt = 1),
              oe(2));
          },
          sleep: function () {
            (Ht ? Nt.cancelAnimationFrame : clearTimeout)(qt),
              (Yt = 0),
              (Gt = Ve);
          },
          lagSmoothing: function (t, e) {
            (Jt = t || 1e8), (te = Math.min(e, Jt, 0));
          },
          fps: function (t) {
            (se = 1e3 / (t || 240)), (ne = 1e3 * $t.time + se);
          },
          add: function (t) {
            re.indexOf(t) < 0 && re.push(t), cs();
          },
          remove: function (t) {
            var e;
            ~(e = re.indexOf(t)) && re.splice(e, 1) && Qt >= e && Qt--;
          },
          _listeners: (re = []),
        })),
      cs = function () {
        return !Yt && hs.wake();
      },
      us = {},
      ls = /^[\d.\-M][\d.\-,\s]/,
      ds = /["']/g,
      fs = function (t) {
        for (
          var e,
            i,
            s,
            n = {},
            r = t.substr(1, t.length - 3).split(":"),
            o = r[0],
            a = 1,
            h = r.length;
          a < h;
          a++
        )
          (i = r[a]),
            (e = a !== h - 1 ? i.lastIndexOf(",") : i.length),
            (s = i.substr(0, e)),
            (n[o] = isNaN(s) ? s.replace(ds, "").trim() : +s),
            (o = i.substr(e + 1).trim());
        return n;
      },
      ms = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      ps = function t(e, i) {
        for (var s, n = e._first; n; )
          n instanceof Ms
            ? t(n, i)
            : !n.vars.yoyoEase ||
              (n._yoyo && n._repeat) ||
              n._yoyo === i ||
              (n.timeline
                ? t(n.timeline, i)
                : ((s = n._ease),
                  (n._ease = n._yEase),
                  (n._yEase = s),
                  (n._yoyo = i))),
            (n = n._next);
      },
      gs = function (t, e) {
        return (
          (t &&
            (be(t)
              ? t
              : us[t] ||
                (function (t) {
                  var e,
                    i,
                    s,
                    n,
                    r = (t + "").split("("),
                    o = us[r[0]];
                  return o && r.length > 1 && o.config
                    ? o.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [fs(r[1])]
                          : ((e = t),
                            (i = e.indexOf("(") + 1),
                            (s = e.indexOf(")")),
                            (n = e.indexOf("(", i)),
                            e.substring(
                              i,
                              ~n && n < s ? e.indexOf(")", s + 1) : s
                            ))
                              .split(",")
                              .map(hi)
                      )
                    : us._CE && ls.test(t)
                    ? us._CE("", t)
                    : o;
                })(t))) ||
          e
        );
      },
      xs = function (t, e, i, s) {
        void 0 === i &&
          (i = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === s &&
            (s = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var n,
          r = { easeIn: e, easeOut: i, easeInOut: s };
        return (
          ii(t, function (t) {
            for (var e in ((us[t] = Be[t] = r),
            (us[(n = t.toLowerCase())] = i),
            r))
              us[
                n +
                  ("easeIn" === e
                    ? ".in"
                    : "easeOut" === e
                    ? ".out"
                    : ".inOut")
              ] = us[t + "." + e] = r[e];
          }),
          r
        );
      },
      vs = function (t) {
        return function (e) {
          return e < 0.5
            ? (1 - t(1 - 2 * e)) / 2
            : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      ys = function t(e, i, s) {
        var n = i >= 1 ? i : 1,
          r = (s || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
          o = (r / pe) * (Math.asin(1 / n) || 0),
          a = function (t) {
            return 1 === t
              ? 1
              : n * Math.pow(2, -10 * t) * we((t - o) * r) + 1;
          },
          h =
            "out" === e
              ? a
              : "in" === e
              ? function (t) {
                  return 1 - a(1 - t);
                }
              : vs(a);
        return (
          (r = pe / r),
          (h.config = function (i, s) {
            return t(e, i, s);
          }),
          h
        );
      },
      ws = function t(e, i) {
        void 0 === i && (i = 1.70158);
        var s = function (t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
          },
          n =
            "out" === e
              ? s
              : "in" === e
              ? function (t) {
                  return 1 - s(1 - t);
                }
              : vs(s);
        return (
          (n.config = function (i) {
            return t(e, i);
          }),
          n
        );
      };
    ii("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var i = e < 5 ? e + 1 : e;
      xs(
        t + ",Power" + (i - 1),
        e
          ? function (t) {
              return Math.pow(t, i);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, i);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, i) / 2
            : 1 - Math.pow(2 * (1 - t), i) / 2;
        }
      );
    }),
      (us.Linear.easeNone = us.none = us.Linear.easeIn),
      xs("Elastic", ys("in"), ys("out"), ys()),
      (ae = 7.5625),
      (ce = 1 / (he = 2.75)),
      xs(
        "Bounce",
        function (t) {
          return 1 - ue(1 - t);
        },
        (ue = function (t) {
          return t < ce
            ? ae * t * t
            : t < 0.7272727272727273
            ? ae * Math.pow(t - 1.5 / he, 2) + 0.75
            : t < 0.9090909090909092
            ? ae * (t -= 2.25 / he) * t + 0.9375
            : ae * Math.pow(t - 2.625 / he, 2) + 0.984375;
        })
      ),
      xs("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      xs("Circ", function (t) {
        return -(ve(1 - t * t) - 1);
      }),
      xs("Sine", function (t) {
        return 1 === t ? 1 : 1 - ye(t * ge);
      }),
      xs("Back", ws("in"), ws("out"), ws()),
      (us.SteppedEase =
        us.steps =
        Be.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var i = 1 / t,
                s = t + (e ? 0 : 1),
                n = e ? 1 : 0;
              return function (t) {
                return (((s * zi(0, 0.99999999, t)) | 0) + n) * i;
              };
            },
          }),
      (de.ease = us["quad.out"]),
      ii(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (Ke += t + "," + t + "Params,");
        }
      );
    var _s = function (t, e) {
        (this.id = xe++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : ei),
          (this.set = e ? e.getSetter : Is);
      },
      bs = (function () {
        function t(t, e) {
          var i = t.parent || Bt;
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Fi(this, +t.duration, 1, 1),
            (this.data = t.data),
            Yt || hs.wake(),
            i && Oi(i, this, e || 0 === e ? e : i._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0);
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                Fi(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((cs(), !arguments.length)) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
              for (Ti(this, t), !i._dp || i.parent || Ei(i, this); i.parent; )
                i.parent._time !==
                  i._start +
                    (i._ts >= 0
                      ? i._tTime / i._ts
                      : (i.totalDuration() - i._tTime) / -i._ts) &&
                  i.totalTime(i._tTime, !0),
                  (i = i.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Oi(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && Math.abs(this._zTime) === me) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), ai(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + _i(this)) % this._dur ||
                    (t ? this._dur : 0),
                  e
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    _i(this),
                  e
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * i, e)
              : this._repeat
              ? bi(this._tTime, i) + 1
              : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e =
              this.parent && this._ts
                ? Mi(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              yi(this.totalTime(zi(-this._delay, this._tDur, e), !0))
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime ||
                        Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (cs(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          (this._tTime -= me) &&
                          Math.abs(this._zTime) !== me
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e &&
                  (e._sort || !this.parent) &&
                  Oi(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (Ee(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Mi(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
              (i = e._start + i / (e._ts || 1)), (e = e._dp);
            return i;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), Li(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            return arguments.length
              ? ((this._rDelay = t), Li(this))
              : this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Ri(this, t), Ee(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, Ee(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (
              (this._initted = this._act = 0), (this._zTime = -1e-8), this
            );
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              i = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= i &&
                t < this.endTime(!0) - me
              )
            );
          }),
          (e.eventCallback = function (t, e, i) {
            var s = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((s[t] = e),
                    i && (s[t + "Params"] = i),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete s[t],
                this)
              : s[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (i) {
              var s = be(t) ? t : ci,
                n = function () {
                  var t = e.then;
                  (e.then = null),
                    be(s) &&
                      (s = s(e)) &&
                      (s.then || s === e) &&
                      (e.then = t),
                    i(s),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? n()
                : (e._prom = n);
            });
          }),
          (e.kill = function () {
            Qi(this);
          }),
          t
        );
      })();
    ui(bs.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Ms = (function (t) {
      function e(e, i) {
        var s;
        return (
          void 0 === e && (e = {}),
          ((s = t.call(this, e, i) || this).labels = {}),
          (s.smoothChildTiming = !!e.smoothChildTiming),
          (s.autoRemoveChildren = !!e.autoRemoveChildren),
          (s._sort = Ee(e.sortChildren)),
          s.parent && Ei(s.parent, Dt(s)),
          e.scrollTrigger && Ci(Dt(s), e.scrollTrigger),
          s
        );
      }
      zt(e, t);
      var i = e.prototype;
      return (
        (i.to = function (t, e, i) {
          return (
            new Ls(
              t,
              ri(arguments, 0, this),
              Ri(this, Me(e) ? arguments[3] : i)
            ),
            this
          );
        }),
        (i.from = function (t, e, i) {
          return (
            new Ls(
              t,
              ri(arguments, 1, this),
              Ri(this, Me(e) ? arguments[3] : i)
            ),
            this
          );
        }),
        (i.fromTo = function (t, e, i, s) {
          return (
            new Ls(
              t,
              ri(arguments, 2, this),
              Ri(this, Me(e) ? arguments[4] : s)
            ),
            this
          );
        }),
        (i.set = function (t, e, i) {
          return (
            (e.duration = 0),
            (e.parent = this),
            pi(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Ls(t, e, Ri(this, i), 1),
            this
          );
        }),
        (i.call = function (t, e, i) {
          return Oi(this, Ls.delayedCall(0, t, e), Ri(this, i));
        }),
        (i.staggerTo = function (t, e, i, s, n, r, o) {
          return (
            (i.duration = e),
            (i.stagger = i.stagger || s),
            (i.onComplete = r),
            (i.onCompleteParams = o),
            (i.parent = this),
            new Ls(t, i, Ri(this, n)),
            this
          );
        }),
        (i.staggerFrom = function (t, e, i, s, n, r, o) {
          return (
            (i.runBackwards = 1),
            (pi(i).immediateRender = Ee(i.immediateRender)),
            this.staggerTo(t, e, i, s, n, r, o)
          );
        }),
        (i.staggerFromTo = function (t, e, i, s, n, r, o, a) {
          return (
            (s.startAt = i),
            (pi(s).immediateRender = Ee(s.immediateRender)),
            this.staggerTo(t, e, s, n, r, o, a)
          );
        }),
        (i.render = function (t, e, i) {
          var s,
            n,
            r,
            o,
            a,
            h,
            c,
            u,
            l,
            d,
            f,
            m,
            p = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            x = this._dur,
            v = this !== Bt && t > g - me && t >= 0 ? g : t < me ? 0 : t,
            y = this._zTime < 0 != t < 0 && (this._initted || !x);
          if (v !== this._tTime || i || y) {
            if (
              (p !== this._time &&
                x &&
                ((v += this._time - p), (t += this._time - p)),
              (s = v),
              (l = this._start),
              (h = !(u = this._ts)),
              y && (x || (p = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((f = this._yoyo),
                (a = x + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * a + t, e, i);
              if (
                ((s = si(v % a)),
                v === g
                  ? ((o = this._repeat), (s = x))
                  : ((o = ~~(v / a)) && o === v / a && ((s = x), o--),
                    s > x && (s = x)),
                (d = bi(this._tTime, a)),
                !p && this._tTime && d !== o && (d = o),
                f && 1 & o && ((s = x - s), (m = 1)),
                o !== d && !this._lock)
              ) {
                var w = f && 1 & d,
                  _ = w === (f && 1 & o);
                if (
                  (o < d && (w = !w),
                  (p = w ? 0 : x),
                  (this._lock = 1),
                  (this.render(p || (m ? 0 : si(o * a)), e, !x)._lock = 0),
                  !e && this.parent && Zi(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !m &&
                    (this.invalidate()._lock = 1),
                  p !== this._time || h !== !this._ts)
                )
                  return this;
                if (
                  ((x = this._dur),
                  (g = this._tDur),
                  _ &&
                    ((this._lock = 2),
                    (p = w ? x : -1e-4),
                    this.render(p, !0),
                    this.vars.repeatRefresh && !m && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !h)
                )
                  return this;
                ps(this, m);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (c = (function (t, e, i) {
                  var s;
                  if (i > e)
                    for (s = t._first; s && s._start <= i; ) {
                      if (!s._dur && "isPause" === s.data && s._start > e)
                        return s;
                      s = s._next;
                    }
                  else
                    for (s = t._last; s && s._start >= i; ) {
                      if (!s._dur && "isPause" === s.data && s._start < e)
                        return s;
                      s = s._prev;
                    }
                })(this, si(p), si(s))) &&
                (v -= s - (s = c._start)),
              (this._tTime = v),
              (this._time = s),
              (this._act = !u),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (p = 0)),
              !p && (s || (!x && t >= 0)) && !e && Zi(this, "onStart"),
              s >= p && t >= 0)
            )
              for (n = this._first; n; ) {
                if (
                  ((r = n._next),
                  (n._act || s >= n._start) && n._ts && c !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, i);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (s - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (s - n._start) * n._ts,
                      e,
                      i
                    ),
                    s !== this._time || (!this._ts && !h))
                  ) {
                    (c = 0), r && (v += this._zTime = -1e-8);
                    break;
                  }
                }
                n = r;
              }
            else {
              n = this._last;
              for (var b = t < 0 ? t : s; n; ) {
                if (
                  ((r = n._prev), (n._act || b <= n._end) && n._ts && c !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, i);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (b - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (b - n._start) * n._ts,
                      e,
                      i
                    ),
                    s !== this._time || (!this._ts && !h))
                  ) {
                    (c = 0), r && (v += this._zTime = b ? -1e-8 : me);
                    break;
                  }
                }
                n = r;
              }
            }
            if (
              c &&
              !e &&
              (this.pause(),
              (c.render(s >= p ? 0 : -1e-8)._zTime = s >= p ? 1 : -1),
              this._ts)
            )
              return (this._start = l), Ai(this), this.render(t, e, i);
            this._onUpdate && !e && Zi(this, "onUpdate", !0),
              ((v === g && g >= this.totalDuration()) || (!v && p)) &&
                ((l !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !x) &&
                    ((v === g && this._ts > 0) || (!v && this._ts < 0)) &&
                    xi(this, 1),
                  e ||
                    (t < 0 && !p) ||
                    (!v && !p) ||
                    (Zi(
                      this,
                      v === g ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(v < g && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (i.add = function (t, e) {
          var i = this;
          if ((Me(e) || (e = Ri(this, e)), !(t instanceof bs))) {
            if (Pe(t))
              return (
                t.forEach(function (t) {
                  return i.add(t, e);
                }),
                this
              );
            if (_e(t)) return this.addLabel(t, e);
            if (!be(t)) return this;
            t = Ls.delayedCall(0, t);
          }
          return this !== t ? Oi(this, t, e) : this;
        }),
        (i.getChildren = function (t, e, i, s) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === i && (i = !0),
            void 0 === s && (s = -fe);
          for (var n = [], r = this._first; r; )
            r._start >= s &&
              (r instanceof Ls
                ? e && n.push(r)
                : (i && n.push(r),
                  t && n.push.apply(n, r.getChildren(!0, e, i)))),
              (r = r._next);
          return n;
        }),
        (i.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
            if (e[i].vars.id === t) return e[i];
        }),
        (i.remove = function (t) {
          return _e(t)
            ? this.removeLabel(t)
            : be(t)
            ? this.killTweensOf(t)
            : (gi(this, t),
              t === this._recent && (this._recent = this._last),
              vi(this));
        }),
        (i.totalTime = function (e, i) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = si(
                  hs.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, i),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (i.addLabel = function (t, e) {
          return (this.labels[t] = Ri(this, e)), this;
        }),
        (i.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (i.addPause = function (t, e, i) {
          var s = Ls.delayedCall(0, e || Ve, i);
          return (
            (s.data = "isPause"),
            (this._hasPause = 1),
            Oi(this, s, Ri(this, t))
          );
        }),
        (i.removePause = function (t) {
          var e = this._first;
          for (t = Ri(this, t); e; )
            e._start === t && "isPause" === e.data && xi(e), (e = e._next);
        }),
        (i.killTweensOf = function (t, e, i) {
          for (var s = this.getTweensOf(t, i), n = s.length; n--; )
            As !== s[n] && s[n].kill(t, e);
          return this;
        }),
        (i.getTweensOf = function (t, e) {
          for (var i, s = [], n = Ui(t), r = this._first, o = Me(e); r; )
            r instanceof Ls
              ? ni(r._targets, n) &&
                (o
                  ? (!As || (r._initted && r._ts)) &&
                    r.globalTime(0) <= e &&
                    r.globalTime(r.totalDuration()) > e
                  : !e || r.isActive()) &&
                s.push(r)
              : (i = r.getTweensOf(n, e)).length && s.push.apply(s, i),
              (r = r._next);
          return s;
        }),
        (i.tweenTo = function (t, e) {
          e = e || {};
          var i = this,
            s = Ri(i, t),
            n = e,
            r = n.startAt,
            o = n.onStart,
            a = n.onStartParams,
            h = n.immediateRender,
            c = Ls.to(
              i,
              ui(
                {
                  ease: "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: s,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (s - (r && "time" in r ? r.time : i._time)) /
                        i.timeScale()
                    ) ||
                    me,
                  onStart: function () {
                    i.pause();
                    var t =
                      e.duration || Math.abs((s - i._time) / i.timeScale());
                    c._dur !== t && Fi(c, t, 0, 1).render(c._time, !0, !0),
                      o && o.apply(c, a || []);
                  },
                },
                e
              )
            );
          return h ? c.render(0) : c;
        }),
        (i.tweenFromTo = function (t, e, i) {
          return this.tweenTo(e, ui({ startAt: { time: Ri(this, t) } }, i));
        }),
        (i.recent = function () {
          return this._recent;
        }),
        (i.nextLabel = function (t) {
          return void 0 === t && (t = this._time), $i(this, Ri(this, t));
        }),
        (i.previousLabel = function (t) {
          return void 0 === t && (t = this._time), $i(this, Ri(this, t), 1);
        }),
        (i.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + me);
        }),
        (i.shiftChildren = function (t, e, i) {
          void 0 === i && (i = 0);
          for (var s, n = this._first, r = this.labels; n; )
            n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
          if (e) for (s in r) r[s] >= i && (r[s] += t);
          return vi(this);
        }),
        (i.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (i.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, i = this._first; i; )
            (e = i._next), this.remove(i), (i = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            vi(this)
          );
        }),
        (i.totalDuration = function (t) {
          var e,
            i,
            s,
            n = 0,
            r = this,
            o = r._last,
            a = fe;
          if (arguments.length)
            return r.timeScale(
              (r._repeat < 0 ? r.duration() : r.totalDuration()) /
                (r.reversed() ? -t : t)
            );
          if (r._dirty) {
            for (s = r.parent; o; )
              (e = o._prev),
                o._dirty && o.totalDuration(),
                (i = o._start) > a && r._sort && o._ts && !r._lock
                  ? ((r._lock = 1), (Oi(r, o, i - o._delay, 1)._lock = 0))
                  : (a = i),
                i < 0 &&
                  o._ts &&
                  ((n -= i),
                  ((!s && !r._dp) || (s && s.smoothChildTiming)) &&
                    ((r._start += i / r._ts),
                    (r._time -= i),
                    (r._tTime -= i)),
                  r.shiftChildren(-i, !1, -Infinity),
                  (a = 0)),
                o._end > n && o._ts && (n = o._end),
                (o = e);
            Fi(r, r === Bt && r._time > n ? r._time : n, 1, 1),
              (r._dirty = 0);
          }
          return r._tDur;
        }),
        (e.updateRoot = function (t) {
          if (
            (Bt._ts && (ai(Bt, Mi(t, Bt)), (Xt = hs.frame)), hs.frame >= Ze)
          ) {
            Ze += le.autoSleep || 120;
            var e = Bt._first;
            if ((!e || !e._ts) && le.autoSleep && hs._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || hs.sleep();
            }
          }
        }),
        e
      );
    })(bs);
    ui(Ms.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var As,
      Ts = function (t, e, i, s, n, r, o) {
        var a,
          h,
          c,
          u,
          l,
          d,
          f,
          m,
          p = new qs(this._pt, t, e, 0, 1, Us, null, n),
          g = 0,
          x = 0;
        for (
          p.b = i,
            p.e = s,
            i += "",
            (f = ~(s += "").indexOf("random(")) && (s = Gi(s)),
            r && (r((m = [i, s]), t, e), (i = m[0]), (s = m[1])),
            h = i.match(Re) || [];
          (a = Re.exec(s));

        )
          (u = a[0]),
            (l = s.substring(g, a.index)),
            c ? (c = (c + 1) % 5) : "rgba(" === l.substr(-5) && (c = 1),
            u !== h[x++] &&
              ((d = parseFloat(h[x - 1]) || 0),
              (p._pt = {
                _next: p._pt,
                p: l || 1 === x ? l : ",",
                s: d,
                c:
                  "=" === u.charAt(1)
                    ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1)
                    : parseFloat(u) - d,
                m: c && c < 4 ? Math.round : 0,
              }),
              (g = Re.lastIndex));
        return (
          (p.c = g < s.length ? s.substring(g, s.length) : ""),
          (p.fp = o),
          (De.test(s) || f) && (p.e = 0),
          (this._pt = p),
          p
        );
      },
      Es = function (t, e, i, s, n, r, o, a, h) {
        be(s) && (s = s(n || 0, t, r));
        var c,
          u = t[e],
          l =
            "get" !== i
              ? i
              : be(u)
              ? h
                ? t[
                    e.indexOf("set") || !be(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](h)
                : t[e]()
              : u,
          d = be(u) ? (h ? Ds : Rs) : ks;
        if (
          (_e(s) &&
            (~s.indexOf("random(") && (s = Gi(s)),
            "=" === s.charAt(1) &&
              (s =
                parseFloat(l) +
                parseFloat(s.substr(2)) * ("-" === s.charAt(0) ? -1 : 1) +
                (Ii(l) || 0))),
          l !== s)
        )
          return isNaN(l * s)
            ? (!u && !(e in t) && je(e, s),
              Ts.call(this, t, e, l, s, d, a || le.stringFilter, h))
            : ((c = new qs(
                this._pt,
                t,
                e,
                +l || 0,
                s - (l || 0),
                "boolean" == typeof u ? Ns : Bs,
                0,
                d
              )),
              h && (c.fp = h),
              o && c.modifier(o, this, t),
              (this._pt = c));
      },
      Os = function (t, e, i, s, n, r) {
        var o, a, h, c;
        if (
          He[t] &&
          !1 !==
            (o = new He[t]()).init(
              n,
              o.rawVars
                ? e[t]
                : (function (t, e, i, s, n) {
                    if (
                      (be(t) && (t = Ss(t, n, e, i, s)),
                      !Te(t) || (t.style && t.nodeType) || Pe(t) || Se(t))
                    )
                      return _e(t) ? Ss(t, n, e, i, s) : t;
                    var r,
                      o = {};
                    for (r in t) o[r] = Ss(t[r], n, e, i, s);
                    return o;
                  })(e[t], s, n, r, i),
              i,
              s,
              r
            ) &&
          ((i._pt = a =
            new qs(i._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
          i !== Vt)
        )
          for (
            h = i._ptLookup[i._targets.indexOf(n)], c = o._props.length;
            c--;

          )
            h[o._props[c]] = a;
        return o;
      },
      Cs = function t(e, i) {
        var s,
          n,
          r,
          o,
          a,
          h,
          c,
          u,
          l,
          d,
          f,
          m,
          p,
          g = e.vars,
          x = g.ease,
          v = g.startAt,
          y = g.immediateRender,
          w = g.lazy,
          _ = g.onUpdate,
          b = g.onUpdateParams,
          M = g.callbackScope,
          A = g.runBackwards,
          T = g.yoyoEase,
          E = g.keyframes,
          O = g.autoRevert,
          C = e._dur,
          S = e._startAt,
          P = e._targets,
          F = e.parent,
          L = F && "nested" === F.data ? F.parent._targets : P,
          k = "auto" === e._overwrite && !It,
          R = e.timeline;
        if (
          (R && (!E || !x) && (x = "none"),
          (e._ease = gs(x, de.ease)),
          (e._yEase = T ? ms(gs(!0 === T ? x : T, de.ease)) : 0),
          T &&
            e._yoyo &&
            !e._repeat &&
            ((T = e._yEase), (e._yEase = e._ease), (e._ease = T)),
          !R)
        ) {
          if (
            ((m = (u = P[0] ? ti(P[0]).harness : 0) && g[u.prop]),
            (s = mi(g, Ye)),
            S && S.render(-1, !0).kill(),
            v)
          ) {
            if (
              (xi(
                (e._startAt = Ls.set(
                  P,
                  ui(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: F,
                      immediateRender: !0,
                      lazy: Ee(w),
                      startAt: null,
                      delay: 0,
                      onUpdate: _,
                      onUpdateParams: b,
                      callbackScope: M,
                      stagger: 0,
                    },
                    v
                  )
                ))
              ),
              y)
            )
              if (i > 0) O || (e._startAt = 0);
              else if (C && !(i < 0 && S)) return void (i && (e._zTime = i));
          } else if (A && C)
            if (S) !O && (e._startAt = 0);
            else if (
              (i && (y = !1),
              (r = ui(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: y && Ee(w),
                  immediateRender: y,
                  stagger: 0,
                  parent: F,
                },
                s
              )),
              m && (r[u.prop] = m),
              xi((e._startAt = Ls.set(P, r))),
              y)
            ) {
              if (!i) return;
            } else t(e._startAt, me);
          for (
            e._pt = 0, w = (C && Ee(w)) || (w && !C), n = 0;
            n < P.length;
            n++
          ) {
            if (
              ((c = (a = P[n])._gsap || Je(P)[n]._gsap),
              (e._ptLookup[n] = d = {}),
              Ge[c.id] && qe.length && oi(),
              (f = L === P ? n : L.indexOf(a)),
              u &&
                !1 !== (l = new u()).init(a, m || s, e, f, L) &&
                ((e._pt = o =
                  new qs(e._pt, a, l.name, 0, 1, l.render, l, 0, l.priority)),
                l._props.forEach(function (t) {
                  d[t] = o;
                }),
                l.priority && (h = 1)),
              !u || m)
            )
              for (r in s)
                He[r] && (l = Os(r, s, e, f, a, L))
                  ? l.priority && (h = 1)
                  : (d[r] = o =
                      Es.call(e, a, r, "get", s[r], f, L, 0, g.stringFilter));
            e._op && e._op[n] && e.kill(a, e._op[n]),
              k &&
                e._pt &&
                ((As = e),
                Bt.killTweensOf(a, d, e.globalTime(0)),
                (p = !e.parent),
                (As = 0)),
              e._pt && w && (Ge[c.id] = 1);
          }
          h && Ys(e), e._onInit && e._onInit(e);
        }
        (e._from = !R && !!g.runBackwards),
          (e._onUpdate = _),
          (e._initted = (!e._op || e._pt) && !p);
      },
      Ss = function (t, e, i, s, n) {
        return be(t)
          ? t.call(e, i, s, n)
          : _e(t) && ~t.indexOf("random(")
          ? Gi(t)
          : t;
      },
      Ps = Ke + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Fs = (Ps + ",id,stagger,delay,duration,paused,scrollTrigger").split(
        ","
      ),
      Ls = (function (t) {
        function e(e, i, s, n) {
          var r;
          "number" == typeof i && ((s.duration = i), (i = s), (s = null));
          var o,
            a,
            h,
            c,
            u,
            l,
            d,
            f,
            m = (r = t.call(this, n ? i : pi(i), s) || this).vars,
            p = m.duration,
            g = m.delay,
            x = m.immediateRender,
            v = m.stagger,
            y = m.overwrite,
            w = m.keyframes,
            _ = m.defaults,
            b = m.scrollTrigger,
            M = m.yoyoEase,
            A = r.parent,
            T = (Pe(e) || Se(e) ? Me(e[0]) : "length" in i) ? [e] : Ui(e);
          if (
            ((r._targets = T.length
              ? Je(T)
              : We(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !le.nullTargetWarn
                ) || []),
            (r._ptLookup = []),
            (r._overwrite = y),
            w || v || Ce(p) || Ce(g))
          ) {
            if (
              ((i = r.vars),
              (o = r.timeline =
                new Ms({ data: "nested", defaults: _ || {} })).kill(),
              (o.parent = o._dp = Dt(r)),
              (o._start = 0),
              w)
            )
              ui(o.vars.defaults, { ease: "none" }),
                w.forEach(function (t) {
                  return o.to(T, t, ">");
                });
            else {
              if (((c = T.length), (d = v ? Wi(v) : Ve), Te(v)))
                for (u in v) ~Ps.indexOf(u) && (f || (f = {}), (f[u] = v[u]));
              for (a = 0; a < c; a++) {
                for (u in ((h = {}), i)) Fs.indexOf(u) < 0 && (h[u] = i[u]);
                (h.stagger = 0),
                  M && (h.yoyoEase = M),
                  f && di(h, f),
                  (l = T[a]),
                  (h.duration = +Ss(p, Dt(r), a, l, T)),
                  (h.delay = (+Ss(g, Dt(r), a, l, T) || 0) - r._delay),
                  !v &&
                    1 === c &&
                    h.delay &&
                    ((r._delay = g = h.delay),
                    (r._start += g),
                    (h.delay = 0)),
                  o.to(l, h, d(a, l, T));
              }
              o.duration() ? (p = g = 0) : (r.timeline = 0);
            }
            p || r.duration((p = o.duration()));
          } else r.timeline = 0;
          return (
            !0 !== y || It || ((As = Dt(r)), Bt.killTweensOf(T), (As = 0)),
            A && Ei(A, Dt(r)),
            (x ||
              (!p &&
                !w &&
                r._start === si(A._time) &&
                Ee(x) &&
                wi(Dt(r)) &&
                "nested" !== A.data)) &&
              ((r._tTime = -1e-8), r.render(Math.max(0, -g))),
            b && Ci(Dt(r), b),
            r
          );
        }
        zt(e, t);
        var i = e.prototype;
        return (
          (i.render = function (t, e, i) {
            var s,
              n,
              r,
              o,
              a,
              h,
              c,
              u,
              l,
              d = this._time,
              f = this._tDur,
              m = this._dur,
              p = t > f - me && t >= 0 ? f : t < me ? 0 : t;
            if (m) {
              if (
                p !== this._tTime ||
                !t ||
                i ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((s = p), (u = this.timeline), this._repeat)) {
                  if (((o = m + this._rDelay), this._repeat < -1 && t < 0))
                    return this.totalTime(100 * o + t, e, i);
                  if (
                    ((s = si(p % o)),
                    p === f
                      ? ((r = this._repeat), (s = m))
                      : ((r = ~~(p / o)) && r === p / o && ((s = m), r--),
                        s > m && (s = m)),
                    (h = this._yoyo && 1 & r) &&
                      ((l = this._yEase), (s = m - s)),
                    (a = bi(this._tTime, o)),
                    s === d && !i && this._initted)
                  )
                    return this;
                  r !== a &&
                    (u && this._yEase && ps(u, h),
                    !this.vars.repeatRefresh ||
                      h ||
                      this._lock ||
                      ((this._lock = i = 1),
                      (this.render(si(o * r), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Si(this, t < 0 ? t : s, i, e))
                    return (this._tTime = 0), this;
                  if (m !== this._dur) return this.render(t, e, i);
                }
                for (
                  this._tTime = p,
                    this._time = s,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = c = (l || this._ease)(s / m),
                    this._from && (this.ratio = c = 1 - c),
                    s && !d && !e && Zi(this, "onStart"),
                    n = this._pt;
                  n;

                )
                  n.r(c, n.d), (n = n._next);
                (u &&
                  u.render(t < 0 ? t : !s && h ? -1e-8 : u._dur * c, e, i)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                    Zi(this, "onUpdate")),
                  this._repeat &&
                    r !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    Zi(this, "onRepeat"),
                  (p !== this._tDur && p) ||
                    this._tTime !== p ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !m) &&
                      ((p === this._tDur && this._ts > 0) ||
                        (!p && this._ts < 0)) &&
                      xi(this, 1),
                    e ||
                      (t < 0 && !d) ||
                      (!p && !d) ||
                      (Zi(
                        this,
                        p === f ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(p < f && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, i, s) {
                var n,
                  r,
                  o,
                  a = t.ratio,
                  h =
                    e < 0 ||
                    (!e &&
                      ((!t._start && Pi(t)) ||
                        ((t._ts < 0 || t._dp._ts < 0) &&
                          "isFromStart" !== t.data &&
                          "isStart" !== t.data)))
                      ? 0
                      : 1,
                  c = t._rDelay,
                  u = 0;
                if (
                  (c &&
                    t._repeat &&
                    ((u = zi(0, t._tDur, e)),
                    (r = bi(u, c)),
                    (o = bi(t._tTime, c)),
                    t._yoyo && 1 & r && (h = 1 - h),
                    r !== o &&
                      ((a = 1 - h),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  h !== a || s || t._zTime === me || (!e && t._zTime))
                ) {
                  if (!t._initted && Si(t, e, s, i)) return;
                  for (
                    o = t._zTime,
                      t._zTime = e || (i ? me : 0),
                      i || (i = e && !o),
                      t.ratio = h,
                      t._from && (h = 1 - h),
                      t._time = 0,
                      t._tTime = u,
                      i || Zi(t, "onStart"),
                      n = t._pt;
                    n;

                  )
                    n.r(h, n.d), (n = n._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !i && Zi(t, "onUpdate"),
                    u && t._repeat && !i && t.parent && Zi(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === h &&
                      (h && xi(t, 1),
                      i ||
                        (Zi(t, h ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, i);
            return this;
          }),
          (i.targets = function () {
            return this._targets;
          }),
          (i.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (i.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (
                (this._lazy = this._pt = 0), this.parent ? Qi(this) : this
              );
            if (this.timeline) {
              var i = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(
                  t,
                  e,
                  As && !0 !== As.vars.overwrite
                )._first || Qi(this),
                this.parent &&
                  i !== this.timeline.totalDuration() &&
                  Fi(this, (this._dur * this.timeline._tDur) / i, 0, 1),
                this
              );
            }
            var s,
              n,
              r,
              o,
              a,
              h,
              c,
              u = this._targets,
              l = t ? Ui(t) : u,
              d = this._ptLookup,
              f = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var i = t.length, s = i === e.length;
                  s && i-- && t[i] === e[i];

                );
                return i < 0;
              })(u, l)
            )
              return "all" === e && (this._pt = 0), Qi(this);
            for (
              s = this._op = this._op || [],
                "all" !== e &&
                  (_e(e) &&
                    ((a = {}),
                    ii(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var i,
                      s,
                      n,
                      r,
                      o = t[0] ? ti(t[0]).harness : 0,
                      a = o && o.aliases;
                    if (!a) return e;
                    for (s in ((i = di({}, e)), a))
                      if ((s in i))
                        for (n = (r = a[s].split(",")).length; n--; )
                          i[r[n]] = i[s];
                    return i;
                  })(u, e))),
                c = u.length;
              c--;

            )
              if (~l.indexOf(u[c]))
                for (a in ((n = d[c]),
                "all" === e
                  ? ((s[c] = e), (o = n), (r = {}))
                  : ((r = s[c] = s[c] || {}), (o = e)),
                o))
                  (h = n && n[a]) &&
                    (("kill" in h.d && !0 !== h.d.kill(a)) ||
                      gi(this, h, "_pt"),
                    delete n[a]),
                    "all" !== r && (r[a] = 1);
            return this._initted && !this._pt && f && Qi(this), this;
          }),
          (e.to = function (t, i) {
            return new e(t, i, arguments[2]);
          }),
          (e.from = function (t, i) {
            return new e(t, ri(arguments, 1));
          }),
          (e.delayedCall = function (t, i, s, n) {
            return new e(i, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: i,
              onReverseComplete: i,
              onCompleteParams: s,
              onReverseCompleteParams: s,
              callbackScope: n,
            });
          }),
          (e.fromTo = function (t, i, s) {
            return new e(t, ri(arguments, 2));
          }),
          (e.set = function (t, i) {
            return (
              (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i)
            );
          }),
          (e.killTweensOf = function (t, e, i) {
            return Bt.killTweensOf(t, e, i);
          }),
          e
        );
      })(bs);
    ui(Ls.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      ii("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Ls[t] = function () {
          var e = new Ms(),
            i = Bi.call(arguments, 0);
          return (
            i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
          );
        };
      });
    var ks = function (t, e, i) {
        return (t[e] = i);
      },
      Rs = function (t, e, i) {
        return t[e](i);
      },
      Ds = function (t, e, i, s) {
        return t[e](s.fp, i);
      },
      zs = function (t, e, i) {
        return t.setAttribute(e, i);
      },
      Is = function (t, e) {
        return be(t[e]) ? Rs : Ae(t[e]) && t.setAttribute ? zs : ks;
      },
      Bs = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
      },
      Ns = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      Us = function (t, e) {
        var i = e._pt,
          s = "";
        if (!t && e.b) s = e.b;
        else if (1 === t && e.e) s = e.e;
        else {
          for (; i; )
            (s =
              i.p +
              (i.m
                ? i.m(i.s + i.c * t)
                : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
              s),
              (i = i._next);
          s += e.c;
        }
        e.set(e.t, e.p, s, e);
      },
      js = function (t, e) {
        for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
      },
      Ws = function (t, e, i, s) {
        for (var n, r = this._pt; r; )
          (n = r._next), r.p === s && r.modifier(t, e, i), (r = n);
      },
      Xs = function (t) {
        for (var e, i, s = this._pt; s; )
          (i = s._next),
            (s.p === t && !s.op) || s.op === t
              ? gi(this, s, "_pt")
              : s.dep || (e = 1),
            (s = i);
        return !e;
      },
      Vs = function (t, e, i, s) {
        s.mSet(t, e, s.m.call(s.tween, i, s.mt), s);
      },
      Ys = function (t) {
        for (var e, i, s, n, r = t._pt; r; ) {
          for (e = r._next, i = s; i && i.pr > r.pr; ) i = i._next;
          (r._prev = i ? i._prev : n) ? (r._prev._next = r) : (s = r),
            (r._next = i) ? (i._prev = r) : (n = r),
            (r = e);
        }
        t._pt = s;
      },
      qs = (function () {
        function t(t, e, i, s, n, r, o, a, h) {
          (this.t = e),
            (this.s = s),
            (this.c = n),
            (this.p = i),
            (this.r = r || Bs),
            (this.d = o || this),
            (this.set = a || ks),
            (this.pr = h || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, i) {
            (this.mSet = this.mSet || this.set),
              (this.set = Vs),
              (this.m = t),
              (this.mt = i),
              (this.tween = e);
          }),
          t
        );
      })();
    ii(
      Ke +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (Ye[t] = 1);
      }
    ),
      (Be.TweenMax = Be.TweenLite = Ls),
      (Be.TimelineLite = Be.TimelineMax = Ms),
      (Bt = new Ms({
        sortChildren: !1,
        defaults: de,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (le.stringFilter = as);
    var Gs = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (t) {
          return Ki(t);
        });
      },
      timeline: function (t) {
        return new Ms(t);
      },
      getTweensOf: function (t, e) {
        return Bt.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, s) {
        _e(t) && (t = Ui(t)[0]);
        var n = ti(t || {}).get,
          r = i ? ci : hi;
        return (
          "native" === i && (i = ""),
          t
            ? e
              ? r(((He[e] && He[e].get) || n)(t, e, i, s))
              : function (e, i, s) {
                  return r(((He[e] && He[e].get) || n)(t, e, i, s));
                }
            : t
        );
      },
      quickSetter: function (t, e, i) {
        if ((t = Ui(t)).length > 1) {
          var s = t.map(function (t) {
              return Zs.quickSetter(t, e, i);
            }),
            n = s.length;
          return function (t) {
            for (var e = n; e--; ) s[e](t);
          };
        }
        t = t[0] || {};
        var r = He[e],
          o = ti(t),
          a = (o.harness && (o.harness.aliases || {})[e]) || e,
          h = r
            ? function (e) {
                var s = new r();
                (Vt._pt = 0),
                  s.init(t, i ? e + i : e, Vt, 0, [t]),
                  s.render(1, s),
                  Vt._pt && js(1, Vt);
              }
            : o.set(t, a);
        return r
          ? h
          : function (e) {
              return h(t, a, i ? e + i : e, o, 1);
            };
      },
      isTweening: function (t) {
        return Bt.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = gs(t.ease, de.ease)), fi(de, t || {});
      },
      config: function (t) {
        return fi(le, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          s = t.plugins,
          n = t.defaults,
          r = t.extendTimeline;
        (s || "").split(",").forEach(function (t) {
          return (
            t &&
            !He[t] &&
            !Be[t] &&
            We(e + " effect requires " + t + " plugin.")
          );
        }),
          ($e[e] = function (t, e, s) {
            return i(Ui(t), ui(e || {}, n), s);
          }),
          r &&
            (Ms.prototype[e] = function (t, i, s) {
              return this.add($e[e](t, Te(i) ? i : (s = i) && {}, this), s);
            });
      },
      registerEase: function (t, e) {
        us[t] = gs(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? gs(t, e) : us;
      },
      getById: function (t) {
        return Bt.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var i,
          s,
          n = new Ms(t);
        for (
          n.smoothChildTiming = Ee(t.smoothChildTiming),
            Bt.remove(n),
            n._dp = 0,
            n._time = n._tTime = Bt._time,
            i = Bt._first;
          i;

        )
          (s = i._next),
            (!e &&
              !i._dur &&
              i instanceof Ls &&
              i.vars.onComplete === i._targets[0]) ||
              Oi(n, i, i._start - i._delay),
            (i = s);
        return Oi(Bt, n, 0), n;
      },
      utils: {
        wrap: function t(e, i, s) {
          var n = i - e;
          return Pe(e)
            ? qi(e, t(0, e.length), i)
            : Di(s, function (t) {
                return ((n + ((t - e) % n)) % n) + e;
              });
        },
        wrapYoyo: function t(e, i, s) {
          var n = i - e,
            r = 2 * n;
          return Pe(e)
            ? qi(e, t(0, e.length - 1), i)
            : Di(s, function (t) {
                return (
                  e + ((t = (r + ((t - e) % r)) % r || 0) > n ? r - t : t)
                );
              });
        },
        distribute: Wi,
        random: Yi,
        snap: Vi,
        normalize: function (t, e, i) {
          return Hi(t, e, 0, 1, i);
        },
        getUnit: Ii,
        clamp: function (t, e, i) {
          return Di(i, function (i) {
            return zi(t, e, i);
          });
        },
        splitColor: is,
        toArray: Ui,
        mapRange: Hi,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (i) {
            return t(parseFloat(i)) + (e || Ii(i));
          };
        },
        interpolate: function t(e, i, s, n) {
          var r = isNaN(e + i)
            ? 0
            : function (t) {
                return (1 - t) * e + t * i;
              };
          if (!r) {
            var o,
              a,
              h,
              c,
              u,
              l = _e(e),
              d = {};
            if ((!0 === s && (n = 1) && (s = null), l))
              (e = { p: e }), (i = { p: i });
            else if (Pe(e) && !Pe(i)) {
              for (h = [], c = e.length, u = c - 2, a = 1; a < c; a++)
                h.push(t(e[a - 1], e[a]));
              c--,
                (r = function (t) {
                  t *= c;
                  var e = Math.min(u, ~~t);
                  return h[e](t - e);
                }),
                (s = i);
            } else n || (e = di(Pe(e) ? [] : {}, e));
            if (!h) {
              for (o in i) Es.call(d, e, o, "get", i[o]);
              r = function (t) {
                return js(t, d) || (l ? e.p : e);
              };
            }
          }
          return Di(s, r);
        },
        shuffle: ji,
      },
      install: Ue,
      effects: $e,
      ticker: hs,
      updateRoot: Ms.updateRoot,
      plugins: He,
      globalTimeline: Bt,
      core: {
        PropTween: qs,
        globals: Xe,
        Tween: Ls,
        Timeline: Ms,
        Animation: bs,
        getCache: ti,
        _removeLinkedListItem: gi,
        suppressOverwrites: function (t) {
          return (It = t);
        },
      },
    };
    ii("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (Gs[t] = Ls[t]);
    }),
      hs.add(Ms.updateRoot),
      (Vt = Gs.to({}, { duration: 0 }));
    var Hs = function (t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
          i = i._next;
        return i;
      },
      $s = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, i, s) {
            s._onInit = function (t) {
              var s, n;
              if (
                (_e(i) &&
                  ((s = {}),
                  ii(i, function (t) {
                    return (s[t] = 1);
                  }),
                  (i = s)),
                e)
              ) {
                for (n in ((s = {}), i)) s[n] = e(i[n]);
                i = s;
              }
              !(function (t, e) {
                var i,
                  s,
                  n,
                  r = t._targets;
                for (i in e)
                  for (s = r.length; s--; )
                    (n = t._ptLookup[s][i]) &&
                      (n = n.d) &&
                      (n._pt && (n = Hs(n, i)),
                      n && n.modifier && n.modifier(e[i], t, r[s], i));
              })(t, i);
            };
          },
        };
      },
      Zs =
        Gs.registerPlugin(
          {
            name: "attr",
            init: function (t, e, i, s, n) {
              var r, o;
              for (r in e)
                (o = this.add(
                  t,
                  "setAttribute",
                  (t.getAttribute(r) || 0) + "",
                  e[r],
                  s,
                  n,
                  0,
                  0,
                  r
                )) && (o.op = r),
                  this._props.push(r);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
            },
          },
          $s("roundProps", Xi),
          $s("modifiers"),
          $s("snap", Vi)
        ) || Gs;
    (Ls.version = Ms.version = Zs.version = "3.6.0"),
      (Wt = 1),
      Oe() && cs(),
      us.Power0,
      us.Power1,
      us.Power2,
      us.Power3,
      us.Power4,
      us.Linear,
      us.Quad,
      us.Cubic,
      us.Quart,
      us.Quint,
      us.Strong,
      us.Elastic,
      us.Back,
      us.SteppedEase,
      us.Bounce,
      us.Sine,
      us.Expo,
      us.Circ;
    var Qs,
      Ks,
      Js,
      tn,
      en,
      sn,
      nn,
      rn,
      on = {},
      an = 180 / Math.PI,
      hn = Math.PI / 180,
      cn = Math.atan2,
      un = /([A-Z])/g,
      ln = /(?:left|right|width|margin|padding|x)/i,
      dn = /[\s,\(]\S/,
      fn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      mn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      pn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      gn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      },
      xn = function (t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      vn = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      yn = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      wn = function (t, e, i) {
        return (t.style[e] = i);
      },
      _n = function (t, e, i) {
        return t.style.setProperty(e, i);
      },
      bn = function (t, e, i) {
        return (t._gsap[e] = i);
      },
      Mn = function (t, e, i) {
        return (t._gsap.scaleX = t._gsap.scaleY = i);
      },
      An = function (t, e, i, s, n) {
        var r = t._gsap;
        (r.scaleX = r.scaleY = i), r.renderTransform(n, r);
      },
      Tn = function (t, e, i, s, n) {
        var r = t._gsap;
        (r[e] = i), r.renderTransform(n, r);
      },
      En = "transform",
      On = En + "Origin",
      Cn = function (t, e) {
        var i = Ks.createElementNS
          ? Ks.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : Ks.createElement(t);
        return i.style ? i : Ks.createElement(t);
      },
      Sn = function t(e, i, s) {
        var n = getComputedStyle(e);
        return (
          n[i] ||
          n.getPropertyValue(i.replace(un, "-$1").toLowerCase()) ||
          n.getPropertyValue(i) ||
          (!s && t(e, Fn(i) || i, 1)) ||
          ""
        );
      },
      Pn = "O,Moz,ms,Ms,Webkit".split(","),
      Fn = function (t, e, i) {
        var s = (e || en).style,
          n = 5;
        if (t in s && !i) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          n-- && !(Pn[n] + t in s);

        );
        return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Pn[n] : "") + t;
      },
      Ln = function () {
        "undefined" != typeof window &&
          window.document &&
          ((Qs = window),
          (Ks = Qs.document),
          (Js = Ks.documentElement),
          (en = Cn("div") || { style: {} }),
          (sn = Cn("div")),
          (En = Fn(En)),
          (On = En + "Origin"),
          (en.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (rn = !!Fn("perspective")),
          (tn = 1));
      },
      kn = function t(e) {
        var i,
          s = Cn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          n = this.parentNode,
          r = this.nextSibling,
          o = this.style.cssText;
        if (
          (Js.appendChild(s),
          s.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (i = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (i = this._gsapBBox());
        return (
          n && (r ? n.insertBefore(this, r) : n.appendChild(this)),
          Js.removeChild(s),
          (this.style.cssText = o),
          i
        );
      },
      Rn = function (t, e) {
        for (var i = e.length; i--; )
          if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
      },
      Dn = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (i) {
          e = kn.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === kn ||
            (e = kn.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +Rn(t, ["x", "cx", "x1"]) || 0,
                y: +Rn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      zn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Dn(t));
      },
      In = function (t, e) {
        if (e) {
          var i = t.style;
          e in on && e !== On && (e = En),
            i.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                i.removeProperty(e.replace(un, "-$1").toLowerCase()))
              : i.removeAttribute(e);
        }
      },
      Bn = function (t, e, i, s, n, r) {
        var o = new qs(t._pt, e, i, 0, 1, r ? yn : vn);
        return (t._pt = o), (o.b = s), (o.e = n), t._props.push(i), o;
      },
      Nn = { deg: 1, rad: 1, turn: 1 },
      Un = function t(e, i, s, n) {
        var r,
          o,
          a,
          h,
          c = parseFloat(s) || 0,
          u = (s + "").trim().substr((c + "").length) || "px",
          l = en.style,
          d = ln.test(i),
          f = "svg" === e.tagName.toLowerCase(),
          m = (f ? "client" : "offset") + (d ? "Width" : "Height"),
          p = 100,
          g = "px" === n,
          x = "%" === n;
        return n === u || !c || Nn[n] || Nn[u]
          ? c
          : ("px" !== u && !g && (c = t(e, i, s, "px")),
            (h = e.getCTM && zn(e)),
            (!x && "%" !== u) || (!on[i] && !~i.indexOf("adius"))
              ? ((l[d ? "width" : "height"] = p + (g ? u : n)),
                (o =
                  ~i.indexOf("adius") || ("em" === n && e.appendChild && !f)
                    ? e
                    : e.parentNode),
                h && (o = (e.ownerSVGElement || {}).parentNode),
                (o && o !== Ks && o.appendChild) || (o = Ks.body),
                (a = o._gsap) && x && a.width && d && a.time === hs.time
                  ? si((c / a.width) * p)
                  : ((x || "%" === u) && (l.position = Sn(e, "position")),
                    o === e && (l.position = "static"),
                    o.appendChild(en),
                    (r = en[m]),
                    o.removeChild(en),
                    (l.position = "absolute"),
                    d &&
                      x &&
                      (((a = ti(o)).time = hs.time), (a.width = o[m])),
                    si(g ? (r * c) / p : r && c ? (p / r) * c : 0)))
              : ((r = h ? e.getBBox()[d ? "width" : "height"] : e[m]),
                si(x ? (c / r) * p : (c / 100) * r)));
      },
      jn = function (t, e, i, s) {
        var n;
        return (
          tn || Ln(),
          e in fn &&
            "transform" !== e &&
            ~(e = fn[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          on[e] && "transform" !== e
            ? ((n = Kn(t, s)),
              (n =
                "transformOrigin" !== e
                  ? n[e]
                  : Jn(Sn(t, On)) + " " + n.zOrigin + "px"))
            : (!(n = t.style[e]) ||
                "auto" === n ||
                s ||
                ~(n + "").indexOf("calc(")) &&
              (n =
                (Yn[e] && Yn[e](t, e, i)) ||
                Sn(t, e) ||
                ei(t, e) ||
                ("opacity" === e ? 1 : 0)),
          i && !~(n + "").trim().indexOf(" ") ? Un(t, e, n, i) + i : n
        );
      },
      Wn = function (t, e, i, s) {
        if (!i || "none" === i) {
          var n = Fn(e, t, 1),
            r = n && Sn(t, n, 1);
          r && r !== i
            ? ((e = n), (i = r))
            : "borderColor" === e && (i = Sn(t, "borderTopColor"));
        }
        var o,
          a,
          h,
          c,
          u,
          l,
          d,
          f,
          m,
          p,
          g,
          x,
          v = new qs(this._pt, t.style, e, 0, 1, Us),
          y = 0,
          w = 0;
        if (
          ((v.b = i),
          (v.e = s),
          (i += ""),
          "auto" == (s += "") &&
            ((t.style[e] = s), (s = Sn(t, e) || s), (t.style[e] = i)),
          as((o = [i, s])),
          (s = o[1]),
          (h = (i = o[0]).match(ke) || []),
          (s.match(ke) || []).length)
        ) {
          for (; (a = ke.exec(s)); )
            (d = a[0]),
              (m = s.substring(y, a.index)),
              u
                ? (u = (u + 1) % 5)
                : ("rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5)) ||
                  (u = 1),
              d !== (l = h[w++] || "") &&
                ((c = parseFloat(l) || 0),
                (g = l.substr((c + "").length)),
                (x = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
                  (d = d.substr(2)),
                (f = parseFloat(d)),
                (p = d.substr((f + "").length)),
                (y = ke.lastIndex - p.length),
                p ||
                  ((p = p || le.units[e] || g),
                  y === s.length && ((s += p), (v.e += p))),
                g !== p && (c = Un(t, e, l, p) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: m || 1 === w ? m : ",",
                  s: c,
                  c: x ? x * f : f - c,
                  m: (u && u < 4) || "zIndex" === e ? Math.round : 0,
                }));
          v.c = y < s.length ? s.substring(y, s.length) : "";
        } else v.r = "display" === e && "none" === s ? yn : vn;
        return De.test(s) && (v.e = 0), (this._pt = v), v;
      },
      Xn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      Vn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var i,
            s,
            n,
            r = e.t,
            o = r.style,
            a = e.u,
            h = r._gsap;
          if ("all" === a || !0 === a) (o.cssText = ""), (s = 1);
          else
            for (n = (a = a.split(",")).length; --n > -1; )
              (i = a[n]),
                on[i] && ((s = 1), (i = "transformOrigin" === i ? On : En)),
                In(r, i);
          s &&
            (In(r, En),
            h &&
              (h.svg && r.removeAttribute("transform"),
              Kn(r, 1),
              (h.uncache = 1)));
        }
      },
      Yn = {
        clearProps: function (t, e, i, s, n) {
          if ("isFromStart" !== n.data) {
            var r = (t._pt = new qs(t._pt, e, i, 0, 0, Vn));
            return (
              (r.u = s), (r.pr = -10), (r.tween = n), t._props.push(i), 1
            );
          }
        },
      },
      qn = [1, 0, 0, 1, 0, 0],
      Gn = {},
      Hn = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      $n = function (t) {
        var e = Sn(t, En);
        return Hn(e) ? qn : e.substr(7).match(Le).map(si);
      },
      Zn = function (t, e) {
        var i,
          s,
          n,
          r,
          o = t._gsap || ti(t),
          a = t.style,
          h = $n(t);
        return o.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (h = [
              (n = t.transform.baseVal.consolidate().matrix).a,
              n.b,
              n.c,
              n.d,
              n.e,
              n.f,
            ]).join(",")
            ? qn
            : h
          : (h !== qn ||
              t.offsetParent ||
              t === Js ||
              o.svg ||
              ((n = a.display),
              (a.display = "block"),
              ((i = t.parentNode) && t.offsetParent) ||
                ((r = 1), (s = t.nextSibling), Js.appendChild(t)),
              (h = $n(t)),
              n ? (a.display = n) : In(t, "display"),
              r &&
                (s
                  ? i.insertBefore(t, s)
                  : i
                  ? i.appendChild(t)
                  : Js.removeChild(t))),
            e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h);
      },
      Qn = function (t, e, i, s, n, r) {
        var o,
          a,
          h,
          c = t._gsap,
          u = n || Zn(t, !0),
          l = c.xOrigin || 0,
          d = c.yOrigin || 0,
          f = c.xOffset || 0,
          m = c.yOffset || 0,
          p = u[0],
          g = u[1],
          x = u[2],
          v = u[3],
          y = u[4],
          w = u[5],
          _ = e.split(" "),
          b = parseFloat(_[0]) || 0,
          M = parseFloat(_[1]) || 0;
        i
          ? u !== qn &&
            (a = p * v - g * x) &&
            ((h = b * (-g / a) + M * (p / a) - (p * w - g * y) / a),
            (b = b * (v / a) + M * (-x / a) + (x * w - v * y) / a),
            (M = h))
          : ((b =
              (o = Dn(t)).x + (~_[0].indexOf("%") ? (b / 100) * o.width : b)),
            (M =
              o.y +
              (~(_[1] || _[0]).indexOf("%") ? (M / 100) * o.height : M))),
          s || (!1 !== s && c.smooth)
            ? ((y = b - l),
              (w = M - d),
              (c.xOffset = f + (y * p + w * x) - y),
              (c.yOffset = m + (y * g + w * v) - w))
            : (c.xOffset = c.yOffset = 0),
          (c.xOrigin = b),
          (c.yOrigin = M),
          (c.smooth = !!s),
          (c.origin = e),
          (c.originIsAbsolute = !!i),
          (t.style[On] = "0px 0px"),
          r &&
            (Bn(r, c, "xOrigin", l, b),
            Bn(r, c, "yOrigin", d, M),
            Bn(r, c, "xOffset", f, c.xOffset),
            Bn(r, c, "yOffset", m, c.yOffset)),
          t.setAttribute("data-svg-origin", b + " " + M);
      },
      Kn = function (t, e) {
        var i = t._gsap || new _s(t);
        if ("x" in i && !e && !i.uncache) return i;
        var s,
          n,
          r,
          o,
          a,
          h,
          c,
          u,
          l,
          d,
          f,
          m,
          p,
          g,
          x,
          v,
          y,
          w,
          _,
          b,
          M,
          A,
          T,
          E,
          O,
          C,
          S,
          P,
          F,
          L,
          k,
          R,
          D = t.style,
          z = i.scaleX < 0,
          I = "px",
          B = "deg",
          N = Sn(t, On) || "0";
        return (
          (s = n = r = h = c = u = l = d = f = 0),
          (o = a = 1),
          (i.svg = !(!t.getCTM || !zn(t))),
          (g = Zn(t, i.svg)),
          i.svg &&
            ((E = !i.uncache && t.getAttribute("data-svg-origin")),
            Qn(t, E || N, !!E || i.originIsAbsolute, !1 !== i.smooth, g)),
          (m = i.xOrigin || 0),
          (p = i.yOrigin || 0),
          g !== qn &&
            ((w = g[0]),
            (_ = g[1]),
            (b = g[2]),
            (M = g[3]),
            (s = A = g[4]),
            (n = T = g[5]),
            6 === g.length
              ? ((o = Math.sqrt(w * w + _ * _)),
                (a = Math.sqrt(M * M + b * b)),
                (h = w || _ ? cn(_, w) * an : 0),
                (l = b || M ? cn(b, M) * an + h : 0) &&
                  (a *= Math.cos(l * hn)),
                i.svg &&
                  ((s -= m - (m * w + p * b)), (n -= p - (m * _ + p * M))))
              : ((R = g[6]),
                (L = g[7]),
                (S = g[8]),
                (P = g[9]),
                (F = g[10]),
                (k = g[11]),
                (s = g[12]),
                (n = g[13]),
                (r = g[14]),
                (c = (x = cn(R, F)) * an),
                x &&
                  ((E = A * (v = Math.cos(-x)) + S * (y = Math.sin(-x))),
                  (O = T * v + P * y),
                  (C = R * v + F * y),
                  (S = A * -y + S * v),
                  (P = T * -y + P * v),
                  (F = R * -y + F * v),
                  (k = L * -y + k * v),
                  (A = E),
                  (T = O),
                  (R = C)),
                (u = (x = cn(-b, F)) * an),
                x &&
                  ((v = Math.cos(-x)),
                  (k = M * (y = Math.sin(-x)) + k * v),
                  (w = E = w * v - S * y),
                  (_ = O = _ * v - P * y),
                  (b = C = b * v - F * y)),
                (h = (x = cn(_, w)) * an),
                x &&
                  ((E = w * (v = Math.cos(x)) + _ * (y = Math.sin(x))),
                  (O = A * v + T * y),
                  (_ = _ * v - w * y),
                  (T = T * v - A * y),
                  (w = E),
                  (A = O)),
                c &&
                  Math.abs(c) + Math.abs(h) > 359.9 &&
                  ((c = h = 0), (u = 180 - u)),
                (o = si(Math.sqrt(w * w + _ * _ + b * b))),
                (a = si(Math.sqrt(T * T + R * R))),
                (x = cn(A, T)),
                (l = Math.abs(x) > 2e-4 ? x * an : 0),
                (f = k ? 1 / (k < 0 ? -k : k) : 0)),
            i.svg &&
              ((E = t.getAttribute("transform")),
              (i.forceCSS =
                t.setAttribute("transform", "") || !Hn(Sn(t, En))),
              E && t.setAttribute("transform", E))),
          Math.abs(l) > 90 &&
            Math.abs(l) < 270 &&
            (z
              ? ((o *= -1),
                (l += h <= 0 ? 180 : -180),
                (h += h <= 0 ? 180 : -180))
              : ((a *= -1), (l += l <= 0 ? 180 : -180))),
          (i.x =
            s -
            ((i.xPercent =
              s &&
              (i.xPercent ||
                (Math.round(t.offsetWidth / 2) === Math.round(-s) ? -50 : 0)))
              ? (t.offsetWidth * i.xPercent) / 100
              : 0) +
            I),
          (i.y =
            n -
            ((i.yPercent =
              n &&
              (i.yPercent ||
                (Math.round(t.offsetHeight / 2) === Math.round(-n)
                  ? -50
                  : 0)))
              ? (t.offsetHeight * i.yPercent) / 100
              : 0) +
            I),
          (i.z = r + I),
          (i.scaleX = si(o)),
          (i.scaleY = si(a)),
          (i.rotation = si(h) + B),
          (i.rotationX = si(c) + B),
          (i.rotationY = si(u) + B),
          (i.skewX = l + B),
          (i.skewY = d + B),
          (i.transformPerspective = f + I),
          (i.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (D[On] = Jn(N)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = le.force3D),
          (i.renderTransform = i.svg ? or : rn ? rr : er),
          (i.uncache = 0),
          i
        );
      },
      Jn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      tr = function (t, e, i) {
        var s = Ii(e);
        return si(parseFloat(e) + parseFloat(Un(t, "x", i + "px", s))) + s;
      },
      er = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          rr(t, e);
      },
      ir = "0deg",
      sr = "0px",
      nr = ") ",
      rr = function (t, e) {
        var i = e || this,
          s = i.xPercent,
          n = i.yPercent,
          r = i.x,
          o = i.y,
          a = i.z,
          h = i.rotation,
          c = i.rotationY,
          u = i.rotationX,
          l = i.skewX,
          d = i.skewY,
          f = i.scaleX,
          m = i.scaleY,
          p = i.transformPerspective,
          g = i.force3D,
          x = i.target,
          v = i.zOrigin,
          y = "",
          w = ("auto" === g && t && 1 !== t) || !0 === g;
        if (v && (u !== ir || c !== ir)) {
          var _,
            b = parseFloat(c) * hn,
            M = Math.sin(b),
            A = Math.cos(b);
          (b = parseFloat(u) * hn),
            (_ = Math.cos(b)),
            (r = tr(x, r, M * _ * -v)),
            (o = tr(x, o, -Math.sin(b) * -v)),
            (a = tr(x, a, A * _ * -v + v));
        }
        p !== sr && (y += "perspective(" + p + nr),
          (s || n) && (y += "translate(" + s + "%, " + n + "%) "),
          (w || r !== sr || o !== sr || a !== sr) &&
            (y +=
              a !== sr || w
                ? "translate3d(" + r + ", " + o + ", " + a + ") "
                : "translate(" + r + ", " + o + nr),
          h !== ir && (y += "rotate(" + h + nr),
          c !== ir && (y += "rotateY(" + c + nr),
          u !== ir && (y += "rotateX(" + u + nr),
          (l === ir && d === ir) || (y += "skew(" + l + ", " + d + nr),
          (1 === f && 1 === m) || (y += "scale(" + f + ", " + m + nr),
          (x.style[En] = y || "translate(0, 0)");
      },
      or = function (t, e) {
        var i,
          s,
          n,
          r,
          o,
          a = e || this,
          h = a.xPercent,
          c = a.yPercent,
          u = a.x,
          l = a.y,
          d = a.rotation,
          f = a.skewX,
          m = a.skewY,
          p = a.scaleX,
          g = a.scaleY,
          x = a.target,
          v = a.xOrigin,
          y = a.yOrigin,
          w = a.xOffset,
          _ = a.yOffset,
          b = a.forceCSS,
          M = parseFloat(u),
          A = parseFloat(l);
        (d = parseFloat(d)),
          (f = parseFloat(f)),
          (m = parseFloat(m)) && ((f += m = parseFloat(m)), (d += m)),
          d || f
            ? ((d *= hn),
              (f *= hn),
              (i = Math.cos(d) * p),
              (s = Math.sin(d) * p),
              (n = Math.sin(d - f) * -g),
              (r = Math.cos(d - f) * g),
              f &&
                ((m *= hn),
                (o = Math.tan(f - m)),
                (n *= o = Math.sqrt(1 + o * o)),
                (r *= o),
                m &&
                  ((o = Math.tan(m)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (s *= o))),
              (i = si(i)),
              (s = si(s)),
              (n = si(n)),
              (r = si(r)))
            : ((i = p), (r = g), (s = n = 0)),
          ((M && !~(u + "").indexOf("px")) ||
            (A && !~(l + "").indexOf("px"))) &&
            ((M = Un(x, "x", u, "px")), (A = Un(x, "y", l, "px"))),
          (v || y || w || _) &&
            ((M = si(M + v - (v * i + y * n) + w)),
            (A = si(A + y - (v * s + y * r) + _))),
          (h || c) &&
            ((o = x.getBBox()),
            (M = si(M + (h / 100) * o.width)),
            (A = si(A + (c / 100) * o.height))),
          (o =
            "matrix(" +
            i +
            "," +
            s +
            "," +
            n +
            "," +
            r +
            "," +
            M +
            "," +
            A +
            ")"),
          x.setAttribute("transform", o),
          b && (x.style[En] = o);
      },
      ar = function (t, e, i, s, n, r) {
        var o,
          a,
          h = 360,
          c = _e(n),
          u = parseFloat(n) * (c && ~n.indexOf("rad") ? an : 1),
          l = r ? u * r : u - s,
          d = s + l + "deg";
        return (
          c &&
            ("short" === (o = n.split("_")[1]) &&
              (l %= h) != l % 180 &&
              (l += l < 0 ? h : -360),
            "cw" === o && l < 0
              ? (l = ((l + 36e9) % h) - ~~(l / h) * h)
              : "ccw" === o &&
                l > 0 &&
                (l = ((l - 36e9) % h) - ~~(l / h) * h)),
          (t._pt = a = new qs(t._pt, e, i, s, l, pn)),
          (a.e = d),
          (a.u = "deg"),
          t._props.push(i),
          a
        );
      },
      hr = function (t, e, i) {
        var s,
          n,
          r,
          o,
          a,
          h,
          c,
          u = sn.style,
          l = i._gsap;
        for (n in ((u.cssText =
          getComputedStyle(i).cssText + ";position:absolute;display:block;"),
        (u[En] = e),
        Ks.body.appendChild(sn),
        (s = Kn(sn, 1)),
        on))
          (r = l[n]) !== (o = s[n]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
            ((a = Ii(r) !== (c = Ii(o)) ? Un(i, n, r, c) : parseFloat(r)),
            (h = parseFloat(o)),
            (t._pt = new qs(t._pt, l, n, a, h - a, mn)),
            (t._pt.u = c || 0),
            t._props.push(n));
        Ks.body.removeChild(sn);
      };
    ii("padding,margin,Width,Radius", function (t, e) {
      var i = "Top",
        s = "Right",
        n = "Bottom",
        r = "Left",
        o = (e < 3 ? [i, s, n, r] : [i + r, i + s, n + s, n + r]).map(
          function (i) {
            return e < 2 ? t + i : "border" + i + t;
          }
        );
      Yn[e > 1 ? "border" + t : t] = function (t, e, i, s, n) {
        var r, a;
        if (arguments.length < 4)
          return (
            (r = o.map(function (e) {
              return jn(t, e, i);
            })),
            5 === (a = r.join(" ")).split(r[0]).length ? r[0] : a
          );
        (r = (s + "").split(" ")),
          (a = {}),
          o.forEach(function (t, e) {
            return (a[t] = r[e] = r[e] || r[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, n);
      };
    });
    var cr,
      ur,
      lr = {
        name: "css",
        register: Ln,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, i, s, n) {
          var r,
            o,
            a,
            h,
            c,
            u,
            l,
            d,
            f,
            m,
            p,
            g,
            x,
            v,
            y,
            w,
            _,
            b,
            M,
            A = this._props,
            T = t.style,
            E = i.vars.startAt;
          for (l in (tn || Ln(), e))
            if (
              "autoRound" !== l &&
              ((o = e[l]), !He[l] || !Os(l, e, i, s, t, n))
            )
              if (
                ((c = typeof o),
                (u = Yn[l]),
                "function" === c && (c = typeof (o = o.call(i, s, t, n))),
                "string" === c && ~o.indexOf("random(") && (o = Gi(o)),
                u)
              )
                u(this, t, l, o, i) && (y = 1);
              else if ("--" === l.substr(0, 2))
                (r = (getComputedStyle(t).getPropertyValue(l) + "").trim()),
                  (o += ""),
                  (d = Ii(r)),
                  (f = Ii(o))
                    ? d !== f && (r = Un(t, l, r, f) + f)
                    : d && (o += d),
                  this.add(T, "setProperty", r, o, s, n, 0, 0, l);
              else if ("undefined" !== c) {
                if (
                  (E && l in E
                    ? ((r =
                        "function" == typeof E[l]
                          ? E[l].call(i, s, t, n)
                          : E[l]),
                      l in le.units && !Ii(r) && (r += le.units[l]),
                      "=" === (r + "").charAt(1) && (r = jn(t, l)))
                    : (r = jn(t, l)),
                  (h = parseFloat(r)),
                  (m =
                    "string" === c && "=" === o.charAt(1)
                      ? +(o.charAt(0) + "1")
                      : 0) && (o = o.substr(2)),
                  (a = parseFloat(o)),
                  l in fn &&
                    ("autoAlpha" === l &&
                      (1 === h &&
                        "hidden" === jn(t, "visibility") &&
                        a &&
                        (h = 0),
                      Bn(
                        this,
                        T,
                        "visibility",
                        h ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== l &&
                      "transform" !== l &&
                      ~(l = fn[l]).indexOf(",") &&
                      (l = l.split(",")[0])),
                  (p = l in on))
                )
                  if (
                    (g ||
                      (((x = t._gsap).renderTransform && !e.parseTransform) ||
                        Kn(t, e.parseTransform),
                      (v = !1 !== e.smoothOrigin && x.smooth),
                      ((g = this._pt =
                        new qs(
                          this._pt,
                          T,
                          En,
                          0,
                          1,
                          x.renderTransform,
                          x,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === l)
                  )
                    (this._pt = new qs(
                      this._pt,
                      x,
                      "scaleY",
                      x.scaleY,
                      m ? m * a : a - x.scaleY
                    )),
                      A.push("scaleY", l),
                      (l += "X");
                  else {
                    if ("transformOrigin" === l) {
                      (_ = void 0),
                        (b = void 0),
                        (M = void 0),
                        (_ = (w = o).split(" ")),
                        (b = _[0]),
                        (M = _[1] || "50%"),
                        ("top" !== b &&
                          "bottom" !== b &&
                          "left" !== M &&
                          "right" !== M) ||
                          ((w = b), (b = M), (M = w)),
                        (_[0] = Xn[b] || b),
                        (_[1] = Xn[M] || M),
                        (o = _.join(" ")),
                        x.svg
                          ? Qn(t, o, 0, v, 0, this)
                          : ((f = parseFloat(o.split(" ")[2]) || 0) !==
                              x.zOrigin &&
                              Bn(this, x, "zOrigin", x.zOrigin, f),
                            Bn(this, T, l, Jn(r), Jn(o)));
                      continue;
                    }
                    if ("svgOrigin" === l) {
                      Qn(t, o, 1, v, 0, this);
                      continue;
                    }
                    if (l in Gn) {
                      ar(this, x, l, h, o, m);
                      continue;
                    }
                    if ("smoothOrigin" === l) {
                      Bn(this, x, "smooth", x.smooth, o);
                      continue;
                    }
                    if ("force3D" === l) {
                      x[l] = o;
                      continue;
                    }
                    if ("transform" === l) {
                      hr(this, o, t);
                      continue;
                    }
                  }
                else l in T || (l = Fn(l) || l);
                if (
                  p ||
                  ((a || 0 === a) && (h || 0 === h) && !dn.test(o) && l in T)
                )
                  a || (a = 0),
                    (d = (r + "").substr((h + "").length)) !==
                      (f = Ii(o) || (l in le.units ? le.units[l] : d)) &&
                      (h = Un(t, l, r, f)),
                    (this._pt = new qs(
                      this._pt,
                      p ? x : T,
                      l,
                      h,
                      m ? m * a : a - h,
                      p ||
                      ("px" !== f && "zIndex" !== l) ||
                      !1 === e.autoRound
                        ? mn
                        : xn
                    )),
                    (this._pt.u = f || 0),
                    d !== f && ((this._pt.b = r), (this._pt.r = gn));
                else if (l in T) Wn.call(this, t, l, r, o);
                else {
                  if (!(l in t)) {
                    je(l, o);
                    continue;
                  }
                  this.add(t, l, t[l], o, s, n);
                }
                A.push(l);
              }
          y && Ys(this);
        },
        get: jn,
        aliases: fn,
        getSetter: function (t, e, i) {
          var s = fn[e];
          return (
            s && s.indexOf(",") < 0 && (e = s),
            e in on && e !== On && (t._gsap.x || jn(t, "x"))
              ? i && nn === i
                ? "scale" === e
                  ? Mn
                  : bn
                : (nn = i || {}) && ("scale" === e ? An : Tn)
              : t.style && !Ae(t.style[e])
              ? wn
              : ~e.indexOf("-")
              ? _n
              : Is(t, e)
          );
        },
        core: { _removeProperty: In, _getMatrix: Zn },
      };
    (Zs.utils.checkPrefix = Fn),
      (ur = ii(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
          "," +
          (cr = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          on[t] = 1;
        }
      )),
      ii(cr, function (t) {
        (le.units[t] = "deg"), (Gn[t] = 1);
      }),
      (fn[ur[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + cr),
      ii(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          fn[e[1]] = ur[e[0]];
        }
      ),
      ii(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          le.units[t] = "px";
        }
      ),
      Zs.registerPlugin(lr);
    var dr = Zs.registerPlugin(lr) || Zs;
    dr.core.Tween;
    const fr = "#000000";
    var mr = i(7320),
      pr = i.n(mr);
    const gr = 1024;
    function xr(t, e, i) {
      return dr.utils.interpolate(t, e, i);
    }
    function vr(t, e, i) {
      return dr.utils.clamp(t, e, i);
    }
    function yr(t, e, i, s, n) {
      return dr.utils.mapRange(e, i, s, n, t);
    }
    const wr = class extends l() {
      constructor({ gl: t, id: e, scene: i, screen: s, viewport: n }) {
        super(),
          (this.gl = t),
          (this.id = e),
          (this.scene = i),
          (this.screen = s),
          (this.viewport = n),
          (this.geometry = new Rt(this.gl, { widthSegments: 40 })),
          (this.element = document.querySelector(`#${e}`)),
          (this.elementWrapper =
            this.element.querySelector(".case__gallery")),
          (this.elementMedias = this.element.querySelectorAll(
            ".case__gallery__media"
          )),
          (this.elementProgress = document.querySelector(
            ".cases__progress__length"
          )),
          (this.background = this.element.getAttribute("data-background")),
          (this.color = this.element.getAttribute("data-color")),
          (this.scroll = { ease: 1.5, current: 0, target: 0, limit: 0 }),
          (this.transformPrefix = f()("transform")),
          (this.element.style[
            this.transformPrefix
          ] = `translate3d(-${Math.floor(this.scroll.current)}px, 0, 0)`),
          this.createMedias(),
          this.onResize();
      }
      createMedias() {
        (this.medias = x(
          this.elementMedias,
          (t, i) =>
            new (class {
              constructor({
                element: t,
                geometry: i,
                gl: s,
                index: n,
                scene: r,
                screen: o,
                viewport: a,
              }) {
                e()(this),
                  (this.element = t),
                  (this.geometry = i),
                  (this.gl = s),
                  (this.index = n),
                  (this.scene = r),
                  (this.screen = o),
                  (this.viewport = a),
                  (this.src = this.element.getAttribute("data-src")),
                  (this.type = this.element.getAttribute("data-type")),
                  (this.multiplier = 0),
                  (this.scroll = 0),
                  this.createTexture(),
                  this.createMesh(),
                  this.onResize();
              }
              createTexture() {
                (this.texture = window.TEXTURES[this.src]),
                  (this.videoButton = this.element.querySelector("button")),
                  this.videoButton &&
                    (this.texture.video.addEventListener(
                      "ended",
                      this.onVideoPaused
                    ),
                    this.texture.video.addEventListener(
                      "paused",
                      this.onVideoPaused
                    ),
                    this.videoButton.addEventListener(
                      "click",
                      this.onVideoToggle
                    ));
              }
              createMesh() {
                const t = new ft(this.gl, {
                  cullFace: !1,
                  fragment:
                    "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvoid main() {\n  vec4 map = texture2D(tMap, vUv);\n\n  map.a *= uAlpha;\n\n  gl_FragColor = map;\n}\n",
                  vertex:
                    "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform float uAngle;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n  return (rotationMatrix(axis, angle) * vec4(v, 1.0)).xyz;\n}\n\nvoid main() {\n  vUv = uv;\n\n  float rad = 0.1;\n  float rolls = 4.0;\n\n  float finalAngle = uAngle - 0.0 * 0.3 * sin(uProgress * 6.0);\n\n  vec3 newPosition = position;\n\n  newPosition = rotate(newPosition - vec3(-0.5, 0.5, 0.0), vec3(0.0, 0.0, 1.0), -finalAngle) + vec3(-0.5, 0.5, 0.0);\n\n  float offset = (newPosition.x + 0.5) / (sin(finalAngle) + cos(finalAngle));\n  float progress = clamp((uProgress - offset * 0.99) / 0.01, 0.0, 1.0);\n\n  newPosition.z = rad + rad * (1.0 - offset /2.0) * sin(-offset * rolls * PI - 0.5 * PI);\n  newPosition.x = -0.5 + rad * (1.0 - offset /2.0) * cos(-offset * rolls * PI + 0.5 * PI);\n\n  newPosition = rotate(newPosition - vec3(-0.5, 0.5, 0.0), vec3(0.0, 0.0, 1.0), finalAngle) + vec3(-0.5, 0.5, 0.0);\n\n  newPosition = rotate(newPosition - vec3(-0.5, 0.5, rad), vec3(sin(finalAngle),cos(finalAngle), 0.0), -PI * uProgress * rolls);\n  newPosition += vec3(\n    -0.5 + uProgress * cos(finalAngle) * (sin(finalAngle) + cos(finalAngle)),\n    0.5 - uProgress * sin(finalAngle) * (sin(finalAngle) + cos(finalAngle)),\n    rad * (1.0 - uProgress / 2.0)\n  );\n\n  newPosition = mix(newPosition, position, progress);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}\n",
                  uniforms: {
                    uAlpha: { value: 0 },
                    uAngle: { value: 0.05 },
                    uProgress: { value: 0 },
                    tMap: { value: this.texture },
                  },
                  transparent: !0,
                });
                (this.mesh = new _t(this.gl, {
                  geometry: this.geometry,
                  program: t,
                  renderOrder: "front" === this.type ? 1 : -1,
                })),
                  (this.mesh.visible = !1),
                  "front" === this.type
                    ? (this.mesh.position.z = 0.01)
                    : (this.mesh.position.z = -0.04),
                  this.mesh.setParent(this.scene);
              }
              createBounds() {
                this.screen.width < gr
                  ? ((this.bounds = g(this.element, this.scroll, 0)),
                    this.updateX(),
                    this.updateY(this.scroll))
                  : ((this.bounds = g(this.element, 0, this.scroll)),
                    this.updateX(this.scroll),
                    this.updateY());
              }
              animateIn() {
                this.timelineOut &&
                  (this.timelineOut.kill(), (this.timelineOut = null)),
                  (this.timelineIn = dr.timeline({
                    delay: 0.5 + 0.1 * this.index,
                  })),
                  this.timelineIn.call((t) => {
                    this.mesh.visible = !0;
                  }),
                  this.timelineIn.fromTo(
                    [
                      this.mesh.program.uniforms.uAlpha,
                      this.mesh.program.uniforms.uProgress,
                    ],
                    { value: 0 },
                    { duration: 1.5, ease: "ease.inOut", value: 1 },
                    0
                  );
              }
              animateOut() {
                this.timelineIn &&
                  (this.timelineIn.kill(), (this.timelineIn = null)),
                  (this.timelineOut = dr.timeline()),
                  this.timelineOut.to(
                    this.mesh.program.uniforms.uAlpha,
                    {
                      duration: 0.5,
                      ease: "ease.inOut",
                      onComplete: (t) => {
                        (this.mesh.visible = !1),
                          this.texture.video &&
                            (this.texture.video.pause(),
                            (this.texture.video.currentTime = 0),
                            this.videoButton.classList.remove(
                              "case__gallery__media__button--playing"
                            ));
                      },
                      value: 0,
                    },
                    0
                  ),
                  this.timelineOut.to(
                    this.mesh.program.uniforms.uProgress,
                    { duration: 0.5, ease: "ease.inOut", value: 0 },
                    0
                  );
              }
              onResize({ screen: t, viewport: e } = {}) {
                return new Promise((i) => {
                  t && (this.screen = t),
                    e && (this.viewport = e),
                    this.createBounds(),
                    i();
                });
              }
              async onVideoToggle() {
                (this.texture.video.muted = !1),
                  this.videoButton.classList.contains(
                    "case__gallery__media__button--playing"
                  )
                    ? (this.videoButton.classList.remove(
                        "case__gallery__media__button--playing"
                      ),
                      this.texture.video.pause())
                    : (this.videoButton.classList.add(
                        "case__gallery__media__button--playing"
                      ),
                      await this.texture.video.play());
              }
              onVideoPaused() {
                this.videoButton.classList.remove(
                  "case__gallery__media__button--playing"
                );
              }
              updateVideo() {
                this.texture.video &&
                  this.texture.video.readyState >=
                    this.texture.video.HAVE_ENOUGH_DATA &&
                  (this.texture.image ||
                    (this.texture.image = this.texture.video),
                  this.texture.video.loop &&
                    ((this.texture.video.currentTime = 0),
                    (this.texture.video.loop = !1),
                    this.texture.video.pause()),
                  (this.texture.needsUpdate = !0));
              }
              updateX(t = 0) {
                this.mesh.position.x =
                  -this.viewport.width / 1 +
                  this.mesh.scale.x / 1 +
                  ((this.bounds.left - t) / this.screen.width) *
                    this.viewport.width;
              }
              updateY(t = 0) {
                this.mesh.position.y =
                  this.viewport.height / 2 -
                  this.mesh.scale.y / 2 -
                  ((this.bounds.top - t) / this.screen.height) *
                    this.viewport.height;
              }
              update(t) {
                (this.scroll = t.current),
                  (this.mesh.scale.x =
                    (this.viewport.width * this.bounds.width) /
                    this.screen.width),
                  (this.mesh.scale.y =
                    (this.viewport.height * this.bounds.height) /
                    this.screen.height),
                  this.updateVideo(),
                  this.screen.width < gr
                    ? (this.updateX(0), this.updateY(this.scroll))
                    : (this.updateX(this.scroll), this.updateY(0));
              }
            })({
              element: t,
              geometry: this.geometry,
              gl: this.gl,
              index: i,
              scene: this.scene,
              screen: this.screen,
              viewport: this.viewport,
            })
        )),
          this.medias.forEach((t) => t.update(0));
      }
      onTouchDown(t) {
        this.isVisible &&
          ((this.isDown = !0),
          (this.scroll.position = this.scroll.current),
          this.screen.width < gr
            ? (this.start = t.touches ? t.touches[0].clientY : t.clientY)
            : (this.start = t.touches ? t.touches[0].clientX : t.clientX));
      }
      onTouchMove(t) {
        if (!this.isDown || !this.isVisible) return;
        let e, i, s;
        this.screen.width < gr
          ? ((i = t.touches ? t.touches[0].clientY : t.clientY),
            (s = 2 * (this.start - i)))
          : ((e = t.touches ? t.touches[0].clientX : t.clientX),
            (s = 2 * (this.start - e))),
          (this.scroll.target = this.scroll.position + s);
      }
      onTouchUp(t) {
        this.isDown = !1;
      }
      onWheel(t) {
        if (!this.isVisible) return;
        const e = 0.5 * pr()(t).pixelY;
        this.scroll.target += e;
      }
      onResize(t = {}) {
        t.screen && (this.screen = t.screen),
          this.screen.width < gr
            ? x(this.elementMedias, (t, e) => {
                const i = t.getAttribute("data-width"),
                  s = (0.9 * window.innerWidth) / i,
                  n = t.getAttribute("data-height");
                (t.style.height = n * s + "px"), (t.style.width = "90%");
              })
            : x(this.elementMedias, (t, e) => {
                const i = t.getAttribute("data-height"),
                  s = (window.innerHeight * yr(i / 880, 0, 1, 0, 0.6)) / i,
                  n = t.getAttribute("data-width");
                (t.style.height = 100 * yr(i / 880, 0, 1, 0, 0.6) + "vh"),
                  (t.style.width = n * s + "px");
              }),
          this.medias.forEach((e) => e.onResize(t)),
          window.requestAnimationFrame((t) => {
            this.screen.width < gr
              ? (this.scroll.limit =
                  this.elementWrapper.clientHeight - this.screen.height)
              : (this.scroll.limit =
                  this.elementWrapper.clientWidth - this.screen.width);
          });
      }
      update() {
        (this.scroll.target = vr(0, this.scroll.limit, this.scroll.target)),
          (this.scroll.current = xr(
            this.scroll.current,
            this.scroll.target,
            this.scroll.ease
          )),
          this.medias.forEach((t) => t.update(this.scroll));
        const t = this.scroll.current / this.scroll.limit;
        this.screen.width < gr
          ? ((this.elementProgress.style[
              this.transformPrefix
            ] = `scaleY(${t})`),
            (this.element.style[
              this.transformPrefix
            ] = `translate3d(0, -${Math.floor(this.scroll.current)}px, 0)`))
          : ((this.elementProgress.style[
              this.transformPrefix
            ] = `scaleX(${t})`),
            (this.element.style[
              this.transformPrefix
            ] = `translate3d(-${Math.floor(this.scroll.current)}px, 0, 0)`));
      }
      animateIn() {
        (this.scroll.target = 0),
          (this.scroll.current = 0),
          (this.isVisible = !0),
          this.medias.map((t) => t.animateIn());
      }
      animateOut() {
        (this.isVisible = !1), this.medias.map((t) => t.animateOut());
      }
    };
    function _r({
      font: t,
      text: e,
      width: i = 1 / 0,
      align: s = "left",
      size: n = 1,
      letterSpacing: r = 0,
      lineHeight: o = 1.4,
      wordSpacing: a = 0,
      wordBreak: h = !1,
    }) {
      const c = this;
      let u, l, d, f, m;
      const p = /\n/,
        g = /\s/;
      function x() {
        (d = t.common.lineHeight), (f = t.common.base), (m = n / f);
        let i = e.replace(/[ \n]/g, "").length;
        l = {
          position: new Float32Array(4 * i * 3),
          uv: new Float32Array(4 * i * 2),
          id: new Float32Array(4 * i),
          index: new Uint16Array(6 * i),
        };
        for (let t = 0; t < i; t++)
          (l.id[t] = t),
            l.index.set(
              [4 * t, 4 * t + 2, 4 * t + 1, 4 * t + 1, 4 * t + 2, 4 * t + 3],
              6 * t
            );
        v();
      }
      function v() {
        const d = [];
        let f = 0,
          x = 0,
          v = 0,
          w = _();
        function _() {
          const t = { width: 0, glyphs: [] };
          return d.push(t), (x = f), (v = 0), t;
        }
        let b = 0;
        for (; f < e.length && b < 100; ) {
          b++;
          const t = e[f];
          if (!w.width && g.test(t)) {
            f++, (x = f), (v = 0);
            continue;
          }
          if (p.test(t)) {
            f++, (w = _());
            continue;
          }
          const s = u[t] || u[" "];
          if (w.glyphs.length) {
            const t = w.glyphs[w.glyphs.length - 1][0];
            let e = y(s.id, t.id) * m;
            (w.width += e), (v += e);
          }
          w.glyphs.push([s, w.width]);
          let o = 0;
          if (
            (g.test(t) ? ((x = f), (v = 0), (o += a * n)) : (o += r * n),
            (o += s.xadvance * m),
            (w.width += o),
            (v += o),
            w.width > i)
          ) {
            if (h && w.glyphs.length > 1) {
              (w.width -= o), w.glyphs.pop(), (w = _());
              continue;
            }
            if (!h && v !== w.width) {
              let t = f - x + 1;
              w.glyphs.splice(-t, t), (f = x), (w.width -= v), (w = _());
              continue;
            }
          }
          f++;
        }
        w.width || d.pop(),
          (function (e) {
            const i = t.common.scaleW,
              r = t.common.scaleH;
            let a = 0.07 * n,
              h = 0;
            for (let t = 0; t < e.length; t++) {
              let c = e[t];
              for (let t = 0; t < c.glyphs.length; t++) {
                const e = c.glyphs[t][0];
                let n = c.glyphs[t][1];
                if (
                  ("center" === s
                    ? (n -= 0.5 * c.width)
                    : "right" === s && (n -= c.width),
                  g.test(e.char))
                )
                  continue;
                (n += e.xoffset * m), (a -= e.yoffset * m);
                let o = e.width * m,
                  u = e.height * m;
                l.position.set(
                  [n, a - u, 0, n, a, 0, n + o, a - u, 0, n + o, a, 0],
                  4 * h * 3
                );
                let d = e.x / i,
                  f = e.width / i,
                  p = 1 - e.y / r,
                  x = e.height / r;
                l.uv.set([d, p - x, d, p, d + f, p - x, d + f, p], 4 * h * 2),
                  (a += e.yoffset * m),
                  h++;
              }
              a -= n * o;
            }
            (c.buffers = l),
              (c.numLines = e.length),
              (c.height = c.numLines * n * o);
          })(d);
      }
      function y(e, i) {
        for (let s = 0; s < t.kernings.length; s++) {
          let n = t.kernings[s];
          if (!(n.first < e || n.second < i))
            return n.first > e || (n.first === e && n.second > i)
              ? 0
              : n.amount;
        }
        return 0;
      }
      (u = {}),
        t.chars.forEach((t) => (u[t.char] = t)),
        x(),
        (this.resize = function (t) {
          ({ width: i } = t), v();
        }),
        (this.update = function (t) {
          ({ text: e } = t), x();
        });
    }
    const br =
        "#define GLSLIFY 1\nuniform float uAlpha;\nuniform vec3 uColor;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 color = texture2D(tMap, vUv).rgb;\n\n  float signed = max(min(color.r, color.g), min(max(color.r, color.g), color.b)) - 0.5;\n  float d = fwidth(signed);\n  float alpha = smoothstep(-d, d, signed);\n\n  if (alpha < 0.02) discard;\n\n  gl_FragColor = vec4(uColor, alpha * uAlpha);\n}\n",
      Mr =
        "#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
      Ar = JSON.parse(
        '{"pages":["Radikal-Bold.png"],"chars":[{"id":36,"index":7,"char":"$","width":28,"height":46,"xoffset":-1,"yoffset":11.0811,"xadvance":25.0195,"chnl":15,"x":0,"y":0,"page":0},{"id":106,"index":77,"char":"j","width":21,"height":46,"xoffset":-10,"yoffset":16.0811,"xadvance":11.833,"chnl":15,"x":29,"y":0,"page":0},{"id":87,"index":58,"char":"W","width":44,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":40.4004,"chnl":15,"x":51,"y":0,"page":0},{"id":37,"index":8,"char":"%","width":40,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":37.7959,"chnl":15,"x":51,"y":36,"page":0},{"id":40,"index":11,"char":"(","width":15,"height":39,"xoffset":0,"yoffset":18.0811,"xadvance":13.5146,"chnl":15,"x":0,"y":73,"page":0},{"id":41,"index":12,"char":")","width":15,"height":39,"xoffset":-1,"yoffset":18.0811,"xadvance":13.5146,"chnl":15,"x":16,"y":73,"page":0},{"id":64,"index":35,"char":"@","width":39,"height":38,"xoffset":-1,"yoffset":21.0811,"xadvance":36.873,"chnl":15,"x":32,"y":73,"page":0},{"id":81,"index":52,"char":"Q","width":38,"height":39,"xoffset":-1,"yoffset":17.0811,"xadvance":34.1865,"chnl":15,"x":72,"y":73,"page":0},{"id":91,"index":62,"char":"[","width":15,"height":38,"xoffset":0,"yoffset":19.0811,"xadvance":13.9658,"chnl":15,"x":111,"y":0,"page":0},{"id":93,"index":64,"char":"]","width":15,"height":38,"xoffset":-1,"yoffset":19.0811,"xadvance":14.1094,"chnl":15,"x":111,"y":39,"page":0},{"id":123,"index":94,"char":"{","width":16,"height":38,"xoffset":-1,"yoffset":19.0811,"xadvance":14.3145,"chnl":15,"x":111,"y":78,"page":0},{"id":124,"index":95,"char":"|","width":10,"height":38,"xoffset":0,"yoffset":19.0811,"xadvance":10.541,"chnl":15,"x":96,"y":0,"page":0},{"id":125,"index":96,"char":"}","width":16,"height":38,"xoffset":-1,"yoffset":19.0811,"xadvance":14.3145,"chnl":15,"x":127,"y":0,"page":0},{"id":109,"index":80,"char":"m","width":37,"height":26,"xoffset":1,"yoffset":26.0811,"xadvance":38.083,"chnl":15,"x":127,"y":39,"page":0},{"id":38,"index":9,"char":"&","width":33,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":29.7773,"chnl":15,"x":144,"y":0,"page":0},{"id":48,"index":19,"char":"0","width":26,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":24.9785,"chnl":15,"x":128,"y":66,"page":0},{"id":51,"index":22,"char":"3","width":25,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":22.0049,"chnl":15,"x":155,"y":66,"page":0},{"id":56,"index":27,"char":"8","width":25,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":23.584,"chnl":15,"x":178,"y":0,"page":0},{"id":63,"index":34,"char":"?","width":24,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":22.0459,"chnl":15,"x":204,"y":0,"page":0},{"id":67,"index":38,"char":"C","width":31,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":28.6289,"chnl":15,"x":181,"y":37,"page":0},{"id":71,"index":42,"char":"G","width":32,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":31.4385,"chnl":15,"x":213,"y":37,"page":0},{"id":77,"index":48,"char":"M","width":35,"height":36,"xoffset":1,"yoffset":17.0811,"xadvance":37.2832,"chnl":15,"x":181,"y":74,"page":0},{"id":78,"index":49,"char":"N","width":29,"height":36,"xoffset":1,"yoffset":17.0811,"xadvance":30.9463,"chnl":15,"x":217,"y":74,"page":0},{"id":79,"index":50,"char":"O","width":36,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":34.1865,"chnl":15,"x":32,"y":112,"page":0},{"id":83,"index":54,"char":"S","width":28,"height":36,"xoffset":-1,"yoffset":17.0811,"xadvance":25.2656,"chnl":15,"x":0,"y":113,"page":0},{"id":98,"index":69,"char":"b","width":26,"height":36,"xoffset":1,"yoffset":16.0811,"xadvance":25.5322,"chnl":15,"x":229,"y":0,"page":0},{"id":100,"index":71,"char":"d","width":26,"height":36,"xoffset":-1,"yoffset":16.0811,"xadvance":25.5322,"chnl":15,"x":69,"y":113,"page":0},{"id":102,"index":73,"char":"f","width":21,"height":36,"xoffset":-1,"yoffset":16.0811,"xadvance":16.2422,"chnl":15,"x":29,"y":149,"page":0},{"id":103,"index":74,"char":"g","width":26,"height":36,"xoffset":-1,"yoffset":26.0811,"xadvance":25.5732,"chnl":15,"x":0,"y":150,"page":0},{"id":104,"index":75,"char":"h","width":24,"height":36,"xoffset":1,"yoffset":16.0811,"xadvance":25.0195,"chnl":15,"x":128,"y":103,"page":0},{"id":105,"index":76,"char":"i","width":11,"height":36,"xoffset":0,"yoffset":16.0811,"xadvance":11.833,"chnl":15,"x":96,"y":113,"page":0},{"id":107,"index":78,"char":"k","width":25,"height":36,"xoffset":1,"yoffset":16.0811,"xadvance":24.2607,"chnl":15,"x":153,"y":103,"page":0},{"id":108,"index":79,"char":"l","width":10,"height":36,"xoffset":1,"yoffset":16.0811,"xadvance":11.833,"chnl":15,"x":246,"y":37,"page":0},{"id":119,"index":90,"char":"w","width":36,"height":26,"xoffset":-2,"yoffset":27.0811,"xadvance":32.5049,"chnl":15,"x":179,"y":111,"page":0},{"id":33,"index":4,"char":"!","width":11,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":12.3457,"chnl":15,"x":51,"y":149,"page":0},{"id":35,"index":6,"char":"#","width":33,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":29.6748,"chnl":15,"x":216,"y":111,"page":0},{"id":47,"index":18,"char":"/","width":26,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":21.9229,"chnl":15,"x":179,"y":138,"page":0},{"id":49,"index":20,"char":"1","width":17,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":16.6729,"chnl":15,"x":108,"y":117,"page":0},{"id":50,"index":21,"char":"2","width":24,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":22.415,"chnl":15,"x":63,"y":150,"page":0},{"id":52,"index":23,"char":"4","width":27,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":24.3018,"chnl":15,"x":206,"y":147,"page":0},{"id":53,"index":24,"char":"5","width":25,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":22.9688,"chnl":15,"x":126,"y":140,"page":0},{"id":54,"index":25,"char":"6","width":25,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":23.584,"chnl":15,"x":152,"y":140,"page":0},{"id":55,"index":26,"char":"7","width":26,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":23.0098,"chnl":15,"x":178,"y":174,"page":0},{"id":57,"index":28,"char":"9","width":25,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":23.584,"chnl":15,"x":0,"y":210,"page":0},{"id":65,"index":36,"char":"A","width":34,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":30.3926,"chnl":15,"x":88,"y":153,"page":0},{"id":66,"index":37,"char":"B","width":28,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":28.3828,"chnl":15,"x":26,"y":210,"page":0},{"id":68,"index":39,"char":"D","width":31,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":30.9873,"chnl":15,"x":55,"y":186,"page":0},{"id":69,"index":40,"char":"E","width":24,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":24.8555,"chnl":15,"x":87,"y":210,"page":0},{"id":70,"index":41,"char":"F","width":23,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":23.2969,"chnl":15,"x":112,"y":210,"page":0},{"id":72,"index":43,"char":"H","width":29,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":31.5,"chnl":15,"x":136,"y":210,"page":0},{"id":73,"index":44,"char":"I","width":10,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":12.5508,"chnl":15,"x":166,"y":176,"page":0},{"id":74,"index":45,"char":"J","width":24,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":23.8506,"chnl":15,"x":166,"y":212,"page":0},{"id":75,"index":46,"char":"K","width":30,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":29.6338,"chnl":15,"x":191,"y":210,"page":0},{"id":76,"index":47,"char":"L","width":24,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":22.9277,"chnl":15,"x":222,"y":183,"page":0},{"id":80,"index":51,"char":"P","width":27,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":27.2959,"chnl":15,"x":222,"y":219,"page":0},{"id":82,"index":53,"char":"R","width":29,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":27.8701,"chnl":15,"x":234,"y":147,"page":0},{"id":84,"index":55,"char":"T","width":30,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":27.7881,"chnl":15,"x":247,"y":183,"page":0},{"id":85,"index":56,"char":"U","width":28,"height":35,"xoffset":1,"yoffset":17.0811,"xadvance":29.1416,"chnl":15,"x":256,"y":0,"page":0},{"id":86,"index":57,"char":"V","width":34,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":30.2285,"chnl":15,"x":247,"y":74,"page":0},{"id":88,"index":59,"char":"X","width":32,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":29.2646,"chnl":15,"x":250,"y":110,"page":0},{"id":89,"index":60,"char":"Y","width":33,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":29.2236,"chnl":15,"x":264,"y":146,"page":0},{"id":90,"index":61,"char":"Z","width":27,"height":35,"xoffset":-1,"yoffset":17.0811,"xadvance":24.9375,"chnl":15,"x":250,"y":219,"page":0},{"id":92,"index":63,"char":"\\\\","width":26,"height":35,"xoffset":-2,"yoffset":17.0811,"xadvance":21.9229,"chnl":15,"x":257,"y":36,"page":0},{"id":112,"index":83,"char":"p","width":26,"height":35,"xoffset":1,"yoffset":26.0811,"xadvance":25.5322,"chnl":15,"x":282,"y":72,"page":0},{"id":113,"index":84,"char":"q","width":26,"height":35,"xoffset":-1,"yoffset":26.0811,"xadvance":25.5322,"chnl":15,"x":284,"y":36,"page":0},{"id":121,"index":92,"char":"y","width":28,"height":35,"xoffset":-2,"yoffset":27.0811,"xadvance":24.3018,"chnl":15,"x":285,"y":0,"page":0},{"id":95,"index":66,"char":"_","width":34,"height":10,"xoffset":0,"yoffset":48.0811,"xadvance":33.3457,"chnl":15,"x":0,"y":246,"page":0},{"id":59,"index":30,"char":";","width":11,"height":33,"xoffset":0,"yoffset":26.0811,"xadvance":10.1924,"chnl":15,"x":92,"y":39,"page":0},{"id":116,"index":87,"char":"t","width":21,"height":33,"xoffset":-2,"yoffset":20.0811,"xadvance":17.8008,"chnl":15,"x":123,"y":176,"page":0},{"id":118,"index":89,"char":"v","width":28,"height":26,"xoffset":-2,"yoffset":27.0811,"xadvance":24.1377,"chnl":15,"x":55,"y":222,"page":0},{"id":126,"index":97,"char":"~","width":28,"height":13,"xoffset":-1,"yoffset":29.0811,"xadvance":25.3066,"chnl":15,"x":87,"y":189,"page":0},{"id":58,"index":29,"char":":","width":11,"height":26,"xoffset":0,"yoffset":26.0811,"xadvance":10.1924,"chnl":15,"x":205,"y":183,"page":0},{"id":97,"index":68,"char":"a","width":26,"height":26,"xoffset":-1,"yoffset":26.0811,"xadvance":25.5322,"chnl":15,"x":283,"y":108,"page":0},{"id":99,"index":70,"char":"c","width":24,"height":26,"xoffset":-1,"yoffset":26.0811,"xadvance":21.3691,"chnl":15,"x":309,"y":72,"page":0},{"id":101,"index":72,"char":"e","width":25,"height":26,"xoffset":-1,"yoffset":26.0811,"xadvance":23.0508,"chnl":15,"x":311,"y":36,"page":0},{"id":110,"index":81,"char":"n","width":24,"height":26,"xoffset":1,"yoffset":26.0811,"xadvance":25.0195,"chnl":15,"x":314,"y":0,"page":0},{"id":111,"index":82,"char":"o","width":26,"height":26,"xoffset":-1,"yoffset":26.0811,"xadvance":24.6914,"chnl":15,"x":278,"y":182,"page":0},{"id":114,"index":85,"char":"r","width":16,"height":26,"xoffset":1,"yoffset":26.0811,"xadvance":15.4424,"chnl":15,"x":145,"y":176,"page":0},{"id":115,"index":86,"char":"s","width":21,"height":26,"xoffset":-1,"yoffset":26.0811,"xadvance":19.7695,"chnl":15,"x":298,"y":135,"page":0},{"id":117,"index":88,"char":"u","width":24,"height":26,"xoffset":0,"yoffset":27.0811,"xadvance":24.8555,"chnl":15,"x":310,"y":99,"page":0},{"id":120,"index":91,"char":"x","width":26,"height":25,"xoffset":-2,"yoffset":27.0811,"xadvance":22.333,"chnl":15,"x":0,"y":47,"page":0},{"id":94,"index":65,"char":"^","width":25,"height":17,"xoffset":-1,"yoffset":16.0811,"xadvance":22.1279,"chnl":15,"x":27,"y":186,"page":0},{"id":122,"index":93,"char":"z","width":22,"height":25,"xoffset":-1,"yoffset":27.0811,"xadvance":20.0977,"chnl":15,"x":27,"y":47,"page":0},{"id":43,"index":14,"char":"+","width":22,"height":23,"xoffset":0,"yoffset":24.0811,"xadvance":21.4922,"chnl":15,"x":334,"y":63,"page":0},{"id":61,"index":32,"char":"=","width":22,"height":21,"xoffset":0,"yoffset":25.0811,"xadvance":21.4922,"chnl":15,"x":0,"y":187,"page":0},{"id":42,"index":13,"char":"*","width":20,"height":19,"xoffset":-1,"yoffset":17.0811,"xadvance":18.1289,"chnl":15,"x":298,"y":162,"page":0},{"id":60,"index":31,"char":"<","width":19,"height":20,"xoffset":-1,"yoffset":25.0811,"xadvance":16.1602,"chnl":15,"x":337,"y":27,"page":0},{"id":62,"index":33,"char":">","width":19,"height":20,"xoffset":-1,"yoffset":25.0811,"xadvance":16.1602,"chnl":15,"x":339,"y":0,"page":0},{"id":45,"index":16,"char":"-","width":19,"height":10,"xoffset":0,"yoffset":34.0811,"xadvance":18.0879,"chnl":15,"x":191,"y":246,"page":0},{"id":44,"index":15,"char":",","width":9,"height":18,"xoffset":0,"yoffset":41.0811,"xadvance":8.8594,"chnl":15,"x":165,"y":37,"page":0},{"id":34,"index":5,"char":"\\"","width":17,"height":17,"xoffset":0,"yoffset":16.0811,"xadvance":15.791,"chnl":15,"x":278,"y":209,"page":0},{"id":39,"index":10,"char":"\'","width":10,"height":17,"xoffset":0,"yoffset":16.0811,"xadvance":7.8955,"chnl":15,"x":278,"y":227,"page":0},{"id":96,"index":67,"char":"`","width":17,"height":10,"xoffset":-1,"yoffset":18.0811,"xadvance":14.0273,"chnl":15,"x":35,"y":246,"page":0},{"id":46,"index":17,"char":".","width":12,"height":12,"xoffset":0,"yoffset":41.0811,"xadvance":10.6641,"chnl":15,"x":337,"y":48,"page":0},{"id":32,"index":3,"char":" ","width":0,"height":0,"xoffset":-2,"yoffset":48.0811,"xadvance":9.5156,"chnl":15,"x":127,"y":66,"page":0}],"info":{"face":"Radikal-Bold","size":42,"bold":0,"italic":0,"charset":[" ","!","\\"","#","$","%","&","\'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],"unicode":1,"stretchH":100,"smooth":1,"aa":1,"padding":[2,2,2,2],"spacing":[0,0]},"common":{"lineHeight":70.4033,"base":48.0811,"scaleW":512,"scaleH":256,"pages":1,"packed":0,"alphaChnl":0,"redChnl":0,"greenChnl":0,"blueChnl":0},"distanceField":{"fieldType":"msdf","distanceRange":4},"kernings":[{"first":34,"second":65,"amount":-0.6768},{"first":34,"second":74,"amount":-6.501},{"first":39,"second":65,"amount":-0.2871},{"first":39,"second":74,"amount":-6.501},{"first":45,"second":84,"amount":-4.5322},{"first":45,"second":86,"amount":-3.4453},{"first":45,"second":87,"amount":-3.4453},{"first":45,"second":89,"amount":-4.1221},{"first":48,"second":52,"amount":-0.6357},{"first":55,"second":52,"amount":-5.8447},{"first":55,"second":54,"amount":-3.0146},{"first":57,"second":52,"amount":-2.2764},{"first":58,"second":86,"amount":-1.5996},{"first":58,"second":87,"amount":-1.5996},{"first":65,"second":34,"amount":-0.6768},{"first":65,"second":39,"amount":-5.291},{"first":65,"second":67,"amount":-1.0459},{"first":65,"second":71,"amount":-1.0459},{"first":65,"second":74,"amount":0.082},{"first":65,"second":79,"amount":-1.0459},{"first":65,"second":81,"amount":-1.0459},{"first":65,"second":84,"amount":-5.7217},{"first":65,"second":85,"amount":-1.0459},{"first":65,"second":86,"amount":-5.8857},{"first":65,"second":87,"amount":-5.4551},{"first":65,"second":89,"amount":-6.2959},{"first":65,"second":97,"amount":-0.5127},{"first":65,"second":99,"amount":-0.5127},{"first":65,"second":100,"amount":-0.5127},{"first":65,"second":101,"amount":-0.5127},{"first":65,"second":111,"amount":-0.5127},{"first":65,"second":113,"amount":-0.5127},{"first":65,"second":116,"amount":-1.292},{"first":65,"second":118,"amount":-3.5684},{"first":65,"second":119,"amount":-3.0762},{"first":65,"second":121,"amount":-3.1172},{"first":66,"second":86,"amount":-1.5996},{"first":66,"second":87,"amount":-1.5996},{"first":66,"second":89,"amount":-1.8867},{"first":66,"second":97,"amount":0.5947},{"first":66,"second":99,"amount":0.5947},{"first":66,"second":100,"amount":0.5947},{"first":66,"second":101,"amount":0.5947},{"first":66,"second":111,"amount":0.5947},{"first":66,"second":113,"amount":0.5947},{"first":67,"second":67,"amount":-0.6357},{"first":67,"second":71,"amount":-0.6357},{"first":67,"second":79,"amount":-0.6357},{"first":67,"second":81,"amount":-0.6357},{"first":68,"second":44,"amount":-1.7637},{"first":68,"second":46,"amount":-1.7637},{"first":68,"second":65,"amount":-1.0459},{"first":68,"second":67,"amount":0.6768},{"first":68,"second":71,"amount":0.6768},{"first":68,"second":79,"amount":0.6768},{"first":68,"second":81,"amount":0.6768},{"first":68,"second":84,"amount":-0.6768},{"first":68,"second":86,"amount":-1.5996},{"first":68,"second":87,"amount":-1.5996},{"first":68,"second":89,"amount":-1.8457},{"first":69,"second":90,"amount":0.2871},{"first":70,"second":41,"amount":0.082},{"first":70,"second":44,"amount":-3.4863},{"first":70,"second":46,"amount":-3.4863},{"first":70,"second":65,"amount":-4.2041},{"first":70,"second":97,"amount":-1.1279},{"first":70,"second":99,"amount":-1.1279},{"first":70,"second":100,"amount":-1.1279},{"first":70,"second":101,"amount":-1.1279},{"first":70,"second":109,"amount":-1.292},{"first":70,"second":110,"amount":-1.292},{"first":70,"second":111,"amount":-1.1279},{"first":70,"second":113,"amount":-1.1279},{"first":70,"second":114,"amount":-1.292},{"first":70,"second":117,"amount":-1.4355},{"first":70,"second":121,"amount":-1.0049},{"first":74,"second":44,"amount":-0.2051},{"first":74,"second":46,"amount":-0.2051},{"first":74,"second":65,"amount":-1.0459},{"first":75,"second":67,"amount":-2.1328},{"first":75,"second":71,"amount":-2.1328},{"first":75,"second":79,"amount":-2.1328},{"first":75,"second":81,"amount":-2.1328},{"first":75,"second":97,"amount":-1.292},{"first":75,"second":99,"amount":-1.292},{"first":75,"second":100,"amount":-1.292},{"first":75,"second":101,"amount":-1.292},{"first":75,"second":111,"amount":-1.292},{"first":75,"second":113,"amount":-1.292},{"first":75,"second":117,"amount":-1.292},{"first":75,"second":121,"amount":-2.6045},{"first":76,"second":39,"amount":-3.6094},{"first":76,"second":45,"amount":-0.3691},{"first":76,"second":67,"amount":-0.4717},{"first":76,"second":71,"amount":-0.4717},{"first":76,"second":79,"amount":-0.4717},{"first":76,"second":81,"amount":-0.4717},{"first":76,"second":84,"amount":-5.332},{"first":76,"second":86,"amount":-5.4551},{"first":76,"second":87,"amount":-5.4551},{"first":76,"second":89,"amount":-5.9678},{"first":76,"second":121,"amount":-2.0098},{"first":79,"second":44,"amount":-1.7637},{"first":79,"second":46,"amount":-1.7637},{"first":79,"second":65,"amount":-1.0459},{"first":79,"second":67,"amount":0.6768},{"first":79,"second":71,"amount":0.6768},{"first":79,"second":79,"amount":0.6768},{"first":79,"second":81,"amount":0.6768},{"first":79,"second":84,"amount":-0.6768},{"first":79,"second":86,"amount":-1.5996},{"first":79,"second":87,"amount":-1.5996},{"first":79,"second":89,"amount":-1.8457},{"first":80,"second":44,"amount":-5.0859},{"first":80,"second":46,"amount":-5.0859},{"first":80,"second":65,"amount":-4.1221},{"first":80,"second":74,"amount":-3.0146},{"first":80,"second":97,"amount":-0.7178},{"first":80,"second":99,"amount":-0.7178},{"first":80,"second":100,"amount":-0.7178},{"first":80,"second":101,"amount":-0.7178},{"first":80,"second":111,"amount":-0.7178},{"first":80,"second":113,"amount":-0.7178},{"first":82,"second":84,"amount":-0.123},{"first":82,"second":85,"amount":-0.082},{"first":82,"second":86,"amount":-0.9639},{"first":82,"second":87,"amount":-0.9639},{"first":84,"second":44,"amount":-4.9629},{"first":84,"second":45,"amount":-4.5322},{"first":84,"second":46,"amount":-4.9629},{"first":84,"second":65,"amount":-5.7217},{"first":84,"second":67,"amount":-0.6768},{"first":84,"second":71,"amount":-0.6768},{"first":84,"second":79,"amount":-0.6768},{"first":84,"second":81,"amount":-0.6768},{"first":84,"second":97,"amount":-5.5781},{"first":84,"second":99,"amount":-5.5781},{"first":84,"second":100,"amount":-5.5781},{"first":84,"second":101,"amount":-5.5781},{"first":84,"second":103,"amount":-5.5781},{"first":84,"second":105,"amount":-0.2051},{"first":84,"second":106,"amount":-0.2051},{"first":84,"second":109,"amount":-4.7783},{"first":84,"second":110,"amount":-4.7783},{"first":84,"second":111,"amount":-5.5781},{"first":84,"second":113,"amount":-5.5781},{"first":84,"second":114,"amount":-4.7783},{"first":84,"second":115,"amount":-1.251},{"first":84,"second":117,"amount":-4.7783},{"first":84,"second":118,"amount":-4.9629},{"first":84,"second":119,"amount":-4.9629},{"first":84,"second":121,"amount":-4.9629},{"first":85,"second":44,"amount":-0.2051},{"first":85,"second":46,"amount":-0.2051},{"first":85,"second":65,"amount":-1.0459},{"first":86,"second":44,"amount":-5.7217},{"first":86,"second":45,"amount":-3.4453},{"first":86,"second":46,"amount":-5.7217},{"first":86,"second":58,"amount":-1.8047},{"first":86,"second":59,"amount":-1.8047},{"first":86,"second":65,"amount":-5.8857},{"first":86,"second":67,"amount":-1.5996},{"first":86,"second":71,"amount":-1.5996},{"first":86,"second":74,"amount":-5.4961},{"first":86,"second":79,"amount":-1.5996},{"first":86,"second":81,"amount":-1.5996},{"first":86,"second":97,"amount":-3.8555},{"first":86,"second":99,"amount":-3.8555},{"first":86,"second":100,"amount":-3.8555},{"first":86,"second":101,"amount":-3.8555},{"first":86,"second":111,"amount":-3.8555},{"first":86,"second":113,"amount":-3.8555},{"first":86,"second":117,"amount":-2.7686},{"first":87,"second":44,"amount":-5.7217},{"first":87,"second":45,"amount":-3.4453},{"first":87,"second":46,"amount":-5.7217},{"first":87,"second":58,"amount":-1.8047},{"first":87,"second":59,"amount":-1.8047},{"first":87,"second":65,"amount":-5.8857},{"first":87,"second":67,"amount":-1.5996},{"first":87,"second":71,"amount":-1.5996},{"first":87,"second":74,"amount":-5.4961},{"first":87,"second":79,"amount":-1.5996},{"first":87,"second":81,"amount":-1.5996},{"first":87,"second":97,"amount":-3.8555},{"first":87,"second":99,"amount":-3.8555},{"first":87,"second":100,"amount":-3.8555},{"first":87,"second":101,"amount":-3.8555},{"first":87,"second":111,"amount":-3.8555},{"first":87,"second":113,"amount":-3.8555},{"first":87,"second":117,"amount":-2.7686},{"first":88,"second":67,"amount":-1.8867},{"first":88,"second":71,"amount":-1.8867},{"first":88,"second":79,"amount":-1.8867},{"first":88,"second":81,"amount":-1.8867},{"first":88,"second":97,"amount":-0.6357},{"first":88,"second":99,"amount":-0.6357},{"first":88,"second":100,"amount":-0.6357},{"first":88,"second":101,"amount":-0.6357},{"first":88,"second":111,"amount":-0.6357},{"first":88,"second":113,"amount":-0.6357},{"first":88,"second":117,"amount":-0.6357},{"first":88,"second":121,"amount":-1.5996},{"first":89,"second":44,"amount":-5.127},{"first":89,"second":45,"amount":-4.1221},{"first":89,"second":46,"amount":-5.127},{"first":89,"second":65,"amount":-6.2959},{"first":89,"second":67,"amount":-1.8457},{"first":89,"second":71,"amount":-1.8457},{"first":89,"second":79,"amount":-1.8457},{"first":89,"second":81,"amount":-1.8457},{"first":89,"second":83,"amount":-0.6357},{"first":89,"second":97,"amount":-4.7373},{"first":89,"second":99,"amount":-4.7373},{"first":89,"second":100,"amount":-4.7373},{"first":89,"second":101,"amount":-4.7373},{"first":89,"second":105,"amount":-0.6357},{"first":89,"second":106,"amount":-0.6357},{"first":89,"second":111,"amount":-4.7373},{"first":89,"second":113,"amount":-4.7373},{"first":89,"second":117,"amount":-3.6504},{"first":89,"second":121,"amount":-2.6865},{"first":91,"second":106,"amount":6.1729},{"first":98,"second":97,"amount":0.2871},{"first":98,"second":99,"amount":0.5537},{"first":98,"second":100,"amount":0.5537},{"first":98,"second":101,"amount":0.5537},{"first":98,"second":103,"amount":0.2051},{"first":98,"second":111,"amount":0.5537},{"first":98,"second":113,"amount":0.5537},{"first":98,"second":118,"amount":-1.3535},{"first":98,"second":119,"amount":-1.3535},{"first":98,"second":120,"amount":-0.4717},{"first":98,"second":121,"amount":-1.3535},{"first":101,"second":99,"amount":0.4102},{"first":101,"second":100,"amount":0.4102},{"first":101,"second":101,"amount":0.4102},{"first":101,"second":103,"amount":0.5127},{"first":101,"second":111,"amount":0.4102},{"first":101,"second":113,"amount":0.4102},{"first":101,"second":118,"amount":-0.9639},{"first":101,"second":119,"amount":-0.9639},{"first":101,"second":120,"amount":-0.5127},{"first":101,"second":121,"amount":-0.6357},{"first":102,"second":39,"amount":1.251},{"first":102,"second":41,"amount":1.1279},{"first":102,"second":44,"amount":-1.7637},{"first":102,"second":46,"amount":-1.7637},{"first":102,"second":49,"amount":0.6357},{"first":102,"second":63,"amount":0.8408},{"first":102,"second":93,"amount":1.3535},{"first":102,"second":97,"amount":-0.041},{"first":102,"second":99,"amount":-0.041},{"first":102,"second":100,"amount":-0.041},{"first":102,"second":101,"amount":-0.041},{"first":102,"second":111,"amount":-0.041},{"first":102,"second":113,"amount":-0.041},{"first":102,"second":125,"amount":1.0869},{"first":104,"second":118,"amount":-1.4766},{"first":104,"second":119,"amount":-1.4766},{"first":104,"second":121,"amount":-1.1689},{"first":107,"second":97,"amount":-0.6357},{"first":107,"second":99,"amount":-0.7998},{"first":107,"second":100,"amount":-0.7998},{"first":107,"second":101,"amount":-0.7998},{"first":107,"second":111,"amount":-0.7998},{"first":107,"second":113,"amount":-0.7998},{"first":109,"second":118,"amount":-1.4766},{"first":109,"second":119,"amount":-1.4766},{"first":109,"second":121,"amount":-1.1689},{"first":110,"second":118,"amount":-1.4766},{"first":110,"second":119,"amount":-1.4766},{"first":110,"second":121,"amount":-1.1689},{"first":111,"second":97,"amount":0.2871},{"first":111,"second":99,"amount":0.5537},{"first":111,"second":100,"amount":0.5537},{"first":111,"second":101,"amount":0.5537},{"first":111,"second":103,"amount":0.2051},{"first":111,"second":111,"amount":0.5537},{"first":111,"second":113,"amount":0.5537},{"first":111,"second":118,"amount":-1.3535},{"first":111,"second":119,"amount":-1.3535},{"first":111,"second":120,"amount":-0.4717},{"first":111,"second":121,"amount":-1.3535},{"first":112,"second":97,"amount":0.2871},{"first":112,"second":99,"amount":0.5537},{"first":112,"second":100,"amount":0.5537},{"first":112,"second":101,"amount":0.5537},{"first":112,"second":103,"amount":0.2051},{"first":112,"second":111,"amount":0.5537},{"first":112,"second":113,"amount":0.5537},{"first":112,"second":118,"amount":-1.3535},{"first":112,"second":119,"amount":-1.3535},{"first":112,"second":120,"amount":-0.4717},{"first":112,"second":121,"amount":-1.3535},{"first":114,"second":44,"amount":-2.0508},{"first":114,"second":45,"amount":-0.2871},{"first":114,"second":46,"amount":-2.0508},{"first":114,"second":116,"amount":0.7998},{"first":114,"second":118,"amount":0.2051},{"first":114,"second":119,"amount":0.2051},{"first":114,"second":121,"amount":0.082},{"first":118,"second":44,"amount":-3.6094},{"first":118,"second":46,"amount":-3.6094},{"first":118,"second":97,"amount":-0.9639},{"first":118,"second":99,"amount":-1.3535},{"first":118,"second":100,"amount":-1.3535},{"first":118,"second":101,"amount":-1.3535},{"first":118,"second":111,"amount":-1.3535},{"first":118,"second":113,"amount":-1.3535},{"first":119,"second":44,"amount":-3.6094},{"first":119,"second":46,"amount":-3.6094},{"first":119,"second":97,"amount":-0.9639},{"first":119,"second":99,"amount":-1.3535},{"first":119,"second":100,"amount":-1.3535},{"first":119,"second":101,"amount":-1.3535},{"first":119,"second":111,"amount":-1.3535},{"first":119,"second":113,"amount":-1.3535},{"first":120,"second":99,"amount":-0.4717},{"first":120,"second":100,"amount":-0.4717},{"first":120,"second":101,"amount":-0.4717},{"first":120,"second":111,"amount":-0.4717},{"first":120,"second":113,"amount":-0.4717},{"first":121,"second":44,"amount":-3.7324},{"first":121,"second":46,"amount":-3.7324},{"first":121,"second":97,"amount":-1.292},{"first":121,"second":99,"amount":-1.3535},{"first":121,"second":100,"amount":-1.3535},{"first":121,"second":101,"amount":-1.3535},{"first":121,"second":103,"amount":-1.292},{"first":121,"second":111,"amount":-1.3535},{"first":121,"second":113,"amount":-1.3535}]}'
      ),
      Tr = i.p + "28acbdc0f55c79c33522b856d60678ee.webp",
      Er = i.p + "d2cf75421b7a564eb2c807ac28521b01.png",
      Or = new q(),
      Cr = new q(),
      Sr = new q(),
      Pr = new I(),
      Fr = new I(),
      Lr = new I(),
      kr = new I(),
      Rr = new I(),
      Dr = new I(),
      zr = new I(),
      Ir = new I(),
      Br = new I(),
      Nr = new I(),
      Ur = new I(),
      jr = new K();
    class Wr {
      constructor() {
        (this.origin = new I()), (this.direction = new I());
      }
      castMouse(t, e = [0, 0]) {
        if ("orthographic" === t.type) {
          const { left: i, right: s, bottom: n, top: r, zoom: o } = t,
            a = i / o + ((s - i) / o) * (0.5 * e[0] + 0.5),
            h = n / o + ((r - n) / o) * (0.5 * e[1] + 0.5);
          this.origin.set(a, h, 0),
            this.origin.applyMatrix4(t.worldMatrix),
            (this.direction.x = -t.worldMatrix[8]),
            (this.direction.y = -t.worldMatrix[9]),
            (this.direction.z = -t.worldMatrix[10]);
        } else
          t.worldMatrix.getTranslation(this.origin),
            this.direction.set(e[0], e[1], 0.5),
            t.unproject(this.direction),
            this.direction.sub(this.origin).normalize();
      }
      intersectBounds(t, { maxDistance: e, output: i = [] } = {}) {
        Array.isArray(t) || (t = [t]);
        const s = jr,
          n = Pr,
          r = Fr,
          o = i;
        return (
          (o.length = 0),
          t.forEach((t) => {
            (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0) ||
              t.geometry.computeBoundingSphere();
            const i = t.geometry.bounds;
            let a;
            if (
              (s.inverse(t.worldMatrix),
              e &&
                (r.copy(this.direction).scaleRotateMatrix4(s),
                (a = e * r.len())),
              n.copy(this.origin).applyMatrix4(s),
              r.copy(this.direction).transformDirection(s),
              e && n.distance(i.center) - i.radius > a)
            )
              return;
            let h = 0;
            if ("sphere" === t.geometry.raycast) {
              if (
                n.distance(i.center) > i.radius &&
                ((h = this.intersectSphere(i, n, r)), !h)
              )
                return;
            } else if (
              (n.x < i.min.x ||
                n.x > i.max.x ||
                n.y < i.min.y ||
                n.y > i.max.y ||
                n.z < i.min.z ||
                n.z > i.max.z) &&
              ((h = this.intersectBox(i, n, r)), !h)
            )
              return;
            (e && h > a) ||
              (t.hit || (t.hit = { localPoint: new I(), point: new I() }),
              t.hit.localPoint.copy(r).multiply(h).add(n),
              t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix),
              (t.hit.distance = t.hit.point.distance(this.origin)),
              o.push(t));
          }),
          o.sort((t, e) => t.hit.distance - e.hit.distance),
          o
        );
      }
      intersectMeshes(
        t,
        {
          cullFace: e = !0,
          maxDistance: i,
          includeUV: s = !0,
          includeNormal: n = !0,
          output: r = [],
        } = {}
      ) {
        const o = this.intersectBounds(t, { maxDistance: i, output: r });
        if (!o.length) return o;
        const a = jr,
          h = Pr,
          c = Fr,
          u = Lr,
          l = kr,
          d = Rr,
          f = Dr,
          m = zr,
          p = Ir,
          g = Or,
          x = Cr,
          v = Sr;
        for (let t = o.length - 1; t >= 0; t--) {
          const r = o[t];
          let y;
          a.inverse(r.worldMatrix),
            i &&
              (c.copy(this.direction).scaleRotateMatrix4(a),
              (y = i * c.len())),
            h.copy(this.origin).applyMatrix4(a),
            c.copy(this.direction).transformDirection(a);
          let w,
            _,
            b,
            M = 0;
          const A = r.geometry,
            T = A.attributes,
            E = T.index,
            O = Math.max(0, A.drawRange.start),
            C = Math.min(
              E ? E.count : T.position.count,
              A.drawRange.start + A.drawRange.count
            );
          for (let t = O; t < C; t += 3) {
            const s = E ? E.data[t] : t,
              n = E ? E.data[t + 1] : t + 1,
              r = E ? E.data[t + 2] : t + 2;
            u.fromArray(T.position.data, 3 * s),
              l.fromArray(T.position.data, 3 * n),
              d.fromArray(T.position.data, 3 * r);
            const o = this.intersectTriangle(u, l, d, e, h, c, m);
            o &&
              ((i && o > y) ||
                ((!M || o < M) &&
                  ((M = o), (w = s), (_ = n), (b = r), f.copy(m))));
          }
          M || o.splice(t, 1),
            r.hit.localPoint.copy(c).multiply(M).add(h),
            r.hit.point.copy(r.hit.localPoint).applyMatrix4(r.worldMatrix),
            (r.hit.distance = r.hit.point.distance(this.origin)),
            r.hit.faceNormal ||
              ((r.hit.localFaceNormal = new I()),
              (r.hit.faceNormal = new I()),
              (r.hit.uv = new q()),
              (r.hit.localNormal = new I()),
              (r.hit.normal = new I())),
            r.hit.localFaceNormal.copy(f),
            r.hit.faceNormal
              .copy(r.hit.localFaceNormal)
              .transformDirection(r.worldMatrix),
            (s || n) &&
              (u.fromArray(T.position.data, 3 * w),
              l.fromArray(T.position.data, 3 * _),
              d.fromArray(T.position.data, 3 * b),
              this.getBarycoord(r.hit.localPoint, u, l, d, p)),
            s &&
              T.uv &&
              (g.fromArray(T.uv.data, 2 * w),
              x.fromArray(T.uv.data, 2 * _),
              v.fromArray(T.uv.data, 2 * b),
              r.hit.uv.set(
                g.x * p.x + x.x * p.y + v.x * p.z,
                g.y * p.x + x.y * p.y + v.y * p.z
              )),
            n &&
              T.normal &&
              (u.fromArray(T.normal.data, 3 * w),
              l.fromArray(T.normal.data, 3 * _),
              d.fromArray(T.normal.data, 3 * b),
              r.hit.localNormal.set(
                u.x * p.x + l.x * p.y + d.x * p.z,
                u.y * p.x + l.y * p.y + d.y * p.z,
                u.z * p.x + l.z * p.y + d.z * p.z
              ),
              r.hit.normal
                .copy(r.hit.localNormal)
                .transformDirection(r.worldMatrix));
        }
        return o.sort((t, e) => t.hit.distance - e.hit.distance), o;
      }
      intersectSphere(t, e = this.origin, i = this.direction) {
        const s = Lr;
        s.sub(t.center, e);
        const n = s.dot(i),
          r = s.dot(s) - n * n,
          o = t.radius * t.radius;
        if (r > o) return 0;
        const a = Math.sqrt(o - r),
          h = n - a,
          c = n + a;
        return h < 0 && c < 0 ? 0 : h < 0 ? c : h;
      }
      intersectBox(t, e = this.origin, i = this.direction) {
        let s, n, r, o, a, h;
        const c = 1 / i.x,
          u = 1 / i.y,
          l = 1 / i.z,
          d = t.min,
          f = t.max;
        return (
          (s = ((c >= 0 ? d.x : f.x) - e.x) * c),
          (n = ((c >= 0 ? f.x : d.x) - e.x) * c),
          (r = ((u >= 0 ? d.y : f.y) - e.y) * u),
          (o = ((u >= 0 ? f.y : d.y) - e.y) * u),
          s > o || r > n
            ? 0
            : (r > s && (s = r),
              o < n && (n = o),
              (a = ((l >= 0 ? d.z : f.z) - e.z) * l),
              (h = ((l >= 0 ? f.z : d.z) - e.z) * l),
              s > h || a > n
                ? 0
                : (a > s && (s = a),
                  h < n && (n = h),
                  n < 0 ? 0 : s >= 0 ? s : n))
        );
      }
      intersectTriangle(
        t,
        e,
        i,
        s = !0,
        n = this.origin,
        r = this.direction,
        o = zr
      ) {
        const a = Ir,
          h = Br,
          c = Nr;
        a.sub(e, t), h.sub(i, t), o.cross(a, h);
        let u,
          l = r.dot(o);
        if (!l) return 0;
        if (l > 0) {
          if (s) return 0;
          u = 1;
        } else (u = -1), (l = -l);
        c.sub(n, t);
        let d = u * r.dot(h.cross(c, h));
        if (d < 0) return 0;
        let f = u * r.dot(a.cross(c));
        if (f < 0) return 0;
        if (d + f > l) return 0;
        let m = -u * c.dot(o);
        return m < 0 ? 0 : m / l;
      }
      getBarycoord(t, e, i, s, n = Ir) {
        const r = Br,
          o = Nr,
          a = Ur;
        r.sub(s, e), o.sub(i, e), a.sub(t, e);
        const h = r.dot(r),
          c = r.dot(o),
          u = r.dot(a),
          l = o.dot(o),
          d = o.dot(a),
          f = h * l - c * c;
        if (0 === f) return n.set(-2, -1, -1);
        const m = 1 / f,
          p = (l * u - c * d) * m,
          g = (h * d - c * u) * m;
        return n.set(1 - p - g, g, p);
      }
    }
    var Xr = i(569),
      Vr = i.n(Xr),
      Yr = i(4849),
      qr = i.n(Yr);
    const Gr = JSON.parse(
        '{"pages":["Radikal-Medium.png"],"chars":[{"id":36,"index":7,"char":"$","width":27,"height":46,"xoffset":-1,"yoffset":10.5684,"xadvance":24.6914,"chnl":15,"x":0,"y":0,"page":0},{"id":106,"index":77,"char":"j","width":20,"height":45,"xoffset":-9,"yoffset":16.5684,"xadvance":11.1563,"chnl":15,"x":28,"y":0,"page":0},{"id":87,"index":58,"char":"W","width":44,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":40.7695,"chnl":15,"x":49,"y":0,"page":0},{"id":37,"index":8,"char":"%","width":39,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":37.1602,"chnl":15,"x":49,"y":36,"page":0},{"id":40,"index":11,"char":"(","width":14,"height":39,"xoffset":0,"yoffset":17.5684,"xadvance":12.7969,"chnl":15,"x":28,"y":46,"page":0},{"id":41,"index":12,"char":")","width":14,"height":39,"xoffset":-1,"yoffset":17.5684,"xadvance":12.7969,"chnl":15,"x":0,"y":86,"page":0},{"id":81,"index":52,"char":"Q","width":37,"height":39,"xoffset":-1,"yoffset":16.5684,"xadvance":34.002,"chnl":15,"x":89,"y":36,"page":0},{"id":64,"index":35,"char":"@","width":38,"height":38,"xoffset":-1,"yoffset":20.5684,"xadvance":36.4424,"chnl":15,"x":15,"y":86,"page":0},{"id":91,"index":62,"char":"[","width":14,"height":38,"xoffset":0,"yoffset":18.5684,"xadvance":13.3916,"chnl":15,"x":0,"y":47,"page":0},{"id":93,"index":64,"char":"]","width":14,"height":38,"xoffset":-1,"yoffset":18.5684,"xadvance":13.5967,"chnl":15,"x":54,"y":76,"page":0},{"id":123,"index":94,"char":"{","width":16,"height":38,"xoffset":-1,"yoffset":18.5684,"xadvance":14.1914,"chnl":15,"x":69,"y":73,"page":0},{"id":124,"index":95,"char":"|","width":9,"height":38,"xoffset":1,"yoffset":18.5684,"xadvance":10.1924,"chnl":15,"x":15,"y":47,"page":0},{"id":125,"index":96,"char":"}","width":16,"height":38,"xoffset":-1,"yoffset":18.5684,"xadvance":14.1914,"chnl":15,"x":86,"y":76,"page":0},{"id":109,"index":80,"char":"m","width":37,"height":26,"xoffset":1,"yoffset":25.5684,"xadvance":38.083,"chnl":15,"x":94,"y":0,"page":0},{"id":38,"index":9,"char":"&","width":32,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":29.2646,"chnl":15,"x":103,"y":76,"page":0},{"id":48,"index":19,"char":"0","width":26,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":24.8555,"chnl":15,"x":127,"y":27,"page":0},{"id":51,"index":22,"char":"3","width":24,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":22.0049,"chnl":15,"x":136,"y":64,"page":0},{"id":56,"index":27,"char":"8","width":25,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":23.2559,"chnl":15,"x":154,"y":0,"page":0},{"id":63,"index":34,"char":"?","width":23,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":21.2871,"chnl":15,"x":180,"y":0,"page":0},{"id":67,"index":38,"char":"C","width":31,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":28.5879,"chnl":15,"x":204,"y":0,"page":0},{"id":71,"index":42,"char":"G","width":31,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":31.2334,"chnl":15,"x":161,"y":37,"page":0},{"id":77,"index":48,"char":"M","width":34,"height":36,"xoffset":1,"yoffset":16.5684,"xadvance":36.9551,"chnl":15,"x":161,"y":74,"page":0},{"id":78,"index":49,"char":"N","width":28,"height":36,"xoffset":1,"yoffset":16.5684,"xadvance":30.7822,"chnl":15,"x":193,"y":37,"page":0},{"id":79,"index":50,"char":"O","width":35,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":34.002,"chnl":15,"x":196,"y":74,"page":0},{"id":83,"index":54,"char":"S","width":27,"height":36,"xoffset":-1,"yoffset":16.5684,"xadvance":24.8965,"chnl":15,"x":222,"y":37,"page":0},{"id":98,"index":69,"char":"b","width":25,"height":36,"xoffset":1,"yoffset":15.5684,"xadvance":25.1836,"chnl":15,"x":0,"y":126,"page":0},{"id":100,"index":71,"char":"d","width":25,"height":36,"xoffset":-1,"yoffset":15.5684,"xadvance":25.1836,"chnl":15,"x":0,"y":163,"page":0},{"id":102,"index":73,"char":"f","width":20,"height":36,"xoffset":-1,"yoffset":15.5684,"xadvance":15.5654,"chnl":15,"x":236,"y":0,"page":0},{"id":103,"index":74,"char":"g","width":25,"height":36,"xoffset":-1,"yoffset":25.5684,"xadvance":25.2246,"chnl":15,"x":0,"y":200,"page":0},{"id":104,"index":75,"char":"h","width":23,"height":36,"xoffset":1,"yoffset":15.5684,"xadvance":24.7324,"chnl":15,"x":136,"y":101,"page":0},{"id":107,"index":78,"char":"k","width":24,"height":36,"xoffset":1,"yoffset":15.5684,"xadvance":23.4199,"chnl":15,"x":232,"y":74,"page":0},{"id":108,"index":79,"char":"l","width":9,"height":36,"xoffset":1,"yoffset":15.5684,"xadvance":11.1563,"chnl":15,"x":69,"y":112,"page":0},{"id":119,"index":90,"char":"w","width":36,"height":26,"xoffset":-2,"yoffset":26.5684,"xadvance":32.2793,"chnl":15,"x":26,"y":125,"page":0},{"id":33,"index":4,"char":"!","width":10,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":11.6279,"chnl":15,"x":103,"y":113,"page":0},{"id":35,"index":6,"char":"#","width":33,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":29.6748,"chnl":15,"x":160,"y":111,"page":0},{"id":47,"index":18,"char":"/","width":24,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":20.8154,"chnl":15,"x":114,"y":138,"page":0},{"id":49,"index":20,"char":"1","width":16,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":16.1602,"chnl":15,"x":139,"y":138,"page":0},{"id":50,"index":21,"char":"2","width":24,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":22.333,"chnl":15,"x":63,"y":149,"page":0},{"id":52,"index":23,"char":"4","width":27,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":23.8096,"chnl":15,"x":26,"y":152,"page":0},{"id":53,"index":24,"char":"5","width":24,"height":35,"xoffset":0,"yoffset":16.5684,"xadvance":22.7637,"chnl":15,"x":88,"y":149,"page":0},{"id":54,"index":25,"char":"6","width":25,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":23.2559,"chnl":15,"x":26,"y":188,"page":0},{"id":55,"index":26,"char":"7","width":25,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":22.7637,"chnl":15,"x":52,"y":188,"page":0},{"id":57,"index":28,"char":"9","width":25,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":23.2559,"chnl":15,"x":78,"y":185,"page":0},{"id":65,"index":36,"char":"A","width":33,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":29.8184,"chnl":15,"x":78,"y":221,"page":0},{"id":66,"index":37,"char":"B","width":28,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":28.0957,"chnl":15,"x":104,"y":185,"page":0},{"id":68,"index":39,"char":"D","width":30,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":30.8643,"chnl":15,"x":112,"y":221,"page":0},{"id":69,"index":40,"char":"E","width":24,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":24.5273,"chnl":15,"x":133,"y":174,"page":0},{"id":70,"index":41,"char":"F","width":23,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":22.9277,"chnl":15,"x":143,"y":210,"page":0},{"id":72,"index":43,"char":"H","width":29,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":31.1104,"chnl":15,"x":158,"y":147,"page":0},{"id":73,"index":44,"char":"I","width":9,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":11.792,"chnl":15,"x":167,"y":183,"page":0},{"id":74,"index":45,"char":"J","width":24,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":23.2148,"chnl":15,"x":167,"y":219,"page":0},{"id":75,"index":46,"char":"K","width":29,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":28.752,"chnl":15,"x":177,"y":183,"page":0},{"id":76,"index":47,"char":"L","width":23,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":22.8867,"chnl":15,"x":188,"y":147,"page":0},{"id":80,"index":51,"char":"P","width":26,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":26.5781,"chnl":15,"x":194,"y":111,"page":0},{"id":82,"index":53,"char":"R","width":27,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":27.1729,"chnl":15,"x":192,"y":219,"page":0},{"id":84,"index":55,"char":"T","width":30,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":27.501,"chnl":15,"x":207,"y":183,"page":0},{"id":85,"index":56,"char":"U","width":27,"height":35,"xoffset":1,"yoffset":16.5684,"xadvance":29.0186,"chnl":15,"x":212,"y":147,"page":0},{"id":86,"index":57,"char":"V","width":33,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":30.1055,"chnl":15,"x":221,"y":111,"page":0},{"id":88,"index":59,"char":"X","width":32,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":28.6289,"chnl":15,"x":220,"y":219,"page":0},{"id":89,"index":60,"char":"Y","width":32,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":28.4238,"chnl":15,"x":238,"y":183,"page":0},{"id":90,"index":61,"char":"Z","width":27,"height":35,"xoffset":-1,"yoffset":16.5684,"xadvance":24.6094,"chnl":15,"x":240,"y":147,"page":0},{"id":92,"index":63,"char":"\\\\","width":24,"height":35,"xoffset":-2,"yoffset":16.5684,"xadvance":20.8154,"chnl":15,"x":255,"y":111,"page":0},{"id":105,"index":76,"char":"i","width":10,"height":35,"xoffset":0,"yoffset":16.5684,"xadvance":11.1563,"chnl":15,"x":268,"y":147,"page":0},{"id":112,"index":83,"char":"p","width":25,"height":35,"xoffset":1,"yoffset":25.5684,"xadvance":25.1836,"chnl":15,"x":250,"y":37,"page":0},{"id":113,"index":84,"char":"q","width":25,"height":35,"xoffset":-1,"yoffset":25.5684,"xadvance":25.1836,"chnl":15,"x":257,"y":0,"page":0},{"id":121,"index":92,"char":"y","width":27,"height":35,"xoffset":-1,"yoffset":26.5684,"xadvance":23.6865,"chnl":15,"x":253,"y":219,"page":0},{"id":95,"index":66,"char":"_","width":34,"height":9,"xoffset":0,"yoffset":47.5684,"xadvance":33.4688,"chnl":15,"x":0,"y":237,"page":0},{"id":116,"index":87,"char":"t","width":21,"height":33,"xoffset":-2,"yoffset":19.5684,"xadvance":17.2061,"chnl":15,"x":79,"y":115,"page":0},{"id":59,"index":30,"char":";","width":10,"height":32,"xoffset":0,"yoffset":25.5684,"xadvance":9.3516,"chnl":15,"x":35,"y":224,"page":0},{"id":118,"index":89,"char":"v","width":27,"height":26,"xoffset":-2,"yoffset":26.5684,"xadvance":23.3789,"chnl":15,"x":46,"y":224,"page":0},{"id":126,"index":97,"char":"~","width":27,"height":12,"xoffset":-1,"yoffset":28.5684,"xadvance":24.9785,"chnl":15,"x":271,"y":183,"page":0},{"id":58,"index":29,"char":":","width":10,"height":26,"xoffset":0,"yoffset":25.5684,"xadvance":9.3516,"chnl":15,"x":132,"y":0,"page":0},{"id":97,"index":68,"char":"a","width":25,"height":26,"xoffset":-1,"yoffset":25.5684,"xadvance":25.1836,"chnl":15,"x":279,"y":147,"page":0},{"id":99,"index":70,"char":"c","width":24,"height":26,"xoffset":-1,"yoffset":25.5684,"xadvance":21.2871,"chnl":15,"x":257,"y":73,"page":0},{"id":101,"index":72,"char":"e","width":24,"height":26,"xoffset":-1,"yoffset":25.5684,"xadvance":22.6201,"chnl":15,"x":276,"y":36,"page":0},{"id":110,"index":81,"char":"n","width":23,"height":26,"xoffset":1,"yoffset":25.5684,"xadvance":24.7324,"chnl":15,"x":283,"y":0,"page":0},{"id":111,"index":82,"char":"o","width":26,"height":26,"xoffset":-1,"yoffset":25.5684,"xadvance":24.3838,"chnl":15,"x":280,"y":100,"page":0},{"id":114,"index":85,"char":"r","width":15,"height":26,"xoffset":1,"yoffset":25.5684,"xadvance":14.6426,"chnl":15,"x":282,"y":63,"page":0},{"id":115,"index":86,"char":"s","width":21,"height":26,"xoffset":-1,"yoffset":25.5684,"xadvance":19.4414,"chnl":15,"x":298,"y":63,"page":0},{"id":117,"index":88,"char":"u","width":23,"height":26,"xoffset":1,"yoffset":26.5684,"xadvance":24.4658,"chnl":15,"x":301,"y":27,"page":0},{"id":94,"index":65,"char":"^","width":25,"height":17,"xoffset":-1,"yoffset":15.5684,"xadvance":22.251,"chnl":15,"x":280,"y":127,"page":0},{"id":120,"index":91,"char":"x","width":25,"height":25,"xoffset":-2,"yoffset":26.5684,"xadvance":21.6152,"chnl":15,"x":307,"y":0,"page":0},{"id":122,"index":93,"char":"z","width":22,"height":25,"xoffset":-1,"yoffset":26.5684,"xadvance":19.5234,"chnl":15,"x":281,"y":196,"page":0},{"id":43,"index":14,"char":"+","width":22,"height":22,"xoffset":0,"yoffset":23.5684,"xadvance":20.8975,"chnl":15,"x":281,"y":222,"page":0},{"id":61,"index":32,"char":"=","width":22,"height":19,"xoffset":0,"yoffset":25.5684,"xadvance":20.8975,"chnl":15,"x":299,"y":174,"page":0},{"id":42,"index":13,"char":"*","width":20,"height":19,"xoffset":-1,"yoffset":16.5684,"xadvance":17.6777,"chnl":15,"x":114,"y":113,"page":0},{"id":60,"index":31,"char":"<","width":18,"height":20,"xoffset":-1,"yoffset":24.5684,"xadvance":15.4424,"chnl":15,"x":305,"y":145,"page":0},{"id":62,"index":33,"char":">","width":18,"height":20,"xoffset":-1,"yoffset":24.5684,"xadvance":15.4424,"chnl":15,"x":307,"y":90,"page":0},{"id":45,"index":16,"char":"-","width":19,"height":9,"xoffset":0,"yoffset":34.5684,"xadvance":18.2109,"chnl":15,"x":113,"y":174,"page":0},{"id":34,"index":5,"char":"\\"","width":16,"height":16,"xoffset":0,"yoffset":15.5684,"xadvance":14.4375,"chnl":15,"x":306,"y":127,"page":0},{"id":39,"index":10,"char":"\'","width":9,"height":16,"xoffset":0,"yoffset":15.5684,"xadvance":7.2188,"chnl":15,"x":271,"y":196,"page":0},{"id":44,"index":15,"char":",","width":9,"height":16,"xoffset":0,"yoffset":41.5684,"xadvance":8.2646,"chnl":15,"x":143,"y":0,"page":0},{"id":96,"index":67,"char":"`","width":16,"height":10,"xoffset":-1,"yoffset":17.5684,"xadvance":13.1455,"chnl":15,"x":143,"y":246,"page":0},{"id":46,"index":17,"char":".","width":11,"height":11,"xoffset":0,"yoffset":41.5684,"xadvance":9.7412,"chnl":15,"x":281,"y":245,"page":0},{"id":32,"index":3,"char":" ","width":0,"height":0,"xoffset":-2,"yoffset":47.5684,"xadvance":9.7412,"chnl":15,"x":15,"y":125,"page":0}],"info":{"face":"Radikal-Medium","size":42,"bold":0,"italic":0,"charset":[" ","!","\\"","#","$","%","&","\'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],"unicode":1,"stretchH":100,"smooth":1,"aa":1,"padding":[2,2,2,2],"spacing":[0,0]},"common":{"lineHeight":69.1729,"base":47.5684,"scaleW":512,"scaleH":256,"pages":1,"packed":0,"alphaChnl":0,"redChnl":0,"greenChnl":0,"blueChnl":0},"distanceField":{"fieldType":"msdf","distanceRange":4},"kernings":[{"first":34,"second":65,"amount":-1.1689},{"first":34,"second":74,"amount":-6.6445},{"first":39,"second":65,"amount":-0.5127},{"first":39,"second":74,"amount":-6.6445},{"first":45,"second":84,"amount":-4.4502},{"first":45,"second":86,"amount":-3.5273},{"first":45,"second":87,"amount":-3.5273},{"first":45,"second":89,"amount":-4.04},{"first":48,"second":52,"amount":-0.5127},{"first":55,"second":52,"amount":-5.6602},{"first":55,"second":54,"amount":-3.1172},{"first":57,"second":52,"amount":-1.7637},{"first":58,"second":86,"amount":-1.251},{"first":58,"second":87,"amount":-1.251},{"first":65,"second":34,"amount":-1.1689},{"first":65,"second":39,"amount":-4.8809},{"first":65,"second":67,"amount":-0.9229},{"first":65,"second":71,"amount":-0.9229},{"first":65,"second":74,"amount":0.1641},{"first":65,"second":79,"amount":-0.9229},{"first":65,"second":81,"amount":-0.9229},{"first":65,"second":84,"amount":-5.7627},{"first":65,"second":85,"amount":-0.9229},{"first":65,"second":86,"amount":-5.4551},{"first":65,"second":87,"amount":-5.0039},{"first":65,"second":89,"amount":-5.9678},{"first":65,"second":97,"amount":-0.3691},{"first":65,"second":99,"amount":-0.3691},{"first":65,"second":100,"amount":-0.3691},{"first":65,"second":101,"amount":-0.3691},{"first":65,"second":111,"amount":-0.3691},{"first":65,"second":113,"amount":-0.3691},{"first":65,"second":116,"amount":-1.0049},{"first":65,"second":118,"amount":-2.9736},{"first":65,"second":119,"amount":-2.3994},{"first":65,"second":121,"amount":-2.6045},{"first":66,"second":86,"amount":-1.5176},{"first":66,"second":87,"amount":-1.5176},{"first":66,"second":89,"amount":-1.7637},{"first":66,"second":97,"amount":0.5537},{"first":66,"second":99,"amount":0.5537},{"first":66,"second":100,"amount":0.5537},{"first":66,"second":101,"amount":0.5537},{"first":66,"second":111,"amount":0.5537},{"first":66,"second":113,"amount":0.5537},{"first":67,"second":67,"amount":-0.5127},{"first":67,"second":71,"amount":-0.5127},{"first":67,"second":79,"amount":-0.5127},{"first":67,"second":81,"amount":-0.5127},{"first":68,"second":44,"amount":-1.8457},{"first":68,"second":46,"amount":-1.8457},{"first":68,"second":65,"amount":-0.9229},{"first":68,"second":67,"amount":0.7178},{"first":68,"second":71,"amount":0.7178},{"first":68,"second":79,"amount":0.7178},{"first":68,"second":81,"amount":0.7178},{"first":68,"second":84,"amount":-0.8408},{"first":68,"second":86,"amount":-1.3945},{"first":68,"second":87,"amount":-1.3945},{"first":68,"second":89,"amount":-1.6816},{"first":69,"second":90,"amount":0.3691},{"first":70,"second":41,"amount":0.1641},{"first":70,"second":44,"amount":-3.6094},{"first":70,"second":46,"amount":-3.6094},{"first":70,"second":65,"amount":-3.7324},{"first":70,"second":97,"amount":-1.0049},{"first":70,"second":99,"amount":-1.0049},{"first":70,"second":100,"amount":-1.0049},{"first":70,"second":101,"amount":-1.0049},{"first":70,"second":109,"amount":-1.0049},{"first":70,"second":110,"amount":-1.0049},{"first":70,"second":111,"amount":-1.0049},{"first":70,"second":113,"amount":-1.0049},{"first":70,"second":114,"amount":-1.0049},{"first":70,"second":117,"amount":-1.251},{"first":70,"second":121,"amount":-0.8408},{"first":74,"second":44,"amount":-0.3281},{"first":74,"second":46,"amount":-0.3281},{"first":74,"second":65,"amount":-0.9229},{"first":75,"second":67,"amount":-1.8457},{"first":75,"second":71,"amount":-1.8457},{"first":75,"second":79,"amount":-1.8457},{"first":75,"second":81,"amount":-1.8457},{"first":75,"second":97,"amount":-1.0049},{"first":75,"second":99,"amount":-1.0049},{"first":75,"second":100,"amount":-1.0049},{"first":75,"second":101,"amount":-1.0049},{"first":75,"second":111,"amount":-1.0049},{"first":75,"second":113,"amount":-1.0049},{"first":75,"second":117,"amount":-1.0049},{"first":75,"second":121,"amount":-2.3584},{"first":76,"second":39,"amount":-3.1992},{"first":76,"second":45,"amount":-0.6768},{"first":76,"second":67,"amount":-0.6357},{"first":76,"second":71,"amount":-0.6357},{"first":76,"second":79,"amount":-0.6357},{"first":76,"second":81,"amount":-0.6357},{"first":76,"second":84,"amount":-5.5371},{"first":76,"second":86,"amount":-5.4551},{"first":76,"second":87,"amount":-5.4551},{"first":76,"second":89,"amount":-6.0498},{"first":76,"second":121,"amount":-1.9277},{"first":79,"second":44,"amount":-1.8457},{"first":79,"second":46,"amount":-1.8457},{"first":79,"second":65,"amount":-0.9229},{"first":79,"second":67,"amount":0.7178},{"first":79,"second":71,"amount":0.7178},{"first":79,"second":79,"amount":0.7178},{"first":79,"second":81,"amount":0.7178},{"first":79,"second":84,"amount":-0.8408},{"first":79,"second":86,"amount":-1.3945},{"first":79,"second":87,"amount":-1.3945},{"first":79,"second":89,"amount":-1.6816},{"first":80,"second":44,"amount":-5.127},{"first":80,"second":46,"amount":-5.127},{"first":80,"second":65,"amount":-3.7734},{"first":80,"second":74,"amount":-3.3633},{"first":80,"second":97,"amount":-0.5947},{"first":80,"second":99,"amount":-0.5947},{"first":80,"second":100,"amount":-0.5947},{"first":80,"second":101,"amount":-0.5947},{"first":80,"second":111,"amount":-0.5947},{"first":80,"second":113,"amount":-0.5947},{"first":82,"second":84,"amount":-0.2461},{"first":82,"second":85,"amount":-0.1641},{"first":82,"second":86,"amount":-0.7588},{"first":82,"second":87,"amount":-0.7588},{"first":84,"second":44,"amount":-4.8809},{"first":84,"second":45,"amount":-4.4502},{"first":84,"second":46,"amount":-4.8809},{"first":84,"second":65,"amount":-5.7627},{"first":84,"second":67,"amount":-0.8408},{"first":84,"second":71,"amount":-0.8408},{"first":84,"second":79,"amount":-0.8408},{"first":84,"second":81,"amount":-0.8408},{"first":84,"second":97,"amount":-5.4961},{"first":84,"second":99,"amount":-5.4961},{"first":84,"second":100,"amount":-5.4961},{"first":84,"second":101,"amount":-5.4961},{"first":84,"second":103,"amount":-5.4961},{"first":84,"second":105,"amount":-0.3281},{"first":84,"second":106,"amount":-0.3281},{"first":84,"second":109,"amount":-4.7373},{"first":84,"second":110,"amount":-4.7373},{"first":84,"second":111,"amount":-5.4961},{"first":84,"second":113,"amount":-5.4961},{"first":84,"second":114,"amount":-4.7373},{"first":84,"second":115,"amount":-2.1738},{"first":84,"second":117,"amount":-4.7373},{"first":84,"second":118,"amount":-4.8809},{"first":84,"second":119,"amount":-4.8809},{"first":84,"second":121,"amount":-4.8809},{"first":85,"second":44,"amount":-0.3281},{"first":85,"second":46,"amount":-0.3281},{"first":85,"second":65,"amount":-0.9229},{"first":86,"second":44,"amount":-5.4141},{"first":86,"second":45,"amount":-3.5273},{"first":86,"second":46,"amount":-5.4141},{"first":86,"second":58,"amount":-1.5996},{"first":86,"second":59,"amount":-1.5996},{"first":86,"second":65,"amount":-5.4551},{"first":86,"second":67,"amount":-1.3945},{"first":86,"second":71,"amount":-1.3945},{"first":86,"second":74,"amount":-5.209},{"first":86,"second":79,"amount":-1.3945},{"first":86,"second":81,"amount":-1.3945},{"first":86,"second":97,"amount":-3.4863},{"first":86,"second":99,"amount":-3.4863},{"first":86,"second":100,"amount":-3.4863},{"first":86,"second":101,"amount":-3.4863},{"first":86,"second":111,"amount":-3.4863},{"first":86,"second":113,"amount":-3.4863},{"first":86,"second":117,"amount":-2.3584},{"first":87,"second":44,"amount":-5.4141},{"first":87,"second":45,"amount":-3.5273},{"first":87,"second":46,"amount":-5.4141},{"first":87,"second":58,"amount":-1.5996},{"first":87,"second":59,"amount":-1.5996},{"first":87,"second":65,"amount":-5.4551},{"first":87,"second":67,"amount":-1.3945},{"first":87,"second":71,"amount":-1.3945},{"first":87,"second":74,"amount":-5.209},{"first":87,"second":79,"amount":-1.3945},{"first":87,"second":81,"amount":-1.3945},{"first":87,"second":97,"amount":-3.4863},{"first":87,"second":99,"amount":-3.4863},{"first":87,"second":100,"amount":-3.4863},{"first":87,"second":101,"amount":-3.4863},{"first":87,"second":111,"amount":-3.4863},{"first":87,"second":113,"amount":-3.4863},{"first":87,"second":117,"amount":-2.3584},{"first":88,"second":67,"amount":-1.7637},{"first":88,"second":71,"amount":-1.7637},{"first":88,"second":79,"amount":-1.7637},{"first":88,"second":81,"amount":-1.7637},{"first":88,"second":97,"amount":-0.5127},{"first":88,"second":99,"amount":-0.5127},{"first":88,"second":100,"amount":-0.5127},{"first":88,"second":101,"amount":-0.5127},{"first":88,"second":111,"amount":-0.5127},{"first":88,"second":113,"amount":-0.5127},{"first":88,"second":117,"amount":-0.5127},{"first":88,"second":121,"amount":-1.251},{"first":89,"second":44,"amount":-4.8809},{"first":89,"second":45,"amount":-4.04},{"first":89,"second":46,"amount":-4.8809},{"first":89,"second":65,"amount":-5.9678},{"first":89,"second":67,"amount":-1.6816},{"first":89,"second":71,"amount":-1.6816},{"first":89,"second":79,"amount":-1.6816},{"first":89,"second":81,"amount":-1.6816},{"first":89,"second":83,"amount":-0.5127},{"first":89,"second":97,"amount":-4.5322},{"first":89,"second":99,"amount":-4.5322},{"first":89,"second":100,"amount":-4.5322},{"first":89,"second":101,"amount":-4.5322},{"first":89,"second":105,"amount":-0.5127},{"first":89,"second":106,"amount":-0.5127},{"first":89,"second":111,"amount":-4.5322},{"first":89,"second":113,"amount":-4.5322},{"first":89,"second":117,"amount":-3.5273},{"first":89,"second":121,"amount":-2.6455},{"first":91,"second":106,"amount":5.8447},{"first":98,"second":97,"amount":0.2871},{"first":98,"second":99,"amount":0.5947},{"first":98,"second":100,"amount":0.5947},{"first":98,"second":101,"amount":0.5947},{"first":98,"second":103,"amount":0.2051},{"first":98,"second":111,"amount":0.5947},{"first":98,"second":113,"amount":0.5947},{"first":98,"second":118,"amount":-1.0869},{"first":98,"second":119,"amount":-1.0869},{"first":98,"second":120,"amount":-0.5127},{"first":98,"second":121,"amount":-1.0869},{"first":101,"second":99,"amount":0.4102},{"first":101,"second":100,"amount":0.4102},{"first":101,"second":101,"amount":0.4102},{"first":101,"second":103,"amount":0.5947},{"first":101,"second":111,"amount":0.4102},{"first":101,"second":113,"amount":0.4102},{"first":101,"second":118,"amount":-0.7588},{"first":101,"second":119,"amount":-0.7588},{"first":101,"second":120,"amount":-0.3691},{"first":101,"second":121,"amount":-0.5127},{"first":102,"second":39,"amount":1.251},{"first":102,"second":41,"amount":1.3535},{"first":102,"second":44,"amount":-1.8457},{"first":102,"second":46,"amount":-1.8457},{"first":102,"second":49,"amount":0.5127},{"first":102,"second":63,"amount":0.8408},{"first":102,"second":93,"amount":1.4355},{"first":102,"second":97,"amount":-0.082},{"first":102,"second":99,"amount":-0.082},{"first":102,"second":100,"amount":-0.082},{"first":102,"second":101,"amount":-0.082},{"first":102,"second":111,"amount":-0.082},{"first":102,"second":113,"amount":-0.082},{"first":102,"second":125,"amount":1.251},{"first":104,"second":118,"amount":-1.3535},{"first":104,"second":119,"amount":-1.3535},{"first":104,"second":121,"amount":-1.0869},{"first":107,"second":97,"amount":-0.5127},{"first":107,"second":99,"amount":-0.7588},{"first":107,"second":100,"amount":-0.7588},{"first":107,"second":101,"amount":-0.7588},{"first":107,"second":111,"amount":-0.7588},{"first":107,"second":113,"amount":-0.7588},{"first":109,"second":118,"amount":-1.3535},{"first":109,"second":119,"amount":-1.3535},{"first":109,"second":121,"amount":-1.0869},{"first":110,"second":118,"amount":-1.3535},{"first":110,"second":119,"amount":-1.3535},{"first":110,"second":121,"amount":-1.0869},{"first":111,"second":97,"amount":0.2871},{"first":111,"second":99,"amount":0.5947},{"first":111,"second":100,"amount":0.5947},{"first":111,"second":101,"amount":0.5947},{"first":111,"second":103,"amount":0.2051},{"first":111,"second":111,"amount":0.5947},{"first":111,"second":113,"amount":0.5947},{"first":111,"second":118,"amount":-1.0869},{"first":111,"second":119,"amount":-1.0869},{"first":111,"second":120,"amount":-0.5127},{"first":111,"second":121,"amount":-1.0869},{"first":112,"second":97,"amount":0.2871},{"first":112,"second":99,"amount":0.5947},{"first":112,"second":100,"amount":0.5947},{"first":112,"second":101,"amount":0.5947},{"first":112,"second":103,"amount":0.2051},{"first":112,"second":111,"amount":0.5947},{"first":112,"second":113,"amount":0.5947},{"first":112,"second":118,"amount":-1.0869},{"first":112,"second":119,"amount":-1.0869},{"first":112,"second":120,"amount":-0.5127},{"first":112,"second":121,"amount":-1.0869},{"first":114,"second":44,"amount":-2.0098},{"first":114,"second":45,"amount":-0.5127},{"first":114,"second":46,"amount":-2.0098},{"first":114,"second":116,"amount":0.7588},{"first":114,"second":118,"amount":0.3281},{"first":114,"second":119,"amount":0.3281},{"first":114,"second":121,"amount":0.1641},{"first":118,"second":44,"amount":-3.3223},{"first":118,"second":46,"amount":-3.3223},{"first":118,"second":97,"amount":-0.7588},{"first":118,"second":99,"amount":-1.0869},{"first":118,"second":100,"amount":-1.0869},{"first":118,"second":101,"amount":-1.0869},{"first":118,"second":111,"amount":-1.0869},{"first":118,"second":113,"amount":-1.0869},{"first":119,"second":44,"amount":-3.3223},{"first":119,"second":46,"amount":-3.3223},{"first":119,"second":97,"amount":-0.7588},{"first":119,"second":99,"amount":-1.0869},{"first":119,"second":100,"amount":-1.0869},{"first":119,"second":101,"amount":-1.0869},{"first":119,"second":111,"amount":-1.0869},{"first":119,"second":113,"amount":-1.0869},{"first":120,"second":99,"amount":-0.5127},{"first":120,"second":100,"amount":-0.5127},{"first":120,"second":101,"amount":-0.5127},{"first":120,"second":111,"amount":-0.5127},{"first":120,"second":113,"amount":-0.5127},{"first":121,"second":44,"amount":-3.5684},{"first":121,"second":46,"amount":-3.5684},{"first":121,"second":97,"amount":-1.0049},{"first":121,"second":99,"amount":-1.0869},{"first":121,"second":100,"amount":-1.0869},{"first":121,"second":101,"amount":-1.0869},{"first":121,"second":103,"amount":-1.0049},{"first":121,"second":111,"amount":-1.0869},{"first":121,"second":113,"amount":-1.0869}]}'
      ),
      Hr = i.p + "6a8f6d77be25a6b9dffebef9e7f204e3.png",
      $r = i.p + "90105e77e1646e97ad5486aeb9217a3f.webp",
      Zr =
        "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\nuniform float uAlpha;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 map = texture2D(tMap, vUv);\n\n  map.a *= uAlpha;\n\n  gl_FragColor = map;\n}\n",
      Qr =
        "#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uProgress;\nuniform float uScale;\nuniform float uTime;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 newPosition = position;\n\n  newPosition.z += cos(newPosition.x * 1.2) * 17.5 * uScale + cos((newPosition.y + 0.1) * 1.2) * cos((newPosition.x + 0.2) * 1.2);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}\n",
      Kr = 2 * Math.PI,
      Jr = class extends l() {
        constructor({ classes: t, element: i, elements: s }) {
          super(),
            e()(this),
            (this.classes = t),
            (this.element =
              i instanceof window.HTMLElement
                ? i
                : document.querySelector(i)),
            (this.elements = {}),
            h()(s, (t, e) => {
              t instanceof window.HTMLElement ||
              t instanceof window.NodeList ||
              Array.isArray(t)
                ? (this.elements[e] = t)
                : ((this.elements[e] = this.element.querySelectorAll(t)),
                  0 === this.elements[e].length
                    ? (this.elements[e] = null)
                    : 1 === this.elements[e].length &&
                      (this.elements[e] = this.element.querySelector(t)));
            }),
            this.addEventListeners();
        }
        addEventListeners() {}
        removeEventListeners() {}
        destroy() {
          this.removeEventListeners();
        }
      },
      to = class extends Jr {
        constructor() {
          super({
            classes: {
              active: "cursor--active",
              draggable: "cursor--draggable",
            },
            element: ".cursor",
            elements: { bullet: ".cursor__bullet" },
          }),
            (this.lerp = { current: 0.15, target: 0.15 }),
            (this.opacity = { current: 0, target: 0 }),
            (this.scale = { target: 1, current: 1 }),
            (this.x = {
              current: window.innerWidth / 2,
              target: window.innerWidth / 2,
            }),
            (this.y = {
              current: window.innerHeight / 2,
              target: window.innerHeight / 2,
            }),
            (this.transformPrefix = f()("transform"));
        }
        onChange(t) {
          (this.url = t),
            "/about" === this.url
              ? this.element.classList.remove(this.classes.draggable)
              : this.element.classList.add(this.classes.draggable),
            this.addEventListeners();
        }
        onEnter() {
          this.opacity.target = 0;
        }
        onLeave() {
          this.opacity.target = 1;
        }
        onTouchDown() {
          this.url &&
            (("/" !== this.url && -1 === this.url.indexOf("case")) ||
              this.element.classList.add(this.classes.active),
            (this.scale.target = 1),
            (this.lerp.target = 0.35));
        }
        onTouchMove({ clientX: t, clientY: e }) {
          (this.x.target = t), (this.y.target = e);
        }
        onTouchUp() {
          this.url &&
            (("/" !== this.url && -1 === this.url.indexOf("case")) ||
              this.element.classList.remove(this.classes.active),
            (this.scale.target = 1),
            (this.lerp.target = 0.15));
        }
        update() {
          (this.lerp.current = xr(this.lerp.current, this.lerp.target, 0.15)),
            (this.scale.current = xr(
              this.scale.current,
              this.scale.target,
              0.15
            )),
            (this.opacity.current = xr(
              this.opacity.current,
              this.opacity.target,
              0.15
            )),
            (this.x.current = xr(
              this.x.current,
              this.x.target,
              this.lerp.current
            )),
            (this.y.current = xr(
              this.y.current,
              this.y.target,
              this.lerp.current
            )),
            "/" === this.url
              ? (this.elements.bullet.style[
                  this.transformPrefix
                ] = `translate3d(${this.x.current}px, ${this.y.current}px, 0) scale(${this.scale.current}) rotate(90deg)`)
              : (this.elements.bullet.style[
                  this.transformPrefix
                ] = `translate3d(${this.x.current}px, ${this.y.current}px, 0) scale(${this.scale.current})`),
            (this.elements.bullet.style.opacity = this.opacity.current);
        }
        show() {
          this.opacity.target = 1;
        }
        addEventListeners() {
          x(document.querySelectorAll("a, button"), (t) => {
            t.isSet ||
              ((t.isSet = !0),
              t.addEventListener("mouseenter", this.onEnter),
              t.addEventListener("mouseleave", this.onLeave));
          });
        }
      },
      eo = class extends Jr {
        constructor({ url: t }) {
          super({
            classes: {
              active: "navigation--active",
              hidden: "navigation--hidden",
              easter: "easter-egg",
              linksActive: "navigation__menu__link--active",
            },
            element: ".navigation",
            elements: {
              copyright: ".navigation__copyright",
              links: ".navigation__menu__link",
              toggle: ".navigation__toggle",
            },
          }),
            this.onChange(t);
        }
        onChange(t) {
          this.element.classList.remove(this.classes.active),
            "/" === t || -1 !== t.indexOf("case")
              ? this.element.classList.add(this.classes.hidden)
              : this.element.classList.remove(this.classes.hidden),
            h()(this.elements.links, (e) => {
              const i = e.href.replace(window.location.origin, "");
              t === i
                ? e.classList.add(this.classes.linksActive)
                : e.classList.remove(this.classes.linksActive);
            });
        }
        onToggle() {
          this.element.classList.contains(this.classes.active)
            ? this.element.classList.remove(this.classes.active)
            : this.element.classList.add(this.classes.active);
        }
        addEventListeners() {
          this.elements.toggle.addEventListener("click", this.onToggle);
        }
      };
    i(9045);
    const io = class extends Jr {
      constructor({ canvas: t }) {
        super({
          classes: {},
          element: ".preloader",
          elements: {
            text: ".preloader__text",
            media: ".preloader__media",
            mediaIcon: ".preloader__media__icon",
            mediaLeft: ".preloader__media__icon__left",
            mediaRight: ".preloader__media__icon__right",
            mediaFade: ".preloader__media__icon__fade, .preloader__media__r",
          },
        }),
          (window.TEXTURES = {}),
          (this.counter = { current: 0, target: 0 }),
          (this.sources = document.querySelectorAll(
            ".work__item, .case__gallery__media"
          )),
          c.isWebPSupported()
            ? (this.textures = [Tr, $r])
            : (this.textures = [Er, Hr]),
          (this.textures = [
            ...this.textures,
            ...x(this.sources, (t) => t.getAttribute("data-src")),
          ]),
          (this.textures = qr()(this.textures)),
          (this.texturesLoaded = 0),
          (this.texturesLength = this.textures.length),
          (this.canvas = t),
          (this.gl = this.canvas.gl),
          (this.transformPrefix = f()("transform")),
          this.create();
      }
      async create() {
        this.onLoop(),
          this.animateIn(),
          await this.onLoad(),
          window.requestAnimationFrame((t) => {
            this.emit("create", !0);
          });
      }
      animateIn() {
        (this.timelineIn = dr.timeline()),
          this.timelineIn.to(this.elements.media, {
            autoAlpha: 1,
            duration: 0.4,
          }),
          this.timelineIn.fromTo(
            this.elements.mediaRight,
            { scaleY: 0, transformOrigin: "0 50%" },
            {
              duration: 1,
              ease: "expo.inOut",
              scaleY: 1,
              transformOrigin: "0 50%",
            }
          ),
          this.timelineIn.to(
            this.elements.mediaIcon,
            { duration: 1, ease: "expo.inOut", rotation: 45 },
            "-=0.25"
          ),
          this.timelineIn.fromTo(
            this.elements.mediaLeft,
            { scaleX: 0, transformOrigin: "50% 0" },
            {
              duration: 1,
              ease: "expo.inOut",
              scaleX: 1,
              transformOrigin: "50% 0",
            },
            "-=0.25"
          ),
          this.timelineIn.to(
            this.elements.mediaIcon,
            { duration: 1.5, ease: "expo.inOut", rotation: 315 },
            "show-=0.25"
          ),
          this.timelineIn.fromTo(
            this.elements.mediaFade,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1.5, ease: "expo.inOut" },
            "show"
          ),
          this.timelineIn.call((t) => {
            this.isAnimatedIn = !0;
          });
      }
      async onLoad() {
        for (let t = 0; t < this.textures.length; t++)
          await new Promise((e) => {
            const i = this.textures[t],
              s = new ct(this.gl, { generateMipmaps: !1 });
            if (((window.TEXTURES[i] = s), i.indexOf("mp4") > -1))
              (s.video = document.createElement("video")),
                (s.video.crossOrigin = "anonymous"),
                (s.video.loop = !0),
                (s.video.muted = !0),
                (s.video.src = i),
                s.video.setAttribute("webkit-playsinline", !0),
                s.video.setAttribute("playsinline", !0),
                s.video.play(),
                this.onLoaded(),
                e();
            else {
              const t = new window.Image();
              (t.crossOrigin = "anonymous"),
                (t.src = i),
                (t.onload = (i) => {
                  (s.image = t), this.onLoaded(), e();
                });
            }
          });
        return Promise.resolve();
      }
      onLoaded() {
        (this.texturesLoaded += 1),
          (this.counter.target =
            (this.texturesLoaded / this.texturesLength) * 100);
      }
      onLoop() {
        (this.counter.current = xr(
          this.counter.current,
          this.counter.target,
          0.1
        )),
          (this.elements.text.innerHTML = `${Math.round(
            Math.min(this.counter.current, 100)
          )}%`),
          this.isAnimatedIn &&
            this.texturesLoaded === this.texturesLength &&
            ((this.counter.target = 100),
            (this.isAnimatedIn = !1),
            this.onComplete()),
          (this.frame = window.requestAnimationFrame(this.onLoop.bind(this)));
      }
      onComplete() {
        Object.keys(window.TEXTURES).map((t) => {
          window.TEXTURES[t].needsUpdate = !0;
        }),
          (this.timelineOut = dr.timeline({ delay: 1 })),
          this.timelineOut.call((t) => {
            window.cancelAnimationFrame(this.frame);
          }),
          this.timelineOut.to(this.element, { autoAlpha: 0, duration: 1 }),
          this.timelineOut.call((t) => {
            this.emit("complete");
          });
      }
    };
    class so {
      constructor() {
        e()(this),
          c.isMobile() || this.createCursor(),
          this.createNavigation(),
          this.createCanvas(),
          this.createPreloader(),
          this.createPages(),
          this.addEventListeners(),
          this.addLinksEventsListeners(),
          this.update();
      }
      createCursor() {
        this.cursor = new to();
      }
      createNavigation() {
        this.navigation = new eo({ url: window.location.pathname });
      }
      createPages() {
        (this.about = new y()),
          (this.case = new w()),
          (this.work = new _()),
          (this.pages = {
            "/": this.work,
            "/about": this.about,
            "/case": this.case,
          });
      }
      createPreloader() {
        (this.preloader = new io({ canvas: this.canvas })),
          this.preloader.on("create", this.onPreloaderCreated),
          this.preloader.on("complete", this.onPreloaderCompleted);
      }
      onPreloaderCreated() {
        this.onResize(), this.canvas.onTextures();
      }
      onPreloaderCompleted() {
        this.cursor && this.cursor.show(),
          document.documentElement.classList.add("preloaded"),
          this.onChange({ url: window.location.pathname });
      }
      createCanvas() {
        this.canvas = new (class {
          constructor({ url: t }) {
            e()(this),
              (this.background = new E("#FFFFFF")),
              (this.color = new E(fr)),
              (this.url = t),
              (this.renderer = new U({
                dpr: Math.min(window.devicePixelRatio, 2),
              })),
              (this.mouse = new q()),
              (this.mouseLast = new q()),
              (this.gl = this.renderer.gl),
              this.gl.clearColor(
                this.background.r,
                this.background.g,
                this.background.b,
                1
              ),
              document.body.appendChild(this.gl.canvas),
              this.createCamera(),
              this.createScene(),
              this.createFlowmap(),
              this.onResize();
          }
          createCamera() {
            (this.camera = new rt(this.gl)),
              (this.camera.fov = 45),
              (this.camera.position.z = 50);
          }
          createScene() {
            this.scene = new et();
          }
          createFlowmap() {
            (this.velocity = new q()),
              (this.flowmap = new Ct(this.gl, {
                alpha: 1,
                falloff: 0.2,
                dissipation: 0.9,
              })),
              (this.post = new Ft(this.gl)),
              (this.resolution = { value: new q() }),
              (this.pass = this.post.addPass({
                fragment:
                  "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\nuniform sampler2D tFlow;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 flow = texture2D(tFlow, vUv).rgb;\n\n  vec2 uv = vUv;\n\n  uv -= flow.xy * (0.15 * 0.5);\n\n  vec4 color = texture2D(tMap, uv);\n\n  gl_FragColor = color;\n}\n",
                uniforms: {
                  uResolution: this.resolution,
                  tFlow: this.flowmap.uniform,
                },
              }));
          }
          createWork() {
            this.work = new (class {
              constructor({
                camera: t,
                color: i,
                gl: s,
                renderer: n,
                scene: r,
                screen: o,
                url: a,
                viewport: h,
              }) {
                e()(this),
                  (this.element = document.querySelector(".work")),
                  (this.elements =
                    this.element.querySelectorAll(".work__item")),
                  (this.camera = t),
                  (this.color = i),
                  (this.gl = s),
                  (this.renderer = n),
                  (this.scene = r),
                  (this.screen = o),
                  (this.url = a),
                  (this.viewport = h),
                  (this.counter = qr()(
                    x(this.elements, (t) => t.getAttribute("data-src"))
                  ).length),
                  (this.length = this.elements.length),
                  (this.mouse = new q()),
                  (this.raycast = new Wr(this.gl)),
                  (this.scroll = {
                    current: 0,
                    target: 0,
                    lerp: 0.1,
                    last: 0,
                    speed: { current: 0, target: 0 },
                  }),
                  (this.onCheckDebounce = Vr()(this.onCheck, 200)),
                  this.createTextures(),
                  this.createTitles(),
                  this.createMedia(),
                  (this.raycastMeshes = this.titles.map((t) => t.mesh)),
                  this.onResize();
              }
              createTextures() {
                this.textures = x(this.elements, (t, e) => {
                  const i = t.getAttribute("data-src");
                  return window.TEXTURES[i];
                });
              }
              createMedia() {
                this.media = new (class {
                  constructor({
                    gl: t,
                    index: i,
                    length: s,
                    scene: n,
                    screen: r,
                    textures: o,
                    viewport: a,
                  }) {
                    e()(this),
                      (this.gl = t),
                      (this.index = i),
                      (this.length = s),
                      (this.scene = n),
                      (this.screen = r),
                      (this.textures = o),
                      (this.viewport = a),
                      (this.geometry = new Rt(this.gl, {
                        heightSegments: 27,
                        widthSegments: 48,
                      })),
                      this.geometry.computeBoundingBox(),
                      (this.scale =
                        this.screen.width <= 1440
                          ? Math.min(this.screen.width / 1440, 1)
                          : 1),
                      (this.rotation = { current: 0, target: 0, extra: 0 }),
                      this.createMeshFront(),
                      this.createMeshBack();
                  }
                  createMeshFront() {
                    (this.meshFront = new _t(this.gl, {
                      geometry: this.geometry,
                      program: new ft(this.gl, {
                        cullFace: !1,
                        fragment: Zr,
                        vertex: Qr,
                        uniforms: {
                          uAlpha: { value: 0 },
                          uProgress: { value: 0 },
                          tMap: { value: this.textures[0] },
                          uScale: { value: this.scale },
                        },
                        transparent: !0,
                      }),
                    })),
                      (this.meshFront.rotation.x = 0.04 * -Math.PI),
                      (this.meshFront.rotation.y = 0.01 * -Math.PI),
                      (this.meshFront.position.z = 0.01);
                  }
                  createMeshBack() {
                    (this.meshBack = new _t(this.gl, {
                      geometry: this.geometry,
                      program: new ft(this.gl, {
                        cullFace: !1,
                        fragment: Zr,
                        vertex: Qr,
                        uniforms: {
                          uAlpha: { value: 0 },
                          uProgress: { value: 0 },
                          tMap: {
                            value: this.textures[this.textures.length - 1],
                          },
                          uScale: { value: this.scale },
                        },
                        transparent: !0,
                      }),
                    })),
                      (this.meshBack.rotation.x = 0.04 * -Math.PI),
                      (this.meshBack.rotation.y = 0.01 * -Math.PI),
                      (this.wrapper = new et()),
                      (this.wrapper.position.y =
                        0.05 * -this.viewport.height),
                      (this.rotate = new et()),
                      this.rotate.setParent(this.wrapper),
                      this.meshFront.setParent(this.rotate),
                      this.meshBack.setParent(this.rotate),
                      this.wrapper.setParent(this.scene);
                  }
                  animateIn() {
                    this.timelineOut &&
                      (this.timelineOut.kill(), (this.timelineOut = null)),
                      (this.timelineIn = dr.timeline()),
                      this.timelineIn.call((t) => {
                        (this.meshFront.visible = !0),
                          (this.meshBack.visible = !0);
                      }),
                      this.timelineIn.to(
                        [
                          this.meshFront.program.uniforms.uAlpha,
                          this.meshBack.program.uniforms.uAlpha,
                        ],
                        { duration: 1.5, ease: "power3.inOut", value: 1 },
                        0.5
                      ),
                      this.timelineIn.fromTo(
                        this.rotation,
                        { extra: Math.PI },
                        { duration: 1.5, ease: "power3.inOut", extra: 0 },
                        0.5
                      );
                  }
                  animateOut() {
                    this.timelineIn &&
                      (this.timelineIn.kill(), (this.timelineIn = null)),
                      (this.timelineOut = dr.timeline()),
                      this.timelineOut.to(
                        [
                          this.meshFront.program.uniforms.uAlpha,
                          this.meshBack.program.uniforms.uAlpha,
                        ],
                        { duration: 1, ease: "power3.inOut", value: 0 },
                        0
                      ),
                      this.timelineOut.to(
                        this.rotation,
                        {
                          duration: 1,
                          ease: "power3.inOut",
                          extra: -Math.PI,
                        },
                        0
                      ),
                      this.timelineOut.call((t) => {
                        (this.meshFront.visible = !1),
                          (this.meshBack.visible = !1);
                      });
                  }
                  onResize({ screen: t, viewport: e } = {}, i) {
                    t && (this.screen = t),
                      e && (this.viewport = e),
                      this.screen.width < gr
                        ? ((this.scale = 0.4),
                          (this.meshFront.program.uniforms.uScale.value =
                            1.4 * this.scale),
                          (this.meshBack.program.uniforms.uScale.value =
                            1.4 * this.scale))
                        : ((this.scale = 1),
                          (this.meshFront.program.uniforms.uScale.value =
                            this.scale),
                          (this.meshBack.program.uniforms.uScale.value =
                            this.scale)),
                      (this.width = 1440 * this.scale * 0.4),
                      (this.height = 880 * this.scale * 0.4),
                      (this.meshFront.scale.x =
                        (this.viewport.width * this.width) /
                        this.screen.width),
                      (this.meshFront.scale.y =
                        (this.viewport.height * this.height) /
                        this.screen.height),
                      (this.meshBack.scale.x =
                        (this.viewport.width * this.width) /
                        this.screen.width),
                      (this.meshBack.scale.y =
                        (this.viewport.height * this.height) /
                        this.screen.height),
                      (this.heightTotal = i);
                  }
                  update({ scroll: t }) {
                    (this.rotation.current = yr(
                      t.current,
                      0,
                      this.heightTotal,
                      0,
                      -Kr * this.length
                    )),
                      (this.rotate.rotation.y =
                        this.rotation.current + this.rotation.extra);
                    let e =
                      Math.round(-this.rotate.rotation.y / Kr) % this.length;
                    e < 0 &&
                      (e =
                        (this.length - Math.abs(e % this.length)) %
                        this.length),
                      (this.meshFront.program.uniforms.tMap.value =
                        this.textures[e]);
                    let i = t.current < t.last ? Math.PI : -Math.PI,
                      s =
                        Math.round((-this.rotate.rotation.y + i) / Kr) %
                        this.length;
                    s < 0 &&
                      (s =
                        (this.length - Math.abs(s % this.length)) %
                        this.length);
                    const n = Math.abs(this.rotate.rotation.y % Kr);
                    (n > 5.05 || n < 1.25) &&
                      (this.meshBack.program.uniforms.tMap.value =
                        this.textures[s]);
                    let r = Math.abs(
                      0.5 - Math.abs(t.clamp / this.heightTotal)
                    );
                    this.wrapper.rotation.z =
                      0.01 * Math.PI +
                      yr(r, 0, 0.5, 0.12 * -Math.PI, 0.12 * Math.PI);
                  }
                })({
                  gl: this.gl,
                  length: this.length,
                  scene: this.scene,
                  screen: this.screen,
                  textures: this.textures,
                  viewport: this.viewport,
                });
              }
              createTitles() {
                (this.titles = x(
                  this.elements,
                  (t, i) =>
                    new (class {
                      constructor({
                        color: t,
                        counter: i,
                        element: s,
                        gl: n,
                        index: r,
                        length: o,
                        renderer: a,
                        scene: h,
                        screen: c,
                        url: u,
                        viewport: l,
                      }) {
                        e()(this),
                          (this.color = t),
                          (this.counter = i),
                          (this.element = s),
                          (this.gl = n),
                          (this.index = r),
                          (this.length = o),
                          (this.renderer = a),
                          (this.scene = h),
                          (this.screen = c),
                          (this.url = u),
                          (this.viewport = l),
                          (this.animation = 0),
                          (this.positionExtra = 0),
                          (this.position = 0),
                          (this.scroll = { current: 0 }),
                          (this.href = s.getAttribute("href")),
                          (this.text = s
                            .querySelector(".work__item__title")
                            .textContent.toUpperCase()),
                          this.createMesh(),
                          this.createNumber();
                      }
                      createShader(t) {
                        const e = `${t}`,
                          i = `\n      #extension GL_OES_standard_derivatives : enable\n\n      precision highp float;\n\n      ${br}\n    `,
                          s = `#version 300 es\n\n      #define attribute in\n      #define varying out\n\n      ${t}\n    `,
                          n = `#version 300 es\n\n      precision highp float;\n\n      #define varying in\n      #define texture2D texture\n      #define gl_FragColor FragColor\n\n      out vec4 FragColor;\n\n      ${br}\n    `;
                        return this.renderer.isWebgl2
                          ? { vertex: s, fragment: n }
                          : { vertex: e, fragment: i };
                      }
                      async createMesh() {
                        const t = new _r({
                            align: "left",
                            font: Ar,
                            letterSpacing: -0.05,
                            size: 3.7,
                            text: this.text,
                            wordSpacing: 0,
                          }),
                          e = [];
                        for (
                          let i = 0;
                          i < t.buffers.position.length;
                          i += 12
                        ) {
                          let s = i / (t.buffers.position.length - 1);
                          (e[i + 0] = s),
                            (e[i + 1] = s),
                            (e[i + 2] = s),
                            (e[i + 3] = s),
                            (e[i + 4] = s),
                            (e[i + 5] = s),
                            (e[i + 6] = s),
                            (e[i + 7] = s),
                            (e[i + 8] = s),
                            (e[i + 9] = s),
                            (e[i + 10] = s),
                            (e[i + 11] = s);
                        }
                        const i = new Et(this.gl, {
                          position: { size: 3, data: t.buffers.position },
                          uv: { size: 2, data: t.buffers.uv },
                          id: { size: 1, data: t.buffers.id },
                          index: { data: t.buffers.index },
                          letter: { size: 3, data: Float32Array.from(e) },
                        });
                        i.computeBoundingBox();
                        const { fragment: s, vertex: n } = this.createShader(
                            "#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 letter;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nuniform float uSpeed;\nuniform float uMultiplier;\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvoid main() {\n  vUv = uv;\n\n  vec3 p = position;\n\n  p = vec3(rotationMatrix(vec3(0.0, 0.0, 1.0), uMultiplier * (letter.x * 0.5) * (-uSpeed * 2.5)) * vec4(p, 1.0));\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);\n}\n"
                          ),
                          r = new ft(this.gl, {
                            cullFace: null,
                            depthWrite: !1,
                            transparent: !0,
                            fragment: s,
                            vertex: n,
                            uniforms: {
                              uAlpha: { value: 0 },
                              uColor: { value: this.color },
                              uMultiplier: {
                                value: yr(
                                  i.bounds.max[0] - i.bounds.min[0],
                                  10,
                                  23,
                                  0.1,
                                  0.5
                                ),
                              },
                              uSpeed: { value: 0 },
                              tMap: {
                                value:
                                  window.TEXTURES[
                                    c.isWebPSupported() ? Tr : Er
                                  ],
                              },
                            },
                          });
                        (this.mesh = new _t(this.gl, {
                          geometry: i,
                          program: r,
                        })),
                          (this.mesh.index = this.index),
                          this.mesh.setParent(this.scene),
                          (this.meshActive = new _t(this.gl, {
                            geometry: i,
                            program: new ft(this.gl, {
                              cullFace: null,
                              depthTest: !1,
                              depthWrite: !1,
                              transparent: !0,
                              fragment: s,
                              vertex: n,
                              uniforms: {
                                uAlpha: { value: 0 },
                                uColor: { value: new E(fr) },
                                uMultiplier: {
                                  value: yr(
                                    i.bounds.max[0] - i.bounds.min[0],
                                    10,
                                    23,
                                    0.1,
                                    0.5
                                  ),
                                },
                                uSpeed: { value: 0 },
                                tMap: {
                                  value:
                                    window.TEXTURES[
                                      c.isWebPSupported() ? Tr : Er
                                    ],
                                },
                              },
                            }),
                          })),
                          this.meshActive.setParent(this.mesh),
                          (this.meshActiveOpacity = {
                            current: 0,
                            target: 0,
                          });
                      }
                      createNumber() {
                        const t = new _r({
                            align: "left",
                            font: Gr,
                            letterSpacing: -0.05,
                            size: 0.0,
                            text: "0" + ((this.index % this.counter) + 1),
                          }),
                          e = new Et(this.gl, {
                            position: { size: 3, data: t.buffers.position },
                            uv: { size: 2, data: t.buffers.uv },
                            id: { size: 1, data: t.buffers.id },
                            index: { data: t.buffers.index },
                          }),
                          { fragment: i, vertex: s } = this.createShader(
                            "#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
                          ),
                          n = new ft(this.gl, {
                            cullFace: null,
                            depthWrite: !1,
                            transparent: !0,
                            fragment: i,
                            vertex: s,
                            uniforms: {
                              uAlpha: { value: 0 },
                              uColor: { value: this.color },
                              uSpeed: { value: 0 },
                              tMap: {
                                value:
                                  window.TEXTURES[
                                    c.isWebPSupported() ? $r : Hr
                                  ],
                              },
                            },
                          });
                        (this.number = new _t(this.gl, {
                          geometry: e,
                          program: n,
                        })),
                          this.number.setParent(this.mesh);
                      }
                      animateIn(t) {
                        return (
                          (this.isVisible = !0),
                          this.timelineOut &&
                            (this.timelineOut.kill(),
                            (this.timelineOut = null)),
                          new Promise((e) => {
                            const i = -1 !== this.url.indexOf("case"),
                              s = "/" === t,
                              n = this.isCurrent && i && s ? 0 : 1,
                              r = Math.min(
                                yr(
                                  Math.abs(this.position),
                                  0,
                                  1.5 * this.viewport.height,
                                  0,
                                  0.5
                                ),
                                0.5
                              );
                            (this.timelineIn = dr.timeline({ delay: r })),
                              this.timelineIn.set(
                                [
                                  this.mesh.program.uniforms.uAlpha,
                                  this.number.program.uniforms.uAlpha,
                                ],
                                { value: 1 }
                              ),
                              this.timelineIn.call((t) => {
                                (this.mesh.visible = !0),
                                  (this.meshActive.visible = !0),
                                  (this.number.visible = !0);
                              }),
                              this.timelineIn.fromTo(
                                this,
                                { animation: n },
                                {
                                  duration: 1.5,
                                  ease: "expo.inOut",
                                  animation: 0,
                                },
                                0
                              ),
                              this.timelineIn.call((t) => {
                                e();
                              }),
                              (this.url = t);
                          })
                        );
                      }
                      animateOut(t) {
                        return (
                          this.timelineIn &&
                            (this.timelineIn.kill(),
                            (this.timelineIn = null)),
                          new Promise((e) => {
                            if (
                              -1 !== this.url.indexOf("case") &&
                              "/about" === t
                            )
                              (this.timelineOut = dr.timeline()),
                                this.timelineOut.to(
                                  [
                                    this.mesh.program.uniforms.uAlpha,
                                    this.number.program.uniforms.uAlpha,
                                  ],
                                  { value: 0 }
                                );
                            else {
                              const i = -1 !== t.indexOf("case"),
                                s = this.isCurrent && i ? 0 : 1,
                                n = Math.min(
                                  yr(
                                    Math.abs(this.position),
                                    0,
                                    1.5 * this.viewport.height,
                                    0.5,
                                    0
                                  ),
                                  0.5
                                );
                              (this.timelineOut = dr.timeline({ delay: n })),
                                this.timelineOut.to(
                                  this,
                                  {
                                    duration: 1.5,
                                    ease: "expo.inOut",
                                    animation: s,
                                  },
                                  0
                                ),
                                this.timelineOut.call((t) => {
                                  this.isCurrent && i
                                    ? ((this.mesh.visible = !0),
                                      (this.meshActive.visible = !0),
                                      (this.number.visible = !0))
                                    : ((this.mesh.visible = !1),
                                      (this.meshActive.visible = !1),
                                      (this.number.visible = !1)),
                                    (this.animation = 0),
                                    e();
                                });
                            }
                            this.url = t;
                          })
                        );
                      }
                      onResize({ screen: t, viewport: e } = {}) {
                        t && (this.screen = t),
                          e && (this.viewport = e),
                          this.screen.width < gr
                            ? ((this.scale =
                                ((1230 / this.screen.height) *
                                  this.screen.width) /
                                343),
                              (this.height = 1.1 * this.scale),
                              (this.mesh.scale.x = 0.35 * this.scale),
                              (this.mesh.scale.y = 0.35 * this.scale),
                              (this.mesh.position.x = -4.5 * this.scale),
                              (this.number.scale.x = 1.5),
                              (this.number.scale.y = 1.5),
                              (this.number.position.x = -0.75),
                              (this.number.position.y = -1))
                            : ((this.scale = Math.max(
                                1230 / this.screen.height,
                                1
                              )),
                              (this.height = 3 * this.scale),
                              (this.mesh.scale.x = this.scale),
                              (this.mesh.scale.y = this.scale),
                              (this.mesh.position.x = -12 * this.scale),
                              (this.number.scale.x = 1),
                              (this.number.scale.y = 1),
                              (this.number.position.x = -0.5),
                              (this.number.position.y = -1.12)),
                          (this.heightHalf = 0.5 * this.height),
                          (this.heightTotal = this.height * this.length),
                          (this.positionExtra =
                            this.height * this.index * -1),
                          (this.positionOffset = 0.78 * this.height),
                          (this.position =
                            this.positionExtra +
                            this.positionOffset +
                            this.scroll.current),
                          (this.mesh.height = this.height),
                          this.check(),
                          (this.position =
                            this.positionExtra +
                            this.positionOffset +
                            this.scroll.current),
                          (this.mesh.position.y = this.position);
                      }
                      check() {
                        (this.timelineIn && this.timelineIn.isActive()) ||
                          (this.timelineOut && this.timelineOut.isActive()) ||
                          (this.scroll.current > this.scroll.last
                            ? (this.direction = "down")
                            : (this.direction = "up"),
                          (this.isAfter =
                            this.position <
                            -this.viewport.heightHalf - 2 * this.height),
                          (this.isBefore =
                            this.position >
                            this.viewport.heightHalf + 2 * this.height),
                          "down" === this.direction &&
                            this.isBefore &&
                            ((this.isBefore = !1),
                            (this.isAfter = !0),
                            (this.positionExtra -= this.heightTotal)),
                          "up" === this.direction &&
                            this.isAfter &&
                            ((this.isBefore = !0),
                            (this.isAfter = !1),
                            (this.positionExtra += this.heightTotal)));
                      }
                      update({ isWork: t, scroll: e }) {
                        (this.scroll = e),
                          (this.position =
                            this.positionExtra +
                            this.positionOffset +
                            this.scroll.current);
                        let i = 1,
                          s = 1.25 * this.viewport.height * this.animation;
                        this.mesh.position.y < 0 && ((i *= -1), (s *= -1)),
                          (this.mesh.position.y = this.position + s),
                          this.check(),
                          (this.mesh.program.uniforms.uSpeed.value =
                            this.scroll.speed.current - this.animation * i),
                          (this.meshActive.program.uniforms.uSpeed.value =
                            this.mesh.program.uniforms.uSpeed.value),
                          (this.meshActiveOpacity.target = t ? 1 : 0),
                          (this.meshActiveOpacity.current = xr(
                            this.meshActiveOpacity.current,
                            this.meshActiveOpacity.target,
                            0.05
                          ));
                        const n = this.position - 0.78 * this.height;
                        this.isVisible && n > -0.6 && n < 0.6
                          ? ((this.meshActive.program.uniforms.uAlpha.value =
                              1 * this.meshActiveOpacity.current),
                            (this.mesh.isCurrent = this.isCurrent = !0))
                          : ((this.meshActive.program.uniforms.uAlpha.value = 0),
                            (this.mesh.isCurrent = this.isCurrent = !1));
                      }
                    })({
                      color: this.color,
                      counter: this.counter,
                      element: t,
                      gl: this.gl,
                      index: i,
                      length: this.length,
                      renderer: this.renderer,
                      scene: this.scene,
                      screen: this.screen,
                      url: this.url,
                      viewport: this.viewport,
                    })
                )),
                  (this.height = this.titles[0].height),
                  (this.heightTotal = this.height * this.length);
              }
              onTouchDown(t) {
                if (
                  this.isWork &&
                  this.isInteractive &&
                  ((this.isDown = !0),
                  (this.scroll.position = this.scroll.current),
                  (this.distance = 0),
                  (this.start = t.touches ? t.touches[0].clientY : t.clientY),
                  c.isMobile())
                ) {
                  const e = t.touches ? t.touches[0].clientX : t.clientX,
                    i = t.touches ? t.touches[0].clientY : t.clientY;
                  if (t.target.classList.contains("work__button"))
                    this.selected = this.titles.find((t) => t.isCurrent);
                  else {
                    this.mouse.set(
                      (e / this.renderer.width) * 2 - 1,
                      2 * (1 - i / this.renderer.height) - 1
                    ),
                      this.raycast.castMouse(this.camera, this.mouse);
                    const t = this.raycast.intersectBounds(
                      this.raycastMeshes
                    );
                    t.length
                      ? (this.selected = t[0])
                      : (this.selected = null);
                  }
                  this.selected &&
                    this.selected.isCurrent &&
                    (this.elements[this.selected.index].click(),
                    (this.selected = !1));
                }
              }
              onTouchMove(t) {
                if (!this.isWork || !this.isInteractive) return;
                const e = t.touches ? t.touches[0].clientX : t.clientX,
                  i = t.touches ? t.touches[0].clientY : t.clientY;
                if (!c.isMobile())
                  if (t.target.classList.contains("work__button"))
                    this.selected = this.titles.find((t) => t.isCurrent);
                  else {
                    this.mouse.set(
                      (e / this.renderer.width) * 2 - 1,
                      2 * (1 - i / this.renderer.height) - 1
                    ),
                      this.raycast.castMouse(this.camera, this.mouse);
                    const t = this.raycast.intersectBounds(
                      this.raycastMeshes
                    );
                    t.length
                      ? (this.selected = t[0])
                      : (this.selected = null);
                  }
                this.isDown &&
                  ((this.distance = this.start - i),
                  (this.scroll.target =
                    this.scroll.position + 0.05 * this.distance));
              }
              onTouchUp(t) {
                this.isWork &&
                  this.isInteractive &&
                  ((this.isDown = !1),
                  c.isMobile() ||
                    (Math.abs(this.distance) < 50 &&
                      this.selected &&
                      (this.selected.isCurrent
                        ? (this.elements[this.selected.index].click(),
                          (this.selected = !1))
                        : (this.scroll.target =
                            this.scroll.current -
                            this.selected.position.y +
                            this.selected.height))),
                  this.onCheck());
              }
              onWheel(t) {
                if (!this.isWork || !this.isInteractive) return;
                const e = 0.01 * pr()(t).pixelY;
                (this.scroll.target += e), this.onCheckDebounce();
              }
              onCheck(t = !1) {
                const e = Math.round(
                    Math.abs(this.scroll.target) / this.height
                  ),
                  i = this.height * e;
                this.scroll.target < 0
                  ? (this.scroll.target = -i)
                  : (this.scroll.target = i),
                  t &&
                    -1 !== this.url.indexOf("case") &&
                    ((this.title = this.titles.find(
                      (t) => t.href === this.url
                    )),
                    (this.title.isCurrent = this.title.mesh.isCurrent = !0),
                    (this.title.isVisible = !0),
                    (this.title.mesh.visible = !0),
                    (this.title.mesh.program.uniforms.uAlpha.value = 1),
                    (this.title.number.program.uniforms.uAlpha.value = 1),
                    (this.scroll.current =
                      this.scroll.target =
                      this.scroll.last =
                        this.height * this.title.index));
              }
              onResize(t) {
                this.titles.forEach((e) => e.onResize(t)),
                  (this.height = this.titles[0].height),
                  (this.heightTotal = this.height * this.length),
                  this.media.onResize(t, this.heightTotal),
                  this.onCheck(!0);
              }
              animateIn(t) {
                dr.killTweensOf([this.delayVisible, this.delayInteractive]),
                  (this.delayInteractive = dr.delayedCall(1.5, (t) => {
                    this.isInteractive = !0;
                  })),
                  this.media.animateIn(t),
                  this.titles.map((e) => e.animateIn(t));
              }
              animateOut(t) {
                (this.isInteractive = !1),
                  dr.killTweensOf([this.delayVisible, this.delayInteractive]),
                  this.media.animateOut(t),
                  this.titles.map((e) => e.animateOut(t));
              }
              update({ url: t }) {
                this.url !== t && (this.url = t),
                  (this.isCase = -1 !== t.indexOf("case")),
                  (this.isWork = "/" === t),
                  (this.scroll.current = xr(
                    this.scroll.current,
                    this.scroll.target,
                    this.scroll.lerp
                  )),
                  (this.scroll.clamp =
                    this.scroll.current % this.heightTotal),
                  (this.scroll.speed.target =
                    this.scroll.current - this.scroll.last),
                  (this.scroll.speed.current = xr(
                    this.scroll.speed.current,
                    this.scroll.speed.target,
                    0.1
                  )),
                  (this.scroll.speed.current = vr(
                    -0.5,
                    0.5,
                    this.scroll.speed.current
                  )),
                  this.titles.forEach((t, e) => {
                    t.update({
                      isCase: this.isCase,
                      isWork: this.isWork,
                      scroll: this.scroll,
                    });
                  }),
                  this.media.update({ scroll: this.scroll }),
                  (this.scroll.last = this.scroll.current),
                  !this.isHovering && this.selected
                    ? ((this.isHovering = !0),
                      (document.documentElement.style.cursor = "pointer"))
                    : this.isHovering &&
                      !this.selected &&
                      ((this.isHovering = !1),
                      (document.documentElement.style.cursor = ""));
              }
            })({
              camera: this.camera,
              color: this.color,
              gl: this.gl,
              renderer: this.renderer,
              scene: this.scene,
              screen: this.screen,
              url: this.url,
              viewport: this.viewport,
            });
          }
          createCases() {
            (this.elementsCases = document.querySelectorAll(".case")),
              (this.cases = x(this.elementsCases, (t) => {
                const e = t.id;
                return new wr({
                  background: this.background,
                  gl: this.gl,
                  id: e,
                  scene: this.scene,
                  screen: this.screen,
                  viewport: this.viewport,
                });
              }));
          }
          createAbout() {
            const t = new Rt(this.gl, {
              heightSegments: 1,
              widthSegments: 1,
            });
            this.about = new (class {
              constructor({
                background: t,
                color: i,
                gl: s,
                renderer: n,
                scene: r,
                screen: o,
                viewport: a,
              }) {
                e()(this),
                  (this.background = t),
                  (this.color = i),
                  (this.element = document.querySelector(".about__title")),
                  (this.gl = s),
                  (this.renderer = n),
                  (this.scene = r),
                  (this.screen = o),
                  (this.viewport = a),
                  (this.text = this.element.textContent),
                  this.createShader(),
                  this.createMesh(),
                  this.onResize();
              }
              createShader() {
                const t = `${Mr}`,
                  e = `\n      #extension GL_OES_standard_derivatives : enable\n\n      precision highp float;\n\n      ${br}\n    `,
                  i = `#version 300 es\n\n      #define attribute in\n      #define varying out\n\n      ${Mr}\n    `,
                  s = `#version 300 es\n\n      precision highp float;\n\n      #define varying in\n      #define texture2D texture\n      #define gl_FragColor FragColor\n\n      out vec4 FragColor;\n\n      ${br}\n    `;
                this.program = new ft(this.gl, {
                  cullFace: null,
                  depthWrite: !1,
                  transparent: !0,
                  fragment: this.renderer.isWebgl2 ? s : e,
                  vertex: this.renderer.isWebgl2 ? i : t,
                  uniforms: {
                    uAlpha: { value: 0 },
                    uColor: { value: this.color },
                    uSpeed: { value: 0 },
                    tMap: {
                      value: window.TEXTURES[c.isWebPSupported() ? Tr : Er],
                    },
                  },
                });
              }
              createMesh() {
                const t = new _r({
                    align: "left",
                    font: Ar,
                    letterSpacing: -0.05,
                    lineHeight: 0.7,
                    size: 10.1,
                    text: this.text,
                  }),
                  e = new Et(this.gl, {
                    position: { size: 3, data: t.buffers.position },
                    uv: { size: 2, data: t.buffers.uv },
                    id: { size: 1, data: t.buffers.id },
                    index: { data: t.buffers.index },
                  });
                (this.mesh = new _t(this.gl, {
                  geometry: e,
                  program: this.program,
                })),
                  (this.mesh.visible = !1),
                  this.mesh.setParent(this.scene);
              }
              onResize({ screen: t, viewport: e } = {}) {
                t && (this.screen = t),
                  e && (this.viewport = e),
                  (this.bounds = this.element.getBoundingClientRect()),
                  this.screen.width < gr
                    ? ((this.mesh.scale.x =
                        (((1230 / this.screen.height) * this.screen.width) /
                          343) *
                        0.33),
                      (this.mesh.scale.y =
                        (((1230 / this.screen.height) * this.screen.width) /
                          343) *
                        0.33),
                      (this.mesh.position.x = -14.6 * this.mesh.scale.x),
                      (this.mesh.position.y =
                        -this.viewport.height / 2 + 16.8 * this.mesh.scale.y))
                    : ((this.scale = Math.max(1230 / this.screen.height, 1)),
                      (this.mesh.scale.x =
                        (this.screen.width / 2e3) * this.scale),
                      (this.mesh.scale.y =
                        (this.screen.width / 2e3) * this.scale),
                      (this.mesh.position.x =
                        -this.viewport.width / 2 +
                        (this.bounds.left / this.screen.width) *
                          this.viewport.width),
                      (this.mesh.position.y =
                        -this.viewport.height / 2 +
                        16.8 * this.mesh.scale.y));
              }
              animateIn() {
                (this.mesh.visible = !0),
                  dr.killTweensOf(this.program.uniforms.uAlpha),
                  dr.to(this.program.uniforms.uAlpha, {
                    delay: 1.5,
                    duration: 0.5,
                    value: 1,
                  });
              }
              animateOut() {
                dr.killTweensOf(this.program.uniforms.uAlpha),
                  dr.to(this.program.uniforms.uAlpha, {
                    duration: 0.5,
                    onComplete: (t) => (this.mesh.visible = !1),
                    value: 0,
                  });
              }
            })({
              background: this.background,
              color: this.color,
              geometry: t,
              gl: this.gl,
              renderer: this.renderer,
              scene: this.scene,
              screen: this.screen,
              viewport: this.viewport,
            });
          }
          onChange(t) {
            if (-1 !== t.indexOf("case")) {
              const e = t.replace("/case/", "");
              (this.case = this.cases.find((t) => t.id === e)),
                this.case.animateIn(t, this.url),
                this.onChangeColors({
                  background: this.case.background,
                  color: this.case.color,
                });
            } else
              this.case &&
                (this.onChangeColors(),
                this.case.animateOut(t, this.url),
                (this.case = null));
            this.work &&
              ("/" === t
                ? this.work.animateIn(t, this.url)
                : this.work.animateOut(t, this.url)),
              this.about &&
                ("/about" === t
                  ? this.about.animateIn(t, this.url)
                  : this.about.animateOut(t, this.url)),
              (this.url = t);
          }
          onChangeColors({
            background: t = "#FFFFFF",
            color: e = "#000000",
          } = {}) {
            const i = new E(t),
              s = new E(e);
            dr.to(document.documentElement, { background: t, color: e }),
              dr.to(this.color, { ...s }),
              dr.to(this.background, {
                ...i,
                onUpdate: (t) => {
                  this.gl.clearColor(
                    this.background.r,
                    this.background.g,
                    this.background.b,
                    1
                  );
                },
              });
          }
          onTextures() {
            this.createWork(), this.createCases(), this.createAbout();
          }
          onResize() {
            (this.screen = {
              height: window.innerHeight,
              width: window.innerWidth,
            }),
              this.renderer.setSize(this.screen.width, this.screen.height),
              this.camera.perspective({
                aspect: this.gl.canvas.width / this.gl.canvas.height,
              }),
              this.post.resize(),
              this.resolution.value.set(
                this.screen.width,
                this.screen.height
              );
            const t = this.camera.fov * (Math.PI / 180),
              e = 2 * Math.tan(t / 2) * this.camera.position.z,
              i = e * this.camera.aspect;
            this.viewport = { height: e, heightHalf: 0.5 * e, width: i };
            const s = { screen: this.screen, viewport: this.viewport };
            this.cases && this.cases.forEach((t) => t.onResize(s)),
              this.about && this.about.onResize(s),
              this.work && this.work.onResize(s);
          }
          onTouchDown(t) {
            (this.isDown = !0),
              this.case && this.case.onTouchDown(t),
              this.work && this.work.onTouchDown(t);
          }
          onTouchMove(t) {
            const { changedTouches: e, clientX: i, clientY: s } = t,
              n = e ? e[0].clientX : i,
              r = e ? e[0].clientY : s;
            this.mouse.set(
              n / this.gl.renderer.width,
              1 - r / this.gl.renderer.height
            ),
              this.lastTime ||
                ((this.lastTime = performance.now()),
                this.mouseLast.set(n, r));
            const o = n - this.mouseLast.x,
              a = r - this.mouseLast.y;
            this.mouseLast.set(n, r);
            const h = performance.now(),
              c = Math.max(14, h - this.lastTime);
            (this.lastTime = h),
              (this.velocity.x = o / c),
              (this.velocity.y = a / c),
              (this.velocity.needsUpdate = !0),
              this.case && this.case.onTouchMove(t),
              this.work && this.work.onTouchMove(t);
          }
          onTouchUp(t) {
            (this.isDown = !1),
              this.case && this.case.onTouchUp(t),
              this.work && this.work.onTouchUp(t);
          }
          onWheel(t) {
            this.case && this.case.onWheel(t),
              this.work && this.work.onWheel(t);
          }
          update() {
            "/" === this.url || -1 !== this.url.indexOf("case")
              ? ((this.flowmap.mesh.program.uniforms.uFalloff.value = 0.1),
                (this.isDown || c.isMobile()) && this.velocity.multiply(0))
              : (this.flowmap.mesh.program.uniforms.uFalloff.value = 0.1),
              (this.flowmap.aspect = this.screen.width / this.screen.height),
              this.flowmap.mouse.copy(this.mouse),
              this.flowmap.velocity.lerp(this.velocity, 0.1),
              this.flowmap.update(),
              this.post.render({ scene: this.scene, camera: this.camera }),
              this.work && this.work.update({ url: this.url }),
              this.case && this.case.update();
          }
        })({ url: window.location.pathname });
      }
      createStats() {
        (this.stats = new (o())()), document.body.appendChild(this.stats.dom);
      }
      async onChange({ callback: t, push: e = !0, url: i = null }) {
        (i = i.replace(window.location.origin, "")),
          this.isFetching ||
            this.url === i ||
            ((this.isFetching = !0),
            this.page && (await this.page.hide(i)),
            e && window.history.pushState({}, document.title, i),
            this.navigation.onChange(i),
            i.indexOf("/case") > -1
              ? (this.page = this.case)
              : (this.page = this.pages[i]),
            window.requestAnimationFrame((t) => {
              this.canvas && this.canvas.onChange(i),
                this.cursor && this.cursor.onChange(i);
            }),
            console.log( i.indexOf("/case")),
            await this.page.show(i),
            (this.url = i),
            (this.isFetching = !1),
            t && t());
            window.innerWidth < 800
            ?this.drawArrow()
            :console.log('add');
      }

      drawArrow(){

        var canvas = document.createElement("canvas");
        canvas.id = 'mobile_arrow';
        canvas.width  = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
        var ctx = canvas.getContext('2d');

        var height = canvas.height/2;
        var width = canvas.width/2;

        drawLineWithArrows(width-165,height,width-185,height,5,8,true,false);
        // drawLineWithArrows(width+170,height,width+150,height,5,8,true,false);

        function drawLineWithArrows(x0,y0,x1,y1,aWidth,aLength,arrowStart,arrowEnd){
            var dx=x1-x0;
            var dy=y1-y0;
            var angle=Math.atan2(dy,dx);
            var length=Math.sqrt(dx*dx+dy*dy);
            //
            ctx.translate(x0,y0);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(length,0);
            if(arrowStart){
                ctx.moveTo(aLength,-aWidth);
                ctx.lineTo(0,0);
                ctx.lineTo(aLength,aWidth);
            }
            if(arrowEnd){
                ctx.moveTo(length-aLength,-aWidth);
                ctx.lineTo(length,0);
                ctx.lineTo(length-aLength,aWidth);
            }
            ctx.lineWidth = 2;
            //
            ctx.stroke();
            ctx.setTransform(1,0,0,1,0,0);
        }
        document.body.appendChild(canvas);
      }
      
      update() {
        this.stats && this.stats.begin(),
          this.canvas && this.canvas.update(this),
          this.cursor && this.cursor.update(),
          this.stats && this.stats.end(),
          window.requestAnimationFrame(this.update);
          window.location.href.includes('case')
          ?document.getElementById('mobile_arrow').remove()
          :console.log('remove');
      }
      onContextMenu(t) {
        return t.preventDefault(), t.stopPropagation(), !1;
      }
      onPopState() {
        this.onChange({ url: window.location.pathname, push: !1 });
      }
      onResize() {
        this.canvas && this.canvas.onResize();
      }
      onKeyDown(t) {
        "Tab" === t.key && t.preventDefault();
      }
      onFocusIn(t) {
        t.preventDefault();
      }
      onTouchDown(t) {
        t.stopPropagation(),
          (c.isMobile() || "A" !== t.target.tagName) &&
            (this.canvas && this.canvas.onTouchDown(t),
            this.cursor && this.cursor.onTouchDown(t));
      }
      onTouchMove(t) {
        t.stopPropagation(),
          this.canvas && this.canvas.onTouchMove(t),
          this.cursor && this.cursor.onTouchMove(t);
      }
      onTouchUp(t) {
        t.stopPropagation(),
          this.canvas && this.canvas.onTouchUp(t),
          this.cursor && this.cursor.onTouchUp(t);
      }
      onWheel(t) {
        this.canvas && this.canvas.onWheel(t);
      }
      addEventListeners() {
        window.addEventListener("popstate", this.onPopState, { passive: !0 }),
          window.addEventListener("resize", this.onResize, { passive: !0 }),
          window.addEventListener("mousedown", this.onTouchDown, {
            passive: !0,
          }),
          window.addEventListener("mousemove", this.onTouchMove, {
            passive: !0,
          }),
          window.addEventListener("mouseup", this.onTouchUp, { passive: !0 }),
          window.addEventListener("touchstart", this.onTouchDown, {
            passive: !0,
          }),
          window.addEventListener("touchmove", this.onTouchMove, {
            passive: !0,
          }),
          window.addEventListener("touchend", this.onTouchUp, {
            passive: !0,
          }),
          window.addEventListener("mousewheel", this.onWheel, {
            passive: !0,
          }),
          window.addEventListener("wheel", this.onWheel, { passive: !0 }),
          window.addEventListener("keydown", this.onKeyDown),
          window.addEventListener("focusin", this.onFocusIn),
          (window.oncontextmenu = this.onContextMenu);
      }
      addLinksEventsListeners() {
        const t = document.querySelectorAll("a");
        h()(t, (t) => {
          const e = t.href.indexOf(window.location.origin) > -1,
            i = t.href.indexOf("#") > -1;
          e
            ? (t.onclick = (e) => {
                e.preventDefault(), i || this.onChange({ url: t.href });
              })
            : -1 === t.href.indexOf("mailto") &&
              -1 === t.href.indexOf("tel") &&
              ((t.rel = "noopener"), (t.target = "_blank"));
        });
      }
    }
    const no = new (n())("Radikal Bold"),
      ro = new (n())("Radikal Medium");
    Promise.all([no.load(), ro.load()])
      .then((t) => {
        window.APP = new so();
      })
      .catch((t) => {
        window.APP = new so();
      }),
      console.log(
        "%c xqz",
        "background: #000; color: #fff;"
      );
  })();
})();
