System.register(['./ValidSudoku'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidSudoku_1;
    return {
        setters:[
            function (ValidSudoku_1_1) {
                ValidSudoku_1 = ValidSudoku_1_1;
            }],
        execute: function() {
            describe("Valid Sudoku", function () {
                it("should work", function () {
                    var board = [
                        [5, 3, 0, 0, 7, 0, 0, 0, 0],
                        [6, 0, 0, 1, 9, 5, 0, 0, 0],
                        [0, 9, 8, 0, 0, 0, 0, 6, 0],
                        [8, 0, 0, 0, 6, 0, 0, 0, 3],
                        [4, 0, 0, 8, 0, 3, 0, 0, 1],
                        [7, 0, 0, 0, 2, 0, 0, 0, 6],
                        [0, 6, 0, 0, 0, 0, 2, 8, 0],
                        [0, 0, 0, 4, 1, 9, 0, 0, 5],
                        [0, 0, 0, 0, 8, 0, 0, 7, 9]
                    ];
                    expect(ValidSudoku_1.ValidSudoku.exec(board)).toEqual(true);
                });
            });
        }
    }
});
//# sourceMappingURL=ValidSudokuSpec.js.map