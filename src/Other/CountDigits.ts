
export class CountDigits {

    public static exec(n: number): number {
        var digits = 0;
        for (let m = 1; m <= n; m *= 10) {
            let a = Math.floor(n / m), b = n % m;
            digits += Math.floor((a + 8) / 10) * m + (a % 10 == 1 ? 1 : 0) * (b + 1);
        }
        return digits;
    }
}
