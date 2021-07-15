/**
 * @name filter
 * @description Implement array's built-in filter function
 */

/**
 * @name filter
 * @param {array} array
 * @param {function} filterCb
 * @returns {array} filteredArr where each element is from array and passed the filterCb.
 */
function filter(array, filterCb) {
  const filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (filterCb(element)) {
      filteredArr.push(element);
    }
  }

  return filteredArr;
}
module.exports = filter;
