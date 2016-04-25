System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LetterCombinationsOfPhoneNumber;
    return {
        setters:[],
        execute: function() {
            LetterCombinationsOfPhoneNumber = (function () {
                function LetterCombinationsOfPhoneNumber() {
                }
                LetterCombinationsOfPhoneNumber.exec = function (phone) {
                    if (phone.length === 1)
                        return this.phoneNumberMapping[phone];
                    var result = [];
                    var rest = this.exec(phone.slice(1));
                    for (var _i = 0, _a = this.phoneNumberMapping[phone.charAt(0)]; _i < _a.length; _i++) {
                        var a = _a[_i];
                        for (var i in rest) {
                            result.push(a + rest[i]);
                        }
                    }
                    return result.length === 0 ? rest : result;
                };
                LetterCombinationsOfPhoneNumber.phoneNumberMapping = {
                    0: [''],
                    1: [''],
                    2: ['A', 'B', 'C'],
                    3: ['D', 'E', 'F'],
                    4: ['G', 'H', 'I'],
                    5: ['J', 'K', 'L'],
                    6: ['M', 'N', 'O'],
                    7: ['P', 'Q', 'R', 'S'],
                    8: ['T', 'U', 'V'],
                    9: ['W', 'X', 'Y', 'Z']
                };
                return LetterCombinationsOfPhoneNumber;
            }());
            exports_1("LetterCombinationsOfPhoneNumber", LetterCombinationsOfPhoneNumber);
        }
    }
});
//# sourceMappingURL=LetterCombinationsOfPhoneNumber.js.map