/**
 * @name flatten
 * @description Implement a function flatten that returns a newly-created array
 * with all sub-array elements concatenated recursively into a single level.
 * @example [1, 2, 3] -> [1, 2, 3]
 * [1, [2, 3]] -> [1, 2, 3]
 * [1, [2, [3, [4, [5]]]]] -> [1, 2, 3, 4, 5]
 */

/**
 * @param {Array} arr
 * @returns {Array}
 * @solution Simple iteration. Use an varaible to store the flattened array.
 * Loop through the array with a while loop and take out an item from the array once at a time.
 * If the item is not an arrary, just put it into the result array.
 * If the item is an array, we get all the items and put them back to the array. (using spread operator ...)
 */
function flatten1(arr) {
  const flatArr = [];
  const copyArr = arr.slice();

  while (copyArr.length > 0) {
    const item = copyArr.shift();
    if (Array.isArray(item)) {
      copyArr.unshift(...item);
    } else {
      flatArr.push(item);
    }
  }
  return flatArr;
}

module.exports({ flatten1 });
