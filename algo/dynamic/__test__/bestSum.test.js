const { solution1, solution2, solution3 } = require("../bestSum");

describe("Test canSum.js", () => {
  test("solution1 function is defined", () => {
    expect(solution1).toBeDefined();
  });

  test("solution2 function is defined", () => {
    expect(solution2).toBeDefined();
  });

  test("solution1 can return the shortest sum", () => {
    expect(solution1(7, [2, 3])).toEqual([3, 2, 2]);
    expect(solution1(7, [5, 3, 4, 7])).toEqual([7]);
    expect(solution1(8, [2, 3, 5])).toEqual([5, 3]);
  });

  test("solution2 can return the shortest sum and handle big number", () => {
    expect(solution2(7, [2, 3])).toEqual([3, 2, 2]);
    expect(solution2(7, [5, 3, 4, 7])).toEqual([7]);
    expect(solution2(8, [2, 3, 5])).toEqual([5, 3]);
    expect(solution2(100, [2, 4, 5, 10, 25, 50])).toEqual([50, 50]);
  });

  test("solution3 can return the shortest sum and handle big number", () => {
    expect(solution3(7, [2, 3])).toEqual([2, 2, 3]);
    expect(solution3(7, [5, 3, 4, 7])).toEqual([7]);
    expect(solution3(8, [2, 3, 5])).toEqual([3, 5]);
    expect(solution3(100, [2, 4, 5, 10, 25, 50])).toEqual([50, 50]);
  });
});
