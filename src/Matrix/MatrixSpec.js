import test from 'ava';
import Matrix from './Matrix';

test('Matrix Operations - transpose', (t) => {
  const matrix = new Matrix([
    [ 1,  3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]);

  const result = new Matrix([
    [ 1, 10, 23],
    [ 3, 11, 30],
    [ 5, 16, 34],
    [ 7, 20, 50]
  ]);

  t.deepEqual(matrix.transpose(), result);
});

test('Matrix Operations - multiply', (t) => {
  const matrix1 = new Matrix([
    [1, 2],
    [3, 4]
  ]);

  const matrix2 = new Matrix([
    [4, 3],
    [2, 1]
  ]);

  const result = new Matrix([
    [8, 5],
    [20, 13]
  ]);

  t.deepEqual(matrix1.multiply(matrix2), result);
});

test('Matrix Operations - multiply (different size)', (t) => {
  const matrix1 = new Matrix([
    [1, 2],
    [3, 4]
  ]);

  const matrix2 = new Matrix([[2], [1]]);

  const result = new Matrix([
    [4],
    [10]
  ]);

  t.deepEqual(matrix1.multiply(matrix2), result);
});
