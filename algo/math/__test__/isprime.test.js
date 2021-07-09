const { solution } = require("../isprime");

describe("Test solution.js", () => {
  test("should function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("0 is not a prime", () => {
    expect(solution(0)).toBeFalsy;
  });

  test("1 is not a prime", () => {
    expect(solution(1)).toBeFalsy;
  });

  test("2 is not a prime", () => {
    expect(solution(2)).toBeFalsy;
  });

  test("3 is a prime", () => {
    expect(solution(3)).toBeTruthy;
  });

  test("17 is a prime", () => {
    expect(solution(17)).toBeTruthy;
  });

  test("10000 is not a prime", () => {
    expect(solution(10000)).toBeFalsy;
  });
});
