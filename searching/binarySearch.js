/**
 * Implement binary search
 * Given a sorted array, search a given element val in the array
 */
const binarySearch = (arr, val, start, end) => {
  let _start = start || 0;
  let _end = end || arr.length;
  if (_end >= _start) {
    const mid = Math.floor((_start + _end) / 2);

    if (arr[mid] === val) {
      // Found the element
      return mid;
    } else if (val > arr[mid]) {
      // If the element to find is larger than the middle element,
      // Continue searching it in the upper half array.
      return binarySearch(arr, val, mid + 1, _end);
    } else {
      // The element to find is smaller than the middle element,
      // Continue searching it in the lower half array.
      return binarySearch(arr, val, _start, mid - 1);
    }
  }
  return -1; // Not found
};

module.exports = binarySearch;
