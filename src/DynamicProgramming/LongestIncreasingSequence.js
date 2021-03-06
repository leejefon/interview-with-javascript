class LongestIncreasingSequence {
  static exec(arr) {
    const result = Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
          if (result[j] + 1 > result[i]) {
            result[i] = result[j] + 1;
          }
        }
      }
    }

    return Math.max(...result);
  }
}

module.exports = LongestIncreasingSequence;
