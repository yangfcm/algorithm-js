/**
 * @name isBalanced
 * @description Take a string and return true or false to indicate whether its curly braces are balanced
 * @example '}{' -> false
 * '{abc}{def}' -> true
 * '{abc {def}}' -> true
 * 'abc {def}}' -> false
 */

/**
 * @name solution
 * @param {string} str
 * @returns {boolean} true if str has balanced curly braces, otherwise false.
 */
function solution(str) {
  let count = 0;
  for (let letter of str) {
    if (letter === "{") count++;
    if (letter === "}") {
      count--;

      // If a closing bracket doesn't have a matching opening bracket, return false early.
      if (count < 0) return false;
    }
  }
  return count === 0;
}

module.exports = { solution };
