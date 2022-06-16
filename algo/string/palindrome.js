/**
 * @name palindrome
 * @description Return true if a given string is palindrome and false if not.
 * A palindrome is a string whose reversed string is exactly the same as the original.
 * @example palindrome('racecar') === 'true', palindrome('hello') == false
 * @param {string} str
 * @returns {boolean} true if str is palindrome, otherwise false.
 * @solution As per the definition of palindrome, reverse a string and compare it to the original one.
 */
function solution1(str) {
  try {
    return str.split("").reverse().join("") === str;
  } catch (e) {
    return console.log(e.message);
  }
}

/**
 * @name palindrome
 * @param {string} str
 * @returns {boolean} true if str is palindrome, otherwise false.
 * @solution Make use of every() function.
 * But there is a performance problem in this solution: it did comparison twice.
 */
function solution2(str) {
  try {
    return str.split("").every((char, index, arr) => {
      return char === arr[arr.length - index - 1];
    });
  } catch (e) {
    return console.log(e.message);
  }
}

module.exports = { solution1, solution2 };
