const maxProfit = require("../../leetcode/maxProfit");

describe("Test maxProfit.js", () => {
  test("maxProfit function is defined", () => {
    expect(maxProfit).toBeDefined();
  });

  test("Function can return max profit correctly", () => {
    expect(maxProfit([7, 1, 5, 3, 4, 6, 4])).toBe(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
