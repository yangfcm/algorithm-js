/**
 * @name groupBy
 * @description Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The order of grouped values is determined by the order they occur in collection.
 * The corresponding value of each key is an array of elements responsible for generating the key.
 * The iteratee is invoked with one argument: (value).
 * @example countBy([6.1, 4.2, 6.3], Math.floor);  ->  { '4': [4.2], '6': [6.1, 6.3] }
 * countBy(['one', 'two', 'three'], value => value.length); -> { '3': ['one', 'two'], '5': ['three'] }
 * @param {array} array
 * @param {function} iteratee
 * @returns {object}
 */
function groupBy(array, iteratee) {
  const result = {};
  for (const el of array) {
    const key = iteratee(el);
    if (!result.hasOwnProperty(key)) {
      result[key] = [el];
    } else {
      result[key].push(el);
    }
  }
  return result;
}

module.exports = groupBy;
