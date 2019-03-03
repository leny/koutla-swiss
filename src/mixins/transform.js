/* leny/koutla-swiss
 *
 * ~/mixins/transform.js - Transform Mixins
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import {concatProp, selfFunction} from "../commons/utils";

export const transform = (...aArgs) => {
    if (!aArgs.length) {
        return {transform: "none"};
    }
    return concatProp("transform", aArgs);
};

const guardedSelfFunction = (sName, aArgs) => {
    if (!aArgs.length) {
        throw new TypeError("Expect at least one argument");
    }
    return selfFunction(sName, aArgs);
};

export const matrix = (...aArgs) => guardedSelfFunction("matrix", aArgs);
export const matrix3d = (...aArgs) => guardedSelfFunction("matrix3d", aArgs);
export const perspective = (...aArgs) =>
    guardedSelfFunction("perspective", aArgs);
export const rotate = (...aArgs) => guardedSelfFunction("rotate", aArgs);
export const rotate3d = (...aArgs) => guardedSelfFunction("rotate3d", aArgs);
export const rotateX = (...aArgs) => guardedSelfFunction("rotateX", aArgs);
export const rotateY = (...aArgs) => guardedSelfFunction("rotateY", aArgs);
export const rotateZ = (...aArgs) => guardedSelfFunction("rotateZ", aArgs);
export const scale = (...aArgs) => guardedSelfFunction("scale", aArgs);
export const scale3d = (...aArgs) => guardedSelfFunction("scale3d", aArgs);
export const scaleX = (...aArgs) => guardedSelfFunction("scaleX", aArgs);
export const scaleY = (...aArgs) => guardedSelfFunction("scaleY", aArgs);
export const scaleZ = (...aArgs) => guardedSelfFunction("scaleZ", aArgs);
export const skew = (...aArgs) => guardedSelfFunction("skew", aArgs);
export const skewX = (...aArgs) => guardedSelfFunction("skewX", aArgs);
export const skewY = (...aArgs) => guardedSelfFunction("skewY", aArgs);
export const translate = (...aArgs) => guardedSelfFunction("translate", aArgs);
export const translate3d = (...aArgs) =>
    guardedSelfFunction("translate3d", aArgs);
export const translateX = (...aArgs) =>
    guardedSelfFunction("translateX", aArgs);
export const translateY = (...aArgs) =>
    guardedSelfFunction("translateY", aArgs);
export const translateZ = (...aArgs) =>
    guardedSelfFunction("translateZ", aArgs);
