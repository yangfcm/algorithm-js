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

// Solution 1:
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
/*
function steps(n) {
  for(let i=1; i<=n; i++) {
    let stair = '';
    for(let j=1; j<=n; j++) {
      if(j<=i) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}
*/

/**
 * Solution 2
 * Use recursive
 * If(row===n), then we have hit the end of the problem
 * If the 'stair' string has a length === n, then we are at the end of a row
 * If the length of the stair string is less than or equal to the current row number,
 * add '#', otherwise, add a space.
 */
function steps(n, row=0, stair='') {
  if(n === row) {
    return;
  }

  if(n === stair.length) {
    console.log(stair);
    steps(n, row+1); 
    return;
  }

  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;