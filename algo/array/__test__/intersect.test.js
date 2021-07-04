const { solution } = require("../intersect");

describe("Test intersect.js", () => {
  test("solution function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("Function can compute intersection correctly", () => {
    expect(solution([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    expect(solution([1, 1, 1, -2, -2, 5, 8, 9], [1, 1, -2, 9, 10])).toEqual([
      1, 1, -2, 9,
    ]);
    expect(solution([2, 3, 4], [5, 6, 7])).toEqual([]);
  });
});
