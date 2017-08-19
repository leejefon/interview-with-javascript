import test from 'ava';
import Matrix from './Matrix';

// describe("Matrix Operations", () => {
//   it("transpose", () => {
//     let matrix: Matrix = new Matrix([
//       [ 1,  3,  5,  7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 50]
//     ]);
//
//     let result: Matrix = new Matrix([
//       [ 1, 10, 23],
//       [ 3, 11, 30],
//       [ 5, 16, 34],
//       [ 7, 20, 50]
//     ]);
//
//     expect(matrix.transpose()).toEqual(result);
//   });
//
//   it("multiply", () => {
//     let matrix1: Matrix = new Matrix([
//       [1, 2],
//       [3, 4]
//     ]);
//
//     let matrix2: Matrix = new Matrix([
//       [4, 3],
//       [2, 1]
//     ]);
//
//     let result: Matrix = new Matrix([
//       [8, 5],
//       [20, 13]
//     ]);
//
//     expect(matrix1.multiply(matrix2)).toEqual(result);
//   });
//
//   it("multiply (different size)", () => {
//     let matrix1: Matrix = new Matrix([
//       [1, 2],
//       [3, 4]
//     ]);
//
//     let matrix2: Matrix = new Matrix([[2], [1]]);
//
//     let result: Matrix = new Matrix([
//       [4],
//       [10]
//     ]);
//
//     expect(matrix1.multiply(matrix2)).toEqual(result);
//   });
// });
