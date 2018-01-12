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

const unit = (sUnit, iValue = 0) =>
    checkNumber(iValue) && (checkZero(iValue) || `${iValue}${sUnit}`);

export const rem = iValue => unit("rem", iValue);
export const em = iValue => unit("em", iValue);
export const ex = iValue => unit("ex", iValue);

export const vw = iValue => unit("vw", iValue);
export const vh = iValue => unit("vh", iValue);
export const vmin = iValue => unit("vmin", iValue);
export const vmax = iValue => unit("vmax", iValue);

export const px = (iValue = 0) => unit("px", Math.floor(iValue));
