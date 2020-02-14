const reverseString = require("../reversestring");

describe("Test reversestring.js", () => {
  test("Reverse function exists", () => {
    expect(reverseString).toBeDefined();
  });

  test("Reverse a string successfully", () => {
    expect(reverseString("abcd")).toBe("dcba");
  });

  test("Reverse a string (with spaces) successfully", () => {
    expect(reverseString("  my test ")).toBe(" tset ym  ");
  });
});
