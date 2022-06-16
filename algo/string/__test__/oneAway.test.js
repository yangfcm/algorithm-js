const { solution1, solution2 } = require("../oneAway");

describe("Test oneAway", () => {
  test("oneAway function should be defined", () => {
    expect(solution1).toBeDefined();
  });

  test("return true if two strings are one edit away", () => {
    expect(solution1("pale", "pales")).toBe(true);
    expect(solution1("pale", "pal")).toBe(true);
    expect(solution1("pale", "bale")).toBe(true);
    expect(solution1("pales", "pals")).toBe(true);
    expect(solution1("pales", "pales")).toBe(true);
    expect(solution2("pale", "pales")).toBe(true);
    expect(solution2("pale", "pal")).toBe(true);
    expect(solution2("pale", "bale")).toBe(true);
    expect(solution2("pales", "pals")).toBe(true);
    expect(solution2("pales", "pales")).toBe(true);
  });

  test("return false if two strings are more than one edits away", () => {
    expect(solution1("pale", "bake")).toBe(false);
    expect(solution1("johnson", "john")).toBe(false);
    expect(solution1("pale", "pad")).toBe(false);
    expect(solution2("pale", "bake")).toBe(false);
    expect(solution2("johnson", "john")).toBe(false);
    expect(solution2("pale", "pad")).toBe(false);
  });
});
