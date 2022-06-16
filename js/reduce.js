/**
 * @name reduce
 * @description Implement array's built-in reduce method.
 * @param {array} array
 * @param {function} reducerFn
 * @param {any} initialValue
 * @returns {any} The accumulator of the values from array that calculated by reducerFn.
 */
function reduce(array, reducerFn, initialValue) {
  let accumulator;
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (i === 0) {
      accumulator = initialValue || array[0];
    } else {
      accumulator = reducerFn(accumulator, currentValue);
    }
  }
  return accumulator;
}

module.exports = reduce;
