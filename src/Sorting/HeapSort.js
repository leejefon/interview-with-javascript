class HeapSort {
  static sort(arr) {
    this.heapify(arr);
    for (let i = this.N; i > 0; i--) {
      this.swap(arr, 0, i);
      this.N--;
      this.maxHeap(arr, 0);
    }

    return arr;
  }

  static heapify(arr) {
    this.N = arr.length - 1;
    for (let i = Math.floor(this.N / 2); i >= 0; i--) {
      this.maxHeap(arr, i);
    }
  }

  static maxHeap(arr, i) {
    const leftIndex = 2 * i;
    const rightIndex = leftIndex + 1;

    let maxIndex = i;
    if (leftIndex <= this.N && arr[leftIndex] > arr[i]) {
      maxIndex = leftIndex;
    }
    if (rightIndex <= this.N && arr[rightIndex] > arr[maxIndex])  {
      maxIndex = rightIndex;
    }

    if (maxIndex !== i) {
      this.swap(arr, i, maxIndex);
      this.maxHeap(arr, maxIndex);
    }
  }

  static swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

module.exports = HeapSort;
