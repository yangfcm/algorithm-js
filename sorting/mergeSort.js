/**
 * @name mergeSort
 * @description Implement merge sort
 * @param {array} arr
 * @returns {array} A sorted array.
 */
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  // Split the array into two half ones
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  // Recursively split the left arrays and right arrays until they both have one element left.
  // And then merge them into a sorted array.
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @name merge
 * @description The helper function for mergeSort, here is how it works:
 * Create an empty array to hold the sorted array called 'merged'
 * While there are still elements in both arrays
 *   If the first element of the left half is less than first in the right half
 *     'Shift' the element from the left into the 'merged' array
 *   else
 *     'Shift' the element from the right into the 'merged' array
 * Take everything from the array that still has element(s) in it and put it in 'merged'
 * @param {array} left
 * @param {array} right
 * @returns {array} the sorted array of left and right array.
 */
function merge(left, right) {
  const merged = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}

module.exports = { mergeSort, merge };
