import { Digit } from './Digit';

declare var describe: any, it: any, expect: any;

describe("Digit", () => {
  it("Count digit 1s", () => {
    expect(Digit.count(99)).toEqual(20);
  });

  it("repeatedly add digits", () => {
    expect(Digit.root(38)).toEqual(2);
  });
});
