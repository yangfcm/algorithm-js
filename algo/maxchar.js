// MAX CHARACTER
// given a string, return the character that is most commonly used in the string.
// eg. maxChar('abccccccdd') = 'c'

// Solution:
// Create a character map(object) to record the count each character the string.
// eg. 'aabccc' => {'a': 2, 'b': 1, 'c': 3} 
// Then iterate the object and return the key with the largest value.
function maxChar(str) {
  const charMap = {};
  let max = 0;  // The count of the most-frequently-used character of a string
  let maxChar = ''; // The character that frequently appears in a given string

  for(let char of str) {  // Create the character map
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap) {  // Iterate the character map
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;