/**
 * @name findIndex
 * @description Implement Array.prototype.findIndex function
 * @param {array} array
 * @param {function} predicate
 * @returns {number}
 */
function findIndex(array, predicate) {
  if (!typeof predicate !== "function") {
    throw new TypeError("Callback must be a function.");
  }
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) return i;
  }

  return -1;
}

module.exports = findIndex;
