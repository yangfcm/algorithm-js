const { solution: doPermutations } = require("./permutations");

/**
 * @name noRepeatPermutations
 * @description Given an array of numbers, return the number of total permutations of the numbers
 * that do not have repeated consecutive numbers.
 * @example [1, 1, 2] -> 2.
 * [1, 1, 2] has 6 total permutations: [1, 1, 2], [1, 2, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 1, 1]
 * but only 2 of them ([1, 2, 1] and [1, 2, 1]) don't have repeated consecutive numbers.
 * @param {array} arr
 * @returns {number} The number of no repeated consecutive permutations.
 * @solution It is based on the problem: permutations. First work out the permutations of the array.
 * Then filter out the permutations that have repeated consecutive numbers.
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please
 */
function solution(arr) {
  const permutations = doPermutations(arr);
  return permutations.filter((perm) => !hasRepeatedConsecutive(perm)).length;
}

/**
 * @name hasRepeatedConsecutive
 * @description Given an array, return true if there are repeated consecutive elements.
 * Otherwise return false.
 * @param {array} arr
 * @returns {boolean}
 */
function hasRepeatedConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}

module.exports = { solution };
