/**
 * @name palindromePermutation
 * @description Given a string, check if it is a permutation of a palindrome.
 * Check is case insensitive.
 * @example "TactCoa" -> true because it has permutations: "tacocat", "atcocta", which are palindromes.
 * @param {string} str
 * @returns {string} true if str has permutations which are palindromes, otherwise false.
 * @solution Of course, it is impossible to generate all permutations of a string and test if it is a palindrome one by one.
 * To solve this, create a character map, with key is the characters of the string and value is the occurence of the character.
 * If the string is a permutation of a palindrome, it must have at most one character that has appeared in the string odd-number times.
 */
const solution = (str) => {
  const charMap = {};
  const lStr = str.toLowerCase();
  for (let char of lStr) {
    if (char === " ") continue;
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  let countOddTimes = 0;
  for (let char in charMap) {
    if (charMap[char] % 2 !== 0) {
      countOddTimes++;
    }
    if (countOddTimes > 1) {
      return false;
    }
  }
  return true;
};

module.exports = { solution };
