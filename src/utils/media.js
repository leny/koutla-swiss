/* leny/koutla-swiss
 *
 * ~/utils/media.js - MediaQueries utils
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

export const mq = (sQuery, oProperties = {}) => {
    if (typeof sQuery !== "string") {
        throw new TypeError("Invalid query type");
    }

    return {
        [`@media(${sQuery})`]: oProperties,
    };
};
