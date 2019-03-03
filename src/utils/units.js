/* leny/koutla-swiss
 *
 * ~/utils/units.js - Units utils
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import {selfFunction} from "../commons/utils";

const checkNumber = mValue => {
    if (isNaN(+mValue)) {
        throw new TypeError("Expect a Number");
    }
    return true;
};

const checkZero = iValue => {
    return iValue === 0 ? "0" : false;
};

const unit = sUnit => (iValue = 0) =>
    checkNumber(iValue) && (checkZero(iValue) || `${iValue}${sUnit}`);

export const rem = unit("rem");
export const em = unit("em");
export const ex = unit("ex");
export const cap = unit("cap");
export const ic = unit("ic");
export const lh = unit("lh");
export const rlh = unit("rlh");
export const ch = unit("ch");

export const vw = unit("vw");
export const vh = unit("vh");
export const vi = unit("vi");
export const vb = unit("vb");
export const vmin = unit("vmin");
export const vmax = unit("vmax");

export const cm = unit("cm");
export const mm = unit("mm");
export const Q = unit("Q");
export const inch = unit("in");
export const pc = unit("pc");
export const pt = unit("pt");

export const deg = unit("deg");
export const grad = unit("grad");
export const rad = unit("rad");
export const turn = unit("turn");

export const s = unit("s");
export const ms = unit("ms");

export const Hz = unit("Hz");
export const kHz = unit("kHz");

export const dpi = unit("dpi");
export const dpcm = unit("dpcm");
export const dppx = unit("dppx");

export const px = unit("px");

export const fr = unit("fr");

export const percent = (iValue = 0, bDecimal) =>
    unit("%")(iValue * (bDecimal ? 100 : 1));

export const calc = selfFunction("calc", " ");
export const attr = selfFunction("attr");
export const clamp = selfFunction("clamp", ", ", 3, 3);
export const min = selfFunction("min", ", ", 2);
export const max = selfFunction("max", ", ", 2);
