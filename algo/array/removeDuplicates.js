/**
 * @name removeDuplicates
 * @description Given a sorted array nums, remove the duplicates *in-place* such that each element appear only once and return the new length.
 * @example removeDuplicates([0,0,1,1,1,2,2,3,3,4]) -> [0, 1, 2, 3, 4] and length = 5.
 * @param {number[]} nums
 * @return {number} The length of the array after duplicated numbers are removed.
 * @source https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */
function solution(nums) {
  let current = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === current) {
      nums.splice(i, 1);
    } else {
      current = nums[i];
    }
  }
  return nums.length;
}

module.exports = { solution };
