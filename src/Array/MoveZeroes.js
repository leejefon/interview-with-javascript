export class MoveZeroes {
  static exec(arr) {
    let insertIndex = 0;
    for (const i in arr) {
      if (arr[i] !== 0) {
        arr[insertIndex++] = arr[i];
      }
    }

    for (let j = insertIndex; j < arr.length; j++) {
      arr[j] = 0;
    }

    return arr;
  }
}
