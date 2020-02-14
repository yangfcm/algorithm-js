/**
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * 1 - Each row must contain the digits 1-9 without repetition.
 * 2 - Each column must contain the digits 1-9 without repetition.
 * 3 - Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 * e.g. Input:
	[
		["5","3",".",".","7",".",".",".","."],
		["6",".",".","1","9","5",".",".","."],
		[".","9","8",".",".",".",".","6","."],
		["8",".",".",".","6",".",".",".","3"],
		["4",".",".","8",".","3",".",".","1"],
		["7",".",".",".","2",".",".",".","6"],
		[".","6",".",".",".",".","2","8","."],
		[".",".",".","4","1","9",".",".","5"],
		[".",".",".",".","8",".",".","7","9"]
	]
	Output: true
	Input:
	[
		["8","3",".",".","7",".",".",".","."],
		["6",".",".","1","9","5",".",".","."],
		[".","9","8",".",".",".",".","6","."],
		["8",".",".",".","6",".",".",".","3"],
		["4",".",".","8",".","3",".",".","1"],
		["7",".",".",".","2",".",".",".","6"],
		[".","6",".",".",".",".","2","8","."],
		[".",".",".","4","1","9",".",".","5"],
		[".",".",".",".","8",".",".","7","9"]
	]
	Output: false
 * @param {character[][]} board
 * @return {boolean}
 */
function validSudoku(board) {
  const n = board.length;
  for (let i = 0; i < n; i++) {
    const row = [];
    const col = [];
    const box = [];
    for (let j = 0; j < n; j++) {
      if (board[i][j] != ".") {
        // Check row to see if valid
        if (row.indexOf(board[i][j]) >= 0) {
          return false;
        }
        row.push(board[i][j]);
      }
      if (board[j][i] != ".") {
        // Check column to see if valid
        if (col.indexOf(board[j][i]) >= 0) {
          return false;
        }
        col.push(board[j][i]);
      }

      let numBox =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (numBox != ".") {
        // Check box to see if valid
        if (box.indexOf(numBox) >= 0) {
          return false;
        }
        box.push(numBox);
      }
    }
  }
  return true;
}

// /** Given an array, return true if there is duplicate number, otherwise return false */
// function hasDuplicate(arr) {
//   const helpArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       if (helpArr.indexOf(arr[i]) === -1) {
//         helpArr.push(arr[i]);
//       } else {
//         return true;
//       }
//     }
//   }
//   return false;
// }

module.exports = validSudoku;
