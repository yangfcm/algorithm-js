/**
 * Implement bubble sorting, selection sorting and merge sorting
 */

/**
 * From i=0 to i<array length
 *   From j=0 to (array length - i)
 *     If the element at j is greater than its next element(j+1)
 *       Swap elements j and j+1
 */
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1);  j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

/**
 * From i=0 to i<array length
 *   Assume the element at 'i' is the least in the array, assign i to 'indexOfMin'
 *   For j from i+1 to the end of array
 *     See if there is an element with smaller value
 *       If there is, record its index
 *   If the index of the current element and the index of the 'smallest' element is not the same, swap them.
 * 
 */
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for(let j = i+1; j< arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if(indexOfMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  // Split the array into two half ones
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  
  // Recursively split the left arrays and right arrays until they both have one element left.
  // And then merge them into a sorted array.
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * The purpose of merge function is to take two sorted arrays(left, right)
 * into one sorted array
 * 
 * How...
 * Create an empty array to hold the sorted array called 'merged'
 * While there are still elements in both arrays
 *   If the first element of the left half is less than first in the right half
 *     'Shift' the element from the left into the 'merged' array
 *   else 
 *     'Shift' the element from the right into the 'merged' array
 * Take everything from the array that still has element(s) in it and put it in 'merged'
 */
function merge(left, right) {
  const merged = [];
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };