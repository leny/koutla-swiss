/* leny/koutla-swiss
 *
 * /test/utils.media.js - MediaQueries mixin tests
 *
 * coded by leny@flatLand!
 * started at 13/01/2018
 */

import assert from "assert";

import {mq} from "../lib/utils/media";

describe("MediaQueries Mixins", () => {
    describe("mq()", () => {
        it("Should return a media query with the condition and the values given", () => {
            assert.deepEqual(
                mq("min-width: 960px", {width: "100%", backgroundColor: "red"}),
                {
                    "@media(min-width: 960px)": {
                        width: "100%",
                        backgroundColor: "red",
                    },
                },
            );
        });

        it("Should throw if the first param isn't a String", () => {
            assert.throws(() => mq(23, {width: "100%"}), TypeError);
        });
    });
});
