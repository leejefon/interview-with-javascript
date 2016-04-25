import { RobotMoves } from './RobotMoves';

declare var describe: any, it: any, expect: any;

describe("Unique robot move paths", () => {
    it("should work", () => {
        var board: number[][] = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        expect(RobotMoves.exec(board)).toEqual(2);
    });
});
