System.register(['./LetterMapping'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LetterMapping_1;
    return {
        setters:[
            function (LetterMapping_1_1) {
                LetterMapping_1 = LetterMapping_1_1;
            }],
        execute: function() {
            describe("Letter map to numbers", function () {
                it("should work", function () {
                    var num = 1221;
                    var result = ['ABU', 'ABBA', 'AVA', 'LU', 'LBA'];
                    expect(LetterMapping_1.LetterMapping.exec(num)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=LetterMappingSpec.js.map