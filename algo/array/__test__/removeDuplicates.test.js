const removeDuplicates = require("../removeDuplicates");

describe("Test removeDuplicates.js", () => {
  test("removeDuplicates function is defined", () => {
    expect(removeDuplicates).toBeDefined();
  });

  test("Function can remove duplicates", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
    expect(removeDuplicates([-5, -1, -1, 0, 2, 2, 4, 5, 5])).toBe(6);
    expect(removeDuplicates([3, 3, 3, 3, 0, 0, -2, -2])).toBe(3);
  });
});
