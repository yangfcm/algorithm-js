const {
  bubbleSort,
  selectionSort,
  mergeSort,
  countingSort,
} = require("../sorting");

describe("Test sorting.js", () => {
  function getArray() {
    return [100, -40, 500, -124, 0, 21, 7];
  }

  function getSortedArray() {
    return [-124, -40, 0, 7, 21, 100, 500];
  }

  test("Bubble sort an array", () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });

  test("Selection sort an array", () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });

  test("Merge sort an array", () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });

  test("Count sort an array", () => {
    const arr = [4, 20, 1, 1, 12, 6, 24, 12, 8, 9];
    sortedArr = [1, 1, 4, 6, 8, 9, 12, 12, 20, 24];
    expect(countingSort(arr)).toEqual(sortedArr);
  });
});
