/**
 * @name binarySearch
 * @param {array} arr
 * @param {any} val
 * @param {number} start
 * @param {number} end
 * @returns the index of val in arr if val is found, otherwise return -1.
 * @description Implement binary search
 * Given a *sorted* array, search a given element val in the array
 * As you search a value from a sorted array, you can start from the middle.
 * If the value to search is bigger than the middle element, you search for the first half;
 * If the value to search is smaller than the middle element, you search for the second half.
 * Recursivly run the algorithm above until you find it or not find.
 */
const binarySearch = (arr, val, start = 0, end = arr.length) => {
  if (end >= start) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      // Found the element
      return mid;
    } else if (val > arr[mid]) {
      // If the element to find is larger than the middle element,
      // Continue searching it in the upper half array.
      return binarySearch(arr, val, mid + 1, end);
    } else {
      // The element to find is smaller than the middle element,
      // Continue searching it in the lower half array.
      return binarySearch(arr, val, start, mid - 1);
    }
  }
  return -1; // Not found
};

module.exports = binarySearch;
