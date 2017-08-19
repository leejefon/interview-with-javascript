import test from 'ava';
import LongestIncreasingSequence from './LongestIncreasingSequence';

test('Longest Increasing Sequence', (t) => {
  const arr = [1, -2, 2, -2, 3, 5, -2];
  const result = 4;

  t.is(LongestIncreasingSequence.exec(arr), result);
});

test('Longest Increasing Sequence', (t) => {
  const arr = [10, 9, 2, 5, 3, 7, 101, 18];
  const result = 4;

  t.is(LongestIncreasingSequence.exec(arr), result);
});
