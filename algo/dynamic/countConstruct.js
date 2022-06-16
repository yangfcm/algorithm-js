/**
 * @name countConstruct
 * @description Given a target string and an array of strings, return the number of ways that
 * the target can be constructed by concatenating elements of the strs array.
 * You may use elements in strs as many times as needed.
 * @example target = 'purple', strs = ['purp', 'p', 'ur', 'le', 'purpl' ]) -> 2
 * There are two ways of constructing purple: 'purp' + 'le', 'p'+'ur'+'p'+'le', so 2 is our answer.
 * @param {string} target
 * @param {string[]} strs
 * @returns {number}
 * @solution Use recursive.
 */
function solution1(target, strs) {
  if (target === "") {
    return 1;
  }
  let totalCount = 0;
  for (let s of strs) {
    if (target.indexOf(s) === 0) {
      const countForRest = solution1(target.slice(s.length), strs);
      totalCount += countForRest;
    }
  }
  return totalCount;
}

/**
 * @param {string} target
 * @param {string[]} strs
 * @returns {number}
 * @solution Use recursive with memo as a cache to the previous calculations.
 */
function solution2(target, strs, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") {
    return 1;
  }
  let totalCount = 0;
  for (let s of strs) {
    if (target.indexOf(s) === 0) {
      const countForRest = solution2(target.slice(s.length), strs, memo);
      totalCount += countForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

/**
 * @param {string} target
 * @param {string[]} strs
 * @returns {number}
 * @solution Use a 2-D array to save the previous calculation.
 */
function solution3(target, strs) {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    for (let str of strs) {
      if (target.slice(i, i + str.length) === str) {
        table[i + str.length] += table[i];
      }
    }
  }
  return table[target.length];
}

module.exports = { solution1, solution2, solution3 };
