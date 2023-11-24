const findLastIndex = require("../findLastIndex");

describe("Test findLastIndex.js", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test("Return the index of the first element that satisfies the test function", () => {
    expect(findLastIndex(arr, (data) => data % 2 === 0)).toBe(7);
    expect(findLastIndex(arr, (data) => data % 2 !== 0)).toBe(8);
  });

  test("Return -1 if the element is not found", () => {
    expect(findLastIndex(arr, (data) => data % 10 === 0)).toBe(-1);
  });
});
