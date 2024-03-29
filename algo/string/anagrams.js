/**
 * @name anagram
 * @description Check to see if two provided strings are anagrams of each other.
 * One string is an anagram of the other if it uses the same characters in the same quantity.
 * Only conside characters, not spaces or punctuation.
 * Conside capital letters to be the same as lower case.
 * @example anagrams('rail safety', 'fairy tales') -> true
 * anagrams('RAIL! SAFETY!', 'fairy tales')  -> true
 * angagrams('Hi, there', 'Bye, there') -> false
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} True if str1 and str2 are anagrams of each other, otherwise false.
 * @solution Remove spaces, punctuations from strings(use regular expression) and covert strings to lower case.
 * Create two character maps(object) of both strings, where the key is the character of the string and value is the occurrence of the character in the string.
 * If str1 is the anagram of str2, the two character maps should have exact same key-value pairs.
 * @source https://leetcode.com/problems/valid-anagram/
 */
function solution1(str1, str2) {
  const charMap1 = strToCharMap(str1);
  const charMap2 = strToCharMap(str2);
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    // Check the length of both char maps
    return false;
  }
  for (let char in charMap1) {
    // Compare the values of two char maps
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }
  return true;
}

/**
 * @name anagram
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} True if str1 and str2 are anagrams of each other, otherwise false.
 * @solution Split string to array, sort it alphabetically and joint it back to a string, then compare the two strings.
 */
function solution2(str1, str2) {
  const sortedStr1 = cleanStr(str1).split("").sort().join("");
  const sortedStr2 = cleanStr(str2).split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

/**
 * @name strToCharMap
 * @description Convert a string to a character map.
 * Its key is the letter in the string and its value is the number of occurence of the letter in the string.
 * @example banana -> {'b': 1, 'a': 3, 'n': 2 }
 * @param {string} str
 * @returns {Object}
 */
function strToCharMap(str) {
  const charMap = {};
  str = cleanStr(str);
  // Remove spaces and punctuations and convert it to lowercase before making the char map.

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

/**
 * @name cleanStr
 * @description Remove spaces and punctuations of a string and convert it to lowercase
 * @param {string} str
 * @returns {string}
 */
function cleanStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

module.exports = { solution1, solution2 };
