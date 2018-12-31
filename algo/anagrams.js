// Anagram
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of the other if it uses the same characters in the same quantity.
// Only conside characters, not spaces or punctuation.
// Conside capital letters to be the same as lower case
// e.g. anagrams('rail safety', 'fairy tales') --> true
// anagrams('RAIL! SAFETY!', 'fairy tales')  --> true
// angagrams('Hi, there', 'Bye, there') --> false

// Solution 2:
// Split string to array, sort it alphabetically and joint it back to a string
// Then compare the two strings
function anagrams(str1, str2) {
  const sortedStr1 = cleanStr(str1).split('').sort().join('');  
  const sortedStr2 = cleanStr(str2).split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

// Solution 1:
// Remove spaces, punctuations from strings(use regular expression) and covert strings to lower case
// Create two character maps(object) of both strings, just as what we did in maxchar.js
// Compare the length of two character maps and their values.
/*
function anagrams(str1, str2) {
  const charMap1 = strToCharMap(str1);
  const charMap2 = strToCharMap(str2);
  if(Object.keys(charMap1).length !== Object.keys(charMap2).length) { // Check the length of both char maps
    return false;
  }

  for(let char in charMap1) { // Compare the values of two char maps
    if(charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}
*/

// Convert a string to a character map
function strToCharMap(str) {
  const charMap = {};
  str = cleanStr(str);  
  // Remove spaces and punctuations and convert it to lowercase before making the char map.
  
  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// Remove spaces and punctuations of a string and convert it to lowercase
function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

module.exports = anagrams;