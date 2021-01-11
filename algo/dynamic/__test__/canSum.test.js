const { canSumSln1, canSumSln2, canSumSln3 } = require("../canSum");

describe("Test canSum.js", () => {
  test("canSumSln1 function is defined", () => {
    expect(canSumSln1).toBeDefined();
  });

  test("canSumSln2 function is defined", () => {
    expect(canSumSln2).toBeDefined();
  });

  test("canSumSln1 can return correct value", () => {
    expect(canSumSln1(7, [2, 3])).toBeTruthy();
    expect(canSumSln1(7, [5, 3, 4, 7])).toBeTruthy();
    expect(canSumSln1(7, [2, 4])).toBeFalsy();
    expect(canSumSln1(8, [2, 3, 5])).toBeTruthy();
  });

  test("canSumSln2 can return correct value and handle big number", () => {
    expect(canSumSln2(7, [2, 3])).toBeTruthy();
    expect(canSumSln2(7, [5, 3, 4, 7])).toBeTruthy();
    expect(canSumSln2(7, [2, 4])).toBeFalsy();
    expect(canSumSln2(8, [2, 3, 5])).toBeTruthy();
    expect(canSumSln2(300, [7, 14])).toBeFalsy();
    expect(canSumSln2(300, [6, 14])).toBeTruthy();
  });

  test("canSumSln3 can return correct value and handle big number", () => {
    expect(canSumSln3(7, [2, 3])).toBeTruthy();
    expect(canSumSln3(7, [5, 3, 4, 7])).toBeTruthy();
    expect(canSumSln3(7, [2, 4])).toBeFalsy();
    expect(canSumSln3(8, [2, 3, 5])).toBeTruthy();
    expect(canSumSln3(300, [7, 14])).toBeFalsy();
    expect(canSumSln3(300, [6, 14])).toBeTruthy();
  });
});
