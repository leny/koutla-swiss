/* leny/koutla-swiss
 *
 * ~/mixins/size/index.js - Size mixin
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

/**
 * @ignore
 */
const _size = (width, height, prefix = "") => ({
    [`${prefix}${prefix !== "" ? "Width" : "width"}`]: width,
    [`${prefix}${prefix !== "" ? "Height" : "height"}`]: height,
});

/**
 * Mixin to for sizing (width/height)
 * @abstract
 * @param {string|number} width
 * @param {string|number} height - if missing, the value of width will be used
 * @return {object} `{width: "...", height: "..."}`
 */
export const size = (width = 0, height = width) => _size(width, height);

/**
 * Mixin to for minimal sizing (min-width/min-height)
 * @abstract
 * @param {string|number} width
 * @param {string|number} height - if missing, the value of width will be used
 * @return {object} `{minWidth: "...", minHeight: "..."}`
 */
export const minSize = (width = 0, height = width) =>
    _size(width, height, "min");

/**
 * Mixin to for maximal sizing (max-width/max-height)
 * @abstract
 * @param {string|number} width
 * @param {string|number} height - if missing, the value of width will be used
 * @return {object} `{maxWidth: "...", maxHeight: "..."}`
 */
export const maxSize = (width = 0, height = width) =>
    _size(width, height, "max");
