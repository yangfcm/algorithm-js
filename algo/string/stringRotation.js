/**
 * @name stringRotation
 * @description Assume you have a function isSubstring which checks if one word is a substring of another.
 * Given two strings, check if s2 is a rotation of s1 using ONLY one call to isSubstring.
 * If a string is a rotation of another, it's a rotation at a particular point.
 * @example "waterbottle" and "erbottlewat" -> true
 * A rotation of "waterbottle" at character 3 means cutting this string at character 3 and
 * putting the right half('erbottle') before the left half('wat') so the result is "erbottlewat"
 * @param {string} str1
 * @param {stirng} str2
 * @returns {boolean}
 * @solution The solution is not straightfoward and quite clever. It checks if str2 is the concatenation of two str1-s.
 */
const solution = (str1, str2) => {
  if (str1.length !== str2.length || str1.length === 0 || str2.length === 0) {
    // If str1 and str2 have different length, or either of them is empty return false early.
    return false;
  }
  return isSubString(str1 + str1, str2);
};

/**
 * @name isSubString
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} True if str2 is a substring of str1, otherwise false.
 */
const isSubString = (str1, str2) => {
  if (str2.length > str1.length) {
    return false;
  }

  for (let i = 0; i <= str1.length - str2.length; i++) {
    const substr = str1.substr(i, str2.length);
    if (substr === str2) {
      return true;
    }
  }
  return false;
};

module.exports = { solution };
