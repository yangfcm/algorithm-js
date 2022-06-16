/**
 * @name moveZeroes
 * @description Given an array of numbers, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * In-place operation
 * @example nums = [0,1,0,3,12], moveZeroes(nums) -> [1,3,12,0,0]
 * @param {number[]} nums An array of numbers
 * @return {undefined} Not return anything, modify nums in-place instead.
 * @solution The solution is straightforward, just iterating the array and if the element is 0, move it to the end of array.
 */
function solution(nums) {
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
}

module.exports = { solution };
