const { solution } = require("../stringRotation");

describe("Test stringRotation", () => {
  test("stringRotation function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("return true if string1 is rotation of string2", () => {
    expect(solution("waterbottle", "erbottlewat")).toBe(true);
    expect(solution("abcdefg", "defgabc")).toBe(true);
  });

  test("return false if string1 is not rotation of string2", () => {
    expect(solution("waterbottlee", "erbottlewat")).toBe(false);
    expect(solution("waterbottle", "erbotllewat")).toBe(false);
    expect(solution("waterbottle", "")).toBe(false);
  });
});
