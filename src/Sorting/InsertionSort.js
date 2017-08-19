class InsertionSort {
  static sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j - 1] > arr[j]) {
          const temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return arr;
  }
}

module.exports = InsertionSort;
