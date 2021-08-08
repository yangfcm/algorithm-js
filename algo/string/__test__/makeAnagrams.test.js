const { solution } = require("../makeAnagrams");

describe("Test makeAnagrams.js", () => {
  test("solution function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("should return correct deletions", () => {
    expect(solution("cde", "abc")).toBe(4);
    expect(solution("showman", "woman")).toBe(2);
    expect(
      solution("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
    ).toBe(30);
  });
});
