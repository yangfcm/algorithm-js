// Capitalize
// Given a string, capitalize the first letter of each word
// in the string then return the capitalized string.
// e.g. capitalize('it is so good!') --> It Is So Good

// Solution 2:
// Create an empty string
// Iterate each character in the string
// Capitalize the fist letter and add it to 'result'
// If the character to the left is a space, capitalize it and add it to 'result'
// Otherwise, add it to 'result' directly
function capitalize(str) {
  let capStr = '';
  capStr = str[0].toUpperCase();
  for(let i=1; i<str.length; i++) {
    if(str[i-1] === ' ') {
      capStr += str[i].toUpperCase();
    } else {
      capStr += str[i];
    }
  }
  return capStr;
}


// Solution 1:
// Split the string by spaces to an array(Each word is an element of the array)
// Iterate the array and uppcase the first letter of each word.
// Join the array to a string and return it.
/*
function capitalize(str) {
  const capWordsArr = [];

  const wordsArr = str.split(' ');
  for(let word of wordsArr) {
    capWordsArr.push(word[0].toUpperCase() + word.slice(1));
  }

  return capWordsArr.join(' ');
}
*/

module.exports = capitalize;