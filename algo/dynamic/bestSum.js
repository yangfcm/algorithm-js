/**
 * Write a function bestSum(target, numbers) that takes in a target sum and an array of numbers as arguments
 * The function should return an array containing the shortest combination of numbers that add up to exactly the target sum.
 * If there is more than one shortest combinations, return any one of them.
 * You may use an element of the array as many times as needed.
 * Assum all input numbers are non-negative.
 */
function bestSumSln1(target, numbers) {
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSumSln1(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
}

function bestSumSln2(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSumSln2(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[target] = shortestCombination;

  return shortestCombination;
}

module.exports = { bestSumSln1, bestSumSln2 };
