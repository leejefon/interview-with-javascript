import { CoinChange } from './CoinChange';

declare var describe: any, it: any, expect: any;

describe("Coin Change", () => {
    it("should work", () => {
        let coins: number[] = [1, 2, 5];
        let amount: number = 11;
        let result: number = 3;

        expect(CoinChange.exec(coins, amount)).toEqual(result);
    });
});
