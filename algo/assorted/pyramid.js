/**
 * @name pyramid
 * @description Write a function that accepts a position number and print a pyramid shape with N levels,
 * using # character and space(s) on both left and right side.
 * @example
 *   pyramid(1)
 *       '#'
 *   pyramid(2)
 *       ' # '
 *       '###'
 *   pyramid(3)
 *       '  #  '
 *       ' ### '
 *       '#####'
 */

/**
 * @name solution
 * @param {number} n
 * @returns {void}
 * @description From 0 to n(iterate through rows)
 *   Create an empty string, 'level'
 *   From 0 to 2n-1 (columns)
 *   IF the column should have a '#'
 *     Add a '#' to 'level'
 *   ELSE
 *     Add a space to 'level'
 * console log 'level'
 */
function solution(n) {
  for (let i = 1; i <= n; i++) {
    // i - the number of current level
    let level = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      // For each level, it has 2*n-1 columns
      if (j >= n - i + 1 && j <= n + i - 1) {
        // The column where to put '#'
        level += "#";
      } else {
        level += " "; // The column where to put space
      }
    }
    console.log(level);
  }
}

module.exports = { solution };
