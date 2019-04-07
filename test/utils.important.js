/* leny/koutla-swiss
 *
 * /test/utils.important.js - Important util tests
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import assert from "assert";

import {size} from "../lib/cjs/mixins/size";
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
} from "../lib/cjs/mixins/flex";
import {important} from "../lib/cjs/utils/important";
import {percent} from "../lib/cjs/utils/units";

describe("!important util", () => {
    describe("important(size())", () => {
        it("Should return width & height when two params are given", () => {
            assert.deepEqual(important(size("1rem", "0.5rem")), {
                width: "1rem !important",
                height: "0.5rem !important",
            });
            assert.deepEqual(important(size("100%", "5rem")), {
                width: "100% !important",
                height: "5rem !important",
            });
            assert.deepEqual(important(size("100%", 0)), {
                width: "100% !important",
                height: "0 !important",
            });
        });

        it("Should return same width & height when one param is given", () => {
            assert.deepEqual(important(size("1rem")), {
                width: "1rem !important",
                height: "1rem !important",
            });
            assert.deepEqual(important(size("100%")), {
                width: "100% !important",
                height: "100% !important",
            });
            assert.deepEqual(important(size(0)), {
                width: "0 !important",
                height: "0 !important",
            });
        });

        it("Should return 0 when no param are given", () => {
            assert.deepEqual(important(size()), {
                width: "0 !important",
                height: "0 !important",
            });
        });
    });

    describe("important(flexbox())", () => {
        it("Should returns a display value when no param are given", () => {
            assert.deepEqual(important(flexbox()), {
                display: "flex !important",
            });
        });

        it("Should set a direction with the first param", () => {
            assert.deepEqual(important(flexbox(FLEX_DIRECTION_COLUMN)), {
                display: "flex !important",
                flexDirection: "column !important",
            });
        });

        it("Should set a main axis alignment with the second param", () => {
            assert.deepEqual(
                important(flexbox(FLEX_DIRECTION_ROW, FLEX_ALIGN_END)),
                {
                    display: "flex !important",
                    flexDirection: "row !important",
                    justifyContent: "end !important",
                },
            );
            assert.deepEqual(
                important(flexbox(FLEX_DIRECTION_ROW, FLEX_ALIGN_SPACE_EVENLY)),
                {
                    display: "flex !important",
                    flexDirection: "row !important",
                    justifyContent: "space-evenly !important",
                },
            );
        });

        it("Should set a second axis alignment with the third param", () => {
            assert.deepEqual(
                important(
                    flexbox(
                        FLEX_DIRECTION_ROW,
                        FLEX_ALIGN_SPACE_EVENLY,
                        FLEX_ALIGN_SELF_END,
                    ),
                ),
                {
                    display: "flex !important",
                    flexDirection: "row !important",
                    justifyContent: "space-evenly !important",
                    alignItems: "self-end !important",
                },
            );
        });

        it("Should set a wrap value with the fourth param", () => {
            assert.deepEqual(
                important(
                    flexbox(
                        FLEX_DIRECTION_ROW,
                        FLEX_ALIGN_SPACE_EVENLY,
                        FLEX_ALIGN_SELF_END,
                        FLEX_WRAP,
                    ),
                ),
                {
                    display: "flex !important",
                    flexDirection: "row !important",
                    justifyContent: "space-evenly !important",
                    alignItems: "self-end !important",
                    flexWrap: "wrap !important",
                },
            );
        });
    });

    describe("important(flexrow())", () => {
        it(`Should be an alias of flexbox("row")`, () => {
            assert.deepEqual(important(flexrow()), {
                display: "flex !important",
                flexDirection: "row !important",
            });

            assert.deepEqual(important(flexrow(FLEX_ALIGN_END)), {
                display: "flex !important",
                flexDirection: "row !important",
                justifyContent: "end !important",
            });
            assert.deepEqual(important(flexrow(FLEX_ALIGN_SPACE_EVENLY)), {
                display: "flex !important",
                flexDirection: "row !important",
                justifyContent: "space-evenly !important",
            });

            assert.deepEqual(
                important(
                    flexrow(FLEX_ALIGN_SPACE_EVENLY, FLEX_ALIGN_SELF_END),
                ),
                {
                    display: "flex !important",
                    flexDirection: "row !important",
                    justifyContent: "space-evenly !important",
                    alignItems: "self-end !important",
                },
            );

            assert.deepEqual(
                important(
                    flexrow(
                        FLEX_ALIGN_SPACE_EVENLY,
                        FLEX_ALIGN_SELF_END,
                        FLEX_WRAP,
                    ),
                ),
                {
                    display: "flex !important",
                    flexDirection: "row !important",
                    justifyContent: "space-evenly !important",
                    alignItems: "self-end !important",
                    flexWrap: "wrap !important",
                },
            );
        });
    });

    describe("important(flexcolumn())", () => {
        it(`Should be an alias of flexbox("column")`, () => {
            assert.deepEqual(important(flexcolumn()), {
                display: "flex !important",
                flexDirection: "column !important",
            });

            assert.deepEqual(important(flexcolumn(FLEX_ALIGN_END)), {
                display: "flex !important",
                flexDirection: "column !important",
                justifyContent: "end !important",
            });
            assert.deepEqual(important(flexcolumn(FLEX_ALIGN_SPACE_EVENLY)), {
                display: "flex !important",
                flexDirection: "column !important",
                justifyContent: "space-evenly !important",
            });

            assert.deepEqual(
                important(
                    flexcolumn(FLEX_ALIGN_SPACE_EVENLY, FLEX_ALIGN_SELF_END),
                ),
                {
                    display: "flex !important",
                    flexDirection: "column !important",
                    justifyContent: "space-evenly !important",
                    alignItems: "self-end !important",
                },
            );

            assert.deepEqual(
                important(
                    flexcolumn(
                        FLEX_ALIGN_SPACE_EVENLY,
                        FLEX_ALIGN_SELF_END,
                        FLEX_WRAP,
                    ),
                ),
                {
                    display: "flex !important",
                    flexDirection: "column !important",
                    justifyContent: "space-evenly !important",
                    alignItems: "self-end !important",
                    flexWrap: "wrap !important",
                },
            );
        });
    });

    describe("important(flex())", () => {
        it("Should concatenate given arguments into a flex property", () => {
            assert.deepEqual(important(flex(1, 0, "auto")), {
                flex: "1 0 auto !important",
            });
            assert.deepEqual(important(flex(1, 0, 0)), {
                flex: "1 0 0 !important",
            });
            assert.deepEqual(important(flex(1, 0)), {
                flex: "1 0 !important",
            });
            assert.deepEqual(important(flex(1)), {
                flex: "1 !important",
            });
        });

        it("Should return nothing when no arguments are given", () => {
            assert.deepEqual(important(flex()), {});
        });
    });

    describe("important(percent())", () => {
        it("Should return a correct % value when a number is given", () => {
            assert.strictEqual(important(percent(12.5)), "12.5% !important");
            assert.strictEqual(important(percent(100 / 4)), "25% !important");
            assert.strictEqual(important(percent(100)), "100% !important");
            assert.strictEqual(important(percent(-50)), "-50% !important");
            assert.strictEqual(
                important(percent(100 / 3)),
                "33.333333333333336% !important",
            ); // Well, f*ck you.
        });

        it("Should return a correct % value when a number is given with the decimal boolean flag", () => {
            assert.strictEqual(important(percent(0.01, true)), "1% !important");
            assert.strictEqual(important(percent(0.5, true)), "50% !important");
            assert.strictEqual(
                important(percent(-0.5, true)),
                "-50% !important",
            );
            assert.strictEqual(
                important(percent(0.125, true)),
                "12.5% !important",
            );
            assert.strictEqual(
                important(percent(12.5, true)),
                "1250% !important",
            );
            assert.strictEqual(
                important(percent(1 / 4, true)),
                "25% !important",
            );
            assert.strictEqual(important(percent(1, true)), "100% !important");
            assert.strictEqual(
                important(percent(1 / 3, true)),
                "33.33333333333333% !important",
            );
        });

        it("Should return an unit-less zero when zero is given", () => {
            assert.strictEqual(important(percent(0)), "0 !important");
        });

        it("Should return an unit-less zero when nothing is given", () => {
            assert.strictEqual(important(percent()), "0 !important");
        });

        it("Should throw if the given value is not a number", () => {
            assert.throws(() => important(percent("yeah")), TypeError);
        });
    });
});
