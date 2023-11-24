const findIndex = require("../findIndex");

describe("Test findIndex.js", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test("Return the index of the first element that satisfies the test function", () => {
    expect(findIndex(arr, (data) => data % 2 === 0)).toBe(1);
    expect(findIndex(arr, (data) => data % 2 !== 0)).toBe(0);
  });

  test("Return -1 if the element is not found", () => {
    expect(findIndex(arr, (data) => data % 10 === 0)).toBe(-1);
  });
});
