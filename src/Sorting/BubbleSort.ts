
export class BubbleSort {

    public static sort(arr: number[]): number[] {
        for (var i in arr) {
            for (var j in arr) {
                if (arr[j] > arr[i]) {
                    var temp: number = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        return arr;
    }
}
