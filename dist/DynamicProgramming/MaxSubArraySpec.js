System.register(['./MaxSubArray'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MaxSubArray_1;
    return {
        setters:[
            function (MaxSubArray_1_1) {
                MaxSubArray_1 = MaxSubArray_1_1;
            }],
        execute: function() {
            describe("Maximum Subarray", function () {
                it("should work", function () {
                    var arr = [1, -2, 3, -2, 1, 5, -2];
                    var result = 7;
                    expect(MaxSubArray_1.MaxSubArray.exec(arr)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=MaxSubArraySpec.js.map