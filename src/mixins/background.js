/* leny/koutla-swiss
 *
 * ~/mixins/background.js - Background Mixins
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import {concatProp, selfFunction} from "../commons/utils";

export const background = concatProp("background");

export const linearGradient = selfFunction("linear-gradient");
export const radialGradient = selfFunction("radial-gradient");
export const repeatingLinearGradient = selfFunction(
    "repeating-linear-gradient",
);
export const repeatingRadialGradient = selfFunction(
    "repeating-radial-gradient",
);
export const conicGradient = selfFunction("conic-gradient");

export const url = selfFunction("url", "", 1, 1, true);
