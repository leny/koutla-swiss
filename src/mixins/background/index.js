/* leny/koutla-swiss
 *
 * ~/mixins/background/index.js - Background Mixins
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import {concatProp, selfFunction} from "../../commons/utils";

/**
 * Take all the arguments and return an object with a background property
 * @abstract
 * @param {...string} args
 * @return {object} `{background: "arg1 arg2 arg..."}`
 */
export const background = (...args) => concatProp("background")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"linear-gradient(arg1, arg2, arg...)"`
 */
export const linearGradient = (...args) =>
    selfFunction("linear-gradient")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"radial-gradient(arg1, arg2, arg...)"`
 */
export const radialGradient = (...args) =>
    selfFunction("radial-gradient")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"repeating-linear-gradient(arg1, arg2, arg...)"`
 */
export const repeatingLinearGradient = (...args) =>
    selfFunction("repeating-linear-gradient")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"repeating-radial-gradient(arg1, arg2, arg...)"`
 */
export const repeatingRadialGradient = (...args) =>
    selfFunction("repeating-radial-gradient")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"conic-gradient(arg1, arg2, arg...)"`
 */
export const conicGradient = (...args) =>
    selfFunction("conic-gradient")(...args);

/**
 * Take the argument and return a string with the appropriate syntax
 * @abstract
 * @param {string} arg URL
 * @return {string} `"url(arg)"`
 */
export const url = arg => {
    if (!arg) {
        throw new TypeError(`Wrong numbers of arguments in url()`);
    }

    const quote = '"';

    return `url(${quote}${url}${quote})`;
};
