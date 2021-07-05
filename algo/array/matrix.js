// Matrix
// Write a function that accepts an integer n
// and returns a N x N spiral matrix. (What is spiral matrix, see the example below)
// e.g.
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/**
 * Solution:
 * Create an empty array of arrays called 'results'
 * Create a counter variable, starting at 1
 * As long as (start column <= end column) and (start row <= end row)
 *   Loop from start column to end column
 *     At results[start_row][i] assign counter variable
 *     Increment counter
 *   Increment start row
 *   Loop from start row to end row
 *     At results[i][end_column assign counter variable]
 *     Increment counter
 *   Decrement end row
 *   ...repeat for other two sides
 */
function solution(n) {
  const results = new Array(n);
  let startRow = (startCol = 0);
  let endRow = (endCol = n - 1);
  // let currentRow = currentCol = 0;
  let counter = 1;
  for (i = 0; i < n; i++) {
    results[i] = new Array(n); // Create a n*n empty array
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      // From-left-to-right row
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      // From-top-to-bottom column
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      // From-right-to-left row
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      // From-bottom-to-top column
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}

// console.log(matrix(4));

module.exports = { solution };
