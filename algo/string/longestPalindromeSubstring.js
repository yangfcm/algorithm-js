/**
 * @name longestPalindromeSubstring
 * @description Given a string s, return the longest palindromic substring in s
 * @example "babad" -> "bab" or "aba"
 * "cbbbbd" -> "bbbb"
 * @solution Iterate through the string. For a particular character, look at its left and right characters to check if they are equal.
 * If they are equal, continue looking at their left/right characters(spreading) until hits the unqual characters.
 * Be careful that the middle character(s) can be one or two.
 * Be careful of the edge case when the given string is a single-character string.
 * @source https://leetcode.com/problems/longest-palindromic-substring/
 */

/**
 * @param {string} str
 */
function solution(str) {
  if (str.length === 1) return str;

  let longestSubtring = "";

  for (let i = 0; i < str.length - 1; i++) {
    const isEven = str[i] === str[i + 1];
    let subString = str[i];

    let evenSubString = "";
    if (isEven) {
      evenSubString = str[i] + str[i + 1];
    }

    for (let offset = 1; offset < str.length; offset++) {
      const left = str[i - offset];
      const right = str[i + offset];
      if (left && right && left === right) {
        subString = left + subString + right;
      } else {
        break;
      }
    }

    if (isEven) {
      for (let offset = 1; offset < str.length; offset++) {
        const left = str[i - offset];
        const right = str[i + offset + 1];
        if (left && right && left === right) {
          evenSubString = left + evenSubString + right;
        } else {
          break;
        }
      }
    }

    if (subString.length > longestSubtring.length) {
      longestSubtring = subString;
    }
    if (evenSubString.length > longestSubtring.length) {
      longestSubtring = evenSubString;
    }
  }

  return longestSubtring;
}

module.exports = { solution };
