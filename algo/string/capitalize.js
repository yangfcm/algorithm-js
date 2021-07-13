/**
 * @name Capitalize
 * @description Given a string, capitalize the first letter of each word in the string then return the capitalized string.
 * @example capitalize('it is so good!') -> It Is So Good
 */

/**
 * @name solution1
 * @param {string} str
 * @returns {string} a string that capitalizes the first letter of each word in str
 * @description Split the string by spaces to an array(Each word is an element of the array).
 * Iterate the array and uppcase the first letter of each word.
 * Join the array to a string and return it.
 */
function solution1(str) {
  const capWordsArr = [];

  const wordsArr = str.split(" ");
  for (let word of wordsArr) {
    capWordsArr.push(word[0].toUpperCase() + word.slice(1));
  }

  return capWordsArr.join(" ");
}

/**
 * @name solution2
 * @param {string} str
 * @returns {string} a string that capitalizes the first letter of each word in str
 * @description Create an empty string
 * Iterate each character in the string
 * Capitalize the fist letter and add it to 'result'
 * If the character to the left is a space, capitalize it and add it to 'result'
 * Otherwise, add it to 'result' directly
 */
function solution2(str) {
  let capStr = "";
  capStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      capStr += str[i].toUpperCase();
    } else {
      capStr += str[i];
    }
  }
  return capStr;
}

module.exports = { solution1, solution2 };
