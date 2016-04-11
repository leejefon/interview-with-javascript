System.register(['./LongestUniqueLetters'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LongestUniqueLetters_1;
    return {
        setters:[
            function (LongestUniqueLetters_1_1) {
                LongestUniqueLetters_1 = LongestUniqueLetters_1_1;
            }],
        execute: function() {
            describe("Longest Substring without Repeating Characters", function () {
                it("should work", function () {
                    var str = "abcabcbb";
                    var result = "abc";
                    expect(LongestUniqueLetters_1.LongestUniqueLetters.exec(str)).toEqual(result.length);
                });
            });
        }
    }
});
//# sourceMappingURL=LongestUniqueLettersSpec.js.map