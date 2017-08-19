export class ThreeSum {
  static exec(arr, sum) {
    var results = [];

    arr.sort();

    for (let i = 0; i < arr.length - 2; i++) {
      if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
        var lowIndex = i + 1;
        var highIndex = arr.length - 1;

        while (lowIndex < highIndex) {
          var currSum = arr[lowIndex] + arr[highIndex] + arr[i];

          if (currSum === sum) {
            results.push([arr[i], arr[lowIndex], arr[highIndex]]);
            while (lowIndex < highIndex && arr[lowIndex] == arr[lowIndex + 1]) lowIndex++;
            while (lowIndex < highIndex && arr[highIndex] == arr[highIndex - 1]) highIndex--;
            lowIndex++; highIndex--;
          } else if (currSum > sum) {
            highIndex--;
          } else {
            lowIndex++;
          }
        }
      }
    }

    return results;
  }
}
