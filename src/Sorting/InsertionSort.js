export class InsertionSort {
  static sort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i; j > 0; j--) {
        if (arr[j - 1] > arr[j]) {
          var temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return arr;
  }
}
