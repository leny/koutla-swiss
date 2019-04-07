/* leny/koutla-swiss
 *
 * /test/mixins.transform.js - Transform mixins tests
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import assert from "assert";

import * as transformMethods from "../lib/cjs/mixins/transform";

describe("Transform methods", () => {
    [
        "matrix",
        "matrix3d",
        "perspective",
        "rotate",
        "rotate3d",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scale3d",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "translate",
        "translate3d",
        "translateX",
        "translateY",
        "translateZ",
    ].forEach(name => {
        const method = transformMethods[name];

        describe(`${name}()`, () => {
            it(`Should return a correct ${name} method with any value given, concatenated`, () => {
                assert.strictEqual(method(1), `${name}(1)`);
                assert.strictEqual(method(1, 2, 3), `${name}(1, 2, 3)`);
                assert.strictEqual(method("1rem", "20%"), `${name}(1rem, 20%)`);
            });

            it("Should throw if no value is given", () => {
                assert.throws(() => method(), TypeError);
            });
        });
    });

    describe("transform()", () => {
        const {transform, rotate, translate} = transformMethods;

        it("Should return a correct method when any value is given", () => {
            assert.deepEqual(transform(rotate("2deg")), {
                transform: "rotate(2deg)",
            });
            assert.deepEqual(transform(rotate("2deg"), translate(1, 2, 1)), {
                transform: "rotate(2deg) translate(1, 2, 1)",
            });
        });

        it("Should return a none value if nothing is given", () => {
            assert.deepEqual(transform(), {transform: "none"});
        });
    });

    describe("transformOrigin()", () => {
        const {transformOrigin} = transformMethods;

        it("Should return a correct method when any value is given", () => {
            assert.deepEqual(transformOrigin(0, "2rem", "3%"), {
                transformOrigin: "0 2rem 3%",
            });
            assert.deepEqual(transformOrigin(0, "2rem"), {
                transformOrigin: "0 2rem",
            });
        });

        it("Should return nothing when no arguments are given", () => {
            assert.deepEqual(transformOrigin(), {});
        });
    });
});
