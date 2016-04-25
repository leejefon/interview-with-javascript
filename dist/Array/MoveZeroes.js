System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MoveZeroes;
    return {
        setters:[],
        execute: function() {
            MoveZeroes = (function () {
                function MoveZeroes() {
                }
                MoveZeroes.exec = function (arr) {
                    var insertIndex = 0;
                    for (var i in arr) {
                        if (arr[i] !== 0) {
                            arr[insertIndex++] = arr[i];
                        }
                    }
                    for (var j = insertIndex; j < arr.length; j++) {
                        arr[j] = 0;
                    }
                    return arr;
                };
                return MoveZeroes;
            }());
            exports_1("MoveZeroes", MoveZeroes);
        }
    }
});
//# sourceMappingURL=MoveZeroes.js.map