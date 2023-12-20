const arrayAt = require("../arrayAt");

describe("Test arrayAt.js", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test("Return undefined if index is out of bound", () => {
    expect(arrayAt(arr, 9)).toBe(undefined);
    expect(arrayAt(arr, 100)).toBe(undefined);
    expect(arrayAt(arr, -10)).toBe(undefined);
  });

  test("Return correct value with positive index", () => {
    expect(arrayAt(arr, 0)).toBe(1);
    expect(arrayAt(arr, 4)).toBe(5);
    expect(arrayAt(arr, 8)).toBe(9);
  });

  test("Return correct value with negative index", () => {
    expect(arrayAt(arr, -1)).toBe(9);
    expect(arrayAt(arr, -6)).toBe(4);
  });
});
