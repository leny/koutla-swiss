/* leny/koutla-swiss
 *
 * ~/mixins/flex.js - Flex Mixins
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

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

export const flexbox = (sDirection, sMainAxis, sSecondAxis, sWrap) => {
    let oFlexStyles = {
        display: "flex",
    };

    sDirection && (oFlexStyles.flexDirection = sDirection);
    sWrap && (oFlexStyles.flexWrap = sWrap);
    sMainAxis && (oFlexStyles.justifyContent = sMainAxis);
    sSecondAxis && (oFlexStyles.alignItems = sSecondAxis);

    return oFlexStyles;
};

export const flexrow = (...aArgs) => flexbox(FLEX_DIRECTION_ROW, ...aArgs);
export const flexcolumn = (...aArgs) =>
    flexbox(FLEX_DIRECTION_COLUMN, ...aArgs);
