/* leny/koutla-swiss
 *
 * ~/mixins/animation/index.js - Animation Mixins
 *
 * coded by leny@flatLand!
 * started at 06/02/2019
 */

import {concatProp, selfFunction} from "../../commons/utils";

/**
 * Take all the arguments and return an object with a animation property
 * @abstract
 * @param {...string} args
 * @return {object} `{animation: "arg1 arg2 arg..."}`
 */
export const animation = (...args) => concatProp("animation")(...args);

/**
 * Take all the arguments and return an object with a animationTimingFunction property
 * @abstract
 * @param {...string} args
 * @return {object} `{animationTimingFunction: "arg1, arg2, arg..."}` - **note:** the args are separated by commas
 */
export const animationTimingFunction = (...args) =>
    concatProp("animationTimingFunction", ", ")(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"cubic-bezier(arg1, arg2, arg...)"`
 */
export const cubicBezier = (...args) =>
    selfFunction("cubic-bezier", ", ", 4, 4)(...args);

/**
 * Take all the arguments and return a string with the appropriate syntax
 * @abstract
 * @param {...string} args
 * @return {string} `"steps(arg1, arg2, arg...)"`
 */
export const steps = (...args) => selfFunction("steps")(...args);
