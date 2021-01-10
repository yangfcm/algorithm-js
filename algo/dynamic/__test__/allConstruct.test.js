const { solution1, solution2 } = require("../allConstruct");

describe("Test allConstruct.js", () => {
  test("solution1 and solution2 are both defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test("solution1 can return all construct", () => {
    expect(solution1("purple", ["purp", "p", "ur", "le", "purpl"])).toEqual([
      ["purp", "le"],
      ["p", "ur", "p", "le"],
    ]);
    expect(
      solution1("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
    ).toEqual([
      ["ab", "cd", "ef"],
      ["ab", "c", "def"],
      ["abc", "def"],
      ["abcd", "ef"],
    ]);
    expect(
      solution1("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    ).toEqual([]);
  });

  test("solution2 can return all construct and can handle big string", () => {
    expect(solution2("purple", ["purp", "p", "ur", "le", "purpl"])).toEqual([
      ["purp", "le"],
      ["p", "ur", "p", "le"],
    ]);
    expect(
      solution2("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
    ).toEqual([
      ["ab", "cd", "ef"],
      ["ab", "c", "def"],
      ["abc", "def"],
      ["abcd", "ef"],
    ]);
    expect(
      solution2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    ).toEqual([]);
    expect(
      solution2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
      ])
    ).toEqual([]);
  });
});
