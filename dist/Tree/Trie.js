System.register(['../HashTable/HashTable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HashTable_1;
    var TrieNode, Trie;
    return {
        setters:[
            function (HashTable_1_1) {
                HashTable_1 = HashTable_1_1;
            }],
        execute: function() {
            TrieNode = (function () {
                function TrieNode(char) {
                    if (char)
                        this.char = char;
                    this.children = new HashTable_1.HashTable(26);
                    this.isEndOfWord = false;
                }
                return TrieNode;
            }());
            exports_1("TrieNode", TrieNode);
            Trie = (function () {
                function Trie() {
                    this.root = new TrieNode();
                }
                Trie.prototype.insert = function (str) {
                    this.insertHelper(this.root, str);
                };
                Trie.prototype.insertHelper = function (root, str) {
                    if (str.length === 0) {
                        root.isEndOfWord = true;
                        return;
                    }
                    var char = str.charAt(0);
                    var children = root.children;
                    var node = children.get(char.charCodeAt(0));
                    if (!node) {
                        node = new TrieNode(char);
                        children.put(char.charCodeAt(0), node);
                    }
                    return this.insertHelper(node, str.substring(1));
                };
                Trie.prototype.search = function (str) {
                    var currRoot = this.root;
                    for (var i = 0; i < str.length; i++) {
                        var node = currRoot.children.get(str.charCodeAt(i));
                        if (node) {
                            currRoot = node;
                        }
                        else {
                            return false;
                        }
                    }
                    if (currRoot.isEndOfWord)
                        return true;
                    else
                        return false;
                };
                return Trie;
            }());
            exports_1("Trie", Trie);
        }
    }
});
//# sourceMappingURL=Trie.js.map