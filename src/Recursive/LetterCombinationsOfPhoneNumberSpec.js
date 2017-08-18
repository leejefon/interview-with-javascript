import { LetterCombinationsOfPhoneNumber } from './LetterCombinationsOfPhoneNumber';

declare var describe: any, it: any, expect: any;

describe("Letter combinations of phone number", () => {
  it("should work", () => {
    var phone = '23';
    var result = ['AD', 'AE', 'AF', 'BD', 'BE', 'BF', 'CD', 'CE', 'CF'];

    expect(LetterCombinationsOfPhoneNumber.exec(phone)).toEqual(result);
  });
});
