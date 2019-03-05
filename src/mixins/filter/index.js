/* leny/koutla-swiss
 *
 * ~/mixins/filter/index.js - Filter Mixins
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import {concatProp, selfFunction} from "../../commons/utils";

/**
 * Take all the arguments and return an object with a filter property - returns "none" value if no argument is given
 * @abstract
 * @param {...string} args
 * @return {object} `{filter: "arg1 arg2 arg..."}`
 */
export const filter = (...args) =>
    concatProp("filter")(...(args.length ? args : ["none"]));

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"blur(arg1, arg2, arg...)"`
 */
export const blur = (...args) => selfFunction("blur")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"brightness(arg1, arg2, arg...)"`
 */
export const brightness = (...args) => selfFunction("brightness")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"contrast(arg1, arg2, arg...)"`
 */
export const contrast = (...args) => selfFunction("contrast")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"drop-shadow(arg1, arg2, arg...)"`
 */
export const dropShadow = (...args) => selfFunction("drop-shadow")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"grayscale(arg1, arg2, arg...)"`
 */
export const grayscale = (...args) => selfFunction("grayscale")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"hue-rotate(arg1, arg2, arg...)"`
 */
export const hueRotate = (...args) => selfFunction("hue-rotate")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"invert(arg1, arg2, arg...)"`
 */
export const invert = (...args) => selfFunction("invert")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"opacity(arg1, arg2, arg...)"`
 */
export const opacity = (...args) => selfFunction("opacity")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"saturate(arg1, arg2, arg...)"`
 */
export const saturate = (...args) => selfFunction("saturate")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"sepia(arg1, arg2, arg...)"`
 */
export const sepia = (...args) => selfFunction("sepia")(...args);
