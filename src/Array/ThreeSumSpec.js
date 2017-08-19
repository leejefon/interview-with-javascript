import test from 'ava';
import ThreeSum from './ThreeSum';

test('ThreeSum', (t) => {
  const arr = [-1, 0, 1, 2, -1, -4];
  const result = [
    [-1, -1, 2],
    [-1, 0, 1]
  ];

  t.deepEqual(ThreeSum.exec(arr), result);
});
