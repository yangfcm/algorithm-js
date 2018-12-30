// REVERSE A STRING
// Return a string in reverse
// eg. reverseString('hello') === 'olleh'

// Solution 3:
// Make use of reduce() function
function reverseString(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
}


/*
// Solution 2:
// Create an empty string called 'reversed'
// For each character in the original string, take the character and add it to the START of 'reversed'
function reverseString(str) {
  let reversed = '';
  for(let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
*/

/*
// Solution 1: 
// Split the string to an array
// reverse the array
// join the reversed array back to a string.
function reverseString(str) {
  return str.split('').reverse().join('');  
}
*/

module.exports = reverseString;