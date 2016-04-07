System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Search2DMatrix;
    return {
        setters:[],
        execute: function() {
            Search2DMatrix = (function () {
                function Search2DMatrix() {
                }
                Search2DMatrix.exec = function (matrix, target) {
                    var i = matrix.length - 1;
                    var j = 0;
                    while (i >= 0 && j < matrix[0].length) {
                        if (target > matrix[i][j])
                            j++;
                        else if (target < matrix[i][j])
                            i--;
                        else
                            break;
                    }
                    if (i >= 0 && j !== matrix[0].length)
                        return true;
                    else
                        return false;
                };
                return Search2DMatrix;
            }());
            exports_1("Search2DMatrix", Search2DMatrix);
        }
    }
});
//# sourceMappingURL=Search2DMatrix.js.map