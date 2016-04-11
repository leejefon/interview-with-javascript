import { ThreeSum } from './ThreeSum';

declare var describe: any, it: any, expect: any;

describe("ThreeSum", () => {
    it("should work", () => {
        var arr = [-1, 0, 1, 2, -1, -4];

        var results = [
            [-1, -1, 2],
            [-1, 0, 1]
        ];

        expect(ThreeSum.exec(arr)).toEqual(results);
    });
});
