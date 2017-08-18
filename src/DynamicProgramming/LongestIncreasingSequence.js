
export class LongestIncreasingSequence {

    public static exec(arr: number[]): number {
        var result: number[] = Array(arr.length).fill(1);

        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < i; j++) {
                if (arr[i] > arr[j]) {
                    if (result[j] + 1 > result[i]) {
                        result[i] = result[j] + 1;
                    }
                }
            }
        }

        return Math.max(...result);
    }
}
