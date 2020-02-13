const moveZeroes = require("../../leetcode/moveZeroes");

describe("Test moveZeroes.js", () => {
  test("moveZeroes function is defined", () => {
    expect(moveZeroes).toBeDefined();
  });

  test("Function can move zeroes as expected", () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(moveZeroes([-5, 0, 0, 3, 0, 0, 0, 0])).toEqual([
      -5,
      3,
      0,
      0,
      0,
      0,
      0,
      0
    ]);
  });
});
