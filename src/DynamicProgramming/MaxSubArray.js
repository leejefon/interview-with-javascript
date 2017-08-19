class MaxSubArray {
  static exec(arr) {
    var result = Array(arr.length);
    result[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
      result[i] = Math.max(arr[i], arr[i] + result[i - 1]);
    }

    return Math.max(...result);
  }
}

module.exports = MaxSubArray;
