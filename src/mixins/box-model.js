/* leny/koutla-swiss
 *
 * ~/mixins/box-model.js - Box-model properties mixins
 *
 * coded by leny@flatLand!
 * started at 26/01/2018
 */

import {concatProp} from "../commons/utils";

export const margin = (...aArgs) => concatProp("margin", aArgs);

export const padding = (...aArgs) => concatProp("padding", aArgs);
