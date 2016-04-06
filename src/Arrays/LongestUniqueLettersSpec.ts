import { LongestUniqueLetters } from './LongestUniqueLetters';

declare var describe: any, it: any, expect: any;

describe("Longest Substring without Repeating Characters", () => {
    it("should work", () => {
        var str = "abcabcbb";
        var result = "abc";

        expect(LongestUniqueLetters.exec(str)).toEqual(result.length);
    });
});
