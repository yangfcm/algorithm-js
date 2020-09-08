const oneAway = require("../oneAway");

describe("Test oneAway", () => {
  test("oneAway function should be defined", () => {
    expect(oneAway).toBeDefined();
  });

  test("return true if two strings are one edit away", () => {
    expect(oneAway("pale", "pales")).toBe(true);
    expect(oneAway("pale", "pal")).toBe(true);
    expect(oneAway("pale", "bale")).toBe(true);
    expect(oneAway("pales", "pals")).toBe(true);
    expect(oneAway("pales", "pales")).toBe(true);
  });

  test("return false if two strings are more than one edits away", () => {
    expect(oneAway("pale", "bake")).toBe(false);
    expect(oneAway("johnson", "john")).toBe(false);
    expect(oneAway("pale", "pad")).toBe(false);
  });
});
