/**
 * @name removeVowels
 * @description Given a string, remove the vowels from the string and return the string without vowels
 */

/**
 * @name solution
 * @param {string} str
 * @returns {string} a string of the str without vowels
 */
function solution(str) {
  let strWithoutVowel = "";
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      strWithoutVowel += str[i];
    }
  }
  return strWithoutVowel;
}

module.exports = { solution };
