System.register(['./Search2DMatrix'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Search2DMatrix_1;
    return {
        setters:[
            function (Search2DMatrix_1_1) {
                Search2DMatrix_1 = Search2DMatrix_1_1;
            }],
        execute: function() {
            describe("Search 2D Matrix", function () {
                it("should work", function () {
                    var matrix = [
                        [1, 3, 5, 7],
                        [10, 11, 16, 20],
                        [23, 30, 34, 50]
                    ];
                    var target = 3;
                    var falseTarget = 12;
                    expect(Search2DMatrix_1.Search2DMatrix.exec(matrix, target)).toEqual(true);
                    expect(Search2DMatrix_1.Search2DMatrix.exec(matrix, falseTarget)).toEqual(false);
                });
            });
        }
    }
});
//# sourceMappingURL=Search2DMatrixSpec.js.map