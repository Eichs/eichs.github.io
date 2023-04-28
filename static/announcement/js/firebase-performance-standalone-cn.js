!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).firebase = t()
}(this, function() {
    "use strict";
    var n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    };
    var a = function() {
        return (a = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ).apply(this, arguments)
    };
    function u(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function r(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function i(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(r, i)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
    function l(n, r) {
        var i, o, a, s = {
            label: 0,
            sent: function() {
                if (1 & a[0])
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(t) {
            return function(e) {
                return function(t) {
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; s; )
                        try {
                            if (i = 1,
                            o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o),
                            0) : o.next) && !(a = a.call(o, t[1])).done)
                                return a;
                            switch (o = 0,
                            (t = a ? [2 & t[0], a.value] : t)[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return s.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                s.label++,
                                o = t[1],
                                t = [0];
                                continue;
                            case 7:
                                t = s.ops.pop(),
                                s.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    s.label = t[1];
                                    break
                                }
                                if (6 === t[0] && s.label < a[1]) {
                                    s.label = a[1],
                                    a = t;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2],
                                    s.ops.push(t);
                                    break
                                }
                                a[2] && s.ops.pop(),
                                s.trys.pop();
                                continue
                            }
                            t = r.call(n, s)
                        } catch (e) {
                            t = [6, e],
                            o = 0
                        } finally {
                            i = a = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }
    function h(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return {
                        value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function f(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, i, o = n.call(e), a = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
                a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return a
    }
    function r() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(f(arguments[t]));
        return e
    }
    function i() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
            i++)
                r[i] = o[a];
        return r
    }
    function d(e, t) {
        if (!(t instanceof Object))
            return t;
        switch (t.constructor) {
        case Date:
            return new Date(t.getTime());
        case Object:
            void 0 === e && (e = {});
            break;
        case Array:
            e = [];
            break;
        default:
            return t
        }
        for (var n in t)
            t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = d(e[n], t[n]));
        return e
    }
    var o = (e.prototype.wrapCallback = function(n) {
        var r = this;
        return function(e, t) {
            e ? r.reject(e) : r.resolve(t),
            "function" == typeof n && (r.promise.catch(function() {}),
            1 === n.length ? n(e) : n(e, t))
        }
    }
    ,
    e);
    function e() {
        var n = this;
        this.reject = function() {}
        ,
        this.resolve = function() {}
        ,
        this.promise = new Promise(function(e, t) {
            n.resolve = e,
            n.reject = t
        }
        )
    }
    var s, t, c, p = "FirebaseError", g = (s = Error,
    n(t = v, c = s),
    t.prototype = null === c ? Object.create(c) : (m.prototype = c.prototype,
    new m),
    v);
    function m() {
        this.constructor = t
    }
    function v(e, t, n) {
        t = s.call(this, t) || this;
        return t.code = e,
        t.customData = n,
        t.name = p,
        Object.setPrototypeOf(t, v.prototype),
        Error.captureStackTrace && Error.captureStackTrace(t, y.prototype.create),
        t
    }
    var y = (b.prototype.create = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        var r, i = t[0] || {}, o = this.service + "/" + e, e = this.errors[e], e = e ? (r = i,
        e.replace(_, function(e, t) {
            var n = r[t];
            return null != n ? String(n) : "<" + t + "?>"
        })) : "Error", e = this.serviceName + ": " + e + " (" + o + ").";
        return new g(o,e,i)
    }
    ,
    b);
    function b(e, t, n) {
        this.service = e,
        this.serviceName = t,
        this.errors = n
    }
    var _ = /\{\$([^}]+)}/g;
    function w(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    var I = (E.prototype.setInstantiationMode = function(e) {
        return this.instantiationMode = e,
        this
    }
    ,
    E.prototype.setMultipleInstances = function(e) {
        return this.multipleInstances = e,
        this
    }
    ,
    E.prototype.setServiceProps = function(e) {
        return this.serviceProps = e,
        this
    }
    ,
    E);
    function E(e, t, n) {
        this.name = e,
        this.instanceFactory = t,
        this.type = n,
        this.multipleInstances = !1,
        this.serviceProps = {},
        this.instantiationMode = "LAZY"
    }
    var S = "[DEFAULT]"
      , T = (A.prototype.get = function(e) {
        void 0 === e && (e = S);
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
            var n = new o;
            this.instancesDeferred.set(t, n);
            try {
                var r = this.getOrInitializeService(t);
                r && n.resolve(r)
            } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise
    }
    ,
    A.prototype.getImmediate = function(e) {
        var t = a({
            identifier: S,
            optional: !1
        }, e)
          , e = t.identifier
          , n = t.optional
          , r = this.normalizeInstanceIdentifier(e);
        try {
            var i = this.getOrInitializeService(r);
            if (i)
                return i;
            if (n)
                return null;
            throw Error("Service " + this.name + " is not available")
        } catch (e) {
            if (n)
                return null;
            throw e
        }
    }
    ,
    A.prototype.getComponent = function() {
        return this.component
    }
    ,
    A.prototype.setComponent = function(e) {
        var t, n;
        if (e.name !== this.name)
            throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
        if (this.component)
            throw Error("Component for " + this.name + " has already been provided");
        if ("EAGER" === (this.component = e).instantiationMode)
            try {
                this.getOrInitializeService(S)
            } catch (e) {}
        try {
            for (var r = h(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
                var o = f(i.value, 2)
                  , a = o[0]
                  , s = o[1]
                  , c = this.normalizeInstanceIdentifier(a);
                try {
                    var u = this.getOrInitializeService(c);
                    s.resolve(u)
                } catch (e) {}
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r)
            } finally {
                if (t)
                    throw t.error
            }
        }
    }
    ,
    A.prototype.clearInstance = function(e) {
        void 0 === e && (e = S),
        this.instancesDeferred.delete(e),
        this.instances.delete(e)
    }
    ,
    A.prototype.delete = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Array.from(this.instances.values()),
                    [4, Promise.all(r(t.filter(function(e) {
                        return "INTERNAL"in e
                    }).map(function(e) {
                        return e.INTERNAL.delete()
                    }), t.filter(function(e) {
                        return "_delete"in e
                    }).map(function(e) {
                        return e._delete()
                    })))];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        })
    }
    ,
    A.prototype.isComponentSet = function() {
        return null != this.component
    }
    ,
    A.prototype.getOrInitializeService = function(e) {
        var t, n = this.instances.get(e);
        return !n && this.component && (n = this.component.instanceFactory(this.container, (t = e) === S ? void 0 : t),
        this.instances.set(e, n)),
        n || null
    }
    ,
    A.prototype.normalizeInstanceIdentifier = function(e) {
        return !this.component || this.component.multipleInstances ? e : S
    }
    ,
    A);
    function A(e, t) {
        this.name = e,
        this.container = t,
        this.component = null,
        this.instances = new Map,
        this.instancesDeferred = new Map
    }
    var N = (O.prototype.addComponent = function(e) {
        var t = this.getProvider(e.name);
        if (t.isComponentSet())
            throw new Error("Component " + e.name + " has already been registered with " + this.name);
        t.setComponent(e)
    }
    ,
    O.prototype.addOrOverwriteComponent = function(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
        this.addComponent(e)
    }
    ,
    O.prototype.getProvider = function(e) {
        if (this.providers.has(e))
            return this.providers.get(e);
        var t = new T(e,this);
        return this.providers.set(e, t),
        t
    }
    ,
    O.prototype.getProviders = function() {
        return Array.from(this.providers.values())
    }
    ,
    O);
    function O(e) {
        this.name = e,
        this.providers = new Map
    }
    function k() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
            i++)
                r[i] = o[a];
        return r
    }
    var P, C = [];
    (ye = P = P || {})[ye.DEBUG = 0] = "DEBUG",
    ye[ye.VERBOSE = 1] = "VERBOSE",
    ye[ye.INFO = 2] = "INFO",
    ye[ye.WARN = 3] = "WARN",
    ye[ye.ERROR = 4] = "ERROR",
    ye[ye.SILENT = 5] = "SILENT";
    function D(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
            var i = (new Date).toISOString()
              , o = j[t];
            if (!o)
                throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
            console[o].apply(console, k(["[" + i + "]  " + e.name + ":"], n))
        }
    }
    var R = {
        debug: P.DEBUG,
        verbose: P.VERBOSE,
        info: P.INFO,
        warn: P.WARN,
        error: P.ERROR,
        silent: P.SILENT
    }
      , L = P.INFO
      , j = ((F = {})[P.DEBUG] = "log",
    F[P.VERBOSE] = "log",
    F[P.INFO] = "info",
    F[P.WARN] = "warn",
    F[P.ERROR] = "error",
    F)
      , M = (Object.defineProperty(B.prototype, "logLevel", {
        get: function() {
            return this._logLevel
        },
        set: function(e) {
            if (!(e in P))
                throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
            this._logLevel = e
        },
        enumerable: !1,
        configurable: !0
    }),
    B.prototype.setLogLevel = function(e) {
        this._logLevel = "string" == typeof e ? R[e] : e
    }
    ,
    Object.defineProperty(B.prototype, "logHandler", {
        get: function() {
            return this._logHandler
        },
        set: function(e) {
            if ("function" != typeof e)
                throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(B.prototype, "userLogHandler", {
        get: function() {
            return this._userLogHandler
        },
        set: function(e) {
            this._userLogHandler = e
        },
        enumerable: !1,
        configurable: !0
    }),
    B.prototype.debug = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._userLogHandler && this._userLogHandler.apply(this, k([this, P.DEBUG], e)),
        this._logHandler.apply(this, k([this, P.DEBUG], e))
    }
    ,
    B.prototype.log = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._userLogHandler && this._userLogHandler.apply(this, k([this, P.VERBOSE], e)),
        this._logHandler.apply(this, k([this, P.VERBOSE], e))
    }
    ,
    B.prototype.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._userLogHandler && this._userLogHandler.apply(this, k([this, P.INFO], e)),
        this._logHandler.apply(this, k([this, P.INFO], e))
    }
    ,
    B.prototype.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._userLogHandler && this._userLogHandler.apply(this, k([this, P.WARN], e)),
        this._logHandler.apply(this, k([this, P.WARN], e))
    }
    ,
    B.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._userLogHandler && this._userLogHandler.apply(this, k([this, P.ERROR], e)),
        this._logHandler.apply(this, k([this, P.ERROR], e))
    }
    ,
    B);
    function B(e) {
        this.name = e,
        this._logLevel = L,
        this._logHandler = D,
        this._userLogHandler = null,
        C.push(this)
    }
    function x(t) {
        C.forEach(function(e) {
            e.setLogLevel(t)
        })
    }
    function U(a, t) {
        for (var e = 0, n = C; e < n.length; e++)
            !function(e) {
                var o = null;
                t && t.level && (o = R[t.level]),
                e.userLogHandler = null === a ? null : function(e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++)
                        n[r - 2] = arguments[r];
                    var i = n.map(function(e) {
                        if (null == e)
                            return null;
                        if ("string" == typeof e)
                            return e;
                        if ("number" == typeof e || "boolean" == typeof e)
                            return e.toString();
                        if (e instanceof Error)
                            return e.message;
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return null
                        }
                    }).filter(function(e) {
                        return e
                    }).join(" ");
                    t >= (null != o ? o : e.logLevel) && a({
                        level: P[t].toLowerCase(),
                        message: i,
                        args: n,
                        type: e.name
                    })
                }
            }(n[e])
    }
    var F = ((ye = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ye["bad-app-name"] = "Illegal App name: '{$appName}",
    ye["duplicate-app"] = "Firebase App named '{$appName}' already exists",
    ye["app-deleted"] = "Firebase App named '{$appName}' already deleted",
    ye["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ye["invalid-log-argument"] = "First argument to `onLog` must be null or a function.",
    ye)
      , q = new y("app","Firebase",F)
      , V = "@firebase/app"
      , H = "[DEFAULT]"
      , K = ((ye = {})[V] = "fire-core",
    ye["@firebase/analytics"] = "fire-analytics",
    ye["@firebase/auth"] = "fire-auth",
    ye["@firebase/database"] = "fire-rtdb",
    ye["@firebase/functions"] = "fire-fn",
    ye["@firebase/installations"] = "fire-iid",
    ye["@firebase/messaging"] = "fire-fcm",
    ye["@firebase/performance"] = "fire-perf",
    ye["@firebase/remote-config"] = "fire-rc",
    ye["@firebase/storage"] = "fire-gcs",
    ye["@firebase/firestore"] = "fire-fst",
    ye["fire-js"] = "fire-js",
    ye["firebase-wrapper"] = "fire-js-all",
    ye)
      , $ = (Object.defineProperty(z.prototype, "automaticDataCollectionEnabled", {
        get: function() {
            return this.checkDestroyed_(),
            this.automaticDataCollectionEnabled_
        },
        set: function(e) {
            this.checkDestroyed_(),
            this.automaticDataCollectionEnabled_ = e
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(z.prototype, "name", {
        get: function() {
            return this.checkDestroyed_(),
            this.name_
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(z.prototype, "options", {
        get: function() {
            return this.checkDestroyed_(),
            this.options_
        },
        enumerable: !1,
        configurable: !0
    }),
    z.prototype.delete = function() {
        var t = this;
        return new Promise(function(e) {
            t.checkDestroyed_(),
            e()
        }
        ).then(function() {
            return t.firebase_.INTERNAL.removeApp(t.name_),
            Promise.all(t.container.getProviders().map(function(e) {
                return e.delete()
            }))
        }).then(function() {
            t.isDeleted_ = !0
        })
    }
    ,
    z.prototype._getService = function(e, t) {
        return void 0 === t && (t = H),
        this.checkDestroyed_(),
        this.container.getProvider(e).getImmediate({
            identifier: t
        })
    }
    ,
    z.prototype.checkDestroyed_ = function() {
        if (this.isDeleted_)
            throw q.create("app-deleted", {
                appName: this.name_
            })
    }
    ,
    z.prototype.toJSON = function() {
        return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options
        }
    }
    ,
    z);
    function z(e, t, n) {
        var r, i, o = this;
        this.firebase_ = n,
        this.isDeleted_ = !1,
        this.INTERNAL = {},
        this.name_ = t.name,
        this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1,
        this.options_ = d(void 0, e),
        this.container = new N(t.name),
        this.container.addComponent(new I("app",function() {
            return o
        }
        ,"PUBLIC"));
        try {
            for (var a = h(this.firebase_.INTERNAL.components.values()), s = a.next(); !s.done; s = a.next()) {
                var c = s.value;
                this.container.addComponent(c)
            }
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (i = a.return) && i.call(a)
            } finally {
                if (r)
                    throw r.error
            }
        }
    }
    var W = "8.2.7"
      , G = new M("@firebase/app");
    function J(c) {
        var u = {}
          , l = new Map
          , f = {
            __esModule: !0,
            initializeApp: function(e, t) {
                void 0 === t && (t = {});
                "object" == typeof t && null !== t || (t = {
                    name: t
                });
                var n = t;
                void 0 === n.name && (n.name = H);
                t = n.name;
                if ("string" != typeof t || !t)
                    throw q.create("bad-app-name", {
                        appName: String(t)
                    });
                if (w(u, t))
                    throw q.create("duplicate-app", {
                        appName: t
                    });
                n = new c(e,n,f);
                return u[t] = n
            },
            app: p,
            registerVersion: function(e, t, n) {
                var r = null !== (i = K[e]) && void 0 !== i ? i : e;
                n && (r += "-" + n);
                var i = r.match(/\s|\//)
                  , e = t.match(/\s|\//);
                if (i || e) {
                    n = ['Unable to register library "' + r + '" with version "' + t + '":'];
                    return i && n.push('library name "' + r + '" contains illegal characters (whitespace or "/")'),
                    i && e && n.push("and"),
                    e && n.push('version name "' + t + '" contains illegal characters (whitespace or "/")'),
                    void G.warn(n.join(" "))
                }
                o(new I(r + "-version",function() {
                    return {
                        library: r,
                        version: t
                    }
                }
                ,"VERSION"))
            },
            setLogLevel: x,
            onLog: function(e, t) {
                if (null !== e && "function" != typeof e)
                    throw q.create("invalid-log-argument", {
                        appName: name
                    });
                U(e, t)
            },
            apps: null,
            SDK_VERSION: W,
            INTERNAL: {
                registerComponent: o,
                removeApp: function(e) {
                    delete u[e]
                },
                components: l,
                useAsService: function(e, t) {
                    if ("serverAuth" === t)
                        return null;
                    return t
                }
            }
        };
        function p(e) {
            if (!w(u, e = e || H))
                throw q.create("no-app", {
                    appName: e
                });
            return u[e]
        }
        function o(n) {
            var t, e, r, i = n.name;
            if (l.has(i))
                return G.debug("There were multiple attempts to register component " + i + "."),
                "PUBLIC" === n.type ? f[i] : null;
            l.set(i, n),
            "PUBLIC" === n.type && (r = function(e) {
                if ("function" != typeof (e = void 0 === e ? p() : e)[i])
                    throw q.create("invalid-app-argument", {
                        appName: i
                    });
                return e[i]()
            }
            ,
            void 0 !== n.serviceProps && d(r, n.serviceProps),
            f[i] = r,
            c.prototype[i] = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return this._getService.bind(this, i).apply(this, n.multipleInstances ? e : [])
            }
            );
            try {
                for (var o = h(Object.keys(u)), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value;
                    u[s]._addComponent(n)
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (e = o.return) && e.call(o)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return "PUBLIC" === n.type ? f[i] : null
        }
        return f.default = f,
        Object.defineProperty(f, "apps", {
            get: function() {
                return Object.keys(u).map(function(e) {
                    return u[e]
                })
            }
        }),
        p.App = c,
        f
    }
    var Y = (Z.prototype.getPlatformInfoString = function() {
        return this.container.getProviders().map(function(e) {
            if (function(e) {
                e = e.getComponent();
                return "VERSION" === (null == e ? void 0 : e.type)
            }(e)) {
                e = e.getImmediate();
                return e.library + "/" + e.version
            }
            return null
        }).filter(function(e) {
            return e
        }).join(" ")
    }
    ,
    Z);
    function Z(e) {
        this.container = e
    }
    var Q, X, ee = function() {
        var e = J($);
        e.SDK_VERSION = e.SDK_VERSION + "_LITE";
        var t = e.INTERNAL.registerComponent;
        return e.INTERNAL.registerComponent = function(e) {
            if ("PUBLIC" !== e.type || "performance" === e.name || "installations" === e.name)
                return t(e);
            throw Error(name + " cannot register with the standalone perf instance")
        }
        ,
        e
    }();
    function te(n) {
        return new Promise(function(e, t) {
            n.onsuccess = function() {
                e(n.result)
            }
            ,
            n.onerror = function() {
                t(n.error)
            }
        }
        )
    }
    function ne(n, r, i) {
        var o, e = new Promise(function(e, t) {
            te(o = n[r].apply(n, i)).then(e, t)
        }
        );
        return e.request = o,
        e
    }
    function re(e, n, t) {
        t.forEach(function(t) {
            Object.defineProperty(e.prototype, t, {
                get: function() {
                    return this[n][t]
                },
                set: function(e) {
                    this[n][t] = e
                }
            })
        })
    }
    function ie(t, n, r, e) {
        e.forEach(function(e) {
            e in r.prototype && (t.prototype[e] = function() {
                return ne(this[n], e, arguments)
            }
            )
        })
    }
    function oe(t, n, r, e) {
        e.forEach(function(e) {
            e in r.prototype && (t.prototype[e] = function() {
                return this[n][e].apply(this[n], arguments)
            }
            )
        })
    }
    function ae(e, r, t, n) {
        n.forEach(function(n) {
            n in t.prototype && (e.prototype[n] = function() {
                return e = this[r],
                (t = ne(e, n, arguments)).then(function(e) {
                    if (e)
                        return new ce(e,t.request)
                });
                var e, t
            }
            )
        })
    }
    function se(e) {
        this._index = e
    }
    function ce(e, t) {
        this._cursor = e,
        this._request = t
    }
    function ue(e) {
        this._store = e
    }
    function le(n) {
        this._tx = n,
        this.complete = new Promise(function(e, t) {
            n.oncomplete = function() {
                e()
            }
            ,
            n.onerror = function() {
                t(n.error)
            }
            ,
            n.onabort = function() {
                t(n.error)
            }
        }
        )
    }
    function fe(e, t, n) {
        this._db = e,
        this.oldVersion = t,
        this.transaction = new le(n)
    }
    function pe(e) {
        this._db = e
    }
    X = "lite",
    (Q = ee).INTERNAL.registerComponent(new I("platform-logger",function(e) {
        return new Y(e)
    }
    ,"PRIVATE")),
    Q.registerVersion(V, "0.6.14", X),
    Q.registerVersion("fire-js", ""),
    re(se, "_index", ["name", "keyPath", "multiEntry", "unique"]),
    ie(se, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]),
    ae(se, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
    re(ce, "_cursor", ["direction", "key", "primaryKey", "value"]),
    ie(ce, "_cursor", IDBCursor, ["update", "delete"]),
    ["advance", "continue", "continuePrimaryKey"].forEach(function(n) {
        n in IDBCursor.prototype && (ce.prototype[n] = function() {
            var t = this
              , e = arguments;
            return Promise.resolve().then(function() {
                return t._cursor[n].apply(t._cursor, e),
                te(t._request).then(function(e) {
                    if (e)
                        return new ce(e,t._request)
                })
            })
        }
        )
    }),
    ue.prototype.createIndex = function() {
        return new se(this._store.createIndex.apply(this._store, arguments))
    }
    ,
    ue.prototype.index = function() {
        return new se(this._store.index.apply(this._store, arguments))
    }
    ,
    re(ue, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
    ie(ue, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]),
    ae(ue, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
    oe(ue, "_store", IDBObjectStore, ["deleteIndex"]),
    le.prototype.objectStore = function() {
        return new ue(this._tx.objectStore.apply(this._tx, arguments))
    }
    ,
    re(le, "_tx", ["objectStoreNames", "mode"]),
    oe(le, "_tx", IDBTransaction, ["abort"]),
    fe.prototype.createObjectStore = function() {
        return new ue(this._db.createObjectStore.apply(this._db, arguments))
    }
    ,
    re(fe, "_db", ["name", "version", "objectStoreNames"]),
    oe(fe, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
    pe.prototype.transaction = function() {
        return new le(this._db.transaction.apply(this._db, arguments))
    }
    ,
    re(pe, "_db", ["name", "version", "objectStoreNames"]),
    oe(pe, "_db", IDBDatabase, ["close"]),
    ["openCursor", "openKeyCursor"].forEach(function(i) {
        [ue, se].forEach(function(e) {
            i in e.prototype && (e.prototype[i.replace("open", "iterate")] = function() {
                var e = (n = arguments,
                Array.prototype.slice.call(n))
                  , t = e[e.length - 1]
                  , n = this._store || this._index
                  , r = n[i].apply(n, e.slice(0, -1));
                r.onsuccess = function() {
                    t(r.result)
                }
            }
            )
        })
    }),
    [se, ue].forEach(function(e) {
        e.prototype.getAll || (e.prototype.getAll = function(e, n) {
            var r = this
              , i = [];
            return new Promise(function(t) {
                r.iterateCursor(e, function(e) {
                    e ? (i.push(e.value),
                    void 0 === n || i.length != n ? e.continue() : t(i)) : t(i)
                })
            }
            )
        }
        )
    });
    var he = 1e4
      , de = "w:0.4.19"
      , ge = "FIS_v2"
      , me = "/firebaseinstallations/v1"
      , ve = 36e5
      , ye = ((F = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"',
    F["not-registered"] = "Firebase Installation is not registered.",
    F["installation-not-found"] = "Firebase Installation not found.",
    F["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    F["app-offline"] = "Could not process request. Application offline.",
    F["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.",
    F)
      , be = new y("installations","Installations",ye);
    function _e(e) {
        return e instanceof g && e.code.includes("request-failed")
    }
    function we(e) {
        e = e.projectId;
        return me + "/projects/" + e + "/installations"
    }
    function Ie(e) {
        return {
            token: e.token,
            requestStatus: 2,
            expiresIn: (e = e.expiresIn,
            Number(e.replace("s", "000"))),
            creationTime: Date.now()
        }
    }
    function Ee(n, r) {
        return u(this, void 0, void 0, function() {
            var t;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, r.json()];
                case 1:
                    return t = e.sent(),
                    t = t.error,
                    [2, be.create("request-failed", {
                        requestName: n,
                        serverCode: t.code,
                        serverMessage: t.message,
                        serverStatus: t.status
                    })]
                }
            })
        })
    }
    function Se(e) {
        e = e.apiKey;
        return new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-goog-api-key": e
        })
    }
    function Te(e, t) {
        t = t.refreshToken,
        e = Se(e);
        return e.append("Authorization", ge + " " + t),
        e
    }
    function Ae(n) {
        return u(this, void 0, void 0, function() {
            var t;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, n()];
                case 1:
                    return 500 <= (t = e.sent()).status && t.status < 600 ? [2, n()] : [2, t]
                }
            })
        })
    }
    function Ne(t) {
        return new Promise(function(e) {
            setTimeout(e, t)
        }
        )
    }
    var Oe = /^[cdef][\w-]{21}$/
      , ke = "";
    function Pe() {
        try {
            var e = new Uint8Array(17);
            (self.crypto || self.msCrypto).getRandomValues(e),
            e[0] = 112 + e[0] % 16;
            e = function(e) {
                return btoa(String.fromCharCode.apply(String, r(e))).replace(/\+/g, "-").replace(/\//g, "_")
            }(e).substr(0, 22);
            return Oe.test(e) ? e : ke
        } catch (e) {
            return ke
        }
    }
    function Ce(e) {
        return e.appName + "!" + e.appId
    }
    var De = new Map;
    function Re(e, t) {
        var n = Ce(e);
        Le(n, t),
        e = n,
        n = t,
        (t = Me()) && t.postMessage({
            key: e,
            fid: n
        }),
        Be()
    }
    function Le(e, t) {
        var n, r, i = De.get(e);
        if (i)
            try {
                for (var o = h(i), a = o.next(); !a.done; a = o.next())
                    (0,
                    a.value)(t)
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (r = o.return) && r.call(o)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    var je = null;
    function Me() {
        return !je && "BroadcastChannel"in self && ((je = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(e) {
            Le(e.data.key, e.data.fid)
        }
        ),
        je
    }
    function Be() {
        0 === De.size && je && (je.close(),
        je = null)
    }
    var xe, Ue = "firebase-installations-database", Fe = 1, qe = "firebase-installations-db", Ve = null;
    function He() {
        var e, t, n;
        return Ve || (e = Fe,
        t = function(e) {
            0 === e.oldVersion && e.createObjectStore(qe)
        }
        ,
        (n = (e = ne(indexedDB, "open", [Ue, e])).request) && (n.onupgradeneeded = function(e) {
            t && t(new fe(n.result,e.oldVersion,n.transaction))
        }
        ),
        Ve = e.then(function(e) {
            return new pe(e)
        })),
        Ve
    }
    function Ke(o, a) {
        return u(this, void 0, void 0, function() {
            var t, n, r, i;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Ce(o),
                    [4, He()];
                case 1:
                    return r = e.sent(),
                    n = r.transaction(qe, "readwrite"),
                    [4, (r = n.objectStore(qe)).get(t)];
                case 2:
                    return i = e.sent(),
                    [4, r.put(a, t)];
                case 3:
                    return e.sent(),
                    [4, n.complete];
                case 4:
                    return e.sent(),
                    i && i.fid === a.fid || Re(o, a.fid),
                    [2, a]
                }
            })
        })
    }
    function $e(r) {
        return u(this, void 0, void 0, function() {
            var t, n;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Ce(r),
                    [4, He()];
                case 1:
                    return n = e.sent(),
                    [4, (n = n.transaction(qe, "readwrite")).objectStore(qe).delete(t)];
                case 2:
                    return e.sent(),
                    [4, n.complete];
                case 3:
                    return e.sent(),
                    [2]
                }
            })
        })
    }
    function ze(a, s) {
        return u(this, void 0, void 0, function() {
            var t, n, r, i, o;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Ce(a),
                    [4, He()];
                case 1:
                    return r = e.sent(),
                    n = r.transaction(qe, "readwrite"),
                    [4, (r = n.objectStore(qe)).get(t)];
                case 2:
                    return i = e.sent(),
                    void 0 !== (o = s(i)) ? [3, 4] : [4, r.delete(t)];
                case 3:
                    return e.sent(),
                    [3, 6];
                case 4:
                    return [4, r.put(o, t)];
                case 5:
                    e.sent(),
                    e.label = 6;
                case 6:
                    return [4, n.complete];
                case 7:
                    return e.sent(),
                    !o || i && i.fid === o.fid || Re(a, o.fid),
                    [2, o]
                }
            })
        })
    }
    function We(i) {
        return u(this, void 0, void 0, function() {
            var t, n, r;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, ze(i, function(e) {
                        e = Je(e || {
                            fid: Pe(),
                            registrationStatus: 0
                        }),
                        e = function(e, t) {
                            {
                                if (0 !== t.registrationStatus)
                                    return 1 === t.registrationStatus ? {
                                        installationEntry: t,
                                        registrationPromise: function(i) {
                                            return u(this, void 0, void 0, function() {
                                                var t, n, r;
                                                return l(this, function(e) {
                                                    switch (e.label) {
                                                    case 0:
                                                        return [4, Ge(i)];
                                                    case 1:
                                                        t = e.sent(),
                                                        e.label = 2;
                                                    case 2:
                                                        return 1 !== t.registrationStatus ? [3, 5] : [4, Ne(100)];
                                                    case 3:
                                                        return e.sent(),
                                                        [4, Ge(i)];
                                                    case 4:
                                                        return t = e.sent(),
                                                        [3, 2];
                                                    case 5:
                                                        return 0 !== t.registrationStatus ? [3, 7] : [4, We(i)];
                                                    case 6:
                                                        return r = e.sent(),
                                                        n = r.installationEntry,
                                                        (r = r.registrationPromise) ? [2, r] : [2, n];
                                                    case 7:
                                                        return [2, t]
                                                    }
                                                })
                                            })
                                        }(e)
                                    } : {
                                        installationEntry: t
                                    };
                                if (!navigator.onLine) {
                                    var n = Promise.reject(be.create("app-offline"));
                                    return {
                                        installationEntry: t,
                                        registrationPromise: n
                                    }
                                }
                                t = {
                                    fid: t.fid,
                                    registrationStatus: 1,
                                    registrationTime: Date.now()
                                },
                                e = function(r, i) {
                                    return u(this, void 0, void 0, function() {
                                        var t, n;
                                        return l(this, function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, 2, , 7]),
                                                [4, function(a, e) {
                                                    var s = e.fid;
                                                    return u(this, void 0, void 0, function() {
                                                        var t, n, r, i, o;
                                                        return l(this, function(e) {
                                                            switch (e.label) {
                                                            case 0:
                                                                return t = we(a),
                                                                n = Se(a),
                                                                o = {
                                                                    fid: s,
                                                                    authVersion: ge,
                                                                    appId: a.appId,
                                                                    sdkVersion: de
                                                                },
                                                                r = {
                                                                    method: "POST",
                                                                    headers: n,
                                                                    body: JSON.stringify(o)
                                                                },
                                                                [4, Ae(function() {
                                                                    return fetch(t, r)
                                                                })];
                                                            case 1:
                                                                return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                                                            case 2:
                                                                return o = e.sent(),
                                                                [2, {
                                                                    fid: o.fid || s,
                                                                    registrationStatus: 2,
                                                                    refreshToken: o.refreshToken,
                                                                    authToken: Ie(o.authToken)
                                                                }];
                                                            case 3:
                                                                return [4, Ee("Create Installation", i)];
                                                            case 4:
                                                                throw e.sent()
                                                            }
                                                        })
                                                    })
                                                }(r, i)];
                                            case 1:
                                                return t = e.sent(),
                                                [2, Ke(r, t)];
                                            case 2:
                                                return _e(n = e.sent()) && 409 === n.customData.serverCode ? [4, $e(r)] : [3, 4];
                                            case 3:
                                                return e.sent(),
                                                [3, 6];
                                            case 4:
                                                return [4, Ke(r, {
                                                    fid: i.fid,
                                                    registrationStatus: 0
                                                })];
                                            case 5:
                                                e.sent(),
                                                e.label = 6;
                                            case 6:
                                                throw n;
                                            case 7:
                                                return [2]
                                            }
                                        })
                                    })
                                }(e, t);
                                return {
                                    installationEntry: t,
                                    registrationPromise: e
                                }
                            }
                        }(i, e);
                        return t = e.registrationPromise,
                        e.installationEntry
                    })];
                case 1:
                    return (n = e.sent()).fid !== ke ? [3, 3] : (r = {},
                    [4, t]);
                case 2:
                    return [2, (r.installationEntry = e.sent(),
                    r)];
                case 3:
                    return [2, {
                        installationEntry: n,
                        registrationPromise: t
                    }]
                }
            })
        })
    }
    function Ge(e) {
        return ze(e, function(e) {
            if (!e)
                throw be.create("installation-not-found");
            return Je(e)
        })
    }
    function Je(e) {
        return 1 === (t = e).registrationStatus && t.registrationTime + he < Date.now() ? {
            fid: e.fid,
            registrationStatus: 0
        } : e;
        var t
    }
    function Ye(e, a) {
        var s = e.appConfig
          , c = e.platformLoggerProvider;
        return u(this, void 0, void 0, function() {
            var t, n, r, i, o;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = function(e, t) {
                        t = t.fid;
                        return we(e) + "/" + t + "/authTokens:generate"
                    }(s, a),
                    n = Te(s, a),
                    (o = c.getImmediate({
                        optional: !0
                    })) && n.append("x-firebase-client", o.getPlatformInfoString()),
                    o = {
                        installation: {
                            sdkVersion: de
                        }
                    },
                    r = {
                        method: "POST",
                        headers: n,
                        body: JSON.stringify(o)
                    },
                    [4, Ae(function() {
                        return fetch(t, r)
                    })];
                case 1:
                    return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                case 2:
                    return o = e.sent(),
                    [2, Ie(o)];
                case 3:
                    return [4, Ee("Generate Auth Token", i)];
                case 4:
                    throw e.sent()
                }
            })
        })
    }
    function Ze(i, o) {
        return void 0 === o && (o = !1),
        u(this, void 0, void 0, function() {
            var r, t, n;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, ze(i.appConfig, function(e) {
                        if (!Xe(e))
                            throw be.create("not-registered");
                        var t, n = e.authToken;
                        if (o || 2 !== (t = n).requestStatus || function(e) {
                            var t = Date.now();
                            return t < e.creationTime || e.creationTime + e.expiresIn < t + ve
                        }(t)) {
                            if (1 === n.requestStatus)
                                return r = function(n, r) {
                                    return u(this, void 0, void 0, function() {
                                        var t;
                                        return l(this, function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return [4, Qe(n.appConfig)];
                                            case 1:
                                                t = e.sent(),
                                                e.label = 2;
                                            case 2:
                                                return 1 !== t.authToken.requestStatus ? [3, 5] : [4, Ne(100)];
                                            case 3:
                                                return e.sent(),
                                                [4, Qe(n.appConfig)];
                                            case 4:
                                                return t = e.sent(),
                                                [3, 2];
                                            case 5:
                                                return 0 === (t = t.authToken).requestStatus ? [2, Ze(n, r)] : [2, t]
                                            }
                                        })
                                    })
                                }(i, o),
                                e;
                            if (!navigator.onLine)
                                throw be.create("app-offline");
                            n = (t = e,
                            n = {
                                requestStatus: 1,
                                requestTime: Date.now()
                            },
                            a(a({}, t), {
                                authToken: n
                            }));
                            return r = function(i, o) {
                                return u(this, void 0, void 0, function() {
                                    var t, n, r;
                                    return l(this, function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 3, , 8]),
                                            [4, Ye(i, o)];
                                        case 1:
                                            return t = e.sent(),
                                            r = a(a({}, o), {
                                                authToken: t
                                            }),
                                            [4, Ke(i.appConfig, r)];
                                        case 2:
                                            return e.sent(),
                                            [2, t];
                                        case 3:
                                            return !_e(n = e.sent()) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode ? [3, 5] : [4, $e(i.appConfig)];
                                        case 4:
                                            return e.sent(),
                                            [3, 7];
                                        case 5:
                                            return r = a(a({}, o), {
                                                authToken: {
                                                    requestStatus: 0
                                                }
                                            }),
                                            [4, Ke(i.appConfig, r)];
                                        case 6:
                                            e.sent(),
                                            e.label = 7;
                                        case 7:
                                            throw n;
                                        case 8:
                                            return [2]
                                        }
                                    })
                                })
                            }(i, n),
                            n
                        }
                        return e
                    })];
                case 1:
                    return t = e.sent(),
                    r ? [4, r] : [3, 3];
                case 2:
                    return n = e.sent(),
                    [3, 4];
                case 3:
                    n = t.authToken,
                    e.label = 4;
                case 4:
                    return [2, n]
                }
            })
        })
    }
    function Qe(e) {
        return ze(e, function(e) {
            if (!Xe(e))
                throw be.create("not-registered");
            var t = e.authToken;
            return 1 === (t = t).requestStatus && t.requestTime + he < Date.now() ? a(a({}, e), {
                authToken: {
                    requestStatus: 0
                }
            }) : e
        })
    }
    function Xe(e) {
        return void 0 !== e && 2 === e.registrationStatus
    }
    function et(t, n) {
        return void 0 === n && (n = !1),
        u(this, void 0, void 0, function() {
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, function(n) {
                        return u(this, void 0, void 0, function() {
                            var t;
                            return l(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, We(n)];
                                case 1:
                                    return (t = e.sent().registrationPromise) ? [4, t] : [3, 3];
                                case 2:
                                    e.sent(),
                                    e.label = 3;
                                case 3:
                                    return [2]
                                }
                            })
                        })
                    }(t.appConfig)];
                case 1:
                    return e.sent(),
                    [4, Ze(t, n)];
                case 2:
                    return [2, e.sent().token]
                }
            })
        })
    }
    function tt(i, o) {
        return u(this, void 0, void 0, function() {
            var t, n, r;
            return l(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = function(e, t) {
                        t = t.fid;
                        return we(e) + "/" + t
                    }(i, o),
                    r = Te(i, o),
                    n = {
                        method: "DELETE",
                        headers: r
                    },
                    [4, Ae(function() {
                        return fetch(t, n)
                    })];
                case 1:
                    return (r = e.sent()).ok ? [3, 3] : [4, Ee("Delete Installation", r)];
                case 2:
                    throw e.sent();
                case 3:
                    return [2]
                }
            })
        })
    }
    function nt(e, r) {
        var i = e.appConfig;
        return function(e, t) {
            Me();
            var n = Ce(e);
            (e = De.get(n)) || (e = new Set,
            De.set(n, e)),
            e.add(t)
        }(i, r),
        function() {
            var e, t, n;
            t = r,
            n = Ce(e = i),
            (e = De.get(n)) && (e.delete(t),
            0 === e.size && De.delete(n),
            Be())
        }
    }
    function rt(e) {
        return be.create("missing-app-config-values", {
            valueName: e
        })
    }
    (xe = ee).INTERNAL.registerComponent(new I("installations",function(e) {
        var t = e.getProvider("app").getImmediate()
          , n = {
            appConfig: function(e) {
                var t, n;
                if (!e || !e.options)
                    throw rt("App Configuration");
                if (!e.name)
                    throw rt("App Name");
                try {
                    for (var r = h(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        if (!e.options[o])
                            throw rt(o)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return {
                    appName: e.name,
                    projectId: e.options.projectId,
                    apiKey: e.options.apiKey,
                    appId: e.options.appId
                }
            }(t),
            platformLoggerProvider: e.getProvider("platform-logger")
        };
        return {
            app: t,
            getId: function() {
                return function(r) {
                    return u(this, void 0, void 0, function() {
                        var t, n;
                        return l(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, We(r.appConfig)];
                            case 1:
                                return t = e.sent(),
                                n = t.installationEntry,
                                (t.registrationPromise || Ze(r)).catch(console.error),
                                [2, n.fid]
                            }
                        })
                    })
                }(n)
            },
            getToken: function(e) {
                return et(n, e)
            },
            delete: function() {
                return function(r) {
                    return u(this, void 0, void 0, function() {
                        var t, n;
                        return l(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, ze(t = r.appConfig, function(e) {
                                    if (!e || 0 !== e.registrationStatus)
                                        return e
                                })];
                            case 1:
                                if (!(n = e.sent()))
                                    return [3, 6];
                                if (1 !== n.registrationStatus)
                                    return [3, 2];
                                throw be.create("delete-pending-registration");
                            case 2:
                                if (2 !== n.registrationStatus)
                                    return [3, 6];
                                if (navigator.onLine)
                                    return [3, 3];
                                throw be.create("app-offline");
                            case 3:
                                return [4, tt(t, n)];
                            case 4:
                                return e.sent(),
                                [4, $e(t)];
                            case 5:
                                e.sent(),
                                e.label = 6;
                            case 6:
                                return [2]
                            }
                        })
                    })
                }(n)
            },
            onIdChange: function(e) {
                return nt(n, e)
            }
        }
    }
    ,"PUBLIC")),
    xe.registerVersion("@firebase/installations", "0.4.19");
    var it, ot, at = "0.4.5", st = "FB-PERF-TRACE-MEASURE", ct = "@firebase/performance/config", ut = "@firebase/performance/configexpire", F = "Performance", ye = ((ye = {})["trace started"] = "Trace {$traceName} was started before.",
    ye["trace stopped"] = "Trace {$traceName} is not running.",
    ye["nonpositive trace startTime"] = "Trace {$traceName} startTime should be positive.",
    ye["nonpositive trace duration"] = "Trace {$traceName} duration should be positive.",
    ye["no window"] = "Window is not available.",
    ye["no app id"] = "App id is not available.",
    ye["no project id"] = "Project id is not available.",
    ye["no api key"] = "Api key is not available.",
    ye["invalid cc log"] = "Attempted to queue invalid cc event",
    ye["FB not default"] = "Performance can only start when Firebase app instance is the default one.",
    ye["RC response not ok"] = "RC response is not ok",
    ye["invalid attribute name"] = "Attribute name {$attributeName} is invalid.",
    ye["invalid attribute value"] = "Attribute value {$attributeValue} is invalid.",
    ye["invalid custom metric name"] = "Custom metric name {$customMetricName} is invalid",
    ye["invalid String merger input"] = "Input for String merger is invalid, contact support team to resolve.",
    ye), lt = new y("performance",F,ye), ft = new M(F);
    ft.logLevel = P.INFO;
    var pt, ht = (dt.prototype.getUrl = function() {
        return this.windowLocation.href.split("?")[0]
    }
    ,
    dt.prototype.mark = function(e) {
        this.performance && this.performance.mark && this.performance.mark(e)
    }
    ,
    dt.prototype.measure = function(e, t, n) {
        this.performance && this.performance.measure && this.performance.measure(e, t, n)
    }
    ,
    dt.prototype.getEntriesByType = function(e) {
        return this.performance && this.performance.getEntriesByType ? this.performance.getEntriesByType(e) : []
    }
    ,
    dt.prototype.getEntriesByName = function(e) {
        return this.performance && this.performance.getEntriesByName ? this.performance.getEntriesByName(e) : []
    }
    ,
    dt.prototype.getTimeOrigin = function() {
        return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart)
    }
    ,
    dt.prototype.requiredApisAvailable = function() {
        return fetch && Promise && this.navigator && this.navigator.cookieEnabled ? "indexedDB"in self && null != indexedDB || (ft.info("IndexedDB is not supported by current browswer"),
        !1) : (ft.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),
        !1)
    }
    ,
    dt.prototype.setupObserver = function(e, i) {
        this.PerformanceObserver && new this.PerformanceObserver(function(e) {
            for (var t = 0, n = e.getEntries(); t < n.length; t++) {
                var r = n[t];
                i(r)
            }
        }
        ).observe({
            entryTypes: [e]
        })
    }
    ,
    dt.getInstance = function() {
        return it = void 0 === it ? new dt(ot) : it
    }
    ,
    dt);
    function dt(e) {
        if (!(this.window = e))
            throw lt.create("no window");
        this.performance = e.performance,
        this.PerformanceObserver = e.PerformanceObserver,
        this.windowLocation = e.location,
        this.navigator = e.navigator,
        this.document = e.document,
        this.navigator && this.navigator.cookieEnabled && (this.localStorage = e.localStorage),
        e.perfMetrics && e.perfMetrics.onFirstInputDelay && (this.onFirstInputDelay = e.perfMetrics.onFirstInputDelay)
    }
    function gt(e, t) {
        var n = e.length - t.length;
        if (n < 0 || 1 < n)
            throw lt.create("invalid String merger input");
        for (var r = [], i = 0; i < e.length; i++)
            r.push(e.charAt(i)),
            t.length > i && r.push(t.charAt(i));
        return r.join("")
    }
    var mt, vt, yt = (bt.prototype.getAppId = function() {
        var e = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.appId;
        if (!e)
            throw lt.create("no app id");
        return e
    }
    ,
    bt.prototype.getProjectId = function() {
        var e = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.projectId;
        if (!e)
            throw lt.create("no project id");
        return e
    }
    ,
    bt.prototype.getApiKey = function() {
        var e = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.apiKey;
        if (!e)
            throw lt.create("no api key");
        return e
    }
    ,
    bt.prototype.getFlTransportFullUrl = function() {
        return this.flTransportEndpointUrl.concat("?key=", this.transportKey)
    }
    ,
    bt.getInstance = function() {
        return pt = void 0 === pt ? new bt : pt
    }
    ,
    bt);
    function bt() {
        this.instrumentationEnabled = !0,
        this.dataCollectionEnabled = !0,
        this.loggingEnabled = !1,
        this.tracesSamplingRate = 1,
        this.networkRequestsSamplingRate = 1,
        this.logEndPointUrl = window.origin + "firebaselogging/v0cc/log?format=json_proto",
        this.flTransportEndpointUrl = window.origin + 'v1/firelog/legacy/log',
        this.transportKey = gt("AzSC8r6ReiGqFMyfvgow", "Iayx0u-XT3vksVM-pIV"),
        this.logSource = 462,
        this.logTraceAfterSampling = !1,
        this.logNetworkAfterSampling = !1,
        this.configTimeToLive = 168
    }
    (F = vt = vt || {})[F.UNKNOWN = 0] = "UNKNOWN",
    F[F.VISIBLE = 1] = "VISIBLE",
    F[F.HIDDEN = 2] = "HIDDEN";
    var _t = ["firebase_", "google_", "ga_"]
      , wt = new RegExp("^[a-zA-Z]\\w*$");
    function It() {
        switch (ht.getInstance().document.visibilityState) {
        case "visible":
            return vt.VISIBLE;
        case "hidden":
            return vt.HIDDEN;
        default:
            return vt.UNKNOWN
        }
    }
    var Et = "0.0.1"
      , St = {
        loggingEnabled: !0
    }
      , Tt = "FIREBASE_INSTALLATIONS_AUTH";
    function At(e) {
        var n, t = function() {
            var e = ht.getInstance().localStorage;
            if (!e)
                return;
            var t = e.getItem(ut);
            if (!t || !function(e) {
                return Number(e) > Date.now()
            }(t))
                return;
            var n = e.getItem(ct);
            if (!n)
                return;
            try {
                return JSON.parse(n)
            } catch (e) {
                return
            }
        }();
        return t ? (Ot(t),
        Promise.resolve()) : (n = e,
        function() {
            var e = yt.getInstance().installationsService.getToken();
            return e.then(function(e) {}),
            e
        }().then(function(e) {
            var t = window.origin + "v1/projects/" + yt.getInstance().getProjectId() + "/namespaces/fireperf:fetch?key=" + yt.getInstance().getApiKey()
              , e = new Request(t,{
                method: "POST",
                headers: {
                    Authorization: Tt + " " + e
                },
                body: JSON.stringify({
                    app_instance_id: n,
                    app_instance_id_token: e,
                    app_id: yt.getInstance().getAppId(),
                    app_version: at,
                    sdk_version: Et
                })
            });
            return fetch(e).then(function(e) {
                if (e.ok)
                    return e.json();
                throw lt.create("RC response not ok")
            })
        }).catch(function() {
            ft.info(Nt)
        }).then(Ot).then(function(e) {
            var t = ht.getInstance().localStorage;
            if (!e || !t)
                return;
            t.setItem(ct, JSON.stringify(e)),
            t.setItem(ut, String(Date.now() + 60 * yt.getInstance().configTimeToLive * 60 * 1e3))
        }, function() {}))
    }
    var Nt = "Could not fetch config, will use default configs";
    function Ot(e) {
        if (!e)
            return e;
        var t = yt.getInstance()
          , n = e.entries || {};
        return t.loggingEnabled = void 0 !== n.fpr_enabled ? "true" === String(n.fpr_enabled) : St.loggingEnabled,
        n.fpr_log_source && (t.logSource = Number(n.fpr_log_source)),
        n.fpr_log_endpoint_url && (t.logEndPointUrl = n.fpr_log_endpoint_url),
        n.fpr_log_transport_key && (t.transportKey = n.fpr_log_transport_key),
        void 0 !== n.fpr_vc_network_request_sampling_rate && (t.networkRequestsSamplingRate = Number(n.fpr_vc_network_request_sampling_rate)),
        void 0 !== n.fpr_vc_trace_sampling_rate && (t.tracesSamplingRate = Number(n.fpr_vc_trace_sampling_rate)),
        t.logTraceAfterSampling = kt(t.tracesSamplingRate),
        t.logNetworkAfterSampling = kt(t.networkRequestsSamplingRate),
        e
    }
    function kt(e) {
        return Math.random() <= e
    }
    var Pt, Ct = 1;
    function Dt() {
        return Ct = 2,
        Pt = Pt || function() {
            var n = ht.getInstance().document;
            return new Promise(function(e) {
                var t;
                n && "complete" !== n.readyState ? (t = function() {
                    "complete" === n.readyState && (n.removeEventListener("readystatechange", t),
                    e())
                }
                ,
                n.addEventListener("readystatechange", t)) : e()
            }
            )
        }().then(function() {
            return (e = yt.getInstance().installationsService.getId()).then(function(e) {
                mt = e
            }),
            e;
            var e
        }).then(At).then(Rt, Rt)
    }
    function Rt() {
        Ct = 3
    }
    var Lt, jt = 1e4, Mt = 5500, Bt = 3, xt = 1e3, Ut = Bt, Ft = [], qt = !1;
    function Vt(e) {
        setTimeout(function() {
            var e, t;
            if (0 !== Ut)
                return Ft.length ? (e = Ft.splice(0, xt),
                t = e.map(function(e) {
                    return {
                        source_extension_json_proto3: e.message,
                        event_time_ms: String(e.eventTime)
                    }
                }),
                void function(e, r) {
                    return function(e) {
                        var t = yt.getInstance().getFlTransportFullUrl();
                        return fetch(t, {
                            method: "POST",
                            body: JSON.stringify(e)
                        })
                    }(e).then(function(e) {
                        return e.ok || ft.info("Call to Firebase backend failed."),
                        e.json()
                    }).then(function(e) {
                        var t = Number(e.nextRequestWaitMillis)
                          , n = jt;
                        isNaN(t) || (n = Math.max(t, n));
                        e = e.logResponseDetails;
                        Array.isArray(e) && 0 < e.length && "RETRY_REQUEST_LATER" === e[0].responseAction && (Ft = i(r, Ft),
                        ft.info("Retry transport request later.")),
                        Ut = Bt,
                        Vt(n)
                    })
                }({
                    request_time_ms: String(Date.now()),
                    client_info: {
                        client_type: 1,
                        js_client_info: {}
                    },
                    log_source: yt.getInstance().logSource,
                    log_event: t
                }, e).catch(function() {
                    Ft = i(e, Ft),
                    Ut--,
                    ft.info("Tries left: " + Ut + "."),
                    Vt(jt)
                })) : Vt(jt)
        }, e)
    }
    function Ht(n) {
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            !function(e) {
                if (!e.eventTime || !e.message)
                    throw lt.create("invalid cc log");
                Ft = i(Ft, [e])
            }({
                message: n.apply(void 0, e),
                eventTime: Date.now()
            })
        }
    }
    function Kt(e, t) {
        (Lt = Lt || Ht(Wt))(e, t)
    }
    function $t(e) {
        var t = yt.getInstance();
        !t.instrumentationEnabled && e.isAuto || (t.dataCollectionEnabled || e.isAuto) && ht.getInstance().requiredApisAvailable() && (e.isAuto && It() !== vt.VISIBLE || (3 === Ct ? zt(e) : Dt().then(function() {
            return zt(e)
        }, function() {
            return zt(e)
        })))
    }
    function zt(e) {
        var t;
        !mt || (t = yt.getInstance()).loggingEnabled && t.logTraceAfterSampling && setTimeout(function() {
            return Kt(e, 1)
        }, 0)
    }
    function Wt(e, t) {
        return (0 === t ? function(e) {
            e = {
                url: e.url,
                http_method: e.httpMethod || 0,
                http_response_code: 200,
                response_payload_bytes: e.responsePayloadBytes,
                client_start_time_us: e.startTimeUs,
                time_to_response_initiated_us: e.timeToResponseInitiatedUs,
                time_to_response_completed_us: e.timeToResponseCompletedUs
            },
            e = {
                application_info: Gt(),
                network_request_metric: e
            };
            return JSON.stringify(e)
        }
        : function(e) {
            var t = {
                name: e.name,
                is_auto: e.isAuto,
                client_start_time_us: e.startTimeUs,
                duration_us: e.durationUs
            };
            0 !== Object.keys(e.counters).length && (t.counters = e.counters);
            e = e.getAttributes();
            0 !== Object.keys(e).length && (t.custom_attributes = e);
            t = {
                application_info: Gt(),
                trace_metric: t
            };
            return JSON.stringify(t)
        }
        )(e)
    }
    function Gt() {
        return {
            google_app_id: yt.getInstance().getAppId(),
            app_instance_id: mt,
            web_app_info: {
                sdk_version: at,
                page_url: ht.getInstance().getUrl(),
                service_worker_status: "serviceWorker"in (e = ht.getInstance().navigator) ? e.serviceWorker.controller ? 2 : 3 : 1,
                visibility_state: It(),
                effective_connection_type: function() {
                    var e = ht.getInstance().navigator.connection;
                    switch (e && e.effectiveType) {
                    case "slow-2g":
                        return 1;
                    case "2g":
                        return 2;
                    case "3g":
                        return 3;
                    case "4g":
                        return 4;
                    default:
                        return 0
                    }
                }()
            },
            application_process_state: 0
        };
        var e
    }
    var Jt = ["_fp", "_fcp", "_fid"];
    var Yt = (Zt.prototype.start = function() {
        if (1 !== this.state)
            throw lt.create("trace started", {
                traceName: this.name
            });
        this.api.mark(this.traceStartMark),
        this.state = 2
    }
    ,
    Zt.prototype.stop = function() {
        if (2 !== this.state)
            throw lt.create("trace stopped", {
                traceName: this.name
            });
        this.state = 3,
        this.api.mark(this.traceStopMark),
        this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark),
        this.calculateTraceMetrics(),
        $t(this)
    }
    ,
    Zt.prototype.record = function(e, t, n) {
        if (e <= 0)
            throw lt.create("nonpositive trace startTime", {
                traceName: this.name
            });
        if (t <= 0)
            throw lt.create("nonpositive trace duration", {
                traceName: this.name
            });
        if (this.durationUs = Math.floor(1e3 * t),
        this.startTimeUs = Math.floor(1e3 * e),
        n && n.attributes && (this.customAttributes = a({}, n.attributes)),
        n && n.metrics)
            for (var r = 0, i = Object.keys(n.metrics); r < i.length; r++) {
                var o = i[r];
                isNaN(Number(n.metrics[o])) || (this.counters[o] = Number(Math.floor(n.metrics[o])))
            }
        $t(this)
    }
    ,
    Zt.prototype.incrementMetric = function(e, t) {
        void 0 === t && (t = 1),
        void 0 === this.counters[e] ? this.putMetric(e, t) : this.putMetric(e, this.counters[e] + t)
    }
    ,
    Zt.prototype.putMetric = function(e, t) {
        if (n = e,
        r = this.name,
        0 === n.length || 100 < n.length || !(r && r.startsWith("_wt_") && -1 < Jt.indexOf(n)) && n.startsWith("_"))
            throw lt.create("invalid custom metric name", {
                customMetricName: e
            });
        var n, r;
        this.counters[e] = (e = t,
        (t = Math.floor(e)) < e && ft.info("Metric value should be an Integer, setting the value as : " + t + "."),
        t)
    }
    ,
    Zt.prototype.getMetric = function(e) {
        return this.counters[e] || 0
    }
    ,
    Zt.prototype.putAttribute = function(e, t) {
        var n, r, i = !(0 === (n = e).length || 40 < n.length) && (!_t.some(function(e) {
            return n.startsWith(e)
        }) && !!n.match(wt)), r = 0 !== (r = t).length && r.length <= 100;
        if (i && r)
            this.customAttributes[e] = t;
        else {
            if (!i)
                throw lt.create("invalid attribute name", {
                    attributeName: e
                });
            if (!r)
                throw lt.create("invalid attribute value", {
                    attributeValue: t
                })
        }
    }
    ,
    Zt.prototype.getAttribute = function(e) {
        return this.customAttributes[e]
    }
    ,
    Zt.prototype.removeAttribute = function(e) {
        void 0 !== this.customAttributes[e] && delete this.customAttributes[e]
    }
    ,
    Zt.prototype.getAttributes = function() {
        return a({}, this.customAttributes)
    }
    ,
    Zt.prototype.setStartTime = function(e) {
        this.startTimeUs = e
    }
    ,
    Zt.prototype.setDuration = function(e) {
        this.durationUs = e
    }
    ,
    Zt.prototype.calculateTraceMetrics = function() {
        var e = this.api.getEntriesByName(this.traceMeasure)
          , e = e && e[0];
        e && (this.durationUs = Math.floor(1e3 * e.duration),
        this.startTimeUs = Math.floor(1e3 * (e.startTime + this.api.getTimeOrigin())))
    }
    ,
    Zt.createOobTrace = function(e, t, n) {
        var r, i = ht.getInstance().getUrl();
        i && (r = new Zt("_wt_" + i,!0),
        i = Math.floor(1e3 * ht.getInstance().getTimeOrigin()),
        r.setStartTime(i),
        e && e[0] && (r.setDuration(Math.floor(1e3 * e[0].duration)),
        r.putMetric("domInteractive", Math.floor(1e3 * e[0].domInteractive)),
        r.putMetric("domContentLoadedEventEnd", Math.floor(1e3 * e[0].domContentLoadedEventEnd)),
        r.putMetric("loadEventEnd", Math.floor(1e3 * e[0].loadEventEnd))),
        t && ((e = t.find(function(e) {
            return "first-paint" === e.name
        })) && e.startTime && r.putMetric("_fp", Math.floor(1e3 * e.startTime)),
        (t = t.find(function(e) {
            return "first-contentful-paint" === e.name
        })) && t.startTime && r.putMetric("_fcp", Math.floor(1e3 * t.startTime)),
        n && r.putMetric("_fid", Math.floor(1e3 * n))),
        $t(r))
    }
    ,
    Zt.createUserTimingTrace = function(e) {
        $t(new Zt(e,!1,e))
    }
    ,
    Zt);
    function Zt(e, t, n) {
        void 0 === t && (t = !1),
        this.name = e,
        this.isAuto = t,
        this.state = 1,
        this.customAttributes = {},
        this.counters = {},
        this.api = ht.getInstance(),
        this.randomId = Math.floor(1e6 * Math.random()),
        this.isAuto || (this.traceStartMark = "FB-PERF-TRACE-START-" + this.randomId + "-" + this.name,
        this.traceStopMark = "FB-PERF-TRACE-STOP-" + this.randomId + "-" + this.name,
        this.traceMeasure = n || st + "-" + this.randomId + "-" + this.name,
        n && this.calculateTraceMetrics())
    }
    function Qt(e) {
        var t, n, r, i = e;
        i && void 0 !== i.responseStart && (n = ht.getInstance().getTimeOrigin(),
        r = Math.floor(1e3 * (i.startTime + n)),
        e = i.responseStart ? Math.floor(1e3 * (i.responseStart - i.startTime)) : void 0,
        n = Math.floor(1e3 * (i.responseEnd - i.startTime)),
        i = {
            url: i.name && i.name.split("?")[0],
            responsePayloadBytes: i.transferSize,
            startTimeUs: r,
            timeToResponseInitiatedUs: e,
            timeToResponseCompletedUs: n
        },
        t = i,
        (r = yt.getInstance()).instrumentationEnabled && (e = t.url,
        n = r.logEndPointUrl.split("?")[0],
        i = r.flTransportEndpointUrl.split("?")[0],
        e !== n && e !== i && r.loggingEnabled && r.logNetworkAfterSampling && setTimeout(function() {
            return Kt(t, 0)
        }, 0)))
    }
    var Xt = 5e3;
    function en() {
        mt && (setTimeout(function() {
            var e = ht.getInstance()
              , t = e.getEntriesByType("navigation")
              , n = e.getEntriesByType("paint");
            {
                var r;
                e.onFirstInputDelay ? (r = setTimeout(function() {
                    Yt.createOobTrace(t, n),
                    r = void 0
                }, Xt),
                e.onFirstInputDelay(function(e) {
                    r && (clearTimeout(r),
                    Yt.createOobTrace(t, n, e))
                })) : Yt.createOobTrace(t, n)
            }
        }, 0),
        setTimeout(function() {
            for (var e = ht.getInstance(), t = e.getEntriesByType("resource"), n = 0, r = t; n < r.length; n++)
                Qt(r[n]);
            e.setupObserver("resource", Qt)
        }, 0),
        setTimeout(function() {
            for (var e = ht.getInstance(), t = e.getEntriesByType("measure"), n = 0, r = t; n < r.length; n++)
                tn(r[n]);
            e.setupObserver("measure", tn)
        }, 0))
    }
    function tn(e) {
        e = e.name;
        e.substring(0, st.length) !== st && Yt.createUserTimingTrace(e)
    }
    var nn = (rn.prototype.trace = function(e) {
        return new Yt(e)
    }
    ,
    Object.defineProperty(rn.prototype, "instrumentationEnabled", {
        get: function() {
            return yt.getInstance().instrumentationEnabled
        },
        set: function(e) {
            yt.getInstance().instrumentationEnabled = e
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(rn.prototype, "dataCollectionEnabled", {
        get: function() {
            return yt.getInstance().dataCollectionEnabled
        },
        set: function(e) {
            yt.getInstance().dataCollectionEnabled = e
        },
        enumerable: !1,
        configurable: !0
    }),
    rn);
    function rn(e) {
        this.app = e,
        ht.getInstance().requiredApisAvailable() && new Promise(function(e, t) {
            try {
                var n = !0
                  , r = "validate-browser-context-for-indexeddb-analytics-module"
                  , i = window.indexedDB.open(r);
                i.onsuccess = function() {
                    i.result.close(),
                    n || window.indexedDB.deleteDatabase(r),
                    e(!0)
                }
                ,
                i.onupgradeneeded = function() {
                    n = !1
                }
                ,
                i.onerror = function() {
                    var e;
                    t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                }
            } catch (e) {
                t(e)
            }
        }
        ).then(function(e) {
            e && (qt || (Vt(Mt),
            qt = !0),
            Dt().then(en, en))
        }).catch(function(e) {
            ft.info("Environment doesn't support IndexedDB: " + e)
        })
    }
    var on;
    function an(e, t) {
        if ("[DEFAULT]" !== e.name)
            throw lt.create("FB not default");
        if ("undefined" == typeof window)
            throw lt.create("no window");
        return ot = window,
        yt.getInstance().firebaseAppInstance = e,
        yt.getInstance().installationsService = t,
        new nn(e)
    }
    (on = ee).INTERNAL.registerComponent(new I("performance",function(e) {
        var t = e.getProvider("app").getImmediate()
          , e = e.getProvider("installations").getImmediate();
        return an(t, e)
    }
    ,"PUBLIC")),
    on.registerVersion("@firebase/performance", "0.4.5");
    return ee.registerVersion("firebase", "8.2.7", "lite"),
    ee
});
//# sourceMappingURL=firebase-performance-standalone.js.map
