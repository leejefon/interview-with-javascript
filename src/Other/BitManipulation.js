export class BitManipulation {
  public static swapWithoutTemp(arr: number[], a: number, b: number): void {
    arr[a] = arr[a] ^ arr[b];
    arr[b] = arr[a] ^ arr[b];
    arr[a] = arr[a] ^ arr[b];
  }

  public static addWithoutPlus(a: number, b: number): number {
    if (b === 0) return a;
    else return this.addWithoutPlus(a ^ b, (a & b) << 1);
  }

  public static compareWithoutIf(a: number, b: number): number {
    var c = a - b;
    var k = (c >> 31) & 0x1;
    return a - k * c;
  }

  public static singleNumber(arr: number[]): number {
    var result = 0;
    for (var a of arr) {
      result ^= a;
    }
    return result;
  }
}
