export class ShellSort {
  static sort(arr) {
    var gaps = [5, 1];

    gaps.forEach(gap => {
      for (var i = gap; i < arr.length; i++) {
        var curr = arr[i];
        for (var j = i; j >= gap && arr[j - gap] > curr; j -= gap) {
          arr[j] = arr[j - gap];
        }
        arr[j] = curr;
      }
    });

    return arr;
  }
}
