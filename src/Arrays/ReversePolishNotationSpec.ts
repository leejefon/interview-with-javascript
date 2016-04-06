import { ReversePolishNotation } from './ReversePolishNotation';

declare var describe: any, it: any, expect: any;

describe("Evaluate Reverse Polish Notation (Stack)", () => {
    it("should work", () => {
        var arr = ["2", "1", "+", "3", "*"];
        var result = 9;

        expect(ReversePolishNotation.exec(arr)).toEqual(result);
    });
});
