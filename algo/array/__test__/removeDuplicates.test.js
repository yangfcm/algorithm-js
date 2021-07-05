const { solution } = require("../removeDuplicates");

describe("Test removeDuplicates.js", () => {
  test("removeDuplicates function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("Function can remove duplicates", () => {
    const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(solution(arr1)).toBe(5);
    expect(arr1).toEqual([0, 1, 2, 3, 4]);

    const arr2 = [-5, -1, -1, 0, 2, 2, 4, 5, 5];
    expect(solution(arr2)).toBe(6);
    expect(arr2).toEqual([-5, -1, 0, 2, 4, 5]);

    const arr3 = [3, 3, 3, 3, 0, 0, -2, -2];
    expect(solution(arr3)).toBe(3);
    expect(arr3).toEqual([3, 0, -2]);
  });
});
