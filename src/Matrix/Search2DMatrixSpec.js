import test from 'ava';
import Search2DMatrix from './Search2DMatrix';

test('Search 2D Matrix', (t) => {
  const matrix = [
    [ 1,  3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];
  const target = 3;
  const falseTarget = 12;

  t.true(Search2DMatrix.exec(matrix, target));
  t.false(Search2DMatrix.exec(matrix, falseTarget));
});
