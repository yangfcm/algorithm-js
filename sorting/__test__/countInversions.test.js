const {
  countInversionsSolution1,
  countInversionsSolution2,
  countInversionsSolution3,
} = require("../countInversions");

describe("Test countInversions.js", () => {
  const arr1 = [1, 1, 1, 2, 2, 3, 4, 4, 5];
  const arr2 = [2, 1, 3, 1, 2];
  const arr3 = [5, 4, 4, 3, 2, 2, 1, 0];

  test("Solution1 should return correct count", () => {
    expect(countInversionsSolution1(arr1)).toBe(0);
    expect(countInversionsSolution1(arr2)).toBe(4);
    expect(countInversionsSolution1(arr3)).toBe(26);
  });

  test("Solution2 should return correct count", () => {
    expect(countInversionsSolution2(arr1)).toBe(0);
    expect(countInversionsSolution2(arr2)).toBe(4);
    expect(countInversionsSolution2(arr3)).toBe(26);
  });

  test("Solution3 should return correct count", () => {
    expect(countInversionsSolution3(arr1)).toBe(0);
    expect(countInversionsSolution3(arr2)).toBe(4);
    expect(countInversionsSolution3(arr3)).toBe(26);
  });
});
