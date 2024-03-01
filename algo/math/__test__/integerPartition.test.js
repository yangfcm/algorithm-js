const { solution } = require("../integerPartition");

describe("Test integerPartition.js", () => {
  test("Should do interger partition correctly", () => {
    expect(solution(1)).toEqual([[1]]);
    expect(solution(2)).toEqual([[1, 1], [2]]);
    expect(solution(3)).toEqual([[1, 1, 1], [2, 1], [3]]);
    expect(solution(4)).toEqual([[1, 1, 1, 1], [2, 1, 1], [2, 2], [3, 1], [4]]);
    expect(solution(4)).toEqual([[1, 1, 1, 1], [2, 1, 1], [2, 2], [3, 1], [4]]);
    expect(solution(5)).toEqual([
      [1, 1, 1, 1, 1],
      [2, 1, 1, 1],
      [2, 2, 1],
      [3, 1, 1],
      [3, 2],
      [4, 1],
      [5],
    ]);
    expect(solution(6)).toEqual([
      [1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1],
      [2, 2, 1, 1],
      [2, 2, 2],
      [3, 1, 1, 1],
      [3, 2, 1],
      [3, 3],
      [4, 1, 1],
      [4, 2],
      [5, 1],
      [6],
    ]);
    expect(solution(7)).toEqual([
      [1, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1],
      [2, 2, 1, 1, 1],
      [2, 2, 2, 1],
      [3, 1, 1, 1, 1],
      [3, 2, 1, 1],
      [3, 2, 2],
      [3, 3, 1],
      [4, 1, 1, 1],
      [4, 2, 1],
      [4, 3],
      [5, 1, 1],
      [5, 2],
      [6, 1],
      [7],
    ]);
  });
});
