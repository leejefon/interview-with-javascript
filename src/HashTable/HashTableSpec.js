import test from 'ava';
import { HashTable } from './HashTable';

test('Hash Table Test - should insert and retrieve', (t) => {
  const hashTable = new HashTable(3);

  hashTable.put(1, 'Jeff');
  hashTable.put(2, 'John');

  t.is(hashTable.get(1), 'Jeff');
  t.is(hashTable.get(2), 'John');
});

test('Hash Table Test - should move to next index if same hash', (t) => {
  const hashTable = new HashTable(3);

  hashTable.put(1, 'Jeff');
  hashTable.put(4, 'Jone');

  t.is(hashTable.table[1].getKey(), 1);
  t.is(hashTable.table[2].getKey(), 4);
});

test('Hash Table Test - should overwrite', (t) => {
  const hashTable = new HashTable(3);

  hashTable.put(1, 'Jeff');
  hashTable.put(1, 'Jack');

  t.is(hashTable.get(1), 'Jack');
});

test('Hash Table Test - should throw error', (t) => {
  const hashTable = new HashTable(5);

  hashTable.put(1, 'Jeff');
  hashTable.put(2, 'John');
  hashTable.put(3, 'Jack');
  hashTable.put(4, 'Jone');
  hashTable.put(5, 'Jill');

  t.throws(() => {
    hashTable.put(6, 'Jess');
  });
});
