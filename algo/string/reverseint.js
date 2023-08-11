/**
 * @name reverseInt
 * @description Reverse an integer number
 * @example reverseInt(521) -> 125, reverseInt(-521) -> -125, reverseInt(1200) -> 21
 * @param {number} int
 * @returns {number} A reversed integer number of int
 * @solution It looks easy, but there are a couple of edge cases to consider:
 * 1. You must keep the sign of the original number, like -521.
 * 2. Consider the number which has trailing zeros, like 1200.
 * @source https://leetcode.com/problems/reverse-integer/
 */
function solution(int) {
  try {
    if (!Number.isInteger(int)) {
      throw new Error("Integer required");
    }
    const reversed = int.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(int);
  } catch (e) {
    return console.log(e.message);
  }
}

module.exports = { solution };
