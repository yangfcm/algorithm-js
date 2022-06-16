/**
 * @name bubbleSort
 * @description Implement bubble sort.
 * @param {array} arr
 * @returns {undefined} The array is sorted in place.
 * @solution The logics of bubble sorting is as below:
 * From i=0 to i<array length
 *   From j=0 to (array length - i)
 *     If the element at j is greater than its next element(j+1)
 *       Swap elements j and j+1
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

module.exports = bubbleSort;
