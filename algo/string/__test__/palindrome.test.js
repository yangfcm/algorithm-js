const { solution1, solution2 } = require("../palindrome");

describe("Test palindrome.js", () => {
  test("isPalindrome function exists", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test('"cars" is not a palindrome', () => {
    expect(solution1("cars")).toBe(false);
    expect(solution2("cars")).toBe(false);
  });

  test('"racecar" is a palindrome', () => {
    expect(solution1("racecar")).toBe(true);
    expect(solution2("racecar")).toBe(true);
  });

  test('"  racecar" is not a palindrome', () => {
    expect(solution1("  racecar")).toBe(false);
    expect(solution2("  racecar")).toBe(false);
  });
});
