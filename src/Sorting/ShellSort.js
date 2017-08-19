class ShellSort {
  static sort(arr) {
    const gaps = [5, 1];

    gaps.forEach(gap => {
      for (let i = gap; i < arr.length; i++) {
        const curr = arr[i];
        let j = i
        for (; j >= gap && arr[j - gap] > curr; j -= gap) {
          arr[j] = arr[j - gap];
        }
        arr[j] = curr;
      }
    });

    return arr;
  }
}

module.exports = ShellSort;
