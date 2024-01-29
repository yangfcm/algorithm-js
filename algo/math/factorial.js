/**
 * @name factorial
 * @description Calculate the factorial of a given number n (n!)
 * @example 1 -> 1,
 * 2 -> 2 (2 * 1)
 * 6 -> 720 (6 * 5 * 4 * 3 * 2 * 1)
 * @param {number} n
 * @returns {number}
 * @solution Use recursive.
 */
function solution1(n) {
  if (n <= 1) return 1;
  return n * solution1(n - 1);
}

/**
 * @name factorial
 * @param {number} n
 * @param {object} memo
 * @returns Improve solution1 by using memo to cache the previous calculation result
 */
function solution2(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  memo[n] = n * solution2(n - 1);
  return memo[n];
}

module.exports = { solution1, solution2 };
