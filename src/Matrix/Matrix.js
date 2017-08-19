export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  transpose() {
    var newMatrix = [];

    for (let i = 0; i < this.matrix[0].length; i++) {
      var row = [];
      for (let j = 0; j < this.matrix.length; j++) {
        row.push(this.matrix[j][i]);
      }
      newMatrix.push(row);
    }

    return new Matrix(newMatrix);
  }

  multiply(m) {
    var newMatrix = [];

    for (let i = 0; i < this.matrix.length; i++) {
      var row = [];
      for (let j = 0; j < m.matrix[0].length; j++) {
        var val = 0;
        for (let k = 0; k < this.matrix[i].length; k++) {
          val += this.matrix[i][k] * m.matrix[k][j];
        }
        row.push(val);
      }
      newMatrix.push(row);
    }

    return new Matrix(newMatrix);
  }
}
