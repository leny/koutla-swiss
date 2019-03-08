/* leny/koutla-swiss
 *
 * /test/utils.js - Transform mixins tests
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import assert from "assert";

import * as utilsMethod from "../lib/commons/utils";

describe("Utils methods", () => {
    describe("glueWithSpaces()", () => {
        const {glueWithSpaces} = utilsMethod;

        it("Should return a correct concatenation with any value", () => {
            assert.strictEqual(glueWithSpaces(1, 2, 3), "1 2 3");
            assert.strictEqual(
                glueWithSpaces("any", "word", "eventually, spaced ones"),
                "any word eventually, spaced ones",
            );
        });

        it("Should return an empty string if nothing is given", () => {
            assert.strictEqual(glueWithSpaces(), "");
        });
    });

    describe("glueWithCommas()", () => {
        const {glueWithCommas} = utilsMethod;

        it("Should return a correct concatenation with any value", () => {
            assert.strictEqual(glueWithCommas(1, 2, 3), "1, 2, 3");
            assert.strictEqual(
                glueWithCommas("any", "word", "eventually, with comma, kinda"),
                "any, word, eventually, with comma, kinda",
            );
        });

        it("Should return an empty string if nothing is given", () => {
            assert.strictEqual(glueWithCommas(), "");
        });
    });
});
