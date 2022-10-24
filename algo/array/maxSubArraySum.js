/**
 * @name maxSubArray
 * @description Given an integer array, find the contiguous subarray which has the largest sum and return its sum
 * The array should contain positive number and negative number.
 * @example arr = [-2,1,-3,4,-1,2,1,-5,4] -> 6 (The subarray is [4, -1, 2, 1], 4 + (-1) + 2 + 1 = 6)
 * @param {array} arr An array of integer numbers
 * @return {number} The largest sum of subarray.
 * @solution The brutal force comparison. Find out all the contiguous subarrays and compare their sums.
 * Its time complexity is O(n^2)
 * @source https://leetcode.com/problems/maximum-subarray/
 */
function solution1(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum > maxSum) maxSum = sum;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

/**
 * @param {array} arr An array of integer numbers
 * @return {number} The largest sum of subarray.
 * @solution Kadane's algorithm. It is explained here: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 */
function solution2(arr) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;

  for (let num of arr) {
    maxEndingHere += num;
    if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere;
    if (maxEndingHere < 0) maxEndingHere = 0;
  }
  return maxSoFar;
}

module.exports = { solution1, solution2 };
