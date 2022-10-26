const { solution } = require("../makeCandies");

describe("Test makeCandies.js", () => {
  test("Solution should return the minimum days to product n candies", () => {
    expect(solution(3, 1, 2, 12)).toBe(3);
    expect(solution(5184889632, 5184889632, 20, 10000)).toBe(1);
    expect(solution(1, 1, 6, 45)).toBe(16);
    expect(solution(1, 2, 343, 270)).toBe(135);
    expect(solution(5, 1, 172, 364)).toBe(72);
  });
});
