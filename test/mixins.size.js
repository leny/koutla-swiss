/* leny/koutla-swiss
 *
 * /test/mixins.size.js - Size mixin tests
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

import assert from "assert";

import {size} from "../lib/mixins";

describe("Mixins", () => {
    describe("size()", () => {
        it("Should return width & height when two params are given", () => {
            assert.deepEqual(size("1rem", "0.5rem"), {
                width: "1rem",
                height: "0.5rem",
            });
            assert.deepEqual(size("100%", "5rem"), {
                width: "100%",
                height: "5rem",
            });
            assert.deepEqual(size("100%", 0), {width: "100%", height: "0"});
        });

        it("Should return same width & height when one param is given", () => {
            assert.deepEqual(size("1rem"), {width: "1rem", height: "1rem"});
            assert.deepEqual(size("100%"), {width: "100%", height: "100%"});
            assert.deepEqual(size(0), {width: "0", height: "0"});
        });

        it("Should return 0 when no param is given", () => {
            assert.deepEqual(size(), {width: "0", height: "0"});
        });
    });
});
