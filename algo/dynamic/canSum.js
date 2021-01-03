/**
 * Write a function canSum(target, numbers) that takes in a target sum and an array of numbers as arguments
 * The function should return a boolean indicating whether or not it is possible to generate the target sum using numbers from the array.
 * You may use an element of the array as many times as needed.
 * Assum all input numbers are non-negative.
 */
function canSumSln1(target, numbers) {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (canSumSln1(remainder, numbers)) {
      return true;
    }
  }
  return false;
}

function canSumSln2(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (canSumSln2(remainder, numbers, memo)) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

module.exports = {
  canSumSln1,
  canSumSln2,
};
