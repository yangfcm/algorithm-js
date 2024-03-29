/**
 * @name indexOf
 * @description Implement array's built-in indexOf method
 * @param {array} array
 * @param {any} el
 * @returns {number} the index of el in array, or -1 if el doesn't exist in array
 */
function indexOf(array, el) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return i;
    }
  }
  return -1;
}

module.exports = indexOf;
