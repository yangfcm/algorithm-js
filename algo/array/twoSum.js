/**
 * @name twoSum
 * @description Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Assume each input would have excactly one solution and you cannot use the same element twice.
 * @example Given nums = [2, 7, 11, 15], target = 9
 * Because nums[0] + nums[1] = 2 + 7 = 9
 * return [0, 1]
 */

/**
 * @name solution1
 * @param {array} nums
 * @param {number} target The target number.
 * @returns {array} The array with two elements which sum up to target.
 * @description Loop through each element and see if there is another element that add up to target number.
 * The most direct and obvious one. Time complexity: O(n2)
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
 * @name solution2
 * @param {array} nums
 * @param {number} target The target number.
 * @returns {array} The array with two elements which sum up to target.
 * @description Create an object to record the number(key) and its index(value)
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
 * @name solution3
 * @param {array} nums
 * @param {number} target The target number.
 * @returns {array} The array with two elements which sum up to target.
 * @description Same idea as above solution, but use one loop
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
