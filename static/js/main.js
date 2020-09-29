(this["webpackJsonpgfi-staking"] = this["webpackJsonpgfi-staking"] || []).push([
    [0], {
        23: function(e, t, a) {
            e.exports = a(35)
        },
        35: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                r = a(13),
                c = a.n(r),
                s = a(14),
                i = a(5),
                o = a.n(i),
                m = a(6),
                d = a(7),
                u = a(8),
                p = a(9),
                E = a(11),
                g = a(2),
                h = a(10);
            var f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    if (isNaN(Number(e))) return "...";
                    var a = new Intl.NumberFormat,
                        n = Number(e).toFixed(t).split("."),
                        l = Object(h.a)(n, 2),
                        r = l[0],
                        c = l[1];
                    return r = a.format(r), 0 === t ? r : r + "." + c
                },
                b = a(18),
                N = a(21),
                v = a.n(N);

            function w(e) {
                var t = Math.random().toString(36);
                return l.a.createElement("span", null, l.a.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: "".concat(window.config.etherscan_baseURL, "/").concat(e.token ? "token" : "address", "/").concat(e.a)
                }, l.a.createElement("code", null, e.a.slice(0, 8) + "..." + e.a.slice(e.a.length - 8))), "\xa0", l.a.createElement(v.a, {
                    component: "span",
                    onSuccess: function(e) {
                        setTimeout((function() {
                            return b.a.hide()
                        }), 2e3)
                    },
                    "data-event": "click",
                    "data-for": t,
                    "data-tip": "Address Copied To Clipboard!",
                    "data-clipboard-text": e.a
                }, l.a.createElement("span", {
                    title: "Copy address to clipboard",
                    style: {
                        cursor: "pointer"
                    },
                    className: "fas fa-paste"
                })), l.a.createElement(b.a, {
                    id: t,
                    effect: "solid"
                }))
            }
            var x = window,
                y = x.gfi,
                k = x.gfi_staking,
                S = x.BigNumber,
                A = function(e) {
                    Object(E.a)(a, e);
                    var t = Object(p.a)(a);

                    function a(e) {
                        var n;
                        return Object(d.a)(this, a), (n = t.call(this, e)).handleDeposit = function(e) {
                            e.preventDefault();
                            var t = n.state.depositAmount;
                            t = new S(t).times(1e18).toFixed(0), k.depositGFI(t)
                        }, n.handleWithdraw = function(e) {
                            e.preventDefault();
                            var t = n.state.withdrawAmount;
                            t = new S(t).times(1e18).toFixed(0), k.withdraw(t)
                        }, n.handleClaimDivs = function(e) {
                            e.preventDefault(), k.claimDivs()
                        }, n.handleSetMaxDeposit = function(e) {
                            e.preventDefault(), n.setState({
                                depositAmount: new S(n.state.gfi_balance).div(1e18).toFixed(18)
                            })
                        }, n.handleSetMaxWithdraw = function(e) {
                            e.preventDefault(), n.setState({
                                withdrawAmount: new S(n.state.depositedTokens).div(1e18).toFixed(18)
                            })
                        }, n.refreshBalance = Object(m.a)(o.a.mark((function e() {
                            var t, a, l, r, c, s, i, m, d, u, p, E, g, f, b, N, v, w, x, A, T, D, C, _;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, window.getCoinbase();
                                    case 2:
                                        return t = e.sent, n.setState({
                                            coinbase: t
                                        }), e.prev = 4, a = y.balanceOf(t), l = k.getPendingDivs(t), r = k.cliffTime(), c = k.totalEarnedTokens(t), s = k.stakingTime(t), i = k.depositedTokens(t), m = k.lastClaimedTime(t), d = k.getNumberOfHolders(), u = k.getStakingAndDaoAmount(), p = y.balanceOf(window.config.gfi_staking_address), e.next = 17, Promise.all([a, l, r, c, s, i, m, d, u, p]);
                                    case 17:
                                        E = e.sent, g = Object(h.a)(E, 10), f = g[0], b = g[1], N = g[2], v = g[3], w = g[4], x = g[5], A = g[6], T = g[7], D = g[8], C = g[9], _ = new S(C).minus(D).toString(10), n.setState({
                                            gfi_balance: f,
                                            pendingDivs: b,
                                            cliffTime: N,
                                            totalEarnedTokens: v,
                                            stakingTime: w,
                                            depositedTokens: x,
                                            lastClaimedTime: A,
                                            stakers: T,
                                            totalStaked: _
                                        }), e.next = 36;
                                        break;
                                    case 33:
                                        e.prev = 33, e.t0 = e.catch(4), console.error(e.t0);
                                    case 36:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 33]
                            ])
                        }))), n.state = {
                            gfi_balance: "",
                            pendingDivs: "",
                            totalEarnedTokens: "",
                            cliffTime: "",
                            stakingTime: "",
                            depositedTokens: "",
                            lastClaimedTime: "",
                            depositAmount: "",
                            withdrawAmount: "",
                            coinbase: ""
                        }, n
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.refreshBalance(), window.gfi_refreshBalInterval = setInterval(this.refreshBalance, 3e3)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(window.gfi_refreshBalInterval)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.gfi_balance,
                                n = t.pendingDivs,
                                r = t.totalEarnedTokens,
                                c = t.depositedTokens,
                                s = t.cliffTime,
                                i = t.stakingTime,
                                o = t.coinbase,
                                m = t.stakers,
                                d = t.totalStaked;
                            a = new S(a).div(1e18).toString(10), a = f(a, 6), n = new S(n).div(1e18).toString(10), n = f(n, 6), r = new S(r).div(1e18).toString(10), r = f(r, 6), c = new S(c).div(1e18).toString(10), c = f(c, 6), d = new S(d).div(1e18).toString(10), d = f(d, 6), m = new S(m).toString(10), m = f(m, 0), s *= 1e3, i *= 1e3;
                            var u = !0;
                            return isNaN(s) || isNaN(i) || Date.now() - i <= s && (u = !1), l.a.createElement("div", {
                                className: "gfi-staking mb-5 mt-5"
                            }, l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "col-md-6 mb-5"
                            }, l.a.createElement("p", {
                                className: "tips text-center"
                            }, "Galactic Finance Pool 1 - minting 2100 GFI this week"), l.a.createElement("form", {
                                onSubmit: this.handleDeposit
                            }, l.a.createElement("div", {
                                className: "form-row"
                            }, l.a.createElement("div", {
                                className: "col"
                            }, l.a.createElement("button", {
                                className: "btn btn-block btn-lg btn-warning orange",
                                type: "submit"
                            }, "STAKE")), l.a.createElement("div", {
                                className: "col"
                            }, l.a.createElement("div", {
                                className: "input-group input-group-lg"
                            }, l.a.createElement("input", {
                                value: this.state.depositAmount,
                                onChange: function(t) {
                                    return e.setState({
                                        depositAmount: t.target.value
                                    })
                                },
                                className: "form-control",
                                placeholder: "0",
                                type: "text"
                            }), l.a.createElement("div", {
                                className: "input-group-append"
                            }, l.a.createElement("button", {
                                className: "btn btn-warning orange",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: this.handleSetMaxDeposit
                            }, "MAX"))))), l.a.createElement("p", {
                                className: "mt-1 text-center"
                            }, )), l.a.createElement("form", {
                                onSubmit: this.handleWithdraw
                            }, l.a.createElement("div", {
                                className: "form-row"
                            }, l.a.createElement("div", {
                                className: "col"
                            }, l.a.createElement("button", {
                                title: u ? "" : "You recently staked, please wait before unstaking.",
                                disabled: !u,
                                className: "btn btn-lg btn-primary btn-block",
                                type: "submit"
                            }, "UNSTAKE")), l.a.createElement("div", {
                                className: "col"
                            }, l.a.createElement("div", {
                                className: "input-group input-group-lg"
                            }, l.a.createElement("input", {
                                value: this.state.withdrawAmount,
                                onChange: function(t) {
                                    return e.setState({
                                        withdrawAmount: t.target.value
                                    })
                                },
                                className: "form-control",
                                placeholder: "0",
                                type: "text"
                            }), l.a.createElement("div", {
                                className: "input-group-append"
                            }, l.a.createElement("button", {
                                className: "btn btn-warning orange",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: this.handleSetMaxWithdraw
                            }, "MAX"))))), l.a.createElement("p", {
                                className: "mt-1 text-center"
                            }, l.a.createElement("i", {
                                className: "orange-text"
                            }, ))), l.a.createElement("form", {
                                onSubmit: this.handleClaimDivs
                            }, l.a.createElement("div", {
                                className: "form-row"
                            }, l.a.createElement("div", {
                                className: "col"
                            }, l.a.createElement("button", {
                                className: "btn btn-primary btn-block btn-lg",
                                type: "submit"
                            }, "CLAIM")), l.a.createElement("div", {
                                className: "col"
                            }, l.a.createElement("p", {
                                className: "form-control form-control-lg text-right",
                                style: {
                                    border: "none",
                                    paddingLeft: 0,
                                    background: "transparent"
                                }
                            }, l.a.createElement("strong", {
                                style: {
                                    fontSize: "1.2rem"
                                }
                            }, n), " ", l.a.createElement("strong", {
                                className: "orange-text"
                            }, "GFI"))))), l.a.createElement("div", {
                                className: "tips mt-5"
                            }, l.a.createElement("p", {
                                className: "text-center"
                            }, "Tips regarding your transactions:"), l.a.createElement("ol", null, l.a.createElement("li", null, 'For a quicker transaction time, edit your transaction fee and choose the "Fast" option.'), l.a.createElement("br", null), l.a.createElement("li", null, "If you want to manually cancel a transaction just go in your Metamask Settings / Advanced and Enable Nonce. Then create a new transaction, select a Fast Fee, click Next, and in the next window add the nonce of the transaction you want to cancel which you will find in etherscan details of the transaction.")))), l.a.createElement("div", {
                                className: "col-md-1"
                            }), l.a.createElement("div", {
                                className: "col-md-5"
                            }, l.a.createElement("div", {
                                className: "table-responsive"
                            }, l.a.createElement("table", {
                                className: "table table-borderless table-sm"
                            }, l.a.createElement("tbody", null, l.a.createElement("tr", null, l.a.createElement("th", {
                                className: "tips text-normal"
                            }, "Wallet"), l.a.createElement("td", {
                                style: {
                                    fontSize: ".8rem"
                                },
                                className: "text-right"
                            }, l.a.createElement(w, {
                                a: o
                            }))), l.a.createElement("tr", null, l.a.createElement("th", {
                                className: "tips text-normal"
                            }, "Contract"), l.a.createElement("td", {
                                style: {
                                    fontSize: ".8rem"
                                },
                                className: "text-right"
                            }, l.a.createElement(w, {
                                a: window.config.gfi_staking_address
                            }))), l.a.createElement("tr", null, l.a.createElement("th", null, "My Balance"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, a), " ", l.a.createElement("strong", {
                                className: "orange-text"
                            }, "GFI"))), l.a.createElement("tr", null, l.a.createElement("th", null, "Staked"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, c), " ", l.a.createElement("strong", {
                                className: "orange-text"
                            }, "GFI"))), l.a.createElement("tr", null, l.a.createElement("th", null, "Total Earned"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, r), " ", l.a.createElement("strong", {
                                className: "orange-text"
                            }, "GFI"))), l.a.createElement("tr", null, l.a.createElement("th", null, "Pending"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, n), " ", l.a.createElement("strong", {
                                className: "orange-text"
                            }, "GFI"))), l.a.createElement("tr", null, l.a.createElement("td", {
                                style: {
                                    fontSize: ".8rem"
                                },
                                colSpan: "2",
                                className: "text-right"
                            }, l.a.createElement("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "".concat(window.config.etherscan_baseURL, "/token/").concat(window.config.gfi_address, "?a=").concat(o)
                            }, "View Transaction History on Etherscan"), " \xa0 ", l.a.createElement("i", {
                                style: {
                                    fontSize: ".8rem"
                                },
                                className: "fas fa-external-link-alt"
                            }))), l.a.createElement("tr", {
                                className: "tips text-normal"
                            }, l.a.createElement("th", null, "Total Supply"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, "42,000"), " ", l.a.createElement("strong", null, "GFI"))), l.a.createElement("tr", {
                                className: "tips text-normal"
                            }, l.a.createElement("th", null, "Total Staked"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, d), " ", l.a.createElement("strong", null, "GFI"))), l.a.createElement("tr", {
                                className: "tips text-normal"
                            }, l.a.createElement("th", null, "Total Stakers"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, m), " ")), l.a.createElement("tr", {
                                className: "tips text-normal"
                            }, l.a.createElement("th", null, "Circulating Supply"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", null, window.config.circulating_supply), " ", l.a.createElement("strong", null, "GFI")))))), l.a.createElement("div", null, l.a.createElement("div", {
                                style: {
                                    border: "5px solid rgb(28,55,86)"
                                },
                                className: "price-widget",
                                dangerouslySetInnerHTML: {
                                    __html: '<coingecko-coin-price-chart-widget currency="usd" coin-id="gfi-finance" locale="en" height="300"></coingecko-coin-price-chart-widget>'
                                }
                            })))))
                        }
                    }]), a
                }(l.a.Component),
                T = (window.BigNumber, function() {
                    return l.a.createElement("footer", {
                        className: "text-right purple-bg pt-2 pb-2 pr-2"
                    }, l.a.createElement("img", {
                        height: "30",
                        src: "./images/logo-white-text.png"
                    }))
                }),
                D = function() {
                    return l.a.createElement("div", {
                        style: {
                            background: "#fff"
                        }
                    }, l.a.createElement("div", {
                        className: "container mr-0 ml-0",
                        style: {
                            maxWidth: "100%"
                        }
                    }, l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "col-md-7 mt-4 mb-4 logo-column"
                    }, l.a.createElement("img", {
                        style: {
                            position: "relative",
                            top: "20px",
                            maxWidth: "90%",
                            objectFit: "contain"
                        },
                        src: "./images/logo-main.jpg",
                        height: "105"
                    })), l.a.createElement("div", {
                        className: "col-md-5 pr-0 pl-0"
                    }, l.a.createElement("div", {
                        className: "apr-info",
                        style: {
                            maxWidth: "300px",
                            float: "right"
                        }
                    }, l.a.createElement("div", {
                        style: {
                            textAlign: "right"
                        }
                    }, l.a.createElement("a", {
                        href: "https://galactic.finance",
                        className: "btn btn-block btn-primary btn-lg pr-5 pl-5 orange-text"
                    }, "Return to Main Page")), l.a.createElement("div", {
                        className: "mt-4 mb-4 apr-info-child",
                        style: {
                            maxWidth: "150px"
                        }
                    }))))))
                },
                C = function(e) {
                    Object(E.a)(a, e);
                    var t = Object(p.a)(a);

                    function a(e) {
                        var n;
                        return Object(d.a)(this, a), (n = t.call(this, e)).handleConnection = Object(m.a)(o.a.mark((function e() {
                            var t;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, window.connectWallet();
                                    case 3:
                                        return t = e.sent, e.t0 = n, e.t1 = t, e.next = 8, window.web3.eth.getCoinbase();
                                    case 8:
                                        e.t2 = e.sent, e.t3 = {
                                            is_wallet_connected: e.t1,
                                            coinbase: e.t2
                                        }, e.t0.setState.call(e.t0, e.t3), e.next = 16;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t4 = e.catch(0), window.alertify.error(String(e.t4));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 13]
                            ])
                        }))), n.state = {
                            is_unlocked: !1
                        }, n
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.is_wallet_connected ? l.a.createElement("div", {
                                className: "App"
                            }, l.a.createElement(D, null), l.a.createElement("div", {
                                className: "container"
                            }, l.a.createElement(g.a, {
                                exact: !0,
                                to: "/",
                                render: function(e) {
                                    return l.a.createElement(A, e)
                                }
                            })), l.a.createElement(T, null)) : l.a.createElement("div", {
                                className: "App"
                            }, l.a.createElement(D, null), l.a.createElement("div", {
                                className: "container text-center vh-100"
                            }, l.a.createElement("div", {
                                className: "mt-5"
                            }, l.a.createElement("h3", {
                                className: "mb-4"
                            }, "Please connect MetaMask to access the pool."), l.a.createElement("p", null, "This site is still a beta version, please use it at your own risk."), l.a.createElement("button", {
                                onClick: this.handleConnection,
                                className: "btn btn-primary btn-lg pr-5 pl-5 orange-text"
                            }, "CONNECT WALLET"))), l.a.createElement(T, null))
                        }
                    }]), a
                }(l.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(s.a, null, l.a.createElement(C, null))), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [23, 1, 2]
    ]
]);
