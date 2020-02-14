/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * In-place operation
 * e.g. Input: [0,1,0,3,12]
				Output: [1,3,12,0,0]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let trailingZero = true;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      trailingZero = false;
    }
    if (nums[i] === 0 && !trailingZero) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
  return nums;
}

module.exports = moveZeroes;
