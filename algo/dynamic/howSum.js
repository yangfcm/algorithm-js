/**
 * Write a function howSum(target, numbers) that takes in a target sum and an array of numbers as arguments
 * The function should return an array containing any (one) combination of elements that add up to exactly the target sum.
 * If there is no combination that adds up to the target sum, return null.
 * You may use an element of the array as many times as needed.
 * Assum all input numbers are non-negative.
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
