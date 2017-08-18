export class MaxSubArray {  
  public static exec(arr: number[]): number {
    var result: number[] = Array(arr.length);
    result[0] = arr[0];

    for (var i = 1; i < arr.length; i++) {
      result[i] = Math.max(arr[i], arr[i] + result[i - 1]);
    }

    return Math.max(...result);
  }
}
