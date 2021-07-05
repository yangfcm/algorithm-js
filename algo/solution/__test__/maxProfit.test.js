const { solution } = require("../maxProfit");

describe("Test maxProfit.js", () => {
  test("maxProfit function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("Function can return max profit correctly", () => {
    expect(solution([7, 1, 5, 3, 4, 6, 4])).toBe(7);
    expect(solution([1, 2, 3, 4, 5])).toBe(4);
    expect(solution([7, 6, 4, 3, 1])).toBe(0);
  });
});
