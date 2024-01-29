const { solution } = require("../noRepeatPermutations");

describe("Test noRepeatPermutations.js", () => {
  test("should return the correct number of no repeated permutations", () => {
    expect(solution([1, 1, 2])).toBe(2);
    expect(solution([1, 1, 2, 2])).toBe(8);
    expect(solution([1, 2, 3, 4, 5, 3, 1])).toBe(2640);
    expect(solution([1])).toBe(1);
    expect(solution([1, 1, 1, 2])).toBe(0);
    expect(solution([1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
    expect(solution([1, 1, 1, 2, 2])).toBe(12);
  });
});
