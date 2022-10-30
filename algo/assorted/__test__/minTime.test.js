const { solution } = require("../minTime");

describe("Test minTime.js", () => {
  test("Should work out the minimum time to produce target items", () => {
    expect(solution([2, 3], 5)).toBe(6);
    expect(solution([1, 3, 4], 10)).toBe(7);
    expect(solution([4, 5, 6], 12)).toBe(20);
  });
});
