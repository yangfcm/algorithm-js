const { solution } = require("../longestSubstring");

describe("Test longestSubstring.js", () => {
  test("should return the length of longest substring.", () => {
    expect(solution("abcabcbb")).toBe(3);
    expect(solution("bbbbb")).toBe(1);
    expect(solution("pwwkew")).toBe(3);
    expect(solution("abb")).toBe(2);
    expect(solution("aab")).toBe(2);
    expect(solution("abcdeabcdefghabcdbe")).toBe(8);
  });
});
