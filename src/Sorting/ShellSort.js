
export class ShellSort {

    public static sort(arr: number[]): number[] {
        var gaps: number[] = [5, 1];

        gaps.forEach(gap => {
            for (var i = gap; i < arr.length; i++) {
                var curr: number = arr[i];
                for (var j = i; j >= gap && arr[j - gap] > curr; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = curr;
            }
        });

        return arr;
    }
}
