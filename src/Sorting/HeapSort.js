
export class HeapSort {

    private static N: number;

    public static sort(arr: number[]): number[] {
        this.heapify(arr);
        for (var i = this.N; i > 0; i--) {
            this.swap(arr, 0, i);
            this.N--;
            this.maxHeap(arr, 0);
        }

        return arr;
    }

    private static heapify(arr: number[]): void {
        this.N = arr.length - 1;
        for (var i = Math.floor(this.N / 2); i >= 0; i--) {
            this.maxHeap(arr, i);
        }
    }

    private static maxHeap(arr: number[], i: number): void {
        var leftIndex: number = 2 * i;
        var rightIndex: number = leftIndex + 1;

        var maxIndex: number = i;
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

    private static swap(arr, i, j): void {
        var temp: number = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
