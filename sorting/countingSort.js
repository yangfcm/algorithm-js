/**
 * @name countingSort
 * @param {array} arr
 * @returns {array} the sorted array
 * @description Implement counting sort.
 */
function countingSort(arr) {
  const sorted = []; // Create sorted array.
  let max = arr[0];
  for (let el of arr) {
    // Find out the max element.
    if (el > max) max = el;
  }
  const count = new Array(max + 1);
  count.fill(0); // Create and initialize count array.

  for (let el of arr) {
    // Count each element
    count[el]++;
  }

  // Accumulate count array.
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Iterate given array and put each element in the right place
  for (let el of arr) {
    sorted[count[el] - 1] = el;
    count[el]--;
  }

  return sorted;
}

module.exports = countingSort;
