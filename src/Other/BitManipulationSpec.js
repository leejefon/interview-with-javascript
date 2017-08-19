import { BitManipulation } from './BitManipulation';

describe("Bit Manipulations", () => {
  it("Swap without temp variable", () => {
    let a = [1, 2];
    let result = [2, 1];

    BitManipulation.swapWithoutTemp(a, 0, 1)
    expect(a).toEqual(result);
  });

  it("add without arithmetic operators", () => {
    let a = 3, b = 5;
    let result = 8;

    expect(BitManipulation.addWithoutPlus(a, b)).toEqual(result);
  });

  it("compare numbers without if", () => {
    let a = 3, b = 5;
    let result = 5;

    expect(BitManipulation.compareWithoutIf(a, b)).toEqual(result);
  });

  it("find single number", () => {
    let arr = [1, 2, 3, 2, 1];
    let result = 3;

    expect(BitManipulation.singleNumber(arr)).toEqual(result);
  });
});
