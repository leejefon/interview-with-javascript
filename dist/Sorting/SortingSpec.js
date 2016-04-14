System.register(['./InsertionSort', './SelectionSort', './BubbleSort', './ShellSort', './MergeSort', './QuickSort', './HeapSort'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InsertionSort_1, SelectionSort_1, BubbleSort_1, ShellSort_1, MergeSort_1, QuickSort_1, HeapSort_1;
    return {
        setters:[
            function (InsertionSort_1_1) {
                InsertionSort_1 = InsertionSort_1_1;
            },
            function (SelectionSort_1_1) {
                SelectionSort_1 = SelectionSort_1_1;
            },
            function (BubbleSort_1_1) {
                BubbleSort_1 = BubbleSort_1_1;
            },
            function (ShellSort_1_1) {
                ShellSort_1 = ShellSort_1_1;
            },
            function (MergeSort_1_1) {
                MergeSort_1 = MergeSort_1_1;
            },
            function (QuickSort_1_1) {
                QuickSort_1 = QuickSort_1_1;
            },
            function (HeapSort_1_1) {
                HeapSort_1 = HeapSort_1_1;
            }],
        execute: function() {
            describe("Sorting Test", function () {
                var arr = [];
                var result = [];
                beforeEach(function () {
                    arr = [65, 3, 21, 85, 33, 18, 44, 98, 57, 46];
                    result = [3, 18, 21, 33, 44, 46, 57, 65, 85, 98];
                });
                it("insertion sort", function () {
                    expect(InsertionSort_1.InsertionSort.sort(arr)).toEqual(result);
                });
                it("selection sort", function () {
                    expect(SelectionSort_1.SelectionSort.sort(arr)).toEqual(result);
                });
                it("bubble sort", function () {
                    expect(BubbleSort_1.BubbleSort.sort(arr)).toEqual(result);
                });
                it("shell sort", function () {
                    expect(ShellSort_1.ShellSort.sort(arr)).toEqual(result);
                });
                it("merge sort", function () {
                    expect(MergeSort_1.MergeSort.sort(arr)).toEqual(result);
                });
                it("quick sort", function () {
                    expect(QuickSort_1.QuickSort.sort(arr)).toEqual(result);
                });
                it("heap sort", function () {
                    expect(HeapSort_1.HeapSort.sort(arr)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=SortingSpec.js.map