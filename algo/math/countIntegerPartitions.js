/**
 * @name countIntegerPartitions
 * @description Given an integer, return how many partitions it has.
 * @example n = 1 -> 1
 * n = 2 -> 2
 * n = 3 -> 3
 * n = 4 -> 5
 * n = 5 -> 7
 * @solution It's a similar question to integerPartition.
 * The direct way is to generat all partitions of an integer and count it.
 * But there's better way to just get the count of partitions without generating all partitions.
 * @param {number} n
 * @returns {number}
 * @source https://www.freecodecamp.org/learn/rosetta-code/rosetta-code-challenges/9-billion-names-of-god-the-integer
 */
function solution(n) {
  const partitions = new Array(n + 1).fill(0);
  partitions[0] = 1;
  /** @TODO Understand the code. */
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      partitions[j] += partitions[j - i];
    }
  }
  return partitions[n];
}

module.exports = { solution };
