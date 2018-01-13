/* leny/koutla-swiss
 *
 * /test/utils.units.js - Units utils tests
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import assert from "assert";

import {rem, em, px, ex, vw, vh, vmin, vmax, percent} from "../lib/utils";

describe("Units Utils", () => {
    describe("rem()", () => {
        it("Should return a correct rem value when a number is given", () => {
            assert.strictEqual(rem(1), "1rem");
            assert.strictEqual(rem(0.2), "0.2rem");
            assert.strictEqual(rem(1.2), "1.2rem");
            assert.strictEqual(rem(1 / 4), "0.25rem");
            assert.strictEqual(rem(1 / 3), "0.3333333333333333rem");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(rem(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(rem(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => rem("yeah"), TypeError);
        });
    });

    describe("em()", () => {
        it("Should return a correct em value when a number is given", () => {
            assert.strictEqual(em(1), "1em");
            assert.strictEqual(em(0.2), "0.2em");
            assert.strictEqual(em(1.2), "1.2em");
            assert.strictEqual(em(1 / 4), "0.25em");
            assert.strictEqual(em(1 / 3), "0.3333333333333333em");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(em(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(em(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => em("yeah"), TypeError);
        });
    });

    describe("ex()", () => {
        it("Should return a correct ex value when a number is given", () => {
            assert.strictEqual(ex(1), "1ex");
            assert.strictEqual(ex(0.2), "0.2ex");
            assert.strictEqual(ex(1.2), "1.2ex");
            assert.strictEqual(ex(1 / 4), "0.25ex");
            assert.strictEqual(ex(1 / 3), "0.3333333333333333ex");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(ex(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(ex(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => ex("yeah"), TypeError);
        });
    });

    describe("vw()", () => {
        it("Should return a correct vw value when a number is given", () => {
            assert.strictEqual(vw(1), "1vw");
            assert.strictEqual(vw(0.2), "0.2vw");
            assert.strictEqual(vw(1.2), "1.2vw");
            assert.strictEqual(vw(1 / 4), "0.25vw");
            assert.strictEqual(vw(1 / 3), "0.3333333333333333vw");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(vw(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(vw(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => vw("yeah"), TypeError);
        });
    });

    describe("vh()", () => {
        it("Should return a correct vh value when a number is given", () => {
            assert.strictEqual(vh(1), "1vh");
            assert.strictEqual(vh(0.2), "0.2vh");
            assert.strictEqual(vh(1.2), "1.2vh");
            assert.strictEqual(vh(1 / 4), "0.25vh");
            assert.strictEqual(vh(1 / 3), "0.3333333333333333vh");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(vh(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(vh(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => vh("yeah"), TypeError);
        });
    });

    describe("vmin()", () => {
        it("Should return a correct vmin value when a number is given", () => {
            assert.strictEqual(vmin(1), "1vmin");
            assert.strictEqual(vmin(0.2), "0.2vmin");
            assert.strictEqual(vmin(1.2), "1.2vmin");
            assert.strictEqual(vmin(1 / 4), "0.25vmin");
            assert.strictEqual(vmin(1 / 3), "0.3333333333333333vmin");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(vmin(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(vmin(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => vmin("yeah"), TypeError);
        });
    });

    describe("vmax()", () => {
        it("Should return a correct vmax value when a number is given", () => {
            assert.strictEqual(vmax(1), "1vmax");
            assert.strictEqual(vmax(0.2), "0.2vmax");
            assert.strictEqual(vmax(1.2), "1.2vmax");
            assert.strictEqual(vmax(1 / 4), "0.25vmax");
            assert.strictEqual(vmax(1 / 3), "0.3333333333333333vmax");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(vmax(0), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(vmax(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => vmax("yeah"), TypeError);
        });
    });

    describe("px()", () => {
        it("Should return a correct px value when a number is given", () => {
            assert.strictEqual(px(1), "1px");
            assert.strictEqual(px(2), "2px");
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(px(0), "0");
        });

        it("Should return a floored px value when a decimal number is given", () => {
            assert.strictEqual(px(1.2), "1px");
            assert.strictEqual(px(2.7), "2px");
            assert.strictEqual(px(0.7), "0");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(px(), "0");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => px("yeah"), TypeError);
        });
    });

    describe("percent()", () => {
        it("Should return a correct % value when a number is given", () => {
            assert.strictEqual(percent(0.125), "12.5%");
            assert.strictEqual(percent(1 / 4), "25%");
            assert.strictEqual(percent(1), "100%");
            assert.strictEqual(percent(1 / 3), "33.33333333333333%");
        });

        it("Should return a correct % value when a number is given with the absolute boolean flag", () => {
            assert.strictEqual(percent(1, true), "1%");
            assert.strictEqual(percent(50, true), "50%");
            assert.strictEqual(percent(12.5, true), "12.5%");
            assert.strictEqual(percent(0.125, true), "0.125%");
            assert.strictEqual(percent(1 / 4, true), "0.25%");
            assert.strictEqual(percent(100, true), "100%");
            assert.strictEqual(percent(100 / 3, true), "33.333333333333336%"); // Well, f**k you, javascript ;)
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
