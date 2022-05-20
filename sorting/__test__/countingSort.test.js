const countingSort = require("../countingSort");

describe("Test countingSort.js", () => {
  const arr1 = [4, 20, 1, 1, 12, 6, 24, 12, 8, 9];
  const expectedSortedArr1 = [1, 1, 4, 6, 8, 9, 12, 12, 20, 24];

  const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const expectedSortedArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test("Count sort an array", () => {
    expect(countingSort(arr1)).toEqual(expectedSortedArr1);
    expect(countingSort(arr2)).toEqual(expectedSortedArr2);
  });
});
