const selectionSort = require("../selectionSort");

describe("Test selectionSort.js", () => {
  let arr, sortedArr;

  beforeEach(() => {
    arr = [100, -40, 500, -124, 0, 21, 7];
    sortedArr = [-124, -40, 0, 7, 21, 100, 500];
  });

  test("Bubble sort an array", () => {
    selectionSort(arr);
    expect(arr).toEqual(sortedArr);
  });
});
