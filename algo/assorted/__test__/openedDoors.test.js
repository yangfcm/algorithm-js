const { solution } = require("../openedDoors");

describe("Test openedDoors", () => {
  test("should be able to return the opened doors", () => {
    expect(solution(1)).toEqual([1]);
    expect(solution(2)).toEqual([1]);
    expect(solution(3)).toEqual([1]);
    expect(solution(5)).toEqual([1, 4]);
    expect(solution(10)).toEqual([1, 4, 9]);
    expect(solution(25)).toEqual([1, 4, 9, 16, 25]);
    expect(solution(100)).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
  });
});
