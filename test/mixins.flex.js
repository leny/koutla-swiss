/* leny/koutla-swiss
 *
 * /test/mixins.flex.js - Flex mixins tests
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

import assert from "assert";

import {
    flexbox,
    FLEX_DIRECTION_ROW,
    FLEX_DIRECTION_COLUMN,
    FLEX_WRAP,
    FLEX_ALIGN_END,
    FLEX_ALIGN_SPACE_EVENLY,
    FLEX_ALIGN_SELF_END,
    flexrow,
    flexcolumn,
    flex,
} from "../lib/mixins/flex";

describe("Flex Mixins", () => {
    describe("flexbox()", () => {
        it("Should returns a display value when no param are given", () => {
            assert.deepEqual(flexbox(), {display: "flex"});
        });

        it("Should set a direction with the first param", () => {
            assert.deepEqual(flexbox(FLEX_DIRECTION_COLUMN), {
                display: "flex",
                flexDirection: "column",
            });
        });

        it("Should set a main axis alignment with the second param", () => {
            assert.deepEqual(flexbox(FLEX_DIRECTION_ROW, FLEX_ALIGN_END), {
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
            });
            assert.deepEqual(
                flexbox(FLEX_DIRECTION_ROW, FLEX_ALIGN_SPACE_EVENLY),
                {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                },
            );
        });

        it("Should set a second axis alignment with the third param", () => {
            assert.deepEqual(
                flexbox(
                    FLEX_DIRECTION_ROW,
                    FLEX_ALIGN_SPACE_EVENLY,
                    FLEX_ALIGN_SELF_END,
                ),
                {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "self-end",
                },
            );
        });

        it("Should set a wrap value with the fourth param", () => {
            assert.deepEqual(
                flexbox(
                    FLEX_DIRECTION_ROW,
                    FLEX_ALIGN_SPACE_EVENLY,
                    FLEX_ALIGN_SELF_END,
                    FLEX_WRAP,
                ),
                {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "self-end",
                    flexWrap: "wrap",
                },
            );
        });
    });

    describe("flexrow()", () => {
        it(`Should be an alias of flexbox("row")`, () => {
            assert.deepEqual(flexrow(), {
                display: "flex",
                flexDirection: "row",
            });

            assert.deepEqual(flexrow(FLEX_ALIGN_END), {
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
            });
            assert.deepEqual(flexrow(FLEX_ALIGN_SPACE_EVENLY), {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            });

            assert.deepEqual(
                flexrow(FLEX_ALIGN_SPACE_EVENLY, FLEX_ALIGN_SELF_END),
                {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "self-end",
                },
            );

            assert.deepEqual(
                flexrow(
                    FLEX_ALIGN_SPACE_EVENLY,
                    FLEX_ALIGN_SELF_END,
                    FLEX_WRAP,
                ),
                {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "self-end",
                    flexWrap: "wrap",
                },
            );
        });
    });

    describe("flexcolumn()", () => {
        it(`Should be an alias of flexbox("column")`, () => {
            assert.deepEqual(flexcolumn(), {
                display: "flex",
                flexDirection: "column",
            });

            assert.deepEqual(flexcolumn(FLEX_ALIGN_END), {
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
            });
            assert.deepEqual(flexcolumn(FLEX_ALIGN_SPACE_EVENLY), {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
            });

            assert.deepEqual(
                flexcolumn(FLEX_ALIGN_SPACE_EVENLY, FLEX_ALIGN_SELF_END),
                {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "self-end",
                },
            );

            assert.deepEqual(
                flexcolumn(
                    FLEX_ALIGN_SPACE_EVENLY,
                    FLEX_ALIGN_SELF_END,
                    FLEX_WRAP,
                ),
                {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "self-end",
                    flexWrap: "wrap",
                },
            );
        });
    });

    describe("flex()", () => {
        it("Should concatenate given arguments into a flex property", () => {
            assert.deepEqual(flex(1, 0, "auto"), {flex: "1 0 auto"});
            assert.deepEqual(flex(1, 0, 0), {flex: "1 0 0"});
            assert.deepEqual(flex(1, 0), {
                flex: "1 0",
            });
            assert.deepEqual(flex(1), {
                flex: "1",
            });
        });

        it("Should return nothing when no arguments are given", () => {
            assert.deepEqual(flex(), {});
        });
    });
});
