// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gllhm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarcodeDetector", ()=>(0, _pureJs.BarcodeDetector));
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>(0, _pureJs.setZXingModuleOverrides));
var _sideEffectsJs = require("./side-effects.js");
var _pureJs = require("./pure.js");

},{"./side-effects.js":"3bi33","./pure.js":"1NaWU","@parcel/transformer-js/src/esmodule-helpers.js":"73vyb"}],"3bi33":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>(0, _pureJs.setZXingModuleOverrides));
var _pureJs = require("./pure.js");
var e;
(e = globalThis.BarcodeDetector) != null || (globalThis.BarcodeDetector = (0, _pureJs.BarcodeDetector));

},{"./pure.js":"1NaWU","@parcel/transformer-js/src/esmodule-helpers.js":"73vyb"}],"1NaWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarcodeDetector", ()=>To);
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>Co);
var process = require("777cf5a1c5cdae66");
var global = arguments[3];
var Ze = (o)=>{
    throw TypeError(o);
};
var Je = (o, d, p)=>d.has(o) || Ze("Cannot " + p);
var Ke = (o, d, p)=>(Je(o, d, "read from private field"), p ? p.call(o) : d.get(o)), tr = (o, d, p)=>d.has(o) ? Ze("Cannot add the same private member more than once") : d instanceof WeakSet ? d.add(o) : d.set(o, p), er = (o, d, p, y)=>(Je(o, d, "write to private field"), y ? y.call(o, p) : d.set(o, p), p);
const rr = [
    "Aztec",
    "Codabar",
    "Code128",
    "Code39",
    "Code93",
    "DataBar",
    "DataBarExpanded",
    "DataMatrix",
    "DXFilmEdge",
    "EAN-13",
    "EAN-8",
    "ITF",
    "Linear-Codes",
    "Matrix-Codes",
    "MaxiCode",
    "MicroQRCode",
    "None",
    "PDF417",
    "QRCode",
    "rMQRCode",
    "UPC-A",
    "UPC-E"
];
function za(o) {
    return o.join("|");
}
function Na(o) {
    const d = nr(o);
    let p = 0, y = rr.length - 1;
    for(; p <= y;){
        const c = Math.floor((p + y) / 2), $ = rr[c], x = nr($);
        if (x === d) return $;
        x < d ? p = c + 1 : y = c - 1;
    }
    return "None";
}
function nr(o) {
    return o.toLowerCase().replace(/_-\[\]/g, "");
}
function Ga(o, d) {
    return o.Binarizer[d];
}
function Xa(o, d) {
    return o.CharacterSet[d];
}
const Ya = [
    "Text",
    "Binary",
    "Mixed",
    "GS1",
    "ISO15434",
    "UnknownECI"
];
function qa(o) {
    return Ya[o.value];
}
function Qa(o, d) {
    return o.EanAddOnSymbol[d];
}
function Za(o, d) {
    return o.TextMode[d];
}
const st = {
    formats: [],
    tryHarder: !0,
    tryRotate: !0,
    tryInvert: !0,
    tryDownscale: !0,
    binarizer: "LocalAverage",
    isPure: !1,
    downscaleFactor: 3,
    downscaleThreshold: 500,
    minLineCount: 2,
    maxNumberOfSymbols: 255,
    tryCode39ExtendedMode: !1,
    validateCode39CheckSum: !1,
    validateITFCheckSum: !1,
    returnCodabarStartEnd: !1,
    returnErrors: !1,
    eanAddOnSymbol: "Read",
    textMode: "Plain",
    characterSet: "Unknown"
};
function or(o, d) {
    return {
        ...d,
        formats: za(d.formats),
        binarizer: Ga(o, d.binarizer),
        eanAddOnSymbol: Qa(o, d.eanAddOnSymbol),
        textMode: Za(o, d.textMode),
        characterSet: Xa(o, d.characterSet)
    };
}
function ir(o) {
    return {
        ...o,
        format: Na(o.format),
        eccLevel: o.eccLevel,
        contentType: qa(o.contentType)
    };
}
const Ja = {
    locateFile: (o, d)=>{
        const p = o.match(/_(.+?)\.wasm$/);
        return p ? `https://fastly.jsdelivr.net/npm/zxing-wasm@1.2.14/dist/${p[1]}/${o}` : d + o;
    }
};
let se = /* @__PURE__ */ new WeakMap();
function ce(o, d) {
    var p;
    const y = se.get(o);
    if (y != null && y.modulePromise && d === void 0) return y.modulePromise;
    const c = (p = y == null ? void 0 : y.moduleOverrides) != null ? p : Ja, $ = o({
        ...c
    });
    return se.set(o, {
        moduleOverrides: c,
        modulePromise: $
    }), $;
}
function Ka(o, d) {
    se.set(o, {
        moduleOverrides: d
    });
}
async function to(o, d, p = st) {
    const y = {
        ...st,
        ...p
    }, c = await ce(o), { size: $ } = d, x = new Uint8Array(await d.arrayBuffer()), k = c._malloc($);
    c.HEAPU8.set(x, k);
    const V = c.readBarcodesFromImage(k, $, or(c, y));
    c._free(k);
    const W = [];
    for(let I = 0; I < V.size(); ++I)W.push(ir(V.get(I)));
    return W;
}
async function eo(o, d, p = st) {
    const y = {
        ...st,
        ...p
    }, c = await ce(o), { data: $, width: x, height: k, data: { byteLength: V } } = d, W = c._malloc(V);
    c.HEAPU8.set($, W);
    const I = c.readBarcodesFromPixmap(W, x, k, or(c, y));
    c._free(W);
    const N = [];
    for(let L = 0; L < I.size(); ++L)N.push(ir(I.get(L)));
    return N;
}
({
    ...st,
    formats: [
        ...st.formats
    ]
});
var Ut = (()=>{
    var o, d = typeof document < "u" && ((o = document.currentScript) == null ? void 0 : o.tagName.toUpperCase()) === "SCRIPT" ? document.currentScript.src : void 0;
    return function(p = {}) {
        var y, c = p, $, x, k = new Promise((t, e)=>{
            $ = t, x = e;
        }), V = typeof window == "object", W = typeof Bun < "u", I = typeof importScripts == "function";
        typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type;
        var N = Object.assign({}, c), L = "./this.program", R = "";
        function ut(t) {
            return c.locateFile ? c.locateFile(t, R) : R + t;
        }
        var ct, rt;
        if (V || I || W) {
            var lt;
            I ? R = self.location.href : typeof document < "u" && ((lt = document.currentScript) === null || lt === void 0 ? void 0 : lt.tagName.toUpperCase()) === "SCRIPT" && (R = document.currentScript.src), d && (R = d), R.startsWith("blob:") ? R = "" : R = R.substr(0, R.replace(/[?#].*/, "").lastIndexOf("/") + 1), I && (rt = (t)=>{
                var e = new XMLHttpRequest();
                return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
            }), ct = (t)=>fetch(t, {
                    credentials: "same-origin"
                }).then((e)=>e.ok ? e.arrayBuffer() : Promise.reject(new Error(e.status + " : " + e.url)));
        }
        var Vt = c.print || console.log.bind(console), nt = c.printErr || console.error.bind(console);
        Object.assign(c, N), N = null, c.arguments && c.arguments, c.thisProgram && (L = c.thisProgram);
        var Ct = c.wasmBinary, Tt, le = !1, H, F, at, dt, Z, b, de, fe;
        function he() {
            var t = Tt.buffer;
            c.HEAP8 = H = new Int8Array(t), c.HEAP16 = at = new Int16Array(t), c.HEAPU8 = F = new Uint8Array(t), c.HEAPU16 = dt = new Uint16Array(t), c.HEAP32 = Z = new Int32Array(t), c.HEAPU32 = b = new Uint32Array(t), c.HEAPF32 = de = new Float32Array(t), c.HEAPF64 = fe = new Float64Array(t);
        }
        var pe = [], ve = [], ye = [];
        function mr() {
            if (c.preRun) for(typeof c.preRun == "function" && (c.preRun = [
                c.preRun
            ]); c.preRun.length;)$r(c.preRun.shift());
            Ht(pe);
        }
        function gr() {
            Ht(ve);
        }
        function wr() {
            if (c.postRun) for(typeof c.postRun == "function" && (c.postRun = [
                c.postRun
            ]); c.postRun.length;)Cr(c.postRun.shift());
            Ht(ye);
        }
        function $r(t) {
            pe.unshift(t);
        }
        function br(t) {
            ve.unshift(t);
        }
        function Cr(t) {
            ye.unshift(t);
        }
        var J = 0, ft = null;
        function Tr(t) {
            var e;
            J++, (e = c.monitorRunDependencies) === null || e === void 0 || e.call(c, J);
        }
        function Pr(t) {
            var e;
            if (J--, (e = c.monitorRunDependencies) === null || e === void 0 || e.call(c, J), J == 0 && ft) {
                var r = ft;
                ft = null, r();
            }
        }
        function Lt(t) {
            var e;
            (e = c.onAbort) === null || e === void 0 || e.call(c, t), t = "Aborted(" + t + ")", nt(t), le = !0, t += ". Build with -sASSERTIONS for more info.";
            var r = new WebAssembly.RuntimeError(t);
            throw x(r), r;
        }
        var Er = "data:application/octet-stream;base64,", me = (t)=>t.startsWith(Er);
        function _r() {
            var t = "zxing_reader.wasm";
            return me(t) ? t : ut(t);
        }
        var Pt;
        function ge(t) {
            if (t == Pt && Ct) return new Uint8Array(Ct);
            if (rt) return rt(t);
            throw "both async and sync fetching of the wasm failed";
        }
        function Ar(t) {
            return Ct ? Promise.resolve().then(()=>ge(t)) : ct(t).then((e)=>new Uint8Array(e), ()=>ge(t));
        }
        function we(t, e, r) {
            return Ar(t).then((n)=>WebAssembly.instantiate(n, e)).then(r, (n)=>{
                nt(`failed to asynchronously prepare wasm: ${n}`), Lt(n);
            });
        }
        function Or(t, e, r, n) {
            return !t && typeof WebAssembly.instantiateStreaming == "function" && !me(e) && typeof fetch == "function" ? fetch(e, {
                credentials: "same-origin"
            }).then((a)=>{
                var i = WebAssembly.instantiateStreaming(a, r);
                return i.then(n, function(u) {
                    return nt(`wasm streaming compile failed: ${u}`), nt("falling back to ArrayBuffer instantiation"), we(e, r, n);
                });
            }) : we(e, r, n);
        }
        function Dr() {
            return {
                a: ba
            };
        }
        function xr() {
            var t, e = Dr();
            function r(a, i) {
                return E = a.exports, Tt = E.ma, he(), Oe = E.qa, br(E.na), Pr(), E;
            }
            Tr();
            function n(a) {
                r(a.instance);
            }
            if (c.instantiateWasm) try {
                return c.instantiateWasm(e, r);
            } catch (a) {
                nt(`Module.instantiateWasm callback failed with error: ${a}`), x(a);
            }
            return (t = Pt) !== null && t !== void 0 || (Pt = _r()), Or(Ct, Pt, e, n).catch(x), {};
        }
        var Ht = (t)=>{
            for(; t.length > 0;)t.shift()(c);
        };
        c.noExitRuntime;
        var _ = (t)=>Be(t), A = ()=>Ue(), Et = [], _t = 0, Sr = (t)=>{
            var e = new zt(t);
            return e.get_caught() || (e.set_caught(!0), _t--), e.set_rethrown(!1), Et.push(e), Le(t), ze(t);
        }, G = 0, jr = ()=>{
            T(0, 0);
            var t = Et.pop();
            Ve(t.excPtr), G = 0;
        };
        class zt {
            constructor(e){
                this.excPtr = e, this.ptr = e - 24;
            }
            set_type(e) {
                b[this.ptr + 4 >> 2] = e;
            }
            get_type() {
                return b[this.ptr + 4 >> 2];
            }
            set_destructor(e) {
                b[this.ptr + 8 >> 2] = e;
            }
            get_destructor() {
                return b[this.ptr + 8 >> 2];
            }
            set_caught(e) {
                e = e ? 1 : 0, H[this.ptr + 12] = e;
            }
            get_caught() {
                return H[this.ptr + 12] != 0;
            }
            set_rethrown(e) {
                e = e ? 1 : 0, H[this.ptr + 13] = e;
            }
            get_rethrown() {
                return H[this.ptr + 13] != 0;
            }
            init(e, r) {
                this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(r);
            }
            set_adjusted_ptr(e) {
                b[this.ptr + 16 >> 2] = e;
            }
            get_adjusted_ptr() {
                return b[this.ptr + 16 >> 2];
            }
        }
        var Fr = (t)=>{
            throw G || (G = t), G;
        }, At = (t)=>ke(t), Nt = (t)=>{
            var e = G;
            if (!e) return At(0), 0;
            var r = new zt(e);
            r.set_adjusted_ptr(e);
            var n = r.get_type();
            if (!n) return At(0), e;
            for (var a of t){
                if (a === 0 || a === n) break;
                var i = r.ptr + 16;
                if (He(a, n, i)) return At(a), e;
            }
            return At(n), e;
        }, Mr = ()=>Nt([]), Ir = (t)=>Nt([
                t
            ]), Rr = (t, e)=>Nt([
                t,
                e
            ]), Wr = ()=>{
            var t = Et.pop();
            t || Lt("no exception to throw");
            var e = t.excPtr;
            throw t.get_rethrown() || (Et.push(t), t.set_rethrown(!0), t.set_caught(!1), _t++), G = e, G;
        }, kr = (t, e, r)=>{
            var n = new zt(t);
            throw n.init(e, r), G = t, _t++, G;
        }, Br = ()=>_t, Ur = ()=>{
            Lt("");
        }, Ot = {}, Gt = (t)=>{
            for(; t.length;){
                var e = t.pop(), r = t.pop();
                r(e);
            }
        };
        function ht(t) {
            return this.fromWireType(b[t >> 2]);
        }
        var ot = {}, K = {}, Dt = {}, $e, xt = (t)=>{
            throw new $e(t);
        }, tt = (t, e, r)=>{
            t.forEach((s)=>Dt[s] = e);
            function n(s) {
                var l = r(s);
                l.length !== t.length && xt("Mismatched type converter count");
                for(var f = 0; f < t.length; ++f)B(t[f], l[f]);
            }
            var a = new Array(e.length), i = [], u = 0;
            e.forEach((s, l)=>{
                K.hasOwnProperty(s) ? a[l] = K[s] : (i.push(s), ot.hasOwnProperty(s) || (ot[s] = []), ot[s].push(()=>{
                    a[l] = K[s], ++u, u === i.length && n(a);
                }));
            }), i.length === 0 && n(a);
        }, Vr = (t)=>{
            var e = Ot[t];
            delete Ot[t];
            var r = e.rawConstructor, n = e.rawDestructor, a = e.fields, i = a.map((u)=>u.getterReturnType).concat(a.map((u)=>u.setterArgumentType));
            tt([
                t
            ], i, (u)=>{
                var s = {};
                return a.forEach((l, f)=>{
                    var h = l.fieldName, v = u[f], m = l.getter, w = l.getterContext, C = u[f + a.length], S = l.setter, O = l.setterContext;
                    s[h] = {
                        read: (D)=>v.fromWireType(m(w, D)),
                        write: (D, et)=>{
                            var M = [];
                            S(O, D, C.toWireType(M, et)), Gt(M);
                        }
                    };
                }), [
                    {
                        name: e.name,
                        fromWireType: (l)=>{
                            var f = {};
                            for(var h in s)f[h] = s[h].read(l);
                            return n(l), f;
                        },
                        toWireType: (l, f)=>{
                            for(var h in s)if (!(h in f)) throw new TypeError(`Missing field: "${h}"`);
                            var v = r();
                            for(h in s)s[h].write(v, f[h]);
                            return l !== null && l.push(n, v), v;
                        },
                        argPackAdvance: z,
                        readValueFromPointer: ht,
                        destructorFunction: n
                    }
                ];
            });
        }, Lr = (t, e, r, n, a)=>{}, Hr = ()=>{
            for(var t = new Array(256), e = 0; e < 256; ++e)t[e] = String.fromCharCode(e);
            be = t;
        }, be, j = (t)=>{
            for(var e = "", r = t; F[r];)e += be[F[r++]];
            return e;
        }, it, g = (t)=>{
            throw new it(t);
        };
        function zr(t, e) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var n = e.name;
            if (t || g(`type "${n}" must have a positive integer typeid pointer`), K.hasOwnProperty(t)) {
                if (r.ignoreDuplicateRegistrations) return;
                g(`Cannot register type '${n}' twice`);
            }
            if (K[t] = e, delete Dt[t], ot.hasOwnProperty(t)) {
                var a = ot[t];
                delete ot[t], a.forEach((i)=>i());
            }
        }
        function B(t, e) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return zr(t, e, r);
        }
        var z = 8, Nr = (t, e, r, n)=>{
            e = j(e), B(t, {
                name: e,
                fromWireType: function(a) {
                    return !!a;
                },
                toWireType: function(a, i) {
                    return i ? r : n;
                },
                argPackAdvance: z,
                readValueFromPointer: function(a) {
                    return this.fromWireType(F[a]);
                },
                destructorFunction: null
            });
        }, Gr = (t)=>({
                count: t.count,
                deleteScheduled: t.deleteScheduled,
                preservePointerOnDelete: t.preservePointerOnDelete,
                ptr: t.ptr,
                ptrType: t.ptrType,
                smartPtr: t.smartPtr,
                smartPtrType: t.smartPtrType
            }), Xt = (t)=>{
            function e(r) {
                return r.$$.ptrType.registeredClass.name;
            }
            g(e(t) + " instance already deleted");
        }, Yt = !1, Ce = (t)=>{}, Xr = (t)=>{
            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
        }, Te = (t)=>{
            t.count.value -= 1;
            var e = t.count.value === 0;
            e && Xr(t);
        }, Pe = (t, e, r)=>{
            if (e === r) return t;
            if (r.baseClass === void 0) return null;
            var n = Pe(t, e, r.baseClass);
            return n === null ? null : r.downcast(n);
        }, Ee = {}, Yr = ()=>Object.keys(yt).length, qr = ()=>{
            var t = [];
            for(var e in yt)yt.hasOwnProperty(e) && t.push(yt[e]);
            return t;
        }, pt = [], qt = ()=>{
            for(; pt.length;){
                var t = pt.pop();
                t.$$.deleteScheduled = !1, t.delete();
            }
        }, vt, Qr = (t)=>{
            vt = t, pt.length && vt && vt(qt);
        }, Zr = ()=>{
            c.getInheritedInstanceCount = Yr, c.getLiveInheritedInstances = qr, c.flushPendingDeletes = qt, c.setDelayFunction = Qr;
        }, yt = {}, Jr = (t, e)=>{
            for(e === void 0 && g("ptr should not be undefined"); t.baseClass;)e = t.upcast(e), t = t.baseClass;
            return e;
        }, Kr = (t, e)=>(e = Jr(t, e), yt[e]), St = (t, e)=>{
            (!e.ptrType || !e.ptr) && xt("makeClassHandle requires ptr and ptrType");
            var r = !!e.smartPtrType, n = !!e.smartPtr;
            return r !== n && xt("Both smartPtrType and smartPtr must be specified"), e.count = {
                value: 1
            }, mt(Object.create(t, {
                $$: {
                    value: e,
                    writable: !0
                }
            }));
        };
        function tn(t) {
            var e = this.getPointee(t);
            if (!e) return this.destructor(t), null;
            var r = Kr(this.registeredClass, e);
            if (r !== void 0) {
                if (r.$$.count.value === 0) return r.$$.ptr = e, r.$$.smartPtr = t, r.clone();
                var n = r.clone();
                return this.destructor(t), n;
            }
            function a() {
                return this.isSmartPointer ? St(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: e,
                    smartPtrType: this,
                    smartPtr: t
                }) : St(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: t
                });
            }
            var i = this.registeredClass.getActualType(e), u = Ee[i];
            if (!u) return a.call(this);
            var s;
            this.isConst ? s = u.constPointerType : s = u.pointerType;
            var l = Pe(e, this.registeredClass, s.registeredClass);
            return l === null ? a.call(this) : this.isSmartPointer ? St(s.registeredClass.instancePrototype, {
                ptrType: s,
                ptr: l,
                smartPtrType: this,
                smartPtr: t
            }) : St(s.registeredClass.instancePrototype, {
                ptrType: s,
                ptr: l
            });
        }
        var mt = (t)=>typeof FinalizationRegistry > "u" ? (mt = (e)=>e, t) : (Yt = new FinalizationRegistry((e)=>{
                Te(e.$$);
            }), mt = (e)=>{
                var r = e.$$, n = !!r.smartPtr;
                if (n) {
                    var a = {
                        $$: r
                    };
                    Yt.register(e, a, e);
                }
                return e;
            }, Ce = (e)=>Yt.unregister(e), mt(t)), en = ()=>{
            Object.assign(jt.prototype, {
                isAliasOf (t) {
                    if (!(this instanceof jt) || !(t instanceof jt)) return !1;
                    var e = this.$$.ptrType.registeredClass, r = this.$$.ptr;
                    t.$$ = t.$$;
                    for(var n = t.$$.ptrType.registeredClass, a = t.$$.ptr; e.baseClass;)r = e.upcast(r), e = e.baseClass;
                    for(; n.baseClass;)a = n.upcast(a), n = n.baseClass;
                    return e === n && r === a;
                },
                clone () {
                    if (this.$$.ptr || Xt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                    var t = mt(Object.create(Object.getPrototypeOf(this), {
                        $$: {
                            value: Gr(this.$$)
                        }
                    }));
                    return t.$$.count.value += 1, t.$$.deleteScheduled = !1, t;
                },
                delete () {
                    this.$$.ptr || Xt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && g("Object already scheduled for deletion"), Ce(this), Te(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
                },
                isDeleted () {
                    return !this.$$.ptr;
                },
                deleteLater () {
                    return this.$$.ptr || Xt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && g("Object already scheduled for deletion"), pt.push(this), pt.length === 1 && vt && vt(qt), this.$$.deleteScheduled = !0, this;
                }
            });
        };
        function jt() {}
        var gt = (t, e)=>Object.defineProperty(e, "name", {
                value: t
            }), _e = (t, e, r)=>{
            if (t[e].overloadTable === void 0) {
                var n = t[e];
                t[e] = function() {
                    for(var a = arguments.length, i = new Array(a), u = 0; u < a; u++)i[u] = arguments[u];
                    return t[e].overloadTable.hasOwnProperty(i.length) || g(`Function '${r}' called with an invalid number of arguments (${i.length}) - expects one of (${t[e].overloadTable})!`), t[e].overloadTable[i.length].apply(this, i);
                }, t[e].overloadTable = [], t[e].overloadTable[n.argCount] = n;
            }
        }, Qt = (t, e, r)=>{
            c.hasOwnProperty(t) ? ((r === void 0 || c[t].overloadTable !== void 0 && c[t].overloadTable[r] !== void 0) && g(`Cannot register public name '${t}' twice`), _e(c, t, t), c.hasOwnProperty(r) && g(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), c[t].overloadTable[r] = e) : (c[t] = e, r !== void 0 && (c[t].numArguments = r));
        }, rn = 48, nn = 57, an = (t)=>{
            if (t === void 0) return "_unknown";
            t = t.replace(/[^a-zA-Z0-9_]/g, "$");
            var e = t.charCodeAt(0);
            return e >= rn && e <= nn ? `_${t}` : t;
        };
        function on(t, e, r, n, a, i, u, s) {
            this.name = t, this.constructor = e, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = u, this.downcast = s, this.pureVirtualFunctions = [];
        }
        var Zt = (t, e, r)=>{
            for(; e !== r;)e.upcast || g(`Expected null or instance of ${r.name}, got an instance of ${e.name}`), t = e.upcast(t), e = e.baseClass;
            return t;
        };
        function sn(t, e) {
            if (e === null) return this.isReference && g(`null is not a valid ${this.name}`), 0;
            e.$$ || g(`Cannot pass "${ne(e)}" as a ${this.name}`), e.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`);
            var r = e.$$.ptrType.registeredClass, n = Zt(e.$$.ptr, r, this.registeredClass);
            return n;
        }
        function un(t, e) {
            var r;
            if (e === null) return this.isReference && g(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), t !== null && t.push(this.rawDestructor, r), r) : 0;
            (!e || !e.$$) && g(`Cannot pass "${ne(e)}" as a ${this.name}`), e.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && e.$$.ptrType.isConst && g(`Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`);
            var n = e.$$.ptrType.registeredClass;
            if (r = Zt(e.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch(e.$$.smartPtr === void 0 && g("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy){
                case 0:
                    e.$$.smartPtrType === this ? r = e.$$.smartPtr : g(`Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`);
                    break;
                case 1:
                    r = e.$$.smartPtr;
                    break;
                case 2:
                    if (e.$$.smartPtrType === this) r = e.$$.smartPtr;
                    else {
                        var a = e.clone();
                        r = this.rawShare(r, Y.toHandle(()=>a.delete())), t !== null && t.push(this.rawDestructor, r);
                    }
                    break;
                default:
                    g("Unsupporting sharing policy");
            }
            return r;
        }
        function cn(t, e) {
            if (e === null) return this.isReference && g(`null is not a valid ${this.name}`), 0;
            e.$$ || g(`Cannot pass "${ne(e)}" as a ${this.name}`), e.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`), e.$$.ptrType.isConst && g(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`);
            var r = e.$$.ptrType.registeredClass, n = Zt(e.$$.ptr, r, this.registeredClass);
            return n;
        }
        var ln = ()=>{
            Object.assign(Ft.prototype, {
                getPointee (t) {
                    return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
                },
                destructor (t) {
                    var e;
                    (e = this.rawDestructor) === null || e === void 0 || e.call(this, t);
                },
                argPackAdvance: z,
                readValueFromPointer: ht,
                fromWireType: tn
            });
        };
        function Ft(t, e, r, n, a, i, u, s, l, f, h) {
            this.name = t, this.registeredClass = e, this.isReference = r, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = u, this.rawGetPointee = s, this.rawConstructor = l, this.rawShare = f, this.rawDestructor = h, !a && e.baseClass === void 0 ? n ? (this.toWireType = sn, this.destructorFunction = null) : (this.toWireType = cn, this.destructorFunction = null) : this.toWireType = un;
        }
        var Ae = (t, e, r)=>{
            c.hasOwnProperty(t) || xt("Replacing nonexistent public symbol"), c[t].overloadTable !== void 0 && r !== void 0 ? c[t].overloadTable[r] = e : (c[t] = e, c[t].argCount = r);
        }, dn = (t, e, r)=>{
            t = t.replace(/p/g, "i");
            var n = c["dynCall_" + t];
            return n(e, ...r);
        }, Mt = [], Oe, P = (t)=>{
            var e = Mt[t];
            return e || (t >= Mt.length && (Mt.length = t + 1), Mt[t] = e = Oe.get(t)), e;
        }, fn = function(t, e) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            if (t.includes("j")) return dn(t, e, r);
            var n = P(e)(...r);
            return n;
        }, hn = (t, e)=>function() {
                for(var r = arguments.length, n = new Array(r), a = 0; a < r; a++)n[a] = arguments[a];
                return fn(t, e, n);
            }, U = (t, e)=>{
            t = j(t);
            function r() {
                return t.includes("j") ? hn(t, e) : P(e);
            }
            var n = r();
            return typeof n != "function" && g(`unknown function pointer with signature ${t}: ${e}`), n;
        }, pn = (t, e)=>{
            var r = gt(e, function(n) {
                this.name = e, this.message = n;
                var a = new Error(n).stack;
                a !== void 0 && (this.stack = this.toString() + `
` + a.replace(/^Error(:[^\n]*)?\n/, ""));
            });
            return r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
                return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
            }, r;
        }, De, xe = (t)=>{
            var e = We(t), r = j(e);
            return q(e), r;
        }, It = (t, e)=>{
            var r = [], n = {};
            function a(i) {
                if (!n[i] && !K[i]) {
                    if (Dt[i]) {
                        Dt[i].forEach(a);
                        return;
                    }
                    r.push(i), n[i] = !0;
                }
            }
            throw e.forEach(a), new De(`${t}: ` + r.map(xe).join([
                ", "
            ]));
        }, vn = (t, e, r, n, a, i, u, s, l, f, h, v, m)=>{
            h = j(h), i = U(a, i), s && (s = U(u, s)), f && (f = U(l, f)), m = U(v, m);
            var w = an(h);
            Qt(w, function() {
                It(`Cannot construct ${h} due to unbound types`, [
                    n
                ]);
            }), tt([
                t,
                e,
                r
            ], n ? [
                n
            ] : [], (C)=>{
                C = C[0];
                var S, O;
                n ? (S = C.registeredClass, O = S.instancePrototype) : O = jt.prototype;
                var D = gt(h, function() {
                    if (Object.getPrototypeOf(this) !== et) throw new it("Use 'new' to construct " + h);
                    if (M.constructor_body === void 0) throw new it(h + " has no accessible constructor");
                    for(var qe = arguments.length, kt = new Array(qe), Bt = 0; Bt < qe; Bt++)kt[Bt] = arguments[Bt];
                    var Qe = M.constructor_body[kt.length];
                    if (Qe === void 0) throw new it(`Tried to invoke ctor of ${h} with invalid number of parameters (${kt.length}) - expected (${Object.keys(M.constructor_body).toString()}) parameters instead!`);
                    return Qe.apply(this, kt);
                }), et = Object.create(O, {
                    constructor: {
                        value: D
                    }
                });
                D.prototype = et;
                var M = new on(h, D, et, m, S, i, s, f);
                if (M.baseClass) {
                    var Q, Wt;
                    (Wt = (Q = M.baseClass).__derivedClasses) !== null && Wt !== void 0 || (Q.__derivedClasses = []), M.baseClass.__derivedClasses.push(M);
                }
                var Ha = new Ft(h, M, !0, !1, !1), Xe = new Ft(h + "*", M, !1, !1, !1), Ye = new Ft(h + " const*", M, !1, !0, !1);
                return Ee[t] = {
                    pointerType: Xe,
                    constPointerType: Ye
                }, Ae(w, D), [
                    Ha,
                    Xe,
                    Ye
                ];
            });
        }, Jt = (t, e)=>{
            for(var r = [], n = 0; n < t; n++)r.push(b[e + n * 4 >> 2]);
            return r;
        };
        function yn(t) {
            for(var e = 1; e < t.length; ++e)if (t[e] !== null && t[e].destructorFunction === void 0) return !0;
            return !1;
        }
        function Kt(t, e, r, n, a, i) {
            var u = e.length;
            u < 2 && g("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var s = e[1] !== null && r !== null, l = yn(e), f = e[0].name !== "void", h = u - 2, v = new Array(h), m = [], w = [], C = function() {
                w.length = 0;
                var S;
                m.length = s ? 2 : 1, m[0] = a, s && (S = e[1].toWireType(w, this), m[1] = S);
                for(var O = 0; O < h; ++O)v[O] = e[O + 2].toWireType(w, O < 0 || arguments.length <= O ? void 0 : arguments[O]), m.push(v[O]);
                var D = n(...m);
                function et(M) {
                    if (l) Gt(w);
                    else for(var Q = s ? 1 : 2; Q < e.length; Q++){
                        var Wt = Q === 1 ? S : v[Q - 2];
                        e[Q].destructorFunction !== null && e[Q].destructorFunction(Wt);
                    }
                    if (f) return e[0].fromWireType(M);
                }
                return et(D);
            };
            return gt(t, C);
        }
        var mn = (t, e, r, n, a, i)=>{
            var u = Jt(e, r);
            a = U(n, a), tt([], [
                t
            ], (s)=>{
                s = s[0];
                var l = `constructor ${s.name}`;
                if (s.registeredClass.constructor_body === void 0 && (s.registeredClass.constructor_body = []), s.registeredClass.constructor_body[e - 1] !== void 0) throw new it(`Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                return s.registeredClass.constructor_body[e - 1] = ()=>{
                    It(`Cannot construct ${s.name} due to unbound types`, u);
                }, tt([], u, (f)=>(f.splice(1, 0, null), s.registeredClass.constructor_body[e - 1] = Kt(l, f, null, a, i), [])), [];
            });
        }, Se = (t)=>{
            t = t.trim();
            const e = t.indexOf("(");
            return e !== -1 ? t.substr(0, e) : t;
        }, gn = (t, e, r, n, a, i, u, s, l, f)=>{
            var h = Jt(r, n);
            e = j(e), e = Se(e), i = U(a, i), tt([], [
                t
            ], (v)=>{
                v = v[0];
                var m = `${v.name}.${e}`;
                e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && v.registeredClass.pureVirtualFunctions.push(e);
                function w() {
                    It(`Cannot call ${m} due to unbound types`, h);
                }
                var C = v.registeredClass.instancePrototype, S = C[e];
                return S === void 0 || S.overloadTable === void 0 && S.className !== v.name && S.argCount === r - 2 ? (w.argCount = r - 2, w.className = v.name, C[e] = w) : (_e(C, e, m), C[e].overloadTable[r - 2] = w), tt([], h, (O)=>{
                    var D = Kt(m, O, v, i, u);
                    return C[e].overloadTable === void 0 ? (D.argCount = r - 2, C[e] = D) : C[e].overloadTable[r - 2] = D, [];
                }), [];
            });
        }, te = [], X = [], ee = (t)=>{
            t > 9 && --X[t + 1] === 0 && (X[t] = void 0, te.push(t));
        }, wn = ()=>X.length / 2 - 5 - te.length, $n = ()=>{
            X.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), c.count_emval_handles = wn;
        }, Y = {
            toValue: (t)=>(t || g("Cannot use deleted val. handle = " + t), X[t]),
            toHandle: (t)=>{
                switch(t){
                    case void 0:
                        return 2;
                    case null:
                        return 4;
                    case !0:
                        return 6;
                    case !1:
                        return 8;
                    default:
                        {
                            const e = te.pop() || X.length;
                            return X[e] = t, X[e + 1] = 1, e;
                        }
                }
            }
        }, je = {
            name: "emscripten::val",
            fromWireType: (t)=>{
                var e = Y.toValue(t);
                return ee(t), e;
            },
            toWireType: (t, e)=>Y.toHandle(e),
            argPackAdvance: z,
            readValueFromPointer: ht,
            destructorFunction: null
        }, bn = (t)=>B(t, je), Cn = (t, e, r)=>{
            switch(e){
                case 1:
                    return r ? function(n) {
                        return this.fromWireType(H[n]);
                    } : function(n) {
                        return this.fromWireType(F[n]);
                    };
                case 2:
                    return r ? function(n) {
                        return this.fromWireType(at[n >> 1]);
                    } : function(n) {
                        return this.fromWireType(dt[n >> 1]);
                    };
                case 4:
                    return r ? function(n) {
                        return this.fromWireType(Z[n >> 2]);
                    } : function(n) {
                        return this.fromWireType(b[n >> 2]);
                    };
                default:
                    throw new TypeError(`invalid integer width (${e}): ${t}`);
            }
        }, Tn = (t, e, r, n)=>{
            e = j(e);
            function a() {}
            a.values = {}, B(t, {
                name: e,
                constructor: a,
                fromWireType: function(i) {
                    return this.constructor.values[i];
                },
                toWireType: (i, u)=>u.value,
                argPackAdvance: z,
                readValueFromPointer: Cn(e, r, n),
                destructorFunction: null
            }), Qt(e, a);
        }, re = (t, e)=>{
            var r = K[t];
            return r === void 0 && g(`${e} has unknown type ${xe(t)}`), r;
        }, Pn = (t, e, r)=>{
            var n = re(t, "enum");
            e = j(e);
            var a = n.constructor, i = Object.create(n.constructor.prototype, {
                value: {
                    value: r
                },
                constructor: {
                    value: gt(`${n.name}_${e}`, function() {})
                }
            });
            a.values[r] = i, a[e] = i;
        }, ne = (t)=>{
            if (t === null) return "null";
            var e = typeof t;
            return e === "object" || e === "array" || e === "function" ? t.toString() : "" + t;
        }, En = (t, e)=>{
            switch(e){
                case 4:
                    return function(r) {
                        return this.fromWireType(de[r >> 2]);
                    };
                case 8:
                    return function(r) {
                        return this.fromWireType(fe[r >> 3]);
                    };
                default:
                    throw new TypeError(`invalid float width (${e}): ${t}`);
            }
        }, _n = (t, e, r)=>{
            e = j(e), B(t, {
                name: e,
                fromWireType: (n)=>n,
                toWireType: (n, a)=>a,
                argPackAdvance: z,
                readValueFromPointer: En(e, r),
                destructorFunction: null
            });
        }, An = (t, e, r, n, a, i, u, s)=>{
            var l = Jt(e, r);
            t = j(t), t = Se(t), a = U(n, a), Qt(t, function() {
                It(`Cannot call ${t} due to unbound types`, l);
            }, e - 1), tt([], l, (f)=>{
                var h = [
                    f[0],
                    null
                ].concat(f.slice(1));
                return Ae(t, Kt(t, h, null, a, i), e - 1), [];
            });
        }, On = (t, e, r)=>{
            switch(e){
                case 1:
                    return r ? (n)=>H[n] : (n)=>F[n];
                case 2:
                    return r ? (n)=>at[n >> 1] : (n)=>dt[n >> 1];
                case 4:
                    return r ? (n)=>Z[n >> 2] : (n)=>b[n >> 2];
                default:
                    throw new TypeError(`invalid integer width (${e}): ${t}`);
            }
        }, Dn = (t, e, r, n, a)=>{
            e = j(e);
            var i = (h)=>h;
            if (n === 0) {
                var u = 32 - 8 * r;
                i = (h)=>h << u >>> u;
            }
            var s = e.includes("unsigned"), l = (h, v)=>{}, f;
            s ? f = function(h, v) {
                return l(v, this.name), v >>> 0;
            } : f = function(h, v) {
                return l(v, this.name), v;
            }, B(t, {
                name: e,
                fromWireType: i,
                toWireType: f,
                argPackAdvance: z,
                readValueFromPointer: On(e, r, n !== 0),
                destructorFunction: null
            });
        }, xn = (t, e, r)=>{
            var n = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array
            ], a = n[e];
            function i(u) {
                var s = b[u >> 2], l = b[u + 4 >> 2];
                return new a(H.buffer, l, s);
            }
            r = j(r), B(t, {
                name: r,
                fromWireType: i,
                argPackAdvance: z,
                readValueFromPointer: i
            }, {
                ignoreDuplicateRegistrations: !0
            });
        }, Sn = Object.assign({
            optional: !0
        }, je), jn = (t, e)=>{
            B(t, Sn);
        }, Fn = (t, e, r, n)=>{
            if (!(n > 0)) return 0;
            for(var a = r, i = r + n - 1, u = 0; u < t.length; ++u){
                var s = t.charCodeAt(u);
                if (s >= 55296 && s <= 57343) {
                    var l = t.charCodeAt(++u);
                    s = 65536 + ((s & 1023) << 10) | l & 1023;
                }
                if (s <= 127) {
                    if (r >= i) break;
                    e[r++] = s;
                } else if (s <= 2047) {
                    if (r + 1 >= i) break;
                    e[r++] = 192 | s >> 6, e[r++] = 128 | s & 63;
                } else if (s <= 65535) {
                    if (r + 2 >= i) break;
                    e[r++] = 224 | s >> 12, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | s & 63;
                } else {
                    if (r + 3 >= i) break;
                    e[r++] = 240 | s >> 18, e[r++] = 128 | s >> 12 & 63, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | s & 63;
                }
            }
            return e[r] = 0, r - a;
        }, wt = (t, e, r)=>Fn(t, F, e, r), Mn = (t)=>{
            for(var e = 0, r = 0; r < t.length; ++r){
                var n = t.charCodeAt(r);
                n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++r) : e += 3;
            }
            return e;
        }, Fe = typeof TextDecoder < "u" ? new TextDecoder() : void 0, Me = (t, e, r)=>{
            for(var n = e + r, a = e; t[a] && !(a >= n);)++a;
            if (a - e > 16 && t.buffer && Fe) return Fe.decode(t.subarray(e, a));
            for(var i = ""; e < a;){
                var u = t[e++];
                if (!(u & 128)) {
                    i += String.fromCharCode(u);
                    continue;
                }
                var s = t[e++] & 63;
                if ((u & 224) == 192) {
                    i += String.fromCharCode((u & 31) << 6 | s);
                    continue;
                }
                var l = t[e++] & 63;
                if ((u & 240) == 224 ? u = (u & 15) << 12 | s << 6 | l : u = (u & 7) << 18 | s << 12 | l << 6 | t[e++] & 63, u < 65536) i += String.fromCharCode(u);
                else {
                    var f = u - 65536;
                    i += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023);
                }
            }
            return i;
        }, In = (t, e)=>t ? Me(F, t, e) : "", Rn = (t, e)=>{
            e = j(e);
            var r = e === "std::string";
            B(t, {
                name: e,
                fromWireType (n) {
                    var a = b[n >> 2], i = n + 4, u;
                    if (r) for(var s = i, l = 0; l <= a; ++l){
                        var f = i + l;
                        if (l == a || F[f] == 0) {
                            var h = f - s, v = In(s, h);
                            u === void 0 ? u = v : (u += "\0", u += v), s = f + 1;
                        }
                    }
                    else {
                        for(var m = new Array(a), l = 0; l < a; ++l)m[l] = String.fromCharCode(F[i + l]);
                        u = m.join("");
                    }
                    return q(n), u;
                },
                toWireType (n, a) {
                    a instanceof ArrayBuffer && (a = new Uint8Array(a));
                    var i, u = typeof a == "string";
                    u || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || g("Cannot pass non-string to std::string"), r && u ? i = Mn(a) : i = a.length;
                    var s = ie(4 + i + 1), l = s + 4;
                    if (b[s >> 2] = i, r && u) wt(a, l, i + 1);
                    else if (u) for(var f = 0; f < i; ++f){
                        var h = a.charCodeAt(f);
                        h > 255 && (q(l), g("String has UTF-16 code units that do not fit in 8 bits")), F[l + f] = h;
                    }
                    else for(var f = 0; f < i; ++f)F[l + f] = a[f];
                    return n !== null && n.push(q, s), s;
                },
                argPackAdvance: z,
                readValueFromPointer: ht,
                destructorFunction (n) {
                    q(n);
                }
            });
        }, Ie = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Wn = (t, e)=>{
            for(var r = t, n = r >> 1, a = n + e / 2; !(n >= a) && dt[n];)++n;
            if (r = n << 1, r - t > 32 && Ie) return Ie.decode(F.subarray(t, r));
            for(var i = "", u = 0; !(u >= e / 2); ++u){
                var s = at[t + u * 2 >> 1];
                if (s == 0) break;
                i += String.fromCharCode(s);
            }
            return i;
        }, kn = (t, e, r)=>{
            var n;
            if ((n = r) !== null && n !== void 0 || (r = 2147483647), r < 2) return 0;
            r -= 2;
            for(var a = e, i = r < t.length * 2 ? r / 2 : t.length, u = 0; u < i; ++u){
                var s = t.charCodeAt(u);
                at[e >> 1] = s, e += 2;
            }
            return at[e >> 1] = 0, e - a;
        }, Bn = (t)=>t.length * 2, Un = (t, e)=>{
            for(var r = 0, n = ""; !(r >= e / 4);){
                var a = Z[t + r * 4 >> 2];
                if (a == 0) break;
                if (++r, a >= 65536) {
                    var i = a - 65536;
                    n += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023);
                } else n += String.fromCharCode(a);
            }
            return n;
        }, Vn = (t, e, r)=>{
            var n;
            if ((n = r) !== null && n !== void 0 || (r = 2147483647), r < 4) return 0;
            for(var a = e, i = a + r - 4, u = 0; u < t.length; ++u){
                var s = t.charCodeAt(u);
                if (s >= 55296 && s <= 57343) {
                    var l = t.charCodeAt(++u);
                    s = 65536 + ((s & 1023) << 10) | l & 1023;
                }
                if (Z[e >> 2] = s, e += 4, e + 4 > i) break;
            }
            return Z[e >> 2] = 0, e - a;
        }, Ln = (t)=>{
            for(var e = 0, r = 0; r < t.length; ++r){
                var n = t.charCodeAt(r);
                n >= 55296 && n <= 57343 && ++r, e += 4;
            }
            return e;
        }, Hn = (t, e, r)=>{
            r = j(r);
            var n, a, i, u;
            e === 2 ? (n = Wn, a = kn, u = Bn, i = (s)=>dt[s >> 1]) : e === 4 && (n = Un, a = Vn, u = Ln, i = (s)=>b[s >> 2]), B(t, {
                name: r,
                fromWireType: (s)=>{
                    for(var l = b[s >> 2], f, h = s + 4, v = 0; v <= l; ++v){
                        var m = s + 4 + v * e;
                        if (v == l || i(m) == 0) {
                            var w = m - h, C = n(h, w);
                            f === void 0 ? f = C : (f += "\0", f += C), h = m + e;
                        }
                    }
                    return q(s), f;
                },
                toWireType: (s, l)=>{
                    typeof l != "string" && g(`Cannot pass non-string to C++ string type ${r}`);
                    var f = u(l), h = ie(4 + f + e);
                    return b[h >> 2] = f / e, a(l, h + 4, f + e), s !== null && s.push(q, h), h;
                },
                argPackAdvance: z,
                readValueFromPointer: ht,
                destructorFunction (s) {
                    q(s);
                }
            });
        }, zn = (t, e, r, n, a, i)=>{
            Ot[t] = {
                name: j(e),
                rawConstructor: U(r, n),
                rawDestructor: U(a, i),
                fields: []
            };
        }, Nn = (t, e, r, n, a, i, u, s, l, f)=>{
            Ot[t].fields.push({
                fieldName: j(e),
                getterReturnType: r,
                getter: U(n, a),
                getterContext: i,
                setterArgumentType: u,
                setter: U(s, l),
                setterContext: f
            });
        }, Gn = (t, e)=>{
            e = j(e), B(t, {
                isVoid: !0,
                name: e,
                argPackAdvance: 0,
                fromWireType: ()=>{},
                toWireType: (r, n)=>{}
            });
        }, Xn = (t, e, r)=>F.copyWithin(t, e, e + r), ae = [], Yn = (t, e, r, n)=>(t = ae[t], e = Y.toValue(e), t(null, e, r, n)), qn = {}, Qn = (t)=>{
            var e = qn[t];
            return e === void 0 ? j(t) : e;
        }, Re = ()=>{
            if (typeof globalThis == "object") return globalThis;
            function t(e) {
                e.$$$embind_global$$$ = e;
                var r = typeof $$$embind_global$$$ == "object" && e.$$$embind_global$$$ == e;
                return r || delete e.$$$embind_global$$$, r;
            }
            if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && t(global) ? $$$embind_global$$$ = global : typeof self == "object" && t(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
            throw Error("unable to get global object.");
        }, Zn = (t)=>t === 0 ? Y.toHandle(Re()) : (t = Qn(t), Y.toHandle(Re()[t])), Jn = (t)=>{
            var e = ae.length;
            return ae.push(t), e;
        }, Kn = (t, e)=>{
            for(var r = new Array(t), n = 0; n < t; ++n)r[n] = re(b[e + n * 4 >> 2], "parameter " + n);
            return r;
        }, ta = Reflect.construct, ea = (t, e, r)=>{
            var n = [], a = t.toWireType(n, r);
            return n.length && (b[e >> 2] = Y.toHandle(n)), a;
        }, ra = (t, e, r)=>{
            var n = Kn(t, e), a = n.shift();
            t--;
            var i = new Array(t), u = (l, f, h, v)=>{
                for(var m = 0, w = 0; w < t; ++w)i[w] = n[w].readValueFromPointer(v + m), m += n[w].argPackAdvance;
                var C = r === 1 ? ta(f, i) : f.apply(l, i);
                return ea(a, h, C);
            }, s = `methodCaller<(${n.map((l)=>l.name).join(", ")}) => ${a.name}>`;
            return Jn(gt(s, u));
        }, na = (t)=>{
            t > 9 && (X[t + 1] += 1);
        }, aa = (t)=>{
            var e = Y.toValue(t);
            Gt(e), ee(t);
        }, oa = (t, e)=>{
            t = re(t, "_emval_take_value");
            var r = t.readValueFromPointer(e);
            return Y.toHandle(r);
        }, ia = (t, e, r, n)=>{
            var a = /* @__PURE__ */ new Date().getFullYear(), i = new Date(a, 0, 1), u = new Date(a, 6, 1), s = i.getTimezoneOffset(), l = u.getTimezoneOffset(), f = Math.max(s, l);
            b[t >> 2] = f * 60, Z[e >> 2] = +(s != l);
            var h = (w)=>{
                var C = w >= 0 ? "-" : "+", S = Math.abs(w), O = String(Math.floor(S / 60)).padStart(2, "0"), D = String(S % 60).padStart(2, "0");
                return `UTC${C}${O}${D}`;
            }, v = h(s), m = h(l);
            l < s ? (wt(v, r, 17), wt(m, n, 17)) : (wt(v, n, 17), wt(m, r, 17));
        }, sa = ()=>2147483648, ua = (t, e)=>Math.ceil(t / e) * e, ca = (t)=>{
            var e = Tt.buffer, r = (t - e.byteLength + 65535) / 65536;
            try {
                return Tt.grow(r), he(), 1;
            } catch  {}
        }, la = (t)=>{
            var e = F.length;
            t >>>= 0;
            var r = sa();
            if (t > r) return !1;
            for(var n = 1; n <= 4; n *= 2){
                var a = e * (1 + 0.2 / n);
                a = Math.min(a, t + 100663296);
                var i = Math.min(r, ua(Math.max(t, a), 65536)), u = ca(i);
                if (u) return !0;
            }
            return !1;
        }, oe = {}, da = ()=>L || "./this.program", $t = ()=>{
            if (!$t.strings) {
                var t = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: t,
                    _: da()
                };
                for(var r in oe)oe[r] === void 0 ? delete e[r] : e[r] = oe[r];
                var n = [];
                for(var r in e)n.push(`${r}=${e[r]}`);
                $t.strings = n;
            }
            return $t.strings;
        }, fa = (t, e)=>{
            for(var r = 0; r < t.length; ++r)H[e++] = t.charCodeAt(r);
            H[e] = 0;
        }, ha = (t, e)=>{
            var r = 0;
            return $t().forEach((n, a)=>{
                var i = e + r;
                b[t + a * 4 >> 2] = i, fa(n, i), r += n.length + 1;
            }), 0;
        }, pa = (t, e)=>{
            var r = $t();
            b[t >> 2] = r.length;
            var n = 0;
            return r.forEach((a)=>n += a.length + 1), b[e >> 2] = n, 0;
        }, va = (t)=>52;
        function ya(t, e, r, n, a) {
            return 70;
        }
        var ma = [
            null,
            [],
            []
        ], ga = (t, e)=>{
            var r = ma[t];
            e === 0 || e === 10 ? ((t === 1 ? Vt : nt)(Me(r, 0)), r.length = 0) : r.push(e);
        }, wa = (t, e, r, n)=>{
            for(var a = 0, i = 0; i < r; i++){
                var u = b[e >> 2], s = b[e + 4 >> 2];
                e += 8;
                for(var l = 0; l < s; l++)ga(t, F[u + l]);
                a += s;
            }
            return b[n >> 2] = a, 0;
        }, $a = (t)=>t;
        $e = c.InternalError = class extends Error {
            constructor(t){
                super(t), this.name = "InternalError";
            }
        }, Hr(), it = c.BindingError = class extends Error {
            constructor(t){
                super(t), this.name = "BindingError";
            }
        }, en(), Zr(), ln(), De = c.UnboundTypeError = pn(Error, "UnboundTypeError"), $n();
        var ba = {
            s: Sr,
            v: jr,
            b: Mr,
            g: Ir,
            q: Rr,
            Y: Wr,
            f: kr,
            X: Br,
            e: Fr,
            T: Ur,
            ha: Vr,
            S: Lr,
            ba: Nr,
            fa: vn,
            ea: mn,
            w: gn,
            aa: bn,
            x: Tn,
            h: Pn,
            M: _n,
            N: An,
            t: Dn,
            o: xn,
            ga: jn,
            L: Rn,
            C: Hn,
            B: zn,
            ia: Nn,
            ca: Gn,
            $: Xn,
            E: Yn,
            ka: ee,
            la: Zn,
            K: ra,
            O: na,
            P: aa,
            da: oa,
            U: ia,
            Z: la,
            V: ha,
            W: pa,
            _: va,
            R: ya,
            J: wa,
            F: Wa,
            D: _a,
            G: Ra,
            n: ka,
            a: Ca,
            d: Oa,
            p: Ea,
            j: Ia,
            I: Fa,
            u: ja,
            H: Ma,
            z: Ua,
            Q: La,
            l: Da,
            k: Aa,
            c: Pa,
            m: Ta,
            A: Sa,
            r: Ba,
            i: xa,
            y: Va,
            ja: $a
        }, E = xr(), We = (t)=>(We = E.oa)(t), q = c._free = (t)=>(q = c._free = E.pa)(t), ie = c._malloc = (t)=>(ie = c._malloc = E.ra)(t), T = (t, e)=>(T = E.sa)(t, e), ke = (t)=>(ke = E.ta)(t), Be = (t)=>(Be = E.ua)(t), Ue = ()=>(Ue = E.va)(), Ve = (t)=>(Ve = E.wa)(t), Le = (t)=>(Le = E.xa)(t), He = (t, e, r)=>(He = E.ya)(t, e, r), ze = (t)=>(ze = E.za)(t);
        c.dynCall_viijii = (t, e, r, n, a, i, u)=>(c.dynCall_viijii = E.Aa)(t, e, r, n, a, i, u), c.dynCall_jiji = (t, e, r, n, a)=>(c.dynCall_jiji = E.Ba)(t, e, r, n, a);
        var Ne = c.dynCall_jiiii = (t, e, r, n, a)=>(Ne = c.dynCall_jiiii = E.Ca)(t, e, r, n, a);
        c.dynCall_iiiiij = (t, e, r, n, a, i, u)=>(c.dynCall_iiiiij = E.Da)(t, e, r, n, a, i, u), c.dynCall_iiiiijj = (t, e, r, n, a, i, u, s, l)=>(c.dynCall_iiiiijj = E.Ea)(t, e, r, n, a, i, u, s, l), c.dynCall_iiiiiijj = (t, e, r, n, a, i, u, s, l, f)=>(c.dynCall_iiiiiijj = E.Fa)(t, e, r, n, a, i, u, s, l, f);
        function Ca(t, e) {
            var r = A();
            try {
                return P(t)(e);
            } catch (n) {
                if (_(r), n !== n + 0) throw n;
                T(1, 0);
            }
        }
        function Ta(t, e, r, n) {
            var a = A();
            try {
                P(t)(e, r, n);
            } catch (i) {
                if (_(a), i !== i + 0) throw i;
                T(1, 0);
            }
        }
        function Pa(t, e, r) {
            var n = A();
            try {
                P(t)(e, r);
            } catch (a) {
                if (_(n), a !== a + 0) throw a;
                T(1, 0);
            }
        }
        function Ea(t, e, r, n) {
            var a = A();
            try {
                return P(t)(e, r, n);
            } catch (i) {
                if (_(a), i !== i + 0) throw i;
                T(1, 0);
            }
        }
        function _a(t, e, r, n, a) {
            var i = A();
            try {
                return P(t)(e, r, n, a);
            } catch (u) {
                if (_(i), u !== u + 0) throw u;
                T(1, 0);
            }
        }
        function Aa(t, e) {
            var r = A();
            try {
                P(t)(e);
            } catch (n) {
                if (_(r), n !== n + 0) throw n;
                T(1, 0);
            }
        }
        function Oa(t, e, r) {
            var n = A();
            try {
                return P(t)(e, r);
            } catch (a) {
                if (_(n), a !== a + 0) throw a;
                T(1, 0);
            }
        }
        function Da(t) {
            var e = A();
            try {
                P(t)();
            } catch (r) {
                if (_(e), r !== r + 0) throw r;
                T(1, 0);
            }
        }
        function xa(t, e, r, n, a, i, u, s, l, f, h) {
            var v = A();
            try {
                P(t)(e, r, n, a, i, u, s, l, f, h);
            } catch (m) {
                if (_(v), m !== m + 0) throw m;
                T(1, 0);
            }
        }
        function Sa(t, e, r, n, a) {
            var i = A();
            try {
                P(t)(e, r, n, a);
            } catch (u) {
                if (_(i), u !== u + 0) throw u;
                T(1, 0);
            }
        }
        function ja(t, e, r, n, a, i, u) {
            var s = A();
            try {
                return P(t)(e, r, n, a, i, u);
            } catch (l) {
                if (_(s), l !== l + 0) throw l;
                T(1, 0);
            }
        }
        function Fa(t, e, r, n, a, i) {
            var u = A();
            try {
                return P(t)(e, r, n, a, i);
            } catch (s) {
                if (_(u), s !== s + 0) throw s;
                T(1, 0);
            }
        }
        function Ma(t, e, r, n, a, i, u, s) {
            var l = A();
            try {
                return P(t)(e, r, n, a, i, u, s);
            } catch (f) {
                if (_(l), f !== f + 0) throw f;
                T(1, 0);
            }
        }
        function Ia(t, e, r, n, a) {
            var i = A();
            try {
                return P(t)(e, r, n, a);
            } catch (u) {
                if (_(i), u !== u + 0) throw u;
                T(1, 0);
            }
        }
        function Ra(t, e, r, n) {
            var a = A();
            try {
                return P(t)(e, r, n);
            } catch (i) {
                if (_(a), i !== i + 0) throw i;
                T(1, 0);
            }
        }
        function Wa(t, e, r, n) {
            var a = A();
            try {
                return P(t)(e, r, n);
            } catch (i) {
                if (_(a), i !== i + 0) throw i;
                T(1, 0);
            }
        }
        function ka(t) {
            var e = A();
            try {
                return P(t)();
            } catch (r) {
                if (_(e), r !== r + 0) throw r;
                T(1, 0);
            }
        }
        function Ba(t, e, r, n, a, i, u, s) {
            var l = A();
            try {
                P(t)(e, r, n, a, i, u, s);
            } catch (f) {
                if (_(l), f !== f + 0) throw f;
                T(1, 0);
            }
        }
        function Ua(t, e, r, n, a, i, u, s, l, f, h, v) {
            var m = A();
            try {
                return P(t)(e, r, n, a, i, u, s, l, f, h, v);
            } catch (w) {
                if (_(m), w !== w + 0) throw w;
                T(1, 0);
            }
        }
        function Va(t, e, r, n, a, i, u, s, l, f, h, v, m, w, C, S) {
            var O = A();
            try {
                P(t)(e, r, n, a, i, u, s, l, f, h, v, m, w, C, S);
            } catch (D) {
                if (_(O), D !== D + 0) throw D;
                T(1, 0);
            }
        }
        function La(t, e, r, n, a) {
            var i = A();
            try {
                return Ne(t, e, r, n, a);
            } catch (u) {
                if (_(i), u !== u + 0) throw u;
                T(1, 0);
            }
        }
        var Rt;
        ft = function t() {
            Rt || Ge(), Rt || (ft = t);
        };
        function Ge() {
            if (J > 0 || (mr(), J > 0)) return;
            function t() {
                var e;
                Rt || (Rt = !0, c.calledRun = !0, !le && (gr(), $(c), (e = c.onRuntimeInitialized) === null || e === void 0 || e.call(c), wr()));
            }
            c.setStatus ? (c.setStatus("Running..."), setTimeout(()=>{
                setTimeout(()=>c.setStatus(""), 1), t();
            }, 1)) : t();
        }
        if (c.preInit) for(typeof c.preInit == "function" && (c.preInit = [
            c.preInit
        ]); c.preInit.length > 0;)c.preInit.pop()();
        return Ge(), y = k, y;
    };
})();
function ro(o) {
    return ce(Ut, o);
}
function Co(o) {
    return Ka(Ut, o);
}
async function no(o, d) {
    return to(Ut, o, d);
}
async function ao(o, d) {
    return eo(Ut, o, d);
}
const sr = [
    [
        "aztec",
        "Aztec"
    ],
    [
        "code_128",
        "Code128"
    ],
    [
        "code_39",
        "Code39"
    ],
    [
        "code_93",
        "Code93"
    ],
    [
        "codabar",
        "Codabar"
    ],
    [
        "databar",
        "DataBar"
    ],
    [
        "databar_expanded",
        "DataBarExpanded"
    ],
    [
        "data_matrix",
        "DataMatrix"
    ],
    [
        "dx_film_edge",
        "DXFilmEdge"
    ],
    [
        "ean_13",
        "EAN-13"
    ],
    [
        "ean_8",
        "EAN-8"
    ],
    [
        "itf",
        "ITF"
    ],
    [
        "maxi_code",
        "MaxiCode"
    ],
    [
        "micro_qr_code",
        "MicroQRCode"
    ],
    [
        "pdf417",
        "PDF417"
    ],
    [
        "qr_code",
        "QRCode"
    ],
    [
        "rm_qr_code",
        "rMQRCode"
    ],
    [
        "upc_a",
        "UPC-A"
    ],
    [
        "upc_e",
        "UPC-E"
    ],
    [
        "linear_codes",
        "Linear-Codes"
    ],
    [
        "matrix_codes",
        "Matrix-Codes"
    ]
], oo = [
    ...sr,
    [
        "unknown"
    ]
].map((o)=>o[0]), ue = new Map(sr);
function io(o) {
    for (const [d, p] of ue)if (o === p) return d;
    return "unknown";
}
function so(o) {
    if (ur(o)) return {
        width: o.naturalWidth,
        height: o.naturalHeight
    };
    if (cr(o)) return {
        width: o.width.baseVal.value,
        height: o.height.baseVal.value
    };
    if (lr(o)) return {
        width: o.videoWidth,
        height: o.videoHeight
    };
    if (fr(o)) return {
        width: o.width,
        height: o.height
    };
    if (pr(o)) return {
        width: o.displayWidth,
        height: o.displayHeight
    };
    if (dr(o)) return {
        width: o.width,
        height: o.height
    };
    if (hr(o)) return {
        width: o.width,
        height: o.height
    };
    throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.");
}
function ur(o) {
    var d, p;
    try {
        return o instanceof ((p = (d = o == null ? void 0 : o.ownerDocument) == null ? void 0 : d.defaultView) == null ? void 0 : p.HTMLImageElement);
    } catch  {
        return !1;
    }
}
function cr(o) {
    var d, p;
    try {
        return o instanceof ((p = (d = o == null ? void 0 : o.ownerDocument) == null ? void 0 : d.defaultView) == null ? void 0 : p.SVGImageElement);
    } catch  {
        return !1;
    }
}
function lr(o) {
    var d, p;
    try {
        return o instanceof ((p = (d = o == null ? void 0 : o.ownerDocument) == null ? void 0 : d.defaultView) == null ? void 0 : p.HTMLVideoElement);
    } catch  {
        return !1;
    }
}
function dr(o) {
    var d, p;
    try {
        return o instanceof ((p = (d = o == null ? void 0 : o.ownerDocument) == null ? void 0 : d.defaultView) == null ? void 0 : p.HTMLCanvasElement);
    } catch  {
        return !1;
    }
}
function fr(o) {
    try {
        return o instanceof ImageBitmap || Object.prototype.toString.call(o) === "[object ImageBitmap]";
    } catch  {
        return !1;
    }
}
function hr(o) {
    try {
        return o instanceof OffscreenCanvas || Object.prototype.toString.call(o) === "[object OffscreenCanvas]";
    } catch  {
        return !1;
    }
}
function pr(o) {
    try {
        return o instanceof VideoFrame || Object.prototype.toString.call(o) === "[object VideoFrame]";
    } catch  {
        return !1;
    }
}
function vr(o) {
    try {
        return o instanceof Blob || Object.prototype.toString.call(o) === "[object Blob]";
    } catch  {
        return !1;
    }
}
function uo(o) {
    try {
        return o instanceof ImageData || Object.prototype.toString.call(o) === "[object ImageData]";
    } catch  {
        return !1;
    }
}
function co(o, d) {
    try {
        const p = new OffscreenCanvas(o, d);
        if (p.getContext("2d") instanceof OffscreenCanvasRenderingContext2D) return p;
        throw void 0;
    } catch  {
        const p = document.createElement("canvas");
        return p.width = o, p.height = d, p;
    }
}
async function yr(o) {
    if (ur(o) && !await po(o)) throw new DOMException("Failed to load or decode HTMLImageElement.", "InvalidStateError");
    if (cr(o) && !await vo(o)) throw new DOMException("Failed to load or decode SVGImageElement.", "InvalidStateError");
    if (pr(o) && yo(o)) throw new DOMException("VideoFrame is closed.", "InvalidStateError");
    if (lr(o) && (o.readyState === 0 || o.readyState === 1)) throw new DOMException("Invalid element or state.", "InvalidStateError");
    if (fr(o) && go(o)) throw new DOMException("The image source is detached.", "InvalidStateError");
    const { width: d, height: p } = so(o);
    if (d === 0 || p === 0) return null;
    const c = co(d, p).getContext("2d");
    c.drawImage(o, 0, 0);
    try {
        return c.getImageData(0, 0, d, p);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function lo(o) {
    let d;
    try {
        if (globalThis.createImageBitmap) d = await createImageBitmap(o);
        else if (globalThis.Image) {
            d = new Image();
            let y = "";
            try {
                y = URL.createObjectURL(o), d.src = y, await d.decode();
            } finally{
                URL.revokeObjectURL(y);
            }
        } else return o;
    } catch  {
        throw new DOMException("Failed to load or decode Blob.", "InvalidStateError");
    }
    return await yr(d);
}
function fo(o) {
    const { width: d, height: p } = o;
    if (d === 0 || p === 0) return null;
    const y = o.getContext("2d");
    try {
        return y.getImageData(0, 0, d, p);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function ho(o) {
    if (vr(o)) return await lo(o);
    if (uo(o)) {
        if (mo(o)) throw new DOMException("The image data has been detached.", "InvalidStateError");
        return o;
    }
    return dr(o) || hr(o) ? fo(o) : await yr(o);
}
async function po(o) {
    try {
        return await o.decode(), !0;
    } catch  {
        return !1;
    }
}
async function vo(o) {
    var d;
    try {
        return await ((d = o.decode) == null ? void 0 : d.call(o)), !0;
    } catch  {
        return !1;
    }
}
function yo(o) {
    return o.format === null;
}
function mo(o) {
    return o.data.buffer.byteLength === 0;
}
function go(o) {
    return o.width === 0 && o.height === 0;
}
function ar(o, d) {
    return wo(o) ? new DOMException(`${d}: ${o.message}`, o.name) : $o(o) ? new o.constructor(`${d}: ${o.message}`) : new Error(`${d}: ${o}`);
}
function wo(o) {
    return o instanceof DOMException || Object.prototype.toString.call(o) === "[object DOMException]";
}
function $o(o) {
    return o instanceof Error || Object.prototype.toString.call(o) === "[object Error]";
}
var bt;
class To extends EventTarget {
    constructor(p = {}){
        var y;
        super();
        tr(this, bt);
        try {
            const c = (y = p == null ? void 0 : p.formats) == null ? void 0 : y.filter(($)=>$ !== "unknown");
            if ((c == null ? void 0 : c.length) === 0) throw new TypeError("Hint option provided, but is empty.");
            for (const $ of c != null ? c : [])if (!ue.has($)) throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${$}' is not a valid enum value of type BarcodeFormat.`);
            er(this, bt, c != null ? c : []), ro().then(($)=>{
                this.dispatchEvent(new CustomEvent("load", {
                    detail: $
                }));
            }).catch(($)=>{
                this.dispatchEvent(new CustomEvent("error", {
                    detail: $
                }));
            });
        } catch (c) {
            throw ar(c, "Failed to construct 'BarcodeDetector'");
        }
    }
    static async getSupportedFormats() {
        return oo.filter((p)=>p !== "unknown");
    }
    async detect(p) {
        try {
            const y = await ho(p);
            if (y === null) return [];
            let c;
            const $ = {
                tryHarder: !0,
                // https://github.com/Sec-ant/barcode-detector/issues/91
                returnCodabarStartEnd: !0,
                formats: Ke(this, bt).map((x)=>ue.get(x))
            };
            try {
                vr(y) ? c = await no(y, $) : c = await ao(y, $);
            } catch (x) {
                throw console.error(x), new DOMException("Barcode detection service unavailable.", "NotSupportedError");
            }
            return c.map((x)=>{
                const { topLeft: { x: k, y: V }, topRight: { x: W, y: I }, bottomLeft: { x: N, y: L }, bottomRight: { x: R, y: ut } } = x.position, ct = Math.min(k, W, N, R), rt = Math.min(V, I, L, ut), lt = Math.max(k, W, N, R), Vt = Math.max(V, I, L, ut);
                return {
                    boundingBox: new DOMRectReadOnly(ct, rt, lt - ct, Vt - rt),
                    rawValue: x.text,
                    format: io(x.format),
                    cornerPoints: [
                        {
                            x: k,
                            y: V
                        },
                        {
                            x: W,
                            y: I
                        },
                        {
                            x: R,
                            y: ut
                        },
                        {
                            x: N,
                            y: L
                        }
                    ]
                };
            });
        } catch (y) {
            throw ar(y, "Failed to execute 'detect' on 'BarcodeDetector'");
        }
    }
}
bt = new WeakMap();

},{"777cf5a1c5cdae66":"3tdeh","@parcel/transformer-js/src/esmodule-helpers.js":"73vyb"}],"3tdeh":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}]},[], null, "parcelRequirea202")

//# sourceMappingURL=es.321f06f5.js.map
