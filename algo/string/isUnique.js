/**
 * Give a string, determine if it has all unique characters.
 * Solution: Create a character map(object) to record the count each character of the string.
 * Then iterate the object to see if there is a character with the count > 1
 * Its solution is similar to maxchar.js
 */
const isUnique = (str) => {
  const charMap = {};
  for (let char of str) {
    // Create character map
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  for (let char in charMap) {
    // Iterate the character map
    if (charMap[char] > 1) {
      return false;
    }
  }
  return true;
};

module.exports = isUnique;
