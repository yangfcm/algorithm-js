/**
 * @name countingSort
 * @param {array} arr
 * @returns {array} the sorted array
 * @description The logics of counting sort is as below and I try to explain it with an example.
 * Say we are going to sort an array: [4, 2, 2, 8, 3, 3, 1].
 * 1. Find out the maximum number, say *max* from the given array.
 * max = 8
 * 2. Create an empty array of length(max + 1 = 9) and populate it with all 0s. This array is for storing the count of the elements in the array.
 * Now, we get the count array: [0, 0, 0, 0, 0, 0, 0, 0, 0](9 0s)
 * 3. Iterate through the given array, and record the count of each number at their respective index in *count* array.
 * For example, number 3 appears 2 times, then the index of 3 in *count* array should be 2.
 * Now, the count array should be: [0, 1, 2, 2, 1, 0, 0, 0, 1]
 * 4. Iterate through the count array, and sum the current element with its previous element. (Do cumulative sum of each element)
 * After accumulation, the count array should be: [0, 1, 3, 5, 6, 6, 6, 6, 7]
 * 5. Iterate through the given array and place each element in the correct place:
 * Look at what we get now:
 * The array to sort: [4, 2, 2, 8, 3, 3, 1]
 * Counting array:    [0, 1, 3, 5, 6, 6, 6, 6, 7]
 * The sorted array:  [?, ?, ?, ?, ?, ?, ?]
 * Now for element 4 in original array, we get the element at the index = 4 in sorting array, which is 6.
 * So it means the 6th position(index = 5) of the sorted array should be 4. Now we know where to put the first element in sorted array: [?, ?, ?, ?, ?, 4, ?].
 * After placing each element, decrease its count by 1. Now the counting array after the first iteration is [0, 1, 3, 5, 5, 6, 6, 6, 7].
 * As per the above rule, we can work out the sorted array and counting array after each iteration.
 * After the first element - 4:
 *  SA: [?, ?, ?, ?, ?, 4, ?], CA: [0, 1, 3, 5, 5, 6, 6, 6, 7]
 * Now we move to the next element which is 2. As per the above rule, it's not difficult to figure out where to put 2 in sorted array.
 * After he second element - 2:
 *  SA: [?, ?, 2, ?, ?, 4, ?], CA: [0, 1, 2, 5, 5, 6, 6, 6, 7]
 * After the third element - 2:
 *  SA: [?, 2, 2, ?, ?, 4, ?], CA: [0, 1, 1, 5, 5, 6, 6, 6, 7]
 * After the 4th element - 8:
 *  SA: [?, 2, 2, ?, ?, 4, 8], CA: [0, 1, 1, 5, 5, 6, 6, 6, 6]
 * After the 5th element - 3:
 *  SA: [?, 2, 2, ?, 3, 4, 8], CA: [0, 1, 1, 4, 5, 6, 6, 6, 6]
 * After the 6th element - 3:
 *  SA: [?, 2, 2, 3, 3, 4, 8], CA: [0, 1, 1, 3, 6, 6, 6, 6, 7]
 * After the 7th element - 1:
 *  SA: [1, 2, 2, 3, 3, 4, 8], CA: [0, 1, 1, 4, 6, 6, 6, 6, 7]
 * It is particular used for sorting small(< 1000?) positive integer numbers.
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
