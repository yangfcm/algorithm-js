const interpolationSearch = require("../interpolationSearch");

describe("Test interpolation search", () => {
  const arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
  it("interpolationSearch should be defined", () => {
    expect(interpolationSearch).toBeDefined();
  });

  it("should return the index if the element is found", () => {
    expect(interpolationSearch(arr, 10)).toBe(0);
    expect(interpolationSearch(arr, 16)).toBe(3);
    expect(interpolationSearch(arr, 23)).toBe(9);
    expect(interpolationSearch(arr, 42)).toBe(13);
    expect(interpolationSearch(arr, 47)).toBe(14);
  });

  it("should return -1 if the element is not found", () => {
    expect(interpolationSearch(arr, 0)).toBe(-1);
    expect(interpolationSearch(arr, 5.5)).toBe(-1);
    expect(interpolationSearch(arr, 99)).toBe(-1);
  });
});
