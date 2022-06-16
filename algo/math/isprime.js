/**
 * @name isprime
 * @description Check if a given number is a prime number or not.
 * @param {number} number
 * @returns {boolean} True if the number is a prime number otherwise false.
 */
function solution(number) {
  if (number < 2) {
    return false;
  }
  const maxDivisor = Math.ceil(Math.sqrt(number));
  for (let divisor = 2; divisor <= maxDivisor; divisor++) {
    if (number % divisor === 0 && number !== divisor) {
      return false;
    }
  }
  return true;
}

module.exports = { solution };
