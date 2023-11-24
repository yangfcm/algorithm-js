/**
 * @name findLastIndex
 * @description Implement Array.prototype.findLastIndex function
 * @param {array} array
 * @param {function} predicate
 * @returns {number}
 */
function findLastIndex(array, predicate) {
  if (typeof predicate !== "function") {
    throw new TypeError("Callback must be a function.");
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) return i;
  }

  return -1;
}

module.exports = findLastIndex;
