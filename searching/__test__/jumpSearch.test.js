const jumpSearch = require("../jumpSearch");

describe("Test jump search", () => {
  const arr1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("jumpSearch should be defined", () => {
    expect(jumpSearch).toBeDefined();
  });

  it("should return the index if element is found", () => {
    expect(jumpSearch(arr1, 0)).toBe(0);
    expect(jumpSearch(arr1, 1)).toBe(1);
    expect(jumpSearch(arr1, 55)).toBe(10);
    expect(jumpSearch(arr1, 610)).toBe(15);

    expect(jumpSearch(arr2, 1)).toBe(0);
    expect(jumpSearch(arr2, 5)).toBe(4);
    expect(jumpSearch(arr2, 9)).toBe(8);
  });

  it("should return -1 if the element is not found", () => {
    expect(jumpSearch(arr1, -1)).toBe(-1);
    expect(jumpSearch(arr1, 8.8)).toBe(-1);
    expect(jumpSearch(arr1, 1000)).toBe(-1);

    expect(jumpSearch(arr2, -1)).toBe(-1);
    expect(jumpSearch(arr2, 8.8)).toBe(-1);
    expect(jumpSearch(arr2, 1000)).toBe(-1);
  });
});
