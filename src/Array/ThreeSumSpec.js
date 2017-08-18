import { ThreeSum } from './ThreeSum';

declare var describe: any, it: any, expect: any;

describe("ThreeSum", () => {
  it("should work", () => {
    let arr: number[] = [-1, 0, 1, 2, -1, -4];
    let results: number[][] = [
      [-1, -1, 2],
      [-1, 0, 1]
    ];

    expect(ThreeSum.exec(arr)).toEqual(results);
  });
});
