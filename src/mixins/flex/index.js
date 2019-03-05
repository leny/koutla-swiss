/* leny/koutla-swiss
 *
 * ~/mixins/flex/index.js - Flex Mixins
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

import {concatProp} from "../../commons/utils";

export const FLEX_DIRECTION_ROW = "row";
export const FLEX_DIRECTION_ROW_REVERSE = "row-reverse";
export const FLEX_DIRECTION_COLUMN = "column";
export const FLEX_DIRECTION_COLUMN_REVERS = "column-reverse";

export const FLEX_WRAP = "wrap";
export const FLEX_NOWRAP = "nowrap";
export const FLEX_WRAP_REVERSE = "wrap-reverse";

export const FLEX_ALIGN_CENTER = "center";
export const FLEX_ALIGN_START = "start";
export const FLEX_ALIGN_END = "end";
export const FLEX_ALIGN_FLEX_START = "flex-start";
export const FLEX_ALIGN_FLEX_END = "flex-end";
export const FLEX_ALIGN_LEFT = "left";
export const FLEX_ALIGN_RIGHT = "right";
export const FLEX_ALIGN_BASELINE = "baseline";
export const FLEX_ALIGN_SPACE_BETWEEN = "space-between";
export const FLEX_ALIGN_SPACE_AROUND = "space-around";
export const FLEX_ALIGN_SPACE_EVENLY = "space-evenly";
export const FLEX_ALIGN_NORMAL = "normal";
export const FLEX_ALIGN_STRETCH = "stretch";
export const FLEX_ALIGN_SELF_START = "self-start";
export const FLEX_ALIGN_SELF_END = "self-end";

/**
 * Mixin to generate a flex box
 * @abstract
 * @param {string} direction direction of the flex box
 * @param {string} mainAxis alignment of the main axis (justify-content property)
 * @param {string} secondaryAxis alignment of the secondary axis (align-items property)
 * @param {string} wrap value of the flex-wrap property
 * @return {object} `{display: "flex", flexDirection: "...", flexWrap: "...", justifyContent: "...", alignItems: "..."}`
 */
export const flexbox = (direction, mainAxis, secondaryAxis, wrap) => {
    let oFlexStyles = {
        display: "flex",
    };

    direction && (oFlexStyles.flexDirection = direction);
    wrap && (oFlexStyles.flexWrap = wrap);
    mainAxis && (oFlexStyles.justifyContent = mainAxis);
    secondaryAxis && (oFlexStyles.alignItems = secondaryAxis);

    return oFlexStyles;
};

/**
 * Mixin to generate a flex row
 * @abstract
 * @param {string} mainAxis alignment of the main axis (justify-content property)
 * @param {string} secondaryAxis alignment of the secondary axis (align-items property)
 * @param {string} wrap value of the flex-wrap property
 * @return {object} `{display: "flex", flexDirection: "row", flexWrap: "...", justifyContent: "...", alignItems: "..."}`
 */
export const flexrow = (mainAxis, secondaryAxis, wrap) =>
    flexbox(FLEX_DIRECTION_ROW, mainAxis, secondaryAxis, wrap);

/**
 * Mixin to generate a flex column
 * @abstract
 * @param {string} mainAxis alignment of the main axis (justify-content property)
 * @param {string} secondaryAxis alignment of the secondary axis (align-items property)
 * @param {string} wrap value of the flex-wrap property
 * @return {object} `{display: "flex", flexDirection: "column", flexWrap: "...", justifyContent: "...", alignItems: "..."}`
 */
export const flexcolumn = (mainAxis, secondaryAxis, wrap) =>
    flexbox(FLEX_DIRECTION_COLUMN, mainAxis, secondaryAxis, wrap);

/**
 * Take all the arguments and return an object with a flex property
 * @abstract
 * @param {...string} args
 * @return {object} `{flex: "arg1 arg2 arg..."}`
 */
export const flex = concatProp("flex");
