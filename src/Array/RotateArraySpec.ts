import { RotateArray } from './RotateArray';

declare var describe: any, it: any, expect: any;

describe("Rotate Array", () => {
    it("should rotate", () => {
        let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
        let k: number = 4;
        let result: number[] = [5, 6, 7, 1, 2, 3, 4];

        expect(RotateArray.exec(arr, k)).toEqual(result);
    });
});
