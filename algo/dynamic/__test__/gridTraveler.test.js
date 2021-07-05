const { solution1, solution2, solution3 } = require("../gridTraveler");

describe("Test gridTraveler.js", () => {
  test("solution1 function is defined", () => {
    expect(solution1).toBeDefined();
  });

  test("solution2 function is defined", () => {
    expect(solution2).toBeDefined();
  });
  test("solution3 function is defined", () => {
    expect(solution3).toBeDefined();
  });

  test("solution1 can return correct value", () => {
    expect(solution1(1, 1)).toBe(1);
    expect(solution1(2, 3)).toBe(3);
    expect(solution1(3, 2)).toBe(3);
    expect(solution1(3, 3)).toBe(6);
    expect(solution1(12, 13)).toBe(1352078);
  });

  test("solution2 can return correct value and can handle big number", () => {
    expect(solution2(1, 1)).toBe(1);
    expect(solution2(2, 3)).toBe(3);
    expect(solution2(3, 2)).toBe(3);
    expect(solution2(3, 3)).toBe(6);
    expect(solution2(12, 13)).toBe(1352078);
    expect(solution2(18, 18)).toBe(2333606220);
  });

  test("solution3 can return correct value and can handle big number", () => {
    expect(solution3(1, 1)).toBe(1);
    expect(solution3(2, 3)).toBe(3);
    expect(solution3(3, 2)).toBe(3);
    expect(solution3(3, 3)).toBe(6);
    expect(solution3(12, 13)).toBe(1352078);
    expect(solution3(18, 18)).toBe(2333606220);
  });
});
