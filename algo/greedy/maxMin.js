/**
 * @name maxMin
 * @description Given an array of integers and a single integer k, create an array of length k from
 * elements of arr such that its difference is minimized.
 * @example arr = [10, 100, 300, 200, 1000, 20, 30], k = 3 -> 3
 * Choose k = 3 elements from arr: [10, 20, 30] where the maximum is 30 and the minimum is 10 and their difference is 20.
 * @solution Sort the arr, take the above as example: [10, 20, 30, 100, 200, 300, 1000].
 * Imagine there is a "window" of length of k moving along the array,
 * test the difference between the first element and last element in the window and find out the minimum one.
 * [10, 20, 30,] 100, 200, 300, 1000 -> 20
 * 10, [20, 30, 100,] 200, 300, 1000 -> 80
 * 10, 20, [30, 100, 200,] 300, 1000 -> 170
 * 10, 20, 30, [100, 200, 300,] 1000 -> 200
 * 10, 20, 30, 100, [200, 300, 1000] -> 800
 * So the minimum is 20.
 * @param {array} arr
 * @param {number} k
 * @returns The minimal difference.
 * @source https://www.hackerrank.com/challenges/angry-children
 */
function solution(arr, k) {
  const sorted = arr.sort((a, b) => (a > b ? 1 : -1));
  let minUnfairness = Infinity;
  for (let i = 0; i < sorted.length - k; i++) {
    const unfairness = sorted[i + k - 1] - sorted[i];
    if (unfairness < minUnfairness) {
      minUnfairness = unfairness;
    }
  }
  return minUnfairness;
}

module.exports = { solution };
