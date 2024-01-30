const { solution } = require("../twoSum1");

describe("Test twoSum1.js", () => {
  test("should return the correct sum of indicies", () => {
    expect(solution([1, 4, 2, 3, 0, 5], 7)).toBe(11);
    expect(solution([1, 3, 2, 4], 4)).toBe(1);
    expect(solution([1, 1, 1], 2)).toBe(1);
    expect(solution([0, 0, 0, 0, 1, 1], 1)).toBe(10);
    expect(solution([], 2)).toBe(0);
  });
});
