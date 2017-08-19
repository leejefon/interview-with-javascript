import test from 'ava';
import RotateArray from './RotateArray';

test('Rotate Array', (t) => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const k = 4;
  const result = [5, 6, 7, 1, 2, 3, 4];

  t.deepEqual(RotateArray.exec(arr, k), result);
});
