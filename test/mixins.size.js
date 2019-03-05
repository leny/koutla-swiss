/* leny/koutla-swiss
 *
 * /test/mixins.size.js - Size mixin tests
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

import assert from "assert";

import {size, minSize, maxSize} from "../lib/mixins/size";

describe("Size Mixins", () => {
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

        it("Should return 0 when no param are given", () => {
            assert.deepEqual(size(), {width: "0", height: "0"});
        });
    });

    describe("minSize()", () => {
        it("Should return min-width & min-height when two params are given", () => {
            assert.deepEqual(minSize("1rem", "0.5rem"), {
                minWidth: "1rem",
                minHeight: "0.5rem",
            });
            assert.deepEqual(minSize("100%", "5rem"), {
                minWidth: "100%",
                minHeight: "5rem",
            });
            assert.deepEqual(minSize("100%", 0), {
                minWidth: "100%",
                minHeight: "0",
            });
        });

        it("Should return same min-width & min-height when one param is given", () => {
            assert.deepEqual(minSize("1rem"), {
                minWidth: "1rem",
                minHeight: "1rem",
            });
            assert.deepEqual(minSize("100%"), {
                minWidth: "100%",
                minHeight: "100%",
            });
            assert.deepEqual(minSize(0), {minWidth: "0", minHeight: "0"});
        });

        it("Should return 0 when no param are given", () => {
            assert.deepEqual(minSize(), {minWidth: "0", minHeight: "0"});
        });
    });

    describe("maxSize()", () => {
        it("Should return max-width & max-height when two params are given", () => {
            assert.deepEqual(maxSize("1rem", "0.5rem"), {
                maxWidth: "1rem",
                maxHeight: "0.5rem",
            });
            assert.deepEqual(maxSize("100%", "5rem"), {
                maxWidth: "100%",
                maxHeight: "5rem",
            });
            assert.deepEqual(maxSize("100%", 0), {
                maxWidth: "100%",
                maxHeight: "0",
            });
        });

        it("Should return same max-width & max-height when one param is given", () => {
            assert.deepEqual(maxSize("1rem"), {
                maxWidth: "1rem",
                maxHeight: "1rem",
            });
            assert.deepEqual(maxSize("100%"), {
                maxWidth: "100%",
                maxHeight: "100%",
            });
            assert.deepEqual(maxSize(0), {maxWidth: "0", maxHeight: "0"});
        });

        it("Should return 0 when no param are given", () => {
            assert.deepEqual(maxSize(), {maxWidth: "0", maxHeight: "0"});
        });
    });
});
