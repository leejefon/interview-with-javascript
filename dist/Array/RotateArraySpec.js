System.register(['./RotateArray'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RotateArray_1;
    return {
        setters:[
            function (RotateArray_1_1) {
                RotateArray_1 = RotateArray_1_1;
            }],
        execute: function() {
            describe("Rotate Array", function () {
                it("should rotate", function () {
                    var arr = [1, 2, 3, 4, 5, 6, 7];
                    var k = 4;
                    var result = [5, 6, 7, 1, 2, 3, 4];
                    expect(RotateArray_1.RotateArray.exec(arr, k)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=RotateArraySpec.js.map