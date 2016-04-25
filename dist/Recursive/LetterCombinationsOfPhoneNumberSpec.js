System.register(['./LetterCombinationsOfPhoneNumber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LetterCombinationsOfPhoneNumber_1;
    return {
        setters:[
            function (LetterCombinationsOfPhoneNumber_1_1) {
                LetterCombinationsOfPhoneNumber_1 = LetterCombinationsOfPhoneNumber_1_1;
            }],
        execute: function() {
            describe("Letter combinations of phone number", function () {
                it("should work", function () {
                    var phone = '23';
                    var result = ['AD', 'AE', 'AF', 'BD', 'BE', 'BF', 'CD', 'CE', 'CF'];
                    expect(LetterCombinationsOfPhoneNumber_1.LetterCombinationsOfPhoneNumber.exec(phone)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=LetterCombinationsOfPhoneNumberSpec.js.map