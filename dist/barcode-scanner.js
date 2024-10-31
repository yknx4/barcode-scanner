(function () {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirea202"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirea202"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("9xqYB", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf; }, function (v) { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $6f1c1f1b2dada3ed$export$f7ad0328861e2f03; }, function (v) { return $6f1c1f1b2dada3ed$export$f7ad0328861e2f03 = v; });
var $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf;
var $6f1c1f1b2dada3ed$export$f7ad0328861e2f03;
"use strict";
var $6f1c1f1b2dada3ed$var$mapping = new Map();
function $6f1c1f1b2dada3ed$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$6f1c1f1b2dada3ed$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $6f1c1f1b2dada3ed$var$resolve(id) {
    var resolved = $6f1c1f1b2dada3ed$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = $6f1c1f1b2dada3ed$var$register;
$6f1c1f1b2dada3ed$export$f7ad0328861e2f03 = $6f1c1f1b2dada3ed$var$resolve;

});

parcelRegister("cHmwT", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $93eafa1434f2e08a$export$bdfd709ae4826697; }, function (v) { return $93eafa1434f2e08a$export$bdfd709ae4826697 = v; });
var $93eafa1434f2e08a$export$bdfd709ae4826697;
var $93eafa1434f2e08a$export$c9e73fbda7da57b6;
var $93eafa1434f2e08a$export$5a759dc7a1cfb72a;
"use strict";
var $93eafa1434f2e08a$var$bundleURL = {};
function $93eafa1434f2e08a$var$getBundleURLCached(id) {
    var value = $93eafa1434f2e08a$var$bundleURL[id];
    if (!value) {
        value = $93eafa1434f2e08a$var$getBundleURL();
        $93eafa1434f2e08a$var$bundleURL[id] = value;
    }
    return value;
}
function $93eafa1434f2e08a$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $93eafa1434f2e08a$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $93eafa1434f2e08a$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $93eafa1434f2e08a$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$93eafa1434f2e08a$export$bdfd709ae4826697 = $93eafa1434f2e08a$var$getBundleURLCached;
$93eafa1434f2e08a$export$c9e73fbda7da57b6 = $93eafa1434f2e08a$var$getBaseURL;
$93eafa1434f2e08a$export$5a759dc7a1cfb72a = $93eafa1434f2e08a$var$getOrigin;

});

parcelRegister("cG93Q", function(module, exports) {


module.exports = (parcelRequire("iZaa8"))((parcelRequire("9xqYB")).resolve("6sibP")).then(()=>parcelRequire("gDv21"));

});
parcelRegister("iZaa8", function(module, exports) {
"use strict";

var $aj6Nf = parcelRequire("aj6Nf");
module.exports = $aj6Nf(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

});
parcelRegister("aj6Nf", function(module, exports) {
"use strict";
var $7810f2bc935532b7$var$cachedBundles = {};
var $7810f2bc935532b7$var$cachedPreloads = {};
var $7810f2bc935532b7$var$cachedPrefetches = {};
function $7810f2bc935532b7$var$getCache(type) {
    switch(type){
        case "preload":
            return $7810f2bc935532b7$var$cachedPreloads;
        case "prefetch":
            return $7810f2bc935532b7$var$cachedPrefetches;
        default:
            return $7810f2bc935532b7$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $7810f2bc935532b7$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});



var $d48be591334430bd$exports = {};


(parcelRequire("9xqYB")).register((parcelRequire("cHmwT")).getBundleURL("j7CX6"), JSON.parse('["j7CX6","barcode-scanner.js","6sibP","es.2b1bee23.js"]'));

/*!
 * @georapbox/a-tab-group
 * A custom element to create a group of tabs and tab panels.
 *
 * @version 2.4.1
 * @homepage https://github.com/georapbox/a-tab-group#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var $4095dca5aa2eb39f$var$h = (a = "", t = "")=>{
    let e = typeof a == "string" && a !== "" ? a + "-" : "", s = typeof t == "string" && t !== "" ? "-" + t : "", i = Math.random().toString(36).substring(2, 8);
    return `${e}${i}${s}`;
};
var $4095dca5aa2eb39f$var$b = (a, t)=>{
    if (Object.prototype.hasOwnProperty.call(t, a)) {
        let e = t[a];
        delete t[a], t[a] = e;
    }
};
var $4095dca5aa2eb39f$var$E = 0, $4095dca5aa2eb39f$var$C = `
  :host {
    box-sizing: border-box;
    display: inline-block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.375rem 0.75rem;
    white-space: nowrap;
    cursor: pointer;
  }

  :host([disabled]) .tab {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :host([selected]) .tab {
    color: var(--selected-tab-color);
    background-color: var(--selected-tab-bg-color);
  }

  .tab__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: inherit;
    cursor: pointer;
  }
`, $4095dca5aa2eb39f$var$w = document.createElement("template");
$4095dca5aa2eb39f$var$w.innerHTML = `
  <style>
    ${$4095dca5aa2eb39f$var$C}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;
var $4095dca5aa2eb39f$export$6824c350c20eab3a = class a extends HTMLElement {
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild($4095dca5aa2eb39f$var$w.content.cloneNode(!0));
    }
    static get observedAttributes() {
        return [
            "selected",
            "disabled",
            "closable"
        ];
    }
    attributeChangedCallback(t, e, s) {
        if (t === "selected" && e !== s && (this.setAttribute("aria-selected", this.selected.toString()), this.setAttribute("tabindex", this.disabled || !this.selected ? "-1" : "0")), t === "disabled" && e !== s && (this.setAttribute("aria-disabled", this.disabled.toString()), this.setAttribute("tabindex", this.disabled || !this.selected ? "-1" : "0")), t === "closable" && e !== s) {
            if (this.closable) {
                let i = document.createElement("span");
                i.className = "tab__close", i.setAttribute("part", "close-tab"), i.innerHTML = '<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>', this.shadowRoot?.querySelector(".tab")?.appendChild(i), i.addEventListener("click", this.#e);
            } else {
                let i = this.shadowRoot?.querySelector(".tab__close");
                i?.removeEventListener("click", this.#e), i?.remove();
            }
        }
    }
    connectedCallback() {
        this.#s("selected"), this.#s("disabled"), this.#s("closable"), this.id || (this.id = $4095dca5aa2eb39f$var$h("tab", (++$4095dca5aa2eb39f$var$E).toString())), this.setAttribute("slot", "tab"), this.setAttribute("role", "tab"), this.setAttribute("aria-selected", "false"), this.setAttribute("tabindex", this.disabled || !this.selected ? "-1" : "0");
    }
    disconnectedCallback() {
        this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click", this.#e);
    }
    get selected() {
        return this.hasAttribute("selected");
    }
    set selected(t) {
        this.toggleAttribute("selected", !!t);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get closable() {
        return this.hasAttribute("closable");
    }
    set closable(t) {
        this.toggleAttribute("closable", !!t);
    }
    #e = (t)=>{
        t.stopPropagation(), this.dispatchEvent(new CustomEvent("a-tab-close", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: this.id
            }
        }));
    };
    #s(t) {
        return $4095dca5aa2eb39f$var$b(t, this);
    }
    static defineCustomElement(t = "a-tab") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
$4095dca5aa2eb39f$export$6824c350c20eab3a.defineCustomElement();
var $4095dca5aa2eb39f$var$L = 0, $4095dca5aa2eb39f$var$S = `
  :host {
    box-sizing: border-box;
    display: block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`, $4095dca5aa2eb39f$var$T = document.createElement("template");
$4095dca5aa2eb39f$var$T.innerHTML = `
  <style>
    ${$4095dca5aa2eb39f$var$S}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;
var $4095dca5aa2eb39f$export$185adf5fa2c760b1 = class a extends HTMLElement {
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild($4095dca5aa2eb39f$var$T.content.cloneNode(!0));
    }
    connectedCallback() {
        this.setAttribute("slot", "panel"), this.setAttribute("role", "tabpanel"), this.setAttribute("hidden", ""), this.id || (this.id = $4095dca5aa2eb39f$var$h("panel", (++$4095dca5aa2eb39f$var$L).toString()));
    }
    static defineCustomElement(t = "a-tab-panel") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
$4095dca5aa2eb39f$export$185adf5fa2c760b1.defineCustomElement();
var $4095dca5aa2eb39f$var$y = 200, $4095dca5aa2eb39f$var$n = {
    TOP: "top",
    BOTTOM: "bottom",
    START: "start",
    END: "end"
}, $4095dca5aa2eb39f$var$l = {
    LTR: "ltr",
    RTL: "rtl"
}, $4095dca5aa2eb39f$var$R = Object.entries($4095dca5aa2eb39f$var$n).map(([, a])=>a), $4095dca5aa2eb39f$var$r = {
    AUTO: "auto",
    MANUAL: "manual"
}, $4095dca5aa2eb39f$var$c = {
    DOWN: "ArrowDown",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
    UP: "ArrowUp",
    HOME: "Home",
    END: "End",
    ENTER: "Enter",
    SPACE: " "
}, $4095dca5aa2eb39f$var$x = `
  :host {
    --selected-tab-color: #005fcc;
    --selected-tab-bg-color: transparent;
    --tabs-scroll-behavior: smooth;
    --scroll-button-width: 2.125em;
    --scroll-button-height: 2.125em;
    --scroll-button-inline-offset: 0rem;

    box-sizing: border-box;
    display: block;
    contain: content;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --tabs-scroll-behavior: auto;
    }
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab-group {
    display: flex;
    width: 100%;
  }

  .tab-group__nav {
    position: relative;
  }

  .tab-group__nav--has-scroll-controls {
    padding: 0 calc(var(--scroll-button-width) + var(--scroll-button-inline-offset));
  }

  .tab-group__scroll-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--scroll-button-width);
    height: var(--scroll-button-height);
    padding: 0; /* Required for iOS, otherwise the svg is not visible: https://stackoverflow.com/questions/66532071/flex-svg-behaving-strange-in-ios-safari-14-0-3 */
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    color: currentColor;
  }

  .tab-group__scroll-button--start {
    left: var(--scroll-button-inline-offset);
  }

  .tab-group__scroll-button--end {
    right: var(--scroll-button-inline-offset);
  }

  :host([dir="${$4095dca5aa2eb39f$var$l.RTL}"]) .tab-group__scroll-button--start,
  :host(:dir(${$4095dca5aa2eb39f$var$l.RTL})) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="${$4095dca5aa2eb39f$var$l.RTL}"]) .tab-group__scroll-button--end,
  :host(:dir(${$4095dca5aa2eb39f$var$l.RTL})) .tab-group__scroll-button--end {
    left: var(--scroll-button-inline-offset);
    right: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  .tab-group__tabs {
    display: flex;
    padding: 0.25rem;
    overflow-x: auto;
    scroll-behavior: var(--tabs-scroll-behavior);
    scrollbar-width: none;
  }

  .tab-group__tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-group__panels {
    padding: 1rem 0;
  }

  /* placement="top" */
  .tab-group,
  :host([placement="${$4095dca5aa2eb39f$var$n.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${$4095dca5aa2eb39f$var$n.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${$4095dca5aa2eb39f$var$n.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${$4095dca5aa2eb39f$var$n.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${$4095dca5aa2eb39f$var$n.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${$4095dca5aa2eb39f$var$n.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${$4095dca5aa2eb39f$var$n.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${$4095dca5aa2eb39f$var$n.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${$4095dca5aa2eb39f$var$n.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${$4095dca5aa2eb39f$var$n.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`, $4095dca5aa2eb39f$var$A = document.createElement("template");
$4095dca5aa2eb39f$var$A.innerHTML = `
  <style>${$4095dca5aa2eb39f$var$x}</style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;
var $4095dca5aa2eb39f$export$4ac05a649254e913 = class a extends HTMLElement {
    #e = null;
    #s = null;
    #l = !1;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild($4095dca5aa2eb39f$var$A.content.cloneNode(!0));
    }
    static get observedAttributes() {
        return [
            "placement",
            "no-scroll-controls"
        ];
    }
    attributeChangedCallback(t, e, s) {
        t === "placement" && e !== s && this.#i(), t === "no-scroll-controls" && e !== s && this.#i();
    }
    get placement() {
        return this.getAttribute("placement") || $4095dca5aa2eb39f$var$n.TOP;
    }
    set placement(t) {
        t != null && this.setAttribute("placement", t);
    }
    get noScrollControls() {
        return this.hasAttribute("no-scroll-controls");
    }
    set noScrollControls(t) {
        this.toggleAttribute("no-scroll-controls", !!t);
    }
    get scrollDistance() {
        let t = Number(this.getAttribute("scroll-distance"));
        return Math.abs(t) || $4095dca5aa2eb39f$var$y;
    }
    set scrollDistance(t) {
        this.setAttribute("scroll-distance", Math.abs(t).toString() || $4095dca5aa2eb39f$var$y.toString());
    }
    get activation() {
        return this.getAttribute("activation") || $4095dca5aa2eb39f$var$r.AUTO;
    }
    set activation(t) {
        this.setAttribute("activation", t || $4095dca5aa2eb39f$var$r.AUTO);
    }
    get noTabCycling() {
        return this.hasAttribute("no-tab-cycling");
    }
    set noTabCycling(t) {
        this.toggleAttribute("no-tab-cycling", !!t);
    }
    connectedCallback() {
        this.#o("placement"), this.#o("noScrollControls"), this.#o("scrollDistance"), this.#o("activation"), this.#o("noTabCycling");
        let t = this.shadowRoot?.querySelector("slot[name=tab]"), e = this.shadowRoot?.querySelector("slot[name=panel]"), s = this.shadowRoot?.querySelector(".tab-group__tabs"), i = this.shadowRoot?.querySelector(".tab-group__nav"), o = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        t?.addEventListener("slotchange", this.#n), e?.addEventListener("slotchange", this.#n), s?.addEventListener("click", this.#g), s?.addEventListener("keydown", this.#p), o.forEach((d)=>d.addEventListener("click", this.#f)), this.addEventListener("a-tab-close", this.#m), "ResizeObserver" in window && (this.#e = new ResizeObserver((d)=>{
            this.#s = window.requestAnimationFrame(()=>{
                let v = d?.[0]?.target, g = v?.scrollWidth > v?.clientWidth;
                o.forEach((_)=>_.toggleAttribute("hidden", !g)), i?.part.toggle("nav--has-scroll-controls", g), i?.classList.toggle("tab-group__nav--has-scroll-controls", g);
            });
        })), this.#h(), this.#i();
    }
    disconnectedCallback() {
        let t = this.shadowRoot?.querySelector("slot[name=tab]"), e = this.shadowRoot?.querySelector("slot[name=panel]"), s = this.shadowRoot?.querySelector(".tab-group__tabs"), i = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        t?.removeEventListener("slotchange", this.#n), e?.removeEventListener("slotchange", this.#n), s?.removeEventListener("click", this.#g), s?.removeEventListener("keydown", this.#p), i.forEach((o)=>o.removeEventListener("click", this.#f)), this.removeEventListener("a-tab-close", this.#m), this.#c();
    }
    #v() {
        if (!this.#e) return;
        let t = this.shadowRoot?.querySelector(".tab-group__tabs");
        t && (this.#e.unobserve(t), this.#e.observe(t));
    }
    #c() {
        this.#e && (this.#e.disconnect(), this.#s !== null && (window.cancelAnimationFrame(this.#s), this.#s = null));
    }
    #d() {
        return window.CSS.supports("selector(:dir(ltr))") ? this.matches(":dir(ltr)") ? $4095dca5aa2eb39f$var$l.LTR : $4095dca5aa2eb39f$var$l.RTL : window.getComputedStyle(this).direction || $4095dca5aa2eb39f$var$l.LTR;
    }
    #h() {
        this.hidden = this.#t().length === 0;
    }
    #w() {
        let t = this.#t();
        this.#h(), t.forEach((e)=>{
            let s = e.nextElementSibling;
            if (!s || s.tagName.toLowerCase() !== "a-tab-panel") return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);
            e.setAttribute("aria-controls", s.id), s.setAttribute("aria-labelledby", e.id);
        });
    }
    #T() {
        return Array.from(this.querySelectorAll("a-tab-panel"));
    }
    #t() {
        return Array.from(this.querySelectorAll("a-tab"));
    }
    #b(t) {
        let e = t.getAttribute("aria-controls");
        return this.querySelector(`#${e}`);
    }
    #y() {
        return this.#t().find((e)=>!e.disabled) || null;
    }
    #A() {
        let t = this.#t();
        for(let e = t.length - 1; e >= 0; e--)if (!t[e].disabled) return t[e];
        return null;
    }
    #a() {
        let t = this.#t(), e = this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? t.findIndex((s)=>s.matches(":focus")) - 1 : t.findIndex((s)=>s.selected) - 1;
        for(; t[(e + t.length) % t.length].disabled;)e--;
        return this.noTabCycling && e < 0 ? null : t[(e + t.length) % t.length];
    }
    #r() {
        let t = this.#t(), e = this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? t.findIndex((s)=>s.matches(":focus")) + 1 : t.findIndex((s)=>s.selected) + 1;
        for(; t[e % t.length].disabled;)e++;
        return this.noTabCycling && e >= t.length ? null : t[e % t.length];
    }
    #_() {
        let t = this.#t(), e = this.#T();
        t.forEach((s)=>s.selected = !1), e.forEach((s)=>s.hidden = !0);
    }
    #i() {
        let t = this.shadowRoot?.querySelector(".tab-group__nav"), e = this.shadowRoot?.querySelector(".tab-group__tabs"), s = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        this.noScrollControls || this.placement === $4095dca5aa2eb39f$var$n.START || this.placement === $4095dca5aa2eb39f$var$n.END ? (this.#c(), s.forEach((i)=>i.hidden = !0), t?.part.remove("nav--has-scroll-controls"), t?.classList.remove("tab-group__nav--has-scroll-controls"), e?.setAttribute("aria-orientation", "vertical")) : (this.#v(), s.forEach((i)=>i.hidden = !1), e?.setAttribute("aria-orientation", "horizontal"));
    }
    #E() {
        let t = this.#t(), e = t.find((s)=>s.selected && !s.disabled) || t.find((s)=>!s.disabled);
        e && (this.#l && !e.selected && this.dispatchEvent(new CustomEvent("a-tab-show", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        })), this.#u(e));
    }
    #u(t) {
        this.#_(), t && (t.selected = !0);
        let e = this.#b(t);
        e && (e.hidden = !1);
    }
    #n = (t)=>{
        this.#w(), this.#i(), this.#E(), t.target.name === "tab" && (this.#l = !0);
    };
    #p = (t)=>{
        if (t.target.tagName.toLowerCase() !== "a-tab" || t.altKey) return;
        let e = $4095dca5aa2eb39f$var$R.includes(this.placement || "") ? this.placement : $4095dca5aa2eb39f$var$n.TOP, s = [
            $4095dca5aa2eb39f$var$n.TOP,
            $4095dca5aa2eb39f$var$n.BOTTOM
        ].includes(e || "") ? "horizontal" : "vertical", i = this.#d(), o = null;
        switch(t.key){
            case $4095dca5aa2eb39f$var$c.LEFT:
                s === "horizontal" && (o = i === $4095dca5aa2eb39f$var$l.LTR ? this.#a() : this.#r(), o && (this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case $4095dca5aa2eb39f$var$c.RIGHT:
                s === "horizontal" && (o = i === $4095dca5aa2eb39f$var$l.LTR ? this.#r() : this.#a(), o && (this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case $4095dca5aa2eb39f$var$c.UP:
                s === "vertical" && (o = this.#a(), o && (this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case $4095dca5aa2eb39f$var$c.DOWN:
                s === "vertical" && (o = this.#r(), o && (this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? o.focus() : this.selectTab(o)));
                break;
            case $4095dca5aa2eb39f$var$c.HOME:
                o = this.#y(), o && (this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? o.focus() : this.selectTab(o));
                break;
            case $4095dca5aa2eb39f$var$c.END:
                o = this.#A(), o && (this.activation === $4095dca5aa2eb39f$var$r.MANUAL ? o.focus() : this.selectTab(o));
                break;
            case $4095dca5aa2eb39f$var$c.ENTER:
            case $4095dca5aa2eb39f$var$c.SPACE:
                o = t.target, o && this.selectTab(o);
                break;
            default:
                return;
        }
        t.preventDefault();
    };
    #g = (t)=>{
        let e = t.target.closest("a-tab");
        e && this.selectTab(e);
    };
    #f = (t)=>{
        let e = t.target.closest(".tab-group__scroll-button"), s = this.shadowRoot?.querySelector(".tab-group__tabs");
        if (!e || !s) return;
        let i = e.classList.contains("tab-group__scroll-button--start"), o = this.#d() === $4095dca5aa2eb39f$var$l.LTR, d = i ? o ? -1 : 1 : o ? 1 : -1, m = s.scrollLeft;
        s.scrollTo({
            left: m + d * this.scrollDistance
        });
    };
    #m = (t)=>{
        let e = t.target, s = this.#b(e);
        e && (e.remove(), e.selected && this.dispatchEvent(new CustomEvent("a-tab-hide", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        }))), s && s.tagName.toLowerCase() === "a-tab-panel" && s.remove();
    };
    #o(t) {
        return $4095dca5aa2eb39f$var$b(t, this);
    }
    selectTabByIndex(t) {
        let s = this.#t()[t];
        s && this.selectTab(s);
    }
    selectTabById(t) {
        let s = this.#t().find((i)=>i.id === t);
        s && this.selectTab(s);
    }
    selectTab(t) {
        let e = this.#t().find((s)=>s.selected);
        !t || t.disabled || t.selected || t.tagName.toLowerCase() !== "a-tab" || (this.#u(t), window.requestAnimationFrame(()=>{
            t.scrollIntoView({
                inline: "nearest",
                block: "nearest"
            }), t.focus();
        }), e && this.dispatchEvent(new CustomEvent("a-tab-hide", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        })), this.dispatchEvent(new CustomEvent("a-tab-show", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: t.id
            }
        })));
    }
    static defineCustomElement(t = "a-tab-group") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
