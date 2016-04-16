System.register(['./LongestIncreasingSequence'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LongestIncreasingSequence_1;
    return {
        setters:[
            function (LongestIncreasingSequence_1_1) {
                LongestIncreasingSequence_1 = LongestIncreasingSequence_1_1;
            }],
        execute: function() {
            describe("Longest Increasing Sequence", function () {
                it("should work", function () {
                    var arr = [1, -2, 2, -2, 3, 5, -2];
                    var result = 4;
                    expect(LongestIncreasingSequence_1.LongestIncreasingSequence.exec(arr)).toEqual(result);
                });
                it("should also work", function () {
                    var arr = [10, 9, 2, 5, 3, 7, 101, 18];
                    var result = 4;
                    expect(LongestIncreasingSequence_1.LongestIncreasingSequence.exec(arr)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=LongestIncreasingSequenceSpec.js.map