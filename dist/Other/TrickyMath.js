System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BitManipulation;
    return {
        setters:[],
        execute: function() {
            BitManipulation = (function () {
                function BitManipulation() {
                }
                BitManipulation.swapWithoutTemp = function (arr, a, b) {
                    arr[a] = arr[a] ^ arr[b];
                    arr[b] = arr[a] ^ arr[b];
                    arr[a] = arr[a] ^ arr[b];
                };
                BitManipulation.prototype.additionWithoutPlus = function (a, b) {
                    if (b === 0)
                        return a;
                    else
                        return this.additionWithoutPlus(a ^ b, (a & b) << 1);
                };
                BitManipulation.prototype.compareWithoutIf = function (a, b) {
                };
                return BitManipulation;
            }());
            exports_1("BitManipulation", BitManipulation);
        }
    }
});
//# sourceMappingURL=TrickyMath.js.map