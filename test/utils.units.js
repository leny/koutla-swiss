/* leny/koutla-swiss
 *
 * /test/utils.units.js - Units utils tests
 *
 * coded by leny@flatLand!
 * started at 12/01/2018
 */

import assert from "assert";

import {rem} from "../lib";

describe("Units", () => {
    describe("rem()", () => {
        it("Should return a correct rem value when a number is given", () => {
            assert.strictEqual(rem(1), "1rem");
            assert.strictEqual(rem(0.2), "0.2rem");
            assert.strictEqual(rem(1.2), "1.2rem");
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
});
