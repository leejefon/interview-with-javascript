
export class InsertionSort {

    public static sort(arr: number[]): number[] {
        var sorted: number[] = [];

        for (var i in arr) {
            var item: number = arr[i];
            for (var j = 0; j <= sorted.length; j++) {
                if (j === sorted.length) {
                    sorted.push(item);
                    break;
                }

                if (sorted[j] > item) {
                    var temp: number = sorted[j];
                    sorted[j] = item;
                    item = temp;
                }
            }
        }

        return sorted;
    }
}
