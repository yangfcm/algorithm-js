const { solution } = require("../tripleSum");

describe("Test tripleSum.js", () => {
  const test1 = {
    a: [1, 3, 5],
    b: [2, 3],
    c: [1, 2, 3],
    expected: 8,
  };
  const test2 = {
    a: [1, 4, 5],
    b: [2, 3, 3],
    c: [1, 2, 3],
    expected: 5,
  };
  const test3 = {
    a: [1, 3, 5, 7],
    b: [5, 7, 9],
    c: [7, 9, 11, 13],
    expected: 12,
  };
  test("should return correct number of triplets.", () => {
    expect(solution(test1.a, test1.b, test1.c)).toBe(test1.expected);
    expect(solution(test2.a, test2.b, test2.c)).toBe(test2.expected);
    expect(solution(test3.a, test3.b, test3.c)).toBe(test3.expected);
  });
});
