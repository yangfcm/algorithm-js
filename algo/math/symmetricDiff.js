/**
 * @name symmetricDiff
 * @description Given two or more arrays as arguments, return an array of their symmetric difference.
 * The returned array must contain only unique values (no duplicates)
 * @param {number[]}
 * @returns {number[]} The symmetric difference of given arrays.
 * @solution First find out an algorithm to return symmetric difference of two arrays, which is not difficult.
 * When more than two arrays are given, recursively call the function.
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
 */
function solution(...args) {
  const arr1 = args.shift();
  const arr2 = args.shift();

  const set1 = Array.from(new Set(arr1));
  const set2 = Array.from(new Set(arr2));

  const diff1 = set1.filter((el) => !set2.includes(el));
  const diff2 = set2.filter((el) => !set1.includes(el));
  const symDiff = [...diff1, ...diff2];
  if (args.length === 0) {
    return symDiff;
  }
  return solution(symDiff, ...args);
}

module.exports = { solution };
