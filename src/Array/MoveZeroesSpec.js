import test from 'ava';
import MoveZeroes from './MoveZeroes';

test('Move 0s to the end', (t) => {
  const arr = [9, 5, 0, 7, 0, 3, 1, 2, 0, 4];
  const result = [9, 5, 7, 3, 1, 2, 4, 0, 0 ,0];

  t.deepEqual(MoveZeroes.exec(arr), result);
});
