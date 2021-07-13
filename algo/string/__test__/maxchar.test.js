const { solution } = require("../maxchar");

describe("Test max char.js", () => {
  test("maxChar function defined", () => {
    expect(solution).toBeDefined();
  });

  test("Finds the most frequently used char", () => {
    expect(solution("a")).toEqual("a");
    expect(solution("abcdefghijklmnaaaaa")).toEqual("a");
  });

  test("Works with numbers in the string", () => {
    expect(solution("ab1c1d1e1f1g1")).toEqual("1");
  });
});
