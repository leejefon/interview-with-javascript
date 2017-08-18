import { LetterMapping } from './LetterMapping';

declare var describe: any, it: any, expect: any;

describe("Letter map to numbers", () => {
  it("should work", () => {
    var num: number = 1221;
    var result = ['ABU', 'ABBA', 'AVA', 'LU', 'LBA'];

    expect(LetterMapping.exec(num)).toEqual(result);
  });
});
