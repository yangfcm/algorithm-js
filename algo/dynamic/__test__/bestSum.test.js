const { bestSumSln1, bestSumSln2 } = require("../bestSum");

describe("Test canSum.js", () => {
  test("bestSumSln1 function is defined", () => {
    expect(bestSumSln1).toBeDefined();
  });

  test("bestSumSln2 function is defined", () => {
    expect(bestSumSln2).toBeDefined();
  });

  test("bestSumSln1 can return the shortest sum", () => {
    expect(bestSumSln1(7, [2, 3])).toEqual([3, 2, 2]);
    expect(bestSumSln1(7, [5, 3, 4, 7])).toEqual([7]);
    expect(bestSumSln1(8, [2, 3, 5])).toEqual([5, 3]);
  });

  test("bestSumSln2 can return the shortest sum and handle big number", () => {
    expect(bestSumSln2(7, [2, 3])).toEqual([3, 2, 2]);
    expect(bestSumSln2(7, [5, 3, 4, 7])).toEqual([7]);
    expect(bestSumSln2(8, [2, 3, 5])).toEqual([5, 3]);
    expect(bestSumSln2(100, [2, 4, 5, 10, 25, 50])).toEqual([50, 50]);
  });
});
