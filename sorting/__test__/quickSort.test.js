const { quickSort } = require("../quickSort");

describe("Test quickSort.js", () => {
  let arr, sortedArr;

  beforeEach(() => {
    arr = [100, -40, 500, -124, 0, 21, 7];
    sortedArr = [-124, -40, 0, 7, 21, 100, 500];
  });

  test("Should return sorted array with quick sort.", () => {
    expect(quickSort(arr)).toEqual(sortedArr);
  });
});
