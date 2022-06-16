/**
 * @name stringCompression
 * @description Implement a function to perform basic string compression using the counts of repeated characters.
 * If the compressed string would not be smaller than the original string, should return original string.
 * Assume the string has only uppercase and lowercase letters a-z.
 * @example aabcccccaaa -> a2b1c5a3.
 * aabbccdefg -> aabbccdefg
 * @param {string} str
 * @returns {string} Compressed version of str or just the original str.
 * @solution Iterate through the string and calculate the compressed string.
 * If the length of compressed string is smaller than original string, return the compressed string. Otherwise, return original string.
 */
const solution = (str) => {
  let compressedStr = "";
  let repeatChar = str[0];
  let repeatCharCount = 1;
  for (let i = 1; i <= str.length; i++) {
    const char = str[i];
    if (char === repeatChar) {
      repeatCharCount++;
    } else {
      compressedStr += repeatChar + repeatCharCount;
      repeatChar = char;
      repeatCharCount = 1;
    }
  }
  return compressedStr.length < str.length ? compressedStr : str;
};

module.exports = { solution };
