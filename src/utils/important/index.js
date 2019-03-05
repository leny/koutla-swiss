/* leny/koutla-swiss
 *
 * ~/utils/important/index.js - !important util
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import fromEntries from "lodash.frompairs";

/**
 * Take the given value and add !important to it
 * @abstract
 * @param {string|object} target value to add important to
 * @return {string|object}
 */
export const important = target => {
    if (typeof target === "string") {
        return `${target} !important`;
    }
    return fromEntries(
        Object.entries(target).map(([key, value]) => [
            key,
            `${value} !important`,
        ]),
    );
};
