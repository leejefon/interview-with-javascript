System.register(['./WordBreak'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WordBreak_1;
    return {
        setters:[
            function (WordBreak_1_1) {
                WordBreak_1 = WordBreak_1_1;
            }],
        execute: function() {
            describe("Word Break", function () {
                it("should work", function () {
                    var dict = ['be', 'bed', 'and', 'bath'];
                    var str = 'bedandbath';
                    var str2 = 'beddanbath';
                    expect(WordBreak_1.WordBreak.exec(str, dict)).toEqual(true);
                    expect(WordBreak_1.WordBreak.exec(str2, dict)).toEqual(false);
                });
            });
        }
    }
});
//# sourceMappingURL=WordBreakSpec.js.map