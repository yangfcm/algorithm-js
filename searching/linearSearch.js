/**
 * @name linearSearch
 * @descripton Implement linear search
 * @param {array} arr
 * @param {any} val
 * @returns {number} the index of val in arr if val is found, otherwise return -1.
 * @description Linear search is the simplest and most direct search algorithm.
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
