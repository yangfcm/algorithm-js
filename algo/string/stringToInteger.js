/**
 * @name stringToInteger
 * @description Convert a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * The algorithm is as follows:
 * 1. Read in and ignore any leading whitespace.
 * 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
 * 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
 * 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 * 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
 * 6. Return the integer as the final result.
 * Note: Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 * @example "42" -> 42
 * "    -42" -> -42
 * "4193 with words" -> 4193
 * @solution 1. Remove the leading and trailing spaces.
 * 2. Look at the first character to determine the sign ('-' or '+')
 * 3. Iterate through the string until hitting the first non-number character.
 * 4. Check the result is within the range of a valid integer.
 * 5. Return the result.
 * @source https://leetcode.com/problems/string-to-integer-atoi/description/
 */

const MAX_INTEGER = Math.pow(2, 31) - 1;
const MIN_INTEGER = -1 * Math.pow(2, 31);

/**
 * @param {string} str
 * @returns The integer number represented by the string.
 */
function solution(str) {
  let sign = 1;
  let result = 0;
  let start = 0;
  str = str.trim();
  if (str[start] === "-") sign = -1;
  if (str[start] === "-" || str[start] === "+") start++;
  for (let i = start; i < str.length; i++) {
    const num = Number(str[i]);
    if (isNaN(num) || str[i] === " ") break;
    result = result * 10 + num;
    if (result > MAX_INTEGER) {
      return sign > 0 ? MAX_INTEGER : MIN_INTEGER;
    }
  }
  return sign * result;
}

module.exports = { solution, MAX_INTEGER, MIN_INTEGER };
