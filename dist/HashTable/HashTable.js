System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HashEntry, HashTable;
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
            HashTable = (function () {
                function HashTable(table_size) {
                    if (table_size === void 0) { table_size = 128; }
                    this.TABLE_SIZE = table_size;
                    this.table = new Array(this.TABLE_SIZE).fill(null);
                }
                ;
                HashTable.prototype.get = function (key) {
                    var hash = key % this.TABLE_SIZE;
                    var originalHash = hash;
                    while (this.table[hash] && this.table[hash].getKey() !== key) {
                        hash = (hash + 1) % this.TABLE_SIZE;
                        if (hash === originalHash) {
                            hash = -1;
                            break;
                        }
                    }
                    if (hash === -1 || !this.table[hash]) {
                        return null;
                    }
                    else {
                        return this.table[hash].getValue();
                    }
                };
                HashTable.prototype.put = function (key, value) {
                    var hash = key % this.TABLE_SIZE;
                    var originalHash = hash;
                    while (this.table[hash] && this.table[hash].getKey() !== key) {
                        hash = (hash + 1) % this.TABLE_SIZE;
                        if (hash === originalHash) {
                            hash = -1;
                            break;
                        }
                    }
                    if (hash === -1) {
                        throw new Error('Table is full');
                    }
                    else {
                        this.table[hash] = new HashEntry(key, value);
                    }
                };
                return HashTable;
            }());
            exports_1("HashTable", HashTable);
        }
    }
});
//# sourceMappingURL=HashTable.js.map