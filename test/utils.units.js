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
        const {percent} = unitsMethods;

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

    describe("calc()", () => {
        const {calc} = unitsMethods;

        it(`Should return a correct calc method with any value given, concatenated`, () => {
            assert.strictEqual(calc(1 + 3), "calc(4)");
            assert.strictEqual(calc("2px + 120%"), "calc(2px + 120%)");
            assert.strictEqual(calc("1rem", "-", "20%"), "calc(1rem - 20%)");
        });

        it("Should throw if no value is given", () => {
            assert.throws(() => calc(), TypeError);
        });
    });

    describe("attr()", () => {
        const {attr} = unitsMethods;

        it(`Should return a correct attr method with any value given, concatenated`, () => {
            assert.strictEqual(attr("data-count"), "attr(data-count)");
            assert.strictEqual(
                attr("data-count number"),
                "attr(data-count number)",
            );
            assert.strictEqual(
                attr("data-name", `"unknown"`),
                `attr(data-name, "unknown")`,
            );
        });

        it("Should throw if no value is given", () => {
            assert.throws(() => attr(), TypeError);
        });
    });

    ["min", "max"].forEach(name => {
        const method = unitsMethods[name];

        describe(`${name}()`, () => {
            it(`Should return a correct ${name} method with any value given, concatenated`, () => {
                assert.strictEqual(method(1, 2), `${name}(1, 2)`);
                assert.strictEqual(method("1rem", "20%"), `${name}(1rem, 20%)`);
            });

            it("Should throw if no value is given", () => {
                assert.throws(() => method(), TypeError);
            });

            it("Should throw if wrong amount of values is given", () => {
                assert.throws(() => method(1), TypeError);
            });
        });
    });

    const {clamp} = unitsMethods;

    describe(`clamp()`, () => {
        it(`Should return a correct clamp method with any value given, concatenated`, () => {
            assert.strictEqual(clamp(1, 2, 3), "clamp(1, 2, 3)");
            assert.strictEqual(
                clamp("1rem", "20%", "2px"),
                `clamp(1rem, 20%, 2px)`,
            );
        });

        it("Should throw if no value is given", () => {
            assert.throws(() => clamp(), TypeError);
        });

        it("Should throw if wrong amount of values is given", () => {
            assert.throws(() => clamp(1), TypeError);
            assert.throws(() => clamp(1, 2, 3, 4), TypeError);
        });
    });
});
