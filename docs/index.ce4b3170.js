!function(){function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e,i,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},s=n.parcelRequirea202;function a(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function l(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,a(t,e,"get"))}function c(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(t,e,i){c(t,e),e.set(t,i)}function h(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,a(t,e,"set"),i),i}function u(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function m(t,e){c(t,e),e.add(t)}null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){o[t]=e},n.parcelRequirea202=s),s.register("iE7OH",(function(e,i){var n,r;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var o={};n=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},r=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("1VDWK",(function(t,e){t.exports=s("4WKyX")(s("aNJCr").getBundleURL("8tAhj")+s("iE7OH").resolve("8yRFr")).then((()=>s("hGsRb")))})),s.register("4WKyX",(function(t,e){"use strict";var i=s("2prpb");t.exports=i((function(t){return new Promise((function(e,i){var n=document.getElementsByTagName("script");if([].concat(n).some((function(e){return e.src===t})))e();else{var r=document.createElement("link");r.href=t,r.rel="preload",r.as="script",document.head.appendChild(r);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=t,o.onerror=function(e){var n=new TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(e.message));o.onerror=o.onload=null,o.remove(),i(n)},o.onload=function(){o.onerror=o.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),s.register("2prpb",(function(t,e){"use strict";var i={},n={},r={};function o(t){switch(t){case"preload":return n;case"prefetch":return r;default:return i}}t.exports=function(t,e){return function(i){var n=o(e);return n[i]?n[i]:n[i]=t.apply(null,arguments).catch((function(t){throw delete n[i],t}))}}})),s.register("aNJCr",(function(e,i){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var r={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),r[t]=e),e}})),s("iE7OH").register(JSON.parse('{"8tAhj":"index.ce4b3170.js","8yRFr":"barcode-detector.module.2b61079d.js"}')),e={},i=function(){return A},Object.defineProperty(e,"ClipboardCopy",{get:i,set:undefined,enumerable:!0,configurable:!0});const p=document.createElement("template"),v=String.raw;p.innerHTML=v`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Copy</slot></button></slot>
`;var f,b,g=new WeakMap,w=new WeakMap,y=new WeakSet,E=new WeakSet,k=new WeakMap,T=new WeakMap,S=new WeakSet;class A extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){u(this,S,L).call(this,"value"),u(this,S,L).call(this,"from"),u(this,S,L).call(this,"disabled"),l(this,g)&&l(this,g).addEventListener("slotchange",l(this,T)),l(this,w)&&l(this,w).addEventListener("click",l(this,k))}disconnectedCallback(){l(this,g).removeEventListener("slotchange",l(this,T)),l(this,w)&&l(this,w).removeEventListener("click",l(this,k))}attributeChangedCallback(t){"disabled"===t&&l(this,w)&&(l(this,w).disabled=this.disabled,l(this,w).setAttribute("aria-disabled",this.disabled),l(this,w).part&&l(this,w).part.contains("button")&&l(this,w).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}get from(){return this.getAttribute("from")}set from(t){this.setAttribute("from",t)}static defineCustomElement(t="clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,A)}constructor(){super(),m(this,y),m(this,E),m(this,S),d(this,g,{writable:!0,value:void 0}),d(this,w,{writable:!0,value:void 0}),d(this,k,{writable:!0,value:t=>{t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("clipboard-copy:click",{bubbles:!0,composed:!0})),u(this,y,C).call(this))}}),d(this,T,{writable:!0,value:t=>{t.target&&"button"===t.target.name&&(l(this,w)&&l(this,w).removeEventListener("click",l(this,k)),h(this,w,u(this,E,x).call(this)),l(this,w)&&(l(this,w).addEventListener("click",l(this,k)),"BUTTON"===l(this,w).nodeName||l(this,w).hasAttribute("role")||l(this,w).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(p.content.cloneNode(!0))),h(this,g,this.shadowRoot.querySelector('slot[name="button"]')),h(this,w,u(this,E,x).call(this))}}async function C(){if(this.value||this.from)try{let t="";if(this.value)t=this.value;else if(this.from){const e=("getRootNode"in Element.prototype?l(this,w).getRootNode({composed:!0}):l(this,w).ownerDocument).querySelector(this.from);if(!e)return;t=e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e.value:e instanceof HTMLAnchorElement&&e.hasAttribute("href")?e.href:e.textContent}await navigator.clipboard.writeText(t),this.dispatchEvent(new CustomEvent("clipboard-copy:success",{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.dispatchEvent(new CustomEvent("clipboard-copy:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}function x(){return l(this,g)?l(this,g).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}function L(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function M(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function O(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,M(t,e,"get"))}function N(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function I(t,e,i){N(t,e),e.set(t,i)}function W(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,M(t,e,"set"),i),i}function z(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function R(t,e){N(t,e),e.add(t)}A.defineCustomElement(),f={},b=function(){return J},Object.defineProperty(f,"WebShare",{get:b,set:undefined,enumerable:!0,configurable:!0});const j=document.createElement("template"),B=String.raw;j.innerHTML=B`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var P,_,q=new WeakMap,D=new WeakMap,F=new WeakMap,U=new WeakMap,H=new WeakMap,V=new WeakSet,$=new WeakSet;class J extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){z(this,$,G).call(this,"shareUrl"),z(this,$,G).call(this,"shareTitle"),z(this,$,G).call(this,"shareText"),z(this,$,G).call(this,"shareFiles"),z(this,$,G).call(this,"disabled"),O(this,q)&&O(this,q).addEventListener("slotchange",O(this,H)),O(this,D)&&O(this,D).addEventListener("click",O(this,U))}disconnectedCallback(){O(this,q)&&O(this,q).removeEventListener("slotchange",O(this,H)),O(this,D)&&O(this,D).removeEventListener("click",O(this,U))}attributeChangedCallback(t){"disabled"===t&&O(this,D)&&(O(this,D).disabled=this.disabled,O(this,D).setAttribute("aria-disabled",this.disabled),O(this,D).part&&O(this,D).part.contains("button")&&O(this,D).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return O(this,F)}set shareFiles(t){W(this,F,t)}async share(){if(!this.disabled)try{const t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if("AbortError"===t.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,J)}constructor(){super(),R(this,V),R(this,$),I(this,q,{writable:!0,value:void 0}),I(this,D,{writable:!0,value:void 0}),I(this,F,{writable:!0,value:null}),I(this,U,{writable:!0,value:t=>{t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),I(this,H,{writable:!0,value:t=>{t.target&&"button"===t.target.name&&(O(this,D)&&O(this,D).removeEventListener("click",O(this,U)),W(this,D,z(this,V,K).call(this)),O(this,D)&&(O(this,D).addEventListener("click",O(this,U)),"BUTTON"===O(this,D).nodeName||O(this,D).hasAttribute("role")||O(this,D).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(j.content.cloneNode(!0))),W(this,q,this.shadowRoot.querySelector('slot[name="button"]')),W(this,D,z(this,V,K).call(this))}}function K(){return O(this,q)?O(this,q).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}function G(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function X(t={}){return t={files:null,...t},Array.isArray(t.files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t.files):"share"in navigator}function Q(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function Y(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,Q(t,e,"get"))}function Z(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function tt(t,e,i){Z(t,e),e.set(t,i)}function et(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,Q(t,e,"set"),i),i}function it(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function nt(t,e){Z(t,e),e.add(t)}J.defineCustomElement(),P={},_=function(){return mt},Object.defineProperty(P,"ResizeObserverElement",{get:_,set:undefined,enumerable:!0,configurable:!0});const rt=document.createElement("template"),ot=String.raw;rt.innerHTML=ot`
  <style>:host { display: contents; }</style>
  <slot></slot>
`;var st=new WeakMap,at=new WeakMap,lt=new WeakMap,ct=new WeakSet,dt=new WeakSet,ht=new WeakMap,ut=new WeakSet;class mt extends HTMLElement{static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&(this.disabled?it(this,dt,vt).call(this):it(this,ct,pt).call(this))}connectedCallback(){it(this,ut,ft).call(this,"disabled"),"ResizeObserver"in window&&(et(this,at,new ResizeObserver((t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}))),this.disabled||it(this,ct,pt).call(this),Y(this,st).addEventListener("slotchange",Y(this,ht)))}disconnectedCallback(){it(this,dt,vt).call(this),Y(this,st).removeEventListener("slotchange",Y(this,ht))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}static defineCustomElement(t="resize-observer"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,mt)}constructor(){super(),nt(this,ct),nt(this,dt),nt(this,ut),tt(this,st,{writable:!0,value:void 0}),tt(this,at,{writable:!0,value:void 0}),tt(this,lt,{writable:!0,value:void 0}),tt(this,ht,{writable:!0,value:()=>{this.disabled||it(this,ct,pt).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(rt.content.cloneNode(!0))),et(this,st,this.shadowRoot.querySelector("slot")),et(this,at,null),et(this,lt,[])}}function pt(){Y(this,st)&&Y(this,at)&&(Y(this,lt).forEach((t=>Y(this,at).unobserve(t))),et(this,lt,[]),Y(this,st).assignedElements().forEach((t=>{Y(this,at).observe(t),Y(this,lt).push(t)})))}function vt(){Y(this,at)&&Y(this,at).disconnect()}function ft(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function bt(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function gt(t,e){return i=t,(n=bt(t,e,"get")).get?n.get.call(i):n.value;var i,n}function wt(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function yt(t,e,i){wt(t,e),e.set(t,i)}function Et(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,bt(t,e,"set"),i),i}function kt(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function Tt(t,e){wt(t,e),e.add(t)}mt.defineCustomElement();const St=document.createElement("template"),At=String.raw;St.innerHTML=At`
  <style>
    :host { all: initial; display: block; box-sizing: border-box; }
    :host *, :host *::before, :host *::after { box-sizing: inherit; }
    :host([hidden]), [hidden] { display: none; }
    :host video { display: block; }
    :host #output:empty { display: none; }
  </style>
  <video part="video" playsinline></video>
  <canvas hidden></canvas>
  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>
    <slot name="facing-mode-button" hidden>
      <button part="facing-mode-button" type="button">
        <slot name="facing-mode-button-content">Toggle facing mode</slot>
      </button>
    </slot>
    <slot name="actions"></slot>
  </div>
  <slot></slot>
  <div part="output-container" id="output"></div>
`;var Ct=new WeakMap,xt=new WeakMap,Lt=new WeakMap,Mt=new WeakMap,Ot=new WeakMap,Nt=new WeakMap,It=new WeakMap,Wt=new WeakMap,zt=new WeakMap,Rt=new WeakMap,jt=new WeakSet,Bt=new WeakSet,Pt=new WeakMap,_t=new WeakMap,qt=new WeakMap,Dt=new WeakSet,Ft=new WeakSet,Ut=new WeakMap,Ht=new WeakMap,Vt=new WeakSet,$t=new WeakSet,Jt=new WeakSet;class Kt extends HTMLElement{connectedCallback(){var t,e,i,n,r;if(kt(this,Jt,ee).call(this,"noImage"),kt(this,Jt,ee).call(this,"facingMode"),kt(this,Jt,ee).call(this,"cameraResolution"),kt(this,Jt,ee).call(this,"pan"),kt(this,Jt,ee).call(this,"tilt"),kt(this,Jt,ee).call(this,"zoom"),Et(this,Ct,!0),Et(this,Mt,this.shadowRoot.querySelector("canvas")),Et(this,Ot,this.shadowRoot.getElementById("output")),Et(this,Nt,this.shadowRoot.querySelector("video")),Et(this,It,this.shadowRoot.querySelector('slot[name="capture-button"]')),Et(this,Wt,kt(this,$t,te).call(this)),Et(this,zt,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),Et(this,Rt,kt(this,Vt,Zt).call(this)),null===(t=gt(this,Nt))||void 0===t||t.addEventListener("loadedmetadata",gt(this,qt)),null===(e=gt(this,It))||void 0===e||e.addEventListener("slotchange",gt(this,Ut)),null===(i=gt(this,Wt))||void 0===i||i.addEventListener("click",gt(this,_t)),null===(n=gt(this,zt))||void 0===n||n.addEventListener("slotchange",gt(this,Ht)),null===(r=gt(this,Rt))||void 0===r||r.addEventListener("click",gt(this,Pt)),!Kt.isSupported())return this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));kt(this,Bt,Xt).call(this)}disconnectedCallback(){var t,e,i,n,r;kt(this,jt,Gt).call(this),null===(t=gt(this,Rt))||void 0===t||t.removeEventListener("click",gt(this,Pt)),null===(e=gt(this,Wt))||void 0===e||e.removeEventListener("click",gt(this,_t)),null===(i=gt(this,Nt))||void 0===i||i.removeEventListener("canplay",gt(this,qt)),null===(n=gt(this,It))||void 0===n||n.removeEventListener("slotchange",gt(this,Ut)),null===(r=gt(this,zt))||void 0===r||r.removeEventListener("slotchange",gt(this,Ht))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(t,e,i){var n,r,o,s;if(!gt(this,Ct))return;const a=this.getTrackCapabilities(),l=this.getTrackSettings();if("no-image"===t&&e!==i&&kt(this,Dt,Qt).call(this),"facing-mode"===t&&e!==i&&(null===(n=gt(this,xt))||void 0===n?void 0:n.facingMode)){const t=["user","environment"].includes(this.facingMode);(null==l?void 0:l.facingMode)&&t&&(kt(this,jt,Gt).call(this),kt(this,Bt,Xt).call(this))}if("camera-resolution"===t&&e!==i){var c,d,h,u;const[t,e]=this.cameraResolution.split("x").map((t=>Number(t))),i=t>=(null==a||null===(c=a.width)||void 0===c?void 0:c.min)&&t<=(null==a||null===(d=a.width)||void 0===d?void 0:d.max),n=e>=(null==a||null===(h=a.height)||void 0===h?void 0:h.min)&&e<=(null==a||null===(u=a.height)||void 0===u?void 0:u.max);(null==l?void 0:l.width)&&(null==l?void 0:l.height)&&i&&n&&(kt(this,jt,Gt).call(this),kt(this,Bt,Xt).call(this))}if("pan"===t&&e!==i&&(null===(r=gt(this,xt))||void 0===r?void 0:r.pan)){var m,p;const t=this.pan>=(null==a||null===(m=a.pan)||void 0===m?void 0:m.min)&&this.pan<=(null==a||null===(p=a.pan)||void 0===p?void 0:p.max);(null==l?void 0:l.pan)&&t&&kt(this,Ft,Yt).call(this,"pan",this.pan)}if("tilt"===t&&e!==i&&(null===(o=gt(this,xt))||void 0===o?void 0:o.tilt)){var v,f;const t=this.tilt>=(null==a||null===(v=a.tilt)||void 0===v?void 0:v.min)&&this.tilt<=(null==a||null===(f=a.tilt)||void 0===f?void 0:f.max);(null==l?void 0:l.tilt)&&t&&kt(this,Ft,Yt).call(this,"tilt",this.tilt)}if("zoom"===t&&e!==i&&(null===(s=gt(this,xt))||void 0===s?void 0:s.zoom)){var b,g;const t=this.zoom>=(null==a||null===(b=a.zoom)||void 0===b?void 0:b.min)&&this.zoom<=(null==a||null===(g=a.zoom)||void 0===g?void 0:g.max);(null==l?void 0:l.zoom)&&t&&kt(this,Ft,Yt).call(this,"zoom",this.zoom)}}get noImage(){return this.hasAttribute("no-image")}set noImage(t){t?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||null}set pan(t){this.setAttribute("pan",Number(t)||null)}get tilt(){return Number(this.getAttribute("tilt"))||null}set tilt(t){this.setAttribute("tilt",Number(t)||null)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){this.setAttribute("zoom",Number(t)||null)}get loading(){return this.hasAttribute("loading")}capture(){if(!this.loading)try{const e=gt(this,Mt).getContext("2d"),i=gt(this,Nt).videoWidth,n=gt(this,Nt).videoHeight;gt(this,Mt).width=i,gt(this,Mt).height=n,e.drawImage(gt(this,Nt),0,0,i,n);const r=gt(this,Mt).toDataURL("image/png");if("string"==typeof r&&r.includes("data:image")){if(!this.noImage){var t;const e=new Image;e.src=r,e.width=i,e.height=n,e.part="output-image",kt(this,Dt,Qt).call(this),null===(t=gt(this,Ot))||void 0===t||t.appendChild(e)}this.dispatchEvent(new CustomEvent("capture-photo:success",{bubbles:!0,composed:!0,detail:{dataURI:r,width:i,height:n}}))}}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return Kt.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!gt(this,Lt))return{};const[t]=gt(this,Lt).getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!gt(this,Lt))return{};const[t]=gt(this,Lt).getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static isSupported(){var t;return Boolean(null===(t=navigator.mediaDevices)||void 0===t?void 0:t.getUserMedia)}static defineCustomElement(t="capture-photo"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,Kt)}constructor(){super(),Tt(this,jt),Tt(this,Bt),Tt(this,Dt),Tt(this,Ft),Tt(this,Vt),Tt(this,$t),Tt(this,Jt),yt(this,Ct,{writable:!0,value:void 0}),yt(this,xt,{writable:!0,value:void 0}),yt(this,Lt,{writable:!0,value:void 0}),yt(this,Mt,{writable:!0,value:void 0}),yt(this,Ot,{writable:!0,value:void 0}),yt(this,Nt,{writable:!0,value:void 0}),yt(this,It,{writable:!0,value:void 0}),yt(this,Wt,{writable:!0,value:void 0}),yt(this,zt,{writable:!0,value:void 0}),yt(this,Rt,{writable:!0,value:void 0}),yt(this,Pt,{writable:!0,value:t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),yt(this,_t,{writable:!0,value:t=>{t.preventDefault(),this.capture()}}),yt(this,qt,{writable:!0,value:t=>{const e=t.target;e.play().then((()=>{this.dispatchEvent(new CustomEvent("capture-photo:video-play",{bubbles:!0,composed:!0,detail:{video:e}}))})).catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))})).finally((()=>{this.removeAttribute("loading")}))}}),yt(this,Ut,{writable:!0,value:t=>{var e,i;"capture-button"===(null===(e=t.target)||void 0===e?void 0:e.name)&&(null===(i=gt(this,Wt))||void 0===i||i.removeEventListener("click",gt(this,_t)),Et(this,Wt,kt(this,$t,te).call(this)),gt(this,Wt)&&(gt(this,Wt).addEventListener("click",gt(this,_t)),"BUTTON"===gt(this,Wt).nodeName||gt(this,Wt).hasAttribute("role")||gt(this,Wt).setAttribute("role","button")))}}),yt(this,Ht,{writable:!0,value:t=>{var e,i;"facing-mode-button"===(null===(e=t.target)||void 0===e?void 0:e.name)&&(null===(i=gt(this,Rt))||void 0===i||i.removeEventListener("click",gt(this,Pt)),Et(this,Rt,kt(this,Vt,Zt).call(this)),gt(this,Rt)&&(gt(this,Rt).addEventListener("click",gt(this,Pt)),"BUTTON"===gt(this,Rt).nodeName||gt(this,Rt).hasAttribute("role")||gt(this,Rt).setAttribute("role","button")))}}),Et(this,Ct,!1),Et(this,xt,this.getSupportedConstraints()),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(St.content.cloneNode(!0)))}}function Gt(){if(!gt(this,Nt)||!gt(this,Lt))return;const[t]=gt(this,Lt).getVideoTracks();null==t||t.stop(),gt(this,Nt).srcObject=null,Et(this,Lt,null)}async function Xt(){if(!Kt.isSupported())return;this.setAttribute("loading","");const t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution){const[e,i]=this.cameraResolution.split("x").map((t=>Number(t)));t.video.width=e,t.video.height=i}try{var e;Et(this,Lt,await navigator.mediaDevices.getUserMedia(t)),gt(this,Nt).srcObject=gt(this,Lt),kt(this,Ft,Yt).call(this,"pan",this.pan),kt(this,Ft,Yt).call(this,"tilt",this.tilt),kt(this,Ft,Yt).call(this,"zoom",this.zoom),(null===(e=this.getTrackSettings())||void 0===e?void 0:e.facingMode)&&(gt(this,zt).hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}function Qt(){gt(this,Ot)&&Array.from(gt(this,Ot).childNodes).forEach((t=>t.remove()))}function Yt(t,e){var i,n,r;if(!gt(this,Lt)||!t||!e)return;const[o]=gt(this,Lt).getVideoTracks(),s=this.getTrackCapabilities();var a,l,c;(null===(i=this.getTrackSettings())||void 0===i?void 0:i[t])&&o.applyConstraints({advanced:[{[t]:(a=Number(e),l=null==s||null===(n=s[t])||void 0===n?void 0:n.min,c=null==s||null===(r=s[t])||void 0===r?void 0:r.max,Number.isNaN(l)&&(l=0),Number.isNaN(c)&&(c=0),Math.min(Math.max(a,Math.min(l,c)),Math.max(l,c)))}]})}function Zt(){return gt(this,zt)?gt(this,zt).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))):null}function te(){return gt(this,It)?gt(this,It).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))):null}function ee(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}
/*!
 * @georapbox/web-storage
 * WebStorage is a JavaScript library that improves the way you work with localStorage or sessionStorage using a simple, localStorage-like API. It allows developers to store many types of data instead of just strings.
 *
 * @version v2.1.0
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/web-storage#readme
 * @repository https://github.com/georapbox/web-storage.git
 * @license MIT
 */function ie(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ne(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function re(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function oe(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function se(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?oe(Object(i),!0).forEach((function(e){re(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):oe(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function ae(t){return String.prototype.trim?t.trim():t.replace(/(^\s*|\s*$)/g,"")}function le(t,e){return 0===t.indexOf(e)?t.slice(e.length):t}function ce(t){return null!=t&&("string"==typeof t||"[object String]"===Object.prototype.toString.call(t))}function de(t){var e=Object.prototype.toString.call(t);return"[object AsyncFunction]"===e||"[object Function]"===e||"[object GeneratorFunction]"===e}function he(t,e){var i=t._driver;Object.keys(i).forEach((function(n){(function(t,e){var i,n;return i=e,n=t._keyPrefix,i.substr(0,n.length)===n})(t,n)&&e(n,i[n])}))}var ue=function(){},me={getItem:ue,setItem:ue,removeItem:ue};function pe(t){try{var e=window[t],i="__web-storage__test";e.setItem(i,"test"),e.getItem(i),e.removeItem(i)}catch(t){return!1}return!0}function ve(t){return pe(t)?window[t]:(console&&console.warn&&console.warn("WebStorage failed to create sync storage; falling back to noop storage."),me)}var fe=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ie(this,t);var i={driver:"localStorage",keyPrefix:"web-storage/"};if("localStorage"!==(e=se(se({},i),e)).driver&&"sessionStorage"!==e.driver)throw new Error('The "driver" option must be one of "localStorage" or "sessionStorage".');if(!ce(e.keyPrefix))throw new TypeError('The "keyPrefix" option must be a string.');this._storageType=e.driver,this._driver=ve(e.driver),this._keyPrefix=ae(e.keyPrefix)}var e;return e=[{key:"getItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(!ce(t))throw new TypeError("Failed to execute 'getItem' on 'Storage': The first argument must be a string.");var i=null;try{var n=this._driver.getItem(this._keyPrefix+t),r=JSON.parse(n);i=r}catch(t){e(t)}return i}},{key:"setItem",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};if(!ce(t))throw new TypeError("Failed to execute 'setItem' on 'Storage': The first argument must be a string.");t=this._keyPrefix+t,e=null==e||de(e)?null:e;try{this._driver.setItem(t,JSON.stringify(e))}catch(t){i(t)}}},{key:"removeItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(!ce(t))throw new TypeError("Failed to execute 'removeItem' on 'Storage': The first argument must be a string.");try{this._driver.removeItem(this._keyPrefix+t)}catch(t){e(t)}}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};try{he(this,this._driver.removeItem.bind(this._driver))}catch(e){t(e)}}},{key:"keys",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=[];try{return he(this,(function(e){return i.push(le(e,t._keyPrefix))})),i}catch(t){e(t)}}},{key:"length",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};try{return this.keys().length}catch(e){t(e)}}},{key:"iterate",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(!de(t))throw new TypeError("Failed to iterate on 'Storage': 'iteratorCallback' must be a function.");try{he(this,(function(i,n){var r=le(i,e._keyPrefix),o=JSON.parse(n);t.call(e,o,r)}))}catch(t){i(t)}}}],ne(t.prototype,e),t}();fe.isAvailable=function(t){return pe(t)},fe.createInstance=function(t){return new fe(t)};const be=fe.createInstance({driver:"localStorage",keyPrefix:"barcode-scanner/"}),ge="settings",we=(t,e)=>{if("function"!=typeof t)throw new TypeError("Expected a function for first argument");if("number"!=typeof e)throw new TypeError("Expected a number for second argument");return(...i)=>{const n=e>0?e:0;return t(...i.slice(0,n))}},ye=document.getElementById("toastContainer"),Ee=t=>{const e=t.currentTarget;e.removeEventListener("click",Ee),ye.removeChild(e.parentNode)},ke=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");const i=`\n    ${t}\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  `,n=document.createElement("div");n.className=`alert alert-${e} alert-dismissible text-break`,n.innerHTML=i,n.querySelector("button").addEventListener("click",Ee),ye.appendChild(n),setTimeout((()=>n.classList.add("show")),100)};!async function(){const t=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],e=document.querySelector("capture-photo"),i=document.getElementById("cameraResults"),n=document.getElementById("fileResults"),r=document.getElementById("scanInstructions"),o=document.getElementById("scanBtn"),a=document.getElementById("scanMethod"),l=document.getElementById("fileInput"),c=document.getElementById("dropzone"),d=document.getElementById("cameraView"),h=document.getElementById("fileView"),u=document.querySelector("resize-observer"),m=document.getElementById("scanFrame"),p=document.getElementById("settingsBtn"),v=document.getElementById("settingsDialog"),f=document.forms["settings-form"],b=document.getElementById("copyIconTemplate"),g=document.getElementById("copiedIconTemplate");let w,y,E=!0;if(document.querySelectorAll("clipboard-copy").forEach((t=>{t.querySelector("button").appendChild(b.content.cloneNode(!0))})),X()||document.querySelectorAll("web-share").forEach((t=>{t.hidden=!0,t.disabled=!0})),!("BarcodeDetector"in window))try{window.BarcodeDetector=(await s("1VDWK")).default}catch(t){return d.hidden=!0,h.hidden=!0,a.hidden=!0,p.hidden=!0,ke("BarcodeDetector API is not supported by your browser.","danger")}const k=(()=>{const t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return(e,i,n,r,o)=>{var s;if(!(null===(s=be.getItem(ge))||void 0===s?void 0:s.beep))return;const a=t.createOscillator(),l=t.createGain();a.connect(l),l.connect(t.destination),n&&(l.gain.value=n),i&&(a.frequency.value=i),r&&(a.type=r),"function"==typeof o&&(a.onended=o),a.start(t.currentTime),a.stop(t.currentTime+(e||500)/1e3)}})();function T(t=100){var e;if("function"==typeof window.navigator.vibrate&&(null===(e=be.getItem(ge))||void 0===e?void 0:e.vibrate))try{window.navigator.vibrate(t)}catch{}}function S(t){if(!t)return;const e=t.getBoundingClientRect();m.style.cssText=`width: ${e.width}px; height: ${e.height}px`}e.addEventListener("capture-photo:video-play",(t=>{m.hidden=!1,S(t.detail.video),N();const i=e.getTrackSettings(),n=e.getTrackCapabilities(),r=document.getElementById("zoomLevel");if((null==i?void 0:i.zoom)&&(null==n?void 0:n.zoom)){var o,s;const t=document.getElementById("zoomControls"),a=(null==n||null===(o=n.zoom)||void 0===o?void 0:o.min)||0,l=(null==n||null===(s=n.zoom)||void 0===s?void 0:s.max)||10;let c=(null==i?void 0:i.zoom)||1;t.hidden=!1,r.textContent=c,t.addEventListener("click",(t=>{const i=t.target.closest('[data-action="zoom-in"]'),n=t.target.closest('[data-action="zoom-out"]');i&&c<l&&(c+=.5),n&&c>a&&(c-=.5),r.textContent=c,e.zoom=c}))}}),{once:!0}),Kt.defineCustomElement(),l.accept=t.join(",");const A=e.shadowRoot.querySelector("video"),C=await window.BarcodeDetector.getSupportedFormats(),x=new window.BarcodeDetector({formats:C});function L(t){t.querySelectorAll(".results__item").forEach((t=>t.remove()))}function M(t,e){if(!t)return;let i;try{var n;new URL(t),i=document.createElement("a"),i.href=t,i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener"),(null===(n=be.getItem(ge))||void 0===n?void 0:n.openWebPage)&&i.click()}catch(t){i=document.createElement("span")}i.className="results__item",i.textContent=t,e.insertBefore(i,e.querySelector(".results__actions"));const r=e.querySelector("clipboard-copy"),o=e.querySelector("web-share"),s="-"!==t;r&&(r.disabled=!s,r.hidden=!s),o&&X()&&(o.disabled=!s,o.hidden=!s,s?o.setAttribute("share-text",t):o.removeAttribute("share-text"))}function O(t){return new Promise(((e,i)=>{x.detect(t).then((t=>{Array.isArray(t)&&t.length>0?e(t[0]):i({message:"Could not detect barcode from provided source."})})).catch((t=>{i(t)}))}))}async function N(){r.hidden=!1;try{const t=await O(A);return window.cancelAnimationFrame(w),L(i),M(t.rawValue,i),r.hidden=!0,o.hidden=!1,m.hidden=!0,k(200,860,.03,"square"),void T()}catch(t){}E&&(w=window.requestAnimationFrame(we(N,0)))}function I(t){const e=new Image,i=new FileReader;i.addEventListener("load",(t=>{const i=t.target.result;e.addEventListener("load",(async()=>{try{const t=await O(e);L(n),M(t.rawValue,n),k(200,860,.03,"square"),T()}catch(t){L(n),M("-",n)}})),e.src=i,c.querySelectorAll("img").forEach((t=>t.remove())),c.prepend(e)})),t&&i.readAsDataURL(t)}Object.entries(be.getItem(ge)||{}).forEach((([t,e])=>{const i=f.querySelector(`[name="${t}"]`);i&&(i.checked=e)})),function(t,e){if(!Array.isArray(t)||0===t.length)return;const i=document.createElement("p");i.className="supported-formats",i.textContent=`Supported formats: ${t.join(", ")}`,e.appendChild(i)}(C,v),document.addEventListener("capture-photo:error",(t=>{d.hidden=!0,h.hidden=!1,a.hidden=!0;const e=t.detail.error;if("NotFoundError"===e.name)return;const i="NotAllowedError"===e.name?"Permission to use webcam was denied. Reload the page to give appropriate permissions to webcam.":e.message;ke(i,"danger")}),{once:!0}),o.addEventListener("click",(()=>{o.hidden=!0,m.hidden=!1,L(i),N()})),a.addEventListener("change",(t=>{const n=t.target.value;[d,h].forEach((t=>{t.hidden=t.id!==n})),"cameraView"===n&&(E=!0,d.hidden||e.loading||i.querySelector(".results__item")||N()),"fileView"===n&&(E=!1)})),l.addEventListener("change",(t=>{I(t.target.files[0])})),c.addEventListener("dragover",(t=>{t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy",t.target.classList.add("dropzone--dragover")})),c.addEventListener("dragleave",(t=>{t.target.classList.remove("dropzone--dragover")})),c.addEventListener("drop",(e=>{e.stopPropagation(),e.preventDefault(),e.target.classList.remove("dropzone--dragover");const i=e.dataTransfer.files,[n]=i;n&&t.includes(n.type)&&(l.value=l.defaultValue,I(n))})),c.addEventListener("click",(()=>{l.click()})),c.addEventListener("keyup",(t=>{" "!==t.key&&"Enter"!==t.key||l.click()})),u.addEventListener("resize-observer:resize",(()=>{S(e.shadowRoot.querySelector("video"))})),p.addEventListener("click",(()=>{v.showModal()})),v.addEventListener("click",(t=>{t.target===t.currentTarget&&v.close()})),f.addEventListener("change",(t=>{const e={};t.currentTarget.querySelectorAll('input[type="checkbox"]').forEach((t=>e[t.name]=t.checked)),be.setItem(ge,e)})),document.addEventListener("clipboard-copy:success",(t=>{const e=t.target.querySelector('button[slot="button"]');e&&(e.replaceChildren(),e.appendChild(g.content.cloneNode(!0)),clearTimeout(y),y=setTimeout((()=>{e.replaceChildren(),e.appendChild(b.content.cloneNode(!0))}),1500))}))}()}();
//# sourceMappingURL=index.ce4b3170.js.map