(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-2d0b383d"],
  {
    2966: function (t, n, s) {
      "use strict";
      var e = {
          name: "survey-options",
          components: { TawkButton: s("f0b0").TawkButton },
          props: { options: { type: Array, required: !0 } },
          methods: {
            handleOnClick: function (t) {
              this.$emit("selectSurvey", t);
            },
          },
        },
        o = s("2877"),
        i = Object(o.a)(
          e,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "div",
              { staticClass: "tawk-survey" },
              t._l(t.options, function (s, e) {
                return n(
                  "div",
                  { key: e, staticClass: "tawk-survey-option" },
                  [
                    n("tawk-button", {
                      staticClass: "tawk-text-left",
                      attrs: { size: "small" },
                      domProps: { innerHTML: t._s(s.text) },
                      on: {
                        click: function (n) {
                          return t.handleOnClick(s.text);
                        },
                      },
                    }),
                  ],
                  1
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.a = i.exports;
    },
  },
]);
