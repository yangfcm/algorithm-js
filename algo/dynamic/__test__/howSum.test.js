const { solution1, solution2, solution3 } = require("../howSum");

describe("Test canSum.js", () => {
  test("solution1 function is defined", () => {
    expect(solution1).toBeDefined();
  });

  test("solution2 function is defined", () => {
    expect(solution2).toBeDefined();
  });

  test("solution1 can return correct value", () => {
    expect(solution1(7, [2, 3])).toEqual([3, 2, 2]);
    expect(solution1(7, [5, 3, 4, 7])).toEqual([4, 3]);
    expect(solution1(7, [2, 4])).toBe(null);
    expect(solution1(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
  });

  test("solution2 can return correct value and handle big number", () => {
    expect(solution2(7, [2, 3])).toEqual([3, 2, 2]);
    expect(solution2(7, [5, 3, 4, 7])).toEqual([4, 3]);
    expect(solution2(7, [2, 4])).toBe(null);
    expect(solution2(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
    expect(solution2(300, [7, 14])).toBe(null);
    expect(solution2(300, [286, 14])).toEqual([14, 286]);
  });

  test("solution3 can return correct value and handle big number", () => {
    expect(solution3(7, [2, 3])).toEqual([3, 2, 2]);
    expect(solution3(7, [5, 3, 4, 7])).toEqual([4, 3]);
    expect(solution3(7, [2, 4])).toBe(null);
    expect(solution3(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
    expect(solution3(300, [7, 14])).toBe(null);
    expect(solution3(300, [286, 14])).toEqual([286, 14]);
  });
});
