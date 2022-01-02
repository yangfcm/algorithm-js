/**
 * @name missing
 * @description Take an unsorted array of unique numbers from 1 to n.
 * Return the missing number in the sequence or undefined if there is no missing number
 * There are either no missing numbers or exactly one missing number.
 * Do it in O(N) time.
 * @example [1, 4, 3, 5] => 2
 * [2, 3, 4, 1] => undefined
 * [] => undefined
 */

/**
 * @name solution1
 * @param {number[]} array
 * @returns number or undefined
 * @description Sum the array and keep track of the maximum number in it.
 * Now, with the maximum number, we can calculate what we should expect the sum to be.
 * If the expected sum equals to the sum of the array, it means there's no missing number.
 * Otherwise, the missing number is exactly the difference between expected sum and the sum of array.
 */
function solution1(array) {
  // sum the array and keep track of the maximum number in it
  let max = array[0];
  let sum = 0;
  array.forEach((number) => {
    sum += number;
    if (number > max) {
      max = number;
    }
  });

  // The maximum tells us how long the array should be.
  // Plug it into the formula to sum a series to see what we should expect the sum to be.
  let expectedSum = (max * (max + 1)) / 2;
  let difference = expectedSum - sum;

  if (difference > 0) {
    return difference;
  } else {
    return undefined;
  }
}

/**
 * @name solution2
 * @param {number[]} array
 * @returns number or undefined
 * @description Find the max number of the array
 * If max number equals array's length, it means no missing number so return undefined
 * Otherwise, increment i from 1 to max; if i doesn't exist in the array, i is exactly the missing number.
 */
function solution2(array) {
  let max = array[0];
  array.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });

  if (max === array.length) return undefined;
  for (let i = 1; i <= max; i++) {
    if (array.indexOf(i) === -1) {
      return i;
    }
  }
}

/**
 * Conclusion: solution 2 is more direct and obvious than solution 1
 * Solution 1 is cleverer than solution 2.
 */

module.exports = { solution1, solution2 };
