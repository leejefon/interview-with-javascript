import test from 'ava';
import { Trie, TrieNode } from './Trie';

test('Trie Test', (t) => {
  const trie = new Trie();

  trie.insert('abc');
  trie.insert('abcde');

  t.true(trie.search('abc'));
  t.true(trie.search('abcde'));
  t.false(trie.search('a'));
  t.false(trie.search('abcd'));
});
