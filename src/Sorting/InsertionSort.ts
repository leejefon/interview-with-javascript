
export class InsertionSort {

    static sort(arr: number[]) {
        var sorted: number[] = [];

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            for (var j = 0; j <= sorted.length; j++) {
                if (j === sorted.length) {
                    sorted.push(item);
                    break;
                }

                if (sorted[j] > item) {
                    var temp = sorted[j];
                    sorted[j] = item;
                    item = temp;
                }
            }
        }

        return sorted;
    }
}
