/**
 * @name vowels
 * @description Return the number of vowels in a string
 * @example vowels('apple') -> 2
 * vowels('Hi, there!') -> 3
 * vowels('why?') -> 0
 * @param {string} str
 * @returns {number} The number of vowels in the str
 * @solution Iterate through all characters in the string and check it if it is a vowel.
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
