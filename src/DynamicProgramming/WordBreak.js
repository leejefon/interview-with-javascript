class WordBreak {
  static exec(str, dict) {
    let dp = Array(str.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= str.length; i++) {
      for (var j = 0; j < i; j++) {
        if (dp[j] && dict.includes(str.substring(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }

    return dp[str.length];
  }
}

module.exports = WordBreak;
