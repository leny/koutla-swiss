/* leny/koutla-swiss
 *
 * ~/utils/units.js - Units utils
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

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

export const vw = unit("vw");
export const vh = unit("vh");
export const vi = unit("vi");
export const vb = unit("vb");
export const vmin = unit("vmin");
export const vmax = unit("vmax");

export const px = unit("px");

export const percent = (iValue = 0, bDecimal) =>
    unit("%")(iValue * (bDecimal ? 100 : 1));
