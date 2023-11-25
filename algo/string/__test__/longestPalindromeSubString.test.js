const { solution } = require("../longestPalindromeSubstring");

describe("Test longestPalindromeSubstring.js", () => {
  test("return the longest palindrome substring", () => {
    expect(solution("a")).toBe("a");
    expect(solution("ab")).toBe("a");
    expect(solution("abbc")).toBe("bb");
    expect(solution("ccc")).toBe("ccc");
    expect(solution("bbrctaatcrbb")).toBe("bbrctaatcrbb");
    expect(solution("bcrczaatcrcb")).toBe("crc");
    expect(solution("bcrazaatarcb")).toBe("aza");
    expect(solution("edbzccabde")).toBe("cc");
  });
});
