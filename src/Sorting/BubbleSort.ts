
export class BubbleSort {

    static sort(arr: number[]) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        return arr;
    }
}
