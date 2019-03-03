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

export const selfFunction = (name, glue = ", ") => (...args) => {
    if (!args.length) {
        throw new TypeError("Expect at least one argument");
    }
    return `${name}(${args.join(glue)})`;
};
