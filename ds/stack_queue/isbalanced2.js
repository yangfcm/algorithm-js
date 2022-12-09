/**
 * @name isbalanced2
 * @description Given a string, return true or false to indicate whether the string has balanced brackets.
 * Brackets can be '[]', '{}', or '()'
 * @example s = "{[()]}" -> true
 * s = "{[(])} " -> false
 * s = "{{[[(())]]}}" -> true
 * s = "abcd" -> true  If there is no brackets, we should also consider it as balanced.
 * @param {string} str
 * @solution Use the concept of stack
 * @source https://www.hackerrank.com/challenges/balanced-brackets/problem
 */
function solution(str) {
  const bracketsArr = [];
  for (let ch of str) {
    console.log(ch);
    if (ch === "(" || ch === "{" || ch === "[") {
      bracketsArr.unshift(ch);
    }
    if (
      (ch === ")" && bracketsArr[0] !== "(") ||
      (ch === "}" && bracketsArr[0] !== "{") ||
      (ch === "]" && bracketsArr[0] !== "[")
    ) {
      return false;
    }
    if (
      (ch === ")" && bracketsArr[0] === "(") ||
      (ch === "}" && bracketsArr[0] === "{") ||
      (ch === "]" && bracketsArr[0] === "[")
    ) {
      bracketsArr.shift();
    }
  }

  return bracketsArr.length === 0;
}

module.exports = { solution };
