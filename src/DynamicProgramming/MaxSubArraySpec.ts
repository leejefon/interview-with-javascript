import { MaxSubArray } from './MaxSubArray';

declare var describe: any, it: any, expect: any;

describe("Maximum Subarray", () => {
    it("should work", () => {
        var arr = [1, -2, 3, -2, 1, 5, -2];
        var result = 7;

        expect(MaxSubArray.exec(arr)).toEqual(result);
    });
});
