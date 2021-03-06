/* leny/koutla-swiss
 *
 * /test/mixins.border.js - Border props mixins tests
 *
 * coded by leny@flatLand!
 * started at 09/02/2018
 */

import assert from "assert";

import * as borderMethods from "../lib/cjs/mixins/borders";

describe("Border Mixins", () => {
    [
        "border",
        "borderTop",
        "borderRight",
        "borderBottom",
        "borderLeft",
    ].forEach(name => {
        const method = borderMethods[name];

        describe(`${name}()`, () => {
            it(`Should concatenate given arguments into a ${name} property`, () => {
                assert.deepEqual(method("2rem", "solid", "red"), {
                    [name]: "2rem solid red",
                });
                assert.deepEqual(method("2rem", "dashed"), {
                    [name]: "2rem dashed",
                });
                assert.deepEqual(method("1px"), {
                    [name]: "1px",
                });
            });

            it("Should return nothing when no arguments are given", () => {
                assert.deepEqual(method(), {});
            });
        });
    });

    describe("borderRadius()", () => {
        const borderRadius = borderMethods.borderRadius;

        it("Should concatenate given arguments into a border property", () => {
            assert.deepEqual(borderRadius("2rem"), {
                borderRadius: "2rem",
            });
            assert.deepEqual(borderRadius("2rem", "50%"), {
                borderRadius: "2rem 50%",
            });
            assert.deepEqual(borderRadius("100%"), {
                borderRadius: "100%",
            });
        });

        it("Should return nothing when no arguments are given", () => {
            assert.deepEqual(borderRadius(), {});
        });
    });
});
