System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RobotMoves;
    return {
        setters:[],
        execute: function() {
            RobotMoves = (function () {
                function RobotMoves() {
                }
                RobotMoves.exec = function (board) {
                    var width = board[0].length;
                    var dp = Array(width).fill(0);
                    dp[0] = 1;
                    for (var _i = 0, board_1 = board; _i < board_1.length; _i++) {
                        var row = board_1[_i];
                        for (var j = 0; j < width; j++) {
                            if (row[j] == 1) {
                                dp[j] = 0;
                            }
                            else if (j > 0) {
                                dp[j] += dp[j - 1];
                            }
                        }
                    }
                    return dp[width - 1];
                };
                return RobotMoves;
            }());
            exports_1("RobotMoves", RobotMoves);
        }
    }
});
//# sourceMappingURL=RobotMoves.js.map