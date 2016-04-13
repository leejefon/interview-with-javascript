System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidSudoku;
    return {
        setters:[],
        execute: function() {
            ValidSudoku = (function () {
                function ValidSudoku() {
                }
                ValidSudoku.exec = function (board) {
                    var sudokuSize = board.length;
                    var rowCheck = [];
                    var colCheck = [];
                    var boxCheck = [];
                    for (var i = 0; i < sudokuSize; i++) {
                        rowCheck.push([]);
                        colCheck.push([]);
                        boxCheck.push([]);
                        for (var j = 0; j < sudokuSize; j++) {
                            rowCheck[i].push(false);
                            colCheck[i].push(false);
                            boxCheck[i].push(false);
                        }
                    }
                    for (var i = 0; i < sudokuSize; i++) {
                        for (var j = 0; j < sudokuSize; j++) {
                            if (board[i][j] !== 0) {
                                var num = board[i][j] - 1;
                                var box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                                if (rowCheck[i][num] || colCheck[j][num] || boxCheck[box][num]) {
                                    return false;
                                }
                                else {
                                    rowCheck[i][num] = true;
                                    colCheck[j][num] = true;
                                    boxCheck[box][num] = true;
                                }
                            }
                        }
                    }
                    return true;
                };
                return ValidSudoku;
            }());
            exports_1("ValidSudoku", ValidSudoku);
        }
    }
});
//# sourceMappingURL=ValidSudoku.js.map