const { solution } = require("../stringCompression");

describe("Test stringCompression", () => {
  test("function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("should return compressed string", () => {
    expect(solution("aaaaaaaaaaaa")).toBe("a12");
    expect(solution("xxxxxxyyyxxzzzyz")).toBe("x6y3x2z3y1z1");
    expect(solution("aabcccccaaa")).toBe("a2b1c5a3");
  });

  test("should return original string if compressed string is not shorter", () => {
    expect(solution("abcdefg")).toBe("abcdefg");
    expect(solution("xxxxyxxzzzyz")).toBe("xxxxyxxzzzyz");
    expect(solution("xxyyz")).toBe("xxyyz");
  });
});
