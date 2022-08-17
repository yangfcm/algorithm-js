const { solution } = require("../validString");

describe("Test validString.js", () => {
  test("The strings are checked as valid(true).", () => {
    expect(solution("abcd")).toBe(true);
    expect(solution("abcdefghhgfedecba")).toBe(true);
    expect(solution("aaabbbccccddd")).toBe(true);
  });

  test("The strings are checked as invalid(false).", () => {
    expect(solution("aabbcd")).toBe(false);
    expect(solution("aabbccddeefghi")).toBe(false);
    expect(solution("aaabbbbcccdddd")).toBe(false);
  });
});
