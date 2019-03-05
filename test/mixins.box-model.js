/* leny/koutla-swiss
 *
 * /test/mixins.box-model.js - Box-model props mixins tests
 *
 * coded by leny@flatLand!
 * started at 26/01/2018
 */

import assert from "assert";

import {margin, padding} from "../lib/mixins/box-model";

describe("Box-model Mixins", () => {
    describe("margin()", () => {
        it("Should concatenate given arguments into a margin property", () => {
            assert.deepEqual(margin("2rem"), {margin: "2rem"});
            assert.deepEqual(margin("2rem", "20%"), {margin: "2rem 20%"});
            assert.deepEqual(margin("2rem 10%", "20%"), {
                margin: "2rem 10% 20%",
            });
            assert.deepEqual(margin("2rem", "20%", "1px"), {
                margin: "2rem 20% 1px",
            });
            assert.deepEqual(margin("2rem", "20%", "1px", "5em"), {
                margin: "2rem 20% 1px 5em",
            });
        });

        it("Should return nothing when no arguments are given", () => {
            assert.deepEqual(margin(), {});
        });
    });

    describe("padding()", () => {
        it("Should concatenate given arguments into a padding property", () => {
            assert.deepEqual(padding("2rem"), {padding: "2rem"});
            assert.deepEqual(padding("2rem", "20%"), {padding: "2rem 20%"});
            assert.deepEqual(padding("2rem 10%", "20%"), {
                padding: "2rem 10% 20%",
            });
            assert.deepEqual(padding("2rem", "20%", "1px"), {
                padding: "2rem 20% 1px",
            });
            assert.deepEqual(padding("2rem", "20%", "1px", "5em"), {
                padding: "2rem 20% 1px 5em",
            });
        });

        it("Should return nothing when no arguments are given", () => {
            assert.deepEqual(padding(), {});
        });
    });
});
