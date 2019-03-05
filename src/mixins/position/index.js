/* leny/koutla-swiss
 *
 * ~/mixins/position/index.js - Position mixins
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

export const POSITION_STATIC = "static";
export const POSITION_RELATIVE = "relative";
export const POSITION_ABSOLUTE = "absolute";
export const POSITION_STICKY = "sticky";
export const POSITION_FIXED = "fixed";

/**
 * Mixin to generate a positionned box
 * @abstract
 * @param {string} type position name
 * @param {...string} args values for top, right, bottom, left - treated like for margin or padding properties
 * @return {object} `{position: "...", top: "...", right: "...", bottom: "...", left: "..."}`
 */
export const position = (type, ...args) => {
    if (
        ![
            POSITION_STATIC,
            POSITION_RELATIVE,
            POSITION_ABSOLUTE,
            POSITION_FIXED,
            POSITION_STICKY,
        ].includes(type)
    ) {
        throw new TypeError("Invalid position type");
    }

    let oPosition = {
            position: type,
        },
        aPositionArgs;

    if (!args.length) {
        return oPosition;
    }

    // check object type, cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Description
    if (args[0] === Object(args[0])) {
        return {
            ...oPosition,
            ...args[0],
        };
    }

    aPositionArgs = args.map(mValue => `${mValue}`);

    switch (aPositionArgs.length) {
        case 0:
            return oPosition;
        case 1:
            return {
                ...oPosition,
                top: aPositionArgs[0],
                right: aPositionArgs[0],
                bottom: aPositionArgs[0],
                left: aPositionArgs[0],
            };
        case 2:
            return {
                ...oPosition,
                top: aPositionArgs[0],
                right: aPositionArgs[1],
                bottom: aPositionArgs[0],
                left: aPositionArgs[1],
            };
        case 3:
            return {
                ...oPosition,
                top: aPositionArgs[0],
                right: aPositionArgs[1],
                bottom: aPositionArgs[2],
                left: aPositionArgs[1],
            };
        case 4:
            return {
                ...oPosition,
                top: aPositionArgs[0],
                right: aPositionArgs[1],
                bottom: aPositionArgs[2],
                left: aPositionArgs[3],
            };
        default:
            throw new TypeError("Invalid argument amount");
    }
};

/**
 * Mixin to generate a relative positionned box
 * @abstract
 * @param {...string} args values for top, right, bottom, left - treated like for margin or padding properties
 * @return {object} `{position: "relative", top: "...", right: "...", bottom: "...", left: "..."}`
 */
export const relative = (...args) => position(POSITION_RELATIVE, ...args);

/**
 * Mixin to generate a absolute positionned box
 * @abstract
 * @param {...string} args values for top, right, bottom, left - treated like for margin or padding properties
 * @return {object} `{position: "absolute", top: "...", right: "...", bottom: "...", left: "..."}`
 */
export const absolute = (...args) => position(POSITION_ABSOLUTE, ...args);

/**
 * Mixin to generate a fixed positionned box
 * @abstract
 * @param {...string} args values for top, right, bottom, left - treated like for margin or padding properties
 * @return {object} `{position: "fixed", top: "...", right: "...", bottom: "...", left: "..."}`
 */
export const fixed = (...args) => position(POSITION_FIXED, ...args);

/**
 * Mixin to generate a sticky positionned box
 * @abstract
 * @param {...string} args values for top, right, bottom, left - treated like for margin or padding properties
 * @return {object} `{position: "sticky", top: "...", right: "...", bottom: "...", left: "..."}`
 */
export const sticky = (...args) => position(POSITION_STICKY, ...args);
