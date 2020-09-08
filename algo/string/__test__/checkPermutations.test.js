const {
  checkPermutationSln1,
  checkPermutationSln2,
} = require("../checkPermutation");

describe("Test checkPermutation (two solutions)", () => {
  test("checkPermutation solution 1 is defined", () => {
    expect(checkPermutationSln1).toBeDefined();
  });

  test("checkPermutation solution 2 is defined", () => {
    expect(checkPermutationSln2).toBeDefined();
  });

  test("return true if two strings are permutation", () => {
    const str1 = "abcdefg";
    const str2 = "dgfebca";
    expect(checkPermutationSln1(str1, str2)).toBe(true);
    expect(checkPermutationSln2(str1, str2)).toBe(true);
  });

  test("return false if two strings are not permutation", () => {
    const str1 = "abcdefg";
    const str2 = "dgfebcac";
    expect(checkPermutationSln1(str1, str2)).toBe(false);
    expect(checkPermutationSln2(str1, str2)).toBe(false);
  });
});
