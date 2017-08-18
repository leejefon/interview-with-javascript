import { ReversePolishNotation } from './ReversePolishNotation';

declare var describe: any, it: any, expect: any;

describe("Evaluate Reverse Polish Notation (Stack)", () => {
  it("should work", () => {
    let arr: string[] = ["2", "1", "+", "3", "*"];
    let result: number = 9;

    expect(ReversePolishNotation.exec(arr)).toEqual(result);
  });
});
