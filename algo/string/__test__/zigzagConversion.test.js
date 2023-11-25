const { solution } = require("../zigzagConversion");

describe("Test zigzagConversion.js", () => {
  test("should return the correct string after conversion", () => {
    expect(solution("abcdefg", 1)).toBe("abcdefg");
    expect(solution("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    expect(solution("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });
});
