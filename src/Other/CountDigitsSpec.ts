import { CountDigits } from './CountDigits';

declare var describe: any, it: any, expect: any;

describe("Count Digit 1s", () => {
    it("should work", () => {
        expect(CountDigits.exec(99)).toEqual(20);
    });
});
