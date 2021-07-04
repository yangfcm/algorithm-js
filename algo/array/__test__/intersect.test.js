const intersect = require("../intersect");

describe("Test intersect.js", () => {
  test("intersect function is defined", () => {
    expect(intersect).toBeDefined();
  });

  test("Function can compute intersection correctly", () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    expect(intersect([1, 1, 1, -2, -2, 5, 8, 9], [1, 1, -2, 9, 10])).toEqual([
      1, 1, -2, 9,
    ]);
    expect(intersect([2, 3, 4], [5, 6, 7])).toEqual([]);
  });
});
