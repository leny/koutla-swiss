/* leny/koutla-swiss
 *
 * /src/commons/utils.js - Common utils for koutla
 *
 * coded by leny@flatLand!
 * started at 09/02/2018
 */

export const concatProp = (prop, glue = " ") => (...args) => {
    return args.length ? {[prop]: args.join(glue)} : {};
};

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

    return `${name}(${quote}${args.join(glue)}${quote})`;
};
