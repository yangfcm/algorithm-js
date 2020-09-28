/**
 * Implement jump search
 * Given a sorted array, serach a given element using jump search
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

// step = 3;
// val = 7;
// len - 1 = 9;
// 0 - 2;
// 3 - 5;
// 6 - 8;
// 9 - 11;

// 0, 1, 2,  3, 4, 5,  6, 7, 8,   9;
// 1, 2, 3 | 4, 5, 6 | 7, 8, 9 | 10;
