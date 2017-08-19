import test from 'ava';
import Skyline from './Skyline';

test('Skyline', (t) => {
  const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
  const results = [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]];

  t.deepEqual(Skyline.exec(buildings), results);
});
