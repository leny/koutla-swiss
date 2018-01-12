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
