/**
 * @name arrayMap
 * @description Implement Array.prototyp.map() method.
 * The map() method of Array instances creates a new array populated with the results
 * of calling a provided function on every element in the calling array.
 * @param {array} arr
 * @param {function} callback
 */
function arrayMap(arr, callback) {
  if (typeof callback !== "function") {
    throw new Error(callback + " is not a function.");
  }

  const length = arr.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in arr) {
      result[i] = callback(arr[i]);
    }
  }

  return result;
}

module.exports = arrayMap;
