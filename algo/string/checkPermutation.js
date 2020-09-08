/**
 * Give two strings, check if one is a permutation of the other.
 */

/**
 * Solution one: create character maps for both str1 and str2 and compare them.
 * If each character has the same value(count of characters), they are permutation,
 * otherwise, they are not.
 */
const checkPermutationSln1 = (str1, str2) => {
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
 * Solution two: Sort str1 and str2. If two sorted strings are same, they are permutation.
 */
const { mergeSort } = require("../../sorting/sorting");
const checkPermutationSln2 = (str1, str2) => {
  const sortedStr1 = mergeSort(str1.split("")).join("");
  const sortedStr2 = mergeSort(str2.split("")).join("");
  return sortedStr1 === sortedStr2;
};
module.exports = { checkPermutationSln1, checkPermutationSln2 };
