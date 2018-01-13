/* leny/koutla-swiss
 *
 * /test/mixins.position.js - Position mixin tests
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

import assert from "assert";

import {
    position,
    relative,
    absolute,
    sticky,
    fixed,
    POSITION_STATIC,
    POSITION_STICKY,
    POSITION_FIXED,
    POSITION_ABSOLUTE,
    POSITION_RELATIVE,
} from "../lib/mixins";

describe("Position Mixins", () => {
    describe("position()", () => {
        it("Should use relative position when relative constant is given", () => {
            assert.deepEqual(position(POSITION_RELATIVE), {
                position: "relative",
            });
        });
        it("Should use absolute position when absolute constant is given", () => {
            assert.deepEqual(position(POSITION_ABSOLUTE), {
                position: "absolute",
            });
        });
        it("Should use static position when static constant is given", () => {
            assert.deepEqual(position(POSITION_STATIC), {position: "static"});
        });
        it("Should use fixed position when fixed constant is given", () => {
            assert.deepEqual(position(POSITION_FIXED), {position: "fixed"});
        });
        it("Should use sticky position when sticky constant is given", () => {
            assert.deepEqual(position(POSITION_STICKY), {position: "sticky"});
        });

        it("Should use the same value for position when only one value is given", () => {
            assert.deepEqual(position(POSITION_STATIC, "1rem"), {
                position: "static",
                top: "1rem",
                right: "1rem",
                bottom: "1rem",
                left: "1rem",
            });
            assert.deepEqual(position(POSITION_STATIC, 0), {
                position: "static",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
            });
        });

        it("Should use the right values for top/bottom and left/right positions when two values are given", () => {
            assert.deepEqual(position(POSITION_STICKY, "1rem", "2rem"), {
                position: "sticky",
                top: "1rem",
                right: "2rem",
                bottom: "1rem",
                left: "2rem",
            });
            assert.deepEqual(position(POSITION_STICKY, 0, "2rem"), {
                position: "sticky",
                top: "0",
                right: "2rem",
                bottom: "0",
                left: "2rem",
            });
        });

        it("Should use the right values for top, bottom and left/right positions when three values are given", () => {
            assert.deepEqual(
                position(POSITION_ABSOLUTE, "1rem", "2rem", "3rem"),
                {
                    position: "absolute",
                    top: "1rem",
                    right: "2rem",
                    bottom: "3rem",
                    left: "2rem",
                },
            );
            assert.deepEqual(position(POSITION_ABSOLUTE, 0, "2rem", "100%"), {
                position: "absolute",
                top: "0",
                right: "2rem",
                bottom: "100%",
                left: "2rem",
            });
        });

        it("Should use the right values for top, bottom, left and right positions when four values are given", () => {
            assert.deepEqual(
                position(POSITION_RELATIVE, "1rem", "2rem", "3rem", "4rem"),
                {
                    position: "relative",
                    top: "1rem",
                    right: "2rem",
                    bottom: "3rem",
                    left: "4rem",
                },
            );
            assert.deepEqual(
                position(POSITION_RELATIVE, 0, "2rem", "100%", "33px"),
                {
                    position: "relative",
                    top: "0",
                    right: "2rem",
                    bottom: "100%",
                    left: "33px",
                },
            );
        });
    });

    describe("relative()", () => {
        it(`Should be an alias of position("relative")`, () => {
            assert.deepEqual(relative(), {position: "relative"});
            assert.deepEqual(relative("1rem"), {
                position: "relative",
                top: "1rem",
                right: "1rem",
                bottom: "1rem",
                left: "1rem",
            });
            assert.deepEqual(relative("1rem", 0), {
                position: "relative",
                top: "1rem",
                right: "0",
                bottom: "1rem",
                left: "0",
            });
            assert.deepEqual(relative("1rem", 0, "100%"), {
                position: "relative",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "0",
            });
            assert.deepEqual(relative("1rem", 0, "100%", "3px"), {
                position: "relative",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "3px",
            });
        });
    });

    describe("absolute()", () => {
        it(`Should be an alias of position("absolute")`, () => {
            assert.deepEqual(absolute(), {position: "absolute"});
            assert.deepEqual(absolute("1rem"), {
                position: "absolute",
                top: "1rem",
                right: "1rem",
                bottom: "1rem",
                left: "1rem",
            });
            assert.deepEqual(absolute("1rem", 0), {
                position: "absolute",
                top: "1rem",
                right: "0",
                bottom: "1rem",
                left: "0",
            });
            assert.deepEqual(absolute("1rem", 0, "100%"), {
                position: "absolute",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "0",
            });
            assert.deepEqual(absolute("1rem", 0, "100%", "3px"), {
                position: "absolute",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "3px",
            });
        });
    });

    describe("fixed()", () => {
        it(`Should be an alias of position("fixed")`, () => {
            assert.deepEqual(fixed(), {position: "fixed"});
            assert.deepEqual(fixed("1rem"), {
                position: "fixed",
                top: "1rem",
                right: "1rem",
                bottom: "1rem",
                left: "1rem",
            });
            assert.deepEqual(fixed("1rem", 0), {
                position: "fixed",
                top: "1rem",
                right: "0",
                bottom: "1rem",
                left: "0",
            });
            assert.deepEqual(fixed("1rem", 0, "100%"), {
                position: "fixed",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "0",
            });
            assert.deepEqual(fixed("1rem", 0, "100%", "3px"), {
                position: "fixed",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "3px",
            });
        });
    });

    describe("sticky()", () => {
        it(`Should be an alias of position("sticky")`, () => {
            assert.deepEqual(sticky(), {position: "sticky"});
            assert.deepEqual(sticky("1rem"), {
                position: "sticky",
                top: "1rem",
                right: "1rem",
                bottom: "1rem",
                left: "1rem",
            });
            assert.deepEqual(sticky("1rem", 0), {
                position: "sticky",
                top: "1rem",
                right: "0",
                bottom: "1rem",
                left: "0",
            });
            assert.deepEqual(sticky("1rem", 0, "100%"), {
                position: "sticky",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "0",
            });
            assert.deepEqual(sticky("1rem", 0, "100%", "3px"), {
                position: "sticky",
                top: "1rem",
                right: "0",
                bottom: "100%",
                left: "3px",
            });
        });
    });
});
