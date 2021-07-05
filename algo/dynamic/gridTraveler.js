/**
 * Say that you are a traveler on a 2D grid.
 * You begin in the top-left corner and end in the bottom-right corner.
 * You may only move down or right.
 *
 * Create algorithm to calculate how many routes you can travel to the goal on a grid with dimensions m*n.
 */

// Solution 1 - Use recursive implementation
function solution1(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return solution1(m - 1, n) + solution1(m, n - 1);
}

// Solution 2 - Use memorization
function solution2(m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = solution2(m - 1, n, memo) + solution2(m, n - 1, memo);
  return memo[key];
}

// Solution 3
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
