const { solution1, solution2 } = require("../factorial");

describe("Test factorial.js", () => {
  test("solution1 can get factorial of n correctly", () => {
    expect(solution1(0)).toBe(1);
    expect(solution1(1)).toBe(1);
    expect(solution1(2)).toBe(2);
    expect(solution1(3)).toBe(6);
    expect(solution1(6)).toBe(720);
    expect(solution1(12)).toBe(479_001_600);
    expect(solution1(18)).toBe(6_402_373_705_728_000);
  });

  test("solution2 can get factorial of n correctly", () => {
    expect(solution2(0)).toBe(1);
    expect(solution2(1)).toBe(1);
    expect(solution2(2)).toBe(2);
    expect(solution2(3)).toBe(6);
    expect(solution2(6)).toBe(720);
    expect(solution2(12)).toBe(479_001_600);
    expect(solution2(18)).toBe(6_402_373_705_728_000);
  });
});
