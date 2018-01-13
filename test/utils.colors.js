/* leny/koutla-swiss
 *
 * /test/utils.colors.js - Colors utils tests
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import assert from "assert";

import {rgb} from "../lib/utils";

describe("Colors", () => {
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
        });

        it("Should throw when nothing is given", () => {
            assert.throws(() => rgb(), TypeError);
        });
    });
});
