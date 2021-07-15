const binarySearch = require("./binarySearch");

/**
 * @name Implement exponential search
 * @param {array} arr
 * @param {any} val
 * @returns {number} the index of val in arr if val is found, otherwise return -1.
 * @description Given an array, search a given element val in the array using exponential search
 * Exponential search involves two steps:
 * Find range where element is present
 * Do Binary Search in above found range.
 * How to find the range where element may be present?
 * The idea is to start with subarray size 1, compare its last element with x, then try size 2, then 4 and so on until last element of a subarray is not greater.
 * Once we find an index i (after repeated doubling of i), we know that the element must be present between i/2 and i
 */
const exponentialSearch = (arr, val) => {
  if (arr[0] === val) {
    return 0;
  }
  let i = 1;
  while (i < arr.length && arr[i] <= val) {
    i = i * 2;
  }
  return binarySearch(arr, val, i / 2, Math.min(i, arr.length));
};

module.exports = exponentialSearch;
