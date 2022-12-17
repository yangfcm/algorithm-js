const {
  solution1,
  solution2,
  solution3,
} = require("../../stack_queue/largestRectangle");

describe("Test largestRectangle.js", () => {
  test("Solution should return the area of the largest rectangle", () => {
    expect(solution1([1, 2, 3, 4, 5])).toBe(9);
    expect(solution1([2, 1, 5, 6, 2, 3])).toBe(10);
    expect(solution1([11, 11, 10, 10, 10])).toBe(50);
    expect(solution1([1, 3, 5, 9, 11])).toBe(18);
  });

  test("Solution 2 should return the area of the largest rectangle", () => {
    expect(solution2([1, 2, 3, 4, 5])).toBe(9);
    expect(solution2([2, 1, 5, 6, 2, 3])).toBe(10);
    expect(solution2([11, 11, 10, 10, 10])).toBe(50);
    expect(solution2([1, 3, 5, 9, 11])).toBe(18);
  });

  test("Solution 3 should return the area of the largest rectangle", () => {
    expect(solution3([1, 2, 3, 4, 5])).toBe(9);
    expect(solution3([2, 1, 5, 6, 2, 3])).toBe(10);
    expect(solution3([11, 11, 10, 10, 10])).toBe(50);
    expect(solution3([1, 3, 5, 9, 11])).toBe(18);
  });
});
