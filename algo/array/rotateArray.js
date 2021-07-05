/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Modify array in-place
 * e.g. Input: [1,2,3,4,5,6,7] and k = 3
				Output: [5,6,7,1,2,3,4]
 * @param {number[]} nums
 * @param {number} k
 * @return {void} 
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

/** Alternative solution - 1 */
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
