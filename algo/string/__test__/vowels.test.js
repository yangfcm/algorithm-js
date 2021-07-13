const { solution } = require("../vowels");

describe("Test vowels.js", () => {
  test("solution function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("returns the number of vowels used", () => {
    expect(solution("aeiou")).toEqual(5);
    expect(solution("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
    expect(solution("bcdfghjkl")).toEqual(0);
    expect(solution("I like to eat cheese.")).toEqual(9);
  });
});
