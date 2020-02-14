/**
 * issorted - Return true or false, indicating whether the given array of numbers is sorted.
 */
function issorted(array) {
  if (array.length <= 1) return true;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];
    if (next && current > next) {
      return false;
    }
  }
  return true;
}

module.exports = issorted;
