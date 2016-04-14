System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeapSort;
    return {
        setters:[],
        execute: function() {
            HeapSort = (function () {
                function HeapSort() {
                }
                HeapSort.sort = function (arr) {
                    this.heapify(arr);
                    for (var i = this.N; i > 0; i--) {
                        this.swap(arr, 0, i);
                        this.N--;
                        this.maxHeap(arr, 0);
                    }
                    return arr;
                };
                HeapSort.heapify = function (arr) {
                    this.N = arr.length - 1;
                    for (var i = Math.floor(this.N / 2); i >= 0; i--) {
                        this.maxHeap(arr, i);
                    }
                };
                HeapSort.maxHeap = function (arr, i) {
                    var leftIndex = 2 * i;
                    var rightIndex = leftIndex + 1;
                    var maxIndex = i;
                    if (leftIndex <= this.N && arr[leftIndex] > arr[i]) {
                        maxIndex = leftIndex;
                    }
                    if (rightIndex <= this.N && arr[rightIndex] > arr[maxIndex]) {
                        maxIndex = rightIndex;
                    }
                    if (maxIndex !== i) {
                        this.swap(arr, i, maxIndex);
                        this.maxHeap(arr, maxIndex);
                    }
                };
                HeapSort.swap = function (arr, i, j) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                };
                return HeapSort;
            }());
            exports_1("HeapSort", HeapSort);
        }
    }
});
//# sourceMappingURL=HeapSort.js.map