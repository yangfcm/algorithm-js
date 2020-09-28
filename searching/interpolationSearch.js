/**
 * Implement interpolation search
 */
const interpolationSearch = (arr, val, low, high) => {
  let lo = low || 0;
  let hi = high || arr.length - 1;
  let pos;
  if (lo <= hi && val >= arr[lo] && val <= arr[hi]) {
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (val - arr[lo]));
    if (arr[pos] === val) {
      return pos;
    } else if (arr[pos] < val) {
      return interpolationSearch(arr, val, pos + 1, hi);
    } else {
      return interpolationSearch(arr, val, lo, pos - 1);
    }
  }
  return -1;
};

module.exports = interpolationSearch;
