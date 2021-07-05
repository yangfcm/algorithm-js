const { solution1, solution2, solution3 } = require("../twoSum");

describe("Test twoSum.js", () => {
  test("solution1, solution2 and solution3 functions defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
    expect(solution3).toBeDefined();
  });

  test("nums array of [2, 7, 11, 15, 99] and target of 9", () => {
    const nums = [2, 7, 11, 15, 99];
    const target = 9;
    expect(solution1(nums, target)).toEqual([0, 1]);
    expect(solution2(nums, target)).toEqual([0, 1]);
    expect(solution3(nums, target)).toEqual([0, 1]);
  });

  test("nums array of [2, 7, 11, 15, 99] and target of 9", () => {
    const nums = [2, 7, 11, 15, 99];
    const target = 110;
    expect(solution1(nums, target)).toEqual([2, 4]);
    expect(solution2(nums, target)).toEqual([2, 4]);
    expect(solution3(nums, target)).toEqual([2, 4]);
  });
});
