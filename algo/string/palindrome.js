/**
 * @name palindrome
 * @description Return true if a given string is palindrome and false if not
 * @example isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */

/**
 * @name solution1
 * @param {string} str
 * @returns {boolean} true if str is palindrome, otherwise false.
 * @description Reverse a string and compare it to the original one
 */
function solution1(str) {
  try {
    return str.split("").reverse().join("") === str;
  } catch (e) {
    return console.log(e.message);
  }
}

/**
 * @name solution2
 * @param {string} str
 * @returns {boolean} true if str is palindrome, otherwise false.
 * @description Make use of every() function.
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
