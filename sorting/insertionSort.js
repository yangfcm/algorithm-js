/**
 * @name insertionSort
 * @description Implement insertion sort.
 * @param {array} arr
 * @returns {undefined} The array is sorted in place
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

module.exports = insertionSort;
