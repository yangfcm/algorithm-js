/**
 * @name fizzbuzz
 * @description  Given a number N, console logs the numbers from 1 to N.
 * But for multiples of 3 print 'fizz' instead of the number,
 * for multiples of 5, print 'buzz',
 * for numbers which are multiples of both 3 and 5, print 'fizzbuzz'
 * @example fizzbuzz(5) ->
 *   1
 *   2
 *   fizz
 *   4
 *   buzz
 * @param {number} n
 * @returns {undefined}
 */
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

module.exports = { solution };
