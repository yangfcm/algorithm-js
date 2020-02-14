const { rotateArray, rotateArray1 } = require("../rotateArray");

describe("Test rotateArray.js", () => {
  test("rotateArray function is defined", () => {
    expect(rotateArray).toBeDefined();
  });

  test("rotateArray1 function is defined", () => {
    expect(rotateArray1).toBeDefined();
  });

  test("Function can rotate array correctly", () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5,
      6,
      7,
      1,
      2,
      3,
      4
    ]);
    expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });

  test("Alternative solution can rotate array correctly", () => {
    expect(rotateArray1([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5,
      6,
      7,
      1,
      2,
      3,
      4
    ]);
    expect(rotateArray1([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });
});
