/**
 * @name isbalanced
 * @description Given a string and return true or false to indicate whether its curly braces are balanced
 * @example '}{' -> false
 * '{abc}{def}' -> true
 * '{abc {def}}' -> true
 * 'abc {def}}' -> false
 * @param {string} str
 * @returns {boolean} true if str has balanced curly braces, otherwise false.
 * @solution Use a variable to save the number of left curly braces. Iterate the string,
 * If you see a {, increment the variable and if you see a }, decrement the variable.
 * The variable should be 0 if the curly braces are balanced.
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
