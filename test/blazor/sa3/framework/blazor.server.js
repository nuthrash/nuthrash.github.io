!function (e) {
	var t = {};
	function n(r) {
		if (t[r])
			return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n),
		o.l = !0,
		o.exports
	}
	n.m = e,
	n.c = t,
	n.d = function (e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	},
	n.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	},
	n.t = function (e, t) {
		if (1 & t && (e = n(e)), 8 & t)
			return e;
		if (4 & t && "object" == typeof e && e && e.__esModule)
			return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e)
				n.d(r, o, function (t) {
					return e[t]
				}
					.bind(null, o));
		return r
	},
	n.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		}
		 : function () {
			return e
		};
		return n.d(t, "a", t),
		t
	},
	n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	},
	n.p = "",
	n(n.s = 46)
}
([function (e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", function () {
				return r
			}),
			function (e) {
				e[e.Trace = 0] = "Trace",
				e[e.Debug = 1] = "Debug",
				e[e.Information = 2] = "Information",
				e[e.Warning = 3] = "Warning",
				e[e.Error = 4] = "Error",
				e[e.Critical = 5] = "Critical",
				e[e.None = 6] = "None"
			}
			(r || (r = {}))
		}, function (e, t, n) {
			"use strict";
			n.d(t, "a", function () {
				return s
			}),
			n.d(t, "e", function () {
				return u
			}),
			n.d(t, "f", function () {
				return c
			}),
			n.d(t, "g", function () {
				return l
			}),
			n.d(t, "d", function () {
				return f
			}),
			n.d(t, "c", function () {
				return h
			}),
			n.d(t, "b", function () {
				return d
			});
			var r = n(0),
			o = n(3),
			i = function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			a = function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			},
			s = function () {
				function e() {}
				return e.isRequired = function (e, t) {
					if (null == e)
						throw new Error("The '" + t + "' argument is required.")
				},
				e.isIn = function (e, t, n) {
					if (!(e in t))
						throw new Error("Unknown " + n + " value: " + e + ".")
				},
				e
			}
			();
			function u(e, t) {
				var n = "";
				return c(e) ? (n = "Binary data of length " + e.byteLength, t && (n += ". Content: '" + function (e) {
						var t = new Uint8Array(e),
						n = "";
						return t.forEach(function (e) {
							n += "0x" + (e < 16 ? "0" : "") + e.toString(16) + " "
						}),
						n.substr(0, n.length - 1)
					}
						(e) + "'")) : "string" == typeof e && (n = "String data of length " + e.length, t && (n += ". Content: '" + e + "'")),
				n
			}
			function c(e) {
				return e && "undefined" != typeof ArrayBuffer && (e instanceof ArrayBuffer || e.constructor && "ArrayBuffer" === e.constructor.name)
			}
			function l(e, t, n, o, s, l, f) {
				return i(this, void 0, void 0, function () {
					var i,
					h,
					p,
					d,
					g;
					return a(this, function (a) {
						switch (a.label) {
						case 0:
							return s ? [4, s()] : [3, 2];
						case 1:
							(p = a.sent()) && ((i = {}).Authorization = "Bearer " + p, h = i),
							a.label = 2;
						case 2:
							return e.log(r.a.Trace, "(" + t + " transport) sending data. " + u(l, f) + "."),
							d = c(l) ? "arraybuffer" : "text",
							[4, n.post(o, {
									content: l,
									headers: h,
									responseType: d
								})];
						case 3:
							return g = a.sent(),
							e.log(r.a.Trace, "(" + t + " transport) request complete. Response status: " + g.statusCode + "."),
							[2]
						}
					})
				})
			}
			function f(e) {
				return void 0 === e ? new d(r.a.Information) : null === e ? o.a.instance : e.log ? e : new d(e)
			}
			var h = function () {
				function e(e) {
					this.observers = [],
					this.cancelCallback = e
				}
				return e.prototype.next = function (e) {
					for (var t = 0, n = this.observers; t < n.length; t++) {
						n[t].next(e)
					}
				},
				e.prototype.error = function (e) {
					for (var t = 0, n = this.observers; t < n.length; t++) {
						var r = n[t];
						r.error && r.error(e)
					}
				},
				e.prototype.complete = function () {
					for (var e = 0, t = this.observers; e < t.length; e++) {
						var n = t[e];
						n.complete && n.complete()
					}
				},
				e.prototype.subscribe = function (e) {
					return this.observers.push(e),
					new p(this, e)
				},
				e
			}
			(),
			p = function () {
				function e(e, t) {
					this.subject = e,
					this.observer = t
				}
				return e.prototype.dispose = function () {
					var e = this.subject.observers.indexOf(this.observer);
					e > -1 && this.subject.observers.splice(e, 1),
					0 === this.subject.observers.length && this.subject.cancelCallback().catch(function (e) {})
				},
				e
			}
			(),
			d = function () {
				function e(e) {
					this.minimumLogLevel = e
				}
				return e.prototype.log = function (e, t) {
					if (e >= this.minimumLogLevel)
						switch (e) {
						case r.a.Critical:
						case r.a.Error:
							console.error("[" + (new Date).toISOString() + "] " + r.a[e] + ": " + t);
							break;
						case r.a.Warning:
							console.warn("[" + (new Date).toISOString() + "] " + r.a[e] + ": " + t);
							break;
						case r.a.Information:
							console.info("[" + (new Date).toISOString() + "] " + r.a[e] + ": " + t);
							break;
						default:
							console.log("[" + (new Date).toISOString() + "] " + r.a[e] + ": " + t)
						}
				},
				e
			}
			()
		}, function (e, t, n) {
			"use strict";
			n.r(t);
			var r,
			o,
			i = (r = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
				e.__proto__ = t
			}
				 || function (e, t) {
				for (var n in t)
					t.hasOwnProperty(n) && (e[n] = t[n])
			}, function (e, t) {
				function n() {
					this.constructor = e
				}
				r(e, t),
				e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = function (e) {
				function t(t, n) {
					var r = this,
					o = this.constructor.prototype;
					return (r = e.call(this, t) || this).statusCode = n,
					r.__proto__ = o,
					r
				}
				return i(t, e),
				t
			}
			(Error),
			s = function (e) {
				function t(t) {
					void 0 === t && (t = "A timeout occurred.");
					var n = this,
					r = this.constructor.prototype;
					return (n = e.call(this, t) || this).__proto__ = r,
					n
				}
				return i(t, e),
				t
			}
			(Error),
			u = function (e) {
				function t(t) {
					void 0 === t && (t = "An abort occurred.");
					var n = this,
					r = this.constructor.prototype;
					return (n = e.call(this, t) || this).__proto__ = r,
					n
				}
				return i(t, e),
				t
			}
			(Error),
			c = Object.assign || function (e) {
				for (var t, n = 1, r = arguments.length; n < r; n++)
					for (var o in t = arguments[n])
						Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			},
			l = function () {
				return function (e, t, n) {
					this.statusCode = e,
					this.statusText = t,
					this.content = n
				}
			}
			(),
			f = function () {
				function e() {}
				return e.prototype.get = function (e, t) {
					return this.send(c({}, t, {
							method: "GET",
							url: e
						}))
				},
				e.prototype.post = function (e, t) {
					return this.send(c({}, t, {
							method: "POST",
							url: e
						}))
				},
				e.prototype.delete = function (e, t) {
					return this.send(c({}, t, {
							method: "DELETE",
							url: e
						}))
				},
				e.prototype.getCookieString = function (e) {
					return ""
				},
				e
			}
			(),
			h = n(0),
			p = function () {
				var e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				}
				 || function (e, t) {
					for (var n in t)
						t.hasOwnProperty(n) && (e[n] = t[n])
				};
				return function (t, n) {
					function r() {
						this.constructor = t
					}
					e(t, n),
					t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
				}
			}
			(),
			d = function (e) {
				function t(t) {
					var n = e.call(this) || this;
					return n.logger = t,
					n
				}
				return p(t, e),
				t.prototype.send = function (e) {
					var t = this;
					return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new u) : e.method ? e.url ? new Promise(function (n, r) {
						var o = new XMLHttpRequest;
						o.open(e.method, e.url, !0),
						o.withCredentials = !0,
						o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
						o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
						var i = e.headers;
						i && Object.keys(i).forEach(function (e) {
							o.setRequestHeader(e, i[e])
						}),
						e.responseType && (o.responseType = e.responseType),
						e.abortSignal && (e.abortSignal.onabort = function () {
							o.abort(),
							r(new u)
						}),
						e.timeout && (o.timeout = e.timeout),
						o.onload = function () {
							e.abortSignal && (e.abortSignal.onabort = null),
							o.status >= 200 && o.status < 300 ? n(new l(o.status, o.statusText, o.response || o.responseText)) : r(new a(o.statusText, o.status))
						},
						o.onerror = function () {
							t.logger.log(h.a.Warning, "Error from HTTP request. " + o.status + ": " + o.statusText + "."),
							r(new a(o.statusText, o.status))
						},
						o.ontimeout = function () {
							t.logger.log(h.a.Warning, "Timeout from HTTP request."),
							r(new s)
						},
						o.send(e.content || "")
					}) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
				},
				t
			}
			(f),
			g = function () {
				var e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				}
				 || function (e, t) {
					for (var n in t)
						t.hasOwnProperty(n) && (e[n] = t[n])
				};
				return function (t, n) {
					function r() {
						this.constructor = t
					}
					e(t, n),
					t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
				}
			}
			();
			if ("undefined" == typeof XMLHttpRequest) {
				var y = require;
				o = y("./NodeHttpClient")
			}
			var v,
			b = function (e) {
				function t(t) {
					var n = e.call(this) || this;
					if ("undefined" != typeof XMLHttpRequest)
						n.httpClient = new d(t);
					else {
						if (void 0 === o)
							throw new Error("No HttpClient could be created.");
						n.httpClient = new o.NodeHttpClient(t)
					}
					return n
				}
				return g(t, e),
				t.prototype.send = function (e) {
					return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new u) : e.method ? e.url ? this.httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
				},
				t.prototype.getCookieString = function (e) {
					return this.httpClient.getCookieString(e)
				},
				t
			}
			(f),
			m = n(41);
			!function (e) {
				e[e.Invocation = 1] = "Invocation",
				e[e.StreamItem = 2] = "StreamItem",
				e[e.Completion = 3] = "Completion",
				e[e.StreamInvocation = 4] = "StreamInvocation",
				e[e.CancelInvocation = 5] = "CancelInvocation",
				e[e.Ping = 6] = "Ping",
				e[e.Close = 7] = "Close"
			}
			(v || (v = {}));
			var w,
			E = n(1),
			S = function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			_ = function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			},
			T = 3e4,
			k = 15e3;
			!function (e) {
				e[e.Disconnected = 0] = "Disconnected",
				e[e.Connected = 1] = "Connected"
			}
			(w || (w = {}));
			var C,
			I,
			x = function () {
				function e(e, t, n) {
					var r = this;
					E.a.isRequired(e, "connection"),
					E.a.isRequired(t, "logger"),
					E.a.isRequired(n, "protocol"),
					this.serverTimeoutInMilliseconds = T,
					this.keepAliveIntervalInMilliseconds = k,
					this.logger = t,
					this.protocol = n,
					this.connection = e,
					this.handshakeProtocol = new m.a,
					this.connection.onreceive = function (e) {
						return r.processIncomingData(e)
					},
					this.connection.onclose = function (e) {
						return r.connectionClosed(e)
					},
					this.callbacks = {},
					this.methods = {},
					this.closedCallbacks = [],
					this.id = 0,
					this.receivedHandshakeResponse = !1,
					this.connectionState = w.Disconnected,
					this.cachedPingMessage = this.protocol.writeMessage({
							type: v.Ping
						})
				}
				return e.create = function (t, n, r) {
					return new e(t, n, r)
				},
				Object.defineProperty(e.prototype, "state", {
					get: function () {
						return this.connectionState
					},
					enumerable: !0,
					configurable: !0
				}),
				e.prototype.start = function () {
					return S(this, void 0, void 0, function () {
						var e,
						t,
						n = this;
						return _(this, function (r) {
							switch (r.label) {
							case 0:
								return e = {
									protocol: this.protocol.name,
									version: this.protocol.version
								},
								this.logger.log(h.a.Debug, "Starting HubConnection."),
								this.receivedHandshakeResponse = !1,
								t = new Promise(function (e, t) {
										n.handshakeResolver = e,
										n.handshakeRejecter = t
									}),
								[4, this.connection.start(this.protocol.transferFormat)];
							case 1:
								return r.sent(),
								this.logger.log(h.a.Debug, "Sending handshake request."),
								[4, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(e))];
							case 2:
								return r.sent(),
								this.logger.log(h.a.Information, "Using HubProtocol '" + this.protocol.name + "'."),
								this.cleanupTimeout(),
								this.resetTimeoutPeriod(),
								this.resetKeepAliveInterval(),
								[4, t];
							case 3:
								return r.sent(),
								this.connectionState = w.Connected,
								[2]
							}
						})
					})
				},
				e.prototype.stop = function () {
					return this.logger.log(h.a.Debug, "Stopping HubConnection."),
					this.cleanupTimeout(),
					this.cleanupPingTimer(),
					this.connection.stop()
				},
				e.prototype.stream = function (e) {
					for (var t = this, n = [], r = 1; r < arguments.length; r++)
						n[r - 1] = arguments[r];
					var o = this.createStreamInvocation(e, n),
					i = new E.c(function () {
							var e = t.createCancelInvocation(o.invocationId),
							n = t.protocol.writeMessage(e);
							return delete t.callbacks[o.invocationId],
							t.sendMessage(n)
						});
					this.callbacks[o.invocationId] = function (e, t) {
						t ? i.error(t) : e && (e.type === v.Completion ? e.error ? i.error(new Error(e.error)) : i.complete() : i.next(e.item))
					};
					var a = this.protocol.writeMessage(o);
					return this.sendMessage(a).catch(function (e) {
						i.error(e),
						delete t.callbacks[o.invocationId]
					}),
					i
				},
				e.prototype.sendMessage = function (e) {
					return this.resetKeepAliveInterval(),
					this.connection.send(e)
				},
				e.prototype.send = function (e) {
					for (var t = [], n = 1; n < arguments.length; n++)
						t[n - 1] = arguments[n];
					var r = this.createInvocation(e, t, !0),
					o = this.protocol.writeMessage(r);
					return this.sendMessage(o)
				},
				e.prototype.invoke = function (e) {
					for (var t = this, n = [], r = 1; r < arguments.length; r++)
						n[r - 1] = arguments[r];
					var o = this.createInvocation(e, n, !1);
					return new Promise(function (e, n) {
						t.callbacks[o.invocationId] = function (t, r) {
							r ? n(r) : t && (t.type === v.Completion ? t.error ? n(new Error(t.error)) : e(t.result) : n(new Error("Unexpected message type: " + t.type)))
						};
						var r = t.protocol.writeMessage(o);
						t.sendMessage(r).catch(function (e) {
							n(e),
							delete t.callbacks[o.invocationId]
						})
					})
				},
				e.prototype.on = function (e, t) {
					e && t && (e = e.toLowerCase(), this.methods[e] || (this.methods[e] = []), -1 === this.methods[e].indexOf(t) && this.methods[e].push(t))
				},
				e.prototype.off = function (e, t) {
					if (e) {
						e = e.toLowerCase();
						var n = this.methods[e];
						if (n)
							if (t) {
								var r = n.indexOf(t);
								-1 !== r && (n.splice(r, 1), 0 === n.length && delete this.methods[e])
							} else
								delete this.methods[e]
					}
				},
				e.prototype.onclose = function (e) {
					e && this.closedCallbacks.push(e)
				},
				e.prototype.processIncomingData = function (e) {
					if (this.cleanupTimeout(), this.receivedHandshakeResponse || (e = this.processHandshakeResponse(e), this.receivedHandshakeResponse = !0), e)
						for (var t = 0, n = this.protocol.parseMessages(e, this.logger); t < n.length; t++) {
							var r = n[t];
							switch (r.type) {
							case v.Invocation:
								this.invokeClientMethod(r);
								break;
							case v.StreamItem:
							case v.Completion:
								var o = this.callbacks[r.invocationId];
								null != o && (r.type === v.Completion && delete this.callbacks[r.invocationId], o(r));
								break;
							case v.Ping:
								break;
							case v.Close:
								this.logger.log(h.a.Information, "Close message received from server."),
								this.connection.stop(r.error ? new Error("Server returned an error on close: " + r.error) : void 0);
								break;
							default:
								this.logger.log(h.a.Warning, "Invalid message type: " + r.type + ".")
							}
						}
					this.resetTimeoutPeriod()
				},
				e.prototype.processHandshakeResponse = function (e) {
					var t,
					n,
					r;
					try {
						r = (t = this.handshakeProtocol.parseHandshakeResponse(e))[0],
						n = t[1]
					} catch (e) {
						var o = "Error parsing handshake response: " + e;
						this.logger.log(h.a.Error, o);
						var i = new Error(o);
						throw this.connection.stop(i),
						this.handshakeRejecter(i),
						i
					}
					if (n.error) {
						o = "Server returned handshake error: " + n.error;
						throw this.logger.log(h.a.Error, o),
						this.handshakeRejecter(o),
						this.connection.stop(new Error(o)),
						new Error(o)
					}
					return this.logger.log(h.a.Debug, "Server handshake complete."),
					this.handshakeResolver(),
					r
				},
				e.prototype.resetKeepAliveInterval = function () {
					var e = this;
					this.cleanupPingTimer(),
					this.pingServerHandle = setTimeout(function () {
							return S(e, void 0, void 0, function () {
								return _(this, function (e) {
									switch (e.label) {
									case 0:
										if (this.connectionState !== w.Connected)
											return [3, 4];
										e.label = 1;
									case 1:
										return e.trys.push([1, 3, , 4]),
										[4, this.sendMessage(this.cachedPingMessage)];
									case 2:
										return e.sent(),
										[3, 4];
									case 3:
										return e.sent(),
										this.cleanupPingTimer(),
										[3, 4];
									case 4:
										return [2]
									}
								})
							})
						}, this.keepAliveIntervalInMilliseconds)
				},
				e.prototype.resetTimeoutPeriod = function () {
					var e = this;
					this.connection.features && this.connection.features.inherentKeepAlive || (this.timeoutHandle = setTimeout(function () {
								return e.serverTimeout()
							}, this.serverTimeoutInMilliseconds))
				},
				e.prototype.serverTimeout = function () {
					this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))
				},
				e.prototype.invokeClientMethod = function (e) {
					var t = this,
					n = this.methods[e.target.toLowerCase()];
					if (n) {
						if (n.forEach(function (n) {
								return n.apply(t, e.arguments)
							}), e.invocationId) {
							var r = "Server requested a response, which is not supported in this version of the client.";
							this.logger.log(h.a.Error, r),
							this.connection.stop(new Error(r))
						}
					} else
						this.logger.log(h.a.Warning, "No client method with the name '" + e.target + "' found.")
				},
				e.prototype.connectionClosed = function (e) {
					var t = this,
					n = this.callbacks;
					this.callbacks = {},
					this.connectionState = w.Disconnected,
					this.handshakeRejecter && this.handshakeRejecter(e),
					Object.keys(n).forEach(function (t) {
						(0, n[t])(null, e || new Error("Invocation canceled due to connection being closed."))
					}),
					this.cleanupTimeout(),
					this.cleanupPingTimer(),
					this.closedCallbacks.forEach(function (n) {
						return n.apply(t, [e])
					})
				},
				e.prototype.cleanupPingTimer = function () {
					this.pingServerHandle && clearTimeout(this.pingServerHandle)
				},
				e.prototype.cleanupTimeout = function () {
					this.timeoutHandle && clearTimeout(this.timeoutHandle)
				},
				e.prototype.createInvocation = function (e, t, n) {
					if (n)
						return {
							arguments: t,
							target: e,
							type: v.Invocation
						};
					var r = this.id;
					return this.id++, {
						arguments: t,
						invocationId: r.toString(),
						target: e,
						type: v.Invocation
					}
				},
				e.prototype.createStreamInvocation = function (e, t) {
					var n = this.id;
					return this.id++, {
						arguments: t,
						invocationId: n.toString(),
						target: e,
						type: v.StreamInvocation
					}
				},
				e.prototype.createCancelInvocation = function (e) {
					return {
						invocationId: e,
						type: v.CancelInvocation
					}
				},
				e
			}
			();
			!function (e) {
				e[e.None = 0] = "None",
				e[e.WebSockets = 1] = "WebSockets",
				e[e.ServerSentEvents = 2] = "ServerSentEvents",
				e[e.LongPolling = 4] = "LongPolling"
			}
			(C || (C = {})),
			function (e) {
				e[e.Text = 1] = "Text",
				e[e.Binary = 2] = "Binary"
			}
			(I || (I = {}));
			var R = function () {
				function e() {
					this.isAborted = !1,
					this.onabort = null
				}
				return e.prototype.abort = function () {
					this.isAborted || (this.isAborted = !0, this.onabort && this.onabort())
				},
				Object.defineProperty(e.prototype, "signal", {
					get: function () {
						return this
					},
					enumerable: !0,
					configurable: !0
				}),
				Object.defineProperty(e.prototype, "aborted", {
					get: function () {
						return this.isAborted
					},
					enumerable: !0,
					configurable: !0
				}),
				e
			}
			(),
			O = function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			P = function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			},
			M = function () {
				function e(e, t, n, r) {
					this.httpClient = e,
					this.accessTokenFactory = t,
					this.logger = n,
					this.pollAbort = new R,
					this.logMessageContent = r,
					this.running = !1,
					this.onreceive = null,
					this.onclose = null
				}
				return Object.defineProperty(e.prototype, "pollAborted", {
					get: function () {
						return this.pollAbort.aborted
					},
					enumerable: !0,
					configurable: !0
				}),
				e.prototype.connect = function (e, t) {
					return O(this, void 0, void 0, function () {
						var n,
						r,
						o,
						i;
						return P(this, function (s) {
							switch (s.label) {
							case 0:
								if (E.a.isRequired(e, "url"), E.a.isRequired(t, "transferFormat"), E.a.isIn(t, I, "transferFormat"), this.url = e, this.logger.log(h.a.Trace, "(LongPolling transport) Connecting."), t === I.Binary && "undefined" != typeof XMLHttpRequest && "string" != typeof(new XMLHttpRequest).responseType)
									throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
								return n = {
									abortSignal: this.pollAbort.signal,
									headers: {},
									timeout: 1e5
								},
								t === I.Binary && (n.responseType = "arraybuffer"),
								[4, this.getAccessToken()];
							case 1:
								return r = s.sent(),
								this.updateHeaderToken(n, r),
								o = e + "&_=" + Date.now(),
								this.logger.log(h.a.Trace, "(LongPolling transport) polling: " + o + "."),
								[4, this.httpClient.get(o, n)];
							case 2:
								return 200 !== (i = s.sent()).statusCode ? (this.logger.log(h.a.Error, "(LongPolling transport) Unexpected response code: " + i.statusCode + "."), this.closeError = new a(i.statusText || "", i.statusCode), this.running = !1) : this.running = !0,
								this.receiving = this.poll(this.url, n),
								[2]
							}
						})
					})
				},
				e.prototype.getAccessToken = function () {
					return O(this, void 0, void 0, function () {
						return P(this, function (e) {
							switch (e.label) {
							case 0:
								return this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
							case 1:
								return [2, e.sent()];
							case 2:
								return [2, null]
							}
						})
					})
				},
				e.prototype.updateHeaderToken = function (e, t) {
					e.headers || (e.headers = {}),
					t ? e.headers.Authorization = "Bearer " + t : e.headers.Authorization && delete e.headers.Authorization
				},
				e.prototype.poll = function (e, t) {
					return O(this, void 0, void 0, function () {
						var n,
						r,
						o,
						i;
						return P(this, function (u) {
							switch (u.label) {
							case 0:
								u.trys.push([0, , 8, 9]),
								u.label = 1;
							case 1:
								return this.running ? [4, this.getAccessToken()] : [3, 7];
							case 2:
								n = u.sent(),
								this.updateHeaderToken(t, n),
								u.label = 3;
							case 3:
								return u.trys.push([3, 5, , 6]),
								r = e + "&_=" + Date.now(),
								this.logger.log(h.a.Trace, "(LongPolling transport) polling: " + r + "."),
								[4, this.httpClient.get(r, t)];
							case 4:
								return 204 === (o = u.sent()).statusCode ? (this.logger.log(h.a.Information, "(LongPolling transport) Poll terminated by server."), this.running = !1) : 200 !== o.statusCode ? (this.logger.log(h.a.Error, "(LongPolling transport) Unexpected response code: " + o.statusCode + "."), this.closeError = new a(o.statusText || "", o.statusCode), this.running = !1) : o.content ? (this.logger.log(h.a.Trace, "(LongPolling transport) data received. " + Object(E.e)(o.content, this.logMessageContent) + "."), this.onreceive && this.onreceive(o.content)) : this.logger.log(h.a.Trace, "(LongPolling transport) Poll timed out, reissuing."),
								[3, 6];
							case 5:
								return i = u.sent(),
								this.running ? i instanceof s ? this.logger.log(h.a.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this.closeError = i, this.running = !1) : this.logger.log(h.a.Trace, "(LongPolling transport) Poll errored after shutdown: " + i.message),
								[3, 6];
							case 6:
								return [3, 1];
							case 7:
								return [3, 9];
							case 8:
								return this.logger.log(h.a.Trace, "(LongPolling transport) Polling complete."),
								this.pollAborted || this.raiseOnClose(),
								[7];
							case 9:
								return [2]
							}
						})
					})
				},
				e.prototype.send = function (e) {
					return O(this, void 0, void 0, function () {
						return P(this, function (t) {
							return this.running ? [2, Object(E.g)(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, e, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]
						})
					})
				},
				e.prototype.stop = function () {
					return O(this, void 0, void 0, function () {
						var e,
						t;
						return P(this, function (n) {
							switch (n.label) {
							case 0:
								this.logger.log(h.a.Trace, "(LongPolling transport) Stopping polling."),
								this.running = !1,
								this.pollAbort.abort(),
								n.label = 1;
							case 1:
								return n.trys.push([1, , 5, 6]),
								[4, this.receiving];
							case 2:
								return n.sent(),
								this.logger.log(h.a.Trace, "(LongPolling transport) sending DELETE request to " + this.url + "."),
								e = {
									headers: {}
								},
								[4, this.getAccessToken()];
							case 3:
								return t = n.sent(),
								this.updateHeaderToken(e, t),
								[4, this.httpClient.delete(this.url, e)];
							case 4:
								return n.sent(),
								this.logger.log(h.a.Trace, "(LongPolling transport) DELETE request sent."),
								[3, 6];
							case 5:
								return this.logger.log(h.a.Trace, "(LongPolling transport) Stop finished."),
								this.raiseOnClose(),
								[7];
							case 6:
								return [2]
							}
						})
					})
				},
				e.prototype.raiseOnClose = function () {
					if (this.onclose) {
						var e = "(LongPolling transport) Firing onclose event.";
						this.closeError && (e += " Error: " + this.closeError),
						this.logger.log(h.a.Trace, e),
						this.onclose(this.closeError)
					}
				},
				e
			}
			(),
			L = function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			A = function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			},
			B = function () {
				function e(e, t, n, r, o) {
					this.httpClient = e,
					this.accessTokenFactory = t,
					this.logger = n,
					this.logMessageContent = r,
					this.eventSourceConstructor = o,
					this.onreceive = null,
					this.onclose = null
				}
				return e.prototype.connect = function (e, t) {
					return L(this, void 0, void 0, function () {
						var n,
						r = this;
						return A(this, function (o) {
							switch (o.label) {
							case 0:
								return E.a.isRequired(e, "url"),
								E.a.isRequired(t, "transferFormat"),
								E.a.isIn(t, I, "transferFormat"),
								this.logger.log(h.a.Trace, "(SSE transport) Connecting."),
								this.url = e,
								this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
							case 1:
								(n = o.sent()) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)),
								o.label = 2;
							case 2:
								return [2, new Promise(function (n, o) {
										var i = !1;
										if (t === I.Text) {
											var a;
											if ("undefined" != typeof window)
												a = new r.eventSourceConstructor(e, {
														withCredentials: !0
													});
											else {
												var s = r.httpClient.getCookieString(e);
												a = new r.eventSourceConstructor(e, {
														withCredentials: !0,
														headers: {
															Cookie: s
														}
													})
											}
											try {
												a.onmessage = function (e) {
													if (r.onreceive)
														try {
															r.logger.log(h.a.Trace, "(SSE transport) data received. " + Object(E.e)(e.data, r.logMessageContent) + "."),
															r.onreceive(e.data)
														} catch (e) {
															return void r.close(e)
														}
												},
												a.onerror = function (e) {
													var t = new Error(e.data || "Error occurred");
													i ? r.close(t) : o(t)
												},
												a.onopen = function () {
													r.logger.log(h.a.Information, "SSE connected to " + r.url),
													r.eventSource = a,
													i = !0,
													n()
												}
											} catch (e) {
												return void o(e)
											}
										} else
											o(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"))
									})]
							}
						})
					})
				},
				e.prototype.send = function (e) {
					return L(this, void 0, void 0, function () {
						return A(this, function (t) {
							return this.eventSource ? [2, Object(E.g)(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, e, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]
						})
					})
				},
				e.prototype.stop = function () {
					return this.close(),
					Promise.resolve()
				},
				e.prototype.close = function (e) {
					this.eventSource && (this.eventSource.close(), this.eventSource = void 0, this.onclose && this.onclose(e))
				},
				e
			}
			(),
			D = function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			U = function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			},
			N = function () {
				function e(e, t, n, r, o) {
					this.logger = n,
					this.accessTokenFactory = t,
					this.logMessageContent = r,
					this.webSocketConstructor = o,
					this.httpClient = e,
					this.onreceive = null,
					this.onclose = null
				}
				return e.prototype.connect = function (e, t) {
					return D(this, void 0, void 0, function () {
						var n,
						r = this;
						return U(this, function (o) {
							switch (o.label) {
							case 0:
								return E.a.isRequired(e, "url"),
								E.a.isRequired(t, "transferFormat"),
								E.a.isIn(t, I, "transferFormat"),
								this.logger.log(h.a.Trace, "(WebSockets transport) Connecting."),
								this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
							case 1:
								(n = o.sent()) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)),
								o.label = 2;
							case 2:
								return [2, new Promise(function (n, o) {
										var i;
										e = e.replace(/^http/, "ws");
										var a = r.httpClient.getCookieString(e);
										"undefined" == typeof window && a && (i = new r.webSocketConstructor(e, void 0, {
													headers: {
														Cookie: "" + a
													}
												})),
										i || (i = new r.webSocketConstructor(e)),
										t === I.Binary && (i.binaryType = "arraybuffer"),
										i.onopen = function (t) {
											r.logger.log(h.a.Information, "WebSocket connected to " + e + "."),
											r.webSocket = i,
											n()
										},
										i.onerror = function (e) {
											var t = null;
											"undefined" != typeof ErrorEvent && e instanceof ErrorEvent && (t = e.error),
											o(t)
										},
										i.onmessage = function (e) {
											r.logger.log(h.a.Trace, "(WebSockets transport) data received. " + Object(E.e)(e.data, r.logMessageContent) + "."),
											r.onreceive && r.onreceive(e.data)
										},
										i.onclose = function (e) {
											return r.close(e)
										}
									})]
							}
						})
					})
				},
				e.prototype.send = function (e) {
					return this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN ? (this.logger.log(h.a.Trace, "(WebSockets transport) sending data. " + Object(E.e)(e, this.logMessageContent) + "."), this.webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state")
				},
				e.prototype.stop = function () {
					return this.webSocket && (this.webSocket.onclose = function () {}, this.webSocket.onmessage = function () {}, this.webSocket.onerror = function () {}, this.webSocket.close(), this.webSocket = void 0, this.close(void 0)),
					Promise.resolve()
				},
				e.prototype.close = function (e) {
					this.logger.log(h.a.Trace, "(WebSockets transport) socket closed."),
					this.onclose && (!e || !1 !== e.wasClean && 1e3 === e.code ? this.onclose() : this.onclose(new Error("WebSocket closed with status code: " + e.code + " (" + e.reason + ").")))
				},
				e
			}
			(),
			j = function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			F = function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			},
			H = null,
			q = null;
			if ("undefined" == typeof window) {
				var W = require;
				H = W("ws"),
				q = W("eventsource")
			}
			var z = function () {
				function e(e, t) {
					void 0 === t && (t = {}),
					this.features = {},
					E.a.isRequired(e, "url"),
					this.logger = Object(E.d)(t.logger),
					this.baseUrl = this.resolveUrl(e),
					(t = t || {}).logMessageContent = t.logMessageContent || !1;
					var n = "undefined" == typeof window;
					n || "undefined" == typeof WebSocket || t.WebSocket ? n && !t.WebSocket && H && (t.WebSocket = H) : t.WebSocket = WebSocket,
					n || "undefined" == typeof EventSource || t.EventSource ? n && !t.EventSource && void 0 !== q && (t.EventSource = q) : t.EventSource = EventSource,
					this.httpClient = t.httpClient || new b(this.logger),
					this.connectionState = 2,
					this.options = t,
					this.onreceive = null,
					this.onclose = null
				}
				return e.prototype.start = function (e) {
					return e = e || I.Binary,
					E.a.isIn(e, I, "transferFormat"),
					this.logger.log(h.a.Debug, "Starting connection with transfer format '" + I[e] + "'."),
					2 !== this.connectionState ? Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state.")) : (this.connectionState = 0, this.startPromise = this.startInternal(e), this.startPromise)
				},
				e.prototype.send = function (e) {
					if (1 !== this.connectionState)
						throw new Error("Cannot send data if the connection is not in the 'Connected' State.");
					return this.transport.send(e)
				},
				e.prototype.stop = function (e) {
					return j(this, void 0, void 0, function () {
						return F(this, function (t) {
							switch (t.label) {
							case 0:
								this.connectionState = 2,
								this.stopError = e,
								t.label = 1;
							case 1:
								return t.trys.push([1, 3, , 4]),
								[4, this.startPromise];
							case 2:
								return t.sent(),
								[3, 4];
							case 3:
								return t.sent(),
								[3, 4];
							case 4:
								return this.transport ? [4, this.transport.stop()] : [3, 6];
							case 5:
								t.sent(),
								this.transport = void 0,
								t.label = 6;
							case 6:
								return [2]
							}
						})
					})
				},
				e.prototype.startInternal = function (e) {
					return j(this, void 0, void 0, function () {
						var t,
						n,
						r,
						o,
						i,
						a,
						s,
						u = this;
						return F(this, function (c) {
							switch (c.label) {
							case 0:
								t = this.baseUrl,
								this.accessTokenFactory = this.options.accessTokenFactory,
								c.label = 1;
							case 1:
								return c.trys.push([1, 12, , 13]),
								this.options.skipNegotiation ? this.options.transport !== C.WebSockets ? [3, 3] : (this.transport = this.constructTransport(C.WebSockets), [4, this.transport.connect(t, e)]) : [3, 5];
							case 2:
								return c.sent(),
								[3, 4];
							case 3:
								throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
							case 4:
								return [3, 11];
							case 5:
								n = null,
								r = 0,
								o = function () {
									var e;
									return F(this, function (o) {
										switch (o.label) {
										case 0:
											return [4, i.getNegotiationResponse(t)];
										case 1:
											if (n = o.sent(), 2 === i.connectionState)
												return [2, {
														value: void 0
													}
												];
											if (n.error)
												throw Error(n.error);
											if (n.ProtocolVersion)
												throw Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
											return n.url && (t = n.url),
											n.accessToken && (e = n.accessToken, i.accessTokenFactory = function () {
												return e
											}),
											r++,
											[2]
										}
									})
								},
								i = this,
								c.label = 6;
							case 6:
								return [5, o()];
							case 7:
								if ("object" == typeof(a = c.sent()))
									return [2, a.value];
								c.label = 8;
							case 8:
								if (n.url && r < 100)
									return [3, 6];
								c.label = 9;
							case 9:
								if (100 === r && n.url)
									throw Error("Negotiate redirection limit exceeded.");
								return [4, this.createTransport(t, this.options.transport, n, e)];
							case 10:
								c.sent(),
								c.label = 11;
							case 11:
								return this.transport instanceof M && (this.features.inherentKeepAlive = !0),
								this.transport.onreceive = this.onreceive,
								this.transport.onclose = function (e) {
									return u.stopConnection(e)
								},
								this.changeState(0, 1),
								[3, 13];
							case 12:
								throw s = c.sent(),
								this.logger.log(h.a.Error, "Failed to start the connection: " + s),
								this.connectionState = 2,
								this.transport = void 0,
								s;
							case 13:
								return [2]
							}
						})
					})
				},
				e.prototype.getNegotiationResponse = function (e) {
					return j(this, void 0, void 0, function () {
						var t,
						n,
						r,
						o,
						i,
						a;
						return F(this, function (s) {
							switch (s.label) {
							case 0:
								return this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
							case 1:
								(r = s.sent()) && ((t = {}).Authorization = "Bearer " + r, n = t),
								s.label = 2;
							case 2:
								o = this.resolveNegotiateUrl(e),
								this.logger.log(h.a.Debug, "Sending negotiation request: " + o + "."),
								s.label = 3;
							case 3:
								return s.trys.push([3, 5, , 6]),
								[4, this.httpClient.post(o, {
										content: "",
										headers: n
									})];
							case 4:
								if (200 !== (i = s.sent()).statusCode)
									throw Error("Unexpected status code returned from negotiate " + i.statusCode);
								return [2, JSON.parse(i.content)];
							case 5:
								throw a = s.sent(),
								this.logger.log(h.a.Error, "Failed to complete negotiation with the server: " + a),
								a;
							case 6:
								return [2]
							}
						})
					})
				},
				e.prototype.createConnectUrl = function (e, t) {
					return t ? e + (-1 === e.indexOf("?") ? "?" : "&") + "id=" + t : e
				},
				e.prototype.createTransport = function (e, t, n, r) {
					return j(this, void 0, void 0, function () {
						var o,
						i,
						a,
						s,
						u,
						c,
						l;
						return F(this, function (f) {
							switch (f.label) {
							case 0:
								return o = this.createConnectUrl(e, n.connectionId),
								this.isITransport(t) ? (this.logger.log(h.a.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, [4, this.transport.connect(o, r)]) : [3, 2];
							case 1:
								return f.sent(),
								this.changeState(0, 1),
								[2];
							case 2:
								i = n.availableTransports || [],
								a = 0,
								s = i,
								f.label = 3;
							case 3:
								return a < s.length ? (u = s[a], this.connectionState = 0, "number" != typeof(c = this.resolveTransport(u, t, r)) ? [3, 8] : (this.transport = this.constructTransport(c), n.connectionId ? [3, 5] : [4, this.getNegotiationResponse(e)])) : [3, 9];
							case 4:
								n = f.sent(),
								o = this.createConnectUrl(e, n.connectionId),
								f.label = 5;
							case 5:
								return f.trys.push([5, 7, , 8]),
								[4, this.transport.connect(o, r)];
							case 6:
								return f.sent(),
								this.changeState(0, 1),
								[2];
							case 7:
								return l = f.sent(),
								this.logger.log(h.a.Error, "Failed to start the transport '" + C[c] + "': " + l),
								this.connectionState = 2,
								n.connectionId = void 0,
								[3, 8];
							case 8:
								return a++,
								[3, 3];
							case 9:
								throw new Error("Unable to initialize any of the available transports.")
							}
						})
					})
				},
				e.prototype.constructTransport = function (e) {
					switch (e) {
					case C.WebSockets:
						if (!this.options.WebSocket)
							throw new Error("'WebSocket' is not supported in your environment.");
						return new N(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1, this.options.WebSocket);
					case C.ServerSentEvents:
						if (!this.options.EventSource)
							throw new Error("'EventSource' is not supported in your environment.");
						return new B(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1, this.options.EventSource);
					case C.LongPolling:
						return new M(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1);
					default:
						throw new Error("Unknown transport: " + e + ".")
					}
				},
				e.prototype.resolveTransport = function (e, t, n) {
					var r = C[e.transport];
					if (null == r)
						this.logger.log(h.a.Debug, "Skipping transport '" + e.transport + "' because it is not supported by this client.");
					else {
						var o = e.transferFormats.map(function (e) {
								return I[e]
							});
						if (function (e, t) {
							return !e || 0 != (t & e)
						}
							(t, r))
							if (o.indexOf(n) >= 0) {
								if ((r !== C.WebSockets || this.options.WebSocket) && (r !== C.ServerSentEvents || this.options.EventSource))
									return this.logger.log(h.a.Debug, "Selecting transport '" + C[r] + "'."), r;
								this.logger.log(h.a.Debug, "Skipping transport '" + C[r] + "' because it is not supported in your environment.'")
							} else
								this.logger.log(h.a.Debug, "Skipping transport '" + C[r] + "' because it does not support the requested transfer format '" + I[n] + "'.");
						else
							this.logger.log(h.a.Debug, "Skipping transport '" + C[r] + "' because it was disabled by the client.")
					}
					return null
				},
				e.prototype.isITransport = function (e) {
					return e && "object" == typeof e && "connect" in e
				},
				e.prototype.changeState = function (e, t) {
					return this.connectionState === e && (this.connectionState = t, !0)
				},
				e.prototype.stopConnection = function (e) {
					this.transport = void 0,
					(e = this.stopError || e) ? this.logger.log(h.a.Error, "Connection disconnected with error '" + e + "'.") : this.logger.log(h.a.Information, "Connection disconnected."),
					this.connectionState = 2,
					this.onclose && this.onclose(e)
				},
				e.prototype.resolveUrl = function (e) {
					if (0 === e.lastIndexOf("https://", 0) || 0 === e.lastIndexOf("http://", 0))
						return e;
					if ("undefined" == typeof window || !window || !window.document)
						throw new Error("Cannot resolve '" + e + "'.");
					var t = window.document.createElement("a");
					return t.href = e,
					this.logger.log(h.a.Information, "Normalizing '" + e + "' to '" + t.href + "'."),
					t.href
				},
				e.prototype.resolveNegotiateUrl = function (e) {
					var t = e.indexOf("?"),
					n = e.substring(0, -1 === t ? e.length : t);
					return "/" !== n[n.length - 1] && (n += "/"),
					n += "negotiate",
					n += -1 === t ? "" : e.substring(t)
				},
				e
			}
			();
			var Y = n(3),
			K = n(4),
			J = "json",
			X = function () {
				function e() {
					this.name = J,
					this.version = 1,
					this.transferFormat = I.Text
				}
				return e.prototype.parseMessages = function (e, t) {
					if ("string" != typeof e)
						throw new Error("Invalid input for JSON hub protocol. Expected a string.");
					if (!e)
						return [];
					null === t && (t = Y.a.instance);
					for (var n = [], r = 0, o = K.a.parse(e); r < o.length; r++) {
						var i = o[r],
						a = JSON.parse(i);
						if ("number" != typeof a.type)
							throw new Error("Invalid payload.");
						switch (a.type) {
						case v.Invocation:
							this.isInvocationMessage(a);
							break;
						case v.StreamItem:
							this.isStreamItemMessage(a);
							break;
						case v.Completion:
							this.isCompletionMessage(a);
							break;
						case v.Ping:
						case v.Close:
							break;
						default:
							t.log(h.a.Information, "Unknown message type '" + a.type + "' ignored.");
							continue
						}
						n.push(a)
					}
					return n
				},
				e.prototype.writeMessage = function (e) {
					return K.a.write(JSON.stringify(e))
				},
				e.prototype.isInvocationMessage = function (e) {
					this.assertNotEmptyString(e.target, "Invalid payload for Invocation message."),
					void 0 !== e.invocationId && this.assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.")
				},
				e.prototype.isStreamItemMessage = function (e) {
					if (this.assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), void 0 === e.item)
						throw new Error("Invalid payload for StreamItem message.")
				},
				e.prototype.isCompletionMessage = function (e) {
					if (e.result && e.error)
						throw new Error("Invalid payload for Completion message.");
					!e.result && e.error && this.assertNotEmptyString(e.error, "Invalid payload for Completion message."),
					this.assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.")
				},
				e.prototype.assertNotEmptyString = function (e, t) {
					if ("string" != typeof e || "" === e)
						throw new Error(t)
				},
				e
			}
			(),
			G = function () {
				function e() {}
				return e.prototype.configureLogging = function (e) {
					return E.a.isRequired(e, "logging"),
					void 0 !== e.log ? this.logger = e : this.logger = new E.b(e),
					this
				},
				e.prototype.withUrl = function (e, t) {
					return E.a.isRequired(e, "url"),
					this.url = e,
					this.httpConnectionOptions = "object" == typeof t ? t : {
						transport: t
					},
					this
				},
				e.prototype.withHubProtocol = function (e) {
					return E.a.isRequired(e, "protocol"),
					this.protocol = e,
					this
				},
				e.prototype.build = function () {
					var e = this.httpConnectionOptions || {};
					if (void 0 === e.logger && (e.logger = this.logger), !this.url)
						throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
					var t = new z(this.url, e);
					return x.create(t, this.logger || Y.a.instance, this.protocol || new X)
				},
				e
			}
			();
			n.d(t, "VERSION", function () {
				return V
			}),
			n.d(t, "AbortError", function () {
				return u
			}),
			n.d(t, "HttpError", function () {
				return a
			}),
			n.d(t, "TimeoutError", function () {
				return s
			}),
			n.d(t, "HttpClient", function () {
				return f
			}),
			n.d(t, "HttpResponse", function () {
				return l
			}),
			n.d(t, "DefaultHttpClient", function () {
				return b
			}),
			n.d(t, "HubConnection", function () {
				return x
			}),
			n.d(t, "HubConnectionState", function () {
				return w
			}),
			n.d(t, "HubConnectionBuilder", function () {
				return G
			}),
			n.d(t, "MessageType", function () {
				return v
			}),
			n.d(t, "LogLevel", function () {
				return h.a
			}),
			n.d(t, "HttpTransportType", function () {
				return C
			}),
			n.d(t, "TransferFormat", function () {
				return I
			}),
			n.d(t, "NullLogger", function () {
				return Y.a
			}),
			n.d(t, "JsonHubProtocol", function () {
				return X
			});
			var V = "1.1.2"
		}, function (e, t, n) {
			"use strict";
			n.d(t, "a", function () {
				return r
			});
			var r = function () {
				function e() {}
				return e.prototype.log = function (e, t) {},
				e.instance = new e,
				e
			}
			()
		}, function (e, t, n) {
			"use strict";
			n.d(t, "a", function () {
				return r
			});
			var r = function () {
				function e() {}
				return e.write = function (t) {
					return "" + t + e.RecordSeparator
				},
				e.parse = function (t) {
					if (t[t.length - 1] !== e.RecordSeparator)
						throw new Error("Message is incomplete.");
					var n = t.split(e.RecordSeparator);
					return n.pop(),
					n
				},
				e.RecordSeparatorCode = 30,
				e.RecordSeparator = String.fromCharCode(e.RecordSeparatorCode),
				e
			}
			()
		}, function (e, t) {
			var n;
			n = function () {
				return this
			}
			();
			try {
				n = n || new Function("return this")()
			} catch (e) {
				"object" == typeof window && (n = window)
			}
			e.exports = n
		}, function (e, t, n) {
			var r = n(11),
			o = r.Buffer;
			function i(e, t) {
				for (var n in e)
					t[n] = e[n]
			}
			function a(e, t, n) {
				return o(e, t, n)
			}
			o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = a),
			i(o, a),
			a.from = function (e, t, n) {
				if ("number" == typeof e)
					throw new TypeError("Argument must not be a number");
				return o(e, t, n)
			},
			a.alloc = function (e, t, n) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				var r = o(e);
				return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0),
				r
			},
			a.allocUnsafe = function (e) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				return o(e)
			},
			a.allocUnsafeSlow = function (e) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				return r.SlowBuffer(e)
			}
		}, function (e, t) {
			"function" == typeof Object.create ? e.exports = function (e, t) {
				e.super_ = t,
				e.prototype = Object.create(t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})
			}
			 : e.exports = function (e, t) {
				e.super_ = t;
				var n = function () {};
				n.prototype = t.prototype,
				e.prototype = new n,
				e.prototype.constructor = e
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(23),
			o = n(9),
			i = {};
			function a(e, t, n) {
				var o = i[e];
				o || (o = i[e] = new r.BrowserRenderer(e)),
				o.attachRootComponentToLogicalElement(n, t)
			}
			t.attachRootComponentToLogicalElement = a,
			t.attachRootComponentToElement = function (e, t, n) {
				var r = document.querySelector(t);
				if (!r)
					throw new Error("Could not find any element matching selector '" + t + "'.");
				a(e, o.toLogicalElement(r, !0), n)
			},
			t.renderBatch = function (e, t) {
				var n = i[e];
				if (!n)
					throw new Error("There is no browser renderer with ID " + e + ".");
				for (var r = t.arrayRangeReader, o = t.updatedComponents(), a = r.values(o), s = r.count(o), u = t.referenceFrames(), c = r.values(u), l = t.diffReader, f = 0; f < s; f++) {
					var h = t.updatedComponentsEntry(a, f),
					p = l.componentId(h),
					d = l.edits(h);
					n.updateComponent(t, p, d, c)
				}
				var g = t.disposedComponentIds(),
				y = r.values(g),
				v = r.count(g);
				for (f = 0; f < v; f++)
					p = t.disposedComponentIdsEntry(y, f), n.disposeComponent(p);
				var b = t.disposedEventHandlerIds(),
				m = r.values(b),
				w = r.count(b);
				for (f = 0; f < w; f++) {
					var E = t.disposedEventHandlerIdsEntry(m, f);
					n.disposeEventHandler(E)
				}
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = l("_blazorLogicalChildren"),
			o = l("_blazorLogicalParent"),
			i = l("_blazorLogicalEnd");
			function a(e, t) {
				if (e.childNodes.length > 0 && !t)
					throw new Error("New logical elements must start empty, or allowExistingContents must be true");
				return e[r] = [],
				e
			}
			function s(e, t, n) {
				var i = e;
				if (e instanceof Comment && (c(i) && c(i).length > 0))
					throw new Error("Not implemented: inserting non-empty logical container");
				if (u(i))
					throw new Error("Not implemented: moving existing logical children");
				var a = c(t);
				if (n < a.length) {
					var s = a[n];
					s.parentNode.insertBefore(e, s),
					a.splice(n, 0, i)
				} else !function e(t, n) {
						if (n instanceof Element)
							n.appendChild(t);
						else {
							if (!(n instanceof Comment))
								throw new Error("Cannot append node because the parent is not a valid logical element. Parent: " + n);
							var r = (i = c(u(o = n)), a = Array.prototype.indexOf.call(i, o), i[a + 1] || null);
							r ? r.parentNode.insertBefore(t, r) : e(t, u(n))
						}
						var o,
						i,
						a
					}
				(e, t),
				a.push(i);
				i[o] = t,
				r in i || (i[r] = [])
			}
			function u(e) {
				return e[o] || null
			}
			function c(e) {
				return e[r]
			}
			function l(e) {
				return "function" == typeof Symbol ? Symbol() : e
			}
			t.toLogicalRootCommentElement = function (e, t) {
				if (!e.parentNode)
					throw new Error("Comment not connected to the DOM " + e.textContent);
				var n = e.parentNode,
				r = a(n, !0),
				s = c(r);
				return Array.from(n.childNodes).forEach(function (e) {
					return s.push(e)
				}),
				e[o] = r,
				e[i] = t,
				a(t, !0),
				a(e, !0)
			},
			t.toLogicalElement = a,
			t.createAndInsertLogicalContainer = function (e, t) {
				var n = document.createComment("!");
				return s(n, e, t),
				n
			},
			t.insertLogicalChild = s,
			t.removeLogicalChild = function e(t, n) {
				var r = c(t).splice(n, 1)[0];
				if (r instanceof Comment)
					for (var o = c(r); o.length > 0; )
						e(r, 0);
				var i = r;
				i.parentNode.removeChild(i)
			},
			t.getLogicalParent = u,
			t.getLogicalSiblingEnd = function (e) {
				return e[i] || null
			},
			t.getLogicalChild = function (e, t) {
				return c(e)[t]
			},
			t.isSvgElement = function (e) {
				return "http://www.w3.org/2000/svg" === function (e) {
					if (e instanceof Element)
						return e;
					if (e instanceof Comment)
						return e.parentNode;
					throw new Error("Not a valid logical element")
				}
				(e).namespaceURI
			},
			t.getLogicalChildrenArray = c
		}, function (e, t, n) {
			"use strict";
			var r = n(18),
			o = Object.keys || function (e) {
				var t = [];
				for (var n in e)
					t.push(n);
				return t
			};
			e.exports = f;
			var i = n(15);
			i.inherits = n(7);
			var a = n(33),
			s = n(37);
			i.inherits(f, a);
			for (var u = o(s.prototype), c = 0; c < u.length; c++) {
				var l = u[c];
				f.prototype[l] || (f.prototype[l] = s.prototype[l])
			}
			function f(e) {
				if (!(this instanceof f))
					return new f(e);
				a.call(this, e),
				s.call(this, e),
				e && !1 === e.readable && (this.readable = !1),
				e && !1 === e.writable && (this.writable = !1),
				this.allowHalfOpen = !0,
				e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
				this.once("end", h)
			}
			function h() {
				this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this)
			}
			function p(e) {
				e.end()
			}
			Object.defineProperty(f.prototype, "writableHighWaterMark", {
				enumerable: !1,
				get: function () {
					return this._writableState.highWaterMark
				}
			}),
			Object.defineProperty(f.prototype, "destroyed", {
				get: function () {
					return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
				},
				set: function (e) {
					void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
				}
			}),
			f.prototype._destroy = function (e, t) {
				this.push(null),
				this.end(),
				r.nextTick(t, e)
			}
		}, function (e, t, n) {
			"use strict";
			(function (e) {
				/*!
				 * The buffer module from node.js, for the browser.
				 *
				 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
				 * @license  MIT
				 */
				var r = n(47),
				o = n(48),
				i = n(31);
				function a() {
					return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
				}
				function s(e, t) {
					if (a() < t)
						throw new RangeError("Invalid typed array length");
					return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t),
					e
				}
				function u(e, t, n) {
					if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
						return new u(e, t, n);
					if ("number" == typeof e) {
						if ("string" == typeof t)
							throw new Error("If encoding is specified then the first argument must be a string");
						return f(this, e)
					}
					return c(this, e, t, n)
				}
				function c(e, t, n, r) {
					if ("number" == typeof t)
						throw new TypeError('"value" argument must not be a number');
					return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
						if (t.byteLength, n < 0 || t.byteLength < n)
							throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (r || 0))
							throw new RangeError("'length' is out of bounds");
						t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
						u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = h(e, t);
						return e
					}
					(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
						"string" == typeof n && "" !== n || (n = "utf8");
						if (!u.isEncoding(n))
							throw new TypeError('"encoding" must be a valid string encoding');
						var r = 0 | d(t, n),
						o = (e = s(e, r)).write(t, n);
						o !== r && (e = e.slice(0, o));
						return e
					}
					(e, t, n) : function (e, t) {
						if (u.isBuffer(t)) {
							var n = 0 | p(t.length);
							return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t)
								return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : h(e, t);
							if ("Buffer" === t.type && i(t.data))
								return h(e, t.data)
						}
						var r;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}
					(e, t)
				}
				function l(e) {
					if ("number" != typeof e)
						throw new TypeError('"size" argument must be a number');
					if (e < 0)
						throw new RangeError('"size" argument must not be negative')
				}
				function f(e, t) {
					if (l(t), e = s(e, t < 0 ? 0 : 0 | p(t)), !u.TYPED_ARRAY_SUPPORT)
						for (var n = 0; n < t; ++n)
							e[n] = 0;
					return e
				}
				function h(e, t) {
					var n = t.length < 0 ? 0 : 0 | p(t.length);
					e = s(e, n);
					for (var r = 0; r < n; r += 1)
						e[r] = 255 & t[r];
					return e
				}
				function p(e) {
					if (e >= a())
						throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
					return 0 | e
				}
				function d(e, t) {
					if (u.isBuffer(e))
						return e.length;
					if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
						return e.byteLength;
					"string" != typeof e && (e = "" + e);
					var n = e.length;
					if (0 === n)
						return 0;
					for (var r = !1; ; )
						switch (t) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
						case void 0:
							return F(e).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return H(e).length;
						default:
							if (r)
								return F(e).length;
							t = ("" + t).toLowerCase(),
							r = !0
						}
				}
				function g(e, t, n) {
					var r = e[t];
					e[t] = e[n],
					e[n] = r
				}
				function y(e, t, n, r, o) {
					if (0 === e.length)
						return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
						if (o)
							return -1;
						n = e.length - 1
					} else if (n < 0) {
						if (!o)
							return -1;
						n = 0
					}
					if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t))
						return 0 === t.length ? -1 : v(e, t, n, r, o);
					if ("number" == typeof t)
						return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, o);
					throw new TypeError("val must be string, number or Buffer")
				}
				function v(e, t, n, r, o) {
					var i,
					a = 1,
					s = e.length,
					u = t.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (e.length < 2 || t.length < 2)
							return -1;
						a = 2,
						s /= 2,
						u /= 2,
						n /= 2
					}
					function c(e, t) {
						return 1 === a ? e[t] : e.readUInt16BE(t * a)
					}
					if (o) {
						var l = -1;
						for (i = n; i < s; i++)
							if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
								if (-1 === l && (l = i), i - l + 1 === u)
									return l * a
							} else  - 1 !== l && (i -= i - l), l = -1
					} else
						for (n + u > s && (n = s - u), i = n; i >= 0; i--) {
							for (var f = !0, h = 0; h < u; h++)
								if (c(e, i + h) !== c(t, h)) {
									f = !1;
									break
								}
							if (f)
								return i
						}
					return -1
				}
				function b(e, t, n, r) {
					n = Number(n) || 0;
					var o = e.length - n;
					r ? (r = Number(r)) > o && (r = o) : r = o;
					var i = t.length;
					if (i % 2 != 0)
						throw new TypeError("Invalid hex string");
					r > i / 2 && (r = i / 2);
					for (var a = 0; a < r; ++a) {
						var s = parseInt(t.substr(2 * a, 2), 16);
						if (isNaN(s))
							return a;
						e[n + a] = s
					}
					return a
				}
				function m(e, t, n, r) {
					return q(F(t, e.length - n), e, n, r)
				}
				function w(e, t, n, r) {
					return q(function (e) {
						for (var t = [], n = 0; n < e.length; ++n)
							t.push(255 & e.charCodeAt(n));
						return t
					}
						(t), e, n, r)
				}
				function E(e, t, n, r) {
					return w(e, t, n, r)
				}
				function S(e, t, n, r) {
					return q(H(t), e, n, r)
				}
				function _(e, t, n, r) {
					return q(function (e, t) {
						for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
							n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
						return i
					}
						(t, e.length - n), e, n, r)
				}
				function T(e, t, n) {
					return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
				}
				function k(e, t, n) {
					n = Math.min(e.length, n);
					for (var r = [], o = t; o < n; ) {
						var i,
						a,
						s,
						u,
						c = e[o],
						l = null,
						f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
						if (o + f <= n)
							switch (f) {
							case 1:
								c < 128 && (l = c);
								break;
							case 2:
								128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
								break;
							case 3:
								i = e[o + 1],
								a = e[o + 2],
								128 == (192 & i) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
								break;
							case 4:
								i = e[o + 1],
								a = e[o + 2],
								s = e[o + 3],
								128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
							}
						null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l),
						r.push(l),
						o += f
					}
					return function (e) {
						var t = e.length;
						if (t <= C)
							return String.fromCharCode.apply(String, e);
						var n = "",
						r = 0;
						for (; r < t; )
							n += String.fromCharCode.apply(String, e.slice(r, r += C));
						return n
					}
					(r)
				}
				t.Buffer = u,
				t.SlowBuffer = function (e) {
					+e != e && (e = 0);
					return u.alloc(+e)
				},
				t.INSPECT_MAX_BYTES = 50,
				u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
					try {
						var e = new Uint8Array(1);
						return e.__proto__ = {
							__proto__: Uint8Array.prototype,
							foo: function () {
								return 42
							}
						},
						42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
					} catch (e) {
						return !1
					}
				}
				(),
				t.kMaxLength = a(),
				u.poolSize = 8192,
				u._augment = function (e) {
					return e.__proto__ = u.prototype,
					e
				},
				u.from = function (e, t, n) {
					return c(null, e, t, n)
				},
				u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
						value: null,
						configurable: !0
					})),
				u.alloc = function (e, t, n) {
					return function (e, t, n, r) {
						return l(t),
						t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
					}
					(null, e, t, n)
				},
				u.allocUnsafe = function (e) {
					return f(null, e)
				},
				u.allocUnsafeSlow = function (e) {
					return f(null, e)
				},
				u.isBuffer = function (e) {
					return !(null == e || !e._isBuffer)
				},
				u.compare = function (e, t) {
					if (!u.isBuffer(e) || !u.isBuffer(t))
						throw new TypeError("Arguments must be Buffers");
					if (e === t)
						return 0;
					for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
						if (e[o] !== t[o]) {
							n = e[o],
							r = t[o];
							break
						}
					return n < r ? -1 : r < n ? 1 : 0
				},
				u.isEncoding = function (e) {
					switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
					}
				},
				u.concat = function (e, t) {
					if (!i(e))
						throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === e.length)
						return u.alloc(0);
					var n;
					if (void 0 === t)
						for (t = 0, n = 0; n < e.length; ++n)
							t += e[n].length;
					var r = u.allocUnsafe(t),
					o = 0;
					for (n = 0; n < e.length; ++n) {
						var a = e[n];
						if (!u.isBuffer(a))
							throw new TypeError('"list" argument must be an Array of Buffers');
						a.copy(r, o),
						o += a.length
					}
					return r
				},
				u.byteLength = d,
				u.prototype._isBuffer = !0,
				u.prototype.swap16 = function () {
					var e = this.length;
					if (e % 2 != 0)
						throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var t = 0; t < e; t += 2)
						g(this, t, t + 1);
					return this
				},
				u.prototype.swap32 = function () {
					var e = this.length;
					if (e % 4 != 0)
						throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var t = 0; t < e; t += 4)
						g(this, t, t + 3), g(this, t + 1, t + 2);
					return this
				},
				u.prototype.swap64 = function () {
					var e = this.length;
					if (e % 8 != 0)
						throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var t = 0; t < e; t += 8)
						g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
					return this
				},
				u.prototype.toString = function () {
					var e = 0 | this.length;
					return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : function (e, t, n) {
						var r = !1;
						if ((void 0 === t || t < 0) && (t = 0), t > this.length)
							return "";
						if ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
							return "";
						if ((n >>>= 0) <= (t >>>= 0))
							return "";
						for (e || (e = "utf8"); ; )
							switch (e) {
							case "hex":
								return R(this, t, n);
							case "utf8":
							case "utf-8":
								return k(this, t, n);
							case "ascii":
								return I(this, t, n);
							case "latin1":
							case "binary":
								return x(this, t, n);
							case "base64":
								return T(this, t, n);
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return O(this, t, n);
							default:
								if (r)
									throw new TypeError("Unknown encoding: " + e);
								e = (e + "").toLowerCase(),
								r = !0
							}
					}
					.apply(this, arguments)
				},
				u.prototype.equals = function (e) {
					if (!u.isBuffer(e))
						throw new TypeError("Argument must be a Buffer");
					return this === e || 0 === u.compare(this, e)
				},
				u.prototype.inspect = function () {
					var e = "",
					n = t.INSPECT_MAX_BYTES;
					return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")),
					"<Buffer " + e + ">"
				},
				u.prototype.compare = function (e, t, n, r, o) {
					if (!u.isBuffer(e))
						throw new TypeError("Argument must be a Buffer");
					if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length)
						throw new RangeError("out of range index");
					if (r >= o && t >= n)
						return 0;
					if (r >= o)
						return -1;
					if (t >= n)
						return 1;
					if (this === e)
						return 0;
					for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), c = this.slice(r, o), l = e.slice(t, n), f = 0; f < s; ++f)
						if (c[f] !== l[f]) {
							i = c[f],
							a = l[f];
							break
						}
					return i < a ? -1 : a < i ? 1 : 0
				},
				u.prototype.includes = function (e, t, n) {
					return -1 !== this.indexOf(e, t, n)
				},
				u.prototype.indexOf = function (e, t, n) {
					return y(this, e, t, n, !0)
				},
				u.prototype.lastIndexOf = function (e, t, n) {
					return y(this, e, t, n, !1)
				},
				u.prototype.write = function (e, t, n, r) {
					if (void 0 === t)
						r = "utf8", n = this.length, t = 0;
					else if (void 0 === n && "string" == typeof t)
						r = t, n = this.length, t = 0;
					else {
						if (!isFinite(t))
							throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						t |= 0,
						isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					var o = this.length - t;
					if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length)
						throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for (var i = !1; ; )
						switch (r) {
						case "hex":
							return b(this, e, t, n);
						case "utf8":
						case "utf-8":
							return m(this, e, t, n);
						case "ascii":
							return w(this, e, t, n);
						case "latin1":
						case "binary":
							return E(this, e, t, n);
						case "base64":
							return S(this, e, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return _(this, e, t, n);
						default:
							if (i)
								throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(),
							i = !0
						}
				},
				u.prototype.toJSON = function () {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
				var C = 4096;
				function I(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var o = t; o < n; ++o)
						r += String.fromCharCode(127 & e[o]);
					return r
				}
				function x(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var o = t; o < n; ++o)
						r += String.fromCharCode(e[o]);
					return r
				}
				function R(e, t, n) {
					var r = e.length;
					(!t || t < 0) && (t = 0),
					(!n || n < 0 || n > r) && (n = r);
					for (var o = "", i = t; i < n; ++i)
						o += j(e[i]);
					return o
				}
				function O(e, t, n) {
					for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
						o += String.fromCharCode(r[i] + 256 * r[i + 1]);
					return o
				}
				function P(e, t, n) {
					if (e % 1 != 0 || e < 0)
						throw new RangeError("offset is not uint");
					if (e + t > n)
						throw new RangeError("Trying to access beyond buffer length")
				}
				function M(e, t, n, r, o, i) {
					if (!u.isBuffer(e))
						throw new TypeError('"buffer" argument must be a Buffer instance');
					if (t > o || t < i)
						throw new RangeError('"value" argument is out of bounds');
					if (n + r > e.length)
						throw new RangeError("Index out of range")
				}
				function L(e, t, n, r) {
					t < 0 && (t = 65535 + t + 1);
					for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
						e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
				}
				function A(e, t, n, r) {
					t < 0 && (t = 4294967295 + t + 1);
					for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
						e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
				}
				function B(e, t, n, r, o, i) {
					if (n + r > e.length)
						throw new RangeError("Index out of range");
					if (n < 0)
						throw new RangeError("Index out of range")
				}
				function D(e, t, n, r, i) {
					return i || B(e, 0, n, 4),
					o.write(e, t, n, r, 23, 4),
					n + 4
				}
				function U(e, t, n, r, i) {
					return i || B(e, 0, n, 8),
					o.write(e, t, n, r, 52, 8),
					n + 8
				}
				u.prototype.slice = function (e, t) {
					var n,
					r = this.length;
					if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)
						(n = this.subarray(e, t)).__proto__ = u.prototype;
					else {
						var o = t - e;
						n = new u(o, void 0);
						for (var i = 0; i < o; ++i)
							n[i] = this[i + e]
					}
					return n
				},
				u.prototype.readUIntLE = function (e, t, n) {
					e |= 0,
					t |= 0,
					n || P(e, t, this.length);
					for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
						r += this[e + i] * o;
					return r
				},
				u.prototype.readUIntBE = function (e, t, n) {
					e |= 0,
					t |= 0,
					n || P(e, t, this.length);
					for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
						r += this[e + --t] * o;
					return r
				},
				u.prototype.readUInt8 = function (e, t) {
					return t || P(e, 1, this.length),
					this[e]
				},
				u.prototype.readUInt16LE = function (e, t) {
					return t || P(e, 2, this.length),
					this[e] | this[e + 1] << 8
				},
				u.prototype.readUInt16BE = function (e, t) {
					return t || P(e, 2, this.length),
					this[e] << 8 | this[e + 1]
				},
				u.prototype.readUInt32LE = function (e, t) {
					return t || P(e, 4, this.length),
					(this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
				},
				u.prototype.readUInt32BE = function (e, t) {
					return t || P(e, 4, this.length),
					16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
				},
				u.prototype.readIntLE = function (e, t, n) {
					e |= 0,
					t |= 0,
					n || P(e, t, this.length);
					for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
						r += this[e + i] * o;
					return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)),
					r
				},
				u.prototype.readIntBE = function (e, t, n) {
					e |= 0,
					t |= 0,
					n || P(e, t, this.length);
					for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
						i += this[e + --r] * o;
					return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)),
					i
				},
				u.prototype.readInt8 = function (e, t) {
					return t || P(e, 1, this.length),
					128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
				},
				u.prototype.readInt16LE = function (e, t) {
					t || P(e, 2, this.length);
					var n = this[e] | this[e + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				},
				u.prototype.readInt16BE = function (e, t) {
					t || P(e, 2, this.length);
					var n = this[e + 1] | this[e] << 8;
					return 32768 & n ? 4294901760 | n : n
				},
				u.prototype.readInt32LE = function (e, t) {
					return t || P(e, 4, this.length),
					this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
				},
				u.prototype.readInt32BE = function (e, t) {
					return t || P(e, 4, this.length),
					this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
				},
				u.prototype.readFloatLE = function (e, t) {
					return t || P(e, 4, this.length),
					o.read(this, e, !0, 23, 4)
				},
				u.prototype.readFloatBE = function (e, t) {
					return t || P(e, 4, this.length),
					o.read(this, e, !1, 23, 4)
				},
				u.prototype.readDoubleLE = function (e, t) {
					return t || P(e, 8, this.length),
					o.read(this, e, !0, 52, 8)
				},
				u.prototype.readDoubleBE = function (e, t) {
					return t || P(e, 8, this.length),
					o.read(this, e, !1, 52, 8)
				},
				u.prototype.writeUIntLE = function (e, t, n, r) {
					(e = +e, t |= 0, n |= 0, r) || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var o = 1,
					i = 0;
					for (this[t] = 255 & e; ++i < n && (o *= 256); )
						this[t + i] = e / o & 255;
					return t + n
				},
				u.prototype.writeUIntBE = function (e, t, n, r) {
					(e = +e, t |= 0, n |= 0, r) || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var o = n - 1,
					i = 1;
					for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
						this[t + o] = e / i & 255;
					return t + n
				},
				u.prototype.writeUInt8 = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 1, 255, 0),
					u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
					this[t] = 255 & e,
					t + 1
				},
				u.prototype.writeUInt16LE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 2, 65535, 0),
					u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0),
					t + 2
				},
				u.prototype.writeUInt16BE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 2, 65535, 0),
					u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1),
					t + 2
				},
				u.prototype.writeUInt32LE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 4, 4294967295, 0),
					u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : A(this, e, t, !0),
					t + 4
				},
				u.prototype.writeUInt32BE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 4, 4294967295, 0),
					u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : A(this, e, t, !1),
					t + 4
				},
				u.prototype.writeIntLE = function (e, t, n, r) {
					if (e = +e, t |= 0, !r) {
						var o = Math.pow(2, 8 * n - 1);
						M(this, e, t, n, o - 1, -o)
					}
					var i = 0,
					a = 1,
					s = 0;
					for (this[t] = 255 & e; ++i < n && (a *= 256); )
						e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
					return t + n
				},
				u.prototype.writeIntBE = function (e, t, n, r) {
					if (e = +e, t |= 0, !r) {
						var o = Math.pow(2, 8 * n - 1);
						M(this, e, t, n, o - 1, -o)
					}
					var i = n - 1,
					a = 1,
					s = 0;
					for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
						e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
					return t + n
				},
				u.prototype.writeInt8 = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 1, 127, -128),
					u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
					e < 0 && (e = 255 + e + 1),
					this[t] = 255 & e,
					t + 1
				},
				u.prototype.writeInt16LE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 2, 32767, -32768),
					u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0),
					t + 2
				},
				u.prototype.writeInt16BE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 2, 32767, -32768),
					u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1),
					t + 2
				},
				u.prototype.writeInt32LE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 4, 2147483647, -2147483648),
					u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : A(this, e, t, !0),
					t + 4
				},
				u.prototype.writeInt32BE = function (e, t, n) {
					return e = +e,
					t |= 0,
					n || M(this, e, t, 4, 2147483647, -2147483648),
					e < 0 && (e = 4294967295 + e + 1),
					u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : A(this, e, t, !1),
					t + 4
				},
				u.prototype.writeFloatLE = function (e, t, n) {
					return D(this, e, t, !0, n)
				},
				u.prototype.writeFloatBE = function (e, t, n) {
					return D(this, e, t, !1, n)
				},
				u.prototype.writeDoubleLE = function (e, t, n) {
					return U(this, e, t, !0, n)
				},
				u.prototype.writeDoubleBE = function (e, t, n) {
					return U(this, e, t, !1, n)
				},
				u.prototype.copy = function (e, t, n, r) {
					if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n)
						return 0;
					if (0 === e.length || 0 === this.length)
						return 0;
					if (t < 0)
						throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length)
						throw new RangeError("sourceStart out of bounds");
					if (r < 0)
						throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length),
					e.length - t < r - n && (r = e.length - t + n);
					var o,
					i = r - n;
					if (this === e && n < t && t < r)
						for (o = i - 1; o >= 0; --o)
							e[o + t] = this[o + n];
					else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
						for (o = 0; o < i; ++o)
							e[o + t] = this[o + n];
					else
						Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
					return i
				},
				u.prototype.fill = function (e, t, n, r) {
					if ("string" == typeof e) {
						if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
							var o = e.charCodeAt(0);
							o < 256 && (e = o)
						}
						if (void 0 !== r && "string" != typeof r)
							throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !u.isEncoding(r))
							throw new TypeError("Unknown encoding: " + r)
					} else
						"number" == typeof e && (e &= 255);
					if (t < 0 || this.length < t || this.length < n)
						throw new RangeError("Out of range index");
					if (n <= t)
						return this;
					var i;
					if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
						for (i = t; i < n; ++i)
							this[i] = e;
					else {
						var a = u.isBuffer(e) ? e : F(new u(e, r).toString()),
						s = a.length;
						for (i = 0; i < n - t; ++i)
							this[i + t] = a[i % s]
					}
					return this
				};
				var N = /[^+\/0-9A-Za-z-_]/g;
				function j(e) {
					return e < 16 ? "0" + e.toString(16) : e.toString(16)
				}
				function F(e, t) {
					var n;
					t = t || 1 / 0;
					for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
						if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
							if (!o) {
								if (n > 56319) {
									(t -= 3) > -1 && i.push(239, 191, 189);
									continue
								}
								if (a + 1 === r) {
									(t -= 3) > -1 && i.push(239, 191, 189);
									continue
								}
								o = n;
								continue
							}
							if (n < 56320) {
								(t -= 3) > -1 && i.push(239, 191, 189),
								o = n;
								continue
							}
							n = 65536 + (o - 55296 << 10 | n - 56320)
						} else
							o && (t -= 3) > -1 && i.push(239, 191, 189);
						if (o = null, n < 128) {
							if ((t -= 1) < 0)
								break;
							i.push(n)
						} else if (n < 2048) {
							if ((t -= 2) < 0)
								break;
							i.push(n >> 6 | 192, 63 & n | 128)
						} else if (n < 65536) {
							if ((t -= 3) < 0)
								break;
							i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if (!(n < 1114112))
								throw new Error("Invalid code point");
							if ((t -= 4) < 0)
								break;
							i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return i
				}
				function H(e) {
					return r.toByteArray(function (e) {
						if ((e = function (e) {
								return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
							}
								(e).replace(N, "")).length < 2)
							return "";
						for (; e.length % 4 != 0; )
							e += "=";
						return e
					}
						(e))
				}
				function q(e, t, n, r) {
					for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
						t[o + n] = e[o];
					return o
				}
			}).call(this, n(5))
		}, function (e, t, n) {
			"use strict";
			var r;
			!function (e) {
				window.DotNet = e;
				var t = [],
				n = {},
				r = {},
				o = 1,
				i = null;
				function a(e) {
					t.push(e)
				}
				function s(e, t) {
					for (var n = [], r = 2; r < arguments.length; r++)
						n[r - 2] = arguments[r];
					return c(e, t, null, n)
				}
				function u(e, t, n, r) {
					var o = l();
					if (o.invokeDotNetFromJS) {
						var i = JSON.stringify(r, v),
						a = o.invokeDotNetFromJS(e, t, n, i);
						return a ? h(a) : null
					}
					throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.")
				}
				function c(e, t, r, i) {
					var a = o++,
					s = new Promise(function (e, t) {
							n[a] = {
								resolve: e,
								reject: t
							}
						});
					try {
						var u = JSON.stringify(i, v);
						l().beginInvokeDotNetFromJS(a, e, t, r, u)
					} catch (e) {
						f(a, !1, e)
					}
					return s
				}
				function l() {
					if (null !== i)
						return i;
					throw new Error("No .NET call dispatcher has been set.")
				}
				function f(e, t, r) {
					if (!n.hasOwnProperty(e))
						throw new Error("There is no pending async call with ID " + e + ".");
					var o = n[e];
					delete n[e],
					t ? o.resolve(r) : o.reject(r)
				}
				function h(e) {
					return e ? JSON.parse(e, function (e, n) {
						return t.reduce(function (t, n) {
							return n(e, t)
						}, n)
					}) : null
				}
				function p(e) {
					return e instanceof Error ? e.message + "\n" + e.stack : e ? e.toString() : "null"
				}
				function d(e) {
					if (r.hasOwnProperty(e))
						return r[e];
					var t = window,
					n = "window";
					if (e.split(".").forEach(function (e) {
							if (!(e in t))
								throw new Error("Could not find '" + e + "' in '" + n + "'.");
								t = t[e],
								n += "." + e
							}), t instanceof Function)return t;
					throw new Error("The value '" + n + "' is not a function.")
				}
				e.attachDispatcher = function (e) {
					i = e
				},
				e.attachReviver = a,
				e.invokeMethod = function (e, t) {
					for (var n = [], r = 2; r < arguments.length; r++)
						n[r - 2] = arguments[r];
					return u(e, t, null, n)
				},
				e.invokeMethodAsync = s,
				e.jsCallDispatcher = {
					findJSFunction: d,
					invokeJSFromDotNet: function (e, t) {
						var n = d(e).apply(null, h(t));
						return null == n ? null : JSON.stringify(n, v)
					},
					beginInvokeJSFromDotNet: function (e, t, n) {
						var r = new Promise(function (e) {
								e(d(t).apply(null, h(n)))
							});
						e && r.then(function (t) {
							return l().beginInvokeDotNetFromJS(0, "Microsoft.JSInterop", "DotNetDispatcher.EndInvoke", null, JSON.stringify([e, !0, t], v))
						}, function (t) {
							return l().beginInvokeDotNetFromJS(0, "Microsoft.JSInterop", "DotNetDispatcher.EndInvoke", null, JSON.stringify([e, !1, p(t)]))
						})
					},
					endInvokeDotNetFromJS: function (e, t, n) {
						var r = t ? n : new Error(n);
						f(parseInt(e), t, r)
					}
				};
				var g = function () {
					function e(e) {
						this._id = e
					}
					return e.prototype.invokeMethod = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n];
						return u(null, e, this._id, t)
					},
					e.prototype.invokeMethodAsync = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n];
						return c(null, e, this._id, t)
					},
					e.prototype.dispose = function () {
						s("Microsoft.JSInterop", "DotNetDispatcher.ReleaseDotNetObject", this._id).catch(function (e) {
							return console.error(e)
						})
					},
					e.prototype.serializeAsArg = function () {
						return "__dotNetObject:" + this._id
					},
					e
				}
				(),
				y = /^__dotNetObject\:(\d+)$/;
				function v(e, t) {
					return t instanceof g ? t.serializeAsArg() : t
				}
				a(function (e, t) {
					if ("string" == typeof t) {
						var n = t.match(y);
						if (n)
							return new g(parseInt(n[1]))
					}
					return t
				})
			}
			(r || (r = {}))
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.setPlatform = function (e) {
				return t.platform = e,
				t.platform
			}
		}, function (e, t) {
			var n,
			r,
			o = e.exports = {};
			function i() {
				throw new Error("setTimeout has not been defined")
			}
			function a() {
				throw new Error("clearTimeout has not been defined")
			}
			function s(e) {
				if (n === setTimeout)
					return setTimeout(e, 0);
				if ((n === i || !n) && setTimeout)
					return n = setTimeout, setTimeout(e, 0);
				try {
					return n(e, 0)
				} catch (t) {
					try {
						return n.call(null, e, 0)
					} catch (t) {
						return n.call(this, e, 0)
					}
				}
			}
			!function () {
				try {
					n = "function" == typeof setTimeout ? setTimeout : i
				} catch (e) {
					n = i
				}
				try {
					r = "function" == typeof clearTimeout ? clearTimeout : a
				} catch (e) {
					r = a
				}
			}
			();
			var u,
			c = [],
			l = !1,
			f = -1;
			function h() {
				l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
			}
			function p() {
				if (!l) {
					var e = s(h);
					l = !0;
					for (var t = c.length; t; ) {
						for (u = c, c = []; ++f < t; )
							u && u[f].run();
						f = -1,
						t = c.length
					}
					u = null,
					l = !1,
					function (e) {
						if (r === clearTimeout)
							return clearTimeout(e);
						if ((r === a || !r) && clearTimeout)
							return r = clearTimeout, clearTimeout(e);
						try {
							r(e)
						} catch (t) {
							try {
								return r.call(null, e)
							} catch (t) {
								return r.call(this, e)
							}
						}
					}
					(e)
				}
			}
			function d(e, t) {
				this.fun = e,
				this.array = t
			}
			function g() {}
			o.nextTick = function (e) {
				var t = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var n = 1; n < arguments.length; n++)
						t[n - 1] = arguments[n];
				c.push(new d(e, t)),
				1 !== c.length || l || s(p)
			},
			d.prototype.run = function () {
				this.fun.apply(null, this.array)
			},
			o.title = "browser",
			o.browser = !0,
			o.env = {},
			o.argv = [],
			o.version = "",
			o.versions = {},
			o.on = g,
			o.addListener = g,
			o.once = g,
			o.off = g,
			o.removeListener = g,
			o.removeAllListeners = g,
			o.emit = g,
			o.prependListener = g,
			o.prependOnceListener = g,
			o.listeners = function (e) {
				return []
			},
			o.binding = function (e) {
				throw new Error("process.binding is not supported")
			},
			o.cwd = function () {
				return "/"
			},
			o.chdir = function (e) {
				throw new Error("process.chdir is not supported")
			},
			o.umask = function () {
				return 0
			}
		}, function (e, t, n) {
			(function (e) {
				function n(e) {
					return Object.prototype.toString.call(e)
				}
				t.isArray = function (e) {
					return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e)
				},
				t.isBoolean = function (e) {
					return "boolean" == typeof e
				},
				t.isNull = function (e) {
					return null === e
				},
				t.isNullOrUndefined = function (e) {
					return null == e
				},
				t.isNumber = function (e) {
					return "number" == typeof e
				},
				t.isString = function (e) {
					return "string" == typeof e
				},
				t.isSymbol = function (e) {
					return "symbol" == typeof e
				},
				t.isUndefined = function (e) {
					return void 0 === e
				},
				t.isRegExp = function (e) {
					return "[object RegExp]" === n(e)
				},
				t.isObject = function (e) {
					return "object" == typeof e && null !== e
				},
				t.isDate = function (e) {
					return "[object Date]" === n(e)
				},
				t.isError = function (e) {
					return "[object Error]" === n(e) || e instanceof Error
				},
				t.isFunction = function (e) {
					return "function" == typeof e
				},
				t.isPrimitive = function (e) {
					return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
				},
				t.isBuffer = e.isBuffer
			}).call(this, n(11).Buffer)
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			n(12);
			var i,
			a = !1,
			s = null;
			function u(e, t) {
				var n = f(e);
				!t && h(n) ? c(n) : location.href = e
			}
			function c(e) {
				history.pushState(null, "", e),
				l()
			}
			function l() {
				return r(this, void 0, void 0, function () {
					return o(this, function (e) {
						switch (e.label) {
						case 0:
							return s ? [4, DotNet.invokeMethodAsync(s.assemblyName, s.functionName, location.href)] : [3, 2];
						case 1:
							e.sent(),
							e.label = 2;
						case 2:
							return [2]
						}
					})
				})
			}
			function f(e) {
				return (i = i || document.createElement("a")).href = e,
				i.href
			}
			function h(e) {
				var t,
				n = (t = document.baseURI).substr(0, t.lastIndexOf("/") + 1);
				return e.startsWith(n)
			}
			t.internalFunctions = {
				enableNavigationInterception: function (e, t) {
					if (a || void 0 === e || void 0 === t)
						return;
					s = {
						assemblyName: e,
						functionName: t
					},
					a = !0,
					document.addEventListener("click", function (e) {
						var t = function e(t, n) {
							return t ? t.tagName === n ? t : e(t.parentElement, n) : null
						}
						(e.target, "A");
						if (t && t.hasAttribute("href") && 0 === e.button) {
							var n = t.getAttribute("href"),
							r = f(n),
							o = t.getAttribute("target"),
							i = !o || "_self" === o;
							h(r) && !function (e) {
								return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
							}
							(e) && i && (e.preventDefault(), c(r))
						}
					}),
					window.addEventListener("popstate", l)
				},
				navigateTo: u,
				getBaseURI: function () {
					return document.baseURI
				},
				getLocationHref: function () {
					return location.href
				}
			},
			t.navigateTo = u
		}, function (e, t, n) {
			"use strict";
			var r = n(32).Duplex,
			o = n(30),
			i = n(6).Buffer;
			function a(e) {
				if (!(this instanceof a))
					return new a(e);
				if (this._bufs = [], this.length = 0, "function" == typeof e) {
					this._callback = e;
					var t = function (e) {
						this._callback && (this._callback(e), this._callback = null)
					}
					.bind(this);
					this.on("pipe", function (e) {
						e.on("error", t)
					}),
					this.on("unpipe", function (e) {
						e.removeListener("error", t)
					})
				} else
					this.append(e);
				r.call(this)
			}
			o.inherits(a, r),
			a.prototype._offset = function (e) {
				var t,
				n = 0,
				r = 0;
				if (0 === e)
					return [0, 0];
				for (; r < this._bufs.length; r++) {
					if (e < (t = n + this._bufs[r].length) || r == this._bufs.length - 1)
						return [r, e - n];
					n = t
				}
			},
			a.prototype._reverseOffset = function (e) {
				for (var t = e[0], n = e[1], r = 0; r < t; r++)
					n += this._bufs[r].length;
				return n
			},
			a.prototype.append = function (e) {
				var t = 0;
				if (i.isBuffer(e))
					this._appendBuffer(e);
				else if (Array.isArray(e))
					for (; t < e.length; t++)
						this.append(e[t]);
				else if (e instanceof a)
					for (; t < e._bufs.length; t++)
						this.append(e._bufs[t]);
				else
					null != e && ("number" == typeof e && (e = e.toString()), this._appendBuffer(i.from(e)));
				return this
			},
			a.prototype._appendBuffer = function (e) {
				this._bufs.push(e),
				this.length += e.length
			},
			a.prototype._write = function (e, t, n) {
				this._appendBuffer(e),
				"function" == typeof n && n()
			},
			a.prototype._read = function (e) {
				if (!this.length)
					return this.push(null);
				e = Math.min(e, this.length),
				this.push(this.slice(0, e)),
				this.consume(e)
			},
			a.prototype.end = function (e) {
				r.prototype.end.call(this, e),
				this._callback && (this._callback(null, this.slice()), this._callback = null)
			},
			a.prototype.get = function (e) {
				if (!(e > this.length || e < 0)) {
					var t = this._offset(e);
					return this._bufs[t[0]][t[1]]
				}
			},
			a.prototype.slice = function (e, t) {
				return "number" == typeof e && e < 0 && (e += this.length),
				"number" == typeof t && t < 0 && (t += this.length),
				this.copy(null, 0, e, t)
			},
			a.prototype.copy = function (e, t, n, r) {
				if (("number" != typeof n || n < 0) && (n = 0), ("number" != typeof r || r > this.length) && (r = this.length), n >= this.length)
					return e || i.alloc(0);
				if (r <= 0)
					return e || i.alloc(0);
				var o,
				a,
				s = !!e,
				u = this._offset(n),
				c = r - n,
				l = c,
				f = s && t || 0,
				h = u[1];
				if (0 === n && r == this.length) {
					if (!s)
						return 1 === this._bufs.length ? this._bufs[0] : i.concat(this._bufs, this.length);
					for (a = 0; a < this._bufs.length; a++)
						this._bufs[a].copy(e, f), f += this._bufs[a].length;
					return e
				}
				if (l <= this._bufs[u[0]].length - h)
					return s ? this._bufs[u[0]].copy(e, t, h, h + l) : this._bufs[u[0]].slice(h, h + l);
				for (s || (e = i.allocUnsafe(c)), a = u[0]; a < this._bufs.length; a++) {
					if (!(l > (o = this._bufs[a].length - h))) {
						this._bufs[a].copy(e, f, h, h + l);
						break
					}
					this._bufs[a].copy(e, f, h),
					f += o,
					l -= o,
					h && (h = 0)
				}
				return e
			},
			a.prototype.shallowSlice = function (e, t) {
				if (e = e || 0, t = "number" != typeof t ? this.length : t, e < 0 && (e += this.length), t < 0 && (t += this.length), e === t)
					return new a;
				var n = this._offset(e),
				r = this._offset(t),
				o = this._bufs.slice(n[0], r[0] + 1);
				return 0 == r[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, r[1]),
				0 != n[1] && (o[0] = o[0].slice(n[1])),
				new a(o)
			},
			a.prototype.toString = function (e, t, n) {
				return this.slice(t, n).toString(e)
			},
			a.prototype.consume = function (e) {
				for (; this._bufs.length; ) {
					if (!(e >= this._bufs[0].length)) {
						this._bufs[0] = this._bufs[0].slice(e),
						this.length -= e;
						break
					}
					e -= this._bufs[0].length,
					this.length -= this._bufs[0].length,
					this._bufs.shift()
				}
				return this
			},
			a.prototype.duplicate = function () {
				for (var e = 0, t = new a; e < this._bufs.length; e++)
					t.append(this._bufs[e]);
				return t
			},
			a.prototype.destroy = function () {
				this._bufs.length = 0,
				this.length = 0,
				this.push(null)
			},
			a.prototype.indexOf = function (e, t, n) {
				if (void 0 === n && "string" == typeof t && (n = t, t = void 0), "function" == typeof e || Array.isArray(e))
					throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
				if ("number" == typeof e ? e = i.from([e]) : "string" == typeof e ? e = i.from(e, n) : e instanceof a ? e = e.slice() : i.isBuffer(e) || (e = i.from(e)), t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 0 === e.length)
					return t > this.length ? this.length : t;
				for (var r = this._offset(t), o = r[0], s = r[1]; o < this._bufs.length; o++) {
					for (var u = this._bufs[o]; s < u.length; ) {
						if (u.length - s >= e.length) {
							var c = u.indexOf(e, s);
							if (-1 !== c)
								return this._reverseOffset([o, c]);
							s = u.length - e.length + 1
						} else {
							var l = this._reverseOffset([o, s]);
							if (this._match(l, e))
								return l;
							s++
						}
					}
					s = 0
				}
				return -1
			},
			a.prototype._match = function (e, t) {
				if (this.length - e < t.length)
					return !1;
				for (var n = 0; n < t.length; n++)
					if (this.get(e + n) !== t[n])
						return !1;
				return !0
			},
			function () {
				var e = {
					readDoubleBE: 8,
					readDoubleLE: 8,
					readFloatBE: 4,
					readFloatLE: 4,
					readInt32BE: 4,
					readInt32LE: 4,
					readUInt32BE: 4,
					readUInt32LE: 4,
					readInt16BE: 2,
					readInt16LE: 2,
					readUInt16BE: 2,
					readUInt16LE: 2,
					readInt8: 1,
					readUInt8: 1,
					readIntBE: null,
					readIntLE: null,
					readUIntBE: null,
					readUIntLE: null
				};
				for (var t in e)
					!function (t) {
						a.prototype[t] = null === e[t] ? function (e, n) {
							return this.slice(e, e + n)[t](0, n)
						}
						 : function (n) {
							return this.slice(n, n + e[t])[t](0)
						}
					}
				(t)
			}
			(),
			e.exports = a
		}, function (e, t, n) {
			"use strict";
			(function (t) {
				!t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
					nextTick: function (e, n, r, o) {
						if ("function" != typeof e)
							throw new TypeError('"callback" argument must be a function');
						var i,
						a,
						s = arguments.length;
						switch (s) {
						case 0:
						case 1:
							return t.nextTick(e);
						case 2:
							return t.nextTick(function () {
								e.call(null, n)
							});
						case 3:
							return t.nextTick(function () {
								e.call(null, n, r)
							});
						case 4:
							return t.nextTick(function () {
								e.call(null, n, r, o)
							});
						default:
							for (i = new Array(s - 1), a = 0; a < i.length; )
								i[a++] = arguments[a];
							return t.nextTick(function () {
								e.apply(null, i)
							})
						}
					}
				}
				 : e.exports = t
			}).call(this, n(14))
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			function (e) {
				e[e.Trace = 0] = "Trace",
				e[e.Debug = 1] = "Debug",
				e[e.Information = 2] = "Information",
				e[e.Warning = 3] = "Warning",
				e[e.Error = 4] = "Error",
				e[e.Critical = 5] = "Critical",
				e[e.None = 6] = "None"
			}
			(t.LogLevel || (t.LogLevel = {}))
		}, function (e, t, n) {
			"use strict";
			var r = n(6).Buffer,
			o = n(49),
			i = n(17),
			a = n(58),
			s = n(59),
			u = n(60);
			e.exports = function (e) {
				var t = [],
				n = [];
				return {
					encode: u(t, (e = e || {
								forceFloat64: !1,
								compatibilityMode: !1,
								disableTimestampEncoding: !1
							}).forceFloat64, e.compatibilityMode, e.disableTimestampEncoding),
					decode: s(n),
					register: function (e, t, n, a) {
						return o(t, "must have a constructor"),
						o(n, "must have an encode function"),
						o(e >= 0, "must have a non-negative type"),
						o(a, "must have a decode function"),
						this.registerEncoder(function (e) {
							return e instanceof t
						}, function (t) {
							var o = i(),
							a = r.allocUnsafe(1);
							return a.writeInt8(e, 0),
							o.append(a),
							o.append(n(t)),
							o
						}),
						this.registerDecoder(e, a),
						this
					},
					registerEncoder: function (e, n) {
						return o(e, "must have an encode function"),
						o(n, "must have an encode function"),
						t.push({
							check: e,
							encode: n
						}),
						this
					},
					registerDecoder: function (e, t) {
						return o(e >= 0, "must have a non-negative type"),
						o(t, "must have a decode function"),
						n.push({
							type: e,
							decode: t
						}),
						this
					},
					encoder: a.encoder,
					decoder: a.decoder,
					buffer: !0,
					type: "msgpack5",
					IncompleteBufferError: s.IncompleteBufferError
				}
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(16),
			o = n(22),
			i = n(8);
			window.Blazor = {
				navigateTo: r.navigateTo,
				_internal: {
					attachRootComponentToElement: i.attachRootComponentToElement,
					http: o.internalFunctions,
					uriHelper: r.internalFunctions
				}
			}
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i,
			a,
			s = n(13),
			u = "Microsoft.AspNetCore.Blazor",
			c = u + ".Http",
			l = "WebAssemblyHttpMessageHandler";
			function f(e, t, n, r) {
				i || (i = s.platform.findMethod(u, c, l, "ReceiveResponse")),
				s.platform.callMethod(i, null, [s.platform.toDotNetString(e.toString()), t, n, r])
			}
			t.internalFunctions = {
				sendAsync: function (e, t, n) {
					return r(this, void 0, void 0, function () {
						var r,
						i,
						h,
						p,
						d;
						return o(this, function (o) {
							switch (o.label) {
							case 0:
								h = JSON.parse(s.platform.toJavaScriptString(n)),
								p = Object.assign(h.requestInit, h.requestInitOverrides),
								t && (p.body = s.platform.toUint8Array(t)),
								o.label = 1;
							case 1:
								return o.trys.push([1, 4, , 5]),
								[4, fetch(h.requestUri, p)];
							case 2:
								return [4, (r = o.sent()).arrayBuffer()];
							case 3:
								return i = o.sent(),
								[3, 5];
							case 4:
								return d = o.sent(),
								function (e, t) {
									f(e, null, null, s.platform.toDotNetString(t))
								}
								(e, d.toString()),
								[2];
							case 5:
								return function (e, t, n) {
									var r = {
										statusCode: t.status,
										statusText: t.statusText,
										headers: []
									};
									t.headers.forEach(function (e, t) {
										r.headers.push([t, e])
									}),
									a || (a = s.platform.findMethod(u, c, l, "AllocateArray"));
									var o = s.platform.callMethod(a, null, [s.platform.toDotNetString(n.byteLength.toString())]);
									s.platform.toUint8Array(o).set(new Uint8Array(n)),
									f(e, s.platform.toDotNetString(JSON.stringify(r)), o, null)
								}
								(e, r, i),
								[2]
							}
						})
					})
				}
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(24),
			o = n(25),
			i = n(9),
			a = n(27),
			s = document.createElement("template"),
			u = document.createElementNS("http://www.w3.org/2000/svg", "g"),
			c = {
				submit: !0
			},
			l = {},
			f = function () {
				function e(e) {
					var t = this;
					this.childComponentLocations = {},
					this.browserRendererId = e,
					this.eventDelegator = new o.EventDelegator(function (e, n, r) {
							!function (e, t, n, r) {
								c[e.type] && e.preventDefault();
								var o = {
									browserRendererId: t,
									eventHandlerId: n,
									eventArgsType: r.type
								};
								DotNet.invokeMethodAsync("Microsoft.AspNetCore.Components.Browser", "DispatchEvent", o, JSON.stringify(r.data))
							}
							(e, t.browserRendererId, n, r)
						})
				}
				return e.prototype.attachRootComponentToLogicalElement = function (e, t) {
					this.attachComponentToElement(e, t),
					l[e] = t
				},
				e.prototype.updateComponent = function (e, t, n, r) {
					var o = this.childComponentLocations[t];
					if (!o)
						throw new Error("No element is currently associated with component " + t);
					var a = l[t];
					if (a) {
						var s = i.getLogicalSiblingEnd(a);
						delete l[t],
						s ? function (e, t) {
							var n = i.getLogicalParent(e);
							if (!n)
								throw new Error("Can't clear between nodes. The start node does not have a logical parent.");
							for (var r = i.getLogicalChildrenArray(n), o = r.indexOf(e) + 1, a = r.indexOf(t), s = o; s <= a; s++)
								i.removeLogicalChild(n, o);
							e.textContent = "!"
						}
						(a, s) : function (e) {
							var t;
							for (; t = e.firstChild; )
								e.removeChild(t)
						}
						(a)
					}
					this.applyEdits(e, o, 0, n, r)
				},
				e.prototype.disposeComponent = function (e) {
					delete this.childComponentLocations[e]
				},
				e.prototype.disposeEventHandler = function (e) {
					this.eventDelegator.removeListener(e)
				},
				e.prototype.attachComponentToElement = function (e, t) {
					this.childComponentLocations[e] = t
				},
				e.prototype.applyEdits = function (e, t, n, o, a) {
					for (var s = 0, u = n, c = e.arraySegmentReader, l = e.editReader, f = e.frameReader, h = c.values(o), p = c.offset(o), d = p + c.count(o), g = p; g < d; g++) {
						var y = e.diffReader.editsEntry(h, g),
						v = l.editType(y);
						switch (v) {
						case r.EditType.prependFrame:
							var b = l.newTreeIndex(y),
							m = e.referenceFramesEntry(a, b),
							w = l.siblingIndex(y);
							this.insertFrame(e, t, u + w, a, m, b);
							break;
						case r.EditType.removeFrame:
							w = l.siblingIndex(y);
							i.removeLogicalChild(t, u + w);
							break;
						case r.EditType.setAttribute:
							b = l.newTreeIndex(y),
							m = e.referenceFramesEntry(a, b),
							w = l.siblingIndex(y);
							if (!((E = i.getLogicalChild(t, u + w))instanceof Element))
								throw new Error("Cannot set attribute on non-element child");
							this.applyAttribute(e, E, m);
							break;
						case r.EditType.removeAttribute:
							var E;
							w = l.siblingIndex(y);
							if (!((E = i.getLogicalChild(t, u + w))instanceof HTMLElement))
								throw new Error("Cannot remove attribute from non-element child");
							var S = l.removedAttributeName(y);
							this.tryApplySpecialProperty(e, E, S, null) || E.removeAttribute(S);
							break;
						case r.EditType.updateText:
							b = l.newTreeIndex(y),
							m = e.referenceFramesEntry(a, b),
							w = l.siblingIndex(y);
							var _ = i.getLogicalChild(t, u + w);
							if (!(_ instanceof Text))
								throw new Error("Cannot set text content on non-text child");
							_.textContent = f.textContent(m);
							break;
						case r.EditType.updateMarkup:
							b = l.newTreeIndex(y),
							m = e.referenceFramesEntry(a, b),
							w = l.siblingIndex(y);
							i.removeLogicalChild(t, u + w),
							this.insertMarkup(e, t, u + w, m);
							break;
						case r.EditType.stepIn:
							w = l.siblingIndex(y);
							t = i.getLogicalChild(t, u + w),
							s++,
							u = 0;
							break;
						case r.EditType.stepOut:
							t = i.getLogicalParent(t),
							u = 0 === --s ? n : 0;
							break;
						default:
							throw new Error("Unknown edit type: " + v)
						}
					}
				},
				e.prototype.insertFrame = function (e, t, n, o, i, s) {
					var u = e.frameReader,
					c = u.frameType(i);
					switch (c) {
					case r.FrameType.element:
						return this.insertElement(e, t, n, o, i, s),
						1;
					case r.FrameType.text:
						return this.insertText(e, t, n, i),
						1;
					case r.FrameType.attribute:
						throw new Error("Attribute frames should only be present as leading children of element frames.");
					case r.FrameType.component:
						return this.insertComponent(e, t, n, i),
						1;
					case r.FrameType.region:
						return this.insertFrameRange(e, t, n, o, s + 1, s + u.subtreeLength(i));
					case r.FrameType.elementReferenceCapture:
						if (t instanceof Element)
							return a.applyCaptureIdToElement(t, u.elementReferenceCaptureId(i)), 0;
						throw new Error("Reference capture frames can only be children of element frames.");
					case r.FrameType.markup:
						return this.insertMarkup(e, t, n, i),
						1;
					default:
						throw new Error("Unknown frame type: " + c)
					}
				},
				e.prototype.insertElement = function (e, t, n, o, a, s) {
					var u = e.frameReader,
					c = u.elementName(a),
					l = "svg" === c || i.isSvgElement(t) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c),
					f = i.toLogicalElement(l);
					i.insertLogicalChild(l, t, n);
					for (var h = s + u.subtreeLength(a), p = s + 1; p < h; p++) {
						var d = e.referenceFramesEntry(o, p);
						if (u.frameType(d) !== r.FrameType.attribute) {
							this.insertFrameRange(e, f, 0, o, p, h);
							break
						}
						this.applyAttribute(e, l, d)
					}
				},
				e.prototype.insertComponent = function (e, t, n, r) {
					var o = i.createAndInsertLogicalContainer(t, n),
					a = e.frameReader.componentId(r);
					this.attachComponentToElement(a, o)
				},
				e.prototype.insertText = function (e, t, n, r) {
					var o = e.frameReader.textContent(r),
					a = document.createTextNode(o);
					i.insertLogicalChild(a, t, n)
				},
				e.prototype.insertMarkup = function (e, t, n, r) {
					for (var o, a = i.createAndInsertLogicalContainer(t, n), c = e.frameReader.markupContent(r), l = (o = c, i.isSvgElement(t) ? (u.innerHTML = o || " ", u) : (s.innerHTML = o || " ", s.content)), f = 0; l.firstChild; )
						i.insertLogicalChild(l.firstChild, a, f++)
				},
				e.prototype.applyAttribute = function (e, t, n) {
					var r = e.frameReader,
					o = r.attributeName(n),
					i = (this.browserRendererId, r.attributeEventHandlerId(n));
					if (i) {
						var a = o.substring(0, 2),
						s = o.substring(2);
						if ("on" !== a || !s)
							throw new Error("Attribute has nonzero event handler ID, but attribute name '" + o + "' does not start with 'on'.");
						this.eventDelegator.setListener(t, s, i)
					} else
						this.tryApplySpecialProperty(e, t, o, n) || t.setAttribute(o, r.attributeValue(n))
				},
				e.prototype.tryApplySpecialProperty = function (e, t, n, r) {
					switch (n) {
					case "value":
						return this.tryApplyValueProperty(e, t, r);
					case "checked":
						return this.tryApplyCheckedProperty(e, t, r);
					default:
						return !1
					}
				},
				e.prototype.tryApplyValueProperty = function (e, t, n) {
					var r = e.frameReader;
					switch (t.tagName) {
					case "INPUT":
					case "SELECT":
					case "TEXTAREA":
						var o = n ? r.attributeValue(n) : null;
						return t.value = o,
						"SELECT" === t.tagName && (t._blazorSelectValue = o),
						!0;
					case "OPTION":
						(o = n ? r.attributeValue(n) : null) ? t.setAttribute("value", o) : t.removeAttribute("value");
						var i = t.parentElement;
						return i && "_blazorSelectValue" in i && i._blazorSelectValue === o && (this.tryApplyValueProperty(e, i, n), delete i._blazorSelectValue),
						!0;
					default:
						return !1
					}
				},
				e.prototype.tryApplyCheckedProperty = function (e, t, n) {
					if ("INPUT" === t.tagName) {
						var r = n ? e.frameReader.attributeValue(n) : null;
						return t.checked = null !== r,
						!0
					}
					return !1
				},
				e.prototype.insertFrameRange = function (e, t, n, r, o, i) {
					for (var a = n, s = o; s < i; s++) {
						var u = e.referenceFramesEntry(r, s);
						n += this.insertFrame(e, t, n, r, u, s),
						s += h(e, u)
					}
					return n - a
				},
				e
			}
			();
			function h(e, t) {
				var n = e.frameReader;
				switch (n.frameType(t)) {
				case r.FrameType.component:
				case r.FrameType.element:
				case r.FrameType.region:
					return n.subtreeLength(t) - 1;
				default:
					return 0
				}
			}
			t.BrowserRenderer = f
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			function (e) {
				e[e.prependFrame = 1] = "prependFrame",
				e[e.removeFrame = 2] = "removeFrame",
				e[e.setAttribute = 3] = "setAttribute",
				e[e.removeAttribute = 4] = "removeAttribute",
				e[e.updateText = 5] = "updateText",
				e[e.stepIn = 6] = "stepIn",
				e[e.stepOut = 7] = "stepOut",
				e[e.updateMarkup = 8] = "updateMarkup"
			}
			(t.EditType || (t.EditType = {})),
			function (e) {
				e[e.element = 1] = "element",
				e[e.text = 2] = "text",
				e[e.attribute = 3] = "attribute",
				e[e.component = 4] = "component",
				e[e.region = 5] = "region",
				e[e.elementReferenceCapture = 6] = "elementReferenceCapture",
				e[e.markup = 8] = "markup"
			}
			(t.FrameType || (t.FrameType = {}))
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r,
			o = n(26),
			i = (r = {}, ["abort", "blur", "change", "error", "focus", "load", "loadend", "loadstart", "mouseenter", "mouseleave", "progress", "reset", "scroll", "submit", "unload", "DOMNodeInsertedIntoDocument", "DOMNodeRemovedFromDocument"].forEach(function (e) {
					r[e] = !0
				}), r),
			a = function () {
				function e(t) {
					this.onEvent = t;
					var n = ++e.nextEventDelegatorId;
					this.eventsCollectionKey = "_blazorEvents_" + n,
					this.eventInfoStore = new s(this.onGlobalEvent.bind(this))
				}
				return e.prototype.setListener = function (e, t, n) {
					var r = e[this.eventsCollectionKey];
					if (r || (r = e[this.eventsCollectionKey] = {}), r.hasOwnProperty(t)) {
						var o = r[t];
						this.eventInfoStore.update(o.eventHandlerId, n)
					} else {
						var i = {
							element: e,
							eventName: t,
							eventHandlerId: n
						};
						this.eventInfoStore.add(i),
						r[t] = i
					}
				},
				e.prototype.removeListener = function (e) {
					var t = this.eventInfoStore.remove(e);
					if (t) {
						var n = t.element;
						if (n.hasOwnProperty(this.eventsCollectionKey)) {
							var r = n[this.eventsCollectionKey];
							delete r[t.eventName],
							0 === Object.getOwnPropertyNames(r).length && delete n[this.eventsCollectionKey]
						}
					}
				},
				e.prototype.onGlobalEvent = function (e) {
					if (e.target instanceof Element)
						for (var t = e.target, n = null, r = i.hasOwnProperty(e.type); t; ) {
							if (t.hasOwnProperty(this.eventsCollectionKey)) {
								var a = t[this.eventsCollectionKey];
								if (a.hasOwnProperty(e.type)) {
									n || (n = o.EventForDotNet.fromDOMEvent(e));
									var s = a[e.type];
									this.onEvent(e, s.eventHandlerId, n)
								}
							}
							t = r ? null : t.parentElement
						}
				},
				e.nextEventDelegatorId = 0,
				e
			}
			();
			t.EventDelegator = a;
			var s = function () {
				function e(e) {
					this.globalListener = e,
					this.infosByEventHandlerId = {},
					this.countByEventName = {}
				}
				return e.prototype.add = function (e) {
					if (this.infosByEventHandlerId[e.eventHandlerId])
						throw new Error("Event " + e.eventHandlerId + " is already tracked");
					this.infosByEventHandlerId[e.eventHandlerId] = e;
					var t = e.eventName;
					if (this.countByEventName.hasOwnProperty(t))
						this.countByEventName[t]++;
					else {
						this.countByEventName[t] = 1;
						var n = i.hasOwnProperty(t);
						document.addEventListener(t, this.globalListener, n)
					}
				},
				e.prototype.update = function (e, t) {
					if (this.infosByEventHandlerId.hasOwnProperty(t))
						throw new Error("Event " + t + " is already tracked");
					var n = this.infosByEventHandlerId[e];
					delete this.infosByEventHandlerId[e],
					n.eventHandlerId = t,
					this.infosByEventHandlerId[t] = n
				},
				e.prototype.remove = function (e) {
					var t = this.infosByEventHandlerId[e];
					if (t) {
						delete this.infosByEventHandlerId[e];
						var n = t.eventName;
						0 == --this.countByEventName[n] && (delete this.countByEventName[n], document.removeEventListener(n, this.globalListener))
					}
					return t
				},
				e
			}
			()
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__assign || function () {
				return (r = Object.assign || function (e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var o in t = arguments[n])
							Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}).apply(this, arguments)
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var o = function () {
				function e(e, t) {
					this.type = e,
					this.data = t
				}
				return e.fromDOMEvent = function (t) {
					var n = t.target;
					switch (t.type) {
					case "input":
					case "change":
						var o = function (e) {
							return e && "INPUT" === e.tagName && "checkbox" === e.getAttribute("type")
						}
						(n) ? !!n.checked : n.value;
						return new e("change", {
							type: t.type,
							value: o
						});
					case "copy":
					case "cut":
					case "paste":
						return new e("clipboard", {
							type: t.type
						});
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						return new e("drag", function (e) {
							return {
								type: e.type,
								detail: e.detail,
								dataTransfer: e.dataTransfer,
								screenX: e.screenX,
								screenY: e.screenY,
								clientX: e.clientX,
								clientY: e.clientY,
								button: e.button,
								buttons: e.buttons,
								ctrlKey: e.ctrlKey,
								shiftKey: e.shiftKey,
								altKey: e.altKey,
								metaKey: e.metaKey
							}
						}
							(t));
					case "focus":
					case "blur":
					case "focusin":
					case "focusout":
						return new e("focus", {
							type: t.type
						});
					case "keydown":
					case "keyup":
					case "keypress":
						return new e("keyboard", function (e) {
							return {
								type: e.type,
								key: e.key,
								code: e.code,
								location: e.location,
								repeat: e.repeat,
								ctrlKey: e.ctrlKey,
								shiftKey: e.shiftKey,
								altKey: e.altKey,
								metaKey: e.metaKey
							}
						}
							(t));
					case "contextmenu":
					case "click":
					case "mouseover":
					case "mouseout":
					case "mousemove":
					case "mousedown":
					case "mouseup":
					case "dblclick":
						return new e("mouse", i(t));
					case "error":
						return new e("error", function (e) {
							return {
								type: e.type,
								message: e.message,
								filename: e.filename,
								lineno: e.lineno,
								colno: e.colno
							}
						}
							(t));
					case "loadstart":
					case "timeout":
					case "abort":
					case "load":
					case "loadend":
					case "progress":
						return new e("progress", function (e) {
							return {
								type: e.type,
								lengthComputable: e.lengthComputable,
								loaded: e.loaded,
								total: e.total
							}
						}
							(t));
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchenter":
					case "touchleave":
					case "touchstart":
						return new e("touch", function (e) {
							function t(e) {
								for (var t = [], n = 0; n < e.length; n++) {
									var r = e[n];
									t.push({
										identifier: r.identifier,
										clientX: r.clientX,
										clientY: r.clientY,
										screenX: r.screenX,
										screenY: r.screenY,
										pageX: r.pageX,
										pageY: r.pageY
									})
								}
								return t
							}
							return {
								type: e.type,
								detail: e.detail,
								touches: t(e.touches),
								targetTouches: t(e.targetTouches),
								changedTouches: t(e.changedTouches),
								ctrlKey: e.ctrlKey,
								shiftKey: e.shiftKey,
								altKey: e.altKey,
								metaKey: e.metaKey
							}
						}
							(t));
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointerenter":
					case "pointerleave":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						return new e("pointer", function (e) {
							return r({}, i(e), {
								pointerId: e.pointerId,
								width: e.width,
								height: e.height,
								pressure: e.pressure,
								tiltX: e.tiltX,
								tiltY: e.tiltY,
								pointerType: e.pointerType,
								isPrimary: e.isPrimary
							})
						}
							(t));
					case "wheel":
					case "mousewheel":
						return new e("wheel", function (e) {
							return r({}, i(e), {
								deltaX: e.deltaX,
								deltaY: e.deltaY,
								deltaZ: e.deltaZ,
								deltaMode: e.deltaMode
							})
						}
							(t));
					default:
						return new e("unknown", {
							type: t.type
						})
					}
				},
				e
			}
			();
			function i(e) {
				return {
					type: e.type,
					detail: e.detail,
					screenX: e.screenX,
					screenY: e.screenY,
					clientX: e.clientX,
					clientY: e.clientY,
					button: e.button,
					buttons: e.buttons,
					ctrlKey: e.ctrlKey,
					shiftKey: e.shiftKey,
					altKey: e.altKey,
					metaKey: e.metaKey
				}
			}
			t.EventForDotNet = o
		}, function (e, t, n) {
			"use strict";
			function r(e) {
				return "_bl_" + e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.applyCaptureIdToElement = function (e, t) {
				e.setAttribute(r(t), "")
			};
			DotNet.attachReviver(function (e, t) {
				return t && "object" == typeof t && t.hasOwnProperty("_blazorElementRef") && "string" == typeof t._blazorElementRef ? (n = t._blazorElementRef, o = "[" + r(n) + "]", document.querySelector(o)) : t;
				var n,
				o
			})
		}, , function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			};
			function i(e) {
				return new Promise(function (t, n) {
					e.onload = t,
					e.onerror = n,
					document.head.appendChild(e)
				})
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.fetchBootConfigAsync = function () {
				return r(this, void 0, void 0, function () {
					return o(this, function (e) {
						switch (e.label) {
						case 0:
							return [4, fetch("framework/blazor.boot.json", {
									method: "Get",
									credentials: "include"
								})];
						case 1:
							return [2, e.sent().json()]
						}
					})
				})
			},
			t.loadEmbeddedResourcesAsync = function (e) {
				var t = e.cssReferences.map(function (e) {
						var t = document.createElement("link");
						return t.rel = "stylesheet",
						t.href = e,
						i(t)
					}),
				n = e.jsReferences.map(function (e) {
						var t = document.createElement("script");
						return t.src = e,
						i(t)
					});
				return Promise.all(t.concat(n))
			},
			t.shouldAutoStart = function () {
				return document && document.currentScript && "false" !== document.currentScript.getAttribute("autostart")
			}
		}, function (e, t, n) {
			(function (e) {
				var r = Object.getOwnPropertyDescriptors || function (e) {
					for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
						n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
					return n
				},
				o = /%[sdj%]/g;
				t.format = function (e) {
					if (!v(e)) {
						for (var t = [], n = 0; n < arguments.length; n++)
							t.push(s(arguments[n]));
						return t.join(" ")
					}
					n = 1;
					for (var r = arguments, i = r.length, a = String(e).replace(o, function (e) {
								if ("%%" === e)
									return "%";
								if (n >= i)
									return e;
								switch (e) {
								case "%s":
									return String(r[n++]);
								case "%d":
									return Number(r[n++]);
								case "%j":
									try {
										return JSON.stringify(r[n++])
									} catch (e) {
										return "[Circular]"
									}
								default:
									return e
								}
							}), u = r[n]; n < i; u = r[++n])
						g(u) || !w(u) ? a += " " + u : a += " " + s(u);
					return a
				},
				t.deprecate = function (n, r) {
					if (void 0 !== e && !0 === e.noDeprecation)
						return n;
					if (void 0 === e)
						return function () {
							return t.deprecate(n, r).apply(this, arguments)
						};
					var o = !1;
					return function () {
						if (!o) {
							if (e.throwDeprecation)
								throw new Error(r);
							e.traceDeprecation ? console.trace(r) : console.error(r),
							o = !0
						}
						return n.apply(this, arguments)
					}
				};
				var i,
				a = {};
				function s(e, n) {
					var r = {
						seen: [],
						stylize: c
					};
					return arguments.length >= 3 && (r.depth = arguments[2]),
					arguments.length >= 4 && (r.colors = arguments[3]),
					d(n) ? r.showHidden = n : n && t._extend(r, n),
					b(r.showHidden) && (r.showHidden = !1),
					b(r.depth) && (r.depth = 2),
					b(r.colors) && (r.colors = !1),
					b(r.customInspect) && (r.customInspect = !0),
					r.colors && (r.stylize = u),
					l(r, e, r.depth)
				}
				function u(e, t) {
					var n = s.styles[t];
					return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e
				}
				function c(e, t) {
					return e
				}
				function l(e, n, r) {
					if (e.customInspect && n && _(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
						var o = n.inspect(r, e);
						return v(o) || (o = l(e, o, r)),
						o
					}
					var i = function (e, t) {
						if (b(t))
							return e.stylize("undefined", "undefined");
						if (v(t)) {
							var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
							return e.stylize(n, "string")
						}
						if (y(t))
							return e.stylize("" + t, "number");
						if (d(t))
							return e.stylize("" + t, "boolean");
						if (g(t))
							return e.stylize("null", "null")
					}
					(e, n);
					if (i)
						return i;
					var a = Object.keys(n),
					s = function (e) {
						var t = {};
						return e.forEach(function (e, n) {
							t[e] = !0
						}),
						t
					}
					(a);
					if (e.showHidden && (a = Object.getOwnPropertyNames(n)), S(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
						return f(n);
					if (0 === a.length) {
						if (_(n)) {
							var u = n.name ? ": " + n.name : "";
							return e.stylize("[Function" + u + "]", "special")
						}
						if (m(n))
							return e.stylize(RegExp.prototype.toString.call(n), "regexp");
						if (E(n))
							return e.stylize(Date.prototype.toString.call(n), "date");
						if (S(n))
							return f(n)
					}
					var c,
					w = "",
					T = !1,
					k = ["{", "}"];
					(p(n) && (T = !0, k = ["[", "]"]), _(n)) && (w = " [Function" + (n.name ? ": " + n.name : "") + "]");
					return m(n) && (w = " " + RegExp.prototype.toString.call(n)),
					E(n) && (w = " " + Date.prototype.toUTCString.call(n)),
					S(n) && (w = " " + f(n)),
					0 !== a.length || T && 0 != n.length ? r < 0 ? m(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), c = T ? function (e, t, n, r, o) {
						for (var i = [], a = 0, s = t.length; a < s; ++a)
							I(t, String(a)) ? i.push(h(e, t, n, r, String(a), !0)) : i.push("");
						return o.forEach(function (o) {
							o.match(/^\d+$/) || i.push(h(e, t, n, r, o, !0))
						}),
						i
					}
						(e, n, r, s, a) : a.map(function (t) {
							return h(e, n, r, s, t, T)
						}), e.seen.pop(), function (e, t, n) {
						if (e.reduce(function (e, t) {
								return 0,
								t.indexOf("\n") >= 0 && 0,
								e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
							}, 0) > 60)
							return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
						return n[0] + t + " " + e.join(", ") + " " + n[1]
					}
						(c, w, k)) : k[0] + w + k[1]
				}
				function f(e) {
					return "[" + Error.prototype.toString.call(e) + "]"
				}
				function h(e, t, n, r, o, i) {
					var a,
					s,
					u;
					if ((u = Object.getOwnPropertyDescriptor(t, o) || {
								value: t[o]
							}).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), I(r, o) || (a = "[" + o + "]"), s || (e.seen.indexOf(u.value) < 0 ? (s = g(n) ? l(e, u.value, null) : l(e, u.value, n - 1)).indexOf("\n") > -1 && (s = i ? s.split("\n").map(function (e) {
										return "  " + e
									}).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
										return "   " + e
									}).join("\n")) : s = e.stylize("[Circular]", "special")), b(a)) {
						if (i && o.match(/^\d+$/))
							return s;
						(a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
					}
					return a + ": " + s
				}
				function p(e) {
					return Array.isArray(e)
				}
				function d(e) {
					return "boolean" == typeof e
				}
				function g(e) {
					return null === e
				}
				function y(e) {
					return "number" == typeof e
				}
				function v(e) {
					return "string" == typeof e
				}
				function b(e) {
					return void 0 === e
				}
				function m(e) {
					return w(e) && "[object RegExp]" === T(e)
				}
				function w(e) {
					return "object" == typeof e && null !== e
				}
				function E(e) {
					return w(e) && "[object Date]" === T(e)
				}
				function S(e) {
					return w(e) && ("[object Error]" === T(e) || e instanceof Error)
				}
				function _(e) {
					return "function" == typeof e
				}
				function T(e) {
					return Object.prototype.toString.call(e)
				}
				function k(e) {
					return e < 10 ? "0" + e.toString(10) : e.toString(10)
				}
				t.debuglog = function (n) {
					if (b(i) && (i = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !a[n])
						if (new RegExp("\\b" + n + "\\b", "i").test(i)) {
							var r = e.pid;
							a[n] = function () {
								var e = t.format.apply(t, arguments);
								console.error("%s %d: %s", n, r, e)
							}
						} else
							a[n] = function () {};
					return a[n]
				},
				t.inspect = s,
				s.colors = {
					bold: [1, 22],
					italic: [3, 23],
					underline: [4, 24],
					inverse: [7, 27],
					white: [37, 39],
					grey: [90, 39],
					black: [30, 39],
					blue: [34, 39],
					cyan: [36, 39],
					green: [32, 39],
					magenta: [35, 39],
					red: [31, 39],
					yellow: [33, 39]
				},
				s.styles = {
					special: "cyan",
					number: "yellow",
					boolean: "yellow",
					undefined: "grey",
					null: "bold",
					string: "green",
					date: "magenta",
					regexp: "red"
				},
				t.isArray = p,
				t.isBoolean = d,
				t.isNull = g,
				t.isNullOrUndefined = function (e) {
					return null == e
				},
				t.isNumber = y,
				t.isString = v,
				t.isSymbol = function (e) {
					return "symbol" == typeof e
				},
				t.isUndefined = b,
				t.isRegExp = m,
				t.isObject = w,
				t.isDate = E,
				t.isError = S,
				t.isFunction = _,
				t.isPrimitive = function (e) {
					return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
				},
				t.isBuffer = n(50);
				var C = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
				function I(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				t.log = function () {
					var e,
					n;
					console.log("%s - %s", (e = new Date, n = [k(e.getHours()), k(e.getMinutes()), k(e.getSeconds())].join(":"), [e.getDate(), C[e.getMonth()], n].join(" ")), t.format.apply(t, arguments))
				},
				t.inherits = n(7),
				t._extend = function (e, t) {
					if (!t || !w(t))
						return e;
					for (var n = Object.keys(t), r = n.length; r--; )
						e[n[r]] = t[n[r]];
					return e
				};
				var x = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
				function R(e, t) {
					if (!e) {
						var n = new Error("Promise was rejected with a falsy value");
						n.reason = e,
						e = n
					}
					return t(e)
				}
				t.promisify = function (e) {
					if ("function" != typeof e)
						throw new TypeError('The "original" argument must be of type Function');
					if (x && e[x]) {
						var t;
						if ("function" != typeof(t = e[x]))
							throw new TypeError('The "util.promisify.custom" argument must be of type Function');
						return Object.defineProperty(t, x, {
							value: t,
							enumerable: !1,
							writable: !1,
							configurable: !0
						}),
						t
					}
					function t() {
						for (var t, n, r = new Promise(function (e, r) {
									t = e,
									n = r
								}), o = [], i = 0; i < arguments.length; i++)
							o.push(arguments[i]);
						o.push(function (e, r) {
							e ? n(e) : t(r)
						});
						try {
							e.apply(this, o)
						} catch (e) {
							n(e)
						}
						return r
					}
					return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
					x && Object.defineProperty(t, x, {
						value: t,
						enumerable: !1,
						writable: !1,
						configurable: !0
					}),
					Object.defineProperties(t, r(e))
				},
				t.promisify.custom = x,
				t.callbackify = function (t) {
					if ("function" != typeof t)
						throw new TypeError('The "original" argument must be of type Function');
					function n() {
						for (var n = [], r = 0; r < arguments.length; r++)
							n.push(arguments[r]);
						var o = n.pop();
						if ("function" != typeof o)
							throw new TypeError("The last argument must be of type Function");
						var i = this,
						a = function () {
							return o.apply(i, arguments)
						};
						t.apply(this, n).then(function (t) {
							e.nextTick(a, null, t)
						}, function (t) {
							e.nextTick(R, t, a)
						})
					}
					return Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
					Object.defineProperties(n, r(t)),
					n
				}
			}).call(this, n(14))
		}, function (e, t) {
			var n = {}
			.toString;
			e.exports = Array.isArray || function (e) {
				return "[object Array]" == n.call(e)
			}
		}, function (e, t, n) {
			(t = e.exports = n(33)).Stream = t,
			t.Readable = t,
			t.Writable = n(37),
			t.Duplex = n(10),
			t.Transform = n(39),
			t.PassThrough = n(57)
		}, function (e, t, n) {
			"use strict";
			(function (t, r) {
				var o = n(18);
				e.exports = m;
				var i,
				a = n(31);
				m.ReadableState = b;
				n(34).EventEmitter;
				var s = function (e, t) {
					return e.listeners(t).length
				},
				u = n(35),
				c = n(6).Buffer,
				l = t.Uint8Array || function () {};
				var f = n(15);
				f.inherits = n(7);
				var h = n(51),
				p = void 0;
				p = h && h.debuglog ? h.debuglog("stream") : function () {};
				var d,
				g = n(52),
				y = n(36);
				f.inherits(m, u);
				var v = ["error", "close", "destroy", "pause", "resume"];
				function b(e, t) {
					e = e || {};
					var r = t instanceof(i = i || n(10));
					this.objectMode = !!e.objectMode,
					r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
					var o = e.highWaterMark,
					a = e.readableHighWaterMark,
					s = this.objectMode ? 16 : 16384;
					this.highWaterMark = o || 0 === o ? o : r && (a || 0 === a) ? a : s,
					this.highWaterMark = Math.floor(this.highWaterMark),
					this.buffer = new g,
					this.length = 0,
					this.pipes = null,
					this.pipesCount = 0,
					this.flowing = null,
					this.ended = !1,
					this.endEmitted = !1,
					this.reading = !1,
					this.sync = !0,
					this.needReadable = !1,
					this.emittedReadable = !1,
					this.readableListening = !1,
					this.resumeScheduled = !1,
					this.destroyed = !1,
					this.defaultEncoding = e.defaultEncoding || "utf8",
					this.awaitDrain = 0,
					this.readingMore = !1,
					this.decoder = null,
					this.encoding = null,
					e.encoding && (d || (d = n(38).StringDecoder), this.decoder = new d(e.encoding), this.encoding = e.encoding)
				}
				function m(e) {
					if (i = i || n(10), !(this instanceof m))
						return new m(e);
					this._readableState = new b(e, this),
					this.readable = !0,
					e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)),
					u.call(this)
				}
				function w(e, t, n, r, o) {
					var i,
					a = e._readableState;
					null === t ? (a.reading = !1, function (e, t) {
						if (t.ended)
							return;
						if (t.decoder) {
							var n = t.decoder.end();
							n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
						}
						t.ended = !0,
						T(e)
					}
						(e, a)) : (o || (i = function (e, t) {
							var n;
							r = t,
							c.isBuffer(r) || r instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
							var r;
							return n
						}
							(a, t)), i ? e.emit("error", i) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
								return c.from(e)
							}
								(t)), r ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : E(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? E(e, a, t, !1) : C(e, a)) : E(e, a, t, !1))) : r || (a.reading = !1));
					return function (e) {
						return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
					}
					(a)
				}
				function E(e, t, n, r) {
					t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && T(e)),
					C(e, t)
				}
				Object.defineProperty(m.prototype, "destroyed", {
					get: function () {
						return void 0 !== this._readableState && this._readableState.destroyed
					},
					set: function (e) {
						this._readableState && (this._readableState.destroyed = e)
					}
				}),
				m.prototype.destroy = y.destroy,
				m.prototype._undestroy = y.undestroy,
				m.prototype._destroy = function (e, t) {
					this.push(null),
					t(e)
				},
				m.prototype.push = function (e, t) {
					var n,
					r = this._readableState;
					return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = c.from(e, t), t = ""), n = !0),
					w(this, e, t, !1, n)
				},
				m.prototype.unshift = function (e) {
					return w(this, e, null, !0, !1)
				},
				m.prototype.isPaused = function () {
					return !1 === this._readableState.flowing
				},
				m.prototype.setEncoding = function (e) {
					return d || (d = n(38).StringDecoder),
					this._readableState.decoder = new d(e),
					this._readableState.encoding = e,
					this
				};
				var S = 8388608;
				function _(e, t) {
					return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
							return e >= S ? e = S : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++),
							e
						}
							(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
				}
				function T(e) {
					var t = e._readableState;
					t.needReadable = !1,
					t.emittedReadable || (p("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? o.nextTick(k, e) : k(e))
				}
				function k(e) {
					p("emit readable"),
					e.emit("readable"),
					O(e)
				}
				function C(e, t) {
					t.readingMore || (t.readingMore = !0, o.nextTick(I, e, t))
				}
				function I(e, t) {
					for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (p("maybeReadMore read 0"), e.read(0), n !== t.length); )
						n = t.length;
					t.readingMore = !1
				}
				function x(e) {
					p("readable nexttick read 0"),
					e.read(0)
				}
				function R(e, t) {
					t.reading || (p("resume read 0"), e.read(0)),
					t.resumeScheduled = !1,
					t.awaitDrain = 0,
					e.emit("resume"),
					O(e),
					t.flowing && !t.reading && e.read(0)
				}
				function O(e) {
					var t = e._readableState;
					for (p("flow", t.flowing); t.flowing && null !== e.read(); );
				}
				function P(e, t) {
					return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = function (e, t, n) {
						var r;
						e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function (e, t) {
							var n = t.head,
							r = 1,
							o = n.data;
							e -= o.length;
							for (; n = n.next; ) {
								var i = n.data,
								a = e > i.length ? i.length : e;
								if (a === i.length ? o += i : o += i.slice(0, e), 0 === (e -= a)) {
									a === i.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = i.slice(a));
									break
								}
								++r
							}
							return t.length -= r,
							o
						}
						(e, t) : function (e, t) {
							var n = c.allocUnsafe(e),
							r = t.head,
							o = 1;
							r.data.copy(n),
							e -= r.data.length;
							for (; r = r.next; ) {
								var i = r.data,
								a = e > i.length ? i.length : e;
								if (i.copy(n, n.length - e, 0, a), 0 === (e -= a)) {
									a === i.length ? (++o, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = i.slice(a));
									break
								}
								++o
							}
							return t.length -= o,
							n
						}
						(e, t);
						return r
					}
						(e, t.buffer, t.decoder), n);
					var n
				}
				function M(e) {
					var t = e._readableState;
					if (t.length > 0)
						throw new Error('"endReadable()" called on non-empty stream');
					t.endEmitted || (t.ended = !0, o.nextTick(L, t, e))
				}
				function L(e, t) {
					e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
				}
				function A(e, t) {
					for (var n = 0, r = e.length; n < r; n++)
						if (e[n] === t)
							return n;
					return -1
				}
				m.prototype.read = function (e) {
					p("read", e),
					e = parseInt(e, 10);
					var t = this._readableState,
					n = e;
					if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
						return p("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? M(this) : T(this), null;
					if (0 === (e = _(e, t)) && t.ended)
						return 0 === t.length && M(this), null;
					var r,
					o = t.needReadable;
					return p("need readable", o),
					(0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", o = !0),
					t.ended || t.reading ? p("reading or ended", o = !1) : o && (p("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = _(n, t))),
					null === (r = e > 0 ? P(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e,
					0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && M(this)),
					null !== r && this.emit("data", r),
					r
				},
				m.prototype._read = function (e) {
					this.emit("error", new Error("_read() is not implemented"))
				},
				m.prototype.pipe = function (e, t) {
					var n = this,
					i = this._readableState;
					switch (i.pipesCount) {
					case 0:
						i.pipes = e;
						break;
					case 1:
						i.pipes = [i.pipes, e];
						break;
					default:
						i.pipes.push(e)
					}
					i.pipesCount += 1,
					p("pipe count=%d opts=%j", i.pipesCount, t);
					var u = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? l : m;
					function c(t, r) {
						p("onunpipe"),
						t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, p("cleanup"), e.removeListener("close", v), e.removeListener("finish", b), e.removeListener("drain", f), e.removeListener("error", y), e.removeListener("unpipe", c), n.removeListener("end", l), n.removeListener("end", m), n.removeListener("data", g), h = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || f())
					}
					function l() {
						p("onend"),
						e.end()
					}
					i.endEmitted ? o.nextTick(u) : n.once("end", u),
					e.on("unpipe", c);
					var f = function (e) {
						return function () {
							var t = e._readableState;
							p("pipeOnDrain", t.awaitDrain),
							t.awaitDrain && t.awaitDrain--,
							0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, O(e))
						}
					}
					(n);
					e.on("drain", f);
					var h = !1;
					var d = !1;
					function g(t) {
						p("ondata"),
						d = !1,
						!1 !== e.write(t) || d || ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== A(i.pipes, e)) && !h && (p("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, d = !0), n.pause())
					}
					function y(t) {
						p("onerror", t),
						m(),
						e.removeListener("error", y),
						0 === s(e, "error") && e.emit("error", t)
					}
					function v() {
						e.removeListener("finish", b),
						m()
					}
					function b() {
						p("onfinish"),
						e.removeListener("close", v),
						m()
					}
					function m() {
						p("unpipe"),
						n.unpipe(e)
					}
					return n.on("data", g),
					function (e, t, n) {
						if ("function" == typeof e.prependListener)
							return e.prependListener(t, n);
						e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
					}
					(e, "error", y),
					e.once("close", v),
					e.once("finish", b),
					e.emit("pipe", n),
					i.flowing || (p("pipe resume"), n.resume()),
					e
				},
				m.prototype.unpipe = function (e) {
					var t = this._readableState,
					n = {
						hasUnpiped: !1
					};
					if (0 === t.pipesCount)
						return this;
					if (1 === t.pipesCount)
						return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this);
					if (!e) {
						var r = t.pipes,
						o = t.pipesCount;
						t.pipes = null,
						t.pipesCount = 0,
						t.flowing = !1;
						for (var i = 0; i < o; i++)
							r[i].emit("unpipe", this, n);
						return this
					}
					var a = A(t.pipes, e);
					return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this)
				},
				m.prototype.on = function (e, t) {
					var n = u.prototype.on.call(this, e, t);
					if ("data" === e)
						!1 !== this._readableState.flowing && this.resume();
					else if ("readable" === e) {
						var r = this._readableState;
						r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && T(this) : o.nextTick(x, this))
					}
					return n
				},
				m.prototype.addListener = m.prototype.on,
				m.prototype.resume = function () {
					var e = this._readableState;
					return e.flowing || (p("resume"), e.flowing = !0, function (e, t) {
						t.resumeScheduled || (t.resumeScheduled = !0, o.nextTick(R, e, t))
					}
						(this, e)),
					this
				},
				m.prototype.pause = function () {
					return p("call pause flowing=%j", this._readableState.flowing),
					!1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")),
					this
				},
				m.prototype.wrap = function (e) {
					var t = this,
					n = this._readableState,
					r = !1;
					for (var o in e.on("end", function () {
							if (p("wrapped end"), n.decoder && !n.ended) {
								var e = n.decoder.end();
								e && e.length && t.push(e)
							}
							t.push(null)
						}), e.on("data", function (o) {
							(p("wrapped data"), n.decoder && (o = n.decoder.write(o)), n.objectMode && null == o) || (n.objectMode || o && o.length) && (t.push(o) || (r = !0, e.pause()))
						}), e)
						void 0 === this[o] && "function" == typeof e[o] && (this[o] = function (t) {
							return function () {
								return e[t].apply(e, arguments)
							}
						}
							(o));
					for (var i = 0; i < v.length; i++)
						e.on(v[i], this.emit.bind(this, v[i]));
					return this._read = function (t) {
						p("wrapped _read", t),
						r && (r = !1, e.resume())
					},
					this
				},
				Object.defineProperty(m.prototype, "readableHighWaterMark", {
					enumerable: !1,
					get: function () {
						return this._readableState.highWaterMark
					}
				}),
				m._fromList = P
			}).call(this, n(5), n(14))
		}, function (e, t, n) {
			"use strict";
			var r,
			o = "object" == typeof Reflect ? Reflect : null,
			i = o && "function" == typeof o.apply ? o.apply : function (e, t, n) {
				return Function.prototype.apply.call(e, t, n)
			};
			r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (e) {
				return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
			}
			 : function (e) {
				return Object.getOwnPropertyNames(e)
			};
			var a = Number.isNaN || function (e) {
				return e != e
			};
			function s() {
				s.init.call(this)
			}
			e.exports = s,
			s.EventEmitter = s,
			s.prototype._events = void 0,
			s.prototype._eventsCount = 0,
			s.prototype._maxListeners = void 0;
			var u = 10;
			function c(e) {
				return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
			}
			function l(e, t, n, r) {
				var o,
				i,
				a,
				s;
				if ("function" != typeof n)
					throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
				if (void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), a = i[t]), void 0 === a)
					a = i[t] = n, ++e._eventsCount;
				else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (o = c(e)) > 0 && a.length > o && !a.warned) {
					a.warned = !0;
					var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
					u.name = "MaxListenersExceededWarning",
					u.emitter = e,
					u.type = t,
					u.count = a.length,
					s = u,
					console && console.warn && console.warn(s)
				}
				return e
			}
			function f(e, t, n) {
				var r = {
					fired: !1,
					wrapFn: void 0,
					target: e,
					type: t,
					listener: n
				},
				o = function () {
					for (var e = [], t = 0; t < arguments.length; t++)
						e.push(arguments[t]);
					this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, i(this.listener, this.target, e))
				}
				.bind(r);
				return o.listener = n,
				r.wrapFn = o,
				o
			}
			function h(e, t, n) {
				var r = e._events;
				if (void 0 === r)
					return [];
				var o = r[t];
				return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function (e) {
					for (var t = new Array(e.length), n = 0; n < t.length; ++n)
						t[n] = e[n].listener || e[n];
					return t
				}
				(o) : d(o, o.length)
			}
			function p(e) {
				var t = this._events;
				if (void 0 !== t) {
					var n = t[e];
					if ("function" == typeof n)
						return 1;
					if (void 0 !== n)
						return n.length
				}
				return 0
			}
			function d(e, t) {
				for (var n = new Array(t), r = 0; r < t; ++r)
					n[r] = e[r];
				return n
			}
			Object.defineProperty(s, "defaultMaxListeners", {
				enumerable: !0,
				get: function () {
					return u
				},
				set: function (e) {
					if ("number" != typeof e || e < 0 || a(e))
						throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
					u = e
				}
			}),
			s.init = function () {
				void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0),
				this._maxListeners = this._maxListeners || void 0
			},
			s.prototype.setMaxListeners = function (e) {
				if ("number" != typeof e || e < 0 || a(e))
					throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
				return this._maxListeners = e,
				this
			},
			s.prototype.getMaxListeners = function () {
				return c(this)
			},
			s.prototype.emit = function (e) {
				for (var t = [], n = 1; n < arguments.length; n++)
					t.push(arguments[n]);
				var r = "error" === e,
				o = this._events;
				if (void 0 !== o)
					r = r && void 0 === o.error;
				else if (!r)
					return !1;
				if (r) {
					var a;
					if (t.length > 0 && (a = t[0]), a instanceof Error)
						throw a;
					var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
					throw s.context = a,
					s
				}
				var u = o[e];
				if (void 0 === u)
					return !1;
				if ("function" == typeof u)
					i(u, this, t);
				else {
					var c = u.length,
					l = d(u, c);
					for (n = 0; n < c; ++n)
						i(l[n], this, t)
				}
				return !0
			},
			s.prototype.addListener = function (e, t) {
				return l(this, e, t, !1)
			},
			s.prototype.on = s.prototype.addListener,
			s.prototype.prependListener = function (e, t) {
				return l(this, e, t, !0)
			},
			s.prototype.once = function (e, t) {
				if ("function" != typeof t)
					throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
				return this.on(e, f(this, e, t)),
				this
			},
			s.prototype.prependOnceListener = function (e, t) {
				if ("function" != typeof t)
					throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
				return this.prependListener(e, f(this, e, t)),
				this
			},
			s.prototype.removeListener = function (e, t) {
				var n,
				r,
				o,
				i,
				a;
				if ("function" != typeof t)
					throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
				if (void 0 === (r = this._events))
					return this;
				if (void 0 === (n = r[e]))
					return this;
				if (n === t || n.listener === t)
					0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
				else if ("function" != typeof n) {
					for (o = -1, i = n.length - 1; i >= 0; i--)
						if (n[i] === t || n[i].listener === t) {
							a = n[i].listener,
							o = i;
							break
						}
					if (o < 0)
						return this;
					0 === o ? n.shift() : function (e, t) {
						for (; t + 1 < e.length; t++)
							e[t] = e[t + 1];
						e.pop()
					}
					(n, o),
					1 === n.length && (r[e] = n[0]),
					void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
				}
				return this
			},
			s.prototype.off = s.prototype.removeListener,
			s.prototype.removeAllListeners = function (e) {
				var t,
				n,
				r;
				if (void 0 === (n = this._events))
					return this;
				if (void 0 === n.removeListener)
					return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
				if (0 === arguments.length) {
					var o,
					i = Object.keys(n);
					for (r = 0; r < i.length; ++r)
						"removeListener" !== (o = i[r]) && this.removeAllListeners(o);
					return this.removeAllListeners("removeListener"),
					this._events = Object.create(null),
					this._eventsCount = 0,
					this
				}
				if ("function" == typeof(t = n[e]))
					this.removeListener(e, t);
				else if (void 0 !== t)
					for (r = t.length - 1; r >= 0; r--)
						this.removeListener(e, t[r]);
				return this
			},
			s.prototype.listeners = function (e) {
				return h(this, e, !0)
			},
			s.prototype.rawListeners = function (e) {
				return h(this, e, !1)
			},
			s.listenerCount = function (e, t) {
				return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
			},
			s.prototype.listenerCount = p,
			s.prototype.eventNames = function () {
				return this._eventsCount > 0 ? r(this._events) : []
			}
		}, function (e, t, n) {
			e.exports = n(34).EventEmitter
		}, function (e, t, n) {
			"use strict";
			var r = n(18);
			function o(e, t) {
				e.emit("error", t)
			}
			e.exports = {
				destroy: function (e, t) {
					var n = this,
					i = this._readableState && this._readableState.destroyed,
					a = this._writableState && this._writableState.destroyed;
					return i || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(o, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
							!t && e ? (r.nextTick(o, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
						}), this)
				},
				undestroy: function () {
					this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1),
					this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
				}
			}
		}, function (e, t, n) {
			"use strict";
			(function (t, r, o) {
				var i = n(18);
				function a(e) {
					var t = this;
					this.next = null,
					this.entry = null,
					this.finish = function () {
						!function (e, t, n) {
							var r = e.entry;
							e.entry = null;
							for (; r; ) {
								var o = r.callback;
								t.pendingcb--,
								o(n),
								r = r.next
							}
							t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
						}
						(t, e)
					}
				}
				e.exports = b;
				var s,
				u = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? r : i.nextTick;
				b.WritableState = v;
				var c = n(15);
				c.inherits = n(7);
				var l = {
					deprecate: n(56)
				},
				f = n(35),
				h = n(6).Buffer,
				p = o.Uint8Array || function () {};
				var d,
				g = n(36);
				function y() {}
				function v(e, t) {
					s = s || n(10),
					e = e || {};
					var r = t instanceof s;
					this.objectMode = !!e.objectMode,
					r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
					var o = e.highWaterMark,
					c = e.writableHighWaterMark,
					l = this.objectMode ? 16 : 16384;
					this.highWaterMark = o || 0 === o ? o : r && (c || 0 === c) ? c : l,
					this.highWaterMark = Math.floor(this.highWaterMark),
					this.finalCalled = !1,
					this.needDrain = !1,
					this.ending = !1,
					this.ended = !1,
					this.finished = !1,
					this.destroyed = !1;
					var f = !1 === e.decodeStrings;
					this.decodeStrings = !f,
					this.defaultEncoding = e.defaultEncoding || "utf8",
					this.length = 0,
					this.writing = !1,
					this.corked = 0,
					this.sync = !0,
					this.bufferProcessing = !1,
					this.onwrite = function (e) {
						!function (e, t) {
							var n = e._writableState,
							r = n.sync,
							o = n.writecb;
							if (function (e) {
								e.writing = !1,
								e.writecb = null,
								e.length -= e.writelen,
								e.writelen = 0
							}
								(n), t)
								!function (e, t, n, r, o) {
									--t.pendingcb,
									n ? (i.nextTick(o, r), i.nextTick(T, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (o(r), e._writableState.errorEmitted = !0, e.emit("error", r), T(e, t))
								}
							(e, n, r, t, o);
							else {
								var a = S(n);
								a || n.corked || n.bufferProcessing || !n.bufferedRequest || E(e, n),
								r ? u(w, e, n, a, o) : w(e, n, a, o)
							}
						}
						(t, e)
					},
					this.writecb = null,
					this.writelen = 0,
					this.bufferedRequest = null,
					this.lastBufferedRequest = null,
					this.pendingcb = 0,
					this.prefinished = !1,
					this.errorEmitted = !1,
					this.bufferedRequestCount = 0,
					this.corkedRequestsFree = new a(this)
				}
				function b(e) {
					if (s = s || n(10), !(d.call(b, this) || this instanceof s))
						return new b(e);
					this._writableState = new v(e, this),
					this.writable = !0,
					e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)),
					f.call(this)
				}
				function m(e, t, n, r, o, i, a) {
					t.writelen = r,
					t.writecb = a,
					t.writing = !0,
					t.sync = !0,
					n ? e._writev(o, t.onwrite) : e._write(o, i, t.onwrite),
					t.sync = !1
				}
				function w(e, t, n, r) {
					n || function (e, t) {
						0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
					}
					(e, t),
					t.pendingcb--,
					r(),
					T(e, t)
				}
				function E(e, t) {
					t.bufferProcessing = !0;
					var n = t.bufferedRequest;
					if (e._writev && n && n.next) {
						var r = t.bufferedRequestCount,
						o = new Array(r),
						i = t.corkedRequestsFree;
						i.entry = n;
						for (var s = 0, u = !0; n; )
							o[s] = n, n.isBuf || (u = !1), n = n.next, s += 1;
						o.allBuffers = u,
						m(e, t, !0, t.length, o, "", i.finish),
						t.pendingcb++,
						t.lastBufferedRequest = null,
						i.next ? (t.corkedRequestsFree = i.next, i.next = null) : t.corkedRequestsFree = new a(t),
						t.bufferedRequestCount = 0
					} else {
						for (; n; ) {
							var c = n.chunk,
							l = n.encoding,
							f = n.callback;
							if (m(e, t, !1, t.objectMode ? 1 : c.length, c, l, f), n = n.next, t.bufferedRequestCount--, t.writing)
								break
						}
						null === n && (t.lastBufferedRequest = null)
					}
					t.bufferedRequest = n,
					t.bufferProcessing = !1
				}
				function S(e) {
					return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
				}
				function _(e, t) {
					e._final(function (n) {
						t.pendingcb--,
						n && e.emit("error", n),
						t.prefinished = !0,
						e.emit("prefinish"),
						T(e, t)
					})
				}
				function T(e, t) {
					var n = S(t);
					return n && (!function (e, t) {
						t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, i.nextTick(_, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
					}
						(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))),
					n
				}
				c.inherits(b, f),
				v.prototype.getBuffer = function () {
					for (var e = this.bufferedRequest, t = []; e; )
						t.push(e), e = e.next;
					return t
				},
				function () {
					try {
						Object.defineProperty(v.prototype, "buffer", {
							get: l.deprecate(function () {
								return this.getBuffer()
							}, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
						})
					} catch (e) {}
				}
				(),
				"function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (d = Function.prototype[Symbol.hasInstance], Object.defineProperty(b, Symbol.hasInstance, {
						value: function (e) {
							return !!d.call(this, e) || this === b && (e && e._writableState instanceof v)
						}
					})) : d = function (e) {
					return e instanceof this
				},
				b.prototype.pipe = function () {
					this.emit("error", new Error("Cannot pipe, not readable"))
				},
				b.prototype.write = function (e, t, n) {
					var r,
					o = this._writableState,
					a = !1,
					s = !o.objectMode && (r = e, h.isBuffer(r) || r instanceof p);
					return s && !h.isBuffer(e) && (e = function (e) {
						return h.from(e)
					}
						(e)),
					"function" == typeof t && (n = t, t = null),
					s ? t = "buffer" : t || (t = o.defaultEncoding),
					"function" != typeof n && (n = y),
					o.ended ? function (e, t) {
						var n = new Error("write after end");
						e.emit("error", n),
						i.nextTick(t, n)
					}
					(this, n) : (s || function (e, t, n, r) {
						var o = !0,
						a = !1;
						return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")),
						a && (e.emit("error", a), i.nextTick(r, a), o = !1),
						o
					}
						(this, o, e, n)) && (o.pendingcb++, a = function (e, t, n, r, o, i) {
						if (!n) {
							var a = function (e, t, n) {
								e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, n));
								return t
							}
							(t, r, o);
							r !== a && (n = !0, o = "buffer", r = a)
						}
						var s = t.objectMode ? 1 : r.length;
						t.length += s;
						var u = t.length < t.highWaterMark;
						u || (t.needDrain = !0);
						if (t.writing || t.corked) {
							var c = t.lastBufferedRequest;
							t.lastBufferedRequest = {
								chunk: r,
								encoding: o,
								isBuf: n,
								callback: i,
								next: null
							},
							c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
							t.bufferedRequestCount += 1
						} else
							m(e, t, !1, s, r, o, i);
						return u
					}
						(this, o, s, e, t, n)),
					a
				},
				b.prototype.cork = function () {
					this._writableState.corked++
				},
				b.prototype.uncork = function () {
					var e = this._writableState;
					e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || E(this, e))
				},
				b.prototype.setDefaultEncoding = function (e) {
					if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
						throw new TypeError("Unknown encoding: " + e);
					return this._writableState.defaultEncoding = e,
					this
				},
				Object.defineProperty(b.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function () {
						return this._writableState.highWaterMark
					}
				}),
				b.prototype._write = function (e, t, n) {
					n(new Error("_write() is not implemented"))
				},
				b.prototype._writev = null,
				b.prototype.end = function (e, t, n) {
					var r = this._writableState;
					"function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null),
					null != e && this.write(e, t),
					r.corked && (r.corked = 1, this.uncork()),
					r.ending || r.finished || function (e, t, n) {
						t.ending = !0,
						T(e, t),
						n && (t.finished ? i.nextTick(n) : e.once("finish", n));
						t.ended = !0,
						e.writable = !1
					}
					(this, r, n)
				},
				Object.defineProperty(b.prototype, "destroyed", {
					get: function () {
						return void 0 !== this._writableState && this._writableState.destroyed
					},
					set: function (e) {
						this._writableState && (this._writableState.destroyed = e)
					}
				}),
				b.prototype.destroy = g.destroy,
				b.prototype._undestroy = g.undestroy,
				b.prototype._destroy = function (e, t) {
					this.end(),
					t(e)
				}
			}).call(this, n(14), n(54).setImmediate, n(5))
		}, function (e, t, n) {
			"use strict";
			var r = n(6).Buffer,
			o = r.isEncoding || function (e) {
				switch ((e = "" + e) && e.toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
				case "raw":
					return !0;
				default:
					return !1
				}
			};
			function i(e) {
				var t;
				switch (this.encoding = function (e) {
					var t = function (e) {
						if (!e)
							return "utf8";
						for (var t; ; )
							switch (e) {
							case "utf8":
							case "utf-8":
								return "utf8";
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return "utf16le";
							case "latin1":
							case "binary":
								return "latin1";
							case "base64":
							case "ascii":
							case "hex":
								return e;
							default:
								if (t)
									return;
								e = ("" + e).toLowerCase(),
								t = !0
							}
					}
					(e);
					if ("string" != typeof t && (r.isEncoding === o || !o(e)))
						throw new Error("Unknown encoding: " + e);
						return t || e
					}
						(e), this.encoding) {
					case "utf16le":
						this.text = u,
						this.end = c,
						t = 4;
						break;
					case "utf8":
						this.fillLast = s,
						t = 4;
						break;
					case "base64":
						this.text = l,
						this.end = f,
						t = 3;
						break;
					default:
						return this.write = h,
						void(this.end = p)
					}
					this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
			}
			function a(e) {
				return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
			}
			function s(e) {
				var t = this.lastTotal - this.lastNeed,
				n = function (e, t, n) {
					if (128 != (192 & t[0]))
						return e.lastNeed = 0, "�";
					if (e.lastNeed > 1 && t.length > 1) {
						if (128 != (192 & t[1]))
							return e.lastNeed = 1, "�";
						if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
							return e.lastNeed = 2, "�"
					}
				}
				(this, e);
				return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
			}
			function u(e, t) {
				if ((e.length - t) % 2 == 0) {
					var n = e.toString("utf16le", t);
					if (n) {
						var r = n.charCodeAt(n.length - 1);
						if (r >= 55296 && r <= 56319)
							return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
					}
					return n
				}
				return this.lastNeed = 1,
				this.lastTotal = 2,
				this.lastChar[0] = e[e.length - 1],
				e.toString("utf16le", t, e.length - 1)
			}
			function c(e) {
				var t = e && e.length ? this.write(e) : "";
				if (this.lastNeed) {
					var n = this.lastTotal - this.lastNeed;
					return t + this.lastChar.toString("utf16le", 0, n)
				}
				return t
			}
			function l(e, t) {
				var n = (e.length - t) % 3;
				return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
			}
			function f(e) {
				var t = e && e.length ? this.write(e) : "";
				return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
			}
			function h(e) {
				return e.toString(this.encoding)
			}
			function p(e) {
				return e && e.length ? this.write(e) : ""
			}
			t.StringDecoder = i,
			i.prototype.write = function (e) {
				if (0 === e.length)
					return "";
				var t,
				n;
				if (this.lastNeed) {
					if (void 0 === (t = this.fillLast(e)))
						return "";
					n = this.lastNeed,
					this.lastNeed = 0
				} else
					n = 0;
				return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
			},
			i.prototype.end = function (e) {
				var t = e && e.length ? this.write(e) : "";
				return this.lastNeed ? t + "�" : t
			},
			i.prototype.text = function (e, t) {
				var n = function (e, t, n) {
					var r = t.length - 1;
					if (r < n)
						return 0;
					var o = a(t[r]);
					if (o >= 0)
						return o > 0 && (e.lastNeed = o - 1), o;
					if (--r < n || -2 === o)
						return 0;
					if ((o = a(t[r])) >= 0)
						return o > 0 && (e.lastNeed = o - 2), o;
					if (--r < n || -2 === o)
						return 0;
					if ((o = a(t[r])) >= 0)
						return o > 0 && (2 === o ? o = 0 : e.lastNeed = o - 3), o;
					return 0
				}
				(this, e, t);
				if (!this.lastNeed)
					return e.toString("utf8", t);
				this.lastTotal = n;
				var r = e.length - (n - this.lastNeed);
				return e.copy(this.lastChar, 0, r),
				e.toString("utf8", t, r)
			},
			i.prototype.fillLast = function (e) {
				if (this.lastNeed <= e.length)
					return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
				e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
				this.lastNeed -= e.length
			}
		}, function (e, t, n) {
			"use strict";
			e.exports = a;
			var r = n(10),
			o = n(15);
			function i(e, t) {
				var n = this._transformState;
				n.transforming = !1;
				var r = n.writecb;
				if (!r)
					return this.emit("error", new Error("write callback called multiple times"));
				n.writechunk = null,
				n.writecb = null,
				null != t && this.push(t),
				r(e);
				var o = this._readableState;
				o.reading = !1,
				(o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
			}
			function a(e) {
				if (!(this instanceof a))
					return new a(e);
				r.call(this, e),
				this._transformState = {
					afterTransform: i.bind(this),
					needTransform: !1,
					transforming: !1,
					writecb: null,
					writechunk: null,
					writeencoding: null
				},
				this._readableState.needReadable = !0,
				this._readableState.sync = !1,
				e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)),
				this.on("prefinish", s)
			}
			function s() {
				var e = this;
				"function" == typeof this._flush ? this._flush(function (t, n) {
					u(e, t, n)
				}) : u(this, null, null)
			}
			function u(e, t, n) {
				if (t)
					return e.emit("error", t);
				if (null != n && e.push(n), e._writableState.length)
					throw new Error("Calling transform done when ws.length != 0");
				if (e._transformState.transforming)
					throw new Error("Calling transform done when still transforming");
				return e.push(null)
			}
			o.inherits = n(7),
			o.inherits(a, r),
			a.prototype.push = function (e, t) {
				return this._transformState.needTransform = !1,
				r.prototype.push.call(this, e, t)
			},
			a.prototype._transform = function (e, t, n) {
				throw new Error("_transform() is not implemented")
			},
			a.prototype._write = function (e, t, n) {
				var r = this._transformState;
				if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
					var o = this._readableState;
					(r.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
				}
			},
			a.prototype._read = function (e) {
				var t = this._transformState;
				null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
			},
			a.prototype._destroy = function (e, t) {
				var n = this;
				r.prototype._destroy.call(this, e, function (e) {
					t(e),
					n.emit("close")
				})
			}
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(61),
			a = n(62),
			s = n(19),
			u = function () {
				function e(t) {
					var n = this;
					this.logger = t,
					this.reconnectDisplay = new a.DefaultReconnectDisplay(document),
					document.addEventListener("DOMContentLoaded", function () {
						var t = document.getElementById(e.DialogId);
						t && (n.reconnectDisplay = new i.UserSpecifiedDisplay(t))
					})
				}
				return e.prototype.onConnectionUp = function () {
					this.reconnectDisplay.hide()
				},
				e.prototype.delay = function () {
					return new Promise(function (t) {
						return setTimeout(t, e.RetryInterval)
					})
				},
				e.prototype.onConnectionDown = function () {
					return r(this, void 0, void 0, function () {
						var t,
						n;
						return o(this, function (r) {
							switch (r.label) {
							case 0:
								this.reconnectDisplay.show(),
								t = 0,
								r.label = 1;
							case 1:
								return t < e.MaxRetries ? [4, this.delay()] : [3, 7];
							case 2:
								r.sent(),
								r.label = 3;
							case 3:
								return r.trys.push([3, 5, , 6]),
								[4, window.Blazor.reconnect()];
							case 4:
								return r.sent() ? [2] : [3, 7];
							case 5:
								return n = r.sent(),
								this.logger.log(s.LogLevel.Error, n),
								[3, 6];
							case 6:
								return t++,
								[3, 1];
							case 7:
								return this.reconnectDisplay.failed(),
								[2]
							}
						})
					})
				},
				e.MaxRetries = 5,
				e.RetryInterval = 3e3,
				e.DialogId = "components-reconnect-modal",
				e
			}
			();
			t.AutoReconnectCircuitHandler = u
		}, function (e, t, n) {
			"use strict";
			(function (e) {
				n.d(t, "a", function () {
					return i
				});
				var r = n(4),
				o = n(1),
				i = function () {
					function t() {}
					return t.prototype.writeHandshakeRequest = function (e) {
						return r.a.write(JSON.stringify(e))
					},
					t.prototype.parseHandshakeResponse = function (t) {
						var n,
						i;
						if (Object(o.f)(t) || void 0 !== e && t instanceof e) {
							var a = new Uint8Array(t);
							if (-1 === (u = a.indexOf(r.a.RecordSeparatorCode)))
								throw new Error("Message is incomplete.");
							var s = u + 1;
							n = String.fromCharCode.apply(null, a.slice(0, s)),
							i = a.byteLength > s ? a.slice(s).buffer : null
						} else {
							var u,
							c = t;
							if (-1 === (u = c.indexOf(r.a.RecordSeparator)))
								throw new Error("Message is incomplete.");
							s = u + 1;
							n = c.substring(0, s),
							i = c.length > s ? c.substring(s) : null
						}
						var l = r.a.parse(n),
						f = JSON.parse(l[0]);
						if (f.type)
							throw new Error("Expected a handshake response from the server.");
						return [i, f]
					},
					t
				}
				()
			}).call(this, n(11).Buffer)
		}, , , , , function (e, t, n) {
			"use strict";
			var r = this && this.__assign || function () {
				return (r = Object.assign || function (e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var o in t = arguments[n])
							Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}).apply(this, arguments)
			},
			o = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			n(12),
			n(21);
			var a = n(2),
			s = n(69),
			u = n(29),
			c = n(40),
			l = n(63),
			f = n(66),
			h = n(19),
			p = n(67),
			d = !1,
			g = !1;
			function y(e) {
				return o(this, void 0, void 0, function () {
					var t,
					n,
					a,
					s,
					l,
					y,
					b,
					m,
					w,
					E,
					S,
					_,
					T,
					k = this;
					return i(this, function (C) {
						switch (C.label) {
						case 0:
							if (g)
								throw new Error("Blazor has already started.");
							return g = !0,
							t = {
								configureSignalR: function (e) {},
								logLevel: h.LogLevel.Warning
							},
							n = r({}, t, e),
							(a = new f.ConsoleLogger(n.logLevel)).log(h.LogLevel.Information, "Starting up blazor server-side application."),
							s = [new c.AutoReconnectCircuitHandler(a)],
							window.Blazor.circuitHandlers = s,
							l = u.fetchBootConfigAsync().then(function (e) {
									return u.loadEmbeddedResourcesAsync(e)
								}),
							[4, v(n, s, a)];
						case 1:
							for (y = C.sent(), b = p.discoverPrerenderedCircuits(document), m = 0; m < b.length; m++)
								for (w = b[m], E = 0; E < w.components.length; E++)
									w.components[E].initialize();
							return [4, l];
						case 2:
							return C.sent(),
							[4, p.startCircuit(y)];
						case 3:
							return (S = C.sent()) || a.log(h.LogLevel.Information, "No preregistered components to render."),
							_ = function (e) {
								return o(k, void 0, void 0, function () {
									var t,
									r;
									return i(this, function (o) {
										switch (o.label) {
										case 0:
											return d ? [2, !1] : (r = e) ? [3, 2] : [4, v(n, s, a)];
										case 1:
											r = o.sent(),
											o.label = 2;
										case 2:
											return t = r,
											[4, Promise.all(b.map(function (e) {
														return e.reconnect(t)
													}))];
										case 3:
											return function (e) {
												return !e.reduce(function (e, t) {
													return e && t
												}, !0)
											}
											(o.sent()) ? [2, !1] : (s.forEach(function (e) {
													return e.onConnectionUp && e.onConnectionUp()
												}), [2, !0])
										}
									})
								})
							},
							window.Blazor.reconnect = _,
							T = _(y),
							S && b.push(S),
							[4, T];
						case 4:
							return C.sent(),
							a.log(h.LogLevel.Information, "Blazor server-side application started."),
							[2]
						}
					})
				})
			}
			function v(e, t, n) {
				return o(this, void 0, void 0, function () {
					var r,
					o,
					u,
					c;
					return i(this, function (i) {
						switch (i.label) {
						case 0:
							(r = new s.MessagePackHubProtocol).name = "blazorpack",
							o = (new a.HubConnectionBuilder).withUrl("_blazor").withHubProtocol(r),
							e.configureSignalR(o),
							(u = o.build()).on("JS.BeginInvokeJS", DotNet.jsCallDispatcher.beginInvokeJSFromDotNet),
							u.on("JS.RenderBatch", function (e, t, r) {
								n.log(h.LogLevel.Debug, "Received render batch for " + e + " with id " + t + " and " + r.byteLength + " bytes."),
								l.default.getOrCreateQueue(e, n).processBatch(t, r, u)
							}),
							u.onclose(function (e) {
								return !d && t.forEach(function (t) {
									return t.onConnectionDown && t.onConnectionDown(e)
								})
							}),
							u.on("JS.Error", function (e) {
								return b(u, e, n)
							}),
							window.Blazor._internal.forceCloseConnection = function () {
								return u.stop()
							},
							i.label = 1;
						case 1:
							return i.trys.push([1, 3, , 4]),
							[4, u.start()];
						case 2:
							return i.sent(),
							[3, 4];
						case 3:
							return c = i.sent(),
							b(u, c, n),
							[3, 4];
						case 4:
							return DotNet.attachDispatcher({
								beginInvokeDotNetFromJS: function (e, t, n, r, o) {
									u.send("BeginInvokeDotNetFromJS", e ? e.toString() : null, t, n, r || 0, o)
								}
							}),
							[2, u]
						}
					})
				})
			}
			function b(e, t, n) {
				n.log(h.LogLevel.Error, t),
				e && (d = !0, e.stop())
			}
			window.Blazor.start = y,
			u.shouldAutoStart() && y()
		}, function (e, t, n) {
			"use strict";
			t.byteLength = function (e) {
				var t = c(e),
				n = t[0],
				r = t[1];
				return 3 * (n + r) / 4 - r
			},
			t.toByteArray = function (e) {
				for (var t, n = c(e), r = n[0], a = n[1], s = new i(function (e, t, n) {
							return 3 * (t + n) / 4 - n
						}
							(0, r, a)), u = 0, l = a > 0 ? r - 4 : r, f = 0; f < l; f += 4)
					t = o[e.charCodeAt(f)] << 18 | o[e.charCodeAt(f + 1)] << 12 | o[e.charCodeAt(f + 2)] << 6 | o[e.charCodeAt(f + 3)], s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = 255 & t;
				2 === a && (t = o[e.charCodeAt(f)] << 2 | o[e.charCodeAt(f + 1)] >> 4, s[u++] = 255 & t);
				1 === a && (t = o[e.charCodeAt(f)] << 10 | o[e.charCodeAt(f + 1)] << 4 | o[e.charCodeAt(f + 2)] >> 2, s[u++] = t >> 8 & 255, s[u++] = 255 & t);
				return s
			},
			t.fromByteArray = function (e) {
				for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383)
					i.push(l(e, a, a + 16383 > s ? s : a + 16383));
				1 === o ? (t = e[n - 1], i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
				return i.join("")
			};
			for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s)
				r[s] = a[s], o[a.charCodeAt(s)] = s;
			function c(e) {
				var t = e.length;
				if (t % 4 > 0)
					throw new Error("Invalid string. Length must be a multiple of 4");
				var n = e.indexOf("=");
				return -1 === n && (n = t),
				[n, n === t ? 0 : 4 - n % 4]
			}
			function l(e, t, n) {
				for (var o, i, a = [], s = t; s < n; s += 3)
					o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
				return a.join("")
			}
			o["-".charCodeAt(0)] = 62,
			o["_".charCodeAt(0)] = 63
		}, function (e, t) {
			t.read = function (e, t, n, r, o) {
				var i,
				a,
				s = 8 * o - r - 1,
				u = (1 << s) - 1,
				c = u >> 1,
				l = -7,
				f = n ? o - 1 : 0,
				h = n ? -1 : 1,
				p = e[t + f];
				for (f += h, i = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; i = 256 * i + e[t + f], f += h, l -= 8);
				for (a = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; a = 256 * a + e[t + f], f += h, l -= 8);
				if (0 === i)
					i = 1 - c;
				else {
					if (i === u)
						return a ? NaN : 1 / 0 * (p ? -1 : 1);
					a += Math.pow(2, r),
					i -= c
				}
				return (p ? -1 : 1) * a * Math.pow(2, i - r)
			},
			t.write = function (e, t, n, r, o, i) {
				var a,
				s,
				u,
				c = 8 * i - o - 1,
				l = (1 << c) - 1,
				f = l >> 1,
				h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				p = r ? 0 : i - 1,
				d = r ? 1 : -1,
				g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
				for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (a++, u /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, o), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + p] = 255 & s, p += d, s /= 256, o -= 8);
				for (a = a << o | s, c += o; c > 0; e[n + p] = 255 & a, p += d, a /= 256, c -= 8);
				e[n + p - d] |= 128 * g
			}
		}, function (e, t, n) {
			"use strict";
			(function (t) {
				/*!
				 * The buffer module from node.js, for the browser.
				 *
				 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
				 * @license  MIT
				 */
				function r(e, t) {
					if (e === t)
						return 0;
					for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
						if (e[o] !== t[o]) {
							n = e[o],
							r = t[o];
							break
						}
					return n < r ? -1 : r < n ? 1 : 0
				}
				function o(e) {
					return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
				}
				var i = n(30),
				a = Object.prototype.hasOwnProperty,
				s = Array.prototype.slice,
				u = "foo" === function () {}
				.name;
				function c(e) {
					return Object.prototype.toString.call(e)
				}
				function l(e) {
					return !o(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
				}
				var f = e.exports = v,
				h = /\s*function\s+([^\(\s]*)\s*/;
				function p(e) {
					if (i.isFunction(e)) {
						if (u)
							return e.name;
						var t = e.toString().match(h);
						return t && t[1]
					}
				}
				function d(e, t) {
					return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
				}
				function g(e) {
					if (u || !i.isFunction(e))
						return i.inspect(e);
					var t = p(e);
					return "[Function" + (t ? ": " + t : "") + "]"
				}
				function y(e, t, n, r, o) {
					throw new f.AssertionError({
						message: n,
						actual: e,
						expected: t,
						operator: r,
						stackStartFunction: o
					})
				}
				function v(e, t) {
					e || y(e, !0, t, "==", f.ok)
				}
				function b(e, t, n, a) {
					if (e === t)
						return !0;
					if (o(e) && o(t))
						return 0 === r(e, t);
					if (i.isDate(e) && i.isDate(t))
						return e.getTime() === t.getTime();
					if (i.isRegExp(e) && i.isRegExp(t))
						return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
					if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
						if (l(e) && l(t) && c(e) === c(t) && !(e instanceof Float32Array || e instanceof Float64Array))
							return 0 === r(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
						if (o(e) !== o(t))
							return !1;
						var u = (a = a || {
								actual: [],
								expected: []
							}).actual.indexOf(e);
						return -1 !== u && u === a.expected.indexOf(t) || (a.actual.push(e), a.expected.push(t), function (e, t, n, r) {
							if (null == e || null == t)
								return !1;
							if (i.isPrimitive(e) || i.isPrimitive(t))
								return e === t;
							if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
								return !1;
							var o = m(e),
							a = m(t);
							if (o && !a || !o && a)
								return !1;
							if (o)
								return e = s.call(e), t = s.call(t), b(e, t, n);
							var u,
							c,
							l = S(e),
							f = S(t);
							if (l.length !== f.length)
								return !1;
							for (l.sort(), f.sort(), c = l.length - 1; c >= 0; c--)
								if (l[c] !== f[c])
									return !1;
							for (c = l.length - 1; c >= 0; c--)
								if (u = l[c], !b(e[u], t[u], n, r))
									return !1;
							return !0
						}
							(e, t, n, a))
					}
					return n ? e === t : e == t
				}
				function m(e) {
					return "[object Arguments]" == Object.prototype.toString.call(e)
				}
				function w(e, t) {
					if (!e || !t)
						return !1;
					if ("[object RegExp]" == Object.prototype.toString.call(t))
						return t.test(e);
					try {
						if (e instanceof t)
							return !0
					} catch (e) {}
					return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
				}
				function E(e, t, n, r) {
					var o;
					if ("function" != typeof t)
						throw new TypeError('"block" argument must be a function');
					"string" == typeof n && (r = n, n = null),
					o = function (e) {
						var t;
						try {
							e()
						} catch (e) {
							t = e
						}
						return t
					}
					(t),
					r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."),
					e && !o && y(o, n, "Missing expected exception" + r);
					var a = "string" == typeof r,
					s = !e && o && !n;
					if ((!e && i.isError(o) && a && w(o, n) || s) && y(o, n, "Got unwanted exception" + r), e && o && n && !w(o, n) || !e && o)
						throw o
				}
				f.AssertionError = function (e) {
					var t;
					this.name = "AssertionError",
					this.actual = e.actual,
					this.expected = e.expected,
					this.operator = e.operator,
					e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = d(g((t = this).actual), 128) + " " + t.operator + " " + d(g(t.expected), 128), this.generatedMessage = !0);
					var n = e.stackStartFunction || y;
					if (Error.captureStackTrace)
						Error.captureStackTrace(this, n);
					else {
						var r = new Error;
						if (r.stack) {
							var o = r.stack,
							i = p(n),
							a = o.indexOf("\n" + i);
							if (a >= 0) {
								var s = o.indexOf("\n", a + 1);
								o = o.substring(s + 1)
							}
							this.stack = o
						}
					}
				},
				i.inherits(f.AssertionError, Error),
				f.fail = y,
				f.ok = v,
				f.equal = function (e, t, n) {
					e != t && y(e, t, n, "==", f.equal)
				},
				f.notEqual = function (e, t, n) {
					e == t && y(e, t, n, "!=", f.notEqual)
				},
				f.deepEqual = function (e, t, n) {
					b(e, t, !1) || y(e, t, n, "deepEqual", f.deepEqual)
				},
				f.deepStrictEqual = function (e, t, n) {
					b(e, t, !0) || y(e, t, n, "deepStrictEqual", f.deepStrictEqual)
				},
				f.notDeepEqual = function (e, t, n) {
					b(e, t, !1) && y(e, t, n, "notDeepEqual", f.notDeepEqual)
				},
				f.notDeepStrictEqual = function e(t, n, r) {
					b(t, n, !0) && y(t, n, r, "notDeepStrictEqual", e)
				},
				f.strictEqual = function (e, t, n) {
					e !== t && y(e, t, n, "===", f.strictEqual)
				},
				f.notStrictEqual = function (e, t, n) {
					e === t && y(e, t, n, "!==", f.notStrictEqual)
				},
				f.throws = function (e, t, n) {
					E(!0, e, t, n)
				},
				f.doesNotThrow = function (e, t, n) {
					E(!1, e, t, n)
				},
				f.ifError = function (e) {
					if (e)
						throw e
				};
				var S = Object.keys || function (e) {
					var t = [];
					for (var n in e)
						a.call(e, n) && t.push(n);
					return t
				}
			}).call(this, n(5))
		}, function (e, t) {
			e.exports = function (e) {
				return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
			}
		}, function (e, t) {}, function (e, t, n) {
			"use strict";
			var r = n(6).Buffer,
			o = n(53);
			e.exports = function () {
				function e() {
					!function (e, t) {
						if (!(e instanceof t))
							throw new TypeError("Cannot call a class as a function")
					}
					(this, e),
					this.head = null,
					this.tail = null,
					this.length = 0
				}
				return e.prototype.push = function (e) {
					var t = {
						data: e,
						next: null
					};
					this.length > 0 ? this.tail.next = t : this.head = t,
					this.tail = t,
					++this.length
				},
				e.prototype.unshift = function (e) {
					var t = {
						data: e,
						next: this.head
					};
					0 === this.length && (this.tail = t),
					this.head = t,
					++this.length
				},
				e.prototype.shift = function () {
					if (0 !== this.length) {
						var e = this.head.data;
						return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
						--this.length,
						e
					}
				},
				e.prototype.clear = function () {
					this.head = this.tail = null,
					this.length = 0
				},
				e.prototype.join = function (e) {
					if (0 === this.length)
						return "";
					for (var t = this.head, n = "" + t.data; t = t.next; )
						n += e + t.data;
					return n
				},
				e.prototype.concat = function (e) {
					if (0 === this.length)
						return r.alloc(0);
					if (1 === this.length)
						return this.head.data;
					for (var t, n, o, i = r.allocUnsafe(e >>> 0), a = this.head, s = 0; a; )
						t = a.data, n = i, o = s, t.copy(n, o), s += a.data.length, a = a.next;
					return i
				},
				e
			}
			(),
			o && o.inspect && o.inspect.custom && (e.exports.prototype[o.inspect.custom] = function () {
				var e = o.inspect({
						length: this.length
					});
				return this.constructor.name + " " + e
			})
		}, function (e, t) {}, function (e, t, n) {
			(function (e) {
				var r = void 0 !== e && e || "undefined" != typeof self && self || window,
				o = Function.prototype.apply;
				function i(e, t) {
					this._id = e,
					this._clearFn = t
				}
				t.setTimeout = function () {
					return new i(o.call(setTimeout, r, arguments), clearTimeout)
				},
				t.setInterval = function () {
					return new i(o.call(setInterval, r, arguments), clearInterval)
				},
				t.clearTimeout = t.clearInterval = function (e) {
					e && e.close()
				},
				i.prototype.unref = i.prototype.ref = function () {},
				i.prototype.close = function () {
					this._clearFn.call(r, this._id)
				},
				t.enroll = function (e, t) {
					clearTimeout(e._idleTimeoutId),
					e._idleTimeout = t
				},
				t.unenroll = function (e) {
					clearTimeout(e._idleTimeoutId),
					e._idleTimeout = -1
				},
				t._unrefActive = t.active = function (e) {
					clearTimeout(e._idleTimeoutId);
					var t = e._idleTimeout;
					t >= 0 && (e._idleTimeoutId = setTimeout(function () {
								e._onTimeout && e._onTimeout()
							}, t))
				},
				n(55),
				t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
				t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
			}).call(this, n(5))
		}, function (e, t, n) {
			(function (e, t) {
				!function (e, n) {
					"use strict";
					if (!e.setImmediate) {
						var r,
						o,
						i,
						a,
						s,
						u = 1,
						c = {},
						l = !1,
						f = e.document,
						h = Object.getPrototypeOf && Object.getPrototypeOf(e);
						h = h && h.setTimeout ? h : e,
						"[object process]" === {}
						.toString.call(e.process) ? r = function (e) {
							t.nextTick(function () {
								d(e)
							})
						}
						 : !function () {
							if (e.postMessage && !e.importScripts) {
								var t = !0,
								n = e.onmessage;
								return e.onmessage = function () {
									t = !1
								},
								e.postMessage("", "*"),
								e.onmessage = n,
								t
							}
						}
						() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function (e) {
							d(e.data)
						}, r = function (e) {
							i.port2.postMessage(e)
						}) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function (e) {
							var t = f.createElement("script");
							t.onreadystatechange = function () {
								d(e),
								t.onreadystatechange = null,
								o.removeChild(t),
								t = null
							},
							o.appendChild(t)
						}) : r = function (e) {
							setTimeout(d, 0, e)
						}
						 : (a = "setImmediate$" + Math.random() + "$", s = function (t) {
							t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && d(+t.data.slice(a.length))
						}, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), r = function (t) {
							e.postMessage(a + t, "*")
						}),
						h.setImmediate = function (e) {
							"function" != typeof e && (e = new Function("" + e));
							for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
								t[n] = arguments[n + 1];
							var o = {
								callback: e,
								args: t
							};
							return c[u] = o,
							r(u),
							u++
						},
						h.clearImmediate = p
					}
					function p(e) {
						delete c[e]
					}
					function d(e) {
						if (l)
							setTimeout(d, 0, e);
						else {
							var t = c[e];
							if (t) {
								l = !0;
								try {
									!function (e) {
										var t = e.callback,
										r = e.args;
										switch (r.length) {
										case 0:
											t();
											break;
										case 1:
											t(r[0]);
											break;
										case 2:
											t(r[0], r[1]);
											break;
										case 3:
											t(r[0], r[1], r[2]);
											break;
										default:
											t.apply(n, r)
										}
									}
									(t)
								}
								finally {
									p(e),
									l = !1
								}
							}
						}
					}
				}
				("undefined" == typeof self ? void 0 === e ? this : e : self)
			}).call(this, n(5), n(14))
		}, function (e, t, n) {
			(function (t) {
				function n(e) {
					try {
						if (!t.localStorage)
							return !1
					} catch (e) {
						return !1
					}
					var n = t.localStorage[e];
					return null != n && "true" === String(n).toLowerCase()
				}
				e.exports = function (e, t) {
					if (n("noDeprecation"))
						return e;
					var r = !1;
					return function () {
						if (!r) {
							if (n("throwDeprecation"))
								throw new Error(t);
							n("traceDeprecation") ? console.trace(t) : console.warn(t),
							r = !0
						}
						return e.apply(this, arguments)
					}
				}
			}).call(this, n(5))
		}, function (e, t, n) {
			"use strict";
			e.exports = i;
			var r = n(39),
			o = n(15);
			function i(e) {
				if (!(this instanceof i))
					return new i(e);
				r.call(this, e)
			}
			o.inherits = n(7),
			o.inherits(i, r),
			i.prototype._transform = function (e, t, n) {
				n(null, e)
			}
		}, function (e, t, n) {
			"use strict";
			var r = n(32).Transform,
			o = n(7),
			i = n(17);
			function a(e) {
				(e = e || {}).objectMode = !0,
				e.highWaterMark = 16,
				r.call(this, e),
				this._msgpack = e.msgpack
			}
			function s(e) {
				if (!(this instanceof s))
					return (e = e || {}).msgpack = this, new s(e);
				a.call(this, e),
				this._wrap = "wrap" in e && e.wrap
			}
			function u(e) {
				if (!(this instanceof u))
					return (e = e || {}).msgpack = this, new u(e);
				a.call(this, e),
				this._chunks = i(),
				this._wrap = "wrap" in e && e.wrap
			}
			o(a, r),
			o(s, a),
			s.prototype._transform = function (e, t, n) {
				var r = null;
				try {
					r = this._msgpack.encode(this._wrap ? e.value : e).slice(0)
				} catch (e) {
					return this.emit("error", e),
					n()
				}
				this.push(r),
				n()
			},
			o(u, a),
			u.prototype._transform = function (e, t, n) {
				e && this._chunks.append(e);
				try {
					var r = this._msgpack.decode(this._chunks);
					this._wrap && (r = {
							value: r
						}),
					this.push(r)
				} catch (e) {
					return void(e instanceof this._msgpack.IncompleteBufferError ? n() : this.emit("error", e))
				}
				this._chunks.length > 0 ? this._transform(null, t, n) : n()
			},
			e.exports.decoder = u,
			e.exports.encoder = s
		}, function (e, t, n) {
			"use strict";
			var r = n(17);
			function o(e) {
				Error.call(this),
				Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
				this.name = this.constructor.name,
				this.message = e || "unable to decode"
			}
			n(30).inherits(o, Error),
			e.exports = function (e) {
				return function (e) {
					e instanceof r || (e = r().append(e));
					var t = i(e);
					if (t)
						return e.consume(t.bytesConsumed), t.value;
					throw new o
				};
				function t(e, t, n) {
					return t >= n + e
				}
				function n(e, t) {
					return {
						value: e,
						bytesConsumed: t
					}
				}
				function i(e, r) {
					r = void 0 === r ? 0 : r;
					var o = e.length - r;
					if (o <= 0)
						return null;
					var i,
					l,
					f,
					h = e.readUInt8(r),
					p = 0;
					if (!function (e, t) {
						var n = function (e) {
							switch (e) {
							case 196:
								return 2;
							case 197:
								return 3;
							case 198:
								return 5;
							case 199:
								return 3;
							case 200:
								return 4;
							case 201:
								return 6;
							case 202:
								return 5;
							case 203:
								return 9;
							case 204:
								return 2;
							case 205:
								return 3;
							case 206:
								return 5;
							case 207:
								return 9;
							case 208:
								return 2;
							case 209:
								return 3;
							case 210:
								return 5;
							case 211:
								return 9;
							case 212:
								return 3;
							case 213:
								return 4;
							case 214:
								return 6;
							case 215:
								return 10;
							case 216:
								return 18;
							case 217:
								return 2;
							case 218:
								return 3;
							case 219:
								return 5;
							case 222:
								return 3;
							default:
								return -1
							}
						}
						(e);
						return !(-1 !== n && t < n)
					}
						(h, o))
						return null;
					switch (h) {
					case 192:
						return n(null, 1);
					case 194:
						return n(!1, 1);
					case 195:
						return n(!0, 1);
					case 204:
						return n(p = e.readUInt8(r + 1), 2);
					case 205:
						return n(p = e.readUInt16BE(r + 1), 3);
					case 206:
						return n(p = e.readUInt32BE(r + 1), 5);
					case 207:
						for (f = 7; f >= 0; f--)
							p += e.readUInt8(r + f + 1) * Math.pow(2, 8 * (7 - f));
						return n(p, 9);
					case 208:
						return n(p = e.readInt8(r + 1), 2);
					case 209:
						return n(p = e.readInt16BE(r + 1), 3);
					case 210:
						return n(p = e.readInt32BE(r + 1), 5);
					case 211:
						return n(p = function (e, t) {
							var n = 128 == (128 & e[t]);
							if (n)
								for (var r = 1, o = t + 7; o >= t; o--) {
									var i = (255 ^ e[o]) + r;
									e[o] = 255 & i,
									r = i >> 8
								}
							var a = e.readUInt32BE(t + 0),
							s = e.readUInt32BE(t + 4);
							return (4294967296 * a + s) * (n ? -1 : 1)
						}
							(e.slice(r + 1, r + 9), 0), 9);
					case 202:
						return n(p = e.readFloatBE(r + 1), 5);
					case 203:
						return n(p = e.readDoubleBE(r + 1), 9);
					case 217:
						return t(i = e.readUInt8(r + 1), o, 2) ? n(p = e.toString("utf8", r + 2, r + 2 + i), 2 + i) : null;
					case 218:
						return t(i = e.readUInt16BE(r + 1), o, 3) ? n(p = e.toString("utf8", r + 3, r + 3 + i), 3 + i) : null;
					case 219:
						return t(i = e.readUInt32BE(r + 1), o, 5) ? n(p = e.toString("utf8", r + 5, r + 5 + i), 5 + i) : null;
					case 196:
						return t(i = e.readUInt8(r + 1), o, 2) ? n(p = e.slice(r + 2, r + 2 + i), 2 + i) : null;
					case 197:
						return t(i = e.readUInt16BE(r + 1), o, 3) ? n(p = e.slice(r + 3, r + 3 + i), 3 + i) : null;
					case 198:
						return t(i = e.readUInt32BE(r + 1), o, 5) ? n(p = e.slice(r + 5, r + 5 + i), 5 + i) : null;
					case 220:
						return o < 3 ? null : (i = e.readUInt16BE(r + 1), a(e, r, i, 3));
					case 221:
						return o < 5 ? null : (i = e.readUInt32BE(r + 1), a(e, r, i, 5));
					case 222:
						return i = e.readUInt16BE(r + 1),
						s(e, r, i, 3);
					case 223:
						return i = e.readUInt32BE(r + 1),
						s(e, r, i, 5);
					case 212:
						return u(e, r, 1);
					case 213:
						return u(e, r, 2);
					case 214:
						return u(e, r, 4);
					case 215:
						return u(e, r, 8);
					case 216:
						return u(e, r, 16);
					case 199:
						return i = e.readUInt8(r + 1),
						l = e.readUInt8(r + 2),
						t(i, o, 3) ? c(e, r, l, i, 3) : null;
					case 200:
						return i = e.readUInt16BE(r + 1),
						l = e.readUInt8(r + 3),
						t(i, o, 4) ? c(e, r, l, i, 4) : null;
					case 201:
						return i = e.readUInt32BE(r + 1),
						l = e.readUInt8(r + 5),
						t(i, o, 6) ? c(e, r, l, i, 6) : null
					}
					if (144 == (240 & h))
						return a(e, r, i = 15 & h, 1);
					if (128 == (240 & h))
						return s(e, r, i = 15 & h, 1);
					if (160 == (224 & h))
						return t(i = 31 & h, o, 1) ? n(p = e.toString("utf8", r + 1, r + i + 1), i + 1) : null;
					if (h >= 224)
						return n(p = h - 256, 1);
					if (h < 128)
						return n(h, 1);
					throw new Error("not implemented yet")
				}
				function a(e, t, r, o) {
					var a,
					s = [],
					u = 0;
					for (t += o, a = 0; a < r; a++) {
						var c = i(e, t);
						if (!c)
							return null;
						s.push(c.value),
						t += c.bytesConsumed,
						u += c.bytesConsumed
					}
					return n(s, o + u)
				}
				function s(e, t, r, o) {
					var a,
					s = {},
					u = 0;
					for (t += o, a = 0; a < r; a++) {
						var c = i(e, t);
						if (!c)
							return null;
						var l = i(e, t += c.bytesConsumed);
						if (!l)
							return null;
						s[c.value] = l.value,
						t += l.bytesConsumed,
						u += c.bytesConsumed + l.bytesConsumed
					}
					return n(s, o + u)
				}
				function u(e, t, n) {
					var r = e.readInt8(t + 1);
					return c(e, t, r, n, 2)
				}
				function c(t, r, o, i, a) {
					var s,
					u;
					if (r += a, o < 0)
						switch (o) {
						case -1:
							return function (e, t, r) {
								var o,
								i = 0;
								switch (t) {
								case 4:
									o = e.readUInt32BE(0);
									break;
								case 8:
									var a = e.readUInt32BE(0),
									s = e.readUInt32BE(4);
									i = a / 4,
									o = (3 & a) * Math.pow(2, 32) + s;
									break;
								case 12:
									throw new Error("timestamp 96 is not yet implemented")
								}
								var u = 1e3 * o + Math.round(i / 1e6);
								return n(new Date(u), t + r)
							}
							(u = t.slice(r, r + i), i, a)
						}
					for (s = 0; s < e.length; s++) {
						if (o === e[s].type)
							return u = t.slice(r, r + i), n(e[s].decode(u), a + i)
					}
					throw new Error("unable to find ext type " + o)
				}
			},
			e.exports.IncompleteBufferError = o
		}, function (e, t, n) {
			"use strict";
			var r = n(6).Buffer,
			o = n(17);
			function i(e, t) {
				var n,
				o = !0;
				return Math.fround && (o = Math.fround(e) !== e),
				t && (o = !0),
				o ? ((n = r.allocUnsafe(9))[0] = 203, n.writeDoubleBE(e, 1)) : ((n = r.allocUnsafe(5))[0] = 202, n.writeFloatBE(e, 1)),
				n
			}
			e.exports = function (e, t, n, a) {
				function s(u, c) {
					var l,
					f,
					h;
					if (void 0 === u)
						throw new Error("undefined is not encodable in msgpack!");
					if ((h = u) != h && "number" == typeof h)
						throw new Error("NaN is not encodable in msgpack!");
					if (null === u)
						(l = r.allocUnsafe(1))[0] = 192;
					else if (!0 === u)
						(l = r.allocUnsafe(1))[0] = 195;
					else if (!1 === u)
						(l = r.allocUnsafe(1))[0] = 194;
					else if ("string" == typeof u)
						(f = r.byteLength(u)) < 32 ? ((l = r.allocUnsafe(1 + f))[0] = 160 | f, f > 0 && l.write(u, 1)) : f <= 255 && !n ? ((l = r.allocUnsafe(2 + f))[0] = 217, l[1] = f, l.write(u, 2)) : f <= 65535 ? ((l = r.allocUnsafe(3 + f))[0] = 218, l.writeUInt16BE(f, 1), l.write(u, 3)) : ((l = r.allocUnsafe(5 + f))[0] = 219, l.writeUInt32BE(f, 1), l.write(u, 5));
					else if (u && (u.readUInt32LE || u instanceof Uint8Array))
						u instanceof Uint8Array && (u = r.from(u)), u.length <= 255 ? ((l = r.allocUnsafe(2))[0] = 196, l[1] = u.length) : u.length <= 65535 ? ((l = r.allocUnsafe(3))[0] = 197, l.writeUInt16BE(u.length, 1)) : ((l = r.allocUnsafe(5))[0] = 198, l.writeUInt32BE(u.length, 1)), l = o([l, u]);
					else if (Array.isArray(u))
						u.length < 16 ? (l = r.allocUnsafe(1))[0] = 144 | u.length : u.length < 65536 ? ((l = r.allocUnsafe(3))[0] = 220, l.writeUInt16BE(u.length, 1)) : ((l = r.allocUnsafe(5))[0] = 221, l.writeUInt32BE(u.length, 1)), l = u.reduce(function (e, t) {
								return e.append(s(t, !0)),
								e
							}, o().append(l));
					else {
						if (!a && "function" == typeof u.getDate)
							return function (e) {
								var t,
								n = 1 * e,
								i = Math.floor(n / 1e3),
								a = 1e6 * (n - 1e3 * i);
								if (a || i > 4294967295) {
									(t = r.allocUnsafe(10))[0] = 215,
									t[1] = -1;
									var s = 4 * a,
									u = i / Math.pow(2, 32),
									c = s + u & 4294967295,
									l = 4294967295 & i;
									t.writeInt32BE(c, 2),
									t.writeInt32BE(l, 6)
								} else (t = r.allocUnsafe(6))[0] = 214, t[1] = -1, t.writeUInt32BE(Math.floor(n / 1e3), 2);
								return o().append(t)
							}
						(u);
						if ("object" == typeof u)
							l = function (t) {
								var n,
								i,
								a = -1,
								s = [];
								for (n = 0; n < e.length; n++)
									if (e[n].check(t)) {
										i = e[n].encode(t);
										break
									}
								if (!i)
									return null;
								1 == (a = i.length - 1) ? s.push(212) : 2 === a ? s.push(213) : 4 === a ? s.push(214) : 8 === a ? s.push(215) : 16 === a ? s.push(216) : a < 256 ? (s.push(199), s.push(a)) : a < 65536 ? (s.push(200), s.push(a >> 8), s.push(255 & a)) : (s.push(201), s.push(a >> 24), s.push(a >> 16 & 255), s.push(a >> 8 & 255), s.push(255 & a));
								return o().append(r.from(s)).append(i)
							}
						(u) || function (e) {
							var t,
							n,
							i = [],
							a = 0;
							for (t in e)
								e.hasOwnProperty(t) && void 0 !== e[t] && "function" != typeof e[t] && (++a, i.push(s(t, !0)), i.push(s(e[t], !0)));
							a < 16 ? (n = r.allocUnsafe(1))[0] = 128 | a : a < 65535 ? ((n = r.allocUnsafe(3))[0] = 222, n.writeUInt16BE(a, 1)) : ((n = r.allocUnsafe(5))[0] = 223, n.writeUInt32BE(a, 1));
							return i.unshift(n),
							i.reduce(function (e, t) {
								return e.append(t)
							}, o())
						}
						(u);
						else if ("number" == typeof u) {
							if (function (e) {
								return e % 1 != 0
							}
								(u))
								return i(u, t);
							if (u >= 0)
								if (u < 128)
									(l = r.allocUnsafe(1))[0] = u;
								else if (u < 256)
									(l = r.allocUnsafe(2))[0] = 204, l[1] = u;
								else if (u < 65536)
									(l = r.allocUnsafe(3))[0] = 205, l.writeUInt16BE(u, 1);
								else if (u <= 4294967295)
									(l = r.allocUnsafe(5))[0] = 206, l.writeUInt32BE(u, 1);
								else {
									if (!(u <= 9007199254740991))
										return i(u, !0);
									(l = r.allocUnsafe(9))[0] = 207,
									function (e, t) {
										for (var n = 7; n >= 0; n--)
											e[n + 1] = 255 & t, t /= 256
									}
									(l, u)
								}
							else if (u >= -32)
								(l = r.allocUnsafe(1))[0] = 256 + u;
							else if (u >= -128)
								(l = r.allocUnsafe(2))[0] = 208, l.writeInt8(u, 1);
							else if (u >= -32768)
								(l = r.allocUnsafe(3))[0] = 209, l.writeInt16BE(u, 1);
							else if (u > -214748365)
								(l = r.allocUnsafe(5))[0] = 210, l.writeInt32BE(u, 1);
							else {
								if (!(u >= -9007199254740991))
									return i(u, !0);
								(l = r.allocUnsafe(9))[0] = 211,
								function (e, t, n) {
									var r = n < 0;
									r && (n = Math.abs(n));
									var o = n % 4294967296,
									i = n / 4294967296;
									if (e.writeUInt32BE(Math.floor(i), t + 0), e.writeUInt32BE(o, t + 4), r)
										for (var a = 1, s = t + 7; s >= t; s--) {
											var u = (255 ^ e[s]) + a;
											e[s] = 255 & u,
											a = u >> 8
										}
								}
								(l, 1, u)
							}
						}
					}
					if (!l)
						throw new Error("not implemented yet");
					return c ? l : l.slice()
				}
				return s
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function () {
				function e(e) {
					this.dialog = e
				}
				return e.prototype.show = function () {
					this.removeClasses(),
					this.dialog.classList.add(e.ShowClassName)
				},
				e.prototype.hide = function () {
					this.removeClasses(),
					this.dialog.classList.add(e.HideClassName)
				},
				e.prototype.failed = function () {
					this.removeClasses(),
					this.dialog.classList.add(e.FailedClassName)
				},
				e.prototype.removeClasses = function () {
					this.dialog.classList.remove(e.ShowClassName, e.HideClassName, e.FailedClassName)
				},
				e.ShowClassName = "components-reconnect-show",
				e.HideClassName = "components-reconnect-hide",
				e.FailedClassName = "components-reconnect-failed",
				e
			}
			();
			t.UserSpecifiedDisplay = r
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(40),
			o = function () {
				function e(e) {
					this.document = e,
					this.addedToDom = !1,
					this.modal = this.document.createElement("div"),
					this.modal.id = r.AutoReconnectCircuitHandler.DialogId;
					this.modal.style.cssText = ["position: fixed", "top: 0", "right: 0", "bottom: 0", "left: 0", "z-index: 1000", "display: none", "overflow: hidden", "background-color: #fff", "opacity: 0.8", "text-align: center", "font-weight: bold"].join(";"),
					this.modal.innerHTML = '<h5 style="margin-top: 20px"></h5><button style="margin:5px auto 5px">Retry?</button>',
					this.message = this.modal.querySelector("h5"),
					this.button = this.modal.querySelector("button"),
					this.button.addEventListener("click", function () {
						return window.Blazor.reconnect()
					})
				}
				return e.prototype.show = function () {
					this.addedToDom || (this.addedToDom = !0, this.document.body.appendChild(this.modal)),
					this.modal.style.display = "block",
					this.button.style.display = "none",
					this.message.textContent = "Attempting to reconnect to the server..."
				},
				e.prototype.hide = function () {
					this.modal.style.display = "none"
				},
				e.prototype.failed = function () {
					this.button.style.display = "block",
					this.message.textContent = "Failed to reconnect to the server."
				},
				e
			}
			();
			t.DefaultReconnectDisplay = o
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(8),
			a = n(64),
			s = n(19),
			u = function () {
				function e(e, t) {
					this.nextBatchId = 2,
					this.browserRendererId = e,
					this.logger = t
				}
				return e.getOrCreateQueue = function (t, n) {
					var r = this.renderQueues.get(t);
					if (r)
						return r;
					var o = new e(t, n);
					return this.renderQueues.set(t, o),
					o
				},
				e.prototype.processBatch = function (e, t, n) {
					if (e < this.nextBatchId)
						this.logger.log(s.LogLevel.Debug, "Batch " + e + " already processed. Waiting for batch " + this.nextBatchId + ".");
					else if (e > this.nextBatchId)
						this.logger.log(s.LogLevel.Debug, "Waiting for batch " + this.nextBatchId + ". Batch " + e + " not processed.");
					else
						try {
							this.nextBatchId++,
							this.logger.log(s.LogLevel.Debug, "Applying batch " + e + "."),
							i.renderBatch(this.browserRendererId, new a.OutOfProcessRenderBatch(t)),
							this.completeBatch(n, e)
						} catch (t) {
							throw this.logger.log(s.LogLevel.Error, "There was an error applying batch " + e + "."),
							n.send("OnRenderCompleted", e, t.toString()),
							t
						}
				},
				e.prototype.getLastBatchid = function () {
					return this.nextBatchId - 1
				},
				e.prototype.completeBatch = function (e, t) {
					return r(this, void 0, void 0, function () {
						return o(this, function (n) {
							switch (n.label) {
							case 0:
								return n.trys.push([0, 2, , 3]),
								[4, e.send("OnRenderCompleted", t, null)];
							case 1:
								return n.sent(),
								[3, 3];
							case 2:
								return n.sent(),
								this.logger.log(s.LogLevel.Warning, "Failed to deliver completion notification for render '" + t + "'."),
								[3, 3];
							case 3:
								return [2]
							}
						})
					})
				},
				e.renderQueues = new Map,
				e
			}
			();
			t.default = u
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(65),
			o = function () {
				function e(e) {
					this.batchData = e;
					var t = new u(e);
					this.arrayRangeReader = new c(e),
					this.arraySegmentReader = new l(e),
					this.diffReader = new i(e),
					this.editReader = new a(e, t),
					this.frameReader = new s(e, t)
				}
				return e.prototype.updatedComponents = function () {
					return f(this.batchData, this.batchData.length - 20)
				},
				e.prototype.referenceFrames = function () {
					return f(this.batchData, this.batchData.length - 16)
				},
				e.prototype.disposedComponentIds = function () {
					return f(this.batchData, this.batchData.length - 12)
				},
				e.prototype.disposedEventHandlerIds = function () {
					return f(this.batchData, this.batchData.length - 8)
				},
				e.prototype.updatedComponentsEntry = function (e, t) {
					var n = e + 4 * t;
					return f(this.batchData, n)
				},
				e.prototype.referenceFramesEntry = function (e, t) {
					return e + 16 * t
				},
				e.prototype.disposedComponentIdsEntry = function (e, t) {
					var n = e + 4 * t;
					return f(this.batchData, n)
				},
				e.prototype.disposedEventHandlerIdsEntry = function (e, t) {
					var n = e + 4 * t;
					return f(this.batchData, n)
				},
				e
			}
			();
			t.OutOfProcessRenderBatch = o;
			var i = function () {
				function e(e) {
					this.batchDataUint8 = e
				}
				return e.prototype.componentId = function (e) {
					return f(this.batchDataUint8, e)
				},
				e.prototype.edits = function (e) {
					return e + 4
				},
				e.prototype.editsEntry = function (e, t) {
					return e + 16 * t
				},
				e
			}
			(),
			a = function () {
				function e(e, t) {
					this.batchDataUint8 = e,
					this.stringReader = t
				}
				return e.prototype.editType = function (e) {
					return f(this.batchDataUint8, e)
				},
				e.prototype.siblingIndex = function (e) {
					return f(this.batchDataUint8, e + 4)
				},
				e.prototype.newTreeIndex = function (e) {
					return f(this.batchDataUint8, e + 8)
				},
				e.prototype.removedAttributeName = function (e) {
					var t = f(this.batchDataUint8, e + 12);
					return this.stringReader.readString(t)
				},
				e
			}
			(),
			s = function () {
				function e(e, t) {
					this.batchDataUint8 = e,
					this.stringReader = t
				}
				return e.prototype.frameType = function (e) {
					return f(this.batchDataUint8, e)
				},
				e.prototype.subtreeLength = function (e) {
					return f(this.batchDataUint8, e + 4)
				},
				e.prototype.elementReferenceCaptureId = function (e) {
					var t = f(this.batchDataUint8, e + 4);
					return this.stringReader.readString(t)
				},
				e.prototype.componentId = function (e) {
					return f(this.batchDataUint8, e + 8)
				},
				e.prototype.elementName = function (e) {
					var t = f(this.batchDataUint8, e + 8);
					return this.stringReader.readString(t)
				},
				e.prototype.textContent = function (e) {
					var t = f(this.batchDataUint8, e + 4);
					return this.stringReader.readString(t)
				},
				e.prototype.markupContent = function (e) {
					var t = f(this.batchDataUint8, e + 4);
					return this.stringReader.readString(t)
				},
				e.prototype.attributeName = function (e) {
					var t = f(this.batchDataUint8, e + 4);
					return this.stringReader.readString(t)
				},
				e.prototype.attributeValue = function (e) {
					var t = f(this.batchDataUint8, e + 8);
					return this.stringReader.readString(t)
				},
				e.prototype.attributeEventHandlerId = function (e) {
					return f(this.batchDataUint8, e + 12)
				},
				e
			}
			(),
			u = function () {
				function e(e) {
					this.batchDataUint8 = e,
					this.stringTableStartIndex = f(e, e.length - 4)
				}
				return e.prototype.readString = function (e) {
					if (-1 === e)
						return null;
					var t,
					n = f(this.batchDataUint8, this.stringTableStartIndex + 4 * e),
					o = function (e, t) {
						for (var n = 0, r = 0, o = 0; o < 4; o++) {
							var i = e[t + o];
							if (n |= (127 & i) << r, i < 128)
								break;
							r += 7
						}
						return n
					}
					(this.batchDataUint8, n),
					i = n + ((t = o) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : 4),
					a = new Uint8Array(this.batchDataUint8.buffer, this.batchDataUint8.byteOffset + i, o);
					return r.decodeUtf8(a)
				},
				e
			}
			(),
			c = function () {
				function e(e) {
					this.batchDataUint8 = e
				}
				return e.prototype.count = function (e) {
					return f(this.batchDataUint8, e)
				},
				e.prototype.values = function (e) {
					return e + 4
				},
				e
			}
			(),
			l = function () {
				function e(e) {
					this.batchDataUint8 = e
				}
				return e.prototype.offset = function (e) {
					return 0
				},
				e.prototype.count = function (e) {
					return f(this.batchDataUint8, e)
				},
				e.prototype.values = function (e) {
					return e + 4
				},
				e
			}
			();
			function f(e, t) {
				return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = "function" == typeof TextDecoder ? new TextDecoder("utf-8") : null;
			t.decodeUtf8 = r ? r.decode.bind(r) : function (e) {
				var t = 0,
				n = e.length,
				r = [],
				o = [];
				for (; t < n; ) {
					var i = e[t++];
					if (0 === i)
						break;
					if (0 == (128 & i))
						r.push(i);
					else if (192 == (224 & i)) {
						var a = 63 & e[t++];
						r.push((31 & i) << 6 | a)
					} else if (224 == (240 & i)) {
						var a = 63 & e[t++],
						s = 63 & e[t++];
						r.push((31 & i) << 12 | a << 6 | s)
					} else if (240 == (248 & i)) {
						var a = 63 & e[t++],
						s = 63 & e[t++],
						u = 63 & e[t++],
						c = (7 & i) << 18 | a << 12 | s << 6 | u;
						c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c),
						r.push(c)
					}
					r.length > 1024 && (o.push(String.fromCharCode.apply(null, r)), r.length = 0)
				}
				return o.push(String.fromCharCode.apply(null, r)),
				o.join("")
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(19),
			o = function () {
				function e() {}
				return e.prototype.log = function (e, t) {},
				e.instance = new e,
				e
			}
			();
			t.NullLogger = o;
			var i = function () {
				function e(e) {
					this.minimumLogLevel = e
				}
				return e.prototype.log = function (e, t) {
					if (e >= this.minimumLogLevel)
						switch (e) {
						case r.LogLevel.Critical:
						case r.LogLevel.Error:
							console.error("[" + (new Date).toISOString() + "] " + r.LogLevel[e] + ": " + t);
							break;
						case r.LogLevel.Warning:
							console.warn("[" + (new Date).toISOString() + "] " + r.LogLevel[e] + ": " + t);
							break;
						case r.LogLevel.Information:
							console.info("[" + (new Date).toISOString() + "] " + r.LogLevel[e] + ": " + t);
							break;
						default:
							console.log("[" + (new Date).toISOString() + "] " + r.LogLevel[e] + ": " + t)
						}
				},
				e
			}
			();
			t.ConsoleLogger = i
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, i) {
					function a(e) {
						try {
							u(r.next(e))
						} catch (e) {
							i(e)
						}
					}
					function s(e) {
						try {
							u(r.throw(e))
						} catch (e) {
							i(e)
						}
					}
					function u(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(a, s)
					}
					u((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				i,
				a = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: s(0),
					throw : s(1),
					return : s(2)
				},
				"function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}),
				i;
				function s(i) {
					return function (s) {
						return function (i) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; a; )
								try {
									if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
										return o;
									switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
									case 0:
									case 1:
										o = i;
										break;
									case 4:
										return a.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										a.label++,
										r = i[1],
										i = [0];
										continue;
									case 7:
										i = a.ops.pop(),
										a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
											a = 0;
											continue
										}
										if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
											a.label = i[1];
											break
										}
										if (6 === i[0] && a.label < o[1]) {
											a.label = o[1],
											o = i;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2],
											a.ops.push(i);
											break
										}
										o[2] && a.ops.pop(),
										a.trys.pop();
										continue
									}
									i = t.call(e, a)
								} catch (e) {
									i = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & i[0])
								throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}
						([i, s])
					}
				}
			},
			i = this && this.__values || function (e) {
				var t = "function" == typeof Symbol && e[Symbol.iterator],
				n = 0;
				return t ? t.call(e) : {
					next: function () {
						return e && n >= e.length && (e = void 0), {
							value: e && e[n++],
							done: !e
						}
					}
				}
			},
			a = this && this.__read || function (e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n)
					return e;
				var r,
				o,
				i = n.call(e),
				a = [];
				try {
					for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
						a.push(r.value)
				} catch (e) {
					o = {
						error: e
					}
				}
				finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					}
					finally {
						if (o)
							throw o.error
					}
				}
				return a
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(16),
			u = n(68),
			c = function () {
				function e(e, t) {
					this.circuitId = e,
					this.components = t
				}
				return e.prototype.reconnect = function (e) {
					return e.invoke("ConnectCircuit", this.circuitId)
				},
				e
			}
			();
			function l(e) {
				if (e.nodeType === Node.COMMENT_NODE && e.textContent) {
					var t = /\W+M.A.C.Component:[^{]*(.*)$/.exec(e.textContent),
					n = t && t[1];
					if (n)
						try {
							var r = JSON.parse(n),
							o = r.componentId,
							i = r.circuitId,
							a = r.rendererId;
							if (!!o && !!i && !!a)
								return {
									node: e,
									circuitId: i,
									rendererId: Number.parseInt(a),
									componentId: Number.parseInt(o)
								};
							throw new Error("Found malformed start component comment at " + e.textContent)
						} catch (t) {
							throw new Error("Found malformed start component comment at " + e.textContent)
						}
				}
			}
			function f(e, t, n, r) {
				for (var o = n; o < r; o++) {
					var i = t[o];
					if (i.nodeType === Node.COMMENT_NODE && i.textContent) {
						var a = /\W+M.A.C.Component:\W+(\d+)\W+$/.exec(i.textContent),
						s = a && a[1];
						if (s)
							try {
								var u = Number.parseInt(s);
								if (u === e.componentId)
									return {
										componentId: u,
										node: i,
										index: o
									};
								throw new Error("Found malformed end component comment at " + i.textContent)
							} catch (e) {
								throw new Error("Found malformed end component comment at " + i.textContent)
							}
					}
				}
				throw new Error("End component comment not found for " + e.node)
			}
			t.CircuitDescriptor = c,
			t.discoverPrerenderedCircuits = function (e) {
				for (var t, n, r = function e(t) {
					if (!t.hasChildNodes())
						return [];
					for (var n = [], r = t.childNodes, o = 0, i = r.length; o < i; ) {
						var a = r[o],
						s = l(a);
						if (s) {
							var u = f(s, r, o + 1, i);
							n.push({
								start: s,
								end: u
							}),
							o = u.index + 1
						} else {
							o++;
							for (var c = e(a), h = 0; h < c.length; h++) {
								var p = c[h];
								n.push(p)
							}
						}
					}
					return n
				}
					(e), o = new Map, s = 0; s < r.length; s++) {
					var h = r[s],
					p = o.get(h.start.circuitId);
					p || (p = [], o.set(h.start.circuitId, p));
					var d = new u.ComponentDescriptor(h.start.componentId, h.start.circuitId, h.start.rendererId, h);
					p.push(d)
				}
				var g = [];
				try {
					for (var y = i(o), v = y.next(); !v.done; v = y.next()) {
						var b = a(v.value, 2),
						m = b[0],
						w = b[1];
						g.push(new c(m, w))
					}
				} catch (e) {
					t = {
						error: e
					}
				}
				finally {
					try {
						v && !v.done && (n = y.return) && n.call(y)
					}
					finally {
						if (t)
							throw t.error
					}
				}
				return g
			},
			t.startCircuit = function (e) {
				return r(this, void 0, void 0, function () {
					var t;
					return o(this, function (n) {
						switch (n.label) {
						case 0:
							return [4, e.invoke("StartCircuit", s.internalFunctions.getLocationHref(), s.internalFunctions.getBaseURI())];
						case 1:
							return (t = n.sent()) ? [2, new c(t, [])] : [2, void 0]
						}
					})
				})
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(8),
			o = n(9),
			i = function () {
				function e(e, t, n, r) {
					this.componentId = e,
					this.circuitId = t,
					this.rendererId = n,
					this.registrationTags = r
				}
				return e.prototype.initialize = function () {
					var e = {
						start: this.registrationTags.start.node,
						end: this.registrationTags.end.node
					},
					t = o.toLogicalRootCommentElement(e.start, e.end);
					r.attachRootComponentToLogicalElement(this.rendererId, t, this.componentId)
				},
				e
			}
			();
			t.ComponentDescriptor = i
		}, function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(11),
			o = n(20),
			i = n(2),
			a = function () {
				function e() {}
				return e.write = function (e) {
					var t = e.byteLength || e.length,
					n = [];
					do {
						var r = 127 & t;
						(t >>= 7) > 0 && (r |= 128),
						n.push(r)
					} while (t > 0);
					t = e.byteLength || e.length;
					var o = new Uint8Array(n.length + t);
					return o.set(n, 0),
					o.set(e, n.length),
					o.buffer
				},
				e.parse = function (e) {
					for (var t = [], n = new Uint8Array(e), r = [0, 7, 14, 21, 28], o = 0; o < e.byteLength; ) {
						var i = 0,
						a = 0,
						s = void 0;
						do {
							a |= (127 & (s = n[o + i])) << r[i],
							i++
						} while (i < Math.min(5, e.byteLength - o) && 0 != (128 & s));
						if (0 != (128 & s) && i < 5)
							throw new Error("Cannot read message size.");
						if (5 === i && s > 7)
							throw new Error("Messages bigger than 2GB are not supported.");
						if (!(n.byteLength >= o + i + a))
							throw new Error("Incomplete message.");
						t.push(n.slice ? n.slice(o + i, o + i + a) : n.subarray(o + i, o + i + a)),
						o = o + i + a
					}
					return t
				},
				e
			}
			();
			var s = new Uint8Array([145, i.MessageType.Ping]),
			u = function () {
				function e() {
					this.name = "messagepack",
					this.version = 1,
					this.transferFormat = i.TransferFormat.Binary
				}
				return e.prototype.parseMessages = function (e, t) {
					if (!(e instanceof r.Buffer || (n = e, n && "undefined" != typeof ArrayBuffer && (n instanceof ArrayBuffer || n.constructor && "ArrayBuffer" === n.constructor.name))))
						throw new Error("Invalid input for MessagePack hub protocol. Expected an ArrayBuffer or Buffer.");
					var n;
					null === t && (t = i.NullLogger.instance);
					for (var o = [], s = 0, u = a.parse(e); s < u.length; s++) {
						var c = u[s],
						l = this.parseMessage(c, t);
						l && o.push(l)
					}
					return o
				},
				e.prototype.writeMessage = function (e) {
					switch (e.type) {
					case i.MessageType.Invocation:
						return this.writeInvocation(e);
					case i.MessageType.StreamInvocation:
						return this.writeStreamInvocation(e);
					case i.MessageType.StreamItem:
					case i.MessageType.Completion:
						throw new Error("Writing messages of type '" + e.type + "' is not supported.");
					case i.MessageType.Ping:
						return a.write(s);
					default:
						throw new Error("Invalid message type.")
					}
				},
				e.prototype.parseMessage = function (e, t) {
					if (0 === e.length)
						throw new Error("Invalid payload.");
					var n = o().decode(r.Buffer.from(e));
					if (0 === n.length || !(n instanceof Array))
						throw new Error("Invalid payload.");
					var a = n[0];
					switch (a) {
					case i.MessageType.Invocation:
						return this.createInvocationMessage(this.readHeaders(n), n);
					case i.MessageType.StreamItem:
						return this.createStreamItemMessage(this.readHeaders(n), n);
					case i.MessageType.Completion:
						return this.createCompletionMessage(this.readHeaders(n), n);
					case i.MessageType.Ping:
						return this.createPingMessage(n);
					case i.MessageType.Close:
						return this.createCloseMessage(n);
					default:
						return t.log(i.LogLevel.Information, "Unknown message type '" + a + "' ignored."),
						null
					}
				},
				e.prototype.createCloseMessage = function (e) {
					if (e.length < 2)
						throw new Error("Invalid payload for Close message.");
					return {
						error: e[1],
						type: i.MessageType.Close
					}
				},
				e.prototype.createPingMessage = function (e) {
					if (e.length < 1)
						throw new Error("Invalid payload for Ping message.");
					return {
						type: i.MessageType.Ping
					}
				},
				e.prototype.createInvocationMessage = function (e, t) {
					if (t.length < 5)
						throw new Error("Invalid payload for Invocation message.");
					var n = t[2];
					return n ? {
						arguments: t[4],
						headers: e,
						invocationId: n,
						target: t[3],
						type: i.MessageType.Invocation
					}
					 : {
						arguments: t[4],
						headers: e,
						target: t[3],
						type: i.MessageType.Invocation
					}
				},
				e.prototype.createStreamItemMessage = function (e, t) {
					if (t.length < 4)
						throw new Error("Invalid payload for StreamItem message.");
					return {
						headers: e,
						invocationId: t[2],
						item: t[3],
						type: i.MessageType.StreamItem
					}
				},
				e.prototype.createCompletionMessage = function (e, t) {
					if (t.length < 4)
						throw new Error("Invalid payload for Completion message.");
					var n,
					r,
					o = t[3];
					if (2 !== o && t.length < 5)
						throw new Error("Invalid payload for Completion message.");
					switch (o) {
					case 1:
						n = t[4];
						break;
					case 3:
						r = t[4]
					}
					return {
						error: n,
						headers: e,
						invocationId: t[2],
						result: r,
						type: i.MessageType.Completion
					}
				},
				e.prototype.writeInvocation = function (e) {
					var t = o().encode([i.MessageType.Invocation, e.headers || {}, e.invocationId || null, e.target, e.arguments]);
					return a.write(t.slice())
				},
				e.prototype.writeStreamInvocation = function (e) {
					var t = o().encode([i.MessageType.StreamInvocation, e.headers || {}, e.invocationId, e.target, e.arguments]);
					return a.write(t.slice())
				},
				e.prototype.readHeaders = function (e) {
					var t = e[1];
					if ("object" != typeof t)
						throw new Error("Invalid headers.");
					return t
				},
				e
			}
			();
			n.d(t, "VERSION", function () {
				return c
			}),
			n.d(t, "MessagePackHubProtocol", function () {
				return u
			});
			var c = "1.1.0"
		}
	]);
