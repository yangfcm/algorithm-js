const { solution } = require("../issorted");

describe("Test issorted.js", () => {
  test("solution function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("array is sorted", () => {
    const sortedArray = [-Infinity, -5, 0, 3, 9];
    expect(solution(sortedArray)).toBeTruthy;
  });

  test("array is unsorted", () => {
    const unsorted = [3, 9, -3, 10];
    expect(solution(unsorted)).toBeFalsy;
  });
});
