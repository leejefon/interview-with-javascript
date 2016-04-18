System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InsertionSort;
    return {
        setters:[],
        execute: function() {
            InsertionSort = (function () {
                function InsertionSort() {
                }
                InsertionSort.sort = function (arr) {
                    for (var i = 0; i < arr.length; i++) {
                        for (var j = i; j > 0; j--) {
                            if (arr[j - 1] > arr[j]) {
                                var temp = arr[j - 1];
                                arr[j - 1] = arr[j];
                                arr[j] = temp;
                            }
                        }
                    }
                    return arr;
                };
                return InsertionSort;
            }());
            exports_1("InsertionSort", InsertionSort);
        }
    }
});
//# sourceMappingURL=InsertionSort.js.map