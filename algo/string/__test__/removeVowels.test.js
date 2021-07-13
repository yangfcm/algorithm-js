const { solution } = require("../removeVowels");

describe("Test removeVowels.js", () => {
  test("removeVowels function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("Test function, test string='I love apples and bananas'", () => {
    const str = "I love apples and bananas";
    expect(solution(str)).toBe(" lv ppls nd bnns");
  });
});
