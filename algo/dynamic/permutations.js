/**
 * @name permutations
 * @description Given an array of distinct integers, return all the possible permutations.
 * @example arr = [1, 2, 3] ->
 * [
 *  [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
 * ]
 * @param {array} arr
 * @returns {array} All possible permutations of the numbers in arr.
 * @solution This artical explains the solution step by step:
 * https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff
 * @source https://leetcode.com/problems/permutations/
 */
function solution(arr) {
  const permutations = [];

  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const remainingNums = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const remainingNumsPermuted = solution(remainingNums);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      permutations.push([currentNum, ...remainingNumsPermuted[j]]);
    }
  }
  return permutations;
}

module.exports = { solution };
