const HashTable = require('../HashTable/HashTable');

class TrieNode {
  constructor(char) {
    if (char) this.char = char;
    this.children = new HashTable(26);
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(str) {
    this.insertHelper(this.root, str);
  }

  insertHelper(root, str) {
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
  }

  search(str) {
    var currRoot = this.root;

    for (var i = 0; i < str.length; i++) {
      var node = currRoot.children.get(str.charCodeAt(i));
      if (node) {
        currRoot = node;
      } else {
        return false;
      }
    }

    if (currRoot.isEndOfWord) return true;
    else return false;
  }
}

module.exports = {
  TrieNode,
  Trie
};
