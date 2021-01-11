/**
 * Write a function canConstruct(target, strs) that accepts a target string and an array of strings.
 * The function should return a boolean indicating whether or not the target can be
 * constructed by concatenating elements of the strs array.
 * You may use elements in strs as many times as needed.
 */
function solution1(target, strs) {
  if (target === "") {
    return true;
  }
  for (let s of strs) {
    if (target.indexOf(s) === 0) {
      // Check if target is started with substring s.
      const suffix = target.slice(s.length);
      if (solution1(suffix, strs) === true) {
        return true;
      }
    }
  }
  return false;
}

function solution2(target, strs, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let s of strs) {
    if (target.indexOf(s) === 0) {
      // Check if target is started with substring s.
      const suffix = target.slice(s.length);
      if (solution2(suffix, strs, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

function solution3(target, strs) {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let str of strs) {
        if (target.slice(i, i + str.length) === str) {
          table[i + str.length] = true;
        }
      }
    }
  }
  return table[target.length];
}

module.exports = { solution1, solution2, solution3 };
