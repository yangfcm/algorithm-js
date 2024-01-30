/**
 * @name twoSum1
 * @description Given an array arr, find element pairs whose sum equal the second argument target
 * and return the sum of their indices.
 * You may use multiple pairs that have the same numeric elements but different indices.
 * Each pair should use the lowest possible available indices.
 * Once an element has been used it cannot be reused to pair with another element.
 * For instance, arr = [1, 1, 2], target = 3 creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.
 * @example arr = [7, 9, 11, 13, 15], target = 20
 * The pairs that sum to 20 are [7, 13] and [9, 11].
 * Their indices are: [0, 3] and [1, 2].
 * So the returned sume is 0 + 3 + 1 + 2 = 6.
 * @param {array} arr
 * @param {number} target
 * @returns {number}
 * @solution Loop through each element and see if there is another element that add up to target number.
 * Time complexity: O(n^2).
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
 */
function solution(arr, target) {
  let sum = 0;
  const visitedIndicies = [];
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (
        arr[i] + arr[j] === target &&
        !visitedIndicies.includes(i) &&
        !visitedIndicies.includes(j)
      ) {
        sum += i + j;
        visitedIndicies.push(i, j);
        break;
      }
    }
  }
  return sum;
}

module.exports = { solution };
