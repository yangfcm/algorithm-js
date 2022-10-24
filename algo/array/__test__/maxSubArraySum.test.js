const { solution1, solution2, solution3 } = require("../maxSubArraySum");

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const expected1 = 6;
const arr2 = [5, 4, -1, 7, 8];
const expected2 = 23;
const arr3 = [
  38, -9, 23, -13, 9, 5, 12, -8, 90, -32, 53, -85, 34, 59, -12, -93,
];
const expected3 = 176;
const arr4 = [-9, -3, 5, -10, 3];
const expected4 = 5;

describe("Test maxSubArraySum.js", () => {
  test("Solution 1 should return max sum of subarray", () => {
    expect(solution1(arr1)).toBe(expected1);
    expect(solution1(arr2)).toBe(expected2);
    expect(solution1(arr3)).toBe(expected3);
    expect(solution1(arr4)).toBe(expected4);
  });

  test("Solution 2 should return max sum of subarray", () => {
    expect(solution2(arr1)).toBe(expected1);
    expect(solution2(arr2)).toBe(expected2);
    expect(solution2(arr3)).toBe(expected3);
    expect(solution2(arr4)).toBe(expected4);
  });

  test("Solution 3 should return max sum of subarray", () => {
    expect(solution3(arr1)).toBe(expected1);
    expect(solution3(arr2)).toBe(expected2);
    expect(solution3(arr3)).toBe(expected3);
    expect(solution3(arr4)).toBe(expected4);
  });
});
