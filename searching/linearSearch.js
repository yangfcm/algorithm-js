/**
 * Implement linear search:
 * Given an array, search a given element val in the array (Do not use array's built-in method)
 * Linear search is the simplest and most direct search algorithm.
 * It looks at element one by one and if the element is found, return its index. Otherwise, return -1.
 */
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

module.exports = linearSearch;
