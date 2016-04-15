System.register(['./HashTable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HashTable_1;
    return {
        setters:[
            function (HashTable_1_1) {
                HashTable_1 = HashTable_1_1;
            }],
        execute: function() {
            describe("Hash Table Test", function () {
                it("should insert and retrieve", function () {
                    var hashTable = new HashTable_1.HashTable(3);
                    hashTable.put(1, 'Jeff');
                    hashTable.put(2, 'John');
                    expect(hashTable.get(1)).toEqual('Jeff');
                    expect(hashTable.get(2)).toEqual('John');
                });
                it("should move to next index if same hash", function () {
                    var hashTable = new HashTable_1.HashTable(3);
                    hashTable.put(1, 'Jeff');
                    hashTable.put(4, 'Jone');
                    expect(hashTable.table[1].getKey()).toEqual(1);
                    expect(hashTable.table[2].getKey()).toEqual(4);
                });
                it("should overwrite", function () {
                    var hashTable = new HashTable_1.HashTable(3);
                    hashTable.put(1, 'Jeff');
                    hashTable.put(1, 'Jack');
                    expect(hashTable.get(1)).toEqual('Jack');
                });
                it("should throw error", function () {
                    var hashTable = new HashTable_1.HashTable(5);
                    hashTable.put(1, 'Jeff');
                    hashTable.put(2, 'John');
                    hashTable.put(3, 'Jack');
                    hashTable.put(4, 'Jone');
                    hashTable.put(5, 'Jill');
                    expect(function () {
                        hashTable.put(6, 'Jess');
                    }).toThrow();
                });
            });
        }
    }
});
//# sourceMappingURL=HashTableSpec.js.map