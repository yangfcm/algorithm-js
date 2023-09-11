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
 * Time complexity: O(n)
 * @source https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * @param {string} str
 * @returns {string} The length of the longest substring without repeating characters
 */
function solution(str) {}
