const { solution1, solution2 } = require("../sockMerchant");

describe("Test sockMerchant.js", () => {
  test("solution1 can return correct pairs", () => {
    const testArr1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const testArr2 = [1, 2, 1, 2, 1, 3, 2];
    const testArr3 = [1, 2, 3, 4, 5, 6];
    expect(solution1(testArr1)).toBe(3);
    expect(solution1(testArr2)).toBe(2);
    expect(solution1(testArr3)).toBe(0);
  });

  test("solution2 can return correct pairs", () => {
    const testArr1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const testArr2 = [1, 2, 1, 2, 1, 3, 2];
    const testArr3 = [1, 2, 3, 4, 5, 6];
    expect(solution2(testArr1)).toBe(3);
    expect(solution2(testArr2)).toBe(2);
    expect(solution2(testArr3)).toBe(0);
  });
});
