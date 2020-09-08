const isUnique = require("../isUnique");

describe("Test isUnique", () => {
  test("isUnique function defined", () => {
    expect(isUnique).toBeDefined();
  });

  test("return true if the string has all unique characters", () => {
    expect(isUnique("abcdefg")).toBe(true);
    expect(isUnique("holiday")).toBe(true);
    expect(isUnique("澳大利亚")).toBe(true);
  });

  test("return false if the string has repetitive characters", () => {
    expect(isUnique("abcda")).toBe(false);
    expect(isUnique("mississippi")).toBe(false);
    expect(isUnique("密西西比")).toBe(false);
  });
});
