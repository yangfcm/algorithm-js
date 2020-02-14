/**
 * Given a string, remove the vowels from the string
 * and return the string without vowels
 */
function removeVowels(str) {
  let strWithoutVowel = "";
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      strWithoutVowel += str[i];
    }
  }
  return strWithoutVowel;
}

module.exports = removeVowels;
