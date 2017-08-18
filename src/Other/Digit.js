export class Digit {
  public static count(n: number, digit: number = 1): number {
    var digits = 0;
    for (let m = 1; m <= n; m *= 10) {
      let a = Math.floor(n / m), b = n % m;
      digits += Math.floor((a + (9 - digit)) / 10) * m + (a % 10 == digit ? 1 : 0) * (b + 1);
    }
    return digits;
  }

  public static root(n: number) {
    return 1 + (n - 1) % 9;
  }
}
