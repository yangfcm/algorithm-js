const { solution } = require("../countIntegerPartitions");

describe("Test countIntegerPartitions.js", () => {
  test("Should return the number of partitions correctly", () => {
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(2);
    expect(solution(3)).toBe(3);
    expect(solution(4)).toBe(5);
    expect(solution(5)).toBe(7);
    expect(solution(6)).toBe(11);
    expect(solution(7)).toBe(15);
    expect(solution(18)).toBe(385);
    expect(solution(42)).toBe(53174);
    expect(solution(123)).toBe(2552338241);
  });
});
