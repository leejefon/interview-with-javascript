
export class BubbleSort {

    public static sort(arr: number[]): number[] {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < i; j++) {
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
