/* leny/koutla-swiss
 *
 * ~/utils/media/index.js - MediaQueries utils
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

/**
 * Prepare a media query and returns it as an object
 * @abstract
 * @param {string} query media query definition
 * @param {object} props properties related to the media query
 * @return {object} `{"@media(...)": {"prop": "..."}}`
 */
export const mq = (query, props = {}) => {
    if (typeof query !== "string") {
        throw new TypeError("Invalid query type");
    }

    return {
        [`@media(${query})`]: props,
    };
};
