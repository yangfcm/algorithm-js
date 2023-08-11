const { solution } = require("../reverseint");

describe("Test reverseint.js", () => {
  test("solution function exists", () => {
    expect(solution).toBeDefined();
  });

  test("solution handles 0 as an input", () => {
    expect(solution(0)).toBe(0);
  });

  test("Reverse a positive number successfully", () => {
    expect(solution(5)).toBe(5);
    expect(solution(500)).toBe(5);
    expect(solution(2834)).toBe(4382);
  });

  test("Reverse a negative number successfully", () => {
    expect(solution(-6)).toBe(-6);
    expect(solution(-2834)).toBe(-4382);
    expect(solution(-600)).toBe(-6);
  });
});
