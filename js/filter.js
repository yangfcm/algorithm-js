/**
 *  filter - Implement array's built-in filter function
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
