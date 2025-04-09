(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-2d0da3af"],
  {
    "6b5b": function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("5a60"),
        a = i("2f62"),
        r = i("f0b0"),
        n = i("2966"),
        o = i("87dd"),
        h = i("5868");
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
      function l(t, e) {
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
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                m(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function m(t, e, i) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != c(t) || !t) return t;
              var i = t[Symbol.toPrimitive];
              if (void 0 !== i) {
                var s = i.call(t, e || "default");
                if ("object" != c(s)) return s;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == c(e) ? e : e + "";
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
      var d = {
          name: "MessagePreview",
          components: {
            "i-frame": s.a,
            TawkChatInput: r.TawkChatInput,
            TawkCard: r.TawkCard,
            TawkIcon: r.TawkIcon,
            TawkAvatar: r.TawkAvatar,
            CallWidget: function () {
              return i.e("chunk-2d21ad1b").then(i.bind(null, "bcae"));
            },
            TawkEmoji: r.TawkEmoji,
            SurveyOptions: n.a,
            TawkChatBubble: r.TawkChatBubble,
            TawkTimeago: r.TawkTimeago,
          },
          directives: { TawkTooltip: r.TawkTooltip },
          mixins: [o.a],
          computed: g(
            g(
              {},
              Object(a.c)({
                minDesktop: "widget/minDesktop",
                minMobile: "widget/minMobile",
                pageStatus: "session/pageStatus",
                chatWindowState: "session/chatWindowState",
                showMessagePreview: "widget/showMessagePreview",
                isRight: "widget/isRight",
                isBottom: "widget/isBottom",
                isCenter: "widget/isCenter",
                features: "widget/features",
                isRoundWidget: "widget/isRoundWidget",
                incomingMessage: "chat/incomingMessage",
                chatVersion: "chat/chatVersion",
                states: "widget/states",
                prechatFormSubmitted: "session/prechatFormSubmitted",
                agentProfile: "chat/agentProfile",
                incomingCall: "chat/incomingCall",
                hasLiveChat: "widget/hasLiveChat",
                zoomRatio: "widget/zoomRatio",
                mobileBrowserName: "browserData/mobileBrowserName",
                hasChatStarted: "chat/hasChatStarted",
                agentsCount: "chat/agentsCount",
                emojiEnabled: "widget/emojiEnabled",
                isPrechatEnabled: "widget/isPrechatEnabled",
                propertyId: "property/id",
                widgetId: "widget/id",
                os: "browserData/os",
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
              xOffsetMobile: function () {
                return this.$TawkWidgetSettings.xOffsetMobile();
              },
              yOffsetMobile: function () {
                return this.$TawkWidgetSettings.yOffsetMobile();
              },
              width: function () {
                var t = 360;
                return (
                  this.mobileBrowserName &&
                    (t = 0.6 * window.screen.availWidth),
                  t < 360 && (t = 360),
                  window.innerWidth <= t + 2 * this.padding &&
                    (t = window.innerWidth - 2 * this.padding),
                  t
                );
              },
              frameWidth: function () {
                var t = this.width * this.zoomRatio;
                return (
                  this.previewXOffset + t > window.innerWidth &&
                    (t = window.innerWidth - this.previewXOffset),
                  "".concat(t, "px")
                );
              },
              frameHeight: function () {
                return "".concat((this.height + 45) * this.zoomRatio, "px");
              },
              previewYOffset: function () {
                var t = this.mobileBrowserName
                    ? this.minMobile
                    : this.minDesktop,
                  e = this.mobileBrowserName
                    ? this.yOffsetMobile
                    : this.yOffset;
                return this.isCenter
                  ? e
                  : (t.height + this.padding + e) * this.zoomRatio;
              },
              previewXOffset: function () {
                var t = this.mobileBrowserName
                    ? this.minMobile
                    : this.minDesktop,
                  e = this.mobileBrowserName
                    ? this.xOffsetMobile
                    : this.xOffset;
                return this.isCenter
                  ? (t.height + this.padding + e) * this.zoomRatio
                  : e * this.zoomRatio;
              },
              styleObject: function () {
                var t = {
                  "position:": "fixed !important;",
                  "height:": "".concat(this.frameHeight, " !important;"),
                  "width:": "".concat(this.frameWidth, " !important;"),
                  "min-height:": "".concat(this.frameHeight, " !important;"),
                  "min-width:": "".concat(this.frameWidth, " !important;"),
                  "max-height:": "".concat(this.frameHeight, " !important;"),
                  "max-width:": "".concat(this.frameWidth, " !important;"),
                };
                return (
                  this.isCenter
                    ? ((t["top:"] = "calc(50% + ".concat(
                        this.previewYOffset,
                        "px);"
                      )),
                      (t["transform:"] = "translate(0, -50%) !important;"),
                      (t["-webkit-transform:"] =
                        "translate(0, -50%) !important;"))
                    : this.isBottom
                    ? (t["bottom:"] = "".concat(this.previewYOffset, "px;"))
                    : (t["top:"] = "".concat(this.previewYOffset, "px;")),
                  this.isRight
                    ? (t["right:"] = "".concat(
                        this.previewXOffset,
                        "px !important;"
                      ))
                    : (t["left:"] = "".concat(
                        this.previewXOffset,
                        "px !important;"
                      )),
                  this.isVisible
                    ? (t["display:"] = "block !important;")
                    : (t["display:"] = "none !important;"),
                  g(g({}, this.genericStyles), t)
                );
              },
              inputPlaceholder: function () {
                var t,
                  e = this.states[this.pageStatus];
                if (e && e.body && e.body.length)
                  for (var i = 0; i < e.body.length; i++) {
                    var s = e.body[i];
                    if ("chat" === s.type) {
                      t = s.content.inputPlaceholder;
                      break;
                    }
                  }
                return t;
              },
              showInputField: function () {
                return !(
                  this.states.prechat &&
                  this.states.prechat.handlers &&
                  this.states.prechat.handlers.form &&
                  !this.prechatFormSubmitted
                );
              },
              isLiveChatFeatureEnabled: function () {
                return !!(
                  this.hasLiveChat ||
                  (this.hasChatStarted && this.agentsCount > 0)
                );
              },
              isSurveyOptionOnly: function () {
                var t = !0;
                return (
                  this.messages.filter(function (e) {
                    (!e.surveyObj || (e.surveyObj && 0 !== e.message.length)) &&
                      (t = !1);
                  }),
                  t
                );
              },
              getSurveyOptions: function () {
                var t = {};
                if (this.messages.length) {
                  var e = this.messages.length - 1,
                    i = this.messages[e];
                  i.surveyObj && ((t = i.surveyObj).senderType = i.senderType);
                }
                return t;
              },
            }
          ),
          data: function () {
            return {
              isCloseVisible: !1,
              backgroundColor: this.$store.getters["widget/headerBgColor"],
              cssLink: "".concat(
                "https://embed.tawk.to/_s/v4/app/67f4b2d4927",
                "/css/message-preview.css"
              ),
              isVisible: !1,
              messages: [],
              isDuration: !0,
              height: 100,
              isLive: !0,
              padding: 20,
              isDraggedOver: !1,
              textAreaHeight: 18,
              key: r.Helper.generateUUID(),
            };
          },
          watch: {
            incomingMessage: function (t, e) {
              "min" === this.chatWindowState &&
                t &&
                "v" !== t.senderType &&
                (!e || !e.cver || (e.cver && e.cver < t.cver)) &&
                (this.displayMessage(t), (this.isVisible = !0));
            },
            chatWindowState: function (t) {
              "max" === t && this.clearMessages();
            },
            isVisible: function (t) {
              this.$eventBus.$emit("mpIsVisible", t);
            },
            incomingCall: function (t) {
              "min" === this.chatWindowState &&
                (this.isVisible = !!t || 0 !== this.messages.length);
            },
          },
          methods: g(
            g(
              {},
              Object(a.b)({
                toggleWidget: "session/toggleWidget",
                routerPush: "router/routerPush",
              })
            ),
            {},
            {
              imageLoaded: function () {
                this.recalculateHeight();
              },
              maximizeWidget: function () {
                (this.isVisible = !1),
                  this.toggleWidget(),
                  this.clearMessages(),
                  this.isPrechatEnabled && !this.prechatFormSubmitted
                    ? this.routerPush("prechat")
                    : this.routerPush("chat");
              },
              clearMessages: function () {
                (this.isVisible = !1), (this.messages = []);
              },
              displayMessage: function (t) {
                if ("v" !== t.ut && !t.callId) {
                  if (t.profileImg)
                    t.profileImage = ""
                      .concat("https://tawk.link", "/")
                      .concat(t.profileImg);
                  else if (t.data && t.data.rsc) {
                    var e = this.agentProfile(t.data.rsc);
                    if (!e) return;
                    t.profileImage = e.profileImage;
                  }
                  if (
                    (t.message
                      ? "s" === t.senderType
                        ? (t.snippet = this.limitMessageLength(t.message, 500))
                        : (t.snippet = this.limitMessageLength(t.message, 150))
                      : (t.snippet = ""),
                    (t.showProfile = !0),
                    3 === this.messages.length &&
                      (this.isBottom
                        ? this.messages.splice(0, 1)
                        : this.messages.splice(-1, 1))[0].showProfile &&
                      this.messages.length > 0 &&
                      (this.isBottom
                        ? (this.messages[0].showProfile = !0)
                        : (this.messages[this.messages.length - 1].showProfile =
                            !0)),
                    this.messages.length > 0)
                  )
                    this.messages[this.messages.length - 1].ownerId ===
                      t.ownerId && (t.showProfile = !1);
                  this.isBottom
                    ? this.messages.push(t)
                    : this.messages.unshift(t),
                    this.recalculateHeight();
                }
              },
              recalculateHeight: function () {
                var t = this;
                this.$nextTick(function () {
                  t.height =
                    t.$refs["tawk-message-preview-content"].clientHeight + 10;
                  var e =
                    window.innerHeight -
                    t.previewYOffset -
                    t.$refs["tawk-chatinput-container"].clientHeight -
                    45;
                  (t.$refs["tawk-chat-message-container"].style["max-height"] =
                    "".concat(e * t.zoomRatio, "px")),
                    (t.$refs[
                      "tawk-chat-message-container"
                    ].scrollTop = 999999999),
                    t.scaleContent();
                });
              },
              limitMessageLength: function (t, e) {
                var i = 0;
                if (t.length > e)
                  for (i = 0; i < e; )
                    if (
                      '<img class="emojione"' === t.substring(i, i + 21) ||
                      '<a target="_blank"' === t.substring(i, i + 18)
                    ) {
                      for (var s = i; s < t.length; s++)
                        if ((i++, e++, ">" === t.substring(s, s + 1))) {
                          e -= 1;
                          break;
                        }
                    } else i++;
                return t.substring(0, e) + (t.length > e ? "[...]" : "");
              },
              emojiOpened: function (t) {
                t
                  ? this.$refs["tawk-message-preview-content"].clientHeight <
                      this.textAreaHeight + 310 &&
                    (this.height = this.textAreaHeight + 310)
                  : this.recalculateHeight();
              },
              textareaResized: function (t) {
                this.$refs &&
                  this.$refs["tawk-message-preview-content"] &&
                  (t >= 0
                    ? ((this.textAreaHeight = t),
                      (this.height =
                        this.$refs["tawk-message-preview-content"]
                          .clientHeight +
                        10 +
                        t))
                    : this.recalculateHeight());
              },
              messageTyping: function (t) {
                this.$TawkChatManager.sendMessagePreview(t);
              },
              sendMessage: function (t) {
                var e = t.message,
                  i = t.attachments;
                this.maximizeWidget(),
                  this.$TawkChatManager.sendMessage({
                    message: e,
                    attachments: i,
                  }),
                  this.clearMessages();
              },
              ratingClicked: function (t) {
                this.maximizeWidget(),
                  this.$TawkChatManager.changeRating(t),
                  this.clearMessages();
              },
              filesAdded: function () {
                this.height =
                  this.$refs["tawk-message-preview-content"].clientHeight +
                  10 +
                  66;
              },
              filesRemoved: function () {
                this.recalculateHeight();
              },
              sendFiles: function (t) {
                this.$TawkChatManager.uploadFiles(t),
                  this.clearMessages(),
                  this.maximizeWidget();
              },
              dragover: function (t) {
                this.isLiveChatFeatureEnabled &&
                  this.features.upload &&
                  (t.preventDefault(),
                  (this.isDraggedOver = !0),
                  this.recalculateHeight());
              },
              dragleave: function (t) {
                this.isLiveChatFeatureEnabled &&
                  this.features.upload &&
                  (t.preventDefault(),
                  t.currentTarget.contains(t.relatedTarget) ||
                    ((this.isDraggedOver = !1), this.recalculateHeight()));
              },
              drop: function (t) {
                this.isLiveChatFeatureEnabled &&
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
              dismissPreview: function (t, e) {
                if ((t && t.stopPropagation(), this.messages.length)) {
                  if (!e) {
                    var i = this.messages[this.messages.length - 1];
                    if (!i || !i.timeStamp) return;
                    this.$socket.publish(
                      "visitorChatDismiss",
                      { timestamp: i.timeStamp },
                      function () {}
                    );
                  }
                  this.clearMessages();
                }
              },
              scaleContent: function () {
                if (this.mobileBrowserName) {
                  var t,
                    e = this.isRight ? "right" : "left";
                  if (
                    ((t = this.isBottom ? "bottom" : "top"),
                    !this.$TawkWindow.isMobileOptimizedWebsite)
                  ) {
                    var i = "scale(".concat(this.zoomRatio, ")"),
                      s = "-moz-transform: "
                        .concat(i, ";\n\t\t\t\t\t\t\t-webkit-transform: ")
                        .concat(i, ";\n\t\t\t\t\t\t\t-o-transform: ")
                        .concat(i, ";\n\t\t\t\t\t\t\t-ms-transform: ")
                        .concat(i, ";\n\t\t\t\t\t\t\ttransform: ")
                        .concat(i, ";"),
                      a = "-moz-transform-origin: "
                        .concat(t, " ")
                        .concat(
                          e,
                          ";\n\t\t\t\t\t\t\t\t-webkit-transform-origin: "
                        )
                        .concat(t, "  ")
                        .concat(e, ";\n\t\t\t\t\t\t\t\t-o-transform-orgin: ")
                        .concat(t, "  ")
                        .concat(e, ";\n\t\t\t\t\t\t\t\t-ms-transform-origin: ")
                        .concat(t, "  ")
                        .concat(e, ";\n\t\t\t\t\t\t\t\ttransform-origin: ")
                        .concat(t, "  ")
                        .concat(e);
                    this.$refs["tawk-message-preview-content"].style.cssText +=
                      s + a;
                    var r = parseInt(this.frameWidth.replace("px", ""), 10);
                    r && (r /= this.zoomRatio),
                      (this.$refs["tawk-message-preview"].style.width =
                        "".concat(r, "px"));
                  }
                }
              },
              loaded: function () {
                var t,
                  e = this;
                (t = this.$refs["tawk-message-preview"]
                  ? parseFloat(
                      getComputedStyle(this.$refs["tawk-message-preview"])
                        .fontSize
                    )
                  : 16),
                  (this.textAreaHeight = t + 2),
                  this.$eventBus.$on("resetState", function () {
                    e.clearMessages();
                  });
              },
              paste: function (t) {
                var e,
                  i = (t.originalEvent || t).clipboardData;
                i &&
                  (((e = i.files).length && !this.features.upload) ||
                    (e &&
                      e.length &&
                      ((this.$refs["tawk-chatinput"].$refs.fileupload.files =
                        e),
                      this.$refs["tawk-chatinput"].onFileUpload())));
              },
              submitSurvey: function (t) {
                this.$TawkChatManager.sendMessage({ message: t });
              },
              parseMarkdown: function (t) {
                try {
                  var e,
                    i = this.$TawkWindow.makeHtml(t);
                  return (
                    ((i = i.replace(h.a.regLineBreaks, h.a.br)) instanceof
                      Error ||
                      void 0 === i) &&
                      this.$TawkLogger.reportError({
                        error: i,
                        source: {
                          name: "components/message-preview/base.vue",
                          method: "parseMarkdown()",
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
                    i
                  );
                } catch (e) {
                  var s;
                  return (
                    this.$TawkLogger.reportError({
                      error: e,
                      source: {
                        name: "components/message-preview/base.vue",
                        method: "parseMarkdown()",
                      },
                      data: {
                        propertyId: this.propertyId,
                        widgetId: this.widgetId,
                        os: this.os,
                        userAgent:
                          null === (s = navigator) || void 0 === s
                            ? void 0
                            : s.userAgent,
                      },
                    }),
                    t
                  );
                }
              },
              handleMouseOver: function () {
                (this.isCloseVisible && !this.mobileBrowserName) ||
                  (this.isCloseVisible = !0);
              },
              handleMouseLeave: function () {
                (this.isCloseVisible || this.mobileBrowserName) &&
                  (this.isCloseVisible = !1);
              },
            }
          ),
          mounted: function () {
            var t = this;
            window.addEventListener("resize", this.recalculateHeight),
              this.$eventBus.$on("dismissPreview", function (e) {
                e.ts && t.dismissPreview(null, !0);
              }),
              this.$eventBus.$on("switchWidget", function () {
                t.key = r.Helper.generateUUID();
              }),
              this.mobileBrowserName && (this.isCloseVisible = !0);
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.recalculateHeight),
              this.$eventBus.$off("dismissPreview");
          },
        },
        f = i("2877"),
        u = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "i-frame",
              {
                key: t.key,
                attrs: {
                  width: t.frameWidth,
                  height: t.frameHeight,
                  cssLink: t.cssLink,
                  styleObject: t.styleObject,
                },
              },
              [
                e(
                  "div",
                  {
                    staticClass: "tawk-flex",
                    staticStyle: { width: "100%", height: "100%" },
                    style: {
                      "justify-content": "".concat(
                        t.isRight ? "flex-end" : "flex-start"
                      ),
                    },
                  },
                  [
                    e(
                      "div",
                      {
                        ref: "tawk-message-preview",
                        staticClass:
                          "tawk-flex tawk-message-preview tawk-fadeIn tawk-padding-small",
                        class: [
                          t.isBottom ? "tawk-flex-bottom" : "tawk-flex-top",
                        ],
                        style: {
                          width: "".concat(t.width, "px"),
                          "justify-content": "".concat(
                            t.isRight ? "flex-end" : "flex-start"
                          ),
                          "box-sizing": "border-box",
                        },
                        attrs: { id: "tawk-message-preview" },
                        on: {
                          mouseover: t.handleMouseOver,
                          mouseleave: t.handleMouseLeave,
                          dragover: t.dragover,
                          dragleave: t.dragleave,
                          drop: t.drop,
                          paste: t.paste,
                        },
                      },
                      [
                        e(
                          "div",
                          {
                            ref: "tawk-message-preview-content",
                            staticClass: "tawk-message-preview-content",
                            attrs: { id: "tawk-message-preview-content" },
                          },
                          [
                            t.isCloseVisible
                              ? [
                                  t.isLiveChatFeatureEnabled &&
                                  !t.isSurveyOptionOnly
                                    ? e(
                                        "tawk-card",
                                        {
                                          directives: [
                                            {
                                              name: "tawk-tooltip",
                                              rawName: "v-tawk-tooltip",
                                            },
                                          ],
                                          staticClass:
                                            "tawk-message-preview-close tawk-box-shadow-xsmall",
                                          attrs: {
                                            id: "tawk-mpreview-close",
                                            role: "button",
                                            tabindex: "0",
                                            "data-text": "".concat(
                                              t.$i18n(
                                                "bubble",
                                                "attention_grabber"
                                              )
                                            ),
                                            "aria-label": "".concat(
                                              t.$i18n(
                                                "bubble",
                                                "attention_grabber"
                                              )
                                            ),
                                          },
                                          on: { click: t.dismissPreview },
                                        },
                                        [
                                          e("tawk-icon", {
                                            attrs: { type: "close" },
                                          }),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                ]
                              : t._e(),
                            t.incomingCall
                              ? e(
                                  "div",
                                  {
                                    staticClass:
                                      "tawk-message-box tawk-call-card tawk-flex tawk-flex-bottom",
                                  },
                                  [
                                    e(
                                      "tawk-card",
                                      {
                                        staticClass:
                                          "tawk-box-shadow-xsmall tawk-message tawk-margin-auto-left tawk-call-card",
                                        attrs: { size: "xsmall" },
                                      },
                                      [
                                        e("call-widget", {
                                          attrs: { fullVersion: !1 },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                            e(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      !t.incomingCall &&
                                      t.isLiveChatFeatureEnabled,
                                    expression:
                                      "!incomingCall &&\n\t\t\t\t\t\t\tisLiveChatFeatureEnabled",
                                  },
                                ],
                              },
                              [
                                e(
                                  "div",
                                  {
                                    ref: "tawk-chat-message-container",
                                    staticClass: "tawk-chat-message-container",
                                    attrs: {
                                      id: "tawk-chat-message-container",
                                      role: "button",
                                      tabindex: "0",
                                    },
                                    on: { click: t.maximizeWidget },
                                  },
                                  [
                                    e(
                                      "transition-group",
                                      { attrs: { name: "list" } },
                                      t._l(t.messages, function (i) {
                                        return e(
                                          "div",
                                          {
                                            key: i.cver,
                                            staticClass:
                                              "tawk-margin-xsmall-bottom",
                                          },
                                          [
                                            i.message.length || i.attchs
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tawk-message-box tawk-flex tawk-flex-bottom",
                                                  },
                                                  [
                                                    i.showProfile
                                                      ? e("tawk-avatar", {
                                                          staticClass:
                                                            "tawk-box-shadow-small",
                                                          attrs: {
                                                            src: i.profileImage,
                                                            alt: "".concat(
                                                              t.$i18n(
                                                                "chat",
                                                                "agent_profile_image"
                                                              )
                                                            ),
                                                            size: "small",
                                                          },
                                                        })
                                                      : t._e(),
                                                    e(
                                                      "tawk-card",
                                                      {
                                                        staticClass:
                                                          "tawk-box-shadow-xsmall tawk-message tawk-margin-auto-left",
                                                        class: [
                                                          i.showProfile
                                                            ? "tawk-has-avatar"
                                                            : "",
                                                        ],
                                                        attrs: {
                                                          size: "small",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tawk-flex tawk-text-regular-2 tawk-text-grey-2 tawk-margin-xsmall-bottom",
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex-auto",
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(i.name) +
                                                                    " "
                                                                ),
                                                              ]
                                                            ),
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex-none tawk-margin-auto-left",
                                                              },
                                                              [
                                                                e(
                                                                  "tawk-timeago",
                                                                  {
                                                                    staticClass:
                                                                      "tawk-text-regular-1 tawk-text-grey-2",
                                                                    attrs: {
                                                                      datetime:
                                                                        i.time,
                                                                      isDuration:
                                                                        t.isDuration,
                                                                      isLive:
                                                                        t.isLive,
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        [
                                                          i.attchs || i.snippet
                                                            ? e(
                                                                "tawk-chat-bubble",
                                                                {
                                                                  staticClass:
                                                                    "tawk-message-preview-chat-bubble",
                                                                  attrs: {
                                                                    attachments:
                                                                      i.attchs,
                                                                  },
                                                                  on: {
                                                                    imageLoaded:
                                                                      t.imageLoaded,
                                                                  },
                                                                },
                                                                [
                                                                  e(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "tawk-text-regular-3",
                                                                      staticStyle:
                                                                        {
                                                                          "font-size":
                                                                            ".875rem",
                                                                        },
                                                                    },
                                                                    [
                                                                      i.snippet
                                                                        ? e(
                                                                            "tawk-emoji",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  emoji:
                                                                                    t.parseMarkdown(
                                                                                      i.snippet
                                                                                    ),
                                                                                  enabled:
                                                                                    t.emojiEnabled,
                                                                                },
                                                                            }
                                                                          )
                                                                        : t._e(),
                                                                    ],
                                                                    1
                                                                  ),
                                                                ]
                                                              )
                                                            : e(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "tawk-margin-xsmall-bottom",
                                                                },
                                                                [
                                                                  e(
                                                                    "tawk-icon",
                                                                    {
                                                                      attrs: {
                                                                        type: "attach-file",
                                                                        size: "small",
                                                                      },
                                                                    }
                                                                  ),
                                                                  t._v(
                                                                    " " +
                                                                      t._s(
                                                                        t.$i18n(
                                                                          "chat",
                                                                          "sent_form"
                                                                        )
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                        ],
                                                      ],
                                                      2
                                                    ),
                                                  ],
                                                  1
                                                )
                                              : t._e(),
                                          ]
                                        );
                                      }),
                                      0
                                    ),
                                    Object.keys(t.getSurveyOptions).length &&
                                    "v" !== t.getSurveyOptions.senderType
                                      ? e(
                                          "div",
                                          [
                                            e("survey-options", {
                                              staticClass:
                                                "tawk-message tawk-margin-top tawk-margin-bottom",
                                              attrs: {
                                                options:
                                                  t.getSurveyOptions.options,
                                              },
                                              on: {
                                                selectSurvey: t.submitSurvey,
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
                                  "transition",
                                  { attrs: { name: "fade-enter" } },
                                  [
                                    e(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              t.showInputField &&
                                              !t.isSurveyOptionOnly,
                                            expression:
                                              "showInputField && !isSurveyOptionOnly",
                                          },
                                        ],
                                      },
                                      [
                                        e(
                                          "tawk-card",
                                          {
                                            ref: "tawk-chatinput-container",
                                            staticClass:
                                              "tawk-chatinput-container tawk-box-shadow-xsmall",
                                            class: [
                                              t.isDraggedOver
                                                ? "has-dragover"
                                                : "",
                                            ],
                                            attrs: {
                                              size: "xsmall",
                                              id: "tawk-chatinput-container",
                                            },
                                          },
                                          [
                                            t.isDraggedOver
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tawk-dragover-container",
                                                    attrs: {
                                                      id: "tawk-dragover-container",
                                                    },
                                                  },
                                                  [
                                                    e("tawk-icon", {
                                                      attrs: {
                                                        type: "attach-file",
                                                        size: "xlarge",
                                                      },
                                                    }),
                                                    e("p", [
                                                      t._v(
                                                        t._s(
                                                          t.$i18n(
                                                            "rollover",
                                                            "uploadFile"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ],
                                                  1
                                                )
                                              : t._e(),
                                            e("tawk-chat-input", {
                                              ref: "tawk-chatinput",
                                              attrs: {
                                                features: t.features,
                                                placeholder: t.inputPlaceholder,
                                              },
                                              on: {
                                                emojiPreview: t.emojiOpened,
                                                textareaResized:
                                                  t.textareaResized,
                                                messageTyping: t.messageTyping,
                                                sendMessage: t.sendMessage,
                                                ratingClicked: t.ratingClicked,
                                                filesAdded: t.filesAdded,
                                                sendFiles: t.sendFiles,
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          2
                        ),
                      ]
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
      e.default = u.exports;
    },
  },
]);
