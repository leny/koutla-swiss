/* leny/koutla-swiss
 *
 * /test/mixins.background.js - Background mixins tests
 *
 * coded by leny@flatLand!
 * started at 03/02/2019
 */

import assert from "assert";

import * as backgroundMethods from "../lib/mixins/background";

describe("Gradient methods", () => {
    Object.entries({
        linearGradient: "linear-gradient",
        radialGradient: "radial-gradient",
        repeatingLinearGradient: "repeating-linear-gradient",
        repeatingRadialGradient: "repeating-radial-gradient",
        conicGradient: "conic-gradient",
    }).forEach(([name, value]) => {
        const method = backgroundMethods[name];

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

    const {url} = backgroundMethods;

    describe("url()", () => {
        it(`Should return a correct url method with any value given, quoted`, () => {
            assert.strictEqual(url("./bcg.png"), `url("./bcg.png")`);
            assert.strictEqual(
                url("http://placehold.it/500"),
                `url("http://placehold.it/500")`,
            );
        });

        it("Should throw if no value is given", () => {
            assert.throws(() => url(), TypeError);
        });

        it("Should throw if more than one value is given", () => {
            assert.throws(
                () => url("http://", "placehold.it", "/500"),
                TypeError,
            );
        });
    });

    describe("background()", () => {
        const {background, linearGradient} = backgroundMethods;

        it("Should return a correct method when any value is given", () => {
            assert.deepEqual(background("pink"), {
                background: "pink",
            });
            assert.deepEqual(
                background(
                    "black",
                    "url(./bcg.png)",
                    "top",
                    "center",
                    "no-repeat",
                ),
                {
                    background: "black url(./bcg.png) top center no-repeat",
                },
            );
            assert.deepEqual(
                background("yellow", linearGradient("#e66465", "#9198e5")),
                {
                    background: "yellow linear-gradient(#e66465, #9198e5)",
                },
            );
        });
    });
});
