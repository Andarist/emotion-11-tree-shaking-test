import { createContext, useContext } from "react";
var StyleSheet = (function () {
    function StyleSheet(options) {
      var _this = this;
      (this._insertTag = function (tag) {
        var before;
        (before =
          0 === _this.tags.length
            ? _this.prepend
              ? _this.container.firstChild
              : _this.before
            : _this.tags[_this.tags.length - 1].nextSibling),
          _this.container.insertBefore(tag, before),
          _this.tags.push(tag);
      }),
        (this.isSpeedy = void 0 === options.speedy || options.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = options.nonce),
        (this.key = options.key),
        (this.container = options.container),
        (this.prepend = options.prepend),
        (this.before = null);
    }
    var _proto = StyleSheet.prototype;
    return (
      (_proto.hydrate = function (nodes) {
        nodes.forEach(this._insertTag);
      }),
      (_proto.insert = function (rule) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
          this._insertTag(
            (function (options) {
              var tag = document.createElement("style");
              return (
                tag.setAttribute("data-emotion", options.key),
                void 0 !== options.nonce &&
                  tag.setAttribute("nonce", options.nonce),
                tag.appendChild(document.createTextNode("")),
                tag.setAttribute("data-s", ""),
                tag
              );
            })(this)
          );
        var tag = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var sheet = (function (tag) {
            if (tag.sheet) return tag.sheet;
            for (var i = 0; i < document.styleSheets.length; i++)
              if (document.styleSheets[i].ownerNode === tag)
                return document.styleSheets[i];
          })(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {}
        } else tag.appendChild(document.createTextNode(rule));
        this.ctr++;
      }),
      (_proto.flush = function () {
        this.tags.forEach(function (tag) {
          return tag.parentNode.removeChild(tag);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      StyleSheet
    );
  })(),
  e = "-ms-",
  r = "-moz-",
  a = "-webkit-",
  c = "comm",
  n = "rule",
  t = "decl",
  k = Math.abs,
  d = String.fromCharCode;
function g(e) {
  return e.trim();
}
function y(e, r, a) {
  return e.replace(r, a);
}
function z(e, r) {
  return 0 | e.charCodeAt(r);
}
function C(e, r, a) {
  return e.slice(r, a);
}
function A(e) {
  return e.length;
}
function M(e) {
  return e.length;
}
function O(e, r) {
  return r.push(e), e;
}
var q = 1,
  B = 1,
  D = 0,
  E = 0,
  F = 0,
  G = "";
function H(e, r, a, c, n, t, s) {
  return {
    value: e,
    root: r,
    parent: a,
    type: c,
    props: n,
    children: t,
    line: q,
    column: B,
    length: s,
    return: "",
  };
}
function I(e, r, a) {
  return H(e, r.root, r.parent, a, r.props, r.children, 0);
}
function K() {
  return (F = E < D ? z(G, E++) : 0), B++, 10 === F && ((B = 1), q++), F;
}
function L() {
  return z(G, E);
}
function N() {
  return E;
}
function P(e, r) {
  return C(G, e, r);
}
function Q(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function R(e) {
  return (q = B = 1), (D = A((G = e))), (E = 0), [];
}
function T(e) {
  return (G = ""), e;
}
function U(e) {
  return g(P(E - 1, Y(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function W(e) {
  for (; (F = L()) && F < 33; ) K();
  return Q(e) > 2 || Q(F) > 3 ? "" : " ";
}
function Y(e) {
  for (; K(); )
    switch (F) {
      case e:
        return E;
      case 34:
      case 39:
        return Y(34 === e || 39 === e ? e : F);
      case 40:
        41 === e && Y(e);
        break;
      case 92:
        K();
    }
  return E;
}
function Z(e, r) {
  for (; K() && e + F !== 57 && (e + F !== 84 || 47 !== L()); );
  return "/*" + P(r, E - 1) + "*" + d(47 === e ? e : K());
}
function _(e) {
  for (; !Q(L()); ) K();
  return P(e, E);
}
function ee(e) {
  return T(re("", null, null, null, [""], (e = R(e)), 0, [0], e));
}
function re(e, r, a, c, n, t, s, u, i) {
  for (
    var f = 0,
      o = 0,
      l = s,
      v = 0,
      h = 0,
      p = 0,
      w = 1,
      b = 1,
      $ = 1,
      k = 0,
      m = "",
      g = n,
      x = t,
      j = c,
      z = m;
    b;

  )
    switch (((p = k), (k = K()))) {
      case 34:
      case 39:
      case 91:
      case 40:
        z += U(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z += W(p);
        break;
      case 47:
        switch (L()) {
          case 42:
          case 47:
            O(ce(Z(K(), N()), r, a), i);
            break;
          default:
            z += "/";
        }
        break;
      case 123 * w:
        u[f++] = A(z) * $;
      case 125 * w:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            b = 0;
          case 59 + o:
            h > 0 &&
              O(
                h > 32
                  ? ne(z + ";", c, a, l - 1)
                  : ne(y(z, " ", "") + ";", c, a, l - 2),
                i
              );
            break;
          case 59:
            z += ";";
          default:
            if (
              (O((j = ae(z, r, a, f, o, n, u, m, (g = []), (x = []), l)), t),
              123 === k)
            )
              if (0 === o) re(z, r, j, j, g, t, l, u, x);
              else
                switch (v) {
                  case 100:
                  case 109:
                  case 115:
                    re(
                      e,
                      j,
                      j,
                      c && O(ae(e, j, j, 0, 0, n, u, m, n, (g = []), l), x),
                      n,
                      x,
                      l,
                      u,
                      c ? g : x
                    );
                    break;
                  default:
                    re(z, j, j, j, [""], x, l, u, x);
                }
        }
        (f = o = h = 0), (w = $ = 1), (m = z = ""), (l = s);
        break;
      case 58:
        (l = 1 + A(z)), (h = p);
      default:
        switch (((z += d(k)), k * w)) {
          case 38:
            $ = o > 0 ? 1 : ((z += "\f"), -1);
            break;
          case 44:
            (u[f++] = (A(z) - 1) * $), ($ = 1);
            break;
          case 64:
            45 === L() && (z += U(K())),
              (v = L()),
              (o = A((m = z += _(N())))),
              k++;
            break;
          case 45:
            45 === p && 2 == A(z) && (w = 0);
        }
    }
  return t;
}
function ae(e, r, a, c, t, s, u, i, f, o, l) {
  for (
    var v = t - 1, h = 0 === t ? s : [""], p = M(h), w = 0, b = 0, $ = 0;
    w < c;
    ++w
  )
    for (var d = 0, m = C(e, v + 1, (v = k((b = u[w])))), x = e; d < p; ++d)
      (x = g(b > 0 ? h[d] + " " + m : y(m, /&\f/g, h[d]))) && (f[$++] = x);
  return H(e, r, a, 0 === t ? n : i, f, o, l);
}
function ce(e, r, a) {
  return H(e, r, a, c, d(F), C(e, 2, -2), 0);
}
function ne(e, r, a, c) {
  return H(e, r, a, t, C(e, 0, c), C(e, c + 1, -1), c);
}
function te(c, n) {
  switch (
    (function (e, r) {
      return (
        (((((((r << 2) ^ z(e, 0)) << 2) ^ z(e, 1)) << 2) ^ z(e, 2)) << 2) ^
        z(e, 3)
      );
    })(c, n)
  ) {
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c + c;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c + r + c + e + c + c;
    case 6828:
    case 4268:
      return a + c + e + c + c;
    case 6165:
      return a + c + e + "flex-" + c + c;
    case 5187:
      return (
        a + c + y(c, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c
      );
    case 5443:
      return a + c + e + "flex-item-" + y(c, /flex-|-self/, "") + c;
    case 4675:
      return (
        a + c + e + "flex-line-pack" + y(c, /align-content|flex-|-self/, "") + c
      );
    case 5548:
      return a + c + e + y(c, "shrink", "negative") + c;
    case 5292:
      return a + c + e + y(c, "basis", "preferred-size") + c;
    case 6060:
      return (
        a +
        "box-" +
        y(c, "-grow", "") +
        a +
        c +
        e +
        y(c, "grow", "positive") +
        c
      );
    case 4554:
      return a + y(c, /([^-])(transform)/g, "$1" + a + "$2") + c;
    case 6187:
      return (
        y(y(y(c, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c, "") + c
      );
    case 5495:
    case 3959:
      return y(c, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return (
        y(
          y(c, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        a +
        c +
        c
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(c, /(.+)-inline(.+)/, a + "$1$2") + c;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(c) - 1 - n > 6)
        switch (z(c, n + 1)) {
          case 109:
            return (
              y(c, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r + "$2-$3") + c
            );
          case 102:
            return (
              y(c, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r + "$3") + c
            );
          case 115:
            return te(y(c, "stretch", "fill-available"), n) + c;
        }
      break;
    case 4949:
      if (115 !== z(c, n + 1)) break;
    case 6444:
      switch (
        z(
          c,
          A(c) -
            3 -
            (~(function (e, r) {
              return e.indexOf("!important");
            })(c) && 10)
        )
      ) {
        case 107:
        case 111:
          return y(c, c, a + c) + c;
        case 101:
          return (
            y(
              c,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                a +
                (45 === z(c, 14) ? "inline-" : "") +
                "box$3$1" +
                a +
                "$2$3$1" +
                e +
                "$2box$3"
            ) + c
          );
      }
      break;
    case 5936:
      switch (z(c, n + 11)) {
        case 114:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "tb") + c;
        case 108:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;
        case 45:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
      }
      return a + c + e + c + c;
  }
  return c;
}
function se(e, r) {
  for (var a = "", c = M(e), n = 0; n < c; n++) a += r(e[n], n, e, r) || "";
  return a;
}
function ue(e, r, a, s) {
  switch (e.type) {
    case "@import":
    case t:
      return (e.return = e.return || e.value);
    case c:
      return "";
    case n:
      e.value = e.props.join(",");
  }
  return A((a = se(e.children, s))) ? (e.return = e.value + "{" + a + "}") : "";
}
function fe(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
var fixedElements = new WeakMap(),
  compat = function (element) {
    if ("rule" === element.type && element.parent && element.length) {
      for (
        var value = element.value,
          parent = element.parent,
          isImplicitRule =
            element.column === parent.column && element.line === parent.line;
        "rule" !== parent.type;

      )
        parent = parent.parent;
      if (
        (1 !== element.props.length ||
          58 === value.charCodeAt(0) ||
          fixedElements.get(parent)) &&
        !isImplicitRule
      ) {
        fixedElements.set(element, !0);
        for (
          var points = [],
            rules = (function (value, points) {
              return T(
                (function (parsed, points) {
                  var index = -1,
                    character = 44;
                  do {
                    switch (Q(character)) {
                      case 0:
                        38 === character && 12 === L() && (points[index] = 1),
                          (parsed[index] += _(E - 1));
                        break;
                      case 2:
                        parsed[index] += U(character);
                        break;
                      case 4:
                        if (44 === character) {
                          (parsed[++index] = 58 === L() ? "&\f" : ""),
                            (points[index] = parsed[index].length);
                          break;
                        }
                      default:
                        parsed[index] += d(character);
                    }
                  } while ((character = K()));
                  return parsed;
                })(R(value), points)
              );
            })(value, points),
            parentRules = parent.props,
            i = 0,
            k = 0;
          i < rules.length;
          i++
        )
          for (var j = 0; j < parentRules.length; j++, k++)
            element.props[k] = points[i]
              ? rules[i].replace(/&\f/g, parentRules[j])
              : parentRules[j] + " " + rules[i];
      }
    }
  },
  removeLabel = function (element) {
    if ("decl" === element.type) {
      var value = element.value;
      108 === value.charCodeAt(0) &&
        98 === value.charCodeAt(2) &&
        ((element.return = ""), (element.value = ""));
    }
  },
  defaultStylisPlugins = [
    function (c, s, u, i) {
      if (!c.return)
        switch (c.type) {
          case t:
            c.return = te(c.value, c.length);
            break;
          case "@keyframes":
            return se([I(y(c.value, "@", "@" + a), c, "")], i);
          case n:
            if (c.length)
              return (function (e, r) {
                return e.map(r).join("");
              })(c.props, function (n) {
                switch (
                  (function (e, r) {
                    return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e;
                  })(n)
                ) {
                  case ":read-only":
                  case ":read-write":
                    return se([I(y(n, /:(read-\w+)/, ":-moz-$1"), c, "")], i);
                  case "::placeholder":
                    return se(
                      [
                        I(y(n, /:(plac\w+)/, ":" + a + "input-$1"), c, ""),
                        I(y(n, /:(plac\w+)/, ":-moz-$1"), c, ""),
                        I(y(n, /:(plac\w+)/, e + "input-$1"), c, ""),
                      ],
                      i
                    );
                }
                return "";
              });
        }
    },
  ],
  createCache = function (options) {
    var key = options.key;
    if ("css" === key) {
      var ssrStyles = document.querySelectorAll(
        "style[data-emotion]:not([data-s])"
      );
      Array.prototype.forEach.call(ssrStyles, function (node) {
        document.head.appendChild(node), node.setAttribute("data-s", "");
      });
    }
    var container,
      _insert,
      stylisPlugins = options.stylisPlugins || defaultStylisPlugins,
      inserted = {},
      nodesToHydrate = [];
    (container = options.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll("style[data-emotion]"),
        function (node) {
          var attrib = node.getAttribute("data-emotion").split(" ");
          if (attrib[0] === key) {
            for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = !0;
            nodesToHydrate.push(node);
          }
        }
      );
    var currentSheet,
      omnipresentPlugins = [compat, removeLabel],
      finalizingPlugins = [
        ue,
        fe(function (rule) {
          currentSheet.insert(rule);
        }),
      ],
      serializer = (function (e) {
        var r = M(e);
        return function (a, c, n, t) {
          for (var s = "", u = 0; u < r; u++) s += e[u](a, c, n, t) || "";
          return s;
        };
      })(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    _insert = function (selector, serialized, sheet, shouldCache) {
      (currentSheet = sheet),
        se(
          ee(
            selector
              ? selector + "{" + serialized.styles + "}"
              : serialized.styles
          ),
          serializer
        ),
        shouldCache && (cache.inserted[serialized.name] = !0);
    };
    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert,
    };
    return cache.sheet.hydrate(nodesToHydrate), cache;
  };
function createCommonjsModule(fn, basedir, module) {
  return (
    fn(
      (module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
          return (function () {
            throw new Error(
              "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
            );
          })(
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ null == base && module.path
          );
        },
      }),
      module.exports
    ),
    module.exports
  );
}
var b = "function" == typeof Symbol && Symbol.for,
  c$1 = b ? Symbol.for("react.element") : 60103,
  d$1 = b ? Symbol.for("react.portal") : 60106,
  e$1 = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g$1 = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k$1 = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m$1 = b ? Symbol.for("react.concurrent_mode") : 60111,
  n$1 = b ? Symbol.for("react.forward_ref") : 60112,
  p$1 = b ? Symbol.for("react.suspense") : 60113,
  q$1 = b ? Symbol.for("react.suspense_list") : 60120,
  r$1 = b ? Symbol.for("react.memo") : 60115,
  t$1 = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x$1 = b ? Symbol.for("react.responder") : 60118,
  y$1 = b ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if ("object" == typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c$1:
        switch ((a = a.type)) {
          case l:
          case m$1:
          case e$1:
          case g$1:
          case f:
          case p$1:
            return a;
          default:
            switch ((a = a && a.$$typeof)) {
              case k$1:
              case n$1:
              case t$1:
              case r$1:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d$1:
        return u;
    }
  }
}
function A$1(a) {
  return z$1(a) === m$1;
}
var reactIs_production_min = {
    AsyncMode: l,
    ConcurrentMode: m$1,
    ContextConsumer: k$1,
    ContextProvider: h,
    Element: c$1,
    ForwardRef: n$1,
    Fragment: e$1,
    Lazy: t$1,
    Memo: r$1,
    Portal: d$1,
    Profiler: g$1,
    StrictMode: f,
    Suspense: p$1,
    isAsyncMode: function (a) {
      return A$1(a) || z$1(a) === l;
    },
    isConcurrentMode: A$1,
    isContextConsumer: function (a) {
      return z$1(a) === k$1;
    },
    isContextProvider: function (a) {
      return z$1(a) === h;
    },
    isElement: function (a) {
      return "object" == typeof a && null !== a && a.$$typeof === c$1;
    },
    isForwardRef: function (a) {
      return z$1(a) === n$1;
    },
    isFragment: function (a) {
      return z$1(a) === e$1;
    },
    isLazy: function (a) {
      return z$1(a) === t$1;
    },
    isMemo: function (a) {
      return z$1(a) === r$1;
    },
    isPortal: function (a) {
      return z$1(a) === d$1;
    },
    isProfiler: function (a) {
      return z$1(a) === g$1;
    },
    isStrictMode: function (a) {
      return z$1(a) === f;
    },
    isSuspense: function (a) {
      return z$1(a) === p$1;
    },
    isValidElementType: function (a) {
      return (
        "string" == typeof a ||
        "function" == typeof a ||
        a === e$1 ||
        a === m$1 ||
        a === g$1 ||
        a === f ||
        a === p$1 ||
        a === q$1 ||
        ("object" == typeof a &&
          null !== a &&
          (a.$$typeof === t$1 ||
            a.$$typeof === r$1 ||
            a.$$typeof === h ||
            a.$$typeof === k$1 ||
            a.$$typeof === n$1 ||
            a.$$typeof === w ||
            a.$$typeof === x$1 ||
            a.$$typeof === y$1 ||
            a.$$typeof === v))
      );
    },
    typeOf: z$1,
  },
  reactIs =
    (createCommonjsModule(function (module, exports) {}),
    createCommonjsModule(function (module) {
      module.exports = reactIs_production_min;
    })),
  TYPE_STATICS = {};
(TYPE_STATICS[reactIs.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (TYPE_STATICS[reactIs.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  }),
  createContext(
    "undefined" != typeof HTMLElement ? createCache({ key: "css" }) : null
  ).Provider;
var ThemeContext = createContext({});
createCommonjsModule(function (module) {
  function _extends() {
    return (
      (module.exports = _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source)
              Object.prototype.hasOwnProperty.call(source, key) &&
                (target[key] = source[key]);
          }
          return target;
        }),
      _extends.apply(this, arguments)
    );
  }
  module.exports = _extends;
}),
  console.log(function () {
    return useContext(ThemeContext);
  });
