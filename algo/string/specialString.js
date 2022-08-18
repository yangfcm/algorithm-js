/**
 * @name specialString
 * @description A string is considered to be special if either of two conditions is met:
 * 1. All the characters are the same, e.g. aaa.
 * 2. All the characters except the middle one are the same, e.g. aadaa.
 * Given a string s, determine how many special substrings can be formed from it.
 * @example s = mnonopoo -> It has 12 special substrings, they are: 'm', 'n', 'o', 'n', 'o', 'p', 'o', 'o', 'non', 'ono', 'opo', 'oo'
 * @param {string} str
 * @returns {number} The number of special substrings.
 * @solution Consider different scenarios:
 * 1. Each character is a special substring, so count them first. It's just the length of the string.
 * 2. Count all substrings that have exact same characters.
 * 3. Count all substrings that have one different letter in the middle and same rest letters on its both sides.
 * @source https://www.hackerrank.com/challenges/special-palindrome-again
 */
function solution(str) {
  let count = str.length; // 1. Each single character is a special substring, so our count starts from here.
  for (let i = 0; i < str.length; i++) {
    // 2. Count all substrings that have exact same characters.
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) count++;
      else break;
    }
  }
  for (let i = 1; i < str.length - 1; i++) {
    // 3. Count substrings that have one different letter in the middle and same rest letters on its both sides
    // The algorithm is for each character, except the first and last one, it should have the same letters on its left side and right side.
    const ch = str[i];
    let t = 1;
    let next;
    while (i - t >= 0 && i + t < str.length) {
      if (str[i + t] === ch) break; // Do not recount the substrings in step 2.
      if (str[i - t] === str[i + t]) {
        if (!next) {
          next = str[i + t];
          count++;
        } else if (next == str[i + t]) {
          count++;
        } else {
          break;
        }
      } else {
        break;
      }
      t++;
    }
  }
  return count;
}

module.exports = { solution };
