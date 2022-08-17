const validString = require("../validString");

describe("Test validString.js", () => {
  test("The strings are checked as valid(true).", () => {
    expect(validString("abcd")).toBe(true);
    expect(validString("abcdefghhgfedecba")).toBe(true);
    expect(validString("aaabbbccccddd")).toBe(true);
  });

  test("The strings are checked as invalid(false).", () => {
    expect(validString("aabbcd")).toBe(false);
    expect(validString("aabbccddeefghi")).toBe(false);
    expect(validString("aaabbbbcccdddd")).toBe(false);
  });
});
