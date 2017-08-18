export class QuickSort {
  public static sort(arr: number[]): number[] {
    this.quicksort(arr, 0, arr.length - 1);
    return arr;
  }

  private static quicksort(arr: number[], lowIndex: number, highIndex: number): void {
    if (lowIndex >= highIndex) return;

    var pivot: number = arr[Math.floor((highIndex + lowIndex) / 2)]

    var i: number = lowIndex;
    var j: number = highIndex;
    while (i <= j) {
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;

      if (i <= j) {
        var temp: number = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
      }
    }

    if (lowIndex < j) this.quicksort(arr, lowIndex, j);
    if (highIndex > i) this.quicksort(arr, i, highIndex);
  }
}
