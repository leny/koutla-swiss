/* leny/koutla-swiss
 *
 * /test/mixins.filter.js - Filter mixins tests
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import assert from "assert";

import * as filterMethods from "../lib/mixins/filter";

describe("Filter methods", () => {
    Object.entries({
        blur: "blur",
        brightness: "brightness",
        contrast: "contrast",
        dropShadow: "drop-shadow",
        grayscale: "grayscale",
        hueRotate: "hue-rotate",
        invert: "invert",
        opacity: "opacity",
        saturate: "saturate",
        sepia: "sepia",
    }).forEach(([name, value]) => {
        const method = filterMethods[name];

        describe(`${name}()`, () => {
            it(`Should return a correct ${value} method with any value given, concatenated`, () => {
                assert.strictEqual(method(1), `${value}(1)`);
                assert.strictEqual(method(1, 2, 3), `${value}(1, 2, 3)`);
                assert.strictEqual(
                    method("1rem", "20%"),
                    `${value}(1rem, 20%)`,
                );
            });

            it("Should throw if no value is given", () => {
                assert.throws(() => method(), TypeError);
            });
        });
    });

    describe("filter()", () => {
        const {filter, blur, contrast} = filterMethods;

        it("Should return a correct method when any value is given", () => {
            assert.deepEqual(filter(blur("4px")), {
                filter: "blur(4px)",
            });
            assert.deepEqual(filter(blur("4px"), contrast("100%")), {
                filter: "blur(4px) contrast(100%)",
            });
        });

        it("Should return a none value if nothing is given", () => {
            assert.deepEqual(filter(), {filter: "none"});
        });
    });
});
