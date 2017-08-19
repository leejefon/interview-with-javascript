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

// describe("ThreeSum", () => {
//   it("should work", () => {
//     let arr: number[] = [-1, 0, 1, 2, -1, -4];
//     let results: number[][] = [
//       [-1, -1, 2],
//       [-1, 0, 1]
//     ];
//
//     expect(ThreeSum.exec(arr)).toEqual(results);
//   });
// });
