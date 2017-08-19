import { Trie, TrieNode } from './Trie';

describe("Trie Test", () => {
  it("insert and search", () => {
    let trie: Trie = new Trie();

    trie.insert('abc');
    trie.insert('abcde');

    expect(trie.search('abc')).toEqual(true);
    expect(trie.search('abcde')).toEqual(true);
    expect(trie.search('a')).toEqual(false);
    expect(trie.search('abcd')).toEqual(false);
  });
});
