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

const guardedSelfFunction = name => (...args) => {
    if (!args.length) {
        throw new TypeError("Expect at least one argument");
    }
    return selfFunction(name)(...args);
};

export const matrix = guardedSelfFunction("matrix");
export const matrix3d = guardedSelfFunction("matrix3d");
export const perspective = guardedSelfFunction("perspective");
export const rotate = guardedSelfFunction("rotate");
export const rotate3d = guardedSelfFunction("rotate3d");
export const rotateX = guardedSelfFunction("rotateX");
export const rotateY = guardedSelfFunction("rotateY");
export const rotateZ = guardedSelfFunction("rotateZ");
export const scale = guardedSelfFunction("scale");
export const scale3d = guardedSelfFunction("scale3d");
export const scaleX = guardedSelfFunction("scaleX");
export const scaleY = guardedSelfFunction("scaleY");
export const scaleZ = guardedSelfFunction("scaleZ");
export const skew = guardedSelfFunction("skew");
export const skewX = guardedSelfFunction("skewX");
export const skewY = guardedSelfFunction("skewY");
export const translate = guardedSelfFunction("translate");
export const translate3d = guardedSelfFunction("translate3d");
export const translateX = guardedSelfFunction("translateX");
export const translateY = guardedSelfFunction("translateY");
export const translateZ = guardedSelfFunction("translateZ");
