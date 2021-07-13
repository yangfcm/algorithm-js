/**
 * @name stringCompression
 * @description Implement a function to perform basic string compression using the counts of repeated characters.
 * e.g. aabcccccaaa -> a2b1c5a3.
 * If the compressed string would not be smaller than the original string, should return original string.
 * Assume the string has only uppercase and lowercase letters a-z.
 */

/**
 * @name solution
 * @param {string} str
 * @returns {string} compressed version of str or just the original str.
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
