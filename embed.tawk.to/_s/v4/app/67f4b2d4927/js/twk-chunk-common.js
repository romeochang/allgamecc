/*! For license information please see twk-chunk-common.js.LICENSE */
(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-common"],
  {
    "028e": function (t, e, n) {
      "use strict";
      var i = n("5868"),
        r = n("7f46"),
        o = n("bdd0"),
        a = function (t, e) {
          o.a.get(
            ""
              .concat("https://upload.tawk.to", "/upload/handle?_t=")
              .concat(new Date().getTime()),
            null,
            null,
            function (n, i) {
              if (n) return e();
              t(i.handle);
            }
          );
        },
        s = function (t, e, n, i) {
          var r = new FormData();
          r.append("upload", n, n.name || n.filename),
            o.a.post(
              ""
                .concat(
                  "https://upload.tawk.to",
                  "/upload/visitor-chat/visitor?handle="
                )
                .concat(t, "&visitorSessionId=")
                .concat(e),
              r,
              {},
              function (t, e) {
                if (t) return i(!0);
                i(e);
              }
            );
        },
        c = n("f0b0"),
        u = n("27a6"),
        l = n("65b3"),
        d = n("b7cc"),
        f = n("24ca"),
        h = n("d3a4");
      function p(t) {
        return (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m() {
        m = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, i) {
          var o = e && e.prototype instanceof w ? e : w,
            a = Object.create(o.prototype),
            s = new A(i || []);
          return r(a, "_invoke", { value: O(t, n, s) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          h = "executing",
          g = "completed",
          v = {};
        function w() {}
        function y() {}
        function b() {}
        var k = {};
        u(k, a, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          S = T && T(T(_([])));
        S && S !== n && i.call(S, a) && (k = S);
        var I = (b.prototype = w.prototype = Object.create(k));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(r, o, a, s) {
            var c = d(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && "object" == p(l) && i.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (t, i) {
              function r() {
                return new e(function (e, r) {
                  n(t, i, e, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function O(e, n, i) {
          var r = f;
          return function (o, a) {
            if (r === h) throw Error("Generator is already running");
            if (r === g) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = o, i.arg = a; ; ) {
              var s = i.delegate;
              if (s) {
                var c = x(s, i);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (r === f) throw ((r = g), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              r = h;
              var u = d(e, n, i);
              if ("normal" === u.type) {
                if (((r = i.done ? g : "suspendedYield"), u.arg === v))
                  continue;
                return { value: u.arg, done: i.done };
              }
              "throw" === u.type &&
                ((r = g), (i.method = "throw"), (i.arg = u.arg));
            }
          };
        }
        function x(e, n) {
          var i = n.method,
            r = e.iterator[i];
          if (r === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method"
                  )))),
              v
            );
          var o = d(r, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function _(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function n() {
                  for (; ++r < e.length; )
                    if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(p(e) + " is not iterable");
        }
        return (
          (y.prototype = b),
          r(I, "constructor", { value: b, configurable: !0 }),
          r(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = u(b, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(I)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, i, r, o) {
            void 0 === o && (o = Promise);
            var a = new E(l(t, n, i, r), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(I),
          u(I, c, "Generator"),
          u(I, a, function () {
            return this;
          }),
          u(I, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return (t.value = i), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = _),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(i, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = i),
                  r && ((n.method = "next"), (n.arg = t)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    u = i.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), L(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    L(n);
                  }
                  return r;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: _(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function g(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r);
      }
      function v(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                y(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function y(t, e, n) {
        return (
          (e = k(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function b(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, k(i.key), i);
        }
      }
      function k(t) {
        var e = (function (t, e) {
          if ("object" != p(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != p(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == p(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && b(t.prototype, e),
          n && b(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.keyDownTimeout = null),
            (this.webrtcWin = null),
            (this.maxNumberFileUpload = 5),
            (this.maxSizeFileUpload = 52428800),
            (this.regSurvey = /\[option\](.*?)(<br\/>|$)/gm),
            (this.regSurveyQuestion = /^([\s\S]*?)\[option\]/),
            (this.regOption = /\[option\]/g);
        },
        [
          {
            key: "install",
            value: function (t, e) {
              var n = e.store,
                i = e.TawkWindow;
              (t.prototype.$TawkChatManager = this),
                (this.store = n),
                (this.TawkWindow = i);
            },
          },
          {
            key: "processHistoryMessages",
            value: function (t) {
              for (
                var e = this,
                  n = [],
                  i = {},
                  r = null,
                  o = !1,
                  a = !1,
                  s = !1,
                  u = function () {
                    var u,
                      d,
                      f,
                      h,
                      p = !1,
                      m = null,
                      g = t[l],
                      v = c.Helper.generateUUID(),
                      y = new Date(g.co).getTime(),
                      b = {};
                    if (
                      ("WEBRTC_CALL" === g.m &&
                        g.md &&
                        g.md.webrtc &&
                        ((p = !0), (m = g.md.clid)),
                      "n" === g.t && "WEBRTC_CALL" !== g.m)
                    )
                      return (
                        "AGENT_JOIN_CONVERSATION" === g.m &&
                          g.md &&
                          (i[g.md.rsc] = g.md),
                        0
                      );
                    if (g.md && g.md.ao) return 0;
                    if (((h = g.n), (u = g.uid), "a" === g.ut)) {
                      var k = i[g.md.rsc];
                      k &&
                        ((u = k.pid),
                        (d = k.pi
                          ? ""
                              .concat(
                                "https://s3.amazonaws.com/tawk-to-pi",
                                "/"
                              )
                              .concat(k.pi)
                          : "".concat(
                              "https://embed.tawk.to/_s/v4/assets",
                              "/images/default-profile.svg"
                            )));
                    } else
                      "s" === g.ut &&
                        ((u = c.Helper.generateUUID()),
                        (d =
                          g.md && g.md.pi
                            ? ""
                                .concat("https://tawk.link", "/")
                                .concat(g.md.pi)
                            : "".concat(
                                "https://embed.tawk.to/_s/v4/assets",
                                "/images/default-profile.svg"
                              )));
                    if (
                      (g.attchs &&
                        Array.isArray(g.attchs) &&
                        g.attchs.forEach(function (t) {
                          var n = t.type;
                          "suggested-messages" === n
                            ? ((s = !0), (r = { options: t.content.options }))
                            : "file" === n
                            ? (b = e.processFile(g))
                            : "ticket-form" === n
                            ? (o = !0)
                            : "lead-capture-form" === n && (a = !0);
                        }),
                      s || "v" === g.ut)
                    )
                      f = e.parseText(g.m);
                    else {
                      var T = e.parseSurvey(g.m),
                        S = T.parsedMessage,
                        I = T.surveyOptions;
                      (f = S), I && (r = { options: I });
                    }
                    n.push(
                      w(
                        w({}, b),
                        {},
                        {
                          timeStamp: y,
                          message: f || "",
                          name: h,
                          type: g.t,
                          time: g.co,
                          data: g.md,
                          isPending: !1,
                          senderType: g.ut,
                          ownerId: u,
                          profileImage: d,
                          cver: g.cver,
                          messageId: v,
                          isCallView: p,
                          callId: m,
                          callData: null,
                          surveyObj: r,
                          rawMessage: g,
                          hasInlineTicketForm: o,
                          hasInlineLeadCaptureForm: a,
                        }
                      )
                    );
                  },
                  l = 0;
                l < t.length;
                l++
              )
                u();
              return n;
            },
          },
          {
            key: "parseChatMessage",
            value: function (t, e) {
              var n,
                i,
                o,
                a,
                s,
                u = this,
                l = !1,
                f = null,
                p = {},
                m = null,
                g = null,
                v = null,
                y = !1,
                b = !1,
                k = !1,
                T = c.Helper.generateUUID(),
                S = new Date(t.co).getTime(),
                I = !!e && !!this.store.getters["chat/chatTransferData"];
              if (
                ((t.n = r.a.rawDecode(t.n)),
                (t.m = r.a.rawDecode(t.m)),
                "n" === t.t &&
                  ("AGENT_JOIN_CONVERSATION" === t.m ||
                    "AGENT_LEFT_CONVERSATION" === t.m))
              )
                return (
                  this.updateAgentPresence(t, e),
                  this.store.dispatch("chat/updateChatMessage", {
                    rawMessage: t,
                    type: "n",
                  }),
                  I &&
                    "AGENT_JOIN_CONVERSATION" === t.m &&
                    this.store.commit("chat/setChatTransferData", null),
                  null
                );
              if ("n" === t.t && "CHAT_TRANSFER" === t.m)
                return (
                  this.store.dispatch("chat/updateChatMessage", {
                    rawMessage: t,
                    type: "n",
                  }),
                  (I =
                    "active" ===
                    (null === (a = t.md) ||
                    void 0 === a ||
                    null === (a = a.transfer) ||
                    void 0 === a
                      ? void 0
                      : a.status)),
                  null
                );
              if ("n" === t.t && "v" === t.ut) {
                if ("VISITOR_RATING" !== t.m) return;
                "VISITOR_RATING" === t.m &&
                  (e && this.changeRating(t.md.rt, !0),
                  t.md.rt < 0
                    ? ((t.m = "thumbs-down"), (t.t = "c"))
                    : t.md.rt > 0
                    ? ((t.m = "thumbs-up"), (t.t = "c"))
                    : (t.m = h.a.$i18n("chat", "remove_rate")));
              }
              if ("v" === t.ut)
                (n = this.store.getters["visitor/displayName"]), (i = t.uid);
              else if (((n = t.n), "a" === t.ut)) {
                var P = this.store.getters["chat/agents"];
                P[t.md.rsc] && (i = P[t.md.rsc].profileId);
                var E = this.store.getters["chat/agentProfile"](t.md.rsc);
                o = E ? E.profileImage : null;
              } else
                "s" === t.ut &&
                  (o =
                    t.md && t.md.pi
                      ? "".concat("https://tawk.link", "/").concat(t.md.pi)
                      : "".concat(
                          "https://embed.tawk.to/_s/v4/assets",
                          "/images/default-profile.svg"
                        ));
              if (
                (t.attchs &&
                  Array.isArray(t.attchs) &&
                  t.attchs.forEach(function (e) {
                    var n = e.type;
                    "suggested-messages" === n
                      ? ((k = !0), (m = { options: e.content.options }))
                      : "file" === n
                      ? (p = u.processFile(t))
                      : "ticket-form" === n
                      ? ((y = !0), (g = e.content.ref))
                      : "lead-capture-form" === n &&
                        ((b = !0), (v = e.content.ref));
                  }),
                "WEBRTC_CALL" === t.m && t.md && t.md.webrtc)
              )
                (l = !0), (f = t.md.clid);
              else {
                if ("c" === t.t)
                  if ("v" === t.ut)
                    this.store.commit("chat/setVisitorHasMessaged", !0);
                  else if ("a" === t.ut) {
                    if (
                      (this.store.commit("chat/setAgentHasMessaged", !0), e)
                    ) {
                      var O = {
                        message: t.m,
                        attachments: t.attchs ? t.attchs : [],
                      };
                      0 === t.m.length && delete O.message,
                        d.a.triggerApiHandlers("onChatMessageAgent", O);
                    }
                  } else if ("s" === t.ut && e) {
                    var x = {
                      message: t.m,
                      attachments: t.attchs ? t.attchs : [],
                    };
                    0 === t.m.length && delete x.message,
                      d.a.triggerApiHandlers("onChatMessageSystem", x);
                  }
                if (k || "v" === t.ut) s = this.parseText(t.m);
                else {
                  var C = this.parseSurvey(t.m),
                    L = C.parsedMessage,
                    A = C.surveyOptions;
                  (s = L), A && (m = { options: A });
                }
              }
              return (
                S > this.store.getters["session/lastMessageTimestamp"] &&
                  ("v" === t.ut
                    ? this.store.commit("session/setLastMessageTimestamp", S)
                    : (this.store.dispatch("chat/updateUnseenMessages", T),
                      e &&
                        d.a.triggerApiHandlers(
                          "onUnreadCountChanged",
                          this.store.getters["chat/unreadMessageCount"]
                        ))),
                (p = w(
                  w({}, p),
                  {},
                  {
                    timeStamp: S,
                    message: s,
                    name: n,
                    type: t.t,
                    time: t.co,
                    data: t.md,
                    isPending: !S,
                    senderType: t.ut,
                    ownerId: i,
                    profileImage: o,
                    cver: t.cver,
                    messageId: T,
                    isCallView: l,
                    callId: f,
                    callData: null,
                    surveyObj: m,
                    rawMessage: t,
                    ticketFormRef: g,
                    hasInlineTicketForm: y,
                    leadFormRef: v,
                    hasInlineLeadCaptureForm: b,
                  }
                ))
              );
            },
          },
          {
            key: "processFile",
            value: function (t) {
              if (t.attchs && Array.isArray(t.attchs)) {
                var e = { images: [], videos: [], audios: [], files: [] };
                return (
                  t.attchs.forEach(function (t) {
                    if ("file" === t.type) {
                      var n = t.content.file;
                      -1 !==
                      ["image/jpeg", "image/png", "image/gif"].indexOf(
                        n.mimeType
                      )
                        ? e.images.push({
                            source: n.url,
                            name: r.a.rawEncode(n.name),
                          })
                        : -1 !==
                          ["video/mp4", "video/ogg", "video/webm"].indexOf(
                            n.mimeType
                          )
                        ? e.videos.push({
                            source: "selfhosted",
                            url: n.url,
                            name: r.a.rawEncode(n.name),
                            size: i.a.formatFileSize(n.size),
                            options: {
                              controls: "",
                              mute: !0,
                              loop: !1,
                              startTime: 0,
                            },
                          })
                        : -1 !==
                          [
                            "audio/mp3",
                            "audio/ogg",
                            "audio/mpeg",
                            "audio/wav",
                          ].indexOf(n.mimeType)
                        ? e.audios.push({
                            source: n.url,
                            type: n.mimeType,
                            name: r.a.rawEncode(n.name),
                            size: i.a.formatFileSize(n.size),
                          })
                        : e.files.push({
                            source: n.url,
                            name: r.a.rawEncode(n.name),
                            size: i.a.formatFileSize(n.size),
                          });
                    }
                  }),
                  { attchs: e }
                );
              }
            },
          },
          {
            key: "parseText",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!t) return t;
              if (r.a.hasMarkdown(t)) return r.a.rawEncode(t);
              for (var n = t.split("\n"), i = 0; i < n.length; i++)
                e || (n[i] = this.createUrl(n[i].split(" "), " "));
              return (t = n.join("\n"));
            },
          },
          {
            key: "createUrl",
            value: function (t, e) {
              for (var n = this, r = 0; r < t.length; r++)
                t[r].match(i.a.regEmailMatch)
                  ? (t[r] = t[r].replace(i.a.regEmailMatch, function (t) {
                      return n.parseEmail(t);
                    }))
                  : t[r].match(i.a.regTelMatch)
                  ? (t[r] = t[r].replace(i.a.regTelMatch, function (t) {
                      return n.parsePhoneNumber(t);
                    }))
                  : ((t[r] = t[r].replace(i.a.regMatchUrl, function (t) {
                      return n.parseUrl(t);
                    })),
                    (t[r] = t[r].replace(i.a.regMatchIp, function (t) {
                      return n.parseUrl(t);
                    })));
              return t.join(e);
            },
          },
          {
            key: "parseUrl",
            value: function (t) {
              var e,
                n = "";
              if (
                void 0 !== window.emojione &&
                window.emojione.unifyUnicode(t) !== t
              )
                return t;
              var o = r.a.hasPunctuation(t);
              if (o && o.length) {
                var a = o[0].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
                  s = new RegExp(a + "$", "g");
                t = t.replace(s, "");
              }
              var c = "".concat(o && o.length ? o[0] : "", " ");
              return (
                t.match(i.a.regEmailMatch) && (n = "mailto:"),
                "mailto:" === n
                  ? (-1 !==
                      (e = t.match(i.a.regEmailMatch)[0]).indexOf("mailto") &&
                      (n = ""),
                    t.replace(
                      i.a.regEmailMatch,
                      "["
                        .concat(e, "](")
                        .concat(n + e, ")")
                        .concat(c)
                    ))
                  : (0 !== t.toLowerCase().indexOf("http") &&
                      0 !== t.toLowerCase().indexOf("ftp") &&
                      (n = "http://"),
                    "_parent" ==
                    (this.parseUrlHostName(document.location.href) ===
                    this.parseUrlHostName(t)
                      ? "_parent"
                      : "_blank")
                      ? "_["
                          .concat(t, "](")
                          .concat(n + t, ")")
                          .concat(c)
                      : "["
                          .concat(t, "](")
                          .concat(n + t, ")")
                          .concat(c))
              );
            },
          },
          {
            key: "parseUrlHostName",
            value: function (t) {
              var e = t.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
              if (
                null != e &&
                e.length > 2 &&
                "string" == typeof e[2] &&
                e[2].length > 0
              )
                return e[2];
            },
          },
          {
            key: "parseEmail",
            value: function (t) {
              var e = "";
              return void 0 !== window.emojione &&
                window.emojione.unifyUnicode(t) !== t
                ? t
                : (-1 === t.indexOf("mailto") && (e = "mailto:"),
                  "[".concat(t, "](").concat(e + t, ")"));
            },
          },
          {
            key: "parseSurvey",
            value: function (t) {
              var e = t.match(this.regSurveyQuestion);
              if (null === e)
                return {
                  parsedMessage: this.parseText(t),
                  surveyOptions: null,
                };
              var n = this.parseText(r.a.trim(e[1])),
                o = [],
                a = t.match(this.regSurvey);
              if (!a) return { parsedMessage: n, surveyOptions: null };
              for (var s = 0, c = a.length; s < c; s++) {
                var u = a[s].replace(this.regOption, "");
                (u = u.replace(i.a.regBr, "")),
                  (u = r.a.trim(u)),
                  o.push({ text: u });
              }
              return { parsedMessage: n, surveyOptions: o };
            },
          },
          {
            key: "updateAgentPresence",
            value: function (t, e) {
              return (
                ("AGENT_JOIN_CONVERSATION" === t.m ||
                  "AGENT_LEFT_CONVERSATION" === t.m) &&
                ("AGENT_JOIN_CONVERSATION" === t.m
                  ? this.addAgentToList(t, e)
                  : this.removeAgentFromList(t, e))
              );
            },
          },
          {
            key: "addAgentToList",
            value: function (t, e) {
              var n = t.md || {},
                i = n.rsc,
                o = this.store.getters["chat/agents"][t],
                a = {
                  profileImage: n.pi
                    ? ""
                        .concat("https://s3.amazonaws.com/tawk-to-pi", "/")
                        .concat(n.pi)
                    : "".concat(
                        "https://embed.tawk.to/_s/v4/assets",
                        "/images/default-profile.svg"
                      ),
                  profileTitle: r.a.rawDecode(n.pst) || "",
                  profileId: n.pid,
                  displayName: t.n,
                  count: 1,
                  isBot: !!n.bot && n.bot,
                };
              if (o) {
                if (
                  !(
                    o.seq.time < n.seq.time ||
                    (o.seq.time === n.seq.time && o.seq.inc < n.seq.inc)
                  )
                )
                  return;
                if (o.profileId === n.pid) return !1;
              }
              e &&
                d.a.triggerApiHandlers("onAgentJoinChat", {
                  name: a.displayName,
                  position: a.profileTitle,
                  image: a.profileImage,
                  id: t.uid,
                }),
                this.store.dispatch("chat/agentJoined", {
                  resourceId: i,
                  agentData: n,
                  profileData: a,
                });
            },
          },
          {
            key: "removeAgentFromList",
            value: function (t, e) {
              var n = t.md || {},
                i = n.rsc,
                r = this.store.getters["chat/agents"][i];
              if (
                !(
                  !r ||
                  r.seq.time > n.seq.time ||
                  (r.seq.time === n.seq.time && r.seq.inc > n.seq.inc)
                )
              ) {
                if (e) {
                  var o = this.store.getters["chat/agentProfile"](i);
                  o &&
                    d.a.triggerApiHandlers("onAgentLeaveChat", {
                      name: o.displayName,
                      position: o.profileTitle,
                      image: o.profileImage,
                      id: t.uid,
                    });
                }
                this.store.dispatch("chat/agentLeft", {
                  resourceId: i,
                  agentData: n,
                });
              }
            },
          },
          {
            key: "sendMessagePreview",
            value: function (t) {
              var e,
                n = this,
                o = i.a.getTargetElement(t);
              if (
                13 === t.keyCode &&
                !t.shiftKey &&
                !this.store.getters["browserData/mobileBrowserName"]
              )
                return (
                  (e = r.a.trim(o.value)), (o.value = ""), this.sendMessage(e)
                );
              !this.keyDownTimeout &&
                this.store.getters["widget/showVisitorTyping"] &&
                (this.keyDownTimeout = setTimeout(function () {
                  (e = r.a.trim(o.value)),
                    void 0 !== window.emojione &&
                      (e = window.emojione.toShort(e)),
                    l.a.publish("notifyMessagePreview", e),
                    clearTimeout(n.keyDownTimeout),
                    (n.keyDownTimeout = null);
                }, 1e3));
            },
          },
          {
            key: "sendMessage",
            value: (function () {
              var t = (function (t) {
                return function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var o = t.apply(e, n);
                    function a(t) {
                      g(o, i, r, a, s, "next", t);
                    }
                    function s(t) {
                      g(o, i, r, a, s, "throw", t);
                    }
                    a(void 0);
                  });
                };
              })(
                m().mark(function t(e) {
                  var n, i, o, a, s, c, u;
                  return m().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((n = e.message),
                              (i = void 0 === n ? "" : n),
                              (o = e.attachments),
                              (a = void 0 === o ? [] : o),
                              (s = e.callback),
                              (i = r.a.rawDecode(r.a.trim(i))),
                              (s = s || function () {}),
                              (c = !1),
                              (u = []),
                              1 !== a.length ||
                                "lead-capture-response" !== a[0].type)
                            ) {
                              t.next = 10;
                              break;
                            }
                            (u = a), (c = !0), (t.next = 14);
                            break;
                          case 10:
                            if (!(a.length > 0)) {
                              t.next = 14;
                              break;
                            }
                            return (t.next = 13), this.uploadFiles(a);
                          case 13:
                            u = t.sent;
                          case 14:
                            clearTimeout(this.keyDownTimeout),
                              (this.keyDownTimeout = 0),
                              i.length > 0 &&
                                void 0 !== window.emojione &&
                                ((i = i
                                  .replace(/©/gm, "&copy;")
                                  .replace(/®/gm, "&reg;")
                                  .replace(/™/gm, "&trade;")),
                                (i = (i = window.emojione.toShort(i))
                                  .replace(/&copy;/gm, "©")
                                  .replace(/'&reg;/gm, "®")
                                  .replace(/&trade;/gm, "™"))),
                              this.sendMessageToServer({
                                message: i,
                                attachments: u,
                                callback: s,
                                isLeadCaptureForm: c,
                              });
                          case 18:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "sendMessageToServer",
            value: function (t) {
              var e = this,
                n = t.message,
                i = t.attachments,
                o = void 0 === i ? [] : i,
                a = t.callback,
                s = void 0 === a ? function () {} : a,
                c = t.isLeadCaptureForm,
                u = void 0 !== c && c;
              s = s || function () {};
              var f = this.parseChatMessage({
                attchs: o,
                ut: "v",
                t: "c",
                m: r.a.rawEncode(n),
                co: null,
                uid: this.store.getters["visitor/visitorId"],
              });
              u || this.store.commit("chat/setOutgoingMessage", f);
              var h = { message: n, attachments: o };
              0 === n.length && delete h.message,
                l.a.publish("sendChatMessage", h, function (t, n) {
                  t
                    ? ((f.sendFailed = !0), (f.isPending = !1))
                    : (u && e.store.commit("chat/setOutgoingMessage", f),
                      (f.cver = n.data.cver),
                      (f.timeStamp = new Date(n.data.co).getTime()),
                      (f.time = n.data.co),
                      (f.isPending = !1),
                      (f.rawMessage.co = n.data.co),
                      (f.sendFailed = !1),
                      d.a.triggerApiHandlers("onChatMessageVisitor", h),
                      e.store.dispatch("session/addWaitTime"),
                      e.store.dispatch("chat/outgoingChatMessage", f)),
                    s(t);
                });
            },
          },
          {
            key: "changeRating",
            value: function (t, e) {
              var n,
                i = "c";
              this.store.getters["chat/rating"] === t && (t = 0),
                this.store.commit("chat/setRating", t),
                e ||
                  (l.a.publish("setRating", t),
                  d.a.triggerApiHandlers("onChatSatisfaction", t)),
                t < 0
                  ? (n = "thumbs-down")
                  : t > 0
                  ? (n = "thumbs-up")
                  : ((n = h.a.$i18n("chat", "remove_rate")), (i = "n"));
              var r = this.parseChatMessage({
                ut: "v",
                t: i,
                m: n,
                co: new Date(),
                uid: this.store.getters["visitor/visitorId"],
                md: { rt: t },
              });
              e ||
                (this.store.commit("chat/setOutgoingMessage", r),
                this.store.dispatch("chat/updateRatingMessage", r));
            },
          },
          {
            key: "uploadFiles",
            value: function (t) {
              for (
                var e = this,
                  n = [],
                  i = [],
                  o = [],
                  l = function () {
                    var u = t[h],
                      l = {
                        uuid: c.Helper.generateUUID(),
                        handle: null,
                        fileName: r.a.rawEncode(u.file.name),
                        percentage: 0,
                        hasError: !1,
                        fileData: u,
                      };
                    return u.file.size > e.maxSizeFileUpload
                      ? (i.push(r.a.rawEncode(u.file.name)), 0)
                      : h >= e.maxNumberFileUpload
                      ? (o.push(u), 0)
                      : (e.store.commit("chat/addFileUpload", l),
                        void n.push(
                          new Promise(function (t, n) {
                            a(function (n) {
                              (l.handle = n),
                                s(
                                  n,
                                  e.store.getters["session/sessionKey"],
                                  u.file,
                                  function (n) {
                                    t(n),
                                      e.store.commit(
                                        "chat/removeFileUpload",
                                        l.uuid
                                      );
                                  }
                                );
                            }, n);
                          })
                        ));
                  },
                  h = 0;
                h < t.length;
                h++
              )
                l();
              return (
                i.length && f.a.$emit("tooBigFileList", i),
                Object(u.a)(n).then(function (t) {
                  for (var n = [], i = 0; i < t.length; i++) {
                    var r = t[i];
                    if ("fulfilled" === r.status && r.value) {
                      var o = {
                        type: "file",
                        content: {
                          file: {
                            url: r.value.url,
                            name: r.value.filename,
                            mimeType: r.value.mimeType,
                            size: r.value.size,
                            extension: r.value.extension,
                          },
                        },
                      };
                      n.push(o),
                        d.a.triggerApiHandlers("onFileUpload", r.value.url);
                    } else
                      e.store.getters["chat/uploadFiles"].forEach(function (t) {
                        t.hasError || (t.hasError = !0);
                      });
                  }
                  return n;
                })
              );
            },
          },
          {
            key: "callStatusUpdate",
            value: function (t) {
              var e = this,
                n = this.store.getters["chat/callData"](t.clid);
              n ||
                ((n = {
                  callId: t.clid,
                  status: t.stts,
                  version: t.ver,
                  isMissed: t.mssd,
                  isRejected: t.rjctd,
                  isRinging: "ringing" === t.stts,
                  isDone: "completed" === t.stts,
                  isVideo: !!t.f && t.f.vid,
                  isScreenshare: !!t.f && t.f.scrn,
                  hasError: !1,
                }),
                this.store.dispatch("chat/updateCallData", n)),
                l.a.publish(
                  "getCallStatus",
                  { callId: t.clid },
                  function (t, i) {
                    if (t || !i.data.call.f || n.version > i.data.call.ver)
                      return (
                        (n.hasError = !0),
                        void e.store.dispatch("chat/updateCallData", n)
                      );
                    var r,
                      o = i.data.call;
                    ("a" !== o.cllr.t ||
                      (r = e.store.getters["chat/agentProfile"](
                        o.cllr.urid
                      ))) &&
                      ((n = {
                        callId: o.clid,
                        status: o.stts,
                        version: o.ver,
                        isMissed: o.mssd,
                        isRejected: o.rjctd,
                        isRinging: "ringing" === o.stts,
                        isDone: "completed" === o.stts,
                        isVideo: o.f.vid,
                        isScreenshare: o.f.scrn,
                        hasError: !1,
                        caller: r || o.cllr,
                        startedAt: o.so,
                        endedAt: o.eo,
                      }).isRinging &&
                      n.caller &&
                      "a" === o.cllr.t
                        ? e.store.commit("chat/setIncomingCall", n)
                        : n.isDone &&
                          e.store.getters["chat/incomingCall"] &&
                          e.store.getters["chat/incomingCall"].callId ==
                            n.callId &&
                          e.store.commit("chat/setIncomingCall", null),
                      n.isDone
                        ? e.store.dispatch("chat/updateOngoingCall", !1)
                        : e.store.dispatch("chat/updateOngoingCall", !0),
                      e.store.dispatch("chat/updateCallData", n),
                      f.a.$emit("callDataUpdated", n));
                  }
                );
            },
          },
          {
            key: "chatTransferUpdate",
            value: function (t, e) {
              this.store.dispatch("chat/updateChatTransferData", {
                transfer: t,
                transferVersion: e,
              });
            },
          },
          {
            key: "acceptCall",
            value: function () {
              var t = this;
              this.store.getters["browserData/isWebRTCAvailable"] &&
                ((this.webrtcWin = window.open("", "")),
                l.a.publish("getWebRTCToken", {}, function (e, n) {
                  t.store.commit("chat/setIncomingCall", null),
                    e && t.webrtcWin.close(),
                    (t.webrtcWin.location.href = ""
                      .concat("https://video.tawk.to", "/v2/call?token=")
                      .concat(n.data.token));
                }));
            },
          },
          {
            key: "declineCall",
            value: function (t) {
              var e = this,
                n = { callId: t };
              l.a.publish("declineCall", n, function () {
                e.store.commit("chat/setIncomingCall", null);
              });
            },
          },
          {
            key: "initiateCall",
            value: function (t, e) {
              var n = this;
              (this.webrtcWin = window.open("", "")),
                l.a.publish(
                  "getWebRTCToken",
                  { video: t, screen: e },
                  function (t, e) {
                    t && n.webrtcWin.close(),
                      (n.webrtcWin.location.href = ""
                        .concat("https://video.tawk.to", "/v2/call?token=")
                        .concat(e.data.token));
                  }
                );
            },
          },
          {
            key: "clearUnseenNotification",
            value: function () {
              this.store.dispatch("chat/clearUnseenMessages"),
                d.a.triggerApiHandlers(
                  "onUnreadCountChanged",
                  this.store.getters["chat/unreadMessageCount"]
                );
            },
          },
          {
            key: "updateFileProgress",
            value: function (t, e, n) {
              for (
                var i, r = this.store.getters["chat/uploadFiles"], o = 0;
                o < r.length;
                o++
              )
                if (r[o].handle === t.handle) {
                  e ? r.splice(o, 1) : (i = r[o]);
                  break;
                }
              i && (n ? (i.hasError = !0) : (i.percentage = t.progress));
            },
          },
          {
            key: "sendApiEvent",
            value: function (t, e, n) {
              var i;
              "function" == typeof e && ((n = e), (e = null)),
                (n = n || function () {}),
                ((i = d.a.secureWrapper({})).name = t),
                (i.data = e),
                l.a.publish("addEvent", i, n);
            },
          },
          {
            key: "sendApiAttributes",
            value: function (t, e) {
              var n = this;
              e = e || function () {};
              var i = !1;
              if (Object.keys(t).length > 50)
                return (
                  (i = !0),
                  void e(
                    "[JSAPI/setAttributes]: 50 custom attributes are only allowed."
                  )
                );
              Object.keys(t).forEach(function (n) {
                if ("hash" !== n) {
                  if (
                    !(function (t) {
                      return /^[a-zA-Z0-9-]{1,50}$/.test(t);
                    })(n)
                  )
                    return (
                      (i = !0),
                      void e("[JSAPI/setAttributes]: Invalid key: ".concat(n))
                    );
                  var r = t[n];
                  return (function (t) {
                    return (
                      ("string" == typeof t && t.length <= 255) ||
                      "number" == typeof t ||
                      "boolean" == typeof t ||
                      null === t
                    );
                  })(r)
                    ? void 0
                    : ((i = !0),
                      void e(
                        "[JSAPI/setAttributes]: Invalid value for key "
                          .concat(n, ": ")
                          .concat(r, "}")
                      ));
                }
              }),
                i ||
                  ((t = d.a.secureWrapper(t)),
                  l.a.publish("setAttributes", t, function (i) {
                    i ||
                      ((t.name || t.email) &&
                        n.store.dispatch("visitor/updateVisitorInformation", {
                          n: t.name || void 0,
                          e: t.email || void 0,
                        })),
                      e(i);
                  }));
            },
          },
          {
            key: "addTags",
            value: function (t, e) {
              var n;
              (e = e || function () {}),
                ((n = d.a.secureWrapper({})).tags = t),
                l.a.publish("addTags", n, e);
            },
          },
          {
            key: "removeTags",
            value: function (t, e) {
              var n;
              (e = e || function () {}),
                ((n = d.a.secureWrapper({})).tags = t),
                l.a.publish("removeTags", n, e);
            },
          },
          {
            key: "parsePhoneNumber",
            value: function (t) {
              var e = "";
              return (
                -1 === t.indexOf("tel") && (e = "tel:"),
                '<a class="tawk-link" href="' +
                  (e + t) +
                  '" title="' +
                  (e + t) +
                  '">' +
                  t +
                  "</a> "
              );
            },
          },
        ]
      ))();
    },
    "0ad2": function (t, e, n) {
      "use strict";
      var i = n("b7cc");
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, a(i.key), i);
        }
      }
      function a(t) {
        var e = (function (t, e) {
          if ("object" != r(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == r(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && o(t.prototype, e),
          n && o(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.incomingMessage = null),
            (this.audioContext = null),
            (this.isReadyForInit = !1),
            (this.play = null),
            (this.soundEl = null),
            (this.soundFile = "".concat(
              "https://embed.tawk.to/_s/v4/assets",
              "/audio/chat_sound.mp3"
            ));
        },
        [
          {
            key: "install",
            value: function (t, e) {
              var n = e.store,
                i = e.TawkWindow;
              (t.prototype.$TawkAudioPlayer = this),
                (this.store = n),
                (this.TawkWindow = i);
            },
          },
          {
            key: "init",
            value: function () {
              var t,
                e = this,
                n = this.store.getters["browserData/html5audio"];
              n &&
                n.supported &&
                (this.audioContext ||
                  /Firefox/.test(navigator.userAgent) ||
                  "undefined" == typeof AudioBuffer ||
                  (void 0 === window.AudioContext &&
                    void 0 === window.webkitAudioContext) ||
                  ((window.AudioContext =
                    window.AudioContext || window.webkitAudioContext),
                  (this.audioContext = new window.AudioContext())),
                this.audioContext
                  ? (this.incomingMessage = this.audioContextPlayer())
                  : (this.incomingMessage = this.htmlAudioPlayer()),
                this.audioContext &&
                  ((t = function () {
                    e.isReadyForInit &&
                      !e.touchstartInited &&
                      ((e.incomingMessage.volume = 0),
                      e.incomingMessage.play(),
                      e.incomingMessage.source.stop(0),
                      (e.incomingMessage.volume = 1),
                      window &&
                        "function" == typeof window.removeEventListener &&
                        window.removeEventListener("touchstart", t, {
                          passive: !0,
                        }),
                      (e.touchstartInited = !0));
                  }),
                  this.store.getters["browserData/mobileBrowserName"] &&
                    "ontouchstart" in window &&
                    window.addEventListener("touchstart", t, { passive: !0 })));
            },
          },
          {
            key: "playSound",
            value: function () {
              i.a.local_API.disableSound ||
                (this.store.getters["widget/isSoundEnabled"] &&
                  this.store.getters["widget/localSoundEnabled"] &&
                  this.incomingMessage &&
                  this.incomingMessage.play());
            },
          },
          {
            key: "audioContextPlayer",
            value: function () {
              var t = this,
                e = {
                  sourcePath: t.soundFile,
                  buffer: null,
                  source: null,
                  volume: 1,
                  play: function () {
                    if (this.buffer) {
                      var e = t.audioContext.createGain();
                      (e.gain.value = this.volume),
                        (this.source = t.audioContext.createBufferSource()),
                        (this.source.buffer = this.buffer),
                        this.source.connect(e),
                        e.connect(t.audioContext.destination),
                        this.source.start(0);
                    }
                  },
                  loadBuffer: function () {
                    var e = this,
                      n = new XMLHttpRequest();
                    n.open("GET", this.sourcePath, !0),
                      (n.responseType = "arraybuffer"),
                      (n.onload = function () {
                        t.audioContext.decodeAudioData(
                          n.response,
                          function (n) {
                            n &&
                              ((e.buffer = n),
                              t.isReadyForInit || (t.isReadyForInit = !0));
                          },
                          function (t) {
                            throw new Error(t);
                          }
                        );
                      }),
                      (n.onerror = function () {
                        throw new Error(
                          "BufferLoader: XHR error for " + this.sourcePath
                        );
                      }),
                      n.send();
                  },
                };
              return e.loadBuffer(), e;
            },
          },
          {
            key: "htmlAudioPlayer",
            value: function () {
              var t = {};
              if (
                "symbian" !==
                this.store.getters["browserData/mobileBrowserName"]
              )
                return (
                  "safari" ===
                  this.store.getters["browserData/mobileBrowserName"]
                    ? ((t.sound = document.createElement("audio")),
                      (t.sound.src = this.soundFile),
                      (t.sound.style.cssText =
                        "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;"),
                      document.body.appendChild(t.sound))
                    : (t.sound = new Audio(this.soundFile)),
                  t.sound.addEventListener(
                    "timeupdate",
                    function () {
                      t.sound.currentTime >= 0.2 && t.sound.pause();
                    },
                    !1
                  ),
                  t.sound.load(),
                  (t.play = function () {
                    try {
                      (this.sound.currentTime = 0),
                        (this.sound.autoplay = !0),
                        this.sound.load(),
                        this.sound.play();
                    } catch (t) {}
                  }),
                  t
                );
              t.play = function () {};
            },
          },
        ]
      ))();
    },
    "0dc3": function (t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        namespaced: !0,
        state: {
          isIe: !1,
          html5audio: null,
          mobileBrowserName: null,
          searchEngine: null,
          vendor: null,
          version: null,
          isWebRTCAvailable: !0,
          os: null,
        },
        getters: {
          isIE: function (t) {
            return t.isIE;
          },
          html5audio: function (t) {
            return t.html5audio;
          },
          mobileBrowserName: function (t) {
            return t.mobileBrowserName;
          },
          searchEngine: function (t) {
            return t.searchEngine;
          },
          vendor: function (t) {
            return t.vendor;
          },
          version: function (t) {
            return t.version;
          },
          isWebRTCAvailable: function (t) {
            return t.isWebRTCAvailable;
          },
          os: function (t) {
            return t.os;
          },
        },
        actions: {
          updateInitialData: function (t, e) {
            (0, t.commit)("setInitialData", e);
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
        },
        mutations: {
          setInitialData: function (t, e) {
            (t.vendor = e.vendor),
              (t.version = e.version),
              (t.isIE = e.isIE),
              (t.mobileBrowserName = e.mobileBrowserName),
              (t.html5audio = e.html5audio),
              (t.searchEngine = e.searchEngine),
              (t.isWebRTCAvailable = e.isWebRTCAvailable),
              (t.os = e.os);
          },
          setMobileBrowserName: function (t, e) {
            t.mobileBrowserName = e;
          },
          unsetData: function (t) {
            for (
              var e = {
                  isIe: !1,
                  html5audio: null,
                  mobileBrowserName: null,
                  searchEngine: null,
                  vendor: null,
                  version: null,
                  isWebRTCAvailable: !0,
                  os: null,
                },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    "24ca": function (t, e, n) {
      "use strict";
      var i = n("2b0e");
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, a(i.key), i);
        }
      }
      function a(t) {
        var e = (function (t, e) {
          if ("object" != r(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == r(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && o(t.prototype, e),
          n && o(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var e = new i.a();
          (this.eventBus = e),
            (this.$emit = e.$emit.bind(e)),
            (this.$on = e.$on.bind(e)),
            (this.$off = e.$off.bind(e)),
            (this.$once = e.$once.bind(e));
        },
        [
          {
            key: "install",
            value: function (t) {
              t.prototype.$eventBus = this;
            },
          },
        ]
      ))();
    },
    "27a6": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var i = function (t) {
        var e = t.map(function (t) {
          return t
            .then(function (t) {
              return { status: "fulfilled", value: t };
            })
            .catch(function (t) {
              return { status: "rejected", reason: t };
            });
        });
        return Promise.all(e);
      };
    },
    "27c6": function (t, e, n) {
      "use strict";
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, o(i.key), i);
        }
      }
      function o(t) {
        var e = (function (t, e) {
          if ("object" != i(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == i(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && r(t.prototype, e),
          n && r(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.setupTimeout = null),
            (this.agentCountSubscription = null),
            (this.originalPageStatus = null),
            (this.utcOffset = 0),
            (this.isSetup = !1),
            (this.agentCountListener = null),
            (this.isCleanedUp = !1);
        },
        [
          {
            key: "install",
            value: function (t, e) {
              var n = e.store,
                i = e.TawkWindow;
              (t.prototype.$TawkScheduler = this),
                (this.store = n),
                (this.TawkWindow = i);
            },
          },
          {
            key: "setup",
            value: function () {
              this.clear(),
                (this.isCleanedUp = !1),
                null === this.originalPageStatus &&
                  (this.originalPageStatus =
                    this.store.getters["session/pageStatus"]),
                this.store.getters["schedule/isEnabled"]
                  ? ((this.utcOffset =
                      -1 *
                      (new Date().getTime() -
                        this.store.getters["schedule/timezone"].utc)),
                    (this.isSetup = !0),
                    this.calculate())
                  : this.store.dispatch("session/setPageStatus", {
                      status: this.originalPageStatus,
                    });
            },
          },
          {
            key: "clear",
            value: function () {
              clearTimeout(this.setupTimeout), (this.setupTimeout = null);
            },
          },
          {
            key: "cleanUp",
            value: function () {
              this.clear(),
                (this.originalPageStatus = null),
                (this.isSetup = !1),
                this.unwatchAgentCount(),
                (this.isCleanedUp = !0);
            },
          },
          {
            key: "calculate",
            value: function () {
              var t = this;
              if ((this.clear(), this.isCleanedUp)) return this.setup();
              if (this.isSetup && this.store.getters["schedule/isEnabled"]) {
                var e = this.store.getters["schedule/slots"];
                if (0 !== e.length) {
                  for (
                    var n,
                      i,
                      r,
                      o = new Date(),
                      a = -6e4 * o.getTimezoneOffset(),
                      s = this.store.getters["schedule/timezone"].tzo - a,
                      c = new Date(o.getTime() + this.utcOffset + s),
                      u = c.getDay(),
                      l = 60 * c.getHours() + c.getMinutes(),
                      d = 60 * l + c.getSeconds(),
                      f = 0;
                    f < e.length;
                    f++
                  ) {
                    var h = e[f];
                    if (h.day === u) {
                      if (l >= h.start && l < h.end) {
                        n = h;
                        break;
                      }
                      if (l < h.start) {
                        i = h;
                        break;
                      }
                    }
                  }
                  void 0 !== n
                    ? (this.goOnline(), (r = 60 * n.end - d))
                    : (this.goOffline(),
                      (r = void 0 !== i ? 60 * i.start - d : 86400 - d + 1)),
                    void 0 !== r &&
                      (this.setupTimeout = setTimeout(function () {
                        t.calculate();
                      }, 1e3 * r));
                } else this.goOffline();
              } else
                this.store.dispatch("session/setPageStatus", {
                  status: this.originalPageStatus,
                });
            },
          },
          {
            key: "goOnline",
            value: function () {
              this.unwatchAgentCount(),
                this.store.getters["widget/agentDrivenStatus"] ||
                  this.store.dispatch("session/setPageStatus", {
                    status: "online",
                  }),
                this.originalPageStatus &&
                  (this.store.dispatch("session/setPageStatus", {
                    status: this.originalPageStatus,
                  }),
                  (this.initial = !1));
            },
          },
          {
            key: "goOffline",
            value: function () {
              var t = this;
              0 === this.store.getters["chat/agentsCount"] &&
                this.store.dispatch("session/setPageStatus", {
                  status: "offline",
                }),
                (this.agentCountListener = this.store.watch(
                  function (t) {
                    return t.chat.agentsCount;
                  },
                  function (e) {
                    0 === e &&
                      t.store.dispatch("session/setPageStatus", {
                        status: "offline",
                      });
                  }
                ));
            },
          },
          {
            key: "unwatchAgentCount",
            value: function () {
              "function" == typeof this.agentCountListener &&
                (this.agentCountListener(), (this.agentCountListener = null));
            },
          },
          {
            key: "hasScheduleToday",
            value: function () {
              for (
                var t = this.store.getters["schedule/slots"],
                  e = new Date(),
                  n = -6e4 * e.getTimezoneOffset(),
                  i = this.store.getters["schedule/timezone"].tzo - n,
                  r = new Date(e.getTime() + this.utcOffset + i).getDay(),
                  o = 0;
                o < t.length;
                o++
              )
                if (t[o].day === r) return !0;
              return !1;
            },
          },
          {
            key: "hasCurrentTimePassedSchedule",
            value: function () {
              for (
                var t = this.store.getters["schedule/slots"],
                  e = new Date(),
                  n = -6e4 * e.getTimezoneOffset(),
                  i = this.store.getters["schedule/timezone"].tzo - n,
                  r = new Date(e.getTime() + this.utcOffset + i),
                  o = r.getDay(),
                  a = 60 * r.getHours() + r.getMinutes(),
                  s = 0;
                s < t.length;
                s++
              ) {
                var c = t[s];
                if (c.day === o && a >= c.start && a < c.end) return !1;
              }
              return !0;
            },
          },
        ]
      ))();
    },
    "284b": function (t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        namespaced: !0,
        state: { isOpen: !1 },
        getters: {
          isOpen: function (t) {
            return t.isOpen;
          },
        },
        actions: {
          showOverlay: function (t, e) {
            var n = t.commit;
            t.state.isOpen !== e && n("setOverlayOpen", e);
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
        },
        mutations: {
          setOverlayOpen: function (t, e) {
            t.isOpen = e;
          },
          unsetData: function (t) {
            for (
              var e = { isOpen: !1 }, n = Object.keys(e), i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    "32d9": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("65b3"),
        r = n("745f"),
        o = n("43af"),
        a = n("b7cc"),
        s = n("99e1"),
        c = n("24ca"),
        u = n("4360");
      e.default = {
        namespaced: !0,
        state: function () {
          return {
            branding: {},
            components: {},
            consentData: {},
            desktopVisibility: {},
            id: null,
            isWindowed: !1,
            generalVisibility: {},
            maxDesktop: {},
            minDesktop: {},
            minMobile: {},
            mobileVisibility: {},
            onClick: "max",
            show: null,
            states: {},
            theme: {},
            type: "inline",
            version: void 0,
            bubble: {},
            isRTL: !1,
            yOffset: 0,
            xOffsetMobile: 0,
            yOffsetMobile: 0,
            xOffset: 0,
            language: "en",
            notification: {},
            features: {},
            webrtcOptions: {},
            isEmbedded: !1,
            localSoundEnabled: !0,
            zoomRatio: 1,
            toolbarOptions: { showAgentAvatars: !1 },
            isMobileLandscape: !1,
            isFocus: !0,
            isPopout: !1,
            isIframe: !1,
            agentDrivenStatus: void 0,
          };
        },
        getters: {
          branding: function (t) {
            return t.branding;
          },
          consentData: function (t) {
            return t.consentData;
          },
          desktopVisibility: function (t) {
            return t.desktopVisibility;
          },
          generalVisibility: function (t) {
            return t.generalVisibility;
          },
          headerBgColor: function (t) {
            return t.theme.header.background;
          },
          headerTxtColor: function (t) {
            return t.theme.header.text;
          },
          id: function (t) {
            return t.id;
          },
          isRight: function (t, e, n) {
            var i,
              r = ["br", "cr", "tr"],
              o =
                null === a.a ||
                void 0 === a.a ||
                null === (i = a.a.local_API) ||
                void 0 === i ||
                null === (i = i.customStyle) ||
                void 0 === i
                  ? void 0
                  : i.visibility;
            return n.browserData.mobileBrowserName
              ? o && o.mobile && o.mobile.position
                ? -1 !== r.indexOf(o.mobile.position)
                : -1 !== r.indexOf(t.mobileVisibility.position)
              : o && o.desktop && o.desktop.position
              ? -1 !== r.indexOf(o.desktop.position)
              : -1 !== r.indexOf(t.desktopVisibility.position);
          },
          isBottom: function (t, e, n) {
            var i,
              r = ["br", "bl"],
              o =
                null === a.a ||
                void 0 === a.a ||
                null === (i = a.a.local_API) ||
                void 0 === i ||
                null === (i = i.customStyle) ||
                void 0 === i
                  ? void 0
                  : i.visibility;
            return n.browserData.mobileBrowserName
              ? o && o.mobile && o.mobile.position
                ? -1 !== r.indexOf(o.mobile.position)
                : -1 !== r.indexOf(t.mobileVisibility.position)
              : o && o.desktop && o.desktop.position
              ? -1 !== r.indexOf(o.desktop.position)
              : -1 !== r.indexOf(t.desktopVisibility.position);
          },
          isCenter: function (t, e, n) {
            var i,
              r = ["cr", "cl"],
              o =
                null === a.a ||
                void 0 === a.a ||
                null === (i = a.a.local_API) ||
                void 0 === i ||
                null === (i = i.customStyle) ||
                void 0 === i
                  ? void 0
                  : i.visibility;
            return n.browserData.mobileBrowserName
              ? o && o.mobile && o.mobile.position
                ? -1 !== r.indexOf(o.mobile.position)
                : -1 !== r.indexOf(t.mobileVisibility.position)
              : o && o.desktop && o.desktop.position
              ? -1 !== r.indexOf(o.desktop.position)
              : -1 !== r.indexOf(t.desktopVisibility.position);
          },
          isWindowed: function (t) {
            return t.isWindowed;
          },
          isRoundWidget: function (t, e, n) {
            return n.browserData.mobileBrowserName
              ? "round" === t.minMobile.type
              : "round" === t.minDesktop.type;
          },
          maxDesktop: function (t) {
            return t.maxDesktop;
          },
          minDesktop: function (t) {
            return t.minDesktop;
          },
          mobileVisibility: function (t) {
            return t.mobileVisibility;
          },
          states: function (t) {
            return t.states;
          },
          version: function (t) {
            return t.version;
          },
          yOffset: function (t) {
            return t.yOffset;
          },
          xOffset: function (t) {
            return t.xOffset;
          },
          yOffsetMobile: function (t) {
            return t.yOffsetMobile;
          },
          xOffsetMobile: function (t) {
            return t.xOffsetMobile;
          },
          isRTL: function (t) {
            return t.isRTL;
          },
          bubble: function (t) {
            return t.bubble;
          },
          showMessagePreview: function (t, e, n) {
            return n.browserData.mobileBrowserName
              ? t.notification.mobile.preview
              : t.notification.desktop.preview;
          },
          features: function (t) {
            return t.features;
          },
          showVisitorTyping: function (t) {
            return t.notification.all.visitorTyping;
          },
          webrtcOptions: function (t) {
            return t.webrtcOptions;
          },
          language: function (t) {
            return t.language;
          },
          visitorBgColor: function (t) {
            return t.theme.visitor.messageBackground;
          },
          visitorTxtColor: function (t) {
            return t.theme.visitor.messageText;
          },
          agentBgColor: function (t) {
            return t.theme.agent.messageBackground;
          },
          agentTxtColor: function (t) {
            return t.theme.agent.messageText;
          },
          showEstimatedWaitTime: function (t) {
            return (
              t.notification &&
              t.notification.all &&
              t.notification.all.estimatedWaitTime
            );
          },
          showAgentTyping: function (t) {
            return (
              t.notification &&
              t.notification.all &&
              t.notification.all.agentTyping
            );
          },
          isPrechatEnabled: function (t) {
            return (
              t.states.prechat &&
              t.states.prechat.handlers &&
              t.states.prechat.handlers.form
            );
          },
          isEmbedded: function (t) {
            return t.isEmbedded;
          },
          isSoundEnabled: function (t) {
            return (
              t.notification &&
              t.notification.all &&
              t.notification.all.sound &&
              t.localSoundEnabled
            );
          },
          localSoundEnabled: function (t) {
            return t.localSoundEnabled;
          },
          show: function (t) {
            return t.show;
          },
          onClick: function (t) {
            return t.onClick;
          },
          isVisible: function (t, e, n) {
            return null !== e.show
              ? t.show
              : !(
                  "offline" === n.session.pageStatus &&
                  !e.generalVisibility.showWhenOffline
                ) &&
                  (n.browserData.mobileBrowserName
                    ? t.mobileVisibility.show
                    : t.desktopVisibility.show);
          },
          showTitleNotification: function (t) {
            return (
              !(!t.notification || !t.notification.all) &&
              t.notification.all.tab
            );
          },
          hasLiveChat: function (t) {
            return t.components.liveChat;
          },
          minMobile: function (t) {
            return t.minMobile;
          },
          zoomRatio: function (t) {
            return t.zoomRatio;
          },
          components: function (t) {
            return t.components;
          },
          emailTranscriptEnabled: function (t) {
            return t.features.transcript;
          },
          emojiEnabled: function (t) {
            return t.features && t.features.emoji;
          },
          toolbarOptions: function (t) {
            return t.toolbarOptions;
          },
          isMobileLandscape: function (t) {
            return t.isMobileLandscape;
          },
          isFocus: function (t) {
            return t.isFocus;
          },
          isPopout: function (t) {
            return t.isPopout;
          },
          isIframe: function (t) {
            return t.isIframe;
          },
          agentDrivenStatus: function (t) {
            return t.agentDrivenStatus;
          },
        },
        actions: {
          toggleVisibility: function (t) {
            (0, t.commit)("setVisibility", !t.state.show);
          },
          updateBranding: function (t, e) {
            (0, t.commit)("setBranding", e);
          },
          updateId: function (t, e) {
            (0, t.commit)("setId", e);
          },
          toggleLocalSound: function (t, e) {
            var n = t.state;
            void 0 !== e
              ? (n.localSoundEnabled = e)
              : ((n.localSoundEnabled = !n.localSoundEnabled),
                i.a.publish("toggleSound", n.localSoundEnabled));
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
          toggleAgentAvatarToolbar: function (t, e) {
            (0, t.commit)("setAgentAvatarToolbar", e);
          },
          updateMobileLandscape: function (t, e) {
            (0, t.commit)("setMobileLandscape", e);
          },
          toggleFocus: function (t, e) {
            (0, t.commit)("setFocus", e);
          },
          shutdown: function (t) {
            var e = t.commit,
              n = t.dispatch,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {};
            n("chat/resetState", null, { root: !0 }),
              s.a.cleanUp(),
              i.a.disconnectSocket(),
              delete window.$_Tawk.downloaded,
              e("setVisibility", !1),
              r();
          },
          start: function (t, e) {
            var n = t.commit,
              a = t.rootGetters,
              l = t.dispatch,
              d = e.params,
              f = void 0 === d ? {} : d,
              h = e.callback,
              p = void 0 === h ? function () {} : h;
            l("socket/updateIsConnecting", !0, { root: !0 });
            var m = a["property/id"],
              g = a["widget/id"],
              v = new r.a({
                propertyId: m,
                widgetId: g,
                TawkWindow: u.a._vm.$TawkWindow,
                callback: function () {
                  f.showWidget && n("setVisibility", !0), p();
                },
              });
            new Promise(function (t, e) {
              u.a._vm.$TawkWindow.register.init(t, e);
            }).then(function (t) {
              o.a.version = t.data.settingsVersion;
              var e = window.sessionStorage.getItem("tawk_sv");
              e && e === t.data.settingsVersion
                ? (v.extractRegistrationData(t),
                  c.a.$emit("updateWidgetSettings"),
                  i.a.connect(),
                  s.a.initActivityReset(),
                  u.a.dispatch("router/clearHistory"))
                : (window.sessionStorage.setItem(
                    "tawk_sv",
                    t.data.settingsVersion
                  ),
                  o.a.getSettings(
                    function () {
                      v.extractRegistrationData(t),
                        c.a.$emit("updateWidgetSettings"),
                        i.a.connect(),
                        s.a.initActivityReset(),
                        u.a.dispatch("router/clearHistory");
                    },
                    function (t) {
                      console.error(t);
                    }
                  ));
            });
          },
          switchWidget: function (t, e) {
            var n = t.dispatch,
              i = t.commit,
              o = e.propertyId,
              a = e.widgetId,
              s = e.callback;
            return null === o
              ? s("INVALID_PROPERTY_ID")
              : null === a
              ? s("INVALID_WIDGET_ID")
              : (n("shutdown"),
                u.a.dispatch("reset"),
                void new r.a({
                  propertyId: o,
                  widgetId: a,
                  TawkWindow: u.a._vm.$TawkWindow,
                  callback: function () {
                    i("setVisibility", !0),
                      c.a.$emit("switchWidget"),
                      u.a._vm.$TawkWindow.updateBootConfig({
                        propertyId: o,
                        widgetId: a,
                      }),
                      s();
                  },
                }).init());
          },
        },
        mutations: {
          setBranding: function (t, e) {
            t.branding = e;
          },
          setId: function (t, e) {
            t.id = e;
          },
          setData: function (t, e) {
            if (
              ((t.version = e.version),
              (t.onClick = e.behavior.click),
              (t.components = e.components),
              (t.theme = e.theme),
              (t.states = e.states),
              (t.bubble = e.bubble),
              (t.agentDrivenStatus = e.agentDrivenStatus),
              (t.maxDesktop = {
                width: parseInt(e.maximized.desktop.width, 10) || 350,
                height: parseInt(e.maximized.desktop.height, 10) || 520,
              }),
              (t.minDesktop = e.minimized.desktop),
              "rectangle" === e.minimized.desktop.type
                ? ((t.minDesktop.width =
                    parseInt(e.minimized.desktop.width, 10) || 320),
                  (t.minDesktop.height =
                    parseInt(e.minimized.desktop.height, 10) || 40),
                  (t.yOffset = 0),
                  (t.xOffset = 10))
                : ((t.minDesktop.width = 60),
                  (t.minDesktop.height = 60),
                  (t.yOffset = 20),
                  (t.xOffset = 20)),
              (t.minMobile = e.minimized.mobile),
              "rectangle" === e.minimized.mobile.type
                ? ((t.minMobile.width = 110),
                  (t.minMobile.height = 48),
                  (t.yOffsetMobile = 15),
                  (t.xOffsetMobile = 15))
                : ((t.minMobile.width = 60),
                  (t.minMobile.height = 60),
                  (t.yOffsetMobile = 20),
                  (t.xOffsetMobile = 20)),
              (t.generalVisibility = e.visibility.all),
              (t.desktopVisibility = e.visibility.desktop),
              (t.mobileVisibility = e.visibility.mobile),
              (t.consentData = e.consent),
              (t.language = e.language),
              (t.isRTL = -1 !== ["ar", "he", "fa"].indexOf(e.language)),
              (t.notification = e.notification),
              (t.features = e.features),
              t.bubble &&
                "image" === t.bubble.type &&
                t.bubble.config &&
                "gallery" === t.bubble.config.image.type)
            ) {
              var n = e.visibility.desktop.position,
                i = e.minimized.desktop.type;
              (("cr" !== n && "rectangle" !== i) ||
                ("cl" !== n && "rectangle" !== i)) &&
                (t.bubble.config.offsetX -= t.xOffset),
                "cr" !== t.desktopVisibility.position &&
                  "cl" !== t.desktopVisibility.position &&
                  (t.bubble.config.offsetY -= t.yOffset);
            }
            e.scheduler && e.scheduler.config
              ? this.dispatch("schedule/addSlots", e.scheduler)
              : this.dispatch("schedule/addSlots");
          },
          setVisibility: function (t, e) {
            (t.show = e), t.show || a.a.triggerApiHandlers("onChatHidden");
          },
          setWebrtcOptions: function (t, e) {
            t.webrtcOptions = e;
          },
          setIsWindowed: function (t, e) {
            t.isWindowed = e;
          },
          setIsEmbedded: function (t, e) {
            t.isEmbedded = e;
          },
          setZoomRatio: function (t, e) {
            t.zoomRatio = e;
          },
          unsetData: function (t) {
            t.localSoundEnabled = !0;
          },
          setAgentAvatarToolbar: function (t, e) {
            t.toolbarOptions.showAgentAvatars = e;
          },
          setMobileLandscape: function (t, e) {
            t.isMobileLandscape = e;
          },
          setFocus: function (t, e) {
            t.isFocus = e;
          },
          setIsPopout: function (t, e) {
            t.isPopout = e;
          },
          setIsIframe: function (t, e) {
            t.isIframe = e;
          },
        },
      };
    },
    "3b35": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("7f46"),
        r = n("b7cc"),
        o = n("27c6"),
        a = n("681d"),
        s = n("91ce"),
        c = n("65b3"),
        u = n("4360");
      function l() {
        l = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function d(t, e, n, i) {
          var o = e && e.prototype instanceof w ? e : w,
            a = Object.create(o.prototype),
            s = new A(i || []);
          return r(a, "_invoke", { value: O(t, n, s) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = d;
        var p = "suspendedStart",
          m = "executing",
          g = "completed",
          v = {};
        function w() {}
        function y() {}
        function b() {}
        var k = {};
        u(k, a, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          S = T && T(T(_([])));
        S && S !== n && i.call(S, a) && (k = S);
        var I = (b.prototype = w.prototype = Object.create(k));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(r, o, a, s) {
            var c = f(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && "object" == h(l) && i.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (t, i) {
              function r() {
                return new e(function (e, r) {
                  n(t, i, e, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function O(e, n, i) {
          var r = p;
          return function (o, a) {
            if (r === m) throw Error("Generator is already running");
            if (r === g) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = o, i.arg = a; ; ) {
              var s = i.delegate;
              if (s) {
                var c = x(s, i);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (r === p) throw ((r = g), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              r = m;
              var u = f(e, n, i);
              if ("normal" === u.type) {
                if (((r = i.done ? g : "suspendedYield"), u.arg === v))
                  continue;
                return { value: u.arg, done: i.done };
              }
              "throw" === u.type &&
                ((r = g), (i.method = "throw"), (i.arg = u.arg));
            }
          };
        }
        function x(e, n) {
          var i = n.method,
            r = e.iterator[i];
          if (r === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method"
                  )))),
              v
            );
          var o = f(r, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function _(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function n() {
                  for (; ++r < e.length; )
                    if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(h(e) + " is not iterable");
        }
        return (
          (y.prototype = b),
          r(I, "constructor", { value: b, configurable: !0 }),
          r(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = u(b, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(I)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, i, r, o) {
            void 0 === o && (o = Promise);
            var a = new E(d(t, n, i, r), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(I),
          u(I, c, "Generator"),
          u(I, a, function () {
            return this;
          }),
          u(I, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return (t.value = i), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = _),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(i, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = i),
                  r && ((n.method = "next"), (n.arg = t)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    u = i.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), L(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    L(n);
                  }
                  return r;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: _(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function d(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r);
      }
      function f(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = t.apply(e, n);
            function a(t) {
              d(o, i, r, a, s, "next", t);
            }
            function s(t) {
              d(o, i, r, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function h(t) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      e.default = {
        namespaced: !0,
        state: {
          chatBubbleClosed: !1,
          chatWindowState: "min",
          departments: [],
          isWindowFocused: !1,
          needConsent: !1,
          pageStatus: "",
          pageStatusVersion: 0,
          prechatFormSubmitted: !1,
          previousSessionKey: null,
          restarted: !1,
          sessionKey: "",
          visitorSocketServer: "",
          waitTime: 6e4,
          lastMessageTimestamp: 0,
          token: null,
          tokenExpiry: 0,
          isInactive: null,
          originalPageTitle: null,
          pageReferrer: null,
          waitTimeTimeout: null,
          waitTimeFirstTime: !1,
          waitTimeInitialized: !1,
          isReconnecting: !1,
          isNotValidEmail: null,
        },
        getters: {
          chatBubbleClosed: function (t) {
            return t.chatBubbleClosed;
          },
          chatWindowState: function (t) {
            return t.chatWindowState;
          },
          isWindowFocused: function (t) {
            return t.isWindowFocused;
          },
          previousSessionKey: function (t) {
            return t.previousSessionKey;
          },
          pageStatus: function (t) {
            return t.pageStatus;
          },
          pageStatusVersion: function (t) {
            return t.pageStatusVersion;
          },
          sessionKey: function (t) {
            return t.sessionKey;
          },
          visitorSocketServer: function (t) {
            return t.visitorSocketServer;
          },
          prechatFormSubmitted: function (t) {
            return t.prechatFormSubmitted;
          },
          lastMessageTimestamp: function (t) {
            return t.lastMessageTimestamp;
          },
          token: function (t) {
            return t.token;
          },
          departments: function (t) {
            return t.departments;
          },
          waitTime: function (t) {
            return t.waitTime;
          },
          needConsent: function (t) {
            return t.needConsent;
          },
          isInactive: function (t) {
            return t.isInactive;
          },
          originalPageTitle: function (t) {
            return t.originalPageTitle;
          },
          isReconnecting: function (t) {
            return t.isReconnecting;
          },
          isNotValidEmail: function (t) {
            return t.isNotValidEmail;
          },
        },
        actions: {
          closeChatBubble: function (t, e) {
            (0, t.commit)("setChatBubbleClosed", !0),
              e || c.a.publish("notifyChatBubbleClosed");
          },
          sendNavigationEvent: function (t) {
            var e = t.state,
              n = t.rootGetters;
            a.a.sessionStore().getItem("previousNav") !==
              window.location.href &&
              setTimeout(function () {
                var t = { u: window.location.href, t: document.title };
                null !== n["session/originalPageTitle"] &&
                  (t.t = n["session/originalPageTitle"]),
                  document.referrer &&
                    e.pageReferrer !== document.referrer &&
                    ((e.pageReferrer = document.referrer),
                    (t.r = document.referrer)),
                  c.a.publish("nav", t),
                  a.a.sessionStore().setItem("previousNav", t.u);
              }, 500);
          },
          setPageStatus: function (t, e) {
            var n = t.state,
              r = t.commit,
              a = t.dispatch,
              s = t.rootGetters,
              c = e.data,
              u = e.status;
            if (
              !s["schedule/isEnabled"] &&
              void 0 !== s["widget/agentDrivenStatus"] &&
              !1 === s["widget/agentDrivenStatus"]
            )
              return (
                a("triggerPageStatusAPI", "online"),
                r("updatePageStatus", "online"),
                void (
                  c &&
                  Object.keys(c).length &&
                  c.dptst &&
                  Array.isArray(c.dptst) &&
                  r("setDepartment", c.dptst)
                )
              );
            if (c && Object.keys(c).length) {
              var l;
              if (
                !(l = c.ast) ||
                !i.a.isString(l) ||
                (c.dptst && !Array.isArray(c.dptst))
              )
                return;
              (c.asver > n.pageStatusVersion || 0 === c.asver) &&
                ((o.a.originalPageStatus = c.ast),
                r("updatePageStatusVersion", c.asver),
                r("setDepartment", c.dptst),
                s["schedule/isEnabled"] ||
                  (a("triggerPageStatusAPI", c.ast),
                  r("updatePageStatus", c.ast)),
                o.a.calculate());
            } else
              u && (a("triggerPageStatusAPI", u), r("updatePageStatus", u));
          },
          toggleWidget: function (t) {
            var e = t.dispatch,
              n = t.state;
            t.rootGetters["widget/isWindowed"]
              ? window.close()
              : "min" === n.chatWindowState
              ? (e("updateChatWindowState", "max"),
                e("chat/setSeenAllUnseenMessages", null, { root: !0 }))
              : e("updateChatWindowState", "min");
          },
          updateChatWindowState: function (t, e) {
            var n = t.commit,
              i = t.state,
              o = t.rootGetters;
            i.chatWindowState !== e &&
              (n("setChatWindowState", e),
              ("max" === e && "pop" === o["widget/onClick"]) ||
                ("max" === e
                  ? r.a.triggerApiHandlers("onChatMaximized")
                  : "min" === e && r.a.triggerApiHandlers("onChatMinimized"),
                c.a.publish("notifyWindowState", e)));
          },
          updateConnectionData: function (t, e) {
            var n = t.state,
              i = t.commit,
              r = t.dispatch;
            void 0 !== h(e.vss) && i("setVisitorSocketServer", e.vss),
              void 0 !== h(e.sk) &&
                (n.sessionKey &&
                  n.sessionKey !== e.sk &&
                  (a.a.sessionStore().setItem("previousNav", null),
                  r("router/routerPush", "/", { root: !0 })),
                i("setSessionKey", e.sk));
          },
          updateConsentFlag: function (t, e) {
            (0, t.commit)("setConsentFlag", e);
          },
          updatePrechatSubmitted: function (t, e) {
            (0, t.commit)("setPrechatSubmitted", e);
          },
          updatePreviousSessionKey: function (t, e) {
            (0, t.commit)("setPreviousSessionKey", e);
          },
          updateIsWindowFocused: function (t, e) {
            (0, t.commit)("setIsWindowFocused", e);
          },
          updateToken: function (t, e) {
            var n = t.state,
              i = new Date();
            i.setSeconds(e.expiry),
              e.token
                ? ((n.token = e.token), s.a.storeToken(e.token))
                : (n.token = s.a.getStoredToken()),
              (n.tokenExpiry = i.getTime());
          },
          retrieveNewToken: function (t) {
            return f(
              l().mark(function e() {
                var n;
                return l().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.dispatch),
                          e.abrupt(
                            "return",
                            new Promise(function (t, e) {
                              u.a._vm.$TawkWindow.register.init(function (e) {
                                n("updateToken", {
                                  token: e.data.tkn,
                                  expiry: e.data.tknExp,
                                }),
                                  t();
                              }, e);
                            })
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          updateVisitorChatSeen: function (t, e) {
            (0, t.commit)("setLastMessageTimestamp", e),
              c.a.publish("visitorChatSeen", { timestamp: e }, function () {});
          },
          resetState: function (t) {
            var e = t.commit,
              n = t.state;
            e("unsetData"),
              clearTimeout(n.waitTimeTimeout),
              e("setWaitTimeFirstTime", !1),
              e("setWaitTimeInitialized", !1);
          },
          updateWaitTime: function (t, e) {
            (0, t.commit)("setWaitTime", e);
          },
          addWaitTime: function (t) {
            var e = t.commit,
              n = t.state,
              i = t.dispatch;
            n.waitTimeInitialized ||
              (e("setWaitTimeInitialized", !0), i("waitTimeUpdater"));
          },
          waitTimeUpdater: function (t) {
            var e = t.commit,
              n = t.state,
              i = t.dispatch;
            clearTimeout(n.waitTimeTimeout),
              n.waitTime <= 6e4 ||
                (n.waitTimeFirstTime
                  ? (e("setWaitTime", n.waitTime - 6e4),
                    (n.waitTimeTimeout = setTimeout(function () {
                      i("waitTimeUpdater");
                    }, 6e4)))
                  : (e("setWaitTimeFirstTime", !0),
                    (n.waitTimeTimeout = setTimeout(function () {
                      i("waitTimeUpdater");
                    }, 6e4))));
          },
          checkTokenValidity: function (t) {
            return f(
              l().mark(function e() {
                var n, i;
                return l().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = t.dispatch),
                          (i = t.state),
                          !(new Date().getTime() >= i.tokenExpiry))
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 5), n("retrieveNewToken");
                      case 5:
                        return e.abrupt("return");
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          reconnectSession: function (t, e) {
            t.state.isReconnecting = !!e;
          },
          triggerPageStatusAPI: function (t, e) {
            e !== t.state.pageStatus &&
              r.a.triggerApiHandlers("onStatusChange", e);
          },
        },
        mutations: {
          setChatBubbleClosed: function (t, e) {
            t.chatBubbleClosed = e;
          },
          setVisitorSocketServer: function (t, e) {
            t.visitorSocketServer = e;
          },
          setSessionKey: function (t, e) {
            t.sessionKey = e;
          },
          setConsentFlag: function (t, e) {
            t.needConsent = e;
          },
          setPreviousSessionKey: function (t, e) {
            t.previousSessionKey = e;
          },
          setChatWindowState: function (t, e) {
            t.chatWindowState = e;
          },
          setIsWindowFocused: function (t, e) {
            t.isWindowFocused = e;
          },
          setPrechatSubmitted: function (t, e) {
            t.prechatFormSubmitted = e;
          },
          setLastMessageTimestamp: function (t, e) {
            t.lastMessageTimestamp = e;
          },
          setWaitTime: function (t, e) {
            t.waitTime = e;
          },
          setIsInactive: function (t, e) {
            (t.isInactive = e), a.a.sessionStore().setItem("previousNav", null);
          },
          setOriginalPageTitle: function (t, e) {
            t.originalPageTitle = e;
          },
          setWaitTimeFirstTime: function (t, e) {
            t.waitTimeFirstTime = e;
          },
          setWaitTimeInitialized: function (t, e) {
            t.waitTimeInitialized = e;
          },
          setDepartment: function (t, e) {
            t.departments = e;
          },
          unsetData: function (t) {
            for (
              var e = {
                  chatBubbleClosed: !1,
                  chatWindowState: "min",
                  departments: [],
                  isWindowFocused: !1,
                  needConsent: !1,
                  pageStatus: "",
                  pageStatusVersion: 0,
                  prechatFormSubmitted: !1,
                  previousSessionKey: null,
                  restarted: !1,
                  sessionKey: "",
                  visitorSocketServer: "",
                  waitTime: 6e4,
                  lastMessageTimestamp: 0,
                  token: null,
                  tokenExpiry: 0,
                  isInactive: null,
                  originalPageTitle: null,
                  pageReferrer: null,
                  waitTimeTimeout: null,
                  waitTimeFirstTime: !1,
                  waitTimeInitialized: !1,
                  isReconnecting: !1,
                  isNotValidEmail: null,
                },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              "pageStatus" !== r && (t[r] = e[r]);
            }
          },
          setIsNotValidEmail: function (t, e) {
            t.isNotValidEmail = e;
          },
          updatePageStatus: function (t, e) {
            t.pageStatus = e;
          },
          updatePageStatusVersion: function (t, e) {
            t.pageStatusVersion = e;
          },
        },
      };
    },
    "3dfd": function (t, e, n) {
      "use strict";
      var i = n("2b0e"),
        r = n("2f62"),
        o = n("f0b0"),
        a = n("87dd"),
        s = n("7f46");
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var i,
                r,
                o,
                a,
                s = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (i = o.call(n)).done) &&
                    (s.push(i.value), s.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return l(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? l(t, e)
                  : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function (e) {
                h(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function h(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != c(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, e || "default");
                if ("object" != c(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == c(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var p = function () {
          return Promise.all([
            n.e("chunk-2d0d2b7c"),
            n.e("chunk-2d224aff"),
          ]).then(n.bind(null, "e0ca"));
        },
        m = function () {
          return Promise.all([
            n.e("chunk-4fe9d5dd"),
            n.e("chunk-2d0d2b7c"),
            n.e("chunk-2d0b9454"),
            n.e("chunk-2d0b383d"),
            n.e("chunk-49c2962f"),
          ]).then(n.bind(null, "d6a3"));
        },
        g = function () {
          return Promise.all([
            n.e("chunk-2d0d2b7c"),
            n.e("chunk-2d0aef27"),
          ]).then(n.bind(null, "0bdc"));
        },
        v = function () {
          return Promise.all([
            n.e("chunk-2d0d2b7c"),
            n.e("chunk-2d0b383d"),
            n.e("chunk-2d0da3af"),
          ]).then(n.bind(null, "6b5b"));
        };
      i.a.directive("tawk-scroll", o.TawkScroll);
      var w = {
          mixins: [a.a],
          data: function () {
            return {
              elementId: o.Helper.generateUUID(),
              width: "auto",
              minWidth: "0px",
              height: "auto",
              minHeight: "0px",
              initialDocumentClick: null,
              isManualHash: !1,
              titleFlashTimeout: null,
              isVisible: !1,
            };
          },
          computed: f(
            f(
              {},
              Object(r.c)({
                isRight: "widget/isRight",
                isBottom: "widget/isBottom",
                isCenter: "widget/isCenter",
                isRoundWidget: "widget/isRoundWidget",
                pageStatus: "session/pageStatus",
                bubble: "widget/bubble",
                chatBubbleClosed: "session/chatBubbleClosed",
                showMessagePreview: "widget/showMessagePreview",
                isWindowed: "widget/isWindowed",
                isEmbedded: "widget/isEmbedded",
                maxDimension: "widget/maxDesktop",
                widgetIsVisible: "widget/isVisible",
                onClick: "widget/onClick",
                chatWindowState: "session/chatWindowState",
                mobileBrowserName: "browserData/mobileBrowserName",
                unreadMessageCount: "chat/unreadMessageCount",
                showTitleNotification: "widget/showTitleNotification",
                originalPageTitle: "session/originalPageTitle",
                hasLiveChat: "widget/hasLiveChat",
                hasChatStarted: "chat/hasChatStarted",
                agentsCount: "chat/agentsCount",
                generalVisibility: "widget/generalVisibility",
                widgetShow: "widget/show",
                os: "browserData/os",
                isReady: "socket/isReady",
              })
            ),
            {},
            {
              styleObject: function () {
                var t,
                  e,
                  n,
                  i = {
                    "transition-property:": "none !important;",
                    "margin:": "0px !important;",
                    "padding:": "0px !important;",
                    "z-index:": "2000000000 !important;",
                    "width:": "".concat(this.width, " !important;"),
                    "height:": "".concat(this.height, "  !important;"),
                    "max-height:": "".concat(
                      "auto" === this.height ? "none" : this.height,
                      "  !important;"
                    ),
                    "max-width:": "".concat(
                      "auto" === this.width ? "none" : this.width,
                      "  !important;"
                    ),
                    "min-width:": "".concat(this.minWidth, "  !important;"),
                    "min-height:": "".concat(this.minHeight, "  !important;"),
                  };
                return (
                  this.isEmbedded
                    ? (i["position:"] = "relative !important;")
                    : this.isWindowed
                    ? (i["position:"] = "fixed !important;")
                    : ((i["position:"] = "fixed !important;"),
                      this.isBottom || this.isCenter
                        ? ((e = "".concat("0px", " !important;")),
                          (n = "auto !important;"))
                        : ((e = "auto !important;"),
                          (n = "".concat("0px", " !important;"))),
                      this.isVisible
                        ? (i["display:"] = "block !important;")
                        : (i["display:"] = "none !important;"),
                      (i["left:"] = this.isRight
                        ? "auto !important;"
                        : "".concat("0px", " !important;")),
                      (i["right:"] = this.isRight
                        ? "".concat("0px", " !important;")
                        : "auto !important;"),
                      (i["bottom:"] = e),
                      (i["top:"] = n),
                      (i["transform:"] = "none !important;")),
                  this.$TawkJSAPI.local_API &&
                    this.$TawkJSAPI.local_API.customStyle &&
                    Object.keys(this.$TawkJSAPI.local_API.customStyle).length &&
                    this.$TawkJSAPI.local_API.customStyle.zIndex &&
                    (i["z-index:"] = "".concat(
                      s.a.cleanupCssValue(
                        this.$TawkJSAPI.local_API.customStyle.zIndex
                      ),
                      " !important;"
                    )),
                  (t = f(f({}, this.genericStyles), i)),
                  Object.entries(t)
                    .map(function (t) {
                      var e = u(t, 2);
                      return e[0] + e[1];
                    })
                    .join("\n")
                );
              },
            }
          ),
          watch: {
            chatWindowState: function (t) {
              "pop" === this.onClick && "max" === t
                ? this.$TawkWindow.popoutWidget()
                : this.mobileBrowserName &&
                  !this.$TawkJSAPI.local_API.disableMobileBackHistory &&
                  ("max" !== t ||
                  (window.location.hash &&
                    "#max-widget" !== window.location.hash)
                    ? "min" === t &&
                      "#max-widget" === window.location.hash &&
                      ((this.isManualHash = !0), window.history.back())
                    : ((this.isManualHash = !0),
                      window.history.pushState
                        ? window.history.pushState(
                            { page: 1 },
                            null,
                            window.location.href + "#max-widget"
                          )
                        : (window.location.hash = "max-widget"))),
                this.checkIfVisible();
            },
            unreadMessageCount: function (t) {
              this.showTitleNotification &&
                (this.hasLiveChat ||
                  (this.hasChatStarted && 0 !== this.agentsCount)) &&
                (t > 0 ? this.updatePageTitle() : this.updatePageTitle(!0));
            },
            pageStatus: function (t) {
              "offline" === t
                ? this.updatePageTitle(!0)
                : this.unreadMessageCount > 0 && this.updatePageTitle(),
                this.checkIfVisible();
            },
            widgetShow: function () {
              this.checkIfVisible();
            },
            isReady: function (t) {
              t && this.$TawkJSAPI.triggerApiHandlers("onLoad");
            },
          },
          methods: f(
            f(
              {},
              Object(r.b)({
                updateMobileLandscape: "widget/updateMobileLandscape",
              })
            ),
            {},
            {
              updatePageTitle: function (t) {
                var e = this;
                clearInterval(this.titleFlashTimeout),
                  t || "offline" === this.pageStatus
                    ? null !== this.originalPageTitle &&
                      ((document.title = this.originalPageTitle),
                      this.$store.commit("session/setOriginalPageTitle", null))
                    : (null === this.originalPageTitle &&
                        this.$store.commit(
                          "session/setOriginalPageTitle",
                          document.title
                        ),
                      (this.titleFlashTimeout = setInterval(function () {
                        document.title =
                          e.originalPageTitle === document.title
                            ? e.$i18n("chat", "new_message", {
                                count: e.unreadMessageCount,
                              })
                            : e.originalPageTitle;
                      }, 1e3)));
              },
              resizeHandler: function () {
                var t,
                  e = this;
                clearTimeout(t),
                  (t = setTimeout(function () {
                    e.mobileBrowserName &&
                      ((e.$TawkWindow.isMobileOptimizedWebsite &&
                        "opera" !== e.mobileBrowserName &&
                        "android2.3" !== e.mobileBrowserName) ||
                        e.calculateZoom());
                  }, 100));
              },
              isLandscape: function () {
                return "safari" === this.mobileBrowserName ||
                  "android" === this.mobileBrowserName
                  ? 0 !== window.orientation
                  : screen.height < screen.width ||
                      window.innerHeight < window.innerWidth;
              },
              calculateZoom: function () {
                var t, e;
                "safari" === this.mobileBrowserName ||
                "android" === this.mobileBrowserName
                  ? (t =
                      (!this.isLandscape() ||
                      ("iPhone" !== navigator.platform &&
                        "iPad" !== navigator.platform)
                        ? screen.width
                        : screen.height) / window.innerWidth)
                  : (t = screen.width / window.innerWidth),
                  (e = (1 / t.toFixed(2)).toFixed(2)),
                  ("chrome" !== this.mobileBrowserName &&
                    "ie" !== this.mobileBrowserName) ||
                    (e = e < 0.2 ? 0.2 : e),
                  this.$store.commit("widget/setZoomRatio", e);
              },
              injectNodeStyle: function () {
                var t = document.createElement("style");
                t.setAttribute("type", "text/css"),
                  (t.innerHTML = "#"
                    .concat(this.elementId, " {")
                    .concat(this.styleObject, "}")),
                  (t.innerHTML += "#".concat(
                    this.elementId,
                    ".widget-hidden {display: none !important;}"
                  )),
                  (t.innerHTML += "#".concat(
                    this.elementId,
                    ".widget-visible {display: block !important;}"
                  )),
                  (t.innerHTML += "\n@media print{\n #".concat(
                    this.elementId,
                    ".widget-visible { \ndisplay: none !important;\n }\n}"
                  )),
                  document.head.appendChild(t);
              },
              checkIfVisible: function () {
                if (this.isWindowed)
                  return "offline" !== this.pageStatus ||
                    this.generalVisibility.showWhenOffline
                    ? void (this.isVisible = !0)
                    : (window.close(), void (this.isVisible = !1));
                "offline" !== this.pageStatus ||
                this.generalVisibility.showWhenOffline
                  ? this.widgetIsVisible || "max" !== this.chatWindowState
                    ? null === this.widgetShow
                      ? (this.isVisible = this.widgetIsVisible)
                      : (this.isVisible = this.widgetShow)
                    : (this.isVisible = !0)
                  : (this.isVisible = !1);
              },
              handleMobileLandscape: function () {
                var t = window.matchMedia("(orientation: landscape)").matches;
                this.mobileBrowserName &&
                  (t
                    ? this.updateMobileLandscape(!0)
                    : this.updateMobileLandscape(!1));
              },
            }
          ),
          mounted: function () {
            var t = this;
            if (
              (this.isReady && this.$TawkJSAPI.triggerApiHandlers("onLoad"),
              (this.isEmbedded || this.isWindowed) &&
                ((this.width = "100%"),
                (this.height = "100%"),
                (this.minWidth = "100%"),
                (this.minHeight = "100%")),
              this.isEmbedded)
            ) {
              var e = document.getElementById(
                this.$TawkJSAPI.local_API.embedded
              );
              e &&
                (e.appendChild(this.$el),
                (e.clientWidth < 280 || e.clientHeight < 330) &&
                  ((this.width = "".concat(this.maxDimension.width, "px")),
                  (this.height = "".concat(this.maxDimension.height, "px")),
                  (this.minWidth = "".concat(this.maxDimension.width, "px")),
                  (this.minHeight = "".concat(
                    this.maxDimension.height,
                    "px"
                  ))));
            } else document.body.appendChild(this.$el);
            this.isWindowed ||
              this.isEmbedded ||
              ((this.$TawkWindow.minWidget = new i.a({
                render: function (t) {
                  return t(p);
                },
                store: this.$store,
              }).$mount("#min-widget")),
              !this.bubble ||
                this.chatBubbleClosed ||
                this.mobileBrowserName ||
                (this.$TawkWindow.bubbleWidget = new i.a({
                  render: function (t) {
                    return t(g);
                  },
                  store: this.$store,
                }).$mount("#chat-bubble")),
              this.showMessagePreview &&
                (this.$TawkWindow.messagePreview = new i.a({
                  render: function (t) {
                    return t(v);
                  },
                  store: this.$store,
                }).$mount("#message-preview"))),
              ("max" === this.onClick ||
                "slide" === this.onClick ||
                this.isWindowed ||
                this.isEmbedded) &&
                (this.$TawkWindow.maxWidget = new i.a({
                  render: function (t) {
                    return t(m);
                  },
                  store: this.$store,
                }).$mount("#max-widget")),
              (this.initialDocumentClick = function () {
                t.$TawkAudioPlayer.init(),
                  window.removeEventListener("click", t.initialDocumentClick);
              }),
              window.addEventListener("click", this.initialDocumentClick, !1),
              this.$eventBus.$on("removeWidget", function () {
                t.$TawkWindow.app.$destroy(),
                  t.$TawkWindow.app.$el.parentNode &&
                    t.$TawkWindow.app.$el.parentNode.removeChild(
                      t.$TawkWindow.app.$el
                    );
              });
            var n = window.history.pushState,
              r = window.history.replaceState;
            "#max-widget" === window.location.hash &&
              (window.history
                ? window.history.replaceState({}, document.title, ".")
                : (window.location.hash = "")),
              (window.history.pushState = function (e, i, r) {
                for (
                  var o = arguments.length,
                    a = new Array(o > 3 ? o - 3 : 0),
                    s = 3;
                  s < o;
                  s++
                )
                  a[s - 3] = arguments[s];
                n.apply(window.history, [e, i, r].concat(a));
                var c =
                  r && "string" == typeof r ? r.indexOf("#max-widget") : -1;
                -1 === c
                  ? t.$store.dispatch(
                      "session/sendNavigationEvent",
                      {},
                      { root: !0 }
                    )
                  : (t.isManualHash = !1);
              }),
              (window.history.replaceState = function (e, n, i) {
                for (
                  var o =
                      i && "string" == typeof i ? i.indexOf("#max-widget") : -1,
                    a = arguments.length,
                    s = new Array(a > 3 ? a - 3 : 0),
                    c = 3;
                  c < a;
                  c++
                )
                  s[c - 3] = arguments[c];
                r.apply(window.history, [e, n, i].concat(s)),
                  -1 === o
                    ? t.$store.dispatch(
                        "session/sendNavigationEvent",
                        {},
                        { root: !0 }
                      )
                    : (t.isManualHash = !1);
              }),
              window.addEventListener("popstate", function () {
                if ("max" === t.chatWindowState && t.mobileBrowserName)
                  return (
                    (t.isManualHash = !0),
                    t.$store.dispatch("session/updateChatWindowState", "min")
                  );
                t.isManualHash ||
                  t.$store.dispatch(
                    "session/sendNavigationEvent",
                    {},
                    { root: !0 }
                  );
              }),
              window.addEventListener("hashchange", function () {
                t.isManualHash ||
                  (window.location &&
                    window.location.hash &&
                    ("#" === window.location.hash ||
                      "#max-widget" === window.location.hash)) ||
                  t.$store.dispatch(
                    "session/sendNavigationEvent",
                    {},
                    { root: !0 }
                  );
              }),
              window.addEventListener("resize", function () {
                t.resizeHandler();
              }),
              this.resizeHandler(),
              this.injectNodeStyle(),
              this.handleMobileLandscape(),
              window.addEventListener("resize", this.handleMobileLandscape),
              window.addEventListener("beforeprint", function () {
                null !== t.originalPageTitle &&
                  (document.title = t.originalPageTitle);
              }),
              window.addEventListener("afterprint", function () {
                t.unreadMessageCount > 0
                  ? t.updatePageTitle()
                  : t.updatePageTitle(!0);
              });
          },
          created: function () {
            var t = this;
            this.$nextTick(function () {
              t.checkIfVisible();
            });
          },
        },
        y = n("2877"),
        b = Object(y.a)(
          w,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                class: [t.isVisible ? "widget-visible" : "widget-hidden"],
                attrs: { id: t.elementId },
              },
              [
                e("div", { attrs: { id: "min-widget" } }),
                e("div", { attrs: { id: "max-widget" } }),
                e("div", { attrs: { id: "message-preview" } }),
                e("div", { attrs: { id: "chat-bubble" } }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = b.exports;
    },
    4360: function (t, e, n) {
      "use strict";
      var i = n("2b0e"),
        r = n("2f62");
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function s(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != o(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, e || "default");
                if ("object" != o(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == o(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n("cca6");
      var c = {},
        u = { modules: {} };
      !(function () {
        var t = n("c3e1");
        t.keys().forEach(function (e) {
          var n = t(e);
          if (c[e] !== n) {
            c[e] = n;
            var i = e
                .replace(/^\.\//, "")
                .replace(/\.\w+$/, "")
                .split(/\//)
                .map(function (t) {
                  var e,
                    n,
                    i = t.split("-");
                  i.length &&
                    (e = i.splice(0, 1)).length &&
                    (n =
                      (e = e[0].toLowerCase()).charAt(0).toLowerCase() +
                      e.slice(1));
                  for (var r = 0; r < i.length; r++) {
                    var o = i[r].toLowerCase();
                    n += o.charAt(0).toUpperCase() + o.slice(1);
                  }
                  return n;
                }),
              r = {};
            (r[i.pop()] = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? a(Object(n), !0).forEach(function (e) {
                      s(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : a(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, n.default)),
              (u.modules = Object.assign(r, u.modules));
          }
        });
      })();
      var l = u.modules;
      i.a.use(r.a),
        void 0 !== window.Prototype &&
          "string" == typeof window.Prototype.Version &&
          parseFloat(window.Prototype.Version.substr(0, 3), 10) <= 1.6 &&
          Object.defineProperty(Array.prototype, "reduce", {
            value: function (t) {
              if (null === this)
                throw new TypeError(
                  "Array.prototype.reduce called on null or undefined"
                );
              if ("function" != typeof t)
                throw new TypeError("".concat(t, " is not a function"));
              var e,
                n = Object(this),
                i = n.length >>> 0,
                r = 0;
              if (arguments.length >= 2) e = arguments[1];
              else {
                for (; r < i && !(r in n); ) r++;
                if (r >= i)
                  throw new TypeError(
                    "Reduce of empty array with no initial value"
                  );
                e = n[r++];
              }
              for (; r < i; ) r in n && (e = t(e, n[r], r, n)), r++;
              return e;
            },
          }),
        (e.a = new r.a.Store({
          actions: {
            reset: function (t) {
              for (
                var e = t.dispatch, n = Object.keys(l), i = 0;
                i < n.length;
                i++
              ) {
                var r = n[i];
                e("".concat(r, "/resetState"));
              }
            },
          },
          modules: l,
        }));
    },
    "43af": function (t, e, n) {
      "use strict";
      var i = n("5f34"),
        r = n("bdd0"),
        o = n("b7cc");
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, c(i.key), i);
        }
      }
      function c(t) {
        var e = (function (t, e) {
          if ("object" != a(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != a(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == a(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && s(t.prototype, e),
          n && s(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            this.languageScript;
        },
        [
          {
            key: "install",
            value: function (t, e) {
              var n = e.store,
                i = e.TawkWindow;
              (t.prototype.$TawkWidgetSettings = this),
                (this.store = n),
                (this.TawkWindow = i);
            },
          },
          {
            key: "getSettings",
            value: function (t, e) {
              var n = this,
                o = {
                  propertyId: this.store.getters["property/id"],
                  widgetId: this.store.getters["widget/id"],
                },
                a = window.sessionStorage.getItem("tawk_sv");
              this.version
                ? (o.sv = this.version)
                : (o.sv = void 0 !== a ? a : null),
                r.a.get(
                  "".concat("https://va.tawk.to", "/v1/widget-settings"),
                  o,
                  null,
                  function (r, o) {
                    if (r) return e(r);
                    var a = o.data.widget.language || "en";
                    i.a.changeLanguage(a, function (t) {
                      t && console.error("[Tawk/Widget-Settings]:", t);
                    }),
                      n.processSettings(o.data),
                      t(o.data.settingsVersion);
                  }
                );
            },
          },
          {
            key: "processSettings",
            value: function (t) {
              t &&
                ((this.version = t.settingsVersion),
                this.store.commit("widget/setData", t.widget),
                this.store.commit("widget/setWebrtcOptions", t.webrtc),
                this.store.dispatch("widget/updateBranding", t.branding),
                void 0 !== t.widget.agentDrivenStatus &&
                  !1 === t.widget.agentDrivenStatus &&
                  this.store.dispatch("session/setPageStatus", {
                    status: "online",
                  }));
            },
          },
          {
            key: "xOffset",
            value: function () {
              var t,
                e,
                n =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == n || null === (e = n.desktop) || void 0 === e
                  ? void 0
                  : e.xOffset)
              ) {
                var i = n.desktop.xOffset;
                if (
                  ("string" == typeof i &&
                    (i = parseInt(n.desktop.xOffset.replace("px", ""), 10)),
                  !isNaN(i))
                )
                  return i;
              }
              return this.store.getters["widget/isCenter"] &&
                !this.store.getters["widget/isRoundWidget"]
                ? 0
                : this.store.getters["widget/xOffset"];
            },
          },
          {
            key: "yOffset",
            value: function () {
              var t,
                e,
                n =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == n || null === (e = n.desktop) || void 0 === e
                  ? void 0
                  : e.yOffset)
              ) {
                var i = n.desktop.yOffset;
                if (
                  ("string" == typeof i &&
                    (i = parseInt(n.desktop.yOffset.replace("px", ""), 10)),
                  !isNaN(i))
                )
                  return i;
              }
              return this.store.getters["widget/isCenter"]
                ? 0
                : this.store.getters["widget/yOffset"];
            },
          },
          {
            key: "xOffsetMobile",
            value: function () {
              var t,
                e,
                n =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == n || null === (e = n.mobile) || void 0 === e
                  ? void 0
                  : e.xOffset)
              ) {
                var i = n.mobile.xOffset;
                if (
                  ("string" == typeof i &&
                    (i = parseInt(i.replace("px", ""), 10)),
                  !isNaN(i))
                )
                  return i;
              }
              return this.store.getters["widget/isCenter"] &&
                !this.store.getters["widget/isRoundWidget"]
                ? 0
                : this.store.getters["widget/xOffsetMobile"];
            },
          },
          {
            key: "yOffsetMobile",
            value: function () {
              var t,
                e,
                n =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == n || null === (e = n.mobile) || void 0 === e
                  ? void 0
                  : e.yOffset)
              ) {
                var i = n.mobile.yOffset;
                if (
                  ("string" == typeof i &&
                    (i = parseInt(i.replace("px", ""), 10)),
                  !isNaN(i))
                )
                  return i;
              }
              return this.store.getters["widget/isCenter"]
                ? 0
                : this.store.getters["widget/yOffsetMobile"];
            },
          },
          {
            key: "bubbleXOffset",
            value: function () {
              var t,
                e,
                n,
                i =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == i || null === (e = i.bubble) || void 0 === e
                  ? void 0
                  : e.xOffset)
              ) {
                var r = i.bubble.xOffset;
                if (
                  ("string" == typeof r &&
                    (r = parseInt(r.replace("px", ""), 10)),
                  !isNaN(r))
                )
                  return r;
              }
              if (
                void 0 !==
                (null == i || null === (n = i.desktop) || void 0 === n
                  ? void 0
                  : n.position)
              ) {
                var a,
                  s =
                    null == i || null === (a = i.desktop) || void 0 === a
                      ? void 0
                      : a.position;
                if (
                  s &&
                  this.store.getters["widget/desktopVisibility"].position !== s
                )
                  return this.store.getters["widget/isCenter"]
                    ? this.store.getters["widget/minDesktop"].height + 5
                    : 0;
              }
              return this.store.getters["widget/bubble"].config.offsetX;
            },
          },
          {
            key: "bubbleYOffset",
            value: function () {
              var t,
                e,
                n,
                i =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == i || null === (e = i.bubble) || void 0 === e
                  ? void 0
                  : e.yOffset)
              ) {
                var r = i.bubble.yOffset;
                if (
                  ("string" == typeof r &&
                    (r = parseInt(r.replace("px", ""), 10)),
                  !isNaN(r))
                )
                  return r;
              }
              if (
                void 0 !==
                (null == i || null === (n = i.desktop) || void 0 === n
                  ? void 0
                  : n.position)
              ) {
                var a,
                  s =
                    null == i || null === (a = i.desktop) || void 0 === a
                      ? void 0
                      : a.position;
                if (
                  s &&
                  this.store.getters["widget/desktopVisibility"].position !== s
                )
                  return this.store.getters["widget/isCenter"]
                    ? 0
                    : this.store.getters["widget/minDesktop"].height + 5;
              }
              return this.store.getters["widget/bubble"].config.offsetY;
            },
          },
          {
            key: "bubbleRotate",
            value: function () {
              var t,
                e,
                n =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == n || null === (e = n.bubble) || void 0 === e
                  ? void 0
                  : e.rotate)
              ) {
                var i = n.bubble.rotate;
                if (
                  ("string" == typeof i &&
                    (i = parseInt(i.replace("deg", ""), 10)),
                  !isNaN(i) && -1 !== [0, 90, -90].indexOf(i))
                )
                  return i;
              }
              return this.store.getters["widget/bubble"].config.rotate;
            },
          },
          {
            key: "isRoundWidget",
            value: function () {
              var t,
                e,
                n = this.store.getters["widget/isRoundWidget"],
                i =
                  null === o.a ||
                  void 0 === o.a ||
                  null === (t = o.a.local_API) ||
                  void 0 === t ||
                  null === (t = t.customStyle) ||
                  void 0 === t
                    ? void 0
                    : t.visibility;
              if (
                void 0 !==
                (null == i || null === (e = i.desktop) || void 0 === e
                  ? void 0
                  : e.position)
              ) {
                var r,
                  a =
                    null == i || null === (r = i.desktop) || void 0 === r
                      ? void 0
                      : r.position;
                if (
                  this.store.getters["widget/desktopVisibility"].position !== a
                )
                  return !1;
              }
              return n;
            },
          },
        ]
      ))();
    },
    "56d7": function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          var e = n("2b0e"),
            i = n("4360"),
            r = n("5f34"),
            o = n("dbb9"),
            a = n("91ce"),
            s = n("745f"),
            c = n("9ab4");
          !(function (n) {
            e.a.config.productionTip = !1;
            var u = new c.a({}),
              l = { maximize: !1 };
            e.a.prototype.$TawkWindow = l;
            var d = new s.a({ TawkWindow: l });
            (l.registerWithConsent = function () {
              (l.maximize = !0),
                a.a.storeSessionInformation(!0),
                new Promise(function (t, e) {
                  l.register.init(t, e);
                }).then(function (t) {
                  d.extractRegistrationData(t),
                    l.app.$socket.connect(),
                    i.a.dispatch("router/clearHistory"),
                    a.a.storeSessionInformation(!0),
                    l.popoutWin &&
                      l.popoutWin.postMessage("twkPopWidgetRegister", "*");
                });
            }),
              (l.retryRegister = function () {
                new Promise(function (t, e) {
                  l.register.init(t, e);
                }).then(function (t) {
                  d.extractRegistrationData(t), l.app.$socket.connect();
                });
              }),
              (l.popoutWidget = function () {
                var t = i.a.getters["property/id"],
                  e = i.a.getters["widget/id"],
                  n = i.a.getters["widget/branding"],
                  r = "".concat("https://tawk.to", "/chat/").concat(t, "/");
                i.a.dispatch("session/updateChatWindowState", "min"),
                  l.popoutWin && !l.popoutWin.closed && l.popoutWin.focus
                    ? l.popoutWin.focus()
                    : (n &&
                        n.whitelabeled &&
                        n.popoutBaseUrl &&
                        (r = "".concat(n.popoutBaseUrl, "/chat/")),
                      (l.popoutWin = window.open(
                        r + e + "?pop=1",
                        "Tawk",
                        "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"
                      )));
              }),
              (l.criticalRefresh = function (t) {
                if (i.a.getters["widget/isWindowed"])
                  return window.location.reload(!!t);
                delete window.$_Tawk.downloaded,
                  i.a.dispatch("router/clearHistory"),
                  d.connect();
              }),
              (l.updateBootConfig = function (t) {
                d.updateConfig(t);
              }),
              (l.makeHtml = function (t) {
                return u.makeHtml(t);
              }),
              window.addEventListener("beforeunload", function () {
                l && l.logger && (l.logger.unloading = !0);
              }),
              window.addEventListener(
                "message",
                function (t) {
                  if (!l.popoutWin || "getTwkWidgetUUID" !== t.data)
                    return "twkRegisterWConsent" === t.data &&
                      t.source === l.popoutWin
                      ? l.registerWithConsent()
                      : void (
                          i.a.getters["widget/isPopout"] &&
                          "twkPopWidgetRegister" === t.data &&
                          t.source === window.opener &&
                          l.registerWithConsent()
                        );
                  l.popoutWin.postMessage(
                    { twkWidgetUUID: i.a.getters["visitor/uuid"] },
                    t.origin
                  );
                },
                !1
              ),
              r.a
                .use(o.a)
                .init(
                  {
                    lng: "en",
                    debug: !1,
                    load: "currentOnly",
                    fallbackLng: ["en", "en_dev"],
                    interpolation: { escapeValue: !1 },
                    backend: {
                      loadPath: "".concat(
                        "https://embed.tawk.to/_s/v4/app/67f4b2d4927",
                        "/languages/{{lng}}.json"
                      ),
                    },
                  },
                  function (e, n) {
                    e && console.error("[Tawk/Widget-Settings]", e),
                      (t.$_Tawk.i18next = n);
                  }
                ),
              d.init({
                visitor:
                  null === (n = window.Tawk_API) || void 0 === n
                    ? void 0
                    : n.visitor,
              });
          })();
        }.call(this, n("c8ba"));
    },
    5868: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var i = [
          "(?:(?:[a-z]+:)?//)?",
          "(?:\\S+(?::\\S*)?@)?",
          "(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))",
          "(?::\\d{2,5})?",
          '(?:[/?#][^\\s"]*)?',
        ].join(""),
        r = {
          regLineBreaks: /(\r\n|\n|\r)/gm,
          regBr: /<br\/>/,
          regMatchUrl: new RegExp("(?:^" + i + "$)", "i"),
          regMatchIp:
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\\/\\?#]+)+)\b/gi,
          regEmailMatch:
            /^((mailto:){0,1}[a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]+)$/,
          regTelMatch:
            /^(tel:\+|\+|tel:){1}(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}\b/gi,
          br: "<br/>",
          getTargetElement: function (t) {
            var e = t.target || t.srcElement;
            return 3 === e.nodeType && (e = e.parentNode), e;
          },
          formatFileSize: function (t) {
            var e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            if (!(t = parseInt(t, 10))) return "0Bytes";
            for (var n = 1; n < e.length; n++)
              if (t < Math.pow(1024, n))
                return (
                  Math.round((t / Math.pow(1024, n - 1)) * 100) / 100 + e[n - 1]
                );
            return t;
          },
        };
    },
    "65b3": function (t, e, n) {
      "use strict";
      (function (t) {
        var i = n("c7b8"),
          r = n("b7cc"),
          o = n("27c6"),
          a = n("028e"),
          s = n("24ca");
        function c(t) {
          return (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function u(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, l(i.key), i);
          }
        }
        function l(t) {
          var e = (function (t, e) {
            if ("object" != c(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e || "default");
              if ("object" != c(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" == c(e) ? e : e + "";
        }
        n("cc70"),
          (e.a = new ((function (t, e, n) {
            return (
              e && u(t.prototype, e),
              n && u(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(
            function t() {
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.chatWindowStates = { min: !0, max: !0 }),
                (this.io = null),
                (this.selfOrigin = null),
                (this.disconnect = !1),
                (this.ready = !1),
                (this.banned = !1),
                (this.forceDisconnected = !1),
                (this.clearRegisterRetryTimeout = null),
                (this.events = {}),
                (this.stack = []),
                (this.connectCount = 0);
            },
            [
              {
                key: "install",
                value: function (t, e) {
                  var n = e.store,
                    i = e.TawkWindow;
                  (t.prototype.$socket = this),
                    (this.store = n),
                    (this.TawkWindow = i);
                },
              },
              {
                key: "connect",
                value: function () {
                  var e,
                    n = this,
                    r = new Date().getTime();
                  (window.$_Tawk.connected = !1),
                    (this.disconnect = !1),
                    (this.forceDisconnected = !1),
                    5 !== this.connectCount
                      ? (this.io &&
                          (this.io.removeAllListeners(), this.io.disconnect()),
                        (e = {
                          k: this.store.getters["session/sessionKey"],
                          cver: this.store.getters["chat/chatVersion"],
                          pop: this.store.getters["widget/isWindowed"],
                          asver:
                            this.store.getters["session/pageStatusVersion"],
                          tkn: this.store.getters["session/token"],
                        }),
                        this.connectCount++,
                        (this.io = new window.$__TawkSocket(
                          "wss://".concat(
                            this.store.getters["session/visitorSocketServer"],
                            "/"
                          ),
                          {
                            transports: ["websocket"],
                            engineIo: window.$__TawkEngine,
                            path: "/s",
                            query: e,
                          }
                        )),
                        this.io.on("disconnect", function () {
                          n.disconnectHandler();
                        }),
                        this.io.on("error", function (t) {
                          var e,
                            r = "socket on error";
                          if (t instanceof Error) {
                            if (
                              ((e = {
                                toString: t.toString(),
                                stack: t.stack,
                                lineNumber: t.lineNumber,
                                fileName: t.fileName,
                              }),
                              i.a &&
                                i.a.unloading &&
                                -1 === e.toString.indexOf("post"))
                            )
                              return;
                            "TransportError" === t.type &&
                              (e.description = t.description),
                              -1 !== e.toString.indexOf("post") &&
                                (r = "socket post error");
                          } else e = t;
                          i.a.logger.reportIncident(r, e),
                            n.io.disconnect(),
                            n.disconnectHandler();
                        }),
                        this.io.on("connect", function () {
                          (n.disconnect = !1),
                            n.store.dispatch("session/reconnectSession", !1);
                        }),
                        this.io.on("ready", function (e, o, a) {
                          if (!n.TawkWindow) return n.disconnectSocket();
                          (n.selfOrigin = e),
                            (window.$_Tawk.connected = !0),
                            n.ready ||
                              ((window.$_Tawk.loaded = !0),
                              void 0 !== window.Tawk_LoadStart &&
                                i.a.reportPerformance({
                                  socket: new Date().getTime() - r,
                                  register: n.TawkWindow.register.registerTime,
                                  widget:
                                    new Date().getTime() -
                                    window.Tawk_LoadStart,
                                  script:
                                    new Date().getTime() - t.$_Tawk.startTime,
                                  download:
                                    t.$_Tawk.startTime - window.Tawk_LoadStart,
                                })),
                            (n.ready = !0),
                            n.store.dispatch("chat/updateConversation", o),
                            n.store.dispatch("session/setPageStatus", {
                              data: a,
                            }),
                            n.store.dispatch("socket/updateIsReady", !0),
                            n.clearStack(),
                            clearTimeout(n.clearRegisterRetryTimeout),
                            (n.clearRegisterRetryTimeout = setTimeout(
                              function () {
                                n.disconnect ||
                                  n.TawkWindow.register.resetRetryCount(),
                                  (n.clearRegisterRetryTimeout = null);
                              },
                              5e3
                            ));
                        }),
                        this.io.on("remoteDisconnect", function (t) {
                          if ("BANNED" !== (t = t || {}).msg)
                            n.io.disconnect(), n.disconnectHandler();
                          else {
                            n.banned = !0;
                            try {
                              n.io.disconnect();
                            } catch (t) {}
                            s.a.$emit("removeWidget");
                          }
                        }),
                        this.addEventListeners())
                      : this.store.commit("widget/setVisibility", !1);
                },
              },
              {
                key: "disconnectSocket",
                value: function () {
                  (this.forceDisconnected = !0),
                    this.io && (this.io.disconnect(), this.disconnectHandler());
                },
              },
              {
                key: "disconnectHandler",
                value: function () {
                  (window.$_Tawk.connected = !1),
                    this.io.removeAllListeners(),
                    o.a.cleanUp(),
                    this.banned || this.forceDisconnected || this.disconnect
                      ? (this.connectCount = 0)
                      : ((this.disconnect = !0),
                        this.store.dispatch("session/reconnectSession", !0),
                        this.TawkWindow.retryRegister());
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  var t = this;
                  this.io.on("visitorChatWindowState", function (e) {
                    t.selfOrigin !== e.origin &&
                      t.store.commit("session/setChatWindowState", e.cw);
                  }),
                    this.io.on("visitorSound", function (e) {
                      e.origin !== t.selfOrigin &&
                        t.store.dispatch("widget/toggleLocalSound", !!e.sdo);
                    }),
                    this.io.on("pageStatus", function (e) {
                      t.store.dispatch("session/setPageStatus", { data: e });
                    }),
                    this.io.on("visitorPopupFocus", function (e) {
                      (e = e || {}),
                        t.store.dispatch(
                          "session/updateIsWindowFocused",
                          !!e.hasFocus
                        );
                    }),
                    this.io.on("chatBubbleClosed", function (e) {
                      e.origin !== t.selfOrigin &&
                        t.store.dispatch("session/closeChatBubble", !0);
                    }),
                    this.io.on("pageDisable", function () {
                      t.disconnectSocket(), s.a.$emit("removeWidget");
                    }),
                    this.io.on("vCallStatus", function (t) {
                      a.a.callStatusUpdate(t);
                    }),
                    this.io.on("widgetScheduleUpdate", function (e) {
                      var n = t.store.getters["widget/id"];
                      (n && n !== e.wdgt) ||
                        (t.store.dispatch(
                          "schedule/addSlots",
                          e.ws ? { config: { schedule: e.ws.sch } } : null
                        ),
                        t.store.dispatch("schedule/updateTimezone", e.wstz),
                        o.a.calculate());
                    }),
                    (this.store.getters["widget/hasLiveChat"] ||
                      (this.store.getters["chat/hasChatStarted"] &&
                        (!this.store.getters["chat/hasChatStarted"] ||
                          0 !== this.store.getters["chat/agentsCount"]))) &&
                      (this.io.on("visitorDataUpdate", function (e) {
                        t.selfOrigin !== e.origin &&
                          (t.store.dispatch(
                            "visitor/updateVisitorInformation",
                            e
                          ),
                          e.dpt &&
                            t.store.dispatch("chat/updateDepartment", e.dpt),
                          e.pcfs &&
                            t.store.dispatch(
                              "session/updatePrechatSubmitted",
                              !0
                            ));
                      }),
                      this.io.on("visitorMessage", function (e) {
                        t.selfOrigin !== e.origin &&
                          t.store.dispatch("chat/incomingChatMessage", e);
                      }),
                      this.io.on(
                        "visitorConversationPresenceUpdate",
                        function (e) {
                          t.store.dispatch("chat/incomingChatMessage", e);
                        }
                      ),
                      this.io.on("visitorChatSeen", function (t) {
                        a.a.clearUnseenNotification(t);
                      }),
                      this.io.on("visitorChatDismiss", function (t) {
                        s.a.$emit("dismissPreview", t);
                      }),
                      this.io.on("visitorTagsUpdate", function (t) {
                        r.a.triggerApiHandlers("onTagsUpdated", t);
                      }),
                      this.io.on("uploadProgress", function (t) {
                        a.a.updateFileProgress(t);
                      }),
                      this.io.on("uploadFinished", function (t) {
                        a.a.updateFileProgress(t, !0);
                      }),
                      this.io.on("uploadError", function (t) {
                        a.a.updateFileProgress(t, !1, !0);
                      }),
                      this.io.on("agentIsTyping", function (t) {
                        s.a.$emit("agentIsTyping", t);
                      }),
                      this.io.on("agentStopedTyping", function (t) {
                        s.a.$emit("agentStopedTyping", t);
                      }),
                      this.io.on("visitorChatTransfer", function (t) {
                        a.a.chatTransferUpdate(t.transfer, t.transferVersion);
                      }));
                },
              },
              {
                key: "isForcedDisconnect",
                value: function () {
                  return this.forceDisconnected;
                },
              },
              {
                key: "publish",
                value: function (t, e, n) {
                  if (window.$_Tawk.connected)
                    if (void 0 !== n || "function" == typeof e)
                      this.wrapCallback(t, e, n);
                    else
                      try {
                        this.send(t, e, n);
                      } catch (t) {}
                  else this.addToStack(t, e, n);
                },
              },
              {
                key: "addToStack",
                value: function (t, e, n) {
                  "sendChatMessage" === t &&
                    delete this.events.notifyMessagePreview,
                    "notifyMessagePreview" === t
                      ? (this.events[t] = { command: t, data: e, callback: n })
                      : this.stack.push({ command: t, data: e, callback: n });
                },
              },
              {
                key: "clearStack",
                value: function () {
                  var t = this;
                  for (var e in (this.stack.forEach(function (e) {
                    t.publish(e.command, e.data, e.callback);
                  }),
                  this.events))
                    this.publish(
                      this.events[e].command,
                      this.events[e].data,
                      this.events[e].callback
                    );
                  (this.stack = []), (this.events = {});
                },
              },
              {
                key: "wrapCallback",
                value: function (t, e, n) {
                  var i, r;
                  "function" == typeof e && ((n = e), (e = null)),
                    (i = setTimeout(function () {
                      throw (
                        (n(!0),
                        new Error(
                          "Socket server did not execute the callback for " +
                            t +
                            " with data : " +
                            JSON.stringify(e)
                        ))
                      );
                    }, 35e3)),
                    (r = function () {
                      clearTimeout(i),
                        (r = function () {}),
                        n.apply(null, arguments);
                    });
                  try {
                    null === e ? this.send(t, r) : this.send(t, e, r);
                  } catch (t) {}
                },
              },
              {
                key: "send",
                value: function (t, e, n) {
                  this[t](e, n);
                },
              },
              {
                key: "nav",
                value: function (t, e) {
                  this.io.send("nav", t, e);
                },
              },
              {
                key: "notifyMessagePreview",
                value: function (t) {
                  this.io.send("messagePreview", t, new Date().getTime());
                },
              },
              {
                key: "sendChatMessage",
                value: function (t, e) {
                  this.io.send(
                    "service",
                    "visitor-chat",
                    "/v1/message/visitor",
                    t,
                    e
                  );
                },
              },
              {
                key: "getCallStatus",
                value: function (t, e) {
                  this.io.send(
                    "service",
                    "webrtc",
                    "/v1/vcall/status/visitor",
                    t,
                    e
                  );
                },
              },
              {
                key: "getWebRTCToken",
                value: function (t, e) {
                  this.io.send(
                    "service",
                    "webrtc",
                    "/v1/vcall/init/visitor",
                    t,
                    e
                  );
                },
              },
              {
                key: "declineCall",
                value: function (t, e) {
                  this.io.send(
                    "service",
                    "webrtc",
                    "/v1/vcall/reject/visitor",
                    t,
                    e
                  );
                },
              },
              {
                key: "notifyOfflineMessage",
                value: function (t, e) {
                  this.io.send(
                    "service",
                    "visitor-chat",
                    "/v1/visitor/offline-form",
                    t,
                    e
                  );
                },
              },
              {
                key: "visitorChatSeen",
                value: function (t, e) {
                  this.io.send(
                    "service",
                    "visitor-chat",
                    "/v1/visitor/messages-seen",
                    t,
                    e
                  );
                },
              },
              {
                key: "notifyPrechat",
                value: function (t, e) {
                  this.io.send("savePrechatForm", t, e);
                },
              },
              {
                key: "notifyNameChange",
                value: function (t, e) {
                  this.io.send("saveNameChangeForm", t, e);
                },
              },
              {
                key: "notifyEmailTranscript",
                value: function (t, e) {
                  this.io.send("saveTranscriptEmailForm", t, e);
                },
              },
              {
                key: "notifyEndChatTranscript",
                value: function (t, e) {
                  this.io.send("sendTranscript", t, e);
                },
              },
              {
                key: "endVisitorChat",
                value: function (t) {
                  this.io.send("endChat", t);
                },
              },
              {
                key: "addEvent",
                value: function (t, e) {
                  this.io.send("addEvent", t, e);
                },
              },
              {
                key: "setAttributes",
                value: function (t, e) {
                  this.io.send("setAttributes", t, e);
                },
              },
              {
                key: "addTags",
                value: function (t, e) {
                  this.io.send("addTags", t, e);
                },
              },
              {
                key: "removeTags",
                value: function (t, e) {
                  this.io.send("removeTags", t, e);
                },
              },
              {
                key: "fileUploadMessage",
                value: function (t, e) {
                  this.io.send("fileUploadMessage", t, e);
                },
              },
              {
                key: "popupOnFocus",
                value: function (t) {
                  this.io.send("visitorPopupFocus", t);
                },
              },
              {
                key: "notifySocketStatusUpdate",
                value: function (t) {
                  this.io.send("socketStatusUpdate", t);
                },
              },
              {
                key: "setRating",
                value: function (t) {
                  this.io.send("visitorRating", t);
                },
              },
              {
                key: "visitorChatDismiss",
                value: function (t, e) {
                  this.io.send(
                    "service",
                    "visitor-chat",
                    "/v1/visitor/dismiss-preview",
                    t,
                    e
                  );
                },
              },
              {
                key: "getForm",
                value: function (t, e) {
                  this.io.send("service", "table", "/v1/form/get", t, e);
                },
              },
              {
                key: "notifyChatBubbleClosed",
                value: function () {
                  this.io.send("chatBubbleClose");
                },
              },
              {
                key: "notifyWindowState",
                value: function (t) {
                  this.io.send("chatWindowState", t);
                },
              },
              {
                key: "toggleSound",
                value: function (t) {
                  this.io.send("visitorSound", t);
                },
              },
              {
                key: "notifyWidgetResized",
                value: function () {
                  this.io.send("notifyWidgetResized");
                },
              },
            ]
          ))());
      }.call(this, n("c8ba")));
    },
    6665: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("65b3");
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o() {
        o = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          c = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          l = s.toStringTag || "@@toStringTag";
        function d(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          d({}, "");
        } catch (t) {
          d = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, i) {
          var r = e && e.prototype instanceof w ? e : w,
            o = Object.create(r.prototype),
            s = new A(i || []);
          return a(o, "_invoke", { value: O(t, n, s) }), o;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = f;
        var p = "suspendedStart",
          m = "executing",
          g = "completed",
          v = {};
        function w() {}
        function y() {}
        function b() {}
        var k = {};
        d(k, c, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          S = T && T(T(_([])));
        S && S !== n && i.call(S, c) && (k = S);
        var I = (b.prototype = w.prototype = Object.create(k));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            d(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(o, a, s, c) {
            var u = h(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                d = l.value;
              return d && "object" == r(d) && i.call(d, "__await")
                ? e.resolve(d.__await).then(
                    function (t) {
                      n("next", t, s, c);
                    },
                    function (t) {
                      n("throw", t, s, c);
                    }
                  )
                : e.resolve(d).then(
                    function (t) {
                      (l.value = t), s(l);
                    },
                    function (t) {
                      return n("throw", t, s, c);
                    }
                  );
            }
            c(u.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (t, i) {
              function r() {
                return new e(function (e, r) {
                  n(t, i, e, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function O(e, n, i) {
          var r = p;
          return function (o, a) {
            if (r === m) throw Error("Generator is already running");
            if (r === g) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = o, i.arg = a; ; ) {
              var s = i.delegate;
              if (s) {
                var c = x(s, i);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (r === p) throw ((r = g), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              r = m;
              var u = h(e, n, i);
              if ("normal" === u.type) {
                if (((r = i.done ? g : "suspendedYield"), u.arg === v))
                  continue;
                return { value: u.arg, done: i.done };
              }
              "throw" === u.type &&
                ((r = g), (i.method = "throw"), (i.arg = u.arg));
            }
          };
        }
        function x(e, n) {
          var i = n.method,
            r = e.iterator[i];
          if (r === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method"
                  )))),
              v
            );
          var o = h(r, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function _(e) {
          if (e || "" === e) {
            var n = e[c];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (i.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(r(e) + " is not iterable");
        }
        return (
          (y.prototype = b),
          a(I, "constructor", { value: b, configurable: !0 }),
          a(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(b, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), d(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(I)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(E.prototype),
          d(E.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, i, r, o) {
            void 0 === o && (o = Promise);
            var a = new E(f(t, n, i, r), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(I),
          d(I, l, "Generator"),
          d(I, c, function () {
            return this;
          }),
          d(I, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return (t.value = i), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = _),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(i, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = i),
                  r && ((n.method = "next"), (n.arg = t)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    u = i.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), L(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    L(n);
                  }
                  return r;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: _(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function a(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r);
      }
      var s = function () {
        return {
          baseUrl: "/v1/form",
          loading: { index: !1, store: !1 },
          forms: [],
        };
      };
      e.default = {
        namespaced: !0,
        state: s,
        getters: {
          forms: function (t) {
            return t.forms;
          },
        },
        actions: {
          get: (function () {
            var t = (function (t) {
              return function () {
                var e = this,
                  n = arguments;
                return new Promise(function (i, r) {
                  var o = t.apply(e, n);
                  function s(t) {
                    a(o, i, r, s, c, "next", t);
                  }
                  function c(t) {
                    a(o, i, r, s, c, "throw", t);
                  }
                  s(void 0);
                });
              };
            })(
              o().mark(function t(e) {
                var n,
                  r,
                  a = arguments;
                return o().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((n = e.commit),
                          (r =
                            a.length > 1 && void 0 !== a[1]
                              ? a[1]
                              : "lead-capture-form"))
                        ) {
                          t.next = 4;
                          break;
                        }
                        throw "Please set form property/form ID before calling the action.show";
                      case 4:
                        return (
                          n("setLoading", { action: "index", value: !0 }),
                          (t.next = 7),
                          i.a.publish(
                            "getForm",
                            { formId: r },
                            function (t, e) {
                              n("setLoading", { action: "index", value: !1 }),
                                t
                                  ? console.error(
                                      "[Tawk/Form]: "
                                        .concat(t.code, " ")
                                        .concat(t.message)
                                    )
                                  : n("addForm", e.data.form);
                            }
                          )
                        );
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
        },
        mutations: {
          addForm: function (t, e) {
            t.forms.push(e);
          },
          setLoading: function (t, e) {
            var n = e.action,
              i = e.value;
            t.loading[n] = i;
          },
          unsetData: function (t) {
            for (
              var e = {
                  baseUrl: "/v1/form",
                  loading: { index: !1, store: !1 },
                  forms: [],
                },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    "681d": function (t, e, n) {
      "use strict";
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, o(i.key), i);
        }
      }
      function o(t) {
        var e = (function (t, e) {
          if ("object" != i(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == i(e) ? e : e + "";
      }
      var a = (function (t, e, n) {
        return (
          e && r(t.prototype, e),
          n && r(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (function (t, e, n) {
              (e = o(e)) in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n);
            })(this, "isEnabled", !1),
            this.checkIsEnabled();
        },
        [
          { key: "checkIsEnabled", value: function () {} },
          { key: "setItem", value: function () {} },
          { key: "getItem", value: function () {} },
        ]
      );
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, l(i.key), i);
        }
      }
      function l(t) {
        var e = (function (t, e) {
          if ("object" != s(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != s(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == s(e) ? e : e + "";
      }
      function d(t, e, n) {
        return (
          (e = f(e)),
          (function (t, e) {
            if (e && ("object" == s(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], f(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function h(t, e) {
        return (h = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      var p = (function (t) {
        function e() {
          return c(this, e), d(this, e, arguments);
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && h(t, e);
          })(e, t),
          (function (t, e, n) {
            return (
              e && u(t.prototype, e),
              n && u(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "checkIsEnabled",
              value: function () {
                try {
                  this.isEnabled = !!window.sessionStorage;
                } catch (t) {
                  this.isEnabled = !1;
                }
              },
            },
            {
              key: "setItem",
              value: function (t, e) {
                if (this.isEnabled)
                  try {
                    return window.sessionStorage.setItem(t, e), !0;
                  } catch (t) {
                    return;
                  }
              },
            },
            {
              key: "getItem",
              value: function (t) {
                return this.isEnabled ? window.sessionStorage.getItem(t) : null;
              },
            },
          ])
        );
      })(a);
      function m(t) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function g(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, w(i.key), i);
        }
      }
      function w(t) {
        var e = (function (t, e) {
          if ("object" != m(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != m(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == m(e) ? e : e + "";
      }
      function y(t, e, n) {
        return (
          (e = b(e)),
          (function (t, e) {
            if (e && ("object" == m(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], b(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function b(t) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function k(t, e) {
        return (k = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      var T = (function (t) {
          function e() {
            return g(this, e), y(this, e, arguments);
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && k(t, e);
            })(e, t),
            (function (t, e, n) {
              return (
                e && v(t.prototype, e),
                n && v(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(e, [
              {
                key: "checkIsEnabled",
                value: function () {
                  try {
                    window.localStorage.setItem("exist_test", "yes"),
                      window.localStorage.removeItem("exist_test"),
                      (this.isEnabled = !0);
                  } catch (t) {
                    this.isEnabled = !1;
                  }
                },
              },
              {
                key: "setItem",
                value: function (t, e) {
                  if (this.isEnabled)
                    return window.localStorage.setItem(t, e), !0;
                },
              },
              {
                key: "getItem",
                value: function (t) {
                  return this.isEnabled ? window.localStorage.getItem(t) : null;
                },
              },
              {
                key: "deleteItem",
                value: function (t) {
                  this.isEnabled && delete window.localStorage[t];
                },
              },
            ])
          );
        })(a),
        S = n("b7cc");
      function I(t) {
        return (I =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function P(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function E(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, O(i.key), i);
        }
      }
      function O(t) {
        var e = (function (t, e) {
          if ("object" != I(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != I(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == I(e) ? e : e + "";
      }
      function x(t, e, n) {
        return (
          (e = C(e)),
          (function (t, e) {
            if (e && ("object" == I(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], C(t).constructor)
              : e.apply(t, n)
          )
        );
      }
      function C(t) {
        return (C = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function L(t, e) {
        return (L = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      var A = (function (t) {
        function e() {
          var t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = n.TawkWindow;
          return P(this, e), ((t = x(this, e)).TawkWindow = i), t;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && L(t, e);
          })(e, t),
          (function (t, e, n) {
            return (
              e && E(t.prototype, e),
              n && E(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "checkIsEnabled",
              value: function () {
                var t = !!navigator.cookieEnabled;
                void 0 !== navigator.cookieEnabled ||
                  t ||
                  ((document.cookie = "testcookie"),
                  (t = -1 != document.cookie.indexOf("testcookie"))),
                  (this.isEnabled = t);
              },
            },
            {
              key: "setItem",
              value: function (t, e, n, i) {
                if (
                  "file:" === window.location.protocol ||
                  S.a.store.getters["widget/isIframe"]
                )
                  return W.localStore().setItem(t, e);
                if (this.isEnabled) {
                  var r,
                    o,
                    a = "",
                    s = "Lax;";
                  return (
                    n ||
                      ((r = new Date()).setTime(r.getTime() + 15552e6),
                      (a = "; expires=".concat(r.toGMTString()))),
                    S.a.store.getters["widget/isIframe"] && (s = "None;"),
                    (i = i ? "; domain=".concat(i) : ""),
                    "https:" === window.location.protocol && (o = " Secure"),
                    (document.cookie = ""
                      .concat(t, "=")
                      .concat(e)
                      .concat(a, "; path=/")
                      .concat(i, "; SameSite=")
                      .concat(s)
                      .concat(o, ";")),
                    !0
                  );
                }
              },
            },
            {
              key: "getItem",
              value: function (t) {
                var e = [];
                if (
                  "file:" === window.location.protocol ||
                  S.a.store.getters["widget/isIframe"]
                ) {
                  var n = W.localStore().getItem(t);
                  return n ? [n] : [];
                }
                if (this.isEnabled)
                  for (
                    var i = "".concat(t, "="),
                      r = document.cookie.split(";"),
                      o = 0,
                      a = r.length;
                    o < a;
                    o++
                  ) {
                    for (var s = r[o]; " " === s.charAt(0); )
                      s = s.substring(1, s.length);
                    0 === s.indexOf(i) &&
                      e.push(s.substring(i.length, s.length));
                  }
                return e;
              },
            },
            {
              key: "deleteItem",
              value: function (t) {
                document.cookie = "".concat(
                  t,
                  "=;Max-Age=-99999999;SameSite=Lax;"
                );
              },
            },
            {
              key: "checkItemSaved",
              value: function (t) {
                if (
                  "file:" === window.location.protocol ||
                  S.a.store.getters["widget/isIframe"]
                )
                  return !!W.localStore().getItem(t);
                var e = this.getItem(t);
                if (!e || !e.length) throw new Error("Unable to store cookie");
              },
            },
          ])
        );
      })(a);
      function _(t) {
        return (_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function D(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, j(i.key), i);
        }
      }
      function j(t) {
        var e = (function (t, e) {
          if ("object" != _(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != _(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == _(e) ? e : e + "";
      }
      var W = (e.a = new ((function (t, e, n) {
        return (
          e && D(t.prototype, e),
          n && D(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        },
        [
          {
            key: "install",
            value: function (t, e) {
              var n = e.TawkWindow;
              (t.prototype.$TawkWebStorage = this), (this.TawkWindow = n);
            },
          },
          {
            key: "sessionStore",
            value: function () {
              return new p();
            },
          },
          {
            key: "localStore",
            value: function () {
              return new T();
            },
          },
          {
            key: "cookieStore",
            value: function () {
              return new A({ TawkWindow: this.TawkWindow });
            },
          },
        ]
      ))());
    },
    "745f": function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return x;
        });
        var i = n("2b0e"),
          r = n("681d"),
          o = n("43af"),
          a = n("9be8"),
          s = n("b7cc"),
          c = n("0ad2"),
          u = n("27c6"),
          l = n("028e"),
          d = n("99e1"),
          f = n("77b4"),
          h = n("91ce"),
          p = n("c7b8"),
          m = n("65b3"),
          g = n("24ca"),
          v = n("d3a4"),
          w = n("27a6"),
          y = n("7f46"),
          b = n("4360"),
          k = n("a18c"),
          T = n("d046"),
          S = n("3dfd");
        function I(t) {
          return (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function P(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function E(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, O(i.key), i);
          }
        }
        function O(t) {
          var e = (function (t, e) {
            if ("object" != I(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e || "default");
              if ("object" != I(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" == I(e) ? e : e + "";
        }
        var x = (function (t, e, n) {
          return (
            e && E(t.prototype, e),
            n && E(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.propertyId,
              i = e.widgetId,
              r = e.callback,
              o = e.TawkWindow;
            P(this, t),
              (this.propertyId = n || window.$_Tawk_AccountKey),
              (this.widgetId = i || window.$_Tawk_WidgetId),
              (this.callback = r || function () {}),
              (this.TawkWindow = o || {});
          },
          [
            {
              key: "updateConfig",
              value: function (t) {
                (this.propertyId = t.propertyId), (this.widgetId = t.widgetId);
              },
            },
            {
              key: "init",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.visitor,
                  f = void 0 === n ? void 0 : n;
                if (void 0 === window.$_Tawk.downloaded) {
                  if (
                    ((window.$_Tawk.downloaded = !0),
                    void 0 !== window.Prototype &&
                      "string" == typeof window.Prototype.Version &&
                      parseFloat(window.Prototype.Version.substr(0, 3), 10) <
                        1.7 &&
                      void 0 !== Array.prototype.toJSON)
                  ) {
                    var v = JSON.stringify;
                    JSON.stringify = function (t) {
                      var e = Array.prototype.toJSON;
                      delete Array.prototype.toJSON;
                      var n = v(t);
                      return (Array.prototype.toJSON = e), n;
                    };
                  }
                  (t.$_Tawk.startTime = new Date().getTime().toString()),
                    (t.$_Tawk.loaded = !1),
                    (t.$_Tawk.connected = !1),
                    (t.$_Tawk.ready = !1),
                    (this.TawkWindow.register = new a.a({
                      store: b.a,
                      TawkWindow: this.TawkWindow,
                    })),
                    i.a.use(p.a, {}),
                    i.a.use(r.a, { TawkWindow: this.TawkWindow }),
                    i.a.use(o.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(s.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(c.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(u.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(l.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(d.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(h.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(g.a),
                    i.a.use(m.a, { store: b.a, TawkWindow: this.TawkWindow }),
                    i.a.use(k.a),
                    this.checkMetaContent(),
                    this.connect({ visitor: f });
                }
              },
            },
            {
              key: "checkMetaContent",
              value: function () {
                for (
                  var t,
                    e = {},
                    n = document.getElementsByTagName("meta"),
                    i = "",
                    r = [],
                    o = 0,
                    a = n.length;
                  o < a;
                  o++
                )
                  n[o].getAttribute("name") &&
                    "viewport" === n[o].getAttribute("name").toLowerCase() &&
                    (i = n[o].getAttribute("content") || "");
                for (
                  var s = 0,
                    c = (r = (i = i.replace(/ /g, "")).split(",")).length;
                  s < c;
                  s++
                )
                  e[(t = r[s].split("="))[0]] = t[1];
                var u = !(!e.width && !e.height),
                  l =
                    e["minimum-scale"] &&
                    e["maximum-scale"] &&
                    e["minimum-scale"] === e["maximum-scale"],
                  d =
                    e["initial-scale"] &&
                    e["maximum-scale"] &&
                    e["initial-scale"] === e["maximum-scale"];
                (this.TawkWindow.metaContent = i && i.length ? i : null),
                  (this.TawkWindow.hasNoScale =
                    "no" === e["user-scalable"] || "0" === e["user-scalable"]),
                  (this.TawkWindow.isMobileOptimizedWebsite = !!(
                    (l && (u || this.TawkWindow.hasNoScale)) ||
                    d
                  ));
              },
            },
            {
              key: "connect",
              value: function () {
                var t,
                  e = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = n.visitor,
                  r = void 0 === i ? void 0 : i;
                if (
                  (b.a.dispatch("reset"),
                  b.a.dispatch("property/updateId", this.propertyId),
                  b.a.dispatch("widget/updateId", this.widgetId),
                  window.Tawk_API &&
                    !1 ===
                      (null === (t = window.Tawk_API) || void 0 === t
                        ? void 0
                        : t.autoStart) &&
                    b.a.commit("widget/setVisibility", !1),
                  b.a.dispatch(
                    "property/updateIsTawkHostedPage",
                    "tawk.to" === window.location.host
                  ),
                  b.a.dispatch("router/addRoutes", T.a),
                  new f.a(b.a),
                  s.a.local_API.isWindowed)
                ) {
                  var a = y.a.parseQueryString();
                  b.a.dispatch("session/updateConnectionData", {
                    sk: a.$_tawk_sk,
                  }),
                    a.pop && b.a.commit("widget/setIsPopout", !0),
                    b.a.commit("widget/setIsWindowed", !0);
                }
                if (
                  (s.a.local_API.embedded &&
                    (b.a.commit("widget/setIsEmbedded", !0),
                    b.a.commit("browserData/setMobileBrowserName", null)),
                  window.top !== window)
                ) {
                  var c = !1;
                  try {
                    c = window.origin === window.top.origin;
                  } catch (t) {}
                  c || b.a.commit("widget/setIsIframe", !0);
                }
                s.a.triggerApiHandlers("onBeforeLoad"),
                  (this.TawkWindow.maximize = !1);
                var u = [
                  new Promise(function (t, e) {
                    o.a.getSettings(t, e);
                  }),
                ];
                (window.Tawk_API &&
                  !window.Tawk_API.autoStart &&
                  void 0 !== window.Tawk_API.autoStart) ||
                  u.push(
                    new Promise(function (t, n) {
                      e.TawkWindow.register.init(t, n, { visitor: r });
                    })
                  );
                try {
                  Object(w.a)(u).then(function (t) {
                    if (2 === t.length) {
                      if (
                        "fulfilled" === t[0].status &&
                        "fulfilled" === t[1].status
                      ) {
                        var n = (t[1].value || {}).data;
                        n && n.settingsVersion === t[0].value
                          ? (e.extractRegistrationData(t[1].value),
                            e.createUI(!0))
                          : (sessionStorage.setItem(
                              "tawk_sv",
                              n.settingsVersion
                            ),
                            (o.a.version = n.settingsVersion),
                            o.a.getSettings(
                              function () {
                                e.extractRegistrationData(t[1].value),
                                  e.createUI(!0),
                                  g.a.$emit("updateWidgetSettings");
                              },
                              function (t) {
                                console.error(t);
                              }
                            ));
                      }
                    } else "fulfilled" === t[0].status && e.createUI();
                  });
                } catch (t) {
                  console.error(t);
                }
              },
            },
            {
              key: "extractRegistrationData",
              value: function (t) {
                var e = t.data,
                  n = e.rcf && b.a.getters["widget/consentData"];
                if (
                  (b.a.dispatch("chat/updateVersion", e.cver || 0),
                  b.a.dispatch("session/updateConsentFlag", n),
                  "max" === e.cw && (this.TawkWindow.maximize = !0),
                  b.a.dispatch("session/updateConnectionData", e),
                  n ||
                    (h.a.storeSessionInformation(),
                    b.a.dispatch("visitor/updateUUID", e.uid),
                    b.a.dispatch("visitor/updateVisitorInformation", e),
                    e.dpt && b.a.dispatch("chat/updateDepartment", e.dpt)),
                  e.pcfs &&
                    b.a.dispatch("session/updatePrechatSubmitted", e.pcfs),
                  e.refs && e.refs.length)
                )
                  for (var i = 0; i < e.refs.length; i++) {
                    var r = e.refs[i];
                    b.a.commit("chat/setFormRefs", r);
                  }
                e.transfer &&
                  b.a.dispatch("chat/updateChatTransferData", {
                    transfer: e.transfer,
                    transferVersion: e.transferVer,
                  }),
                  b.a.dispatch("schedule/updateTimezone", e.wstz),
                  u.a && u.a.setup(),
                  b.a.dispatch("session/setPageStatus", {
                    data: e || { ast: "offline" },
                  }),
                  b.a.commit("session/setChatBubbleClosed", !!e.bblc),
                  b.a.commit("session/setLastMessageTimestamp", e.lmst),
                  b.a.commit("session/setWaitTime", e.ewt ? 1e3 * e.ewt : 6e4),
                  b.a.commit("chat/setHistoryMessages", e.c || []),
                  b.a.commit("chat/setChatId", e.chid),
                  b.a.dispatch("chat/setPreviousMessages"),
                  b.a.dispatch("session/updateToken", {
                    token: e.tkn,
                    expiry: e.tknExp,
                  }),
                  this.callback();
              },
            },
            {
              key: "createUI",
              value: function (t) {
                this.TawkWindow.app
                  ? g.a.$emit("resetState")
                  : (i.a.use(v.a),
                    (this.TawkWindow.app = new i.a({
                      render: function (t) {
                        return t(S.a);
                      },
                      store: b.a,
                    }).$mount())),
                  !b.a.getters["session/needConsent"] && t && m.a.connect(),
                  d.a.initActivityReset(),
                  !b.a.getters["browserData/mobileBrowserName"] &&
                    this.TawkWindow.maximize &&
                    b.a.commit("session/setChatWindowState", "max");
              },
            },
          ]
        );
      }.call(this, n("c8ba")));
    },
    "77b4": function (t, e, n) {
      "use strict";
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, s(i.key), i);
        }
      }
      function a(t, e, n) {
        return (
          (e = s(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function s(t) {
        var e = (function (t, e) {
          if ("object" != i(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == i(e) ? e : e + "";
      }
      n.d(e, "a", function () {
        return c;
      });
      var c = (function (t, e, n) {
        return (
          e && o(t.prototype, e),
          n && o(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          r(this, t),
            a(this, "browserIdentifier", [
              {
                string: navigator.userAgent,
                subString: "Edge",
                identity: "explorer",
                versionSearch: "Edge",
              },
              {
                string: navigator.userAgent,
                subString: "Trident/7.0",
                identity: "explorer",
                versionSearch: "rv",
              },
              {
                string: navigator.userAgent,
                subString: "(Opera|OPR)",
                identity: "opera",
                versionSearch: "Version",
              },
              {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "chrome",
                versionSearch: "Chrome",
              },
              {
                string: navigator.userAgent,
                subString: "Mobile Safari",
                identity: "android",
                versionSearch: "Version",
              },
              {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "firefox",
                versionSearch: "Firefox",
              },
              {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "explorer",
                versionSearch: "MSIE",
              },
              {
                string: navigator.userAgent,
                subString: "IEMobile",
                identity: "explorer",
                versionSearch: "IEMobile",
              },
              {
                string: navigator.userAgent,
                subString: "Safari",
                identity: "safari",
                versionSearch: "Version",
              },
              {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "mozilla",
                versionSearch: "rv",
              },
            ]),
            a(this, "osIdentifier", [
              {
                string: navigator.userAgent,
                subString: "Windows Phone",
                identity: "windows_phone",
              },
              {
                string: navigator.platform,
                subString: "Win",
                identity: "windows",
              },
              { string: navigator.platform, subString: "Mac", identity: "mac" },
              {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iphone",
              },
              {
                string: navigator.userAgent,
                subString: "Android",
                identity: "android",
              },
              {
                string: navigator.platform,
                subString: "Linux",
                identity: "linux",
              },
              {
                string: navigator.userAgent,
                subString: "iPad",
                identity: "ipad",
              },
            ]),
            a(this, "searchEngines", {
              google: "q",
              yahoo: "p",
              baidu: "wd",
              yandex: "text",
              bing: "q",
              soso: "w",
              ask: "q",
              aol: "q",
              sogou: "query",
              mywebsearch: "searchfor",
              youdao: "q",
              lycos: "q",
              infospace: "q",
              blekko: "q",
              info: "q",
              dogpile: "q",
              duckduckgo: "q",
              webcrawler: "q",
            }),
            a(this, "mobileBrowserIdentifier", {
              nokia: [
                /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/,
                /^(Nokia)/,
                /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/,
                /(NokiaBrowser)\/(\d+)\.(\d+)/,
                /(BrowserNG)\/(\d+)\.(\d+).(\d+)/,
                /(Series60)\/5\.0/,
                /(Series60)\/(\d+)\.(\d+)/,
                /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/,
                /(Nokia)[EN]?(\d+)/,
              ],
              blackberry: [
                /(BB10);/,
                /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/,
                /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/,
                /(Black[bB]erry)\s?(\d+)/,
              ],
              chrome: [
                /(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/,
                /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/,
                /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/,
              ],
              ie: [/(IEMobile)[ /](\d+)\.(\d+)/],
              firefox: [
                /Mobile.*(Firefox)\/(\d+)\.(\d+)/,
                /Tablet.*(Firefox)\/(\d+)\.(\d+)/,
              ],
              operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
              opera: [
                /(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/,
                /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/,
                /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/,
                /(Opera)\/(\d+)\.(\d+).+Opera Mobi/,
                /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/,
                /Opera Mobi/,
                /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/,
              ],
              safari: [
                /(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/,
              ],
              uc: [
                /(UCBrowser)[ /](\d+)\.(\d+)\.(\d+)/,
                /(UC Browser)[ /](\d+)\.(\d+)\.(\d+)/,
                /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/,
              ],
              "android2.3": [/(Android) 2\.3(?:[.-]([a-z0-9]+))?/],
              android2: [/(Android) 2\.(\d+)(?:[.-]([a-z0-9]+))?/],
              android: [
                /Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; WOWMobile (.+) Build/,
                /Android[- ][\d]+\.[\d]+-update1; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/,
                /Android[- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/,
                /Android[- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}-[A-Za-z]{0,2};(.+) Build/,
                /Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/,
                /Android[- ][\d]+\.[\d]+\.[\d]+; (.+) Build/,
                /Android[- ][\d]+\.[\d]+; (.+) Build/,
              ],
            }),
            a(this, "searchVersion", function (t, e) {
              var n = t.indexOf(e);
              if (-1 !== n) return parseFloat(t.substring(n + e.length + 1));
            }),
            a(this, "getMobileBrowser", function () {
              for (
                var t = !1,
                  e = navigator.userAgent,
                  n = Object.keys(this.mobileBrowserIdentifier),
                  i = 0;
                !t && i < n.length;

              ) {
                for (
                  var r = n[i], o = 0;
                  o < this.mobileBrowserIdentifier[r].length;
                  o++
                ) {
                  var a = this.mobileBrowserIdentifier[r][o];
                  if (e.match(a)) {
                    t = r;
                    break;
                  }
                }
                i++;
              }
              return t;
            }),
            a(this, "getHostname", function (t) {
              var e = new RegExp("^(?:f|ht)tp(?:s)?://([^/]+)", "im"),
                n = t.match(e);
              return null === n || !Array.isArray(n) || n.length < 2
                ? null
                : n[1]
                ? n[1].toString()
                : null;
            }),
            a(this, "getPlugins", function () {
              var t,
                e,
                n = [];
              for (t = 0, e = navigator.plugins.length; t < e; t++)
                navigator.plugins[t].name && n.push(navigator.plugins[t].name);
              return n;
            }),
            (this.store = e),
            this.init();
        },
        [
          {
            key: "init",
            value: function () {
              var t,
                e = "other",
                n = !1,
                i = this.searchString(this.browserIdentifier) || {};
              i.identity &&
                ((e = i.identity),
                (t = i.versionSearch || i.identity),
                "explorer" === e && (n = !0));
              var r =
                  this.searchVersion(navigator.userAgent, t) ||
                  this.searchVersion(navigator.appVersion, t) ||
                  "other",
                o = this.searchString(this.osIdentifier) || "other",
                a = this.getPlugins(),
                s = this.getMobileBrowser(),
                c = this.getReferredSearchEngine(),
                u = {
                  mp3: this.hasHtmlAudio("mp3"),
                  ogg: this.hasHtmlAudio("ogg"),
                  wav: this.hasHtmlAudio("wav"),
                };
              u.supported = u.mp3 || u.ogg || u.wav;
              var l = !n;
              this.store.dispatch("browserData/updateInitialData", {
                version: r,
                os: o,
                plugins: a,
                mobileBrowserName: s,
                html5audio: u,
                isIE: n,
                searchEngine: c,
                isWebRTCAvailable: l,
              });
            },
          },
          {
            key: "searchString",
            value: function (t) {
              var e, n;
              for (e = 0; e < t.length; e++)
                if (((n = t[e].string), new RegExp(t[e].subString).test(n)))
                  return t[e];
            },
          },
          {
            key: "getReferredSearchEngine",
            value: function () {
              var t,
                e,
                n = "";
              if (
                document.referrer &&
                (e = this.getHostname(document.referrer))
              )
                for (t in ((e = e.toLowerCase()), this.searchEngines))
                  if (e.indexOf(t) >= 0) {
                    var i = this.getQuerystring(
                      document.referrer,
                      this.searchEngines[t]
                    );
                    "blekko" === t &&
                      "" === i &&
                      (i = this.getQuerystring(
                        document.referrer.replace("/ws/", "/?q="),
                        "q"
                      )),
                      (n = t);
                    break;
                  }
              return n;
            },
          },
          {
            key: "getQuerystring",
            value: function (t, e) {
              e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
              var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
              return null === n || !Array.isArray(n) || n.length < 2
                ? null
                : n[1]
                ? unescape(n[1].replace(/\+/g, " "))
                : null;
            },
          },
          {
            key: "hasHtmlAudio",
            value: function (t) {
              var e = document.createElement("audio");
              try {
                if (
                  !e.canPlayType ||
                  "no" === e.canPlayType("audio/" + t) ||
                  "" === e.canPlayType("audio/" + t)
                )
                  return !1;
              } catch (t) {
                return !1;
              }
              return !0;
            },
          },
        ]
      );
    },
    "7f46": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return O;
      });
      var i = "&quot;",
        r = "&#39;",
        o = "&lt;",
        a = "&gt;",
        s = "&amp;",
        c = "&copy;",
        u = "&reg;",
        l = "&trade;",
        d = new RegExp("&", "g"),
        f = new RegExp('"', "g"),
        h = new RegExp("'", "g"),
        p = new RegExp("<", "g"),
        m = new RegExp(">", "g"),
        g = new RegExp("©", "gm"),
        v = new RegExp("®", "gm"),
        w = new RegExp("™", "gm"),
        y = new RegExp(i, "g"),
        b = new RegExp(r, "g"),
        k = new RegExp(o, "g"),
        T = new RegExp(a, "g"),
        S = new RegExp(s, "g"),
        I = new RegExp(c, "g"),
        P = new RegExp(u, "g"),
        E = new RegExp(l, "g"),
        O = {
          regTrim: /^\s+|\s+$/g,
          rawEncode: function (t) {
            return t
              ? t
                  .replace(d, s)
                  .replace(f, i)
                  .replace(h, r)
                  .replace(p, o)
                  .replace(m, a)
                  .replace(g, c)
                  .replace(v, u)
                  .replace(w, l)
              : t;
          },
          rawDecode: function (t) {
            return t
              ? t
                  .replace(y, '"')
                  .replace(b, "'")
                  .replace(k, "<")
                  .replace(T, ">")
                  .replace(S, "&")
                  .replace(I, "©")
                  .replace(P, "®")
                  .replace(E, "™")
              : t;
          },
          h: function (t) {
            var e = 0;
            if (0 === t.length) return e;
            for (var n = 0; n < t.length; n++) {
              (e = (e << 5) - e + t.charCodeAt(n)), (e &= e);
            }
            return e;
          },
          isString: function (t) {
            return void 0 !== t && "string" == typeof t;
          },
          hasPunctuation: function (t) {
            return t.match(
              /(?![\u0600-\u06FF\u0750-\u077F\u0590-\u05FF\u0900-\u097F\u4E00-\u9FFF\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF\u1100-\u11FF\u3130-\u318F\uA000-\uA48F\u2800-\u28FF])[^\w\s/-]+$/g
            );
          },
          trim: function (t) {
            return this.isString(t)
              ? String.prototype.trim
                ? t.trim().toString()
                : t.replace(this.regTrim, "")
              : null;
          },
          toLinkable: function (t) {
            for (
              var e,
                n,
                i,
                r = /\[([^)]+)\]/,
                o = /\(([^)]+)\)/,
                a =
                  /\[[^\]\\(\\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b|\btel:\+{0,1}\b){1}[^\]\\(\\)]+\)/i,
                s = "_blank",
                c = t;
              null !== (e = a.exec(c));

            )
              if (
                ((n = r.exec(e[0])),
                (i = o.exec(e[0]))[0].indexOf("(mailto:") || (s = "_top"),
                (c = c.replace(
                  n[0] + i[0],
                  '<a target="' +
                    s +
                    '" href="' +
                    i[1] +
                    '" class="link">' +
                    n[1] +
                    "</a>"
                )) === t)
              )
                return c;
            return c;
          },
          markdownToHtml: function (t) {
            return (
              (t = this.rawEncode(t)),
              (t = (t = (t = this.toLinkable(t)).replace(
                /(?!<a[^>]*>[^<])_(.*?)_(?![^<]*<\/a>)/gim,
                "<i>$1</i>"
              ))
                .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
                .replace(/\*(.*?)\*/gim, "<b>$1</b>"))
            );
          },
          removeHTMLTags: function (t) {
            return t.replace(/<br\/>|<br>/g, " ");
          },
          removeAnchorTags: function (t) {
            return t.replace(/<a\b[^>]*>([^<]+)<\/a>/gi, "$1");
          },
          cleanupCssValue: function (t) {
            return this.isString(t) ? t.replace(/(!important)|(;)/g, "") : t;
          },
          parseQueryString: function (t) {
            var e,
              n,
              i,
              r,
              o = {};
            for (
              e = 0,
                n = (r = (
                  t
                    ? t.replace(/(.*)\?/, "")
                    : window.location.search.substring(1)
                ).split("&")).length;
              e < n;
              e += 1
            )
              o[(i = r[e].split("="))[0]] = i[1];
            return o;
          },
          hasMarkdown: function (t) {
            var e = /\[.*?]\(https?:\/\/.*?\)/.test(t),
              n = /\*\*.*?\*\*/.test(t),
              i = /_.*?_/.test(t),
              r = /`.*?`/.test(t);
            return e || n || i || r;
          },
        };
    },
    "87dd": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var i = {
        data: function () {
          return {
            genericStyles: {
              "outline:": "none !important;",
              "visibility:": "visible !important;",
              "resize:": "none !important;",
              "box-shadow:": "none !important;",
              "overflow:": "visible !important;",
              "background:": "none !important;",
              "opacity:": "1 !important;",
              "filter:": "alpha(opacity=100) !important;",
              "-ms-filter:":
                "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important;",
              "-mz-opacity:": "1 !important;",
              "-khtml-opacity:": "1 !important;",
              "top:": "auto !important;",
              "right:": "auto !important;",
              "bottom:": "auto !important;",
              "left:": "auto !important;",
              "position:": "absolute !important;",
              "border:": "0 !important;",
              "min-height:": "auto !important;",
              "min-width:": "auto !important;",
              "max-height:": "none !important;",
              "max-width:": "none !important;",
              "padding:": "0 !important;",
              "margin:": "0 !important;",
              "-moz-transition-property:": "none !important;",
              "-webkit-transition-property:": "none !important;",
              "-o-transition-property:": "none !important;",
              "transition-property:": "none !important;",
              "transform:": "none !important;",
              "-webkit-transform:": "none !important;",
              "-ms-transform:": "none !important;",
              "width:": "auto !important;",
              "height:": "auto !important;",
              "display:": "block !important;",
              "z-index:": "auto !important;",
              "background-color:": "transparent !important;",
              "cursor:": "none !important;",
              "float:": "none !important;",
              "border-radius:": "unset !important;",
              "pointer-events:": "auto !important;",
              "clip:": "auto !important;",
              "color-scheme:": "light !important;",
            },
          };
        },
      };
    },
    "91ce": function (t, e, n) {
      "use strict";
      var i = 2147483647,
        r = /[^\x20-\x7E]/,
        o = /[\x2E\u3002\uFF0E\uFF61]/g,
        a = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        s = Math.floor,
        c = String.fromCharCode,
        u = {
          error: function (t) {
            throw new RangeError(a[t]);
          },
          map: function (t, e) {
            for (var n = t.length, i = []; n--; ) i[n] = e(t[n]);
            return i;
          },
          mapDomain: function (t, e) {
            var n = t.split("@"),
              i = "";
            n.length > 1 && ((i = n[0] + "@"), (t = n[1]));
            var r = (t = t.replace(o, ".")).split(".");
            return i + this.map(r, e).join(".");
          },
          ucs2decode: function (t) {
            for (var e, n, i = [], r = 0, o = t.length; r < o; )
              (e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < o
                ? 56320 == (64512 & (n = t.charCodeAt(r++)))
                  ? i.push(((1023 & e) << 10) + (1023 & n) + 65536)
                  : (i.push(e), r--)
                : i.push(e);
            return i;
          },
          digitToBasic: function (t, e) {
            return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
          },
          adapt: function (t, e, n) {
            var i = 0;
            for (t = n ? s(t / 700) : t >> 1, t += s(t / e); t > 455; i += 36)
              t = s(t / 35);
            return s(i + (36 * t) / (t + 38));
          },
          encode: function (t) {
            var e,
              n,
              r,
              o,
              a,
              u,
              l,
              d,
              f,
              h,
              p,
              m,
              g,
              v,
              w,
              y = [];
            for (
              m = (t = this.ucs2decode(t)).length,
                e = 128,
                n = 0,
                a = 72,
                u = 0;
              u < m;
              ++u
            )
              (p = t[u]) < 128 && y.push(c(p));
            for (r = o = y.length, o && y.push("-"); r < m; ) {
              for (l = i, u = 0; u < m; ++u)
                (p = t[u]) >= e && p < l && (l = p);
              for (
                l - e > s((i - n) / (g = r + 1)) && this.error("overflow"),
                  n += (l - e) * g,
                  e = l,
                  u = 0;
                u < m;
                ++u
              )
                if (
                  ((p = t[u]) < e && ++n > i && this.error("overflow"), p == e)
                ) {
                  for (
                    d = n, f = 36;
                    !(d < (h = f <= a ? 1 : f >= a + 26 ? 26 : f - a));
                    f += 36
                  )
                    (w = d - h),
                      (v = 36 - h),
                      y.push(c(this.digitToBasic(h + (w % v), 0))),
                      (d = s(w / v));
                  y.push(c(this.digitToBasic(d, 0))),
                    (a = this.adapt(n, g, r == o)),
                    (n = 0),
                    ++r;
                }
              ++n, ++e;
            }
            return y.join("");
          },
          toASCII: function (t) {
            return this.mapDomain(t, function (t) {
              return r.test(t) ? "xn--" + this.encode(t) : t;
            });
          },
        },
        l = (n("6fc0"), n("e1bd")),
        d = n("bdd0"),
        f = n("681d"),
        h = n("24ca");
      function p() {
        p = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, i) {
          var o = e && e.prototype instanceof w ? e : w,
            a = Object.create(o.prototype),
            s = new A(i || []);
          return r(a, "_invoke", { value: O(t, n, s) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          h = "executing",
          m = "completed",
          g = {};
        function w() {}
        function y() {}
        function b() {}
        var k = {};
        u(k, a, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          S = T && T(T(_([])));
        S && S !== n && i.call(S, a) && (k = S);
        var I = (b.prototype = w.prototype = Object.create(k));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(r, o, a, s) {
            var c = d(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && "object" == v(l) && i.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (t, i) {
              function r() {
                return new e(function (e, r) {
                  n(t, i, e, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function O(e, n, i) {
          var r = f;
          return function (o, a) {
            if (r === h) throw Error("Generator is already running");
            if (r === m) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = o, i.arg = a; ; ) {
              var s = i.delegate;
              if (s) {
                var c = x(s, i);
                if (c) {
                  if (c === g) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (r === f) throw ((r = m), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              r = h;
              var u = d(e, n, i);
              if ("normal" === u.type) {
                if (((r = i.done ? m : "suspendedYield"), u.arg === g))
                  continue;
                return { value: u.arg, done: i.done };
              }
              "throw" === u.type &&
                ((r = m), (i.method = "throw"), (i.arg = u.arg));
            }
          };
        }
        function x(e, n) {
          var i = n.method,
            r = e.iterator[i];
          if (r === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method"
                  )))),
              g
            );
          var o = d(r, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), g
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function _(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function n() {
                  for (; ++r < e.length; )
                    if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(v(e) + " is not iterable");
        }
        return (
          (y.prototype = b),
          r(I, "constructor", { value: b, configurable: !0 }),
          r(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = u(b, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(I)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, i, r, o) {
            void 0 === o && (o = Promise);
            var a = new E(l(t, n, i, r), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(I),
          u(I, c, "Generator"),
          u(I, a, function () {
            return this;
          }),
          u(I, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return (t.value = i), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = _),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(i, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = i),
                  r && ((n.method = "next"), (n.arg = t)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    u = i.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                g
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), L(n), g;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    L(n);
                  }
                  return r;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: _(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function m(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r);
      }
      function g(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = t.apply(e, n);
            function a(t) {
              m(o, i, r, a, s, "next", t);
            }
            function s(t) {
              m(o, i, r, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function w(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, y(i.key), i);
        }
      }
      function y(t) {
        var e = (function (t, e) {
          if ("object" != v(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != v(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == v(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && w(t.prototype, e),
          n && w(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.sessionInformation = null);
        },
        [
          {
            key: "install",
            value: function (t, e) {
              var n = e.store,
                i = e.TawkWindow;
              (t.prototype.$TawkSessionManager = this),
                (this.store = n),
                (this.TawkWindow = i);
            },
          },
          {
            key: "getSessionInformation",
            value: function () {
              var t,
                e = this.store.getters["property/id"];
              return (
                this.sessionInformation && (t = this.sessionInformation),
                f.a.localStore && (t = f.a.localStore().getItem("twk_" + e)),
                t || (t = f.a.cookieStore().getItem("Tawk_" + e)[0]),
                this.parseSessionInformation(t)
              );
            },
          },
          {
            key: "storeSessionInformation",
            value: function (t) {
              var e = this.store.getters["session/visitorSocketServer"],
                n = e || "",
                i = this.store.getters["session/needConsent"],
                r = this.store.getters["widget/consentData"];
              (e || t) &&
                ((t || (!i && r)) && (n += "::cf"),
                f.a
                  .localStore()
                  .setItem("twk_" + this.store.getters["property/id"], n) ||
                  f.a
                    .cookieStore()
                    .setItem(
                      "Tawk_" + this.store.getters["property/id"],
                      n,
                      !1
                    ),
                (this.sessionInformation = n));
            },
          },
          {
            key: "parseSessionInformation",
            value: function (t) {
              var e = [];
              return (
                t && (e = t.split("::")).length <= 1 && (e = t.split("||")), e
              );
            },
          },
          {
            key: "getUUID",
            value: function () {
              var t = this;
              return new Promise(function (e, n) {
                var i,
                  r,
                  o = t.store.getters["property/id"],
                  a = "twk_uuid_".concat(o);
                if (t.store.getters["widget/isPopout"])
                  t.getPopoutUUID(a)
                    .then(function (t) {
                      e(t);
                    })
                    .catch(function () {
                      n();
                    });
                else {
                  if (
                    (t.store.getters["widget/isWindowed"] ||
                      t.store.getters["property/isTawkHostedPage"]) &&
                    (r = f.a.localStore().getItem(a)) &&
                    r.length
                  )
                    try {
                      if ((r = JSON.parse(r)) && "object" === v(r)) return e(r);
                    } catch (t) {
                      console.error(t);
                    }
                  if (!r && (r = f.a.cookieStore().getItem(a)) && r.length)
                    try {
                      i = JSON.parse(decodeURIComponent(r[0]));
                    } catch (t) {
                      console.error(t);
                    }
                  i || (i = t.getDeprecatedUUID()), e(i);
                }
              });
            },
          },
          {
            key: "getPopoutUUID",
            value: function (t) {
              return new Promise(function (e, n) {
                var i,
                  r,
                  o = f.a.sessionStore().getItem(t);
                if (o && o.length)
                  try {
                    (r = JSON.parse(o)), e(r);
                  } catch (t) {
                    console.error(t), n();
                  }
                else
                  window.addEventListener(
                    "message",
                    function t(n) {
                      if (n.data && n.source === window.opener) {
                        if (
                          (window.removeEventListener("message", t, !1),
                          clearTimeout(i),
                          n.data.twkWidgetUUID)
                        )
                          return e({ uuid: n.data.twkWidgetUUID, version: 3 });
                        e({});
                      }
                    },
                    !1
                  ),
                    (i = setTimeout(function () {
                      n();
                    }, 1e4)),
                    window.opener.postMessage("getTwkWidgetUUID", "*");
              });
            },
          },
          {
            key: "getDeprecatedUUID",
            value: function () {
              var t,
                e,
                n = !1,
                i = 1 / 0,
                r = u.toASCII(window.location.hostname);
              "www." === r.substring(0, 4) && (r = r.replace("www.", ""));
              var o = f.a.cookieStore().getItem("__tawkuuid");
              if (o && o.length > 0)
                for (var a = 0; a < o.length; a++) {
                  var s = this.parseSessionInformation(o[a]);
                  if (4 === s.length) {
                    var c = s[0],
                      l = s[1],
                      d = s[2],
                      h = s[3];
                    if ("e" === c) {
                      if (r === l) {
                        (t = d), (e = h);
                        break;
                      }
                    } else if ("p" === c) {
                      var p = r.match(l);
                      p &&
                        r.substr(p.index) === l &&
                        p.index < i &&
                        ((i = p.index), (t = d), (e = h), (n = !0));
                    }
                  }
                }
              return t ? { uuid: t, version: e, isPartial: n } : {};
            },
          },
          {
            key: "getIdempotencyKey",
            value: (function () {
              var t = g(
                p().mark(function t() {
                  var e,
                    n = this;
                  return p().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              navigator.locks.request(
                                "idempotency_key",
                                g(
                                  p().mark(function t() {
                                    return p().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            e = n.generateIdempotencyKey();
                                          case 1:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                )
                              )
                            );
                          case 3:
                            return t.abrupt("return", e);
                          case 6:
                            return (
                              (t.prev = 6),
                              (t.t0 = t.catch(0)),
                              t.abrupt(
                                "return",
                                new Promise(function (t) {
                                  var i = 1 * Math.random() + 0.5;
                                  setTimeout(function () {
                                    (e = n.generateIdempotencyKey()), t(e);
                                  }, 1e3 * Math.round(i));
                                })
                              )
                            );
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "generateIdempotencyKey",
            value: function () {
              var t = f.a.cookieStore().getItem("twk_idm_key");
              return (
                t && t.length
                  ? (t = t[0])
                  : ((t = Object(l.a)()),
                    f.a.cookieStore().setItem("twk_idm_key", t, !0),
                    f.a.cookieStore().checkItemSaved("twk_idm_key")),
                t
              );
            },
          },
          {
            key: "storeUUID",
            value: function (t, e, n) {
              var i = this.store.getters["property/id"],
                r = "twk_uuid_".concat(i),
                o = new Date().getTime(),
                a = JSON.stringify({ uuid: t, version: e, domain: n, ts: o });
              if (this.store.getters["widget/isPopout"])
                f.a.sessionStore().setItem(r, a);
              else if (
                this.store.getters["widget/isWindowed"] ||
                this.store.getters["property/isTawkHostedPage"]
              )
                f.a.localStore().setItem(r, a);
              else {
                f.a
                  .cookieStore()
                  .setItem(r, encodeURIComponent(a), !1, n || void 0);
                try {
                  f.a.cookieStore().checkItemSaved(r);
                } catch (t) {
                  console.error(t);
                }
              }
            },
          },
          {
            key: "getStoredToken",
            value: function () {
              var t,
                e = this.store.getters["property/id"];
              return (
                (t = this.store.getters["widget/isPopout"]
                  ? f.a.sessionStore().getItem("twk_token_".concat(e))
                  : f.a.localStore().getItem("twk_token_".concat(e))) ||
                  (f.a.localStore().getItem("twk_token"),
                  f.a.localStore().deleteItem("twk_token")),
                t
              );
            },
          },
          {
            key: "storeToken",
            value: function (t) {
              var e = this.store.getters["property/id"],
                n = "twk_token_".concat(e);
              this.store.getters["widget/isPopout"]
                ? f.a.sessionStore().setItem(n, t)
                : f.a.localStore().setItem(n, t);
            },
          },
          {
            key: "reconnectSession",
            value: (function () {
              var t = g(
                p().mark(function t(e) {
                  return p().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e = e || function () {}),
                              (t.next = 3),
                              this.TawkWindow.criticalRefresh()
                            );
                          case 3:
                            e();
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "login",
            value: (function () {
              var t = g(
                p().mark(function t(e, n) {
                  var i,
                    r,
                    o,
                    a = this;
                  return p().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              this.store.dispatch("session/checkTokenValidity")
                            );
                          case 3:
                            t.next = 9;
                            break;
                          case 5:
                            return (
                              (t.prev = 5),
                              (t.t0 = t.catch(0)),
                              console.error("[JSAPI/Login]", t.t0),
                              t.abrupt("return")
                            );
                          case 9:
                            (i = "".concat(
                              "https://va.tawk.to",
                              "/v1/client/login"
                            )),
                              (r = this.getStoredToken()) &&
                                (o = { "X-Tawk-Token": r }),
                              d.a.post(
                                i,
                                e,
                                o,
                                function (t, e) {
                                  return t || (!t && !e)
                                    ? n(!0)
                                    : e.error
                                    ? n(e.error)
                                    : void a.reconnectSession(function () {
                                        n(), h.a.$emit("forceUpdate");
                                      });
                                },
                                !0,
                                !0
                              );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 5]]
                  );
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "logout",
            value: (function () {
              var t = g(
                p().mark(function t(e) {
                  var n,
                    i,
                    r,
                    o = this;
                  return p().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              this.store.dispatch("session/checkTokenValidity")
                            );
                          case 3:
                            t.next = 9;
                            break;
                          case 5:
                            return (
                              (t.prev = 5),
                              (t.t0 = t.catch(0)),
                              console.error("[JSAPI/Logout]", t.t0),
                              t.abrupt("return")
                            );
                          case 9:
                            (n = "".concat(
                              "https://va.tawk.to",
                              "/v1/client/logout"
                            )),
                              (i = this.getStoredToken()) &&
                                (r = { "X-Tawk-Token": i }),
                              d.a.post(
                                n,
                                {},
                                r,
                                function (t, n) {
                                  return t || (!t && !n)
                                    ? e(!0)
                                    : n.error
                                    ? e(n.error)
                                    : void o.reconnectSession(function () {
                                        e(), h.a.$emit("forceUpdate");
                                      });
                                },
                                !0,
                                !0
                              );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 5]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          },
        ]
      ))();
    },
    "99e1": function (t, e, n) {
      "use strict";
      (function (t) {
        var i = n("65b3");
        function r(t) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, a(i.key), i);
          }
        }
        function a(t) {
          var e = (function (t, e) {
            if ("object" != r(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e || "default");
              if ("object" != r(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" == r(e) ? e : e + "";
        }
        e.a = new ((function (t, e, n) {
          return (
            e && o(t.prototype, e),
            n && o(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          function t() {
            var e = this;
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.focusReconnectCalled = !1),
              (this.hasFocus = !1),
              (this.active = !1),
              (this.away = !1),
              (this.inactivityTimeout = null),
              (this.awayTimeout = null),
              (this.interval = null),
              (this.onActivityHandler = function () {
                e.TawkWindow &&
                  (e.away &&
                    window.$_Tawk.connected &&
                    i.a.publish("notifySocketStatusUpdate", "online"),
                  (e.active = !0),
                  (e.away = !1));
              }),
              (this.popupOnFocusHandler = function () {
                e.TawkWindow &&
                  (!window.$_Tawk.connected && i.a.isForcedDisconnect()
                    ? (e.store.commit("session/setIsInactive", !1),
                      e.TawkWindow.criticalRefresh())
                    : (e.hasFocus ||
                        ((e.active = !0),
                        (e.hasFocus = !0),
                        window.$_Tawk.connected &&
                          i.a.publish("popupOnFocus", !0)),
                      e.away &&
                        window.$_Tawk.connected &&
                        i.a.publish("notifySocketStatusUpdate", "online"),
                      (e.away = !1)));
              }),
              (this.popupOnBlurHandler = function () {
                e.TawkWindow &&
                  ((e.hasFocus = !1),
                  window.$_Tawk.connected && i.a.publish("popupOnFocus", !1));
              }),
              (this.reconnectOnActivity = function () {
                e.TawkWindow &&
                  !e.focusReconnectCalled &&
                  ((e.focusReconnectCalled = !0),
                  e.store.commit("session/setIsInactive", !1),
                  e.TawkWindow.criticalRefresh());
              }),
              (this.initActivityReset = function () {
                e.cleanUp(),
                  e.resetTimeout(),
                  e.setupListeners(),
                  e.setupMaxWidgetListeners(),
                  (e.interval = setInterval(function () {
                    e.active && (e.resetTimeout(), (e.active = !1));
                  }, 1e4));
              });
          },
          [
            {
              key: "install",
              value: function (t, e) {
                var n = e.store,
                  i = e.TawkWindow;
                (t.prototype.$TawkActivityMonitor = this),
                  (this.store = n),
                  (this.TawkWindow = i);
              },
            },
            {
              key: "resetTimeout",
              value: function () {
                var t = this;
                clearTimeout(this.inactivityTimeout),
                  clearTimeout(this.awayTimeout),
                  this.TawkWindow &&
                    !i.a.isForcedDisconnect() &&
                    ((this.awayTimeout = setTimeout(function () {
                      !t.away &&
                        t.TawkWindow &&
                        ((t.away = !0),
                        i.a &&
                          window.$_Tawk.connected &&
                          i.a.publish("notifySocketStatusUpdate", "away"));
                    }, 6e5)),
                    (this.inactivityTimeout = setTimeout(function () {
                      t.inactivityTimeoutHandler();
                    }, 12e5)));
              },
            },
            {
              key: "inactivityTimeoutHandler",
              value: function () {
                this.TawkWindow &&
                  (this.store.dispatch("chat/clearUnseenMessages"),
                  i.a.disconnectSocket(),
                  this.store.commit("session/setChatWindowState", "min"),
                  this.store.commit("session/setIsInactive", !0),
                  this.setupMaxWidgetListenersReconnect(),
                  this.store.getters["browserData/mobileBrowserName"]
                    ? (document.addEventListener(
                        "touchmove",
                        this.reconnectOnActivity,
                        { once: !0 }
                      ),
                      document.addEventListener(
                        "touchend",
                        this.reconnectOnActivity,
                        { once: !0 }
                      ),
                      document.addEventListener(
                        "keydown",
                        this.reconnectOnActivity,
                        { once: !0 }
                      ))
                    : (document.addEventListener(
                        "mousemove",
                        this.reconnectOnActivity,
                        { once: !0 }
                      ),
                      document.addEventListener(
                        "click",
                        this.reconnectOnActivity,
                        { once: !0 }
                      ),
                      document.addEventListener(
                        "keydown",
                        this.reconnectOnActivity,
                        { once: !0 }
                      ),
                      document.onfocusin
                        ? document.addEventListener(
                            "focusin",
                            this.reconnectOnActivity,
                            { once: !0 }
                          )
                        : window.addEventListener(
                            "focus",
                            this.reconnectOnActivity,
                            { once: !0 }
                          )));
              },
            },
            {
              key: "cleanUp",
              value: function () {
                clearInterval(this.interval),
                  clearTimeout(this.inactivityTimeout),
                  clearTimeout(this.awayTimeout),
                  document.removeEventListener(
                    "mousemove",
                    this.onActivityHandler
                  ),
                  document.removeEventListener("click", this.onActivityHandler),
                  document.removeEventListener(
                    "keydown",
                    this.onActivityHandler
                  ),
                  document.removeEventListener(
                    "click",
                    this.reconnectOnActivity,
                    { once: !0 }
                  ),
                  document.removeEventListener(
                    "keydown",
                    this.reconnectOnActivity,
                    { once: !0 }
                  ),
                  document.removeEventListener(
                    "focus",
                    this.reconnectOnActivity,
                    { once: !0 }
                  ),
                  document.removeEventListener(
                    "focusin",
                    this.popupOnFocusHandler
                  ),
                  document.removeEventListener(
                    "focusout",
                    this.popupOnBlurHandler
                  ),
                  window.removeEventListener("focus", this.popupOnFocusHandler),
                  window.removeEventListener("blur", this.popupOnBlurHandler),
                  t &&
                    this.TawkWindow &&
                    this.TawkWindow.maxWidget &&
                    this.TawkWindow.maxWidget.$el &&
                    this.TawkWindow.maxWidget.$el.contentDocument &&
                    (this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "mousemove",
                      this.onActivityHandler
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "click",
                      this.onActivityHandler
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "keydown",
                      this.onActivityHandler
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "touchmove",
                      this.onActivityHandler
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "touchend",
                      this.onActivityHandler
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "mousemove",
                      this.reconnectOnActivity,
                      { once: !0 }
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "click",
                      this.reconnectOnActivity,
                      { once: !0 }
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "keydown",
                      this.reconnectOnActivity,
                      { once: !0 }
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "touchmove",
                      this.reconnectOnActivity,
                      { once: !0 }
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.removeEventListener(
                      "touchend",
                      this.reconnectOnActivity,
                      { once: !0 }
                    )),
                  (this.hasFocus = !1),
                  (this.active = !1),
                  (this.away = !1),
                  (this.inactivityTimeout = null),
                  (this.awayTimeout = null),
                  (this.interval = null),
                  (this.focusReconnectCalled = !1);
              },
            },
            {
              key: "setupListeners",
              value: function () {
                this.store.getters["browserData/mobileBrowserName"]
                  ? (document.addEventListener(
                      "touchmove",
                      this.onActivityHandler
                    ),
                    document.addEventListener(
                      "touchend",
                      this.onActivityHandler
                    ),
                    document.addEventListener(
                      "keydown",
                      this.onActivityHandler
                    ))
                  : this.store.getters["widget/isWindowed"]
                  ? (document.onfocusin
                      ? (document.addEventListener(
                          "focusin",
                          this.popupOnFocusHandler
                        ),
                        document.addEventListener(
                          "focusout",
                          this.popupOnBlurHandler
                        ))
                      : (window.addEventListener(
                          "focus",
                          this.popupOnFocusHandler
                        ),
                        window.addEventListener(
                          "blur",
                          this.popupOnBlurHandler
                        )),
                    document.addEventListener(
                      "click",
                      this.popupOnFocusHandler
                    ),
                    document.addEventListener(
                      "keydown",
                      this.popupOnFocusHandler
                    ))
                  : (document.addEventListener(
                      "mousemove",
                      this.onActivityHandler
                    ),
                    document.addEventListener("click", this.onActivityHandler),
                    document.addEventListener(
                      "keydown",
                      this.onActivityHandler
                    ));
              },
            },
            {
              key: "setupMaxWidgetListeners",
              value: function () {
                t &&
                  this.TawkWindow &&
                  this.TawkWindow.maxWidget &&
                  this.TawkWindow.maxWidget.$el &&
                  this.TawkWindow.maxWidget.$el.contentDocument &&
                  (this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                    "mousemove",
                    this.onActivityHandler
                  ),
                  this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                    "click",
                    this.onActivityHandler
                  ),
                  this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                    "keydown",
                    this.onActivityHandler
                  ),
                  this.store.getters["browserData/mobileBrowserName"] &&
                    (this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                      "touchmove",
                      this.onActivityHandler
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                      "touchend",
                      this.onActivityHandler
                    )));
              },
            },
            {
              key: "setupMaxWidgetListenersReconnect",
              value: function () {
                t &&
                  this.TawkWindow &&
                  this.TawkWindow.maxWidget &&
                  this.TawkWindow.maxWidget.$el &&
                  this.TawkWindow.maxWidget.$el.contentDocument &&
                  (this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                    "mousemove",
                    this.reconnectOnActivity,
                    { once: !0 }
                  ),
                  this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                    "click",
                    this.reconnectOnActivity,
                    { once: !0 }
                  ),
                  this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                    "keydown",
                    this.reconnectOnActivity,
                    { once: !0 }
                  ),
                  this.store.getters["browserData/mobileBrowserName"] &&
                    (this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                      "touchmove",
                      this.reconnectOnActivity,
                      { once: !0 }
                    ),
                    this.TawkWindow.maxWidget.$el.contentDocument.addEventListener(
                      "touchend",
                      this.reconnectOnActivity,
                      { once: !0 }
                    )));
              },
            },
          ]
        ))();
      }.call(this, n("c8ba")));
    },
    "9a05": function (t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        namespaced: !0,
        state: { id: null, pageName: "", isTawkHostedPage: !1 },
        getters: {
          id: function (t) {
            return t.id;
          },
          isTawkHostedPage: function (t) {
            return t.isTawkHostedPage;
          },
        },
        actions: {
          updateId: function (t, e) {
            (0, t.commit)("setId", e);
          },
          updateIsTawkHostedPage: function (t, e) {
            (0, t.commit)("setIsTawkHostedPage", e);
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
        },
        mutations: {
          setId: function (t, e) {
            t.id = e;
          },
          setIsTawkHostedPage: function (t, e) {
            t.isTawkHostedPage = e;
          },
          unsetData: function (t) {
            for (
              var e = { id: null, pageName: "", isTawkHostedPage: !1 },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    "9b4f": function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          var i = n("7f46"),
            r = n("b7cc"),
            o = n("0ad2"),
            a = n("27c6"),
            s = n("028e"),
            c = n("65b3"),
            u = n("c7b8");
          e.default = {
            namespaced: !0,
            state: {
              agents: {},
              agentsCount: 0,
              activeProfiles: [],
              chat: {
                buffer: [],
                department: "any",
                endVersion: 1,
                history: [],
                id: null,
                order: 0,
                version: 0,
                unreadMessage: 0,
                synced: !1,
                messages: {},
                unseenMessages: [],
                historyProcessed: !1,
                endedChats: [],
                lastMessage: {},
              },
              allProfiles: {},
              rating: null,
              incomingMessage: null,
              calls: {},
              chatTransfer: { data: null, version: null },
              ongoingCall: !1,
              incomingCall: null,
              hasChatStarted: !1,
              messageBlocks: [],
              visitorHasMessaged: !1,
              agentHasMessaged: !1,
              hasChatEnded: !1,
              uploadFiles: [],
              lastScrollPositon: null,
              outgoingMessage: null,
              firstIncoming: !1,
              form: {
                refs: {},
                ticket: { id: null, hasSubmitted: !1 },
                lead: { id: null, hasSubmitted: !1 },
              },
            },
            getters: {
              activeProfiles: function (t) {
                return t.activeProfiles;
              },
              agents: function (t) {
                return t.agents;
              },
              agentsCount: function (t) {
                return t.agentsCount;
              },
              agentProfile: function (t) {
                return function (e) {
                  var n = t.agents[e];
                  return n && n.profileId ? t.allProfiles[n.profileId] : null;
                };
              },
              allProfiles: function (t) {
                return t.allProfiles;
              },
              chatOrder: function (t) {
                return t.chat.order;
              },
              chatVersion: function (t) {
                return t.chat.version;
              },
              incomingMessage: function (t) {
                return t.incomingMessage;
              },
              profiles: function (t) {
                return t.profiles;
              },
              rating: function (t) {
                return t.rating;
              },
              chatMessages: function (t) {
                return t.chat.messages;
              },
              unreadMessageCount: function (t) {
                return t.chat.unreadMessage;
              },
              incomingCall: function (t) {
                return t.incomingCall;
              },
              callData: function (t) {
                return function (e) {
                  return t.calls[e];
                };
              },
              chatTransferData: function (t) {
                return t.chatTransfer.data;
              },
              calls: function (t) {
                return t.calls;
              },
              hasChatStarted: function (t) {
                return t.hasChatStarted;
              },
              visitorHasMessaged: function (t) {
                return t.visitorHasMessaged;
              },
              agentHasMessaged: function (t) {
                return t.agentHasMessaged;
              },
              chatEndVersion: function (t) {
                return t.chat.endVersion;
              },
              hasChatEnded: function (t) {
                return t.hasChatEnded;
              },
              uploadFiles: function (t) {
                return t.uploadFiles;
              },
              lastScrollPositon: function (t) {
                return t.lastScrollPositon;
              },
              outgoingMessage: function (t) {
                return t.outgoingMessage;
              },
              historyProcessed: function (t) {
                return t.chat.historyProcessed;
              },
              isChatOngoing: function (t) {
                return (
                  !t.hasChatEnded && t.visitorHasMessaged && t.agentsCount > 0
                );
              },
              isVisitorEngaged: function (t) {
                return !t.hasChatEnded && t.visitorHasMessaged;
              },
              messageBlocks: function (t) {
                return t.messageBlocks;
              },
              endedChats: function (t) {
                return t.chat.endedChats;
              },
              lastMessage: function (t) {
                return t.chat.lastMessage;
              },
              firstIncoming: function (t) {
                return t.firstIncoming;
              },
              ongoingCall: function (t) {
                return t.ongoingCall;
              },
              formRefs: function (t) {
                return t.form.refs;
              },
              formTicket: function (t) {
                return t.form.ticket;
              },
              formLead: function (t) {
                return t.form.lead;
              },
            },
            actions: {
              updateConversation: function (t, e) {
                var n = t.dispatch,
                  i = t.state,
                  r = t.getters,
                  a = t.commit,
                  c = (e = e || {}).cver || 0,
                  u = e.c || [];
                if (((i.chat.synced = !0), !(i.chat.version >= c))) {
                  for (var l = 0, d = i.chat.buffer.length; l < d; l++)
                    i.chat.buffer[l].cver > c && u.push(i.chat.buffer[l]);
                  for (
                    var f = function () {
                        var t = u[h];
                        if (!t.md || !t.md.ao) {
                          var i = s.a.parseChatMessage(t, !0);
                          i &&
                            setTimeout(function () {
                              o.a.playSound(),
                                a("setIncomingMessage", i),
                                a("setVersion", e.cver),
                                n("updateChatMessage", i);
                            }, 50);
                        }
                      },
                      h = 0,
                      p = u.length;
                    h < p;
                    h++
                  )
                    f();
                  i.visitorHasMessaged &&
                    !i.agentHasMessaged &&
                    r["widget/showEstimatedWaitTime"] &&
                    n("session/addWaitTime", {}, { root: !0 }),
                    (i.chat.version = c);
                }
              },
              updateAgentCount: function (t, e) {
                t.state.agentsCount += e;
              },
              updateVersion: function (t, e) {
                (0, t.commit)("setVersion", e);
              },
              updateDepartment: function (t, e) {
                (0, t.commit)("setDepartment", e);
              },
              incomingChatMessage: function (t, e) {
                var n = t.commit,
                  i = t.state,
                  r = t.dispatch;
                if ("offline" === t.rootGetters["session/pageStatus"]) {
                  if ("a" !== e.ut) return;
                  r(
                    "session/setPageStatus",
                    { status: "online" },
                    { root: !0 }
                  );
                }
                if (e.cver > i.chat.version) {
                  if (e.md && e.md.ao) return void n("setVersion", e.cver);
                  var a = s.a.parseChatMessage(e, !0);
                  a &&
                    (o.a.playSound(),
                    n("setIncomingMessage", a),
                    n("setVersion", e.cver),
                    r("updateChatMessage", a));
                }
              },
              outgoingChatMessage: function (t, e) {
                var n = t.commit,
                  i = t.state,
                  r = t.dispatch;
                e &&
                  e.cver > i.chat.version &&
                  (n("setVersion", e.cver), r("updateChatMessage", e));
              },
              agentJoined: function (t, e) {
                for (
                  var n,
                    i = t.state,
                    r = t.commit,
                    o = t.dispatch,
                    a = i.allProfiles[e.profileData.profileId],
                    s = 0;
                  s < i.activeProfiles.length;
                  s++
                )
                  if (
                    i.activeProfiles[s].profileId === e.profileData.profileId
                  ) {
                    n = i.activeProfiles[s];
                    break;
                  }
                n
                  ? (n.count++,
                    n.profileImage !== e.profileData.profileImage &&
                      ((n.profileImage = e.profileData.profileImage),
                      a && (a.profileImage = e.profileData.profileImage)))
                  : i.activeProfiles.push(e.profileData),
                  a || (i.allProfiles[e.profileData.profileId] = e.profileData),
                  r("setAgent", e),
                  o("updateAgentCount", 1);
              },
              agentLeft: function (t, e) {
                var n = t.state,
                  i = t.commit,
                  r = t.dispatch,
                  o = t.getters.agentProfile(e.resourceId);
                if (o && o.profileId) {
                  for (var a = 1, s = 0; s < n.activeProfiles.length; s++)
                    if (n.activeProfiles[s].profileId === o.profileId) {
                      var c = n.activeProfiles[s];
                      (a = c.count),
                        --a < 1 ? n.activeProfiles.splice(s, 1) : (c.count = a);
                      break;
                    }
                  (e.agentData.pid = o.profileId),
                    i("setAgent", e),
                    r("updateAgentCount", -1);
                }
              },
              setPreviousMessages: function (t) {
                var e,
                  n,
                  i,
                  r,
                  o,
                  a = t.state,
                  c = t.commit,
                  u = t.rootGetters,
                  l = t.dispatch,
                  d = 0,
                  f = a.chat.history,
                  h = 0;
                for (a.chat.endVersion = 0, e = 0, n = f.length; e < n; e++)
                  "CHAT_ENDED" === f[e].m &&
                    (l("processEndedChat", f.slice(h, e + 1)),
                    (d = e + 1),
                    (a.chat.endVersion += 1),
                    (h = e));
                r = a.chat.order > 0 ? a.chat.messages[a.chat.order] : null;
                var p = function () {
                  if (!(i = f[e]).md || (i.md && !i.md.ao)) {
                    if (r && r.timeStamp >= new Date(i.co).getTime()) return 1;
                    "v" !== i.ut ||
                      a.visitorHasMessaged ||
                      "c" !== i.t ||
                      (o = new Date().getTime() - new Date(i.co).getTime());
                    var t = s.a.parseChatMessage(i);
                    t &&
                      (setTimeout(function () {
                        c("setIncomingMessage", t);
                      }),
                      l("updateChatMessage", t));
                  }
                };
                for (e = d, n = f.length; e < n; e++) p();
                a.visitorHasMessaged &&
                  !a.agentHasMessaged &&
                  u["widget/showEstimatedWaitTime"] &&
                  (u["session/waitTime"] < o
                    ? c("session/setWaitTime", 6e4, { root: !0 })
                    : c("session/setWaitTime", u["session/waitTime"] - o, {
                        root: !0,
                      }),
                  l("session/addWaitTime", {}, { root: !0 })),
                  (a.hasChatStarted =
                    a.visitorHasMessaged || a.agentHasMessaged),
                  (a.hasChatEnded = !!a.chat.endVersion && !a.hasChatStarted),
                  c("setHistoryProcessed", !0);
              },
              updateUnseenMessages: function (t, e) {
                var n = t.state;
                n.chat.unseenMessages.push(e), (n.chat.unreadMessage += 1);
              },
              clearUnseenMessages: function (t) {
                var e = t.state;
                (e.chat.unseenMessages = []), (e.chat.unreadMessage = 0);
              },
              clearProfiles: function (t) {
                var e = t.state;
                (e.activeProfiles = []),
                  (e.allProfiles = {}),
                  (e.agents = {}),
                  (e.agentsCount = 0);
              },
              endChat: function (t, e) {
                var n = t.state,
                  i = t.commit,
                  o = t.dispatch,
                  a = t.rootGetters;
                (e = e || function () {}),
                  c.a.publish("endVisitorChat", function (t, s) {
                    if (t) e(!0);
                    else {
                      for (
                        var c = Object.keys(n.chat.messages), u = [], l = 0;
                        l < c.length;
                        l++
                      ) {
                        var d = c[l];
                        u.push(n.chat.messages[d].rawMessage);
                      }
                      u.push({ m: "CHAT_ENDED", t: "n", co: new Date() }),
                        (n.chat.endVersion = s.chatEndVersion),
                        (n.chat.messages = {}),
                        (n.hasChatStarted = !1),
                        (n.hasChatEnded = !0),
                        (n.chat.order = 0),
                        o("processEndedChat", u),
                        i("setChatId", s.nextChatId),
                        o("clearProfiles"),
                        a["widget/isEmbedded"] ||
                          o("session/toggleWidget", "", { root: !0 }),
                        o("clearMessageBlock"),
                        r.a.triggerApiHandlers("onChatEnded"),
                        e();
                    }
                  });
              },
              resetState: function (t) {
                (0, t.commit)("unsetData");
              },
              updateCallData: function (t, e) {
                var n = t.state;
                for (var i in ((n.calls[e.callId] = e), n.chat.messages))
                  if (n.chat.messages[i].callId === e.callId) {
                    n.chat.messages[i].callData = e;
                    break;
                  }
              },
              updateChatTransferData: function (t, e) {
                var n = t.commit,
                  i = t.state,
                  r = e.transfer,
                  o = e.transferVersion;
                o > i.chatTransfer.version &&
                  (n("setChatTransferData", r), n("setChatTransferVersion", o));
              },
              updateRatingMessage: function (t, e) {
                var n = t.commit,
                  i = t.state;
                e &&
                  (n("incrementChatOrder"),
                  (i.chat.messages[i.chat.order] = e));
              },
              addMessageBlock: function (t, e) {
                (0, t.commit)("pushMessageBlock", e);
              },
              clearMessageBlock: function (t) {
                (0, t.commit)("unsetMessageBlock");
              },
              updateChatMessage: function (e, n) {
                var i = e.commit,
                  o = e.state,
                  s = e.rootGetters;
                i("incrementChatOrder"),
                  (o.chat.messages[o.chat.order] = n),
                  ("c" === n.type || n.callData) && i("setLastMessage", n),
                  "c" === n.type &&
                    "s" !== n.senderType &&
                    !o.hasChatStarted &&
                    s["schedule/isEnabled"] &&
                    a.a.hasScheduleToday() &&
                    a.a.hasCurrentTimePassedSchedule() &&
                    "603e2c2c1c1c2a130d63fd5a" === s["property/id"] &&
                    u.a.reportError({
                      incident: "Sending chat message while offline",
                      data: {
                        currentTime: new Date(),
                        timezone: new Date().getTimezoneOffset(),
                        userAgent: t.navigator.userAgent,
                      },
                      state: {
                        schedule: {
                          isEnabled: s["schedule/isEnabled"],
                          slots: s["schedule/slots"],
                          timeZone: s["schedule/timezone"],
                        },
                        session: { pageStatus: s["session/pageStatus"] },
                        widget: { id: s["widget/id"] },
                        visitor: { id: s["visitor/id"] },
                      },
                    }),
                  "c" !== n.type ||
                    "s" === n.senderType ||
                    o.hasChatStarted ||
                    "offline" === s["session/pageStatus"] ||
                    (i("setChatHasStarted", !0),
                    r.a.triggerApiHandlers("onChatStarted", {
                      chatId: o.chat.id,
                    }));
              },
              processEndedChat: function (t, e) {
                for (
                  var n, r, o = t.state, a = [], s = [], c = o.chat.id, u = 0;
                  u < e.length;
                  u++
                ) {
                  var l = e[u];
                  "c" !== l.t
                    ? "n" === l.t && "AGENT_JOIN_CONVERSATION" === l.m && l.md
                      ? (a.push({
                          displayName: i.a.rawDecode(l.n),
                          profileId: l.md.pid,
                          profileImage: l.md.pi,
                          profileTitle: i.a.rawDecode(l.md.pst),
                        }),
                        -1 === s.indexOf(l.uid) && s.push(l.uid))
                      : "CHAT_ENDED" === l.m && (n = l.co)
                    : (r = l.m);
                }
                o.chat.endedChats.unshift({
                  id: c + o.chat.endedChats.length,
                  agentAliases: a,
                  agentIds: s,
                  snippet: r,
                  messages: e,
                  endedOn: n,
                  isTemp: !0,
                });
              },
              updateOngoingCall: function (t, e) {
                (0, t.commit)("setOngoingCall", e);
              },
              setTicketFormID: function (t, e) {
                (0, t.commit)("updateTicketFormID", e);
              },
              setLeadFormID: function (t, e) {
                (0, t.commit)("updateLeadFormID", e);
              },
              setSeenAllUnseenMessages: function (t) {
                var e = t.state,
                  n = t.dispatch;
                if (e.chat.unseenMessages.length > 0) {
                  var i = Object.keys(e.chat.messages).length,
                    o = e.chat.messages[i];
                  o &&
                    o.timeStamp &&
                    (n("session/updateVisitorChatSeen", o.timeStamp, {
                      root: !0,
                    }),
                    n("clearUnseenMessages"),
                    r.a.triggerApiHandlers(
                      "onUnreadCountChanged",
                      e.chat.unreadMessageCount
                    ));
                }
              },
            },
            mutations: {
              setVersion: function (t, e) {
                t.chat.version = e;
              },
              setDepartment: function (t, e) {
                t.chat.department = e;
              },
              setIncomingMessage: function (t, e) {
                (t.incomingMessage = e),
                  (t.firstIncoming = !1),
                  0 !== Object.keys(t.chat.lastMessage).length ||
                    t.firstIncoming ||
                    (t.firstIncoming = !0);
              },
              incrementChatOrder: function (t) {
                t.chat.order += 1;
              },
              setRating: function (t, e) {
                t.rating = e;
              },
              setAgent: function (t, e) {
                t.agents[e.resourceId] = {
                  profileId: e.agentData.pid,
                  seq: e.agentData.seq,
                };
              },
              setChatId: function (t, e) {
                t.chat.id = e;
              },
              setIncomingCall: function (t, e) {
                t.incomingCall = e;
              },
              setChatTransferData: function (t, e) {
                t.chatTransfer.data = e;
              },
              setChatTransferVersion: function (t, e) {
                t.chatTransfer.version = e;
              },
              setChatHasStarted: function (t, e) {
                (t.hasChatStarted = e), (t.hasChatEnded = !e);
              },
              setVisitorHasMessaged: function (t, e) {
                t.visitorHasMessaged = e;
              },
              setAgentHasMessaged: function (t, e) {
                t.agentHasMessaged = e;
              },
              setHistoryMessages: function (t, e) {
                t.chat.history = e;
              },
              addFileUpload: function (t, e) {
                t.uploadFiles.push(e);
              },
              removeFileUpload: function (t, e) {
                var n = t.uploadFiles.findIndex(function (t) {
                  return t.uuid === e;
                });
                -1 !== n && t.uploadFiles.splice(n, 1);
              },
              setLastScrollPosition: function (t, e) {
                t.lastScrollPositon = e;
              },
              setOutgoingMessage: function (t, e) {
                t.outgoingMessage = e;
              },
              setHistoryProcessed: function (t, e) {
                t.chat.historyProcessed = e;
              },
              unsetData: function (t) {
                for (
                  var e = {
                      agents: {},
                      agentsCount: 0,
                      activeProfiles: [],
                      chat: {
                        buffer: [],
                        department: "any",
                        endVersion: 1,
                        history: [],
                        id: null,
                        order: 0,
                        version: 0,
                        unreadMessage: 0,
                        synced: !1,
                        messages: {},
                        unseenMessages: [],
                        historyProcessed: !1,
                        endedChats: [],
                        lastMessage: {},
                      },
                      allProfiles: {},
                      rating: null,
                      incomingMessage: null,
                      calls: {},
                      chatTransfer: { data: null, version: null },
                      ongoingCall: !1,
                      incomingCall: null,
                      hasChatStarted: !1,
                      messageBlocks: [],
                      visitorHasMessaged: !1,
                      agentHasMessaged: !1,
                      hasChatEnded: !1,
                      uploadFiles: [],
                      lastScrollPositon: null,
                      outgoingMessage: null,
                      firstIncoming: !1,
                      form: {
                        refs: {},
                        ticket: { id: null, hasSubmitted: !1 },
                        lead: { id: null, hasSubmitted: !1 },
                      },
                    },
                    n = Object.keys(e),
                    i = 0;
                  i < n.length;
                  i++
                ) {
                  var r = n[i];
                  t[r] = e[r];
                }
              },
              pushMessageBlock: function (t, e) {
                t.messageBlocks.push(e);
              },
              unsetMessageBlock: function (t) {
                t.messageBlocks = [];
              },
              setLastMessage: function (t, e) {
                t.chat.lastMessage = e;
              },
              setOngoingCall: function (t, e) {
                t.ongoingCall = e;
              },
              setFormRefs: function (t, e) {
                t.form.refs[e.id] = e.done;
              },
              setTicketFormSubmit: function (t, e) {
                t.form.ticket.hasSubmitted = e;
              },
              updateTicketFormID: function (t, e) {
                t.form.ticket.id = e;
              },
              setLeadFormSubmit: function (t, e) {
                t.form.lead.hasSubmitted = e;
              },
              updateLeadFormID: function (t, e) {
                t.form.lead.id = e;
              },
            },
          };
        }.call(this, n("c8ba"));
    },
    "9be8": function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return p;
        });
        var i = n("bdd0"),
          r = n("fad2"),
          o = n("b7cc"),
          a = n("681d"),
          s = n("91ce");
        function c(t) {
          return (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function u() {
          u = function () {
            return e;
          };
          var t,
            e = {},
            n = Object.prototype,
            i = n.hasOwnProperty,
            r =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";
          function d(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            d({}, "");
          } catch (t) {
            d = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function f(t, e, n, i) {
            var o = e && e.prototype instanceof w ? e : w,
              a = Object.create(o.prototype),
              s = new A(i || []);
            return r(a, "_invoke", { value: O(t, n, s) }), a;
          }
          function h(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            m = "executing",
            g = "completed",
            v = {};
          function w() {}
          function y() {}
          function b() {}
          var k = {};
          d(k, a, function () {
            return this;
          });
          var T = Object.getPrototypeOf,
            S = T && T(T(_([])));
          S && S !== n && i.call(S, a) && (k = S);
          var I = (b.prototype = w.prototype = Object.create(k));
          function P(t) {
            ["next", "throw", "return"].forEach(function (e) {
              d(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function E(t, e) {
            function n(r, o, a, s) {
              var u = h(t[r], t, o);
              if ("throw" !== u.type) {
                var l = u.arg,
                  d = l.value;
                return d && "object" == c(d) && i.call(d, "__await")
                  ? e.resolve(d.__await).then(
                      function (t) {
                        n("next", t, a, s);
                      },
                      function (t) {
                        n("throw", t, a, s);
                      }
                    )
                  : e.resolve(d).then(
                      function (t) {
                        (l.value = t), a(l);
                      },
                      function (t) {
                        return n("throw", t, a, s);
                      }
                    );
              }
              s(u.arg);
            }
            var o;
            r(this, "_invoke", {
              value: function (t, i) {
                function r() {
                  return new e(function (e, r) {
                    n(t, i, e, r);
                  });
                }
                return (o = o ? o.then(r, r) : r());
              },
            });
          }
          function O(e, n, i) {
            var r = p;
            return function (o, a) {
              if (r === m) throw Error("Generator is already running");
              if (r === g) {
                if ("throw" === o) throw a;
                return { value: t, done: !0 };
              }
              for (i.method = o, i.arg = a; ; ) {
                var s = i.delegate;
                if (s) {
                  var c = x(s, i);
                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }
                if ("next" === i.method) i.sent = i._sent = i.arg;
                else if ("throw" === i.method) {
                  if (r === p) throw ((r = g), i.arg);
                  i.dispatchException(i.arg);
                } else "return" === i.method && i.abrupt("return", i.arg);
                r = m;
                var u = h(e, n, i);
                if ("normal" === u.type) {
                  if (((r = i.done ? g : "suspendedYield"), u.arg === v))
                    continue;
                  return { value: u.arg, done: i.done };
                }
                "throw" === u.type &&
                  ((r = g), (i.method = "throw"), (i.arg = u.arg));
              }
            };
          }
          function x(e, n) {
            var i = n.method,
              r = e.iterator[i];
            if (r === t)
              return (
                (n.delegate = null),
                ("throw" === i &&
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  x(e, n),
                  "throw" === n.method)) ||
                  ("return" !== i &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + i + "' method"
                    )))),
                v
              );
            var o = h(r, e.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  v)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function C(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function A(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(C, this),
              this.reset(!0);
          }
          function _(e) {
            if (e || "" === e) {
              var n = e[a];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  o = function n() {
                    for (; ++r < e.length; )
                      if (i.call(e, r))
                        return (n.value = e[r]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(c(e) + " is not iterable");
          }
          return (
            (y.prototype = b),
            r(I, "constructor", { value: b, configurable: !0 }),
            r(b, "constructor", { value: y, configurable: !0 }),
            (y.displayName = d(b, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === y || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, b)
                  : ((t.__proto__ = b), d(t, l, "GeneratorFunction")),
                (t.prototype = Object.create(I)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            P(E.prototype),
            d(E.prototype, s, function () {
              return this;
            }),
            (e.AsyncIterator = E),
            (e.async = function (t, n, i, r, o) {
              void 0 === o && (o = Promise);
              var a = new E(f(t, n, i, r), o);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            P(I),
            d(I, l, "Generator"),
            d(I, a, function () {
              return this;
            }),
            d(I, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var i in e) n.push(i);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var i = n.pop();
                    if (i in e) return (t.value = i), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = _),
            (A.prototype = {
              constructor: A,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(L),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      i.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function r(i, r) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (n.next = i),
                    r && ((n.method = "next"), (n.arg = t)),
                    !!r
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ("root" === a.tryLoc) return r("end");
                  if (a.tryLoc <= this.prev) {
                    var c = i.call(a, "catchLoc"),
                      u = i.call(a, "finallyLoc");
                    if (c && u) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    i.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var o = r;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  v
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), L(n), v;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var i = n.completion;
                    if ("throw" === i.type) {
                      var r = i.arg;
                      L(n);
                    }
                    return r;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (e, n, i) {
                return (
                  (this.delegate = {
                    iterator: _(e),
                    resultName: n,
                    nextLoc: i,
                  }),
                  "next" === this.method && (this.arg = t),
                  v
                );
              },
            }),
            e
          );
        }
        function l(t, e, n, i, r, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void n(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(i, r);
        }
        function d(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, r) {
              var o = t.apply(e, n);
              function a(t) {
                l(o, i, r, a, s, "next", t);
              }
              function s(t) {
                l(o, i, r, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function f(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, h(i.key), i);
          }
        }
        function h(t) {
          var e = (function (t, e) {
            if ("object" != c(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e || "default");
              if ("object" != c(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" == c(e) ? e : e + "";
        }
        var p = (function (t, e, n) {
          return (
            e && f(t.prototype, e),
            n && f(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          function t(e) {
            var n = e.store,
              i = e.TawkWindow;
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.store = n),
              (this.TawkWindow = i),
              (this.registerTime = 0),
              (this.maxRetrycount = 3),
              (this.retryCount = 0),
              (this.previousRegisterCall = null),
              (this.requestCancelTimeout = null),
              (this.connectionCookieInterval = null),
              (this.registerDelayTimeout = null),
              (this.registerData = null),
              (this.registerStarted = !1),
              (this.retryDelay = null),
              (this.retryInitialDelay = 30),
              (this.retryMultiplier = 1.5),
              (this.minRandom = 0.5),
              (this.maxRandom = 1.5),
              (this.maxDelay = 120),
              (this.retryRegisterTimeout = null);
          },
          [
            {
              key: "clearTimers",
              value: function () {
                this.abort(),
                  clearTimeout(this.requestCancelTimeout),
                  clearTimeout(this.registerDelayTimeout),
                  clearTimeout(this.retryRegisterTimeout),
                  clearInterval(this.connectionCookieInterval),
                  t &&
                    this.TawkWindow &&
                    a.a &&
                    a.a.cookieStore().setItem("TawkConnectionTime", 0, !0),
                  (this.retryRegisterTimeout = null),
                  (this.registerDelayTimeout = null),
                  (this.requestCancelTimeout = null),
                  (this.connectionCookieInterval = null);
              },
            },
            {
              key: "init",
              value: (function () {
                var t = d(
                  u().mark(function t(e, n) {
                    var i,
                      r,
                      o,
                      a = arguments;
                    return u().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (i =
                                  a.length > 2 && void 0 !== a[2] ? a[2] : {}),
                                (r = i.visitor),
                                (o = void 0 === r ? void 0 : r),
                                (this.registerStarted = !0),
                                this.clearTimers(),
                                (t.next = 5),
                                this.prepareData({ visitor: o })
                              );
                            case 5:
                              if (
                                this.registerData.u ||
                                this.registerData.uik
                              ) {
                                t.next = 8;
                                break;
                              }
                              return this.clearTimers(), t.abrupt("return");
                            case 8:
                              this.startRegister(e, n);
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "prepareData",
              value: (function () {
                var t = d(
                  u().mark(function t() {
                    var e,
                      n,
                      i,
                      o,
                      a,
                      l,
                      d,
                      f,
                      h,
                      p,
                      m,
                      g,
                      v,
                      w,
                      y,
                      b = arguments;
                    return u().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n =
                                  b.length > 0 && void 0 !== b[0] ? b[0] : {}),
                                (i = n.visitor),
                                (o = void 0 === i ? void 0 : i),
                                (a = void 0),
                                this.TawkWindow)
                              ) {
                                t.next = 4;
                                break;
                              }
                              return t.abrupt("return");
                            case 4:
                              if (
                                ((l = ""),
                                (d = this.store.getters),
                                (f = s.a.getSessionInformation()).length &&
                                  (l = f[0]),
                                ((h = new Date().getTimezoneOffset()) < -900 ||
                                  h > 900) &&
                                  (h = 0),
                                !window.sessionStorage.getItem(
                                  "tawk_has_register_visitor"
                                ) &&
                                  null !== (e = window.Tawk_API) &&
                                  void 0 !== e &&
                                  e.visitor &&
                                  "object" === c(window.Tawk_API.visitor) &&
                                  (a = r.a.formatVisitorLoginData(o)),
                                this.registerData
                                  ? (this.registerData.vss = l)
                                  : (this.registerData = {
                                      p: d["property/id"] || "",
                                      w: d["widget/id"],
                                      platform: d[
                                        "browserData/mobileBrowserName"
                                      ]
                                        ? "mobile"
                                        : "desktop",
                                      tzo: h,
                                      url: document.location.href,
                                      referrer: document.referrer || void 0,
                                      vss: l,
                                      user: a,
                                    }),
                                (p = null),
                                window.location && window.location.href)
                              )
                                try {
                                  ("http:" !==
                                    (p = new URL(window.location.href))
                                      .protocol &&
                                    "https:" !== p.protocol &&
                                    "file:" !== p.protocol) ||
                                    (this.registerData.url =
                                      window.location.href);
                                } catch (t) {}
                              if (!p && window.top !== window)
                                try {
                                  window.top.document &&
                                    window.top.location &&
                                    window.top.location.href &&
                                    (this.registerData.url =
                                      window.top.document.location.href);
                                } catch (t) {
                                  console.error(
                                    "[Tawk/Register]: Failed to access url"
                                  );
                                }
                              (this.registerData.consent = !1), (m = 0);
                            case 18:
                              if (!(m < f.length)) {
                                t.next = 25;
                                break;
                              }
                              if ("cf" !== f[m]) {
                                t.next = 22;
                                break;
                              }
                              return (
                                (this.registerData.consent = !0),
                                t.abrupt("break", 25)
                              );
                            case 22:
                              m++, (t.next = 18);
                              break;
                            case 25:
                              return (
                                this.TawkWindow && this.TawkWindow.maximize
                                  ? (this.registerData.wss = "max")
                                  : (this.registerData.wss = "min"),
                                (t.prev = 26),
                                (t.next = 29),
                                s.a.getUUID()
                              );
                            case 29:
                              if (
                                ((g = t.sent),
                                (v = g.uuid),
                                (w = g.version),
                                (y = g.isPartial),
                                !v)
                              ) {
                                t.next = 39;
                                break;
                              }
                              (this.registerData.u = v),
                                (this.registerData.uv = parseInt(w, 10)),
                                2 === w && y && (this.registerData.uw = 1),
                                (t.next = 42);
                              break;
                            case 39:
                              return (t.next = 41), s.a.getIdempotencyKey();
                            case 41:
                              this.registerData.uik = t.sent;
                            case 42:
                              t.next = 47;
                              break;
                            case 44:
                              (t.prev = 44),
                                (t.t0 = t.catch(26)),
                                console.error(t.t0);
                            case 47:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[26, 44]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "startRegister",
              value: function (e, n) {
                var i = this,
                  r = a.a.cookieStore().getItem("TawkConnectionTime"),
                  o = parseInt(r.length ? r[0] : null, 10);
                !o || new Date().getTime() - new Date(o).getTime() > 1e3
                  ? (a.a
                      .cookieStore()
                      .setItem("TawkConnectionTime", new Date().getTime(), !0),
                    (this.connectionCookieInterval = setInterval(function () {
                      t &&
                        i.TawkWindow &&
                        a.a &&
                        a.a
                          .cookieStore()
                          .setItem(
                            "TawkConnectionTime",
                            new Date().getTime(),
                            !0
                          );
                    }, 100)),
                    this.doRegister(e, n))
                  : this.delayRegister(e, n);
              },
            },
            {
              key: "delayRegister",
              value: function (t, e) {
                var n = this;
                clearTimeout(this.registerDelayTimeout),
                  (this.registerDelayTimeout = setTimeout(function () {
                    n.init(t, e);
                  }, 1e3));
              },
            },
            {
              key: "doRegister",
              value: function (t, e) {
                var n = this;
                this.setupRegisterTimeout();
                var r,
                  a = "".concat("https://va.tawk.to", "/v1/session/start"),
                  u = s.a.getStoredToken();
                u && (r = { "X-Tawk-Token": u }),
                  (this.previousRegisterCall = i.a.post(
                    a,
                    this.registerData,
                    r,
                    function (i, r) {
                      var a;
                      return (
                        n.clearTimers(),
                        i || (!i && !r)
                          ? n.retryRegister(t, e)
                          : r.error
                          ? r.error.code &&
                            "InternalServerError" === r.error.code
                            ? n.retryRegister(t, e)
                            : e()
                          : (null !== (a = window.Tawk_API) &&
                              void 0 !== a &&
                              a.visitor &&
                              "object" === c(window.Tawk_API.visitor) &&
                              window.sessionStorage.setItem(
                                "tawk_has_register_visitor",
                                !0
                              ),
                            t(r),
                            void (
                              n.registerData.user &&
                              "object" === c(n.registerData) &&
                              o.a.unsetVisitorAttributes()
                            ))
                      );
                    },
                    !0,
                    !0
                  ));
              },
            },
            {
              key: "setupRegisterTimeout",
              value: function () {
                var t = this;
                clearTimeout(this.requestCancelTimeout),
                  (this.requestCancelTimeout = setTimeout(function () {
                    t.abort(), t.retryRegister();
                  }, 9e4));
              },
            },
            {
              key: "abort",
              value: function () {
                null !== this.previousRegisterCall &&
                  (this.previousRegisterCall = null);
              },
            },
            {
              key: "retryRegister",
              value: function (t, e) {
                var n,
                  i = this;
                if (null === this.retryRegisterTimeout) {
                  if (this.retryCount >= this.maxRetrycount)
                    return (
                      this.clearTimers(),
                      void this.store.commit("widget/setVisibility", !1)
                    );
                  this.retryCount++,
                    (n = this.getRetryWaitDelay()),
                    (this.retryRegisterTimeout = setTimeout(function () {
                      i.init(t, e);
                    }, n));
                }
              },
            },
            {
              key: "getRetryWaitDelay",
              value: function () {
                var t,
                  e =
                    Math.random() * (this.maxRandom - this.minRandom) +
                    this.minRandom;
                return (
                  null === this.retryDelay
                    ? (this.retryDelay = this.retryInitialDelay)
                    : ((t = this.retryDelay * this.retryMultiplier),
                      this.retryDelay > this.maxDelay || t > this.maxDelay
                        ? (this.retryDelay = this.maxDelay)
                        : (this.retryDelay = t)),
                  1e3 * Math.round(this.retryDelay * e)
                );
              },
            },
            {
              key: "resetRetryCount",
              value: function () {
                (this.retryCount = 0), (this.retryDelay = 10);
              },
            },
          ]
        );
      }.call(this, n("c8ba")));
    },
    a18c: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var i = n("4360"),
        r = {
          name: "TawkRouterView",
          render: function (t) {
            var e;
            return (
              i.a.getters["router/getCurrentView"] &&
                (e = t(i.a.getters["router/getCurrentView"].component)),
              t(
                "transition",
                {
                  props: { name: "slide-fade", mode: "out-in" },
                  ref: "router-view",
                },
                [e]
              )
            );
          },
        },
        o = n("d046");
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, c(i.key), i);
        }
      }
      function c(t) {
        var e = (function (t, e) {
          if ("object" != a(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != a(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == a(e) ? e : e + "";
      }
      function u(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var l = (function (t, e, n) {
        return (
          e && s(t.prototype, e),
          n && s(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        u(this, t), (this.matcher = e.routes);
      });
      l.install = function (t) {
        i.a.dispatch("router/addRoutes", o.a), t.component("TawkRouterView", r);
      };
    },
    a3cc: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("bdd0"),
        r = n("7f46");
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a() {
        a = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          c = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          l = s.toStringTag || "@@toStringTag";
        function d(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          d({}, "");
        } catch (t) {
          d = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, i) {
          var o = e && e.prototype instanceof w ? e : w,
            a = Object.create(o.prototype),
            s = new A(i || []);
          return r(a, "_invoke", { value: O(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = f;
        var p = "suspendedStart",
          m = "executing",
          g = "completed",
          v = {};
        function w() {}
        function y() {}
        function b() {}
        var k = {};
        d(k, c, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          S = T && T(T(_([])));
        S && S !== n && i.call(S, c) && (k = S);
        var I = (b.prototype = w.prototype = Object.create(k));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            d(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(r, a, s, c) {
            var u = h(t[r], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                d = l.value;
              return d && "object" == o(d) && i.call(d, "__await")
                ? e.resolve(d.__await).then(
                    function (t) {
                      n("next", t, s, c);
                    },
                    function (t) {
                      n("throw", t, s, c);
                    }
                  )
                : e.resolve(d).then(
                    function (t) {
                      (l.value = t), s(l);
                    },
                    function (t) {
                      return n("throw", t, s, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          r(this, "_invoke", {
            value: function (t, i) {
              function r() {
                return new e(function (e, r) {
                  n(t, i, e, r);
                });
              }
              return (a = a ? a.then(r, r) : r());
            },
          });
        }
        function O(e, n, i) {
          var r = p;
          return function (o, a) {
            if (r === m) throw Error("Generator is already running");
            if (r === g) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = o, i.arg = a; ; ) {
              var s = i.delegate;
              if (s) {
                var c = x(s, i);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (r === p) throw ((r = g), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              r = m;
              var u = h(e, n, i);
              if ("normal" === u.type) {
                if (((r = i.done ? g : "suspendedYield"), u.arg === v))
                  continue;
                return { value: u.arg, done: i.done };
              }
              "throw" === u.type &&
                ((r = g), (i.method = "throw"), (i.arg = u.arg));
            }
          };
        }
        function x(e, n) {
          var i = n.method,
            r = e.iterator[i];
          if (r === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method"
                  )))),
              v
            );
          var o = h(r, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function _(e) {
          if (e || "" === e) {
            var n = e[c];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function n() {
                  for (; ++r < e.length; )
                    if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(o(e) + " is not iterable");
        }
        return (
          (y.prototype = b),
          r(I, "constructor", { value: b, configurable: !0 }),
          r(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(b, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), d(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(I)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(E.prototype),
          d(E.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, i, r, o) {
            void 0 === o && (o = Promise);
            var a = new E(f(t, n, i, r), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(I),
          d(I, l, "Generator"),
          d(I, c, function () {
            return this;
          }),
          d(I, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return (t.value = i), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = _),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(i, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = i),
                  r && ((n.method = "next"), (n.arg = t)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    u = i.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), L(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    L(n);
                  }
                  return r;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: _(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function s(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r);
      }
      function c(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = t.apply(e, n);
            function a(t) {
              s(o, i, r, a, c, "next", t);
            }
            function c(t) {
              s(o, i, r, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      e.default = {
        namespaced: !0,
        state: {
          baseUrl: "/v1/kb",
          id: null,
          items: [],
          options: [],
          loading: { index: !1, show: !1, search: !1 },
          selected: {},
          isLoadingCodeMirror: !1,
          isCodeMirrorLoaded: !1,
          searchData: {
            query: null,
            results: [],
            hasNext: !1,
            token: null,
            total: 0,
            error: !1,
            linkTarget: "self",
          },
          siteId: null,
          scrollPosition: 0,
        },
        getters: {
          items: function (t) {
            return t.items;
          },
          isLoading: function (t) {
            return function (e) {
              return t.loading[e];
            };
          },
          selected: function (t) {
            return t.selected;
          },
          options: function (t) {
            return t.options;
          },
          isLoadingCodeMirror: function (t) {
            return t.isLoadingCodeMirror;
          },
          isCodeMirrorLoaded: function (t) {
            return t.isCodeMirrorLoaded;
          },
          searchData: function (t) {
            return t.searchData;
          },
          siteId: function (t) {
            return t.siteId;
          },
          scrollPosition: function (t) {
            return t.scrollPosition;
          },
        },
        actions: {
          show: (function () {
            var t = c(
              a().mark(function t(e, n) {
                var r, o, s;
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((r = e.state),
                          (o = e.commit),
                          (s = e.rootGetters),
                          n.siteId && n.articleId)
                        ) {
                          t.next = 3;
                          break;
                        }
                        throw "Please set article ID before calling the action.show";
                      case 3:
                        return (
                          o("setLoading", { action: "show", value: !0 }),
                          (t.next = 6),
                          i.a.get(
                            ""
                              .concat("https://va.tawk.to")
                              .concat(r.baseUrl)
                              .concat(n.url),
                            {
                              propertyId: s["property/id"],
                              siteId: n.siteId,
                              articleId: n.articleId,
                            },
                            null,
                            function (t, e) {
                              if (t)
                                throw (
                                  (o("setLoading", {
                                    action: "show",
                                    value: !1,
                                  }),
                                  t)
                                );
                              (e.data.siteId = n.siteId),
                                o("setSelected", e.data),
                                o("setLoading", { action: "show", value: !1 });
                            }
                          )
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
          updateOptions: function (t, e) {
            (0, t.commit)("setOptions", e);
          },
          updateId: function (t, e) {
            (0, t.commit)("setId", e);
          },
          unsetSelected: function (t) {
            (0, t.commit)("setSelected", {});
          },
          setCodeMirrorIsLoading: function (t) {
            var e = t.state;
            (e.isCodeMirrorLoaded = !1), (e.isLoadingCodeMirror = !0);
          },
          setCodeMirrorIsLoaded: function (t) {
            var e = t.state;
            (e.isCodeMirrorLoaded = !0), (e.isLoadingCodeMirror = !1);
          },
          searchArticles: (function () {
            var t = c(
              a().mark(function t(e, n) {
                var r, o, s, c, u;
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((r = e.commit),
                          (o = e.rootGetters),
                          (s = e.state),
                          (c = e.dispatch),
                          r("setLoading", { action: "search", value: !0 }),
                          n && void 0 !== n.siteId && r("setSiteId", n.siteId),
                          n &&
                            void 0 !== n.search &&
                            r("setSearchQuery", n.search),
                          s.searchData.query)
                        ) {
                          t.next = 7;
                          break;
                        }
                        return (
                          r("setLoading", { action: "search", value: !1 }),
                          t.abrupt("return")
                        );
                      case 7:
                        return (
                          (u = {
                            propertyId: o["property/id"],
                            siteId: s.siteId,
                            query: s.searchData.query,
                            limit: n && n.limit ? n.limit : 10,
                            from: s.searchData.results.length,
                          }),
                          (t.next = 10),
                          i.a.get(
                            "".concat(
                              "https://va.tawk.to",
                              "/v1/kb/article/search"
                            ),
                            u,
                            null,
                            function (t, e) {
                              r("setLoading", { action: "search", value: !1 }),
                                t
                                  ? (s.searchData.error = !0)
                                  : (r("setSearchResults", e.data),
                                    c("searchPerformedAnalytics"));
                            }
                          )
                        );
                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
          articleClickedAnalytics: function (t, e) {
            var n = t.state;
            i.a.post(
              "".concat(
                "https://va.tawk.to",
                "/v1/kb/analytics/search-result-clicked"
              ),
              { token: n.searchData.token, articleId: e },
              null,
              function (t, e) {
                if (t) return e;
              },
              !1,
              !0
            );
          },
          searchPerformedAnalytics: function (t) {
            var e = t.state;
            i.a.post(
              "".concat(
                "https://va.tawk.to",
                "/v1/kb/analytics/search-performed"
              ),
              { token: e.searchData.token },
              null,
              function (t, e) {
                if (t) return e;
              },
              !1,
              !0
            );
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
          setSearchLoading: function (t, e) {
            (0, t.commit)("setLoading", { action: "search", value: e });
          },
          updateSearchDataLinkTarget: function (t, e) {
            (0, t.commit)("setSearchDataLinkTarget", e);
          },
          unsetSearchData: function (t) {
            (0, t.commit)("resetSearchQuery");
          },
          setScrollPosition: function (t, e) {
            (0, t.commit)("modifyScrollPosition", e);
          },
          unsetScrollPosition: function (t) {
            (0, t.commit)("modifyScrollPosition", 0);
          },
          unsetSearchDataResults: function (t) {
            (0, t.commit)("softResetSearchData");
          },
        },
        mutations: {
          setId: function (t, e) {
            t.id = e;
          },
          setItems: function (t, e) {
            t.items = e;
          },
          setLoading: function (t, e) {
            var n = e.action,
              i = e.value;
            t.loading[n] = i;
          },
          setSelected: function (t, e) {
            t.selected = e;
          },
          setOptions: function (t, e) {
            t.options = e;
          },
          setSearchResults: function (t, e) {
            e.articles.forEach(function (t) {
              if (t.highlight) {
                if (t.highlight.title && t.highlight.title.length)
                  for (var e = 0; e < t.highlight.title.length; e++)
                    t.title = r.a
                      .rawEncode(t.highlight.title[e])
                      .replace(/\[em\]/gi, '<span class="tawk-text-bold">')
                      .replace(/\[\/em\]/gi, "</span>");
                if (t.highlight.subtitle && t.highlight.subtitle.length)
                  for (var n = 0; n < t.highlight.subtitle.length; n++)
                    t.subtitle = r.a
                      .rawEncode(t.highlight.subtitle[n])
                      .replace(/\[em]/gi, '<span class="tawk-text-bold">')
                      .replace(/\[\/em\]/gi, "</span>");
              }
            }),
              (t.searchData.results = t.searchData.results.concat(e.articles)),
              (t.searchData.hasNext = e.total > t.searchData.results.length),
              (t.searchData.token = e.token),
              (t.searchData.total = e.total),
              (t.searchData.error = !1);
          },
          setSearchQuery: function (t, e) {
            (t.searchData.query = e),
              (t.searchData.results = []),
              (t.searchData.hasNext = !1),
              (t.searchData.token = null),
              (t.searchData.total = 0),
              (t.searchData.error = !1);
          },
          setSiteId: function (t, e) {
            t.siteId = e;
          },
          unsetData: function (t) {
            for (
              var e = {
                  baseUrl: "/v1/kb",
                  id: null,
                  items: [],
                  options: [],
                  loading: { index: !1, show: !1, search: !1 },
                  selected: {},
                  isLoadingCodeMirror: !1,
                  isCodeMirrorLoaded: !1,
                  searchData: {
                    query: null,
                    results: [],
                    hasNext: !1,
                    token: null,
                    total: 0,
                    error: !1,
                    linkTarget: "self",
                  },
                  siteId: null,
                  scrollPosition: 0,
                },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
          setSearchDataLinkTarget: function (t, e) {
            t.searchData.linkTarget = e;
          },
          resetSearchQuery: function (t) {
            (t.searchData.query = null),
              (t.searchData.results = []),
              (t.searchData.hasNext = !1),
              (t.searchData.token = null),
              (t.searchData.total = 0),
              (t.searchData.error = !1),
              (t.searchData.linkTarget = "self");
          },
          modifyScrollPosition: function (t, e) {
            t.scrollPosition = e;
          },
          softResetSearchData: function (t) {
            (t.searchData.results = []),
              (t.searchData.hasNext = !1),
              (t.searchData.total = 0),
              (t.searchData.error = !1);
          },
        },
      };
    },
    b250: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("fad2"),
        r = n("7f46"),
        o = n("91ce");
      e.default = {
        namespaced: !0,
        state: {
          email: null,
          displayName: null,
          name: null,
          transcriptEmail: null,
          uuid: null,
          uuidVer: 0,
          visitorId: null,
        },
        getters: {
          getEmailValue: function (t) {
            return t.email || t.transcriptEmail;
          },
          name: function (t) {
            return i.a.isGeneratedName(t.name) ? "" : t.name;
          },
          uuidVer: function (t) {
            return t.uuidVer;
          },
          uuid: function (t) {
            return t.uuid;
          },
          transcriptEmail: function (t) {
            return t.transcriptEmail;
          },
          visitorId: function (t) {
            return t.visitorId;
          },
        },
        actions: {
          updateUUID: function (t, e) {
            (0, t.commit)("setVisitorUUID", { uver: e.uv, uuid: e.u }),
              o.a.storeUUID(e.u, e.uv, e.domain);
          },
          updateVisitorInformation: function (t, e) {
            var n = t.commit,
              i = t.state,
              o = {
                visitorId: i.visitorId,
                name: i.name,
                email: i.email,
                transcriptEmail: i.transcriptEmail,
              };
            e.n && r.a.isString(e.n) && (o.name = e.n),
              e.te && r.a.isString(e.te) && (o.transcriptEmail = e.te),
              e.e && r.a.isString(e.e) && (o.email = e.e),
              e.vid && (o.visitorId = e.vid),
              n("setVisitorInformation", o);
          },
          clearVisitorInformation: function (t) {
            (0, t.commit)("setVisitorInformation", {
              name: void 0,
              email: void 0,
              transcriptEmail: void 0,
            });
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
        },
        mutations: {
          setVisitorUUID: function (t, e) {
            (t.uuidVer = e.uver || 0), (t.uuid = e.uuid);
          },
          setVisitorInformation: function (t, e) {
            (t.visitorId = e.visitorId),
              (t.name = r.a.rawDecode(e.name)),
              (t.displayName = i.a.parseVisitorName(e.name)),
              (t.email = e.email),
              (t.transcriptEmail = e.transcriptEmail);
          },
          unsetData: function (t) {
            for (
              var e = {
                  email: null,
                  displayName: null,
                  name: null,
                  transcriptEmail: null,
                  uuid: null,
                  uuidVer: 0,
                  visitorId: null,
                },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    b7cc: function (t, e, n) {
      "use strict";
      var i = n("fad2"),
        r = n("91ce"),
        o = n("028e"),
        a = n("24ca");
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, l(i.key), i);
        }
      }
      function u(t, e, n) {
        return (
          (e = l(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function l(t) {
        var e = (function (t, e) {
          if ("object" != s(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != s(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == s(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && c(t.prototype, e),
          n && c(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          var e = this;
          if (
            ((function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            u(this, "triggerApiHandlers", function (t, n) {
              var i = e.local_API[t];
              if (void 0 !== i) {
                if ("onBeforeLoad" === t) {
                  if (window.Tawk_API.onBeforeLoaded) return;
                  window.Tawk_API.onBeforeLoaded = !0;
                } else if ("onLoad" === t) {
                  if (window.Tawk_API.onLoaded) return;
                  window.Tawk_API.onLoaded = !0;
                }
                if ((e.dispatch(i.eventName, n), "function" == typeof i.func))
                  try {
                    i.func(n);
                  } catch (t) {}
                a.a.$on("resetState", function () {
                  (window.Tawk_API.onBeforeLoaded = !1),
                    (window.Tawk_API.onLoaded = !1);
                });
              }
            }),
            u(this, "dispatch", function (t, n) {
              var i;
              t &&
                ((i =
                  "function" == typeof window.CustomEvent
                    ? new CustomEvent(t, { detail: n })
                    : new e.CustomEventIE(t, { detail: n })),
                window.dispatchEvent(i));
            }),
            u(this, "secureWrapper", function (t) {
              return (
                void 0 === t && (t = {}),
                e.local_API &&
                  e.local_API.visitor &&
                  (e.local_API.visitor.email &&
                    (t.email = e.local_API.visitor.email),
                  e.local_API.visitor.hash &&
                    (t.hash = e.local_API.visitor.hash)),
                t
              );
            }),
            u(this, "unsetVisitorAttributes", function () {
              e.local_API &&
                e.local_API.visitor &&
                (e.local_API.visitor = void 0);
            }),
            (this.local_API = {}),
            (window.$_Tawk = window.$_Tawk || {}),
            (window.Tawk_API = window.Tawk_API || {}),
            "object" === s(window.$_Tawk_API))
          )
            for (var n in window.$_Tawk_API)
              Object.prototype.hasOwnProperty.call(window.$_Tawk_API, n) &&
                (window.Tawk_API[n] = window.$_Tawk_API[n]);
          "function" != typeof window.CustomEvent &&
            (this.CustomEventIE(),
            (this.CustomEventIE.prototype = window.Event.prototype)),
            this.init();
        },
        [
          {
            key: "install",
            value: function (t, e) {
              var n = e.store,
                i = e.TawkWindow;
              (t.prototype.$TawkJSAPI = this),
                (this.store = n),
                (this.TawkWindow = i);
            },
          },
          {
            key: "CustomEventIE",
            value: function (t, e) {
              e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
              var n = document.createEvent("CustomEvent");
              return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
            },
          },
          {
            key: "init",
            value: function () {
              var t = this;
              (this.local_API = {
                disableSound: !!window.Tawk_API.disableSound,
                embedded: window.Tawk_API.embedded || null,
                visitor: window.Tawk_API.visitor || null,
                autoStart: window.Tawk_API.autoStart || !0,
                disableMobileBackHistory:
                  !!window.Tawk_API.disableMobileBackHistory,
                disableWidgetFont: window.Tawk_API.disableWidgetFont || !1,
                isWindowed: !!window.Tawk_API.isPopup,
                customStyle: window.Tawk_API.customStyle || null,
                onBeforeLoad: {
                  eventName: "tawkBeforeLoad",
                  func: window.Tawk_API.onBeforeLoad,
                },
                onLoad: { eventName: "tawkLoad", func: window.Tawk_API.onLoad },
                onStatusChange: {
                  eventName: "tawkStatusChange",
                  func: window.Tawk_API.onStatusChange,
                },
                onChatMaximized: {
                  eventName: "tawkChatMaximized",
                  func: window.Tawk_API.onChatMaximized,
                },
                onChatMinimized: {
                  eventName: "tawkChatMinimized",
                  func: window.Tawk_API.onChatMinimized,
                },
                onChatHidden: {
                  eventName: "tawkChatHidden",
                  func: window.Tawk_API.onChatHidden,
                },
                onChatStarted: {
                  eventName: "tawkChatStarted",
                  func: window.Tawk_API.onChatStarted,
                },
                onChatEnded: {
                  eventName: "tawkChatEnded",
                  func: window.Tawk_API.onChatEnded,
                },
                onPrechatSubmit: {
                  eventName: "tawkPrechatSubmit",
                  func: window.Tawk_API.onPrechatSubmit,
                },
                onOfflineSubmit: {
                  eventName: "tawkOfflineSubmit",
                  func: window.Tawk_API.onOfflineSubmit,
                },
                onChatMessageVisitor: {
                  eventName: "tawkChatMessageVisitor",
                  func: window.Tawk_API.onChatMessageVisitor,
                },
                onChatMessageAgent: {
                  eventName: "tawkChatMessageAgent",
                  func: window.Tawk_API.onChatMessageAgent,
                },
                onChatMessageSystem: {
                  eventName: "tawkChatMessageSystem",
                  func: window.Tawk_API.onChatMessageSystem,
                },
                onAgentJoinChat: {
                  eventName: "tawkAgentJoinChat",
                  func: window.Tawk_API.onAgentJoinChat,
                },
                onAgentLeaveChat: {
                  eventName: "tawkAgentLeaveChat",
                  func: window.Tawk_API.onAgentLeaveChat,
                },
                onChatSatisfaction: {
                  eventName: "tawkChatSatisfaction",
                  func: window.Tawk_API.onChatSatisfaction,
                },
                onVisitorNameChanged: {
                  eventName: "tawkVisitorNameChanged",
                  func: window.Tawk_API.onVisitorNameChanged,
                },
                onFileUpload: {
                  eventName: "tawkFileUpload",
                  func: window.Tawk_API.onFileUpload,
                },
                onTagsUpdated: {
                  eventName: "tawkTagsUpdated",
                  func: window.Tawk_API.onTagsUpdated,
                },
                onUnreadCountChanged: {
                  eventName: "tawkUnreadCountChanged",
                  func: window.Tawk_API.onUnreadCountChanged,
                },
              }),
                (window.$_Tawk.maximize = window.Tawk_API.maximize =
                  function () {
                    window.$_Tawk.ready ||
                      t.store.dispatch("session/updateChatWindowState", "max");
                  }),
                (window.$_Tawk.minimize = window.Tawk_API.minimize =
                  function () {
                    window.$_Tawk.ready ||
                      t.store.dispatch("session/updateChatWindowState", "min");
                  }),
                (window.$_Tawk.toggle = window.Tawk_API.toggle =
                  function () {
                    window.$_Tawk.ready ||
                      t.store.dispatch("session/toggleWidget");
                  }),
                (window.$_Tawk.popup = window.Tawk_API.popup =
                  function () {
                    window.$_Tawk.ready || t.TawkWindow.popoutWidget();
                  }),
                (window.$_Tawk.getWindowType = window.Tawk_API.getWindowType =
                  function () {
                    if (!window.$_Tawk.ready)
                      return t.store.getters["widget/isEmbedded"]
                        ? "embed"
                        : t.store.getters["widget/isWindowed"]
                        ? "popup"
                        : "inline";
                  }),
                (window.$_Tawk.showWidget = window.Tawk_API.showWidget =
                  function () {
                    window.$_Tawk.ready ||
                      t.store.commit("widget/setVisibility", !0);
                  }),
                (window.$_Tawk.hideWidget = window.Tawk_API.hideWidget =
                  function () {
                    window.$_Tawk.ready ||
                      t.store.commit("widget/setVisibility", !1);
                  }),
                (window.$_Tawk.toggleVisibility =
                  window.Tawk_API.toggleVisibility =
                    function () {
                      window.$_Tawk.ready ||
                        t.store.dispatch("widget/toggleVisibility");
                    }),
                (window.$_Tawk.getStatus = window.Tawk_API.getStatus =
                  function () {
                    if (!window.$_Tawk.ready)
                      return t.store.getters["session/pageStatus"];
                  }),
                (window.$_Tawk.isChatMaximized =
                  window.Tawk_API.isChatMaximized =
                    function () {
                      if (!window.$_Tawk.ready)
                        return (
                          "max" === t.store.getters["session/chatWindowState"]
                        );
                    }),
                (window.$_Tawk.isChatMinimized =
                  window.Tawk_API.isChatMinimized =
                    function () {
                      if (!window.$_Tawk.ready)
                        return (
                          "min" === t.store.getters["session/chatWindowState"]
                        );
                    }),
                (window.$_Tawk.isChatHidden = window.Tawk_API.isChatHidden =
                  function () {
                    if (!window.$_Tawk.ready)
                      return !t.store.getters["widget/isVisible"];
                  }),
                (window.$_Tawk.isChatOngoing = window.Tawk_API.isChatOngoing =
                  function () {
                    if (!window.$_Tawk.ready)
                      return t.store.getters["chat/isChatOngoing"];
                  }),
                (window.$_Tawk.isVisitorEngaged =
                  window.Tawk_API.isVisitorEngaged =
                    function () {
                      if (!window.$_Tawk.ready)
                        return t.store.getters["chat/isVisitorEngaged"];
                    }),
                (window.$_Tawk.endChat = window.Tawk_API.endChat =
                  function () {
                    window.$_Tawk.ready || t.store.dispatch("chat/endChat");
                  }),
                (window.$_Tawk.addEvent = window.Tawk_API.addEvent =
                  function (t, e, n) {
                    window.$_Tawk.ready || o.a.sendApiEvent(t, e, n);
                  }),
                (window.$_Tawk.setAttributes = window.Tawk_API.setAttributes =
                  function (e, n) {
                    (t.local_API.visitor = t.local_API.visitor || {}),
                      e.name && (t.local_API.visitor.name = e.name),
                      e.email && (t.local_API.visitor.email = e.email),
                      e.hash && (t.local_API.visitor.hash = e.hash),
                      o.a.sendApiAttributes(e, n);
                  }),
                (window.$_Tawk.addTags = window.Tawk_API.addTags =
                  function (t, e) {
                    o.a.addTags(t, e);
                  }),
                (window.$_Tawk.removeTags = window.Tawk_API.removeTags =
                  function (t, e) {
                    o.a.removeTags(t, e);
                  }),
                (window.$_Tawk.widgetPosition = window.Tawk_API.widgetPosition =
                  function () {
                    if (!window.$_Tawk.ready)
                      return t.store.getters["widget/desktopVisibility"]
                        ? t.store.getters["widget/desktopVisibility"].position
                        : null;
                  }),
                (window.$_Tawk.login = window.Tawk_API.login =
                  function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      e = arguments.length > 1 ? arguments[1] : void 0;
                    if (!window.$_Tawk.ready) {
                      e = e || function () {};
                      var n = i.a.formatVisitorLoginData(t);
                      r.a.login(n, e);
                    }
                  }),
                (window.$_Tawk.logout = window.Tawk_API.logout =
                  function (t) {
                    window.$_Tawk.ready ||
                      ((t = t || function () {}), r.a.logout(t));
                  }),
                (window.$_Tawk.switchWidget = window.Tawk_API.switchWidget =
                  function (e) {
                    var n = e.propertyId,
                      i = void 0 === n ? null : n,
                      r = e.widgetId,
                      o = void 0 === r ? null : r,
                      a =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : function () {};
                    window.$_Tawk.ready ||
                      t.store.dispatch("widget/switchWidget", {
                        propertyId: i,
                        widgetId: o,
                        callback: a,
                      });
                  }),
                (window.$_Tawk.shutdown = window.Tawk_API.shutdown =
                  function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : function () {};
                    window.$_Tawk.ready ||
                      t.store.dispatch("widget/shutdown", e);
                  }),
                (window.$_Tawk.start = window.Tawk_API.start =
                  function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : function () {};
                    window.$_Tawk.ready ||
                      t.store.dispatch("widget/start", {
                        params: e,
                        callback: n,
                      });
                  });
            },
          },
        ]
      ))();
    },
    bdd0: function (t, e, n) {
      "use strict";
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(n), !0).forEach(function (e) {
                a(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function a(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != i(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" != i(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == i(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, "a", function () {
        return s;
      });
      var s = {
        post: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = arguments.length > 3 ? arguments[3] : void 0,
            r =
              !(arguments.length > 4 && void 0 !== arguments[4]) ||
              arguments[4],
            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            s = [],
            c = !0,
            u = o({}, n);
          if (e instanceof FormData) (s = e), (c = !1);
          else {
            if (a)
              (s = JSON.stringify(e)),
                (u["Content-Type"] = "application/json; charset=utf-8");
            else {
              for (var l in e)
                Object.prototype.hasOwnProperty.call(e, l) &&
                  s.push(
                    ""
                      .concat(encodeURIComponent(l), "=")
                      .concat(encodeURIComponent(e[l]))
                  );
              s.length && (s = s.join("&")),
                (u["Content-Type"] = "application/www-x-form-urlencoded");
            }
            c = !0;
          }
          if (void 0 !== window.fetch && void 0 !== window.AbortController) {
            var d,
              f = new window.AbortController(),
              h = f.signal;
            return (
              (d = r
                ? {
                    method: "POST",
                    headers: u,
                    signal: h,
                    credentials: c ? "include" : "same-origin",
                    body: s,
                  }
                : { method: "POST", headers: u, signal: h, body: s }),
              fetch(t, d)
                .then(function (t) {
                  return 500 === t.status ? i(!0) : t.json();
                })
                .then(function (t) {
                  i(null, t);
                })
                .catch(function () {
                  i(!0);
                }),
              h
            );
          }
          var p = new XMLHttpRequest();
          if (
            ((p.onerror = i), p.open("POST", t, !0), !(e instanceof FormData))
          ) {
            for (var m in u) p.setRequestHeader(m, u[m]);
            p.withCredentials = !0;
          }
          return (
            (p.onload = function () {
              p.status >= 200 && p.status < 300
                ? i(null, JSON.parse(p.responseText))
                : i(!0);
            }),
            p.send(s),
            p
          );
        },
        get: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = [],
            a = o({}, n);
          for (var s in e)
            Object.prototype.hasOwnProperty.call(e, s) &&
              r.push(
                ""
                  .concat(encodeURIComponent(s), "=")
                  .concat(encodeURIComponent(e[s]))
              );
          if (
            (r.length && (t += "?".concat(r.join("&"))),
            void 0 !== window.fetch && void 0 !== window.AbortController)
          ) {
            var c = new window.AbortController(),
              u = c.signal;
            return (
              fetch(t, { headers: a, signal: u })
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  i(null, t);
                })
                .catch(function () {
                  i(!0);
                }),
              u
            );
          }
          var l = new XMLHttpRequest();
          for (var d in ((l.onerror = i), l.open("GET", t, !0), a))
            l.setRequestHeader(d, a[d]);
          return (
            (l.onload = function () {
              l.status >= 200 && l.status < 300
                ? i(null, JSON.parse(l.responseText))
                : i(!0);
            }),
            l.send(),
            l
          );
        },
      };
    },
    c3e1: function (t, e, n) {
      var i = {
        "./browser-data.js": "0dc3",
        "./chat.js": "9b4f",
        "./form.js": "6665",
        "./history.js": "c99a",
        "./knowledge-base.js": "a3cc",
        "./overlay.js": "284b",
        "./property.js": "9a05",
        "./router.js": "d3e9",
        "./schedule.js": "e4b3",
        "./session.js": "3b35",
        "./socket.js": "f406",
        "./visitor.js": "b250",
        "./widget.js": "32d9",
      };
      function r(t) {
        var e = o(t);
        return n(e);
      }
      function o(t) {
        if (!n.o(i, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[t];
      }
      (r.keys = function () {
        return Object.keys(i);
      }),
        (r.resolve = o),
        (t.exports = r),
        (r.id = "c3e1");
    },
    c7b8: function (t, e, n) {
      "use strict";
      var i = n("bdd0");
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, a(i.key), i);
        }
      }
      function a(t) {
        var e = (function (t, e) {
          if ("object" != r(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == r(e) ? e : e + "";
      }
      e.a = new ((function (t, e, n) {
        return (
          e && o(t.prototype, e),
          n && o(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        },
        [
          {
            key: "install",
            value: function (t) {
              t.prototype.$TawkLogger = this;
            },
          },
          {
            key: "reportPerformance",
            value: function (t) {
              i.a.post(
                "".concat("https://va.tawk.to", "/log-performance/v3"),
                { logData: JSON.stringify(t) },
                {},
                function (t) {
                  t && console.error(t);
                },
                !1,
                !0
              );
            },
          },
          { key: "reportIncident", value: function () {} },
          {
            key: "reportError",
            value: function (t) {
              var e = JSON.stringify(t);
              i.a.post(
                "".concat("https://va.tawk.to", "/log"),
                e,
                {},
                function (t) {
                  t && console.error("[Tawk/Logger]: Error report sent", t);
                },
                !1,
                !0
              );
            },
          },
        ]
      ))();
    },
    c99a: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("bdd0"),
        r = n("028e");
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a() {
        a = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          c = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          l = s.toStringTag || "@@toStringTag";
        function d(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          d({}, "");
        } catch (t) {
          d = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, i) {
          var o = e && e.prototype instanceof w ? e : w,
            a = Object.create(o.prototype),
            s = new A(i || []);
          return r(a, "_invoke", { value: O(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = f;
        var p = "suspendedStart",
          m = "executing",
          g = "completed",
          v = {};
        function w() {}
        function y() {}
        function b() {}
        var k = {};
        d(k, c, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          S = T && T(T(_([])));
        S && S !== n && i.call(S, c) && (k = S);
        var I = (b.prototype = w.prototype = Object.create(k));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            d(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(r, a, s, c) {
            var u = h(t[r], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                d = l.value;
              return d && "object" == o(d) && i.call(d, "__await")
                ? e.resolve(d.__await).then(
                    function (t) {
                      n("next", t, s, c);
                    },
                    function (t) {
                      n("throw", t, s, c);
                    }
                  )
                : e.resolve(d).then(
                    function (t) {
                      (l.value = t), s(l);
                    },
                    function (t) {
                      return n("throw", t, s, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          r(this, "_invoke", {
            value: function (t, i) {
              function r() {
                return new e(function (e, r) {
                  n(t, i, e, r);
                });
              }
              return (a = a ? a.then(r, r) : r());
            },
          });
        }
        function O(e, n, i) {
          var r = p;
          return function (o, a) {
            if (r === m) throw Error("Generator is already running");
            if (r === g) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = o, i.arg = a; ; ) {
              var s = i.delegate;
              if (s) {
                var c = x(s, i);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (r === p) throw ((r = g), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              r = m;
              var u = h(e, n, i);
              if ("normal" === u.type) {
                if (((r = i.done ? g : "suspendedYield"), u.arg === v))
                  continue;
                return { value: u.arg, done: i.done };
              }
              "throw" === u.type &&
                ((r = g), (i.method = "throw"), (i.arg = u.arg));
            }
          };
        }
        function x(e, n) {
          var i = n.method,
            r = e.iterator[i];
          if (r === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method"
                  )))),
              v
            );
          var o = h(r, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function _(e) {
          if (e || "" === e) {
            var n = e[c];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function n() {
                  for (; ++r < e.length; )
                    if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(o(e) + " is not iterable");
        }
        return (
          (y.prototype = b),
          r(I, "constructor", { value: b, configurable: !0 }),
          r(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(b, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), d(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(I)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(E.prototype),
          d(E.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, i, r, o) {
            void 0 === o && (o = Promise);
            var a = new E(f(t, n, i, r), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(I),
          d(I, l, "Generator"),
          d(I, c, function () {
            return this;
          }),
          d(I, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return (t.value = i), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = _),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(i, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = i),
                  r && ((n.method = "next"), (n.arg = t)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    u = i.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), L(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    L(n);
                  }
                  return r;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: _(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function s(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r);
      }
      function c(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = t.apply(e, n);
            function a(t) {
              s(o, i, r, a, c, "next", t);
            }
            function c(t) {
              s(o, i, r, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      e.default = {
        namespaced: !0,
        state: {
          baseUrl: "/v1/chat/",
          items: [],
          loading: { index: !1, chat: !1 },
          nextListHash: null,
          lastMessageTimestamp: null,
          loadError: !1,
          messageBlocks: [],
          selectedChat: null,
          chatError: !1,
          selectedChatMessages: null,
          scrollPosition: 0,
          calls: {},
        },
        getters: {
          items: function (t) {
            return t.items;
          },
          isLoading: function (t) {
            return function (e) {
              return t.loading[e];
            };
          },
          lastMessageTimestamp: function (t) {
            return t.lastMessageTimestamp;
          },
          nextListHash: function (t) {
            return t.nextListHash;
          },
          loadError: function (t) {
            return t.loadError;
          },
          chatError: function (t) {
            return t.chatError;
          },
          messageBlocks: function (t) {
            return t.messageBlocks;
          },
          selectedChat: function (t) {
            return t.selectedChat;
          },
          selectedChatMessages: function (t) {
            return t.selectedChatMessages;
          },
          scrollPosition: function (t) {
            return t.scrollPosition;
          },
          callData: function (t) {
            return function (e) {
              return t.calls[e];
            };
          },
        },
        actions: {
          load: (function () {
            var t = c(
              a().mark(function t(e) {
                var n,
                  r,
                  o,
                  s,
                  c,
                  u,
                  l,
                  d = arguments;
                return a().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.state),
                            (r = e.commit),
                            (o = e.rootGetters),
                            (s = e.dispatch),
                            (c = d.length > 1 && void 0 !== d[1] ? d[1] : {}),
                            r("setLoading", { action: "index", value: !0 }),
                            r("setLoadError", !1),
                            (t.prev = 4),
                            (t.next = 7),
                            s("session/checkTokenValidity", {}, { root: !0 })
                          );
                        case 7:
                          t.next = 13;
                          break;
                        case 9:
                          return (
                            (t.prev = 9),
                            (t.t0 = t.catch(4)),
                            r("setLoadError", !0),
                            t.abrupt("return")
                          );
                        case 13:
                          (u = o["session/token"]),
                            (l = { limit: c.limit || 10 }),
                            c.loadNext && (l.next = n.nextListHash),
                            i.a.get(
                              ""
                                .concat("https://va.tawk.to")
                                .concat(n.baseUrl, "list"),
                              l,
                              { "X-Tawk-Token": u },
                              function (t, e) {
                                r("setLoading", { action: "index", value: !1 }),
                                  t
                                    ? r("setLoadError", !0)
                                    : (e.data &&
                                        e.data.chats.length &&
                                        (c.loadNext
                                          ? r("appendItems", e.data.chats)
                                          : r("setItems", e.data.chats)),
                                      e.data.hasNext
                                        ? r("setNextListHash", e.data.next)
                                        : r("setNextListHash", null));
                              }
                            );
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          getLastMessageTimestamp: (function () {
            var t = c(
              a().mark(function t(e) {
                var n, r, o, s, c;
                return a().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.state),
                            (r = e.commit),
                            (o = e.rootGetters),
                            (s = e.dispatch),
                            (t.prev = 1),
                            (t.next = 4),
                            s("session/checkTokenValidity", {}, { root: !0 })
                          );
                        case 4:
                          t.next = 9;
                          break;
                        case 6:
                          return (
                            (t.prev = 6),
                            (t.t0 = t.catch(1)),
                            t.abrupt("return")
                          );
                        case 9:
                          (c = o["session/token"]),
                            i.a.get(
                              ""
                                .concat("https://va.tawk.to")
                                .concat(n.baseUrl, "list"),
                              { limit: 1 },
                              { "X-Tawk-Token": c },
                              function (t, e) {
                                t ||
                                  (e.data &&
                                    e.data.chats.length &&
                                    r(
                                      "setLastMessageTimestamp",
                                      e.data.chats[0].endedOn
                                    ));
                              }
                            );
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 6]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          getHistory: (function () {
            var t = c(
              a().mark(function t(e) {
                var n, o, s, c, u, l;
                return a().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = e.state),
                            (o = e.commit),
                            (s = e.rootGetters),
                            (c = e.dispatch),
                            o("setChatError", !1),
                            o("setLoading", { action: "chat", value: !0 }),
                            n.selectedChat)
                          ) {
                            t.next = 6;
                            break;
                          }
                          throw (
                            (o("setChatError", !0), new Error("Invalid Id"))
                          );
                        case 6:
                          return (
                            (t.prev = 6),
                            (t.next = 9),
                            c("session/checkTokenValidity", {}, { root: !0 })
                          );
                        case 9:
                          t.next = 15;
                          break;
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.t0 = t.catch(6)),
                            o("setChatError", !0),
                            t.abrupt("return")
                          );
                        case 15:
                          (u = s["session/token"]),
                            (l = { chatId: n.selectedChat.id }),
                            i.a.get(
                              ""
                                .concat("https://va.tawk.to")
                                .concat(n.baseUrl, "get"),
                              l,
                              { "X-Tawk-Token": u },
                              function (t, e) {
                                if (t) o("setChatError", !0);
                                else if (e.data && e.data.error)
                                  o("setChatError", !0);
                                else {
                                  var n = r.a.processHistoryMessages(
                                    e.data.chat.messages
                                  );
                                  c("setSelectedChatMessages", n),
                                    c("setCalls", e.data.chat.calls);
                                }
                              }
                            );
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
          unsetItems: function (t) {
            (0, t.commit)("setItems", []);
          },
          addMessageBlock: function (t, e) {
            (0, t.commit)("pushMessageBlock", e);
          },
          clearMessageBlock: function (t) {
            (0, t.commit)("unsetMessageBlock");
          },
          setSelectedChatMessages: function (t, e) {
            var n = t.commit;
            n("setSelectedChatMessages", e),
              n("setLoading", { action: "chat", value: !1 });
          },
          setCalls: function (t, e) {
            (0, t.commit)("updateCalls", e);
          },
          unsetSelectedChat: function (t) {
            (0, t.commit)("setSelectedChat", null);
          },
          setScrollPosition: function (t, e) {
            (0, t.commit)("modifyScrollPosition", e);
          },
          unsetScrollPosition: function (t) {
            (0, t.commit)("modifyScrollPosition", 0);
          },
        },
        mutations: {
          setItems: function (t, e) {
            t.items = e;
          },
          setLoading: function (t, e) {
            var n = e.action,
              i = e.value;
            t.loading[n] = i;
          },
          setLastMessageTimestamp: function (t, e) {
            t.lastMessageTimestamp = e;
          },
          setNextListHash: function (t, e) {
            t.nextListHash = e;
          },
          appendItems: function (t, e) {
            t.items = t.items.concat(e);
          },
          setLoadError: function (t, e) {
            t.loadError = e;
          },
          setSelectedChat: function (t, e) {
            t.selectedChat = e;
          },
          setChatError: function (t, e) {
            t.chatError = e;
          },
          setSelectedChatMessages: function (t, e) {
            t.selectedChatMessages = e;
          },
          updateCalls: function (t, e) {
            t.calls = e;
          },
          pushMessageBlock: function (t, e) {
            if ("call" === e.messageType) {
              var n;
              if (t.calls.length)
                for (var i = 0; i < t.calls.length; i++)
                  if (t.calls[i].id === e.callId) {
                    var r = t.calls[i];
                    n = {
                      callId: r.id,
                      status: r.status,
                      version: null,
                      isMissed: r.missed,
                      isRejected: r.rejected,
                      isRinging: !1,
                      isDone: "completed",
                      isVideo: r.features && r.features.video,
                      isScreenshare: r.features && r.features.screenShare,
                      hasError: !1,
                      caller: r.caller,
                      startedAt: r.startedOn,
                      endedAt: r.expiredOn,
                    };
                    break;
                  }
              n || (n = { hasError: !0 }), (e.callData = n);
            }
            t.messageBlocks.push(e);
          },
          unsetMessageBlock: function (t) {
            t.messageBlocks = [];
          },
          modifyScrollPosition: function (t, e) {
            t.scrollPosition = e;
          },
          unsetData: function (t) {
            for (
              var e = {
                  baseUrl: "/v1/chat/",
                  items: [],
                  loading: { index: !1, chat: !1 },
                  nextListHash: null,
                  lastMessageTimestamp: null,
                  loadError: !1,
                  messageBlocks: [],
                  selectedChat: null,
                  chatError: !1,
                  selectedChatMessages: null,
                  scrollPosition: 0,
                  calls: {},
                },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    d046: function (t, e, n) {
      "use strict";
      var i = n("d3a4"),
        r = [
          {
            path: "/",
            component: function () {
              return function () {};
            },
          },
          {
            path: "chat",
            component: function () {
              return function () {};
            },
          },
          {
            path: "kb-article",
            component: function () {
              return Promise.all([
                n.e("chunk-4fe9d5dd"),
                n.e("chunk-3184cf5a"),
              ]).then(n.bind(null, "4b23"));
            },
            hasBack: !0,
          },
          {
            path: "kb-search",
            component: function () {
              return Promise.all([
                n.e("chunk-4fe9d5dd"),
                n.e("chunk-2d221830"),
                n.e("chunk-2d228873"),
              ]).then(n.bind(null, "da22"));
            },
            hasBack: !0,
            title: function () {
              return i.a ? i.a.$i18n("kb", "search_results") : "Search Results";
            },
          },
          {
            path: "history-list",
            component: function () {
              return Promise.all([
                n.e("chunk-4fe9d5dd"),
                n.e("chunk-2d0bd292"),
              ]).then(n.bind(null, "2b8d"));
            },
            hasBack: !0,
            title: function () {
              return i.a
                ? i.a.$i18n("routes", "conversations")
                : "Conversations";
            },
          },
          {
            path: "history-chat",
            component: function () {
              return Promise.all([
                n.e("chunk-4fe9d5dd"),
                n.e("chunk-2d0b9454"),
                n.e("chunk-2d0b383d"),
                n.e("chunk-45a6561d"),
              ]).then(n.bind(null, "002e"));
            },
            hasBack: !0,
          },
          {
            path: "agents",
            component: function () {
              return Promise.all([
                n.e("chunk-4fe9d5dd"),
                n.e("chunk-2d0e5ed2"),
              ]).then(n.bind(null, "9720"));
            },
            hasBack: !0,
            title: function () {
              return i.a ? i.a.$i18n("routes", "all_agents") : "All Agents";
            },
          },
          {
            path: "offline-success",
            component: function () {
              return n.e("chunk-2d2089ad").then(n.bind(null, "a602"));
            },
          },
          {
            path: "prechat",
            component: function () {
              return function () {};
            },
          },
          {
            path: "name-form",
            component: function () {
              return Promise.all([
                n.e("chunk-4fe9d5dd"),
                n.e("chunk-2d0b9454"),
                n.e("chunk-2d0bd9c1"),
              ]).then(n.bind(null, "2d70"));
            },
          },
          {
            path: "email-transcript-form",
            component: function () {
              return Promise.all([
                n.e("chunk-4fe9d5dd"),
                n.e("chunk-2d0b9454"),
                n.e("chunk-2d22614b"),
              ]).then(n.bind(null, "e6ae"));
            },
          },
          {
            path: "restart-chat",
            component: function () {
              return n.e("chunk-2d20848d").then(n.bind(null, "a3af"));
            },
          },
        ];
      e.a = r;
    },
    d3a4: function (t, e, n) {
      "use strict";
      (function (t) {
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function i(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function r(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? i(Object(n), !0).forEach(function (e) {
                  o(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function o(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function a(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, s(i.key), i);
          }
        }
        function s(t) {
          var e = (function (t, e) {
            if ("object" != n(t) || !t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var r = i.call(t, e || "default");
              if ("object" != n(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" == n(e) ? e : e + "";
        }
        e.a = new ((function (t, e, n) {
          return (
            e && a(t.prototype, e),
            n && a(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          function e() {
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.$i18n = function (e, n, i) {
                var o = {};
                return (
                  e && (n = "".concat(e, ".").concat(n)),
                  i && (o = r(r({}, o), i)),
                  t.$_Tawk.i18next(n, o)
                );
              });
          },
          [
            {
              key: "install",
              value: function (t) {
                t.prototype.$i18n = this.$i18n;
              },
            },
          ]
        ))();
      }.call(this, n("c8ba")));
    },
    d3e9: function (t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        namespaced: !0,
        state: { root: null, current: "/", history: [], routes: [] },
        getters: {
          isHome: function (t) {
            return "/" === t.current;
          },
          current: function (t) {
            return t.current;
          },
          getCurrentView: function (t) {
            for (var e = 0; e < t.routes.length; e++)
              if (t.routes[e].path === t.current) return t.routes[e];
            return null;
          },
          getRoute: function (t) {
            return function (e) {
              for (var n = 0; n < t.routes.length; n++)
                if (t.routes[n].path === e) return t.routes[n];
            };
          },
          getHistory: function (t) {
            return t.history;
          },
        },
        actions: {
          routerPush: function (t, e) {
            var n = t.commit,
              i = t.state;
            if (
              !i.routes.some(function (t) {
                return t.path === e;
              })
            )
              throw "Unrecognised route";
            (i.current && i.current === e) ||
              (n("changeCurrentView", e), n("addHistory", e));
          },
          routerBack: function (t) {
            var e = t.commit,
              n = t.dispatch;
            e("previousRoute"), n("hideOverlay");
          },
          addRoutes: function (t, e) {
            var n = t.commit;
            if (
              e.map(function (t) {
                return t.path;
              }).size < e.length
            )
              throw "Duplicate routes";
            n("registerRoutes", e);
          },
          updateRoute: function (t, e) {
            for (var n = t.state, i = 0; i < n.routes.length; i++)
              if (n.routes[i].path === e.path) {
                void 0 !== e.hasBack && (n.routes[i].hasBack = e.hasBack);
                break;
              }
          },
          clearHistory: function (t) {
            (0, t.commit)("unsetHistory");
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
          hideOverlay: function (t) {
            var e = t.state,
              n = t.dispatch;
            ("/" !== e.current &&
              "chat" !== e.current &&
              "prechat" !== e.current &&
              0 !== e.history.length) ||
              n("overlay/showOverlay", !1, { root: !0 });
          },
          removeRoute: function (t, e) {
            (0, t.commit)("ejectRoute", e);
          },
        },
        mutations: {
          changeCurrentView: function (t, e) {
            t.current = e;
          },
          addHistory: function (t, e) {
            t.history.length > 14 && t.history.splice(0, 1), t.history.push(e);
          },
          previousRoute: function (t) {
            t.history.pop();
            var e = t.history.length - 1,
              n = t.history[e];
            t.current = n || "/";
          },
          registerRoutes: function (t, e) {
            t.routes = e;
          },
          unsetHistory: function (t) {
            t.history = [];
          },
          ejectRoute: function (t, e) {
            for (var n = 0; n < t.history.length; n++)
              if (t.history[n] === e) {
                t.history.splice(n, 1);
                break;
              }
          },
          unsetData: function (t) {
            for (
              var e = { root: null, current: "/", history: [], routes: [] },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    e4b3: function (t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        namespaced: !0,
        state: { isEnabled: !1, slots: [], timezone: {} },
        getters: {
          isEnabled: function (t) {
            return t.isEnabled;
          },
          slots: function (t) {
            return t.slots;
          },
          timezone: function (t) {
            return t.timezone;
          },
        },
        actions: {
          addSlots: function (t, e) {
            var n = t.commit,
              i = t.state,
              r = [];
            if (
              (e && void 0 !== e.enabled
                ? n("setStatus", e.enabled)
                : n("setStatus", !!e),
              i.isEnabled)
            ) {
              var o = e.config ? e.config.schedule : [];
              Array.isArray(o)
                ? (r = o)
                : Object.keys(o).forEach(function (t) {
                    var e = o[t];
                    (0 === e.start && 0 === e.end) ||
                      r.push({
                        day: parseInt(t, 10),
                        start: Math.floor(e.start / 6e4),
                        end: Math.floor(e.end / 6e4),
                      });
                  }),
                n("setSlots", r);
            } else n("resetSlots");
          },
          updateTimezone: function (t, e) {
            (0, t.commit)(
              "setTimezone",
              e
                ? { tzo: void 0 !== e.tzo ? e.tzo : e.offset, utc: e.utc }
                : null
            );
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
        },
        mutations: {
          resetSlots: function (t) {
            t.slots = [];
          },
          setTimezone: function (t, e) {
            t.timezone = e;
          },
          setSlots: function (t, e) {
            t.slots = e;
          },
          setStatus: function (t, e) {
            t.isEnabled = !!e;
          },
          unsetData: function (t) {
            for (
              var e = { isEnabled: !1, slots: [], timezone: {} },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    f406: function (t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        namespaced: !0,
        state: { agentIsTyping: !1, isReady: !1, isConnecting: !1, stack: [] },
        getters: {
          agentIsTyping: function (t) {
            return t.agentIsTyping;
          },
          isReady: function (t) {
            return t.isReady;
          },
          isConnecting: function (t) {
            return t.isConnecting;
          },
        },
        actions: {
          updateEvent: function (t, e) {
            (0, t.commit)("setEvent", e);
          },
          updateIsReady: function (t, e) {
            var n = t.commit;
            (0, t.dispatch)("session/sendNavigationEvent", {}, { root: !0 }),
              n("setIsReady", e),
              n("setIsConnecting", !1);
          },
          updateIsConnecting: function (t, e) {
            (0, t.commit)("setIsConnecting", e);
          },
          resetState: function (t) {
            (0, t.commit)("unsetData");
          },
        },
        mutations: {
          setEvent: function (t, e) {
            t[e.event] = e.value;
          },
          setIsReady: function (t, e) {
            t.isReady = e;
          },
          setIsConnecting: function (t, e) {
            t.isConnecting = e;
          },
          unsetData: function (t) {
            for (
              var e = {
                  agentIsTyping: !1,
                  isReady: !1,
                  isConnecting: !1,
                  stack: [],
                },
                n = Object.keys(e),
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              t[r] = e[r];
            }
          },
        },
      };
    },
    fad2: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var i = n("d3a4"),
        r = {
          isGeneratedName: function (t) {
            return /^V[0-9]{16}$/.test(t);
          },
          parseVisitorName: function (t) {
            return this.isGeneratedName(t)
              ? i.a
                ? i.a.$i18n("chat", "default_name")
                : "You"
              : t;
          },
          formatVisitorLoginData: function (t) {
            var e = {};
            return (
              Object.keys(t).forEach(function (n) {
                "hash" !== n &&
                "userId" !== n &&
                "name" !== n &&
                "email" !== n &&
                "phone" !== n
                  ? (void 0 === e.attributes && (e.attributes = {}),
                    (e.attributes[n] = t[n]))
                  : (e[n] = t[n]);
              }),
              e
            );
          },
        };
    },
  },
]);
//# sourceMappingURL=twk-chunk-common.js.map