$4095dca5aa2eb39f$export$4ac05a649254e913.defineCustomElement();


/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var $9dea7ad1e1990670$var$h = `
  :host {
    display: inline-block;
  }
`, $9dea7ad1e1990670$var$r = document.createElement("template");
$9dea7ad1e1990670$var$r.innerHTML = `
  <style>${$9dea7ad1e1990670$var$h}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;
var $9dea7ad1e1990670$export$30b344bef3e55b67 = class a extends HTMLElement {
    #e;
    #t;
    #r = [];
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open",
            delegatesFocus: !0
        }).appendChild($9dea7ad1e1990670$var$r.content.cloneNode(!0)), this.#e = this.shadowRoot?.querySelector('slot[name="button"]') || null, this.#t = this.#h();
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(t, e, i) {
        t === "disabled" && e !== i && this.#t && (this.#t.toggleAttribute("disabled", this.disabled), this.#t.setAttribute("aria-disabled", this.disabled.toString()), this.#t.part && this.#t.part.contains("button") && this.#t.part.toggle("button--disabled", this.disabled));
    }
    connectedCallback() {
        this.#s("shareUrl"), this.#s("shareTitle"), this.#s("shareText"), this.#s("shareFiles"), this.#s("disabled"), this.#e?.addEventListener("slotchange", this.#a), this.#t?.addEventListener("click", this.#i);
    }
    disconnectedCallback() {
        this.#e?.removeEventListener("slotchange", this.#a), this.#t?.removeEventListener("click", this.#i);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get shareUrl() {
        return this.getAttribute("share-url") || "";
    }
    set shareUrl(t) {
        this.setAttribute("share-url", t);
    }
    get shareTitle() {
        return this.getAttribute("share-title") || "";
    }
    set shareTitle(t) {
        this.setAttribute("share-title", t);
    }
    get shareText() {
        return this.getAttribute("share-text") || "";
    }
    set shareText(t) {
        this.setAttribute("share-text", t);
    }
    get shareFiles() {
        return this.#r;
    }
    set shareFiles(t) {
        Array.isArray(t) && t.length > 0 && (this.#r = t);
    }
    async share() {
        if (!this.disabled) try {
            let t = {};
            this.shareUrl && (t.url = this.shareUrl), this.shareTitle && (t.title = this.shareTitle), this.shareText && (t.text = this.shareText), Array.isArray(this.shareFiles) && this.shareFiles.length > 0 && navigator.canShare && navigator.canShare({
                files: this.shareFiles
            }) && (t.files = this.shareFiles), await navigator.share(t), this.dispatchEvent(new CustomEvent("web-share:success", {
                bubbles: !0,
                composed: !0,
                detail: {
                    shareData: t
                }
            }));
        } catch (t) {
            if (t instanceof Error && t.name === "AbortError") {
                this.dispatchEvent(new CustomEvent("web-share:abort", {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        error: t
                    }
                }));
                return;
            }
            this.dispatchEvent(new CustomEvent("web-share:error", {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    }
    #i = (t)=>{
        t.preventDefault(), !this.disabled && this.share();
    };
    #a = (t)=>{
        t.target && t.target.name === "button" && (this.#t?.removeEventListener("click", this.#i), this.#t = this.#h(), this.#t && (this.#t.addEventListener("click", this.#i), this.#t.nodeName !== "BUTTON" && !this.#t.hasAttribute("role") && this.#t.setAttribute("role", "button")));
    };
    #h() {
        return this.#e && this.#e.assignedElements({
            flatten: !0
        }).find((t)=>t.nodeName === "BUTTON" || t.getAttribute("slot") === "button") || null;
    }
    #s(t) {
        let e = this;
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            let i = e[t];
            delete e[t], e[t] = i;
        }
    }
    static defineCustomElement(t = "web-share") {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, a);
    }
};
$9dea7ad1e1990670$export$30b344bef3e55b67.defineCustomElement();


/*!
 * @georapbox/files-dropzone-element
 * A custom element that creates a drag and drop zone for files
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/files-dropzone-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ function $743f94428e066832$var$u(o, e = "") {
    if (!e) return !0;
    let t = [
        ...new Set(e.split(",").map((r)=>r.trim()).filter(Boolean))
    ], i = o.type, s = i.replace(/\/.*$/, "");
    for (let r of t)if (r.charAt(0) === ".") {
        if (o.name.toLowerCase().indexOf(r.toLowerCase(), o.name.length - r.length) !== -1) return !0;
    } else if (/\/\*$/.test(r)) {
        if (s === r.replace(/\/.*$/, "")) return !0;
    } else if (i === r) return !0;
    return !1;
}
var $743f94428e066832$var$x = new Map([
    [
        "aac",
        "audio/aac"
    ],
    [
        "abw",
        "application/x-abiword"
    ],
    [
        "arc",
        "application/x-freearc"
    ],
    [
        "avif",
        "image/avif"
    ],
    [
        "avi",
        "video/x-msvideo"
    ],
    [
        "azw",
        "application/vnd.amazon.ebook"
    ],
    [
        "bin",
        "application/octet-stream"
    ],
    [
        "bmp",
        "image/bmp"
    ],
    [
        "bz",
        "application/x-bzip"
    ],
    [
        "bz2",
        "application/x-bzip2"
    ],
    [
        "cda",
        "application/x-cdf"
    ],
    [
        "csh",
        "application/x-csh"
    ],
    [
        "css",
        "text/css"
    ],
    [
        "csv",
        "text/csv"
    ],
    [
        "doc",
        "application/msword"
    ],
    [
        "docx",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ],
    [
        "eot",
        "application/vnd.ms-fontobject"
    ],
    [
        "epub",
        "application/epub+zip"
    ],
    [
        "gz",
        "application/gzip"
    ],
    [
        "gif",
        "image/gif"
    ],
    [
        "heic",
        "image/heic"
    ],
    [
        "heif",
        "image/heif"
    ],
    [
        "htm",
        "text/html"
    ],
    [
        "html",
        "text/html"
    ],
    [
        "ico",
        "image/vnd.microsoft.icon"
    ],
    [
        "ics",
        "text/calendar"
    ],
    [
        "jar",
        "application/java-archive"
    ],
    [
        "jpeg",
        "image/jpeg"
    ],
    [
        "jpg",
        "image/jpeg"
    ],
    [
        "jxl",
        "image/jxl"
    ],
    [
        "js",
        "text/javascript"
    ],
    [
        "json",
        "application/json"
    ],
    [
        "jsonld",
        "application/ld+json"
    ],
    [
        "markdown",
        "text/markdown"
    ],
    [
        "md",
        "text/markdown"
    ],
    [
        "mid",
        "audio/midi"
    ],
    [
        "midi",
        "audio/midi"
    ],
    [
        "mjs",
        "text/javascript"
    ],
    [
        "mp3",
        "audio/mpeg"
    ],
    [
        "mp4",
        "video/mp4"
    ],
    [
        "mpeg",
        "video/mpeg"
    ],
    [
        "mpkg",
        "application/vnd.apple.installer+xml"
    ],
    [
        "odp",
        "application/vnd.oasis.opendocument.presentation"
    ],
    [
        "ods",
        "application/vnd.oasis.opendocument.spreadsheet"
    ],
    [
        "odt",
        "application/vnd.oasis.opendocument.text"
    ],
    [
        "oga",
        "audio/ogg"
    ],
    [
        "ogv",
        "video/ogg"
    ],
    [
        "ogx",
        "application/ogg"
    ],
    [
        "opus",
        "audio/opus"
    ],
    [
        "otf",
        "font/otf"
    ],
    [
        "png",
        "image/png"
    ],
    [
        "pdf",
        "application/pdf"
    ],
    [
        "php",
        "application/x-httpd-php"
    ],
    [
        "ppt",
        "application/vnd.ms-powerpoint"
    ],
    [
        "pptx",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ],
    [
        "rar",
        "application/vnd.rar"
    ],
    [
        "rtf",
        "application/rtf"
    ],
    [
        "sh",
        "application/x-sh"
    ],
    [
        "svg",
        "image/svg+xml"
    ],
    [
        "swf",
        "application/x-shockwave-flash"
    ],
    [
        "tar",
        "application/x-tar"
    ],
    [
        "tif",
        "image/tiff"
    ],
    [
        "tiff",
        "image/tiff"
    ],
    [
        "ts",
        "video/mp2t"
    ],
    [
        "ttf",
        "font/ttf"
    ],
    [
        "txt",
        "text/plain"
    ],
    [
        "vsd",
        "application/vnd.visio"
    ],
    [
        "wav",
        "audio/wav"
    ],
    [
        "weba",
        "audio/webm"
    ],
    [
        "webm",
        "video/webm"
    ],
    [
        "webp",
        "image/webp"
    ],
    [
        "woff",
        "font/woff"
    ],
    [
        "woff2",
        "font/woff2"
    ],
    [
        "xhtml",
        "application/xhtml+xml"
    ],
    [
        "xls",
        "application/vnd.ms-excel"
    ],
    [
        "xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ],
    [
        "xml",
        "application/xml"
    ],
    [
        "xul",
        "application/vnd.mozilla.xul+xml"
    ],
    [
        "zip",
        "application/zip"
    ],
    [
        "7z",
        "application/x-7z-compressed"
    ],
    [
        "mkv",
        "video/x-matroska"
    ],
    [
        "mov",
        "video/quicktime"
    ],
    [
        "msg",
        "application/vnd.ms-outlook"
    ]
]), $743f94428e066832$var$b = [
    ".DS_Store",
    "Thumbs.db"
], $743f94428e066832$var$y = (o)=>{
    let { name: e } = o;
    if (e && e.lastIndexOf(".") !== -1 && !o.type) {
        let i = (e.split(".").pop() || "").toLowerCase(), s = $743f94428e066832$var$x.get(i);
        s && Object.defineProperty(o, "type", {
            value: s,
            writable: !1,
            configurable: !1,
            enumerable: !0
        });
    }
    return o;
}, $743f94428e066832$var$g = (o, e)=>{
    let t = $743f94428e066832$var$y(o);
    if (typeof t.path != "string") {
        let { webkitRelativePath: i } = o;
        Object.defineProperty(t, "path", {
            value: typeof e == "string" ? e : i || o.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
        });
    }
    return t;
}, $743f94428e066832$var$m = async (o)=>await new Promise((e, t)=>{
        o.readEntries(e, t);
    }), $743f94428e066832$var$w = async (o)=>{
    let e = [], t = await $743f94428e066832$var$m(o);
    for(; t.length > 0;)e.push(...t), t = await $743f94428e066832$var$m(o);
    return e;
}, $743f94428e066832$var$E = (o)=>new Promise((e, t)=>{
        o.file((i)=>e($743f94428e066832$var$g(i, o.fullPath)), t);
    }), $743f94428e066832$var$F = async (o)=>{
    let e = [], t = [];
    for (let i of o){
        if (i.kind !== "file") continue;
        let s = i.getAsEntry ? i.getAsEntry() : i.webkitGetAsEntry();
        t.push(s);
    }
    for(; t.length > 0;){
        let i = t.shift();
        if (i) {
            if (i.isFile) {
                let s = await $743f94428e066832$var$E(i);
                $743f94428e066832$var$b.indexOf(s.name) === -1 && e.push(s);
            } else i.isDirectory && t.push(...await $743f94428e066832$var$w(i.createReader()));
        } else continue;
    }
    return e;
}, $743f94428e066832$var$f = async (o)=>{
    let e = [];
    for (let t of o)$743f94428e066832$var$b.indexOf(t.name) === -1 && e.push($743f94428e066832$var$g(t));
    return e;
}, $743f94428e066832$var$l = async (o)=>o.dataTransfer ? o.dataTransfer.items ? await $743f94428e066832$var$F(o.dataTransfer.items) : await $743f94428e066832$var$f(o.dataTransfer.files) : await $743f94428e066832$var$f(o.target.files);
var $743f94428e066832$var$n = "files-dropzone", $743f94428e066832$var$v = "TOO_MANY_FILES", $743f94428e066832$var$L = "FILE_TOO_LARGE", $743f94428e066832$var$k = "FILE_TOO_SMALL", $743f94428e066832$var$A = "INVALID_MIME_TYPE", $743f94428e066832$var$z = document.createElement("template"), $743f94428e066832$var$S = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host {
    --dropzone-border-width: 2px;
    --dropzone-border-style: dashed;
    --dropzone-border-radius: 0.25rem;
    --dropzone-border-color: #6c757d;
    --dropzone-border-color-dragover: #0d6efd;
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49,132,253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

    display: block;
  }

  :host(:not([no-style])) .dropzone {
    border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
    border-radius: var(--dropzone-border-radius);
    padding: 3rem 1rem;
    overflow: hidden;
    background-color: var(--dropzone-background-color);
    color: var(--dropzone-body-color);
    text-align: center;
    cursor: pointer;
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
    user-select: none;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;
$743f94428e066832$var$z.innerHTML = `
  <style>
    ${$743f94428e066832$var$S}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;
