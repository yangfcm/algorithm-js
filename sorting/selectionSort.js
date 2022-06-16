/**
 * @name selectionSort
 * @description Implement selection sort
 * @param {array} arr
 * @returns {undefined} The array is sorted in place.
 * @solution The logics of selection sorting is as below:
 * From i=0 to i<array length
 *   Assume the element at 'i' is the least in the array, assign i to 'indexOfMin'
 *   For j from i+1 to the end of array
 *     See if there is an element with smaller value
 *       If there is, record its index
 *   If the index of the current element and the index of the 'smallest' element is not the same, swap them.
 *
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
}

module.exports = selectionSort;
