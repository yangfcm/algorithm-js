/**
 * @name reverseInt
 * @description Reverse an integer number
 * @example reverseInt(521) = 125, reverseInt(-521) = -125, reverseInt(1200) = 21
 */

/**
 * @name solution
 * @param {number} int
 * @returns {number} a reversed integer number of int
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
