(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-2d0aef27"],
  {
    "0bdc": function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("5a60"),
        o = i("2f62"),
        n = i("f0b0"),
        a = i("87dd");
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
      function b(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(i), !0).forEach(function (e) {
                h(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : b(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function h(t, e, i) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != r(t) || !t) return t;
              var i = t[Symbol.toPrimitive];
              if (void 0 !== i) {
                var s = i.call(t, e || "default");
                if ("object" != r(s)) return s;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == r(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      var c = {
          name: "BubbleWidget",
          components: { "i-frame": s.a, TawkIcon: n.TawkIcon },
          directives: { TawkTooltip: n.TawkTooltip },
          mixins: [a.a],
          data: function () {
            return {
              isHidden: "hidden",
              cssLink: "".concat(
                "https://embed.tawk.to/_s/v4/app/67f4b2d4927",
                "/css/bubble-widget.css"
              ),
              closeIconWidth: 16,
              messagePreviewIsVisible: !1,
              key: n.Helper.generateUUID(),
            };
          },
          mounted: function () {
            var t = this;
            this.$eventBus.$on("switchWidget", function () {
              t.key = n.Helper.generateUUID();
            });
          },
          computed: l(
            l(
              {},
              Object(o.c)({
                minDesktop: "widget/minDesktop",
                chatWindowState: "session/chatWindowState",
                pageStatus: "session/pageStatus",
                bubble: "widget/bubble",
                isCenter: "widget/isCenter",
                isRight: "widget/isRight",
                isBottom: "widget/isBottom",
                chatBubbleClosed: "session/chatBubbleClosed",
                isRTL: "widget/isRTL",
              })
            ),
            {},
            {
              isRoundWidget: function () {
                return this.$TawkWidgetSettings.isRoundWidget();
              },
              xOffset: function () {
                return this.$TawkWidgetSettings.xOffset();
              },
              yOffset: function () {
                return this.$TawkWidgetSettings.yOffset();
              },
              bubbleXOffset: function () {
                return this.$TawkWidgetSettings.bubbleXOffset();
              },
              bubbleYOffset: function () {
                return this.$TawkWidgetSettings.bubbleYOffset();
              },
              bubbleRotate: function () {
                return this.$TawkWidgetSettings.bubbleRotate();
              },
              closeButtonPosition: function () {
                return this.isBottom || this.isCenter
                  ? this.isCenter && this.isRight
                    ? "tawk-icon-left"
                    : "tawk-icon-right"
                  : "tawk-icon-bottom";
              },
              textCloseButton: function () {
                var t = {
                  width: "25px",
                  height: "25px",
                  padding: 0,
                  background: "transparent",
                  position: "absolute",
                };
                return (
                  this.isRTL ? (t.left = "2px") : (t.right = "2px"),
                  this.isBottom || this.isCenter
                    ? (t.top = "0")
                    : (t.bottom = "0"),
                  t
                );
              },
              styleObject: function () {
                var t = l(
                  {
                    "position:": "fixed !important;",
                    "display:": "none !important;",
                    "z-index:": "".concat(
                      0 === this.bubble.config.zIndex ? "1000000" : "1000002",
                      " !important;"
                    ),
                    "height:": "".concat(this.height, " !important;"),
                    "max-height:": "".concat(this.height, " !important;"),
                    "min-height:": "".concat(this.height, " !important;"),
                    "width:": "".concat(this.width, " !important;"),
                    "max-width:": "".concat(this.width, " !important;"),
                    "min-width:": "".concat(this.width, " !important;"),
                  },
                  this.calculatePosition()
                );
                return (
                  "max" === this.chatWindowState ||
                  "offline" === this.pageStatus ||
                  this.chatBubbleClosed ||
                  this.messagePreviewIsVisible
                    ? (t["display:"] = "none !important;")
                    : (t["display:"] = "block !important;"),
                  l(l({}, this.genericStyles), t)
                );
              },
              width: function () {
                return "text" === this.bubble.type
                  ? "146px"
                  : "".concat(this.bubble.config.width, "px");
              },
              height: function () {
                return "text" === this.bubble.type
                  ? "85px"
                  : "".concat(
                      this.bubble.config.height + this.closeIconWidth,
                      "px"
                    );
              },
              imageUrl: function () {
                var t,
                  e = this.bubble.config;
                if ("gallery" === e.image.type) {
                  var i = parseInt(e.image.content, 10),
                    s = 22 === i;
                  this.isRoundWidget && (i += "-r"),
                    this.isCenter
                      ? (i += this.isRight ? "-cr" : "-cl")
                      : this.isBottom
                      ? (i += this.isRight ? "-br" : "-bl")
                      : (i += this.isRight ? "-tr" : "-tl"),
                    (t = ""
                      .concat(
                        "https://embed.tawk.to/_s/v4/assets",
                        "/images/attention-grabbers/"
                      )
                      .concat(i)
                      .concat(s ? ".png" : ".svg"));
                } else
                  t = ""
                    .concat("https://tawk.link", "/")
                    .concat(e.image.content);
                return t;
              },
              offsets: function () {
                var t = 0,
                  e = 0,
                  i = 0;
                if (this.isCenter)
                  if ("text" === this.bubble.type)
                    (e = this.yOffset),
                      this.isRight
                        ? ((i = -90),
                          this.isRTL && (e = this.minDesktop.width + e - 146),
                          (e -= 10))
                        : ((i = 90),
                          this.isRoundWidget ||
                            (e = this.minDesktop.width + e - 146),
                          (e += 10)),
                      (t = this.minDesktop.height + this.xOffset + 2);
                  else {
                    var s =
                      "image" === this.bubble.type &&
                      "gallery" === this.bubble.config.image.type;
                    (e = this.bubbleYOffset),
                      (t = this.bubbleXOffset),
                      (i = this.bubbleRotate),
                      s && ((e += this.yOffset), (t += this.xOffset)),
                      0 !== this.bubbleRotate && (s ? (t -= 3) : (t += 2));
                  }
                else
                  "text" === this.bubble.type
                    ? ((e = this.minDesktop.height + this.yOffset + 2),
                      (t = this.xOffset))
                    : "image" === this.bubble.type &&
                      "gallery" === this.bubble.config.image.type
                    ? ((e = this.yOffset + this.bubbleYOffset),
                      (t = this.xOffset + this.bubbleXOffset),
                      (i = this.bubbleRotate))
                    : ((e = this.bubbleYOffset),
                      (t = this.bubbleXOffset),
                      (i = this.bubbleRotate));
                return { xOffset: t, yOffset: e, rotate: i };
              },
            }
          ),
          methods: l(
            l(
              {},
              Object(o.b)({
                toggleWidget: "session/toggleWidget",
                closeChatBubble: "session/closeChatBubble",
              })
            ),
            {},
            {
              calculatePosition: function () {
                var t,
                  e,
                  i =
                    "image" === this.bubble.type &&
                    "gallery" === this.bubble.config.image.type,
                  s = this.offsets,
                  o =
                    "text" === this.bubble.type
                      ? 85
                      : this.bubble.config.height + this.closeIconWidth,
                  n =
                    "text" === this.bubble.type
                      ? 146
                      : this.bubble.config.width,
                  a = {},
                  r = "0;",
                  b = "50% !important;";
                if (this.isCenter) {
                  var l,
                    h = s.yOffset,
                    c = -0.5 * o;
                  (r = "49%;"),
                    0 === s.rotate
                      ? (i
                          ? ((l = 0),
                            (b = "calc(50% - ".concat(
                              0.5 * this.bubble.config.height + 13 - h,
                              "px) !important;"
                            )),
                            (t = "0"))
                          : (l = 0.5 * (this.minDesktop.width - o)),
                        (e = "".concat(s.xOffset, "px !important;")))
                      : i
                      ? ((l = 0),
                        (h = 0 === this.yOffset ? 0 : s.yOffset),
                        (e = "".concat(
                          -1 * (0.5 * (n - o) - s.yOffset),
                          "px !important;"
                        )))
                      : ((l = 0.5 * (this.minDesktop.width - n)),
                        (e = "".concat(
                          -1 * (0.5 * (n - o) - s.xOffset),
                          "px !important;"
                        ))),
                    this.isRight
                      ? ((a["right:"] = e), (a["left:"] = "auto !important;"))
                      : ((a["right:"] = "auto !important;"), (a["left:"] = e)),
                    (a["top:"] = b),
                    (a["bottom:"] = "auto !important;"),
                    t || (t = c - l + h);
                } else
                  (t = "0"),
                    this.isBottom
                      ? ((a["bottom:"] = s.yOffset + "px !important;"),
                        (a["top:"] = "auto !important;"))
                      : ((a["bottom:"] = "auto !important;"),
                        (a["top:"] = s.yOffset + "px !important;")),
                    this.isRight
                      ? ((a["right:"] = s.xOffset + "px !important;"),
                        (a["left:"] = "auto !important;"))
                      : ((a["right:"] = "auto !important;"),
                        (a["left:"] = s.xOffset + "px !important;"));
                var u = "rotate(".concat(s.rotate, "deg) translateZ(0);");
                return (
                  (a["transform:"] = u),
                  (a["-moz-transform:"] = u),
                  (a["-webkit-transform:"] = u),
                  (a["-o-transform:"] = u),
                  (a["-ms-transform:"] = u),
                  (a["transform-origin:"] = r),
                  (a["-moz-transform-origin:"] = r),
                  (a["-webkit-transform-origin:"] = r),
                  (a["-o-transform-origin:"] = r),
                  (a["-ms-transform-origin:"] = r),
                  (a["margin:"] = "".concat(t, "px 0 0 0 !important;")),
                  a
                );
              },
              bubbleClose: function (t) {
                t.stopPropagation(), this.closeChatBubble();
              },
              updateMessagPreviewData: function (t) {
                this.messagePreviewIsVisible = t;
              },
              loaded: function () {
                if ("text" === this.bubble.type) {
                  var t,
                    e,
                    i,
                    s,
                    o,
                    n,
                    a,
                    r,
                    b,
                    l,
                    h,
                    c,
                    u,
                    f = this.$refs["tawk-canvas-bubble"];
                  if (!f || !f.getContext) return;
                  var g = 5,
                    p = 134,
                    d = 63,
                    m = this.bubble.config.background,
                    y = f.getContext("2d"),
                    w = "#e3e0e7";
                  y.clearRect(0, 0, 134, 63),
                    (y.fillStyle = m),
                    this.isCenter || this.isBottom
                      ? ((t = g = 6),
                        (e = g + d - 3),
                        (i = 55),
                        (s = 79),
                        (o = !0),
                        (n = { s1: 0.9, a1: 0.1, s2: 0.4, a2: 1.15 }))
                      : ((t = 68),
                        (e = (g = 16) + 3),
                        (i = 81),
                        (s = 6),
                        (o = !1),
                        (n = { s1: 1.1, a1: 1.9, s2: 1.6, a2: 0.85 })),
                    this.isRTL
                      ? ((r = (a = 10) + 2),
                        (b = a + 5),
                        (l = a - 2),
                        (h = a - 2),
                        (c = a + 5),
                        (i = 81),
                        (u = !o),
                        this.isBottom || this.isCenter
                          ? ((u = !o), (n.s2 = 0.6), (n.a2 = 1.85))
                          : ((u = o), (n.s2 = 0.2), (n.a2 = 1.45)))
                      : ((r = (a = 2) + p - 2),
                        (b = a + p - 5),
                        (l = a + p + 2),
                        (h = a + p + 2),
                        (c = a + p - 5),
                        (u = o)),
                    y.beginPath(),
                    y.moveTo(a + 8, g),
                    y.lineTo(68, g),
                    y.lineTo(a + p - 8, g),
                    y.quadraticCurveTo(a + p, g, a + p, g + 8),
                    y.lineTo(a + p, g + d - 8),
                    y.quadraticCurveTo(a + p, g + d, a + p - 8, g + d),
                    y.lineTo(a + 8, g + d),
                    y.quadraticCurveTo(a, g + d, a, g + d - 8),
                    y.lineTo(a, g + 8),
                    y.quadraticCurveTo(a, g, a + 8, g),
                    (y.strokeStyle = w),
                    (y.lineWidth = 2),
                    y.stroke(),
                    y.closePath(),
                    y.fill(),
                    y.beginPath(),
                    y.arc(68, e, 10, Math.PI * n.s1, Math.PI * n.a1, o),
                    (y.strokeStyle = w),
                    (y.lineWidth = 2),
                    y.stroke(),
                    y.fill(),
                    this.isRoundWidget &&
                      (this.isBottom || this.isCenter || this.isRight
                        ? ((this.isBottom && this.isRight) ||
                            (this.isCenter && this.isRight)) &&
                          (i += 30)
                        : (i -= 30)),
                    y.beginPath(),
                    y.arc(i, s, 5, 0, 2 * Math.PI, !1),
                    (y.strokeStyle = w),
                    (y.lineWidth = 2),
                    y.stroke(),
                    y.closePath(),
                    y.fill(),
                    y.beginPath(),
                    y.arc(r, t + 5, 10, Math.PI * n.s2, Math.PI * n.a2, u),
                    (y.strokeStyle = w),
                    (y.lineWidth = 2),
                    y.stroke(),
                    y.closePath(),
                    (y.fillStyle = m),
                    y.fill(),
                    y.beginPath(),
                    y.moveTo(b, t + 1.5),
                    y.lineTo(l, t + 8),
                    y.closePath(),
                    (y.lineWidth = 2),
                    (y.strokeStyle = this.bubble.config.foreground),
                    y.stroke(),
                    y.beginPath(),
                    y.moveTo(h, t + 1.5),
                    y.lineTo(c, t + 8),
                    y.closePath(),
                    (y.lineWidth = 2),
                    (y.strokeStyle = this.bubble.config.foreground),
                    y.stroke();
                }
                this.$eventBus.$on("mpIsVisible", this.updateMessagPreviewData);
              },
              beforeDestroy: function () {
                this.$eventBus.$off(
                  "mpIsVisible",
                  this.updateMessagPreviewData
                );
              },
            }
          ),
        },
        u = i("2877"),
        f = Object(u.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "i-frame",
              {
                key: t.key,
                attrs: {
                  cssLink: t.cssLink,
                  styleObject: t.styleObject,
                  width: t.width,
                  height: t.height,
                },
              },
              [
                e(
                  "div",
                  {
                    ref: "tawk-bubble-container",
                    staticClass: "tawk-bubble-container",
                    attrs: {
                      id: "tawk-bubble-container",
                      role: "button",
                      tabindex: "0",
                    },
                    on: {
                      click: t.toggleWidget,
                      keyup: function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? null
                          : t.toggleWidget.apply(null, arguments);
                      },
                    },
                  },
                  [
                    "text" === t.bubble.type
                      ? e("div", [
                          e("canvas", {
                            ref: "tawk-canvas-bubble",
                            attrs: {
                              id: "tawk-canvas-bubble",
                              width: "146px",
                              height: "85px",
                            },
                          }),
                          e(
                            "div",
                            {
                              staticClass:
                                "tawk-bubble-text-container tawk-flex tawk-flex-center tawk-flex-middle",
                              style: {
                                top: t.isBottom || t.isCenter ? "5px" : "auto",
                                bottom:
                                  t.isBottom || t.isCenter ? "auto" : "5px",
                                left: "auto",
                                right: "9px",
                              },
                              attrs: { id: "tawk-bubble-text-container" },
                            },
                            [
                              e(
                                "p",
                                {
                                  staticClass:
                                    "tawk-text-center tawk-text-italic",
                                  style: { color: t.bubble.config.foreground },
                                  attrs: { id: "tawk-bubble-text" },
                                },
                                [
                                  t._v(
                                    " " + t._s(t.bubble.config.content) + " "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          e("div", {
                            directives: [
                              {
                                name: "tawk-tooltip",
                                rawName: "v-tawk-tooltip",
                                value: {
                                  position:
                                    this.isBottom || this.isCenter
                                      ? ""
                                      : "bottom",
                                },
                                expression:
                                  "{position : (this.isBottom || this.isCenter ? '' : 'bottom')}",
                              },
                            ],
                            style: t.textCloseButton,
                            attrs: {
                              role: "button",
                              tabindex: "0",
                              "data-text": t.$i18n("form", "close_button"),
                              "aria-label": t.$i18n("form", "close_button"),
                            },
                            on: {
                              click: t.bubbleClose,
                              keydown: function (e) {
                                return !e.type.indexOf("key") &&
                                  t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                  ? null
                                  : t.bubbleClose.apply(null, arguments);
                              },
                            },
                          }),
                        ])
                      : e(
                          "div",
                          { class: t.closeButtonPosition },
                          [
                            e("tawk-icon", {
                              directives: [
                                {
                                  name: "tawk-tooltip",
                                  rawName: "v-tawk-tooltip",
                                },
                              ],
                              attrs: {
                                type: "close",
                                size: "small",
                                role: "button",
                                tabindex: "0",
                                "data-text": t.$i18n("form", "close_button"),
                                "aria-label": t.$i18n("form", "close_button"),
                              },
                              on: {
                                click: t.bubbleClose,
                                keydown: function (e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : t.bubbleClose.apply(null, arguments);
                                },
                              },
                            }),
                            e("img", {
                              style: {
                                width: "".concat(
                                  this.bubble.config.width,
                                  "px"
                                ),
                                height: "".concat(
                                  this.bubble.config.height,
                                  "px"
                                ),
                              },
                              attrs: {
                                src: t.imageUrl,
                                alt: "".concat(
                                  t.$i18n("bubble", "attention_grabber")
                                ),
                              },
                            }),
                          ],
                          1
                        ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = f.exports;
    },
  },
]);
