/* leny/koutla-swiss
 *
 * /test/utils.units.js - Units utils tests
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import assert from "assert";

import * as unitsMethods from "../lib/utils";

describe("Units Utils", () => {
    [
        "rem",
        "em",
        "ex",
        "vw",
        "vh",
        "vi",
        "vb",
        "vmin",
        "vmax",
        "px",
        "cap",
        "ic",
        "lh",
        "rlh",
    ].forEach(sUnit => {
        const unit = unitsMethods[sUnit];

        describe(`${sUnit}()`, () => {
            it(`Should return a correct ${sUnit} value when a number is given`, () => {
                assert.strictEqual(unit(1), `1${sUnit}`);
                assert.strictEqual(unit(-1), `-1${sUnit}`);
                assert.strictEqual(unit(0.2), `0.2${sUnit}`);
                assert.strictEqual(unit(1.2), `1.2${sUnit}`);
                assert.strictEqual(unit(1 / 4), `0.25${sUnit}`);
                assert.strictEqual(unit(1 / 3), `0.3333333333333333${sUnit}`);
            });

            it("Should return an unit-less zero when zero is given", () => {
                assert.strictEqual(unit(0), "0");
            });

            it("Should return an unit-less zero when nothing is given", () => {
                assert.strictEqual(unit(), "0");
            });

            it("Should throw if the given value is not a number", () => {
                assert.throws(() => unit("yeah"), TypeError);
            });
        });
    });

    describe("percent()", () => {
        const percent = unitsMethods.percent;

        it("Should return a correct % value when a number is given", () => {
            assert.strictEqual(percent(12.5), "12.5%");
            assert.strictEqual(percent(100 / 4), "25%");
            assert.strictEqual(percent(100), "100%");
            assert.strictEqual(percent(-50), "-50%");
            assert.strictEqual(percent(100 / 3), "33.333333333333336%"); // Well, f*ck you.
        });

        it("Should return a correct % value when a number is given with the decimal boolean flag", () => {
            assert.strictEqual(percent(0.01, true), "1%");
            assert.strictEqual(percent(0.5, true), "50%");
            assert.strictEqual(percent(-0.5, true), "-50%");
            assert.strictEqual(percent(0.125, true), "12.5%");
            assert.strictEqual(percent(12.5, true), "1250%");
            assert.strictEqual(percent(1 / 4, true), "25%");
            assert.strictEqual(percent(1, true), "100%");
            assert.strictEqual(percent(1 / 3, true), "33.33333333333333%");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(percent(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(percent(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => percent("yeah"), TypeError);
        });
    });
});
