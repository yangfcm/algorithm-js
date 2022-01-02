/**
 * @name plusOne
 * @description Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * @example [1,2,3] -> [1,2,4]
 * [1, 9, 9] -> [2, 0, 0]
 * [9, 9, 9] -> [1, 0, 0, 0]
 */

/**
 * @name solution
 * @param {number[]} digits
 * @return {number[]} An array of numbers that represent the number in parameter added by 1.
 */
function solution(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }
  return digits;
}

module.exports = { solution };
