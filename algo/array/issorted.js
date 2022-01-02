/**
 * @name issorted
 * @description Given an array of numbers, return true or false, indicating whether the array is sorted.
 */

/**
 * @name solution
 * @param {number[]} array
 * @returns {boolean} true if array is sorted ascendingly, false otherwise.
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
