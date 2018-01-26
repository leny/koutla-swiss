/* leny/koutla-swiss
 *
 * ~/mixins/size.js - Size mixin
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

const _size = (iWidth, iHeight, sPrefix = "") => ({
    [`${sPrefix}${sPrefix !== "" ? "Width" : "width"}`]: iWidth,
    [`${sPrefix}${sPrefix !== "" ? "Height" : "height"}`]: iHeight,
});

export const size = (mWidth = 0, mHeight = mWidth) => _size(mWidth, mHeight);

export const minSize = (mWidth = 0, mHeight = mWidth) =>
    _size(mWidth, mHeight, "min");

export const maxSize = (mWidth = 0, mHeight = mWidth) =>
    _size(mWidth, mHeight, "max");
