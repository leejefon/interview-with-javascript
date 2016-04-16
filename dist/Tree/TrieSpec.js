System.register(['./Trie'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Trie_1;
    return {
        setters:[
            function (Trie_1_1) {
                Trie_1 = Trie_1_1;
            }],
        execute: function() {
            describe("Trie Test", function () {
                it("insert and search", function () {
                    var trie = new Trie_1.Trie();
                    trie.insert('abc');
                    trie.insert('abcde');
                    expect(trie.search('abc')).toEqual(true);
                    expect(trie.search('abcde')).toEqual(true);
                    expect(trie.search('a')).toEqual(false);
                    expect(trie.search('abcd')).toEqual(false);
                });
            });
        }
    }
});
//# sourceMappingURL=TrieSpec.js.map