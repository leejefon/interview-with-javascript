System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LetterMapping;
    return {
        setters:[],
        execute: function() {
            LetterMapping = (function () {
                function LetterMapping() {
                }
                LetterMapping.exec = function (num) {
                    if (!num)
                        return [];
                    var result = [];
                    if (num <= 26) {
                        result.push(this.letterMapping[num - 1]);
                    }
                    var first = this.letterMapping[parseInt(Number(num).toString().charAt(0)) - 1];
                    var rest1 = this.exec(parseInt(Number(num).toString().slice(1)));
                    for (var i in rest1) {
                        result.push(first + rest1[i]);
                    }
                    var secondIndex = parseInt(Number(num).toString().substr(0, 2)) - 1;
                    if (secondIndex < 26) {
                        var second = this.letterMapping[secondIndex];
                        var rest2 = this.exec(parseInt(Number(num).toString().slice(2)));
                        for (var j in rest2) {
                            result.push(second + rest2[j]);
                        }
                    }
                    return result;
                };
                LetterMapping.letterMapping = [
                    'A', 'B', 'C', 'D', 'E',
                    'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O',
                    'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y',
                    'Z'
                ];
                return LetterMapping;
            }());
            exports_1("LetterMapping", LetterMapping);
        }
    }
});
//# sourceMappingURL=LetterMapping.js.map