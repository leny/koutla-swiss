/* leny/koutla-swiss
 *
 * ~/mixins/borders.js - Border Mixins
 *
 * coded by leny@flatLand!
 * started at 09/02/2018
 */

import {concatProp} from "../commons/utils";

export const border = (...aArgs) => concatProp("border", aArgs);

export const borderTop = (...aArgs) => concatProp("borderTop", aArgs);
export const borderRight = (...aArgs) => concatProp("borderRight", aArgs);
export const borderBottom = (...aArgs) => concatProp("borderBottom", aArgs);
export const borderLeft = (...aArgs) => concatProp("borderLeft", aArgs);

export const borderRadius = (...aArgs) => concatProp("borderRadius", aArgs);
