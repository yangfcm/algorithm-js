/**
 * @name flatten
 * @description Implement a function flatten that returns a newly-created array
 * with all sub-array elements concatenated recursively into a single level.
 * @example [1, 2, 3] -> [1, 2, 3]
 * [1, [2, 3]] -> [1, 2, 3]
 * [1, [2, [3, [4, [5]]]]] -> [1, 2, 3, 4, 5]
 * @param {Array} arr
 * @returns {Array}
 */
function flatten(arr) {
  const flatArr = [];
  const copyArr = arr.slice();

  for (let el in arr) {
  }
}

module.exports({ flatten });
