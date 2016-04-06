System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LongestIncreasingSequence;
    return {
        setters:[],
        execute: function() {
            LongestIncreasingSequence = (function () {
                function LongestIncreasingSequence() {
                }
                LongestIncreasingSequence.exec = function (arr) {
                    var result = Array(arr.length).fill(1);
                    for (var i = 1; i < arr.length; i++) {
                        for (var j = 0; j < i; j++) {
                            if (arr[i] > arr[j]) {
                                if (result[j] + 1 > result[i]) {
                                    result[i] = result[j] + 1;
                                }
                            }
                        }
                    }
                    return Math.max.apply(Math, result);
                };
                return LongestIncreasingSequence;
            }());
            exports_1("LongestIncreasingSequence", LongestIncreasingSequence);
        }
    }
});
//# sourceMappingURL=LongestIncreasingSequence.js.map