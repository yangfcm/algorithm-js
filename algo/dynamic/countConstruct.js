/**
 * Write a function countConstruct(target, strs) that accepts a target string and an array of strings.
 * The function should return the number of ways that the target can be
 * constructed by concatenating elements of the strs array.
 * You may use elements in strs as many times as needed.
 * e.g. countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl' ]) -> 2 i.e. 'purp' + 'le', 'p'+'ur'+'p'+'le'
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
