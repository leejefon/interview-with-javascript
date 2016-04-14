
export class HeapSort {

    static N: number;

    static sort(arr: number[]) {
        this.heapify(arr);
        for (var i = this.N; i > 0; i--) {
            this.swap(arr, 0, i);
            this.N--;
            this.maxHeap(arr, 0);
        }

        return arr;
    }y

    static heapify(arr: number[]) {
        this.N = arr.length - 1;
        for (var i = Math.floor(this.N / 2); i >= 0; i--) {
            this.maxHeap(arr, i);
        }
    }

    static maxHeap(arr: number[], i: number) {
        var leftIndex = 2 * i;
        var rightIndex = leftIndex + 1;

        var maxIndex = i;
        if (leftIndex <= this.N && arr[leftIndex] > arr[i]) {
            maxIndex = leftIndex;
        }
        if (rightIndex <= this.N && arr[rightIndex] > arr[maxIndex])  {
            maxIndex = rightIndex;
        }

        if (maxIndex !== i) {
            this.swap(arr, i, maxIndex);
            this.maxHeap(arr, maxIndex);
        }
    }

    static swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
