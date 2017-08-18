
export class Search2DMatrix {

    public static exec(matrix: number[][], target: number): boolean {
        var i: number = matrix.length - 1;
        var j: number = 0;

        while (i >= 0 && j < matrix[0].length) {
            if (target > matrix[i][j]) j++;
            else if (target < matrix[i][j]) i--;
            else break;
        }

        if (i >= 0 && j !== matrix[0].length) return true;
        else return false;
    }
}
