/**
 * @name gridTraveler
 * @description Say that you are a traveler on a 2D grid.
 * You begin in the top-left corner and end in the bottom-right corner.
 * You may only move down or right.
 * Calculate how many routes you can travel to the goal on a grid with dimensions m*n.
 * @example m = 2, n = 3
 * It creates a 2 x 3 grid, which looks like this:
 * +---+---+---+
 * + a +   +   +
 * +---+---+---+
 * +   +   + b +
 * +---+---+---+
 * To travel from a to b, you can have 3 routes in total as below:
 * R -> R -> D
 * R -> D -> R
 * D -> R -> R
 * R - right, D - down.
 * @param {number} m
 * @param {number} n
 * @returns {number} How many routes to travel from the top-left corner of a 2D grid to the bottom-right corner.
 * @solution Use recursive
 */
function solution1(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return solution1(m - 1, n) + solution1(m, n - 1);
}

/**
 * @name gridTraveler
 * @param {number} m
 * @param {number} n
 * @param {object} memo
 * @returns {number}
 * @solution Use a memo table as a cache to the previous calculation result.
 */
function solution2(m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = solution2(m - 1, n, memo) + solution2(m, n - 1, memo);
  return memo[key];
}

/**
 * @name gridTraveler
 * @param {number} m
 * @param {number} n
 * @returns {number}
 * @solution Create a 2-D array to save the previous calculation result.
 */
function solution3(m, n) {
  const travelArr = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0)); // Create a two dimensional array m+1 by n+1 and filled it with 0.
  travelArr[1][1] = 1; // set up starting value.
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i <= 1 && j <= 1) {
        continue;
      }
      const prevRow = i >= 1 ? travelArr[i - 1][j] : 0;
      const prevCol = j >= 1 ? travelArr[i][j - 1] : 0;
      travelArr[i][j] = prevRow + prevCol;
    }
  }
  return travelArr[m][n];
}

module.exports = {
  solution1,
  solution2,
  solution3,
};
