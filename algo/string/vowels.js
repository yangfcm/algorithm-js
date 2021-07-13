/**
 * @name Vowels
 * @description Write a function that returns the number of vowels used in a string
 * @example vowels('apple') -> 2
 * vowels('Hi, there!') -> 3
 * vowels('why?') -> 0
 */

/**
 * @name solution
 * @param {string} str
 * @param {number} how many vowels in the str
 * Iterate through all characters in the string and check it if it is a vowel.
 * If it is, increment the number by 1.
 */
function solution(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let numOfVowels = 0;
  for (let char of str) {
    if (vowels.indexOf(char) !== -1) {
      numOfVowels++;
    }
  }
  return numOfVowels;
}

module.exports = { solution };
