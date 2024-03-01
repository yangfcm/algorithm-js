/**
 * @name integerPartition
 * @description Given an integer, work out all possible unique ways to represent n as sum of positive integers.
 * @example n = 1 -> 1
 * n = 2 -> 2, 1 + 1
 * n = 3 -> 3, 2 + 1, 1 + 1 + 1
 * n = 4 -> 4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1
 * n = 5 -> 5, 4 + 1, 3 + 2, 3 + 1 + 1, 2 + 2 + 1, 2 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1
 * @solution Use dynamic programming.
 * @param {number} n
 * @returns {array} An array of integers who can sum up to n.
 */
function solution(n) {
  const partitions = [];

  function partitionHelper(remaining, currentPartition) {
    if (remaining === 0) {
      partitions.push([...currentPartition]);
      return;
    }

    for (let i = 1; i <= remaining; i++) {
      if (
        i <= currentPartition[currentPartition.length - 1] ||
        currentPartition.length === 0
      ) {
        currentPartition.push(i);
        partitionHelper(remaining - i, currentPartition);
        currentPartition.pop();
      }
    }
  }

  partitionHelper(n, []);
  return partitions;
}

module.exports = { solution };
