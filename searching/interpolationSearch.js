/**
 * @name interpolationSearch
 * @description Given a  uniformly distributed sorted array, implement interpolation search.
 * @param {array} arr
 * @param {any} val
 * @returns {number} the index of val in arr if val is found, otherwise return -1.
 * @description The Interpolation Search is an improvement over Binary Search for instances,
 * where the values in a sorted array are uniformly distributed.
 * Binary Search always goes to the middle element to check.
 * On the other hand, interpolation search may go to different locations
 * according to the value of the key being searched. For example,
 * if the value of the key is closer to the last element,
 * interpolation search is likely to start search toward the end side.
 * @reference https://www.geeksforgeeks.org/interpolation-search/
 */
const interpolationSearch = (arr, val, low = 0, high = arr.length - 1) => {
  let pos;
  if (low <= high && val >= arr[low] && val <= arr[high]) {
    pos =
      low +
      Math.floor(((high - low) / (arr[high] - arr[low])) * (val - arr[low]));
    if (arr[pos] === val) {
      return pos;
    } else if (arr[pos] < val) {
      return interpolationSearch(arr, val, pos + 1, high);
    } else {
      return interpolationSearch(arr, val, low, pos - 1);
    }
  }
  return -1;
};

module.exports = interpolationSearch;
