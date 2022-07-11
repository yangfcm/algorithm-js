/**
 * @name countInversions
 * @description In an array, if elements at indices i and j (i < j) while arr[j] > arr[i],
 * we need to swap them to make it in a right order.
 * Given an array, calculate how many swaps/inversions required to sort the array.
 * @example arr = [2, 1, 3, 1, 2], countInversions(arr) -> 4
 * To make array [2, 1, 3, 1, 2] sorted, here is what to do:
 * [2, 1, 3, 1, 2], index: 0, 1, elements: arr[0] = 2, arr[1] = 1 -> 1 swap -> [1, 2, 3, 1, 2]
 * [1, 2, 3, 1, 2], index: 1, 2, elements: arr[1] = 2, arr[2] = 3 -> No swap -> [1, 2, 3, 1, 2]
 * [1, 2, 3, 1, 2], index: 2, 3, elements: arr[2] = 3, arr[3] = 1 -> 2 swaps -> [1, 1, 2, 3, 2]
 * [1, 1, 2, 3, 2], index: 3, 4, elements: arr[3] = 3, arr[4] = 2 -> 1 swap -> [1, 1, 2, 2, 3]
 * So the result is 1 + 2 + 1 = 4 swaps.
 * @source https://www.hackerrank.com/challenges/ctci-merge-sort
 * @param {array} arr
 * @returns {number} The number of inversions required to sort a given array
 * @solution This is a straightforward solution. Iterate through the array(from index = 1) and for each particular element,
 * look at its previous elements and if there's any one bigger than it, it means one swap required, i.e. adding count by 1.
 * Time complexity: O(n^2)
 */
function countInversionsSolution1(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) count++;
    }
  }
  return count;
}

/**
 * @param {array} arr
 * @returns {number} The number of inversions required to sort a given array
 * @solution Use the idea of merge sort. Time complexity: n*log(n). Most code is from mergeSort.js
 */
function countInversionsSolution2(arr) {
  let count = 0;

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
  }

  function merge(left, right) {
    const merged = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        merged.push(left.shift());
      } else {
        count += left.length;
        merged.push(right.shift());
      }
    }
    return [...merged, ...left, ...right];
  }

  mergeSort(arr);
  return count;
}

/**
 * @param {array} arr
 * @returns {number} The number of inversions required to sort a given array
 * @solution Improvement on solution2.
 */
function countInversionsSolution3(arr) {
  let n = arr.length;

  // Base Case
  if (n <= 1) {
    return 0;
  }

  // Recursive Case
  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let inversions =
    countInversionsSolution3(left) + countInversionsSolution3(right);

  let range = n - mid;
  let iLeft = 0;
  let iRight = 0;
  for (let i = 0; i < n; i++) {
    if (iLeft < mid && (iRight >= range || left[iLeft] <= right[iRight])) {
      arr[i] = left[iLeft++];
      inversions += iRight;
    } else if (iRight < range) {
      arr[i] = right[iRight++];
    }
  }

  return inversions;
}

module.exports = {
  countInversionsSolution1,
  countInversionsSolution2,
  countInversionsSolution3,
};
