/* leny/koutla-swiss
 *
 * ~/mixins/transform/index.js - Transform Mixins
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import {concatProp, selfFunction} from "../../commons/utils";

/**
 * Take all the arguments and return an object with a transform property - returns "none" value if no argument is given
 * @abstract
 * @param {...string} args
 * @return {object} `{transform: "arg1 arg2 arg..."}`
 */
export const transform = (...args) =>
    concatProp("transform")(...(args.length ? args : ["none"]));

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"matrix(arg1, arg2, arg...)"`
 */
export const matrix = (...args) => selfFunction("matrix")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"matrix3d(arg1, arg2, arg...)"`
 */
export const matrix3d = (...args) => selfFunction("matrix3d")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"perspective(arg1, arg2, arg...)"`
 */
export const perspective = (...args) => selfFunction("perspective")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"rotate(arg1, arg2, arg...)"`
 */
export const rotate = (...args) => selfFunction("rotate")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"rotate3d(arg1, arg2, arg...)"`
 */
export const rotate3d = (...args) => selfFunction("rotate3d")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"rotateX(arg1, arg2, arg...)"`
 */
export const rotateX = (...args) => selfFunction("rotateX")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"rotateY(arg1, arg2, arg...)"`
 */
export const rotateY = (...args) => selfFunction("rotateY")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"rotateZ(arg1, arg2, arg...)"`
 */
export const rotateZ = (...args) => selfFunction("rotateZ")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"scale(arg1, arg2, arg...)"`
 */
export const scale = (...args) => selfFunction("scale")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"scale3d(arg1, arg2, arg...)"`
 */
export const scale3d = (...args) => selfFunction("scale3d")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"scaleX(arg1, arg2, arg...)"`
 */
export const scaleX = (...args) => selfFunction("scaleX")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"scaleY(arg1, arg2, arg...)"`
 */
export const scaleY = (...args) => selfFunction("scaleY")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"scaleZ(arg1, arg2, arg...)"`
 */
export const scaleZ = (...args) => selfFunction("scaleZ")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"skew(arg1, arg2, arg...)"`
 */
export const skew = (...args) => selfFunction("skew")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"skewX(arg1, arg2, arg...)"`
 */
export const skewX = (...args) => selfFunction("skewX")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"skewY(arg1, arg2, arg...)"`
 */
export const skewY = (...args) => selfFunction("skewY")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"translate(arg1, arg2, arg...)"`
 */
export const translate = (...args) => selfFunction("translate")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"translate3d(arg1, arg2, arg...)"`
 */
export const translate3d = (...args) => selfFunction("translate3d")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"translateX(arg1, arg2, arg...)"`
 */
export const translateX = (...args) => selfFunction("translateX")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"translateY(arg1, arg2, arg...)"`
 */
export const translateY = (...args) => selfFunction("translateY")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"translateZ(arg1, arg2, arg...)"`
 */
export const translateZ = (...args) => selfFunction("translateZ")(...args);
