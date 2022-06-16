/**
 * @name canSum
 * @description Given an array of number and a target number, return true or false to indicate whether or not
 * it is possible to generate the target sum using the numbers from the array.
 * You may use the elements in the array as many times as you need.
 * Assum all input numbers are non-negative.
 * @example target = 7, numbers = [2, 3] -> true (2 + 2 + 3 = 7)
 * target = 7, numbers = [5, 3, 4, 7] -> true (7 = 7) or (3 + 4 = 7)
 * target = 7, numbers = [2, 4] -> false
 * @param {number} target
 * @param {number[]} numbers
 * @returns {boolean}
 * @solution Use recursive
 */
function solution1(target, numbers) {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (solution1(remainder, numbers)) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number} target
 * @param {number[]} numbers
 * @returns {boolean}
 * @solution Use a memo table as a cache to the previous calculation result.
 */
function solution2(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (solution2(remainder, numbers, memo)) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

/**
 * @param {number} target
 * @param {number[]} numbers
 * @returns {boolean}
 * @solution Create an array to save the previous calculation result
 * And the result is exactly the last element of the array.
 */
function solution3(target, numbers) {
  const targetArr = new Array(target + 1).fill(false);
  targetArr[0] = true;
  for (let i = 0; i <= target; i++) {
    if (targetArr[i] === true) {
      for (let num of numbers) {
        targetArr[i + num] = true;
      }
    }
  }
  return targetArr[target];
}

module.exports = {
  solution1,
  solution2,
  solution3,
};
