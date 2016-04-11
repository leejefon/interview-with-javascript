import { RotateArray } from './RotateArray';

declare var describe: any, it: any, expect: any;

describe("Rotate Array", () => {
    it("should rotate", () => {
        var arr = [1, 2, 3, 4, 5, 6, 7];
        var k = 4;
        var result = [5, 6, 7, 1, 2, 3, 4];

        expect(RotateArray.exec(arr, k)).toEqual(result);
    });
});