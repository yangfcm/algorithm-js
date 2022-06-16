/**
 * @name issorted
 * @description Given an array of numbers, return true or false, indicating whether the array is sorted.
 * @param {number[]} array
 * @returns {boolean} True if array is sorted ascendingly, false otherwise.
 * @solution Iterate an array, if the next element is smaller than the current element, return false early.
 * When the iteration finishes, it means the array is sorted so return true.
 */
function solution(array) {
  if (array.length <= 1) return true;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];
    if (next && current > next) {
      return false;
    }
  }
  return true;
}

module.exports = { solution };
