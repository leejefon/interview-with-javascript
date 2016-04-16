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
                BitManipulation.addWithoutPlus = function (a, b) {
                    if (b === 0)
                        return a;
                    else
                        return this.addWithoutPlus(a ^ b, (a & b) << 1);
                };
                BitManipulation.compareWithoutIf = function (a, b) {
                    var c = a - b;
                    var k = (c >> 31) & 0x1;
                    return a - k * c;
                };
                BitManipulation.singleNumber = function (arr) {
                    var result = 0;
                    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                        var a = arr_1[_i];
                        result ^= a;
                    }
                    return result;
                };
                return BitManipulation;
            }());
            exports_1("BitManipulation", BitManipulation);
        }
    }
});
//# sourceMappingURL=BitManipulation.js.map