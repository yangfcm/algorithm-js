const { solution } = require("../oneAway");

describe("Test oneAway", () => {
  test("oneAway function should be defined", () => {
    expect(solution).toBeDefined();
  });

  test("return true if two strings are one edit away", () => {
    expect(solution("pale", "pales")).toBe(true);
    expect(solution("pale", "pal")).toBe(true);
    expect(solution("pale", "bale")).toBe(true);
    expect(solution("pales", "pals")).toBe(true);
    expect(solution("pales", "pales")).toBe(true);
  });

  test("return false if two strings are more than one edits away", () => {
    expect(solution("pale", "bake")).toBe(false);
    expect(solution("johnson", "john")).toBe(false);
    expect(solution("pale", "pad")).toBe(false);
  });
});
