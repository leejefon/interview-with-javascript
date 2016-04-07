System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CoinChange;
    return {
        setters:[],
        execute: function() {
            CoinChange = (function () {
                function CoinChange() {
                }
                CoinChange.exec = function (coins, amount) {
                    var max_coins = amount;
                    var results = Array(amount + 1).fill(max_coins + 1);
                    results[0] = 0;
                    for (var i = 1; i <= amount; i++) {
                        for (var j = 0; j < coins.length; j++) {
                            if (coins[j] <= i) {
                                results[i] = Math.min(results[i], results[i - coins[j]] + 1);
                            }
                        }
                    }
                    return results[amount] > amount ? -1 : results[amount];
                };
                return CoinChange;
            }());
            exports_1("CoinChange", CoinChange);
        }
    }
});
//# sourceMappingURL=CoinChange.js.map