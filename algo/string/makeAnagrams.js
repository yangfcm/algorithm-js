/**
 * @name makeAnagrams
 * @description Given two strings, str1 and str2, determine the minimum number of characters deletions
 * required to make str1 and str2 anagrams. The strings str1 and str2 consist of lowercase English letters [a-z].
 * @example makeAnagrams('abcd','dcefg') -> 5
 * delete a, b from 'abcd' and delete e,f,g from 'dcefg' to make 'cd' and 'dc', which are anagrams. That is 5 deletions.
 * @link https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 */

/**
 * @name solution
 * @param {string} str1
 * @param {string} str2
 * @returns {number} The minimum number of characters deletions to make str1 and str2 anagrams
 */
function solution(str1, str2) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const charMap1 = {};
  const charMap2 = {};
  let deletions = 0;
  for (let char of str1) {
    charMap1[char] = charMap1[char] ? charMap1[char] + 1 : 1;
  }
  for (let char of str2) {
    charMap2[char] = charMap2[char] ? charMap2[char] + 1 : 1;
  }
  for (let l of letters) {
    deletions += Math.abs((charMap1[l] || 0) - (charMap2[l] || 0));
  }
  return deletions;
}

module.exports = { solution };
