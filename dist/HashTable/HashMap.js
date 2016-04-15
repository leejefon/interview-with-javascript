System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HashEntry, HashMap;
    return {
        setters:[],
        execute: function() {
            HashEntry = (function () {
                function HashEntry(key, value) {
                    this.key = key;
                    this.value = value;
                }
                HashEntry.prototype.getKey = function () {
                    return this.key;
                };
                HashEntry.prototype.getValue = function () {
                    return this.value;
                };
                return HashEntry;
            }());
            exports_1("HashEntry", HashEntry);
            HashMap = (function () {
                function HashMap() {
                }
                return HashMap;
            }());
            exports_1("HashMap", HashMap);
        }
    }
});
//# sourceMappingURL=HashMap.js.map