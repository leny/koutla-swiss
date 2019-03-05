/* leny/koutla-swiss
 *
 * ~/mixins/borders.js - Border Mixins
 *
 * coded by leny@flatLand!
 * started at 09/02/2018
 */

import {concatProp} from "../../commons/utils";

/**
 * Take all the arguments and return an object with a border property
 * @abstract
 * @param {...string} args
 * @return {object} `{border: "arg1 arg2 arg..."}`
 */
export const border = (...args) => concatProp("border")(...args);

/**
 * Take all the arguments and return an object with a borderTop property
 * @abstract
 * @param {...string} args
 * @return {object} `{borderTop: "arg1 arg2 arg..."}`
 */
export const borderTop = (...args) => concatProp("borderTop")(...args);

/**
 * Take all the arguments and return an object with a borderRight property
 * @abstract
 * @param {...string} args
 * @return {object} `{borderRight: "arg1 arg2 arg..."}`
 */
export const borderRight = (...args) => concatProp("borderRight")(...args);

/**
 * Take all the arguments and return an object with a borderBottom property
 * @abstract
 * @param {...string} args
 * @return {object} `{borderBottom: "arg1 arg2 arg..."}`
 */
export const borderBottom = (...args) => concatProp("borderBottom")(...args);

/**
 * Take all the arguments and return an object with a borderLeft property
 * @abstract
 * @param {...string} args
 * @return {object} `{borderLeft: "arg1 arg2 arg..."}`
 */
export const borderLeft = (...args) => concatProp("borderLeft")(...args);

/**
 * Take all the arguments and return an object with a borderRadius property
 * @abstract
 * @param {...string} args
 * @return {object} `{borderRadius: "arg1 arg2 arg..."}`
 */
export const borderRadius = (...args) => concatProp("borderRadius")(...args);
