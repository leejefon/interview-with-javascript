class RotateArray {
  static exec (arr, k) {
    if (k > arr.length) return null;

    const firstHalf = [];
    const secondHalf = [];

    for (let i = 0; i < arr.length; i++) {
      if (i < k) firstHalf.push(arr[i]);
      else secondHalf.push(arr[i]);
    }

    return secondHalf.concat(firstHalf);
  }
}

module.exports = RotateArray;
