System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Digit;
    return {
        setters:[],
        execute: function() {
            Digit = (function () {
                function Digit() {
                }
                Digit.count = function (n, digit) {
                    if (digit === void 0) { digit = 1; }
                    var digits = 0;
                    for (var m = 1; m <= n; m *= 10) {
                        var a = Math.floor(n / m), b = n % m;
                        digits += Math.floor((a + (9 - digit)) / 10) * m + (a % 10 == digit ? 1 : 0) * (b + 1);
                    }
                    return digits;
                };
                Digit.root = function (n) {
                    return 1 + (n - 1) % 9;
                };
                return Digit;
            }());
            exports_1("Digit", Digit);
        }
    }
});
//# sourceMappingURL=Digit.js.map