/* leny/koutla-swiss
 *
 * ~/utils/colors.js - Colors utils
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

export const rgb = (...aParts) => {
    if (aParts.length === 3) {
        if (aParts.every(isValidRGBInt)) {
            return `rgb(${aParts.join(",")})`;
        }
    }

    if (aParts.length === 1) {
        return `rgb(${getRGBValuesFromColor(aParts[0]).join(",")})`;
    }

    throw new TypeError("Invalid arguments format");
};

export const rgba = (...aParts) => {
    if (aParts.length === 4) {
        if (
            aParts.every((iValue, iIndex) => {
                return iIndex < 3
                    ? isValidRGBInt(iValue)
                    : isValidAlphaNumber(iValue);
            })
        ) {
            return `rgba(${aParts.join(",")})`;
        }
    }

    if (aParts.length === 2) {
        let aColorParts = getRGBValuesFromColor(aParts[0]);

        if (!isValidAlphaNumber(aParts[1])) {
            throw new TypeError("Invalid alpha value");
        }

        return `rgba(${aColorParts.join(",")},${aParts[1]})`;
    }

    throw new TypeError("Invalid arguments format");
};
