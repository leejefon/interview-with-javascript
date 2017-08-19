import test from 'ava';
import BitManipulation from './BitManipulation';

test('Bit Manipulations - Swap without temp variable', (t) => {
  const a = [1, 2]; // Will be swapped, but const still works..
  const result = [2, 1];

  BitManipulation.swapWithoutTemp(a, 0, 1);
  t.deepEqual(a, result);
});

test('Bit Manipulations - add without arithmetic operators', (t) => {
  const a = 3, b = 5;
  const result = 8;

  t.is(BitManipulation.addWithoutPlus(a, b), result);
});

test('Bit Manipulations - compare numbers without if', (t) => {
  const a = 3, b = 5;
  const result = 5;

  t.is(BitManipulation.compareWithoutIf(a, b), result);
});

test('Bit Manipulations - find single number', (t) => {
  const arr = [1, 2, 3, 2, 1];
  const result = 3;

  t.is(BitManipulation.singleNumber(arr), result);
});
