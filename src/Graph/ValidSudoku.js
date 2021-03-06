class ValidSudoku {
  static exec(board) {
    const sudokuSize = board.length;

    const rowCheck = [];
    const colCheck = [];
    const boxCheck = [];

    for (let i = 0; i < sudokuSize; i++) {
      rowCheck.push([]);
      colCheck.push([]);
      boxCheck.push([]);
      for (let j = 0; j < sudokuSize; j++) {
        rowCheck[i].push(false);
        colCheck[i].push(false);
        boxCheck[i].push(false);
      }
    }

    for (let i = 0; i < sudokuSize; i++) {
      for (let j = 0; j < sudokuSize; j++) {
        if (board[i][j] !== 0) {
          const num = board[i][j] - 1;
          const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

          if (rowCheck[i][num] || colCheck[j][num] || boxCheck[box][num]) {
            return false;
          } else {
            rowCheck[i][num] = true;
            colCheck[j][num] = true;
            boxCheck[box][num] = true;
          }
        }
      }
    }

    return true;
  }
}

module.exports = ValidSudoku;
