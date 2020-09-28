const exponentialSearch = require("../exponentialSearch");

describe("Test interpolation search", () => {
  const arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
  it("interpolationSearch should be defined", () => {
    expect(exponentialSearch).toBeDefined();
  });

  it("should return the index if the element is found", () => {
    expect(exponentialSearch(arr, 10)).toBe(0);
    expect(exponentialSearch(arr, 16)).toBe(3);
    expect(exponentialSearch(arr, 23)).toBe(9);
    expect(exponentialSearch(arr, 42)).toBe(13);
    expect(exponentialSearch(arr, 47)).toBe(14);
  });

  it("should return -1 if the element is not found", () => {
    expect(exponentialSearch(arr, 0)).toBe(-1);
    expect(exponentialSearch(arr, 5.5)).toBe(-1);
    expect(exponentialSearch(arr, 99)).toBe(-1);
  });
});
