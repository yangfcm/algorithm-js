const isPalindromePermutation = require("../palindromePermutation");

describe("Test isPalindromePermutation", () => {
  test("isPalindromePermutation function defined", () => {
    expect(isPalindromePermutation).toBeDefined();
  });

  test("return true if the string is a permutation of a palindrome", () => {
    expect(isPalindromePermutation("Tact Coa")).toBe(true);
    expect(isPalindromePermutation("aaaabbbbbbccdde")).toBe(true);
  });

  test("return false if it is not", () => {
    expect(isPalindromePermutation("abcdabcdcd")).toBe(false);
  });
});
