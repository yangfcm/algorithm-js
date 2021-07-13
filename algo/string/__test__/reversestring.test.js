const { solution1, solution2, solution3 } = require("../reversestring");

describe("Test reversestring.js", () => {
  test("solution function exists", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
    expect(solution3).toBeDefined();
  });

  test("Reverse a string successfully", () => {
    expect(solution1("abcd")).toBe("dcba");
    expect(solution2("abcd")).toBe("dcba");
    expect(solution3("abcd")).toBe("dcba");
  });

  test("Reverse a string (with spaces) successfully", () => {
    expect(solution1("  my test ")).toBe(" tset ym  ");
    expect(solution2("  my test ")).toBe(" tset ym  ");
    expect(solution3("  my test ")).toBe(" tset ym  ");
  });
});
