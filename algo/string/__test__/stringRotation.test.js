const stringRotation = require("../stringRotation");

describe("Test stringRotation", () => {
  test("stringRotation function is defined", () => {
    expect(stringRotation).toBeDefined();
  });

  test("return true if string1 is rotation of string2", () => {
    expect(stringRotation("waterbottle", "erbottlewat")).toBe(true);
    expect(stringRotation("abcdefg", "defgabc")).toBe(true);
  });

  test("return false if string1 is not rotation of string2", () => {
    expect(stringRotation("waterbottlee", "erbottlewat")).toBe(false);
    expect(stringRotation("waterbottle", "erbotllewat")).toBe(false);
    expect(stringRotation("waterbottle", "")).toBe(false);
  });
});
