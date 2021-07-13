const { solution } = require("../palindromePermutation");

describe("Test isPalindromePermutation", () => {
  test("isPalindromePermutation function defined", () => {
    expect(solution).toBeDefined();
  });

  test("return true if the string is a permutation of a palindrome", () => {
    expect(solution("Tact Coa")).toBe(true);
    expect(solution("aaaabbbbbbccdde")).toBe(true);
  });

  test("return false if it is not", () => {
    expect(solution("abcdabcdcd")).toBe(false);
  });
});
