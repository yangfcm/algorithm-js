const plusOne = require("../plusOne");

describe("Test plusOne.js", () => {
  test("plusOne function is defined", () => {
    expect(plusOne).toBeDefined();
  });

  test("plusOne can return value correctly", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([1, 9, 9, 9])).toEqual([2, 0, 0, 0]);
    expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
    expect(plusOne([2, 3, 0, 5, 4, 9, 3, 6, 1, 2, 2, 9])).toEqual([
      2,
      3,
      0,
      5,
      4,
      9,
      3,
      6,
      1,
      2,
      3,
      0
    ]);
  });
});
