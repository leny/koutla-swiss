/* leny/koutla-swiss
 *
 * ~/mixins/box-model/index.js - Box-model properties mixins
 *
 * coded by leny@flatLand!
 * started at 26/01/2018
 */

import {concatProp} from "../../commons/utils";

/**
 * Take all the arguments and return an object with a margin property
 * @abstract
 * @param {...string} args
 * @return {object} `{margin: "arg1 arg2 arg..."}`
 */
export const margin = (...args) => concatProp("margin")(...args);

/**
 * Take all the arguments and return an object with a padding property
 * @abstract
 * @param {...string} args
 * @return {object} `{padding: "arg1 arg2 arg..."}`
 */
export const padding = (...args) => concatProp("padding")(...args);
