class QuickSort {
  static sort(arr) {
    this.quicksort(arr, 0, arr.length - 1);
    return arr;
  }

  static quicksort(arr, lowIndex, highIndex) {
    if (lowIndex >= highIndex) return;

    const pivot = arr[Math.floor((highIndex + lowIndex) / 2)]

    let i = lowIndex;
    let j = highIndex;
    while (i <= j) {
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;

      if (i <= j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
      }
    }

    if (lowIndex < j) this.quicksort(arr, lowIndex, j);
    if (highIndex > i) this.quicksort(arr, i, highIndex);
  }
}

module.exports = QuickSort;
