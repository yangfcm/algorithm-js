const { solution1, solution2 } = require("../checkPermutation");

describe("Test checkPermutation (two solutions)", () => {
  test("checkPermutation solution 1 is defined", () => {
    expect(solution1).toBeDefined();
  });

  test("checkPermutation solution 2 is defined", () => {
    expect(solution2).toBeDefined();
  });

  test("return true if two strings are permutation", () => {
    const str1 = "abcdefg";
    const str2 = "dgfebca";
    expect(solution1(str1, str2)).toBe(true);
    expect(solution2(str1, str2)).toBe(true);
  });

  test("return false if two strings are not permutation", () => {
    const str1 = "abcdefg";
    const str2 = "dgfebcac";
    expect(solution1(str1, str2)).toBe(false);
    expect(solution2(str1, str2)).toBe(false);
  });
});
