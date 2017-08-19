import test from 'ava';
import { HashTable } from './HashTable';

// describe("Hash Table Test", () => {
//   it("should insert and retrieve", () => {
//     let hashTable: HashTable = new HashTable(3);
//
//     hashTable.put(1, 'Jeff');
//     hashTable.put(2, 'John');
//
//     expect(hashTable.get(1)).toEqual('Jeff');
//     expect(hashTable.get(2)).toEqual('John');
//   });
//
//   it("should move to next index if same hash", () => {
//     let hashTable: HashTable = new HashTable(3);
//
//     hashTable.put(1, 'Jeff');
//     hashTable.put(4, 'Jone');
//
//     expect(hashTable.table[1].getKey()).toEqual(1);
//     expect(hashTable.table[2].getKey()).toEqual(4);
//   });
//
//   it("should overwrite", () => {
//     let hashTable: HashTable = new HashTable(3);
//
//     hashTable.put(1, 'Jeff');
//     hashTable.put(1, 'Jack');
//
//     expect(hashTable.get(1)).toEqual('Jack');
//   });
//
//   it("should throw error", () => {
//     let hashTable: HashTable = new HashTable(5);
//
//     hashTable.put(1, 'Jeff');
//     hashTable.put(2, 'John');
//     hashTable.put(3, 'Jack');
//     hashTable.put(4, 'Jone');
//     hashTable.put(5, 'Jill');
//
//     expect(() => {
//       hashTable.put(6, 'Jess');
//     }).toThrow();
//   });
// });
