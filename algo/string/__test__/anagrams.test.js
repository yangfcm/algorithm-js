const { solution1, solution2 } = require("../anagrams");

describe("Test anagrams.js", () => {
  test("solution function is defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test('"hello" is an anagram of "llohe"', () => {
    expect(solution1("hello", "llohe")).toBeTruthy();
    expect(solution2("hello", "llohe")).toBeTruthy();
  });

  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(solution1("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
    expect(solution2("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
  });

  test('"One One" is not an anagram of "Two two two"', () => {
    expect(solution1("One One", "Two two two")).toBeFalsy();
    expect(solution2("One One", "Two two two")).toBeFalsy();
  });

  test('"One one" is not an anagram of "One one c"', () => {
    expect(solution1("One one", "One one c")).toBeFalsy();
    expect(solution2("One one", "One one c")).toBeFalsy();
  });

  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      solution1("A tree, a life, a bench", "A tree, a fence, a yard")
    ).toBeFalsy();
    expect(
      solution2("A tree, a life, a bench", "A tree, a fence, a yard")
    ).toBeFalsy();
  });
});
