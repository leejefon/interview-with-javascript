import { CoinChange } from './CoinChange';

declare var describe: any, it: any, expect: any;

describe("Coin Change", () => {
    it("should work", () => {
        var coins = [1, 2, 5];
        var amount = 11;
        var result = 3;

        expect(CoinChange.exec(coins, amount)).toEqual(result);
    });
});
