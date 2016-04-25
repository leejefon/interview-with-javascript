System.register(['./RobotMoves'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RobotMoves_1;
    return {
        setters:[
            function (RobotMoves_1_1) {
                RobotMoves_1 = RobotMoves_1_1;
            }],
        execute: function() {
            describe("Unique robot move paths", function () {
                it("should work", function () {
                    var board = [
                        [0, 0, 0],
                        [0, 1, 0],
                        [0, 0, 0]
                    ];
                    expect(RobotMoves_1.RobotMoves.exec(board)).toEqual(2);
                });
            });
        }
    }
});
//# sourceMappingURL=RobotMovesSpec.js.map