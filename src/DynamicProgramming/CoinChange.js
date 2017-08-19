class CoinChange {
  static exec(coins, amount) {
    const results = Array(amount + 1).fill(amount + 1);
    results[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
        if (coins[j] <= i) {
          results[i] = Math.min(results[i], results[i - coins[j]] + 1);
        }
      }
    }

    return results[amount] > amount ? -1 : results[amount];
  }
}

module.exports = CoinChange;
