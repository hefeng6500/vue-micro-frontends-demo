(function(e) {
  function t(t) {
    for (
      var r, a, c = t[0], i = t[1], l = t[2], s = 0, f = [];
      s < c.length;
      s++
    )
      (a = c[s]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    p && p(t);
    while (f.length) f.shift()();
    return u.push.apply(u, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
        var i = n[a];
        0 !== o[i] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    u = [];
  function a(e) {
    return (
      c.p +
      "js/" +
      ({}[e] || e) +
      "." +
      { "chunk-2d2101f1": "861aef6e", "chunk-2d222997": "b91b39c9" }[e] +
      ".js"
    );
  }
  function c(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function(e) {
    var t = [],
      n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function(t, r) {
          n = o[e] = [t, r];
        });
        t.push((n[2] = r));
        var u,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          c.nc && i.setAttribute("nonce", c.nc),
          (i.src = a(e));
        var l = new Error();
        u = function(t) {
          (i.onerror = i.onload = null), clearTimeout(s);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                u = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + u + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = u),
                n[1](l);
            }
            o[e] = void 0;
          }
        };
        var s = setTimeout(function() {
          u({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = u), document.head.appendChild(i);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = r),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/"),
    (c.oe = function(e) {
      throw (console.error(e), e);
    });
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var p = l;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "034f": function(e, t, n) {
    "use strict";
    n("1080");
  },
  1080: function(e, t, n) {},
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("0c26"), n("666b"), n("527a"), n("4586");
    var r = n("9869"),
      o = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("router-link", { attrs: { to: "/page-constructor/page-list" } }, [
              e._v("first page-list")
            ]),
            n("br"),
            n(
              "router-link",
              { attrs: { to: "/page-constructor/page-details" } },
              [e._v("first page-details")]
            ),
            n("br"),
            n("router-view")
          ],
          1
        );
      },
      u = [],
      a = n("9ec3"),
      c = n.n(a);
    function i() {
      console.log("test-a1212", c.a);
    }
    var l = n("8206"),
      s = n.n(l),
      p = {
        name: "App",
        components: {},
        mounted: function() {
          i(),
            s.a
              .get("/api/json", { params: {} })
              .then(function(e) {
                console.log(e);
              })
              .catch(function(e) {
                console.log(e);
              });
        }
      },
      f = p,
      d = (n("034f"), n("2be6")),
      h = Object(d["a"])(f, o, u, !1, null, null, null),
      m = h.exports,
      v = n("5f2b");
    r["a"].use(v["a"]);
    var b = [],
      g = new v["a"]({ mode: "history", routes: b }),
      y = g,
      w = n("9ce4");
    r["a"].use(w["a"]);
    var j = new w["a"].Store({
        state: { count: 0 },
        mutations: {
          increment: function(e) {
            e.count++;
          }
        }
      }),
      O = j;
    n("4160"), n("ac1f"), n("5319"), n("159b");
    function _(e, t) {
      return (t + e).replace(/\/\//, "/");
    }
    function k(e, t) {
      var n = t.forEach(function(t) {
        return _(t.path, e);
      });
      return n;
    }
    function x(e) {
      var t = e.Vue,
        n = e.router,
        r = e.moduleList,
        o = e.prefix,
        u = e.masterTemplate;
      console.log(t), console.log(u), o && k(o, r), n.addRoutes(r);
    }
    var P = x,
      T = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("router-view");
      },
      E = [],
      S = { name: "masterTemplate" },
      L = S,
      M = Object(d["a"])(L, T, E, !1, null, null, null),
      $ = M.exports,
      A =
        (n("d3b7"),
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("router-view");
        }),
      C = [],
      J = {},
      V = J,
      q = Object(d["a"])(V, A, C, !1, null, null, null),
      R = q.exports,
      z = {
        path: "/page-constructor",
        component: R,
        children: [
          {
            path: "page-list",
            component: function() {
              return n.e("chunk-2d222997").then(n.bind(null, "cefe"));
            }
          },
          {
            path: "page-details",
            component: function() {
              return n.e("chunk-2d2101f1").then(n.bind(null, "b717"));
            }
          }
        ]
      },
      B = z,
      D = B;
    r["a"].config.productionTip = !1;
    var F = [D];
    P({
      Vue: r["a"],
      router: y,
      moduleList: F,
      prefix: "/modules",
      masterTemplate: $
    }),
      new r["a"]({
        router: y,
        store: O,
        render: function(e) {
          return e(m);
        }
      }).$mount("#app");
  }
});
//# sourceMappingURL=app.6039ccf1.js.map
