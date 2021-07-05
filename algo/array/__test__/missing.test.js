const { solution1, solution2 } = require("../missing");

describe("Test algo/missing.js", () => {
  test("should function is defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test("empty array should return undefined", () => {
    expect(solution1([])).toBeUndefined();
    expect(solution2([])).toBeUndefined();
  });

  test("should have missing number", () => {
    expect(solution1([5, 1, 2, 4])).toBe(3);
    expect(solution2([5, 1, 2, 4])).toBe(3);
  });

  test("should not have missing number", () => {
    expect(solution1([3, 1, 4, 2])).toBeUndefined();
    expect(solution2([3, 1, 4, 2])).toBeUndefined();
  });
});
