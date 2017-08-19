class MergeSort {
  static sort(arr) {
    if (arr.length === 1) {
      return arr;
    }

    var partitions = this.partition(arr);

    var left = this.sort(partitions.left);
    var right = this.sort(partitions.right);

    return this.merge(left, right);
  }

  static partition(arr) {
    return {
      left: arr.splice(0, Math.floor(arr.length / 2)),
      right: arr
    };
  }

  static merge(left, right) {
    var merged = [];

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

module.exports = MergeSort;
