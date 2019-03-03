/* leny/koutla-swiss
 *
 * ~/mixins/transform.js - Transform Mixins
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import {concatProp, selfFunction} from "../commons/utils";

export const transform = (...args) =>
    concatProp("transform")(...(args.length ? args : ["none"]));

export const matrix = selfFunction("matrix");
export const matrix3d = selfFunction("matrix3d");
export const perspective = selfFunction("perspective");
export const rotate = selfFunction("rotate");
export const rotate3d = selfFunction("rotate3d");
export const rotateX = selfFunction("rotateX");
export const rotateY = selfFunction("rotateY");
export const rotateZ = selfFunction("rotateZ");
export const scale = selfFunction("scale");
export const scale3d = selfFunction("scale3d");
export const scaleX = selfFunction("scaleX");
export const scaleY = selfFunction("scaleY");
export const scaleZ = selfFunction("scaleZ");
export const skew = selfFunction("skew");
export const skewX = selfFunction("skewX");
export const skewY = selfFunction("skewY");
export const translate = selfFunction("translate");
export const translate3d = selfFunction("translate3d");
export const translateX = selfFunction("translateX");
export const translateY = selfFunction("translateY");
export const translateZ = selfFunction("translateZ");
