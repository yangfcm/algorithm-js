// STEPS
// Write a function that accepts a positive number n
// The function should console log a step shape with n levels using # character.
// Make sure the step has spaces on the right side
// e.g.
// steps(2) -->
// '# '
// '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution:
/**
 * From 0 to n
 *   Create an empty string, 'stair'
 *   From 0 to n
 *     IF the current column is equal to or less than the current row
 *       Add a '#' to 'stair'
 *     ELSE
 *       Add a space to 'stair'
 *   console log 'stair'
 */
function solution(n) {
  for (let i = 1; i <= n; i++) {
    let stair = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

module.exports = { solution };
