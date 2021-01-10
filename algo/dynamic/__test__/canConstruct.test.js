const { solution1, solution2 } = require("../canConstruct");

describe("Test canConstruct.js", () => {
  test("solution1 and solution2 are both defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test("solution1 can return correct value", () => {
    expect(
      solution1("abcdef", ["ab", "abc", "cd", "def", "abcd"])
    ).toBeTruthy();
    expect(
      solution1("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    ).toBeFalsy();
    expect(
      solution1("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
    ).toBeTruthy();
  });

  test("solution1 can return correct value and handle big string", () => {
    expect(
      solution2("abcdef", ["ab", "abc", "cd", "def", "abcd"])
    ).toBeTruthy();
    expect(
      solution2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    ).toBeFalsy();
    expect(
      solution2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
    ).toBeTruthy();
    expect(
      solution2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
      ])
    ).toBeFalsy();
  });
});
