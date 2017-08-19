import test from 'ava';
import MaxSubArray from './MaxSubArray';

test('Maximum Subarray', (t) => {
  const arr = [1, -2, 3, -2, 1, 5, -2];
  const result = 7;

  t.is(MaxSubArray.exec(arr), result);
});
