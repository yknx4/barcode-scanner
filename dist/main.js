require("@georapbox/a-tab-group/dist/a-tab-group.js");
require("@georapbox/web-share-element/dist/web-share-defined.js");
require("@georapbox/files-dropzone-element/dist/files-dropzone-defined.js");
require("@georapbox/resize-observer-element/dist/resize-observer-defined.js");
require("@georapbox/modal-element/dist/modal-element-defined.js");
var $479U0$idbkeyval = require("idb-keyval");
var $479U0$barcodedetector = require("barcode-detector");
var $479U0$georapboxclipboardcopyelementdistclipboardcopyjs = require("@georapbox/clipboard-copy-element/dist/clipboard-copy.js");
var $479U0$georapboxwebshareelementdistiswebsharesupportedjs = require("@georapbox/web-share-element/dist/is-web-share-supported.js");






const $c25e2d51ed9bb8c6$export$d726fc97fa83318d = "experimental";
const $c25e2d51ed9bb8c6$export$c263bd68c6f5ce7a = "No barcode detected";
const $c25e2d51ed9bb8c6$export$63e7bed68b07a85c = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/apng",
    "image/gif",
    "image/webp",
    "image/avif"
];



const $829260085ac28917$var$STORAGE_PREFIX = "barcode-scanner/";
const $829260085ac28917$var$SETTINGS_STORAGE_KEY = "settings";
const $829260085ac28917$var$HISTORY_STORAGE_KEY = "history";
/**
 * Gets an item from the storage.
 *
 * @param {string} key - The key to get the item from.
 * @returns {Promise<[ error: any, value: any ]>} The item and an error if occurred.
 */ const $829260085ac28917$var$getItem = async (key)=>{
    try {
        return [
            null,
            await (0, $479U0$idbkeyval.get)(key)
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
 */ const $829260085ac28917$var$setItem = async (key, data)=>{
    try {
        await (0, $479U0$idbkeyval.set)(key, data);
        return [
            null
        ];
    } catch (error) {
        return [
            error
        ];
    }
};
const $829260085ac28917$export$4a647155031ece = async ()=>{
    return $829260085ac28917$var$getItem($829260085ac28917$var$STORAGE_PREFIX + $829260085ac28917$var$SETTINGS_STORAGE_KEY);
};
const $829260085ac28917$export$dc86d17a64679bc7 = async (data)=>{
    return $829260085ac28917$var$setItem($829260085ac28917$var$STORAGE_PREFIX + $829260085ac28917$var$SETTINGS_STORAGE_KEY, data);
};
const $829260085ac28917$export$f9582a3c130d9538 = async ()=>{
    return $829260085ac28917$var$getItem($829260085ac28917$var$STORAGE_PREFIX + $829260085ac28917$var$HISTORY_STORAGE_KEY);
};
const $829260085ac28917$export$96fe1132eb44c325 = async (data)=>{
    return $829260085ac28917$var$setItem($829260085ac28917$var$STORAGE_PREFIX + $829260085ac28917$var$HISTORY_STORAGE_KEY, data);
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
 */ const $79cc817f8083081d$export$61fc7d43ac8f84b0 = (fn, wait = 0, immediate = false)=>{
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
 */ function $9c316bfdf704547d$export$bef1f36f5486a6a3(...args) {}


/**
 * Check if the dialog element is supported.
 *
 * @returns {boolean} - Returns true if the dialog element is supported.
 */ const $66769a5ad4a13019$export$c694186e9d94f0 = ()=>{
    return typeof HTMLDialogElement === "function";
};


/**
 * Renders the supported formats.
 *
 * @param {Array<string>} formats - Supported barcode formats
 */ function $d780f5eca518a3a9$export$f6bb24723b821792(formats) {
    if (!Array.isArray(formats) || formats.length === 0) return;
    const supportedFormatsEl = document.getElementById("supportedFormats");
    if (!supportedFormatsEl) return;
    supportedFormatsEl.textContent = `Supported formats: ${formats.join(", ")}`;
}



function $4ddeaed283017ba2$export$fa9e3380e441c420(data) {
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
async function $4ddeaed283017ba2$export$7a6a9d84993ff4e(item) {
    const [, settings] = await (0, $829260085ac28917$export$4a647155031ece)();
    if (!item || !settings?.addToHistory) return;
    const [getHistoryError, history = []] = await (0, $829260085ac28917$export$f9582a3c130d9538)();
    if (!getHistoryError && Array.isArray(history) && !history.find((h)=>h === item)) {
        const data = [
            ...history,
            item
        ];
        const [setHistoryError] = await (0, $829260085ac28917$export$96fe1132eb44c325)(data);
        if (!setHistoryError) $4ddeaed283017ba2$export$fa9e3380e441c420(data);
    }
}
async function $4ddeaed283017ba2$export$3a61248021dae916(item) {
    if (!item) return;
    const [getHistoryError, history = []] = await (0, $829260085ac28917$export$f9582a3c130d9538)();
    if (!getHistoryError && Array.isArray(history)) {
        const data = history.filter((el)=>el !== item);
        const [setHistoryError] = await (0, $829260085ac28917$export$96fe1132eb44c325)(data);
        if (!setHistoryError) $4ddeaed283017ba2$export$fa9e3380e441c420(data);
    }
}
async function $4ddeaed283017ba2$export$9f74b61e5d33cda2() {
    const [setHistoryError] = await (0, $829260085ac28917$export$96fe1132eb44c325)([]);
    if (!setHistoryError) $4ddeaed283017ba2$export$fa9e3380e441c420([]);
}


/**
 * Removes the scanned result from the element where it is shown.
 *
 * @param {HTMLElement} element - The element to remove the result from.
 */ function $bb22a17d67e5c98a$export$ad20350fbdf13c97(element) {
    if (!element) return;
    const scanResultEl = element.querySelector("scan-result");
    scanResultEl?.remove();
}
async function $bb22a17d67e5c98a$export$97c08f0895810b94(element, value) {
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
 */ const $edb5a03a7c96b08c$export$d6c943e433460aae = (()=>{
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
 */ async function $c418af6255de1297$export$3ca8e905da0a0ca8(duration = 0) {
    if (typeof window.navigator.vibrate !== "function") return;
    try {
        window.navigator.vibrate(duration);
    } catch  {
    // Fail silently...
    }
}


async function $b31a38d152a85e9d$export$9b466d13e2031a67(options = {}) {
    const { success: success = true } = options;
    const [, settings] = await (0, $829260085ac28917$export$4a647155031ece)();
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
    settings.beep && (0, $edb5a03a7c96b08c$export$d6c943e433460aae)(beepConfig);
    settings.vibrate && (0, $c418af6255de1297$export$3ca8e905da0a0ca8)(success ? 100 : 200);
}


/**
 * Resizes the scan frame to match the video element's dimensions.
 *
 * @param {HTMLVideoElement} videoEl - Video element
 * @param {HTMLElement} scanFrameEl - Scan frame element
 */ function $d7da5b9776bb7752$export$1404f0e91c73fec(videoEl, scanFrameEl) {
    if (!videoEl || !scanFrameEl) return;
    const rect = videoEl.getBoundingClientRect();
    scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
}




/**
 * BarcodeReader class to detect barcodes from images or videos.
 *
 * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector
 */ class $6c5b29289735cbc2$export$f21d9483ebeee00a {
    static async polyfill() {
        if (!("BarcodeDetector" in window)) try {
            await $479U0$barcodedetector;
            (0, $9c316bfdf704547d$export$bef1f36f5486a6a3)("Using BarcodeDetector polyfill.");
        } catch  {
            throw new Error("BarcodeDetector API is not supported by your browser.");
        }
        else (0, $9c316bfdf704547d$export$bef1f36f5486a6a3)("Using the native BarcodeDetector API.");
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
        return new $6c5b29289735cbc2$export$f21d9483ebeee00a(formats);
    }
    /**
   * Initialize the BarcodeReader.
   *
   * @returns {Promise<{ barcodeReader: BarcodeReader, barcodeFormats: Array<string>, barcodeReaderError: Error }>} - BarcodeReader instance, supported formats, and error
   */ static async init() {
        try {
            await $6c5b29289735cbc2$export$f21d9483ebeee00a.polyfill();
            const barcodeReader = await $6c5b29289735cbc2$export$f21d9483ebeee00a.create();
            const barcodeFormats = await $6c5b29289735cbc2$export$f21d9483ebeee00a.getSupportedFormats();
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



async function $f98c60f2f0a24728$export$9d22ef9ff8e481fe(form) {
    const [, settings = {}] = await (0, $829260085ac28917$export$4a647155031ece)();
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
 */ function $693227087b903f06$export$d1bd0b12fe0d046(options = {}) {
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
 */ const $7f32aa5d0d0e7be0$export$7d15b64cf5a3a4c4 = (value, lower, upper)=>{
    if (Number.isNaN(lower)) lower = 0;
    if (Number.isNaN(upper)) upper = 0;
    return Math.min(Math.max(value, Math.min(lower, upper)), Math.max(lower, upper));
};


const $dadbdf078437320c$var$COMPONENT_NAME = "video-capture";
const $dadbdf078437320c$var$styles = /* css */ `
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`;
const $dadbdf078437320c$var$template = document.createElement("template");
$dadbdf078437320c$var$template.innerHTML = /* html */ `
  <style>${$dadbdf078437320c$var$styles}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;
class $dadbdf078437320c$export$682e9ed90a89bb4a extends HTMLElement {
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
            shadowRoot.appendChild($dadbdf078437320c$var$template.content.cloneNode(true));
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
        if (!$dadbdf078437320c$export$682e9ed90a89bb4a.isSupported()) return this.dispatchEvent(new CustomEvent(`${$dadbdf078437320c$var$COMPONENT_NAME}:error`, {
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
            this.dispatchEvent(new CustomEvent(`${$dadbdf078437320c$var$COMPONENT_NAME}:video-play`, {
                bubbles: true,
                composed: true,
                detail: {
                    video: video
                }
            }));
        }).catch((error)=>{
            this.dispatchEvent(new CustomEvent(`${$dadbdf078437320c$var$COMPONENT_NAME}:error`, {
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
        const constraintValue = constraint === "pan" || constraint === "tilt" || constraint === "zoom" ? (0, $7f32aa5d0d0e7be0$export$7d15b64cf5a3a4c4)(Number(value), trackCapabilities[constraint]?.min || 1, trackCapabilities[constraint]?.max || 1) : value;
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
        if (!$dadbdf078437320c$export$682e9ed90a89bb4a.isSupported() || this.#stream) return;
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
            this.dispatchEvent(new CustomEvent(`${$dadbdf078437320c$var$COMPONENT_NAME}:error`, {
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
        if (!$dadbdf078437320c$export$682e9ed90a89bb4a.isSupported()) return {};
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
   */ static defineCustomElement(elementName = $dadbdf078437320c$var$COMPONENT_NAME) {
        if (typeof window !== "undefined" && !window.customElements.get(elementName)) window.customElements.define(elementName, $dadbdf078437320c$export$682e9ed90a89bb4a);
    }
}



/**
 * Extends the `ClipboardCopy` element to override the default `copy` and `success` slots,
 * in order to avoid repetition of the same markup throughout the application.
 * It also adds aditional properties and attributes, specific to the application.
 *
 * @class CustomClipboardCopy
 * @extends ClipboardCopy
 */ class $86648455d1c2167f$var$CustomClipboardCopy extends (0, $479U0$georapboxclipboardcopyelementdistclipboardcopyjs.ClipboardCopy) {
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
        if (typeof window !== "undefined" && !window.customElements.get(elementName)) window.customElements.define(elementName, $86648455d1c2167f$var$CustomClipboardCopy);
    }
}
$86648455d1c2167f$var$CustomClipboardCopy.defineCustomElement();





const $dcaaa38f598a89a8$var$styles = /* css */ `
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
const $dcaaa38f598a89a8$var$template = document.createElement("template");
$dcaaa38f598a89a8$var$template.innerHTML = /* html */ `
  <style>${$dcaaa38f598a89a8$var$styles}</style>

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
class $dcaaa38f598a89a8$var$ScanResult extends HTMLElement {
    constructor(){
        super();
        if (!this.shadowRoot) {
            const shadowRoot = this.attachShadow({
                mode: "open"
            });
            shadowRoot.appendChild($dcaaa38f598a89a8$var$template.content.cloneNode(true));
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
        if (!(0, $479U0$georapboxwebshareelementdistiswebsharesupportedjs.isWebShareSupported)()) {
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
            const [, settings] = await (0, $829260085ac28917$export$4a647155031ece)();
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
        resultItem.classList.toggle("result__item--no-barcode", value === (0, $c25e2d51ed9bb8c6$export$c263bd68c6f5ce7a));
        resultItem.textContent = value;
        baseEl?.insertBefore(resultItem, resultActionsEl);
        const isValidValue = value !== (0, $c25e2d51ed9bb8c6$export$c263bd68c6f5ce7a);
        const clipboarCopyEl = baseEl?.querySelector("custom-clipboard-copy");
        const webShareEl = baseEl?.querySelector("web-share");
        if (clipboarCopyEl && isValidValue) {
            clipboarCopyEl.setAttribute("value", value);
            clipboarCopyEl.hidden = false;
        } else {
            clipboarCopyEl.hidden = true;
            clipboarCopyEl.removeAttribute("value");
        }
        if (webShareEl && (0, $479U0$georapboxwebshareelementdistiswebsharesupportedjs.isWebShareSupported)() && isValidValue) {
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
        if (typeof window !== "undefined" && !window.customElements.get(elementName)) window.customElements.define(elementName, $dcaaa38f598a89a8$var$ScanResult);
    }
}
$dcaaa38f598a89a8$var$ScanResult.defineCustomElement();


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
    if ((0, $66769a5ad4a13019$export$c694186e9d94f0)()) {
        globalActionsEl?.removeAttribute("hidden");
        historyDialog?.removeAttribute("hidden");
        settingsDialog?.removeAttribute("hidden");
    }
    const { barcodeReader: barcodeReader, barcodeFormats: barcodeFormats, barcodeReaderError: barcodeReaderError } = await (0, $6c5b29289735cbc2$export$f21d9483ebeee00a).init();
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
    (0, $dadbdf078437320c$export$682e9ed90a89bb4a).defineCustomElement();
    const videoCaptureShadowRoot = videoCaptureEl?.shadowRoot;
    const videoCaptureVideoEl = videoCaptureShadowRoot?.querySelector("video");
    const videoCaptureActionsEl = videoCaptureShadowRoot?.querySelector('[part="actions-container"]');
    dropzoneEl.accept = (0, $c25e2d51ed9bb8c6$export$63e7bed68b07a85c).join(",");
    (0, $f98c60f2f0a24728$export$9d22ef9ff8e481fe)(settingsForm);
    (0, $d780f5eca518a3a9$export$f6bb24723b821792)(barcodeFormats);
    (0, $4ddeaed283017ba2$export$fa9e3380e441c420)((await (0, $829260085ac28917$export$f9582a3c130d9538)())[1] || []);
    /**
   * Scans for barcodes.
   * If a barcode is detected, it stops scanning and displays the result.
   *
   * @returns {Promise<void>} - A Promise that resolves when the barcode is detected.
   */ async function scan() {
        (0, $9c316bfdf704547d$export$bef1f36f5486a6a3)("Scanning...");
        scanInstructionsEl?.removeAttribute("hidden");
        try {
            const barcode = await barcodeReader.detect(videoCaptureVideoEl);
            const barcodeValue = barcode?.rawValue ?? "";
            if (!barcodeValue) throw new Error((0, $c25e2d51ed9bb8c6$export$c263bd68c6f5ce7a));
            window.cancelAnimationFrame(rafId);
            (0, $bb22a17d67e5c98a$export$97c08f0895810b94)(cameraPanel, barcodeValue);
            (0, $4ddeaed283017ba2$export$7a6a9d84993ff4e)(barcodeValue);
            scanInstructionsEl?.setAttribute("hidden", "");
            scanBtn?.removeAttribute("hidden");
            scanFrameEl?.setAttribute("hidden", "");
            videoCaptureActionsEl?.setAttribute("hidden", "");
            (0, $b31a38d152a85e9d$export$9b466d13e2031a67)();
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
        (0, $bb22a17d67e5c98a$export$ad20350fbdf13c97)(cameraPanel);
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
                    if (!barcodeValue) throw new Error((0, $c25e2d51ed9bb8c6$export$c263bd68c6f5ce7a));
                    (0, $bb22a17d67e5c98a$export$97c08f0895810b94)(filePanel, barcodeValue);
                    (0, $4ddeaed283017ba2$export$7a6a9d84993ff4e)(barcodeValue);
                    (0, $b31a38d152a85e9d$export$9b466d13e2031a67)();
                } catch (err) {
                    (0, $9c316bfdf704547d$export$bef1f36f5486a6a3)(err);
                    (0, $bb22a17d67e5c98a$export$97c08f0895810b94)(filePanel, (0, $c25e2d51ed9bb8c6$export$c263bd68c6f5ce7a));
                    (0, $b31a38d152a85e9d$export$9b466d13e2031a67)({
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
        (0, $d7da5b9776bb7752$export$1404f0e91c73fec)(videoCaptureEl.shadowRoot.querySelector("video"), scanFrameEl);
    }
    /**
   * Handles the video play event on the video-capture element.
   * It is responsible for displaying the scan frame and starting the scan process.
   * It also handles the zoom controls if the browser supports it.
   *
   * @param {CustomEvent} evt - The event object.
   */ async function handleVideoCapturePlay(evt) {
        scanFrameEl?.removeAttribute("hidden");
        (0, $d7da5b9776bb7752$export$1404f0e91c73fec)(evt.detail.video, scanFrameEl);
        scan();
        const trackSettings = evt.target.getTrackSettings();
        const trackCapabilities = evt.target.getTrackCapabilities();
        const zoomLevelEl = document.getElementById("zoomLevel");
        if (trackCapabilities?.torch) {
            torchButton?.removeAttribute("hidden");
            if (videoCaptureEl.hasAttribute("torch")) (0, $693227087b903f06$export$d1bd0b12fe0d046)({
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
        const videoInputDevices = await (0, $dadbdf078437320c$export$682e9ed90a89bb4a).getVideoInputDevices();
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
        (0, $829260085ac28917$export$dc86d17a64679bc7)(settings);
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
                (0, $4ddeaed283017ba2$export$3a61248021dae916)(value);
                return;
            }
        }
        // Handle empty history action
        if (target.closest("#emptyHistoryBtn")) {
            if (window.confirm("Empty history? This action cannot be undone.")) {
                (0, $4ddeaed283017ba2$export$9f74b61e5d33cda2)();
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
        (0, $693227087b903f06$export$d1bd0b12fe0d046)({
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
    tabGroupEl.addEventListener("a-tab-show", (0, $79cc817f8083081d$export$61fc7d43ac8f84b0)(handleTabShow, 250));
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


//# sourceMappingURL=main.js.map
