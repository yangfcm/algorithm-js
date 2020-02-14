const removeVowels = require("../removeVowels");

describe("Test removeVowels.js", () => {
  test("removeVowels function is defined", () => {
    expect(removeVowels).toBeDefined();
  });

  test("Test function, test string='I love apples and bananas'", () => {
    const str = "I love apples and bananas";
    expect(removeVowels(str)).toBe(" lv ppls nd bnns");
  });
});
