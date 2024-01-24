const { solution } = require("../symmetricDiff");

describe("Test symmetricDiff.js", () => {
  test("solution should return correct result - case 1", () => {
    const actual = solution([1, 2, 3], [5, 2, 1, 4]);
    expect(actual).toEqual(expect.arrayContaining([3, 4, 5]));
    expect(actual.length).toBe(3);
  });

  test("solution should return correct result - case 2 (with duplicated numbers)", () => {
    const actual = solution([1, 2, 3, 3], [5, 2, 1, 4, 5]);
    expect(actual).toEqual(expect.arrayContaining([3, 4, 5]));
    expect(actual.length).toBe(3);
  });

  test("solution should return correct result - case 4 (more than 2 argument arrays)", () => {
    const actual = solution(
      [3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6],
      [1, 2, 3],
      [5, 3, 9, 8],
      [1]
    );
    expect(actual).toEqual(expect.arrayContaining([1, 2, 4, 5, 6, 7, 8, 9]));
    expect(actual.length).toBe(8);
  });

  test("solution should return correct result - case 4 (more than 2 argument arrays and duplicated numbers", () => {
    const actual = solution(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3]
    );
    expect(actual).toEqual(expect.arrayContaining([2, 3, 4, 6, 7]));
    expect(actual.length).toBe(5);
  });
});
