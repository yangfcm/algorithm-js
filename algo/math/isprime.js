/**
 * isPrime - Return true or false, indicating whether is a given number is a prime(质数)
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
