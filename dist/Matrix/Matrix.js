System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Matrix;
    return {
        setters:[],
        execute: function() {
            Matrix = (function () {
                function Matrix(matrix) {
                    this.matrix = matrix;
                }
                Matrix.prototype.transpose = function () {
                    var newMatrix = [];
                    for (var i = 0; i < this.matrix[0].length; i++) {
                        var row = [];
                        for (var j = 0; j < this.matrix.length; j++) {
                            row.push(this.matrix[j][i]);
                        }
                        newMatrix.push(row);
                    }
                    return new Matrix(newMatrix);
                };
                Matrix.prototype.multiply = function (m) {
                    var newMatrix = [];
                    for (var i = 0; i < this.matrix.length; i++) {
                        var row = [];
                        for (var j = 0; j < m.matrix[0].length; j++) {
                            var val = 0;
                            for (var k = 0; k < this.matrix[i].length; k++) {
                                val += this.matrix[i][k] * m.matrix[k][j];
                            }
                            row.push(val);
                        }
                        newMatrix.push(row);
                    }
                    return new Matrix(newMatrix);
                };
                return Matrix;
            }());
            exports_1("Matrix", Matrix);
        }
    }
});
//# sourceMappingURL=Matrix.js.map