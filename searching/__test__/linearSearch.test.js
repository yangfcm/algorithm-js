const linearSearch = require("../linearSearch");

describe("Test linear search", () => {
  const arr1 = [10, 20, 80, 30, 60, 50, 11, 100, 130, 170];
  const arr2 = ["a", "d", "f", "e", "z"];

  it("linearSearch should be defined", () => {
    expect(linearSearch).toBeDefined();
  });

  it("should return the index if the element is found", () => {
    expect(linearSearch(arr1, 10)).toBe(0);
    expect(linearSearch(arr1, 170)).toBe(arr1.length - 1);
    expect(linearSearch(arr1, 30)).toBe(3);

    expect(linearSearch(arr2, "a")).toBe(0);
    expect(linearSearch(arr2, "z")).toBe(4);
    expect(linearSearch(arr2, "f")).toBe(2);
  });

  it("should return -1 if the element is not found", () => {
    expect(linearSearch(arr1, -5)).toBe(-1);
    expect(linearSearch(arr2, "A")).toBe(-1);
  });
});
