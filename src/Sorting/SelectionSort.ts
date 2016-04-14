
export class SelectionSort {

    static sort(arr: number[]) {
        for (var i = 0; i < arr.length; i++) {
            var minIndex = i;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        return arr;
    }
}
