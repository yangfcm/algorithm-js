const { solution, MAX_INTEGER, MIN_INTEGER } = require("../stringToInteger");

describe("Test stringToInteger.js", () => {
  test("should convert the correct integer from string", () => {
    expect(solution("42")).toBe(42);
    expect(solution("-42")).toBe(-42);
    expect(solution("4193 with words")).toBe(4193);
    expect(solution("          ")).toBe(0);
    expect(solution("     42 abc 43  ")).toBe(42);
    expect(solution("+123")).toBe(123);
    expect(solution("++123")).toBe(0);
  });

  test("should return max integer when the converted number is more than max integer", () => {
    const MAX_NUMBER_STR = "2147483647"; // 2^31 - 1 = 2147483647
    expect(solution(MAX_NUMBER_STR)).toBe(MAX_INTEGER);

    const BIGGER_THAN_MAX_NUMBER = "2147483648";
    expect(solution(BIGGER_THAN_MAX_NUMBER)).toBe(MAX_INTEGER);

    const SMALLER_THAN_MAX_NUMBER = "2147483646";
    expect(solution(SMALLER_THAN_MAX_NUMBER)).toBe(2147483646);
  });

  test("should return min integer when the converted number is less than min integer", () => {
    const MIN_NUMBER_STR = "-2147483648"; // -2^31 = -2147483648
    expect(solution(MIN_NUMBER_STR)).toBe(MIN_INTEGER);

    const SMALLER_THAN_MIN_NUMBER = "-2147483649";
    expect(solution(SMALLER_THAN_MIN_NUMBER)).toBe(MIN_INTEGER);

    const BIGGER_THAN_MIN_NUMBER = "-2147483647";
    expect(solution(BIGGER_THAN_MIN_NUMBER)).toBe(-2147483647);
  });
});
