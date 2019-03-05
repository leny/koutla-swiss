/* leny/koutla-swiss
 *
 * ~/utils/units/index.js - Units utils
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import {selfFunction} from "../../commons/utils";

const checkNumber = mValue => {
    if (isNaN(+mValue)) {
        throw new TypeError("Expect a Number");
    }
    return true;
};

const checkZero = value => {
    return value === 0 ? "0" : false;
};

const unit = suffix => (value = 0) =>
    checkNumber(value) && (checkZero(value) || `${value}${suffix}`);

/**
 * Return the value with the rem suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]rem"`
 */
export const rem = value => unit("rem")(value);

/**
 * Return the value with the em suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]em"`
 */
export const em = value => unit("em")(value);

/**
 * Return the value with the ex suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]ex"`
 */
export const ex = value => unit("ex")(value);

/**
 * Return the value with the cap suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]cap"`
 */
export const cap = value => unit("cap")(value);

/**
 * Return the value with the ic suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]ic"`
 */
export const ic = value => unit("ic")(value);

/**
 * Return the value with the lh suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]lh"`
 */
export const lh = value => unit("lh")(value);

/**
 * Return the value with the rlh suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]rlh"`
 */
export const rlh = value => unit("rlh")(value);

/**
 * Return the value with the ch suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]ch"`
 */
export const ch = value => unit("ch")(value);

/**
 * Return the value with the vw suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]vw"`
 */
export const vw = value => unit("vw")(value);

/**
 * Return the value with the vh suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]vh"`
 */
export const vh = value => unit("vh")(value);

/**
 * Return the value with the vi suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]vi"`
 */
export const vi = value => unit("vi")(value);

/**
 * Return the value with the vb suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]vb"`
 */
export const vb = value => unit("vb")(value);

/**
 * Return the value with the vmin suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]vmin"`
 */
export const vmin = value => unit("vmin")(value);

/**
 * Return the value with the vmax suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]vmax"`
 */
export const vmax = value => unit("vmax")(value);

/**
 * Return the value with the cm suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]cm"`
 */
export const cm = value => unit("cm")(value);

/**
 * Return the value with the mm suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]mm"`
 */
export const mm = value => unit("mm")(value);

/**
 * Return the value with the Q suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]Q"`
 */
export const Q = value => unit("Q")(value);

/**
 * Return the value with the in suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]in"`
 */
export const inch = value => unit("in")(value);

/**
 * Return the value with the pc suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]pc"`
 */
export const pc = value => unit("pc")(value);

/**
 * Return the value with the pt suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]pt"`
 */
export const pt = value => unit("pt")(value);

/**
 * Return the value with the deg suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]deg"`
 */
export const deg = value => unit("deg")(value);

/**
 * Return the value with the grad suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]grad"`
 */
export const grad = value => unit("grad")(value);

/**
 * Return the value with the rad suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]rad"`
 */
export const rad = value => unit("rad")(value);

/**
 * Return the value with the turn suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]turn"`
 */
export const turn = value => unit("turn")(value);

/**
 * Return the value with the s suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]s"`
 */
export const s = value => unit("s")(value);

/**
 * Return the value with the ms suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]ms"`
 */
export const ms = value => unit("ms")(value);

/**
 * Return the value with the Hz suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]Hz"`
 */
export const Hz = value => unit("Hz")(value);

/**
 * Return the value with the kHz suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]kHz"`
 */
export const kHz = value => unit("kHz")(value);

/**
 * Return the value with the dpi suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]dpi"`
 */
export const dpi = value => unit("dpi")(value);

/**
 * Return the value with the dpcm suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]dpcm"`
 */
export const dpcm = value => unit("dpcm")(value);

/**
 * Return the value with the dppx suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]dppx"`
 */
export const dppx = value => unit("dppx")(value);

/**
 * Return the value with the px suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]px"`
 */
export const px = value => unit("px")(value);

/**
 * Return the value with the fr suffix
 * @abstract
 * @param {number} value
 * @return {string} `"[value]fr"`
 */
export const fr = value => unit("fr")(value);

/**
 * Return the value with the percent suffix
 * @abstract
 * @param {number} value
 * @param {boolean} withDecimal treat the value as a decimal value between 0 and 1
 * @return {string} `"[value]%"`
 */
export const percent = (value = 0, withDecimal) =>
    unit("%")(value * (withDecimal ? 100 : 1));

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"calc(arg1, arg2, arg...)"`
 */
export const calc = (...args) => selfFunction("calc", " ")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"attr(arg1, arg2, arg...)"`
 */
export const attr = (...args) => selfFunction("attr")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"clamp(arg1, arg2, arg...)"`
 */
export const clamp = (...args) => selfFunction("clamp", ", ", 3, 3)(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"min(arg1, arg2, arg...)"`
 */
export const min = (...args) => selfFunction("min", ", ", 2)(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"max(arg1, arg2, arg...)"`
 */
export const max = (...args) => selfFunction("max", ", ", 2)(...args);
