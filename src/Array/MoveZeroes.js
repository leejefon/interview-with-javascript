export class MoveZeroes {
  public static exec(arr: number[]): number[] {
    var insertIndex: number = 0;
    for (var i in arr) {
      if (arr[i] !== 0) {
        arr[insertIndex++] = arr[i];
      }
    }

    for (var j = insertIndex; j < arr.length; j++) {
      arr[j] = 0;
    }

    return arr;
  }
}
