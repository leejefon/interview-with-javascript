System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MergeSort;
    return {
        setters:[],
        execute: function() {
            MergeSort = (function () {
                function MergeSort() {
                }
                MergeSort.sort = function (arr) {
                    if (arr.length === 1) {
                        return arr;
                    }
                    var partitions = this.partition(arr);
                    var left = this.sort(partitions.left);
                    var right = this.sort(partitions.right);
                    return this.merge(left, right);
                };
                MergeSort.partition = function (arr) {
                    return {
                        left: arr.splice(0, Math.floor(arr.length / 2)),
                        right: arr
                    };
                };
                MergeSort.merge = function (left, right) {
                    var merged = [];
                    if (left.length === 0)
                        return right;
                    if (right.length === 0)
                        return left;
                    if (left[0] > right[0]) {
                        merged.push(right[0]);
                        merged = merged.concat(this.merge(left, right.splice(1)));
                    }
                    else {
                        merged.push(left[0]);
                        merged = merged.concat(this.merge(left.splice(1), right));
                    }
                    return merged;
                };
                return MergeSort;
            }());
            exports_1("MergeSort", MergeSort);
        }
    }
});
//# sourceMappingURL=MergeSort.js.map