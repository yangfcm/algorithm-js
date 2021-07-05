/** Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * e.g. Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123
 * @param {number[]} digits
 * @return {number[]}
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
