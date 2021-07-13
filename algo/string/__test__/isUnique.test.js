const { solution } = require("../isUnique");

describe("Test isUnique", () => {
  test("isUnique function defined", () => {
    expect(solution).toBeDefined();
  });

  test("return true if the string has all unique characters", () => {
    expect(solution("abcdefg")).toBe(true);
    expect(solution("holiday")).toBe(true);
    expect(solution("澳大利亚")).toBe(true);
  });

  test("return false if the string has repetitive characters", () => {
    expect(solution("abcda")).toBe(false);
    expect(solution("mississippi")).toBe(false);
    expect(solution("密西西比")).toBe(false);
  });
});
