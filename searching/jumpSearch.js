/**
 * @name jumpSearch
 * @param {array} arr
 * @param {any} val
 * @returns {number} the index of val in arr if val is found, otherwise return -1.
 * @description Implement jump search
 * Given a sorted array, serach a given element using jump search.
 * The basic idea is to check fewer elements (than linear search) by
 * jumping ahead by fixed steps or skipping some elements in place of searching all elements.
 * The optimal step size is the square root of array's length.
 * Let’s consider the following array: (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610). Length of the array is 16. Jump search will find the value of 55 with the following steps assuming that the block size to be jumped is 4.
 * STEP 1: Jump from index 0 to index 4;
 * STEP 2: Jump from index 4 to index 8;
 * STEP 3: Jump from index 8 to index 12;
 * STEP 4: Since the element at index 12 is greater than 55 we will jump back a step to come to index 8.
 * STEP 5: Perform linear search from index 8 to get the element 55.
 */
const jumpSearch = (arr, val) => {
  const len = arr.length; // total number of elements in arr.
  const lastIndex = len - 1; // The index of the element element
  const step = Math.floor(Math.sqrt(len)); // The number of steps to jump
  let startIndex = 0; // Start index of the searching block
  let endIndex = startIndex + step - 1; // End index of the searching block
  while (arr[Math.min(endIndex, lastIndex)] < val) {
    startIndex += step;
    endIndex += step;
    if (startIndex > lastIndex) {
      return -1;
    }
  }
  for (let i = startIndex; i <= Math.min(endIndex, lastIndex); i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

module.exports = jumpSearch;
