const binarySearch = require("../binarySearch");

describe("Test linear search", () => {
  const arr = [-5, -1, 0, 2, 12, 23, 38, 72, 91, 1001];

  it("binarySearch should be defined", () => {
    expect(binarySearch).toBeDefined();
  });

  it("should return the index if the element is found", () => {
    expect(binarySearch(arr, -5)).toBe(0);
    expect(binarySearch(arr, 1001)).toBe(arr.length - 1);
    expect(binarySearch(arr, 12)).toBe(4);
    expect(binarySearch(arr, 72)).toBe(7);
  });

  it("should return -1 if the element is not found", () => {
    expect(binarySearch(arr, 100)).toBe(-1);
  });
});
