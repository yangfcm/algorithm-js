/**
 * @name reverseString
 * @description Reverse a string
 * @example reverseString('hello') -> 'olleh'
 */

/**
 * @name solution1
 * @param {string} str
 * @returns {string} a reversed str
 * @description Split the string to an array, reverse the array,
 * join the reversed array back to a string.
 */
function solution1(str) {
  return str.split("").reverse().join("");
}

/**
 * @name solution1
 * @param {string} str
 * @returns {string} a reversed str
 * @description  Create an empty string called 'reversed'
 * For each character in the original string, take the character and add it to the START of 'reversed'
 */
function solution2(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

/**
 * @name solution1
 * @param {string} str
 * @returns {string} a reversed str
 * @description Make use of reduce() function
 */
function solution3(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

module.exports = { solution1, solution2, solution3 };
