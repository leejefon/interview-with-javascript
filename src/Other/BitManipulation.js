class BitManipulation {
  static swapWithoutTemp(arr, a, b) {
    arr[a] = arr[a] ^ arr[b];
    arr[b] = arr[a] ^ arr[b];
    arr[a] = arr[a] ^ arr[b];
  }

  static addWithoutPlus(a, b) {
    if (b === 0) return a;
    else return this.addWithoutPlus(a ^ b, (a & b) << 1);
  }

  static compareWithoutIf(a, b) {
    const c = a - b;
    const k = (c >> 31) & 0x1;
    return a - k * c;
  }

  static singleNumber(arr) {
    let result = 0;
    for (var a of arr) {
      result ^= a;
    }
    return result;
  }
}

module.exports = BitManipulation;
