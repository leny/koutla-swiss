/* leny/koutla-swiss
 *
 * /test/mixins.animation.js - Animation mixins tests
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import assert from "assert";

import {
    animation,
    animationTimingFunction,
    cubicBezier,
    steps,
} from "../lib/mixins/animation";

describe("Animation methods", () => {
    describe(`steps()`, () => {
        it(`Should return a correct steps method with any value given, concatenated`, () => {
            assert.strictEqual(steps(1), "steps(1)");
            assert.strictEqual(steps(4, "jump-start"), "steps(4, jump-start)");
        });

        it("Should throw if no value is given", () => {
            assert.throws(() => steps(), TypeError);
        });
    });

    describe(`cubicBezier()`, () => {
        it(`Should return a correct cubic-bezier method with any value given, concatenated`, () => {
            assert.strictEqual(
                cubicBezier(0.1, 0.7, 1, 0.1),
                "cubic-bezier(0.1, 0.7, 1, 0.1)",
            );
        });

        it("Should throw if no value is given", () => {
            assert.throws(() => cubicBezier(), TypeError);
        });

        it("Should throw if the wrong amount of args is given", () => {
            assert.throws(() => cubicBezier(0, 1, 1), TypeError);
            assert.throws(() => cubicBezier(0, 1), TypeError);
            assert.throws(() => cubicBezier(0, 1, 1, 1, 1), TypeError);
        });
    });

    describe("animation()", () => {
        it("Should return a correct method when any value is given", () => {
            assert.deepEqual(animation("bounce"), {
                animation: "bounce",
            });
            assert.deepEqual(
                animation("bounce", "3s", "ease-in-out", "0s", "infinite"),
                {
                    animation: "bounce 3s ease-in-out 0s infinite",
                },
            );
            assert.deepEqual(
                animation("bounce", "5s", cubicBezier(0, 0.58, 1, 0.1)),
                {
                    animation: "bounce 5s cubic-bezier(0, 0.58, 1, 0.1)",
                },
            );
        });
    });

    describe("animationTimingFunction()", () => {
        it("Should return a correct method when any value is given", () => {
            assert.deepEqual(animationTimingFunction("ease"), {
                animationTimingFunction: "ease",
            });
            assert.deepEqual(animationTimingFunction("ease", "step-start"), {
                animationTimingFunction: "ease, step-start",
            });
        });
    });
});
