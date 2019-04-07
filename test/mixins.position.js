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
} from "../lib/cjs/mixins/position";

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

        it("Should use top, left, bottom and/or right values from second value if an object is given", () => {
            assert.deepEqual(
                position(POSITION_RELATIVE, {top: "2rem", right: "3rem"}),
                {position: "relative", top: "2rem", right: "3rem"},
            );
            assert.deepEqual(
                position(POSITION_ABSOLUTE, {bottom: "2rem", left: "3rem"}),
                {position: "absolute", bottom: "2rem", left: "3rem"},
            );
            assert.deepEqual(
                position(POSITION_STATIC, {
                    top: 0,
                    right: "100%",
                    bottom: "2rem",
                    left: "3rem",
                }),
                {
                    position: "static",
                    top: "0",
                    right: "100%",
                    bottom: "2rem",
                    left: "3rem",
                },
            );
        });

        it("Should priorise the object values if an object is given as second value", () => {
            assert.deepEqual(
                position(
                    POSITION_RELATIVE,
                    {top: "2rem", right: "3rem"},
                    "2rem",
                    0,
                ),
                {position: "relative", top: "2rem", right: "3rem"},
            );
            assert.deepEqual(
                position(
                    POSITION_ABSOLUTE,
                    {bottom: "2rem", left: "3rem"},
                    "3rem",
                    0,
                    "100%",
                ),
                {position: "absolute", bottom: "2rem", left: "3rem"},
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
            assert.deepEqual(relative({top: "1rem", bottom: "100%"}), {
                position: "relative",
                top: "1rem",
                bottom: "100%",
            });
            assert.deepEqual(
                relative({bottom: "1rem", left: "100%"}, "2rem", 0),
                {
                    position: "relative",
                    bottom: "1rem",
                    left: "100%",
                },
            );
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
            assert.deepEqual(absolute({top: "1rem", bottom: "100%"}), {
                position: "absolute",
                top: "1rem",
                bottom: "100%",
            });
            assert.deepEqual(
                absolute({bottom: "1rem", left: "100%"}, "2rem", 0),
                {
                    position: "absolute",
                    bottom: "1rem",
                    left: "100%",
                },
            );
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
            assert.deepEqual(fixed({top: "1rem", bottom: "100%"}), {
                position: "fixed",
                top: "1rem",
                bottom: "100%",
            });
            assert.deepEqual(fixed({bottom: "1rem", left: "100%"}, "2rem", 0), {
                position: "fixed",
                bottom: "1rem",
                left: "100%",
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
            assert.deepEqual(sticky({top: "1rem", bottom: "100%"}), {
                position: "sticky",
                top: "1rem",
                bottom: "100%",
            });
            assert.deepEqual(
                sticky({bottom: "1rem", left: "100%"}, "2rem", 0),
                {
                    position: "sticky",
                    bottom: "1rem",
                    left: "100%",
                },
            );
        });
    });
});
