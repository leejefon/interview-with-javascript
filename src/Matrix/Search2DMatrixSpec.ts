import { Search2DMatrix } from './Search2DMatrix';

declare var describe: any, it: any, expect: any;

describe("Search 2D Matrix", () => {
    it("should work", () => {
        var matrix = [
            [1,   3,  5,  7],
            [10, 11, 16, 20],
            [23, 30, 34, 50]
        ];

        var target = 3;
        var falseTarget = 12;

        expect(Search2DMatrix.exec(matrix, target)).toEqual(true);
        expect(Search2DMatrix.exec(matrix, falseTarget)).toEqual(false);
    });
});
