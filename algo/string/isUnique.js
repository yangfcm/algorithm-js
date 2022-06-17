/**
 * @name isUnique
 * @description Given a string, determine if it has all unique characters.
 * @param {string} str
 * @returns true if str has all unique characters, otherwise false.
 * @solution Create a character map(object) to record the count each character of the string.
 * Then iterate the object to see if there is a character with the count > 1
 */
const solution = (str) => {
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

module.exports = { solution };
