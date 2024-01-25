const { solution } = require("../fiboEvenSum");

describe("Test fiboEvenSum.js", () => {
  test("should return the correct sum", () => {
    expect(solution(1)).toBe(0);
    expect(solution(2)).toBe(2);
    expect(solution(3)).toBe(2);
    expect(solution(8)).toBe(10);
    expect(solution(10)).toBe(10);
    expect(solution(34)).toBe(44);
    expect(solution(60)).toBe(44);
    expect(solution(1000)).toBe(798);
    expect(solution(100000)).toBe(60696);
  });
});
