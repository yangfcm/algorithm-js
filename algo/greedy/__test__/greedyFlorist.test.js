const { solution } = require("../greedyFlorist");

describe("Test greedyFlorist.js", () => {
  test("Work out the minimum cost to buy flowers", () => {
    expect(solution([2, 5, 6], 3)).toBe(13);
    expect(solution([2, 5, 6], 2)).toBe(15);
    expect(solution([1, 3, 5, 7, 9], 3)).toBe(29);
  });
});
