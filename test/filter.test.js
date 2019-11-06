const filter = require("../js/filter");

describe("Test js/filter.js", () => {
  test("should function is defined", () => {
    expect(filter).toBeDefined();
  });

  test("filter function should work", () => {
    expect(filter([1, 2, 3, 4], n => n < 3)).toEqual([1, 2]);
  });
});
