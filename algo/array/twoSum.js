/**
 * @name twoSum
 * @description Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Assume each input would have excactly one solution and you cannot use the same element twice.
 * @example Given nums = [2, 7, 11, 15], target = 9
 * Because nums[0] + nums[1] = 2 + 7 = 9
 * return [0, 1]
 * @param {array} nums An array of numbers
 * @param {number} target The target number.
 * @returns {array} The array of two indices of the two numbers in nums array which sum up to target.
 * @solution Loop through each element and see if there is another element that add up to target number.
 * Easy and straightforward. Time complexity: O(n^2)
 * @source https://leetcode.com/problems/two-sum/
 */
function solution1(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
 * @name twoSum
 * @param {array} nums
 * @param {number} target The target number.
 * @returns {array} The array of two indices of the two numbers in nums array which sum up to target.
 * @solution Create an object to record the number(key) and its index(value)
 * And check if each element's complement(target - nums[i]) exists
 */
function solution2(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] >= 0 && map[complement] != i) {
      return [i, map[complement]];
    }
  }
}

/**
 * @name twoSum
 * @param {array} nums
 * @param {number} target The target number.
 * @returns {array} The array of two indices of the two numbers in nums array which sum up to target.
 * @solution Same idea as above solution, but use one loop
 */
function solution3(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] >= 0) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}

module.exports = {
  solution1,
  solution2,
  solution3,
};
