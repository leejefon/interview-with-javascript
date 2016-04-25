System.register(['./MoveZeroes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MoveZeroes_1;
    return {
        setters:[
            function (MoveZeroes_1_1) {
                MoveZeroes_1 = MoveZeroes_1_1;
            }],
        execute: function() {
            describe("Move 0s to the end", function () {
                it("should work", function () {
                    var arr = [9, 5, 0, 7, 0, 3, 1, 2, 0, 4];
                    var result = [9, 5, 7, 3, 1, 2, 4, 0, 0, 0];
                    expect(MoveZeroes_1.MoveZeroes.exec(arr)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=MoveZeroesSpec.js.map