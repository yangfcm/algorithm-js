const { solution } = require("../maxMin");

describe("Test maxMin.js", () => {
  test("Find out the correct minimum unfairness", () => {
    expect(solution([10, 100, 300, 200, 1000, 20, 30], 3)).toBe(20);
    expect(solution([1, 2, 3, 4, 10, 20, 30, 40, 100, 200], 4)).toBe(3);
    expect(solution([2, 1, 2, 1, 2, 1], 2)).toBe(0);
  });
});
