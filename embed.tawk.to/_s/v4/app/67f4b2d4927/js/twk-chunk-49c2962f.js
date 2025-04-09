/*! For license information please see twk-chunk-49c2962f.js.LICENSE */
(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-49c2962f"],
  {
    3519: function (t, e, a) {
      "use strict";
      var r = a("2f62"),
        i = a("f0b0"),
        n = { name: "TawkSpinner" },
        s = a("2877"),
        o = Object(s.a)(
          n,
          function () {
            return this._self._c, this._m(0);
          },
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "lds-spinner loader",
                  attrs: { role: "status" },
                },
                [
                  t("div", { staticClass: "spin spin-1" }),
                  t("div", { staticClass: "spin spin-2" }),
                  t("div", { staticClass: "spin spin-3" }),
                  t("div", { staticClass: "spin spin-4" }),
                  t("div", { staticClass: "spin spin-5" }),
                  t("div", { staticClass: "spin spin-6" }),
                  t("div", { staticClass: "spin spin-7" }),
                  t("div", { staticClass: "spin spin-8" }),
                  t("div", { staticClass: "spin spin-9" }),
                  t("div", { staticClass: "spin spin-10" }),
                  t("div", { staticClass: "spin spin-11" }),
                  t("div", { staticClass: "spin spin-12" }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports;
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
      function l() {
        l = function () {
          return e;
        };
        var t,
          e = {},
          a = Object.prototype,
          r = a.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, a) {
              t[e] = a.value;
            },
          n = "function" == typeof Symbol ? Symbol : {},
          s = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          u = n.toStringTag || "@@toStringTag";
        function d(t, e, a) {
          return (
            Object.defineProperty(t, e, {
              value: a,
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
          d = function (t, e, a) {
            return (t[e] = a);
          };
        }
        function h(t, e, a, r) {
          var n = e && e.prototype instanceof w ? e : w,
            s = Object.create(n.prototype),
            o = new E(r || []);
          return i(s, "_invoke", { value: $(t, a, o) }), s;
        }
        function m(t, e, a) {
          try {
            return { type: "normal", arg: t.call(e, a) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = h;
        var f = "suspendedStart",
          p = "executing",
          g = "completed",
          b = {};
        function w() {}
        function v() {}
        function y() {}
        var k = {};
        d(k, s, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          O = x && x(x(B([])));
        O && O !== a && r.call(O, s) && (k = O);
        var S = (y.prototype = w.prototype = Object.create(k));
        function T(t) {
          ["next", "throw", "return"].forEach(function (e) {
            d(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function C(t, e) {
          function a(i, n, s, o) {
            var l = m(t[i], t, n);
            if ("throw" !== l.type) {
              var u = l.arg,
                d = u.value;
              return d && "object" == c(d) && r.call(d, "__await")
                ? e.resolve(d.__await).then(
                    function (t) {
                      a("next", t, s, o);
                    },
                    function (t) {
                      a("throw", t, s, o);
                    }
                  )
                : e.resolve(d).then(
                    function (t) {
                      (u.value = t), s(u);
                    },
                    function (t) {
                      return a("throw", t, s, o);
                    }
                  );
            }
            o(l.arg);
          }
          var n;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  a(t, r, e, i);
                });
              }
              return (n = n ? n.then(i, i) : i());
            },
          });
        }
        function $(e, a, r) {
          var i = f;
          return function (n, s) {
            if (i === p) throw Error("Generator is already running");
            if (i === g) {
              if ("throw" === n) throw s;
              return { value: t, done: !0 };
            }
            for (r.method = n, r.arg = s; ; ) {
              var o = r.delegate;
              if (o) {
                var c = _(o, r);
                if (c) {
                  if (c === b) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === f) throw ((i = g), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = p;
              var l = m(e, a, r);
              if ("normal" === l.type) {
                if (((i = r.done ? g : "suspendedYield"), l.arg === b))
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((i = g), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function _(e, a) {
          var r = a.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (a.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((a.method = "return"),
                (a.arg = t),
                _(e, a),
                "throw" === a.method)) ||
                ("return" !== r &&
                  ((a.method = "throw"),
                  (a.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              b
            );
          var n = m(i, e.iterator, a.arg);
          if ("throw" === n.type)
            return (
              (a.method = "throw"), (a.arg = n.arg), (a.delegate = null), b
            );
          var s = n.arg;
          return s
            ? s.done
              ? ((a[e.resultName] = s.value),
                (a.next = e.nextLoc),
                "return" !== a.method && ((a.method = "next"), (a.arg = t)),
                (a.delegate = null),
                b)
              : s
            : ((a.method = "throw"),
              (a.arg = new TypeError("iterator result is not an object")),
              (a.delegate = null),
              b);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var a = e[s];
            if (a) return a.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                n = function a() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (a.value = e[i]), (a.done = !1), a;
                  return (a.value = t), (a.done = !0), a;
                };
              return (n.next = n);
            }
          }
          throw new TypeError(c(e) + " is not iterable");
        }
        return (
          (v.prototype = y),
          i(S, "constructor", { value: y, configurable: !0 }),
          i(y, "constructor", { value: v, configurable: !0 }),
          (v.displayName = d(y, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === v || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), d(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(S)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          T(C.prototype),
          d(C.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = C),
          (e.async = function (t, a, r, i, n) {
            void 0 === n && (n = Promise);
            var s = new C(h(t, a, r, i), n);
            return e.isGeneratorFunction(a)
              ? s
              : s.next().then(function (t) {
                  return t.done ? t.value : s.next();
                });
          }),
          T(S),
          d(S, u, "Generator"),
          d(S, s, function () {
            return this;
          }),
          d(S, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              a = [];
            for (var r in e) a.push(r);
            return (
              a.reverse(),
              function t() {
                for (; a.length; ) {
                  var r = a.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var a in this)
                  "t" === a.charAt(0) &&
                    r.call(this, a) &&
                    !isNaN(+a.slice(1)) &&
                    (this[a] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var a = this;
              function i(r, i) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (a.next = r),
                  i && ((a.method = "next"), (a.arg = t)),
                  !!i
                );
              }
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var s = this.tryEntries[n],
                  o = s.completion;
                if ("root" === s.tryLoc) return i("end");
                if (s.tryLoc <= this.prev) {
                  var c = r.call(s, "catchLoc"),
                    l = r.call(s, "finallyLoc");
                  if (c && l) {
                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                  } else if (c) {
                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var n = i;
                  break;
                }
              }
              n &&
                ("break" === t || "continue" === t) &&
                n.tryLoc <= e &&
                e <= n.finallyLoc &&
                (n = null);
              var s = n ? n.completion : {};
              return (
                (s.type = t),
                (s.arg = e),
                n
                  ? ((this.method = "next"), (this.next = n.finallyLoc), b)
                  : this.complete(s)
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
                b
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var a = this.tryEntries[e];
                if (a.finallyLoc === t)
                  return this.complete(a.completion, a.afterLoc), P(a), b;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var a = this.tryEntries[e];
                if (a.tryLoc === t) {
                  var r = a.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    P(a);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, a, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: a, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                b
              );
            },
          }),
          e
        );
      }
      function u(t, e, a, r, i, n, s) {
        try {
          var o = t[n](s),
            c = o.value;
        } catch (t) {
          return void a(t);
        }
        o.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function d(t) {
        return function () {
          var e = this,
            a = arguments;
          return new Promise(function (r, i) {
            var n = t.apply(e, a);
            function s(t) {
              u(n, r, i, s, o, "next", t);
            }
            function o(t) {
              u(n, r, i, s, o, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function h(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function m(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != c(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != c(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == c(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var f = {
          name: "InlineForm",
          mixins: [a("e49c").a],
          components: {
            TawkInput: i.TawkInput,
            TawkTextarea: i.TawkTextarea,
            TawkRadio: i.TawkRadio,
            TawkCheckbox: i.TawkCheckbox,
            TawkButton: i.TawkButton,
            TawkIcon: i.TawkIcon,
          },
          props: {
            form: {
              type: Array,
              default: function () {
                return [];
              },
            },
            isSubmitting: { type: Boolean, default: !1 },
            submissionError: { type: String, default: null },
          },
          data: function () {
            return { formFields: this.form, values: [] };
          },
          watch: {
            isNotValidEmail: function (t) {
              var e = this;
              this.formFields.forEach(function (a) {
                "email" === a.type &&
                  null != e.isNotValidEmail &&
                  (a.invalidType = t);
              });
            },
            name: function (t, e) {
              t !== e && this.updateFormValues();
            },
            email: function (t, e) {
              t !== e && this.updateFormValues();
            },
          },
          mounted: function () {
            this.updateFormValues();
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var a = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? h(Object(a), !0).forEach(function (e) {
                    m(t, e, a[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(a)
                  )
                : h(Object(a)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(a, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(r.c)({
              name: "visitor/name",
              email: "visitor/getEmailValue",
              isNotValidEmail: "session/isNotValidEmail",
            })
          ),
          methods: {
            submitForm: function () {
              var t = this;
              return d(
                l().mark(function e() {
                  var a, r, i;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.formatInlineFormData();
                        case 2:
                          if (
                            ((a = e.sent),
                            (r = a.formData),
                            !(i = a.error) || (!i.hasError && !i.message))
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (
                            t.$emit(
                              "update:submissionError",
                              null == i ? void 0 : i.message
                            ),
                            e.abrupt("return")
                          );
                        case 8:
                          t.$emit("update:submissionError", ""),
                            t.$emit("submit", r);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            updateFormValues: function () {
              var t = this;
              return d(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.formatFields(t.formFields);
                        case 2:
                          return (
                            (t.formFields = e.sent),
                            (e.next = 5),
                            t.formFields.forEach(function (e) {
                              t.$set(t.values, e.id, e.value);
                            })
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        p = Object(s.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "tawk-margin-small-top" },
              [
                e(
                  "form",
                  {
                    ref: "tawk-inline-form",
                    attrs: { name: "tawk-inline-form" },
                  },
                  t._l(t.formFields, function (a, r) {
                    return e(
                      "fieldset",
                      { key: r },
                      [
                        "text" === a.type
                          ? e("tawk-input", {
                              ref: a.id,
                              refInFor: !0,
                              staticClass:
                                "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                              attrs: {
                                label: a.label,
                                isRequired: a.isRequired,
                                errorMessage: a.errorMessage,
                                value: t.values[a.id],
                                invalidType: a.invalidType,
                              },
                              on: {
                                "update:errorMessage": function (e) {
                                  return t.$set(a, "errorMessage", e);
                                },
                                "update:error-message": function (e) {
                                  return t.$set(a, "errorMessage", e);
                                },
                                "update:error": function (e) {
                                  return t.setError(e, a);
                                },
                                "update:invalidType": [
                                  function (e) {
                                    return t.setInvalidType(e, a);
                                  },
                                  function (e) {
                                    return t.$set(a, "invalidType", e);
                                  },
                                ],
                                "update:invalid-type": function (e) {
                                  return t.$set(a, "invalidType", e);
                                },
                                input: function (e) {
                                  return t.setValue(e, a);
                                },
                              },
                              model: {
                                value: t.values[a.id],
                                callback: function (e) {
                                  t.$set(t.values, a.id, e);
                                },
                                expression: "values[field.id]",
                              },
                            })
                          : t._e(),
                        "name" === a.type ||
                        "email" === a.type ||
                        "phone" === a.type
                          ? e("tawk-input", {
                              ref: a.id,
                              refInFor: !0,
                              staticClass:
                                "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                              attrs: {
                                validation: a.type,
                                label: a.label,
                                isRequired: a.isRequired,
                                errorMessage: a.errorMessage,
                                value: t.values[a.id],
                                invalidType: a.invalidType,
                                name: "phone" === a.type ? "tel" : a.type,
                              },
                              on: {
                                "update:errorMessage": function (e) {
                                  return t.$set(a, "errorMessage", e);
                                },
                                "update:error-message": function (e) {
                                  return t.$set(a, "errorMessage", e);
                                },
                                "update:error": function (e) {
                                  return t.setError(e, a);
                                },
                                "update:invalidType": [
                                  function (e) {
                                    return t.setInvalidType(e, a);
                                  },
                                  function (e) {
                                    return t.$set(a, "invalidType", e);
                                  },
                                ],
                                "update:invalid-type": function (e) {
                                  return t.$set(a, "invalidType", e);
                                },
                                input: function (e) {
                                  return t.setValue(e, a);
                                },
                              },
                              model: {
                                value: t.values[a.id],
                                callback: function (e) {
                                  t.$set(t.values, a.id, e);
                                },
                                expression: "values[field.id]",
                              },
                            })
                          : t._e(),
                        "textarea" === a.type || "message" === a.type
                          ? e("tawk-textarea", {
                              ref: a.id,
                              refInFor: !0,
                              staticClass:
                                "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                              attrs: {
                                label: a.label,
                                isRequired: a.isRequired,
                                errorMessage: a.errorMessage,
                                value: t.values[a.id],
                                invalidType: a.invalidType,
                              },
                              on: {
                                "update:errorMessage": function (e) {
                                  return t.$set(a, "errorMessage", e);
                                },
                                "update:error-message": function (e) {
                                  return t.$set(a, "errorMessage", e);
                                },
                                "update:error": function (e) {
                                  return t.setError(e, a);
                                },
                                "update:invalidType": [
                                  function (e) {
                                    return t.setInvalidType(e, a);
                                  },
                                  function (e) {
                                    return t.$set(a, "invalidType", e);
                                  },
                                ],
                                "update:invalid-type": function (e) {
                                  return t.$set(a, "invalidType", e);
                                },
                                input: function (e) {
                                  return t.setValue(e, a);
                                },
                              },
                              model: {
                                value: t.values[a.id],
                                callback: function (e) {
                                  t.$set(t.values, a.id, e);
                                },
                                expression: "values[field.id]",
                              },
                            })
                          : t._e(),
                        "radio" === a.type
                          ? e("tawk-radio", {
                              ref: a.id,
                              refInFor: !0,
                              staticClass:
                                "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                              attrs: {
                                label: a.label,
                                options: a.selections,
                                isRequired: a.isRequired,
                                errorMessage: a.errorMessage,
                              },
                              on: {
                                input: function (e) {
                                  return t.setValue(e, a);
                                },
                              },
                            })
                          : t._e(),
                        "checkbox" === a.type
                          ? e("tawk-checkbox", {
                              ref: a.id,
                              refInFor: !0,
                              staticClass:
                                "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                              attrs: {
                                label: a.label,
                                value: a.value,
                                options: a.selections,
                                isRequired: a.isRequired,
                                errorMessage: a.errorMessage,
                              },
                            })
                          : t._e(),
                        "dropdown" === a.type
                          ? e(
                              "select",
                              {
                                ref: a.id,
                                refInFor: !0,
                                staticClass:
                                  "tawk-select tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                                on: {
                                  input: function (e) {
                                    return t.setValue(e.target.value, a);
                                  },
                                },
                              },
                              [
                                a.label
                                  ? e(
                                      "option",
                                      { attrs: { selected: "", disabled: "" } },
                                      [t._v(" " + t._s(a.label) + " ")]
                                    )
                                  : t._e(),
                                t._l(a.selections, function (a, r) {
                                  return e(
                                    "option",
                                    { key: r, domProps: { value: a.label } },
                                    [t._v(" " + t._s(a.label) + " ")]
                                  );
                                }),
                              ],
                              2
                            )
                          : t._e(),
                      ],
                      1
                    );
                  }),
                  0
                ),
                t.submissionError
                  ? e(
                      "p",
                      {
                        staticClass:
                          "tawk-margin-xsmall tawk-text-red-1 tawk-text-regular-1",
                      },
                      [t._v(" " + t._s(t.submissionError) + " ")]
                    )
                  : t._e(),
                e(
                  "tawk-button",
                  {
                    attrs: {
                      label: t.$i18n("form", "submit_button"),
                      disabled: t.isSubmitting,
                    },
                    on: { click: t.submitForm },
                  },
                  [
                    t.isSubmitting
                      ? e(
                          "div",
                          { staticClass: "tawk-flex tawk-flex-center" },
                          [e("div", { staticClass: "tawk-spinner-loader" })]
                        )
                      : [
                          e("tawk-icon", { attrs: { type: "mobile-send" } }),
                          t._v(
                            " " + t._s(t.$i18n("form", "submit_button")) + " "
                          ),
                        ],
                  ],
                  2
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        g = a("bdd0"),
        b = a("5868");
      function w(t) {
        return (w =
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
      function v() {
        v = function () {
          return e;
        };
        var t,
          e = {},
          a = Object.prototype,
          r = a.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, a) {
              t[e] = a.value;
            },
          n = "function" == typeof Symbol ? Symbol : {},
          s = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          c = n.toStringTag || "@@toStringTag";
        function l(t, e, a) {
          return (
            Object.defineProperty(t, e, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, a) {
            return (t[e] = a);
          };
        }
        function u(t, e, a, r) {
          var n = e && e.prototype instanceof g ? e : g,
            s = Object.create(n.prototype),
            o = new E(r || []);
          return i(s, "_invoke", { value: $(t, a, o) }), s;
        }
        function d(t, e, a) {
          try {
            return { type: "normal", arg: t.call(e, a) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var h = "suspendedStart",
          m = "executing",
          f = "completed",
          p = {};
        function g() {}
        function b() {}
        function y() {}
        var k = {};
        l(k, s, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          O = x && x(x(B([])));
        O && O !== a && r.call(O, s) && (k = O);
        var S = (y.prototype = g.prototype = Object.create(k));
        function T(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function C(t, e) {
          function a(i, n, s, o) {
            var c = d(t[i], t, n);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == w(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      a("next", t, s, o);
                    },
                    function (t) {
                      a("throw", t, s, o);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), s(l);
                    },
                    function (t) {
                      return a("throw", t, s, o);
                    }
                  );
            }
            o(c.arg);
          }
          var n;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  a(t, r, e, i);
                });
              }
              return (n = n ? n.then(i, i) : i());
            },
          });
        }
        function $(e, a, r) {
          var i = h;
          return function (n, s) {
            if (i === m) throw Error("Generator is already running");
            if (i === f) {
              if ("throw" === n) throw s;
              return { value: t, done: !0 };
            }
            for (r.method = n, r.arg = s; ; ) {
              var o = r.delegate;
              if (o) {
                var c = _(o, r);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === h) throw ((i = f), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = m;
              var l = d(e, a, r);
              if ("normal" === l.type) {
                if (((i = r.done ? f : "suspendedYield"), l.arg === p))
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((i = f), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function _(e, a) {
          var r = a.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (a.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((a.method = "return"),
                (a.arg = t),
                _(e, a),
                "throw" === a.method)) ||
                ("return" !== r &&
                  ((a.method = "throw"),
                  (a.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              p
            );
          var n = d(i, e.iterator, a.arg);
          if ("throw" === n.type)
            return (
              (a.method = "throw"), (a.arg = n.arg), (a.delegate = null), p
            );
          var s = n.arg;
          return s
            ? s.done
              ? ((a[e.resultName] = s.value),
                (a.next = e.nextLoc),
                "return" !== a.method && ((a.method = "next"), (a.arg = t)),
                (a.delegate = null),
                p)
              : s
            : ((a.method = "throw"),
              (a.arg = new TypeError("iterator result is not an object")),
              (a.delegate = null),
              p);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var a = e[s];
            if (a) return a.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                n = function a() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (a.value = e[i]), (a.done = !1), a;
                  return (a.value = t), (a.done = !0), a;
                };
              return (n.next = n);
            }
          }
          throw new TypeError(w(e) + " is not iterable");
        }
        return (
          (b.prototype = y),
          i(S, "constructor", { value: y, configurable: !0 }),
          i(y, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(y, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(S)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          T(C.prototype),
          l(C.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = C),
          (e.async = function (t, a, r, i, n) {
            void 0 === n && (n = Promise);
            var s = new C(u(t, a, r, i), n);
            return e.isGeneratorFunction(a)
              ? s
              : s.next().then(function (t) {
                  return t.done ? t.value : s.next();
                });
          }),
          T(S),
          l(S, c, "Generator"),
          l(S, s, function () {
            return this;
          }),
          l(S, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              a = [];
            for (var r in e) a.push(r);
            return (
              a.reverse(),
              function t() {
                for (; a.length; ) {
                  var r = a.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var a in this)
                  "t" === a.charAt(0) &&
                    r.call(this, a) &&
                    !isNaN(+a.slice(1)) &&
                    (this[a] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var a = this;
              function i(r, i) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (a.next = r),
                  i && ((a.method = "next"), (a.arg = t)),
                  !!i
                );
              }
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var s = this.tryEntries[n],
                  o = s.completion;
                if ("root" === s.tryLoc) return i("end");
                if (s.tryLoc <= this.prev) {
                  var c = r.call(s, "catchLoc"),
                    l = r.call(s, "finallyLoc");
                  if (c && l) {
                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                  } else if (c) {
                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var n = i;
                  break;
                }
              }
              n &&
                ("break" === t || "continue" === t) &&
                n.tryLoc <= e &&
                e <= n.finallyLoc &&
                (n = null);
              var s = n ? n.completion : {};
              return (
                (s.type = t),
                (s.arg = e),
                n
                  ? ((this.method = "next"), (this.next = n.finallyLoc), p)
                  : this.complete(s)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var a = this.tryEntries[e];
                if (a.finallyLoc === t)
                  return this.complete(a.completion, a.afterLoc), P(a), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var a = this.tryEntries[e];
                if (a.tryLoc === t) {
                  var r = a.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    P(a);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, a, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: a, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                p
              );
            },
          }),
          e
        );
      }
      function y(t, e, a, r, i, n, s) {
        try {
          var o = t[n](s),
            c = o.value;
        } catch (t) {
          return void a(t);
        }
        o.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function k(t) {
        return function () {
          var e = this,
            a = arguments;
          return new Promise(function (r, i) {
            var n = t.apply(e, a);
            function s(t) {
              y(n, r, i, s, o, "next", t);
            }
            function o(t) {
              y(n, r, i, s, o, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function x(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(a), !0).forEach(function (e) {
                S(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : x(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function S(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != w(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != w(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == w(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var T = {
          name: "chat-body-messsage-bubble",
          components: {
            TawkCard: i.TawkCard,
            TawkSpinner: o,
            TawkAlert: i.TawkAlert,
            TawkEmoji: i.TawkEmoji,
            TawkIcon: i.TawkIcon,
            TawkButton: i.TawkButton,
            TawkChatBubble: i.TawkChatBubble,
            TawkInput: i.TawkInput,
            TawkTextarea: i.TawkTextarea,
            TawkTimeago: i.TawkTimeago,
            TawkInlineForm: p,
          },
          data: function () {
            return {
              ticketForm: {
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                referenceId: this.msg.ticketFormRef,
                isSubmitting: !1,
                submissionError: null,
                submissionSuccess: !1,
                invalid: {
                  name: null,
                  email: null,
                  phone: null,
                  subject: null,
                  message: null,
                },
              },
              leadForm: {
                name: "",
                email: "",
                phone: "",
                message: "",
                referenceId: this.msg.leadFormRef,
                isSubmitting: !1,
                submissionError: null,
                submissionSuccess: !1,
                invalid: {
                  name: null,
                  email: null,
                  phone: null,
                  message: null,
                },
              },
            };
          },
          props: {
            msg: { type: Object, required: !0 },
            barMessageRerence: { type: String, default: null },
            emojiEnabled: { type: Boolean, default: !0 },
          },
          mounted: function () {
            (this.ticketForm.name = this.name),
              (this.ticketForm.email = this.email),
              (this.leadForm.name = this.name),
              (this.leadForm.email = this.email);
          },
          watch: {
            name: function (t, e) {
              t !== e && ((this.ticketForm.name = t), (this.leadForm.name = t));
            },
            email: function (t, e) {
              t !== e &&
                ((this.ticketForm.email = t), (this.leadForm.email = t));
            },
          },
          computed: O(
            O(
              {},
              Object(r.c)({
                name: "visitor/name",
                email: "visitor/getEmailValue",
                formRefs: "chat/formRefs",
                propertyId: "property/id",
                widgetId: "widget/id",
                os: "browserData/os",
                forms: "form/forms",
              })
            ),
            {},
            {
              getTicketImageUrl: function () {
                return "".concat(
                  "https://embed.tawk.to/_s/v4/assets",
                  "/images/ticket-submit-success.svg"
                );
              },
              hasTicketFormSubmit: function () {
                return (
                  !!this.msg.ticketFormRef &&
                  this.formRefs[this.msg.ticketFormRef]
                );
              },
              hasLeadFormSubmit: function () {
                return (
                  !!this.msg.leadFormRef && this.formRefs[this.msg.leadFormRef]
                );
              },
              getLeadForm: function () {
                var t;
                if (this.msg.leadFormRef) {
                  var e = this.forms.find(function (t) {
                    return "lead-capture-form" === t.formId;
                  });
                  return (
                    (null == e || null === (t = e.content) || void 0 === t
                      ? void 0
                      : t.fields) || []
                  );
                }
              },
            }
          ),
          methods: {
            handleAttachmentProps: function (t) {
              return k(
                v().mark(function e() {
                  var a, r;
                  return v().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.fileType),
                            (r = {}),
                            (e.next = 4),
                            t.attachments.forEach(function (e) {
                              "image" === e.type
                                ? r.images.push({
                                    source: e.fileLink,
                                    name: e.fileName,
                                  })
                                : "video" === a
                                ? r.videos.push({
                                    name: t.fileName,
                                    source: "selfhosted",
                                    url: t.fileLink,
                                    options: {
                                      controls: "",
                                      mute: !0,
                                      loop: !1,
                                      startTime: "0",
                                    },
                                    size: t.humanizeFileSize,
                                  })
                                : "audio" === a
                                ? r.audios.push({
                                    source: t.fileLink,
                                    type: t.data.file.mimetype,
                                    name: t.fileName,
                                    size: t.humanizeFileSize,
                                  })
                                : r.files.push({
                                    source: t.fileLink,
                                    name: t.fileName,
                                    size: t.humanizeFileSize,
                                  });
                            })
                          );
                        case 4:
                          return e.abrupt("return", r);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            sendTicketForm: function () {
              var t = this;
              return k(
                v().mark(function e() {
                  var a, r, i;
                  return v().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t.ticketForm.submissionError = null),
                              t.$refs["ticket-name-input"] &&
                                t.$refs["ticket-name-input"].validate(),
                              t.$refs["ticket-email-input"] &&
                                t.$refs["ticket-email-input"].validate(),
                              t.$refs["ticket-phone-input"] &&
                                t.$refs["ticket-phone-input"].validate(),
                              t.$refs["ticket-subject-input"] &&
                                t.$refs["ticket-subject-input"].validate(),
                              t.$refs["ticket-message-input"] &&
                                t.$refs["ticket-message-input"].validate(),
                              !(
                                t.ticketForm.invalid.name ||
                                t.ticketForm.invalid.email ||
                                t.ticketForm.invalid.subject ||
                                t.ticketForm.invalid.message
                              ))
                            ) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            return (
                              (t.ticketForm.isSubmitting = !0),
                              (e.prev = 9),
                              (e.next = 12),
                              t.$store.dispatch("session/checkTokenValidity")
                            );
                          case 12:
                            e.next = 18;
                            break;
                          case 14:
                            return (
                              (e.prev = 14),
                              (e.t0 = e.catch(9)),
                              console.error("[JSAPI/Login]", e.t0),
                              e.abrupt("return")
                            );
                          case 18:
                            (a = t.$TawkSessionManager.getStoredToken()) &&
                              (r = { "X-Tawk-Token": a }),
                              (i = {
                                referenceId: t.msg.ticketFormRef,
                                name: t.ticketForm.name,
                                email: t.ticketForm.email,
                                phone: t.ticketForm.phone || void 0,
                                subject: t.ticketForm.subject,
                                message: t.ticketForm.message,
                              }),
                              g.a.post(
                                "".concat(
                                  "https://va.tawk.to",
                                  "/v1/ticket/create"
                                ),
                                i,
                                r,
                                function (e, a) {
                                  if (e || a.error) {
                                    if (
                                      ((t.ticketForm.isSubmitting = !1),
                                      a && a.error)
                                    ) {
                                      if (
                                        "InternalServerError" === a.error.code
                                      )
                                        return void (t.ticketForm.submissionError =
                                          "The server is unavailable. Please try again.");
                                      if (
                                        "TooManyRequestsError" === a.error.code
                                      )
                                        return void (t.ticketForm.submissionError =
                                          "You have made too many requests.");
                                      if ("GoneError" === a.error.code)
                                        return void (t.ticketForm.submissionError =
                                          "Property is not available");
                                      if ("NotFoundError" === a.error.code)
                                        return void (t.ticketForm.submissionError =
                                          "Session not found");
                                    }
                                    t.ticketForm.submissionError =
                                      "Unable to submit form. Please try again";
                                  } else
                                    (t.ticketForm.isSubmitting = !1),
                                      (t.ticketForm.submissionSuccess = !0),
                                      t.$store.commit("chat/setFormRefs", {
                                        id: t.msg.ticketFormRef,
                                        done: !0,
                                      }),
                                      t.$nextTick(function () {
                                        t.$eventBus.$emit(
                                          "updateScrollPosition"
                                        );
                                      });
                                },
                                !1,
                                !0
                              );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[9, 14]]
                  );
                })
              )();
            },
            sendLeadForm: function (t) {
              var e = this;
              return k(
                v().mark(function a() {
                  var r, i, n;
                  return v().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (e.leadForm.isSubmitting = !0),
                              (e.leadForm.submissionError = null),
                              (a.prev = 2),
                              (a.next = 5),
                              e.$store.dispatch("session/checkTokenValidity")
                            );
                          case 5:
                            a.next = 11;
                            break;
                          case 7:
                            return (
                              (a.prev = 7),
                              (a.t0 = a.catch(2)),
                              console.error("[JSAPI/Login]", a.t0),
                              a.abrupt("return")
                            );
                          case 11:
                            (r = e.$TawkSessionManager.getStoredToken()) &&
                              (i = { "X-Tawk-Token": r }),
                              0 ===
                                (null ==
                                (n = O({ referenceId: e.msg.leadFormRef }, t))
                                  ? void 0
                                  : n.additionalInfo.length) &&
                                delete n.additionalInfo,
                              g.a.post(
                                "".concat(
                                  "https://va.tawk.to",
                                  "/v1/form/lead-capture/submit"
                                ),
                                n,
                                i,
                                function (t, a) {
                                  if (t || a.error) {
                                    if (
                                      ((e.leadForm.isSubmitting = !1),
                                      a && a.error)
                                    ) {
                                      if ("BadRequestError" === a.error.code)
                                        return void (e.leadForm.submissionError =
                                          "Invalid parameters");
                                      if ("NotFoundError" === a.error.code)
                                        return void (e.leadForm.submissionError =
                                          "Form reference not found.");
                                      if ("ConflictError" === a.error.code)
                                        return void (e.leadForm.submissionError =
                                          "Form already submitted");
                                      if (
                                        "InternalServerError" === a.error.code
                                      )
                                        return void (e.leadForm.submissionError =
                                          "The server is unavailable. Please try again.");
                                    }
                                    e.leadForm.submissionError =
                                      "Unable to submit form. Please try again";
                                  } else
                                    (e.leadForm.isSubmitting = !1),
                                      (e.leadForm.submissionSuccess = !0),
                                      e.$store.commit("chat/setFormRefs", {
                                        id: e.leadForm.referenceId,
                                        done: !0,
                                      }),
                                      e.$nextTick(function () {
                                        e.$eventBus.$emit(
                                          "updateScrollPosition"
                                        );
                                      });
                                },
                                !1,
                                !0
                              );
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[2, 7]]
                  );
                })
              )();
            },
            handleResendMessage: function (t) {
              this.$emit("resendMessage", t);
            },
            parseMDToHTML: function (t) {
              try {
                var e,
                  a = this.$TawkWindow.makeHtml(t);
                return (
                  ((a = a.replace(b.a.regLineBreaks, b.a.br)) instanceof
                    Error ||
                    void 0 === a) &&
                    this.$TawkLogger.reportError({
                      error: a,
                      source: {
                        name: "views/chat/body/message-bubble.vue",
                        method: "parseMDToHTML()",
                      },
                      data: {
                        propertyId: this.propertyId,
                        widgetId: this.widgetId,
                        os: this.os,
                        userAgent:
                          null === (e = navigator) || void 0 === e
                            ? void 0
                            : e.userAgent,
                      },
                    }),
                  a
                );
              } catch (e) {
                var r;
                return (
                  this.$TawkLogger.reportError({
                    error: e,
                    source: {
                      name: "views/chat/body/message-bubble.vue",
                      method: "parseMDToHTML()",
                    },
                    data: {
                      propertyId: this.propertyId,
                      widgetId: this.widgetId,
                      os: this.os,
                      userAgent:
                        null === (r = navigator) || void 0 === r
                          ? void 0
                          : r.userAgent,
                    },
                  }),
                  t
                );
              }
            },
          },
        },
        C = Object(s.a)(
          T,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: t.msg.messageId,
                staticClass: "tawk-message-bubble",
                attrs: { id: "messageId-".concat(t.msg.messageId) },
              },
              [
                t.msg.showBar && t.barMessageRerence
                  ? e("div", { staticStyle: { position: "relative" } }, [
                      e("div", [
                        e(
                          "span",
                          {
                            staticStyle: {
                              position: "absolute",
                              right: "0",
                              background: "#fff",
                              transform: "translate(0, -50%)",
                              padding: "0 10px",
                            },
                          },
                          [t._v(t._s(t.$i18n("chat", "new_messages")))]
                        ),
                        e("hr"),
                      ]),
                    ])
                  : t._e(),
                "c" === t.msg.type
                  ? [
                      e(
                        "div",
                        {
                          staticClass: "tawk-flex tawk-flex-bottom",
                          class: [
                            "v" == t.msg.senderType
                              ? "tawk-visitor-chat"
                              : "tawk-agent-chat",
                          ],
                          on: {
                            mouseenter: function (e) {
                              return t.$emit("onMouseEnter");
                            },
                          },
                        },
                        [
                          "v" === t.msg.senderType
                            ? e(
                                "div",
                                {
                                  staticClass: "tawk-flex-none",
                                  staticStyle: { "min-width": "40px" },
                                },
                                [
                                  t.msg.time
                                    ? e("tawk-timeago", {
                                        staticClass: "tawk-time-display",
                                        attrs: {
                                          datetime: t.msg.time,
                                          isLive: !1,
                                          timeOnly: !0,
                                        },
                                      })
                                    : t._e(),
                                ],
                                1
                              )
                            : t._e(),
                          e(
                            "div",
                            {
                              staticClass:
                                "tawk-message-body tawk-margin-xsmall-left",
                              class: [
                                "v" !== t.msg.senderType
                                  ? "tawk-margin-xsmall-right"
                                  : "",
                              ],
                            },
                            [
                              t.msg.isPending
                                ? e("tawk-spinner", {
                                    class: [
                                      "v" !== t.msg.senderType
                                        ? "lds-spinner-left"
                                        : "",
                                    ],
                                  })
                                : t._e(),
                              [
                                t.msg.rawMessage.md && t.msg.rawMessage.md.rt
                                  ? e(
                                      "div",
                                      { staticClass: "tawk-chat-rating" },
                                      [
                                        e("tawk-icon", {
                                          attrs: {
                                            type: t.msg.message,
                                            size: "xxlarge",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t.msg.attchs || t.msg.message
                                  ? e(
                                      "tawk-chat-bubble",
                                      {
                                        class: [
                                          "v" == t.msg.senderType
                                            ? "tawk-visitor-chat-bubble"
                                            : "tawk-agent-chat-bubble",
                                          "tawk-text-regular-4",
                                        ],
                                        attrs: { attachments: t.msg.attchs },
                                      },
                                      [
                                        t.msg.message
                                          ? e("tawk-emoji", {
                                              attrs: {
                                                emoji: t.parseMDToHTML(
                                                  t.msg.message
                                                ),
                                                enabled: t.emojiEnabled,
                                              },
                                            })
                                          : t._e(),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                "v" !== t.msg.senderType && t.msg.ticketFormRef
                                  ? e(
                                      "div",
                                      [
                                        t.hasTicketFormSubmit ||
                                        t.ticketForm.submissionSuccess
                                          ? [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "tawk-chat-alert",
                                                },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tawk-chat-alert-content",
                                                    },
                                                    [
                                                      e(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "tawk-text-regular-2",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.$i18n(
                                                                "form",
                                                                "ticket_form_success_message"
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      e("tawk-timeago", {
                                                        staticClass:
                                                          "tawk-margin-xsmall-top",
                                                        attrs: {
                                                          datetime: t.msg.time,
                                                          isLive: !0,
                                                          isDuration: !0,
                                                          timeOnly: !0,
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          : [
                                              e("tawk-input", {
                                                ref: "ticket-name-input",
                                                staticClass:
                                                  "tawk-margin-small-top tawk-margin-small-bottom",
                                                attrs: {
                                                  label: t.$i18n(
                                                    "form",
                                                    "name"
                                                  ),
                                                  isRequired: !0,
                                                  value: t.ticketForm.name,
                                                  invalidType:
                                                    t.ticketForm.invalid.name,
                                                  errorMessage: {
                                                    required: t.$i18n(
                                                      "form",
                                                      "required_error_message"
                                                    ),
                                                  },
                                                },
                                                on: {
                                                  "update:invalidType":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "name",
                                                        e
                                                      );
                                                    },
                                                  "update:invalid-type":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "name",
                                                        e
                                                      );
                                                    },
                                                },
                                                model: {
                                                  value: t.ticketForm.name,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.ticketForm,
                                                      "name",
                                                      e
                                                    );
                                                  },
                                                  expression: "ticketForm.name",
                                                },
                                              }),
                                              e("tawk-input", {
                                                ref: "ticket-email-input",
                                                staticClass:
                                                  "tawk-margin-small",
                                                attrs: {
                                                  label: t.$i18n(
                                                    "form",
                                                    "email"
                                                  ),
                                                  isRequired: !0,
                                                  value: t.ticketForm.email,
                                                  invalidType:
                                                    t.ticketForm.invalid.email,
                                                  errorMessage: {
                                                    required: t.$i18n(
                                                      "form",
                                                      "required_error_message"
                                                    ),
                                                    email: t.$i18n(
                                                      "form",
                                                      "email_error_message"
                                                    ),
                                                  },
                                                },
                                                on: {
                                                  "update:invalidType":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "email",
                                                        e
                                                      );
                                                    },
                                                  "update:invalid-type":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "email",
                                                        e
                                                      );
                                                    },
                                                },
                                                model: {
                                                  value: t.ticketForm.email,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.ticketForm,
                                                      "email",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "ticketForm.email",
                                                },
                                              }),
                                              e("tawk-input", {
                                                ref: "ticket-phone-input",
                                                staticClass:
                                                  "tawk-margin-small",
                                                attrs: {
                                                  label: t.$i18n(
                                                    "form",
                                                    "phone"
                                                  ),
                                                  isRequired: !1,
                                                  value: t.ticketForm.phone,
                                                  invalidType:
                                                    t.ticketForm.invalid.phone,
                                                  errorMessage: {
                                                    required: t.$i18n(
                                                      "form",
                                                      "required_error_message"
                                                    ),
                                                  },
                                                },
                                                on: {
                                                  "update:invalidType":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "phone",
                                                        e
                                                      );
                                                    },
                                                  "update:invalid-type":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "phone",
                                                        e
                                                      );
                                                    },
                                                },
                                                model: {
                                                  value: t.ticketForm.phone,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.ticketForm,
                                                      "phone",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "ticketForm.phone",
                                                },
                                              }),
                                              e("tawk-input", {
                                                ref: "ticket-subject-input",
                                                staticClass:
                                                  "tawk-margin-small",
                                                attrs: {
                                                  label: t.$i18n(
                                                    "form",
                                                    "subject"
                                                  ),
                                                  isRequired: !0,
                                                  value: t.ticketForm.subject,
                                                  invalidType:
                                                    t.ticketForm.invalid
                                                      .subject,
                                                  errorMessage: {
                                                    required: t.$i18n(
                                                      "form",
                                                      "required_error_message"
                                                    ),
                                                  },
                                                },
                                                on: {
                                                  "update:invalidType":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "subject",
                                                        e
                                                      );
                                                    },
                                                  "update:invalid-type":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "subject",
                                                        e
                                                      );
                                                    },
                                                },
                                                model: {
                                                  value: t.ticketForm.subject,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.ticketForm,
                                                      "subject",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "ticketForm.subject",
                                                },
                                              }),
                                              e("tawk-textarea", {
                                                ref: "ticket-message-input",
                                                staticClass:
                                                  "tawk-margin-small",
                                                attrs: {
                                                  label: t.$i18n(
                                                    "form",
                                                    "message"
                                                  ),
                                                  isRequired: !0,
                                                  value: t.ticketForm.message,
                                                  invalidType:
                                                    t.ticketForm.invalid
                                                      .message,
                                                  errorMessage: {
                                                    required: t.$i18n(
                                                      "form",
                                                      "required_error_message"
                                                    ),
                                                  },
                                                },
                                                on: {
                                                  "update:invalidType":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "message",
                                                        e
                                                      );
                                                    },
                                                  "update:invalid-type":
                                                    function (e) {
                                                      return t.$set(
                                                        t.ticketForm.invalid,
                                                        "message",
                                                        e
                                                      );
                                                    },
                                                },
                                                model: {
                                                  value: t.ticketForm.message,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.ticketForm,
                                                      "message",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "ticketForm.message",
                                                },
                                              }),
                                              t.ticketForm.submissionError
                                                ? e(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "tawk-margin-xsmall tawk-text-red-1 tawk-text-regular-1",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.ticketForm
                                                            .submissionError
                                                        )
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                              e(
                                                "tawk-button",
                                                {
                                                  attrs: {
                                                    label: t.$i18n(
                                                      "form",
                                                      "submit_button"
                                                    ),
                                                    disabled:
                                                      t.ticketForm.isSubmitting,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.sendTicketForm();
                                                    },
                                                  },
                                                },
                                                [
                                                  t.ticketForm.isSubmitting
                                                    ? e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tawk-flex tawk-flex-center",
                                                        },
                                                        [
                                                          e("div", {
                                                            staticClass:
                                                              "tawk-spinner-loader",
                                                          }),
                                                        ]
                                                      )
                                                    : [
                                                        e("tawk-icon", {
                                                          attrs: {
                                                            type: "mobile-send",
                                                          },
                                                        }),
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.$i18n(
                                                                "form",
                                                                "submit_button"
                                                              )
                                                            ) +
                                                            " "
                                                        ),
                                                      ],
                                                ],
                                                2
                                              ),
                                            ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                                "v" !== t.msg.senderType && t.msg.leadFormRef
                                  ? e(
                                      "div",
                                      [
                                        t.hasLeadFormSubmit ||
                                        t.leadForm.submissionSuccess
                                          ? [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "tawk-chat-alert",
                                                },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tawk-chat-alert-content",
                                                    },
                                                    [
                                                      e(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "tawk-text-regular-2",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.$i18n(
                                                                "form",
                                                                "lead_form_success_message"
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      e("tawk-timeago", {
                                                        staticClass:
                                                          "tawk-margin-xsmall-top",
                                                        attrs: {
                                                          datetime: t.msg.time,
                                                          isLive: !0,
                                                          isDuration: !0,
                                                          timeOnly: !0,
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          : [
                                              t.getLeadForm.length
                                                ? e("tawk-inline-form", {
                                                    attrs: {
                                                      form: t.getLeadForm,
                                                      isSubmitting:
                                                        t.leadForm.isSubmitting,
                                                      submissionError:
                                                        t.leadForm
                                                          .submissionError,
                                                    },
                                                    on: {
                                                      "update:submissionError":
                                                        function (e) {
                                                          return t.$set(
                                                            t.leadForm,
                                                            "submissionError",
                                                            e
                                                          );
                                                        },
                                                      "update:submission-error":
                                                        function (e) {
                                                          return t.$set(
                                                            t.leadForm,
                                                            "submissionError",
                                                            e
                                                          );
                                                        },
                                                      submit: t.sendLeadForm,
                                                    },
                                                  })
                                                : t._e(),
                                            ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ],
                            ],
                            2
                          ),
                          "v" !== t.msg.senderType
                            ? e(
                                "div",
                                {
                                  staticClass: "tawk-flex-none",
                                  staticStyle: { "min-width": "40px" },
                                },
                                [
                                  t.msg.time
                                    ? e("tawk-timeago", {
                                        staticClass: "tawk-time-display",
                                        attrs: {
                                          datetime: t.msg.time,
                                          isLive: !1,
                                          timeOnly: !0,
                                        },
                                      })
                                    : t._e(),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      ),
                      t.msg.sendFailed
                        ? e(
                            "div",
                            { staticClass: "tawk-chat-resend" },
                            [
                              e(
                                "p",
                                [
                                  e("tawk-icon", {
                                    attrs: { type: "error", size: "small" },
                                  }),
                                  e("span", [t._v("Failed")]),
                                ],
                                1
                              ),
                              e(
                                "tawk-button",
                                {
                                  attrs: {
                                    label: t.$i18n("chat", "resend"),
                                    isText: !0,
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.handleResendMessage(t.msg);
                                    },
                                  },
                                },
                                [t._v(" Resend ")]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ]
                  : t._e(),
                "v" === t.msg.senderType && "n" === t.msg.type
                  ? e(
                      "div",
                      [
                        e(
                          "tawk-card",
                          { attrs: { color: "inverse", size: "xsmall" } },
                          [
                            e(
                              "tawk-alert",
                              {
                                attrs: {
                                  title: t.msg.message,
                                  description: "",
                                  icon: "alert",
                                },
                              },
                              [
                                e("tawk-timeago", {
                                  staticClass: "tawk-time-display",
                                  attrs: {
                                    slot: "alert-description",
                                    datetime: t.msg.time,
                                    isLive: !1,
                                    timeOnly: !0,
                                  },
                                  slot: "alert-description",
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
                e("div", { staticClass: "clearfix" }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        $ = a("2966");
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
      function j(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(a), !0).forEach(function (e) {
                E(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : j(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function E(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != _(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != _(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == _(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      function B(t, e) {
        var a =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!a) {
          if (
            Array.isArray(t) ||
            (a = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return F(t, e);
                var a = {}.toString.call(t).slice(8, -1);
                return (
                  "Object" === a && t.constructor && (a = t.constructor.name),
                  "Map" === a || "Set" === a
                    ? Array.from(t)
                    : "Arguments" === a ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                    ? F(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            a && (t = a);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var n,
          s = !0,
          o = !1;
        return {
          s: function () {
            a = a.call(t);
          },
          n: function () {
            var t = a.next();
            return (s = t.done), t;
          },
          e: function (t) {
            (o = !0), (n = t);
          },
          f: function () {
            try {
              s || null == a.return || a.return();
            } finally {
              if (o) throw n;
            }
          },
        };
      }
      function F(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, r = Array(e); a < e; a++) r[a] = t[a];
        return r;
      }
      var L = {
          name: "chat-body",
          props: {
            isLoading: { type: Boolean, default: !0 },
            messageBlocks: {
              type: Array,
              default: function () {
                return [];
              },
            },
            barMessageRerence: { type: String, default: null },
            isHistory: { type: Boolean, default: !1 },
            emojiEnabled: { type: Boolean, default: !0 },
          },
          data: function () {
            return { showTime: !1, showSurveryOptions: !0 };
          },
          components: {
            TawkAvatar: i.TawkAvatar,
            TawkIcon: i.TawkIcon,
            SurveyOptions: $.a,
            ChatMessageBubble: C,
          },
          methods: {
            onMouseEnter: function () {
              this.showTime = !0;
            },
            callStatus: function (t) {
              return t.isMissed || t.isRejected ? "danger" : "success";
            },
            callTitle: function (t) {
              return t.isDone
                ? t.isRejected
                  ? this.$i18n("chat", "rejected_call")
                  : t.isMissed
                  ? this.$i18n(
                      "chat",
                      "missed_" + ("v" === t.caller.t ? "agent" : "visitor")
                    )
                  : this.$i18n("chat", "completed_call")
                : this.$i18n("chat", "ongoing_call");
            },
            callDescription: function (t) {
              var e = new Date(t.startedAt),
                a = e.getHours(),
                r = e.getMinutes();
              if (t.isDone) {
                if (
                  (a < 10 && (a = "0" + a),
                  r < 10 && (r = "0" + r),
                  t.isRejected || t.isMissed)
                )
                  return this.$i18n("chat", "call_started_on", {
                    startedOn: "".concat(a, ":").concat(r),
                  });
                var i,
                  n,
                  s,
                  o = 6e4,
                  c = 60 * o,
                  l =
                    new Date(t.endedAt).getTime() -
                    new Date(t.startedAt).getTime();
                return (
                  l >= c
                    ? ((i = Math.round(l / c)), (s = "hours"))
                    : l >= o
                    ? ((i = Math.round(l / o)), (s = "minutes"))
                    : ((i = Math.round(l / 1e3)), (s = "seconds")),
                  (n = this.$i18n("chat", s, { num: i })),
                  this.$i18n("chat", "call_end_details", {
                    startedOn: "".concat(a, ":").concat(r),
                    duration: n,
                  })
                );
              }
              return "";
            },
            callIcon: function (t) {
              return t.isVideo
                ? "video-chat"
                : t.isScreenshare
                ? "screenshare"
                : "call";
            },
            submitSurvey: function (t) {
              var e = this;
              this.isHistory ||
                (this.$TawkChatManager.sendMessage({ message: t }),
                (this.showSurveryOptions = !1),
                this.$nextTick(function () {
                  e.$eventBus.$emit("updateScrollPosition");
                }));
            },
            imageLoaded: function () {
              this.$emit("imageLoaded", !0);
            },
            resendMessage: function (t) {
              for (var e = 0; e < this.messageBlocks.length; e++) {
                var a = this.messageBlocks[e];
                if (a.blockId === t.blockId) {
                  for (var r = 0; r < a.messages.length; r++)
                    if (a.messages[r].messageId === t.messageId) {
                      a.messages.splice(r, 1);
                      break;
                    }
                  break;
                }
              }
              this.$TawkChatManager.sendMessage({
                message: t.rawMessage.m,
                attachments: t.rawMessage.attchs,
              });
            },
            getMessageBlockClasses: function (t) {
              var e = this.messageBlocks.findIndex(function (e) {
                return e.blockId === t.blockId;
              });
              if (e + 1 < this.messageBlocks.length) {
                var a = this.messageBlocks[e + 1];
                if (
                  "v" === t.senderType &&
                  "a" === a.senderType &&
                  1 === a.messages.length &&
                  !this.showSender(a.messages)
                )
                  return "tawk-flex tawk-flex-bottom tawk-message-block";
                if (
                  "a" === t.senderType &&
                  1 === t.messages.length &&
                  !this.showSender(t.messages)
                )
                  return "tawk-flex tawk-flex-bottom tawk-message-block";
              }
              return "tawk-margin-small-bottom tawk-flex tawk-flex-bottom tawk-message-block";
            },
            showSender: function (t) {
              var e,
                a = !1,
                r = B(t);
              try {
                for (r.s(); !(e = r.n()).done; ) {
                  var i = e.value;
                  if (i.message.length || i.attchs) {
                    a = !0;
                    break;
                  }
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
              return a;
            },
          },
          computed: P(
            P(
              {},
              Object(r.c)({
                agents: "chat/agents",
                chatTransferData: "chat/chatTransferData",
              })
            ),
            {},
            {
              getSurveyOptions: function () {
                var t = this,
                  e = {};
                if (this.messageBlocks.length) {
                  var a = this.messageBlocks.length - 1,
                    r = this.messageBlocks[a];
                  if ("call" !== r.messageType && r.messages.length) {
                    var i = r.messages.length - 1,
                      n = r.messages[i];
                    n.surveyObj &&
                      (((e = n.surveyObj).senderType = n.senderType),
                      this.$nextTick(function () {
                        t.$eventBus.$emit("updateScrollPosition");
                      }));
                  }
                }
                return e;
              },
            }
          ),
        },
        M = Object(s.a)(
          L,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLoading,
                    expression: "!isLoading",
                  },
                ],
                ref: "tawk-chat-message-container",
                staticClass: "tawk-chat-message-container",
              },
              [
                null !== t.chatTransferData
                  ? e(
                      "div",
                      { staticClass: "tawk-chat-inline-alert-wrapper" },
                      [
                        e(
                          "div",
                          { staticClass: "tawk-chat-inline-alert" },
                          [
                            e("tawk-icon", {
                              attrs: { type: "alert", size: "small" },
                            }),
                            e("p", [t._v("You're being transferred.")]),
                          ],
                          1
                        ),
                      ]
                    )
                  : t._e(),
                e(
                  "transition-group",
                  { attrs: { name: "list" } },
                  t._l(t.messageBlocks, function (a) {
                    return e(
                      "div",
                      {
                        key: a.blockId,
                        ref: a.blockId,
                        refInFor: !0,
                        class: t.getMessageBlockClasses(a),
                        attrs: { id: "blockId-".concat(a.blockId) },
                      },
                      [
                        "call" === a.messageType
                          ? [
                              a.callData && !a.callData.hasError
                                ? e(
                                    "div",
                                    {
                                      staticClass:
                                        "tawk-chat-alert tawk-chat-alert-icon tawk-margin-medium-top tawk-margin-small-bottom",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "tawk-chat-alert-floating-icon",
                                        },
                                        [
                                          e("tawk-icon", {
                                            attrs: {
                                              type: t.callIcon(a.callData),
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "tawk-chat-alert-content",
                                        },
                                        [
                                          e(
                                            "p",
                                            {
                                              staticClass:
                                                "tawk-text-regular-3",
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.callTitle(a.callData)
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                          e(
                                            "p",
                                            {
                                              staticClass:
                                                "tawk-text-regular-1 tawk-text-grey-2",
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.callDescription(
                                                      a.callData
                                                    )
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                : e(
                                    "div",
                                    {
                                      staticClass:
                                        "tawk-chat-alert tawk-chat-alert-icon tawk-margin-xlarge-top tawk-margin-small-bottom",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "tawk-chat-alert-floating-icon",
                                        },
                                        [
                                          e("tawk-icon", {
                                            attrs: { type: "call" },
                                          }),
                                        ],
                                        1
                                      ),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "tawk-chat-alert-content",
                                        },
                                        [
                                          e("p", [
                                            t._v(
                                              t._s(
                                                t.$i18n("chat", "error_title")
                                              )
                                            ),
                                          ]),
                                          e("p", [
                                            t._v(
                                              t._s(
                                                t.$i18n(
                                                  "chat",
                                                  "call_error_load"
                                                )
                                              )
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                            ]
                          : [
                              "c" === a.messageType &&
                              "v" !== a.senderType &&
                              t.showSender(a.messages)
                                ? e("tawk-avatar", {
                                    staticClass:
                                      "tawk-message-profile tawk-flex-none",
                                    class:
                                      Object.keys(t.agents).length > 1
                                        ? "tawk-margin-bottom"
                                        : "",
                                    attrs: {
                                      size: "small",
                                      src: a.profileImage,
                                      alt: "".concat(
                                        t.$i18n("chat", "agent_profile_image")
                                      ),
                                    },
                                  })
                                : t._e(),
                              e(
                                "div",
                                {
                                  staticClass: "tawk-message-group tawk-flex-1",
                                  class: [
                                    "v" == a.senderType
                                      ? "tawk-margin-auto-left"
                                      : "",
                                  ],
                                },
                                [
                                  e(
                                    "div",
                                    { staticClass: "tawk-messages" },
                                    t._l(a.messages, function (a) {
                                      return e(
                                        "div",
                                        {
                                          key: a.messageId,
                                          class:
                                            "v" === a.senderType
                                              ? "tawk-visitor"
                                              : "tawk-agent",
                                        },
                                        [
                                          (a.message && a.message.length) ||
                                          a.ticketFormRef ||
                                          a.leadFormRef ||
                                          a.attchs
                                            ? e("chat-message-bubble", {
                                                attrs: {
                                                  msg: a,
                                                  emojiEnabled: t.emojiEnabled,
                                                  barMessageRerence:
                                                    t.barMessageRerence,
                                                },
                                                on: {
                                                  onMouseEnter: t.onMouseEnter,
                                                  resendMessage:
                                                    t.resendMessage,
                                                },
                                              })
                                            : t._e(),
                                        ],
                                        1
                                      );
                                    }),
                                    0
                                  ),
                                  "v" != a.senderType
                                    ? e(
                                        "p",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                Object.keys(t.agents).length >
                                                  1 && t.showSender(a.messages),
                                              expression:
                                                "Object.keys(agents).length > 1 &&\n\t\t\t\t\t\t\tshowSender(block.messages)",
                                            },
                                          ],
                                          staticClass:
                                            "tawk-margin-xsmall-left tawk-text-regular-2 tawk-text-truncate",
                                        },
                                        [
                                          t._v(
                                            " " + t._s(a.messages[0].name) + " "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]
                              ),
                            ],
                      ],
                      2
                    );
                  }),
                  0
                ),
                !t.isHistory &&
                Object.keys(t.getSurveyOptions).length &&
                "v" !== t.getSurveyOptions.senderType
                  ? e(
                      "div",
                      {
                        staticClass:
                          "tawk-margin-top tawk-margin-small-bottom tawk-flex tawk-flex-bottom tawk-message-block",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "tawk-message-group tawk-flex-1 tawk-margin-auto-left",
                          },
                          [
                            e(
                              "div",
                              { staticClass: "tawk-message-bubble" },
                              [
                                e("survey-options", {
                                  attrs: {
                                    options: t.getSurveyOptions.options,
                                  },
                                  on: { selectSurvey: t.submitSurvey },
                                }),
                              ],
                              1
                            ),
                            e("div", { staticClass: "clearfix" }),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = M.exports;
    },
    "38d6": function (t, e, a) {
      "use strict";
      a.r(e);
      var r = a("2f62"),
        i = a("7f46"),
        n = a("f0b0");
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
      function o(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(a), !0).forEach(function (e) {
                l(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : o(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function l(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != s(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != s(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == s(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var u = {
          name: "home-header",
          components: {
            TawkImage: n.TawkImage,
            TawkVideo: n.TawkVideo,
            KnowledgeBaseSearch: function () {
              return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"));
            },
            AgentCard: function () {
              return a.e("chunk-2d0c8894").then(a.bind(null, "54fe"));
            },
            TawkEmoji: n.TawkEmoji,
          },
          props: { state: { type: String, default: "online" } },
          data: function () {
            return { header: {}, refreshHeader: !0 };
          },
          mounted: function () {
            this.state &&
              this.states[this.state] &&
              (this.header = this.states[this.state].header);
          },
          computed: c(
            c(
              {},
              Object(r.c)({
                states: "widget/states",
                pageStatus: "session/pageStatus",
                chatVersion: "chat/chatVersion",
                mobileBrowserName: "browserData/mobileBrowserName",
                emojiEnabled: "widget/emojiEnabled",
              })
            ),
            {},
            {
              logoUrl: function () {
                return "https://tawk.link";
              },
            }
          ),
          watch: {
            state: function () {
              var t = this;
              (this.refreshHeader = !1),
                (this.header = {}),
                this.$nextTick(function () {
                  (t.refreshHeader = !0),
                    t.state &&
                      t.states[t.state] &&
                      (t.header = t.states[t.state].header);
                });
            },
          },
          methods: {
            convertToHTML: function (t) {
              return i.a.markdownToHtml(t);
            },
          },
        },
        d = a("2877"),
        h = Object(d.a)(
          u,
          function () {
            var t = this,
              e = t._self._c;
            return t.refreshHeader
              ? e(
                  "div",
                  t._l(t.header, function (a, r) {
                    return e(
                      "div",
                      { key: r },
                      [
                        "logo" === a.type
                          ? e(
                              "div",
                              {
                                class: [
                                  "header-card card--" + a.type,
                                  a.content.alignment &&
                                    "card--alignment-".concat(
                                      a.content.alignment
                                    ),
                                ],
                              },
                              [
                                e("tawk-image", {
                                  attrs: {
                                    src: ""
                                      .concat(t.logoUrl, "/")
                                      .concat(a.content.image.content),
                                    alt: "".concat(
                                      t.$i18n("home", "logo_image")
                                    ),
                                    role: "logo",
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        "heading" === a.type
                          ? e("div", { class: "header-card card--" + a.type }, [
                              e(
                                "p",
                                {
                                  staticClass:
                                    "tawk-text-bold-4 tawk-header-text tawk-custom-color",
                                  class: [
                                    a.content.alignment &&
                                      "card--alignment-".concat(
                                        a.content.alignment
                                      ),
                                  ],
                                  attrs: { role: "heading" },
                                },
                                [
                                  e("tawk-emoji", {
                                    attrs: {
                                      emoji: t.convertToHTML(a.content.value),
                                      enabled: t.emojiEnabled,
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                        "text" === a.type
                          ? e("div", { class: "header-card card--" + a.type }, [
                              e(
                                "p",
                                {
                                  staticClass:
                                    "tawk-text-regular-4 tawk-header-text tawk-custom-color",
                                  class: [
                                    a.content.alignment &&
                                      "card--alignment-".concat(
                                        a.content.alignment
                                      ),
                                  ],
                                },
                                [
                                  e("tawk-emoji", {
                                    attrs: {
                                      emoji: t.convertToHTML(a.content.value),
                                      enabled: t.emojiEnabled,
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                        "agents" === a.type
                          ? e(
                              "div",
                              {
                                class: [
                                  "tawk-flex card--" + a.type,
                                  a.content.alignment &&
                                    "card--flex-".concat(a.content.alignment),
                                ],
                              },
                              [
                                e("agent-card", {
                                  attrs: { agentIds: a.content.agentIds },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        "image" === a.type
                          ? e(
                              "div",
                              { class: "header-card card--" + a.type },
                              [
                                e(
                                  a.content.link ? "a" : "div",
                                  {
                                    tag: "component",
                                    attrs: {
                                      href: a.content.link
                                        ? a.content.link.ref
                                        : null,
                                      target:
                                        a.content.link &&
                                        "blank" === a.content.link.target
                                          ? "_blank"
                                          : "_top",
                                    },
                                  },
                                  [
                                    e("tawk-image", {
                                      staticClass: "tawk-custom-image",
                                      attrs: {
                                        position: a.content.alignment,
                                        src: a.content.image.content,
                                        alt: a.content.image.content,
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : t._e(),
                        "video" === a.type
                          ? e(
                              "div",
                              { class: "header-card card--" + a.type },
                              [
                                e("tawk-video", {
                                  attrs: {
                                    content: {
                                      source: a.content.source,
                                      url: a.content.url,
                                      options: a.content.config,
                                    },
                                    isMobile: !!t.mobileBrowserName,
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        "kb-search" === a.type
                          ? e("knowledge-base-search", {
                              attrs: { content: a.content },
                            })
                          : t._e(),
                      ],
                      1
                    );
                  }),
                  0
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = h.exports;
    },
    "3f09": function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return n;
      });
      var r = a("f0b0"),
        i = a("028e"),
        n = {
          data: function () {
            return { headerClass: "" };
          },
          methods: {
            displayMessages: function (t) {
              var e,
                a = t.message,
                n = void 0 === a ? {} : a,
                s = t.isIncoming,
                o = void 0 !== s && s,
                c = t.isLive,
                l = void 0 === c || c,
                u = this.isScrollBarBottom(),
                d = l
                  ? this.$store.getters["chat/messageBlocks"]
                  : this.$store.getters["history/messageBlocks"];
              if (!n.profileImage && n.data && n.data.rsc) {
                var h = this.$store.getters["chat/agentProfile"](n.data.rsc);
                if (!h) return;
                n.profileImage = h.profileImage;
              }
              if (
                (d.length > 0 &&
                  "c" === n.type &&
                  ((e = d[d.length - 1]).ownerId === n.ownerId
                    ? ((n.blockId = e.blockId), e.messages.push(n))
                    : (e = null)),
                n.timeStamp > this.lastMessageTimestamp &&
                  ("v" === n.senderType
                    ? this.$store.dispatch(
                        "session/updateVisitorChatSeen",
                        n.timeStamp
                      )
                    : (this.unseenMessages.push(n),
                      ("chat" === this.currentRoute && u && !this.isLoading) ||
                        this.barMessageId ||
                        ((n.showBar = !0),
                        (this.barMessageId = n.messageId),
                        (this.barMessageRerence = n)))),
                o &&
                  "a" === n.senderType &&
                  n.data &&
                  n.data.rsc &&
                  this.removeAgentIsTyping(n.data.rsc),
                n.isCallView)
              ) {
                i.a.callStatusUpdate({ clid: n.callId, f: {} });
                var m = {
                  ownerId: n.callId,
                  callData: n.callData,
                  messageType: "call",
                  blockId: r.Helper.generateUUID(),
                  callId: n.callId,
                };
                l
                  ? this.$store.dispatch("chat/addMessageBlock", m)
                  : this.$store.dispatch("history/addMessageBlock", m);
              } else if (!e) {
                if (void 0 === n.ownerId && "n" === n.type) return;
                var f = {
                  ownerId: n.ownerId,
                  messages: [n],
                  senderType: n.senderType,
                  messageType: n.type,
                  blockId: r.Helper.generateUUID(),
                  profileImage: n.profileImage,
                };
                (n.blockId = f.blockId),
                  l
                    ? this.$store.dispatch("chat/addMessageBlock", f)
                    : this.$store.dispatch("history/addMessageBlock", f);
              }
              o &&
                ("v" === n.senderType || u
                  ? this.scrollToBottom()
                  : this.checkBarPosition());
            },
            isScrollBarBottom: function () {
              var t = this.$refs["tawk-chat-panel"];
              if (t) {
                var e = t.offsetHeight + 10;
                return t.scrollHeight - (t.scrollTop + e) < 30;
              }
            },
          },
        };
    },
    "4b3e": function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return o;
      });
      var r = a("2f62");
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
      function n(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function s(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != i(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
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
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var o = {
        data: function () {
          return { offVideo: !0 };
        },
        computed: (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? n(Object(a), !0).forEach(function (e) {
                  s(t, e, a[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
              : n(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(a, e)
                  );
                });
          }
          return t;
        })(
          {},
          Object(r.c)({
            chatWindowState: "session/chatWindowState",
            currentRoute: "router/current",
          })
        ),
        watch: {
          chatWindowState: function (t) {
            "min" === t ||
            ("/" !== this.currentRoute && "kb-article" !== this.currentRoute)
              ? (this.offVideo = !1)
              : (this.offVideo = !0);
          },
          currentRoute: function (t) {
            this.offVideo = "/" === t || "kb-article" === t;
          },
        },
      };
    },
    d6a3: function (t, e, a) {
      "use strict";
      a.r(e);
      var r = a("2f62"),
        i = a("f0b0"),
        n = a("5a60");
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
      function o(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(a), !0).forEach(function (e) {
                l(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : o(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function l(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != s(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != s(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == s(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var u = {
          name: "toolbar",
          components: {
            TawkIcon: i.TawkIcon,
            TawkButton: i.TawkButton,
            TawkDropdown: i.TawkDropdown,
            TawkAvatar: i.TawkAvatar,
          },
          directives: { TawkTooltip: i.TawkTooltip },
          data: function () {
            return { isOpen: !1 };
          },
          props: {
            currentView: {
              type: Object,
              default: function () {
                return {};
              },
            },
            borderRadiusTop: { type: String, default: "0px" },
            hasBackground: { type: Boolean, default: !0 },
            showBackButton: { default: !1 },
            showWebRtcButtons: { type: Boolean, default: !1 },
            showAgentAvatars: { default: !1 },
          },
          computed: c(
            c(
              {},
              Object(r.c)({
                isSoundEnabled: "widget/isSoundEnabled",
                localSoundEnabled: "widget/localSoundEnabled",
                isRoundWidget: "widget/isRoundWidget",
                mobileBrowserName: "browserData/mobileBrowserName",
                hasChatStarted: "chat/hasChatStarted",
                isWindowed: "widget/isWindowed",
                prechatFormSubmitted: "session/prechatFormSubmitted",
                isPrechatEnabled: "widget/isPrechatEnabled",
                pageStatus: "session/pageStatus",
                isRTL: "widget/isRTL",
                webrtcOptions: "widget/webrtcOptions",
                hasLiveChat: "widget/hasLiveChat",
                agentsCount: "chat/agentsCount",
                needConsent: "session/needConsent",
                currentRoute: "router/current",
                components: "widget/components",
                emailTranscriptEnabled: "widget/emailTranscriptEnabled",
                activeProfiles: "chat/activeProfiles",
                toolbarOptions: "widget/toolbarOptions",
                branding: "widget/branding",
                calls: "chat/calls",
                messageBlocks: "chat/messageBlocks",
                ongoingCall: "chat/ongoingCall",
                onClick: "widget/onClick",
              })
            ),
            {},
            {
              showWebrtcOptions: function () {
                return (
                  this.components.webrtc &&
                  "offline" !== this.pageStatus &&
                  this.webrtcOptions &&
                  this.webrtcOptions.enabled &&
                  (!this.isPrechatEnabled ||
                    (this.isPrechatEnabled && this.prechatFormSubmitted)) &&
                  this.showWebRtcButtons &&
                  !this.isBotOnly
                );
              },
              isBotOnly: function () {
                if (0 === this.activeProfiles.length) return !1;
                var t = !1;
                return this.activeProfiles[0].isBot && (t = !0), t;
              },
              wrapperClasses: function () {
                return this.hasBackground
                  ? [
                      "tawk-toolbar",
                      "tawk-card-primary",
                      "tawk-flex",
                      "tawk-card-small",
                      "tawk-flex-none",
                      "tawk-flex-middle",
                      "tawk-custom-color",
                    ]
                  : ["tawk-toolbar"];
              },
              isLiveChatFeatureEnabled: function () {
                return !!(
                  this.hasLiveChat ||
                  (this.hasChatStarted && this.agentsCount > 0)
                );
              },
              isHamburgerMenuVisible: function () {
                return (
                  "offline" !== this.pageStatus &&
                  ("chat" === this.currentRoute ||
                    "agents" === this.currentRoute)
                );
              },
              isAgentAvatarsVisible: function () {
                return !(
                  !this.showAgentAvatars ||
                  ("chat" !== this.currentRoute &&
                    "agents" !== this.currentRoute) ||
                  !(this.activeProfiles.length > 0)
                );
              },
              getActiveAgents: function () {
                var t = this.activeProfiles;
                return t < 2 ? t : t.slice(0, 1);
              },
            }
          ),
          methods: c(
            c(
              {},
              Object(r.b)({
                routerPush: "router/routerPush",
                routerBack: "router/routerBack",
                toggleLocalSound: "widget/toggleLocalSound",
                toggleWidget: "session/toggleWidget",
                showOverlay: "overlay/showOverlay",
              })
            ),
            {},
            {
              initiateCall: function (t, e) {
                this.$TawkChatManager.initiateCall(t, e);
              },
              popoutWidget: function () {
                this.$TawkWindow.popoutWidget();
              },
              toggleDropdown: function () {
                this.isOpen = !this.isOpen;
              },
              nameForm: function () {
                (this.isOpen = !1),
                  this.routerPush("name-form"),
                  this.showOverlay(!0);
              },
              emailTranscriptForm: function () {
                (this.isOpen = !1),
                  this.routerPush("email-transcript-form"),
                  this.showOverlay(!0);
              },
              convertToAvatarLink: function (t) {
                return t
                  ? 0 === t.indexOf("https://s3.amazonaws.com/tawk-to-pi") ||
                    0 === t.indexOf("https://embed.tawk.to/_s/v4/assets")
                    ? t
                    : ""
                        .concat("https://s3.amazonaws.com/tawk-to-pi", "/")
                        .concat(t)
                  : "".concat(
                      "https://embed.tawk.to/_s/v4/assets",
                      "/images/default-profile.svg"
                    );
              },
              toggleAgentsList: function () {
                this.routerPush("agents"), this.showOverlay(!0);
              },
            }
          ),
          mounted: function () {
            var t = this;
            this.$eventBus.$on("widgetOnFocus", function (e) {
              t.$refs["toolbar-button"] &&
                !t.$refs["toolbar-button"].$el.contains(e.target) &&
                (t.isOpen = !1);
            });
          },
        },
        d = a("2877"),
        h = Object(d.a)(
          u,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "adqe",
                class: t.wrapperClasses,
                style: { borderRadius: t.borderRadiusTop },
              },
              [
                e(
                  "div",
                  {
                    staticClass: "tawk-toolbar-nav",
                    attrs: { role: "navigation", "aria-label": "primary" },
                  },
                  [
                    t.showBackButton
                      ? e(
                          "div",
                          {
                            staticClass:
                              "tawk-route-back tawk-flex tawk-flex-middle",
                          },
                          [
                            e(
                              "tawk-button",
                              {
                                directives: [
                                  {
                                    name: "tawk-tooltip",
                                    rawName: "v-tawk-tooltip",
                                  },
                                ],
                                staticClass:
                                  "tawk-header-text tawk-button-hover",
                                attrs: {
                                  isText: !0,
                                  inverse: !0,
                                  "data-text": t.$i18n("rollover", "back"),
                                  "aria-label": t.$i18n("rollover", "back"),
                                  tabindex: "0",
                                },
                                on: { click: t.routerBack },
                              },
                              [
                                e("tawk-icon", {
                                  attrs: { type: "left-arrow", size: "small" },
                                }),
                              ],
                              1
                            ),
                            t.currentView.title && "agents" !== t.currentRoute
                              ? e(
                                  "span",
                                  {
                                    staticClass:
                                      "tawk-toolbar-title tawk-text-regular-3 tawk-header-text tawk-margin-xsmall-left tawk-custom-text-color-inverse",
                                  },
                                  [
                                    t._v(
                                      " " + t._s(t.currentView.title()) + " "
                                    ),
                                  ]
                                )
                              : t._e(),
                          ],
                          1
                        )
                      : t._e(),
                    e(
                      "transition",
                      { attrs: { name: "fade", mode: "out-in" } },
                      [
                        t.isAgentAvatarsVisible
                          ? e(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.toolbarOptions.showAgentAvatars,
                                    expression:
                                      "toolbarOptions.showAgentAvatars",
                                  },
                                ],
                                staticClass: "tawk-toolbar-agent-avatars",
                                on: { click: t.toggleAgentsList },
                              },
                              [
                                t._l(t.getActiveAgents, function (a, r) {
                                  return e("tawk-avatar", {
                                    key: r,
                                    attrs: {
                                      src: t.convertToAvatarLink(
                                        a.profileImage
                                      ),
                                      alt: "".concat(
                                        t.$i18n("chat", "agent_profile_image")
                                      ),
                                    },
                                  });
                                }),
                                e(
                                  "transition",
                                  { attrs: { name: "fade", mode: "out-in" } },
                                  [
                                    1 === t.activeProfiles.length
                                      ? e(
                                          "div",
                                          {
                                            staticClass:
                                              "tawk-toolbar-agent-details",
                                          },
                                          [
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "tawk-toolbar-agent-name tawk-text-truncate",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.getActiveAgents[0]
                                                        .displayName
                                                    ) +
                                                    " "
                                                ),
                                              ]
                                            ),
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "tawk-toolbar-agent-title tawk-text-truncate",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.getActiveAgents[0]
                                                        .profileTitle
                                                    ) +
                                                    " "
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : e("tawk-avatar", {
                                          attrs: {
                                            count: t.activeProfiles.length - 1,
                                          },
                                        }),
                                  ],
                                  1
                                ),
                              ],
                              2
                            )
                          : t._e(),
                      ]
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    staticClass:
                      "tawk-margin-auto-left tawk-flex-none tawk-flex tawk-flex-middle",
                    attrs: { role: "navigation", "aria-label": "secondary" },
                  },
                  [
                    t.showWebrtcOptions && !t.needConsent
                      ? e(
                          "div",
                          [
                            e(
                              "tawk-button",
                              {
                                directives: [
                                  {
                                    name: "tawk-tooltip",
                                    rawName: "v-tawk-tooltip",
                                  },
                                ],
                                staticClass:
                                  "tawk-header-text tawk-button-hover",
                                attrs: {
                                  isText: !0,
                                  inverse: !0,
                                  disabled: t.ongoingCall,
                                  "aria-label": t.$i18n(
                                    "rollover",
                                    "voice_call"
                                  ),
                                  "data-text": t.$i18n(
                                    "rollover",
                                    "voice_call"
                                  ),
                                  tabindex: "0",
                                },
                                on: { click: t.initiateCall },
                              },
                              [e("tawk-icon", { attrs: { type: "call" } })],
                              1
                            ),
                            t.webrtcOptions.video
                              ? e(
                                  "tawk-button",
                                  {
                                    directives: [
                                      {
                                        name: "tawk-tooltip",
                                        rawName: "v-tawk-tooltip",
                                      },
                                    ],
                                    staticClass:
                                      "tawk-header-text tawk-button-hover",
                                    attrs: {
                                      isText: !0,
                                      inverse: !0,
                                      disabled: t.ongoingCall,
                                      "aria-label": t.$i18n(
                                        "rollover",
                                        "video_call"
                                      ),
                                      "data-text": t.$i18n(
                                        "rollover",
                                        "video_call"
                                      ),
                                      tabindex: "0",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.initiateCall(!0, !1);
                                      },
                                    },
                                  },
                                  [
                                    e("tawk-icon", {
                                      attrs: { type: "video-chat" },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t.webrtcOptions.screen
                              ? e(
                                  "tawk-button",
                                  {
                                    directives: [
                                      {
                                        name: "tawk-tooltip",
                                        rawName: "v-tawk-tooltip",
                                      },
                                    ],
                                    staticClass:
                                      "tawk-header-text tawk-button-hover",
                                    attrs: {
                                      isText: !0,
                                      inverse: !0,
                                      disabled: t.ongoingCall,
                                      "aria-label": t.$i18n(
                                        "rollover",
                                        "screen_share"
                                      ),
                                      "data-text": t.$i18n(
                                        "rollover",
                                        "screen_share"
                                      ),
                                      tabindex: "0",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.initiateCall(!1, !0);
                                      },
                                    },
                                  },
                                  [
                                    e("tawk-icon", {
                                      attrs: { type: "screenshare" },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ],
                          1
                        )
                      : t._e(),
                    t.isHamburgerMenuVisible && !t.needConsent
                      ? e(
                          "tawk-dropdown",
                          {
                            ref: "toolbar-menu",
                            staticClass: "tawk-toolbar-menu",
                            attrs: {
                              isOpen: t.isOpen,
                              position: t.isRTL ? "left" : "right",
                              role: "menu",
                            },
                            on: {
                              "update:isOpen": function (e) {
                                t.isOpen = e;
                              },
                              "update:is-open": function (e) {
                                t.isOpen = e;
                              },
                            },
                          },
                          [
                            e(
                              "tawk-button",
                              {
                                directives: [
                                  {
                                    name: "tawk-tooltip",
                                    rawName: "v-tawk-tooltip",
                                  },
                                ],
                                ref: "toolbar-button",
                                staticClass:
                                  "tawk-header-text tawk-margin-auto-left tawk-flex-none tawk-button-hover",
                                attrs: {
                                  isText: !0,
                                  inverse: !0,
                                  "aria-label": t.$i18n(
                                    "rollover",
                                    "chat_menu"
                                  ),
                                  "data-text": t.$i18n("rollover", "chat_menu"),
                                  tabindex: "0",
                                },
                                nativeOn: {
                                  click: function (e) {
                                    return t.toggleDropdown.apply(
                                      null,
                                      arguments
                                    );
                                  },
                                },
                              },
                              [
                                e("tawk-icon", {
                                  attrs: { type: "hamburger-menu" },
                                }),
                              ],
                              1
                            ),
                            e(
                              "div",
                              { attrs: { slot: "menu" }, slot: "menu" },
                              [
                                e(
                                  "tawk-button",
                                  {
                                    staticClass:
                                      "tawk-text-left tawk-flex tawk-flex-middle",
                                    attrs: {
                                      label: t.$i18n("menu", "change_name"),
                                      isText: !0,
                                      size: "small",
                                      role: "button",
                                      tabindex: t.isOpen ? 0 : -1,
                                    },
                                    on: { click: t.nameForm },
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticStyle: { width: "25px" } },
                                      [
                                        e("tawk-icon", {
                                          staticStyle: { width: "20px" },
                                          attrs: {
                                            type: "change-name",
                                            size: "small",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t._v(
                                      " " +
                                        t._s(t.$i18n("menu", "change_name")) +
                                        " "
                                    ),
                                  ]
                                ),
                                t.emailTranscriptEnabled
                                  ? e(
                                      "tawk-button",
                                      {
                                        staticClass:
                                          "tawk-text-left tawk-flex tawk-flex-middle",
                                        attrs: {
                                          label: t.$i18n(
                                            "menu",
                                            "email_transcript"
                                          ),
                                          isText: !0,
                                          size: "small",
                                          role: "button",
                                          tabindex: t.isOpen ? 0 : -1,
                                        },
                                        on: { click: t.emailTranscriptForm },
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticStyle: { width: "25px" } },
                                          [
                                            e("tawk-icon", {
                                              attrs: {
                                                type: "email-transcript",
                                                size: "small",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.$i18n(
                                                "menu",
                                                "email_transcript"
                                              )
                                            ) +
                                            " "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                e(
                                  "tawk-button",
                                  {
                                    staticClass:
                                      "tawk-text-left tawk-flex tawk-flex-middle",
                                    attrs: {
                                      label: t.$i18n("menu", "sound_on"),
                                      isText: !0,
                                      size: "small",
                                      role: "button",
                                      tabindex: t.isOpen ? 0 : -1,
                                    },
                                    on: { click: t.toggleLocalSound },
                                  },
                                  [
                                    t.isSoundEnabled && t.localSoundEnabled
                                      ? e("div", [
                                          e(
                                            "span",
                                            {
                                              staticStyle: { width: "1.6rem" },
                                            },
                                            [
                                              e("tawk-icon", {
                                                attrs: {
                                                  type: "sound-on",
                                                  size: "medium",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          t._v(
                                            " " +
                                              t._s(
                                                t.$i18n("menu", "sound_on")
                                              ) +
                                              " "
                                          ),
                                        ])
                                      : e("div", [
                                          e(
                                            "span",
                                            {
                                              staticStyle: { width: "1.6rem" },
                                            },
                                            [
                                              e("tawk-icon", {
                                                attrs: {
                                                  type: "sound-off",
                                                  size: "medium",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          t._v(
                                            " " +
                                              t._s(
                                                t.$i18n("menu", "sound_off")
                                              ) +
                                              " "
                                          ),
                                        ]),
                                  ]
                                ),
                                t.isWindowed
                                  ? t._e()
                                  : e(
                                      "tawk-button",
                                      {
                                        staticClass:
                                          "tawk-text-left tawk-flex tawk-flex-middle",
                                        attrs: {
                                          label: t.$i18n(
                                            "menu",
                                            "popout_widget"
                                          ),
                                          isText: !0,
                                          size: "small",
                                          role: "button",
                                          tabindex: t.isOpen ? 0 : -1,
                                        },
                                        on: { click: t.popoutWidget },
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticStyle: { width: "1.6rem" } },
                                          [
                                            e("tawk-icon", {
                                              attrs: {
                                                type: "pop-out",
                                                size: "medium",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        t._v(
                                          t._s(
                                            t.$i18n("menu", "popout_widget")
                                          ) + " "
                                        ),
                                      ]
                                    ),
                                t.hasChatStarted
                                  ? e(
                                      "tawk-button",
                                      {
                                        staticClass:
                                          "tawk-text-left tawk-flex tawk-flex-middle",
                                        attrs: {
                                          label: t.$i18n(
                                            "menu",
                                            "end_chat_session"
                                          ),
                                          isText: !0,
                                          size: "small",
                                          role: "button",
                                          tabindex: t.isOpen ? 0 : -1,
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.$emit("showEndChat");
                                          },
                                        },
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticStyle: { width: "1.6rem" } },
                                          [
                                            e("tawk-icon", {
                                              attrs: {
                                                type: "end-chat",
                                                size: "small",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.$i18n(
                                                "menu",
                                                "end_chat_session"
                                              )
                                            ) +
                                            " "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t.branding && !t.branding.whitelabeled
                                  ? e(
                                      "tawk-button",
                                      {
                                        staticClass:
                                          "tawk-text-left tawk-flex tawk-flex-middle",
                                        attrs: {
                                          label: t.$i18n(
                                            "menu",
                                            "add_chat_to_your_website"
                                          ),
                                          href: t.branding.url,
                                          target: "blank",
                                          isText: !0,
                                          size: "small",
                                          role: "button",
                                          tabindex: t.isOpen ? 0 : -1,
                                        },
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticStyle: { width: "1.6rem" } },
                                          [
                                            e("tawk-icon", {
                                              attrs: {
                                                type: "message",
                                                size: "small",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.$i18n(
                                                "menu",
                                                "add_chat_to_your_website"
                                              )
                                            ) +
                                            " "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t.isWindowed ||
                    (t.isRoundWidget &&
                      !t.mobileBrowserName &&
                      "slide" !== this.onClick)
                      ? t._e()
                      : e(
                          "tawk-button",
                          {
                            directives: [
                              {
                                name: "tawk-tooltip",
                                rawName: "v-tawk-tooltip",
                              },
                            ],
                            staticClass:
                              "tawk-header-text tawk-flex-none tawk-button-hover tawk-custom-color",
                            attrs: {
                              isText: !0,
                              "data-text": t.$i18n("rollover", "minimize"),
                              "aria-label": t.$i18n("rollover", "minimize"),
                            },
                            nativeOn: {
                              click: function (e) {
                                return t.toggleWidget.apply(null, arguments);
                              },
                            },
                          },
                          [
                            e("tawk-icon", {
                              attrs: { type: "close", size: "small" },
                            }),
                          ],
                          1
                        ),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        m = a("7f46");
      function f(t) {
        return (f =
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
      function p(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(a), !0).forEach(function (e) {
                b(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : p(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function b(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != f(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != f(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == f(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var w = {
          name: "TawkMaximizeFooter",
          components: {
            TawkChatInput: i.TawkChatInput,
            TawkBranding: i.TawkBranding,
            TawkIcon: i.TawkIcon,
            TawkButton: i.TawkButton,
          },
          data: function () {
            return {
              isDraggedOver: !1,
              imageUrl: "".concat(
                "https://embed.tawk.to/_s/v4/assets",
                "/images/Tawky_16x16.svg"
              ),
              powerImageURL: "".concat(
                "https://embed.tawk.to/_s/v4/assets",
                "/images/power.svg"
              ),
            };
          },
          computed: g(
            g(
              {},
              Object(r.c)({
                isWindowed: "widget/isWindowed",
                mobileBrowserName: "browserData/mobileBrowserName",
                isEmbedded: "widget/isEmbedded",
                hasLiveChat: "widget/hasLiveChat",
                branding: "widget/branding",
                needConsent: "session/needConsent",
                pageStatus: "session/pageStatus",
                prechatFormSubmitted: "session/prechatFormSubmitted",
                isPrechatEnabled: "widget/isPrechatEnabled",
                getHistory: "router/getHistory",
                currentView: "router/getCurrentView",
                features: "widget/features",
                states: "widget/states",
                hasChatStarted: "chat/hasChatStarted",
                hasChatEnded: "chat/hasChatEnded",
              })
            ),
            {},
            {
              borderRadiusBottom: function () {
                return this.isWindowed ||
                  this.mobileBrowserName ||
                  this.isEmbedded
                  ? "0px"
                  : this.isRoundWidget
                  ? "0 0 5px 5px"
                  : "0px";
              },
              whitelabel: function () {
                if (this.branding.whitelabeled) {
                  var t = m.a.markdownToHtml(this.branding.text);
                  return (
                    t &&
                      "Chat U+26A1 by <b>tawk.to</b>" === t &&
                      (t = t.replace(
                        "U+26A1",
                        '<img src="'.concat(
                          this.powerImageURL,
                          '" style="max-width: 8px;" />'
                        )
                      )),
                    t &&
                      ":tawky: Add free <b>live chat</b> to your site" === t &&
                      (t = t.replace(
                        ":tawky:",
                        '<img src="'.concat(this.imageUrl, '" />')
                      )),
                    {
                      label: t,
                      url: this.branding.url,
                      textColor: this.branding.textColor,
                    }
                  );
                }
              },
              isChatInputBottom: function () {
                var t = !1,
                  e = this.states[this.pageStatus];
                return (
                  e &&
                    e.body.length &&
                    (t = "chat" === e.body[e.body.length - 1].type),
                  t
                );
              },
              isLiveChatFeatureEnabled: function () {
                return !!(
                  this.hasLiveChat ||
                  (this.hasChatStarted && this.agentsCount > 0)
                );
              },
              inputPlaceholder: function () {
                var t,
                  e = this.states[this.pageStatus];
                if (e && e.body && e.body.length)
                  for (var a = 0; a < e.body.length; a++) {
                    var r = e.body[a];
                    if ("chat" === r.type) {
                      t = r.content.inputPlaceholder;
                      break;
                    }
                  }
                return t;
              },
              mainFooterClasses: function () {
                return [
                  "tawk-card",
                  "tawk-card-inverse",
                  "tawk-card-xsmall",
                  "tawk-footer",
                  "tawk-flex-none",
                  this.isDraggedOver ? "has-dragover" : "",
                ];
              },
              showChatInput: function () {
                return (
                  this.currentView &&
                  (("/" === this.currentView.path &&
                    (this.hasChatStarted || this.isChatInputBottom)) ||
                    "chat" === this.currentView.path)
                );
              },
              showStartChatButton: function () {
                return (
                  this.hasLiveChat &&
                  "history-chat" === this.currentView.path &&
                  (!this.hasChatStarted || this.hasChatEnded)
                );
              },
              showReturnToLiveChatBtton: function () {
                return (
                  this.hasLiveChat &&
                  "history-chat" === this.currentView.path &&
                  this.hasChatStarted &&
                  !this.hasChatEnded
                );
              },
            }
          ),
          methods: g(
            g(
              {},
              Object(r.b)({
                routerPush: "router/routerPush",
                showOverlay: "overlay/showOverlay",
                clearHistory: "router/clearHistory",
              })
            ),
            {},
            {
              dragover: function (t) {
                t.preventDefault(),
                  this.features.upload && (this.isDraggedOver = !0);
              },
              dragleave: function (t) {
                t.preventDefault(),
                  this.features.upload &&
                    (t.currentTarget.contains(t.relatedTarget) ||
                      (this.isDraggedOver = !1));
              },
              drop: function (t) {
                this.hasLiveChat &&
                  this.features.upload &&
                  (t.preventDefault(),
                  (this.isDraggedOver = !1),
                  this.$refs["tawk-chatinput"] &&
                    this.$refs["tawk-chatinput"].$refs &&
                    this.$refs["tawk-chatinput"].$refs.fileupload &&
                    ((this.$refs["tawk-chatinput"].$refs.fileupload.files =
                      t.dataTransfer.files),
                    this.$refs["tawk-chatinput"].onFileUpload()));
              },
              messageTyping: function (t) {
                this.$TawkChatManager.sendMessagePreview(t);
              },
              sendMessage: function (t) {
                var e = t.message,
                  a = t.attachments,
                  r = void 0 === a ? [] : a;
                this.$TawkChatManager.sendMessage({
                  message: e,
                  attachments: r,
                }),
                  this.routerPush("chat"),
                  this.showOverlay(!1);
              },
              ratingClicked: function (t) {
                this.$TawkChatManager.changeRating(t),
                  this.routerPush("chat"),
                  this.showOverlay(!1);
              },
              chatFocus: function () {
                this.$refs["main-footer"].style.boxShadow =
                  "0px -2px 8px rgba(0,0,0,.1)";
              },
              chatBlur: function () {
                this.$refs["main-footer"].style.boxShadow = "0 0 0 transparent";
              },
              paste: function (t) {
                var e,
                  a = (t.originalEvent || t).clipboardData;
                a &&
                  (((e = a.files).length && !this.features.uploads) ||
                    (e &&
                      e.length &&
                      ((this.$refs["tawk-chatinput"].$refs.fileupload.files =
                        e),
                      this.$refs["tawk-chatinput"].onFileUpload())));
              },
              startChat: function () {
                this.showOverlay(!1),
                  this.clearHistory(),
                  this.isPrechatEnabled && !this.prechatFormSubmitted
                    ? this.routerPush("prechat")
                    : this.routerPush("chat");
              },
              returnToLiveChat: function () {
                this.showOverlay(!1),
                  this.clearHistory(),
                  this.routerPush("chat");
              },
              autoFocusChatInput: function () {
                this.$refs["tawk-chatinput"].$refs.chatinput.focus();
              },
            }
          ),
          watch: {
            currentView: function (t) {
              "chat" == t.path && this.autoFocusChatInput();
            },
            hasChatStarted: function () {
              var t = this;
              setTimeout(function () {
                t.autoFocusChatInput();
              }, 500);
            },
          },
        },
        v = Object(d.a)(
          w,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                ref: "main-footer",
                class: t.mainFooterClasses,
                style: { borderRadius: t.borderRadiusBottom },
                on: {
                  dragover: t.dragover,
                  dragleave: t.dragleave,
                  drop: t.drop,
                  paste: t.paste,
                },
              },
              [
                t.showStartChatButton
                  ? e(
                      "div",
                      { staticClass: "tawk-max-footer-actions" },
                      [
                        e(
                          "tawk-button",
                          {
                            staticClass: "tawk-max-footer-actions-button",
                            attrs: {
                              label: t.$i18n("home", "chat_button"),
                              isOutline: !0,
                            },
                            on: { click: t.startChat },
                          },
                          [
                            e("tawk-icon", { attrs: { type: "mobile-send" } }),
                            t._v(
                              " " + t._s(t.$i18n("home", "chat_button")) + " "
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
                t.showReturnToLiveChatBtton
                  ? e(
                      "div",
                      { staticClass: "tawk-max-footer-actions" },
                      [
                        e(
                          "tawk-button",
                          {
                            staticClass: "tawk-max-footer-actions-button",
                            attrs: {
                              label: t.$i18n("chat", "return_to_live_chat"),
                              isOutline: !0,
                            },
                            on: { click: t.returnToLiveChat },
                          },
                          [
                            e("tawk-icon", { attrs: { type: "message" } }),
                            t._v(
                              " " +
                                t._s(t.$i18n("chat", "return_to_live_chat")) +
                                " "
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
                e("tawk-branding", {
                  staticClass: "tawk-text-center tawk-padding-small",
                  attrs: {
                    whitelabel: t.whitelabel,
                    imageUrl: t.imageUrl,
                    tawkToUrl: t.branding.url,
                  },
                }),
                t.isDraggedOver
                  ? e(
                      "div",
                      {
                        staticClass:
                          "tawk-flex tawk-flex-column tawk-flex-center tawk-flex-middle",
                        attrs: { id: "tawk-dragover-container" },
                      },
                      [
                        e("tawk-icon", {
                          attrs: { type: "attach-file", size: "xlarge" },
                        }),
                        e("p", [
                          t._v(t._s(t.$i18n("rollover", "upload_file"))),
                        ]),
                      ],
                      1
                    )
                  : t._e(),
                t.needConsent ||
                "offline" === t.pageStatus ||
                (t.isPrechatEnabled && !t.prechatFormSubmitted) ||
                !t.isLiveChatFeatureEnabled
                  ? t._e()
                  : e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.showChatInput,
                            expression: "showChatInput",
                          },
                        ],
                        ref: "tawk-chatinput-container",
                        attrs: { id: "tawk-chatinput-container" },
                      },
                      [
                        e("tawk-chat-input", {
                          ref: "tawk-chatinput",
                          attrs: {
                            placeholder: t.inputPlaceholder,
                            features: t.features,
                          },
                          on: {
                            messageTyping: t.messageTyping,
                            sendMessage: t.sendMessage,
                            ratingClicked: t.ratingClicked,
                            focus: t.chatFocus,
                            blur: t.chatBlur,
                          },
                        }),
                      ],
                      1
                    ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        y = a("38d6");
      function k(t) {
        return (k =
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
      function x(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(a), !0).forEach(function (e) {
                S(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : x(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function S(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != k(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != k(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == k(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var T = {
          name: "Item",
          mixins: [a("4b3e").a],
          data: function () {
            return {
              isConversationCard: !1,
              totalHistoryItems: 0,
              isLoadingHistory: !0,
              offVideo: !0,
            };
          },
          props: {
            card: { type: Object, required: !0 },
            isSubmitting: { type: Boolean, required: !0 },
            isSubmitButtonLock: { type: Boolean, required: !0 },
            submissionError: { type: Boolean, required: !1 },
            body: { type: Array, required: !0 },
            state: { type: String, required: !0 },
            hasConversationCard: { type: Boolean, required: !0 },
          },
          components: {
            TawkCard: i.TawkCard,
            TawkIcon: i.TawkIcon,
            TawkImage: i.TawkImage,
            TawkVideo: i.TawkVideo,
            TawkButton: i.TawkButton,
            KnowledgeBase: function () {
              return Promise.all([
                a.e("chunk-2d221830"),
                a.e("chunk-2d0c02e2"),
              ]).then(a.bind(null, "414c"));
            },
            TawkAlert: i.TawkAlert,
            KnowledgeBaseSearch: function () {
              return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"));
            },
            Conversations: function () {
              return Promise.all([a.e("vendor"), a.e("chunk-2d0b9056")]).then(
                a.bind(null, "30be")
              );
            },
            KbFeaturedArticle: function () {
              return a.e("chunk-2d207f48").then(a.bind(null, "a377"));
            },
            TawkEmoji: i.TawkEmoji,
            TawkForm: function () {
              return a.e("chunk-2d0b345a").then(a.bind(null, "2853"));
            },
          },
          mounted: function () {
            this.hasLiveChat &&
              "previous-conversations" === this.card.type &&
              (this.$emit("update:hasConversationCard", !0),
              (this.isConversationCard = !0)),
              this.$emit("contentCardLoaded");
          },
          computed: O(
            O(
              {},
              Object(r.c)({
                hasLiveChat: "widget/hasLiveChat",
                mobileBrowserName: "browserData/mobileBrowserName",
                hasChatStarted: "chat/hasChatStarted",
                isPrechatEnabled: "widget/isPrechatEnabled",
                prechatFormSubmitted: "session/prechatFormSubmitted",
                historyItems: "history/items",
                hasChatEnded: "chat/hasChatEnded",
                emojiEnabled: "widget/emojiEnabled",
                chatOrder: "chat/chatOrder",
                isNotValidEmail: "session/isNotValidEmail",
                isHome: "router/isHome",
              })
            ),
            {},
            {
              isChatInputBottom: function () {
                var t = !1;
                return (
                  this.body &&
                    this.body.length &&
                    (t = "chat" === this.body[this.body.length - 1].type),
                  t
                );
              },
              showStartChatButton: function () {
                return (
                  !this.hasChatStarted &&
                  !this.hasChatEnded &&
                  (!this.isChatInputBottom ||
                    (this.isPrechatEnabled && !this.prechatFormSubmitted))
                );
              },
              showConversationCard: function () {
                return (
                  this.isLoadingHistory ||
                  this.totalHistoryItems ||
                  this.chatOrder
                );
              },
            }
          ),
          methods: O(
            O(
              {},
              Object(r.b)({
                routerPush: "router/routerPush",
                showOverlay: "overlay/showOverlay",
              })
            ),
            {},
            {
              startChat: function () {
                this.isPrechatEnabled && !this.prechatFormSubmitted
                  ? this.routerPush("prechat")
                  : (this.routerPush("chat"), this.showOverlay(!1));
              },
              submitForm: function (t) {
                this.$emit("submitForm", t);
              },
              convertToHTML: function (t) {
                return m.a.markdownToHtml(t);
              },
              historyItemsLoaded: function (t) {
                (this.totalHistoryItems = t), (this.isLoadingHistory = !1);
              },
            }
          ),
          watch: {
            isNotValidEmail: function (t) {
              t &&
                (this.$emit("update:isSubmitting", !1),
                this.$emit("update:isSubmitButtonLock", !1));
            },
          },
        },
        C = Object(d.a)(
          T,
          function () {
            var t = this,
              e = t._self._c;
            return !t.isConversationCard ||
              (t.isConversationCard && t.showConversationCard)
              ? e(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          !t.isConversationCard ||
                          (t.isConversationCard && !t.isLoadingHistory),
                        expression:
                          "!isConversationCard || (isConversationCard && !isLoadingHistory)",
                      },
                    ],
                    staticClass: "card-container",
                    class:
                      t.isConversationCard && t.chatOrder
                        ? "tawk-flex-first"
                        : "",
                  },
                  [
                    "heading" === t.card.type
                      ? e(
                          "tawk-card",
                          {
                            staticClass: "tawk-box-shadow-xsmall",
                            class: "card--" + t.card.type,
                            attrs: { color: "inverse", size: "small" },
                          },
                          [
                            e(
                              "p",
                              {
                                staticClass: "tawk-text-bold-4",
                                class: [
                                  t.card.content.alignment &&
                                    "card--alignment-".concat(
                                      t.card.content.alignment
                                    ),
                                ],
                                attrs: { role: "heading" },
                              },
                              [
                                e("tawk-emoji", {
                                  attrs: {
                                    emoji: t.convertToHTML(
                                      t.card.content.value
                                    ),
                                    enabled: t.emojiEnabled,
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        )
                      : "text" === t.card.type
                      ? e(
                          "tawk-card",
                          {
                            staticClass: "tawk-box-shadow-xsmall",
                            class: "card--" + t.card.type,
                            attrs: { color: "inverse", size: "small" },
                          },
                          [
                            e(
                              "p",
                              {
                                staticClass: "tawk-text-regular-4",
                                class: [
                                  t.card.content.alignment &&
                                    "card--alignment-".concat(
                                      t.card.content.alignment
                                    ),
                                ],
                              },
                              [
                                e("tawk-emoji", {
                                  attrs: {
                                    emoji: t.convertToHTML(
                                      t.card.content.value
                                    ),
                                    enabled: t.emojiEnabled,
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        )
                      : "image" === t.card.type
                      ? e(
                          "tawk-card",
                          {
                            staticClass: "tawk-box-shadow-xsmall",
                            class: "card--" + t.card.type,
                            attrs: { color: "inverse", size: "small" },
                          },
                          [
                            e(
                              t.card.content.link ? "a" : "div",
                              {
                                tag: "component",
                                attrs: {
                                  href: t.card.content.link
                                    ? t.card.content.link.ref
                                    : null,
                                  target:
                                    t.card.content.link &&
                                    "blank" === t.card.content.link.target
                                      ? "_blank"
                                      : "_top",
                                },
                              },
                              [
                                e("tawk-image", {
                                  staticClass: "tawk-custom-image",
                                  attrs: {
                                    position: t.card.content.alignment,
                                    src: t.card.content.image.content,
                                    alt: "".concat(
                                      t.$i18n("home", "banner_image")
                                    ),
                                    role: "banner",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : "video" === t.card.type
                      ? e(
                          "tawk-card",
                          {
                            staticClass: "tawk-box-shadow-xsmall",
                            class: "card--" + t.card.type,
                            attrs: { color: "inverse", size: "small" },
                          },
                          [
                            t.offVideo
                              ? e("tawk-video", {
                                  attrs: {
                                    content: {
                                      source: t.card.content.source,
                                      url: t.card.content.url,
                                      options: t.card.content.config,
                                    },
                                    isMobile: !!t.mobileBrowserName,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        )
                      : "chat" === t.card.type
                      ? [
                          t.showStartChatButton && t.hasLiveChat
                            ? e(
                                "tawk-card",
                                {
                                  staticClass: "tawk-box-shadow-xsmall",
                                  class: "card--" + t.card.type,
                                  attrs: {
                                    id: t.card.id,
                                    color: "inverse",
                                    size: "small",
                                  },
                                },
                                [
                                  e(
                                    "tawk-button",
                                    {
                                      staticClass:
                                        "tawk-button-hover tawk-custom-color tawk-custom-border-color",
                                      attrs: {
                                        label: t.$i18n("chat", "start_chat"),
                                        tabindex: t.isHome ? 0 : -1,
                                      },
                                      on: { click: t.startChat },
                                    },
                                    [
                                      e("tawk-icon", {
                                        attrs: { type: "mobile-send" },
                                      }),
                                      t._v(
                                        " " +
                                          t._s(t.card.content.buttonText) +
                                          " "
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      : "kb-featured-articles" === t.card.type
                      ? e(
                          "tawk-card",
                          {
                            staticClass: "tawk-home-kb-card",
                            attrs: {
                              id: t.card.id,
                              color: "inverse",
                              size: "xsmall",
                            },
                          },
                          [
                            e("knowledge-base", {
                              attrs: {
                                state: t.state,
                                content: t.card.content,
                              },
                            }),
                          ],
                          1
                        )
                      : "kb-search" === t.card.type
                      ? e("knowledge-base-search", {
                          staticClass: "tawk-box-shadow-xsmall",
                          attrs: { content: t.card.content },
                        })
                      : "kb-featured-article" == t.card.type
                      ? e("kb-featured-article", {
                          class: "card--" + t.card.type,
                          attrs: { content: t.card.content },
                        })
                      : "form" === t.card.type
                      ? e(
                          "div",
                          {
                            staticClass: "card--form",
                            class: t.isSubmitting && "submitting",
                          },
                          [
                            e("tawk-form", {
                              attrs: {
                                state: t.state,
                                submissionError: t.submissionError,
                                isSubmitting: t.isSubmitting,
                                isSubmitButtonLock: t.isSubmitButtonLock,
                              },
                              on: {
                                "update:isSubmitting": [
                                  function (e) {
                                    t.isSubmitting = e;
                                  },
                                  t.isSubmitting,
                                ],
                                "update:is-submitting": function (e) {
                                  t.isSubmitting = e;
                                },
                                "update:isSubmitButtonLock": function (e) {
                                  t.isSubmitButtonLock = e;
                                },
                                "update:is-submit-button-lock": function (e) {
                                  t.isSubmitButtonLock = e;
                                },
                                onFormSubmit: t.submitForm,
                              },
                            }),
                            e(
                              "transition",
                              { attrs: { name: "slide-fade" } },
                              [
                                t.submissionError
                                  ? e("tawk-alert", {
                                      staticClass: "tawk-form-error-alert",
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        status: "danger",
                                        icon: "error",
                                        title: t.$i18n("form", "errorSaving"),
                                        description: "",
                                        isDismissable: !0,
                                        isAutoDismissable: !0,
                                      },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : t.isConversationCard
                      ? e(
                          "tawk-card",
                          {
                            staticClass: "tawk-home-kb-card",
                            attrs: {
                              id: t.card.id,
                              color: "inverse",
                              size: "xsmall",
                            },
                          },
                          [
                            e("conversations", {
                              on: { historyItemsLoaded: t.historyItemsLoaded },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ],
                  2
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function $(t) {
        return ($ =
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
      function _(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(a), !0).forEach(function (e) {
                P(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : _(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function P(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != $(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != $(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == $(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var E = {
          name: "HomeBody",
          mixins: [a("e49c").a],
          props: {
            state: { type: String, default: "online" },
            overwriteSubmit: { type: Boolean, default: !1 },
            isSubmitting: { type: Boolean, default: !1 },
          },
          components: {
            TawkCard: i.TawkCard,
            TawkIcon: i.TawkIcon,
            TawkButton: i.TawkButton,
            ContentCard: C,
            Conversations: function () {
              return Promise.all([a.e("vendor"), a.e("chunk-2d0b9056")]).then(
                a.bind(null, "30be")
              );
            },
            RestartChat: function () {
              return a.e("chunk-2d20848d").then(a.bind(null, "a3af"));
            },
          },
          data: function () {
            return {
              submissionError: !1,
              submissionSuccess: !1,
              hasConversationCard: !1,
              submittingValue: !1,
              isSubmitButtonLock: !1,
            };
          },
          computed: j(
            j(
              {},
              Object(r.c)({
                states: "widget/states",
                chatOrder: "chat/chatOrder",
                hasLiveChat: "widget/hasLiveChat",
                hasChatEnded: "chat/hasChatEnded",
                chatEndVersion: "chat/chatEndVersion",
                pageStatus: "session/pageStatus",
              })
            ),
            {},
            {
              body: function () {
                return this.state && this.states[this.state]
                  ? this.states[this.state].body
                  : [];
              },
              noPrechatForm: function () {
                var t = !0;
                if ("prechat" === this.state) {
                  for (var e = 0; e < this.body.length; e++)
                    if ("form" === this.body[e].type) {
                      t = !1;
                      break;
                    }
                } else t = !1;
                return t;
              },
              isHistoryCardEnabled: function () {
                for (var t = !1, e = 0; e < this.body.length; e++) {
                  if ("previous-conversations" === this.body[e].type) {
                    t = !0;
                    break;
                  }
                }
                return t;
              },
            }
          ),
          methods: j(
            j(
              {},
              Object(r.b)({
                routerPush: "router/routerPush",
                showOverlay: "overlay/showOverlay",
                loadHistory: "history/load",
                updateShowChat: "chat/updateShowChat",
              })
            ),
            {},
            {
              submitForm: function (t) {
                var e = this;
                if (!t.hasError) {
                  if (
                    ((this.submittingValue = !0),
                    this.$emit("update:isSubmitting", this.submittingValue),
                    (this.submissionError = !1),
                    (this.submissionSuccess = !1),
                    this.$store.commit("session/setIsNotValidEmail", null),
                    this.overwriteSubmit)
                  )
                    return this.$emit("submitForm", t);
                  (t.formData.submittedFrom = window.location.href),
                    this.$socket.publish(
                      "notifyOfflineMessage",
                      t.formData,
                      function (a) {
                        if (
                          ((e.submittingValue = !1),
                          e.$emit("update:isSubmitting", e.submittingValue),
                          (e.isSubmitButtonLock = !0),
                          e.$emit(
                            "update:isSubmitButtonLock",
                            e.isSubmitButtonLock
                          ),
                          a)
                        )
                          return "InvalidArgument" === a.code &&
                            "email" === a.message
                            ? void e.$store.commit(
                                "session/setIsNotValidEmail",
                                "email"
                              )
                            : ((e.isSubmitButtonLock = !1),
                              e.$emit(
                                "update:isSubmitButtonLock",
                                e.isSubmitButtonLock
                              ),
                              void (e.submissionError = !0));
                        setTimeout(function () {
                          (e.isSubmitButtonLock = !1),
                            e.$emit(
                              "update:isSubmitButtonLock",
                              e.isSubmitButtonLock
                            );
                        }, 3e4),
                          e.routerPush("offline-success"),
                          e.showOverlay(!0),
                          e.$store.dispatch(
                            "visitor/updateVisitorInformation",
                            { n: t.formData.name, e: t.formData.email }
                          ),
                          e.$TawkJSAPI.triggerApiHandlers(
                            "onOfflineSubmit",
                            t.formData
                          );
                      }
                    );
                }
              },
            }
          ),
        },
        B = Object(d.a)(
          E,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "tawk-form-width-100 tawk-flex tawk-flex-column" },
              [
                t.hasChatEnded &&
                "prechat" !== t.state &&
                "offline" !== t.state &&
                t.chatEndVersion
                  ? e(
                      "div",
                      { staticClass: "card-container" },
                      [e("restart-chat")],
                      1
                    )
                  : t._e(),
                !t.isHistoryCardEnabled &&
                t.chatOrder &&
                t.hasLiveChat &&
                "offline" !== t.pageStatus &&
                "prechat" !== t.state
                  ? e(
                      "div",
                      { staticClass: "card-container tawk-flex-first" },
                      [
                        e(
                          "tawk-card",
                          {
                            staticClass: "tawk-home-kb-card",
                            attrs: { color: "inverse", size: "xsmall" },
                          },
                          [
                            e("conversations", {
                              attrs: { historyEnabled: t.isHistoryCardEnabled },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
                t._l(t.body, function (a, r) {
                  return e("content-card", {
                    key: r,
                    attrs: {
                      card: a,
                      isSubmitting: t.submittingValue,
                      isSubmitButtonLock: t.isSubmitButtonLock,
                      submissionError: t.submissionError,
                      body: t.body,
                      state: t.state,
                      hasConversationCard: t.hasConversationCard,
                    },
                    on: {
                      "update:isSubmitting": function (e) {
                        t.submittingValue = e;
                      },
                      "update:is-submitting": function (e) {
                        t.submittingValue = e;
                      },
                      "update:isSubmitButtonLock": function (e) {
                        t.isSubmitButtonLock = e;
                      },
                      "update:is-submit-button-lock": function (e) {
                        t.isSubmitButtonLock = e;
                      },
                      "update:hasConversationCard": function (e) {
                        t.hasConversationCard = e;
                      },
                      "update:has-conversation-card": function (e) {
                        t.hasConversationCard = e;
                      },
                      submitForm: t.submitForm,
                      contentCardLoaded: function (e) {
                        return t.$emit("homeLoaded");
                      },
                    },
                  });
                }),
                t.noPrechatForm
                  ? e(
                      "div",
                      { staticClass: "card-container" },
                      [
                        e(
                          "tawk-card",
                          {
                            staticClass: "tawk-box-shadow-xsmall",
                            attrs: { color: "inverse", size: "small" },
                          },
                          [
                            e(
                              "tawk-button",
                              {
                                staticClass:
                                  "tawk-form-width-100 tawk-button-hover tawk-custom-color tawk-custom-border-color",
                                attrs: {
                                  label: t.$i18n("form", "start_chat_button"),
                                },
                                on: {
                                  click: function (e) {
                                    return t.submitForm({ formData: {} });
                                  },
                                },
                              },
                              [
                                e("tawk-icon", {
                                  attrs: { type: "mobile-send" },
                                }),
                                t._v(
                                  " " +
                                    t._s(t.$i18n("form", "start_chat_button")) +
                                    " "
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        F = a("9f3e"),
        L = a("31dd"),
        M = a("dbd1");
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
      function D(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? D(Object(a), !0).forEach(function (e) {
                V(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : D(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function V(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != I(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != I(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == I(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var H = {
          name: "Home",
          components: {
            BaseFrame: F.a,
            BaseHeader: L.a,
            BaseBody: M.a,
            HomeHeader: y.default,
            HomeBody: B,
            ConsentForm: function () {
              return a.e("chunk-2d0e4831").then(a.bind(null, "9114"));
            },
          },
          props: { isVisible: { type: Boolean, default: !0 } },
          computed: R(
            {},
            Object(r.c)({
              states: "widget/states",
              pageStatus: "session/pageStatus",
              hasChatStarted: "chat/hasChatStarted",
              prechatFormSubmitted: "session/prechatFormSubmitted",
              needConsent: "session/needConsent",
            })
          ),
          watch: {
            pageStatus: function (t) {
              this.homeLoaded(),
                "offline" === t
                  ? this.$eventBus.$emit("formOpened")
                  : this.$eventBus.$emit("formClosed"),
                (this.$refs["tawk-chat-panel"].scrollTop = 0);
            },
            isVisible: function () {
              for (
                var t =
                    this.$refs["tawk-main-panel"].querySelectorAll(
                      ".tawk-video-el"
                    ),
                  e = 0;
                e < t.length;
                e++
              ) {
                var a = t[e];
                "about:blank" !== a.src
                  ? (a.src = "about:blank")
                  : a.getAttribute("data-src") &&
                    (a.src = a.getAttribute("data-src"));
              }
            },
          },
          data: function () {
            return { headerClass: "" };
          },
          methods: R(
            R({}, Object(r.b)({ routerPush: "router/routerPush" })),
            {},
            {
              homeLoaded: function () {
                var t = this;
                setTimeout(function () {
                  t.$refs["tawk-chat-panel"] &&
                    t.$refs["tawk-chat-panel"].$scrollbar &&
                    t.$refs["tawk-chat-panel"].$scrollbar.update();
                }, 500);
              },
            }
          ),
          mounted: function () {
            "offline" === this.pageStatus && this.$eventBus.$emit("formOpened");
          },
          destroyed: function () {
            this.$eventBus.$emit("formClosed");
          },
        },
        N = Object(d.a)(
          H,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "base-frame",
              { staticClass: "tawk-home-view tawk-custom-flex-1" },
              [
                e(
                  "base-header",
                  { ref: "tawk-base-header", class: t.headerClass },
                  [
                    t.needConsent
                      ? t._e()
                      : e("home-header", {
                          ref: "tawk-home-header",
                          attrs: { state: t.pageStatus },
                        }),
                  ],
                  1
                ),
                e(
                  "base-body",
                  { ref: "tawk-home-body" },
                  [
                    t.needConsent
                      ? e("consent-form")
                      : e("home-body", {
                          attrs: { state: t.pageStatus },
                          on: { homeLoaded: t.homeLoaded },
                        }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function W(t) {
        return (W =
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
      function A(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(a), !0).forEach(function (e) {
                q(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : A(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function q(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != W(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != W(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == W(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var U = {
          name: "chat-header",
          components: {
            ChatAgents: function () {
              return a.e("chunk-2d0a4ee2").then(a.bind(null, "0914"));
            },
            HomeHeader: function () {
              return Promise.resolve().then(a.bind(null, "38d6"));
            },
          },
          mounted: function () {
            this.addWaitTime();
          },
          computed: z(
            z(
              {},
              Object(r.c)({
                states: "widget/states",
                pageStatus: "session/pageStatus",
                agents: "chat/agents",
                agentsCount: "chat/agentsCount",
                activeProfiles: "chat/activeProfiles",
                hasChatStarted: "chat/hasChatStarted",
                agentHasMessaged: "chat/agentHasMessaged",
                showEstimatedWaitTime: "widget/showEstimatedWaitTime",
                waitTime: "session/waitTime",
              })
            ),
            {},
            {
              header: function () {
                return this.states[this.pageStatus]
                  ? this.states[this.pageStatus].header
                  : null;
              },
              logoUrl: function () {
                return "https://tawk.link";
              },
              hasHomeView: function () {
                var t = this.states[this.pageStatus];
                return (
                  !t ||
                  !t.body ||
                  1 !== t.body.length ||
                  "chat" !== t.body[0].type
                );
              },
            }
          ),
          methods: z(
            z(
              {},
              Object(r.b)({
                routerPush: "router/routerPush",
                addWaitTime: "session/addWaitTime",
                showOverlay: "overlay/showOverlay",
              })
            ),
            {},
            {
              convertToHTML: function (t) {
                return m.a.markdownToHtml(t);
              },
              changeView: function () {
                this.routerPush("agents"), this.showOverlay(!0);
              },
            }
          ),
        },
        G = Object(d.a)(
          U,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                0 === t.activeProfiles.length
                  ? [
                      !t.hasHomeView && t.header.length > 0
                        ? e("home-header", {
                            staticClass: "tawk-margin-bottom",
                            attrs: { state: t.pageStatus },
                          })
                        : t._e(),
                      t.hasChatStarted &&
                      !t.agentHasMessaged &&
                      t.showEstimatedWaitTime &&
                      t.waitTime
                        ? e("p", {
                            staticClass: "tawk-margin-xsmall-bottom",
                            domProps: {
                              innerHTML: t._s(
                                t.$i18n("chat", "message_queued_text_other", {
                                  count: Math.ceil(t.waitTime / 6e4),
                                  strongStart: "<b>",
                                  strongEnd: "</b>",
                                })
                              ),
                            },
                          })
                        : t._e(),
                    ]
                  : e("chat-agents", {
                      attrs: {
                        profiles: t.activeProfiles,
                        role: "button",
                        tabindex: "0",
                      },
                      nativeOn: {
                        click: function (e) {
                          return t.changeView.apply(null, arguments);
                        },
                      },
                    }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Z = a("3519"),
        J = a("3f09"),
        X = {
          name: "progress-bar",
          props: {
            handle: { type: String, default: "" },
            fileName: { type: String, default: "" },
            fileSize: { type: String, default: "" },
            percentage: { type: Number, default: 0 },
          },
          computed: {
            progressWidth: function () {
              return "width : ".concat(this.percentage, "%");
            },
          },
          methods: {
            beautifyFilename: function (t, e) {
              var a = t.lastIndexOf("."),
                r = t.substring(0, a),
                i = ".".concat(t.substring(a + 1));
              return (
                r.length > 7 &&
                  ((i = r.substring(r.length - 3) + i),
                  (r = r.substring(0, r.length - 3))),
                '<span class="tawk-text-truncate">'
                  .concat(r, '</span><span class="tawk-flex-none">')
                  .concat(i, '</span><span class="tawk-flex-none">&nbsp;(')
                  .concat(e, ")</span>")
              );
            },
          },
        },
        Y = Object(d.a)(
          X,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "file-upload-progress" }, [
              e("div", {
                staticClass: "tawk-flex tawk-flex-middle",
                domProps: {
                  innerHTML: t._s(t.beautifyFilename(t.fileName, t.fileSize)),
                },
              }),
              e(
                "div",
                { staticClass: "progress active tawk-margin-small-top" },
                [
                  e("div", {
                    staticClass: "progress-bar",
                    style: t.progressWidth,
                    attrs: { role: "progressbar" },
                  }),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function K(t) {
        return (K =
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
      function Q(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function tt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Q(Object(a), !0).forEach(function (e) {
                et(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : Q(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function et(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != K(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != K(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == K(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var at = {
          name: "chat-main",
          mixins: [J.a],
          components: {
            BaseFrame: F.a,
            BaseHeader: L.a,
            BaseBody: M.a,
            ChatHeader: G,
            ChatBody: Z.a,
            TawkIcon: i.TawkIcon,
            TawkButton: i.TawkButton,
            TawkAvatar: i.TawkAvatar,
            ProgressBar: Y,
            TawkAlert: i.TawkAlert,
          },
          computed: tt(
            {},
            Object(r.c)({
              chatVersion: "chat/chatVersion",
              incomingMessage: "chat/incomingMessage",
              agentProfile: "chat/agentProfile",
              chatMessages: "chat/chatMessages",
              unreadMessageCount: "chat/unreadMessageCount",
              lastMessageTimestamp: "session/lastMessageTimestamp",
              showAgentTyping: "widget/showAgentTyping",
              hasChatEnded: "chat/hasChatEnded",
              uploadFiles: "chat/uploadFiles",
              lastScrollPositon: "chat/lastScrollPositon",
              outgoingMessage: "chat/outgoingMessage",
              historyProcessed: "chat/historyProcessed",
              messageBlocks: "chat/messageBlocks",
              emojiEnabled: "widget/emojiEnabled",
              currentRoute: "router/current",
              chatWindowState: "session/chatWindowState",
              isFocus: "widget/isFocus",
            })
          ),
          data: function () {
            return {
              barMessageId: null,
              isLoading: !1,
              barMessageRerence: null,
              unseenMessages: [],
              showNotification: !1,
              agentTyping: {},
              clearBarTimeout: 0,
              tooBigFileList: null,
              showLatest: !1,
            };
          },
          watch: {
            incomingMessage: function (t) {
              var e = this.isScrollBarBottom();
              this.displayMessages({ message: t, isIncoming: !0 }),
                this.updateScrollbar(),
                e && this.scrollToBottom();
            },
            unreadMessageCount: function (t) {
              0 === t && this.clearBarMessageId();
            },
            hasChatEnded: function (t) {
              t && this.clearData();
            },
            uploadFiles: function () {
              this.scrollToBottom();
            },
            outgoingMessage: function (t) {
              this.isLoading ||
                (t &&
                  (this.displayMessages({ message: t, isIncoming: !0 }),
                  this.$store.commit("chat/setOutgoingMessage", null)));
            },
            historyProcessed: function (t) {
              t && this.processChatMessages();
            },
            currentRoute: function (t, e) {
              "chat" === t &&
                (this.$refs["tawk-chat-panel"] &&
                  this.$refs["tawk-chat-panel"].$scrollbar &&
                  this.$refs["tawk-chat-panel"].$scrollbar.update(),
                this.checkSeenMessageViewport(),
                this.checkBarPosition()),
                "chat" === e && this.saveScrollPosition();
            },
            chatWindowState: function (t) {
              "max" === t &&
                "chat" === this.currentRoute &&
                (this.toggleFocus(!0), this.checkSeenMessageViewport());
            },
            isFocus: function (t) {
              t &&
                "chat" === this.currentRoute &&
                this.checkSeenMessageViewport();
            },
          },
          created: function () {
            var t = this;
            this.$eventBus.$on("tooBigFileList", function (e) {
              t.tooBigFileList = e.join(", ");
            });
          },
          mounted: function () {
            var t = this;
            this.processChatMessages(),
              this.showAgentTyping &&
                (this.$eventBus.$on("agentIsTyping", function (e) {
                  var a = t.agentProfile(e.rsc),
                    r = t.isScrollBarBottom();
                  a && (t.updateAgentTyping(e, a), t.updateScrollbar()),
                    r && t.scrollToBottom();
                }),
                this.$eventBus.$on("agentStopedTyping", function (e) {
                  t.removeAgentIsTyping(e.rsc), t.updateScrollbar();
                })),
              this.$eventBus.$on("updateScrollPosition", function () {
                t.updateScrollbar();
              }),
              this.$eventBus.$on("callDataUpdated", function (e) {
                for (
                  var a = t.isScrollBarBottom(), r = 0;
                  r < t.messageBlocks.length;
                  r++
                ) {
                  var i = t.messageBlocks[r];
                  if ("call" === i.messageType && i.ownerId === e.callId) {
                    i.callData = e;
                    break;
                  }
                }
                a && t.scrollToBottom();
              });
          },
          beforeDestroy: function () {
            this.saveScrollPosition(), this.clearData();
          },
          methods: tt(
            tt(
              {},
              Object(r.b)({
                clearMessageBlock: "chat/clearMessageBlock",
                toggleAgentAvatarToolbar: "widget/toggleAgentAvatarToolbar",
                toggleFocus: "widget/toggleFocus",
              })
            ),
            {},
            {
              updateAgentTyping: function (t, e) {
                this.$set(this.agentTyping, t.rsc, e.profileImage);
              },
              scrollToBottom: function (t) {
                var e = this.$refs["tawk-chat-panel"];
                e &&
                  setTimeout(function () {
                    e.scrollTop = t || e.scrollHeight;
                  }, 300);
              },
              handleScrollProcess: function () {
                this.checkBarPosition(),
                  this.checkSeenMessageViewport(),
                  this.handleAgentsAvatarToolbar();
              },
              scrollToEl: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function () {};
                if (t) {
                  var a = this.$refs["chat-body"],
                    r = a ? a.$refs[t] : null,
                    i = this.$refs["tawk-chat-panel"];
                  r && r.length && i
                    ? (void 0 !== r[0].offsetTop
                        ? (i.scrollTop = r[0].offsetTop - 40)
                        : (i.scrollTop = r[0].offsetTop),
                      this.$refs["tawk-chat-panel"] &&
                        this.$refs["tawk-chat-panel"].$scrollbar &&
                        this.$refs["tawk-chat-panel"].$scrollbar.update(),
                      e())
                    : e(r);
                }
              },
              clearBarMessageId: function () {
                var t = this;
                clearTimeout(this.clearBarTimeout),
                  (this.clearBarTimeout = setTimeout(function () {
                    (t.barMessageId = null),
                      t.barMessageRerence && (t.barMessageRerence.showBar = !1),
                      (t.showNotification = !1),
                      (t.barMessageRerence = null);
                  }, 1e3));
              },
              checkSeenMessageViewport: function () {
                var t,
                  e = -1,
                  a = this.$refs["chat-body"];
                if (0 !== this.unseenMessages.length && a && this.isFocus) {
                  for (var r = 0; r < this.unseenMessages.length; r++) {
                    t = this.unseenMessages[r];
                    var i = a.$refs[t.blockId];
                    if (
                      i &&
                      this.chatElementInView(i) &&
                      t.timeStamp > this.lastMessageTimestamp
                    ) {
                      e = r;
                      break;
                    }
                  }
                  -1 !== e &&
                    (t = this.unseenMessages[this.unseenMessages.length - 1]) &&
                    ((this.unseenMessages = []),
                    this.$store.dispatch(
                      "session/updateVisitorChatSeen",
                      t.timeStamp
                    ));
                }
              },
              chatElementInView: function (t) {
                var e = this.$refs["tawk-chat-panel"];
                return (
                  !!e &&
                  !!(
                    t[0].offsetTop >= e.scrollTop &&
                    t[0].offsetTop <= e.scrollTop + e.offsetHeight &&
                    0 !== t[0].clientWidth &&
                    0 !== t[0].clientHeight
                  )
                );
              },
              removeAgentIsTyping: function (t) {
                this.$delete(this.agentTyping, t);
              },
              checkBarPosition: function () {
                var t = this;
                this.$nextTick(function () {
                  if (
                    ((t.showNotification = !1),
                    t.barMessageRerence && t.barMessageId)
                  ) {
                    var e = t.$refs[t.barMessageId],
                      a = t.$refs["chat-body"];
                    if (
                      (a &&
                        a.$refs[t.barMessageId] &&
                        (e = a.$refs[t.barMessageId]),
                      e)
                    )
                      if (t.chatElementInView(e)) t.clearBarMessageId();
                      else {
                        var r = t.$refs["tawk-chat-panel"];
                        r &&
                          r.scrollTop < e[0].offsetTop &&
                          (t.showNotification = !0);
                      }
                  }
                  t.isScrollBarBottom() ||
                  t.showNotification ||
                  t.unreadMessageCount
                    ? (t.showLatest = !1)
                    : (t.showLatest = !0);
                });
              },
              clearData: function () {
                clearTimeout(this.clearBarTimeout),
                  (this.barMessageId = null),
                  (this.isLoading = !1),
                  (this.barMessageRerence = null),
                  (this.unseenMessages = []),
                  (this.showNotification = !1),
                  (this.agentTyping = []),
                  (this.clearBarTimeout = 0);
              },
              retryUpload: function (t) {
                for (var e = 0; e < this.uploadFiles.length; e++)
                  if (this.uploadFiles[e].handle === t.handle) {
                    this.uploadFiles.splice(e, 1);
                    break;
                  }
                this.$TawkChatManager.uploadFiles([t.fileData]);
              },
              processChatMessages: function () {
                var t = this;
                this.isLoading = !0;
                var e = !1;
                for (var a in (this.clearMessageBlock(), this.chatMessages)) {
                  var r = this.chatMessages[a];
                  this.outgoingMessage &&
                  !e &&
                  r.messageId === this.outgoingMessage.messageId
                    ? ((e = !0),
                      this.displayMessages({ message: r, isIncoming: !0 }))
                    : this.displayMessages({ message: r });
                }
                this.outgoingMessage &&
                  !e &&
                  this.displayMessages({
                    message: this.outgoingMessage,
                    isIncoming: !0,
                  }),
                  (this.isLoading = !1),
                  setTimeout(function () {
                    t.barMessageId
                      ? (t.scrollToEl(t.barMessageId, function (e) {
                          void 0 === e && t.scrollToBottom(t.lastScrollPositon);
                        }),
                        t.checkBarPosition())
                      : t.scrollToBottom(t.lastScrollPositon),
                      t.checkSeenMessageViewport();
                  }, 1e3 / 66);
              },
              imageLoaded: function () {
                this.isScrollBarBottom() && this.scrollToBottom(),
                  this.$refs["tawk-chat-panel"] &&
                    this.$refs["tawk-chat-panel"].$scrollbar &&
                    this.$refs["tawk-chat-panel"].$scrollbar.update();
              },
              handleAgentsAvatarToolbar: function () {
                if (this.$refs["tawk-home-header"]) {
                  var t = this.$refs["tawk-home-header"].$el.offsetHeight;
                  this.$refs["tawk-chat-panel"].scrollTop > t / 4
                    ? this.toggleAgentAvatarToolbar(!0)
                    : this.toggleAgentAvatarToolbar(!1);
                }
              },
              saveScrollPosition: function () {
                var t = this.$refs["tawk-chat-panel"];
                t &&
                  this.$store.commit(
                    "chat/setLastScrollPosition",
                    this.isScrollBarBottom() ? 9999999999 : t.scrollTop
                  );
              },
              convertFileSize: function (t) {
                return t < 1024
                  ? t + "B"
                  : t < Math.pow(1024, 2)
                  ? (t / 1024).toFixed(2) + "KB"
                  : t < Math.pow(1024, 3)
                  ? (t / Math.pow(1024, 2)).toFixed(2) + "MB"
                  : (t / Math.pow(1024, 3)).toFixed(2) + "GB";
              },
              updateScrollbar: function () {
                var t = this;
                setTimeout(function () {
                  t.$refs["tawk-chat-panel"] &&
                    t.$refs["tawk-chat-panel"].$scrollbar &&
                    t.$refs["tawk-chat-panel"].$scrollbar.update();
                }, 800);
              },
            }
          ),
        },
        rt = Object(d.a)(
          at,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "base-frame",
              {
                staticClass: "tawk-chat-view",
                on: {
                  "&scroll": function (e) {
                    return t.handleScrollProcess.apply(null, arguments);
                  },
                },
              },
              [
                e(
                  "base-header",
                  {
                    ref: "tawk-base-header",
                    staticClass: "tawk-padding-remove-bottom",
                  },
                  [
                    e("chat-header", {
                      ref: "tawk-home-header",
                      staticClass: "tawk-flex-none",
                    }),
                  ],
                  1
                ),
                e(
                  "base-body",
                  { ref: "tawk-base-body" },
                  [
                    e("chat-body", {
                      ref: "chat-body",
                      attrs: {
                        isLoading: t.isLoading,
                        messageBlocks: t.messageBlocks,
                        barMessageRerence: t.barMessageId,
                        emojiEnabled: t.emojiEnabled,
                      },
                      on: { imageLoaded: t.imageLoaded },
                    }),
                    e(
                      "transition-group",
                      { attrs: { name: "list" } },
                      t._l(t.agentTyping, function (a, r) {
                        return e("div", { key: r }, [
                          e(
                            "div",
                            {
                              staticClass:
                                "tawk-flex tawk-flex-middle tawk-margin-small-bottom",
                            },
                            [
                              e("tawk-avatar", {
                                staticClass: "tawk-message-profile",
                                attrs: {
                                  size: "small",
                                  src: a,
                                  alt: "".concat(
                                    t.$i18n("chat", "agent_profile_image")
                                  ),
                                },
                              }),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "agentTypingIndicator tawk-margin-xsmall-left",
                                },
                                [
                                  e("div", {
                                    staticClass:
                                      "dot tawk-agent-chat-bubble-dots",
                                  }),
                                  e("div", {
                                    staticClass:
                                      "dot tawk-agent-chat-bubble-dots",
                                  }),
                                  e("div", {
                                    staticClass:
                                      "dot tawk-agent-chat-bubble-dots",
                                  }),
                                ]
                              ),
                              e("div", { staticClass: "clearfix" }),
                            ],
                            1
                          ),
                        ]);
                      }),
                      0
                    ),
                    e(
                      "transition-group",
                      {
                        staticStyle: { width: "100%", overflow: "hidden" },
                        attrs: { tag: "div", name: "list" },
                      },
                      t._l(t.uploadFiles, function (a, r) {
                        return e(
                          "div",
                          {
                            key: "key-".concat(r),
                            staticClass:
                              "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                          },
                          [
                            a.hasError
                              ? e(
                                  "div",
                                  [
                                    e("tawk-alert", {
                                      attrs: {
                                        status: "danger",
                                        icon: "error",
                                        title: t.$i18n(
                                          "chat",
                                          "general_upload_error_label"
                                        ),
                                        description: t.$i18n(
                                          "chat",
                                          "general_upload_error",
                                          { fileName: a.fileName }
                                        ),
                                      },
                                    }),
                                    e(
                                      "tawk-button",
                                      {
                                        staticClass:
                                          "tawk-text-red-1 tawk-margin-auto-left tawk-button tawk-button-text tawk-text-regular-2 tawk-margin-xsmall-top",
                                        staticStyle: { display: "block" },
                                        attrs: {
                                          label: t.$i18n("chat", "try_again"),
                                          isText: !0,
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.retryUpload(a);
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(t.$i18n("chat", "try_again")) +
                                            " "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              : e("progress-bar", {
                                  attrs: {
                                    handle: a.handle,
                                    fileName: a.fileName,
                                    fileSize: t.convertFileSize(
                                      a.fileData.file.size
                                    ),
                                    percentage: a.percentage,
                                    "aria-busy": "true",
                                    "aria-valuemin": "0",
                                    "aria-valuemax": "100",
                                    "aria-valuenow": a.percentage,
                                  },
                                }),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                    t.tooBigFileList
                      ? e(
                          "div",
                          [
                            e("tawk-alert", {
                              staticClass:
                                "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                              attrs: {
                                status: "danger",
                                icon: "error",
                                title: t.$i18n(
                                  "notifications",
                                  "maximum_size_upload_warning",
                                  { limitFileSize: "50MB" }
                                ),
                                description: t.tooBigFileList,
                              },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    attrs: { slot: "unseen-message-count" },
                    slot: "unseen-message-count",
                  },
                  [
                    e(
                      "transition",
                      { attrs: { name: "slide-fade" } },
                      [
                        t.showNotification && t.unreadMessageCount
                          ? e(
                              "tawk-button",
                              {
                                staticClass: "tawk-new-messages-notification",
                                attrs: {
                                  label: t.$i18n("chat", "new_message", {
                                    num: t.unreadMessageCount,
                                  }),
                                  size: "small",
                                },
                                on: {
                                  click: function (e) {
                                    return t.scrollToEl(t.barMessageId);
                                  },
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(
                                      t.$i18n("chat", "new_message", {
                                        count: t.unreadMessageCount,
                                      })
                                    ) +
                                    " "
                                ),
                                e("tawk-icon", {
                                  attrs: {
                                    type: "down-arrow-2",
                                    size: "xsmall",
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    attrs: { slot: "unseen-message-count" },
                    slot: "unseen-message-count",
                  },
                  [
                    e(
                      "transition",
                      { attrs: { name: "slide-fade" } },
                      [
                        t.showLatest
                          ? e(
                              "tawk-button",
                              {
                                staticClass:
                                  "tawk-new-messages-notification tawk-box-shadow-small",
                                attrs: {
                                  label: "scroll to bottom",
                                  isCircle: !0,
                                },
                                on: {
                                  click: function (e) {
                                    return t.scrollToBottom();
                                  },
                                },
                              },
                              [
                                e("tawk-icon", {
                                  attrs: {
                                    type: "down-arrow-2",
                                    size: "xsmall",
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      function it(t) {
        return (it =
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
      function nt(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function st(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nt(Object(a), !0).forEach(function (e) {
                ot(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : nt(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function ot(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != it(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != it(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == it(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var ct = {
          name: "prechat-form",
          components: {
            BaseFrame: F.a,
            BaseHeader: L.a,
            BaseBody: M.a,
            HomeHeader: y.default,
            HomeBody: B,
          },
          data: function () {
            return {
              isDropdownOpen: !1,
              isSubmitting: !1,
              submissionError: !1,
              submissionSuccess: !1,
              headerClass: "",
            };
          },
          computed: st(
            {},
            Object(r.c)({
              states: "widget/states",
              departments: "session/departments",
              name: "visitor/name",
              email: "visitor/getEmailValue",
              pageStatus: "session/pageStatus",
            })
          ),
          watch: {
            pageStatus: function (t) {
              "offline" === t && this.showOverlay(!1);
            },
          },
          methods: st(
            st(
              {},
              Object(r.b)({
                routerPush: "router/routerPush",
                showOverlay: "overlay/showOverlay",
                removeRoute: "router/removeRoute",
              })
            ),
            {},
            {
              submitForm: function (t) {
                var e = this;
                t.hasError ||
                  ((this.isSubmitting = !0),
                  (this.submissionError = !1),
                  (this.submissionSuccess = !1),
                  this.$store.commit("session/setIsNotValidEmail", null),
                  this.$socket.publish(
                    "notifyPrechat",
                    t.formData,
                    function (a) {
                      var r = "";
                      if (((e.isSubmitting = !1), a))
                        return "InvalidArgument" === a.code &&
                          "email" === a.message
                          ? (e.$store.commit(
                              "session/setIsNotValidEmail",
                              "email"
                            ),
                            void e.$emit("update:isSubmitting", !1))
                          : void (e.submissionError = !0);
                      e.$store.commit("session/setPrechatSubmitted", !0),
                        e.$TawkJSAPI.triggerApiHandlers(
                          "onPrechatSubmit",
                          t.formData.questions
                        ),
                        e.$nextTick(function () {
                          if (
                            t.formData.questions &&
                            t.formData.questions.length > 0
                          )
                            for (
                              var a = 0, i = t.formData.questions.length;
                              a < i;
                              a++
                            )
                              (r += ""
                                .concat(t.formData.questions[a].label, " : ")
                                .concat(t.formData.questions[a].answer)),
                                a !== i - 1 && (r += "\r\n");
                          r &&
                            e.$TawkChatManager.sendMessageToServer({
                              message: r,
                            }),
                            e.routerPush("chat"),
                            e.removeRoute("prechat"),
                            e.showOverlay(!1);
                        });
                    }
                  ));
              },
              homeLoaded: function () {
                var t = this;
                setTimeout(function () {
                  t.$refs["tawk-chat-panel"] &&
                    t.$refs["tawk-chat-panel"].$scrollbar &&
                    t.$refs["tawk-chat-panel"].$scrollbar.update();
                }, 500);
              },
            }
          ),
          mounted: function () {
            var t = this;
            setTimeout(function () {
              t.$eventBus.$emit("formOpened");
            }, 50);
          },
          destroyed: function () {
            this.$eventBus.$emit("formClosed"), this.$emit("homeLoaded");
          },
        },
        lt = Object(d.a)(
          ct,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "base-frame",
              { ref: "tawk-frame", staticClass: "tawk-prechat-view" },
              [
                e(
                  "base-header",
                  { ref: "tawk-base-header", class: t.headerClass },
                  [
                    e("home-header", {
                      ref: "tawk-prechat-header",
                      attrs: { state: "prechat" },
                    }),
                  ],
                  1
                ),
                e("base-body", [
                  e(
                    "div",
                    { staticStyle: { width: "100%" } },
                    [
                      e("home-body", {
                        ref: "tawk-prechat-body",
                        attrs: { state: "prechat", overwriteSubmit: !0 },
                        on: {
                          submitForm: t.submitForm,
                          homeLoaded: t.homeLoaded,
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        ut = a("87dd");
      function dt(t) {
        return (dt =
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
      function ht(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function mt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ht(Object(a), !0).forEach(function (e) {
                ft(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : ht(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function ft(t, e, a) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != dt(t) || !t) return t;
              var a = t[Symbol.toPrimitive];
              if (void 0 !== a) {
                var r = a.call(t, e || "default");
                if ("object" != dt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == dt(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var pt = {
          name: "MaximizeWidget",
          components: {
            IFrame: n.a,
            CallWidget: function () {
              return a.e("chunk-2d21ad1b").then(a.bind(null, "bcae"));
            },
            EndChat: function () {
              return a.e("chunk-2d0e982e").then(a.bind(null, "8e9d"));
            },
            InactiveOverlay: function () {
              return a.e("chunk-2d0af2da").then(a.bind(null, "0ce6"));
            },
            Toolbar: h,
            TawkAlert: i.TawkAlert,
            TawkOverlay: i.TawkOverlay,
            HomeView: N,
            ChatView: rt,
            MaximizeFooter: v,
            PrechatView: lt,
          },
          mixins: [ut.a],
          data: function () {
            return {
              cssLink: "".concat(
                "https://embed.tawk.to/_s/v4/app/67f4b2d4927",
                "/css/max-widget.css"
              ),
              classString: "",
              showEndChat: !1,
              noZoomMetaTag: null,
              resizeHeightTo: null,
              formIsOpen: !1,
              isDraggedOver: !1,
              originalBodyStyle: null,
              isLoaded: !1,
              isChatStatus: {},
              routeLoadedTimeout: null,
              powerImageUrl: "".concat(
                "https://embed.tawk.to/_s/v4/assets",
                "/images/power.svg"
              ),
              initialized: !1,
              iframe: { height: "", width: "" },
              isVisible: !1,
              key: i.Helper.generateUUID(),
              showConnected: !1,
            };
          },
          computed: mt(
            mt(
              {},
              Object(r.c)({
                maxDimension: "widget/maxDesktop",
                minDesktop: "widget/minDesktop",
                chatWindowState: "session/chatWindowState",
                states: "widget/states",
                pageStatus: "session/pageStatus",
                isRoundWidget: "widget/isRoundWidget",
                branding: "widget/branding",
                features: "widget/features",
                currentView: "router/getCurrentView",
                activeProfiles: "chat/activeProfiles",
                hasChatStarted: "chat/hasChatStarted",
                prechatFormSubmitted: "session/prechatFormSubmitted",
                isPrechatEnabled: "widget/isPrechatEnabled",
                isWindowed: "widget/isWindowed",
                mobileBrowserName: "browserData/mobileBrowserName",
                isEmbedded: "widget/isEmbedded",
                hasChatEnded: "chat/hasChatEnded",
                needConsent: "session/needConsent",
                isInactive: "session/isInactive",
                isRight: "widget/isRight",
                isBottom: "widget/isBottom",
                isCenter: "widget/isCenter",
                isOverlayOpen: "overlay/isOpen",
                getHistory: "router/getHistory",
                hasLiveChat: "widget/hasLiveChat",
                webrtcOptions: "widget/webrtcOptions",
                agentsCount: "chat/agentsCount",
                currentRoute: "router/current",
                isReconnecting: "session/isReconnecting",
                chatOrder: "chat/chatOrder",
                unreadMessageCount: "chat/unreadMessageCount",
                desktopVisibility: "widget/desktopVisibility",
                showMessagePreview: "widget/showMessagePreview",
                firstIncoming: "chat/firstIncoming",
                isReady: "socket/isReady",
                isConnecting: "socket/isConnecting",
                isIE: "browserData/isIE",
                components: "widget/components",
                onClick: "widget/onClick",
              })
            ),
            {},
            {
              xOffset: function () {
                return this.$TawkWidgetSettings.xOffset();
              },
              yOffset: function () {
                return this.$TawkWidgetSettings.yOffset();
              },
              styleObject: function () {
                var t,
                  e =
                    null === (t = this.$TawkJSAPI) ||
                    void 0 === t ||
                    null === (t = t.local_API) ||
                    void 0 === t ||
                    null === (t = t.customStyle) ||
                    void 0 === t
                      ? void 0
                      : t.visibility,
                  a = {
                    "border-radius:": "".concat(
                      this.borderRadius,
                      " !important;"
                    ),
                    "z-index:": "1000002 !important;",
                    "height:": "".concat(this.iframe.height, " !important;"),
                    "width:": "".concat(this.iframe.width, " !important;"),
                    "min-height:": "".concat(
                      this.iframe.height,
                      " !important;"
                    ),
                    "min-width:": "".concat(this.iframe.width, " !important;"),
                    "max-height:": "".concat(
                      this.iframe.height,
                      " !important;"
                    ),
                    "max-width:": "".concat(this.iframe.width, " !important;"),
                  };
                if (
                  (this.isWindowed || this.isEmbedded
                    ? (a["position:"] = "absolute !important;")
                    : (a["position:"] = "fixed !important;"),
                  this.isWindowed || this.mobileBrowserName || this.isEmbedded)
                ) {
                  var r = 0,
                    i = 0,
                    n = 0,
                    s = 0;
                  this.mobileBrowserName &&
                    e &&
                    e.mobile &&
                    e.mobile.maximized &&
                    (e.mobile.maximized.bottomOffset &&
                      (r = e.mobile.maximized.bottomOffset),
                    e.mobile.maximized.topOffset &&
                      (s = e.mobile.maximized.topOffset),
                    e.mobile.maximized.leftOffset &&
                      (n = e.mobile.maximized.leftOffset),
                    e.mobile.maximized.rightOffset &&
                      (i = e.mobile.maximized.rightOffset),
                    (a["height:"] = "calc(100% - ".concat(
                      r + s,
                      "px) !important;"
                    )),
                    (a["min-height:"] = "calc(100% - ".concat(
                      r + s,
                      "px) !important;"
                    )),
                    (a["max-height:"] = "calc(100% - ".concat(
                      r + s,
                      "px) !important;"
                    )),
                    (a["width:"] = "calc(100% - ".concat(
                      n + i,
                      "px) !important;"
                    )),
                    (a["min-width:"] = "calc(100% - ".concat(
                      n + i,
                      "px) !important;"
                    )),
                    (a["max-width:"] = "calc(100% - ".concat(
                      n + i,
                      "px) !important;"
                    ))),
                    (a["bottom:"] = "".concat(r, "px !important;")),
                    (a["right:"] = "".concat(i, "px !important;")),
                    (a["left:"] = "".concat(n, "px !important;")),
                    (a["top:"] = "".concat(s, "px !important;"));
                } else {
                  var o;
                  (o =
                    "slide" === this.onClick
                      ? 0
                      : this.isCenter && this.isRoundWidget
                      ? this.minDesktop.width + this.xOffset + 10
                      : this.xOffset - 10),
                    this.isRight
                      ? (a["right:"] = "".concat(o, "px !important;"))
                      : (a["left:"] = "".concat(o, "px !important;")),
                    this.isRoundWidget && "slide" !== this.onClick
                      ? this.isBottom
                        ? (a["bottom:"] = "".concat(
                            this.minDesktop.height + this.yOffset + 10,
                            "px !important;"
                          ))
                        : ((a["top:"] = "".concat(
                            this.minDesktop.height + this.yOffset + 10,
                            "px !important;"
                          )),
                          (a["bottom:"] = "auto !important;"))
                      : (a["bottom:"] = "0px !important;");
                }
                return (
                  "max" === this.chatWindowState ||
                  this.isWindowed ||
                  this.isEmbedded
                    ? (a["display:"] = "block !important;")
                    : (a["display:"] = "none !important;"),
                  mt(mt({}, this.genericStyles), a)
                );
              },
              borderRadius: function () {
                return this.isWindowed ||
                  this.mobileBrowserName ||
                  this.isEmbedded ||
                  "slide" === this.onClick
                  ? "0px"
                  : this.isRoundWidget
                  ? "5px"
                  : "5px 5px  0 0";
              },
              borderRadiusTop: function () {
                return this.isWindowed ||
                  this.mobileBrowserName ||
                  this.isEmbedded ||
                  "slide" === this.onClick
                  ? "0px"
                  : "5px 5px 0 0";
              },
              hasHomeView: function () {
                if (this.hasChatEnded) return !0;
                var t = this.states[this.pageStatus];
                return (
                  !t ||
                  !t.body ||
                  1 !== t.body.length ||
                  "chat" !== t.body[0].type
                );
              },
              showBackButton: function () {
                return (
                  this.currentView &&
                  ("chat" === this.currentView.path ||
                    "agents" === this.currentView.path ||
                    "prechat" === this.currentView.path) &&
                  this.hasHomeView &&
                  ("agents" === this.currentView.path || !this.isOverlayOpen)
                );
              },
              isToolbarElementsVisible: function () {
                return !(
                  !this.mobileBrowserName &&
                  this.isRoundWidget &&
                  "/" === this.currentRoute &&
                  (void 0 === this.webrtcOptions ||
                    !this.webrtcOptions.enabled ||
                    (this.isPrechatEnabled && !this.prechatFormSubmitted))
                );
              },
              isChatInputBottom: function () {
                var t = !1,
                  e = this.states[this.pageStatus];
                return (
                  e &&
                    e.body.length &&
                    (t = "chat" === e.body[e.body.length - 1].type),
                  t
                );
              },
              showChatInput: function () {
                return (
                  this.currentView &&
                  (("/" === this.currentView.path &&
                    (this.hasChatStarted || this.isChatInputBottom)) ||
                    "chat" === this.currentView.path)
                );
              },
              hasPrechatHistory: function () {
                if (0 === this.getHistory.length) return !1;
                var t = !1;
                return (
                  this.getHistory.filter(function (e) {
                    "prechat" === e && (t = !0);
                  }),
                  t
                );
              },
              isHomeViewVisible: function () {
                return (
                  this.needConsent ||
                  ("chat" !== this.currentRoute &&
                    "agents" !== this.currentRoute &&
                    "prechat" !== this.currentRoute &&
                    this.hasHomeView &&
                    (!this.hasPrechatHistory || this.prechatFormSubmitted))
                );
              },
              isWebrtcEnabled: function () {
                return this.components && this.components.webrtc;
              },
            }
          ),
          watch: {
            chatWindowState: function (t) {
              var e = this;
              "max" === t
                ? ((this.classString = "open"),
                  this.openView(),
                  this.formIsOpen && this.resizeFrame(),
                  (this.isChatStatus["display:"] = "block !important;"),
                  this.showMaxWidget())
                : ((this.classString = "closed"),
                  (this.noZoomMetaTag.content = ""),
                  this.noZoomMetaTag.parentNode &&
                    this.noZoomMetaTag.parentNode.removeChild(
                      this.noZoomMetaTag
                    ),
                  null !== this.originalBodyStyle &&
                    (document.body.style.cssText = this.originalBodyStyle),
                  this.mobileBrowserName
                    ? (this.isChatStatus["display:"] = "none !important;")
                    : setTimeout(function () {
                        e.isChatStatus["display:"] = "none !important;";
                      }, 250),
                  this.hideMaxWidget());
            },
            pageStatus: function () {
              "max" === this.chatWindowState && this.openView(),
                "offline" === this.pageStatus &&
                  (this.showOverlay(!1),
                  this.routerPush("/"),
                  this.clearHistory());
            },
            unreadMessageCount: function (t) {
              this.isWindowed ||
                this.isEmbedded ||
                (!this.mobileBrowserName &&
                  !this.desktopVisibility.show &&
                  t > 0 &&
                  "max" !== this.chatWindowState &&
                  this.updateChatWindowState("max"),
                !this.firstIncoming ||
                  this.mobileBrowserName ||
                  this.showMessagePreview ||
                  "max" === this.chatWindowState ||
                  this.updateChatWindowState("max"));
            },
            isReady: function (t, e) {
              var a = this;
              t !== e &&
                ((this.showConnected = !0),
                setTimeout(function () {
                  a.showConnected = !1;
                }, 1e3));
            },
            isReconnecting: function (t, e) {
              var a = this;
              t !== e &&
                ((this.showConnected = !0),
                setTimeout(function () {
                  a.showConnected = !1;
                }, 1e3));
            },
          },
          methods: mt(
            mt(
              {},
              Object(r.b)({
                routerPush: "router/routerPush",
                updateRoute: "router/updateRoute",
                toggleWidget: "session/toggleWidget",
                toggleLocalSound: "widget/toggleLocalSound",
                showOverlay: "overlay/showOverlay",
                routerBack: "router/routerBack",
                clearHistory: "router/clearHistory",
                updateChatWindowState: "session/updateChatWindowState",
                toggleFocus: "widget/toggleFocus",
              })
            ),
            {},
            {
              triggerClick: function () {
                this.$store.dispatch("session/toggleWidget");
              },
              openView: function () {
                if (
                  ((this.initialized = !0),
                  this.showMaxWidget(),
                  this.mobileBrowserName)
                ) {
                  var t =
                    document.querySelector("meta[name=viewport]") ||
                    document.querySelector("meta[name=VIEWPORT]");
                  this.$TawkWindow.isMobileOptimizedWebsite ||
                    null === this.noZoomMetaTag ||
                    (this.$TawkWindow.metaContent ||
                    "" !== this.noZoomMetaTag.content
                      ? this.$TawkWindow.metaContent &&
                        !this.$TawkWindow.hasNoScale &&
                        t &&
                        t.setAttribute(
                          "content",
                          this.$TawkWindow.metaContent + ", user-scalable=no"
                        )
                      : ((this.noZoomMetaTag.content =
                          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"),
                        this.noZoomMetaTag.parentNode ||
                          document
                            .getElementsByTagName("head")[0]
                            .appendChild(this.noZoomMetaTag)));
                  var e = document.body;
                  this.originalBodyStyle = e.style.cssText;
                  for (
                    var a = [
                        "height",
                        "min-height",
                        "max-height",
                        "width",
                        "min-width",
                        "max-width",
                      ],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.style.setProperty(a[r], "100%", "important");
                  e.style.setProperty("overflow", "hidden", "important"),
                    e.style.setProperty("position", "fixed", "important");
                }
                if (
                  (!this.currentView &&
                    this.hasHomeView &&
                    this.routerPush("/"),
                  "offline" !== this.pageStatus)
                )
                  return this.hasHomeView ||
                    this.prechatFormSubmitted ||
                    !this.isPrechatEnabled
                    ? void (
                        (this.currentView &&
                          ("/" !== this.currentRoute || this.hasHomeView)) ||
                        ((this.hasLiveChat && this.hasChatStarted) ||
                        !this.hasHomeView
                          ? (this.routerPush("chat"), this.showOverlay(!1))
                          : this.showOverlay(!1))
                      )
                    : this.routerPush("prechat");
                this.showOverlay(!1);
              },
              loaded: function () {
                var t = this;
                if (
                  (this.hasHomeView ||
                    (this.updateRoute({ path: "chat", hasBack: !1 }),
                    this.updateRoute({ path: "prechat", hasBack: !1 })),
                  this.isWindowed ||
                  this.isEmbedded ||
                  "max" === this.chatWindowState
                    ? this.openView()
                    : this.$refs["max-widget"].$el.style.setProperty(
                        "display",
                        "none",
                        "important"
                      ),
                  this.$eventBus.$on("formOpened", function () {
                    "max" === t.chatWindowState
                      ? t.resizeFrame()
                      : (t.formIsOpen = !0);
                  }),
                  this.$eventBus.$on("formClosed", function () {
                    (t.resizeHeightTo = null), (t.formIsOpen = !1);
                  }),
                  this.$eventBus.$on("resetState", function () {
                    t.$store.commit("router/changeCurrentView", "/"),
                      t.$TawkActivityMonitor.setupMaxWidgetListeners();
                  }),
                  !this.isWindowed && !this.isEmbedded)
                ) {
                  var e,
                    a,
                    r = "",
                    i = "tawkMaxOpen",
                    n = "tawkMaxClose",
                    s = this.$el.id;
                  this.isBottom
                    ? ((e = "transform:translate(0, 30px);"),
                      (a = "transform:translate(0, 0px);"))
                    : this.isCenter
                    ? this.isRight
                      ? ((e = "transform:translate(30px,0);"),
                        (a = "transform:translate(0px,0);"))
                      : ((e = "transform:translate(-30px,0);"),
                        (a = "transform:translate(0px,0);"))
                    : ((e = "transform:translate(0, -30px);"),
                      (a = "transform:translate(0, 0px);"));
                  var o,
                    c = "{0%{opacity:0;" + e + ";}to{opacity:1;" + a + "}}";
                  (r += "@keyframes " + i + c),
                    (r += "@-moz-keyframes " + i + c),
                    (r += "@-webkit-keyframes " + i + c),
                    (r +=
                      "#" +
                      s +
                      ".open{animation : " +
                      i +
                      " .25s ease!important;}"),
                    this.mobileBrowserName ||
                      (this.isRoundWidget,
                      (r +=
                        "@keyframes " +
                        n +
                        (o =
                          "{from{opacity: 1;" +
                          a +
                          ";}to{opacity: 0;" +
                          e +
                          ";}}")),
                      (r += "@-moz-keyframes " + n + o),
                      (r += "@-webkit-keyframes " + n + o),
                      (r +=
                        "#" +
                        s +
                        ".closed{animation: " +
                        n +
                        " .25s ease!important}"));
                  var l = document.head,
                    u = document.createDocumentFragment(),
                    d = document.createElement("style"),
                    h = document.createTextNode(r);
                  (d.type = "text/css"),
                    u.appendChild(d),
                    l.appendChild(u),
                    d.styleSheet
                      ? (d.styleSheet.cssText = h.nodeValue)
                      : d.appendChild(h);
                }
                this.$TawkActivityMonitor.setupMaxWidgetListeners();
              },
              widgetFocus: function (t) {
                this.$eventBus.$emit("widgetOnFocus", t);
              },
              resizeFrame: function () {
                var t = this,
                  e = 0,
                  a = 0,
                  r = 0;
                this.isWindowed ||
                  this.mobileBrowserName ||
                  this.isEmbedded ||
                  setTimeout(function () {
                    if (
                      (!t.isOverlayOpen &&
                        t.$refs["main-toolbar"] &&
                        t.$refs["main-toolbar"].$el &&
                        (e = t.$refs["main-toolbar"].$el.offsetHeight),
                      t.isOverlayOpen &&
                        t.$refs["view-overlay"] &&
                        t.$refs["view-overlay"].$el.children[0] &&
                        (e =
                          t.$refs["view-overlay"].$el.children[0].offsetHeight),
                      !t.isOverlayOpen &&
                        t.$refs["main-footer"] &&
                        (a = t.$refs["main-footer"].$el.offsetHeight),
                      t.isOverlayOpen &&
                        t.$refs["overlay-footer"] &&
                        (a = t.$refs["overlay-footer"].$el.offsetHeight),
                      t.$refs["router-view"] &&
                        t.$refs["router-view"].$children.length)
                    ) {
                      var i = t.$refs["router-view"].$children.length
                        ? t.$refs["router-view"].$children[0]
                        : null;
                      i &&
                        i.$refs &&
                        i.$refs["tawk-inner-panel"] &&
                        (r = i.$refs["tawk-inner-panel"].offsetHeight);
                    }
                    if (!t.$refs["router-view"].$children.length) {
                      var n;
                      "chat" === t.currentRoute && t.$refs["chat-view"]
                        ? (n = t.$refs["chat-view"].$refs["tawk-inner-panel"])
                        : "prechat" === t.currentRoute &&
                          t.$refs["prechat-view"]
                        ? (n =
                            t.$refs["prechat-view"].$refs["tawk-inner-panel"])
                        : t.$refs["home-view"] &&
                          (n = t.$refs["home-view"].$refs["tawk-inner-panel"]);
                      var s = n ? n.lastChild : null;
                      if (s && 0 === s.offsetHeight)
                        return (t.resizeHeightTo = null);
                      r = n ? n.offsetHeight : 0;
                    }
                    return 0 === r
                      ? (t.resizeHeightTo = null)
                      : (r < 250 && (r = 250),
                        0 === r
                          ? (t.resizeHeightTo = null)
                          : void (
                              (r += e + a) &&
                              t.maxDimension.height > r + 10 &&
                              (t.resizeHeightTo = r + 10)
                            ));
                  }, 300);
              },
              handleOverlayBack: function () {
                this.routerBack(), (this.isDraggedOver = !1);
              },
              checkRouteLoaded: function () {
                var t = this;
                clearTimeout(this.routeLoadedTimeout),
                  void 0 !== this.$refs["router-view"]
                    ? (this.isLoaded = !0)
                    : (this.routeLoadedTimeout = setTimeout(function () {
                        t.checkRouteLoaded();
                      }, 1e3));
              },
              handleFocus: function () {
                this.toggleFocus(!0);
              },
              handleBlur: function () {
                this.toggleFocus(!1);
              },
              calculateHeight: function () {
                if (
                  this.isWindowed ||
                  this.mobileBrowserName ||
                  this.isEmbedded ||
                  "slide" === this.onClick
                )
                  this.iframe.height = "100%";
                else if (this.resizeHeightTo)
                  this.iframe.height = this.resizeHeightTo + "px";
                else {
                  if (this.isRoundWidget) {
                    var t = this.minDesktop.height + this.yOffset + 10;
                    if (this.maxDimension.height + t > window.innerHeight)
                      return void (this.iframe.height = "".concat(
                        window.innerHeight - t - 10,
                        "px"
                      ));
                  }
                  this.maxDimension.height >= window.innerHeight
                    ? (this.iframe.height = "".concat(
                        window.innerHeight - 10,
                        "px"
                      ))
                    : (this.iframe.height = "".concat(
                        this.maxDimension.height,
                        "px"
                      ));
                }
              },
              calculateWidth: function () {
                if (
                  this.isWindowed ||
                  this.mobileBrowserName ||
                  this.isEmbedded
                )
                  this.iframe.width = "100%";
                else {
                  if (this.isRoundWidget) {
                    var t = this.minDesktop.width + this.xOffset + 10;
                    if (this.maxDimension.width + t > window.innerWidth)
                      return void (this.iframe.width = "".concat(
                        window.innerWidth - t - 10,
                        "px"
                      ));
                  }
                  this.maxDimension.width >= window.innerWidth
                    ? (this.iframe.width = "".concat(
                        window.innerWidth - 10,
                        "px"
                      ))
                    : (this.iframe.width = this.maxDimension.width + "px");
                }
              },
              calculateIframeSize: function () {
                this.calculateHeight(), this.calculateWidth();
              },
              showMaxWidget: function () {
                var t = this;
                this.$refs["max-widget"].$el.style.setProperty(
                  "display",
                  "block",
                  "important"
                ),
                  setTimeout(function () {
                    t.isVisible = !0;
                  }, 250);
              },
              hideMaxWidget: function () {
                var t = this;
                this.$nextTick(function () {
                  t.$refs["max-widget"].$el.style.setProperty(
                    "display",
                    "block",
                    "important"
                  ),
                    (t.isVisible = !1);
                }),
                  setTimeout(function () {
                    t.$refs["max-widget"].$el.style.setProperty(
                      "display",
                      "none",
                      "important"
                    );
                  }, 250);
              },
              injectStyleNode: function () {
                if (!this.mobileBrowserName && "slide" === this.onClick) {
                  var t = "-100%",
                    e = this.$refs["max-widget"].$el.contentDocument,
                    a = document.createElement("style");
                  (a.type = "text/css"),
                    a.classList.add("tawk-dynamic-style"),
                    this.isRight && (t = "100%"),
                    a.appendChild(
                      document.createTextNode(
                        "\n\t\t\t\t.tawk-max-slide-enter-active,\n\t\t\t\t.tawk-max-slide-leave-active {\n\t\t\t\t\ttransition: all 0.25s;\n\t\t\t\t\ttransition-timing-function: ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-enter {\n\t\t\t\t\ttransform: translateX("
                          .concat(
                            t,
                            ");\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-enter-to {\n\t\t\t\t\ttransform: translateX(0%);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-leave {\n\t\t\t\t\ttransform: translateX(0%);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-leave-to {\n\t\t\t\t\ttransform: translateX("
                          )
                          .concat(
                            t,
                            ");\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t"
                          )
                      )
                    ),
                    e.head.appendChild(a);
                }
              },
              removeStyleNode: function () {
                var t = this.$refs[
                  "max-widget"
                ].$el.contentDocument.querySelector(".tawk-dynamic-style");
                t && t.parentNode.removeChild(t);
              },
            }
          ),
          mounted: function () {
            var t = this;
            this.calculateIframeSize(),
              (this.noZoomMetaTag = document.createElement("meta")),
              (this.noZoomMetaTag.name = "viewport"),
              this.checkRouteLoaded(),
              this.$el.contentWindow.addEventListener(
                "focus",
                this.handleFocus
              ),
              this.$el.contentWindow.addEventListener("blur", this.handleBlur),
              window.addEventListener("resize", this.calculateIframeSize),
              this.$eventBus.$on("switchWidget", function () {
                (t.key = i.Helper.generateUUID()),
                  t.calculateIframeSize(),
                  t.$nextTick(function () {
                    t.injectStyleNode();
                  });
              }),
              this.$eventBus.$on("forceUpdate", function () {
                (t.initialized = !1),
                  t.$nextTick(function () {
                    t.initialized = !0;
                  });
              }),
              this.injectStyleNode(),
              this.$eventBus.$on("updateWidgetSettings", function () {
                t.removeStyleNode(),
                  t.$nextTick(function () {
                    t.injectStyleNode();
                  });
              }),
              this.$store.dispatch("form/get");
          },
          beforeDestroy: function () {
            this.$el.contentWindow.removeEventListener(
              "focus",
              this.handleFocus
            ),
              this.$el.contentWindow.removeEventListener(
                "blur",
                this.handleBlur
              ),
              window.removeEventListener("resize", this.calculateIframeSize);
          },
        },
        gt = Object(d.a)(
          pt,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "i-frame",
              {
                key: t.key,
                ref: "max-widget",
                attrs: {
                  width: t.iframe.width,
                  height: t.iframe.height,
                  cssLink: t.cssLink,
                  styleObject: t.styleObject,
                  classString: t.classString,
                },
              },
              [
                e(
                  "transition",
                  { attrs: { tag: "div", name: "tawk-max-slide" } },
                  [
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.isVisible,
                            expression: "isVisible",
                          },
                        ],
                      },
                      [
                        t.initialized
                          ? e(
                              "div",
                              {
                                staticClass:
                                  "tawk-max-container tawk-flex tawk-flex-column",
                                class: [
                                  !t.isToolbarElementsVisible &&
                                    "tawk-no-toolbar-elements",
                                ],
                                style: { borderRadius: t.borderRadius },
                                on: {
                                  click: t.widgetFocus,
                                  keyup: function (e) {
                                    return !e.type.indexOf("key") &&
                                      t._k(
                                        e.keyCode,
                                        "enter",
                                        13,
                                        e.key,
                                        "Enter"
                                      )
                                      ? null
                                      : t.widgetFocus.apply(null, arguments);
                                  },
                                },
                              },
                              [
                                e("toolbar", {
                                  ref: "main-toolbar",
                                  attrs: {
                                    borderRadiusTop: t.borderRadiusTop,
                                    showBackButton: t.showBackButton,
                                    currentView: t.currentView,
                                    showWebRtcButtons: !0,
                                    showAgentAvatars: !0,
                                  },
                                  on: {
                                    showEndChat: function (e) {
                                      t.showEndChat = !0;
                                    },
                                  },
                                }),
                                t.isWebrtcEnabled ? e("call-widget") : t._e(),
                                e(
                                  "tawk-overlay",
                                  {
                                    ref: "view-overlay",
                                    style: { borderRadius: t.borderRadius },
                                    attrs: {
                                      isOpen: t.isOverlayOpen,
                                      title:
                                        t.currentView && t.currentView.title
                                          ? t.currentView.title()
                                          : "",
                                      backTooltipText: t.$i18n(
                                        "rollover",
                                        "back"
                                      ),
                                      headerClass: "tawk-custom-color",
                                    },
                                    on: { goBack: t.handleOverlayBack },
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        attrs: { slot: "options" },
                                        slot: "options",
                                      },
                                      [
                                        t.isOverlayOpen
                                          ? e("toolbar", {
                                              attrs: {
                                                borderRadiusTop:
                                                  t.borderRadiusTop,
                                                currentView: t.currentView,
                                              },
                                              on: {
                                                showEndChat: function (e) {
                                                  t.showEndChat = !0;
                                                },
                                              },
                                            })
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "tawk-flex tawk-flex-column",
                                        staticStyle: {
                                          height: "100%",
                                          overflow: "hidden",
                                        },
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "tawk-flex tawk-flex-column tawk-flex-1 tawk-custom-flex-1",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "tawk-router-view tawk-flex tawk-flex-1 tawk-custom-flex-1",
                                              },
                                              [
                                                e("tawk-router-view", {
                                                  ref: "router-view",
                                                }),
                                              ],
                                              1
                                            ),
                                            e("maximize-footer", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: t.isOverlayOpen,
                                                  expression: "isOverlayOpen",
                                                },
                                              ],
                                              ref: "overlay-footer",
                                            }),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t.isInactive ? e("inactive-overlay") : t._e(),
                                t.showEndChat && !t.hasChatEnded
                                  ? e("end-chat", {
                                      on: {
                                        cancelEnd: function (e) {
                                          t.showEndChat = !1;
                                        },
                                      },
                                    })
                                  : t._e(),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "tawk-flex tawk-flex-column tawk-flex-1",
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "tawk-router-view tawk-flex tawk-flex-1",
                                      },
                                      [
                                        t.isLoaded
                                          ? t._e()
                                          : e(
                                              "div",
                                              {
                                                staticClass:
                                                  "tawk-flex tawk-flex-middle tawk-flex-center",
                                                style: {
                                                  width: "100%",
                                                  height: "100%",
                                                  left: 0,
                                                  top: 0,
                                                  position: "absolute",
                                                },
                                              },
                                              [
                                                e("div", {
                                                  staticClass:
                                                    "tawk-spinner-loader",
                                                  style: { margin: "1px" },
                                                }),
                                              ]
                                            ),
                                        e(
                                          "transition",
                                          {
                                            attrs: {
                                              name: "slide-fade",
                                              mode: "out-in",
                                            },
                                          },
                                          [
                                            !t.hasLiveChat ||
                                            t.needConsent ||
                                            (!t.chatOrder &&
                                              !t.hasChatStarted &&
                                              t.hasHomeView)
                                              ? t._e()
                                              : e("chat-view", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        "chat" ===
                                                          t.currentRoute ||
                                                        "agents" ===
                                                          t.currentRoute,
                                                      expression:
                                                        "currentRoute === 'chat' || currentRoute === 'agents'",
                                                    },
                                                  ],
                                                  ref: "chat-view",
                                                }),
                                          ],
                                          1
                                        ),
                                        e(
                                          "transition",
                                          {
                                            attrs: {
                                              name: "slide-fade",
                                              mode: "out-in",
                                            },
                                          },
                                          [
                                            t.hasLiveChat &&
                                            !t.needConsent &&
                                            t.isPrechatEnabled &&
                                            t.isReady &&
                                            !t.prechatFormSubmitted &&
                                            ("prechat" === t.currentRoute ||
                                              !t.hasHomeView ||
                                              (t.hasPrechatHistory &&
                                                !t.prechatFormSubmitted))
                                              ? e("prechat-view", {
                                                  ref: "prechat-view",
                                                })
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                        e(
                                          "transition",
                                          {
                                            attrs: {
                                              name: "slide-fade",
                                              mode: "out-in",
                                            },
                                          },
                                          [
                                            t.hasHomeView || t.needConsent
                                              ? e("home-view", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        t.isHomeViewVisible,
                                                      expression:
                                                        "isHomeViewVisible",
                                                    },
                                                  ],
                                                  ref: "home-view",
                                                  attrs: {
                                                    isVisible:
                                                      t.isHomeViewVisible &&
                                                      !t.isOverlayOpen,
                                                  },
                                                })
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    e("maximize-footer", {
                                      ref: "main-footer",
                                    }),
                                  ],
                                  1
                                ),
                                e(
                                  "transition",
                                  { attrs: { name: "slide-fade" } },
                                  [
                                    t.isReconnecting
                                      ? e("tawk-alert", {
                                          staticStyle: {
                                            position: "absolute",
                                            bottom: "16px",
                                            left: "16px",
                                            right: "16px",
                                            width: "auto",
                                            "z-index": "10",
                                          },
                                          attrs: {
                                            title: t.$i18n(
                                              "notifications",
                                              "reconnecting"
                                            ),
                                            status: "danger",
                                            description: "",
                                            icon: "error",
                                          },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : t._e(),
                      ]
                    ),
                  ]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = gt.exports;
    },
    e49c: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return n;
      });
      var r = a("f0b0"),
        i = a("7f46"),
        n = {
          methods: {
            setError: function (t, e) {
              e.isError = t;
            },
            setValue: function (t, e) {
              e.value = t;
              var a = e.value || "";
              "string" == typeof t && (a = t.trim()),
                ("text" === e.type ||
                  "phone" === e.type ||
                  "textarea" === e.type) &&
                  e.isRequired &&
                  a.length > 0 &&
                  (e.invalidType = "");
            },
            setInvalidType: function (t, e) {
              e.invalidTypeValue = t;
            },
            formatFields: function (t) {
              for (var e = [], a = 0; a < t.length; a++) {
                var i = t[a],
                  n = {},
                  s = "";
                if (
                  (i.required &&
                    (n.required = this.$i18n("form", "required_error_message")),
                  i.context &&
                    "email" === i.context &&
                    ((n.email = this.$i18n("form", "email_error_message")),
                    (s = this.email)),
                  i.context && "name" === i.context && (s = this.name),
                  i.context &&
                    "phone" === i.context &&
                    (n.phone = this.$i18n("form", "phone_error_message")),
                  "department" === i.context && this.departments.length)
                ) {
                  for (
                    var o = { online: [], offline: [] }, c = 0;
                    c < this.departments.length;
                    c++
                  ) {
                    var l = this.departments[c];
                    "online" === l.st
                      ? o.online.push({
                          status: l.st,
                          text: l.n,
                          rawText: l.n,
                          value: l.did,
                        })
                      : o.offline.push({
                          status: l.st,
                          text: l.n,
                          rawText: l.n,
                          value: l.did,
                        });
                  }
                  for (var u in o)
                    o[u].sort(function (t, e) {
                      var a = t.text.toUpperCase(),
                        r = e.text.toUpperCase();
                      return a < r ? -1 : a > r ? 1 : 0;
                    });
                  e.push({
                    label: i.label,
                    type: i.context,
                    isRequired: i.required,
                    selections: o || [],
                    id: r.Helper.generateUUID(),
                    errorMessage: n,
                    isError: !1,
                    invalidTypeValue: "",
                  });
                } else
                  e.push({
                    label: i.label,
                    type: i.context || i.type,
                    isRequired: i.required,
                    selections: i.options
                      ? this.formatOptions(i.options, i.type)
                      : null,
                    value: "checkbox" === i.type ? [] : s,
                    id: r.Helper.generateUUID(),
                    errorMessage: n,
                    invalidTypeValue: "",
                  });
              }
              return e;
            },
            formatOptions: function (t, e) {
              var a,
                i = [];
              "radio" === e && (a = r.Helper.generateUUID());
              for (var n = 0; n < t.length; n++) {
                var s = {
                  value: t[n],
                  label: t[n],
                  id: r.Helper.generateUUID(),
                  name: a,
                };
                i.push(s);
              }
              return i;
            },
            formatFormData: function () {
              var t = {},
                e = !1;
              t.questions = [];
              for (var a = 0; a < this.formFields.length; a++) {
                var r = this.formFields[a],
                  n = r.value || "";
                if (("string" == typeof n && (n = n.trim()), "name" === r.type))
                  t.name = n;
                else if ("email" === r.type) t.email = n;
                else if ("phone" === r.type && n.length > 0)
                  (n = n.replace(/[- )(]/g, "")), (t.phone = n);
                else if ("department" === r.type) {
                  if (r.isRequired && !this.selectedDepartment) {
                    if (
                      !r.selections ||
                      (!r.selections.online.length &&
                        !r.selections.offline.length)
                    )
                      continue;
                    (r.isError = !0), (e = !0);
                    continue;
                  }
                  if (((r.isError = !1), !this.selectedDepartment)) continue;
                  (t.department = this.selectedDepartment.value),
                    t.questions.push({
                      label: i.a.rawDecode(r.label),
                      answer: i.a.rawDecode(this.selectedDepartment.rawText),
                    });
                }
                r.isRequired &&
                  0 === n.length &&
                  "department" !== r.type &&
                  (this.$refs[r.id] &&
                    this.$refs[r.id].length &&
                    this.$refs[r.id][0] &&
                    this.$refs[r.id][0].validate &&
                    this.$refs[r.id][0].validate(),
                  (e = !0)),
                  r.isError
                    ? (e = !0)
                    : n &&
                      n.length &&
                      ("string" == typeof n
                        ? t.questions.push({
                            label: i.a.rawDecode(r.label),
                            answer: n,
                          })
                        : t.questions.push({
                            label: i.a.rawDecode(r.label),
                            answer: n.join(", "),
                          }));
              }
              return { formData: t, hasError: e };
            },
            formatInlineFormData: function () {
              for (
                var t = { additionalInfo: [] }, e = !1, a = null, r = 0;
                r < this.formFields.length;
                r++
              ) {
                var n = this.formFields[r],
                  s = n.value || "";
                if (
                  ("string" == typeof s && (s = s.trim()),
                  n.isRequired && 0 === s.length)
                ) {
                  (a = this.$i18n("form", "all_required_error_message")),
                    (e = !0);
                  break;
                }
                if ("name" === n.type) t.name = s.length ? s : void 0;
                else if ("email" === n.type) t.email = s.length ? s : void 0;
                else if ("phone" === n.type)
                  s.length > 0 && (s = s.replace(/[- )(]/g, "")),
                    (t.phone = s.length ? s : void 0);
                else if ("message" === n.type)
                  t.message = s.length ? s : void 0;
                else {
                  var o;
                  null !== (o = s) &&
                  void 0 !== o &&
                  o.length &&
                  "string" == typeof s
                    ? n.value.length &&
                      t.additionalInfo.push({
                        label: i.a.rawDecode(n.label),
                        type: n.type,
                        value: s,
                      })
                    : n.value.length &&
                      t.additionalInfo.push({
                        label: i.a.rawDecode(n.label),
                        type: n.type,
                        value: s.join(", "),
                      });
                }
                n.isError && (e = !0);
              }
              return { formData: t, error: { hasError: e, message: a } };
            },
          },
        };
    },
  },
]);
//# sourceMappingURL=twk-chunk-49c2962f.js.map
