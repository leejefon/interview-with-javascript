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
                    var sorted = [];
                    for (var i in arr) {
                        var item = arr[i];
                        for (var j = 0; j <= sorted.length; j++) {
                            if (j === sorted.length) {
                                sorted.push(item);
                                break;
                            }
                            if (sorted[j] > item) {
                                var temp = sorted[j];
                                sorted[j] = item;
                                item = temp;
                            }
                        }
                    }
                    return sorted;
                };
                return InsertionSort;
            }());
            exports_1("InsertionSort", InsertionSort);
        }
    }
});
//# sourceMappingURL=InsertionSort.js.map