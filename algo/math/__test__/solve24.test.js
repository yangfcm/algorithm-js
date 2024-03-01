const { solution } = require("../solve24");

describe("Test solve24", () => {
  test("should throw error when given invalid arguments", () => {
    expect(() => solution("abcd")).toThrow("Invalid argument");
    expect(() => solution(1234)).toThrow("Invalid argument");
    expect(() => solution({ problem: "1234" })).toThrow("Invalid argument");
    expect(() => solution("12345")).toThrow("Invalid argument");
    expect(() => solution("0394")).toThrow("Invalid argument");
  });

  test("Can return a string whose value is evaluated as 24", () => {
    const result1 = solution("4878");
    expect(eval(result1)).toBe(24);
    expect(result1).toBe("(4-8+7)*8");

    const result2 = solution("1234");
    expect(result2).toBe("(1+2+3)*4");
    expect(eval(result2)).toBe(24);

    const result3 = solution("6789");
    expect(result3).toBe("6*8/(9-7)");
    expect(eval(result3)).toBe(24);

    const result4 = solution("1127");
    expect(result4).toBe("(1+2)*(1+7)");
    expect(eval(result4)).toBe(24);
  });

  test("Can solve some tricky 24 problems", () => {
    const result1 = solution("3388");
    expect(result1).toBe("8/(3-8/3)");

    const result2 = solution("5551");
    expect(result2).toBe("5*(5-1/5)");
  });

  test("Should return empty string if there's no solution to 24", () => {
    expect(solution("9999")).toBe("");
    expect(solution("8787")).toBe("");
    expect(solution("1111")).toBe("");
  });
});
