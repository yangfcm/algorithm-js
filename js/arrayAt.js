/**
 * @name arrayAt
 * @description The at() method of Array instances takes an integer value and returns the item at that index,
 * allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 * @example arrayAt([5, 12, 8, 130, 44], 2) -> 8
 * arrayAt([5, 12, 8, 130, 44], -2) -> 130
 * arrayAt([5, 12, 8, 130, 44], 5) -> undefined
 * @param {array} arr
 * @param {number} index
 * @returns {any}
 */
function arrayAt(arr, index) {
  if (index < -arr.length || index >= arr.length) return undefined;
  if (index >= 0) return arr[index];
  if (index < 0) return arr[arr.length + index];
}

module.exports = arrayAt;
