System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SelectionSort;
    return {
        setters:[],
        execute: function() {
            SelectionSort = (function () {
                function SelectionSort() {
                }
                SelectionSort.sort = function (arr) {
                    for (var i = 0; i < arr.length; i++) {
                        var minIndex = i;
                        for (var j = i + 1; j < arr.length; j++) {
                            if (arr[j] < arr[minIndex]) {
                                minIndex = j;
                            }
                        }
                        var temp = arr[i];
                        arr[i] = arr[minIndex];
                        arr[minIndex] = temp;
                    }
                    return arr;
                };
                return SelectionSort;
            }());
            exports_1("SelectionSort", SelectionSort);
        }
    }
});
//# sourceMappingURL=SelectionSort.js.map