System.register(['./CountDigits'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CountDigits_1;
    return {
        setters:[
            function (CountDigits_1_1) {
                CountDigits_1 = CountDigits_1_1;
            }],
        execute: function() {
            describe("Count Digit 1s", function () {
                it("should work", function () {
                    expect(CountDigits_1.CountDigits.exec(99)).toEqual(20);
                });
            });
        }
    }
});
//# sourceMappingURL=CountDigitsSpec.js.map