/* leny/koutla-swiss
 *
 * ~/mixins/filter.js - Filter Mixins
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import {concatProp, selfFunction} from "../commons/utils";

export const filter = (...args) =>
    concatProp("filter")(...(args.length ? args : ["none"]));

export const blur = selfFunction("blur");
export const brightness = selfFunction("brightness");
export const contrast = selfFunction("contrast");
export const dropShadow = selfFunction("drop-shadow");
export const grayscale = selfFunction("grayscale");
export const hueRotate = selfFunction("hue-rotate");
export const invert = selfFunction("invert");
export const opacity = selfFunction("opacity");
export const saturate = selfFunction("saturate");
export const sepia = selfFunction("sepia");
