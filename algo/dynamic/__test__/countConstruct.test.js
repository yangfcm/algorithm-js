const { solution1, solution2, solution3 } = require("../countConstruct");

describe("Test countConstruct.js", () => {
  test("solution1 and solution2 are both defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test("solution1 can count correct number", () => {
    expect(solution1("purple", ["purp", "p", "ur", "le", "purpl"])).toBe(2);
    expect(solution1("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(1);
    expect(
      solution1("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    ).toBe(0);
    expect(
      solution1("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
    ).toBe(4);
  });

  test("solution2 can count correct number and handle big string", () => {
    expect(solution2("purple", ["purp", "p", "ur", "le", "purpl"])).toBe(2);
    expect(solution2("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(1);
    expect(
      solution2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    ).toBe(0);
    expect(
      solution2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
    ).toBe(4);
    expect(
      solution2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
      ])
    ).toBe(0);
  });

  test("solution3 can count correct number and handle big string", () => {
    expect(solution3("purple", ["purp", "p", "ur", "le", "purpl"])).toBe(2);
    expect(solution3("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(1);
    expect(
      solution3("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    ).toBe(0);
    expect(
      solution3("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
    ).toBe(4);
    expect(
      solution3("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
      ])
    ).toBe(0);
  });
});
