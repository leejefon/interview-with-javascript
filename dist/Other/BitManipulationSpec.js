System.register(['./BitManipulation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BitManipulation_1;
    return {
        setters:[
            function (BitManipulation_1_1) {
                BitManipulation_1 = BitManipulation_1_1;
            }],
        execute: function() {
            describe("Bit Manipulations", function () {
                it("Swap without temp variable", function () {
                    var a = [1, 2];
                    var result = [2, 1];
                    BitManipulation_1.BitManipulation.swapWithoutTemp(a, 0, 1);
                    expect(a).toEqual(result);
                });
                it("add without arithmetic operators", function () {
                    var a = 3, b = 5;
                    var result = 8;
                    expect(BitManipulation_1.BitManipulation.addWithoutPlus(a, b)).toEqual(result);
                });
                it("compare numbers without if", function () {
                    var a = 3, b = 5;
                    var result = 5;
                    expect(BitManipulation_1.BitManipulation.compareWithoutIf(a, b)).toEqual(result);
                });
                it("find single number", function () {
                    var arr = [1, 2, 3, 2, 1];
                    var result = 3;
                    expect(BitManipulation_1.BitManipulation.singleNumber(arr)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=BitManipulationSpec.js.map