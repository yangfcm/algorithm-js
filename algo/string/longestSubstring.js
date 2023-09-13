/**
 * @name longestSubstring
 * @description Given a string s, find the length of the longest substring without repeating characters.
 * @example "abcabcbb" -> 3. The longest substring is "abc" or "bca"... , which both have the length of 3.
 * "bbbbbb" -> 1
 * "pwwkew" -> 3 ("wke")
 * @solution Use i and j to indicate the start and end index of the substring
 * The target is to make sure the substring s[i, j] doesn't have repeating characters.
 * i and j both start at 0. Move j forward by 1 and check if the next character exists in the substring.
 * If it does, move i forward until the substring doesn't include the character.
 * Every time index is moved, work out the current longest length of the substring.
 * For example: "abcba"
 * 1 "[a]bcba" Check if next character 'b' is in substring 'a' - No.(length = 1)
 * 2 "[ab]cba" Check if next character 'c' is in substring 'ab' - No.(length = 2)
 * 3 "[abc]ba" Check if next character 'b' is in substring 'abc' - Yes.(length = 3)
 * 3.1 Move the start index forward. "a[bc]ba" Check if the next character 'b' is in substring 'bc' - Yes.(length = 2)
 * 3.2 Move(again) the start index forward. "ab[c]ba" Check if the next character 'b' is in substring 'c' - No.(length = 1)
 * 4 "ab[cb]a" Check if the next character 'a' is in substring 'cb' - No.(length = 2)
 * 5 "ab[cba]" The end of string (length = 3)
 * So the returned value is 3.
 * Time complexity: O(n)
 * @source https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * @param {string} str
 * @returns {string} The length of the longest substring without repeating characters
 */
function solution(str) {
  const len = str.length;
  let start = 0;
  let end = 1;
  let maxLength = 0;
  while (end <= len) {
    let currentSubstring = str.substring(start, end);
    maxLength = Math.max(maxLength, currentSubstring.length);
    if (currentSubstring.includes(str[end])) {
      do {
        start++;
        currentSubstring = str.substring(start, end);
      } while (currentSubstring.includes(str[end]));
    }
    end++;
  }
  return maxLength;
}

module.exports = { solution };
