/* leny/koutla-swiss
 *
 * /test/utils.units.js - Units utils tests
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import assert from "assert";

import {rem, em, px} from "../lib/utils";
import {rem, em, px, ex} from "../lib/utils";

describe("Units", () => {
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
});
