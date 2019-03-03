/* leny/koutla-swiss
 *
 * /test/utils.units.js - Units utils tests
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import assert from "assert";

import * as unitsMethods from "../lib/utils/units";

describe("Units Utils", () => {
    Object.entries({
        rem: "rem",
        em: "em",
        ex: "ex",
        vw: "vw",
        vh: "vh",
        vi: "vi",
        vb: "vb",
        vmin: "vmin",
        vmax: "vmax",
        px: "px",
        cap: "cap",
        ic: "ic",
        lh: "lh",
        rlh: "rlh",
        fr: "fr",
        ch: "ch",
        cm: "cm",
        mm: "mm",
        Q: "Q",
        pc: "pc",
        pt: "pt",
        inch: "in",
        deg: "deg",
        grad: "grad",
        rad: "rad",
        turn: "turn",
        s: "s",
        ms: "ms",
        Hz: "Hz",
        kHz: "kHz",
        dpi: "dpi",
        dpcm: "dpcm",
        dppx: "dppx",
    }).forEach(([name, value]) => {
        const unit = unitsMethods[name];

        describe(`${name}()`, () => {
            it(`Should return a correct ${name} value when a number is given`, () => {
                assert.strictEqual(unit(1), `1${value}`);
                assert.strictEqual(unit(-1), `-1${value}`);
                assert.strictEqual(unit(0.2), `0.2${value}`);
                assert.strictEqual(unit(1.2), `1.2${value}`);
                assert.strictEqual(unit(1 / 4), `0.25${value}`);
                assert.strictEqual(unit(1 / 3), `0.3333333333333333${value}`);
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
