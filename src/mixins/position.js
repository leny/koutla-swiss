/* leny/koutla-swiss
 *
 * ~/mixins/position.js - Position mixins
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

export const POSITION_STATIC = "static";
export const POSITION_RELATIVE = "relative";
export const POSITION_ABSOLUTE = "absolute";
export const POSITION_STICKY = "sticky";
export const POSITION_FIXED = "fixed";

export const position = (sType, ...aArgs) => {
    if (
        ![
            POSITION_STATIC,
            POSITION_RELATIVE,
            POSITION_ABSOLUTE,
            POSITION_FIXED,
            POSITION_STICKY,
        ].includes(sType)
    ) {
        throw new TypeError("Invalid position type");
    }

    let oPosition = {
            position: sType,
        },
        aPositionArgs;

    if (!aArgs.length) {
        return oPosition;
    }

    aPositionArgs = aArgs.map(mValue => `${mValue}`);

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

export const relative = (...aArgs) => position(POSITION_RELATIVE, ...aArgs);
export const absolute = (...aArgs) => position(POSITION_ABSOLUTE, ...aArgs);
export const fixed = (...aArgs) => position(POSITION_FIXED, ...aArgs);
export const sticky = (...aArgs) => position(POSITION_STICKY, ...aArgs);
