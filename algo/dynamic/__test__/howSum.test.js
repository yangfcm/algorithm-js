const { howSumSln1, howSumSln2 } = require("../howSum");

describe("Test canSum.js", () => {
  test("howSumSln1 function is defined", () => {
    expect(howSumSln1).toBeDefined();
  });

  test("howSumSln2 function is defined", () => {
    expect(howSumSln2).toBeDefined();
  });

  test("howSumSln1 can return correct value", () => {
    expect(howSumSln1(7, [2, 3])).toEqual([3, 2, 2]);
    expect(howSumSln1(7, [5, 3, 4, 7])).toEqual([4, 3]);
    expect(howSumSln1(7, [2, 4])).toBe(null);
    expect(howSumSln1(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
  });

  test("howSumSln2 can return correct value and handle big number", () => {
    expect(howSumSln2(7, [2, 3])).toEqual([3, 2, 2]);
    expect(howSumSln2(7, [5, 3, 4, 7])).toEqual([4, 3]);
    expect(howSumSln2(7, [2, 4])).toBe(null);
    expect(howSumSln2(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
    expect(howSumSln2(300, [7, 14])).toBe(null);
    expect(howSumSln2(300, [286, 14])).toEqual([14, 286]);
  });
});
