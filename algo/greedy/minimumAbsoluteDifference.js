/**
 * @name minimumAbsoluteDifference
 * @description Given an array of integers, find the minimum absolute difference between any two elements in the array.
 * @example arr = [1 -3 71 68 17] -> 3 (|71-68|= 3)
 * @solution Sort and iterate through the array.
 * Calculate the absolute difference between the number and its next number and find out the minimum one.
 * @param {array} arr An array of integer numbers.
 * @returns The minimum absolute difference found.
 * @source https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array
 */
function solution(arr) {
  let minDiff = Infinity;
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff < minDiff) minDiff = diff;
  }
  return minDiff;
}

module.exports = { solution };
