import { MaxSubArray } from './MaxSubArray';

declare var describe: any, it: any, expect: any;

describe("Maximum Subarray", () => {
  it("should work", () => {
    let arr: number[] = [1, -2, 3, -2, 1, 5, -2];
    let result: number = 7;

    expect(MaxSubArray.exec(arr)).toEqual(result);
  });
});
