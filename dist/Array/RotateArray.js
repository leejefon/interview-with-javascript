System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RotateArray;
    return {
        setters:[],
        execute: function() {
            RotateArray = (function () {
                function RotateArray() {
                }
                RotateArray.exec = function (arr, k) {
                    if (k > arr.length)
                        return null;
                    var firstHalf = [];
                    var secondHalf = [];
                    for (var i = 0; i < arr.length; i++) {
                        if (i < k)
                            firstHalf.push(arr[i]);
                        else
                            secondHalf.push(arr[i]);
                    }
                    return secondHalf.concat(firstHalf);
                };
                return RotateArray;
            }());
            exports_1("RotateArray", RotateArray);
        }
    }
});
//# sourceMappingURL=RotateArray.js.map