var $743f94428e066832$export$6ccd1735166caad9 = class o extends HTMLElement {
    #t = null;
    #e = null;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open",
            delegatesFocus: !0
        }).appendChild($743f94428e066832$var$z.content.cloneNode(!0)), this.shadowRoot && (this.#t = this.shadowRoot.getElementById("file-input"), this.#e = this.shadowRoot.getElementById("dropzone"));
    }
    static get observedAttributes() {
        return [
            "accept",
            "disabled",
            "multiple"
        ];
    }
    attributeChangedCallback(e, t, i) {
        e === "accept" && t !== i && this.#t && (this.#t.accept = this.accept), e === "disabled" && t !== i && this.#t && (this.#t.disabled = this.disabled, this.disabled ? (this.#e?.removeAttribute("tabindex"), this.#e?.setAttribute("aria-disabled", "true")) : (this.#e?.setAttribute("tabindex", "0"), this.#e?.setAttribute("aria-disabled", "false"))), e === "multiple" && t !== i && this.#t && (this.#t.multiple = this.multiple);
    }
    connectedCallback() {
        this.#o("accept"), this.#o("disabled"), this.#o("maxFiles"), this.#o("maxSize"), this.#o("minSize"), this.#o("multiple"), this.#o("autoFocus"), this.#o("noStyle"), this.#t?.addEventListener("change", this.#i), this.#e?.addEventListener("dragenter", this.#r), this.#e?.addEventListener("dragover", this.#s), this.#e?.addEventListener("dragleave", this.#n), this.#e?.addEventListener("drop", this.#a), this.#e?.addEventListener("click", this.#d), this.#e?.addEventListener("keyup", this.#l), this.autoFocus && this.#e?.focus();
    }
    disconnectedCallback() {
        this.#t?.removeEventListener("change", this.#i), this.#e?.removeEventListener("dragenter", this.#r), this.#e?.removeEventListener("dragover", this.#s), this.#e?.removeEventListener("dragleave", this.#n), this.#e?.removeEventListener("drop", this.#a), this.#e?.removeEventListener("click", this.#d), this.#e?.removeEventListener("keyup", this.#l);
    }
    get accept() {
        return this.getAttribute("accept") || "";
    }
    set accept(e) {
        this.setAttribute("accept", e != null ? e.toString() : e);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(e) {
        this.toggleAttribute("disabled", !!e);
    }
    get maxFiles() {
        let e = Number(this.getAttribute("max-files")) || 0;
        return e <= 0 ? 1 / 0 : Math.floor(Math.abs(e));
    }
    set maxFiles(e) {
        this.setAttribute("max-files", e != null ? e.toString() : e);
    }
    get maxSize() {
        let e = this.getAttribute("max-size");
        if (e === null) return 1 / 0;
        let t = Number(e);
        return Number.isNaN(t) ? 1 / 0 : t;
    }
    set maxSize(e) {
        this.setAttribute("max-size", e != null ? e.toString() : e);
    }
    get minSize() {
        let e = this.getAttribute("min-size");
        if (e === null) return 0;
        let t = Number(e);
        return Number.isNaN(t) ? 0 : t;
    }
    set minSize(e) {
        this.setAttribute("min-size", e != null ? e.toString() : e);
    }
    get multiple() {
        return this.hasAttribute("multiple");
    }
    set multiple(e) {
        this.toggleAttribute("multiple", !!e);
    }
    get autoFocus() {
        return this.hasAttribute("auto-focus");
    }
    set autoFocus(e) {
        this.toggleAttribute("auto-focus", !!e);
    }
    get noStyle() {
        return this.hasAttribute("no-style");
    }
    set noStyle(e) {
        this.toggleAttribute("no-style", !!e);
    }
    #i = async (e)=>{
        try {
            this.#c(await $743f94428e066832$var$l(e));
        } catch (t) {
            this.dispatchEvent(new CustomEvent(`${$743f94428e066832$var$n}-error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    };
    #r = ()=>{
        this.disabled || this.dispatchEvent(new Event(`${$743f94428e066832$var$n}-dragenter`, {
            bubbles: !0,
            composed: !0
        }));
    };
    #s = (e)=>{
        if (e.preventDefault(), this.disabled) {
            e.dataTransfer.dropEffect = "none";
            return;
        }
        e.dataTransfer.dropEffect = "copy", this.#e && (this.#e.classList.add("dropzone--dragover"), this.#e.part.add("dropzone--dragover")), this.dispatchEvent(new Event(`${$743f94428e066832$var$n}-dragover`, {
            bubbles: !0,
            composed: !0
        }));
    };
    #n = ()=>{
        this.disabled || (this.#e && (this.#e.classList.remove("dropzone--dragover"), this.#e.part.remove("dropzone--dragover")), this.dispatchEvent(new Event(`${$743f94428e066832$var$n}-dragleave`, {
            bubbles: !0,
            composed: !0
        })));
    };
    #a = async (e)=>{
        if (!this.disabled) {
            e.preventDefault(), this.#e && (this.#e.classList.remove("dropzone--dragover"), this.#e.part.remove("dropzone--dragover"));
            try {
                this.#c(await $743f94428e066832$var$l(e));
            } catch (t) {
                this.dispatchEvent(new CustomEvent(`${$743f94428e066832$var$n}-error`, {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        error: t
                    }
                }));
            }
        }
    };
    #d = ()=>{
        this.disabled || this.#t?.click();
    };
    #l = (e)=>{
        this.disabled || (e.key === " " || e.key === "Enter") && this.#t?.click();
    };
    #c(e) {
        if (!Array.isArray(e) || !e.length) return;
        let t = [], i = [], s = e.length;
        if (!this.multiple && s > 1) for (let r of e)i.push({
            file: r,
            errors: [
                {
                    code: $743f94428e066832$var$v,
                    message: "Too many files selected. Only 1 file is allowed."
                }
            ]
        });
        else if (this.multiple && s > this.maxFiles) for (let r of e)i.push({
            file: r,
            errors: [
                {
                    code: $743f94428e066832$var$v,
                    message: `Too many files selected. Only ${this.maxFiles} ${this.maxFiles > 1 ? "files are" : "file is"} allowed.`
                }
            ]
        });
        else for (let r of e){
            let c = $743f94428e066832$var$u(r, this.accept), p = r.size > this.maxSize, h = r.size < this.minSize;
            if (c && !p && !h) t.push(r);
            else {
                let a = [];
                c || a.push({
                    code: $743f94428e066832$var$A,
                    message: `File type "${r.type}" is not accepted.`
                }), p && a.push({
                    code: $743f94428e066832$var$L,
                    message: `File size ${r.size} exceeds the maximum size of ${this.maxSize}.`
                }), h && a.push({
                    code: $743f94428e066832$var$k,
                    message: `File size ${r.size} is smaller than the minimum size of ${this.minSize}.`
                }), i.push({
                    file: r,
                    errors: a
                });
            }
        }
        this.dispatchEvent(new CustomEvent(`${$743f94428e066832$var$n}-drop`, {
            bubbles: !0,
            composed: !0,
            detail: {
                acceptedFiles: t,
                rejectedFiles: i
            }
        })), t.length > 0 && this.dispatchEvent(new CustomEvent(`${$743f94428e066832$var$n}-drop-accepted`, {
            bubbles: !0,
            composed: !0,
            detail: {
                acceptedFiles: t
            }
        })), i.length > 0 && this.dispatchEvent(new CustomEvent(`${$743f94428e066832$var$n}-drop-rejected`, {
            bubbles: !0,
            composed: !0,
            detail: {
                rejectedFiles: i
            }
        })), this.#t && (this.#t.value = this.#t.defaultValue);
    }
    openFileDialog() {
        this.disabled || this.#t?.click();
    }
    #o(e) {
        let t = this;
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            delete t[e], t[e] = i;
        }
    }
    static defineCustomElement(e = $743f94428e066832$var$n) {
        typeof window < "u" && !window.customElements.get(e) && window.customElements.define(e, o);
    }
};
$743f94428e066832$export$6ccd1735166caad9.defineCustomElement();


/*!
 * @georapbox/resize-observer-element
 * A custom element that offers a declarative interface to the ResizeObserver API.
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/resize-observer-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var $5d733cc90ca10a65$var$d = ":host { display: contents; }", $5d733cc90ca10a65$var$o = document.createElement("template");
$5d733cc90ca10a65$var$o.innerHTML = `
  <style>${$5d733cc90ca10a65$var$d}</style>
  <slot></slot>
`;
var $5d733cc90ca10a65$export$f0e45424cc896229 = class n extends HTMLElement {
    #e = null;
    #t = null;
    #s = [];
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild($5d733cc90ca10a65$var$o.content.cloneNode(!0)), this.#e = this.shadowRoot?.querySelector("slot") ?? null;
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(e, t, i) {
        e === "disabled" && t !== i && (this.disabled ? this.#o() : this.#i());
    }
    connectedCallback() {
        this.#d("disabled"), "ResizeObserver" in window && (this.#t = new ResizeObserver((e)=>{
            this.dispatchEvent(new CustomEvent("resize-observer:resize", {
                bubbles: !0,
                composed: !0,
                detail: {
                    entries: e
                }
            }));
        }), this.disabled || this.#i(), this.#e?.addEventListener("slotchange", this.#n));
    }
    disconnectedCallback() {
        this.#o(), this.#e?.removeEventListener("slotchange", this.#n);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(e) {
        this.toggleAttribute("disabled", !!e);
    }
    #i() {
        !this.#e || !this.#t || (this.#s.forEach((e)=>this.#t?.unobserve(e)), this.#s = [], this.#e.assignedElements().forEach((e)=>{
            this.#t?.observe(e), this.#s.push(e);
        }));
    }
    #o() {
        this.#t?.disconnect();
    }
    #n = ()=>{
        this.disabled || this.#i();
    };
    #d(e) {
        let t = this;
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            delete t[e], t[e] = i;
        }
    }
    static defineCustomElement(e = "resize-observer") {
        typeof window < "u" && !window.customElements.get(e) && window.customElements.define(e, n);
    }
};
$5d733cc90ca10a65$export$f0e45424cc896229.defineCustomElement();


/*!
 * @georapbox/modal-element
 * A custom element to create a modal, using the native dialog element under the hood.
 *
 * @version 1.8.0
 * @homepage https://github.com/georapbox/modal-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var $f2237eeefc3fe3cb$var$n = document.createElement("template"), $f2237eeefc3fe3cb$var$r = `
  :host {
    --me-width: 32rem;
    --me-height: fit-content;
    --me-border-color: initial;
    --me-border-style: solid;
    --me-border-width: initial;
    --me-border-radius: 0;
    --me-box-shadow: none;
    --me-background-color: canvas;
    --me-color: canvastext;

    --me-header-spacing: 1rem;
    --me-footer-spacing: 1rem;
    --me-header-background-color: transparent;
    --me-header-color: initial;

    --me-body-spacing: 1rem;
    --me-body-background-color: transparent;
    --me-body-color: initial;
    --me-footer-background-color: transparent;
    --me-footer-color: initial;

    --me-close-padding: 0.4375rem;
    --me-close-border: none;
    --me-close-border-radius: 0;
    --me-close-background-color: transparent;
    --me-close-color: inherit;
    --me-close-font-size: 1rem;

    --me-backdrop-background: rgba(0, 0, 0, 0.5);
    --me-backdrop-filter: none;

    display: contents;
    box-sizing: border-box;
  }

  :host *,
  :host *:after,
  :host *:before {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  /* Dialog */
  .dialog {
    --dialog-placement-margin: calc((2em + 6px) / 2);

    width: var(--me-width);
    height: var(--me-height);
    padding: 0;
    border-color: var(--me-border-color);
    border-style: var(--me-border-style);
    border-width: var(--me-border-width);
    border-radius: var(--me-border-radius);
    box-shadow: var(--me-box-shadow);
    background-color: var(--me-background-color);
    color: var(--me-color);
  }

  .dialog[open] {
    display: flex;
  }

  :host([fullscreen]) .dialog {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }

  .dialog::backdrop {
    background: var(--me-backdrop-background, rgba(0, 0, 0, 0.5));
    backdrop-filter: var(--me-backdrop-filter, none);
    opacity: 0;
  }

  .dialog[open]::backdrop {
    opacity: 1;
  }

  /* Dialog placement */
  :host(:not([fullscreen])[placement="top-start"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-center"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-end"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center-start"]) .dialog {
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center"]) .dialog {
    margin: auto;
  }

  :host(:not([fullscreen])[placement="center-end"]) .dialog {
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-start"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-center"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-end"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  /* Dialog animations */
  @media (prefers-reduced-motion: no-preference) {
    .dialog:not(.dialog--no-animations),
    .dialog:not(.dialog--no-animations)::backdrop {
      transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
    }

    /* 1. IS-OPEN STATE */
    .dialog[open] {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open] {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]::backdrop {
        opacity: 0;
      }
    }

    .dialog--pulse:not(.dialog--no-animations) {
      animation-name: pulse;
      animation-duration: 300ms;
      animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  }

  /* Dialog panel, header, body, footer */
  .dialog__panel {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--me-header-spacing);
    column-gap: 0.5rem;
    background-color: var(--me-header-background-color);
    color: var(--me-header-color);
  }

  :host([no-close-button]) .dialog__header {
    column-gap: 0;
  }

  .dialog__title {
    display: block;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    padding: var(--me-body-spacing);
    overflow: auto;
    background-color: var(--me-body-background-color);
    color: var(--me-body-color);
    overscroll-behavior: contain;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: end;
    padding: var(--me-footer-spacing);
    background-color: var(--me-footer-background-color);
    color: var(--me-footer-color);
  }

  .dialog__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--me-close-padding);
    border: var(--me-close-border);
    border-radius: var(--me-close-border-radius);
    background-color: var(--me-close-background-color);
    color: var(--me-close-color);
    font-size: var(--me-close-font-size);
  }

  .dialog__close:not(:disabled) {
    cursor: pointer;
  }

  .dialog__close:disabled {
    cursor: not-allowed;
  }
`;
$f2237eeefc3fe3cb$var$n.innerHTML = `
  <style>${$f2237eeefc3fe3cb$var$r}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg part="close-icon" xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </slot>
          </button>
        </form>
      </header>

      <slot part="body" class="dialog__body"></slot>

      <footer part="footer" class="dialog__footer" hidden>
        <slot name="footer"></slot>
      </footer>
    </div>
  </dialog>
`;
var $f2237eeefc3fe3cb$export$32589115725b904b = class s extends HTMLElement {
    #e = null;
    #i = null;
    #a = null;
    #o = void 0;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild($f2237eeefc3fe3cb$var$n.content.cloneNode(!0)), this.shadowRoot && (this.#e = this.shadowRoot.querySelector("dialog"), this.#i = this.shadowRoot.querySelector('slot[name="footer"]'), this.#a = this.shadowRoot.querySelector('slot[name="close"]'));
    }
    static get observedAttributes() {
        return [
            "open",
            "no-header",
            "no-animations",
            "no-close-button",
            "close-label"
        ];
    }
    attributeChangedCallback(e, t, i) {
        if (this.#e !== null) {
            if (e === "open" && t !== i && (this.open ? (this.#e.showModal(), this.dispatchEvent(new CustomEvent("me-open", {
                bubbles: !0,
                composed: !0,
                detail: {
                    element: this
                }
            })), document.body && !this.preserveOverflow && (document.body.style.overflow = "hidden")) : this.#e.close()), e === "no-header" && t !== i) {
                let o = this.#e.querySelector(".dialog__header");
                o !== null && (o.hidden = this.noHeader);
            }
            if (e === "no-animations" && t !== i && this.#e.classList.toggle("dialog--no-animations", this.noAnimations), e === "no-close-button" && t !== i) {
                let o = this.#e.querySelector(".dialog__close");
                o !== null && (o.hidden = this.noCloseButton);
            }
            e === "close-label" && t !== i && this.#r();
        }
    }
    connectedCallback() {
        this.#t("open"), this.#t("staticBackdrop"), this.#t("noHeader"), this.#t("noAnimations"), this.#t("noCloseButton"), this.#t("fullscreen"), this.#t("preserveOverflow"), this.#t("placement"), this.#t("closeLabel"), this.#e?.addEventListener("click", this.#h), this.#e?.addEventListener("close", this.#l), this.#e?.addEventListener("cancel", this.#d), this.#e?.querySelector('form[method="dialog"]')?.addEventListener("submit", this.#c), this.#i?.addEventListener("slotchange", this.#m), this.#a?.addEventListener("slotchange", this.#g);
    }
    disconnectedCallback() {
        this.#o && clearTimeout(this.#o), this.#e?.addEventListener("click", this.#h), this.#e?.removeEventListener("close", this.#l), this.#e?.removeEventListener("cancel", this.#d), this.#e?.querySelector('form[method="dialog"]')?.removeEventListener("submit", this.#c), this.#i?.removeEventListener("slotchange", this.#m), this.#a?.removeEventListener("slotchange", this.#g);
    }
    get open() {
        return this.hasAttribute("open");
    }
    set open(e) {
        this.toggleAttribute("open", !!e);
    }
    get staticBackdrop() {
        return this.hasAttribute("static-backdrop");
    }
    set staticBackdrop(e) {
        this.toggleAttribute("static-backdrop", !!e);
    }
    get noHeader() {
        return this.hasAttribute("no-header");
    }
    set noHeader(e) {
        this.toggleAttribute("no-header", !!e);
    }
    get noAnimations() {
        return this.hasAttribute("no-animations");
    }
    set noAnimations(e) {
        this.toggleAttribute("no-animations", !!e);
    }
    get noCloseButton() {
        return this.hasAttribute("no-close-button");
    }
    set noCloseButton(e) {
        this.toggleAttribute("no-close-button", !!e);
    }
    get fullscreen() {
        return this.hasAttribute("fullscreen");
    }
    set fullscreen(e) {
        this.toggleAttribute("fullscreen", !!e);
    }
    get preserveOverflow() {
        return this.hasAttribute("preserve-overflow");
    }
    set preserveOverflow(e) {
        this.toggleAttribute("preserve-overflow", !!e);
    }
    get placement() {
        return this.getAttribute("placement") || "center";
    }
    set placement(e) {
        this.setAttribute("placement", e != null ? e.toString() : e);
    }
    get closeLabel() {
        return this.getAttribute("close-label") || "Close";
    }
    set closeLabel(e) {
        this.setAttribute("close-label", e != null ? e.toString() : e);
    }
    #r() {
        if (this.#e === null) return;
        let e = this.#e.querySelector(".dialog__close");
        if (e === null) return;
        (this.#a?.assignedElements() || [])?.some((o)=>o.textContent?.replace(/\s/g, "") !== "") ? e.removeAttribute("aria-label") : e.setAttribute("aria-label", this.closeLabel);
    }
    #n() {
        this.#o || (this.#e?.classList.add("dialog--pulse"), this.#o = setTimeout(()=>{
            this.#e?.classList.remove("dialog--pulse"), clearTimeout(this.#o), this.#o = void 0;
        }, 300));
    }
    #l = ()=>{
        this.open = !1, this.dispatchEvent(new CustomEvent("me-close", {
            bubbles: !0,
            composed: !0,
            detail: {
                element: this
            }
        })), document.body && !this.preserveOverflow && (document.body.style.overflow = "");
    };
    #d = (e)=>{
        let t = this.#s("escape-key");
        this.dispatchEvent(t), t.defaultPrevented && (e.preventDefault(), !this.noAnimations && this.#n());
    };
    #c = (e)=>{
        let t = this.#s("close-button");
        this.dispatchEvent(t), t.defaultPrevented && (e.preventDefault(), !this.noAnimations && this.#n());
    };
    #h = (e)=>{
        let t = e.target, i = e.currentTarget;
        if (t === i) {
            let o = this.#s("backdrop-click");
            this.dispatchEvent(o), o.defaultPrevented || this.staticBackdrop ? !this.noAnimations && this.#n() : this.hide();
        }
        if (t instanceof HTMLElement && t.closest("[data-me-close]") !== null) {
            let o = this.#s("external-invoker");
            this.dispatchEvent(o), o.defaultPrevented ? !this.noAnimations && this.#n() : this.hide();
        }
    };
    #m = ()=>{
        if (this.#e === null) return;
        let e = this.#e.querySelector(".dialog__footer");
        if (e === null) return;
        let t = this.#i?.assignedNodes(), i = t ? t.length > 0 : !1;
        e.hidden = !i;
    };
    #g = ()=>{
        this.#r();
    };
    #s(e) {
        return new CustomEvent("me-request-close", {
            bubbles: !0,
            composed: !0,
            cancelable: !0,
            detail: {
                reason: e,
                element: this
            }
        });
    }
    #t(e) {
        let t = this;
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            delete t[e], t[e] = i;
        }
    }
    show() {
        this.open || (this.open = !0);
    }
    hide() {
        this.open && (this.open = !1);
    }
    static defineCustomElement(e = "modal-element") {
        typeof window < "u" && !window.customElements.get(e) && window.customElements.define(e, s);
    }
};
$f2237eeefc3fe3cb$export$32589115725b904b.defineCustomElement();


const $6814df9ff67e3af8$export$d726fc97fa83318d = "experimental";
const $6814df9ff67e3af8$export$c263bd68c6f5ce7a = "No barcode detected";
const $6814df9ff67e3af8$export$63e7bed68b07a85c = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/apng",
    "image/gif",
    "image/webp",
    "image/avif"
];


function $da882a54d23f13ce$var$_slicedToArray(arr, i) {
    return $da882a54d23f13ce$var$_arrayWithHoles(arr) || $da882a54d23f13ce$var$_iterableToArrayLimit(arr, i) || $da882a54d23f13ce$var$_unsupportedIterableToArray(arr, i) || $da882a54d23f13ce$var$_nonIterableRest();
}
function $da882a54d23f13ce$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $da882a54d23f13ce$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $da882a54d23f13ce$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $da882a54d23f13ce$var$_arrayLikeToArray(o, minLen);
}
function $da882a54d23f13ce$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $da882a54d23f13ce$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $da882a54d23f13ce$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $da882a54d23f13ce$export$b327150396135fe7(request) {
    return new Promise(function(resolve, reject) {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = function() {
            return resolve(request.result);
        }; // @ts-ignore - file size hacks
        request.onabort = request.onerror = function() {
            return reject(request.error);
        };
    });
}
function $da882a54d23f13ce$export$f51a9068ac82ea43(dbName, storeName) {
    var request = indexedDB.open(dbName);
    request.onupgradeneeded = function() {
        return request.result.createObjectStore(storeName);
    };
    var dbp = $da882a54d23f13ce$export$b327150396135fe7(request);
    return function(txMode, callback) {
        return dbp.then(function(db) {
            return callback(db.transaction(storeName, txMode).objectStore(storeName));
        });
    };
}
var $da882a54d23f13ce$var$defaultGetStoreFunc;
function $da882a54d23f13ce$var$defaultGetStore() {
    if (!$da882a54d23f13ce$var$defaultGetStoreFunc) $da882a54d23f13ce$var$defaultGetStoreFunc = $da882a54d23f13ce$export$f51a9068ac82ea43("keyval-store", "keyval");
    return $da882a54d23f13ce$var$defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$3988ae62b71be9a3(key) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readonly", function(store) {
        return $da882a54d23f13ce$export$b327150396135fe7(store.get(key));
    });
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$adaa4cf7ef1b65be(key, value) {
    var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readwrite", function(store) {
        store.put(value, key);
        return $da882a54d23f13ce$export$b327150396135fe7(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$daa0a5170277c7a8(entries) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readwrite", function(store) {
        entries.forEach(function(entry) {
            return store.put(entry[1], entry[0]);
        });
        return $da882a54d23f13ce$export$b327150396135fe7(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$5df405cccea42673(keys) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readonly", function(store) {
        return Promise.all(keys.map(function(key) {
            return $da882a54d23f13ce$export$b327150396135fe7(store.get(key));
        }));
    });
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$722fbec263ad908a(key, updater) {
    var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readwrite", function(store) {
        return(// If I try to chain promises, the transaction closes in browsers
        // that use a promise polyfill (IE10/11).
        new Promise(function(resolve, reject) {
            store.get(key).onsuccess = function() {
                try {
                    store.put(updater(this.result), key);
                    resolve($da882a54d23f13ce$export$b327150396135fe7(store.transaction));
                } catch (err) {
                    reject(err);
                }
            };
        }));
    });
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$1d2f21e549771e67(key) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readwrite", function(store) {
        store.delete(key);
        return $da882a54d23f13ce$export$b327150396135fe7(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$c8aa84257229cac8(keys) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readwrite", function(store) {
        keys.forEach(function(key) {
            return store.delete(key);
        });
        return $da882a54d23f13ce$export$b327150396135fe7(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$42ffd38884aecdac() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readwrite", function(store) {
        store.clear();
        return $da882a54d23f13ce$export$b327150396135fe7(store.transaction);
    });
}
function $da882a54d23f13ce$var$eachCursor(store, callback) {
    store.openCursor().onsuccess = function() {
        if (!this.result) return;
        callback(this.result);
        this.result.continue();
    };
    return $da882a54d23f13ce$export$b327150396135fe7(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$ed97f33186d4b816() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readonly", function(store) {
        // Fast path for modern browsers
        if (store.getAllKeys) return $da882a54d23f13ce$export$b327150396135fe7(store.getAllKeys());
        var items = [];
        return $da882a54d23f13ce$var$eachCursor(store, function(cursor) {
            return items.push(cursor.key);
        }).then(function() {
            return items;
        });
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$68c286be0e7e55b7() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readonly", function(store) {
        // Fast path for modern browsers
        if (store.getAll) return $da882a54d23f13ce$export$b327150396135fe7(store.getAll());
        var items = [];
        return $da882a54d23f13ce$var$eachCursor(store, function(cursor) {
            return items.push(cursor.value);
        }).then(function() {
            return items;
        });
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function $da882a54d23f13ce$export$3e9f948b41964866() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $da882a54d23f13ce$var$defaultGetStore();
    return customStore("readonly", function(store) {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) return Promise.all([
            $da882a54d23f13ce$export$b327150396135fe7(store.getAllKeys()),
            $da882a54d23f13ce$export$b327150396135fe7(store.getAll())
        ]).then(function(_ref) {
            var _ref2 = $da882a54d23f13ce$var$_slicedToArray(_ref, 2), keys = _ref2[0], values = _ref2[1];
            return keys.map(function(key, i) {
                return [
                    key,
                    values[i]
                ];
            });
        });
        var items = [];
        return customStore("readonly", function(store) {
            return $da882a54d23f13ce$var$eachCursor(store, function(cursor) {
                return items.push([
                    cursor.key,
                    cursor.value
                ]);
            }).then(function() {
                return items;
            });
        });
    });
}


const $252772e6b65b7db3$var$STORAGE_PREFIX = "barcode-scanner/";
const $252772e6b65b7db3$var$SETTINGS_STORAGE_KEY = "settings";
const $252772e6b65b7db3$var$HISTORY_STORAGE_KEY = "history";
/**
 * Gets an item from the storage.
 *
 * @param {string} key - The key to get the item from.
 * @returns {Promise<[ error: any, value: any ]>} The item and an error if occurred.
 */ const $252772e6b65b7db3$var$getItem = async (key)=>{
    try {
        return [
            null,
            await (0, $da882a54d23f13ce$export$3988ae62b71be9a3)(key)
        ];
    } catch (error) {
        return [
            error,
            void 0
        ];
    }
};
/**
 * Sets an item in the storage.
 *
 * @param {string} key - The key to set the item to.
 * @param {any} data - The data to set.
 * @returns {Promise<[ error: any ]>} An error if occurred.
 */ const $252772e6b65b7db3$var$setItem = async (key, data)=>{
    try {
        await (0, $da882a54d23f13ce$export$adaa4cf7ef1b65be)(key, data);
        return [
            null
        ];
    } catch (error) {
        return [
            error
        ];
    }
};
const $252772e6b65b7db3$export$4a647155031ece = async ()=>{
    return $252772e6b65b7db3$var$getItem($252772e6b65b7db3$var$STORAGE_PREFIX + $252772e6b65b7db3$var$SETTINGS_STORAGE_KEY);
};
const $252772e6b65b7db3$export$dc86d17a64679bc7 = async (data)=>{
    return $252772e6b65b7db3$var$setItem($252772e6b65b7db3$var$STORAGE_PREFIX + $252772e6b65b7db3$var$SETTINGS_STORAGE_KEY, data);
};
const $252772e6b65b7db3$export$f9582a3c130d9538 = async ()=>{
    return $252772e6b65b7db3$var$getItem($252772e6b65b7db3$var$STORAGE_PREFIX + $252772e6b65b7db3$var$HISTORY_STORAGE_KEY);
};
const $252772e6b65b7db3$export$96fe1132eb44c325 = async (data)=>{
    return $252772e6b65b7db3$var$setItem($252772e6b65b7db3$var$STORAGE_PREFIX + $252772e6b65b7db3$var$HISTORY_STORAGE_KEY, data);
};


/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * 'n' milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {function} fn The function to be executed.
 * @param {Number} [wait=0] Time of delay in milliseconds. It is required if `immediate` is used.
 * @param {Boolean} [immediate=false] If true or any truthy value, triggers the function on the leading edge.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} A new debounced function.
 * @example
 *
 * const debouncedHandler = debounce(() => {
 *   // Do your thing here...
 * }, 250);
 *
 * window.addEventListener('resize', debouncedHandler, false);
 */ const $1b63c430b02266a3$export$61fc7d43ac8f84b0 = (fn, wait = 0, immediate = false)=>{
    let timerId = null;
    if (typeof fn !== "function") throw new TypeError("Expected a function for first argument");
    return (...args)=>{
        clearTimeout(timerId);
        if (immediate && !timerId) fn(...args);
        timerId = setTimeout(()=>{
            timerId = null;
            if (!immediate) fn(...args);
        }, wait);
    };
};


/**
 * Log to console only in development mode.
 *
 * @param {...any} args - Arguments to log
 */ function $026bdfcd1c53bf0b$export$bef1f36f5486a6a3(...args) {}


/**
 * Check if the dialog element is supported.
 *
 * @returns {boolean} - Returns true if the dialog element is supported.
 */ const $cdd676ababbe44c4$export$c694186e9d94f0 = ()=>{
    return typeof HTMLDialogElement === "function";
};


/**
 * Renders the supported formats.
 *
 * @param {Array<string>} formats - Supported barcode formats
 */ function $f1abed042a7c6930$export$f6bb24723b821792(formats) {
    if (!Array.isArray(formats) || formats.length === 0) return;
    const supportedFormatsEl = document.getElementById("supportedFormats");
    if (!supportedFormatsEl) return;
    supportedFormatsEl.textContent = `Supported formats: ${formats.join(", ")}`;
}



function $4c5af2a63b39f23d$export$fa9e3380e441c420(data) {
    const historyList = document.getElementById("historyList");
    if (!historyList) return;
    const emptyHistoryBtn = document.getElementById("emptyHistoryBtn");
    historyList.replaceChildren();
    if (!Array.isArray(data) || data.length === 0) {
        historyList.innerHTML = "<li>There are no saved items in history.</li>";
        emptyHistoryBtn.hidden = true;
    } else {
        emptyHistoryBtn.hidden = false;
        data.forEach((item, index)=>{
            const li = document.createElement("li");
            li.setAttribute("data-value", item);
            let historyItem;
            try {
                new URL(item);
                historyItem = document.createElement("a");
                historyItem.href = item;
                historyItem.setAttribute("target", "_blank");
                historyItem.setAttribute("rel", "noreferrer noopener");
            } catch  {
                historyItem = document.createElement("span");
            }
            historyItem.textContent = item;
            historyItem.setAttribute("id", `historyItem-${index}`);
            const actionsEl = document.createElement("div");
            actionsEl.className = "history-modal__actions";
            const copyBtn = document.createElement("custom-clipboard-copy");
            copyBtn.setAttribute("id", `copyHistoryItem-${index}`);
            copyBtn.setAttribute("aria-label", "Copy to clipboard");
            copyBtn.setAttribute("aria-labelledby", `copyHistoryItem-${index} historyItem-${index}`);
            copyBtn.setAttribute("only-icon", "");
            copyBtn.setAttribute("value", item);
            actionsEl.appendChild(copyBtn);
            const removeBtn = document.createElement("button");
            removeBtn.type = "button";
            removeBtn.className = "history-modal__delete-action";
            removeBtn.setAttribute("data-action", "delete");
            removeBtn.setAttribute("id", `removeHistoryItem-${index}`);
            removeBtn.setAttribute("aria-label", "Remove from history");
            removeBtn.setAttribute("aria-labelledby", `removeHistoryItem-${index} historyItem-${index}`);
            removeBtn.innerHTML = /* html */ `
          <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `;
            actionsEl.appendChild(removeBtn);
            li.appendChild(historyItem);
            li.appendChild(actionsEl);
            historyList.appendChild(li);
        });
    }
}
async function $4c5af2a63b39f23d$export$7a6a9d84993ff4e(item) {
    const [, settings] = await (0, $252772e6b65b7db3$export$4a647155031ece)();
    if (!item || !settings?.addToHistory) return;
    const [getHistoryError, history = []] = await (0, $252772e6b65b7db3$export$f9582a3c130d9538)();
    if (!getHistoryError && Array.isArray(history) && !history.find((h)=>h === item)) {
        const data = [
            ...history,
            item
        ];
        const [setHistoryError] = await (0, $252772e6b65b7db3$export$96fe1132eb44c325)(data);
        if (!setHistoryError) $4c5af2a63b39f23d$export$fa9e3380e441c420(data);
    }
}
async function $4c5af2a63b39f23d$export$3a61248021dae916(item) {
    if (!item) return;
    const [getHistoryError, history = []] = await (0, $252772e6b65b7db3$export$f9582a3c130d9538)();
    if (!getHistoryError && Array.isArray(history)) {
        const data = history.filter((el)=>el !== item);
        const [setHistoryError] = await (0, $252772e6b65b7db3$export$96fe1132eb44c325)(data);
        if (!setHistoryError) $4c5af2a63b39f23d$export$fa9e3380e441c420(data);
    }
}
async function $4c5af2a63b39f23d$export$9f74b61e5d33cda2() {
    const [setHistoryError] = await (0, $252772e6b65b7db3$export$96fe1132eb44c325)([]);
    if (!setHistoryError) $4c5af2a63b39f23d$export$fa9e3380e441c420([]);
}


/**
 * Removes the scanned result from the element where it is shown.
 *
 * @param {HTMLElement} element - The element to remove the result from.
 */ function $60dfa2f9ba25b132$export$ad20350fbdf13c97(element) {
    if (!element) return;
    const scanResultEl = element.querySelector("scan-result");
    scanResultEl?.remove();
}
async function $60dfa2f9ba25b132$export$97c08f0895810b94(element, value) {
    if (!element || !value) return;
    const oldScanResultEl = element.querySelector("scan-result");
    if (oldScanResultEl) oldScanResultEl.setAttribute("value", value);
    else {
        const newScanResultEl = document.createElement("scan-result");
        newScanResultEl.setAttribute("value", value);
        newScanResultEl.setAttribute("role", "alert");
        newScanResultEl.setAttribute("aria-live", "assertive");
        newScanResultEl.setAttribute("aria-atomic", "true");
        element.appendChild(newScanResultEl);
    }
}



/**
 * Beep sound using the `AudioContext` interface.
 *
 * @param {Object} options
 * @param {Number} options.duration - Duration in milliseconds
 * @param {Number} options.frequency - Frequency in Hz
 * @param {Number} options.volume - Volume
 * @param {String} options.type - Type of oscillator
 * @param {Function} options.onEnded - Callback function when the sound ends
 */ const $368e8ddaad3faa09$export$d6c943e433460aae = (()=>{
    const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext)();
    if (!audioCtx) return;
    return (options)=>{
        const { duration: duration, frequency: frequency, volume: volume, type: type, onEnded: onEnded } = options;
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        if (volume) gainNode.gain.value = volume;
        if (frequency) oscillator.frequency.value = frequency;
        if (type) oscillator.type = type;
        if (typeof onEnded === "function") oscillator.onended = onEnded;
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + (duration || 500) / 1000);
    };
})();


/**
 * Vibrate the device.
 * If the device does not support vibration, this function will fail silently.
 *
 * @param {Number} [duration=0] - Duration in milliseconds
 */ async function $c4699aabb1e44834$export$3ca8e905da0a0ca8(duration = 0) {
    if (typeof window.navigator.vibrate !== "function") return;
    try {
        window.navigator.vibrate(duration);
    } catch  {
    // Fail silently...
    }
}


async function $e5047ade60bce166$export$9b466d13e2031a67(options = {}) {
    const { success: success = true } = options;
    const [, settings] = await (0, $252772e6b65b7db3$export$4a647155031ece)();
    if (!settings) return;
    const beepConfig = success ? {
        duration: 200,
        frequency: 860,
        volume: 0.03,
        type: "square"
    } : {
        duration: 300,
        frequency: 200,
        volume: 0.05,
        type: "sawtooth"
    };
    (0, $368e8ddaad3faa09$export$d6c943e433460aae)(beepConfig);
    (0, $c4699aabb1e44834$export$3ca8e905da0a0ca8)(success ? 100 : 200);
}


/**
 * Resizes the scan frame to match the video element's dimensions.
 *
 * @param {HTMLVideoElement} videoEl - Video element
 * @param {HTMLElement} scanFrameEl - Scan frame element
 */ function $e31ba8761bd275e4$export$1404f0e91c73fec(videoEl, scanFrameEl) {
    if (!videoEl || !scanFrameEl) return;
    const rect = videoEl.getBoundingClientRect();
    scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
}




/**
 * BarcodeReader class to detect barcodes from images or videos.
 *
 * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector
 */ class $f8ab580094d06bc8$export$f21d9483ebeee00a {
    static async polyfill() {
        if (!("BarcodeDetector" in window)) try {
            await (parcelRequire("cG93Q"));
            (0, $026bdfcd1c53bf0b$export$bef1f36f5486a6a3)("Using BarcodeDetector polyfill.");
        } catch  {
            throw new Error("BarcodeDetector API is not supported by your browser.");
        }
        else (0, $026bdfcd1c53bf0b$export$bef1f36f5486a6a3)("Using the native BarcodeDetector API.");
    }
    /**
   * Get the supported barcode formats.
   *
   * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector/getSupportedFormats
   * @returns {Promise<Array<string>>} - Supported barcode formats
   */ static async getSupportedFormats() {
        return await window.BarcodeDetector.getSupportedFormats();
    }
    /**
   * Create a new BarcodeReader instance.
   *
   * @returns {Promise<BarcodeReader>} - New BarcodeReader instance
   */ static async create() {
        const formats = await window.BarcodeDetector.getSupportedFormats();
        return new $f8ab580094d06bc8$export$f21d9483ebeee00a(formats);
    }
    /**
   * Initialize the BarcodeReader.
   *
   * @returns {Promise<{ barcodeReader: BarcodeReader, barcodeFormats: Array<string>, barcodeReaderError: Error }>} - BarcodeReader instance, supported formats, and error
   */ static async init() {
        try {
            await $f8ab580094d06bc8$export$f21d9483ebeee00a.polyfill();
            const barcodeReader = await $f8ab580094d06bc8$export$f21d9483ebeee00a.create();
            const barcodeFormats = await $f8ab580094d06bc8$export$f21d9483ebeee00a.getSupportedFormats();
            return {
                barcodeReader: barcodeReader,
                barcodeFormats: barcodeFormats,
                barcodeReaderError: null
            };
        } catch (error) {
            return {
                barcodeReader: null,
                barcodeFormats: [],
                barcodeReaderError: error
            };
        }
    }
    /**
   * Create a new BarcodeReader instance.
   *
   * @param {Array<string>} formats - Supported barcode formats
   */ constructor(formats){
        this.barcodeReader = new window.BarcodeDetector({
            formats: formats
        });
    }
    /**
   * Detect barcodes from the provided source.
   *
   * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector/detect
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap} source - Image or video element or ImageBitmap
   * @returns {Promise<BarcodeDetection>} - Barcode detection result
   */ async detect(source) {
        if (!this.barcodeReader) throw new Error("BarcodeReader is not initialized.");
        const results = await this.barcodeReader.detect(source);
        if (Array.isArray(results) && results.length > 0) return results[0];
        else throw new Error("Could not detect barcode from provided source.");
    }
}



async function $3db046d89afd7d66$export$9d22ef9ff8e481fe(form) {
    const [, settings = {}] = await (0, $252772e6b65b7db3$export$4a647155031ece)();
    Object.entries(settings).forEach(([key, value])=>{
        const settingInput = form.querySelector(`[name="${key}"]`);
        if (!settingInput) return;
        settingInput.checked = value;
    });
}


/**
 * Toggles the torch button status.
 * The torch button has two icons, one for on and one for off.
 * This function toggles the visibility of the icons based on the torch state and updates the button title.
 *
 * @param {HTMLButtonElement} buttonEl - The torch button element.
 * @param {boolean} isTorchOn - The torch state.
 */ function $5594645da3ef4bd9$export$d1bd0b12fe0d046(options = {}) {
    const defaults = {
        el: document.getElementById("torchButton"),
        isTorchOn: false
    };
    const { el: el, isTorchOn: isTorchOn } = {
        ...defaults,
        ...options
    };
    const iconPaths = el.querySelectorAll("svg path");
    if (iconPaths.length !== 2) return;
    iconPaths[0].style.display = isTorchOn ? "none" : "block";
    iconPaths[1].style.display = isTorchOn ? "block" : "none";
    el.setAttribute("aria-label", `Turn ${isTorchOn ? "off" : "on"} flash`);
}


/**
 * Clamps number within the inclusive `min` and `max` bounds,
 * making sure it does not go beyond them on either side.
 * If `min` is greater than `max` the parameters are swapped to support inverted ranges.
 *
 * @param {number} value - The number to clamp.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @throws {TypeError} - If one or more of the arguments passed is not a number.
 * @returns {number} - The clamped number.
 * @example
 *
 * clamp(10, -5, 5);
 * // => 5
 *
 * clamp(-10, -5, 5);
 * // => -5
 *
 * clamp(-15, 0, 100);
 * // => 0
 *
 * clamp(120, 0, 100);
 * // => 100
 *
 * clamp(-5, NaN, 5); // If any of lower or upper bound are `NaN`, they will be converted to `0`.
 * // => 0
 *
 * clamp(120, 100, 0); // The order of lower and upper bounds is reversed (100 > 0)
 * // => 100
 */ const $7334595827eb95a6$export$7d15b64cf5a3a4c4 = (value, lower, upper)=>{
    if (Number.isNaN(lower)) lower = 0;
    if (Number.isNaN(upper)) upper = 0;
    return Math.min(Math.max(value, Math.min(lower, upper)), Math.max(lower, upper));
};


const $6933dcbb9b79a9cd$var$COMPONENT_NAME = "video-capture";
const $6933dcbb9b79a9cd$var$styles = /* css */ `
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`;
const $6933dcbb9b79a9cd$var$template = document.createElement("template");
$6933dcbb9b79a9cd$var$template.innerHTML = /* html */ `
  <style>${$6933dcbb9b79a9cd$var$styles}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;
class $6933dcbb9b79a9cd$export$682e9ed90a89bb4a extends HTMLElement {
    #supportedConstraints = {};
    #stream = null;
    #videoElement = null;
    constructor(){
        super();
        this.#supportedConstraints = this.getSupportedConstraints();
        if (!this.shadowRoot) {
            const shadowRoot = this.attachShadow({
                mode: "open"
            });
            shadowRoot.appendChild($6933dcbb9b79a9cd$var$template.content.cloneNode(true));
        }
    }
    static get observedAttributes() {
        return [
            "no-image",
            "pan",
            "tilt",
            "zoom",
            "torch"
        ];
    }
    /**
   * Lifecycle method that is called when attributes are changed, added, removed, or replaced.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */ attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        const trackCapabilities = this.getTrackCapabilities();
        if (name === "zoom" && oldValue !== newValue && "zoom" in this.#supportedConstraints) {
            const zoomInAllowedRange = "zoom" in trackCapabilities && trackCapabilities.zoom?.min && trackCapabilities.zoom?.max ? this.zoom >= trackCapabilities.zoom.min && this.zoom <= trackCapabilities.zoom.max : false;
            if (typeof this.zoom === "number" && zoomInAllowedRange) this.#applyConstraint("zoom", this.zoom);
        }
        if (name === "torch" && oldValue !== newValue && "torch" in this.#supportedConstraints) this.#applyConstraint("torch", this.torch);
    }
    /**
   * Lifecycle method that is called when the element is added to the DOM.
   */ async connectedCallback() {
        this.#upgradeProperty("autoPlay");
        this.#upgradeProperty("facingMode");
        this.#upgradeProperty("zoom");
        this.#upgradeProperty("torch");
        this.#videoElement = this.shadowRoot?.querySelector("video") || null;
        this.#videoElement?.addEventListener("loadedmetadata", this.#onVideoLoadedMetaData);
        if (!$6933dcbb9b79a9cd$export$682e9ed90a89bb4a.isSupported()) return this.dispatchEvent(new CustomEvent(`${$6933dcbb9b79a9cd$var$COMPONENT_NAME}:error`, {
            bubbles: true,
            composed: true,
            detail: {
                error: {
                    name: "NotSupportedError",
                    message: "Not supported"
                }
            }
        }));
        if (this.autoPlay) this.startVideoStream();
    }
    /**
   * Lifecycle method that is called when the element is removed from the DOM.
   */ disconnectedCallback() {
        this.stopVideoStream();
        this.#videoElement?.removeEventListener("loadedmetadata", this.#onVideoLoadedMetaData);
    }
    get autoPlay() {
        return this.hasAttribute("auto-play");
    }
    set autoPlay(value) {
        this.toggleAttribute("auto-play", !!value);
    }
    get facingMode() {
        const value = this.getAttribute("facing-mode");
        if (value !== "user") return "environment";
        return value;
    }
    set facingMode(value) {
        this.setAttribute("facing-mode", value);
    }
    get zoom() {
        return Number(this.getAttribute("zoom")) || 1;
    }
    set zoom(value) {
        this.setAttribute("zoom", value != null ? value.toString() : value);
    }
    get torch() {
        return this.hasAttribute("torch");
    }
    set torch(value) {
        this.toggleAttribute("torch", !!value);
    }
    get loading() {
        return this.hasAttribute("loading");
    }
    /**
   * Handles the loadedmetadata event of the video element.
   *
   * @param {Event} evt - The event object.
   */ #onVideoLoadedMetaData = (evt)=>{
        const video = evt.target;
        video.play().then(()=>{
            this.dispatchEvent(new CustomEvent(`${$6933dcbb9b79a9cd$var$COMPONENT_NAME}:video-play`, {
                bubbles: true,
                composed: true,
                detail: {
                    video: video
                }
            }));
        }).catch((error)=>{
            this.dispatchEvent(new CustomEvent(`${$6933dcbb9b79a9cd$var$COMPONENT_NAME}:error`, {
                bubbles: true,
                composed: true,
                detail: {
                    error: error
                }
            }));
        }).finally(()=>{
            this.removeAttribute("loading");
        });
    };
    /**
   * Applies a constraint to the video track.
   *
   * @param {string} constraint - The name of the constraint.
   * @param {any} value - The value of the constraint.
   */ #applyConstraint(constraint, value) {
        if (!this.#stream) return;
        const [track] = this.#stream.getVideoTracks();
        const trackCapabilities = this.getTrackCapabilities();
        const trackSettings = this.getTrackSettings();
        const constraintValue = constraint === "pan" || constraint === "tilt" || constraint === "zoom" ? (0, $7334595827eb95a6$export$7d15b64cf5a3a4c4)(Number(value), trackCapabilities[constraint]?.min || 1, trackCapabilities[constraint]?.max || 1) : value;
        if (constraint in trackSettings) track.applyConstraints({
            advanced: [
                {
                    [constraint]: constraintValue
                }
            ]
        }).catch(()=>{
        // Fail silently...
        });
    }
    /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */ #upgradeProperty(prop) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    /**
   * Starts the video stream.
   *
   * @param {string} [videoInputId] - The video input device ID.
   * @returns Promise<void>
   */ async startVideoStream(videoInputId) {
        if (!$6933dcbb9b79a9cd$export$682e9ed90a89bb4a.isSupported() || this.#stream) return;
        this.setAttribute("loading", "");
        const constraints = {
            video: {
                facingMode: {
                    ideal: this.facingMode
                },
                pan: true,
                tilt: true,
                zoom: true,
                torch: this.torch
            },
            audio: false
        };
        if (typeof videoInputId === "string" && videoInputId.trim().length > 0) constraints.video.deviceId = {
            exact: videoInputId
        };
        if (typeof this.cameraResolution === "string" && this.cameraResolution.trim().length > 0) {
            const [width = 0, height = 0] = this.cameraResolution.split("x").map((x)=>Number(x));
            if (width > 0 && height > 0) {
                constraints.video.width = width;
                constraints.video.height = height;
            }
        }
        try {
            this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (this.#videoElement) this.#videoElement.srcObject = this.#stream;
            this.#applyConstraint("pan", this.pan);
            this.#applyConstraint("tilt", this.tilt);
            this.#applyConstraint("zoom", this.zoom);
        } catch (error) {
            this.dispatchEvent(new CustomEvent(`${$6933dcbb9b79a9cd$var$COMPONENT_NAME}:error`, {
                bubbles: true,
                composed: true,
                detail: {
                    error: error
                }
            }));
        } finally{
            this.removeAttribute("loading");
        }
    }
    /**
   * Restarts the video stream.
   *
   * @param {string} [videoInputId] - The video input device ID.
   */ restartVideoStream(videoInputId) {
        if (this.#stream && this.#videoElement) this.stopVideoStream();
        this.startVideoStream(videoInputId);
    }
    /**
   * Stops the video stream.
   */ stopVideoStream() {
        if (!this.#videoElement || !this.#stream) return;
        const [track] = this.#stream.getVideoTracks();
        track?.stop();
        this.#videoElement.srcObject = null;
        this.#stream = null;
    }
    /**
   * Returns an object based on the `MediaTrackSupportedConstraints` dictionary,
   * whose member fields each specify one ofthe constrainable properties the user agent understands.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaDevices/getSupportedConstraints
   * @returns {MediaTrackSupportedConstraints | {}}
   */ getSupportedConstraints() {
        if (!$6933dcbb9b79a9cd$export$682e9ed90a89bb4a.isSupported()) return {};
        return navigator.mediaDevices.getSupportedConstraints() || {};
    }
    /**
   * Returns a `MediaTrackCapabilities` object which specifies the values or range of values
   * which each constrainable property, based upon the platform and user agent.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/getCapabilities
   * @returns {MediaTrackCapabilities | {}}
   */ getTrackCapabilities() {
        if (!this.#stream) return {};
        const [track] = this.#stream.getVideoTracks();
        if (track && typeof track.getCapabilities === "function") return track.getCapabilities() || {};
        return {};
    }
    /**
   * Returns a `MediaTrackSettings` object containing the current values of each of
   * the constrainable properties for the current MediaStreamTrack.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/getSettings
   * @returns {MediaTrackSettings | {}}
   */ getTrackSettings() {
        if (!this.#stream) return {};
        const [track] = this.#stream.getVideoTracks();
        if (track && typeof track.getSettings === "function") return track.getSettings() || {};
        return {};
    }
    /**
   * Returns the available video input devices.
   *
   * @returns {Promise<MediaDeviceInfo[]>}
   */ static async getVideoInputDevices() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return [];
        const devices = await navigator.mediaDevices.enumerateDevices() || [];
        return devices.filter((device)=>device.kind === "videoinput" && !!device.deviceId);
    }
    /**
   * Checks if the `MediaDevices.getUserMedia()` method is supported.
   *
   * @returns {boolean}
   */ static isSupported() {
        return Boolean(navigator.mediaDevices?.getUserMedia);
    }
    /**
   * Defines a custom element with the given name.
   * The name must contain a dash (-).
   *
   * @param {string} [elementName='video-capture'] - The name of the custom element.
   */ static defineCustomElement(elementName = $6933dcbb9b79a9cd$var$COMPONENT_NAME) {
        if (typeof window !== "undefined" && !window.customElements.get(elementName)) window.customElements.define(elementName, $6933dcbb9b79a9cd$export$682e9ed90a89bb4a);
    }
}


/*!
 * @georapbox/clipboard-copy-element
 * A custom element that implements the Clipboard API to copy text content from elements or input values to the clipboard.
 *
 * @version 3.0.2
 * @homepage https://github.com/georapbox/clipboard-copy-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ var $ef84680cf4408f5f$var$i = "clipboard-copy";
var $ef84680cf4408f5f$var$o = "success", $ef84680cf4408f5f$var$n = "error", $ef84680cf4408f5f$var$h = document.createElement("template"), $ef84680cf4408f5f$var$a = `
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;
$ef84680cf4408f5f$var$h.innerHTML = `
  <style>${$ef84680cf4408f5f$var$a}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;
var $ef84680cf4408f5f$export$ea3b71af1761ff40 = class d extends HTMLElement {
    #e = void 0;
    #t = null;
    #s = null;
    #i = null;
    #o = null;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild($ef84680cf4408f5f$var$h.content.cloneNode(!0)), this.shadowRoot && (this.#t = this.shadowRoot.querySelector("button"), this.#s = this.shadowRoot.querySelector('slot[name="copy"]'), this.#i = this.shadowRoot.querySelector('slot[name="success"]'), this.#o = this.shadowRoot.querySelector('slot[name="error"]'));
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(t, s, e) {
        t === "disabled" && s !== e && this.#t && (this.#t.disabled = this.disabled, this.#t.setAttribute("aria-disabled", this.disabled.toString()), this.#t.part.contains("button") && this.#t.part.toggle("button--disabled", this.disabled));
    }
    connectedCallback() {
        this.#n("value"), this.#n("from"), this.#n("disabled"), this.#n("feedbackDuration"), this.#t?.addEventListener("click", this.#r);
    }
    disconnectedCallback() {
        this.#t?.removeEventListener("click", this.#r), this.#a();
    }
    get value() {
        return this.getAttribute("value") || "";
    }
    set value(t) {
        this.setAttribute("value", t != null ? t.toString() : t);
    }
    get from() {
        return this.getAttribute("from") || "";
    }
    set from(t) {
        this.setAttribute("from", t != null ? t.toString() : t);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get feedbackDuration() {
        return Number(this.getAttribute("feedback-duration")) || 1e3;
    }
    set feedbackDuration(t) {
        this.setAttribute("feedback-duration", t != null ? t.toString() : t);
    }
    async #d() {
        if (!(!this.value && !this.from)) try {
            let t = "";
            if (this.value) t = this.value;
            else if (this.from) {
                let s = "getRootNode" in Element.prototype ? this.#t?.getRootNode({
                    composed: !0
                }) : this.#t?.ownerDocument;
                if (!s || !(s instanceof Document || s instanceof ShadowRoot)) return;
                let e = s.querySelector(this.from);
                if (!e) return;
                e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? t = e.value : e instanceof HTMLAnchorElement && e.hasAttribute("href") ? t = e.href : t = e.textContent || "";
            }
            await navigator.clipboard.writeText(t), this.#h($ef84680cf4408f5f$var$o), this.dispatchEvent(new CustomEvent(`${$ef84680cf4408f5f$var$i}-success`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    value: t
                }
            }));
        } catch (t) {
            this.#h($ef84680cf4408f5f$var$n), this.dispatchEvent(new CustomEvent(`${$ef84680cf4408f5f$var$i}-error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    }
    #r = (t)=>{
        t.preventDefault(), !(this.disabled || this.#e) && this.#d();
    };
    #h(t) {
        this.#s && (this.#s.hidden = !0), this.#i && (this.#i.hidden = t !== $ef84680cf4408f5f$var$o), this.#o && (this.#o.hidden = t !== $ef84680cf4408f5f$var$n), this.#t?.part.remove("button--success"), this.#t?.part.remove("button--error"), this.#t?.part.add(`button--${t}`), this.#e && clearTimeout(this.#e), this.#e = setTimeout(()=>{
            this.#s && (this.#s.hidden = !1), this.#i && (this.#i.hidden = !0), this.#o && (this.#o.hidden = !0), this.#t?.part.remove(`button--${t}`), this.#e = void 0;
        }, this.feedbackDuration);
    }
    #a() {
        this.#e && clearTimeout(this.#e), this.#e = void 0, this.#s && (this.#s.hidden = !1), this.#i && (this.#i.hidden = !0), this.#o && (this.#o.hidden = !0), this.#t?.part.remove("button--success"), this.#t?.part.remove("button--error");
    }
    #n(t) {
        let s = this;
        if (Object.prototype.hasOwnProperty.call(s, t)) {
            let e = s[t];
            delete s[t], s[t] = e;
        }
    }
    static defineCustomElement(t = $ef84680cf4408f5f$var$i) {
        typeof window < "u" && !window.customElements.get(t) && window.customElements.define(t, d);
    }
};


/**
 * Extends the `ClipboardCopy` element to override the default `copy` and `success` slots,
 * in order to avoid repetition of the same markup throughout the application.
 * It also adds aditional properties and attributes, specific to the application.
 *
 * @class CustomClipboardCopy
 * @extends ClipboardCopy
 */ class $c27cfc23b3a20dc8$var$CustomClipboardCopy extends (0, $ef84680cf4408f5f$export$ea3b71af1761ff40) {
    constructor(){
        super();
        const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
        const successSlot = this.shadowRoot.querySelector('slot[name="success"]');
        copySlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `;
        successSlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `;
    }
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            "only-icon"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === "only-icon" && oldValue !== newValue) {
            const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
            const successSlot = this.shadowRoot.querySelector('slot[name="success"]');
            const copyText = copySlot.querySelector(".text");
            const successText = successSlot.querySelector(".text");
            if (copyText) copyText.hidden = this.onlyIcon;
            if (successText) successText.hidden = this.onlyIcon;
        }
    }
    get onlyIcon() {
        return this.hasAttribute("only-icon");
    }
    set onlyIcon(value) {
        if (value) this.setAttribute("only-icon", "");
        else this.removeAttribute("only-icon");
    }
    connectedCallback() {
        super.connectedCallback();
        this.#upgradeProperty("onlyIcon");
        if (!this.hasAttribute("feedback-duration")) this.setAttribute("feedback-duration", "1500");
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */ #upgradeProperty(prop) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    static defineCustomElement(elementName = "custom-clipboard-copy") {
        if (typeof window !== "undefined" && !window.customElements.get(elementName)) window.customElements.define(elementName, $c27cfc23b3a20dc8$var$CustomClipboardCopy);
    }
}
$c27cfc23b3a20dc8$var$CustomClipboardCopy.defineCustomElement();


/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */ function $c93ca68e362e1486$export$c37129e465f64ef0(a) {
    return a !== null && typeof a == "object" ? "share" in navigator && "canShare" in navigator && navigator.canShare(a) : "share" in navigator;
}




const $af97ba78aac738a8$var$styles = /* css */ `
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  .result {
    position: relative;
    width: 100%;
    border: 1px solid var(--focus);
    border-radius: 6px;
    margin: 1.5rem 0 0 0;
    padding: 1rem;
    background-color: var(--background-alt);
    text-align: center;
  }

  .result__item {
    word-wrap: break-word;
    word-break: break-word;
  }

  a.result__item {
    color: var(--links);
    text-decoration: none;
  }

  a.result__item:hover {
    text-decoration: underline;
  }

  .result__item--no-barcode {
    color: var(--error-color);
  }

  .result__actions {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .result web-share button,
  .result custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin: 0.75rem 0 0 0;
    padding: 0.25rem;
    background-color: transparent;
    border: 0;
    border-radius: var(--border-radius);
    color: inherit;
    line-height: 1;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;
const $af97ba78aac738a8$var$template = document.createElement("template");
$af97ba78aac738a8$var$template.innerHTML = /* html */ `
  <style>${$af97ba78aac738a8$var$styles}</style>

  <div class="result">
    <div class="result__actions">
      <custom-clipboard-copy></custom-clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          Share
        </button>
      </web-share>
    </div>
  </div>
`;
class $af97ba78aac738a8$var$ScanResult extends HTMLElement {
    constructor(){
        super();
        if (!this.shadowRoot) {
            const shadowRoot = this.attachShadow({
                mode: "open"
            });
            shadowRoot.appendChild($af97ba78aac738a8$var$template.content.cloneNode(true));
        }
    }
    get value() {
        return this.getAttribute("value");
    }
    set value(value) {
        this.setAttribute("value", value);
    }
    static get observedAttributes() {
        return [
            "value"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "value" && oldValue !== newValue) this.#handleValueChange(this.value);
    }
    connectedCallback() {
        this.#upgradeProperty("value");
        if (!(0, $c93ca68e362e1486$export$c37129e465f64ef0)()) {
            const webShareEl = this.shadowRoot.querySelector("web-share");
            if (webShareEl) webShareEl.hidden = true;
        }
    }
    async #handleValueChange(value) {
        const baseEl = this.shadowRoot.querySelector(".result");
        const resultActionsEl = baseEl?.querySelector(".result__actions");
        const oldResultItem = baseEl?.querySelector(".result__item");
        let resultItem;
        if (oldResultItem) oldResultItem.remove();
        try {
            const [, settings] = await (0, $252772e6b65b7db3$export$4a647155031ece)();
            new URL(value);
            resultItem = document.createElement("a");
            resultItem.href = value;
            window.requestAnimationFrame(()=>resultItem.focus());
            if (!settings?.openWebPageSameTab) {
                resultItem.setAttribute("target", "_blank");
                resultItem.setAttribute("rel", "noreferrer noopener");
            }
            if (settings?.openWebPage) resultItem.click();
        } catch  {
            resultItem = document.createElement("span");
        }
        resultItem.className = "result__item";
        resultItem.classList.toggle("result__item--no-barcode", value === (0, $6814df9ff67e3af8$export$c263bd68c6f5ce7a));
        resultItem.textContent = value;
        baseEl?.insertBefore(resultItem, resultActionsEl);
        const isValidValue = value !== (0, $6814df9ff67e3af8$export$c263bd68c6f5ce7a);
        const clipboarCopyEl = baseEl?.querySelector("custom-clipboard-copy");
        const webShareEl = baseEl?.querySelector("web-share");
        if (clipboarCopyEl && isValidValue) {
            clipboarCopyEl.setAttribute("value", value);
            clipboarCopyEl.hidden = false;
        } else {
            clipboarCopyEl.hidden = true;
            clipboarCopyEl.removeAttribute("value");
        }
        if (webShareEl && (0, $c93ca68e362e1486$export$c37129e465f64ef0)() && isValidValue) {
            webShareEl.setAttribute("share-text", value);
            webShareEl.hidden = false;
        } else {
            webShareEl.hidden = true;
            webShareEl.removeAttribute("share-text");
        }
    }
    /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */ #upgradeProperty(prop) {
        const instance = this;
        if (Object.prototype.hasOwnProperty.call(instance, prop)) {
            const value = instance[prop];
            delete instance[prop];
            instance[prop] = value;
        }
    }
    static defineCustomElement(elementName = "scan-result") {
        if (typeof window !== "undefined" && !window.customElements.get(elementName)) window.customElements.define(elementName, $af97ba78aac738a8$var$ScanResult);
    }
}
$af97ba78aac738a8$var$ScanResult.defineCustomElement();


(async function() {
    const tabGroupEl = document.querySelector("a-tab-group");
    const videoCaptureEl = document.querySelector("video-capture");
    const cameraPanel = document.getElementById("cameraPanel");
    const filePanel = document.getElementById("filePanel");
    const scanInstructionsEl = document.getElementById("scanInstructions");
    const scanBtn = document.getElementById("scanBtn");
    const dropzoneEl = document.getElementById("dropzone");
    const resizeObserverEl = document.querySelector("resize-observer");
    const scanFrameEl = document.getElementById("scanFrame");
    const torchButton = document.getElementById("torchButton");
    const globalActionsEl = document.getElementById("globalActions");
    const historyBtn = document.getElementById("historyBtn");
    const historyDialog = document.getElementById("historyDialog");
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsDialog = document.getElementById("settingsDialog");
    const settingsForm = document.forms["settings-form"];
    const cameraSelect = document.getElementById("cameraSelect");
    let shouldScan = true;
    let rafId;
    // By default the dialog elements are hidden for browsers that don't support the dialog element.
    // If the dialog element is supported, we remove the hidden attribute and the dialogs' visibility
    // is controlled by using the `showModal()` and `close()` methods.
    if ((0, $cdd676ababbe44c4$export$c694186e9d94f0)()) {
        globalActionsEl?.removeAttribute("hidden");
        historyDialog?.removeAttribute("hidden");
        settingsDialog?.removeAttribute("hidden");
    }
    const { barcodeReader: barcodeReader, barcodeFormats: barcodeFormats, barcodeReaderError: barcodeReaderError } = await (0, $f8ab580094d06bc8$export$f21d9483ebeee00a).init();
    if (barcodeReaderError) {
        const alertEl = document.getElementById("barcodeReaderError");
        shouldScan = false;
        globalActionsEl?.setAttribute("hidden", "");
        tabGroupEl?.setAttribute("hidden", "");
        alertEl?.removeAttribute("hidden");
        alertEl.textContent = barcodeReaderError?.message;
        return; // Stop the script execution as BarcodeDetector API is not supported.
    }
    videoCaptureEl.addEventListener("video-capture:video-play", handleVideoCapturePlay, {
        once: true
    });
    videoCaptureEl.addEventListener("video-capture:error", handleVideoCaptureError, {
        once: true
    });
    (0, $6933dcbb9b79a9cd$export$682e9ed90a89bb4a).defineCustomElement();
    const videoCaptureShadowRoot = videoCaptureEl?.shadowRoot;
    const videoCaptureVideoEl = videoCaptureShadowRoot?.querySelector("video");
    const videoCaptureActionsEl = videoCaptureShadowRoot?.querySelector('[part="actions-container"]');
    dropzoneEl.accept = (0, $6814df9ff67e3af8$export$63e7bed68b07a85c).join(",");
    (0, $3db046d89afd7d66$export$9d22ef9ff8e481fe)(settingsForm);
    (0, $f1abed042a7c6930$export$f6bb24723b821792)(barcodeFormats);
    (0, $4c5af2a63b39f23d$export$fa9e3380e441c420)((await (0, $252772e6b65b7db3$export$f9582a3c130d9538)())[1] || []);
    /**
   * Scans for barcodes.
   * If a barcode is detected, it stops scanning and displays the result.
   *
   * @returns {Promise<void>} - A Promise that resolves when the barcode is detected.
   */ async function scan() {
        (0, $026bdfcd1c53bf0b$export$bef1f36f5486a6a3)("Scanning...");
        scanInstructionsEl?.removeAttribute("hidden");
        try {
            const barcode = await barcodeReader.detect(videoCaptureVideoEl);
            const barcodeValue = barcode?.rawValue ?? "";
            if (!barcodeValue) throw new Error((0, $6814df9ff67e3af8$export$c263bd68c6f5ce7a));
            window.cancelAnimationFrame(rafId);
            (0, $60dfa2f9ba25b132$export$97c08f0895810b94)(cameraPanel, barcodeValue);
            (0, $4c5af2a63b39f23d$export$7a6a9d84993ff4e)(barcodeValue);
            scanInstructionsEl?.setAttribute("hidden", "");
            scanBtn?.removeAttribute("hidden");
            scanFrameEl?.setAttribute("hidden", "");
            videoCaptureActionsEl?.setAttribute("hidden", "");
            (0, $e5047ade60bce166$export$9b466d13e2031a67)();
            return;
        } catch  {
        // If no barcode is detected, the error is caught here.
        // We can ignore the error and continue scanning.
        }
        if (shouldScan) rafId = window.requestAnimationFrame(()=>scan());
    }
    /**
   * Handles the click event on the scan button.
   * It is responsible for clearing previous results and starting the scan process again.
   */ function handleScanButtonClick() {
        scanBtn?.setAttribute("hidden", "");
        scanFrameEl?.removeAttribute("hidden");
        videoCaptureActionsEl?.removeAttribute("hidden");
        (0, $60dfa2f9ba25b132$export$ad20350fbdf13c97)(cameraPanel);
        scan();
    }
    /**
   * Handles the tab show event.
   * It is responsible for starting or stopping the scan process based on the selected tab.
   *
   * @param {CustomEvent} evt - The event object.
   */ function handleTabShow(evt) {
        const tabId = evt.detail.tabId;
        const videoCaptureEl = document.querySelector("video-capture"); // Get the latest instance of video-capture element to ensure we don't use the cached one.
        if (tabId === "cameraTab") {
            shouldScan = true;
            if (!videoCaptureEl) return;
            const hasResult = cameraPanel.querySelector("scan-result") != null;
            if (!videoCaptureEl.loading && !hasResult) {
                scanFrameEl?.removeAttribute("hidden");
                videoCaptureActionsEl?.removeAttribute("hidden");
                scan();
            }
            if (typeof videoCaptureEl.startVideoStream === "function") {
                const videoDeviceId = cameraSelect?.value || undefined;
                videoCaptureEl.startVideoStream(videoDeviceId);
            }
        } else if (tabId === "fileTab") {
            shouldScan = false;
            if (videoCaptureEl != null && typeof videoCaptureEl.stopVideoStream === "function") videoCaptureEl.stopVideoStream();
            scanFrameEl?.setAttribute("hidden", "");
            videoCaptureActionsEl?.setAttribute("hidden", "");
        }
    }
    /**
   * Handles the selection of a file.
   * It is responsible for displaying the selected file in the dropzone.
   *
   * @param {File} file - The selected file.
   */ function handleFileSelect(file) {
        if (!file) return;
        const image = new Image();
        const reader = new FileReader();
        reader.onload = (evt)=>{
            const data = evt.target.result;
            image.onload = async ()=>{
                try {
                    const barcode = await barcodeReader.detect(image);
                    const barcodeValue = barcode?.rawValue ?? "";
                    if (!barcodeValue) throw new Error((0, $6814df9ff67e3af8$export$c263bd68c6f5ce7a));
                    (0, $60dfa2f9ba25b132$export$97c08f0895810b94)(filePanel, barcodeValue);
                    (0, $4c5af2a63b39f23d$export$7a6a9d84993ff4e)(barcodeValue);
                    (0, $e5047ade60bce166$export$9b466d13e2031a67)();
                } catch (err) {
                    (0, $026bdfcd1c53bf0b$export$bef1f36f5486a6a3)(err);
                    (0, $60dfa2f9ba25b132$export$97c08f0895810b94)(filePanel, (0, $6814df9ff67e3af8$export$c263bd68c6f5ce7a));
                    (0, $e5047ade60bce166$export$9b466d13e2031a67)({
                        success: false
                    });
                }
            };
            image.src = data;
            image.alt = "Image preview";
            dropzoneEl.replaceChildren();
            const preview = document.createElement("div");
            preview.className = "dropzone-preview";
            preview.setAttribute("aria-hidden", "true");
            const imageWrapper = document.createElement("div");
            imageWrapper.className = "dropzone-preview__image-wrapper";
            const fileNameWrapper = document.createElement("div");
            fileNameWrapper.className = "dropzone-preview__file-name";
            fileNameWrapper.textContent = file.name;
            imageWrapper.appendChild(image);
            preview.appendChild(imageWrapper);
            preview.appendChild(fileNameWrapper);
            dropzoneEl.prepend(preview);
        };
        reader.readAsDataURL(file);
    }
    /**
   * Handles the drop event on the dropzone.
   *
   * @param {CustomEvent} evt - The event object.
   */ function handleFileDrop(evt) {
        const file = evt.detail.acceptedFiles[0];
        handleFileSelect(file);
    }
    /**
   * Handles the resize event on the video-capture element.
   * It is responsible for resizing the scan frame based on the video element.
   */ function handleVideoCaptureResize() {
        (0, $e31ba8761bd275e4$export$1404f0e91c73fec)(videoCaptureEl.shadowRoot.querySelector("video"), scanFrameEl);
    }
    /**
   * Handles the video play event on the video-capture element.
   * It is responsible for displaying the scan frame and starting the scan process.
   * It also handles the zoom controls if the browser supports it.
   *
   * @param {CustomEvent} evt - The event object.
   */ async function handleVideoCapturePlay(evt) {
        scanFrameEl?.removeAttribute("hidden");
        (0, $e31ba8761bd275e4$export$1404f0e91c73fec)(evt.detail.video, scanFrameEl);
        scan();
        const trackSettings = evt.target.getTrackSettings();
        const trackCapabilities = evt.target.getTrackCapabilities();
        const zoomLevelEl = document.getElementById("zoomLevel");
        if (trackCapabilities?.torch) {
            torchButton?.removeAttribute("hidden");
            if (videoCaptureEl.hasAttribute("torch")) (0, $5594645da3ef4bd9$export$d1bd0b12fe0d046)({
                el: torchButton,
                isTorchOn: true
            });
        }
        if (trackSettings?.zoom && trackCapabilities?.zoom) {
            const zoomControls = document.getElementById("zoomControls");
            const minZoom = trackCapabilities?.zoom?.min || 0;
            const maxZoom = trackCapabilities?.zoom?.max || 10;
            let currentZoom = trackSettings?.zoom || 1;
            zoomControls?.removeAttribute("hidden");
            zoomLevelEl.textContent = currentZoom;
            const handleZoomControlsClick = (evt)=>{
                const zoomInBtn = evt.target.closest('[data-action="zoom-in"]');
                const zoomOutBtn = evt.target.closest('[data-action="zoom-out"]');
                if (zoomInBtn && currentZoom < maxZoom) currentZoom += 0.5;
                if (zoomOutBtn && currentZoom > minZoom) currentZoom -= 0.5;
                zoomLevelEl.textContent = currentZoom;
                videoCaptureEl.zoom = currentZoom;
            };
            zoomControls.addEventListener("click", handleZoomControlsClick);
        }
        const videoInputDevices = await (0, $6933dcbb9b79a9cd$export$682e9ed90a89bb4a).getVideoInputDevices();
        videoInputDevices.forEach((device, index)=>{
            const option = document.createElement("option");
            option.value = device.deviceId;
            option.textContent = device.label || `Camera ${index + 1}`;
            cameraSelect.appendChild(option);
        });
        if (videoInputDevices.length > 1) cameraSelect?.removeAttribute("hidden");
    }
    /**
   * Handles the error event on the video-capture element.
   * It is responsible for displaying an error message if the camera cannot be accessed or permission is denied.
   *
   * @param {CustomEvent} evt - The event object.
   */ function handleVideoCaptureError(evt) {
        const error = evt.detail.error;
        if (error.name === "NotFoundError") // If the browser cannot find all media tracks with the specified types that meet the constraints given.
        return;
        const errorMessage = error.name === "NotAllowedError" ? "Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam." : error.message;
        cameraPanel.innerHTML = /* html */ `<div class="alert alert-danger" role="alert" style="margin: 0;">${errorMessage}</div>`;
    }
    /**
   * Handles the settings button click event.
   * It is responsible for displaying the settings dialog.
   */ function handleSettingsButtonClick() {
        settingsDialog.open = true;
    }
    /**
   * Handles the change event on the settings form.
   * It is responsible for saving the settings to persistent storage and updating the settings.
   *
   * @param {Event} evt - The event object.
   */ function handleSettingsFormChange(evt) {
        const settings = {};
        const checkboxes = evt.currentTarget.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((item)=>settings[item.name] = item.checked);
        (0, $252772e6b65b7db3$export$dc86d17a64679bc7)(settings);
    }
    /**
   * Handles the click event on the history button.
   * It is responsible for displaying the history dialog.
   */ function handleHistoryButtonClick() {
        historyDialog.open = true;
    }
    /**
   * Handles the click event on the history dialog.
   * It is responsible for closing the dialog, deleting an item from the history, or emptying the history.
   *
   * @param {MouseEvent} evt - The event object.
   */ function handleHistoryDialogClick(evt) {
        const target = evt.target;
        // Handle delete action
        if (target.closest('[data-action="delete"]')) {
            const value = target.closest("li").dataset.value;
            if (window.confirm(`Delete history item ${value}?`)) {
                (0, $4c5af2a63b39f23d$export$3a61248021dae916)(value);
                return;
            }
        }
        // Handle empty history action
        if (target.closest("#emptyHistoryBtn")) {
            if (window.confirm("Empty history? This action cannot be undone.")) {
                (0, $4c5af2a63b39f23d$export$9f74b61e5d33cda2)();
                return;
            }
        }
    }
    /**
   * Handles the click event on the torch button.
   * It is responsible for toggling the torch on and off.
   *
   * @param {MouseEvent} evt - The event object.
   */ function handleTorchButtonClick(evt) {
        videoCaptureEl.torch = !videoCaptureEl.torch;
        (0, $5594645da3ef4bd9$export$d1bd0b12fe0d046)({
            el: evt.currentTarget,
            isTorchOn: videoCaptureEl.hasAttribute("torch")
        });
    }
    /**
   * Handles the change event on the camera select element.
   * It is responsible for restarting the video stream with the selected video input device id.
   *
   * @param {Event} evt - The event object.
   */ function handleCameraSelectChange(evt) {
        if (typeof videoCaptureEl.restartVideoStream !== "function") return;
        const videoDeviceId = evt.target.value || undefined;
        videoCaptureEl.restartVideoStream(videoDeviceId);
    }
    /**
   * Handles the visibility change event on the document.
   * It is responsible for stopping the scan process when the document is not visible.
   */ function handleDocumentVisibilityChange() {
        const selectedTab = tabGroupEl.querySelector("[selected]");
        const tabId = selectedTab.getAttribute("id");
        if (tabId !== "cameraTab") return;
        if (document.visibilityState === "hidden") {
            shouldScan = false;
            if (videoCaptureEl != null && typeof videoCaptureEl.stopVideoStream === "function") videoCaptureEl.stopVideoStream();
        } else {
            shouldScan = true;
            // Get the latest instance of video-capture element to ensure we don't use the cached one.
            const videoCaptureEl = document.querySelector("video-capture");
            if (!videoCaptureEl) return;
            if (!videoCaptureEl.loading && !cameraPanel.querySelector("scan-result")) scan();
            if (typeof videoCaptureEl.startVideoStream === "function") {
                const videoDeviceId = cameraSelect?.value || undefined;
                videoCaptureEl.startVideoStream(videoDeviceId);
            }
        }
    }
    /**
   * Handles the escape key press event on the document.
   * It is responsible for triggering the scan button click event if there is already a barcode detected.
   */ function handleDocumentEscapeKey() {
        const cameraTabSelected = tabGroupEl.querySelector("#cameraTab").hasAttribute("selected");
        const scanBtnVisible = !scanBtn.hidden;
        const settingsDialogOpen = settingsDialog.hasAttribute("open");
        const historyDialogOpen = historyDialog.hasAttribute("open");
        const anyDialogOpen = settingsDialogOpen || historyDialogOpen;
        if (!scanBtnVisible || !cameraTabSelected || anyDialogOpen) return;
        scanBtn.click();
    }
    /**
   * Handles the key down event on the document.
   */ function handleDocumentKeyDown(evt) {
        if (evt.key === "Escape") handleDocumentEscapeKey();
    }
    scanBtn.addEventListener("click", handleScanButtonClick);
    tabGroupEl.addEventListener("a-tab-show", (0, $1b63c430b02266a3$export$61fc7d43ac8f84b0)(handleTabShow, 250));
    dropzoneEl.addEventListener("files-dropzone-drop", handleFileDrop);
    resizeObserverEl.addEventListener("resize-observer:resize", handleVideoCaptureResize);
    settingsBtn.addEventListener("click", handleSettingsButtonClick);
    settingsForm.addEventListener("change", handleSettingsFormChange);
    historyBtn.addEventListener("click", handleHistoryButtonClick);
    historyDialog.addEventListener("click", handleHistoryDialogClick);
    torchButton.addEventListener("click", handleTorchButtonClick);
    cameraSelect.addEventListener("change", handleCameraSelectChange);
    document.addEventListener("visibilitychange", handleDocumentVisibilityChange);
    document.addEventListener("keydown", handleDocumentKeyDown);
})();

})();
//# sourceMappingURL=barcode-scanner.js.map
