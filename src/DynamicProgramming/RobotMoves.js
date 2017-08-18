export class RobotMoves {  
  public static exec(board: number[][]): number {
    var width = board[0].length;
    var dp: number[] = Array(width).fill(0);

    dp[0] = 1;
    for (var row of board) {
      for (var j = 0; j < width; j++) {
        if (row[j] == 1) {
          dp[j] = 0;
        } else if (j > 0) {
          dp[j] += dp[j - 1];
        }
      }
    }

    return dp[width - 1];
  }
}
