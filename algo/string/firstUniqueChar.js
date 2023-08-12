/**
 * @name firstUniqueChar
 * @description Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @example "leetcode" -> 0 (letter l is the first character, whose index is 0)
 * "loveleetcode" -> 2 (letter v)
 * "aabb" -> -1 (No unique character)
 * @param {string} str
 * @returns {number} The index of first unique character in a string
 * @solution Use a character map(object) to record the number of each character.
 * Then iterate each character in the string, for the first character whose count is 1, return its index;
 * otherwise return -1 (no unique character)
 * @source https://leetcode.com/problems/first-unique-character-in-a-string/description/
 */
function solution(str) {
  const charMap = {};
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]] === 1) return i;
  }

  return -1;
}

module.exports = { solution };
