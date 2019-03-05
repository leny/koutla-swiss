/* leny/koutla-swiss
 *
 * ~/utils/colors/index.js - Colors utils
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import cssColors from "css-color-names";

const HEX_COLOR = /^#((?:[0-9a-f](?=[0-9a-f]{2}\b))|(?:[0-9a-f]{2}(?=[0-9a-f]{4}\b)))((?:[0-9a-f](?=[0-9a-f]{1}\b))|(?:[0-9a-f]{2}(?=[0-9a-f]{2}\b)))([0-9a-f]{1,2})\b/i;

const isValidRGBInt = mValue => {
    const iValue = +mValue;

    return !(isNaN(iValue) || iValue % 1 !== 0 || (iValue < 0 || iValue > 255));
};

const isValidAlphaNumber = mValue => {
    const iValue = +mValue;

    return !(isNaN(iValue) || (iValue < 0 || iValue > 1));
};

const getRGBValuesFromColor = sColor => {
    let sColorName, sHexColor, aColorParts;

    if (
        Object.keys(cssColors).includes(
            (sColorName = `${sColor}`.toLowerCase().trim()),
        )
    ) {
        sHexColor = cssColors[sColorName];
    } else if (HEX_COLOR.test(sColor)) {
        sHexColor = sColor;
    } else {
        throw new TypeError("Invalid color");
    }

    (aColorParts = sHexColor.match(HEX_COLOR)).shift();
    return aColorParts.map(sValue =>
        parseInt(sValue.length === 1 ? `${sValue}${sValue}` : sValue, 16),
    );
};

/**
 * Take all the arguments and return a string with the rgb channels definition
 * @abstract
 * @param {...string|...number} args parts of the color definition (if only one arg is given, it will be converted)
 * @return {string} `"rgb(arg1, arg2, arg...)"`
 */
export const rgb = (...args) => {
    if (args.length === 3) {
        if (args.every(isValidRGBInt)) {
            return `rgb(${args.join(",")})`;
        }
    }

    if (args.length === 1) {
        return `rgb(${getRGBValuesFromColor(args[0]).join(",")})`;
    }

    throw new TypeError("Invalid arguments format");
};

/**
 * Take all the arguments and return a string with the rgba channels definition
 * @abstract
 * @param {...string|...number} args parts of the color definition (if only one arg is given, it will be converted)
 * @return {string} `"rgba(arg1, arg2, arg...)"`
 */
export const rgba = (...args) => {
    if (args.length === 4) {
        if (
            args.every((iValue, iIndex) => {
                return iIndex < 3
                    ? isValidRGBInt(iValue)
                    : isValidAlphaNumber(iValue);
            })
        ) {
            return `rgba(${args.join(",")})`;
        }
    }

    if (args.length === 2) {
        let aColorParts = getRGBValuesFromColor(args[0]);

        if (!isValidAlphaNumber(args[1])) {
            throw new TypeError("Invalid alpha value");
        }

        return `rgba(${aColorParts.join(",")},${args[1]})`;
    }

    throw new TypeError("Invalid arguments format");
};
