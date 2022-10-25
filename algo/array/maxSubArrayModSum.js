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

/**
 *
 * @param {array} arr
 * @param {number} m
 * @solution Can't understand this solution, though.
 */
function solution2(arr, m) {
  let maxSum = 0;
  let minDiff = m;
  let sum = 0;
  const sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumArr.push({
      index: i,
      sum: sum % m,
    });
    maxSum = Math.max(maxSum, sumArr[i].sum % m);
  }

  sumArr.sort((a, b) => a.sum - b.sum);

  for (let i = 1; i < sumArr.length; i++) {
    if (
      sumArr[i].sum > sumArr[i - 1].sum &&
      sumArr[i].index < sumArr[i - 1].index
    ) {
      minDiff = Math.min(minDiff, sumArr[i].sum - sumArr[i - 1].sum);
    }
  }

  maxSum = Math.max(maxSum, m - minDiff);

  return maxSum;
}

module.exports = { solution1, solution2 };
