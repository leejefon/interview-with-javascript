System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BubbleSort;
    return {
        setters:[],
        execute: function() {
            BubbleSort = (function () {
                function BubbleSort() {
                }
                BubbleSort.sort = function (arr) {
                    for (var i in arr) {
                        for (var j in arr) {
                            if (arr[j] > arr[i]) {
                                var temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                            }
                        }
                    }
                    return arr;
                };
                return BubbleSort;
            }());
            exports_1("BubbleSort", BubbleSort);
        }
    }
});
//# sourceMappingURL=BubbleSort.js.map