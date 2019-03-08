/* leny/koutla-swiss
 *
 * /src/commons/utils.js - Common utils for koutla
 *
 * coded by leny@flatLand!
 * started at 09/02/2018
 */

/**
 * @ignore
 */
const glueWith = (glue = " ", ...args) => args.join(glue);

/**
 * @ignore
 */
export const concatProp = (prop, glue = " ") => (...args) => {
    return args.length ? {[prop]: glueWith(glue, ...args)} : {};
};

/**
 * @ignore
 */
export const selfFunction = (
    name,
    glue = ", ",
    minArgs = 1,
    maxArgs = Infinity,
    quoted = false,
) => (...args) => {
    if (args.length < minArgs || args.length > maxArgs) {
        throw new TypeError(`Wrong numbers of arguments in ${name}()`);
    }
    const quote = quoted ? '"' : "";

    return `${name}(${quote}${glueWith(glue, ...args)}${quote})`;
};

/**
 * Concatanate all the arguments, space-separated
 * @abstract
 * @param {...string} args
 * @return {string} `arg1 arg2 arg3`
 */
export const glueWithSpaces = (...args) => glueWith(" ", ...args);

/**
 * Concatanate all the arguments, comma-separated
 * @abstract
 * @param {...string} args
 * @return {string} `arg1, arg2, arg3`
 */
export const glueWithCommas = (...args) => glueWith(", ", ...args);
