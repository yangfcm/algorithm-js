const { bubbleSort, selectionSort, mergeSort } = require("../sorting");

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
});
