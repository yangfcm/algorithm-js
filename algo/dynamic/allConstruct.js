/**
 * Write a function allConstruct(target, strs) that accepts a target string and an array of strings.
 * The function should return a 2D array containing all of the ways that the target can be
 * constructed by concatenating elements of the strs array.
 * You may use elements in strs as many times as needed.
 * e.g. allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl' ]) ->  [['purp','le'], ['p','ur','p','le']]
 */
function solution1(target, strs) {
  if (target === "") return [[]];
  const result = [];
  for (let s of strs) {
    if (target.indexOf(s) === 0) {
      const suffix = target.slice(s.length);
      const suffixWays = solution1(suffix, strs);
      const targetWays = suffixWays.map((way) => [s, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
}

function solution2(target, strs, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  const result = [];
  for (let s of strs) {
    if (target.indexOf(s) === 0) {
      const suffix = target.slice(s.length);
      const suffixWays = solution2(suffix, strs, memo);
      const targetWays = suffixWays.map((way) => [s, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

module.exports = { solution1, solution2 };
