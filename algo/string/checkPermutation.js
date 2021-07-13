/**
 * @name CheckPermutation
 * @description Given two strings, check if one is a permutation of the other.
 */

/**
 * @name solution1
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} true if str1 is a permutation of str2, otherwise false.
 * @description Create character maps for both str1 and str2 and compare them.
 * If each character has the same value(count of characters), they are permutation,
 * otherwise, they are not.
 */
const solution1 = (str1, str2) => {
  const str1CharMap = {};
  const str2CharMap = {};
  for (let char of str1) {
    str1CharMap[char] = str1CharMap[char] ? str1CharMap[char] + 1 : 1;
  }
  for (let char of str2) {
    str2CharMap[char] = str2CharMap[char] ? str2CharMap[char] + 1 : 1;
  }
  for (let char in str1CharMap) {
    if (str1CharMap[char] !== str2CharMap[char]) {
      return false;
    }
  }
  return true;
};

/**
 * @name solution1
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} true if str1 is a permutation of str2, otherwise false.
 * @description Sort str1 and str2. If two sorted strings are same, they are permutation.
 */
const { mergeSort } = require("../../sorting/sorting");
const solution2 = (str1, str2) => {
  const sortedStr1 = mergeSort(str1.split("")).join("");
  const sortedStr2 = mergeSort(str2.split("")).join("");
  return sortedStr1 === sortedStr2;
};
module.exports = { solution1, solution2 };
