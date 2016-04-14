System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ShellSort;
    return {
        setters:[],
        execute: function() {
            ShellSort = (function () {
                function ShellSort() {
                }
                ShellSort.sort = function (arr) {
                    var gaps = [5, 1];
                    gaps.forEach(function (gap) {
                        for (var i = gap; i < arr.length; i++) {
                            var curr = arr[i];
                            for (var j = i; j >= gap && arr[j - gap] > curr; j -= gap) {
                                arr[j] = arr[j - gap];
                            }
                            arr[j] = curr;
                        }
                    });
                    return arr;
                };
                return ShellSort;
            }());
            exports_1("ShellSort", ShellSort);
        }
    }
});
//# sourceMappingURL=ShellSort.js.map