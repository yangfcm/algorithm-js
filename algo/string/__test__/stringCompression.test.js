const stringCompression = require("../stringCompression");

describe("Test stringCompression", () => {
  test("function is defined", () => {
    expect(stringCompression).toBeDefined();
  });

  test("should return compressed string", () => {
    expect(stringCompression("aaaaaaaaaaaa")).toBe("a12");
    expect(stringCompression("xxxxxxyyyxxzzzyz")).toBe("x6y3x2z3y1z1");
    expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
  });

  test("should return original string if compressed string is not shorter", () => {
    expect(stringCompression("abcdefg")).toBe("abcdefg");
    expect(stringCompression("xxxxyxxzzzyz")).toBe("xxxxyxxzzzyz");
    expect(stringCompression("xxyyz")).toBe("xxyyz");
  });
});
