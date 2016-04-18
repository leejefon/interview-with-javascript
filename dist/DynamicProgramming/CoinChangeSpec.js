System.register(['./CoinChange'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CoinChange_1;
    return {
        setters:[
            function (CoinChange_1_1) {
                CoinChange_1 = CoinChange_1_1;
            }],
        execute: function() {
            describe("Coin Change", function () {
                it("should work", function () {
                    var coins = [1, 2, 5];
                    var amount = 11;
                    var result = 3;
                    expect(CoinChange_1.CoinChange.exec(coins, amount)).toEqual(result);
                });
                it("should return -1", function () {
                    var coins = [2, 4];
                    var amount = 11;
                    var result = -1;
                    expect(CoinChange_1.CoinChange.exec(coins, amount)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=CoinChangeSpec.js.map