const { solution1, solution2, solution3 } = require("../canSum");

describe("Test canSum.js", () => {
  test("solution1 function is defined", () => {
    expect(solution1).toBeDefined();
  });

  test("solution2 function is defined", () => {
    expect(solution2).toBeDefined();
  });

  test("solution1 can return correct value", () => {
    expect(solution1(7, [2, 3])).toBeTruthy();
    expect(solution1(7, [5, 3, 4, 7])).toBeTruthy();
    expect(solution1(7, [2, 4])).toBeFalsy();
    expect(solution1(8, [2, 3, 5])).toBeTruthy();
  });

  test("solution2 can return correct value and handle big number", () => {
    expect(solution2(7, [2, 3])).toBeTruthy();
    expect(solution2(7, [5, 3, 4, 7])).toBeTruthy();
    expect(solution2(7, [2, 4])).toBeFalsy();
    expect(solution2(8, [2, 3, 5])).toBeTruthy();
    expect(solution2(300, [7, 14])).toBeFalsy();
    expect(solution2(300, [6, 14])).toBeTruthy();
  });

  test("solution3 can return correct value and handle big number", () => {
    expect(solution3(7, [2, 3])).toBeTruthy();
    expect(solution3(7, [5, 3, 4, 7])).toBeTruthy();
    expect(solution3(7, [2, 4])).toBeFalsy();
    expect(solution3(8, [2, 3, 5])).toBeTruthy();
    expect(solution3(300, [7, 14])).toBeFalsy();
    expect(solution3(300, [6, 14])).toBeTruthy();
  });
});
