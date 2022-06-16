/**
 * @name allConstruct
 * @description Given a target string and an array of strings, return a 2D array containing all of the ways that
 * the target can be constructed by concatenating elements of the strs array.
 * You may use elements in strs as many times as needed.
 * @example target = 'purple' strs = ['purp', 'p', 'ur', 'le', 'purpl' ] ->  [['purp','le'], ['p','ur','p','le']
 * @param {string} target
 * @param {string[]} strs
 * @returns {string[][]}
 * @solution Use recursive.
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

/**
 * @param {string} target
 * @param {string[]} strs
 * @returns {string[][]}
 * @solution Use recursive with memo as a cache to the previous calculations..
 */
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

/**
 * @param {string} target
 * @param {string[]} strs
 * @returns {string[][]}
 * @solution Use a 2-D array to save the previous calculation.
 */
function solution3(target, strs) {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i <= target.length; i++) {
    for (let str of strs) {
      if (target.slice(i, i + str.length) === str) {
        const newCombination = table[i].map((sub) => [...sub, str]);
        table[i + str.length].push(...newCombination);
      }
    }
  }
  return table[target.length];
}

module.exports = { solution1, solution2, solution3 };
