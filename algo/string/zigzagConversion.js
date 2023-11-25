/**
 * @name zigzagConversion
 * @description Given a string and the number of rows, convert the string in a zigzag pattern.
 * @example str = "PAYPALISHIRING" numRows = 3
 * The string should be converted like this pattern:
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * then to output it, read it line by line: PAHNAPLSIIGYIR
 * @solution Use a 2D array to simulate the process of the Z-shaped arrangement.
 * @source https://leetcode.com/problems/zigzag-conversion/
 */

/**
 * @param {string} str
 * @param {number} numRows
 */
function solution(str, numRows) {
  if (numRows === 1) return str;
  const arr = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
  }

  let row = 0;
  let col = 0;
  let isDown = true;

  for (let ch of str) {
    arr[row][col] = ch;
    if (isDown) {
      row++;
      if (row === numRows - 1) {
        isDown = false;
      }
    } else {
      row--;
      col++;
      if (row === 0) {
        isDown = true;
      }
    }
  }

  let outputStr = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) outputStr += arr[i][j];
    }
  }

  return outputStr;
}

module.exports = { solution };
