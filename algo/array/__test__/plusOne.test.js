const { solution } = require("../plusOne");

describe("Test plusOne.js", () => {
  test("plusOne function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("plusOne can return value correctly", () => {
    expect(solution([1, 2, 3])).toEqual([1, 2, 4]);
    expect(solution([1, 9, 9, 9])).toEqual([2, 0, 0, 0]);
    expect(solution([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
    expect(solution([2, 3, 0, 5, 4, 9, 3, 6, 1, 2, 2, 9])).toEqual([
      2, 3, 0, 5, 4, 9, 3, 6, 1, 2, 3, 0,
    ]);
  });
});
