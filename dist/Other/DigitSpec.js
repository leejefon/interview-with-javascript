System.register(['./Digit'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Digit_1;
    return {
        setters:[
            function (Digit_1_1) {
                Digit_1 = Digit_1_1;
            }],
        execute: function() {
            describe("Digit", function () {
                it("Count digit 1s", function () {
                    expect(Digit_1.Digit.count(99)).toEqual(20);
                });
                it("repeatedly add digits", function () {
                    expect(Digit_1.Digit.root(38)).toEqual(2);
                });
            });
        }
    }
});
//# sourceMappingURL=DigitSpec.js.map