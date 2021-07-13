/**
 * @name maxchar
 * @description given a string, return the character that is most commonly used in the string.
 * @example 'abccccccdd' -> c
 */

/**
 * @name solution
 * @param {string} str 
 * @returns {string} A character that is mostly used in str.
 * @description Create a character map(object) to record the count each character the string.
  e.g. 'aabccc' => {'a': 2, 'b': 1, 'c': 3} 
  Then iterate the object and return the key with the largest value.
 */
function solution(str) {
  const charMap = {};
  let max = 0; // The count of the most-frequently-used character of a string
  let maxChar = ""; // The character that frequently appears in a given string

  for (let char of str) {
    // Create the character map
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    // Iterate the character map
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = { solution };
