(this["webpackJsonpemoticons-picker"] = this["webpackJsonpemoticons-picker"] || []).push([
    [0],
    [, , , , , , , function (t, e, n) {
        t.exports = n(17)
    }, , , , , function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {
        "use strict";
        n.r(e);
        var a = n(0),
            i = n.n(a),
            o = n(4),
            s = n.n(o),
            r = (n(12), n(1)),
            c = n(2),
            l = n(6),
            u = n(5);
        n(13), n(14);
        var m = function (t) {
            var e = t.title,
                n = t.children;
            return i.a.createElement("section", {
                className: "group"
            }, i.a.createElement("h5", {
                className: "group__title"
            }, e), i.a.createElement("div", {
                className: "group__container"
            }, n))
        };
        n(15);
        var h = function (t) {
            var e = t.value,
                n = t.onClick;
            return i.a.createElement("button", {
                title: "\u70b9\u51fb\u590d\u5236",
                className: "emoticon",
                name: e,
                onClick: n
            }, e)
        };
        n(16);
        var d = function (t) {
                var e = t.isShow,
                    n = t.content;
                return i.a.createElement("div", {
                    className: e ? "g-toast g-toast--show" : "g-toast"
                }, i.a.createElement("span", {
                    className: "g-toast__content"
                }, n))
            },
            // Edit Here, Unicode to Chinese
            p = [{
                title: "\u5e38\u7528",
                items: ["(\uff9f\u2200\u3002)"]
            }, {
                title: "\u8eb2",
                items: ["|\u2200\uff9f", "|\u2200`)", "|\u0434`)", "|\u0434\uff9f)", "|\u03c9\u30fb\xb4)", "|\u30fc`)", "|-`)"]
            }, {
                title: "\u62f3",
                items: ["\u2282\u5f61\u2606))\u0434\xb4)", "\u2282\u5f61\u2606))\u0434`)", "\u2282\u5f61\u2606))\u2200`)", "(\xb4\u2200((\u2606\u30df\u3064"]
            }, {
                title: "\u2200",
                items: ["\uff9f\u2200\uff9f)\u03c3", "(\u03c3\uff9f\u2200\uff9f)\u03c3", "\u03c3`\u2200\xb4)", "(\uff9f\u2200\u3002)", "(*\uff9f\u2200\uff9f*)", "(\uff9f\u2200\uff9f)", "(\u30ce\uff9f\u2200\uff9f)\u30ce", "(*\xb4\u2200`)", "(\xb4\u2200`)", "(\u309d\u2200\uff65)", "(\u30fb\u2200\u30fb)", "(\uff61\u25d5\u2200\u25d5\uff61)", "(\u3003\u2200\u3003)"]
            }, {
                title: "\u0434",
                items: ["(\uff9f\u0434\uff9f)", "(\xb4\uff9f\u0414\uff9f`)", "(|||\uff9f\u0434\uff9f)", "\u03a3(\uff9f\u0434\uff9f)", "(((\uff9f\u0434\uff9f)))", "(\uff9f\u0414\uff9f\u2261\uff9f\u0414\uff9f)", "(\u0434)\uff9f\uff9f", "(\u2609\u0434\u2299)", "(;\uff9f\u0434\uff9f)", "(\u03c3\uff9f\u0434\uff9f)\u03c3", "(\u256c\uff9f\u0434\uff9f)", "(`\u0434\xb4)", "(\u3064\u0434\u2282)", "(>\u0434<)", "(T\u0434T)", "(-\u0434-)", "(\xb4\u0434`)", "(*\xb4\u0434`)", "(;\xb4\u0414`)", "\uff65\uff9f(\uff89\u0434`\uff9f)", "\uff9f(\u3064\u0434`\uff9f)", "\uff9f\u212b\uff9f)"]
            }, {
                title: "\u03c9",
                items: ["(=\uff9f\u03c9\uff9f)=", "(\uff9f\u03c9\uff9f)", "(o\uff9f\u03c9\uff9fo)", "(*\xb4\u03c9`*)", "\u30fe(\xb4\u03c9\uff9f\uff40)", "(^\u03c9^)", "( ^\u03c9^)", "(\u30fb\u03c9\u30fb)", "(\uff40\uff65\u03c9\uff65)", "(`\u30fb\u03c9\u30fb\xb4)", "(\xb4\u30fb\u03c9\u30fb`)", "(\xb4\u30fb\u03c9)", "(\uff40\u30fb\u03c9)", "\uff08<\u309d\u03c9\u30fb\uff09\u2606"]
            }, {
                title: "\u30fc",
                items: ["(\u30fb_\u309d\u30fb)", "(\xb4_\u309d`)", "(\xb4_\u3063`)", "(`_\u3063\xb4)", "(\xb4\u30fc`)", "(`\u30fc\xb4)", "(*\uff9f\u30fc\uff9f)", "(\u30fb\u30fc\u30fb)",  "\u00af\\_(\u30c4)_/\u00af",]
            }, {
                title: "\u03b5",
                items: ["(\uff9f3\uff9f)", "(`\u03b5\xb4)", "\u30fe(\xb4\u03b5`\u30fe)", "(`\u03b5\xb4(\u3064*\u2282)"]
            }, {
                title: "\u5176\u4ed6",
                items: ["\u2503\u96fb\u67f1\u2503", "(\uff3eo\uff3e)\uff89", "(`\u30ee\xb4)", "(\xb4\u03c1`)", "(`\u30fb\xb4)", "(*\uff9f\u2207\uff9f)"]
            }],
            v = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {};
                    Object(r.a)(this, t);
                    var n = document.createElement("span"),
                        a = document.createElement("div");
                    a.style.height = "1px", a.style.overflow = "hidden", a.style.opacity = "0", a.style.position = "fixed", a.style.left = "0", a.style.top = "-800px", a.appendChild(n), document.body.appendChild(a), this.span = n, this.onCopyEnd = e
                }
                return Object(c.a)(t, [{
                    key: "copy",
                    value: function (t) {
                        var e = this.span;
                        e.textContent = t;
                        var n = document.createRange();
                        n.selectNode(e), window.getSelection().removeAllRanges(), window.getSelection().addRange(n), document.execCommand("copy"), this.onCopyEnd(t)
                    }
                }]), t
            }(),
            f = function () {
                function t() {
                    Object(r.a)(this, t), this.keyName = "emoticon-history";
                    var e = localStorage.getItem(this.keyName);
                    this.data = e ? JSON.parse(e) : {}
                }
                return Object(c.a)(t, [{
                    key: "record",
                    value: function (t) {
                        this.data[t] ? (this.data[t] += 1, this._setStorage()) : (this.data[t] = 1, this._setStorage())
                    }
                }, {
                    key: "_setStorage",
                    value: function () {
                        var t = JSON.stringify(this.data);
                        localStorage.setItem(this.keyName, t)
                    }
                }, {
                    key: "getFrequetlyUsedItems",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
                        return Object.entries(this.data).sort((function (t, e) {
                            return e[1] - t[1]
                        })).map((function (t) {
                            return t[0]
                        })).slice(0, t)
                    }
                }]), t
            }(),
            y = function (t) {
                Object(l.a)(n, t);
                var e = Object(u.a)(n);

                function n(t) {
                    var a;
                    Object(r.a)(this, n), (a = e.call(this, t)).handlePickEmoticon = function (t) {
                        var e = t.target.getAttribute("name");
                        a.duplicator.copy(e), a.emoticonHistory.record(e), a.showToast()
                    }, a.duplicator = new v, a.emoticonHistory = new f;
                    var i = a.emoticonHistory.getFrequetlyUsedItems();
                    return p[0].items = i, a.state = {
                        emoticons: p,
                        isShowToast: !1
                    }, a
                }
                return Object(c.a)(n, [{
                    key: "render",
                    value: function () {
                        var t = this;
                        return i.a.createElement("div", {
                            className: "app"
                        }, i.a.createElement(d, {
                            isShow: this.state.isShowToast,
                            content: "\u590d\u5236\u6210\u529f"
                        }), i.a.createElement("header", {
                            className: "App__header"
                        }), this.state.emoticons.map((function (e) {
                            return t.renderGroup(e.title, e.items)
                        })))
                    }
                }, {
                    key: "renderGroup",
                    value: function (t, e) {
                        var n = this;
                        return i.a.createElement(m, {
                            title: t,
                            key: t
                        }, e.map((function (t) {
                            return i.a.createElement(h, {
                                value: t,
                                key: t,
                                onClick: n.handlePickEmoticon
                            })
                        })))
                    }
                }, {
                    key: "showToast",
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1800;
                        this.setState({
                            isShowToast: !0
                        }), clearTimeout(this.toastTimer), this.toastTimer = setTimeout((function () {
                            t.setState({
                                isShowToast: !1
                            })
                        }), e)
                    }
                }]), n
            }(a.Component);
        s.a.render(i.a.createElement(y, null), document.getElementById("root"))
    }],
    [
        [7, 1, 2]
    ]
]);
