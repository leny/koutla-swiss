/* leny/koutla-swiss
 *
 * /src/commons/utils.js - Common utils for koutla
 *
 * coded by leny@flatLand!
 * started at 09/02/2018
 */

export const concatProp = (sProp, aValues) => {
    return aValues.length ? {[sProp]: aValues.join(" ")} : {};
};
