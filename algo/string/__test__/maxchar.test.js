const maxChar = require("../maxchar");

describe("Test max char.js", () => {
  test("maxChar function defined", () => {
    expect(maxChar).toBeDefined();
  });

  test("Finds the most frequently used char", () => {
    expect(maxChar("a")).toEqual("a");
    expect(maxChar("abcdefghijklmnaaaaa")).toEqual("a");
  });

  test("Works with numbers in the string", () => {
    expect(maxChar("ab1c1d1e1f1g1")).toEqual("1");
  });
});
