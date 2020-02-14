const reduce = require("../reduce");

describe("Test js/reduce.js", () => {
  test("should function is defined", () => {
    expect(reduce).toBeDefined();
  });

  test("reduce function should work", () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
  });
});
