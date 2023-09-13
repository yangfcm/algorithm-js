const { solution } = require("../medianSorted");

describe("Test medianSorted.js", () => {
  test("should return correct median of two sorted arrays", () => {
    expect(solution([1, 3], [2])).toBe(2);
    expect(solution([1, 2, 3, 4, 5, 6], [7, 8, 9])).toBe(5);
    expect(solution([1, 2], [3, 4])).toBe(2.5);
    expect(solution([2, 4, 6, 8, 10], [5, 7, 11])).toBe(6.5);
  });
});
