import { MoveZeroes } from './MoveZeroes';

declare var describe: any, it: any, expect: any;

describe("Move 0s to the end", () => {
  it("should work", () => {
    let arr: number[] = [9, 5, 0, 7, 0, 3, 1, 2, 0, 4];
    let result: number[] = [9, 5, 7, 3, 1, 2, 4, 0, 0 ,0];

    expect(MoveZeroes.exec(arr)).toEqual(result);
  });
});
