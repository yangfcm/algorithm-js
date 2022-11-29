const { solution } = require("../permutations");

describe("Test permutations.js", () => {
  test("Test case 1", () => {
    const result = solution([1, 2, 3]);
    expect(result.length).toBe(6);
    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test("Test case 2", () => {
    const result = solution([1, 2, 3, 4]);
    expect(result.length).toBe(24);
    expect(result).toEqual([
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 1, 2, 3],
      [4, 1, 3, 2],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [4, 3, 1, 2],
      [4, 3, 2, 1],
    ]);
  });
});
