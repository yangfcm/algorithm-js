// PYRAMID
// Write a function that accepts a position number
// The function should console log a pyramid shape with N levels
// using # character and space(s) on both left and right side.
// e.g. 
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/** Solution 1:
 * From 0 to n(iterate through rows)
 *   Create an empty string, 'level'
 *   From 0 to 2n-1 (columns)
 *   IF the column should have a '#'
 *     Add a '#' to 'level'
 *   ELSE
 *     Add a space to 'level'
 * console log 'level'
 */
function pyramid(n) {
  for(let i=1; i<=n; i++) { // i - the number of current level
    let level = '';
    for(let j=1; j<=(2*n-1); j++) { // For each level, it has 2*n-1 columns
      if(j>=(n-i+1) && j<=(n+i-1)) {  // The column where to put '#'
        level += '#';
      } else {
        level += ' '; // The column where to put space
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;