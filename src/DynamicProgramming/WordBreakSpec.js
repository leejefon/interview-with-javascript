import { WordBreak } from './WordBreak';

describe("Word Break", () => {
  it("should work", () => {
    let dict: string[] = ['be', 'bed', 'and', 'bath'];
    let str: string = 'bedandbath';
    let str2: string = 'beddanbath';

    expect(WordBreak.exec(str, dict)).toEqual(true);
    expect(WordBreak.exec(str2, dict)).toEqual(false);
  });
});
