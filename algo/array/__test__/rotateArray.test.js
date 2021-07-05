const { solution1, solution2 } = require("../rotateArray");

describe("Test rotateArray.js", () => {
  test("rotateArray function is defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test("Function can rotate array correctly", () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7];
    solution1(arr1, 3);
    expect(arr1).toEqual([5, 6, 7, 1, 2, 3, 4]);

    const arr2 = [-1, -100, 3, 99];
    solution1(arr2, 2);
    expect(arr2).toEqual([3, 99, -1, -100]);
  });

  test("Alternative solution can rotate array correctly", () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7];
    solution2(arr1, 3);
    expect(arr1).toEqual([5, 6, 7, 1, 2, 3, 4]);

    const arr2 = [-1, -100, 3, 99];
    solution2(arr2, 2);
    expect(arr2).toEqual([3, 99, -1, -100]);
  });
});
