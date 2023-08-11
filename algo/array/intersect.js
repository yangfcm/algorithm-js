/**
 * @name intersect
 * @description Given two arrays, compute their intersection.
 * Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order.
 * @example nums1 = [4,9,5], nums2 = [9,4,9,8,4], intersect(nums1, nums2) -> [4, 9]
 * nums1 = [1, 1, 1, -2, -2, 5, 8, 9], nums2 = [1, 1, -2, 9, 10], intersect(nums1, nums2) -> [1, 1, -2, 9]
 * nums1 = [2, 3, 4], nums2 = [5, 6, 7], intersect(nums1, nums2) -> []
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]} Intersection of nums1 and nums2
 * @solution Iterate one of the array. If the element in the array can be found in the other array,
 * It is exactly the element in intersection and meanwhile remove the element from the other array to avoid futher duplication
 * @source https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 */
function solution(nums1, nums2) {
  const interscetArr = [];
  for (let i = 0; i < nums1.length; i++) {
    let foundIndex = nums2.indexOf(nums1[i]);
    if (foundIndex >= 0) {
      interscetArr.push(nums2[foundIndex]);
      nums2.splice(foundIndex, 1);
    }
  }
  return interscetArr;
}

module.exports = { solution };
