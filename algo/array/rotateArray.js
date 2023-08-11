/**
 * @name rotateArray
 * @description Given an array, rotate the array to the right by k steps, where k is non-negative.
 * @example  [1, 2, 3, 4, 5, 6, 7], k = 3 -> [5, 6, 7, 1, 2, 3, 4]
 * The 1st rotate: [7, 1, 2, 3, 4, 5, 6](The last number 7 is moved to the top of the array)
 * The 2nd rotate: [6, 7, 1, 2, 3, 4, 5](Then, the last number 6 is moved to the top of the array)
 * The 3rd rotate: [5, 6, 7, 1, 2, 3, 4].
 * @param {number[]} nums An array of numbers
 * @param {number} k The steps to rotate
 * @return {undefined} The array is rotated to the right by k steps
 * @source https://leetcode.com/problems/rotate-array/
 */
function solution1(nums, k) {
  if (k < 0) {
    throw Exception("Step must be a positive integer");
  }
  for (let i = 1; i <= k; i++) {
    // It is equivalent to move the last element to the head of array
    const popedNum = nums.pop();
    nums.unshift(popedNum);
  }
}

/**
 * @param {number[]} nums An array of numbers
 * @param {number} k The steps to rotate
 * @return {undefined} The array is rotated to the right by k steps
 */
function solution2(nums, k) {
  if (k < 0) {
    throw Exception("Step must be a positive integer");
  }
  for (let i = 1; i <= k; i++) {
    let lastNum = nums[nums.length - 1]; // Copy the last element of array
    for (let index = nums.length - 2; index >= 0; index--) {
      // Each element in array moves to right by one step
      nums[index + 1] = nums[index];
    }
    nums[0] = lastNum;
  }
}

module.exports = { solution1, solution2 };
