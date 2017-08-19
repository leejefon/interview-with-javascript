class Search2DMatrix {
  static exec(matrix, target) {
    var i = matrix.length - 1;
    var j = 0;

    while (i >= 0 && j < matrix[0].length) {
      if (target > matrix[i][j]) j++;
      else if (target < matrix[i][j]) i--;
      else break;
    }

    if (i >= 0 && j !== matrix[0].length) return true;
    else return false;
  }
}

module.exports = Search2DMatrix;
