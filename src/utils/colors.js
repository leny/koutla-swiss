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

export const rgb = (...aParts) => {
    if (aParts.length === 3) {
        if (aParts.every(isValidRGBInt)) {
            return `rgb(${aParts.join(",")})`;
        }
    }

    if (aParts.length === 1) {
        let sColorName, sHexColor, aColorParts;

        if (
            Object.keys(cssColors).includes(
                (sColorName = `${aParts[0]}`.toLowerCase().trim()),
            )
        ) {
            sHexColor = cssColors[sColorName];
        } else if (HEX_COLOR.test(aParts[0])) {
            sHexColor = aParts[0];
        } else {
            throw new TypeError("Invalid color");
        }

        (aColorParts = sHexColor.match(HEX_COLOR)).shift();
        aColorParts = aColorParts.map(sValue =>
            parseInt(sValue.length === 1 ? `${sValue}${sValue}` : sValue, 16),
        );

        return `rgb(${aColorParts.join(",")})`;
    }

    throw new TypeError("Invalid arguments format");
};
