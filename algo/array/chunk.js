/**
 * @name chunk(array)
 * @description Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.
 * @example chunk([1, 2, 3, 4], 2) -> [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) -> [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) -> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) -> [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) -> [[ 1, 2, 3, 4, 5]]
 * @param {array} array
 * @param {number} size
 * @returns {array} an array of chunked arrays
 * @solution Create an empty array to hold chunks called 'chunked'
 * For each element in the original 'unchunked' array, retrieve the last element in 'chunked'
 * If last element does not exist or if its length is equal to chunk size, push a new chunk
 * into 'chunked' with the current element.
 * Otherwise, add the current element into the current chunk.
 */
function solution1(array, size) {
  const chunked = [];
  for (let element of array) {
    const lastSubArr = chunked[chunked.length - 1];
    if (!lastSubArr || lastSubArr.length === size) {
      chunked.push([element]); // Create a new subarray
    } else {
      lastSubArr.push(element); // Push the element to the current subarray
    }
  }
  return chunked;
}

/**
 * @name chunk(array)
 * @param {array} array
 * @param {number} size
 * @returns {array} an array of chunked arrays
 * @solution Create an empty array to hold chunks called 'chunked'
 * Create 'index' start at 0
 * While index is less than array.length
 * Push a slice of length 'size' from 'array' into 'chunked' using slice() built-in method of array
 * Add 'size' to 'index'
 */
function solution2(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunked;
}

module.exports = { solution1, solution2 };
