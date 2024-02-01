const { mergeSort } = require("../mergeSort");

describe("Test mergeSort.js", () => {
  let arr, sortedArr;

  beforeEach(() => {
    arr = [100, -40, 500, -124, 0, 21, 7];
    sortedArr = [-124, -40, 0, 7, 21, 100, 500];
  });

  test("Should return sorted array with merge sort.", () => {
    expect(mergeSort(arr)).toEqual(sortedArr);
  });
});
