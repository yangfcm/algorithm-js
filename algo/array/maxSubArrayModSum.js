/**
 * @name maxSubArrayModSum
 * @description Given a positive integer array nums and an integer m, find the contiguous subarray which has the largest sum mod m.
 * @example arr = [3, 3, 9, 9, 5] m = 7 -> 6 ( 3%7 + 3%7 = 6)
 * @param {array} arr
 * @param {number} m
 * @solution The brutal force comparison. Find out all the contiguous subarrays and compare their sums.
 * Its time complexity is O(n^2)
 * @source https://www.hackerrank.com/challenges/maximum-subarray-sum/problem
 */
function solution1(arr, m) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] % m;
    if (sum > maxSum) maxSum = sum;
    for (let j = i + 1; j < arr.length; j++) {
      sum = (sum + arr[j]) % m;
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

function solution2(arr, m) {
  let maxSum = -Infinity;
  // @TODO: implement solution.
  return maxSum;
}

module.exports = { solution1, solution2 };
