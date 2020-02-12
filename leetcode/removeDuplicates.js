/**
 * Given a sorted array nums, remove the duplicates *in-place* such that each element appear only once and return the new length.
 * e.g. Given nums = [0,0,1,1,1,2,2,3,3,4], return length = 5
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let length = 1;
  let current = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    if (current != nums[i + 1]) {
      current = nums[i + 1];
      length++;
    }
  }
  return length;
}

module.exports = removeDuplicates;
