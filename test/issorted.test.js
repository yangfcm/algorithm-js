const isSorted = require("../algo/issorted");

describe("Test issorted.js", () => {
  test("should function is defined", () => {
    expect(isSorted).toBeDefined();
  });

  test("array is sorted", () => {
    const sortedArray = [-Infinity, -5, 0, 3, 9];
    expect(isSorted(sortedArray)).toBeTruthy;
  });

  test("array is unsorted", () => {
    const unsorted = [3, 9, -3, 10];
    expect(isSorted(unsorted)).toBeFalsy;
  });
});
