export class MergeSort {
  public static sort(arr: number[]): number[] {
    if (arr.length === 1) {
      return arr;
    }

    var partitions: { left: number[], right: number[]} = this.partition(arr);

    var left: number[] = this.sort(partitions.left);
    var right: number[] = this.sort(partitions.right);

    return this.merge(left, right);
  }

  private static partition(arr: number[]): { left: number[], right: number[]} {
    return {
      left: arr.splice(0, Math.floor(arr.length / 2)),
      right: arr
    };
  }

  private static merge(left: number[], right: number[]): number[] {
    var merged: number[] = [];

    if (left.length === 0) return right;
    if (right.length === 0) return left;

    if (left[0] > right[0]) {
      merged.push(right[0]);
      merged = merged.concat(this.merge(left, right.splice(1)));
    } else {
      merged.push(left[0]);
      merged = merged.concat(this.merge(left.splice(1), right));
    }

    return merged;
  }
}
