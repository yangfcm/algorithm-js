/**
 * @name countBy
 * @description Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The corresponding value of each key is the number of times the key was returned by iteratee.
 * The iteratee is invoked with one argument: (value).
 * @example countBy([6.1, 4.2, 6.3], Math.floor);  ->  { '4': 1, '6': 2 }
 * countBy(['one', 'two', 'three'], value => value.length); -> { '3': 2, '5': 1 }
 * @param {array} array
 * @param {function} iteratee
 * @returns {object}
 */
function countBy(array, iteratee) {
  const result = {};
  for (const el of array) {
    const key = iteratee(el);
    if (!result.hasOwnProperty(key)) {
      result[key] = 1;
    } else {
      result[key]++;
    }
  }
  return result;
}

module.exports = countBy;
