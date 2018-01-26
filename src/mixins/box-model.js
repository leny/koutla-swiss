/* leny/koutla-swiss
 *
 * ~/mixins/box-model.js - Box-model properties mixins
 *
 * coded by leny@flatLand!
 * started at 26/01/2018
 */

const _concatProp = (sProp, aValues) => {
    return aValues.length ? {[sProp]: aValues.join(" ")} : {};
};

export const margin = (...aArgs) => _concatProp("margin", aArgs);

export const padding = (...aArgs) => _concatProp("padding", aArgs);
