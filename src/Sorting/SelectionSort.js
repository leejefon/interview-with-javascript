class SelectionSort {
  static sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    return arr;
  }
}

module.exports = SelectionSort;
