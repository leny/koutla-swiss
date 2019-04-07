/* leny/koutla-swiss
 *
 * /test/utils.colors.js - Colors utils tests
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import assert from "assert";

import {rgb, rgba} from "../lib/cjs/utils/colors";

describe("Colors Utils", () => {
    describe("rgb()", () => {
        it("Should return a correct rgb value when a valid color name is given", () => {
            assert.strictEqual(rgb("black"), "rgb(0,0,0)");
            assert.strictEqual(rgb("white"), "rgb(255,255,255)");
            assert.strictEqual(rgb("blue"), "rgb(0,0,255)");
            assert.strictEqual(rgb("Olive"), "rgb(128,128,0)");
            assert.strictEqual(rgb("DodgerBlue"), "rgb(30,144,255)");
        });

        it("Should return a correct rgb value when a valid hexadecimal color code is given", () => {
            assert.strictEqual(rgb("#000"), "rgb(0,0,0)");
            assert.strictEqual(rgb("#000000"), "rgb(0,0,0)");
            assert.strictEqual(rgb("#00f"), "rgb(0,0,255)");
            assert.strictEqual(rgb("#1e90ff"), "rgb(30,144,255)");
        });

        it("Should return a correct rgb value when three integers are given", () => {
            assert.strictEqual(rgb(0, 0, 0), "rgb(0,0,0)");
            assert.strictEqual(rgb(255, 255, 255), "rgb(255,255,255)");
            assert.strictEqual(rgb(0, 0, 255), "rgb(0,0,255)");
            assert.strictEqual(rgb(128, 128, 0), "rgb(128,128,0)");
            assert.strictEqual(rgb(30, 144, 255), "rgb(30,144,255)");
        });

        it("Should throw if the given value isn't a valid css color name", () => {
            assert.throws(() => rgb("notacolor"), TypeError);
        });

        it("Should throw if the given value isn't a valid hexadecimal color code", () => {
            assert.throws(() => rgb("#rrggbb"), TypeError);
            assert.throws(() => rgb("#rrgg"), TypeError);
        });

        it("Should throw when nothing is given", () => {
            assert.throws(() => rgb(), TypeError);
        });
    });

    describe("rgba()", () => {
        it("Should return a correct rgba value when a valid color name and alpha value are given", () => {
            assert.strictEqual(rgba("black", 0.5), "rgba(0,0,0,0.5)");
            assert.strictEqual(rgba("white", 1), "rgba(255,255,255,1)");
            assert.strictEqual(rgba("blue", 0), "rgba(0,0,255,0)");
            assert.strictEqual(rgba("Olive", 0.33), "rgba(128,128,0,0.33)");
            assert.strictEqual(rgba("DodgerBlue", 1), "rgba(30,144,255,1)");
        });

        it("Should return a correct rgba value when a valid hexadecimal color code and an alpha value are given", () => {
            assert.strictEqual(rgba("#000", 0.5), "rgba(0,0,0,0.5)");
            assert.strictEqual(rgba("#000000", 1), "rgba(0,0,0,1)");
            assert.strictEqual(rgba("#00f", 0), "rgba(0,0,255,0)");
            assert.strictEqual(rgba("#1e90ff", 0.33), "rgba(30,144,255,0.33)");
        });

        it("Should return a correct rgb value when three integers and an alpha value are given", () => {
            assert.strictEqual(rgba(0, 0, 0, 0.5), "rgba(0,0,0,0.5)");
            assert.strictEqual(rgba(255, 255, 255, 1), "rgba(255,255,255,1)");
            assert.strictEqual(rgba(0, 0, 255, 0), "rgba(0,0,255,0)");
            assert.strictEqual(rgba(128, 128, 0, 0.33), "rgba(128,128,0,0.33)");
            assert.strictEqual(rgba(30, 144, 255, 1), "rgba(30,144,255,1)");
        });

        it("Should throw if the given color value isn't a valid css color name", () => {
            assert.throws(() => rgba("notacolor"), TypeError);
        });

        it("Should throw if the given color value isn't a valid hexadecimal color code", () => {
            assert.throws(() => rgba("#rrggbb"), TypeError);
            assert.throws(() => rgba("#rrgg"), TypeError);
        });

        it("Should throw if the given alpha value isn't valid", () => {
            assert.throws(() => rgba("#000", 9), TypeError);
            assert.throws(() => rgba("#ffffff", -0.23), TypeError);
            assert.throws(() => rgba(10, 10, 10, -19), TypeError);
        });

        it("Should throw when nothing is given", () => {
            assert.throws(() => rgba(), TypeError);
        });
    });
});
