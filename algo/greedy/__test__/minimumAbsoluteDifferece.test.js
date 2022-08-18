const { solution } = require("../minimumAbsoluteDifference");

describe("Test minimumAbsoluteDifference.js", () => {
  test("Find out the correct minimum absolute difference.", () => {
    expect(solution([3, -7, 0])).toBe(3);
    expect(solution([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])).toBe(1);
    expect(solution([1, -3, 71, 68, 17])).toBe(3);
  });
});
