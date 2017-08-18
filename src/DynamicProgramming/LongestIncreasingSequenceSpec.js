import { LongestIncreasingSequence } from './LongestIncreasingSequence';

declare var describe: any, it: any, expect: any;

describe("Longest Increasing Sequence", () => {
    it("should work", () => {
        let arr: number[] = [1, -2, 2, -2, 3, 5, -2];
        let result: number = 4;

        expect(LongestIncreasingSequence.exec(arr)).toEqual(result);
    });

    it("should also work", () => {
        let arr: number[] = [10, 9, 2, 5, 3, 7, 101, 18];
        let result: number = 4;

        expect(LongestIncreasingSequence.exec(arr)).toEqual(result);
    });
});
