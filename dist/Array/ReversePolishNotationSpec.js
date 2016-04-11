System.register(['./ReversePolishNotation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReversePolishNotation_1;
    return {
        setters:[
            function (ReversePolishNotation_1_1) {
                ReversePolishNotation_1 = ReversePolishNotation_1_1;
            }],
        execute: function() {
            describe("Evaluate Reverse Polish Notation (Stack)", function () {
                it("should work", function () {
                    var arr = ["2", "1", "+", "3", "*"];
                    var result = 9;
                    expect(ReversePolishNotation_1.ReversePolishNotation.exec(arr)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=ReversePolishNotationSpec.js.map