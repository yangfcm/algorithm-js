/**
 * @name combinations
 * @description Given an array of numbers and an integer, return all possible combinations.
 * Numbers can be reused.
 * @example arr = [1, 2, 3] length = 2 ->
 * [
 *  [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ], [ 3, 3 ]
 * ]
 * arr = [1, 2, 3] length = 3 ->
 * [
 *   [ 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 1, 3 ],
 *   [ 1, 2, 1 ], [ 1, 2, 2 ], [ 1, 2, 3 ],
 *   [ 1, 3, 1 ], [ 1, 3, 2 ], [ 1, 3, 3 ],
 *   [ 2, 1, 1 ], [ 2, 1, 2 ], [ 2, 1, 3 ],
 *   [ 2, 2, 1 ], [ 2, 2, 2 ], [ 2, 2, 3 ],
 *   [ 2, 3, 1 ], [ 2, 3, 2 ], [ 2, 3, 3 ],
 *   [ 3, 1, 1 ], [ 3, 1, 2 ], [ 3, 1, 3 ],
 *   [ 3, 2, 1 ], [ 3, 2, 2 ], [ 3, 2, 3 ],
 *   [ 3, 3, 1 ], [ 3, 3, 2 ], [ 3, 3, 3 ]
 * ]
 *
 * @param {array} arr
 * @param {number} length
 * @returns {array} All possible combinations of the numbers in array.
 */
function solution(arr, length) {
  const combinations = [];

  function combine(current, remainingLength) {
    if (remainingLength === 0) {
      combinations.push([...current]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      current.push(arr[i]);
      combine(current, remainingLength - 1);
      current.pop();
    }
  }

  combine([], length);
  return combinations;
}

module.exports = { solution };
