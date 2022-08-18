/**
 * @name validString
 * @description A string is considered to be valid if all characters of the string appear the same number of times.
 * It is also valid if you can remove just 1 character at one index in the string and
 * the remaining characters will occur the same number of times.
 * Given a string s, determine if it is valid as per the above rule.
 * @example s = abc -> valid. Characters all appear once in string.
 * s = abcc -> valid. Just remove 'c' and the remaining characters all appear once
 * s = abccc -> invalid.
 * @param {string} str The string to check
 * @returns {boolean} True if s is a valid string, false otherwise
 * @solution Iterate through the string and count each character. Use an object to store the counts for each character in the string.
 * Sort the count as an array and if the string is valid, the array should have one of characteristics below:
 * 1. All numbers are the same i.e. the last number equals to the first number.
 * 2. Only the first number is 1 and the rest numbers are the same.
 * 3. The first number is more than 1 and the last number is just bigger than the second last number by 1, and the second last number equals to the first number.
 * @source https://www.hackerrank.com/challenges/sherlock-and-valid-string/
 */
function solution(str) {
  const charCountMap = {};
  for (let char of str) {
    // Create an object where its key is the character in string, value is the count of character.
    charCountMap[char] = !!charCountMap[char] ? charCountMap[char] + 1 : 1;
  }
  const countValues = Object.values(charCountMap);
  countValues.sort(); // Sort the count for each character.
  const first = countValues[0];
  const last = countValues[countValues.length - 1];
  const secondLast = countValues[countValues.length - 2];

  if (first === last) return true; // All characters appear the same, like 'aabbcc'
  if (first === 1 && countValues[1] === last) return true; // All characters appear the same except for one character which just appears once, like 'abbbccc'
  if (first != 1 && last - secondLast === 1 && secondLast === first)
    return true;
  return false;
}

module.exports = { solution };
