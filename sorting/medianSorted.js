const { merge } = require("./mergeSort");

/**
 * @name medianSorted
 * @description Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * @example nums1 = [1, 3, 4] nums2 = [2, 6], -> median = 3 (merged array is [1, 2, 3, 4, 6])
 * @solution Use the idea of merge sort. It is actually an application of merge sort.
 * Time complexity: O(log(m + n))
 * @source https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

/**
 * @param {array} nums1
 * @param {array} nums2
 * @returns {number} The median of the merge of nums1 and nums2
 */
function solution(nums1, nums2) {
  const merged = merge(nums1, nums2);
  const length = merged.length;
  if (length % 2 === 0) {
    return (merged[length / 2] + merged[length / 2 - 1]) / 2;
  } else {
    return merged[(length - 1) / 2];
  }
}

module.exports(solution);
