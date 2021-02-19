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
            // Edit Here
            p = [{
                title: "常用",
                items: ["(´ρ`)"]
            }, {
                title: "哈 ∀",
                items: ["(・∀・)", "(ゝ∀･)", "(ﾟ∀ﾟ)", "(*ﾟ∀ﾟ*)", "(*´∀`)", "(´∀`)", "(〃∀〃)", "(*ﾟ∇ﾟ)", "(ノﾟ∀ﾟ)ノ", "(＾o＾)ﾉ"]
            }, {
                title: "蛤 σ",
                items: ["σ`∀´)", "ﾟ∀ﾟ)σ", "(σﾟ∀ﾟ)σ", "(ﾟ∀。)", "ᕕ( ᐛ )ᕗ", "(`ヮ´)", "(`・´)"]
            }, {
                title: "呵 ^",
                items: ["(^ω^)", "( ^ω^)"]
            }, {
                title: "惊 дﾟ",
                items: ["(ﾟдﾟ)", "(´ﾟДﾟ`)", "(|||ﾟдﾟ)", "Σ(ﾟдﾟ)", "(((ﾟдﾟ)))", "(ﾟДﾟ≡ﾟДﾟ)", "(д)ﾟﾟ", "(☉д⊙)", "(;ﾟдﾟ)", "(σﾟдﾟ)σ", "(╬ﾟдﾟ)", "ﾟÅﾟ)"]
            }, {                
                title: "怒 д´",
                items: ["(`д´)", "(>д<)"]
            }, {
                title: "悲 д",
                items: ["(´д`)", "(*´д`)", "(;´Д`)", "(つд⊂)", "(TдT)", "(-д-)", "ﾟ(つд`ﾟ)", "･ﾟ(ﾉд`ﾟ)"]
            }, {
                title: "無 _",
                items: ["(・_ゝ・)", "(´_ゝ`)", "(´_っ`)", "(`_っ´)", "(´ー`)", "(`ー´)", "(*ﾟーﾟ)", "(・ー・)",  "¯\\_(ツ)_/¯",]
            }, {
                title: "躲 |",
                items: ["|∀ﾟ", "|∀`)", "|д`)", "|дﾟ)", "|ω・´)", "|ー`)", "|-`)"]
            }, {
                title: "唔 ω",
                items: ["(ﾟωﾟ)", "(oﾟωﾟo)", "(*´ω`*)", "(=ﾟωﾟ)=", "ヾ(´ωﾟ｀)", "(・ω・)", "(｀･ω･)", "(`・ω・´)", "(´・ω・`)", "(´・ω)", "(｀・ω)", "（<ゝω・）☆"]
            }, {
                title: "拳 ⊂彡",
                items: ["⊂彡☆))д´)", "⊂彡☆))д`)", "⊂彡☆))∀`)", "(´∀((☆ミつ"]
            }, {
                title: "亲 ε",
                items: ["(ﾟ3ﾟ)", "(`ε´)", "ヾ(´ε`ヾ)", "(`ε´(つ*⊂)"]
            }, {
                title: "其他",
                items: ["(´ρ`)", "┃電柱┃"]
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
