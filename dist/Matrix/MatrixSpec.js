System.register(['./Matrix'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Matrix_1;
    return {
        setters:[
            function (Matrix_1_1) {
                Matrix_1 = Matrix_1_1;
            }],
        execute: function() {
            describe("Matrix Operations", function () {
                it("transpose", function () {
                    var matrix = new Matrix_1.Matrix([
                        [1, 3, 5, 7],
                        [10, 11, 16, 20],
                        [23, 30, 34, 50]
                    ]);
                    var result = new Matrix_1.Matrix([
                        [1, 10, 23],
                        [3, 11, 30],
                        [5, 16, 34],
                        [7, 20, 50]
                    ]);
                    expect(matrix.transpose()).toEqual(result);
                });
                it("multiply", function () {
                    var matrix1 = new Matrix_1.Matrix([
                        [1, 2],
                        [3, 4]
                    ]);
                    var matrix2 = new Matrix_1.Matrix([
                        [4, 3],
                        [2, 1]
                    ]);
                    var result = new Matrix_1.Matrix([
                        [8, 5],
                        [20, 13]
                    ]);
                    expect(matrix1.multiply(matrix2)).toEqual(result);
                });
                it("multiply (different size)", function () {
                    var matrix1 = new Matrix_1.Matrix([
                        [1, 2],
                        [3, 4]
                    ]);
                    var matrix2 = new Matrix_1.Matrix([[2], [1]]);
                    var result = new Matrix_1.Matrix([
                        [4],
                        [10]
                    ]);
                    expect(matrix1.multiply(matrix2)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=MatrixSpec.js.map