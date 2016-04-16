System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MaxSubArray;
    return {
        setters:[],
        execute: function() {
            MaxSubArray = (function () {
                function MaxSubArray() {
                }
                MaxSubArray.exec = function (arr) {
                    var result = Array(arr.length);
                    var max = arr[0];
                    result[0] = arr[0];
                    for (var i = 1; i < arr.length; i++) {
                        result[i] = Math.max(arr[i], arr[i] + result[i - 1]);
                        if (result[i] > max) {
                            max = result[i];
                        }
                    }
                    return max;
                };
                return MaxSubArray;
            }());
            exports_1("MaxSubArray", MaxSubArray);
        }
    }
});
//# sourceMappingURL=MaxSubArray.js.map