export class Matrix {
  matrix: number[][];

  public constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  public transpose(): Matrix {
    var newMatrix: number[][] = [];

    for (var i = 0; i < this.matrix[0].length; i++) {
      var row = [];
      for (var j = 0; j < this.matrix.length; j++) {
        row.push(this.matrix[j][i]);
      }
      newMatrix.push(row);
    }

    return new Matrix(newMatrix);
  }

  public multiply(m: Matrix): Matrix {
    var newMatrix: number[][] = [];

    for (var i = 0; i < this.matrix.length; i++) {
      var row = [];
      for (var j = 0; j < m.matrix[0].length; j++) {
        var val = 0;
        for (var k = 0; k < this.matrix[i].length; k++) {
          val += this.matrix[i][k] * m.matrix[k][j];
        }
        row.push(val);
      }
      newMatrix.push(row);
    }

    return new Matrix(newMatrix);
  }
}
