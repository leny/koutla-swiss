/* leny/koutla-swiss
 *
 * ~/utils/important.js - !important util
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import fromEntries from "lodash.frompairs";

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
