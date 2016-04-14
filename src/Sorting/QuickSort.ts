
export class QuickSort {

    static sort(arr: number[]) {
        this.quicksort(arr, 0, arr.length - 1);
        return arr;
    }

    static quicksort(arr: number[], lowIndex: number, highIndex: number) {
        if (lowIndex >= highIndex) return;

        var pivot = arr[Math.floor((highIndex + lowIndex) / 2)]

        var i = lowIndex;
        var j = highIndex;
        while (i <= j) {
            while (arr[i] < pivot) i++;
            while (arr[j] > pivot) j--;

            if (i <= j) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++; j--;
            }
        }

        if (lowIndex < j) this.quicksort(arr, lowIndex, j);
        if (highIndex > i) this.quicksort(arr, i, highIndex);
    }
}
