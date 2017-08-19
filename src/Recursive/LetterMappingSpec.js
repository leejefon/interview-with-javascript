import test from 'ava';
import LetterMapping from './LetterMapping';

test('Letter map to numbers', (t) => {
  const num = 1221;
  const result = ['ABU', 'ABBA', 'AVA', 'LU', 'LBA'];

  t.deepEqual(LetterMapping.exec(num), result);
  });

// describe("Letter map to numbers", () => {
//   it("should work", () => {
//     var num: number = 1221;
//     var result = ['ABU', 'ABBA', 'AVA', 'LU', 'LBA'];
//
//     expect(LetterMapping.exec(num)).toEqual(result);
//   });
// });
