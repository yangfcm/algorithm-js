/**
 * @name howSum
 * @description Given a target sum and an array of numbers,
 * return an array containing any one combination of elements that add up to exactly the target sum.
 * If there is no combination that adds up to the target sum, return null.
 * You may use an element of the array as many times as needed.
 * Assum all input numbers are non-negative.
 * @example target = 7, numbers = [2, 3] ->[2, 3, 2]
 * target = 7, numbers = [5, 3, 4, 7] -> [4, 3] Although [7] is also the answer but we just need one.
 * target = 7, numbers = [2, 4] -> null
 * @param {number} target
 * @param {number[]} numbers
 * @returns {array or null} Any combination that sums up to target number or null if there's no such combination
 * @solution Use recursive
 */
function solution1(target, numbers) {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const remainder = target - num;
    const remainderResult = solution1(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
}

/**
 * @param {number} target
 * @param {number[]} numbers
 * @returns {array or null} Any combination that sums up to target number or null if there's no such combination
 * @solution Use recursive with a memo table as a cache to the previous calculation result.
 */
function solution2(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const remainder = target - num;
    const remainderResult = solution2(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
}

/**
 * @param {number} target
 * @param {number[]} numbers
 * @returns {array or null} Any combination that sums up to target number or null if there's no such combination
 * @solution Create an array to save the previous calculation result
 */
function solution3(target, numbers) {
  const sumArr = new Array(target + 1).fill(null);
  sumArr[0] = [];
  for (let i = 0; i <= target; i++) {
    if (sumArr[i] !== null) {
      for (let num of numbers) {
        sumArr[i + num] = [...sumArr[i], num];
      }
    }
  }
  return sumArr[target];
}

module.exports = { solution1, solution2, solution3 };
