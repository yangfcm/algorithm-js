const { solution } = require("../moveZeroes");

describe("Test moveZeroes.js", () => {
  test("moveZeroes function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("Function can move zeroes as expected", () => {
    const arr1 = [0, 1, 0, 3, 12];
    solution(arr1);
    expect(arr1).toEqual([1, 3, 12, 0, 0]);

    const arr2 = [-5, 0, 0, 3, 0, 0, 0, 0];
    solution(arr2);
    expect(arr2).toEqual([-5, 3, 0, 0, 0, 0, 0, 0]);
  });
});
