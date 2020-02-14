const { twoSum1, twoSum2, twoSum3 } = require("../twoSum");

describe("Test leetcode/twoSum.js", () => {
  test("twoSum1, twoSum2 and twoSum3 functions defined", () => {
    expect(twoSum1).toBeDefined();
    expect(twoSum2).toBeDefined();
    expect(twoSum3).toBeDefined();
  });

  test("nums array of [2, 7, 11, 15, 99] and target of 9", () => {
    const nums = [2, 7, 11, 15, 99];
    const target = 9;
    expect(twoSum1(nums, target)).toEqual([0, 1]);
    expect(twoSum2(nums, target)).toEqual([0, 1]);
    expect(twoSum3(nums, target)).toEqual([0, 1]);
  });

  test("nums array of [2, 7, 11, 15, 99] and target of 9", () => {
    const nums = [2, 7, 11, 15, 99];
    const target = 110;
    expect(twoSum1(nums, target)).toEqual([2, 4]);
    expect(twoSum2(nums, target)).toEqual([2, 4]);
    expect(twoSum3(nums, target)).toEqual([2, 4]);
  });
});
