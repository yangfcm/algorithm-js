/**
 * @name oneAway
 * @description Assume there are three types of edits that can be performed on a string:
 * insert a character, remove a character or replace a character.
 * Given two strings, check if they are one edit(or zero edit) away to the other string.
 * @example pale, ple -> true(remove a character)
 * pale, pales -> true(add a character)
 * pale, bale -> true(replace a character)
 * pale, bake -> false
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} true if str1 is one edit away to str2, otherwise false
 * @solution This solution considers three scenarios in comparison of the length of str1 and str2.
 * If the diff of str1's length and str2's length is more than 1, return false,
 * If the diff of str1's length and str2's length is exactly 1, return true if the longer string equals short string by removing one character.
 * If the diff of str1's length and str2's length is the same, return true if they have zero or one different character and false if they have more tha 1 different characters.
 */
function solution1(str1, str2) {
  const charDiff = Math.abs(str1.length - str2.length);
  // If two strings length are different and their difference is bigger than one.
  // Return false early.
  if (charDiff > 1) {
    return false;
  }

  // If two strings length are the same...
  // Return false if there are more than one different characters.
  if (charDiff === 0) {
    let awayCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        awayCount++;
      }
      if (awayCount > 1) {
        return false;
      }
    }
    return true;
  }

  // If two strings length are different and their difference is only one.
  // Remove the one different character from the longer string, and if there is still different characters, return false.
  if (charDiff === 1) {
    let longStr, shortStr, newStr;
    if (str1.length > str2.length) {
      longStr = str1;
      shortStr = str2;
    } else {
      longStr = str2;
      shortStr = str1;
    }
    for (let i = 0; i < longStr.length; i++) {
      if (longStr[i] !== shortStr[i]) {
        const longStrArr = longStr.split("");
        longStrArr.splice(i, 1);
        newStr = longStrArr.join("");
        break;
      }
    }
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] !== shortStr[i]) {
        return false;
      }
    }
    return true;
  }
}

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} true if str1 is one edit away to str2, otherwise false.
 * @solution Obviously, solution1 is complicated and have low efficiency. This solution use charMaps for str1 and str2,
 * and compare the occurence for each character. If their difference in occurrence is 1 or 0, return true, otherwise, return false.
 */
function solution2(str1, str2) {
  const charMap1 = {};
  const charMap2 = {};
  for (let l of str1) {
    charMap1[l] = (charMap1[l] || 0) + 1;
  }
  for (let l of str2) {
    charMap2[l] = (charMap2[l] || 0) + 1;
  }
  let diff = 0;
  for (let char in charMap1) {
    diff += Math.abs((charMap1[char] || 0) - (charMap2[char] || 0));
    if (diff > 1) return false;
  }
  return true;
}

module.exports = { solution1, solution2 };
