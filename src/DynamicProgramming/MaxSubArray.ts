
export class MaxSubArray {

    static exec(arr: number[]) {
        var result: number[] = Array(arr.length);
        var max = arr[0];
        result[0] = arr[0];

        for (var i = 1; i < arr.length; i++) {
            result[i] = Math.max(arr[i], arr[i] + result[i - 1]);
            if (result[i] > max) {
                max = result[i];
            }
        }

        return max;
    }
}
