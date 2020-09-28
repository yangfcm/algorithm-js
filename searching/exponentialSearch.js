const binarySearch = require("./binarySearch");

/**
 * Implement exponential search
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
