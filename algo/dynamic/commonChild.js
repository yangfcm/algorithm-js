/**
 * @name commonChild
 * @description A string is considered to be a child of another string if it can be formed by deleting 0 or more characters from the other string.
 * Given two strings of equal length, find out the longest string that can be constructed such that it is a child of both.
 * @example s1 = 'ABCD', s2 = 'ABDC'. These two strings have two children with maximum length 3.
 * They are 'ABC' and 'ABD'. They can be formed by eliminating either D or C from both strings.
 * @param {string} str1
 * @param {string} str2
 * @returns {number} The length of the longest string which is a common child of the two given strings.
 * @solution https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 * @source https://www.hackerrank.com/challenges/common-child
 */
function solution(s1, s2) {
  const table = new Array(s1.length + 1);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(s2.length + 1);
  }
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        table[i][j] = (table[i - 1][j - 1] || 0) + 1;
      } else {
        table[i][j] = Math.max(table[i - 1][j] || 0, table[i][j - 1] || 0);
      }
    }
  }
  return table[s1.length][s2.length];
}

module.exports = { solution };
