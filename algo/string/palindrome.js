// VALIDATE A PALINDROME
// Return true if a given string is palindrome and false if not
// eg. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// SOLUTION 2:
// Make use of every() function
// But there is a performance problem in this solution: it did comparison twice.
function isPalindrome(str) {
  try {    
    return str.split('').every((char, index, arr) => {
      return char === arr[arr.length - index -1];
    });
  } catch(e) {
    return console.log(e.message);
  }
}

// SOLUTION 1: 
// Reverse a string and compare it to the original one
/*
function isPalindrome(str) {
  try {    
    return str.split('').reverse().join('') === str;
  } catch(e) {
    return console.log(e.message);
  }
}
*/

module.exports = isPalindrome;
