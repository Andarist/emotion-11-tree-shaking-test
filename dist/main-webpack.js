(() => {
  "use strict";
  var __webpack_modules__ = {
      679: (module, __unused_webpack_exports, __webpack_require__) => {
        var reactIs = __webpack_require__(864),
          REACT_STATICS = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          KNOWN_STATICS = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          MEMO_STATICS = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          TYPE_STATICS = {};
        function getStatics(component) {
          return reactIs.isMemo(component)
            ? MEMO_STATICS
            : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
        }
        (TYPE_STATICS[reactIs.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (TYPE_STATICS[reactIs.Memo] = MEMO_STATICS);
        var defineProperty = Object.defineProperty,
          getOwnPropertyNames = Object.getOwnPropertyNames,
          getOwnPropertySymbols = Object.getOwnPropertySymbols,
          getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
          getPrototypeOf = Object.getPrototypeOf,
          objectPrototype = Object.prototype;
        module.exports = function hoistNonReactStatics(
          targetComponent,
          sourceComponent,
          blacklist
        ) {
          if ("string" != typeof sourceComponent) {
            if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              inheritedComponent &&
                inheritedComponent !== objectPrototype &&
                hoistNonReactStatics(
                  targetComponent,
                  inheritedComponent,
                  blacklist
                );
            }
            var keys = getOwnPropertyNames(sourceComponent);
            getOwnPropertySymbols &&
              (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
            for (
              var targetStatics = getStatics(targetComponent),
                sourceStatics = getStatics(sourceComponent),
                i = 0;
              i < keys.length;
              ++i
            ) {
              var key = keys[i];
              if (
                !(
                  KNOWN_STATICS[key] ||
                  (blacklist && blacklist[key]) ||
                  (sourceStatics && sourceStatics[key]) ||
                  (targetStatics && targetStatics[key])
                )
              ) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                  defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
              }
            }
          }
          return targetComponent;
        };
      },
      921: (__unused_webpack_module, exports) => {
        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var b = "function" == typeof Symbol && Symbol.for,
          c = b ? Symbol.for("react.element") : 60103,
          d = b ? Symbol.for("react.portal") : 60106,
          e = b ? Symbol.for("react.fragment") : 60107,
          f = b ? Symbol.for("react.strict_mode") : 60108,
          g = b ? Symbol.for("react.profiler") : 60114,
          h = b ? Symbol.for("react.provider") : 60109,
          k = b ? Symbol.for("react.context") : 60110,
          l = b ? Symbol.for("react.async_mode") : 60111,
          m = b ? Symbol.for("react.concurrent_mode") : 60111,
          n = b ? Symbol.for("react.forward_ref") : 60112,
          p = b ? Symbol.for("react.suspense") : 60113,
          q = b ? Symbol.for("react.suspense_list") : 60120,
          r = b ? Symbol.for("react.memo") : 60115,
          t = b ? Symbol.for("react.lazy") : 60116,
          v = b ? Symbol.for("react.block") : 60121,
          w = b ? Symbol.for("react.fundamental") : 60117,
          x = b ? Symbol.for("react.responder") : 60118,
          y = b ? Symbol.for("react.scope") : 60119;
        function z(a) {
          if ("object" == typeof a && null !== a) {
            var u = a.$$typeof;
            switch (u) {
              case c:
                switch ((a = a.type)) {
                  case l:
                  case m:
                  case e:
                  case g:
                  case f:
                  case p:
                    return a;
                  default:
                    switch ((a = a && a.$$typeof)) {
                      case k:
                      case n:
                      case t:
                      case r:
                      case h:
                        return a;
                      default:
                        return u;
                    }
                }
              case d:
                return u;
            }
          }
        }
        function A(a) {
          return z(a) === m;
        }
        (exports.AsyncMode = l),
          (exports.ConcurrentMode = m),
          (exports.ContextConsumer = k),
          (exports.ContextProvider = h),
          (exports.Element = c),
          (exports.ForwardRef = n),
          (exports.Fragment = e),
          (exports.Lazy = t),
          (exports.Memo = r),
          (exports.Portal = d),
          (exports.Profiler = g),
          (exports.StrictMode = f),
          (exports.Suspense = p),
          (exports.isAsyncMode = function (a) {
            return A(a) || z(a) === l;
          }),
          (exports.isConcurrentMode = A),
          (exports.isContextConsumer = function (a) {
            return z(a) === k;
          }),
          (exports.isContextProvider = function (a) {
            return z(a) === h;
          }),
          (exports.isElement = function (a) {
            return "object" == typeof a && null !== a && a.$$typeof === c;
          }),
          (exports.isForwardRef = function (a) {
            return z(a) === n;
          }),
          (exports.isFragment = function (a) {
            return z(a) === e;
          }),
          (exports.isLazy = function (a) {
            return z(a) === t;
          }),
          (exports.isMemo = function (a) {
            return z(a) === r;
          }),
          (exports.isPortal = function (a) {
            return z(a) === d;
          }),
          (exports.isProfiler = function (a) {
            return z(a) === g;
          }),
          (exports.isStrictMode = function (a) {
            return z(a) === f;
          }),
          (exports.isSuspense = function (a) {
            return z(a) === p;
          }),
          (exports.isValidElementType = function (a) {
            return (
              "string" == typeof a ||
              "function" == typeof a ||
              a === e ||
              a === m ||
              a === g ||
              a === f ||
              a === p ||
              a === q ||
              ("object" == typeof a &&
                null !== a &&
                (a.$$typeof === t ||
                  a.$$typeof === r ||
                  a.$$typeof === h ||
                  a.$$typeof === k ||
                  a.$$typeof === n ||
                  a.$$typeof === w ||
                  a.$$typeof === x ||
                  a.$$typeof === y ||
                  a.$$typeof === v))
            );
          }),
          (exports.typeOf = z);
      },
      864: (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__(921);
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    if (__webpack_module_cache__[moduleId])
      return __webpack_module_cache__[moduleId].exports;
    var module = (__webpack_module_cache__[moduleId] = { exports: {} });
    return (
      __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__
      ),
      module.exports
    );
  }
  (() => {
    const external_react_namespaceObject = react;
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
      abs = Math.abs,
      Utility_from = String.fromCharCode;
    function trim(value) {
      return value.trim();
    }
    function replace(value, pattern, replacement) {
      return value.replace(pattern, replacement);
    }
    function Utility_charat(value, index) {
      return 0 | value.charCodeAt(index);
    }
    function Utility_substr(value, begin, end) {
      return value.slice(begin, end);
    }
    function Utility_strlen(value) {
      return value.length;
    }
    function Utility_sizeof(value) {
      return value.length;
    }
    function Utility_append(value, array) {
      return array.push(value), value;
    }
    var line = 1,
      column = 1,
      Tokenizer_length = 0,
      position = 0,
      character = 0,
      characters = "";
    function node(value, root, parent, type, props, children, length) {
      return {
        value,
        root,
        parent,
        type,
        props,
        children,
        line,
        column,
        length,
        return: "",
      };
    }
    function copy(value, root, type) {
      return node(
        value,
        root.root,
        root.parent,
        type,
        root.props,
        root.children,
        0
      );
    }
    function next() {
      return (
        (character =
          position < Tokenizer_length
            ? Utility_charat(characters, position++)
            : 0),
        column++,
        10 === character && ((column = 1), line++),
        character
      );
    }
    function peek() {
      return Utility_charat(characters, position);
    }
    function caret() {
      return position;
    }
    function slice(begin, end) {
      return Utility_substr(characters, begin, end);
    }
    function token(type) {
      switch (type) {
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
    function alloc(value) {
      return (
        (line = column = 1),
        (Tokenizer_length = Utility_strlen((characters = value))),
        (position = 0),
        []
      );
    }
    function dealloc(value) {
      return (characters = ""), value;
    }
    function delimit(type) {
      return trim(
        slice(
          position - 1,
          delimiter(91 === type ? type + 2 : 40 === type ? type + 1 : type)
        )
      );
    }
    function whitespace(type) {
      for (; (character = peek()) && character < 33; ) next();
      return token(type) > 2 || token(character) > 3 ? "" : " ";
    }
    function delimiter(type) {
      for (; next(); )
        switch (character) {
          case type:
            return position;
          case 34:
          case 39:
            return delimiter(34 === type || 39 === type ? type : character);
          case 40:
            41 === type && delimiter(type);
            break;
          case 92:
            next();
        }
      return position;
    }
    function commenter(type, index) {
      for (
        ;
        next() &&
        type + character !== 57 &&
        (type + character !== 84 || 47 !== peek());

      );
      return (
        "/*" +
        slice(index, position - 1) +
        "*" +
        Utility_from(47 === type ? type : next())
      );
    }
    function identifier(index) {
      for (; !token(peek()); ) next();
      return slice(index, position);
    }
    var MS = "-ms-",
      WEBKIT = "-webkit-";
    function serialize(children, callback) {
      for (
        var output = "", length = Utility_sizeof(children), i = 0;
        i < length;
        i++
      )
        output += callback(children[i], i, children, callback) || "";
      return output;
    }
    function stringify(element, index, children, callback) {
      switch (element.type) {
        case "@import":
        case "decl":
          return (element.return = element.return || element.value);
        case "comm":
          return "";
        case "rule":
          element.value = element.props.join(",");
      }
      return Utility_strlen((children = serialize(element.children, callback)))
        ? (element.return = element.value + "{" + children + "}")
        : "";
    }
    function prefix(value, length) {
      switch (
        (function (value, length) {
          return (
            (((((((length << 2) ^ Utility_charat(value, 0)) << 2) ^
              Utility_charat(value, 1)) <<
              2) ^
              Utility_charat(value, 2)) <<
              2) ^
            Utility_charat(value, 3)
          );
        })(value, length)
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
          return WEBKIT + value + value;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return WEBKIT + value + "-moz-" + value + MS + value + value;
        case 6828:
        case 4268:
          return WEBKIT + value + MS + value + value;
        case 6165:
          return WEBKIT + value + MS + "flex-" + value + value;
        case 5187:
          return (
            WEBKIT +
            value +
            replace(value, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
            value
          );
        case 5443:
          return (
            WEBKIT +
            value +
            MS +
            "flex-item-" +
            replace(value, /flex-|-self/, "") +
            value
          );
        case 4675:
          return (
            WEBKIT +
            value +
            MS +
            "flex-line-pack" +
            replace(value, /align-content|flex-|-self/, "") +
            value
          );
        case 5548:
          return (
            WEBKIT + value + MS + replace(value, "shrink", "negative") + value
          );
        case 5292:
          return (
            WEBKIT +
            value +
            MS +
            replace(value, "basis", "preferred-size") +
            value
          );
        case 6060:
          return (
            WEBKIT +
            "box-" +
            replace(value, "-grow", "") +
            WEBKIT +
            value +
            MS +
            replace(value, "grow", "positive") +
            value
          );
        case 4554:
          return (
            WEBKIT +
            replace(value, /([^-])(transform)/g, "$1-webkit-$2") +
            value
          );
        case 6187:
          return (
            replace(
              replace(
                replace(value, /(zoom-|grab)/, WEBKIT + "$1"),
                /(image-set)/,
                WEBKIT + "$1"
              ),
              value,
              ""
            ) + value
          );
        case 5495:
        case 3959:
          return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
        case 4968:
          return (
            replace(
              replace(
                value,
                /(.+:)(flex-)?(.*)/,
                "-webkit-box-pack:$3-ms-flex-pack:$3"
              ),
              /s.+-b[^;]+/,
              "justify"
            ) +
            WEBKIT +
            value +
            value
          );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
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
          if (Utility_strlen(value) - 1 - length > 6)
            switch (Utility_charat(value, length + 1)) {
              case 109:
                return (
                  replace(
                    value,
                    /(.+:)(.+)-([^]+)/,
                    "$1-webkit-$2-$3$1-moz-$2-$3"
                  ) + value
                );
              case 102:
                return (
                  replace(
                    value,
                    /(.+:)(.+)-([^]+)/,
                    "$1-webkit-$2-$3$1-moz-$3"
                  ) + value
                );
              case 115:
                return (
                  prefix(replace(value, "stretch", "fill-available"), length) +
                  value
                );
            }
          break;
        case 4949:
          if (115 !== Utility_charat(value, length + 1)) break;
        case 6444:
          switch (
            Utility_charat(
              value,
              Utility_strlen(value) -
                3 -
                (~(function (value, search) {
                  return value.indexOf("!important");
                })(value) && 10)
            )
          ) {
            case 107:
            case 111:
              return replace(value, value, WEBKIT + value) + value;
            case 101:
              return (
                replace(
                  value,
                  /(.+:)([^;!]+)(;|!.+)?/,
                  "$1" +
                    WEBKIT +
                    (45 === Utility_charat(value, 14) ? "inline-" : "") +
                    "box$3$1" +
                    WEBKIT +
                    "$2$3$1" +
                    MS +
                    "$2box$3"
                ) + value
              );
          }
          break;
        case 5936:
          switch (Utility_charat(value, length + 11)) {
            case 114:
              return (
                WEBKIT +
                value +
                MS +
                replace(value, /[svh]\w+-[tblr]{2}/, "tb") +
                value
              );
            case 108:
              return (
                WEBKIT +
                value +
                MS +
                replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                value
              );
            case 45:
              return (
                WEBKIT +
                value +
                MS +
                replace(value, /[svh]\w+-[tblr]{2}/, "lr") +
                value
              );
          }
          return WEBKIT + value + MS + value + value;
      }
      return value;
    }
    function compile(value) {
      return dealloc(
        parse("", null, null, null, [""], (value = alloc(value)), 0, [0], value)
      );
    }
    function parse(
      value,
      root,
      parent,
      rule,
      rules,
      rulesets,
      pseudo,
      points,
      declarations
    ) {
      for (
        var index = 0,
          offset = 0,
          length = pseudo,
          atrule = 0,
          property = 0,
          previous = 0,
          variable = 1,
          scanning = 1,
          ampersand = 1,
          character = 0,
          type = "",
          props = rules,
          children = rulesets,
          reference = rule,
          characters = type;
        scanning;

      )
        switch (((previous = character), (character = next()))) {
          case 34:
          case 39:
          case 91:
          case 40:
            characters += delimit(character);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            characters += whitespace(previous);
            break;
          case 47:
            switch (peek()) {
              case 42:
              case 47:
                Utility_append(
                  comment(commenter(next(), caret()), root, parent),
                  declarations
                );
                break;
              default:
                characters += "/";
            }
            break;
          case 123 * variable:
            points[index++] = Utility_strlen(characters) * ampersand;
          case 125 * variable:
          case 59:
          case 0:
            switch (character) {
              case 0:
              case 125:
                scanning = 0;
              case 59 + offset:
                property > 0 &&
                  Utility_append(
                    property > 32
                      ? declaration(characters + ";", rule, parent, length - 1)
                      : declaration(
                          replace(characters, " ", "") + ";",
                          rule,
                          parent,
                          length - 2
                        ),
                    declarations
                  );
                break;
              case 59:
                characters += ";";
              default:
                if (
                  (Utility_append(
                    (reference = ruleset(
                      characters,
                      root,
                      parent,
                      index,
                      offset,
                      rules,
                      points,
                      type,
                      (props = []),
                      (children = []),
                      length
                    )),
                    rulesets
                  ),
                  123 === character)
                )
                  if (0 === offset)
                    parse(
                      characters,
                      root,
                      reference,
                      reference,
                      props,
                      rulesets,
                      length,
                      points,
                      children
                    );
                  else
                    switch (atrule) {
                      case 100:
                      case 109:
                      case 115:
                        parse(
                          value,
                          reference,
                          reference,
                          rule &&
                            Utility_append(
                              ruleset(
                                value,
                                reference,
                                reference,
                                0,
                                0,
                                rules,
                                points,
                                type,
                                rules,
                                (props = []),
                                length
                              ),
                              children
                            ),
                          rules,
                          children,
                          length,
                          points,
                          rule ? props : children
                        );
                        break;
                      default:
                        parse(
                          characters,
                          reference,
                          reference,
                          reference,
                          [""],
                          children,
                          length,
                          points,
                          children
                        );
                    }
            }
            (index = offset = property = 0),
              (variable = ampersand = 1),
              (type = characters = ""),
              (length = pseudo);
            break;
          case 58:
            (length = 1 + Utility_strlen(characters)), (property = previous);
          default:
            switch (
              ((characters += Utility_from(character)), character * variable)
            ) {
              case 38:
                ampersand = offset > 0 ? 1 : ((characters += "\f"), -1);
                break;
              case 44:
                (points[index++] =
                  (Utility_strlen(characters) - 1) * ampersand),
                  (ampersand = 1);
                break;
              case 64:
                45 === peek() && (characters += delimit(next())),
                  (atrule = peek()),
                  (offset = Utility_strlen(
                    (type = characters += identifier(caret()))
                  )),
                  character++;
                break;
              case 45:
                45 === previous &&
                  2 == Utility_strlen(characters) &&
                  (variable = 0);
            }
        }
      return rulesets;
    }
    function ruleset(
      value,
      root,
      parent,
      index,
      offset,
      rules,
      points,
      type,
      props,
      children,
      length
    ) {
      for (
        var post = offset - 1,
          rule = 0 === offset ? rules : [""],
          size = Utility_sizeof(rule),
          i = 0,
          j = 0,
          k = 0;
        i < index;
        ++i
      )
        for (
          var x = 0,
            y = Utility_substr(value, post + 1, (post = abs((j = points[i])))),
            z = value;
          x < size;
          ++x
        )
          (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) &&
            (props[k++] = z);
      return node(
        value,
        root,
        parent,
        0 === offset ? "rule" : type,
        props,
        children,
        length
      );
    }
    function comment(value, root, parent) {
      return node(
        value,
        root,
        parent,
        "comm",
        Utility_from(character),
        Utility_substr(value, 2, -2),
        0
      );
    }
    function declaration(value, root, parent, length) {
      return node(
        value,
        root,
        parent,
        "decl",
        Utility_substr(value, 0, length),
        Utility_substr(value, length + 1, -1),
        length
      );
    }
    var fixedElements = new WeakMap(),
      compat = function (element) {
        if ("rule" === element.type && element.parent && element.length) {
          for (
            var value = element.value,
              parent = element.parent,
              isImplicitRule =
                element.column === parent.column &&
                element.line === parent.line;
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
                  return dealloc(
                    (function (parsed, points) {
                      var index = -1,
                        character = 44;
                      do {
                        switch (token(character)) {
                          case 0:
                            38 === character &&
                              12 === peek() &&
                              (points[index] = 1),
                              (parsed[index] += identifier(position - 1));
                            break;
                          case 2:
                            parsed[index] += delimit(character);
                            break;
                          case 4:
                            if (44 === character) {
                              (parsed[++index] = 58 === peek() ? "&\f" : ""),
                                (points[index] = parsed[index].length);
                              break;
                            }
                          default:
                            parsed[index] += Utility_from(character);
                        }
                      } while ((character = next()));
                      return parsed;
                    })(alloc(value), points)
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
        function (element, index, children, callback) {
          if (!element.return)
            switch (element.type) {
              case "decl":
                element.return = prefix(element.value, element.length);
                break;
              case "@keyframes":
                return serialize(
                  [
                    copy(
                      replace(element.value, "@", "@" + WEBKIT),
                      element,
                      ""
                    ),
                  ],
                  callback
                );
              case "rule":
                if (element.length)
                  return (function (array, callback) {
                    return array.map(callback).join("");
                  })(element.props, function (value) {
                    switch (
                      (function (value, pattern) {
                        return (value = /(::plac\w+|:read-\w+)/.exec(value))
                          ? value[0]
                          : value;
                      })(value)
                    ) {
                      case ":read-only":
                      case ":read-write":
                        return serialize(
                          [
                            copy(
                              replace(value, /:(read-\w+)/, ":-moz-$1"),
                              element,
                              ""
                            ),
                          ],
                          callback
                        );
                      case "::placeholder":
                        return serialize(
                          [
                            copy(
                              replace(value, /:(plac\w+)/, ":-webkit-input-$1"),
                              element,
                              ""
                            ),
                            copy(
                              replace(value, /:(plac\w+)/, ":-moz-$1"),
                              element,
                              ""
                            ),
                            copy(
                              replace(value, /:(plac\w+)/, MS + "input-$1"),
                              element,
                              ""
                            ),
                          ],
                          callback
                        );
                    }
                    return "";
                  });
            }
        },
      ];
    const emotion_cache_browser_esm = function (options) {
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
        collection,
        length,
        callback,
        finalizingPlugins = [
          stringify,
          ((callback = function (rule) {
            currentSheet.insert(rule);
          }),
          function (element) {
            element.root || ((element = element.return) && callback(element));
          }),
        ],
        serializer =
          ((collection = [compat, removeLabel].concat(
            stylisPlugins,
            finalizingPlugins
          )),
          (length = Utility_sizeof(collection)),
          function (element, index, children, callback) {
            for (var output = "", i = 0; i < length; i++)
              output += collection[i](element, index, children, callback) || "";
            return output;
          });
      _insert = function (selector, serialized, sheet, shouldCache) {
        (currentSheet = sheet),
          serialize(
            compile(
              selector
                ? selector + "{" + serialized.styles + "}"
                : serialized.styles
            ),
            serializer
          ),
          shouldCache && (cache.inserted[serialized.name] = !0);
      };
      var cache = {
        key,
        sheet: new StyleSheet({
          key,
          container,
          nonce: options.nonce,
          speedy: options.speedy,
          prepend: options.prepend,
        }),
        nonce: options.nonce,
        inserted,
        registered: {},
        insert: _insert,
      };
      return cache.sheet.hydrate(nodesToHydrate), cache;
    };
    __webpack_require__(679), Object.prototype.hasOwnProperty;
    var ThemeContext =
      ((0, external_react_namespaceObject.createContext)(
        "undefined" != typeof HTMLElement
          ? emotion_cache_browser_esm({ key: "css" })
          : null
      ).Provider,
      (0, external_react_namespaceObject.createContext)({}));
    console.log(function () {
      return (0, external_react_namespaceObject.useContext)(ThemeContext);
    });
  })();
})();
