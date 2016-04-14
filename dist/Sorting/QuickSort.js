System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuickSort;
    return {
        setters:[],
        execute: function() {
            QuickSort = (function () {
                function QuickSort() {
                }
                QuickSort.sort = function (arr) {
                    this.quicksort(arr, 0, arr.length - 1);
                    return arr;
                };
                QuickSort.quicksort = function (arr, lowIndex, highIndex) {
                    if (lowIndex >= highIndex)
                        return;
                    var pivot = arr[Math.floor((highIndex + lowIndex) / 2)];
                    var i = lowIndex;
                    var j = highIndex;
                    while (i <= j) {
                        while (arr[i] < pivot)
                            i++;
                        while (arr[j] > pivot)
                            j--;
                        if (i <= j) {
                            var temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                            i++;
                            j--;
                        }
                    }
                    if (lowIndex < j)
                        this.quicksort(arr, lowIndex, j);
                    if (highIndex > i)
                        this.quicksort(arr, i, highIndex);
                };
                return QuickSort;
            }());
            exports_1("QuickSort", QuickSort);
        }
    }
});
//# sourceMappingURL=QuickSort.js.map